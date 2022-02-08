import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  tag: string
  onClick?(active: boolean): void
  active: boolean
  hoverInfo?: string
}

export const BOOKbuttonVisual: React.FC<IProps> = ({
  tag,
  onClick = () => {},
  active,
  hoverInfo = 'just a text to test if its working',
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const [info, setInfo] = useState(false)

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        isHovered ? setInfo(false) : setInfo(false)
      },
      isHovered ? 700 : 10
    )

    return () => clearTimeout(id)
  }, [isHovered])

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={` flex items-center justify-center overflow-hidden rounded-xl `}
    >
      <button
        className={`relative z-10 justify-self-end overflow-hidden rounded-xl px-4  py-2 outline-none ${
          active ? 'bg-red-400 text-gray-800' : 'bg-gray-300/60 text-gray-600'
        } transition duration-1000 ease-in-out`}
        onMouseDown={(e) => {
          e.preventDefault()
          onClick(!active)
          setIsHovered(false)
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {tag}
        <div
          className={`absolute -z-10 transition duration-300 ease-in-out`}
          style={{
            transform: `translate(${!isHovered ? `-250` : '-20'}px, -100px)`,
          }}
        >
          <div className={`w-220px h-150px rotate-20deg bg-red-200`} />
        </div>
      </button>
      <button
        className={`absolute  animate-pulse rounded-xl px-3  py-1 ${
          active && `shadow-8th`
        }  ease bg-transparent shadow-red-600 transition duration-500`}
        disabled
      >
        {tag}
      </button>
    </motion.div>
  )
}

interface IProps2 {
  title: string
  onClick(): void
}

export const BOOKbuttonVisualFunctional: React.FC<IProps2> = ({
  title,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`overflow-hidden rounded-xl `}
    >
      <div
        className={`duration-250 relative cursor-pointer overflow-hidden rounded-xl  border border-red-400 px-4 py-2 transition ease-in-out active:bg-red-100`}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <div
          className={`absolute -z-10 transition duration-300 ease-in-out`}
          style={{
            transform: `translate(${!hover ? `-245` : '-120'}px, -100px)`,
          }}
        >
          <div className={`w-220px h-150px rotate-20deg bg-red-400`} />
        </div>
        <div
          className={`w-200px h-100px absolute -z-20 bg-red-200 `}
          style={{
            transform: `translate(-100px, -50px)`,
          }}
        />
      </div>
    </motion.div>
  )
}
