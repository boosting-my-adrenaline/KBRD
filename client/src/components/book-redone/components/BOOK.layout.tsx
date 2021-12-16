import React, { useEffect, useRef, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  failedTypesIndexes: number[]
  STRING: string
  overall: number
  animation: boolean
  currentString: string
  chapter: Chapters
  highlighter: boolean
}

export const BOOKLayout: React.FC<IProps> = ({
  STRING,
  overall,
  animation,
  currentString,
  chapter,
  failedTypesIndexes,
  highlighter,
}) => {
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 900)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 300)
    return () => clearTimeout(id)
  }, [chapter])

  const [extraAppear, setExtraAppear] = useState([true, true])

  useDidMountEffect(() => {
    // setExtraAppear([false, true])
    // let id = setTimeout(() => setExtraAppear([true, false]), 500)
    // return () => {
    //   clearTimeout(id)
    //   setExtraAppear([true, false])
    // }
  }, [currentString])

  // const [arr, setArr] = useState<string>(currentString)

  // useDidMountEffect(() => {
  //   setArr((prev) => {
  //     let arr = prev.split('')
  //     failedTypesIndexes.forEach((el) => (arr[el - 1] = '^'))
  //     return arr.join('')
  //   })
  //   console.log(arr.slice(0, 20), failedTypesIndexes)
  // }, [overall])

  // useEffect(() => {
  //   setArr(STRING)
  //   setArr((prev) => {
  //     let arr = prev.split('')
  //     failedTypesIndexes.forEach((el) => (arr[el - 1 - overall] = '^'))
  //     return arr.join('')
  //   })
  //   console.log(arr.slice(0, 20), failedTypesIndexes)
  // }, [STRING])

  const rawRIGHT: string = STRING.slice(0, 35)
  const rawRIGHT1: string = STRING.slice(35, 105)
  const rawRIGHT2: string = STRING.slice(105, 175)
  const rawRIGHT3: string = STRING.slice(175, 245)
  const rawLEFT: string = STRING.slice(-35)
  const rawLEFT1: string = STRING.slice(-105, -35)
  const rawLEFT2: string = STRING.slice(-175, -105)
  const rawLEFT3: string = STRING.slice(-245, -175)

  const formating = (str: string) => {
    return str.split('').map((el) => {
      if (el === ' ') {
        return (
          <div className="select-none bg-red-00">
            {'\u00A0'}
            {/* {el} */}
          </div>
        )
      } else {
        return (
          <div
            className="select-none bg-ed-200 flex justify-center items-center"
            style={{
              // transition: extraAppear[1] ? '0.75s ease' : 'none',
              opacity: extraAppear[0] && highlighter ? 1 : 0,
            }}
          >
            {'\u00A0'}
            {/* {el} */}
            <div
              className={`absolute bg-red-200 rounded-sm`}
              style={{ padding: '0 2px' }}
            >
              {'\u00A0'}
            </div>
          </div>
        )
      }
    })
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
        transition: '0.7 ease-in-out',
      }}
    >
      <div
        className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  "
        style={{}}
      >
        {rowing(rawLEFT3)}
        {rowing(rawLEFT2)}
        {rowing(rawLEFT1)}

        <div className="flex flex-row">
          {rowing(rawLEFT)}

          {/* <div>{rowing(rawFIRST)}</div> */}

          {rowing(rawRIGHT)}
        </div>

        {rowing(rawRIGHT1)}
        {rowing(rawRIGHT2)}
        {rowing(rawRIGHT3)}
      </div>
    </div>
  )
}
