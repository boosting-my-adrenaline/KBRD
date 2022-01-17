import React, { useEffect, useState } from 'react'
import { Chapters } from '../../../types/nav'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  STRING: string
  chapter: Chapters
  highlighter: boolean
}

export const BOOKLayout: React.FC<IProps> = ({
  STRING,
  chapter,
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

  const rawRIGHT: string = STRING.slice(0, 35)
  const rawRIGHT1: string = STRING.slice(35, 105)
  const rawRIGHT2: string = STRING.slice(105, 175)
  const rawRIGHT3: string = STRING.slice(175, 245)
  const rawLEFT: string = STRING.slice(-35)
  const rawLEFT1: string = STRING.slice(-105, -35)
  const rawLEFT2: string = STRING.slice(-175, -105)
  const rawLEFT3: string = STRING.slice(-245, -175)

  const formating = (str: string) => {
    return str.split('').map((el, i) => {
      if (el === ' ') {
        return (
          <div key={el + i} className="select-none bg-red-00">
            {'\u00A0'}
            {/* {el} */}
          </div>
        )
      } else {
        return (
          <div
            key={el + i}
            className={`select-none bg-ed-200 flex justify-center items-center ${
              !highlighter && `opacity-0`
            }`}
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

  const rowing = (str: string, bl?: 1 | 2) => {
    let bluring = bl === 1 ? `opacity-80` : bl === 2 ? `opacity-70` : ` `

    return (
      <div className={`w-full flex flex-row ${bluring}`}>{formating(str)}</div>
    )
  }

  return (
    <div
      className={`absolute visible rounded-xl transition duration-700 ease-in-out z-31 ${
        !appear && `opacity-0`
      }`}
    >
      <div className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  ">
        {/* <div className="flex flex-row ">{'\u00A0'}</div> */}

        {rowing(rawLEFT3, 2)}
        {rowing(rawLEFT2, 1)}
        {rowing(rawLEFT1)}

        <div className="flex flex-row">
          {rowing(rawLEFT)}

          {rowing(rawRIGHT)}
        </div>

        {rowing(rawRIGHT1)}
        {rowing(rawRIGHT2, 1)}
        {rowing(rawRIGHT3, 2)}
        {/* <div className="flex flex-row ">{'\u00A0'}</div> */}
      </div>
    </div>
  )
}
