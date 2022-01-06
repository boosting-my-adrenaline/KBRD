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
      className={`rounded-xl overflow-hidden`}
      style={{
        transform: `translateY(${hover ? -3 : 0}px)`,
        transition: '0.125s ease-in-out',
      }}
    >
      <div
        className={`relative overflow-hidden px-3 py-1 rounded-xl border  
        ${num === choosenString ? `border-red-400 ` : `border-red-300`}
        cursor-pointer active:bg-red-400`}
        // className={`px-3 py-1 rounded-xl border border-red-400 cursor-pointer `}
        style={{
          transition: '0.25s ease-in-out',
        }}
        onMouseDown={() => handleSetString(str, num)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        book #{num + 1}
        <div
          className={`absolute -z-10 `}
          style={{
            transform: `translate(${
              !hover && num !== choosenString ? `-250` : '-20'
            }px, -100px)`,
            transition: '0.3s ease-in-out',
          }}
        >
          <div
            className={`bg-red-300`}
            style={{ width: 220, height: 150, transform: `rotate(20deg)` }}
          ></div>
        </div>
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
      className={`rounded-xl`}
      style={{
        overflow: 'hidden',
        transform: `translateY(${hover ? -3 : 0}px)`,
        transition: '0.125s ease-in-out',
      }}
    >
      <div
        className={`px-3 py-1 z-10 overflow-hidden rounded-xl border border-red-400 bg-red- ${
          hover ? 300 : 200
        } active:bg-red-400 cursor-pointer `}
        style={{
          position: 'relative',
          transition: '0.25s ease-in-out',
        }}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <div
          className={`absolute -z-10 `}
          style={{
            transform: `translate(${!hover ? `-250` : '-20'}px, -100px)`,
            transition: '0.3s ease-in-out',
          }}
        >
          <div
            className={`bg-red-400`}
            style={{ width: 220, height: 150, transform: `rotate(20deg)` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
