import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { FadeText } from '../../../utils/FadeText'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKaccuracyCounter } from './stats/B.stats.accuracyCounter'
import { PingingCircles } from './stats/BOOK.pingingCircles'
import { BOOKstatsAccuracyWidget } from './stats/B.stats.accuracy.widget'
import { BOOKstatsRecorder } from './stats/BOOK.stats.recorder'
import { BOOKstatsCPMcounter } from './stats/BOOK.stats.CPMcounter'
import { BOOKstatsCPMWidget } from './stats/B.stats.cpm.widget'
import { LEVELcontainer } from '../../leveling/LEVEL.container'

interface IProps {
  overall: number
  failedTypesIndexes: number[]
  chapter: Chapters
  reseting: any
}

export const BOOKstats: React.FC<IProps> = ({
  overall,
  failedTypesIndexes: fti,
  chapter,
  reseting,
}) => {
  // const successfulRow = fti.length > 0 ? fti[fti.length - 1] - 1 : overall
  const [accuracy, setAccuracy] = useState(0)
  const [CPM, setCPM] = useState(0)
  const [avgCPM, setAvgCPM] = useState(0)

  const [running, setRunning] = useState(false)
  const [appear, setAppear] = useState(false)

  useDidMountEffect(() => {
    setAccuracy(0)
    setCPM(0)
    setAvgCPM(0)
  }, [reseting])

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 1900)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 10)

    return () => clearTimeout(id)
  }, [chapter])

  useDidMountEffect(() => {
    setRunning(true)

    let id = setTimeout(() => setRunning(false), 2000)

    return () => clearTimeout(id)
  }, [overall])

  // Math.floor((successed / overall) * 1000)

  return (
    <>
      <div className={`absolute `} style={{ transform: 'translateY(-355px)' }}>
        <LEVELcontainer
          overall={overall}
          fti={fti}
          avgCPM={avgCPM}
          CPM={CPM}
          accuracy={accuracy}
        />
      </div>
      <div
        className={`w-1000 z-20 pt-2 pb-6 border-black borde flex items-center justify-center select-none`}
        style={{ transition: '0.5s ease-in-out', opacity: appear ? 1 : 0 }}
      >
        <div
          className={`w-f flex flex-row justify-evenly items-center borde-red-800 borde text-xl text-gray-600`}
        >
          <div className={`flex items-center justify-center`}>
            {`\u00a0`}
            <div className={`absolute `}>
              <BOOKstatsAccuracyWidget
                currentAccuracy={accuracy}
                overall={overall}
                fti={fti}
              />
            </div>
          </div>
          <div className={`flex items-center justify-center`}>
            {`\u00a0`}

            <div className={`absolute `}>
              <BOOKstatsCPMWidget CPM={CPM} avgCPM={avgCPM} />
            </div>
          </div>
        </div>
      </div>
      <BOOKstatsCPMcounter
        overall={overall}
        setCPM={setCPM}
        setAvgCPM={setAvgCPM}
        running={running}
      />
      <BOOKaccuracyCounter
        overall={overall}
        fti={fti}
        setAccuracy={setAccuracy}
        running={running}
      />
      <BOOKstatsRecorder overall={overall} fti={fti} CPM={CPM} />
    </>
  )
}
