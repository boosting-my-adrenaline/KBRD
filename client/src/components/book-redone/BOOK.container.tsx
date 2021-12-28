import React, { useState, useEffect, useRef } from 'react'
import { BOOKBook } from './components/BOOK.book'
import { BOOKLayout } from './components/BOOK.layout'

import { capitals, KEYS, notCapitals } from './components/strings/strings'

// import { Width } from '../../utils/GetWidth'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { BOOKpointer } from './components/BOOK.pointer'
import { BOOKframe } from './components/BOOK.frame'
import { BOOKbuttons } from './components/BOOK.buttons'
import { BOOKstring } from './components/strings/BOOK.string'
import { moveString, shuffle } from './components/strings/stringFormation'
import { useKeyPress } from '../../utils/useKeyPress'
import { BOOKfailures } from './components/BOOK.failures'
import { BOOKstats } from './components/BOOK.stats'
import { thegreatgatsby as startingLetter } from '../../static/letters/thegreatgatsby'
import { LEVELcontainer } from '../leveling/LEVEL.container'
import { PerspectiveController } from '../PerspectiveController'
// import { gonewiththewind as startingLetter } from '../../static/letters/gonewiththewind'

export const BOOKContainer: React.FC = () => {
  const [currentString, setCurrentString] = useState(startingLetter)
  const [STRING, setSTRING] = useState<string>(currentString)

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

  const [animationBook, setAnimationBook] = useState(true)

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

  const [hightlighter, setHighlighter] = useState(true)

  const chapter = useTypedSelector((state) => state.nav.chapter)

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
    if (!caps && !shift && capitals.includes(keyDown)) {
      setCapsKey(true)
    }
    if (caps && notCapitals.includes(keyDown)) {
      setCapsKey(false)
    }
  }, [keyDown])

  const capsError = useRef(0)

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 100)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 250)
    return () => clearTimeout(id)
  }, [chapter])

  useEffect(() => {
    prelastKey.current = lastKey.current
  }, [keyDown])

  const handleEvent = (event: KeyboardEvent) => {
    const { key } = event
    // console.log(key)

    if (KEYS.includes(key)) {
      setKeyDown(key)
      setKeyDown('')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleEvent(e)
    })
    return () => {
      window.removeEventListener('keydown', (e) => {
        handleEvent(e)
      })
    }
  }, [])

  useEffect(() => {
    if (keyDown === STRING[0]) {
      SUCCESS()
    } else if (keyDown !== STRING[0] && KEYS.includes(keyDown)) {
      FAILURE()
      if (keyDown.toLowerCase() === STRING[0].toLowerCase() && capsKey) {
        capsError.current++
      }
    }

    if (keyDown === ' ') {
      lastKey.current = 'Space'
    } else if (KEYS.includes(keyDown)) {
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

  const [punctuation, setPunctuation] = useState(true)
  const [caseSensitivity, setCaseSensetivity] = useState(true)

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

  return (
    <div
      style={{
        marginTop: perspective[1],
        transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
        // transition: '0.05s ease-in-out',
      }}
    >
      <div
        className={`borde order-black w-f  flex flex-col
       justify-center items-center font-courier opacity-${
         appear ? 100 : 0
         //  100
       }`}
        style={{ transition: '0.5s ease' }}
      >
        <div
          className={`absolute`}
          style={{ transform: `translateY(-360px)` }}
        ></div>
        <BOOKbuttons
          animationBook={animationBook}
          setAnimationBook={setAnimationBook}
          SUCCESS={SUCCESS}
          highlighter={hightlighter}
          setHighlighter={setHighlighter}
          STRING={STRING}
          punctuation={punctuation}
          caseSensitivity={caseSensitivity}
          setCaseSensetivity={setCaseSensetivity}
          setPunctuation={setPunctuation}
          caps={capsKey}
          capsError={capsError.current}
          running={running}
          handleReset={handleReset}
        />
        <BOOKstats
          overall={successAndFailedTypes.current}
          failedTypesIndexes={failedTypesIndexes.current}
          chapter={chapter}
          reseting={reseting}
        />
        <div
          className="invisible 1k:visible   flex flex-col justify-center items-center w-f border-black borde"
          // style={{ transform: 'translateY(-150px)' }}
        >
          <div
            className={`invisible 1k:visible  flex flex-col
        justify-center items-center bordr border-red-900 my-10`}
          >
            <BOOKBook
              STRING={STRING}
              chapter={chapter}
              // overall={successAndFailedTypes.current}
              // animation={animationBook}
              // currentString={currentString}
              // chapter={chapter}
            />
            <BOOKLayout
              failedTypesIndexes={failedTypesIndexes.current}
              overall={successAndFailedTypes.current}
              currentString={currentString}
              STRING={STRING}
              animation={animationBook}
              chapter={chapter}
              highlighter={hightlighter}
            />
            <BOOKfailures
              failedTypesIndexes={failedTypesIndexes.current}
              chapter={chapter}
            />
            <BOOKpointer overall={successAndFailedTypes.current} />
          </div>
        </div>
        <BOOKstring
          currentString={currentString}
          handleStringErase={handleStringErase}
          handleStringNoErase={handleStringNoErase}
          overall={successAndFailedTypes.current}
          uppercase={shiftKey || capsKey}
          punctuation={punctuation}
          caseSensitivity={caseSensitivity}
          chapter={chapter}
          running={running}
        />
      </div>
      <PerspectiveController setBook={handleSetPerspective} />
    </div>
  )
}
