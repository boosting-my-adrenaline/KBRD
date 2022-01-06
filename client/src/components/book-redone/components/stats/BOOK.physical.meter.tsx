import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
import { BOOKmeter2 } from './BOOK.meter'

interface IProps {
  mileage: number
  start?: boolean
  starting?: number
  red?: boolean
}

export const BOOKphysicalmeter: React.FC<IProps> = ({
  mileage,
  start = false,
  starting = 1043,
  red = false,
}) => {
  const [changer, setChanger] = useState(0)

  useEffect(() => {
    if (start) {
      for (let i = 0; i < starting; i++) {
        setTimeout(() => {
          setChanger((prev) => prev + 1)
        }, i * 2)
      }
    }
  }, [])

  useEffect(() => {
    if (start) {
      return
    }
    for (let i = 0; i < mileage; i++) {
      setTimeout(() => {
        setChanger((prev) => prev + 1)
      }, i * 2)
    }
  }, [])

  useDidMountEffect(() => {
    setChanger((prev) => prev + 1)
  }, [mileage])
  if (red) {
    return (
      <div className={`flex`}>
        <BOOKmeter2 changer={changer} multiple={0.01} red />
        <BOOKmeter2 changer={changer} multiple={0.1} red />
        <BOOKmeter2 changer={changer} multiple={1} red />
      </div>
    )
  }

  return (
    <div className={`flex`}>
      <BOOKmeter2 changer={changer} multiple={0.00001} />
      <BOOKmeter2 changer={changer} multiple={0.0001} />
      <BOOKmeter2 changer={changer} multiple={0.001} />
      <BOOKmeter2 changer={changer} multiple={0.01} />
      <BOOKmeter2 changer={changer} multiple={0.1} />
      <BOOKmeter2 changer={changer} multiple={1} />
    </div>
  )
}
