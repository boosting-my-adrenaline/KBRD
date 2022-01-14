import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  char: null | string
  color: string
}

export const TAPREDONEelement: React.FC<IProps> = ({ char, color }) => {
  const [show, setShow] = useState(false)
  const [tag, setTag] = useState(``)

  useDidMountEffect(() => {
    if (char) {
      setTag(char)
      setShow(true)
    } else {
      setTag(``)
      setTimeout(() => setShow(false), 100)
    }
  }, [char])

  // char = `A`
  return (
    <div
      className={`flex justify-center items-center font-courier w-100px h-100px text-gray-900 `}
    >
      {show ? (
        <motion.div
          initial={{ width: 75, height: 75, fontSize: `9em` }}
          animate={{
            width: tag ? 50 : [60, 10],
            height: tag ? 50 : [60, 10],
            fontSize: tag ? `2.5em` : `0.5em`,
            border: tag ? `` : `1px solid grey`,
          }}
          transition={{ duration: 0.2 }}
          className={`${color}  flex justify-center items-center rounded-full uppercase`}
        >
          <div
            className={` flex items-center justify-center`}
            style={{
              marginTop: `:;()[]{}-_`.split('').includes(tag || ` `)
                ? `-10px`
                : ``,
            }}
          >
            {tag}
            {[`f`, 'j'].includes(tag) && (
              <div
                className={` w-10px h-2px absolute bg-gray-800 rounded-full translate-y-18px`}
              />
            )}
          </div>
        </motion.div>
      ) : (
        <div className={`w-50px h-50px`} />
      )}
    </div>
  )
}
