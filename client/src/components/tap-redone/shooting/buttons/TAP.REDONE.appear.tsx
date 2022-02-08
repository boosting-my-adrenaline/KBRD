import { motion } from 'framer-motion'
import React from 'react'
import useLanguage from '../../../../hooks/useLanguage'
import { NBAslider } from '../../../profile/NBA.slider'
import { AppearType, KeyColor } from '../TAP.REDONE.main'

interface IProps {
  interval: number
  setInterval: (interval: number) => void
  limit: number
  setLimit: (limit: number) => void
  maxLimit: number
  appearType: AppearType
  setAppearType: (type: AppearType) => void
  targets: number
  setTargets: (targets: number) => void
  keyColor: KeyColor
}

export const TAPREDONEappear: React.FC<IProps> = ({
  interval,
  setInterval,
  limit,
  setLimit,
  maxLimit,
  appearType,
  setAppearType,
  targets,
  setTargets,
  keyColor,
}) => {
  const getColor = () => {
    switch (keyColor) {
      case `emerald`:
        return [`bg-emerald-500 `, `bg-emerald-200`, `border-emerald-300`]
      case `cyan`:
        return [`bg-cyan-500 `, `bg-cyan-200`, `border-cyan-300`]
      case `amber`:
        return [`bg-amber-500 `, `bg-amber-200`, `border-amber-300`]
      case `fuchsia`:
        return [`bg-fuchsia-500 `, `bg-fuchsia-200`, `border-fuchsia-300`]
      case `pink`:
        return [`bg-pink-500 `, `bg-pink-200`, `border-pink-300`]
      default:
        return [`bg-red-500 `, `bg-red-200`, `border-red-300`]
    }
  }

  let prepared = appearType !== AppearType.PREPARED

  const { isEng } = useLanguage()

  return (
    <>
      {/* <div
        onMouseDown={() => {
          appearType === AppearType.PREPARED
            ? setAppearType(AppearType.INTERVAL)
            : setAppearType(AppearType.PREPARED)
        }}
        className={`absolute top-12 bg-black`}
      >
        Test
      </div> */}
      <div
        className={` h-[70px] w-[400px] overflow-hidden rounded-md border ${
          getColor()[2]
        } pb-1.5`}
      >
        <div
          className={`duration-400 absolute -z-10 w-[199px] origin-right  border-b border-r  ${
            getColor()[2]
          }  ${getColor()[1]} transition ease-in-out`}
          style={{
            borderBottomRightRadius: 6,
            transform: `rotateY(${prepared ? 0 : 180}deg)`,
          }}
        >
          {' '}
          {`\u00a0`}
        </div>

        <div className={`flex items-start justify-evenly `}>
          <div
            className={`w-full cursor-pointer text-center ${
              !prepared ? `text-sky-900` : `text-gray-700`
            }`}
            onMouseDown={() => setAppearType(AppearType.PREPARED)}
          >
            {isEng ? `prepared` : `по готовности`}
          </div>
          <div
            className={`w-full cursor-pointer text-center ${
              prepared ? `text-sky-900` : `text-gray-700`
            }`}
            onMouseDown={() => setAppearType(AppearType.INTERVAL)}
          >
            {isEng ? `interval` : `интервал`}
          </div>
        </div>

        <div className={`relative flex w-full justify-start overflow-hidden  `}>
          <motion.div
            animate={{
              x: prepared ? 0 : -400,
            }}
            transition={{ bounce: 0.5 }}
            className={`flex items-center justify-start`}
          >
            <div
              className={`flex w-[400px] shrink-0 items-center justify-center gap-8`}
            >
              <NBAslider
                tag={isEng ? `interval` : `интервал `}
                min={200}
                max={1600}
                step={100}
                value={interval}
                setValue={setInterval}
                postTag={isEng ? `ms` : 'мс'}
              />
              <NBAslider
                tag={isEng ? `limit` : ` лимит`}
                min={5}
                max={maxLimit}
                step={1}
                value={limit}
                setValue={setLimit}
              />
            </div>
            <div
              className={`flex w-[400px] shrink-0 items-center justify-center gap-8 `}
            >
              {[3, 4, 5].map((el) => (
                <div
                  key={el}
                  className={`${
                    getColor()[0]
                  } flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full text-[22px]`}
                  onMouseDown={() => setTargets(el)}
                >
                  {el}
                </div>
              ))}
              <NBAslider
                tag={isEng ? `targets` : `цели `}
                min={1}
                max={maxLimit > 15 ? 15 : maxLimit}
                step={1}
                value={targets}
                setValue={setTargets}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
