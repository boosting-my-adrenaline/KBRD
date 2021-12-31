import { fontWeight } from '@mui/system'
import React, { useState, useEffect, useRef } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  frameColor: string
  cellsLength: number
  handleStart(): void
  started: boolean
  handleRunning(): void
  isThereCells: boolean
  newGame: boolean
}

export const TAPshootingFrame: React.FC<IProps> = ({
  frameColor,
  cellsLength,
  handleStart,
  started,
  handleRunning,
  isThereCells,
  newGame,
}) => {
  const [dimensions, setDimensions] = useState({
    width: 766,
    height: 620,
    clipPath1: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%,${``} 1% 50%, 25.5% 98.75%,${``} 74.5% 98.75%, 99% 50%, 74.5% 1.15%, 25.5% 1.15%,${``} 1% 50%, 0% 50%)`,
    clipPath2: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
  })

  useEffect(() => {
    if (cellsLength === 19 || cellsLength === 7) {
      return setDimensions({
        width: 766,
        height: 620,
        clipPath1: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%,${``} 1% 50%, 25.5% 98.75%,${``} 74.5% 98.75%, 99% 50%, 74.5% 1.15%, 25.5% 1.15%,${``} 1% 50%, 0% 50%)`,
        clipPath2: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
      })
    } else {
      return setDimensions({
        width: 1110,
        height: 620,
        clipPath1: `polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%,${``} 1% 50%, 18.5% 98.5%,${``} 81.5% 98.5%, 99% 50%, 81.5% 1.5%, 18.5% 1.5%,${``} 1% 50%, 0% 50%)`,
        clipPath2: `polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%`,
      })
    }
  }, [cellsLength])

  const [starter, setStarter] = useState(0)
  const [stopper, setStopper] = useState(0)
  const [bluring, setBluring] = useState(true)

  const [TY, setTY] = useState(0)

  useDidMountEffect(() => {
    started ? setStarter((prev) => prev + 1) : setStopper((prev) => prev + 1)
  }, [started])

  useDidMountEffect(() => {
    setTY((prev) => prev - 1200)
    let id1 = setTimeout(() => setTY((prev) => prev - 600), 1000)
    let id2 = setTimeout(() => setTY((prev) => prev - 600), 2000)
    let id3 = setTimeout(() => setTY((prev) => prev - 600), 3000)
    let id4 = setTimeout(() => setTY((prev) => prev - 600), 4000)
    let id5 = setTimeout(() => handleRunning(), 3200)
    let id6 = setTimeout(() => setBluring(false), 3100)
    let id7 = setTimeout(() => setTY(0), 3500)

    return () => {
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
      clearTimeout(id5)
      clearTimeout(id6)
      clearTimeout(id7)
    }
  }, [starter])

  useDidMountEffect(() => {
    handleRunning()
    setBluring(true)
    setTimeout(() => setTY(0))
  }, [stopper])

  useEffect(() => {}, [started])

  return (
    <>
      {' '}
      <div
        className="visible absolute flex justify-center items-center overflow-y-hidden"
        style={{
          backdropFilter: bluring && isThereCells ? 'blur(15px)' : '',
          width: dimensions.width,
          height: dimensions.height,
          clipPath: dimensions.clipPath2,
          transition: '0.25s ease',
        }}
      >
        <div
          //inside
          className={`flex flex-row justify-center items-center  ${
            !bluring && `hidden`
          }`}
          style={{
            transition: '0.3s ease',
            transform: 'rotateZ(0deg) translateX(0px)',
          }}
        >
          <div
            className="absolute flex flex-row justify-center items-center gap-24"
            style={{
              transition: '0.3s ease',
              transform: `rotateZ(0deg) translateY(${TY}px)`,
            }}
          >
            {newGame ? (
              <div
                onMouseDown={handleStart}
                className={`flex flex-col items-center justify-center font-courier cursor-pointer text-blue-600 `}
                style={{
                  width: '700px',
                  fontSize: '4em',
                  fontWeight: 700,
                  transition: '0.1s ease-in',
                }}
              >
                <div className=""> PRESS SPACE BAR</div>

                <div className=""> OR</div>

                <div className=""> TAP TO START</div>
              </div>
            ) : (
              <>
                <div
                  className="rounded-3xl bg-blue-400 border-2 border-blue-600"
                  style={{ width: 100, height: 400, transition: '0.25s ease' }}
                ></div>
                <div
                  className="rounded-3xl bg-blue-400 border-2 border-blue-600"
                  style={{ width: 100, height: 400, transition: '0.25s ease' }}
                ></div>
              </>
            )}
          </div>

          <div
            className="absolute flex flex-row justify-center items-center overflow-visible"
            style={{
              transition: '0.3s ease',
              width: 500,
              height: 500,
              transform: `translateY(${TY + 1200}px)`,
            }}
            //33333333
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
            >
              <path
                d="M0 0h24v24H0V0z"
                style={{
                  fill: 'none',
                }}
              />
              <path
                d="M18 2v1.4l-5.2 6.2c3.6.4 6.1 3.7 5.6 7.3-.4 3.6-3.7 6.1-7.3 5.6-2.7-.3-4.8-2.3-5.5-4.9l1.9-.5c.6 2.4 3.1 3.9 5.5 3.3 2-.5 3.4-2.3 3.4-4.4 0-2.5-2-4.5-4.5-4.5-.7 0-1.4.2-2 .5l-.2.1-.7-1.2L14.9 4H6.5V2H18z"
                style={{
                  fill: '#60a5fa',
                  stroke: '#2563eb',
                  strokeWidth: 0.25,
                  strokeMiterlimit: 10,
                }}
              />
            </svg>
          </div>
          {
            <div
              className="absolute flex flex-row justify-center items-center overflow-visible"
              style={{
                transition: '0.3s ease',
                width: 500,
                height: 500,
                transform: `translateY(${TY + 1800}px)`,
              }}
              ////2222
            >
              <svg
                id="\u0421\u043B\u043E\u0439_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <style>{'.st0{fill:none}'}</style>
                <path className="st0" d="M0 0h24v24H0V0z" />
                <path
                  d="M16 7.5c0-2.2-1.8-4-4-4s-4 1.8-4 4H6c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.4-.5 2.7-1.3 3.8L9.3 20H18v2H6v-1.1l9.1-10.8c.6-.7.9-1.7.9-2.6z"
                  style={{
                    fill: '#60a5fa',
                    stroke: '#2563eb',
                    strokeWidth: 0.25,
                    strokeMiterlimit: 10,
                  }}
                />
                <path className="st0" d="M27.8 15.3h24v24h-24v-24z" />
              </svg>
            </div>
          }
          {
            <div
              className="absolute flex flex-row justify-center items-center overflow-visible"
              style={{
                transition: '0.3s ease',
                width: 500,
                height: 500,
                transform: `translateY(${TY + 2400}px)`,
              }}

              ///1111111
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <path
                  d="M0 0h24v24H0V0z"
                  style={{
                    fill: 'none',
                  }}
                />
                <path
                  d="M14 1.5V22h-2V3.7L7.5 4.9V2.8l5-1.3H14z"
                  style={{
                    fill: '#60a5fa',
                    stroke: '#2563eb',
                    strokeWidth: 0.25,
                    strokeMiterlimit: 10,
                  }}
                />
              </svg>
            </div>
          }
        </div>
      </div>
      {/* <div
        className={`absolute bg-${frameColor
          .replace('600', '800')
          .replace('400', '600')}`}
        style={{
          transition: '0.3s ease-out',
          width: dimensions.width - 6,
          height: dimensions.height - 4.5,
          clipPath: dimensions.clipPath1,

          // clipPath: `polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%,${``} 1.27% 50%, 18.7% 98.2%,${``} 81.3% 98.2%, 98.73% 50%, 81.3% 1.8%, 18.7% 1.8%,${``} 1.27% 50%, 0% 50%)`,
        }}
      ></div>
      <div
        className={`absolute bg-${frameColor
          .replace('600', '800')
          .replace('400', '600')} overflow-hidden`}
        style={{
          transition: '0.3s ease-out',
          width: dimensions.width + 6,
          height: dimensions.height + 4.5,
          clipPath: dimensions.clipPath1,
        }}
      ></div> */}
      <div
        className={`absolute bg-${frameColor}`}
        style={{
          transition: '0.3s ease-out',
          width: dimensions.width,
          height: dimensions.height,
          clipPath: dimensions.clipPath1,
        }}
      ></div>
      {/* <div className="flex flex-row gap-36">
        <button>
          ST?{started ? 1 : 0} -- starter: {starter} -- stopper: {stopper}
        </button>
        <button onClick={() => setTY((prev) => prev - 600)}>-</button>
        <button onClick={() => setTY((prev) => prev + 600)}>+</button>
      </div> */}
    </>
  )
}
