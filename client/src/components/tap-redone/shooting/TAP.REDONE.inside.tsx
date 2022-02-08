import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import {
  TAPREDONEnumberOne,
  TAPREDONEnumberTwo,
  TAPREDONEnumberThree,
} from './numbers/TAP.REDONE.numbers'
import { State } from './TAP.REDONE.main'

interface IProps {
  state: State
  handleStart: () => void
  started: boolean
  setState: (state: State) => void
  block: boolean
  setBlock: (block: boolean) => void
}

export const TAPREDONEinside: React.FC<IProps> = ({
  state,
  handleStart,
  started,
  setState,
  block,
  setBlock,
}) => {
  const [turn, setTurn] = useState(0)

  // useDidMountEffect(() => {
  //   if (block) return
  //   if (state !== State.RUN && started) {
  //     let start = 250
  //     setBlock(true)
  //     setTimeout(() => setTurn(1), start)
  //     setTimeout(() => setTurn(0), start + 500)
  //     setTimeout(() => setTurn(2), start + 700)
  //     setTimeout(() => setTurn(0), start + 1200)
  //     setTimeout(() => setTurn(3), start + 1400)
  //     setTimeout(() => setTurn(0), start + 1900)
  //     setTimeout(() => setState(State.RUN), start + 2000)
  //     setTimeout(() => setBlock(false), start + 2300)
  //   } else if (state === State.RUN) {
  //     setBlock(true)
  //     setTimeout(() => setState(State.PAUSE), 100)
  //     setTimeout(() => setBlock(false), 200)
  //   }
  // }, [started, setBlock, setState])

  useDidMountEffect(() => {
    let id0 = setTimeout(() => {})
    let id1 = setTimeout(() => {})
    let id2 = setTimeout(() => {})
    let id3 = setTimeout(() => {})
    let id4 = setTimeout(() => {})
    let id5 = setTimeout(() => {})
    let id6 = setTimeout(() => {})
    let id7 = setTimeout(() => {})

    if (block) return
    if (state !== State.RUN && started) {
      let start = 250
      setBlock(true)
      id0 = setTimeout(() => setTurn(1), start)
      id1 = setTimeout(() => setTurn(0), start + 500)
      id2 = setTimeout(() => setTurn(2), start + 700)
      id3 = setTimeout(() => setTurn(0), start + 1200)
      id4 = setTimeout(() => setTurn(3), start + 1400)
      id5 = setTimeout(() => setTurn(0), start + 1900)
      id6 = setTimeout(() => setState(State.RUN), start + 2000)
      id7 = setTimeout(() => setBlock(false), start + 2300)
    } else if (state === State.RUN) {
      setBlock(true)
      id0 = setTimeout(() => setState(State.PAUSE), 100)
      id1 = setTimeout(() => setBlock(false), 200)
    }

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
      clearTimeout(id5)
      clearTimeout(id6)
      clearTimeout(id7)
      setTurn(0)
      setBlock(false)
    }
  }, [started, setBlock, setState])

  const { isEng } = useLanguage()

  return (
    <div
      className={`w-f h-f absolute flex  cursor-pointer items-center justify-center overflow-hidden ${
        isEng ? `font-courier` : `font-CourierC`
      }`}
      onMouseDown={handleStart}
    >
      <motion.div
        className={`absolute`}
        initial={{ scale: 0 }}
        animate={{ scale: turn === 1 ? 1 : 0 }}
      >
        <TAPREDONEnumberOne />
      </motion.div>

      <motion.div
        className={`absolute`}
        initial={{ scale: 0 }}
        animate={{ scale: turn === 2 ? 1 : 0 }}
      >
        <TAPREDONEnumberTwo />
      </motion.div>

      <motion.div
        className={`absolute`}
        initial={{ scale: 0 }}
        animate={{ scale: turn === 3 ? 1 : 0 }}
      >
        <TAPREDONEnumberThree />
      </motion.div>

      <motion.div
        ////////  PAUSE
        initial={{ y: -600 }}
        animate={{ y: state === State.PAUSE && !started ? 0 : -600 }}
        // transition={{ duration: 0.4 }}
        className={`gap-70px absolute flex items-center justify-center`}
      >
        <div
          className={`rounded-xl border-2 border-sky-600 bg-sky-400`}
          style={{ width: 90, height: 350 }}
        />
        <div
          className={`rounded-xl border-2 border-sky-600 bg-sky-400`}
          style={{ width: 90, height: 350 }}
        />
      </motion.div>
      <div className={`flex items-center justify-center overflow-hidden`}>
        <motion.div
          initial={{ fontSize: `.5em` }}
          animate={{ fontSize: `3em` }}
          transition={{
            default: { duration: 0.5 },
          }}
          // whileInView={{ scale: [1, 0.95, 1.05, 0.95, 1] }}
          // transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }}
          className={` absolute flex flex-col items-center justify-center text-sky-600 `}
        >
          <motion.div
            animate={{
              y: state === State.STOP && !started ? 0 : -600,
            }}
          >
            {isEng ? `PRESS SPACE BAR` : `НАЖМИТЕ ПРОБЕЛ`}
          </motion.div>
          <div className={`flex items-center justify-center `}>
            <motion.div
              animate={{
                x: state === State.STOP && !started ? 0 : -600,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {isEng ? `O` : `И`}
            </motion.div>

            <motion.div
              animate={{
                x: state === State.STOP && !started ? 0 : 600,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {isEng ? `R` : `ЛИ`}
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: state === State.STOP && !started ? 0 : 600,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            {isEng ? `TAP TO START` : `КЛИКНИТЕ МЫШЬЮ`}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
