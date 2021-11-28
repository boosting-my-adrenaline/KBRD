import React, { useState, useEffect, useRef } from 'react'
import { BOOKBook } from './components/BOOK.book'
import { BOOKLayout } from './components/BOOK.layout'

import {
  capitals,
  KEYS,
  letter1,
  notCapitals,
} from './components/strings/strings'

// import { Width } from '../../utils/GetWidth'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { BOOKpointer } from './components/BOOK.pointer'
import { BOOKframe } from './components/BOOK.frame'
import { BOOKbuttons } from './components/BOOK.buttons'
import { BOOKstring } from './components/strings/BOOK.string'
import { moveString, shuffle } from './components/strings/stringFormation'
import { useKeyPress } from '../../utils/useKeyPress'

export const BOOKContainer: React.FC = () => {
  const [currentString, setCurrentString] = useState(shuffle(letter1))
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

  const rendersCount = useRef(0)

  const successAndFailedTypes = useRef(0)
  const failureTypes = useRef(0)
  const successTypes =
    successAndFailedTypes.current - failureTypes.current < 0
      ? 0
      : successAndFailedTypes.current - failureTypes.current
  const failureInARow = useRef(0)
  const streakRow = useRef(0)

  const failedTypeStatus = useRef(false)
  const escapeFailedTypeStatus = useRef(false)
  const failedTypesIndexes = useRef<number[]>([])

  // const historyOfFailed = useRef<
  //   {
  //     desired: string
  //     pressed: string
  //     previous: string
  //   }[]
  // >([])

  const lastKey = useRef('')
  const prelastKey = useRef('')

  const [hightlighter, setHighlighter] = useState(true)

  const chapter = useTypedSelector((state) => state.nav.chapter)

  const caps = useKeyPress('CapsLock')
  const shift = useKeyPress('Shift')
  const [capsDown, setCapsDown] = useState(caps)
  const [shiftDown, setShiftDown] = useState(shift)

  useDidMountEffect(() => setCapsDown(caps), [caps])
  useDidMountEffect(() => setShiftDown(shift), [shift])

  useDidMountEffect(() => {
    if (!caps && !shift && capitals.includes(keyDown)) {
      setCapsDown(true)
    }
    if (caps && notCapitals.includes(keyDown)) {
      setCapsDown(false)
    }
  }, [keyDown])

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 100)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    setTimeout(() => {
      setAppear(false)
    }, 250)
  }, [chapter])

  useEffect(() => {
    prelastKey.current = lastKey.current
  }, [keyDown])

  useEffect(() => {
    rendersCount.current++
  })

  const handleEvent = (event: KeyboardEvent) => {
    const { key } = event
    console.log(key)

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
    if (failedTypeStatus.current && !escapeFailedTypeStatus.current) {
      failedTypesIndexes.current = [
        ...failedTypesIndexes.current,
        successAndFailedTypes.current,
      ]
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
    }
  }

  const renders = useRef<number>(0)

  useEffect(() => {
    renders.current++
  })

  return (
    <div className="overflow-y-hidden w-full overflow-x-hidden  flex flex-col justify-center align-center font-courier border-2 border-grey-900 ">
      <BOOKbuttons
        animationBook={animationBook}
        setAnimationBook={setAnimationBook}
        SUCCESS={SUCCESS}
        highlighter={hightlighter}
        setHighlighter={setHighlighter}
        STRING={STRING}
      />
      <div
        className="invisible 1k:visible  mt-36 md:mt-32 flex justify-center items-start "
        style={{ transform: 'translateY(-150px)' }}
      >
        <BOOKBook
          STRING={STRING}
          overall={successAndFailedTypes.current}
          animation={animationBook}
          currentString={currentString}
          chapter={chapter}
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

        <BOOKpointer overall={successAndFailedTypes.current} />
        <BOOKstring
          currentString={currentString}
          handleStringErase={handleStringErase}
          handleStringNoErase={handleStringNoErase}
          overall={successAndFailedTypes.current}
          uppercase={shift || caps}
        />
        <BOOKframe />
      </div>
    </div>
  )
}
