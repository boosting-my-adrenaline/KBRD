import { motion } from 'framer-motion'
import React from 'react'
import useDarkMode from '../../../../hooks/useDarkMode'
import { KeyColor } from '../TAP.REDONE.main'

interface IProps {
  keyColor: KeyColor
  setKeyColor: (color: KeyColor) => void
}

export const TAPREDONEkeyColor: React.FC<IProps> = ({
  keyColor,
  setKeyColor,
}) => {
  const { isDarkMode } = useDarkMode()

  const getColor = (color: KeyColor) => {
    switch (color) {
      case `red`:
        return isDarkMode ? `bg-red-300` : `bg-red-500`
      case `emerald`:
        return isDarkMode ? `bg-emerald-300` : `bg-emerald-500`
      case `cyan`:
        return isDarkMode ? `bg-cyan-300` : `bg-cyan-500`
      case `amber`:
        return isDarkMode ? `bg-amber-300` : `bg-amber-500`
      case `fuchsia`:
        return isDarkMode ? `bg-fuchsia-300` : `bg-fuchsia-500`
      case `pink`:
        return isDarkMode ? `bg-pink-300` : `bg-pink-500`
    }
  }

  const element = (el: KeyColor) => (
    <motion.div
      initial={{ width: 24, height: 26 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={el === keyColor ? { y: -8 } : {}}
      key={el}
      className={`cursor-pointer rounded-md border border-gray-600 ${getColor(
        el
      )}  transition-colors duration-150 ease-in-out`}
      onMouseDown={() => setKeyColor(el)}
    ></motion.div>
  )

  const elements: KeyColor[] = [
    `red`,
    `emerald`,
    `cyan`,
    `amber`,
    `fuchsia`,
    `pink`,
  ]

  const buttons = elements.map((el) => element(el))

  return (
    <div
      className={`w-150px rounded-m font-courier gap-2px flex  translate-x-[8px] items-center justify-center text-xl `}
    >
      {buttons}
    </div>
  )
}
