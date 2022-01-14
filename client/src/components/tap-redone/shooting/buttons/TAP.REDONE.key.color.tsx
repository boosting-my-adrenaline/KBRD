import { motion } from 'framer-motion'
import React from 'react'
import { KeyColor } from '../TAP.REDONE.main'

interface IProps {
  keyColor: KeyColor
  setKeyColor: (color: KeyColor) => void
}

export const TAPREDONEkeyColor: React.FC<IProps> = ({
  keyColor,
  setKeyColor,
}) => {
  const getColor = (color: KeyColor) => {
    switch (color) {
      case `red`:
        return `bg-red-500`
      case `emerald`:
        return `bg-emerald-500`
      case `cyan`:
        return `bg-cyan-500`
      case `amber`:
        return `bg-amber-500`
      case `fuchsia`:
        return `bg-fuchsia-500`
      case `pink`:
        return `bg-pink-500`
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
      className={`w-150px flex items-center justify-center  rounded-m font-courier gap-2px text-xl `}
    >
      {buttons}
    </div>
  )
}
