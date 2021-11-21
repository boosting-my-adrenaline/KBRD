import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { BOOKbuttonVisual } from '../BOOK.buttonVisual'
import { moveString, removePunctuation, shuffle } from './stringFormation'
import { letter1, letter2, letter3, letter4 } from './strings'

interface IProps {
  // STRING: string
  // setSTRING(string: string): void
  // setCurrentString(string: string): void
  overall: number
  currentString: string
  handleStringErase(str: string): void
  handleStringNoErase(str: string): void
}

export const BOOKstring: React.FC<IProps> = ({
  // STRING,
  // setSTRING,
  // setCurrentString,
  currentString,
  handleStringErase,
  handleStringNoErase,
  overall,
}) => {
  const [punctuation, setPunctuation] = useState(true)
  const [now, setNow] = useState(currentString)

  useDidMountEffect(() => {
    handleString(now)
  }, [now])

  function handleString(string: string) {
    if (punctuation) {
      return handleStringErase(string)
    }
    handleStringErase(string)
  }

  function handleShuffle() {
    if (punctuation) {
      return handleStringErase(removePunctuation(shuffle(now), overall))
    }
    handleStringErase(shuffle(now))
  }

  useDidMountEffect(() => {
    if (!punctuation) {
      return handleStringNoErase(removePunctuation(now, overall))
    }
    handleStringNoErase(now)
  }, [punctuation])

  return (
    <div
      className={`z-50 absolute text-xl transform -translate-y-20 flex gap-8`}
    >
      <button onMouseDown={() => setNow(letter1)}>1</button>
      <button onMouseDown={() => setNow(letter2)}>2</button>
      <button onMouseDown={() => setNow(letter3)}>3</button>
      <button onMouseDown={() => setNow(letter4)}>4</button>
      <button onMouseDown={() => handleShuffle}>shuffle</button>

      <BOOKbuttonVisual
        tag={`punctuation`}
        active={punctuation}
        onClick={setPunctuation}
      />
    </div>
  )
}
