import React, { useEffect, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKaccuracyCounter } from './stats/B.stats.accuracyCounter'
import { BOOKstatsAccuracyWidget } from './stats/B.stats.accuracy.widget'
import { BOOKstatsRecorder } from './stats/BOOK.stats.recorder'
import { BOOKstatsCPMcounter } from './stats/BOOK.stats.CPMcounter'
import { BOOKstatsCPMWidget } from './stats/B.stats.cpm.widget'
import { LEVELcontainer } from '../../leveling/LEVEL.container'
import { BOOKstatsOverallWidget } from './stats/B.stats.overall.widget'
import { BOOKstatsErrorsWidget } from './stats/B.stats.error.widget'

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

  const [overallLocal, setOverallLocal] = useState(0)
  const [errorsLocal, setErrorsLocal] = useState(0)

  useDidMountEffect(() => {
    if (overall) {
      setOverallLocal((prev) => prev + 1)
    }
  }, [overall])

  useDidMountEffect(() => {
    if (fti.length) {
      setErrorsLocal((prev) => prev + 1)
    }
  }, [fti.length])

  const [running, setRunning] = useState(false)
  const [appear, setAppear] = useState(false)

  useDidMountEffect(() => {
    setAccuracy(0)
    setCPM(0)
    setAvgCPM(0)
    setErrorsLocal(0)
    setOverallLocal(0)
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
  /////////////

  ////////////

  ////////////
  const [hide, setHide] = useState(false) //////!!!
  return (
    <>
      <div
        className={`absolute `}
        style={{
          transform: `translateY(${appear ? -155 : -400}px)`,
          transition: '0.6s ease-in-out',
        }}
      >
        <LEVELcontainer
          overall={overall}
          fti={fti}
          errors={errorsLocal}
          overallLocal={overallLocal}
          avgCPM={avgCPM}
          CPM={CPM}
          accuracy={accuracy}
          setHide={setHide}
        />
      </div>
      <div
        className={`w-1000  pt-2 pb-6 border-black borde flex items-center justify-center select-none`}
        style={{ transition: '0.5s ease-in-out', opacity: appear ? 1 : 0 }}
      >
        <div
          className={`w-f flex flex-row justify-between mx-8 items-center borde-red-800 borde text-xl text-gray-600 ${
            hide && `-z-10`
          }`}
        >
          <div className={`flex items-center justify-center`}>
            <BOOKstatsOverallWidget overall={overallLocal} />
          </div>

          <div className={`flex items-center justify-center mr-24`}>
            {`\u00a0`}
            <div className={`absolute `}>
              <BOOKstatsAccuracyWidget
                currentAccuracy={accuracy}
                // overall={overall}
                // fti={fti}
                overall={overallLocal}
                errors={errorsLocal}
              />
            </div>
          </div>

          {/* <div></div> */}

          <div className={`flex items-center justify-center`}>
            {`\u00a0`}

            <div className={`absolute `}>
              <BOOKstatsCPMWidget CPM={CPM} avgCPM={avgCPM} />
            </div>
          </div>
          <div className={`flex items-center justify-center`}>
            <BOOKstatsErrorsWidget errors={errorsLocal} />
          </div>
        </div>
      </div>
      <BOOKstatsCPMcounter
        overall={overallLocal}
        // overall={overall}
        setCPM={setCPM}
        setAvgCPM={setAvgCPM}
        running={running}
      />
      <BOOKaccuracyCounter
        overall={overall}
        fti={fti}
        // overall={overall}
        // fti={fti}
        setAccuracy={setAccuracy}
        running={running}
      />
      {/* <BOOKstatsRecorder
        // overall={overall}
        
        CPM={CPM}
      /> */}
    </>
  )
}
