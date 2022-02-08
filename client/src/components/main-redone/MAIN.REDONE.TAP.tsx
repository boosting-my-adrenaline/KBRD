import { motion } from 'framer-motion'
import React, { useState } from 'react'
import MainTap from '../../static/maintap.svg'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { MainState } from '../../App'
import { MAINTAPinside } from './MAIN.TAP.inside'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  trainingLanguage: boolean
}
export const MAINREDONEtap: React.FC<IProps> = ({
  mainState,
  setMainState,
  trainingLanguage,
}) => {
  const keybs: [string, number][] = [
    ['T', 2],
    ['A', 3],
    ['P', 1],
  ]

  const keyb = (char: string, i: number) => (
    <motion.div
      initial={{
        y: -400,
        width: 64,
        height: 64,
      }}
      animate={{ y: 0 }}
      transition={{ delay: 0.9 + i * 0.2 }}
      className={`flex items-center justify-center`}
    >
      <motion.div
        key={i}
        initial={{
          fontSize: `3.4em`,
          width: 64,
          height: 64,
        }}
        // whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
        animate={{ y: !transformation ? 0 : -700 }}
        transition={{ delay: i * 0.1 + 0.15 }}
        className={`font-courier py shadow-4th flex items-center justify-center rounded-xl border-2 border-gray-800 bg-sky-200 text-gray-800 shadow-gray-500`}
      >
        {char}
      </motion.div>
    </motion.div>
  )

  const [transformation, setTransformation] = useState(false)

  const [card, setCard] = useState<`sm` | `md` | `lg`>()

  useDidMountEffect(() => {
    if (mainState === MainState.TAP) {
      setTransformation(true)
    } else {
      setTransformation(false)
    }
  }, [mainState])

  const handleOnClick = () => {
    setMainState(MainState.TAP)
  }

  return (
    <motion.div
      initial={{
        y: `-300%`,
        minHeight: 400,
        position: 'absolute',
        borderRadius: 20,
      }}
      animate={
        mainState === MainState.MAIN
          ? {
              y: `0%`,
              x: `55%`,
              width: `32%`,
              height: `70%`,
              position: 'absolute',
            }
          : mainState === MainState.BOOK
          ? {
              y: `0%`,
              x: `355%`,
              width: `22%`,
              height: `40%`,
              position: 'absolute',
            }
          : mainState === MainState.INFO
          ? {
              y: `27%`,
              x: `120%`,
              width: `32%`,
              height: `70%`,
              scale: 0.5,
              position: 'absolute',
            }
          : {
              width: `100%`,
              height: `100%`,
              x: `0%`,
              y: `0%`,
              position: 'absolute',
            }
      }
      className={`absolute select-none bg-sky-100`}
      transition={{ delay: 0.0, duration: 1 }}
    >
      <motion.div
        initial={{
          width: `100%`,
          height: `100%`,
          boxShadow: `4px 4px 11px 8px rgba(7, 89, 133, 0.8)`,
        }}
        whileHover={{
          scale: !transformation ? 1.15 : 1,
          x: !transformation ? 10 : 0,
          backgroundImage: !transformation
            ? `linear-gradient(to bottom, #bae6fd, #9ed4f2, #82c1e8, #65aede, #479cd4, #5393d6, #6589d4, #797dcf, #ac74c6, #d46cb0, #ed6992, #f87171)`
            : `none`,
          boxShadow: `4px 4px 11px 11px rgba(7, 89, 133, 0.65)`,
        }}
        animate={
          !transformation
            ? {
                padding: 4,
                borderRadius: 25,
                border: `1px solid white`,
                backgroundImage: `linear-gradient(to bottom, #ffffff, #f8f9ff, #eef3ff, #e1efff, #d2ebff, #bdddf4, #a7cfe9, #90c1de, #72a6c7, #548bb1, #34729b, #075985)`,
              }
            : {
                padding: 0,
                border: `none`,
                borderRadius: 0,
                // backgroundImage: `none`,
                // backgroundSize: `cover`,
                // backgroundPosition: `bottom`,
                // backgroundImage: `url(${MainTap})`,
              }
        }
      >
        <motion.div
          initial={{
            width: `100%`,
            height: `100%`,
          }}
          animate={
            !transformation
              ? {
                  backgroundColor: `rgb(224, 242, 254)`,
                  border: `2px solid white`,
                  borderRadius: 20,
                }
              : {
                  backgroundColor: `transparent`,
                  border: `none`,
                  borderRadius: 0,
                }
          }
          // transition={{ duration: 0.5 }}
          // whileTap={{ scale: 1.15 }}
          className={`    flex flex-col items-center justify-center overflow-hidden `}
        >
          {(mainState === MainState.MAIN || mainState === MainState.INFO) && (
            <div
              className={`w-f h-f absolute z-10  cursor-pointer`}
              onMouseDown={handleOnClick}
            ></div>
          )}

          <motion.div
            initial={{}}
            animate={
              !transformation
                ? { height: `23%`, minHeight: 150 }
                : { height: 0, minHeight: 0 }
            }
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`bg-sky-20 flex items-center  justify-center gap-3 `}
          >
            {/* <div
            style={{ minHeight: 75 }}
            className={` flex-grow bg-emerald-400`}
          /> */}
            {keybs.map((el) => keyb(el[0], el[1]))}
            {/* <div
            style={{ minHeight: 75 }}
            className={` flex-grow bg-emerald-400`}
          /> */}
          </motion.div>

          <motion.div
            initial={{ height: `0%` }}
            animate={!transformation ? { height: `43%` } : { height: `100%` }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`flex-grow! bg-emerald-20 w-f flex items-center justify-center `}
          >
            <MAINTAPinside
              show={transformation}
              trainingLanguage={trainingLanguage}
            />
          </motion.div>
          <div className={`flex-grow`}></div>
          <motion.div
            initial={{ height: `90%` }}
            animate={
              !transformation ? { height: `40%` } : { height: `0%`, y: 400 }
            }
            transition={{ delay: 0.2, duration: 0.7 }}
            className={` `}
            style={{
              // height: `100%`,
              width: `100%`,
              // backgroundImage: `url(${svgbook2})`,
              // backgroundSize: `cover`,
              // backgroundPosition: `bottom`,
              backgroundSize: `cover`,
              backgroundPosition: `bottom`,
              backgroundImage: `url(${MainTap})`,
            }}
          >
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ delay: 1 }}
              className={`w-f h-2 border border-sky-100 bg-sky-100`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
