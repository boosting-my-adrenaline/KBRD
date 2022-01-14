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
      className={` flex items-center justify-center overflow-hidden rounded-xl `}
    >
      <button
        className={`relative overflow-hidden z-10 px-4 py-2 rounded-xl  justify-self-end outline-none ${
          active ? 'text-gray-800 bg-red-400' : 'text-gray-600 bg-gray-300/60'
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
          <div className={`bg-red-200 w-220px h-150px rotate-20deg`} />
        </div>
      </button>
      <button
        className={`absolute  px-3 py-1 rounded-xl  animate-pulse ${
          active && `shadow-8th`
        }  shadow-red-600 transition duration-500 ease bg-transparent`}
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
      className={`overflow-hidden rounded-xl `}
    >
      <div
        className={`relative overflow-hidden rounded-xl px-4 py-2  border border-red-400 active:bg-red-100 cursor-pointer transition duration-250 ease-in-out`}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}1
        <div
          className={`absolute -z-10 transition duration-300 ease-in-out`}
          style={{
            transform: `translate(${!hover ? `-245` : '-120'}px, -100px)`,
          }}
        >
          <div className={`bg-red-400 w-220px h-150px rotate-20deg`} />
        </div>
        <div
          className={`-z-20 absolute bg-red-200 w-200px h-100px `}
          style={{
            transform: `translate(-100px, -50px)`,
          }}
        />
      </div>
    </motion.div>
  )
}
