import React, { useState } from 'react'
import { BOOKelectronicmeter } from './B.electronic.meter'
import { BOOKphysicalmeter } from './BOOK.physical.meter'

interface IProps {
  overall: number
}

export const BOOKstatsOverallWidget: React.FC<IProps> = ({ overall }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [showType, setShowType] = useState<
    `electronic` | `physical` | 'simple'
  >('electronic')

  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`z-10 w-140px flex flex-row justify-center borde border-black px-2 rounded-xl ${
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
          className={`absolute bg-red-200 rounded-xl  flex  p-2 px-6 border border-red-500 w-250px h-260px shadow-10th -translate-y-85px`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className={`flex justify-center  w-f`}>
            {
              <div className={`flex flex-col  items-center w-f`}>
                <div
                  className={`flex justify-center w-f text-gray-900 text-xl`}
                >
                  overall
                </div>
                <div
                  className={`w-f mx-2 h-px my-2 bg-red-400 rounded-full`}
                ></div>
                <div className={`w-f flex flex-col gap-4 items-start`}>
                  <div className={`w-f flex justify-center items-center `}>
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'physical' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center w-180px h-35px`}
                      onMouseDown={() => setShowType(`physical`)}
                    >
                      <BOOKphysicalmeter
                        mileage={overall}
                        start={true}
                        starting={overall || 1043}
                      />
                    </div>
                  </div>

                  <div className={`w-f flex justify-center items-center `}>
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'electronic' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center w-180px h-35px`}
                      onMouseDown={() => setShowType(`electronic`)}
                    >
                      <BOOKelectronicmeter mileage={overall || 1043} />
                    </div>
                  </div>
                  <div className={`w-f flex justify-center items-center `}>
                    <div
                      className={`p-1 px-8 cursor-pointer ${
                        showType === 'simple' && `bg-red-400`
                      } border border-red-400 rounded-xl flex items-center justify-center text-emerald-500 w-180px h-35px`}
                      onMouseDown={() => setShowType(`simple`)}
                    >
                      <BOOKelectronicmeter mileage={overall || 1043} hidden />
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
