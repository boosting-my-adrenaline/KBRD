import React, { useEffect, useRef, useState } from 'react'
import { letter1 } from '../../static/letters'
import {
  formationForLEFT1,
  formationForLEFT2,
  formationForLEFT3,
  formationForRIGHT,
} from './book-utils/stringFormation'

export const KBRD: React.FC<{ STRING: string; overall: number }> = ({
  STRING,
  overall,
}) => {
  // const FIRST: string = STRING.slice(0, 1)
  // const RIGHT: string = STRING.slice(0, 35)
  // const RIGHT1: string = STRING.slice(35, 105)
  // const RIGHT2: string = STRING.slice(105, 175)
  // const RIGHT3: string = STRING.slice(175, 245)
  // const LEFT: string = STRING.slice(-35)
  // const LEFT1: string = STRING.slice(-105, -35)
  // const LEFT2: string = STRING.slice(-175, -105)
  // const LEFT3: string = STRING.slice(-245, -175)

  const [ts, setTs] = useState(0)

  useEffect(() => {
    setTs((prev) => 0 - 14.41 * overall)
  }, [STRING])

  const testString = letter1

  const RIGHT: string = formationForRIGHT(overall, testString)
  const RIGHT1: string =
    '\u00A0'.repeat(overall) + testString.slice(35 + overall, 105 + overall)
  const RIGHT2: string =
    '\u00A0'.repeat(overall) + testString.slice(105 + overall, 175 + overall)
  const RIGHT3: string =
    '\u00A0'.repeat(overall) + testString.slice(175 + overall, 245 + overall)
  const LEFT: string = ''

  const LEFT1: string = formationForLEFT1(overall, testString)
  const LEFT2: string = formationForLEFT2(overall, testString)
  const LEFT3: string = formationForLEFT3(overall, testString)

  const [tsState, setTsState] = useState(0)

  const formating = (str: string) => {
    return str
      .split('')
      .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row ">{formating(str)}</div>
  }

  return (
    <>
      <div
        className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  "
        style={{
          transform: `translateX(${ts}px)`,
          transition: '0.2s ease 0.0s',
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
    </>
  )
}
