import React, { useEffect, useRef, useState } from 'react'
import { FadeText3 } from '../../utils/FadeText3'
import { Hexagon } from '../loading/Hexagon'
import cmd from '../../static/cmd.svg'
import { BelowNavbar } from './BelowNavbar'
import { PerspectiveController } from '../PerspectiveController'

export const Below1000: React.FC = ({}) => {
  let L = 10,
    W = 7,
    // let L = 1,
    //   W = 1,
    side = 120,
    side2 = [118, 118],
    empty = false

  // const [pos, setPos] = useState([0, 0])
  const pos = useRef([0, 0])

  // const [show, setShow] = useState(true)

  useEffect(() => {
    // let id0 = setTimeout(() => setShow(true), 200)

    let id1 = setInterval(() => {
      pos.current = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ]
      // setPos([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
    }, Math.floor(Math.random() * 2000) + 1000)

    return () => {
      // clearTimeout(id0)
      clearInterval(id1)
    }
  }, [])

  const [isHorizontal, setIsHorisontal] = useState(false)
  const [params, setParams] = useState([0, 0])

  useEffect(() => {
    setTimeout(() => {})
  }, [])

  const handleSetParams = (height: number, width: number) => {
    setParams([height, width])
  }

  return (
    <>
      <PerspectiveController
        setIsHorisontal={setIsHorisontal}
        handleSetParams={handleSetParams}
      />
      <BelowNavbar isHorizontal={isHorizontal} />
      <div
        className={`absolute z-50 opacity-80 w-f flex justify-center`}
        style={{ margin: `${!isHorizontal ? 90 : 110}px auto` }}
        // style={{ left: '50%', transform: 'translate(-50%, -50%)', top: '40%' }}
      >
        <div
          className={`font-courier text-center pb-6 `}
          style={{ maxWidth: '70%' }}
        >
          {/* JUST TESTING IF IT REALLY GONNA WORK */}
          {/* <FadeText2
            title={`Your resolution is not supportable yet`}
            hide={0}
            delay={400}
            component="h1"
          /> */}
          <div
            className={` flex flex-wrap items-center justify-center space-y-1 `}
            style={{ fontSize: '1.1rem', marginBottom: 10 }}
          >
            <FadeText3 str={`Your resolution is not supportable yet`} />
          </div>
          <div
            className={` flex flex-wrap items-center justify-center space-y-1`}
            style={{ fontSize: '0.9rem' }}
          >
            <FadeText3
              str={`Either You are using not supported device or you have zoomed the page too much, please scale your page down to at least 1000 pixels width for the best experience`}
              delay={[700, 1000]}
              font={'gray-900'}
            />
          </div>
          {params[0] > 0 && params[1] > 0 ? (
            <div
              className={` flex flex-wrap items-center justify-center space-y-1 mt-4`}
              style={{ fontSize: '0.9rem' }}
            >
              <FadeText3
                str={`current${'\u00A0'}width:${'\u00A0'}${
                  params[1] + '\u00A0' + 'pixels'
                }`}
                delay={[1300, 2000]}
                font={'gray-800'}
              />
            </div>
          ) : null}
          <div className={`flex justify-between mx-2 flex-flow flex-wrap`}>
            <div className={'flex justify-center flex-grow '}>
              <div className={`flex gap-2 mt-4 justify-center items-center`}>
                <div
                  className={`border-black border rounded-lg flex flex-col items-end p-2 `}
                  style={{ width: 90, height: 65, gap: 9 }}
                >
                  <img style={{ width: 20, height: 20 }} src={cmd} alt=" " />
                  <div className={`flex w-f justify-center `}>command</div>
                </div>
                <div className={`text-2xl`}>+</div>
                <div
                  className={`border-black border rounded-lg flex flex-col items-center p-1 `}
                  style={{ width: 70, height: 65, gap: 10 }}
                >
                  <div style={{ transform: 'rotate(90deg) translateY(-1px)' }}>
                    |
                  </div>
                  <div
                    style={{
                      width: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{ transform: 'rotate(90deg) translateY(-2px)' }}
                    >
                      |
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={'flex justify-center flex-grow'}>
              <div className={`flex gap-2 mt-4 justify-center items-center`}>
                <div
                  className={`border-black border rounded-lg flex flex-col items-center justify-center p-2 `}
                  style={{ width: 90, height: 65, gap: 9 }}
                >
                  <div className={`flex w-f justify-center `}>ctrl</div>
                </div>
                <div className={`text-2xl`}>+</div>

                <div
                  className={`border-black border rounded-lg flex flex-col items-center p-1 `}
                  style={{ width: 70, height: 65, gap: 10 }}
                >
                  <div style={{ transform: 'rotate(90deg) translateY(-1px)' }}>
                    |
                  </div>
                  <div
                    style={{
                      width: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{ transform: 'rotate(90deg) translateY(-2px)' }}
                    >
                      |
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col align-center justify-center gap bg-yellow-200`}
        style={{
          transition: '0.5s ease-in-out',
          // backgroundColor: !show ? 'rgb(252, 211, 77)' : 'rgb(253, 230, 138)',
          willChange: 'transform',
        }}
      >
        <div
          className={` flex flex-col align-center justify-center gap  `}
          style={{
            transition: '3s ',
            opacity: 0.15,
            transform: `perspective(1000px) rotateX(45deg) translateX(${pos.current[1]}px) translateY(${pos.current[0]}px)`,
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
    </>
  )
}
