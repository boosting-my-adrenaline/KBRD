import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { BOOKelectronicmeter } from '../../../book-redone/components/stats/B.electronic.meter'
import { BOOKphysicalmeter } from '../../../book-redone/components/stats/BOOK.physical.meter'
import useLanguage from '../../../../hooks/useLanguage'

interface IProps {
  overall: number
}

export const TAPoverall: React.FC<IProps> = ({ overall }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useLocalStorage<
    `electronic` | `physical` | 'simple'
  >(`T-overall-widget`, 'electronic')

  const { isEng } = useLanguage()

  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`w-140px borde z-10 flex flex-row justify-center rounded-xl border-black px-2 ${
          (isHovered || isHovered2) && `bg-sky-100`
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
          className={`w-250px h-260px shadow-10th  absolute  flex translate-y-[100px] rounded-xl border border-sky-500 bg-sky-200 p-2 px-6`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`w-f flex items-end justify-center`}>
            {
              <div className={`w-f flex  flex-col items-center`}>
                <div
                  className={`w-f mx-2 my-2 h-[1px] rounded-full bg-sky-400`}
                />
                <div
                  className={`w-f flex justify-center text-xl text-gray-900`}
                >
                  {isEng ? `overall` : ` всего`}
                </div>
                <div
                  className={`w-f mx-2 my-2 h-[1px] rounded-full bg-sky-400`}
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
                          ? `border-emerald-500 bg-emerald-200`
                          : `border-sky-400 bg-sky-100`
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
                          ? `border-emerald-500 bg-emerald-200`
                          : `border-sky-400 bg-sky-100`
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
                          ? `border-emerald-500 bg-emerald-200`
                          : `border-sky-400 bg-sky-100`
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
