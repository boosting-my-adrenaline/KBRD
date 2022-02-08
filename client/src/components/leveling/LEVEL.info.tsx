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
import { motion } from 'framer-motion'

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

  let hr = <></>
  // let hr = <div className={`w-f bg-gray-800 mx-4 rounded-full h-1px`} />
  let title = (title: string) => (
    <div className={`bg-red-300 px-2 text-center text-lg`}>{title}</div>
  )

  return (
    <>
      <div
        className={`h-40px w-42px font-courier shadow-3xl  z-20 flex cursor-help items-center justify-center rounded-xl border border-gray-800 text-3xl shadow-red-300/75 transition duration-150 ease-in-out hover:bg-red-200 hover:shadow-red-500/75`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          whileHover={{ rotate: [0, 20, -20, 0], scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          ?
        </motion.div>
      </div>
      {hover && (
        <div
          className={`w-1040px opacity-985 -translate-x-6px translate-y-55px shadow-12th absolute flex flex-wrap items-start justify-between overflow-hidden rounded-xl border  border-gray-800 bg-red-200 text-sm shadow-gray-400`}
        >
          <div className={`w-f flex flex-col pb-1 pt-1`}>
            {title(`Volume Of Work`)}
            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 4, `50%`)}
            </div>
          </div>
          {hr}
          <div className={`w-f flex flex-col pb-1`}>
            {title(`Speed`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {' '}
              {elements(0, 3, `50%`)}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(`Row With No Errors`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(`Speed Row With No Errors`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(`Average Accuracy`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(`Average Speed And Accuracy`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
