import React, { useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps2 {
  changer: any
  multiple: number
  red?: boolean
}

export const BOOKmeter2: React.FC<IProps2> = ({ changer, multiple, red }) => {
  const [rotating, setRotating] = useState(0)

  useDidMountEffect(() => {
    setRotating((prev) => prev + 36)
  }, [changer])

  return (
    <div
      className={`w-20px  h-25px z-50 flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`w-10px h-10px prese z-50 flex items-center justify-center bg-red-300 transition duration-300 ease-in-out`}
        style={{
          transform: `rotateX(90deg) rotateY(90deg) rotateZ(${
            rotating * multiple
          }deg)`,
          transformStyle: `preserve-3d`,
        }}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((el) => (
          <div
            key={el}
            className={` w-20px h-20px absolute`}
            style={{
              transform: `rotate(${36 * -el - 180}deg) `,
              transformStyle: `preserve-3d`,
            }}
          >
            <div
              className={`z-50  flex items-center justify-center border  text-lg ${
                red
                  ? `border-red-500 bg-red-100 text-red-800`
                  : `border-emerald-500 bg-emerald-100 text-emerald-800 `
              } w-20px h-20px transition duration-1000 ease-linear`}
              style={{
                transform: `translate(-0px, -30px) rotateX(90deg) rotateZ(90deg) `,
                transformStyle: `preserve-3d`,
              }}
            >
              {el}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
