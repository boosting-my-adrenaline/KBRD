import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { Hexagon } from './loading/Hexagon'

export const NotFound: React.FC = ({}) => {
  let L = 17,
    W = 23,
    // let L = 1,
    //   W = 1,
    side = 120,
    side2 = [118, 118],
    empty = false

  const [pos, setPos] = useState([0, 0])

  useEffect(() => {
    // let id0 = setTimeout(() => setShow(true), 200)

    setPos([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])

    let id1 = setInterval(() => {
      setPos([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
      // setPos([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
    }, Math.floor(Math.random() * 2000) + 1000)

    return () => {
      // clearTimeout(id0)
      clearInterval(id1)
    }
  }, [])

  const [appear, setAppear] = useState(false)
  const [appear2, setAppear2] = useState(false)
  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 300)

    let id2 = setTimeout(() => {
      setAppear2(true)
    }, 800)
    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 250)

    let id2 = setTimeout(() => {
      setAppear2(false)
    }, 0)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [chapter])

  return (
    <div style={{ opacity: appear ? 1 : 0, transition: `0.3s ease-in-out` }}>
      <div
        className={`absolute z-50 w-f flex justify-center mt-48 font-courier text-4xl`}
      >{`{/* TO BE SVG HERE */}`}</div>
      <div
        className={` fixed top-0 bottom-0 left-0 right-0 flex flex-col align-center justify-center gap bg-yello-200 bg-gray-500 opacity-${
          appear2 ? 100 : 0
        }`}
        style={{
          transition: '0.2s ease-in-out',

          // backgroundColor: !show ? 'rgb(252, 211, 77)' : 'rgb(253, 230, 138)',
          willChange: 'transform',
        }}
      >
        <div
          className={` flex flex-col align-center justify-center gap  `}
          style={{
            transition: '3s ease',
            opacity: 0.15,
            willChange: 'transform',

            transform: `perspective(2000px) rotateX(55deg) translateX(${pos[1]}px) translateY(${pos[0]}px)`,
          }}
        >
          {Array.from({ length: L }, (_, i) => i).map((el) => (
            <div
              className={` flex flex-row align-center justify-center gap-2`}
              style={{
                margin: `-53.5px ${el % 2 == 0 ? '0' : '216px'} 0 0`,
              }}
            >
              {Array.from({ length: W }, () => {}).map((el) => (
                <Hexagon
                  side={side}
                  side2={
                    // show ? side2[0] :
                    side2[1]
                  }
                  empty={empty}
                  fontSize={110}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
