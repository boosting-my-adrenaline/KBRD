import React, { useState } from 'react'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'
import useLanguage from '../../../../hooks/useLanguage'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { FadeText } from '../../../../utils/FadeText'
import { PingingCircles } from './BOOK.pingingCircles'
import INFO from '../../../../static/profiles/info.svg'

interface IProps {
  CPM: number
  avgCPM: number
}

export const BOOKstatsCPMWidget: React.FC<IProps> = ({ CPM, avgCPM }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHoveredCurrent, setIsHoveredCurrent] = useState(false)
  const [isHoveredChapter, setIsHoveredChapter] = useState(false)

  const [showType, setShowType] = useLocalStorage<`short` | `long`>(
    `cpm-widget`,
    'long'
  )

  const { isEng } = useLanguage()

  const { isDarkMode } = useDarkMode()

  // const accuracyValue =
  //   currentAccuracy > 0
  //     ? currentAccuracy === 1000
  //       ? `999`
  //       : `${currentAccuracy}`
  //     : `000`

  // const chapterAccuracy = Math.floor(((overall - fti.length) / overall) * 1000)

  const { themeColor1 } = useColor()

  return (
    <div
      className={`flex items-center justify-center ${isEng || `font-CourierC`}`}
    >
      <div
        className={`z-10 flex flex-row rounded-xl  px-2 ${
          (isHovered || isHovered2) &&
          (isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t100)
        } ${isDarkMode ? `text-gray-300` : `text-gray-900`}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isEng ? `CPM` : 'скорость'} |{`\u00a0`}
        {CPM === 0 ? (
          <PingingCircles />
        ) : (
          <FadeText title={`${CPM}`} delay={[200, 600]} blink={CPM} />
        )}
        {`\u00a0`}
        {showType === `short` ? `` : isEng ? `c/min` : 'с/мин'}
      </div>
      {isHovered || isHovered2 ? (
        <div
          className={`w-340px h-260px shadow-10th  -translate-y-85px  absolute flex rounded-xl border ${
            isDarkMode ? themeColor1.border.t300 : themeColor1.border.t500
          }  ${
            isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t200
          } p-2 px-6 ${isDarkMode ? `text-gray-200` : `text-gray-900`}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex  justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f flex justify-center text-xl ${
                    isDarkMode ? `text-gray-200` : `text-gray-900`
                  }`}
                >
                  {isEng ? ` characters per minute` : `символов в минуту`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-px rounded-full ${
                    isDarkMode ? themeColor1.bg.t200 : themeColor1.bg.t400
                  }`}
                ></div>
                <div className={`w-f flex flex-col items-start gap-4`}>
                  {/* ////////// */}
                  {isHoveredChapter ? (
                    <div className={`w-f flex items-center justify-center `}>
                      {`\u00a0`}
                      <div
                        className={`w-270px h-0px translate-x-10px translate-y-5px absolute`}
                        style={{
                          borderBottom: isDarkMode
                            ? '30px solid rgb(153 27 27)'
                            : '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                        }}
                      >
                        <div
                          className={`flex flex-row flex-nowrap items-center whitespace-nowrap ${
                            isDarkMode ? `text-gray-200` : `text-gray-900`
                          }`}
                        >
                          {isEng ? `no pauses included` : `без учета остановок`}{' '}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={` flex `}>
                      <span
                        className={`flex ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        } `}
                      >
                        <span
                          className={` flex translate-x-[-10px] translate-y-[6px] items-center justify-center rounded-full border text-sm ${
                            isDarkMode
                              ? `border-blue-200 bg-blue-700 text-blue-200`
                              : `border-blue-500 bg-blue-200 text-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => setIsHoveredCurrent(true)}
                          onMouseLeave={() => setIsHoveredCurrent(false)}
                        >
                          i
                        </span>
                        {/* <img
                          alt=""
                          src={INFO}
                          className={`mr-2 ${
                            isDarkMode ? `fill-blue-300` : `fill-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => setIsHoveredCurrent(true)}
                          onMouseLeave={() => setIsHoveredCurrent(false)}
                        /> */}
                        {isEng ? `current` : `текущая`}:{' '}
                      </span>
                      <span
                        className={`whitespace-nowrap ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                      >
                        {CPM === 0 ? (
                          isEng ? (
                            `\u00a0to be defined`
                          ) : (
                            `\u00a0не определено`
                          )
                        ) : (
                          <>
                            {CPM}{' '}
                            {showType === 'long' && (isEng ? `c/min` : 'с/мин')}
                          </>
                        )}
                      </span>
                    </div>
                  )}
                  {/* ///////////// */}
                  {isHoveredCurrent ? (
                    <div className={`w-f flex items-center justify-center `}>
                      {`\u00a0`}
                      <div
                        className={`w-270px h-0px translate-x-10px translate-y-5px absolute ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                        style={{
                          borderBottom: isDarkMode
                            ? '30px solid rgb(153 27 27)'
                            : '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                        }}
                      >
                        <div
                          style={{
                            transform: 'translateY(2px) translateX(16px)',
                          }}
                        >
                          {isEng ? `last 40 chars` : `последние 40 симв.`}{' '}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex items-center`}>
                      <span
                        className={`flex  ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                      >
                        <span
                          className={` flex translate-x-[-10px] translate-y-[6px] items-center justify-center rounded-full border text-sm ${
                            isDarkMode
                              ? `border-blue-200 bg-blue-700 text-blue-200`
                              : `border-blue-500 bg-blue-200 text-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        >
                          {/* <img
                          alt=""
                          src={INFO}
                          className={`mr-2 ${
                            isDarkMode ? `fill-blue-300` : `fill-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        /> */}
                          i
                        </span>
                        {isEng ? `average` : `средняя`}:{' '}
                      </span>
                      <span
                        className={`whitespace-nowrap  ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                      >
                        {avgCPM === 0 ? (
                          isEng ? (
                            `\u00a0to be defined`
                          ) : (
                            `\u00a0не определено`
                          )
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
                    <div className={`borde flex items-center justify-center `}>
                      <div
                        className={`cursor-pointer rounded-l-xl border-l border-t border-b   ${
                          themeColor1.border.t400
                        } py-1   px-7 ${
                          showType === `short`
                            ? ` ${themeColor1.bg.t400}  text-gray-900`
                            : isDarkMode
                            ? themeColor1.bg.t900
                            : themeColor1.bg.t200
                        } transition duration-300 ease-in-out ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                        onMouseDown={() => setShowType(`short`)}
                      >
                        {CPM || 167}
                      </div>
                      <div
                        className={`cursor-pointer rounded-r-xl border-r border-t border-b  ${
                          themeColor1.border.t400
                        } py-1 px-6 ${
                          showType === `long`
                            ? isDarkMode
                              ? `${themeColor1.bg.t500} text-gray-200`
                              : ` ${themeColor1.bg.t400} text-gray-900`
                            : isDarkMode
                            ? themeColor1.bg.t900
                            : themeColor1.bg.t200
                        } transition duration-300 ease-in-out  `}
                        onMouseDown={() => setShowType(`long`)}
                      >
                        {CPM || 167} {` `} {isEng ? `c/min` : 'с/мин'}
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
