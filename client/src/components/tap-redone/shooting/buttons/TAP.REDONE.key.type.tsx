import { motion } from 'framer-motion'
import React from 'react'
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
  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return [`bg-red-500`, `bg-red-200`, `border-red-600`]
      case `emerald`:
        return [`bg-emerald-500`, `bg-emerald-200`, `border-emerald-600`]
      case `cyan`:
        return [`bg-cyan-500`, `bg-cyan-200`, `border-cyan-600`]
      case `amber`:
        return [`bg-amber-500`, `bg-amber-200`, `border-amber-600`]
      case `fuchsia`:
        return [`bg-fuchsia-500`, `bg-fuchsia-200`, `border-fuchsia-600`]
      case `pink`:
        return [`bg-pink-500`, `bg-pink-200`, `border-pink-600`]
    }
  }

  const element = (tag: string, num: 1 | 2 | 3, extra: string) => (
    <motion.div
      initial={{ padding: `2px 7px` }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={keyType[num - 1] ? { y: -8 } : {}}
      key={num}
      className={`cursor-pointer rounded-md ${
        keyType[num - 1]
          ? `${getColor()[0]} text-gray-900`
          : `${getColor()[1]} text-gray-700`
      } border border-gray-600  ${extra} transition-colors duration-150 ease-in-out`}
      onMouseDown={() => handleKeyType(num)}
    >
      {tag}
    </motion.div>
  )

  const elements: [string, 1 | 2 | 3, string][] = [
    [`ABC`, 1, ``],
    [`123`, 2, ``],
    [`#$%`, 3, ``],
  ]

  const buttons = elements.map((el) => element(el[0], el[1], el[2]))

  return (
    <div
      className={`w-150px flex items-center justify-center  rounded-m font-courier gap-1 text-xl `}
    >
      {buttons}
    </div>
  )
}
