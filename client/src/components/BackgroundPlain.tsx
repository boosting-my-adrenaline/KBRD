import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Chapters } from '../types/nav'
import svg2 from '../static/svg2.svg'
import svgbook2 from '../static/svgbook2.svg'
import svg3 from '../static/svg3.svg'
import svg4 from '../static/svg4.svg'
import svg5 from '../static/svg5.svg'
import svg6 from '../static/svg6.svg'
import svg7 from '../static/svg7.svg'
import svg8 from '../static/svg8.svg'
import svg4041 from '../static/svg4041.svg'
import { useDidMountEffect } from '../utils/useDidMountEffect'

export const Background: React.FC = () => {
  const currentChapter = useTypedSelector((state) => state.nav.chapter)

  const bgColor = (): string => {
    if ([Chapters.BOOK, Chapters.B].includes(currentChapter)) {
      return 'bg-red-100'
    } else if (currentChapter === Chapters.TAP) {
      return 'bg-sky-100'
    } else if (currentChapter === Chapters.INFO) {
      return 'bg-amber-100'
    } else if (currentChapter === Chapters.NOT_FOUND) {
      return 'bg-gray-100'
    } else {
      return 'bg-emerald-100'
    }
  }

  const getImage = () => {
    switch (currentChapter) {
      case Chapters.MAIN:
        return [svg2, `auto 100%`, `left`]
      case Chapters.BOOK:
        return [svgbook2, `100% auto`, `bottom`]

      case Chapters.B:
        return [svgbook2, `100% auto`, `bottom`]
      case Chapters.TAP:
        return [svg5, `100% auto`, `bottom`]
      case Chapters.INFO:
        return [svg8, `100% 100%`, `center`]
      case Chapters.NOT_FOUND:
        return [svg4041, `cover`, `bottom`, `opacity-50`]
      default:
        return []
    }
  }

  const [appear, setAppear] = useState(false)
  const [params, setParams] = useState(getImage())

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 100)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id0 = setTimeout(() => {
      setAppear(false)
    }, 350)

    let id1 = setTimeout(() => {
      setParams(getImage())
    }, 850)

    let id2 = setTimeout(() => {
      setAppear(true)
    }, 1050)
    // return () => clearTimeout(id)
  }, [currentChapter])

  return (
    <div
      className={`fixed w-f top-0 bottom-0 right-0 ${bgColor()} transition-colors duration-2000 ease-in-out`}
    >
      <div
        className={`fixed top-0 left-0 bottom-0 right-0  ${
          appear ? `${params[3]}` : `opacity-0`
        } transition duration-600 ease-in-out `}
        style={{
          backgroundImage: ` url(${params[0]})`,
          backgroundRepeat: `no-repeat no-repeat`,
          backgroundSize: params[1],
          backgroundPosition: params[2],
        }}
      ></div>
    </div>
  )
}
