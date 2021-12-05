import React, { useState, useEffect } from 'react'
import { TAPshootingIntervalSlider } from './TAP.shooting.intervalSlider'
import { TAPshootingLimitSlider } from './TAP.shooting.limitSlider'
import { TAPshootingKeyStyle } from './TAP.shooting.keyStyle'
import { KeyColor } from '../TAP.shooting'
import { TAPshootingKeyType } from './TAP.shooting.keyType'

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
}) => {
  const [bluring, setBluring] = useState(0)
  const [bluringTag, setBluringTag] = useState('START')

  useEffect(() => {
    setBluring(100)
    setTimeout(() => {
      if (started && !running) {
        setBluringTag('READY')
      } else if (started && running) {
        setBluringTag('PAUSE')
      } else if (!started && !running) {
        setBluringTag('START')
      }
      // running ? setBluringTag('PAUSE') : setBluringTag('START')
    }, 50)
    setTimeout(() => {
      setBluring(0)
    }, 100)
  }, [running, started])

  const handleStartButton = (): void => {
    if (started == running) {
      handleStart()
    }
  }

  return (
    <div className="flex flex-row justify-center items-center  border-red-600 h-32 mb-10 relative gap-10 font-courier">
      <TAPshootingKeyStyle keyColor={keyColor} setKeyColor={setKeyColor} />
      <div className="flex flex-col items bg-blue-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-blue-400">
        <h2 className="text-2xl text-right mr-12">{intervalPush} ms</h2>
        <TAPshootingIntervalSlider
          intervalPush={intervalPush}
          setIntervalPush={setIntervalPush}
        />
      </div>
      <button
        className={`flex flex-col items bg-${
          bluringTag === 'PAUSE'
            ? 'red'
            : bluringTag === 'START'
            ? 'green'
            : 'blue'
        }-300 shadow-2xl py-6 px-10  rounded-xl text-2xl outline-none
    active:bg-${
      bluringTag === 'PAUSE' ? 'red' : bluringTag === 'START' ? 'green' : 'blue'
    }-200 border-2 border-${
          bluringTag === 'PAUSE'
            ? 'red'
            : bluringTag === 'START'
            ? 'green'
            : 'blue'
        }-400 transition-hover`}
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
      <div className="flex flex-col items bg-blue-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-blue-400">
        <h2 className="text-2xl ml-8">Limit: {limit}</h2>
        <TAPshootingLimitSlider limit={limit} setLimit={setLimit} />
      </div>
      <TAPshootingKeyType keyColor={keyColor} setKeyColor={setKeyColor} />
    </div>
  )
}
