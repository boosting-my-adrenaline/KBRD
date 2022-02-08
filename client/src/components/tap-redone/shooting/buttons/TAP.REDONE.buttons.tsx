import React from 'react'
import useLanguage from '../../../../hooks/useLanguage'
import { NBAbutton } from '../../../profile/NBA.button'
import { NBAslider } from '../../../profile/NBA.slider'
import { AppearType, KeyColor, State } from '../TAP.REDONE.main'
import { TAPREDONEappear } from './TAP.REDONE.appear'
import { TAPREDONEkeyColor } from './TAP.REDONE.key.color'
import { TAPREDONEkeyType } from './TAP.REDONE.key.type'

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

  const { isEng } = useLanguage()

  return (
    <div
      className={`w-1000px borde ${
        isEng ? `font-courier` : `font-CourierC`
      } flex select-none items-center justify-center gap-10 border-sky-800 ${
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
              ? `bg-sky-200`
              : state === State.RUN
              ? `bg-red-200`
              : `bg-emerald-200`
          }
          hov={
            started && state !== State.RUN
              ? `bg-sky-300`
              : state === State.RUN
              ? `bg-red-300`
              : `bg-emerald-300`
          }
          border={
            started && state !== State.RUN
              ? `border-sky-400`
              : state === State.RUN
              ? `border-red-400`
              : `border-emerald-400`
          }
          space
          extraActive={spaceDown}
        />
      </div>
      <div
        className={`flex h-[70px] w-[400px] items-center justify-evenly gap-8 rounded-md border ${
          getColor()[2]
        }`}
      >
        <TAPREDONEkeyColor setKeyColor={setKeyColor} keyColor={keyColor} />
        <TAPREDONEkeyType
          keyType={keyType}
          handleKeyType={handleKeyType}
          keyColor={keyColor}
        />
      </div>
    </div>
  )
}
