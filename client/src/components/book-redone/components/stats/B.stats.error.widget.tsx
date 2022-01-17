import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { BOOKelectronicmeter } from './B.electronic.meter'
import { BOOKphysicalmeter } from './BOOK.physical.meter'

interface IProps {
  errors: number
}

export const BOOKstatsErrorsWidget: React.FC<IProps> = ({ errors }) => {
  if (errors >= 999) {
    errors = 999
  }

  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useState<
    `electronic` | `physical` | 'simple'
  >('electronic')

  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`z-10 flex  flex-row justify-center borde border-black px-2 rounded-xl ${
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
          className={`absolute bg-red-200 rounded-xl  flex  p-2 px-6 border border-red-500 w-200px h-260px -translate-y-85px shadow-10th`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`flex justify-center  w-f`}>
            {
              <div className={`flex flex-col  items-center w-f`}>
                <div
                  className={`flex justify-center w-f text-gray-900 text-xl`}
                >
                  errors
                </div>
                <div
                  className={`w-f mx-2 h-px my-2 bg-red-400 rounded-full`}
                ></div>
                <div className={`w-f flex flex-col gap-4 items-start`}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex justify-center items-center `}
                  >
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'physical' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center w-120px h-35px`}
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
                    className={`w-f flex justify-center items-center `}
                  >
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'electronic' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center w-120px h-35px`}
                      onMouseDown={() => setShowType(`electronic`)}
                    >
                      <BOOKelectronicmeter mileage={errors || 41} red />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-f flex justify-center items-center `}
                  >
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'simple' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center w-120px h-35px`}
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
