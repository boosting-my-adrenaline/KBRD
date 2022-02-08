import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../hooks/useDidMountEffect'
import useLocalStorage from '../../hooks/useLocalStorage'
import { LEVELlevel } from './LEVEL.level'
import { LEVELrecorder } from './LEVEL.recorder'
import { LEVELupper } from './LEVEL.upper'

interface IProps {
  overall: number
  fti: number[]
  avgCPM: number
  CPM: number
  accuracy: number
  setHide(hide: boolean): void
  errors: number
  overallLocal: number

  // appear: boolean
}

export enum ExpMessage {
  Practice = `Practice`,
  HardWorker = `Hard Worker`,
  TaskAheadOfYou = `Task Ahead Of You`,
  MaraphonRunner = `Marathon Runner`,

  FastFingers = `Fast Fingers`,
  WayTooFast = `Way Too Fast`,
  FastAndFurious = `Fast And Furious`,

  TheBullsEye = `The Bull's Eye`,
  Marksman = `Marksman`,
  AccurateAsStephCurry = `Accurate As Steph Curry`,

  FastRun = `Awesome Run`,
  FastAndPerfectRace = `Fast And Perfect Race`,

  TopSkills = `Top Skills`,
  Excellence = `Excellence`,
  NotAverage = `Not Average`,

  Pianist = `Pianist`,
  AbsoluteMaster = `Absolute Master`,
}

export type ExpMSG = null | string | ExpMessage

export const LEVELcontainer: React.FC<IProps> = ({
  overall,
  fti,
  CPM,
  avgCPM,
  accuracy,
  setHide,
  errors,
  overallLocal,
  // appear,
}) => {
  // const levels = [250, 500, 1_000, 2_000, 3_750, 6_000, 10_000, 15_000, 25_000]
  // const levels = [250, 625, 1_175, 2_000, 3_250, 5_125, 7_950, 12_200, 18_600]

  const levels =
    // [250, 575, 1_000, 1_575, 2_350, 3_375, 4_750, 6_575, 9_000]
    [0, 250, 825, 1825, 3400, 5750, 9125, 13875, 20450, 29450]

  const [exp, setExp] = useState<number>(0)

  const [localExp, setLocalExp] = useLocalStorage<number>('exp', 0)

  useEffect(() => {
    setExp(localExp)
  }, [])

  useDidMountEffect(() => {
    if (exp % 5 === 0) {
      setLocalExp(exp)
    }
  }, [exp])

  const getLevel = (expirience: number) => {
    let lvl = 0

    levels.forEach((el) => {
      if (el <= expirience) {
        lvl = levels.indexOf(el)
        //         lvl = el
      }
    })
    return lvl + 1
  }
  const level = getLevel(exp)

  const [expMSG, setExpMSG] = useState<ExpMSG>(null)

  const handleSetExp = (value: number) => {
    for (let i = 0; i < value; i++) {
      setTimeout(() => {
        setExp((prev) => prev + 1)
      }, i * 50 + 20)
    }
  }

  const handleSetExpLogin = (value: number) => {
    for (let i = 0; i < value; i++) {
      setTimeout(() => {
        setExp((prev) => prev + 1)
      }, 0)
    }
  }

  let levelExp = (): number => {
    let res = 0
    levels.forEach((el, i) => (i < level ? (res += el) : el))
    return res
  }

  return (
    <div className={` select-none `}>
      <LEVELlevel
        exp={[exp - levels[level - 1], levels[level] - levelExp()]}
        level={level}
        expMSG={expMSG}
        setHide={setHide}
      />
      {/* <div className={`flex flex-row justify-evenly items-center w-f`}> */}
      {/* <div onMouseDown={() => handleSetExp(10)}>+10</div> */}
      {/* <div onMouseDown={() => handleSetExp(50)}>+50</div> */}
      {/* <div onMouseDown={() => setLevel((prev) => prev + 1)}>lvlup</div>
        <div onMouseDown={() => setLevel(5)}>5</div>
        <div onMouseDown={() => setLevel(10)}>10</div> */}
      {/* </div> */}
      <LEVELupper
        handleSetExp={handleSetExp}
        overall={overall}
        fti={fti}
        errors={errors}
        overallLocal={overallLocal}
        avgCPM={avgCPM}
        setExpMSG={setExpMSG}
      />
      <LEVELrecorder level={level} handleExp={handleSetExpLogin} exp={exp} />
    </div>
  )
}

// let test = (start) => {
//   let res = [start * 25]
//   let increment = 250
//   for(i = 0; i < 8; i++) {
//     increment *= 1.33
//     let next = Math.floor((res[res.length - 1] + increment) /25 )

//     res.push(next * 25)
//   }

//   return res
// }

//   console.log(test(10))
