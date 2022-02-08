import { motion } from 'framer-motion'
import React, { useState } from 'react'
import MainTap from '../../static/maintap.svg'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { MainState } from '../../App'
import { MAINTAPinside } from './MAIN.TAP.inside'
import { MAININFOinside } from './MAIN.INFO.inside'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
}
export const MAINREDONEinfo: React.FC<IProps> = ({
  mainState,
  setMainState,
}) => {
  const [transformation, setTransformation] = useState(false)
  const [show, setShow] = useState(false)

  useDidMountEffect(() => {
    if (mainState === MainState.INFO) {
      setTransformation(true)
    } else {
      setTransformation(false)
    }

    let id = setTimeout(
      () => {
        if (mainState === MainState.INFO) {
          setShow(true)
        } else {
          setShow(false)
        }
      },
      mainState === MainState.INFO ? 750 : 0
    )
    return () => clearTimeout(id)
  }, [mainState])

  const handleOnClick = () => {
    if (mainState === MainState.INFO) {
      return
    }
    setMainState(MainState.INFO)
  }

  return (
    <motion.div
      onMouseDown={handleOnClick}
      initial={{
        y: -3000,
        minHeight: 170,
      }}
      animate={
        mainState === MainState.MAIN
          ? {
              z: -10,
              y: '90%',
              width: `10%`,
              height: `10%`,
              position: `absolute`,
              marginLeft: `88.5%`,
              marginRight: `5%`,
            }
          : [MainState.BOOK, MainState.TAP].includes(mainState)
          ? {
              z: -10,
              y: '100%',
              x: 1000,
              width: `10%`,
              height: `10%`,
              position: `absolute`,
              marginLeft: `88.5%`,

              marginRight: `5%`,
            }
          : !transformation
          ? {
              z: -10,
              y: '100%',
              width: `10%`,
              height: `10%`,
              position: `absolute`,
              marginLeft: `88.5%`,

              marginRight: `5%`,
            }
          : {
              z: 10,
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
    >
      <motion.div
        initial={{
          width: `100%`,
          height: `100%`,
          boxShadow: `4px 4px 11px 2px rgba(217, 119 ,6, 0.8)`,
          borderRadius: 100,
        }}
        whileHover={{
          scale: !transformation ? 1.15 : 1,
          x: !transformation ? 10 : 0,
          boxShadow: `4px 4px 11px 6px rgba(217, 119, 6, 0.65)`,
        }}
        animate={
          !transformation
            ? {
                padding: 4,
                borderRadius: 15,
                border: `1px solid white`,
              }
            : {
                padding: 0,
                border: `none`,
                borderRadius: 0,
              }
        }
        className={`font-BebasNeue flex cursor-pointer items-center justify-center bg-amber-200 text-[10em]`}
      >
        {mainState === MainState.INFO && show ? (
          <MAININFOinside show={show} mainState={mainState} />
        ) : (
          `?`
        )}
        {/* <motion.div
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
        className={`    flex flex-col items-center justify-center overflow-hidden `}
      >
        {mainState === MainState.MAIN && (
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
          className={`bg-amber-20 flex items-center  justify-center gap-1 `}
        >
          {keybs.map((el) => keyb(el[0], el[1]))}
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
            className={`w-f h-2 border border-amber-100 bg-amber-100`}
          ></motion.div>
        </motion.div>
      </motion.div> */}
      </motion.div>
    </motion.div>
  )
}
