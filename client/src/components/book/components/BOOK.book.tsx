import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { FadeText } from '../../../utils/FadeText'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import {
  formationForLEFT1,
  formationForLEFT2,
  formationForLEFT3,
  formationForRIGHT,
} from '../book-utils/stringFormation'

export const BOOKBook: React.FC<{
  STRING: string
  overall: number
  animation: boolean
  currentString: string
  chapter: Chapters
}> = ({ STRING, overall, animation, currentString, chapter }) => {
  const [ts, setTs] = useState(0)
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 300)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    setTimeout(() => {
      setAppear(false)
    }, 0)
  }, [chapter])

  useEffect(() => {
    setTs(() => 0 - 14.414 * (overall + 1))
  }, [STRING])

  const RIGHT1: string =
    '\u00A0'.repeat(overall) + currentString.slice(34 + overall, 106 + overall)
  const RIGHT2: string =
    '\u00A0'.repeat(overall) + currentString.slice(104 + overall, 176 + overall)
  const RIGHT3: string =
    '\u00A0'.repeat(overall) + currentString.slice(174 + overall, 246 + overall)
  const LEFT: string = ''

  const RIGHT: string = formationForRIGHT(overall, currentString)
  const LEFT1: string = formationForLEFT1(overall, currentString)
  const LEFT2: string = formationForLEFT2(overall, currentString)
  const LEFT3: string = formationForLEFT3(overall, currentString)

  const [extraAppear, setExtraAppear] = useState(true)

  useDidMountEffect(() => {
    setExtraAppear(false)
    let id = setTimeout(() => setExtraAppear(true), 200)
    return () => {
      clearTimeout(id)
      setExtraAppear(true)
    }
  }, [currentString])

  const formating = (str: string) => {
    return (
      str
        .split('')
        // .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
        .map((el) =>
          el !== ' ' ? (
            <div
              className={`bg-red-00 `}
              style={{
                opacity: extraAppear ? 1 : 0,
                transition: '0.3s ease-in-out',
              }}
            >
              <FadeText
                title={el}
                delay={[300, 1000]}
                hide={1}
                // blink={el}
                // blink={currentString}
              />
              {/* {el} */}
            </div>
          ) : (
            <div className="select-none ">{'\u00A0'}</div>
          )
        )
    )
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row ">{formating(str)}</div>
  }

  return (
    <div
      className="visible z-40 borde-5 border-grey-900 rounded-xl"
      style={{ opacity: !appear ? '0' : '1', transition: '0.7s ease-in-out' }}
    >
      <div
        className="w-1000 z-40 font-courier text-2xl flex flex-col space-y-4  "
        style={{
          transform: `translateX(${ts}px)`,
          transition: animation ? '0.25s ease ' : '',
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
