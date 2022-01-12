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
  const [frameColor, setFrameColor] = useState('bg-sky-200')

  const getColor = () => {
    switch (keyColor) {
      case `red`:
        return `bg-red-500`
      case `emerald`:
        return `bg-emerald-500`
      case `cyan`:
        return `bg-cyan-500`
      case `amber`:
        return `bg-amber-500`
      case `fuchsia`:
        return `bg-fuchsia-500`
      case `pink`:
        return `bg-pink-500`
    }
  }

  useEffect(() => {
    if (running) {
      if (cells.filter((el) => el).length > 0) {
        setFrameColor('bg-green-400')
        setTimeout(() => setFrameColor('bg-transparent'), 50)
      } else {
        setFrameColor('bg-transparent')
      }
    } else {
      setFrameColor('bg-sky-400')
    }
  }, [running])

  useEffect(() => {
    if (missclicks) {
      setFrameColor('bg-red-600')
    }
    let id1 = setTimeout(() => setFrameColor('bg-transparent'), 100)

    return () => clearTimeout(id1)
  }, [missclicks])

  const cellElements = (cell: number) => {
    if (cells.length <= cell) {
      return <div className={`w-82px h-63px`} />
    }

    return (
      <div
        className={`w-82px h-63px flex justify-center items-center rounded-full`}
      >
        <div
          className={`w-80px h-80px ${!cells[cell] && `hidden`}
               ${getColor()} text-3.5em rounded-full flex justify-center items-center font-courier uppercase transition duration-100 ease-linear`}
        >
          <div
            style={{
              marginTop:
                cells[cell] === ':' ||
                cells[cell] === ';' ||
                cells[cell] === '(' ||
                cells[cell] === ')' ||
                cells[cell] === '[' ||
                cells[cell] === '{' ||
                cells[cell] === '}' ||
                cells[cell] === ']' ||
                cells[cell] === '_' ||
                cells[cell] === '-'
                  ? '-10px'
                  : '',
            }}
          >
            {cells[cell]}
          </div>
          {/* {cell} */}
          <div
            className={`h-2px w-18px bg-black absolute mt-14 rounded-full ${
              !(cells[cell] === 'j' || cells[cell] === 'f') && 'hidden'
            } ${bluring && 'hidden'} transition duration-500 ease-linear`}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div className="invisible 1k:visible relative flex justify-center  items-start ">
      <div
        className={`w-1100px h-620px flex flex-col justify-center items-center gap-16 `}
      >
        <TAPshootingFrame
          // bluring={bluring}
          isThereCells={cells.filter((el) => el).length > 0}
          frameColor={frameColor}
          cellsLength={cells.length}
          handleStart={handleStart}
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
