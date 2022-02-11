import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  k?: number
  b?: number
  r?: number
  d?: number
  onClick(): void
  tsition?: number
}

export const NAVlogo: React.FC<IProps> = ({
  k = 35,
  b = 35,
  r = 35,
  d = 35,
  onClick,
  tsition = 0.175,
}) => {
  const [K, setK] = useState(k)
  const [B, setB] = useState(b)
  const [R, setR] = useState(r)
  const [D, setD] = useState(d)

  const [observer, setObserver] = useState(0)

  useDidMountEffect(() => {
    let del1 = 100,
      del2 = 180,
      del3 = 250

    let id = setTimeout(() => {
      setK((prev) => prev * 0.5)
      setTimeout(() => setK(k), del1)
      setTimeout(() => setK((prev) => prev * 1.5), del2)
      setTimeout(() => setK(k), del3)
    }, 160)

    let id2 = setTimeout(() => {
      setB((prev) => prev * 0.5)
      setTimeout(() => setB(b), del1)
      setTimeout(() => setB((prev) => prev * 1.5), del2)
      setTimeout(() => setB(b), del3)
    }, 120)

    let id3 = setTimeout(() => {
      setR((prev) => prev * 0.5)
      setTimeout(() => setR(r), del1)
      setTimeout(() => setR((prev) => prev * 1.5), del2)
      setTimeout(() => setR(r), del3)
    }, 40)

    let id4 = setTimeout(() => {
      setD((prev) => prev * 0.5)
      setTimeout(() => setD(d), del1)
      setTimeout(() => setD((prev) => prev * 1.5), del2)
      setTimeout(() => setD(d), del3)
    }, 0)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
    }
  }, [observer])

  const handleClick = () => {
    onClick()
    setObserver((prev) => prev + 1)
  }

  const element = (letter: string, size: number, key: any) => (
    <motion.div
      animate={{
        scale: size / 20,
        x: -size * 2.5,
      }}
      key={key}
      className={`mx-1 text-gray-800`}
      // style={{ transition: `${tsition}s ease-in-out`, fontSize: size }}
    >
      {letter}
    </motion.div>
  )
  const letters: [letter: string, size: number][] = [
    ['K', K],
    ['B', B],
    ['R', R],
    ['D', D],
  ]

  const elements = letters.map((el, i) => element(el[0], el[1], i))

  return (
    <motion.div
      whileHover={{
        rotate: [1, -2, 4, -6, 4, -2, 1, 0],
        repeatCount: Infinity,
        scale: 1.1,
      }}
      className={`flex select-none items-center justify-center`}
      style={{ width: 500 }}
      onMouseDown={handleClick}
    >
      {elements}
    </motion.div>
  )
}
