import { InfoRounded } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import { FadeText } from '../../../../utils/FadeText'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { PingingCircles } from './BOOK.pingingCircles'

interface IProps {
  CPM: number
  avgCPM: number
}

export const BOOKstatsCPMWidget: React.FC<IProps> = ({ CPM, avgCPM }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHoveredCurrent, setIsHoveredCurrent] = useState(false)
  const [isHoveredChapter, setIsHoveredChapter] = useState(false)

  const [showType, setShowType] = useState<`short` | `long`>('long')

  // const accuracyValue =
  //   currentAccuracy > 0
  //     ? currentAccuracy === 1000
  //       ? `999`
  //       : `${currentAccuracy}`
  //     : `000`

  // const chapterAccuracy = Math.floor(((overall - fti.length) / overall) * 1000)

  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`z-10 flex flex-row borde border-black px-2 rounded-xl ${
          (isHovered || isHovered2) && `bg-red-100`
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        CPM |{`\u00a0`}
        {CPM === 0 ? (
          <PingingCircles />
        ) : (
          <FadeText title={`${CPM}`} delay={[200, 600]} blink={CPM} />
        )}
        {` `}
        {showType === `short` ? `` : ` c/min`}
      </div>
      {isHovered || isHovered2 ? (
        <div
          className={`absolute bg-red-200 rounded-xl  flex  p-2 px-6 border border-red-500`}
          style={{
            width: 350,
            height: 260,
            boxShadow: `2px 1px 12px 4px rgba(0, 0, 0, 0.3)`,
            transform: `translateY(-85px)`,
            // fontSize: '17px',
            opacity: 10,
          }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`flex justify-center  w-f`}>
            {
              <div className={`flex flex-col  items-center w-f`}>
                <div
                  className={`flex justify-center w-f text-gray-900 text-xl`}
                >
                  characters per minute
                </div>
                <div
                  className={`w-f mx-2 h-px my-2 bg-red-400 rounded-full`}
                ></div>
                <div className={`w-f flex flex-col gap-4 items-start`}>
                  {/* ////////// */}
                  {isHoveredChapter ? (
                    <div className={`flex justify-center items-center w-f `}>
                      {`\u00a0`}
                      <div
                        className={`absolute`}
                        style={{
                          width: 270,
                          height: 0,
                          borderBottom: '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                          transform: 'translateX(10px) translateY(5px)',
                        }}
                      >
                        <div
                          className={`flex flex-nowrap items-center flex-row whitespace-nowrap`}
                          style={{
                            transform: 'translateX(0px)',
                          }}
                        >
                          no pauses included
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={` `}>
                      <span className={`text-gray-800 `}>
                        <InfoRounded
                          className={`text-blue-500 mr-2`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => setIsHoveredCurrent(true)}
                          onMouseLeave={() => setIsHoveredCurrent(false)}
                        />
                        current: {` `}
                      </span>
                      <span className={`text-gray-800`}>
                        {CPM === 0 ? (
                          `to be defined`
                        ) : (
                          <>
                            {CPM} {showType === 'long' && 'c/min'}
                          </>
                        )}
                      </span>
                    </div>
                  )}
                  {/* ///////////// */}
                  {isHoveredCurrent ? (
                    <div className={`flex justify-center items-center w-f `}>
                      {`\u00a0`}
                      <div
                        className={`absolute`}
                        style={{
                          width: 270,
                          height: 0,
                          borderTop: '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                          transform: 'translateX(10px) translateY(-5px)',
                        }}
                      >
                        <div
                          style={{
                            transform: 'translateY(-30px) translateX(16px)',
                          }}
                        >
                          last 40 chars
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className={`text-gray-800 `}>
                        <InfoRounded
                          className={`text-blue-500 mr-2 `}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        />
                        average: {` `}
                      </span>
                      <span className={`text-gray-800`}>
                        {avgCPM === 0 ? (
                          `to be defined`
                        ) : (
                          <>
                            {avgCPM} {showType === 'long' && 'c/min'}
                          </>
                        )}
                      </span>
                    </div>
                  )}
                  {/* /////// */}
                  <div className={`  w-f flex justify-center`}>
                    <div className={`flex borde items-center justify-center `}>
                      <div
                        className={`cursor-pointer border-red-400 border-l border-t border-b  rounded-l-xl py-1  hover:py-2 px-7 bg-red-${
                          showType === `short` ? `400 text-gray-900` : 200
                        }`}
                        style={{ transition: `0.3s ease-in-out` }}
                        onMouseDown={() => setShowType(`short`)}
                      >
                        {/* .{(currentAccuracy && accuracyValue) || 967} */}167
                      </div>
                      <div
                        className={`cursor-pointer border-red-400 border-r rounded-r-xl border-t border-b py-1 px-6 bg-red-${
                          showType === `long` ? `400 text-gray-900` : 200
                        }`}
                        style={{ transition: `0.3s ease-in-out` }}
                        onMouseDown={() => setShowType(`long`)}
                      >
                        167 c/min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      ) : null}
    </div>
  )
}
