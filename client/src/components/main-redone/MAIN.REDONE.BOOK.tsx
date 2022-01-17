import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { chapters } from '../../redux/nav/nav.types'
import { Chapters } from '../../types/nav'
import MainBook2 from '../../static/mainbook2.svg'
import { MAINBOOKinside } from './MAIN.BOOK.inside'
import svgbook2 from '../../static/svgbook2.svg'
import { useDispatch } from 'react-redux'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

export const MAINREDONEbook: React.FC = () => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const keybs: [string, number][] = [
    ['K', 2],
    ['B', 4],
    ['R', 3],
    ['D', 1],
  ]

  const keyb = (char: string, i: number) => (
    <motion.div
      key={i}
      initial={{
        y: -700,
        fontSize: `3.4em`,
        width: 64,
        height: 64,
      }}
      whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
      animate={{ y: !transformation ? 0 : -700 }}
      transition={{ delay: i * 0.1 + 0.15 }}
      className={`font-courier bg-red-200 text-gray-800 border-2 border-gray-800 flex justify-center items-center rounded-xl py shadow-4th shadow-gray-500`}
    >
      {char}
    </motion.div>
  )

  const [transformation, setTransformation] = useState(false)
  const [turn, setTurn] = useState(0)

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      if (transformation) {
        setTurn(1)
      } else {
        setTurn(0)
      }
    }, 600)
  }, [transformation])

  return (
    <motion.div
      initial={{
        y: -3000,
      }}
      animate={
        !transformation
          ? {
              y: 0,
              width: `35%`,
              height: `70%`,
              position: `absolute`,
              marginLeft: `35%`,
              marginRight: `75%`,
            }
          : {
              y: 0,
              width: `100%`,
              height: `100%`,
              position: `absolute`,
              marginLeft: `50%`,
              marginRight: `50%`,
            }
      }
      className={`select-none`}
      transition={{ delay: 0.0, duration: 1 }}
      onMouseDown={() => setTransformation((prev) => !prev)}
    >
      <motion.div
        initial={{
          width: `100%`,
          height: `100%`,
          boxShadow: `4px 4px 11px 8px rgba(153, 27 ,27, 0.8)`,
        }}
        whileHover={{
          scale: !transformation ? 1.15 : 1,
          x: !transformation ? -10 : 0,
          boxShadow: `4px 4px 11px 11px rgba(153, 27 ,27, 0.65)`,
        }}
        // whileTap={{ scale: 1.15 }}
        className={`  ${
          turn === 1
            ? `bg-transparent`
            : `bg-red-100 rounded-2xl border-3 border-white`
        }  flex justify-center items-center flex-col overflow-hidden  shadow-red-800/40`}
      >
        <motion.div
          animate={!transformation ? { height: `15%` } : { height: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={`flex gap-3  items-center justify-center`}
        >
          {keybs.map((el) => keyb(el[0], el[1]))}
        </motion.div>

        <motion.div
          initial={{ height: `0%` }}
          animate={!transformation ? { height: `42%` } : { height: `100%` }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={`flex-grow! flex justify-center items-center bg-emerald-20 w-f `}
        >
          <MAINBOOKinside show={transformation} />
        </motion.div>
        <div className={`flex-grow`}></div>
        <motion.div
          initial={{ height: `90%` }}
          animate={
            !transformation ? { height: `43%` } : { height: `0%`, y: 400 }
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
            backgroundImage: `url(${MainBook2})`,
          }}
        >
          <motion.div
            animate={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className={`w-f h-2 border border-red-100 bg-red-100`}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
