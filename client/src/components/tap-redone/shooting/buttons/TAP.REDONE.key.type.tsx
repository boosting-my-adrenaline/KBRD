import { motion } from 'framer-motion'
import React from 'react'
import useDarkMode from '../../../../hooks/useDarkMode'
import useLanguage from '../../../../hooks/useLanguage'
import { KeyColor } from '../TAP.REDONE.main'

interface IProps {
  keyType: [boolean, boolean, boolean]
  handleKeyType: (type: 1 | 2 | 3) => void
  keyColor: KeyColor
}

export const TAPREDONEkeyType: React.FC<IProps> = ({
  keyType,
  keyColor,
  handleKeyType,
}) => {
  const { isDarkMode } = useDarkMode()

  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return [
          isDarkMode ? `bg-red-300` : `bg-red-500`,
          isDarkMode ? `bg-red-800` : `bg-red-200`,
          `border-red-600`,
        ]
      case `emerald`:
        return [
          isDarkMode ? `bg-emerald-300` : `bg-emerald-500`,
          isDarkMode ? `bg-emerald-800` : `bg-emerald-200`,
          `border-emerald-600`,
        ]
      case `cyan`:
        return [
          isDarkMode ? `bg-cyan-300` : `bg-cyan-500`,
          isDarkMode ? `bg-cyan-800` : `bg-cyan-200`,
          `border-cyan-600`,
        ]
      case `amber`:
        return [
          isDarkMode ? `bg-amber-300` : `bg-amber-500`,
          isDarkMode ? `bg-amber-800` : `bg-amber-200`,
          `border-amber-600`,
        ]
      case `fuchsia`:
        return [
          isDarkMode ? `bg-fuchsia-300` : `bg-fuchsia-500`,
          isDarkMode ? `bg-fuchsia-800` : `bg-fuchsia-200`,
          `border-fuchsia-600`,
        ]
      case `pink`:
        return [
          isDarkMode ? `bg-pink-300` : `bg-pink-500`,
          isDarkMode ? `bg-pink-800` : `bg-pink-200`,
          `border-pink-600`,
        ]
    }
  }

  const { isEng } = useLanguage()

  const element = (tag: string, num: 1 | 2 | 3, extra: string) => (
    <motion.div
      initial={{ padding: `2px 7px` }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      animate={keyType[num - 1] ? { y: -8 } : {}}
      key={num}
      className={`cursor-pointer rounded-md ${
        keyType[num - 1]
          ? `${getColor()[0]} ${isDarkMode ? `text-gray-900` : `text-gray-900`}`
          : `${getColor()[1]}  ${
              isDarkMode ? `text-gray-300` : `text-gray-700`
            }`
      } border ${
        isDarkMode ? `border-gray-300` : `border-gray-600`
      }  ${extra} transition-colors duration-150 ease-in-out`}
      onMouseDown={() => handleKeyType(num)}
    >
      {tag}
    </motion.div>
  )

  const elements: [string, 1 | 2 | 3, string][] = [
    [isEng ? `ABC` : `АБВ`, 1, ``],
    [`123`, 2, ``],
    [`#$%`, 3, ``],
  ]

  const buttons = elements.map((el) => element(el[0], el[1], el[2]))

  return (
    <div
      className={`w-150px rounded-m  flex  items-center justify-center gap-1 text-xl `}
    >
      {buttons}
    </div>
  )
}
