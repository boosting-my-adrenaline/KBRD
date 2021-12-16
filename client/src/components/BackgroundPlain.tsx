import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Chapters } from '../types/nav'

export const Background: React.FC = () => {
  const currentChapter = useTypedSelector((state) => state.nav.chapter)

  const getColors = (): string => {
    if (currentChapter === Chapters.BOOK) {
      return 'red'
    } else if (currentChapter === Chapters.TAP) {
      return 'blue'
    } else if (currentChapter === Chapters.INFO) {
      return 'yellow'
    } else if (currentChapter === Chapters.NOT_FOUND) {
      return 'gray'
    } else {
      return 'green'
    }
  }

  return (
    <div
      className={`fixed top-0 bottom-0 right-0 bg-${getColors()}-100`}
      style={{
        width: '100%',
        transition: '1.25s ease-in-out',
      }}
    ></div>
  )
}
