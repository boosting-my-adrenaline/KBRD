import React, { useEffect, useState } from 'react'
import { KeyColor } from '../TAP.shooting'

interface IProps {
  keyColor: KeyColor
  setKeyColor(color: KeyColor): void
}

export const TAPshootingKeyStyle: React.FC<IProps> = ({
  keyColor,
  setKeyColor,
}) => {
  const [open, setOpen] = useState(false)
  const [rotating, setRotating] = useState(0)

  useEffect(() => {
    open ? setRotating((prev) => prev + 360) : setRotating((prev) => prev - 360)
  }, [open])

  const colors: [color: KeyColor, colorParam: string][] = [
    [`red`, 'bg-red-500'],
    [`emerald`, 'bg-emerald-500'],
    [`cyan`, 'bg-cyan-500'],
    [`amber`, 'bg-amber-500'],
    [`fuchsia`, 'bg-fuchsia-500'],
    [`pink`, 'bg-pink-500'],
  ]

  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return `bg-red-500`
      case `emerald`:
        return `bg-emerald-500`
      case `cyan`:
        return `bg-cyan-500`
      case `amber`:
        return `bg-amber-500`
      case `fuchsia`:
        return `bg-fuchsia-500`
      case `pink`:
        return `bg-pink-500`
    }
  }

  const handleClickColor = (event: React.MouseEvent, color: KeyColor): void => {
    event.preventDefault()
    event.stopPropagation()

    setKeyColor(color)
    setOpen(false)
  }

  const handleOpen = (event: React.MouseEvent): void => {
    event.stopPropagation()
    setOpen(true)
  }

  const getElement = (n: number) => {
    return colors.map((el) => (
      <div
        className={`w-50px h-50px ${el[1]} rounded-full cursor-pointer border border-gray-600`}
        onMouseDown={(e) => handleClickColor(e, el[0])}
      ></div>
    ))[n]
  }

  return (
    <div
      className={
        'h-20px flex justify-center items-center transition duration-300 ease-linear'
      }
      style={{
        transform: `translateY(${open ? 30 : 0}px) translateX(${
          open ? -10 : 0
        }px)`,
      }}
    >
      <div className="flex flex-col justify-center align-center  border-black">
        <div className="flex flex-row justify-center align-start gap-2">
          <div
            className={`
               ${open && `bg-gray-200`} ${
              !open && getColor()
            } overflow-hidden border border-gray-600 rounded-full flex flex-col justify-center items-center gap-0 font-courier uppercase cursor-pointer transition duration-300 ease-in-out`}
            style={{
              width: open ? 175 : 50,
              height: open ? 175 : 50,
              transform: `rotate(${-rotating}deg) `,
              transition: `0.3s ease-in-out`,
            }}
            onMouseDown={handleOpen}
          >
            <div
              className={`flex flex-row justify-center items-center gap-2  `}
            >
              <div>{getElement(0)}</div>
              <div>{getElement(1)}</div>
            </div>
            <div
              className={`flex flex-row justify-center items-center  gap-60px`}
            >
              <div>{getElement(2)}</div>
              <div>{getElement(3)}</div>
            </div>
            <div className={`flex flex-row justify-center items-center gap-2 `}>
              <div>{getElement(4)}</div>
              <div>{getElement(5)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
