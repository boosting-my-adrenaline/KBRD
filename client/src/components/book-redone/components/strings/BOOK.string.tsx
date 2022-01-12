import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../../types/nav'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import {
  goToRandom,
  lowerAll,
  removePunctuation,
  shuffle,
  upperAll,
} from './stringFormation'
import {
  BOOKstringButton,
  BOOKstringButtonFunctional,
} from './BOOK.string.button'

import { lorem as letter1 } from '../../../../static/letters/lorem'
import { gonewiththewind as letter2 } from '../../../../static/letters/gonewiththewind'
import { thelordoftherings as letter3 } from '../../../../static/letters/thelordoftherings'
import { robinson as letter4 } from '../../../../static/letters/robinson'
import { the1984 as letter5 } from '../../../../static/letters/the1984'
import { thegreatgatsby as letter6 } from '../../../../static/letters/thegreatgatsby'
import { tokillamockinbird as letter7 } from '../../../../static/letters/tokillamockinbird'
import { lionwitch as letter8 } from '../../../../static/letters/lionwitch'

// let test = `Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. `

interface IProps {
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
  const choosenString = useRef<number>(5)

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

  const letters = [
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    letter6,
    letter7,
    letter8,
  ]

  // const examples = [
  //   { title: `Example #1`, str: letter1 },
  //   { title: `Example #2`, str: letter2 },
  //   { title: `Example #3`, str: letter3 },
  //   { title: `Example #4`, str: letter4 },
  //   { title: `Example #5`, str: letter5 },
  //   { title: `Example #6`, str: letter6 },
  //   { title: `Example #7`, str: letter7 },
  //   { title: `Example #8`, str: letter8 },
  // ]

  const handleSetString = (str: string, num: number) => {
    setNow(str)
    choosenString.current = num
  }

  const handleRandom = () => {
    let n = Math.floor(Math.random() * letters.length)
    while (n === choosenString.current) {
      n = Math.floor(Math.random() * letters.length)
    }

    handleSetString(letters[n], n)
  }

  const handleGoToRandomSentence = () => {
    let a = goToRandom(letters[choosenString.current])
    handleSetString(a, choosenString.current)
    console.log(a)
  }

  const handleToBeginning = () => {
    // handleString(letters[choosenString.current], true)
    handleString(now, true)
  }

  const exampleButtons = letters.map((el, i) => (
    <BOOKstringButton
      key={i}
      choosenString={choosenString.current}
      handleSetString={handleSetString}
      num={letters.indexOf(el)}
      str={el}
    />
  ))
  const [hover, setHover] = useState(false)

  // return <>do something with STRING length</>
  return (
    <div
      className={`select-none z-50 w-1000px text-xl transform  flex flex-col gap-4 items-center border-black borde mt-4 text-gray-800 ${
        !appear && `opacity-0`
      } transition duration-700 ease-in-out`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-f flex flex-wrap items-center justify-evenly ${
          running && !hover && `opacity-80`
        } transition duration-200 ease-in-out`}
      >
        {exampleButtons}
      </div>
      <div className={`flex flex-row justify-around items-center w-f`}>
        <BOOKstringButtonFunctional title={`shuffle`} onClick={handleShuffle} />
        <BOOKstringButtonFunctional
          title={`random book`}
          onClick={handleRandom}
        />
        <BOOKstringButtonFunctional
          title={`jump over`}
          onClick={handleGoToRandomSentence}
        />
        <BOOKstringButtonFunctional
          title={`to beginning`}
          onClick={handleToBeginning}
        />
      </div>
    </div>
  )
}
