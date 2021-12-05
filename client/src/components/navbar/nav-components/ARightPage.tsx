import React, { useEffect, useState } from 'react'
import { Chapters, Directions } from '../../../types/nav'
import { useKeyPress } from '../../../utils/useKeyPress'
import { useDispatch } from 'react-redux'
import ArrowLeftLogo from '../../../static/ArrowLeft.svg'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  onClick(dir: Directions): void
  chapter: Chapters
  isOpened: boolean
}

export const NAVarrowRight: React.FC<IProps> = ({
  onClick,
  chapter,
  isOpened,
}) => {
  const ArrowRight: boolean = useKeyPress('ArrowRight')

  const getColors = (): string[] => {
    if (chapter === 'BOOK') {
      return ['red', 'rgba(128, 0, 0, 1)']
    } else if (chapter === 'TAP') {
      return ['blue', 'rgba(30, 58, 138, 1)']
    }
    return ['green', 'rgba(6, 78, 59, 1)']
  }

  const [ThemeColor, ShadowColor] = getColors()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if ([Chapters.BOOK, Chapters.TAP, Chapters.INFO].includes(chapter)) {
      setShow(true)
    }
  }, [])

  useDidMountEffect(() => {
    setShow(false)
    let id = setTimeout(() => setShow(true), 1000)
    if (![Chapters.BOOK, Chapters.TAP, Chapters.INFO].includes(chapter)) {
      clearTimeout(id)
    }
    return () => clearTimeout(id)
  }, [chapter])

  return (
    <div
      className={`absolute  z-50 outline-none cursor-pointer invisible 135k:visible p-1  rounded-xl bg-${ThemeColor}-200 border border-${ThemeColor}-500 transition duration-150 hover:bg-${ThemeColor}-100 flex items-center justify-center opacity-${
        show && !isOpened ? 100 : 0
      }`}
      style={{
        top: 400,
        right: 50,
        width: 75,
        height: 75,
        // transform: `translateX(${show && !isOpened ? -50 : 350}px)`,

        transition: '1.3s ease-in-out',
      }}
      onClick={() => onClick('RIGHT' as Directions)}
    >
      <div
        className="absolute rounded-xl"
        style={{
          width: 75,
          height: 75,
          boxShadow: ArrowRight
            ? `1px 1px 4px 1px ${ShadowColor}`
            : `4px 4px 11px 8px ${ShadowColor}`,
          transition: '0.2s ease-in-out',
        }}
      ></div>
      <img
        alt="AL"
        src={ArrowLeftLogo}
        className="w-12 h-12 transform -rotate-180 "
      />
    </div>
  )
}
