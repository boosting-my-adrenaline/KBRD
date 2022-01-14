import React from 'react'
import { NBAbutton } from '../../../profile/NBA.button'
import { NBAslider } from '../../../profile/NBA.slider'
import { KeyColor } from '../../../tap/TAP.shooting'
import { State } from '../TAP.REDONE.main'
import { TAPREDONEkeyColor } from './TAP.REDONE.key.color'
import { TAPREDONEkeyType } from './TAP.REDONE.key.type'

interface IProps {
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
}

export const TAPREDONEbuttons: React.FC<IProps> = ({
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
}) => {
  return (
    <div
      className={`flex justify-center items-center gap-10 w-1000px borde border-sky-800 select-none`}
    >
      <TAPREDONEkeyColor setKeyColor={setKeyColor} keyColor={keyColor} />

      <NBAslider
        tag={`interval`}
        min={200}
        max={1600}
        step={100}
        value={interval}
        setValue={setInterval}
        postTag={`ms`}
      />
      <div className={`flex justify-center items-center -translate-y-5px`}>
        <NBAbutton
          tag={
            started && state !== State.RUN
              ? `READY`
              : state === State.RUN
              ? `PAUSE`
              : `START`
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
      <NBAslider
        tag={`limit`}
        min={5}
        max={maxLimit}
        step={1}
        value={limit}
        setValue={setLimit}
      />
      <TAPREDONEkeyType
        keyType={keyType}
        handleKeyType={handleKeyType}
        keyColor={keyColor}
      />
    </div>
  )
}
