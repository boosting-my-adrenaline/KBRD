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

  const colors: KeyColor[] = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'pink',
  ]

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
        className={`bg-${el}-500 rounded-full cursor-pointer`}
        style={{
          width: 50,
          height: 50,
          border: '1px solid grey',
        }}
        onMouseDown={(e) => handleClickColor(e, el)}
      ></div>
    ))[n]
  }

  return (
    <div
      className={'flex justify-center items-center'}
      style={{
        transform: `translateY(${open ? 30 : 0}px) translateX(${
          open ? -10 : 0
        }px)`,
        transition: '0.3s ease',
      }}
    >
      <div className="flex flex-col justify-center align-center  border-black">
        <div className="flex flex-row justify-center align-start gap-2">
          <div
            className={`
               bg-${
                 open ? 'bg-gray-400' : keyColor
               }-500  rounded-full flex flex-col justify-center items-center gap-0 font-courier uppercase cursor-pointer `}
            style={{
              overflow: 'hidden',
              width: open ? 175 : 50,
              height: open ? 175 : 50,
              border: '1px solid #505050',
              // opacity: open ? 0 : ,
              // fontSize: '2.1em',
              transition: '0.3s ease',
              transform: `rotate(${-rotating}deg) `,
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
              className={`flex flex-row justify-center items-center  `}
              style={{ gap: 60 }}
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
