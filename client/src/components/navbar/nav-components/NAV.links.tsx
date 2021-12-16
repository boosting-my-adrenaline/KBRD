import React, { useEffect, useState, useRef } from 'react'
import { Chapters } from '../../../types/nav'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { NAVlink } from './Nav.link'

interface IProps {
  chapter: Chapters
  chapters: Chapters[]
  ThemeColor: string
  ShadowColor: string
  onClick(link: Chapters): void
}

export const NAVlinks: React.FC<IProps> = ({
  chapters,
  chapter,
  ThemeColor,
  ShadowColor,
  onClick,
}) => {
  const links = chapters.map((link) => (
    <NAVlink
      link={link}
      chapter={chapter}
      onClick={onClick}
      ThemeColor={ThemeColor}
      ShadowColor={ShadowColor}
    />
  ))

  const [params, setParams] = useState<[boolean, [number, number], number]>([
    false,
    [0, -100],
    95,
  ])

  const is3of = useRef(false)

  // useEffect(() => {
  //   is3of.current = true

  //   if (chapter === 'BOOK') {
  //     setParams([false, [0, 0], 95])
  //   } else if (chapter === 'TAP') {
  //     setParams([false, [119, 0], 81])
  //   } else if (chapter === 'INFO') {
  //     setParams([false, [223, 0], 95])
  //   } else {
  //     is3of.current = false
  //   }
  // }, [])

  useDidMountEffect(() => {
    if (!is3of.current && ['BOOK', 'TAP', 'INFO'].includes(chapter)) {
      if (chapter === 'BOOK') {
        setParams([false, [0, -100], 95])
      } else if (chapter === 'TAP') {
        setParams([false, [119, -100], 81])
      } else if (chapter === 'INFO') {
        setParams([false, [223, -100], 95])
      }
    } else {
      setParams((prev) => [true, prev[1], prev[2]])
    }

    let id0 = setTimeout(() => {
      if (!is3of.current && ['BOOK', 'TAP', 'INFO'].includes(chapter)) {
        setParams((prev) => [true, prev[1], prev[2]])
      }
    }, 400)

    let id1 = setTimeout(() => {
      if (chapter === 'BOOK') {
        setParams([true, [0, 0], 95])
        is3of.current = true
      } else if (chapter === 'TAP') {
        setParams([true, [119, 0], 81])
        is3of.current = true
      } else if (chapter === 'INFO') {
        setParams([true, [223, 0], 95])
        is3of.current = true
      } else {
        setParams([true, [params[1][0], -100], params[2]])
        is3of.current = false
      }
    }, 700)

    let id2 = setTimeout(
      () => setParams((prev) => [false, prev[1], prev[2]]),
      1000
    )

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
    }

    // }
  }, [chapter])

  return (
    <div className={` borde-black flex flex-row items-center justify-center`}>
      <div
        className={`z-10 borde borde-black flex flex-row items-center justify-center gap-12`}
        style={{ width: 310, height: 35 }}
      >
        {links}
      </div>
      <div
        className={` absolute
         borde border-red-100
          flex flex-row items-center `}
        style={{ width: 318, height: 35, transition: '0.3s ease-in-out' }}
      >
        <div></div>
        <div
          className={`border opacity-${params[0] ? '100' : '0'}`}
          style={{
            width: params[2],
            height: 45,
            transition: '0.8s ease-in-out',
            transform: `translateX(${params[1][0]}px) translateY(${params[1][1]}px)
             `,
          }}
        ></div>
      </div>
    </div>
  )
}
