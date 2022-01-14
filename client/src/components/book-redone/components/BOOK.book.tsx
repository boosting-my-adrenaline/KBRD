import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

import { Chapters } from '../../../types/nav'

interface IProps {
  STRING: string
  chapter: Chapters
}

export const BOOKBook: React.FC<IProps> = ({ STRING, chapter }) => {
  const RIGHT: string = STRING.slice(0, 35)
  const RIGHT1: string = STRING.slice(35, 105)
  const RIGHT2: string = STRING.slice(105, 175)
  const RIGHT3: string = STRING.slice(175, 245)
  const LEFT: string = STRING.slice(-35)
  const LEFT1: string = STRING.slice(-105, -35)
  const LEFT2: string = STRING.slice(-175, -105)
  const LEFT3: string = STRING.slice(-245, -175)

  const [appear, setAppear] = useState(false)
  const [highlightHider, setHighlightHider] = useState(true)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 300)

    let id2 = setTimeout(() => setHighlightHider(false), 1000)
    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 200)

    let id2 = setTimeout(() => setHighlightHider(true), 100)
    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [chapter])

  // const formating2 = (str: string) => {
  //   return str.split('').map((el, i) =>
  //     el !== ' ' ? (
  //       <div
  //         key={i + el}
  //         className={`select-non ${
  //           highlightHider && `bg-red-100`
  //         } transition duration-600 ease-in-out`}
  //       >
  //         {el}
  //       </div>
  //     ) : (
  //       // <FadeText title={el} delay={[300, 1000]} hide={1} />
  //       <div
  //         key={i + el}
  //         className={`select-non ${
  //           highlightHider && `bg-red-100`
  //         } transition duration-600 ease-in-out`}
  //       >
  //         {'\u00A0'}
  //       </div>
  //     )
  //   )
  // }
  const formating = (str: string) => {
    return str.replace(/ /g, '\u00a0')
  }

  const rowing = (str: string) => {
    return (
      <div className={`w-full flex flex-row whitespace-nowrap`}>
        {formating(str)}
      </div>
    )
  }

  return (
    <div
      className={`visible w-1000 z-40 font-courier text-2xl flex flex-col space-y-4 ${
        !appear && `opacity-0`
      } transition duration-700 ease-in-out`}
    >
      <div
        className={`w-1000 z-40 font-courier text-2xl flex flex-col space-y-4 text-gray-800 `}
      >
        {/* <div>{`\u00a0`}</div> */}
        {/* <div>{`\u00a0`}</div> */}

        {/* {rowing(LEFT3)} */}
        <div className={`text-gray-700`}>{rowing(LEFT3)}</div>

        <div className={`text-gray-800`}>{rowing(LEFT2)}</div>
        <div className={`text-gray-900`}>{rowing(LEFT1)}</div>

        <div className={`flex flex-row text-black`}>
          <div>{rowing(LEFT)}</div>

          <div>{rowing(RIGHT)}</div>
        </div>

        <div className={`text-gray-900`}>{rowing(RIGHT1)}</div>

        <div className={`text-gray-800`}>{rowing(RIGHT2)}</div>
        <div className={`text-gray-700`}>{rowing(RIGHT3)}</div>

        {/* <div>{`\u00a0`}</div> */}
        {/* <div>{`\u00a0`}</div> */}
      </div>
    </div>
  )
}
