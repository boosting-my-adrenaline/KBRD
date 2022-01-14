import React from 'react'
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
      className={`fixed w-f top-0 bottom-0 right-0 ${bgColor()} transition-colors duration-2000 ease-in-out`}
      style={{ backgroundImage: `url()` }}
    ></div>
  )
}
