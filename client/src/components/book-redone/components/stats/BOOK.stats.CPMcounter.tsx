import React, { useState, useRef, useEffect } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  running: boolean
  overall: number
  setCPM(CPM: number): void
  setAvgCPM(avgCPM: number): void
}

export const BOOKstatsCPMcounter: React.FC<IProps> = ({
  overall,
  setCPM,
  running,
  setAvgCPM,
}) => {
  const [intervals, setIntervals] = useState<
    { i: [number, number]; date: [number, number] }[] | null
  >(null)
  const temp = useRef<null | [number, number]>(null)

  // const [intervals]
  useDidMountEffect(() => {
    let avg = { time: 0, chars: 0 }
    intervals?.forEach((el) => {
      avg.time += el.date[1] - el.date[0]
      avg.chars += el.i[1] - el.i[0]
    })

    let result = Math.round(60000 / (avg.time / avg.chars))
    setAvgCPM(result)
  }, [intervals])

  const lastCPM = useRef(0)

  useDidMountEffect(() => {
    if (running) {
      temp.current = [overall, Date.now()]
    } else {
      if (intervals) {
        setIntervals((prev) => [
          ...prev!,
          {
            i: [temp.current![0], overall],
            date: [temp.current![1], Date.now()],
          },
        ])
      } else {
        setIntervals([
          {
            i: [temp.current![0], overall],
            date: [temp.current![1], Date.now() - 2000],
          },
        ])
      }
      temp.current = null
    }

    return () => {}
  }, [running])

  const handleLastIntervalSPM = () => {
    if (intervals) {
      let iLast = intervals[intervals.length - 1]
      let s = iLast.i[1] - iLast.i[0]
      let t = iLast.date[1] - iLast.date[0]
      // console.log(`s: ${s}, t: ${t}`)
      // console.log(`SPM: ${Math.round((60000 / t) * s)}`)
      let spm = Math.round((60000 / t) * s)
      if (s < 10) {
        return
      }
      if (s <= 17) {
        if (lastCPM.current > 0) {
          spm = (spm + lastCPM.current) * 0.5
        } else {
          return
        }
      }

      if (spm < 0 && spm > 1000) {
        return
      }
      lastCPM.current = spm
      setCPM(Math.round(spm))
    }
  }

  useDidMountEffect(() => {
    handleLastIntervalSPM()
  }, [intervals])

  const handleNonStopSPM = () => {
    if (!temp.current) return
    if (intervals) {
      setIntervals((prev) => [
        ...prev!,
        {
          i: [temp.current![0], overall],
          date: [temp.current![1], Date.now()],
        },
      ])
    } else {
      setIntervals([
        {
          i: [temp.current![0], overall],
          date: [temp.current![1], Date.now()],
        },
      ])
    }
    temp.current = temp.current = [overall, Date.now()]
  }

  useDidMountEffect(() => {
    if (overall && overall % 41 === 0) {
      handleNonStopSPM()
    }
  }, [overall])

  return <></>
}
