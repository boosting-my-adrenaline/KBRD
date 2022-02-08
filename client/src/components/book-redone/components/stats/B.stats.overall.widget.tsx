import React, { useState } from 'react'
import { BOOKelectronicmeter } from './B.electronic.meter'
import { BOOKphysicalmeter } from './BOOK.physical.meter'
import { motion } from 'framer-motion'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import useLanguage from '../../../../hooks/useLanguage'

interface IProps {
  overall: number
}

export const BOOKstatsOverallWidget: React.FC<IProps> = ({ overall }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`overall-widget`, 'electronic')

  const { isEng } = useLanguage()

  return (
    <div
      className={`flex items-center justify-center ${isEng || `font-CourierC`}`}
    >
      <div
        className={`w-140px borde z-10 flex flex-row justify-center rounded-xl border-black px-2 ${
          (isHovered || isHovered2) && `bg-red-100`
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
          className={`w-250px h-260px shadow-10th  -translate-y-85px  absolute flex rounded-xl border border-red-500 bg-red-200 p-2 px-6`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex  justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f flex justify-center text-xl text-gray-900`}
                >
                  {isEng ? `overall` : ` всего`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-px rounded-full bg-red-400`}
                ></div>
                <div className={`w-f flex flex-col items-start gap-4`}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex items-center justify-center `}
                  >
                    <div
                      className={`cursor-pointer p-1 px-8 ${
                        showType === 'physical' && `bg-red-400`
                      } w-180px h-35px flex items-center justify-center rounded-xl border border-red-400`}
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
                        showType === 'electronic' && `bg-red-400`
                      } w-180px h-35px flex items-center justify-center rounded-xl border border-red-400`}
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
                        showType === 'simple' && `bg-red-400`
                      } w-180px h-35px flex items-center justify-center rounded-xl border border-red-400 text-emerald-500`}
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
