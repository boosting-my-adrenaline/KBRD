import React, { useState } from 'react'
import { BOOKelectronicmeter } from './B.electronic.meter'
import { BOOKphysicalmeter } from './BOOK.physical.meter'
import { motion } from 'framer-motion'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import useLanguage from '../../../../hooks/useLanguage'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'

interface IProps {
  overall: number
}

export const BOOKstatsOverallWidget: React.FC<IProps> = ({ overall }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`overall-widget`, 'simple')

  const { isEng } = useLanguage()

  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={`flex items-center justify-center ${isEng || `font-CourierC`}`}
    >
      <div
        className={`w-140px borde z-10 flex flex-row justify-center rounded-xl border-black px-2 ${
          (isHovered || isHovered2) &&
          (isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t100)
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
          className={`w-250px h-260px shadow-10th  -translate-y-85px  absolute flex rounded-xl border ${
            isDarkMode ? themeColor1.border.t300 : themeColor1.border.t500
          }  ${
            isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t200
          } p-2 px-6`}
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
                  {isEng ? `overall` : ` всего`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-px rounded-full ${
                    isDarkMode ? themeColor1.bg.t200 : themeColor1.bg.t400
                  }`}
                ></div>
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
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
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
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
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
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
                            }`
                      } w-180px h-35px flex items-center justify-center rounded-xl border  `}
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
