import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { ExpMessage, ExpMSG } from './LEVEL.container'

import FastAndFurious from '../../static/speedometer.png'
import Lightning from '../../static/lightning.png'
import Rocket from '../../static/rocket.png'
import Marksman from '../../static/sniper.png'
import BullsEye from '../../static/target.png'
import Steph from '../../static/steph.png'
import Run from '../../static/run.png'
import Run2 from '../../static/run2.png'
import Maraphon from '../../static/finish.png'
import Award from '../../static/award.png'
import Cup from '../../static/cup.png'
import Grow from '../../static/grow.png'
import Mountain from '../../static/mountain.png'
import Excellence from '../../static/excellence.png'
import Star from '../../static/star.png'
import Dumbbell from '../../static/dumbbell.png'
import Piano from '../../static/piano.png'

interface IProps {
  level: number
  expMSG: ExpMSG
}

export const LEVELicon: React.FC<IProps> = ({ level, expMSG }) => {
  const [lvl, setLvl] = useState(level)

  const bgColor = (): [string, string] => {
    switch (lvl) {
      case 2:
        return ['bg-emerald-200', 'shadow-emerald-400']
      case 3:
        return ['bg-emerald-300', 'shadow-emerald-500']
      case 4:
        return ['bg-rose-400', 'shadow-rose-600']
      case 5:
        return ['bg-rose-500', 'shadow-rose-700']
      case 6:
        return ['bg-rose-600', 'shadow-rose-800']
      case 7:
        return ['bg-yellow-400', 'shadow-yellow-600']
      case 8:
        return ['bg-red-400', 'shadow-red-600']
      case 9:
        return ['bg-teal-300', 'shadow-teal-500']
      case 10:
        return ['bg-cyan-300', 'shadow-cyan-500']
      default:
        return ['bg-red-100', 'shadow-red-300']
    }
  }

  useDidMountEffect(() => {
    let id0 = setTimeout(() => setShowLvlForced(true), 2000)
    let id1 = setTimeout(() => setLvl(level), 2250)
    let id2 = setTimeout(() => setShowLvlForced(false), 6000)

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
    }
  }, [level])

  const [tick, setTick] = useState(false)

  useEffect(() => {
    let id = setInterval(() => setTick((prev) => !prev), 2000)

    return () => clearInterval(id)
  }, [])

  const levelNumber = (num: number, key: any) => (
    <div
      key={key}
      className={`z-10 flex items-center justify-center`}
      style={{
        height: 40,
        width: 40,
        transition: '0.3s ease-in-out',
      }}
    >
      {num < 10 ? (
        num
      ) : (
        <>
          <span>1</span>
          <span style={{ marginLeft: -4 }}>0</span>
        </>
      )}
    </div>
  )

  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) =>
    levelNumber(el, el)
  )

  const [showLvlForced, setShowLvlForced] = useState(false)

  const getAch = () => {
    switch (expMSG) {
      case ExpMessage.WayTooFast:
        return Rocket
      case ExpMessage.FastAndFurious:
        return FastAndFurious
      case ExpMessage.FastFingers:
        return Lightning
      case ExpMessage.Marksman:
        return Marksman
      case ExpMessage.TheBullsEye:
        return BullsEye
      case ExpMessage.AccurateAsStephCurry:
        return Steph
      case ExpMessage.FastAndPerfectRace:
        return Run
      case ExpMessage.FastRun:
        return Run2
      case ExpMessage.HardWorker:
        return Dumbbell
      case ExpMessage.MaraphonRunner:
        return Maraphon
      case ExpMessage.TopSkills:
        return Award
      case ExpMessage.Pianist:
        return Piano
      case ExpMessage.AbsoluteMaster:
        return Cup
      case ExpMessage.Practice:
        return Grow
      case ExpMessage.TaskAheadOfYou:
        return Mountain
      case ExpMessage.Excellence:
        return Excellence
      case ExpMessage.NotAverage:
        return Star
      default:
        return ``
    }
  }

  return (
    <div
      className={`font-courier z-20 flex items-center justify-center rounded-xl border border-gray-800 text-3xl ${
        bgColor()[0]
      }   ${tick ? 'shadow-3xl' : `shadow-sm`} ${bgColor()[1]} 
      h-40px w-42px duration-2000 
       overflow-hidden transition ease-in-out`}
      // style={{ transition: '0.2s ease-in-out' }}
    >
      {!showLvlForced && expMSG && (
        <div
          className={`h-40px w-40px p-6px borde absolute z-20 flex flex-col items-center justify-center  rounded-xl border-gray-800 `}
        >
          <img src={getAch()} alt="" />
        </div>
      )}
      <div
        className={`w-40px h-40px mt-2px  flex flex-col items-center justify-start transition duration-1000 ease-in-out`}
        style={{
          // transition: '1s ease-in-out', /// !!!!
          transform: `translateY(-${40 * lvl - 40}px)`,
        }}
      >
        <div className={`flex flex-col flex-wrap items-center justify-start `}>
          {elements}
        </div>
        <div
          className={`absolute ${bgColor()[0]} w-40px h-400px z-10  ${
            // `opacity-100`
            !showLvlForced && expMSG ? 'opacity-100' : 'opacity-0'
          } `}
        ></div>
      </div>
    </div>
  )
}
