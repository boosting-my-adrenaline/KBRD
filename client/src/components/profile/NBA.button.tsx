import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useLanguage from '../../hooks/useLanguage'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useKeyPress } from '../../utils/useKeyPress'

interface IProps {
  tag: string
  onClick: () => void
  border?: string
  bg?: string
  hov?: string
  text?: string
  py?: string
  px?: string
  disableCursor?: boolean
  space?: boolean
  extraActive?: boolean
}

export const NBAbutton: React.FC<IProps> = ({
  tag,
  onClick,

  border = `border-purple-500`,
  bg = `bg-purple-300`,
  hov = `bg-purple-500`,
  text = `text-2xl`,
  px = `px-4`,
  py = `py-2`,
  disableCursor = false,
  space = false,
  extraActive = false,
}) => {
  const [hover, setHover] = useState(false)

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
    onClick()
  }

  const getParams = () => {
    if (active || extraActive) {
      return {
        scale: 0.9,
        boxShadow: `1px 2px 8px 2px rgba(50, 50, 50, 0.75)`,
      }
    } else if (hover) {
      return {
        scale: 1.1,
        boxShadow: `4px 8px 8px 3px rgba(50, 50, 50, 0.5)`,
      }
    } else {
      return {
        scale: 1,
        boxShadow: `2px 5px 8px 3px rgba(50, 50, 50, 0.65)`,
      }
    }
  }
  const { isEng } = useLanguage()

  return (
    <motion.div
      animate={getParams()}
      className={`relative flex select-none items-center justify-center overflow-hidden border  bg-transparent ${border}  ${
        disableCursor ? `cursor-not-allowed` : `cursor-pointer`
      }  rounded-lg ${isEng ? `font-courier` : `font-CourierC`}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setActive(false)
      }}
      onMouseDown={handleClick}
      onMouseUp={() => setActive(false)}
    >
      <div
        className={`z-60 relative flex items-center justify-center overflow-hidden rounded   ${py} ${px} `}
      >
        <div
          className={`${text}  w-f h-f overflow-hidde relative z-50 flex items-center justify-center whitespace-nowrap rounded-xl`}
        >
          {tag}
          {space && (
            <div
              className={` h-2px w-50px absolute rounded-sm bg-gray-800`}
              style={{ transform: `translateY(17px)` }}
            />
          )}
        </div>
        <div
          className={`duration-275 absolute -z-10 transition ease-in-out`}
          style={{
            transform: `translate(${
              !hover && !active && !extraActive ? `-300` : '10'
            }px, -10px)`,
          }}
        >
          <div className={`${hov}  h-175px rotate-20deg w-[300px]`}></div>
        </div>
        <div className={`absolute -z-20 ${bg} h-100px w-350px`}></div>
      </div>
    </motion.div>
  )

  // return (
  //   <motion.div
  //     animate={{
  //       boxShadow: `2px 5px 8px 3px rgba(50, 50, 50, 0.65)`,
  //       overflow: `hidden`,
  //     }}
  //     whileHover={{
  //       scale: 1.1,
  //       y: -2,
  //       overflow: `hidden`,
  //       boxShadow: `4px 8px 8px 3px rgba(50, 50, 50, 0.5)`,
  //     }}
  //     whileTap={{
  //       scale: 0.9,
  //       boxShadow: `1px 2px 8px 2px rgba(50, 50, 50, 0.75)`,
  //     }}
  //     className={`flex bg-transparent items-center select-none overflow-hidden relative justify-center  border ${border}  ${
  //       disableCursor ? `cursor-not-allowed` : `cursor-pointer`
  //     }  rounded-lg font-courier`}
  //     onMouseEnter={() => setHover(true)}
  //     onMouseLeave={() => setHover(false)}
  //     onMouseDown={onClick}
  //   >
  //     <div
  //       className={`flex z-60 relative overflow-hidden rounded justify-center items-center   ${py} ${px} `}
  //     >
  //       <div
  //         className={`${text}  z-50 whitespace-nowrap w-f h-f relative overflow-hidde rounded-xl flex justify-center items-center`}
  //       >
  //         {tag}
  //         {space && (
  //           <div
  //             className={` absolute h-2px w-50px bg-gray-800 rounded-sm`}
  //             style={{ transform: `translateY(17px)` }}
  //           />
  //         )}
  //       </div>
  //       <div
  //         className={`absolute -z-10 transition duration-275 ease-in-out`}
  //         style={{
  //           transform: `translate(${!hover ? `-260` : '10'}px, -10px)`,
  //         }}
  //       >
  //         <div className={`${hov}  w-275px h-175px rotate-20deg`}></div>
  //       </div>
  //       <div className={`-z-20 absolute ${bg} h-100px w-350px`}></div>
  //     </div>
  //   </motion.div>
  // )
}
