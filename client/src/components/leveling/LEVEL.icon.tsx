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
        return ['bg-red-200', 'shadow-red-400']
      case 3:
        return ['bg-red-300', 'shadow-red-500']
      case 4:
        return ['bg-rose-400', 'shadow-rose-600']
      case 5:
        return ['bg-rose-500', 'shadow-rose-700']
      case 6:
        return ['bg-rose-600', 'shadow-rose-800']
      case 7:
        return ['bg-yellow-400', 'shadow-yellow-600']
      case 8:
        return ['bg-emerald-400', 'shadow-emerald-600']
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

  const levelNumber = (num: number) => (
    <div
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
          <span style={{ marginLeft: 0 }}>1</span>
          <span style={{ marginLeft: -4 }}>0</span>
        </>
      )}
    </div>
  )

  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => levelNumber(el))

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
      className={`z-20 rounded-xl border border-gray-800 font-courier text-3xl flex items-center justify-center ${
        bgColor()[0]
      }   ${tick ? 'shadow-3xl' : `shadow-sm`} ${bgColor()[1]} 
      overflow-hidden
        `}
      style={{
        height: 40,
        width: 42,
        transition: '2s ease-in-out',
        // boxShadow: `0px 1px 10px 5px rgba(100, 100, 100, ${tick ? 1 : 0})`,
      }}
    >
      {!showLvlForced && expMSG && (
        <div
          className={`z-20 absolute flex items-center justify-center rounded-xl flex-col  borde border-gray-800 `}
          style={{
            height: 40,
            width: 40,
            padding: 6,
          }}
        >
          <img src={getAch()} />
        </div>
      )}

      <div
        className={`flex items-center justify-start  flex-col `}
        style={{
          height: 40,
          width: 40,
          marginTop: 2,
          transition: '1s ease-in-out', /// !!!!
          transform: `translateY(-${40 * lvl - 40}px)`,
        }}
      >
        <div className={`flex items-center justify-start flex-col flex-wrap `}>
          {elements}
        </div>
        <div
          className={`absolute ${bgColor()[0]} z-10 ${
            // `opacity-100`
            !showLvlForced && expMSG ? 'opacity-100' : 'opacity-0'
          } `}
          style={{ width: 40, height: 400 }}
        ></div>
      </div>
    </div>
  )
}
