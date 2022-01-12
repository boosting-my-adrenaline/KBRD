import React, { useEffect, useState } from 'react'
import { KeyColor } from '../TAP.shooting'

interface IProps {
  keyColor: KeyColor
  typeCells: {
    numbers: boolean
    letters: boolean
    punctuation: boolean
  }
  handleSetTypeCells(type: 1 | 2 | 3): void
}

export const TAPshootingKeyType: React.FC<IProps> = ({
  keyColor,
  typeCells,
  handleSetTypeCells,
}) => {
  const [open, setOpen] = useState(false)
  const [rotating, setRotating] = useState(0)

  useEffect(() => {
    open ? setRotating((prev) => prev + 360) : setRotating((prev) => prev - 360)
  }, [open])

  const getColor = (color: KeyColor) => {
    switch (color) {
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
      case `red`:
        return `bg-red-500`
      case `pink`:
        return `bg-pink-500`
    }
  }

  const handleClickColor = (event: React.MouseEvent, type: 1 | 2 | 3): void => {
    event.preventDefault()
    event.stopPropagation()

    if (type !== 1) {
      handleSetTypeCells(type)
    }
    // setOpen(false)
    setOpen((prev) => !prev)
  }

  const handleOpen = (event: React.MouseEvent): void => {
    // event.stopPropagation()
    // setOpen(true)
    setOpen((prev) => !prev)
  }

  return (
    <div
      className={`h-20px flex justify-center items-center transition duration-300 ease-in-out`}
      style={{
        transform: `translateY(${open ? 30 : 0}px) translateX(${
          open ? 10 : 0
        }px)`,
      }}
    >
      <div className="flex flex-col justify-center align-center  border-black">
        <div className="flex flex-row justify-center align-start gap-2">
          <div
            className={`
               ${
                 open ? `bg-gray-200` : getColor(keyColor)
               }   rounded-full overflow-hidden flex flex-col justify-center  items-center gap-3 border border-gray-600 font-courier uppercase cursor-pointer text-4xl transition duration-300 ease-in-out`}
            style={{
              transition: `0.3s ease-in-out`,
              width: open ? 175 : 50,
              height: open ? 175 : 50,

              transform: `rotate(${-rotating}deg) `,
            }}
            onMouseDown={handleOpen}
          >
            {!open ? (
              'N'
            ) : (
              <div
                className={`flex flex-col justify-center items-center gap-4 p-10 mt-10px`}
                onMouseDown={() => setOpen((prev) => !prev)}
              >
                <div
                  className={`absolute w-f h-f`}
                  onMouseDown={() => setOpen((prev) => !prev)}
                ></div>
                <div className={`z-10 flex items-center gap-6`}>
                  <div
                    className={`w-50px h-50px bg-${keyColor}-${
                      typeCells.numbers ? 500 : 100
                    } rounded-full border border-gray-600 cursor-pointer flex items-center justify-center text-3xl`}
                    onMouseDown={(e) => handleClickColor(e, 1)}
                  >
                    N
                  </div>
                  <div
                    className={`w-50px h-50px border border-gray-600 ${
                      typeCells.letters ? getColor(keyColor) : `bg-gray-300`
                    } rounded-full cursor-pointer flex items-center justify-center text-3xl`}
                    onMouseDown={(e) => handleClickColor(e, 2)}
                  >
                    1
                  </div>
                </div>

                <div
                  className={`z-10 flex flex-row justify-center items-center  `}
                >
                  <div
                    className={`w-50px h-50px border border-gray-600 ${
                      typeCells.punctuation ? getColor(keyColor) : `bg-gray-300`
                    } rounded-full cursor-pointer flex items-center justify-center text-3xl`}
                    onMouseDown={(e) => handleClickColor(e, 3)}
                  >
                    $
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
