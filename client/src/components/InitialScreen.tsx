import { motion } from 'framer-motion'
import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Chapters } from '../types/nav'

interface IProps {
  show: boolean
}

export const InitialScreen: React.FC<IProps> = ({ show }) => {
  const chapter = useTypedSelector((state) => state.nav.chapter)
  const getColors = (): string[] => {
    if (chapter === Chapters.BOOK) {
      return ['text-red-200', 'border-red-500', 'shadow-red-700']
    } else if (chapter === Chapters.TAP) {
      return ['text-sky-200', 'border-sky-500', 'shadow-sky-700']
    } else if (chapter === Chapters.INFO) {
      return ['text-amber-200', 'border-amber-500', 'shadow-amber-700']
    } else if (chapter === Chapters.NOT_FOUND) {
      return ['text-gray-200', 'border-gray-500', 'shadow-gray-500']
    } else {
      return ['text-emerald-200', 'border-emerald-500', 'shadow-emerald-500']
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/985 ${
        getColors()[0]
      } ${
        show || `opacity-0`
      } transition duration-1000 flex justify-center items-center ease-in-out font-courier text-5em`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        // animate={{ scale: 2, opacity: [1, 1] }}
        animate={{ opacity: 1, scale: 4 }}
      >
        KBRD
      </motion.div>
    </div>
  )
}
