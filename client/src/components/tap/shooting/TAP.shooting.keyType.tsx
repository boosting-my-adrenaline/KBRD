import React, { useEffect, useState } from 'react'
import { KeyColor, KeyType } from '../TAP.shooting'

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

  // const getElement = (n: number) => {
  //   return .map((el) => (
  //     <div
  //       className={`bg-${el}-500 rounded-full cursor-pointer`}
  //       style={{
  //         width: 50,
  //         height: 50,
  //         border: '1px solid grey',
  //       }}
  //       onMouseDown={(e) => handleClickColor(e, el)}
  //     ></div>
  //   ))[n]
  // }

  return (
    <div
      className={'flex justify-center items-center'}
      style={{
        height: 20,
        transform: `translateY(${open ? 30 : 0}px) translateX(${
          open ? 10 : 0
        }px)`,
        transition: '0.3s ease',
      }}
    >
      <div className="flex flex-col justify-center align-center  border-black">
        <div className="flex flex-row justify-center align-start gap-2">
          <div
            className={`
               bg-${open ? 'bg-gray-400' : keyColor}-500 opacity-${
              open ? 100 : 100
            }  rounded-full flex flex-col justify-center items-center gap-3 font-courier uppercase cursor-pointer text-4xl`}
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
            {!open ? (
              'N'
            ) : (
              <div
                className={`flex flex-col justify-center items-center gap-4 p-10`}
                style={{
                  marginTop: 10,
                }}
                onMouseDown={() => setOpen((prev) => !prev)}
              >
                <div
                  className={`absolute w-f h-f`}
                  onMouseDown={() => setOpen((prev) => !prev)}
                ></div>
                <div className={`z-10 flex items-center gap-6`}>
                  <div
                    className={`bg-${keyColor}-${
                      typeCells.numbers ? 500 : 100
                    } rounded-full cursor-pointer flex items-center justify-center text-3xl`}
                    style={{
                      width: 50,
                      height: 50,
                      border: '1px solid grey',
                    }}
                    onMouseDown={(e) => handleClickColor(e, 1)}
                  >
                    N
                  </div>
                  <div
                    className={`bg-${keyColor}-${
                      typeCells.letters ? 500 : 100
                    } rounded-full cursor-pointer flex items-center justify-center text-3xl`}
                    style={{
                      width: 50,
                      height: 50,
                      border: '1px solid grey',
                    }}
                    onMouseDown={(e) => handleClickColor(e, 2)}
                  >
                    1
                  </div>
                </div>

                <div
                  className={`z-10 flex flex-row justify-center items-center  `}
                >
                  <div
                    className={`bg-${keyColor}-${
                      typeCells.punctuation ? 500 : 100
                    } rounded-full cursor-pointer flex items-center justify-center text-3xl`}
                    style={{
                      width: 50,
                      height: 50,
                      border: '1px solid grey',
                    }}
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
