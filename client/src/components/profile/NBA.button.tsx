import React, { useState } from 'react'

interface IProps {
  tag: string
  onClick: () => void
  border?: string
  bg?: string
  hov?: string
  text?: string
  py?: string
  px?: string
  disableCursor?: boolean
}

export const NBAbutton: React.FC<IProps> = ({
  tag,
  onClick,
  border = `border-purple-500`,
  bg = `bg-purple-300`,
  hov = `bg-purple-500`,
  text = `text-2xl`,
  px = `px-4`,
  py = `py-2`,
  disableCursor = false,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`flex items-center overflow-hidden relative justify-center py-2 ${
        disableCursor ? `cursor-not-allowed` : `cursor-pointer`
      } ${py} ${px} border ${border} rounded-xl`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={onClick}
    >
      <div className={`${text} whitespace-nowrap`}>{tag}</div>
      <div
        className={`absolute -z-10 transition duration-275 ease-in-out`}
        style={{
          transform: `translate(${!hover ? `-260` : '10'}px, -10px)`,
        }}
      >
        <div className={`${hov}  w-275px h-175px rotate-20deg`}></div>
      </div>
      <div className={`-z-20 absolute ${bg} h-100px w-350px`}></div>
    </div>
  )
}
