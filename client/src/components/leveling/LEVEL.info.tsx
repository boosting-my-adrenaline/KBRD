import React, { useEffect, useState } from 'react'
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

import { ExpMessage } from './LEVEL.container'
import { LEVELelement } from './LEVEL.element'

interface IProps {
  setHide(hide: boolean): void
}

export const LEVELinfo: React.FC<IProps> = ({ setHide }) => {
  const [hover, setHover] = useState(false)
  // const [hover2, setHover2] = useState(true)

  const achievements: [title: string, image: any, award: number][] = [
    [ExpMessage.Practice, Grow, 1],
    [ExpMessage.TaskAheadOfYou, Mountain, 2],
    [ExpMessage.HardWorker, Dumbbell, 3],
    [ExpMessage.MaraphonRunner, Maraphon, 4],

    [ExpMessage.FastFingers, Lightning, 3],
    [ExpMessage.FastAndFurious, FastAndFurious, 4],
    [ExpMessage.WayTooFast, Rocket, 5],

    [ExpMessage.Marksman, Marksman, 2],
    [ExpMessage.TheBullsEye, BullsEye, 3],
    [ExpMessage.AccurateAsStephCurry, Steph, 5],

    [ExpMessage.FastRun, Run2, 3],
    [ExpMessage.FastAndPerfectRace, Run, 5],

    [ExpMessage.NotAverage, Star, 2],
    [ExpMessage.Excellence, Excellence, 3],
    [ExpMessage.TopSkills, Award, 4],

    [ExpMessage.Pianist, Piano, 3],
    [ExpMessage.AbsoluteMaster, Cup, 5],
  ]

  useEffect(() => {
    setHide(false)
    if (hover) {
      setHide(true)
    }
  }, [hover])

  const elements = (from: number, to: number, width: number | string) =>
    achievements
      .splice(from, to)
      .map((el, i) => (
        <LEVELelement
          key={i}
          title={el[0]}
          image={el[1]}
          award={el[2]}
          width={width}
        />
      ))

  let hr = <div className={`w-f bg-gray-800 mx-4 rounded-full h-1px`} />
  let title = (title: string) => (
    <div className={`text-center text-lg bg-red-300 px-2`}>{title}</div>
  )

  return (
    <>
      <div
        className={`z-20 rounded-xl h-40px w-42px border border-gray-800 font-courier text-3xl flex items-center justify-center hover:bg-red-200 shadow-3xl shadow-red-300/75 hover:shadow-red-500/75 transition duration-150 ease-in-out`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        ?
      </div>
      {hover && (
        <div
          className={`absolute bg-red-200 w-1040px opacity-985 -translate-x-6px translate-y-55px border border-gray-800 rounded-xl flex flex-wrap items-start justify-between  text-sm overflow-hidden `}
        >
          <div className={`flex flex-col w-f py-2`}>
            {title(`Volume Of Work`)}
            <div className={`flex flex-wrap pt-1 px-1`}>
              {elements(0, 4, `50%`)}
            </div>
          </div>
          {hr}
          <div className={`flex flex-col w-f py-2`}>
            {title(`Speed`)}

            <div className={`flex flex-wrap pt-1 px-1`}>
              {' '}
              {elements(0, 3, `50%`)}
            </div>
          </div>
          {hr}{' '}
          <div className={`flex flex-col w-f py-2`}>
            {title(`Row With No Errors`)}

            <div className={`flex flex-wrap pt-1 px-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`flex flex-col w-f py-2`}>
            {title(`Speed Row With No Errors`)}

            <div className={`flex flex-wrap pt-1 px-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`flex flex-col w-f py-2`}>
            {title(`Average Accuracy`)}

            <div className={`flex flex-wrap pt-1 px-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`flex flex-col w-f py-2`}>
            {title(`Average Speed And Accuracy`)}

            <div className={`flex flex-wrap pt-1 px-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
