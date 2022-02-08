import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { BOOKContainer } from '../book-redone/BOOK.container'
import svgbook2 from '../../static/svgbook2.svg'
import { MainState } from '../../App'
import { RUSBOOKContainer } from '../book-redone-rus/RUS.BOOK.container'

interface IProps {
  show: boolean
  mainState: MainState
  trainingLanguage: boolean
}

export const MAINBOOKinside: React.FC<IProps> = ({
  show,
  mainState,
  trainingLanguage,
}) => {
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
      className={` w-f h-f flex items-center justify-center ${
        bg && `bg-red-100`
      } duration-0 transition-colors ease-in-out`}
      style={{
        backgroundImage: !bg2 ? `none` : `url(${svgbook2})`,
        backgroundSize: `100% auto`,
        backgroundPosition: `bottom`,
        backgroundRepeat: `no-repeat no-repeat`,
      }}
    >
      <div
        className={`flex flex-col ${
          `items-center` // bg ? `items-start` : `items-center`
        } w-f h-f justify-center `}
      >
        {trainingLanguage ? (
          <BOOKContainer demo={demo} />
        ) : (
          <RUSBOOKContainer demo={demo} />
        )}
        <div
          className={`h-f w-f flex-grow `}
          style={{ width: `100%`, height: `100%` }}
        ></div>
      </div>
      {/* <div className={`${bg && `flex-grow`}`}></div> */}
    </motion.div>
  )
}
