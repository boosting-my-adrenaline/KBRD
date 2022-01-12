import React from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  running: boolean
  overall: number
  fti: number[]
  setAccuracy(acc: number): void
}

export const BOOKaccuracyCounter: React.FC<IProps> = ({
  running,
  overall,
  fti,
  setAccuracy,
}) => {
  const handleSetAccuracy = () => {
    let acc = 0
    if (overall > 245) {
      let failures = fti.filter((el) => el <= 245).length
      acc = (overall - failures) / overall
    } else {
      let failures = fti.length
      acc = (overall - failures) / overall
    }
    setAccuracy(Math.floor(acc * 1000))
  }

  useDidMountEffect(() => {
    // if (overall === 0) {
    //   setAccuracy(0)
    // }
    if (overall && overall % 17 === 0) {
      handleSetAccuracy()
    }
  }, [overall])

  useDidMountEffect(() => {
    if (!running && overall > 0) {
      handleSetAccuracy()
    }
  }, [running])

  return <></>
}
