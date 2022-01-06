import React, { useState, useEffect } from 'react'
import { TAPshootingIntervalSlider } from './TAP.shooting.intervalSlider'
import { TAPshootingLimitSlider } from './TAP.shooting.limitSlider'
import { TAPshootingKeyStyle } from './TAP.shooting.keyStyle'
import { KeyColor } from '../TAP.shooting'
import { TAPshootingKeyType } from './TAP.shooting.keyType'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

type IProps = {
  limit: number
  setLimit(lim: number): void
  running: boolean
  handleStart(): void
  intervalPush: number
  setIntervalPush(int: number): void
  pushCell(): void
  started: boolean
  keyColor: KeyColor
  setKeyColor(color: KeyColor): void
  typeCells: {
    numbers: boolean
    letters: boolean
    punctuation: boolean
  }
  handleSetTypeCells(type: 1 | 2 | 3): void
}

export const TAPshootingButtons: React.FC<IProps> = ({
  limit,
  setLimit,
  running,
  handleStart,
  intervalPush,
  setIntervalPush,
  pushCell,
  started,
  keyColor,
  setKeyColor,
  typeCells,
  handleSetTypeCells,
}) => {
  const [bluring, setBluring] = useState(0)
  const [bluringTag, setBluringTag] = useState('START')

  useDidMountEffect(() => {
    setBluring(100)
    let id = setTimeout(() => {
      if (started && !running) {
        setBluringTag('READY')
      } else if (started && running) {
        setBluringTag('PAUSE')
      } else if (!started && !running) {
        setBluringTag('START')
      }
      // running ? setBluringTag('PAUSE') : setBluringTag('START')
    }, 50)
    let id2 = setTimeout(() => {
      setBluring(0)
    }, 100)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [running, started])

  const handleStartButton = (): void => {
    if (started == running) {
      handleStart()
    }
  }

  const startButtonParams = () => {
    switch (bluringTag) {
      case 'PAUSE':
        return ['bg-red-300', `active:bg-red-200`, `border-red-400`]
      case 'READY':
        return ['bg-sky-300', `active:bg-sky-200`, `border-sky-400`]
      default:
        return ['bg-green-300', `active:bg-green-200`, `border-green-400`]
    }
  }

  return (
    <div className="flex flex-row justify-center items-center  h-32 mb-10 relative gap-10 font-courier borde border-red-800">
      <TAPshootingKeyStyle keyColor={keyColor} setKeyColor={setKeyColor} />
      <div className="flex flex-col items bg-sky-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-sky-400">
        <h2 className="text-2xl text-right mr-12">{intervalPush} ms</h2>
        <TAPshootingIntervalSlider
          intervalPush={intervalPush}
          setIntervalPush={setIntervalPush}
        />
      </div>
      <button
        className={`flex flex-col items ${
          startButtonParams()[0]
        } shadow-2xl py-6 px-10  rounded-xl text-2xl outline-none
    ${startButtonParams()[1]} border-2 ${
          startButtonParams()[2]
        } transition-hover `}
        style={{
          textShadow: `0px 0px ${bluring}px rgba(0, 0, 0, 1)`,
          color: 'transparent',
          transition: '0.25s ease',
        }}
        onMouseDown={handleStartButton}
      >
        {bluringTag}
        <div
          className="bg-black absolute mt-10 rounded-full"
          style={{
            height: 2,
            width: 70,
          }}
        >
          {' '}
          {'\u00A0'}
        </div>
      </button>
      <div className="flex flex-col items bg-sky-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-sky-400">
        <h2 className="text-2xl ml-8">Limit: {limit}</h2>
        <TAPshootingLimitSlider limit={limit} setLimit={setLimit} />
      </div>
      <TAPshootingKeyType
        keyColor={keyColor}
        typeCells={typeCells}
        handleSetTypeCells={handleSetTypeCells}
      />
    </div>
  )
}
