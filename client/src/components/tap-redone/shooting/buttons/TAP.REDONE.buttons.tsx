import React from 'react'
import useLanguage from '../../../../hooks/useLanguage'
import { NBAbutton } from '../../../profile/NBA.button'
import { NBAslider } from '../../../profile/NBA.slider'
import { AppearType, KeyColor, State } from '../TAP.REDONE.main'
import { TAPREDONEappear } from './TAP.REDONE.appear'
import { TAPREDONEkeyColor } from './TAP.REDONE.key.color'
import { TAPREDONEkeyType } from './TAP.REDONE.key.type'

import R from '../../../../static/profiles/russia.png'
import E from '../../../../static/profiles/uk.png'
import { motion } from 'framer-motion'
import useColor from '../../../../hooks/useColor'
import useDarkMode from '../../../../hooks/useDarkMode'

interface IProps {
  demo: boolean
  state: State
  handleStart: () => void
  interval: number
  setInterval: (interval: number) => void
  keyColor: KeyColor
  setKeyColor: (color: KeyColor) => void
  keyType: [boolean, boolean, boolean]
  handleKeyType: (type: 1 | 2 | 3) => void
  limit: number
  setLimit: (limit: number) => void
  spaceDown: boolean
  started: boolean
  maxLimit: number
  appearType: AppearType
  setAppearType: (type: AppearType) => void
  targets: number
  setTargets: (targets: number) => void
  trainingLanguage: boolean
  handleLanguage: () => void
}

export const TAPREDONEbuttons: React.FC<IProps> = ({
  demo,
  state,
  handleStart,
  interval,
  setInterval,
  keyColor,
  setKeyColor,
  keyType,
  handleKeyType,
  limit,
  setLimit,
  spaceDown,
  started,
  maxLimit,
  appearType,
  setAppearType,
  targets,
  setTargets,
  trainingLanguage,
  handleLanguage,
}) => {
  const { themeColor2 } = useColor()

  const { isDarkMode } = useDarkMode()

  const { isEng } = useLanguage()

  return (
    <div
      className={`w-1000px borde ${
        isEng ? `font-courier` : `font-CourierC`
      } flex select-none items-center justify-center gap-10  ${
        demo && `opacity-0`
      } grid-cols-custom1 grid transition duration-500 ease-in-out`}
    >
      <div className={`flex items-center justify-end`}>
        <TAPREDONEappear
          interval={interval}
          setInterval={setInterval}
          limit={limit}
          setLimit={setLimit}
          maxLimit={maxLimit}
          appearType={appearType}
          setAppearType={setAppearType}
          targets={targets}
          setTargets={setTargets}
          keyColor={keyColor}
        />
      </div>
      <div className={` flex items-center justify-center`}>
        <NBAbutton
          tag={
            started && state !== State.RUN
              ? isEng
                ? `READY`
                : `ПАУЗА`
              : state === State.RUN
              ? isEng
                ? `PAUSE`
                : `ПАУЗА`
              : isEng
              ? `START`
              : `СТАРТ`
          }
          onClick={handleStart}
          bg={
            started && state !== State.RUN
              ? isDarkMode
                ? themeColor2.bg.t700
                : themeColor2.bg.t200
              : state === State.RUN
              ? isDarkMode
                ? `bg-red-700`
                : `bg-red-200`
              : isDarkMode
              ? `bg-emerald-700`
              : `bg-emerald-200`
          }
          hov={
            started && state !== State.RUN
              ? isDarkMode
                ? themeColor2.bg.t800
                : themeColor2.bg.t300
              : state === State.RUN
              ? isDarkMode
                ? `bg-red-800`
                : `bg-red-300`
              : isDarkMode
              ? `bg-emerald-800`
              : `bg-emerald-300`
          }
          border={
            started && state !== State.RUN
              ? isDarkMode
                ? themeColor2.border.t200
                : themeColor2.border.t400
              : state === State.RUN
              ? isDarkMode
                ? `border-red-200`
                : `border-red-400`
              : isDarkMode
              ? `border-emerald-200`
              : `border-emerald-400`
          }
          space
          extraActive={spaceDown}
          isDark={isDarkMode}
        />
      </div>
      <div
        className={`flex h-[70px] w-[400px] items-center justify-evenly gap-8 rounded-md border  ${
          isDarkMode ? themeColor2.border.t700 : themeColor2.border.t300
        }`}
      >
        <TAPREDONEkeyColor setKeyColor={setKeyColor} keyColor={keyColor} />
        <TAPREDONEkeyType
          keyType={keyType}
          handleKeyType={handleKeyType}
          keyColor={keyColor}
        />
        <motion.div
          initial={{ x: -11 }}
          whileHover={{ scale: 1.16 }}
          whileTap={{ scale: 0.9 }}
          onMouseDown={handleLanguage}
          className={`h-[30px] w-[30px]  cursor-pointer rounded-full border ${
            isDarkMode ? `border-gray-100` : `border-gray-600`
          }`}
        >
          <img alt="" src={trainingLanguage ? E : R} />
        </motion.div>
      </div>
    </div>
  )
}
