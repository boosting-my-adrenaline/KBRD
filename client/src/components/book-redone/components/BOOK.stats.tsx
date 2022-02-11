import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKaccuracyCounter } from './stats/B.stats.accuracyCounter'
import { BOOKstatsAccuracyWidget } from './stats/B.stats.accuracy.widget'
import { BOOKstatsCPMcounter } from './stats/BOOK.stats.CPMcounter'
import { BOOKstatsCPMWidget } from './stats/B.stats.cpm.widget'
import { LEVELcontainer } from '../../leveling/LEVEL.container'
import { BOOKstatsOverallWidget } from './stats/B.stats.overall.widget'
import { BOOKstatsErrorsWidget } from './stats/B.stats.error.widget'
import useLanguage from '../../../hooks/useLanguage'

interface IProps {
  show: boolean
  overall: number
  failedTypesIndexes: number[]
  reseting: any
}

export const BOOKstats: React.FC<IProps> = ({
  show,
  overall,
  failedTypesIndexes: fti,
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
  const [appear, setAppear] = useState(true)

  useDidMountEffect(() => {
    setAccuracy(0)
    setCPM(0)
    setAvgCPM(0)
    setErrorsLocal(0)
    setOverallLocal(0)
  }, [reseting])

  useDidMountEffect(() => {
    setRunning(true)

    let id = setTimeout(() => setRunning(false), 2000)

    return () => clearTimeout(id)
  }, [overall])

  const [hide, setHide] = useState(false)

  const { isEng } = useLanguage()
  return (
    <>
      <div
        className={`absolute ${
          show || `opacity-0`
        } transition duration-500 ease-in-out ${isEng || `font-CourierC`}`}
        style={{
          transform: `translateY(${appear && show ? 555 : 2000}px)`,
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
        className={`w-1000  borde flex select-none items-center justify-center border-black pt-2 pb-6 transition duration-500 ease-in-out ${
          (appear && show) || `opacity-0`
        }`}
      >
        <div
          className={`w-f borde-red-800 borde mx-8 flex flex-row items-center justify-between text-xl text-gray-600 ${
            hide && `-z-10`
          }`}
        >
          <div className={`flex items-center justify-center`}>
            <BOOKstatsOverallWidget overall={overallLocal} />
          </div>

          <div className={`mr-24 flex items-center justify-center`}>
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
    </>
  )
}
