import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface IProps {
  active: boolean
  onClick?: () => void
  border?: string
  bg?: string
  hov?: string
}

export const NBAcheckbox: React.FC<IProps> = ({
  active,
  onClick = () => {},
  border = `border-gray-800`,
  bg = `bg-sky-50`,
  hov = `bg-sky-300`,
}) => {
  const [hover, setHover] = useState(false)
  const [counter, setCounter] = useState(0)

  return (
    <div className={`flex justify-center items-center cursor-pointer `}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{
          rotate: 90 * counter,
        }}
        transition={{
          type: `spring`,
        }}
        className={`  absolute w-16px h-16px border rounded-sm ${border} ${
          active ? hov : bg
        } transition-colors duration-300 ease-in-out`}
        onMouseEnter={() => {
          setHover(true)
          setCounter((prev) => prev + 1)
        }}
        onMouseLeave={() => setHover(false)}
        onMouseDown={onClick}
      />
      <div style={{ transform: `translate(0px, -1px)`, zIndex: 10 }}>
        <div>
          <motion.div
            animate={{
              width: 8,
              height: 11,
              rotate: active ? 45 : -45,
              x: active ? 0 : -300,
              y: active ? 0 : -100,
              opacity: active ? 1 : 0,
            }}
            transition={{
              default: { type: `spring` },
              width: {
                delay: 0.1,
                duration: 0.2,
              },
              height: { duration: 0.3 },
            }}
            className={`border-b-2 border-r-2 border-black rounded-xs`}
          />
        </div>
      </div>
    </div>
  )
}
