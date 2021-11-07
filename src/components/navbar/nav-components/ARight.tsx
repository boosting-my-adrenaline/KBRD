import React, { useState, useEffect, useRef } from 'react'
import { useKeyPress } from '../../../utils/useKeyPress'
import ArrowLeftLogo from '../../../static/ArrowLeft.svg'
import { Directions, Chapters } from '../../../types/nav'

type IProps = {
  onClick(dir: Directions): void
  chapter: Chapters
}

export const ARight: React.FC<IProps> = ({ onClick, chapter }) => {
  const ArrowRight: boolean = useKeyPress('ArrowRight')

  const getBGandBorderColors = (): string[] => {
    if (chapter === 'BOOK') {
      return ['red', 'rgba(128, 0, 0, 1)']
    } else if (chapter === 'TAP') {
      return ['blue', 'rgba(30, 58, 138, 1)']
    }
    return ['green', 'rgba(6, 78, 59, 1)']
  }

  const [ThemeColor, ShadowColor] = getBGandBorderColors()

  return (
    <div
      className={`outline-none cursor-pointer invisible md:visible p-1 mx-5 rounded-md bg-${ThemeColor}-200 border border-${ThemeColor}-500 transition duration-150 hover:bg-${ThemeColor}-100`}
      style={{
        boxShadow: ArrowRight
          ? `1px 1px 4px 1px ${ShadowColor}`
          : `2px 2px 4px 3px ${ShadowColor}`,
      }}
      onClick={() => onClick('LEFT' as Directions)}
    >
      <img
        alt="AL"
        src={ArrowLeftLogo}
        className="w-6 h-6 transform -rotate-180"
      />
    </div>
  )
}
