import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { FadeText } from '../../../utils/FadeText'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import {
  formationForLEFT1,
  formationForLEFT2,
  formationForLEFT3,
  formationForRIGHT,
  formationForRIGHTLayout,
} from '../book-utils/stringFormation'

interface IProps {
  failedTypesIndexes: number[]
  STRING: string
  overall: number
  animation: boolean
  currentString: string
  chapter: Chapters
}

export const BOOKLayout: React.FC<IProps> = ({
  STRING,
  overall,
  animation,
  currentString,
  chapter,
  failedTypesIndexes,
}) => {
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

  const [arr, setArr] = useState<string>('1'.repeat(500))

  useDidMountEffect(() => {
    setArr((prev) => {
      let arr = prev.split('')
      failedTypesIndexes.forEach((el) => (arr[el - 1] = '^'))
      return arr.join('')
    })
  }, [overall])

  useDidMountEffect(() => {
    setArr('1'.repeat(500))
    setArr((prev) => {
      let arr = prev.split('')
      failedTypesIndexes.forEach((el) => (arr[el - 1] = '^'))
      return arr.join('')
    })
  }, [currentString])

  const RIGHT: string = formationForRIGHTLayout(overall, arr)
  const LEFT1: string = formationForLEFT1(overall, arr)
  const LEFT2: string = formationForLEFT2(overall, arr)
  const LEFT3: string = formationForLEFT3(overall, arr)

  const formating = (str: string) => {
    return (
      str
        .split('')
        // .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
        .map((el) =>
          el !== '^' ? (
            <div className="select-none bg-red-10">
              {'\u00A0'}
              {/* {el} */}
            </div>
          ) : (
            <div className="select-none rounded-sm bg-red-400">
              {'\u00A0'}
              {/* {el} */}
            </div>
          )
        )
    )
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row ">{formating(str)}</div>
  }

  return (
    <div
      className="absolute visible  border-5 border-grey-900 rounded-xl"
      style={{
        zIndex: 31,
        opacity: !appear ? '0' : '1',
        transition: '1s ease',
        transform: 'translateX(0px)',
      }}
    >
      <div
        className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  "
        style={{
          transform: `translateX(${ts}px)`,
          transition: animation ? '0.25s ease 0.0s' : '',
          // boxShadow: '5px 5px 10px 10px rgba(0,0,0,1)',
          // paddingLeft: `${-ts}px`,
        }}
      >
        {rowing(LEFT3)}
        {rowing(LEFT2)}
        {rowing(LEFT1)}

        <div className="flex flex-row">{rowing(RIGHT)}</div>

        {/* <div>{'\u0A00'}</div> */}
        {/* <div>{'\u0A00'}</div> */}
        {/* <div>{'\u0A00'}</div> */}
      </div>
    </div>
  )
}
