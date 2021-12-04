import React from 'react'
import { useKeyPress } from '../../../utils/useKeyPress'
import ArrowLeftLogo from '../../../static/ArrowLeft.svg'
import { Chapters, Directions } from '../../../types/nav'
import { ArrowIcon } from './ArrowIcon'

type IProps = {
  onClick(dir: Directions): void
  chapter: Chapters
  isOpened: boolean
}

export const ALeft: React.FC<IProps> = ({
  onClick,
  chapter: currentChapter,
  isOpened,
}) => {
  const ArrowLeft: boolean = useKeyPress('ArrowLeft')

  const getColors = (): string[] => {
    if (currentChapter === 'BOOK') {
      return ['red', 'rgba(128, 0, 0, 1)']
    } else if (currentChapter === 'TAP') {
      return ['blue', 'rgba(30, 58, 138, 1)']
    }
    return ['green', 'rgba(6, 78, 59, 1)']
  }

  const [ThemeColor, ShadowColor] = getColors()

  return (
    <div
      style={{
        transition: '0.5s ease-in-out',
        transform: `translateY(${isOpened ? -100 : 0}px)`,
      }}
    >
      <div
        className={`outline-none cursor-pointer invisible md:visible p-1 mx-5 rounded-md bg-${ThemeColor}-200 border border-${ThemeColor}-500 transition duration-150 hover:bg-${ThemeColor}-100 flex items-center justify-center`}
        style={{
          width: 34,
          height: 34,
          boxShadow: ArrowLeft
            ? `1px 1px 4px 1px ${ShadowColor}`
            : `2px 2px 4px 3px ${ShadowColor}`,
        }}
        onClick={() => onClick('LEFT' as Directions)}
      >
        <img alt="AL" src={ArrowLeftLogo} className="w-6 h-6 " />
        {/* <div className={`w-6 h-6`}>
        <ArrowIcon />
      </div> */}
      </div>
    </div>
  )
}
