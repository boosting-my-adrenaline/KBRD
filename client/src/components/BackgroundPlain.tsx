import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Chapters } from '../types/nav'

export const Background: React.FC = () => {
  const currentChapter = useTypedSelector((state) => state.nav.chapter)

  const bgColor = (): string => {
    if (currentChapter === Chapters.BOOK) {
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

  return (
    <div
      // className={`fixed top-0 bottom-0 right-0 bg-blue-100`}
      className={`fixed top-0 bottom-0 right-0 ${bgColor()}`}
      style={{
        width: '100%',
        transition: '1.25s ease-in-out',
      }}
    ></div>
  )
}
