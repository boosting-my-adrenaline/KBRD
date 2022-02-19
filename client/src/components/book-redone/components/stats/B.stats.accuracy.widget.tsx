import React, { useState } from 'react'
import { FadeText } from '../../../../utils/FadeText'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { PingingCircles } from './BOOK.pingingCircles'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import useLanguage from '../../../../hooks/useLanguage'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'

interface IProps {
  currentAccuracy: number
  overall: number
  errors: number
}

export const BOOKstatsAccuracyWidget: React.FC<IProps> = ({
  currentAccuracy,
  overall,
  errors,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHoveredCurrent, setIsHoveredCurrent] = useState(false)
  const [isHoveredChapter, setIsHoveredChapter] = useState(false)

  const { isEng } = useLanguage()
  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  const [showType, setShowType] = useLocalStorage<`.` | `%`>(
    `accuracy-widget`,
    '%'
  )

  const accuracyValue =
    currentAccuracy > 0
      ? currentAccuracy === 1000
        ? `999`
        : `${currentAccuracy}`
      : `000`

  const chapterAccuracy = Math.floor(((overall - errors) / overall) * 1000)

  const accuracyChapterValue =
    chapterAccuracy > 0
      ? chapterAccuracy === 1000
        ? `999`
        : `${chapterAccuracy}`
      : `000`

  const cond1 = !!currentAccuracy
  const cond2 = !!(chapterAccuracy && overall >= 245)

  useDidMountEffect(() => {
    if (overall >= 245) {
      setIsHoveredChapter(false)
    }
  }, [overall])

  return (
    <div
      className={`flex items-center justify-center ${isEng || `font-CourierC`}`}
    >
      <div
        className={`borde z-10 flex flex-row rounded-xl border-black px-2 ${
          (isHovered || isHovered2) &&
          (isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t100)
        } ${isDarkMode ? `text-gray-300` : `text-gray-900`}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isEng ? `accuracy` : `точность`} |{`\u00a0`}
        {showType === `.` ? `.` : ``}
        {currentAccuracy === 0 ? (
          <PingingCircles />
        ) : (
          <FadeText
            title={
              showType === `.`
                ? `${accuracyValue}`
                : currentAccuracy % 10 === 0
                ? currentAccuracy === 1000
                  ? `100`
                  : `${currentAccuracy / 10}.0`
                : `${currentAccuracy / 10}`
            }
            delay={[200, 600]}
            blink={accuracyValue}
          />
        )}
        {showType === `%` ? `%` : ` `}
      </div>
      {isHovered || isHovered2 ? (
        <div
          className={`w-340px h-260px shadow-10th -translate-y-85px absolute flex rounded-xl  border ${
            isDarkMode ? themeColor1.border.t300 : themeColor1.border.t500
          }  ${
            isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t200
          } p-2 px-6 `}
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
                  {isEng ? `accuracy` : `точность`}
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
                          {overall >= 245 ? (
                            ` `
                          ) : (
                            <>
                              {isEng ? `needs` : `нужно еще`} {245 - overall}{' '}
                              {isEng ? `more` : ``} {` `}
                              {isEng ? (
                                <>{overall === 244 ? `char` : 'chars'}</>
                              ) : (
                                <>симв</>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex items-center`}>
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
                        {/* <InfoRounded
                          className={`h-12px w-12px mr-2 ${
                            isDarkMode ? `text-blue-300` : `text-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => setIsHoveredCurrent(true)}
                          onMouseLeave={() => setIsHoveredCurrent(false)}
                        /> */}
                        {isEng ? `current` : `текущая`}:{' '}
                        {cond1 && showType === `.` ? `.` : ``}
                      </span>
                      <span
                        className={`whitespace-nowrap ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                      >
                        {!currentAccuracy
                          ? isEng
                            ? `\u00a0to be defined`
                            : `\u00a0не определено`
                          : showType === `.`
                          ? `${accuracyValue}`
                          : currentAccuracy % 10 === 0
                          ? `${currentAccuracy / 10}.0`
                          : `${currentAccuracy / 10}`}
                        {cond1 && showType === `%` ? `%` : ` `}
                      </span>
                    </div>
                  )}
                  {/* ///////////// */}
                  {isHoveredCurrent ? (
                    <div className={`w-f flex items-center justify-center `}>
                      {`\u00a0`}
                      <div
                        className={`w-270px h-0px translate-x-10px -translate-y-5px absolute ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                        style={{
                          borderTop: isDarkMode
                            ? '30px solid rgb(153 27 27)'
                            : '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                        }}
                      >
                        <div className={`translate-y-[-28px]`}>
                          {isEng
                            ? ` last 245 characters`
                            : `последние 245 симв.`}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex items-center`}>
                      <span
                        className={`flex flex-nowrap items-center whitespace-nowrap ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        } `}
                      >
                        {/* <InfoRounded
                          className={`mr-2 ${overall >= 245 && `opacity-0`} ${
                            isDarkMode ? `text-blue-300` : `text-blue-500`
                          } w-12px h-12px`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            if (overall >= 245) return
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        /> */}
                        <span
                          className={` flex translate-x-[-10px] translate-y-[0px] items-center justify-center rounded-full border text-sm ${
                            isDarkMode
                              ? `border-blue-200 bg-blue-700 text-blue-200`
                              : `border-blue-500 bg-blue-200 text-blue-500`
                          }`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            if (overall >= 245) return
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        >
                          i
                        </span>
                        {isEng ? `average` : `средняя`}:{' '}
                        {cond2 && showType === `.` ? `.` : ``}
                      </span>
                      <span
                        className={`${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                      >
                        {!cond2
                          ? isEng
                            ? `\u00a0to be defined`
                            : `\u00a0не определено`
                          : showType === `.`
                          ? `${accuracyChapterValue}`
                          : chapterAccuracy % 10 === 0
                          ? `${chapterAccuracy / 10}.0`
                          : `${chapterAccuracy / 10}`}
                        {cond2 && showType === `%` ? `%` : ` `}
                      </span>
                    </div>
                  )}
                  {/* /////// */}
                  <div className={`  w-f flex justify-center`}>
                    <div className={`borde flex items-center justify-center `}>
                      <div
                        className={`cursor-pointer rounded-l-xl border-l border-t border-b  ${
                          themeColor1.border.t400
                        } py-1   px-7 ${
                          showType === `.`
                            ? isDarkMode
                              ? `${themeColor1.bg.t500} text-gray-200`
                              : ` ${themeColor1.bg.t400} text-gray-900`
                            : isDarkMode
                            ? themeColor1.bg.t900
                            : themeColor1.bg.t200
                        } transition duration-300 ease-in-out ${
                          isDarkMode ? `text-gray-200` : `text-gray-900`
                        }`}
                        onMouseDown={() => setShowType(`.`)}
                      >
                        .{(currentAccuracy && accuracyValue) || 967}
                      </div>
                      <div
                        className={`cursor-pointer rounded-r-xl border-r border-t border-b ${
                          themeColor1.border.t400
                        } py-1 px-6 ${
                          showType === `%`
                            ? isDarkMode
                              ? `${themeColor1.bg.t500} text-gray-200`
                              : ` ${themeColor1.bg.t400} text-gray-900`
                            : isDarkMode
                            ? themeColor1.bg.t900
                            : themeColor1.bg.t200
                        } transition duration-300 ease-in-out 
                        ${isDarkMode ? `text-gray-200` : `text-gray-900`}`}
                        style={{ transition: `0.3s ease-in-out` }}
                        onMouseDown={() => setShowType(`%`)}
                      >
                        {(currentAccuracy &&
                          (currentAccuracy % 10 === 0
                            ? currentAccuracy / 10 + '.0'
                            : currentAccuracy / 10)) ||
                          96.7}
                        %
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
