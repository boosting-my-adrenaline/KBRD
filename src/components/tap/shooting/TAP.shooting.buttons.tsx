import React, { useState, useEffect } from 'react'
import { TAPshootingIntervalSlider } from './TAP.shooting.intervalSlider'
import { TAPshootingLimitSlider } from './TAP.shooting.limitSlider'

type IProps = {
  limit: number
  setLimit(lim: number): void
  running: boolean
  handleStart(): void
  intervalPush: number
  setIntervalPush(int: number): void
  pushCell(): void
}

export const TAPshootingButtons: React.FC<IProps> = ({
  limit,
  setLimit,
  running,
  handleStart,
  intervalPush,
  setIntervalPush,
  pushCell,
}) => {
  const [bluring, setBluring] = useState(0)
  const [bluringTag, setBluringTag] = useState('START')
  const [starter, setStarter] = useState(false)

  useEffect(() => {
    setBluring(100)
    setTimeout(() => {
      running ? setBluringTag('PAUSE') : setBluringTag('START')
    }, 50)
    setTimeout(() => {
      setBluring(0)
    }, 100)
  }, [running])

  const startButton = (): void => {
    if (running) {
      setBluring(100)
      setTimeout(() => {
        running ? setBluringTag('PAUSE') : setBluringTag('START')
      }, 50)
      setTimeout(() => {
        setBluring(0)
      }, 100)
    }
  }

  const handleStarter = (): void => {
    starter ? setStarter(false) : setStarter(true)
  }

  return (
    <div className="flex flex-row justify-center items-center  border-red-600 h-32 mb-10 relative gap-10 font-courier">
      <div className="flex flex-col items bg-blue-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-blue-400">
        <h2 className="text-3xl text-right mr-10">{intervalPush} ms</h2>
        <TAPshootingIntervalSlider
          intervalPush={intervalPush}
          setIntervalPush={setIntervalPush}
        />
      </div>
      <button
        className={`flex flex-col items bg-${
          running ? 'red' : 'green'
        }-300 shadow-2xl py-6 px-10  rounded-xl text-3xl outline-none
    active:bg-${running ? 'red' : 'green'}-200 border-2 border-${
          running ? 'red' : 'green'
        }-400 transition-hover`}
        style={{
          textShadow: `0px 0px ${bluring}px rgba(0, 0, 0, 1)`,
          color: 'transparent',
          transition: '0.25s ease',
        }}
        onMouseDown={handleStart}
      >
        {bluringTag}
        <div
          className="bg-black absolute mt-10 rounded-full"
          style={{
            height: 2,
            width: 90,
          }}
        >
          {' '}
          {'\u00A0'}
        </div>
      </button>
      <div className="flex flex-col items bg-blue-300 shadow-2xl py-2 px-5 rounded-xl border-2 border-blue-400">
        <h2 className="text-3xl ml-5">Limit: {limit}</h2>
        <TAPshootingLimitSlider limit={limit} setLimit={setLimit} />
      </div>
      {/* <button onClick={() => pushCell()}>Add</button> */}
    </div>
  )
}
