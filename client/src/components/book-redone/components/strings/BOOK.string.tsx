import React, { useEffect, useRef, useState } from 'react'
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

import useLocalStorage from '../../../../hooks/useLocalStorage'
import useLanguage from '../../../../hooks/useLanguage'

// let test = `Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. Sent number1. `

interface IProps {
  show: boolean
  overall: number
  currentString: string
  handleStringErase(str: string): void
  handleStringNoErase(str: string): void
  uppercase: boolean
  punctuation: boolean
  caseSensitivity: boolean
  running: boolean
}

export const BOOKstring: React.FC<IProps> = ({
  show,
  currentString,
  handleStringErase,
  handleStringNoErase,
  overall,
  uppercase,
  punctuation,
  caseSensitivity,
  running,
}) => {
  // const { isEng } = useLanguage()

  const [now, setNow] = useLocalStorage('BS-currentString', currentString)
  const choosenString = useRef<number>(5)

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

  const { isEng } = useLanguage()

  const handleSetString = (str: string, num: number) => {
    setNow(str)
    choosenString.current = num
  }

  useEffect(() => {
    handleRandom()
  }, [])

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
      // localEng={localEng}
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
      className={`${'font-CourierC'} w-1000px borde z-50 mt-4 flex  transform select-none flex-col items-center gap-4 border-black text-xl text-gray-800 ${
        show || `opacity-0`
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
      <div className={`w-f flex flex-row items-center justify-around`}>
        <BOOKstringButtonFunctional
          title={isEng ? `shuffle` : `перемешать`}
          onClick={handleShuffle}
        />
        <BOOKstringButtonFunctional
          title={isEng ? `random book` : `случайная книга`}
          onClick={handleRandom}
        />
        <BOOKstringButtonFunctional
          title={isEng ? `jump over` : `случайное место`}
          onClick={handleGoToRandomSentence}
        />
        <BOOKstringButtonFunctional
          title={isEng ? `to beginning` : `в начало`}
          onClick={handleToBeginning}
        />
      </div>
    </div>
  )
}
