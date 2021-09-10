import React, { useEffect, useRef, useState } from 'react'
import { letter1 } from '../../static/letters'
import {
  formationForLEFT1,
  formationForLEFT2,
  formationForLEFT3,
  formationForRIGHT,
} from './book-utils/stringFormation'

export const BOOKBook: React.FC<{
  STRING: string
  overall: number
  animation: boolean
}> = ({ STRING, overall, animation }) => {
  // const rawFIRST: string = STRING.slice(0, 1)
  // const rawRIGHT: string = STRING.slice(0, 35)
  // const rawRIGHT1: string = STRING.slice(35, 105)
  // const rawRIGHT2: string = STRING.slice(105, 175)
  // const rawRIGHT3: string = STRING.slice(175, 245)
  // const rawLEFT: string = STRING.slice(-35)
  // const rawLEFT1: string = STRING.slice(-105, -35)
  // const rawLEFT2: string = STRING.slice(-175, -105)
  // const rawLEFT3: string = STRING.slice(-245, -175)

  const [ts, setTs] = useState(0)
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAppear(true)
    }, 500)
  }, [])

  useEffect(() => {
    setTs(() => 0 - 14.4065 * (overall + 1))
  }, [STRING])

  const testString = letter1

  const RIGHT: string = formationForRIGHT(overall, testString)
  const RIGHT1: string =
    '\u00A0'.repeat(overall) + testString.slice(34 + overall, 106 + overall)
  const RIGHT2: string =
    '\u00A0'.repeat(overall) + testString.slice(104 + overall, 176 + overall)
  const RIGHT3: string =
    '\u00A0'.repeat(overall) + testString.slice(174 + overall, 246 + overall)
  const LEFT: string = ''

  const LEFT1: string = formationForLEFT1(overall, testString)
  const LEFT2: string = formationForLEFT2(overall, testString)
  const LEFT3: string = formationForLEFT3(overall, testString)

  const formating = (str: string) => {
    return str
      .split('')
      .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row ">{formating(str)}</div>
  }

  return (
    <div
      className="z-30 border-5 border-grey-900 rounded-xl"
      style={{ opacity: !appear ? '0' : '1', transition: '1s ease' }}
    >
      <div
        className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  "
        style={{
          transform: `translateX(${ts}px)`,
          transition: animation ? '0.2s ease 0.0s' : '',
          // boxShadow: '5px 5px 10px 10px rgba(0,0,0,1)',
          // paddingLeft: `${-ts}px`,
        }}
      >
        {rowing(LEFT3)}
        {rowing(LEFT2)}
        {rowing(LEFT1)}

        <div className="flex flex-row">
          {rowing(LEFT)}

          {/* <div className=" rounded-sm">{rowing(FIRST)}</div> */}

          {rowing(RIGHT)}
        </div>

        {rowing(RIGHT1)}
        {rowing(RIGHT2)}
        {rowing(RIGHT3)}
      </div>
    </div>
  )
}
