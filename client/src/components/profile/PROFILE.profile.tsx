import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useDarkMode from '../../hooks/useDarkMode'

export const PROFILEprofile: React.FC = () => {
  const [turn, setTurn] = useState([0, 0, 0, 0])

  useEffect(() => {
    let delays = [1300, 1800, 2000, 2500, 4200]
    let id0 = setTimeout(() => setTurn([1, 0, 0, 0]), delays[0])
    let id1 = setTimeout(() => setTurn([1, 1, 0, 0]), delays[1])
    let id2 = setTimeout(() => setTurn([1, 1, 1, 0]), delays[2])
    let id3 = setTimeout(() => setTurn([1, 1, 1, 1]), delays[3])
    let id4 = setTimeout(() => setTurn([2, 2, 2, 2]), delays[4])
    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
      setTurn([2, 2, 2, 2])
    }
  }, [])

  let fontsize = '120px'
  let fontsize2 = `40px`
  const { isDarkMode } = useDarkMode()

  let finalColor = isDarkMode ? `rgb(186 230 253)` : `rgb(107 33 168)`

  //   A486B4
  // 3E8CBD //
  // 8A98B2 //
  // 5ECC91//
  // A4C27D
  // BE6B27 //

  return (
    <div
      className={`font-BebasNeue t fixed inset-0 left-[50%] mt-[80px] flex items-center justify-center `}
    >
      <motion.div
        animate={
          turn[0] === 2
            ? { fontSize: fontsize2, color: `#A4C27D` }
            : {
                fontSize: '5px',
              }
        }
      >
        {turn[0] === 2 ? `and this \u00a0` : ``}{' '}
      </motion.div>
      <motion.div
        initial={{}}
        animate={
          turn[0] === 0
            ? {
                x: 0,
                y: 0,
                fontSize: `1px`,
              }
            : turn[0] === 1
            ? {
                x: 270,
                y: -117,
                fontSize: `160px`,
                color: `#BE6B27`,
              }
            : {
                x: 0,
                y: 0,
                fontSize: fontsize,
                color: finalColor,
              }
        }
      >
        SECTION{'\u00a0'}
      </motion.div>
      <motion.div
        animate={
          turn[0] === 2
            ? { fontSize: fontsize2, color: `#A486B4` }
            : {
                fontSize: '5px',
              }
        }
      >
        {turn[0] === 2 ? `also \u00a0` : ``}{' '}
      </motion.div>
      <motion.div
        animate={
          turn[1] === 0
            ? {
                x: 0,
                y: 0,
                fontSize: `1px`,
              }
            : turn[1] === 1
            ? {
                x: -154,
                y: 55,
                fontSize: `260px`,
                color: `#3E8CBD`,
              }
            : {
                x: 0,
                y: 0,
                fontSize: fontsize,
                color: finalColor,
              }
        }
      >
        TO
        {'\u00a0'}
      </motion.div>
      <motion.div
        animate={
          turn[2] === 0
            ? {
                x: 0,
                y: 0,
                fontSize: `1px`,
              }
            : turn[2] === 1
            ? {
                x: -195,
                y: 55,

                fontSize: `260px`,

                color: `#8A98B2`,
              }
            : {
                x: 0,
                y: 0,
                fontSize: fontsize,
                color: finalColor,
              }
        }
      >
        BE{'\u00a0'}
      </motion.div>
      <motion.div
        animate={
          turn[3] === 0
            ? {
                x: 0,
                y: 0,
                fontSize: `1px`,
              }
            : turn[3] === 1
            ? {
                x: -240,
                y: 0,
                fontSize: `450px`,
                color: `#5ECC91`,
                letterSpacing: '-20px',
              }
            : {
                x: 0,
                y: 0,
                fontSize: fontsize,
                color: finalColor,
              }
        }
      >
        DONE{'\u00a0'}
      </motion.div>{' '}
    </div>
  )
}
