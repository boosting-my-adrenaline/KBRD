import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'
import useLanguage from '../../../../hooks/useLanguage'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { BOOKelectronicmeter } from './B.electronic.meter'
import { BOOKphysicalmeter } from './BOOK.physical.meter'

interface IProps {
  errors: number
}

export const BOOKstatsErrorsWidget: React.FC<IProps> = ({ errors }) => {
  if (errors >= 999) {
    errors = 999
  }

  const { isEng } = useLanguage()

  const { themeColor1 } = useColor()
  const { isDarkMode } = useDarkMode()

  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`error-widget`, 'simple')

  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`z-10  flex flex-row justify-center rounded-xl  px-2 ${
          (isHovered || isHovered2) &&
          (isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t100)
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showType === `electronic` ? (
          <BOOKelectronicmeter mileage={errors} red />
        ) : showType === `physical` ? (
          <BOOKphysicalmeter mileage={errors} red />
        ) : (
          <BOOKelectronicmeter mileage={errors} hidden red />
        )}
      </div>
      {isHovered || isHovered2 ? (
        <div
          className={`w-200px h-260px -translate-y-85px  shadow-10th  absolute flex rounded-xl border ${
            isDarkMode ? themeColor1.border.t300 : themeColor1.border.t500
          }  ${
            isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t200
          }  p-2 px-6 ${isEng || `font-CourierC`}`}
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
                  {isEng ? ` errors` : `ошибки`}
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
                            ? `border-red-200 bg-red-700`
                            : `border-red-500 bg-red-300`
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
                            }`
                      } w-120px h-35px flex items-center justify-center rounded-xl border`}
                      onMouseDown={() => setShowType(`physical`)}
                    >
                      <BOOKphysicalmeter
                        mileage={errors}
                        start={true}
                        starting={errors || 41}
                        red
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex items-center justify-center `}
                  >
                    <div
                      className={`cursor-pointer p-1 px-8 ${
                        showType === 'electronic'
                          ? isDarkMode
                            ? `border-red-200 bg-red-700`
                            : `border-red-500 bg-red-300`
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
                            }`
                      } w-120px h-35px flex items-center justify-center rounded-xl border`}
                      onMouseDown={() => setShowType(`electronic`)}
                    >
                      <BOOKelectronicmeter mileage={errors || 41} red />
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
                            ? `border-red-200 bg-red-700`
                            : `border-red-500 bg-red-300`
                          : `${themeColor1.border.t400} ${
                              isDarkMode
                                ? themeColor1.bg.t800
                                : themeColor1.bg.t200
                            }`
                      } w-120px h-35px flex items-center justify-center rounded-xl border `}
                      onMouseDown={() => setShowType(`simple`)}
                    >
                      <BOOKelectronicmeter mileage={errors || 41} hidden red />
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
