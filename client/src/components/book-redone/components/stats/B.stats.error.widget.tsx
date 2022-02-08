import { motion } from 'framer-motion'
import React, { useState } from 'react'
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

  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`error-widget`, 'electronic')

  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`borde z-10  flex flex-row justify-center rounded-xl border-black px-2 ${
          (isHovered || isHovered2) && `bg-red-100`
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
          className={`w-200px h-260px -translate-y-85px  shadow-10th  absolute flex rounded-xl border border-red-500 bg-red-200 p-2 px-6 ${
            isEng || `font-CourierC`
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex  justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f flex justify-center text-xl text-gray-900`}
                >
                  {isEng ? ` errors` : `ошибки`}
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
                      } w-120px h-35px flex items-center justify-center rounded-xl border border-red-400`}
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
                        showType === 'electronic' && `bg-red-400`
                      } w-120px h-35px flex items-center justify-center rounded-xl border border-red-400`}
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
                        showType === 'simple' && `bg-red-400`
                      } w-120px h-35px flex items-center justify-center rounded-xl border border-red-400`}
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
