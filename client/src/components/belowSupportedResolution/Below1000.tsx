import React, { useEffect, useState } from 'react'
import { FadeText3 } from '../../utils/FadeText3'
import cmd from '../../static/cmd.svg'
import { BelowNavbar } from './BelowNavbar'
import { PerspectiveController } from '../PerspectiveController'
import svg1 from '../../static/svg1.svg'
import { Footer } from '../Footer'

export const Below1000: React.FC = ({}) => {
  const [isHorizontal, setIsHorisontal] = useState(false)
  const [params, setParams] = useState([0, 0])

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
        className={`fixed top-0 left-0 bottom-0 right-0 opacity-90`}
        style={{ backgroundImage: `url(${svg1})` }}
      ></div>
      <div
        className={` z-50 opacity-80  w-f flex justify-center items-center`}
        style={{
          margin: `${!isHorizontal ? 90 : 110}px auto`,
        }}
        // style={{ left: '50%', transform: 'translate(-50%, -50%)', top: '40%' }}
      >
        <div
          className={`font-courier text-center pb-6 `}
          style={{ maxWidth: '70%' }}
        >
          <div
            className={` flex flex-wrap items-center justify-center space-y-1 `}
            style={{ fontSize: '1.1rem', marginBottom: 10 }}
          >
            <FadeText3 str={`Your resolution is not suppored yet`} />
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
          <div
            className={`flex justify-between mx-2 flex-flow flex-wrap select-none `}
          >
            <div className={'flex justify-center flex-grow '}>
              <div className={`flex gap-2 mt-8 justify-center items-center`}>
                <div
                  className={`border-black border rounded-lg flex flex-col items-end p-2 bg-white opacity-95`}
                  style={{ width: 90, height: 65, gap: 9 }}
                >
                  <img style={{ width: 20, height: 20 }} src={cmd} alt=" " />
                  <div className={`flex w-f justify-center `}>command</div>
                </div>
                <div className={`text-2xl text-white`}>+</div>
                <div
                  className={`border-black border rounded-lg flex flex-col items-center p-1 bg-white opacity-95`}
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
                  className={`border-black border rounded-lg flex flex-col items-center justify-center p-2 bg-white opacity-95`}
                  style={{ width: 90, height: 65, gap: 9 }}
                >
                  <div className={`flex w-f justify-center `}>ctrl</div>
                </div>
                <div className={`text-2xl text-white`}>+</div>

                <div
                  className={`border-black border rounded-lg  flex flex-col items-center p-1 bg-white opacity-95`}
                  style={{ width: 70, height: 65, gap: 10 }}
                >
                  <div
                    style={{
                      transform: 'rotate(90deg) translateY(-1px) ',
                    }}
                  >
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
        <Footer below />
      </div>

      {/* <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col align-center justify-center gap bg-yello-200 bg-gray-500 transition duration-500 ease-in-out`}
        style={{
          willChange: 'transform',
        }}
      >
        <div
          className={` flex flex-col align-center justify-center gap py opacity-20 `}
          style={{
            transition: '3s ',
            transform: `perspective(1000px) rotateX(45deg) translateX(${pos[1]}px) translateY(${pos[0]}px)`,
          }}
        >
          {Array.from({ length: L }, (_, i) => i).map((el) => (
            <div
              className={` flex flex-row align-center justify-center gap-2`}
              style={{
                margin: `-53.5px ${el % 2 === 0 ? '0' : '216px'} 0 0`,
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
      </div> */}
    </>
  )
}
