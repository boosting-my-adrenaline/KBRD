import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { BOOKContainer } from '../book-redone/BOOK.container'
import { TAPREDONEcontainer } from '../tap-redone/TAP.REDONE.container'
// import svgbook2 from '../../static/svgbook2.svg'
import svg5 from '../../static/svg5.svg'

interface IProps {
  show: boolean
}

export const MAINTAPinside: React.FC<IProps> = ({ show }) => {
  const [demo, setDemo] = useState(true)
  const [bg, setBg] = useState(false)
  const [bg2, setBg2] = useState(false)

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        if (show) {
          setDemo(false)
        } else {
          setDemo(true)
        }
      },
      show ? 800 : 200
    )

    let id1 = setTimeout(
      () => {
        if (show) {
          setBg2(true)
        } else {
          setBg2(false)
        }
      },
      show ? 650 : 0
    )

    let id2 = setTimeout(
      () => {
        if (show) {
          setBg(true)
        } else {
          setBg(false)
        }
      },
      show ? 0 : 500
    )
    return () => {
      clearTimeout(id)
      clearTimeout(id1)
      clearTimeout(id2)
    }
  }, [show])
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={!show ? { scale: 0.75 } : { scale: 1 }}
      className={`flex justify-center items-center w-f h-f  ${
        bg && `bg-sky-100`
      } transition-colors duration-0 ease-in-out`}
      style={{
        backgroundImage: !bg2 ? `none` : `url(${svg5})`,
        backgroundSize: `100% auto`,
        backgroundPosition: `bottom`,
        backgroundRepeat: `no-repeat no-repeat`,
      }}
    >
      <div
        className={`flex flex-col items-center justify-center  w-f h-f  ${
          !show && `160k:mt-0 1400:mt-4 1200:mt-[100px] mt-[150px]`
        } transition duration-75 `}
      >
        <TAPREDONEcontainer demo={demo} />
        <div
          className={`flex-grow h-f w-f `}
          style={{ width: `100%`, height: `100%` }}
        />
      </div>
    </motion.div>
  )
}
