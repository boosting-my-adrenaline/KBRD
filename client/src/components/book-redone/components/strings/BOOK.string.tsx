import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../../types/nav'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { BOOKbuttonVisual } from '../buttons/BOOK.buttonVisual'
import {
  hackString,
  lowerAll,
  lowerAllWithSkip,
  moveString,
  removePunctuation,
  shuffle,
  upperAll,
  upperAllWithSkip,
} from './stringFormation'
import { letter1, letter2, letter3, letter4 } from './strings'

interface IProps {
  // STRING: string
  // setSTRING(string: string): void
  // setCurrentString(string: string): void
  overall: number
  currentString: string
  handleStringErase(str: string): void
  handleStringNoErase(str: string): void
  uppercase: boolean
  punctuation: boolean
  caseSensitivity: boolean
  chapter: Chapters
  running: boolean
}

export const BOOKstring: React.FC<IProps> = ({
  currentString,
  handleStringErase,
  handleStringNoErase,
  overall,
  uppercase,
  punctuation,
  caseSensitivity,
  chapter,
  running,
}) => {
  const [now, setNow] = useState(currentString)
  const choosenString = useRef<null | string>(null)

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 2500)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 10)
    return () => clearTimeout(id)
  }, [chapter])

  useDidMountEffect(() => {
    handleString(now, true)
  }, [now])

  function handleString(string: string, erase: boolean) {
    if (!punctuation) {
      string = removePunctuation(string, overall)
    }

    if (!caseSensitivity) {
      if (uppercase) {
        string = upperAll(string)
      } else {
        string = lowerAll(string)
      }
    }
    if (erase) {
      handleStringErase(string)
    } else {
      handleStringNoErase(string)
    }
  }

  useDidMountEffect(() => {
    handleString(now, false)
  }, [punctuation, caseSensitivity, uppercase])

  const handleShuffle = () => {
    handleString(shuffle(now), true)
    // handleString('12345', true)
  }

  const handleHackString = () => {
    handleString(hackString(), true)
  }

  const examples = [
    { title: `Example #1`, str: letter1 },
    { title: `Example #2`, str: letter3 },
    { title: `Example #3`, str: letter4 },
  ]

  const handleSetString = (str: string, title: string) => {
    setNow(str)
    choosenString.current = title
  }

  const handleRandom = () => {
    let n = Math.floor(Math.random() * examples.length)
    handleSetString(examples[n].str, examples[n].title)
  }

  const exampleButton = (title: string, str: string) => {
    return (
      <div
        className={`mx-2 bg-red-200 cursor-pointer border-`}
        onMouseDown={() => handleSetString(str, title)}
      >
        {title}
      </div>
    )
  }

  const exampleButtons = examples.map((el) => exampleButton(el.title, el.str))
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`z-50 text-xl transform  flex items-center border-black borde my-4 text-gray-800 opacity-${
        !appear ? 0 : 100
      }`}
      style={{ width: 1000, transition: '0.8s ease-in-out' }}
     
    >
      <div
        className={`w-f flex gap-8 items-center opacity-${
          running && !hover ? 80 : 100
        }`}
        style={{ transition: '0.2s ease-in-out' }}
      >
        {exampleButtons}
        <div onMouseDown={handleHackString}>HS</div>
        <div onMouseDown={handleShuffle}>shuffle</div>
        <div onMouseDown={handleRandom}>random</div>
        now: {choosenString.current}
      </div>
    </div>
  )
}
