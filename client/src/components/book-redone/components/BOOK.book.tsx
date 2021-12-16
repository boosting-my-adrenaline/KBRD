import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

import { Chapters } from '../../../types/nav'
import { FadeText } from '../../../utils/FadeText'

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

  const formating = (str: string) => {
    return str.split('').map((el) =>
      el !== ' ' ? (
        <div
          className={`select-none ${highlightHider && `bg-red-100`}`}
          style={{ transition: '0.6s ease' }}
        >
          {el}
        </div>
      ) : (
        // <FadeText title={el} delay={[300, 1000]} hide={1} />
        <div
          className={`select-none ${highlightHider && `bg-red-100`}`}
          style={{ transition: '0.6s ease' }}
        >
          {'\u00A0'}
        </div>
      )
    )
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row">{formating(str)}</div>
  }

  return (
    <div
      className={`visible w-1000 z-40 font-courier text-2xl flex flex-col space-y-4 ${
        highlightHider && `bg-red-10`
      }`}
      style={{ opacity: !appear ? '0' : '1', transition: '0.7s ease-in-out' }}
    >
      <div className="w-1000 z-40 font-courier text-2xl flex flex-col space-y-4  ">
        {rowing(LEFT3)}
        {rowing(LEFT2)}
        {rowing(LEFT1)}

        <div className="flex flex-row">
          {rowing(LEFT)}

          {/* <div>{rowing(FIRST)}</div> */}

          {rowing(RIGHT)}
        </div>

        {rowing(RIGHT1)}
        {rowing(RIGHT2)}
        {rowing(RIGHT3)}
      </div>
    </div>
  )
}
