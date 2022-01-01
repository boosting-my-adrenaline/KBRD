import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { LEVELlevel } from './LEVEL.level'
import { LEVELupper } from './LEVEL.upper'

interface IProps {
  overall: number
  fti: number[]
  avgCPM: number
  CPM: number
  accuracy: number
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

  AbsoluteMaster = `Absolute Master`,
}

export type ExpMSG = null | string | ExpMessage

export const LEVELcontainer: React.FC<IProps> = ({
  overall,
  fti,
  CPM,
  avgCPM,
  accuracy,
}) => {
  // const levels = [250, 500, 1_000, 2_000, 3_750, 6_000, 10_000, 15_000, 25_000]
  // const levels = [250, 625, 1_175, 2_000, 3_250, 5_125, 7_950, 12_200, 18_600]
  const levels = [250, 575, 1_000, 1_575, 2_350, 3_375, 4_750, 6_575, 9_000]

  const [level, setLevel] = useState(1)
  const [exp, setExp] = useState<[number, number]>([40, 100])

  const [expMSG, setExpMSG] = useState<ExpMSG>(null)

  useEffect(() => {
    setExp(() => {
      return [0, levels[level - 1]]
    })
  }, [level])

  useDidMountEffect(() => {
    if (exp[0] >= exp[1] && exp[0] > 0) {
      let difference = exp[0] - exp[1]
      setLevel((prev) => prev + 1)
      setExp((prev) => [difference, prev[1]])
    }
  }, [exp])

  const handleSetExp = (value: number) => {
    if (value <= exp[1] - exp[0]) {
      for (let i = 0; i < value; i++) {
        setTimeout(() => {
          setExp((prev) => [prev[0] + 1, prev[1]])
        }, i * 150 + 20)
      }
    } else {
      let before = exp[1] - exp[0]
      let after = value - before
      for (let i = 0; i < before; i++) {
        setTimeout(() => {
          setExp((prev) => [prev[0] + 1, prev[1]])
        }, i * 50 + 20)
      }
      for (let i = 0; i < after; i++) {
        setTimeout(() => {
          setExp((prev) => [prev[0] + 1, prev[1]])
        }, i * 50 + 2520)
      }
    }
  }

  return (
    <div className={`select-none`}>
      <LEVELlevel exp={exp} level={level} expMSG={expMSG} />
      {/* <div className={`flex flex-row justify-evenly items-center w-f`}>
        <div onMouseDown={() => handleSetExp(10)}>+10</div>
        <div onMouseDown={() => handleSetExp(50)}>+50</div>
        <div onMouseDown={() => setLevel((prev) => prev + 1)}>lvlup</div>
      </div> */}
      <LEVELupper
        handleSetExp={handleSetExp}
        overall={overall}
        fti={fti}
        avgCPM={avgCPM}
        CPM={CPM}
        accuracy={accuracy}
        setExpMSG={setExpMSG}
      />
    </div>
  )
}
