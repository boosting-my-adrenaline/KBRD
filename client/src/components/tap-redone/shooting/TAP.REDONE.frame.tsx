import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { TAPREDONEinside } from './TAP.REDONE.inside'
import { State } from './TAP.REDONE.main'

interface IProps {
  state: State
  color: string
  limit: number
  handleStart: () => void
  started: boolean
  setState: (state: State) => void
  block: boolean
  setBlock: (block: boolean) => void
}

export const TAPREDONEframe: React.FC<IProps> = ({
  state,
  color,
  limit,
  handleStart,
  started,
  setState,
  block,
  setBlock,
}) => {
  const [dimensions, setDimensions] = useState({
    width: 766,
    // height: 620,
    clipPath1: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%,${``} 1% 50%, 25.5% 98.75%,${``} 74.5% 98.75%, 99% 50%, 74.5% 1.15%, 25.5% 1.15%,${``} 1% 50%, 0% 50%)`,
    clipPath2: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
  })

  useEffect(() => {
    if (limit < 19) {
      return setDimensions({
        width: 766,
        // height: 620,
        clipPath1: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%,${``} 1% 50%, 25.5% 98.75%,${``} 74.5% 98.75%, 99% 50%, 74.5% 1.15%, 25.5% 1.15%,${``} 1% 50%, 0% 50%)`,
        clipPath2: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
      })
    } else {
      return setDimensions({
        width: 1110,
        // height: 620,
        clipPath1: `polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%,${``} 1% 50%, 18.5% 98.5%,${``} 81.5% 98.5%, 99% 50%, 81.5% 1.5%, 18.5% 1.5%,${``} 1% 50%, 0% 50%)`,
        clipPath2: `polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%`,
      })
    }
  }, [limit])

  return (
    <motion.div
      animate={{
        height: 620,
        width: dimensions.width,
        clipPath: dimensions.clipPath2,
        backdropFilter: state == State.PAUSE ? `blur(10px)` : ``,
      }}
      className={`absolute z-10 flex items-center justify-center `}
    >
      <TAPREDONEinside
        state={state}
        handleStart={handleStart}
        started={started}
        setState={setState}
        block={block}
        setBlock={setBlock}
      />

      {/* <div
        // initial={{ clipPath: dimensions.clipPath1 }}
        // animate={{
        //   height: 620,
        //   width: dimensions.width,
        //   clipPath: dimensions.clipPath1,
        // }}
        className={` relative ${color} transition-colors duration-300 ease-in-out `}
        style={{
          height: 620,
          width: dimensions.width,
          clipPath: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%,${``} 1% 50%, 25.5% 98.75%,${``} 74.5% 98.75%, 99% 50%, 74.5% 1.15%, 25.5% 1.15%,${``} 1% 50%, 0% 50%)`,
        }}
      >
      /
      */}
      <motion.div
        animate={{
          height: 620,
          width: dimensions.width,
          clipPath: dimensions.clipPath1,
        }}
        className={`${color}`}
      />
    </motion.div>
  )
}
