import React, { useState } from 'react'
import { Chapters } from '../../../types/nav'

interface IProps {
  link: Chapters
  chapter: Chapters
  ThemeColor: string
  ShadowColor: string
  onClick(link: Chapters): void
}

export const NAVlink: React.FC<IProps> = ({
  link,
  chapter,
  ThemeColor,
  ShadowColor,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div
      className={`flex items-center justify-center py-1  cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setIsClicked(true)
        onClick(link as Chapters)
        setTimeout(() => setIsClicked(false), 1500)
      }}
    >
      <a
        className={`outline-none text:xl md:text-3xl  select-none lowercase
         flex-row rounded-md transition-all  ${isClicked && 'animate-bounce'}
         ${
           hover && 'animate-pusle'
         }  text-gray-800 hover:text-black cursor-pointer `}
        style={{
          transform: `translateY(${hover ? -6 : 0}px)`,
        }}
      >
        <div>{link}</div>
      </a>
    </div>
  )
}
