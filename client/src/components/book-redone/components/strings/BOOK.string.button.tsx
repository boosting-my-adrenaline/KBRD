import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface IProps {
  choosenString: number
  num: number
  str: string
  handleSetString(str: string, num: number): void
}

export const BOOKstringButton: React.FC<IProps> = ({
  choosenString,
  num,
  str,
  handleSetString,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-xl overflow-hidden relative`}
    >
      <div
        className={`relative overflow-hidden px-3 py-1 rounded-xl border  
        ${num === choosenString ? `border-red-400 ` : `border-red-300`}
        cursor-pointer active:bg-red-400 transition duration-250 ease-in-out`}
        onMouseDown={() => handleSetString(str, num)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        book #{num + 1}
        <div
          className={`absolute -z-10 transition duration-300 ease-in-out`}
          style={{
            transform: `translate(${
              !hover && num !== choosenString ? `-250` : '-20'
            }px, -100px)`,
          }}
        >
          <div className={`bg-red-300 w-220px h-150px rotate-20deg`}></div>
        </div>
      </div>
    </motion.div>
  )
}

interface IProps2 {
  title: string
  onClick(): void
}

export const BOOKstringButtonFunctional: React.FC<IProps2> = ({
  title,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-xl overflow-hidden relative`}
    >
      <div
        className={`px-3 py-1 z-10 relative overflow-hidden  rounded-xl border border-red-400 active:bg-red-400 cursor-pointer transition duration-250 ease-in-out`}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <motion.div
          animate={{ x: !hover ? -250 : -20, y: -100 }}
          transition={{ ease: `linear` }}
          className={`absolute -z-10 `}
          style={
            {
              // transform: `translate(${!hover ? `-250` : '-20'}px, -100px)`,
            }
          }
        >
          <div className={`bg-red-400 w-220px h-150px rotate-20deg`}></div>
        </motion.div>
      </div>
    </motion.div>
  )
}
