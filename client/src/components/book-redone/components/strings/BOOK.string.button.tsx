import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'
import useLanguage from '../../../../hooks/useLanguage'

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

  const { isEng } = useLanguage()

  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className={`relative overflow-hidden rounded-xl`}
    >
      <div
        className={`relative overflow-hidden rounded-xl border px-3 py-1  
        ${
          num === choosenString
            ? themeColor1.border.t100
            : themeColor1.border.t500
        }
        duration-250 flex cursor-pointer items-center justify-center transition ease-in-out ${
          num === choosenString &&
          (isDarkMode ? ` ${themeColor1.bg.t400} ` : themeColor1.bg.t400)
        } ${isDarkMode && num !== choosenString && `text-gray-300`}`}
        onMouseDown={() => handleSetString(str, num)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isEng ? `book\u00a0` : `книга`}#{num + 1}
        <div
          className={`absolute -z-20 h-[70px] w-[250px] ${
            isDarkMode ? `  ${themeColor1.bg.t90030}` : themeColor1.bg.t100
          }`}
        />
        <motion.div
          animate={{
            x: hover || num === choosenString ? 0 : -210,
          }}
          transition={{ ease: `linear` }}
          className={`absolute -z-10 `}
        >
          <div
            className={`w-220px h-150px rotate-20deg ${
              isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t300
            }`}
          ></div>
        </motion.div>
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
  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className={`relative overflow-hidden rounded-xl`}
    >
      <div
        className={`duration-250 relative z-10 flex cursor-pointer  items-center justify-center overflow-hidden rounded-xl border ${
          isDarkMode ? themeColor1.border.t500 : themeColor1.border.t400
        } px-3 py-1 transition ease-in-out  ${isDarkMode && `text-gray-200`}`}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <div
          className={`absolute -z-20 h-[70px] w-[250px] ${
            isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t100
          }`}
        />
        <motion.div
          // initial={{y: -100}}
          animate={{ x: !hover ? -250 : 0 }}
          transition={{ ease: `linear` }}
          className={`absolute -z-10 `}
          style={
            {
              // transform: `translate(${!hover ? `-250` : '-20'}px, -100px)`,
            }
          }
        >
          <div
            className={`w-220px h-150px rotate-20deg ${
              isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t400
            }`}
          ></div>
        </motion.div>
      </div>
    </motion.div>
  )
}
