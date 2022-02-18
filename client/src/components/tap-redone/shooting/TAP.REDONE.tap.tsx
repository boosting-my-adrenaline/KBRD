import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useColor from '../../../hooks/useColor'
import useDarkMode from '../../../hooks/useDarkMode'
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
  const { themeColor2 } = useColor()

  const [missTime, setMissTime] = useState(false)

  // const [frameColor, setFrameColor] = useState(`bg-black`)

  const { isDarkMode } = useDarkMode()

  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return isDarkMode ? `bg-red-300` : `bg-red-500`
      case `emerald`:
        return isDarkMode ? `bg-emerald-300` : `bg-emerald-500`
      case `cyan`:
        return isDarkMode ? `bg-cyan-300` : `bg-cyan-500`
      case `amber`:
        return isDarkMode ? `bg-amber-300` : `bg-amber-500`
      case `fuchsia`:
        return isDarkMode ? `bg-fuchsia-300` : `bg-fuchsia-500`
      case `pink`:
        return isDarkMode ? `bg-pink-300` : `bg-pink-500`
    }
  }

  useDidMountEffect(() => {
    setMissTime(true)
    let id = setTimeout(() => setMissTime(false), 175)

    return () => {
      clearTimeout(id)
      setMissTime(false)
    }
  }, [missclicks])

  useDidMountEffect(() => {}, [state])

  // useEffect(() => {
  //   if (state === State.STOP) {
  //     setFrameColor(themeColor2.bg.t500)
  //   } else if (state === State.PAUSE) {
  //     setFrameColor(themeColor2.bg.t400)
  //   } else {
  //     setFrameColor(`bg-transparent`)
  //   }
  // }, [state])

  // useEffect(() => {
  //   if (!missclicks) return

  //   setFrameColor(`bg-red-500`)

  //   let id = setTimeout(() => setFrameColor(`bg-transparent`), 175)

  //   return () => {
  //     clearTimeout(id)
  //     setFrameColor(`bg-transparent`)
  //   }
  // }, [missclicks])

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
    <div
      className={`w-1100px  flex translate-y-[-30px] items-center justify-center`}
    >
      <TAPREDONEframe
        state={state}
        color={
          missTime
            ? `bg-red-500`
            : state === State.RUN
            ? `bg-transparent`
            : isDarkMode
            ? themeColor2.bg.t300
            : themeColor2.bg.t500
        }
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
