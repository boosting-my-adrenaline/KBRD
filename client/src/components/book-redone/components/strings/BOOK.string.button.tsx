import React, { useState } from 'react'

interface IProps {
  choosenString: number
  num: number
  str: string
  handleSetString(str: string, num: number): void
}

export const BOOKstringButton: React.FC<IProps> = ({
  choosenString,
  num,
  str,
  handleSetString,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{
        transform: `translateY(${hover ? -3 : 0}px)`,
        transition: '0.125s ease-in-out',
      }}
    >
      <div
        className={`px-3 py-1 rounded-xl border border-red-${
          num === choosenString ? '400 bg-red-300' : 300
        } cursor-pointer `}
        style={{
          transition: '0.25s ease-in-out',
        }}
        onMouseDown={() => handleSetString(str, num)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        book #{num + 1}
      </div>
    </div>
  )
}

interface IProps2 {
  title: string
  onClick(): void
}

export const BOOKstringButtonFunctional: React.FC<IProps2> = ({
  title,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{
        transform: `translateY(${hover ? -3 : 0}px)`,
        transition: '0.125s ease-in-out',
      }}
    >
      <div
        className={`px-3 py-1 rounded-xl border border-red-400 bg-red-${
          hover ? 300 : 200
        } active:bg-red-400 cursor-pointer `}
        style={{
          transition: '0.25s ease-in-out',
        }}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
      </div>
    </div>
  )
}