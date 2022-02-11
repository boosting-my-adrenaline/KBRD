import { InfoRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import { FadeText } from '../../../../utils/FadeText'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { PingingCircles } from './BOOK.pingingCircles'
import { motion } from 'framer-motion'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import useLanguage from '../../../../hooks/useLanguage'

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
          (isHovered || isHovered2) && `bg-emerald-100`
        }`}
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
          className={`w-340px h-260px shadow-10th -translate-y-85px absolute flex rounded-xl  border  border-emerald-500 bg-emerald-200 p-2 px-6 `}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex  justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f flex justify-center text-xl text-gray-900`}
                >
                  {isEng ? `accuracy` : `точность`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-px rounded-full bg-emerald-400`}
                ></div>
                <div className={`w-f flex flex-col items-start gap-4`}>
                  {/* ////////// */}
                  {isHoveredChapter ? (
                    <div className={`w-f flex items-center justify-center `}>
                      {`\u00a0`}
                      <div
                        className={`w-270px h-0px translate-x-10px translate-y-5px absolute`}
                        style={{
                          borderBottom: '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                        }}
                      >
                        <div
                          className={`flex flex-row flex-nowrap items-center whitespace-nowrap`}
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
                    <div className={` `}>
                      <span className={`text-gray-800 `}>
                        <InfoRounded
                          className={`h-12px w-12px mr-2 text-blue-500`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => setIsHoveredCurrent(true)}
                          onMouseLeave={() => setIsHoveredCurrent(false)}
                        />
                        {isEng ? `current` : `текущая`}:{' '}
                        {cond1 && showType === `.` ? `.` : ``}
                      </span>
                      <span className={`whitespace-nowrap text-gray-800`}>
                        {!currentAccuracy
                          ? isEng
                            ? `to be defined`
                            : `не определено`
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
                        className={`w-270px h-0px translate-x-10px -translate-y-5px absolute `}
                        style={{
                          borderTop: '30px solid #fca5a5',
                          borderLeft: '30px solid transparent',
                        }}
                      >
                        <div className={`-translate-y-30px`}>
                          {isEng
                            ? ` last 245 characters`
                            : `последние 245 симв.`}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span className={`text-gray-800 `}>
                        <InfoRounded
                          className={`mr-2 text-blue-500 opacity-${
                            overall >= 245 && 0
                          } w-12px h-12px`}
                          style={{ width: 16, height: 16 }}
                          onMouseEnter={() => {
                            if (overall >= 245) return
                            setIsHoveredChapter(true)
                          }}
                          onMouseLeave={() => setIsHoveredChapter(false)}
                        />
                        {isEng ? `average` : `средняя`}:{' '}
                        {cond2 && showType === `.` ? `.` : ``}
                      </span>
                      <span className={`text-gray-800`}>
                        {!cond2
                          ? isEng
                            ? `to be defined`
                            : `не определено`
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
                        className={`cursor-pointer rounded-l-xl border-l border-t border-b  border-emerald-400 py-1   px-7 ${
                          showType === `.`
                            ? `bg-emerald-400 text-gray-900`
                            : `bg-emerald-200`
                        } transition duration-300 ease-in-out`}
                        onMouseDown={() => setShowType(`.`)}
                      >
                        .{(currentAccuracy && accuracyValue) || 967}
                      </div>
                      <div
                        className={`cursor-pointer rounded-r-xl border-r border-t border-b border-emerald-400 py-1 px-6 ${
                          showType === `%`
                            ? `bg-emerald-400 text-gray-900`
                            : `bg-emerald-200`
                        } transition duration-300 ease-in-out`}
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
