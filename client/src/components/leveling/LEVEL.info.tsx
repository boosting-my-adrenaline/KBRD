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
import useColor from '../../hooks/useColor'
import useLanguage from '../../hooks/useLanguage'
import useDarkMode from '../../hooks/useDarkMode'

interface IProps {
  setHide(hide: boolean): void
  keyboard: boolean
}

export const LEVELinfo: React.FC<IProps> = ({ setHide, keyboard }) => {
  const [hover, setHover] = useState(false)
  const { isEng } = useLanguage()

  // const [hover2, setHover2] = useState(true)

  const achievements: [title: string, image: any, award: number][] = [
    [isEng ? ExpMessage.Practice : ExpMessage.PracticeRus, Grow, 1],
    [
      isEng ? ExpMessage.TaskAheadOfYou : ExpMessage.TaskAheadOfYouRus,
      Mountain,
      2,
    ],
    [isEng ? ExpMessage.HardWorker : ExpMessage.HardWorkerRus, Dumbbell, 3],
    [
      isEng ? ExpMessage.MaraphonRunner : ExpMessage.MaraphonRunnerRus,
      Maraphon,
      4,
    ],

    [isEng ? ExpMessage.FastFingers : ExpMessage.FastFingersRus, Lightning, 3],
    [
      isEng ? ExpMessage.FastAndFurious : ExpMessage.FastAndFuriousRus,
      FastAndFurious,
      4,
    ],
    [isEng ? ExpMessage.WayTooFast : ExpMessage.WayTooFastRus, Rocket, 5],

    [isEng ? ExpMessage.Marksman : ExpMessage.MarksmanRus, Marksman, 2],
    [isEng ? ExpMessage.TheBullsEye : ExpMessage.TheBullsEyeRus, BullsEye, 3],
    [
      isEng
        ? ExpMessage.AccurateAsStephCurry
        : ExpMessage.AccurateAsStephCurryRus,
      Steph,
      5,
    ],

    [isEng ? ExpMessage.FastRun : ExpMessage.FastRunRus, Run2, 3],
    [
      isEng ? ExpMessage.FastAndPerfectRace : ExpMessage.FastAndPerfectRaceRus,
      Run,
      5,
    ],

    [isEng ? ExpMessage.NotAverage : ExpMessage.NotAverageRus, Star, 2],
    [isEng ? ExpMessage.Excellence : ExpMessage.ExcellenceRus, Excellence, 3],
    [isEng ? ExpMessage.TopSkills : ExpMessage.TopSkillsRus, Award, 4],

    [isEng ? ExpMessage.Pianist : ExpMessage.PianistRus, Piano, 3],
    [isEng ? ExpMessage.AbsoluteMaster : ExpMessage.AbsoluteMasterRus, Cup, 5],
  ]

  useEffect(() => {
    setHide(false)
    if (hover) {
      setHide(true)
    }
  }, [hover])

  const { isDarkMode } = useDarkMode()

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
    <div
      className={`${
        isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t300
      } px-2 text-center text-lg`}
    >
      {title}
    </div>
  )

  const { themeColor1 } = useColor()

  return (
    <>
      <div
        className={`h-40px w-42px font-courier shadow-3xl z-[2000]  flex cursor-help items-center justify-center rounded-xl border ${
          isDarkMode ? `border-gray-300` : `border-gray-900 `
        } text-3xl  transition duration-150 ease-in-out  ${
          hover
            ? isDarkMode
              ? `${themeColor1.bg.t700} ${themeColor1.shadow.t500}`
              : `${themeColor1.bg.t300} ${themeColor1.shadow.t500}`
            : isDarkMode
            ? `${themeColor1.shadow.t900} ${themeColor1.bg.t800} `
            : `${themeColor1.shadow.t700} ${themeColor1.bg.t300} `
        }`}
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
          className={` opacity-985  shadow-15th absolute ${
            keyboard
              ? `w-1040px -translate-x-6px translate-y-[-725px]`
              : `w-[920px] translate-y-[-520px] translate-x-[54px]`
          } flex  flex-wrap items-start justify-between overflow-hidden rounded-xl border  text-sm ${
            isDarkMode
              ? `border-gray-200 text-gray-200 shadow-gray-700`
              : `border-gray-800 shadow-gray-400`
          }  ${isDarkMode ? themeColor1.bg.t800 : themeColor1.bg.t200}`}
        >
          <div className={`w-f flex flex-col pb-1 pt-1`}>
            {title(isEng ? `Volume Of Work` : `Объем Работы`)}
            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 4, `50%`)}
            </div>
          </div>
          {hr}
          <div className={`w-f flex flex-col pb-1`}>
            {title(isEng ? `Speed` : `Скорость`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {' '}
              {elements(0, 3, `50%`)}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(isEng ? `Row With No Errors` : `Безошибочная Печать`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(
              isEng ? `Speed Row With No Errors` : `Быстрая Безошибочная Печать`
            )}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(isEng ? `Average Accuracy` : `Средняя Точность`)}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 3, `50%`)}{' '}
            </div>
          </div>
          {hr}{' '}
          <div className={`w-f flex flex-col pb-1`}>
            {title(
              isEng
                ? `Average Speed And Accuracy`
                : `Средняя Скорость И Точность`
            )}

            <div className={`flex flex-wrap px-1 pt-1`}>
              {elements(0, 2, `50%`)}{' '}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
