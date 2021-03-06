import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'
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

  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`${
        tag === `A` && `font-courier font-extrabold`
      } flex items-center justify-center overflow-hidden rounded-xl `}
    >
      <button
        className={`relative z-10 justify-self-end overflow-hidden rounded-xl px-4  py-2 outline-none ${
          active
            ? isDarkMode
              ? `${themeColor1.bg.t300} ${
                  isHovered ? themeColor1.text.t300 : themeColor1.text.t800
                }`
              : `${themeColor1.bg.t400} ${themeColor1.text.t800}`
            : isDarkMode
            ? 'bg-gray-800/60 text-gray-400'
            : 'bg-gray-200/60 text-gray-600'
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
          <div
            className={`w-220px h-150px rotate-20deg ${
              isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t200
            }`}
          />
        </div>
      </button>
      <button
        className={`absolute  animate-pulse rounded-xl px-3  py-1 ${
          active && `shadow-8th`
        }  ease bg-transparent  ${
          themeColor1.shadow.t600
        } transition duration-500`}
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

  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`overflow-hidden rounded-xl `}
    >
      <div
        className={`duration-250 relative cursor-pointer overflow-hidden rounded-xl  border  ${
          isDarkMode
            ? `text-gray-300 ${themeColor1.border.t200}`
            : themeColor1.border.t400
        } px-4 py-2 transition ease-in-out active:bg-white`}
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
          <div
            className={`w-220px h-150px rotate-20deg  ${
              isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t400
            }`}
          />
        </div>
        <div
          className={`w-200px h-100px absolute -z-20  ${
            isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t200
          }`}
          style={{
            transform: `translate(-100px, -50px)`,
          }}
        />
      </div>
    </motion.div>
  )
}
