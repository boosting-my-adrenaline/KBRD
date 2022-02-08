import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  char: null | string
  color: string
  trainingLanguage: boolean
}

export const TAPREDONEelement: React.FC<IProps> = ({
  char,
  color,
  trainingLanguage,
}) => {
  const [show, setShow] = useState(false)
  const [tag, setTag] = useState(``)

  useDidMountEffect(() => {
    let id = setTimeout(() => {})
    if (char) {
      setTag(char)
      setShow(true)
    } else {
      setTag(``)
      id = setTimeout(() => setShow(false), 100)
    }
    return () => clearTimeout(id)
  }, [char])

  const { isEng } = useLanguage()

  // char = `A`
  return (
    <div
      className={`${
        trainingLanguage ? `font-courier` : `font-CourierC`
      } w-100px h-100px flex items-center justify-center text-gray-900 `}
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
          className={`${color}  flex items-center justify-center rounded-full uppercase`}
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
            {[`f`, 'j', 'а', 'о'].includes(tag) && (
              <div
                className={` w-10px h-2px translate-y-18px absolute rounded-full bg-gray-800`}
              />
            )}
          </div>
        </motion.div>
      ) : (
        <div className={`w-50px h-50px`} />
      )}
    </div>
    // <div>{char}</div>
  )
}
