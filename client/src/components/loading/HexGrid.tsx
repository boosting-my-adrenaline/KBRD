import React, { useState, useEffect } from 'react'
import { Hexagon } from './Hexagon'

interface IProps {
  L?: number
  W?: number
  marg?: number
  side?: number
  side2?: [number, number]
  empty?: boolean
}

export const GridHex: React.FC<IProps> = ({
  L = 10,
  W = 10,
  marg = 0,
  side = 200,
  side2 = [195, 220],
  empty = false,
}) => {
  const [pos, setPos] = useState(0)

  const [show, setShow] = useState(false)

  useEffect(() => {
    let id0 = setTimeout(() => setShow(true), 200)

    let a = true
    let id1 = setTimeout(() => setPos(-3000), 10)
    let id2 = setInterval(() => {
      if (a) {
        setPos(0)
        a = false
      } else {
        setPos(-3000)
        a = true
      }
    }, 14050)

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearInterval(id2)
    }
  }, [])

  return (
    <div
      className={`absolute flex flex-col align-center justify-end gap-2`}
      style={{
        height: '100%',
        width: '100%',
        marginTop: 100,
        perspective: '1000px',
        transition: '15s ease-in-out',
        transform: `perspective(1000px) rotateX(45deg) translateY(${-pos}px)`,
      }}
    >
      {Array.from({ length: L }, (_, i) => i).map((el) => (
        <div
          className={` flex flex-row align-center justify-center gap-8`}
          style={{
            margin: `-82px ${el % 2 == 0 ? '0' : '379px'} 0 0`,
          }}
        >
          {Array.from({ length: W }, () => {}).map((el) => (
            <Hexagon
              side={side}
              side2={show ? side2[0] : side2[1]}
              empty={empty}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
