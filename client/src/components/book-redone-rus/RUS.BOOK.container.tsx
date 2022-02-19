import {
  capitalsRUS,
  KEYSRUS,
  notCapitalsRUS,
} from './components/strings/strings'
import { RUSBOOKBook } from './components/RUS.BOOK.book'

import { asya as letter1 } from './../../static/letters/rus/asya'
import { gogol as letter2 } from './../../static/letters/rus/gogol'
import { karamazovbrothers as letter3 } from './../../static/letters/rus/karamazovbrothers'
import { robinsonR as letter4 } from './../../static/letters/rus/robinsonRus'
import { don as letter5 } from './../../static/letters/rus/don'
import { oblomov as letter6 } from './../../static/letters/rus/oblomov'
import { karenina as letter7 } from './../../static/letters/rus/karenina'
import { masterimargarita as letter8 } from './../../static/letters/rus/masterimargarita'

import React, { useState, useEffect, useRef } from 'react'

import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useKeyPress } from '../../utils/useKeyPress'

import useLocalStorage from '../../hooks/useLocalStorage'

import { motion } from 'framer-motion'
import useColor from '../../hooks/useColor'
import { BOOKBook } from '../book-redone/components/BOOK.book'
import { BOOKLayout } from '../book-redone/components/BOOK.layout'
import { BOOKfailures } from '../book-redone/components/BOOK.failures'
import { BOOKpointer } from '../book-redone/components/BOOK.pointer'
import { BOOKkeyboard } from '../book-redone/components/BOOK.keyboard'
import { BOOKbuttons } from '../book-redone/components/BOOK.buttons'
import { BOOKstats } from '../book-redone/components/BOOK.stats'
import { BOOKstring } from '../book-redone/components/strings/BOOK.string'
import { moveString } from '../book-redone/components/strings/stringFormation'
import { RUSBOOKstring } from './components/strings/RUS.BOOK.string'

interface IProps {
  handleLanguage: () => void
}

export const RUSBOOKContainer: React.FC<IProps> = ({ handleLanguage }) => {
  // const startingLetter = Array.from({ length: 500 }, () => 'A').join('') /////////////////////////////////

  // const [currentString, setCurrentString] = useLocalStorage(
  //   'BK-current string',
  //   [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8][
  //     Math.floor(Math.random() * 8)
  //   ]
  // )
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
  // const streakRow = useRef(0)
  const [streakRow, setStreakRow] = useState(0)

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

  const [hightlighter, setHighlighter] = useLocalStorage('highlight', false)

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
    // console.log(
    //   `key: ${key} , STRING[0]: ${STRING[0]}, is===? ${
    //     key === STRING[0] ? `yes` : `no`
    //   }`
    // )

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
    if (keyDown === STRING[0]) {
      // SUCCESS()
      setIncreaser((prev) => prev + 1)
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

  const [increaser, setIncreaser] = useState(0)

  useDidMountEffect(() => {
    SUCCESS()
  }, [increaser])

  const [test, setTest] = useState(0)

  const SUCCESS = (): void => {
    // setStreakRow(0)
    setSTRING((str) => str.substring(1) + str[0])
    successAndFailedTypes.current++
    failedTypesIndexes.current = failedTypesIndexes.current.map((el) => el + 1)
    // .filter((el) => el <= 245)
    if (failedTypeStatus.current && !escapeFailedTypeStatus.current) {
      // setTimeout(() => {
      // setTest((prev) => prev + 10)
      failedTypesIndexes.current = [...failedTypesIndexes.current, 1]
      // }, 10)
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
    if (streakRow === 0 && keyDown === STRING[1]) {
      setStreakRow((prev) => prev + 1)
      // console.log(1)
    } else if (streakRow === 1 && keyDown === STRING[2]) {
      setStreakRow((prev) => prev + 1)
      // console.log(2)
    } else if (streakRow === 2 && keyDown === STRING[3]) {
      // setIncreaser((prev) => prev + 1)
      SUCCESS()
      // setIncreaser((prev) => prev + 1)
      // setIncreaser((prev) => prev + 1)
      // setIncreaser((prev) => prev + 1)
      setTimeout(() => setIncreaser((prev) => prev + 1))
      setTimeout(() => setIncreaser((prev) => prev + 1))
      setTimeout(() => setIncreaser((prev) => prev + 1))
      // setIncreaser((prev) => prev + 1)
      // setIncreaser((prev) => prev + 1)
      escapeFailedTypeStatus.current = true
      failureTypes.current--
      setStreakRow(0)
      // console.log(3)
    } else {
      setStreakRow(0)
      // console.log(0)
    }

    if (failureInARow.current === 0) {
      setTest((prev) => prev + 1)
      // setTimeout(() => {
      failureInARow.current = 1
      failureTypes.current++
      // historyOfFailed.current = [
      //   ...historyOfFailed.current,
      //   {
      //     desired: STRING[0] === ' ' ? 'Space' : STRING[0],
      //     pressed: keyDown === ' ' ? 'Space' : keyDown,
      //     previous: prelastKey.current,
      //   },
      // ]
      // console.log(historyOfFailed.current)

      failedTypeStatus.current = true
      // })
    }
  }

  useDidMountEffect(() => {
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
  }, [test])
  const [reseting, setReseting] = useState(0)

  const handleReset = () => {
    successAndFailedTypes.current = 0
    failureTypes.current = 0
    failureInARow.current = 0
    setStreakRow(0)

    failedTypeStatus.current = false
    escapeFailedTypeStatus.current = false
    failedTypesIndexes.current = []

    historyOfFailed.current = []
    setSTRING(currentString)
    setReseting((prev) => prev + 1)
  }

  const [punctuation, setPunctuation] = useLocalStorage(`BK-punctuation`, true)
  const [caseSensitivity, setCaseSensetivity] = useLocalStorage(`BK-case`, true)

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

  const [fontW, setFontW] = useLocalStorage(`BC-fontWeight`, false)
  const handleFW = () => setFontW((prev) => !prev)

  const [pointer, setPointer] = useLocalStorage(`BC-pointer`, true)

  const [show, setShow] = useLocalStorage<[boolean, boolean, boolean, boolean]>(
    `BC-show`,
    [false, true, true, true]
  )

  const handleShow = (num: 0 | 1 | 2 | 3) => {
    if (num === 0) {
      setShow((prev) => [!prev[0], prev[1], prev[2], prev[3]])
    }
  }

  const { themeColor1 } = useColor()

  const [isFirst, setIsFirst] = useLocalStorage(`BC-isFIrst`, false)

  useDidMountEffect(() => {}, [successAndFailedTypes])

  return (
    <>
      <motion.div
        // animate={{ scale: width >= 1500 ? 1 : width > 1300 ? 0.85 : 0.75 }}
        className={`w-f font-courier my-12 flex min-h-[830px] border-black  ${`font-CourierC`}
       flex-col items-center justify-start opacity-${
         //  appear || demo || 0
         100
       } duration-00 transition ease-in-out`}
      >
        <div className=" w-f  flex flex-col items-center justify-center border-black">
          <div
            className={` mt-6
        flex flex-col items-center justify-center `}
          >
            <RUSBOOKBook STRING={STRING} fontW={fontW} />
            {hightlighter && (
              <BOOKLayout STRING={STRING} highlighter={hightlighter} />
            )}
            {hightlighter && (
              <BOOKfailures
                failedTypesIndexes={failedTypesIndexes.current}
                highlighter={hightlighter}
              />
            )}
            {pointer && <BOOKpointer overall={successAndFailedTypes.current} />}
            {/* test */}
          </div>
        </div>
        <div
          className={`py px translate -x-[50px] my-3 mt-10 h-[1px] w-[1000px] ${themeColor1.bg.t200}`}
        />
        <BOOKkeyboard
          isLocalEng={false}
          show={show}
          handleShow={handleShow}
          handleLanguage={handleLanguage}
        />
        <div
          className={`py px translate-x- [50px] my-3 h-[1px] w-[1000px] ${themeColor1.bg.t200}`}
        />
        <BOOKbuttons
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
          handleTest={() => {}}
          fontW={fontW}
          handleFW={handleFW}
          pointer={pointer}
          setPointer={setPointer}
        />
        <div
          className={`py px translate-x- [50px] my-3 h-[1px] w-[1000px] ${themeColor1.bg.t200}`}
        />

        <div className={`z-60`}>
          <BOOKstats
            show={true}
            overall={successAndFailedTypes.current}
            failedTypesIndexes={failedTypesIndexes.current}
            reseting={reseting}
            keyboard={show[0]}
          />
        </div>
        <div
          className={`py px translate-x- [50px] my-3 h-[1px] w-[1000px] ${themeColor1.bg.t200}`}
        />
        <RUSBOOKstring
          show={true}
          currentString={currentString}
          handleStringErase={handleStringErase}
          handleStringNoErase={handleStringNoErase}
          overall={successAndFailedTypes.current}
          uppercase={shiftKey || capsKey}
          punctuation={punctuation}
          caseSensitivity={caseSensitivity}
          running={running}
        />
      </motion.div>
    </>
  )
}
