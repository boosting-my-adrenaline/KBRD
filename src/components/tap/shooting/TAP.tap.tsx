import React, { useState, useEffect } from 'react'
import { TAPshootingFrame } from './TAP.shooting.frame'
import { KeyColor } from '../TAP.shooting'

interface IProps {
  cells: Array<string | null>
  bluring: boolean
  missclicks: number
  running: boolean
  handleStart(): void
  started: boolean
  handleRunning(): void
  keyColor: KeyColor
  newGame: boolean
}

export const TAPtap: React.FC<IProps> = ({
  cells,
  bluring,
  missclicks,
  running,
  handleStart,
  started,
  handleRunning,
  keyColor,
  newGame,
}) => {
  const [frameColor, setFrameColor] = useState('transparent')

  useEffect(() => {
    if (running) {
      if (cells.filter((el) => el).length > 0) {
        setFrameColor('green-400')
        setTimeout(() => setFrameColor('transparent'), 50)
      } else {
        setFrameColor('transparent')
      }
    } else {
      setFrameColor('blue-400')
    }
  }, [running])

  useEffect(() => {
    if (missclicks) {
      setFrameColor('red-600')
    }
    let id1 = setTimeout(() => setFrameColor('transparent'), 100)

    return () => clearTimeout(id1)
  }, [missclicks])

  const cellElements = (cell: number) => {
    if (cells.length <= cell) {
      return <div style={{ width: 82, height: 63 }}></div>
    }

    return (
      <div
        className={` flex justify-center items-center rounded-full`}
        style={{ width: 82, height: 63 }}
      >
        <div
          className={` ${!cells[cell] && `hidden`}
               bg-${keyColor}-500  rounded-full flex justify-center items-center font-courier uppercase`}
          style={{
            width: 80,
            height: 80,
            fontSize: '3.5em',
            transition: '0.1s ease',
          }}
        >
          {cells[cell]}
          {/* {cell} */}
          <div
            className={`bg-black absolute mt-14 rounded-full ${
              !(cells[cell] === 'j' || cells[cell] === 'f') && 'hidden'
            } ${bluring && 'hidden'}`}
            style={{ height: 2, width: 18, transition: '0.5s ease' }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div className="invisible 1k:visible relative flex justify-center  items-start ">
      <div
        className="flex flex-col justify-center items-center gap-16 "
        style={{
          width: 1110,
          height: 620,
        }}
      >
        <TAPshootingFrame
          // bluring={bluring}
          isThereCells={cells.filter((el) => el).length > 0}
          frameColor={frameColor}
          cellsLength={cells.length}
          handleStart={handleStart}
          running={running}
          started={started}
          handleRunning={handleRunning}
          newGame={newGame}
        />

        <div className="flex flex-row justify-center gap-20">
          {cellElements(25)}
          {cellElements(13)}
          {cellElements(14)}
          {cellElements(15)}
          {cellElements(26)}
        </div>
        <div className="flex flex-row justify-center gap-20">
          {cellElements(21)}
          {cellElements(7)}
          {cellElements(3)}
          {cellElements(4)}
          {cellElements(10)}
          {cellElements(22)}
        </div>
        <div className="flex flex-row justify-center gap-20">
          {cellElements(19)}
          {cellElements(8)}
          {cellElements(1)}
          {cellElements(0)}
          {cellElements(2)}
          {cellElements(11)}
          {cellElements(20)}
        </div>
        <div className="flex flex-row justify-center gap-20">
          {cellElements(23)}
          {cellElements(9)}
          {cellElements(5)}
          {cellElements(6)}
          {cellElements(12)}
          {cellElements(24)}
        </div>
        <div className="flex flex-row justify-center gap-20">
          {cellElements(27)}
          {cellElements(16)}
          {cellElements(17)}
          {cellElements(18)}
          {cellElements(28)}
        </div>
      </div>
    </div>
  )
}
