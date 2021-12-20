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

export const LEVELcontainer: React.FC<IProps> = ({
  overall,
  fti,
  CPM,
  avgCPM,
  accuracy,
}) => {
  const levels = [100, 250, 500, 1_000, 2_000, 3_750, 6_000, 10_000, 15_000]

  const [level, setLevel] = useState(1)
  const [exp, setExp] = useState<[number, number]>([40, 100])

  const [expMSG, setExpMSG] = useState<null | string>(null)

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
        }, i * 150 + 20)
      }
      for (let i = 0; i < after; i++) {
        setTimeout(() => {
          setExp((prev) => [prev[0] + 1, prev[1]])
        }, i * 150 + 2520)
      }
    }
  }

  return (
    <div>
      <LEVELlevel exp={exp} expMSG={expMSG} />
      <div className={`flex flex-row justify-evenly items-center w-f`}>
        <div onMouseDown={() => handleSetExp(10)}>+10</div>
        <div onMouseDown={() => handleSetExp(50)}>+50</div>
      </div>
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
