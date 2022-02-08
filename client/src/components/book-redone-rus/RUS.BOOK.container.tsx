import React, { useState, useEffect, useRef } from 'react'

import {
  capitalsRUS,
  KEYSRUS,
  notCapitalsRUS,
} from './components/strings/strings'

import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useKeyPress } from '../../utils/useKeyPress'

import { PerspectiveController } from '../PerspectiveController'
import useLocalStorage from '../../hooks/useLocalStorage'
import { BOOKpointer } from '../book-redone/components/BOOK.pointer'
import { BOOKstats } from '../book-redone/components/BOOK.stats'
import { moveString } from '../book-redone/components/strings/stringFormation'
import { RUSBOOKBook } from './components/RUS.BOOK.book'
import { BOOKLayout } from '../book-redone/components/BOOK.layout'
import { BOOKfailures } from '../book-redone/components/BOOK.failures'
import { RUSBOOKstring } from './components/strings/RUS.BOOK.string'
import { BOOKbuttons } from '../book-redone/components/BOOK.buttons'

import { asya as letter1 } from './../../static/letters/rus/asya'
import { gogol as letter2 } from './../../static/letters/rus/gogol'
import { karamazovbrothers as letter3 } from './../../static/letters/rus/karamazovbrothers'
import { robinsonR as letter4 } from './../../static/letters/rus/robinsonRus'
import { don as letter5 } from './../../static/letters/rus/don'
import { oblomov as letter6 } from './../../static/letters/rus/oblomov'
import { karenina as letter7 } from './../../static/letters/rus/karenina'
import { masterimargarita as letter8 } from './../../static/letters/rus/masterimargarita'

interface IProps {
  demo?: boolean
}

export const RUSBOOKContainer: React.FC<IProps> = ({ demo = false }) => {
  // const startingLetter = Array.from({ length: 500 }, () => 'A').join('') /////////////////////////////////

  const [currentString, setCurrentString] = useState(
    [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8][
      Math.floor(Math.random() * 8)
    ]
  )

  const [STRING, setSTRING] = useLocalStorage('BK-STRING', currentString)

  useEffect(() => {
    setSTRING(currentString)
  }, [])

  function handleStringErase(STR: string): void {
    setCurrentString(STR)
    setSTRING(STR)
    successAndFailedTypes.current = 0
    failedTypesIndexes.current = []
    failureTypes.current = 0
  }

  function handleStringNoErase(STR: string): void {
    setCurrentString(STR)
    setSTRING(moveString(STR, successAndFailedTypes.current))
  }

  const [keyDown, setKeyDown] = useState('')

  const successAndFailedTypes = useRef(0)
  const failureTypes = useRef(0)
  const failureInARow = useRef(0)
  const streakRow = useRef(0)

  const failedTypeStatus = useRef(false)
  const escapeFailedTypeStatus = useRef(false)
  const failedTypesIndexes = useRef<number[]>([])

  const historyOfFailed = useRef<
    {
      desired: string
      pressed: string
      previous: string
    }[]
  >([])

  const lastKey = useRef('')
  const prelastKey = useRef('')

  const [hightlighter, setHighlighter] = useLocalStorage('highlight', true)

  const caps = useKeyPress('CapsLock')
  const shift = useKeyPress('Shift')

  const [capsKey, setCapsKey] = useState(false)
  const [shiftKey, setShiftKey] = useState(false)

  useDidMountEffect(() => {
    setCapsKey(caps)
  }, [caps])

  useDidMountEffect(() => {
    setShiftKey(shift)
  }, [shift])

  useDidMountEffect(() => {
    if (!caps && !shift && capitalsRUS.includes(keyDown)) {
      setCapsKey(true)
    }
    if (caps && notCapitalsRUS.includes(keyDown)) {
      setCapsKey(false)
    }
  }, [keyDown])

  const capsError = useRef(0)

  useEffect(() => {
    prelastKey.current = lastKey.current
  }, [keyDown])

  const handleEvent = (event: KeyboardEvent) => {
    const { key } = event
    console.log(
      `key: ${key} , STRING[0]: ${STRING[0]}, is===? ${
        key === STRING[0] ? `yes` : `no`
      }`
    )

    if (KEYSRUS.includes(key)) {
      setKeyDown(key)
      setKeyDown('')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEvent)
    return () => {
      window.removeEventListener('keydown', handleEvent)
    }
  }, [])

  useEffect(() => {
    if (demo) return
    //   return console.log(`demo true`)
    // } else {
    //   return console.log(`demo false`)
    // }

    if (keyDown === STRING[0]) {
      SUCCESS()
    } else if (keyDown !== STRING[0] && KEYSRUS.includes(keyDown)) {
      FAILURE()
      if (keyDown.toLowerCase() === STRING[0].toLowerCase() && capsKey) {
        capsError.current++
      }
    }

    if (keyDown === ' ') {
      lastKey.current = 'Space'
    } else if (KEYSRUS.includes(keyDown)) {
      lastKey.current = keyDown
    }
  }, [keyDown])

  function SUCCESS(): void {
    setSTRING((str) => str.substring(1) + str[0])
    successAndFailedTypes.current++
    failedTypesIndexes.current = failedTypesIndexes.current.map((el) => el + 1)
    // .filter((el) => el <= 245)
    if (failedTypeStatus.current && !escapeFailedTypeStatus.current) {
      failedTypesIndexes.current = [...failedTypesIndexes.current, 1]
    }
    failedTypeStatus.current = false
    if (escapeFailedTypeStatus.current) {
      escapeFailedTypeStatus.current = false
    }
    if (failureInARow.current !== 0) {
      failureInARow.current = 0
    }
  }

  function FAILURE(): void {
    if (streakRow.current === 0 && keyDown === STRING[1]) {
      streakRow.current++
    } else if (streakRow.current === 1 && keyDown === STRING[2]) {
      streakRow.current++
    } else if (streakRow.current === 2 && keyDown === STRING[3]) {
      SUCCESS()
      SUCCESS()
      SUCCESS()
      SUCCESS()
      escapeFailedTypeStatus.current = true
      failureTypes.current--
      streakRow.current = 0
    } else {
      streakRow.current = 0
    }

    if (failureInARow.current === 0) {
      failureInARow.current = 1
      failureTypes.current++
      historyOfFailed.current = [
        ...historyOfFailed.current,
        {
          desired: STRING[0] === ' ' ? 'Space' : STRING[0],
          pressed: keyDown === ' ' ? 'Space' : keyDown,
          previous: prelastKey.current,
        },
      ]
      // console.log(historyOfFailed.current)

      failedTypeStatus.current = true
    }
  }
  const [reseting, setReseting] = useState(0)

  const handleReset = () => {
    successAndFailedTypes.current = 0
    failureTypes.current = 0
    failureInARow.current = 0
    streakRow.current = 0

    failedTypeStatus.current = false
    escapeFailedTypeStatus.current = false
    failedTypesIndexes.current = []

    historyOfFailed.current = []
    setSTRING(currentString)
    setReseting((prev) => prev + 1)
  }

  const [punctuation, setPunctuation] = useLocalStorage(`BK-punctuation`, true)
  const [caseSensitivity, setCaseSensetivity] = useLocalStorage(
    `BK-punctuation`,
    true
  )

  const renders = useRef<number>(0)

  useEffect(() => {
    renders.current++
  })

  const [running, setRunning] = useState(false)

  useDidMountEffect(() => {
    setRunning(true)

    let id = setTimeout(() => setRunning(false), 2000)

    return () => clearTimeout(id)
  }, [successAndFailedTypes.current])

  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }
  // const { isEng } = useLanguage()

  const handleTest = () => {
    // setSTRING((str) => str.substring(1) + str[0])
    // SUCCESS()
  }

  const [fontW, setFontW] = useLocalStorage(`BC-fontWeight`, true)
  const handleFW = () => setFontW((prev) => !prev)

  return (
    <div
      style={{
        marginTop: perspective[1],
        marginBottom: perspective[1],
        transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
      }}
    >
      <div
        className={`borde order-black w-f  font-courier flex ${`font-CourierC`}
       flex-col items-center justify-center opacity-${
         //  appear || demo || 0
         100
       } duration-00 transition ease-in-out`}
      >
        <BOOKbuttons
          show={!demo}
          highlighter={hightlighter}
          setHighlighter={setHighlighter}
          punctuation={punctuation}
          caseSensitivity={caseSensitivity}
          setCaseSensetivity={setCaseSensetivity}
          setPunctuation={setPunctuation}
          caps={capsKey}
          capsError={capsError.current}
          running={running}
          handleReset={handleReset}
          handleTest={handleTest}
          fontW={fontW}
          handleFW={handleFW}
        />
        <div className={`z-60`}>
          <BOOKstats
            show={!demo}
            overall={successAndFailedTypes.current}
            failedTypesIndexes={failedTypesIndexes.current}
            reseting={reseting}
          />
        </div>
        <div className="1k:visible w-f  borde invisible flex flex-col items-center justify-center border-black">
          <div
            className={`1k:visible bordr  invisible my-10
        flex flex-col items-center justify-center border-red-900`}
          >
            <RUSBOOKBook STRING={STRING} fontW={fontW} />
            <BOOKLayout STRING={STRING} highlighter={hightlighter} />
            <BOOKfailures failedTypesIndexes={failedTypesIndexes.current} />
            <BOOKpointer overall={successAndFailedTypes.current} />
          </div>
        </div>
        <RUSBOOKstring
          show={!demo}
          currentString={currentString}
          handleStringErase={handleStringErase}
          handleStringNoErase={handleStringNoErase}
          overall={successAndFailedTypes.current}
          uppercase={shiftKey || capsKey}
          punctuation={punctuation}
          caseSensitivity={caseSensitivity}
          running={running}
        />
      </div>
      <PerspectiveController setBook={handleSetPerspective} />
      {/* <BOOKautopilot
        mode={1}
        SUCCESS={SUCCESS}
        FAILURE={FAILURE}
        handleTest={handleTest}
      /> */}
    </div>
  )
}
