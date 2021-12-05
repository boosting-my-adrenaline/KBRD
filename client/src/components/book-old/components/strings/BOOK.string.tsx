import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { BOOKbuttonVisual } from '../BOOK.buttonVisual'
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
}

export const BOOKstring: React.FC<IProps> = ({
  // STRING,
  // setSTRING,
  // setCurrentString,
  currentString,
  handleStringErase,
  handleStringNoErase,
  overall,
  uppercase,
}) => {
  const [now, setNow] = useState(currentString)

  useDidMountEffect(() => {
    handleString(now, true)
  }, [now])

  const [punctuation, setPunctuation] = useState(true)
  const [caseSensitivity, setCaseSensetivity] = useState(true)

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
  }

  ///////////
  // useEffect(() => {
  //   if (overall >= 50) {
  //     handleShuffle()
  //   }
  // }, [overall])

  /////

  const handleHackString = () => {
    handleString(hackString(), true)
  }

  return (
    <div
      className={`z-50 absolute text-xl transform -translate-y-20 flex gap-8`}
    >
      <button onMouseDown={() => setNow(letter1)}>1</button>
      <button onMouseDown={() => setNow(letter2)}>2</button>
      <button onMouseDown={() => setNow(letter3)}>3</button>
      <button onMouseDown={() => setNow(letter4)}>4</button>
      <button onMouseDown={handleHackString}>HS</button>
      <button onMouseDown={handleShuffle}>shuffle</button>
      overall: {overall}
      <BOOKbuttonVisual
        tag={`punctuation`}
        active={punctuation}
        onClick={setPunctuation}
      />
      <BOOKbuttonVisual
        tag={`case`}
        active={caseSensitivity}
        onClick={setCaseSensetivity}
      />
      {uppercase ? 1 : 0}
    </div>
  )
}
