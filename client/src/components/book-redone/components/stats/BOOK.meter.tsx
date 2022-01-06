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
      className={`z-50  flex items-center justify-center overflow-hidden`}
      style={{
        width: 20,
        height: 25,
      }}
    >
      <div
        className={`z-50 bg-red-300 flex items-center justify-center`}
        style={{
          width: 10,
          height: 10,
          // transform: `rotateX(90deg) rotateY(90deg) rotateZ(${
          //   (360 / 100) * percent
          // }deg)`,
          transform: `rotateX(90deg) rotateY(90deg) rotateZ(${
            rotating * multiple
          }deg)`,
          transition: `0.3s ease-in-out`,
          transformStyle: `preserve-3d`,
        }}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((el) => (
          <div
            className={` absolute`}
            style={{
              width: 20,
              height: 20,
              transform: `rotate(${36 * -el - 180}deg) `,
              transformStyle: `preserve-3d`,
            }}
          >
            <div
              className={`z-50  flex justify-center items-center border  text-lg ${
                red
                  ? `bg-red-100 border-red-500 text-red-800`
                  : `bg-emerald-100 border-emerald-500 text-emerald-800 `
              }`}
              style={{
                width: 20,
                height: 20,
                transform: `translate(-0px, -30px) rotateX(90deg) rotateZ(90deg) `,
                transformStyle: `preserve-3d`,

                transition: '1s ease',
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
