import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { BlinkRandomSymbol } from './BlinkRandomSymbol'

interface IPropsHex {
  isAbsolute?: boolean
  side?: number
  side2?: number
  bg?: string
  bg2?: string
  empty?: boolean
  fontSize?: number
  transition?: string
}

export const Hexagon: React.FC<IPropsHex> = ({
  isAbsolute = false,
  side = 180,
  side2 = 44,
  // bg2 = 'rgb(252, 211, 77)',
  bg2 = `rgba(0, 0, 0, 1)`,
  // bg = 'rgb(200, 166, 70)',
  empty = false,
  fontSize = 150,
  transition = '1s ease-in-out',
}) => {
  // const [bgMain, setBgMain] = useState(bg2)
  const [bgMain, setBGmain] = useState(bg2)
  const [isSymbol, setIsSymbol] = useState(false)

  const colors = ['#6ee7b7', '#a5b4fc', '#f9a8d4']

  useDidMountEffect(() => {
    if (empty) return
    if (!isSymbol) {
      // setBgMain(bg2)
      setBGmain(bg2)
    } else {
      let color = colors[Math.floor(Math.random() * 3)]
      // setBgMain(color)
      setBGmain(color)
    }
  }, [isSymbol])

  return (
    <div
      className={`${
        isAbsolute ? 'absolute' : ' '
      } flex flex-col items-center justify-center overflow-visible`}
    >
      <div
        style={{
          width: 0,
          borderBottom: `${side / 2}px solid ${bg2}`,
          borderLeft: `${(side / 180) * 156}px solid transparent`,
          borderRight: `${(side / 180) * 156}px solid transparent`,
          transition: `${transition}`,
        }}
      ></div>
      <div
        className={`flex items-center justify-center`}
        style={{
          width: (side / 180) * 312,
          height: side,
          backgroundColor: `${bg2}`,
          paddingTop: -side2,
          transition: `${transition}`,
        }}
      >
        {/* ////////// */}
        <div
          className={`absolute flex flex-col items-center justify-center wrap overflow-visible font-courier`}
          style={{
            transition: `${transition}`,

            fontSize: fontSize,
          }}
        >
          <div
            style={{
              width: 0,
              borderBottom: `${side2 / 2}px solid ${bgMain}`,
              borderLeft: `${(side2 / 180) * 156}px solid transparent`,
              borderRight: `${(side2 / 180) * 156}px solid transparent`,
              transition: `${transition}`,
            }}
          ></div>
          <div
            className={
              'flex justify-center items-center font-courier overflow-visible'
            }
            style={{
              width: (side2 / 180) * 312,
              height: side2,
              backgroundColor: `${bgMain}`,
              transition: `${transition}`,
              fontSize: fontSize,
            }}
          >
            {empty ? null : (
              <BlinkRandomSymbol delay={0} setIsSymbol={setIsSymbol} />
            )}
          </div>
          <div
            style={{
              width: 0,
              borderTop: `${side2 / 2}px solid ${bgMain}`,
              borderLeft: `${(side2 / 180) * 156}px solid transparent`,
              borderRight: `${(side2 / 180) * 156}px solid transparent`,
              transition: `${transition}`,
            }}
          ></div>
        </div>
        {/* ////////// */}
      </div>
      <div
        style={{
          width: 0,

          borderTop: `${side / 2}px solid ${bg2}`,
          borderLeft: `${(side / 180) * 156}px solid transparent`,
          borderRight: `${(side / 180) * 156}px solid transparent`,
          transition: `${transition}`,
        }}
      ></div>
    </div>
  )
}