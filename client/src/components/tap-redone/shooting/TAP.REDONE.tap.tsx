import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { TAPREDONEelement } from './TAP.REDONE.element'
import { TAPREDONEframe } from './TAP.REDONE.frame'

import { KeyColor, State } from './TAP.REDONE.main'

interface IProps {
  cells: Array<string | null>
  limit: number
  state: State
  missclicks: number
  handleStart: () => void
  keyColor: KeyColor
  started: boolean
  setState: (state: State) => void
  block: boolean
  setBlock: (block: boolean) => void
  trainingLanguage: boolean
}

export const TAPREDONEtap: React.FC<IProps> = ({
  cells,
  state,
  missclicks,
  handleStart,
  keyColor,
  limit,
  started,
  setState,
  block,
  setBlock,
  trainingLanguage,
}) => {
  const [frameColor, setFrameColor] = useState(`bg-sky-400`)

  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return `bg-red-500`
      case `emerald`:
        return `bg-emerald-500`
      case `cyan`:
        return `bg-cyan-500`
      case `amber`:
        return `bg-amber-500`
      case `fuchsia`:
        return `bg-fuchsia-500`
      case `pink`:
        return `bg-pink-500`
    }
  }

  useEffect(() => {
    if (state === State.STOP) {
      setFrameColor(`bg-sky-500`)
    } else if (state === State.PAUSE) {
      setFrameColor(`bg-sky-400`)
    } else {
      setFrameColor(`bg-transparent`)
    }
  }, [state])

  useEffect(() => {
    if (!missclicks) return

    setFrameColor(`bg-red-500`)

    let id = setTimeout(() => setFrameColor(`bg-transparent`), 175)

    return () => {
      clearTimeout(id)
      setFrameColor(`bg-transparent`)
    }
  }, [missclicks])

  let element = (cell: number) => {
    return (
      <TAPREDONEelement
        char={cells[cell]}
        color={getColor()}
        trainingLanguage={trainingLanguage}
      />
    )
  }

  return (
    <div className={`w-1100px  flex items-center justify-center `}>
      <TAPREDONEframe
        state={state}
        color={frameColor}
        limit={limit}
        handleStart={handleStart}
        started={started}
        setState={setState}
        block={block}
        setBlock={setBlock}
      />
      <div className={`flex flex-col items-center justify-center gap-6`}>
        <div className={`flex flex-row justify-center gap-14`}>
          {element(25)}
          {element(13)}
          {element(14)}
          {element(15)}
          {element(26)}
        </div>
        <div className={`flex flex-row justify-center gap-14`}>
          {element(21)}
          {element(7)}
          {element(3)}
          {element(4)}
          {element(10)}
          {element(22)}
        </div>
        <div className={`flex flex-row justify-center gap-14`}>
          {element(19)}
          {element(8)}
          {element(1)}
          {element(0)}
          {element(2)}
          {element(11)}
          {element(20)}
        </div>
        <div className={`flex flex-row justify-center gap-14`}>
          {element(23)}
          {element(9)}
          {element(5)}
          {element(6)}
          {element(12)}
          {element(24)}
        </div>
        <div className={`flex flex-row justify-center gap-14`}>
          {element(27)}
          {element(16)}
          {element(17)}
          {element(18)}
          {element(28)}
        </div>
      </div>
    </div>
  )
}
