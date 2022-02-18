import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { BOOKelectronicmeter } from '../../../book-redone/components/stats/B.electronic.meter'
import { BOOKphysicalmeter } from '../../../book-redone/components/stats/BOOK.physical.meter'
import useLanguage from '../../../../hooks/useLanguage'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'

interface IProps {
  overall: number
}

export const TAPoverall: React.FC<IProps> = ({ overall }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`T-overall-widget`, 'electronic')

  const { isDarkMode } = useDarkMode()
  const { isEng } = useLanguage()
  const { themeColor2 } = useColor()

  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`w-140px  rounded-xlpx-2 z-10 flex flex-row justify-center ${
          (isHovered || isHovered2) &&
          (isDarkMode ? themeColor2.bg.t90030 : themeColor2.bg.t100)
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showType === `electronic` ? (
          <BOOKelectronicmeter mileage={overall} />
        ) : showType === `physical` ? (
          <BOOKphysicalmeter mileage={overall} />
        ) : (
          <BOOKelectronicmeter mileage={overall} hidden />
        )}
      </div>
      {isHovered || isHovered2 ? (
        <div
          className={`w-250px h-260px shadow-10th  ${
            isDarkMode && 'shadow-gray-200/50'
          }  absolute  flex translate-y-[100px] rounded-xl border  ${
            isDarkMode ? themeColor2.border.t300 : themeColor2.border.t500
          }  ${
            isDarkMode ? themeColor2.bg.t900 : themeColor2.bg.t200
          } p-2 px-6`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex items-end justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f mx-2 my-2 h-[1px] rounded-full ${
                    isDarkMode ? themeColor2.bg.t200 : themeColor2.bg.t400
                  }`}
                />
                <div
                  className={`w-f flex justify-center text-xl ${
                    isDarkMode ? `text-gray-200` : `text-gray-900`
                  }`}
                >
                  {isEng ? `overall` : ` всего`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-[1px] rounded-full ${
                    isDarkMode ? themeColor2.bg.t200 : themeColor2.bg.t400
                  }`}
                />
                <div className={`w-f flex flex-col items-start gap-4`}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex items-center justify-center `}
                  >
                    <div
                      className={`cursor-pointer p-1 px-8 ${
                        showType === 'physical'
                          ? isDarkMode
                            ? `border-emerald-200 bg-emerald-700`
                            : `border-emerald-500 bg-emerald-300`
                          : `${themeColor2.border.t400} ${
                              isDarkMode
                                ? themeColor2.bg.t800
                                : themeColor2.bg.t200
                            }`
                      } w-180px h-35px flex items-center justify-center rounded-xl border `}
                      onMouseDown={() => setShowType(`physical`)}
                    >
                      <BOOKphysicalmeter
                        mileage={overall}
                        start={true}
                        starting={overall || 1043}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                    className={`w-f flex items-center justify-center `}
                  >
                    <div
                      className={`cursor-pointer p-1 px-8 ${
                        showType === 'electronic'
                          ? isDarkMode
                            ? `border-emerald-200 bg-emerald-700`
                            : `border-emerald-500 bg-emerald-300`
                          : `${themeColor2.border.t400} ${
                              isDarkMode
                                ? themeColor2.bg.t800
                                : themeColor2.bg.t200
                            }`
                      } w-180px h-35px flex items-center justify-center rounded-xl border `}
                      onMouseDown={() => setShowType(`electronic`)}
                    >
                      <BOOKelectronicmeter mileage={overall || 1043} />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex items-center justify-center `}
                  >
                    <div
                      className={`cursor-pointer p-1 px-8 ${
                        showType === 'simple'
                          ? isDarkMode
                            ? `border-emerald-200 bg-emerald-700`
                            : `border-emerald-500 bg-emerald-300`
                          : `${themeColor2.border.t400} ${
                              isDarkMode
                                ? themeColor2.bg.t800
                                : themeColor2.bg.t200
                            }`
                      } w-180px h-35px flex items-center justify-center rounded-xl border `}
                      onMouseDown={() => setShowType(`simple`)}
                    >
                      <BOOKelectronicmeter mileage={overall || 1043} hidden />
                    </div>
                  </motion.div>
                </div>
              </div>
            }
          </div>
        </div>
      ) : null}
    </div>
  )
}
