import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Chapters } from '../../types/nav'
import { Slide } from './components/Slide'

export const MAINcontainer: React.FC = () => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const chapters = Object.keys(Chapters).splice(1)

  const slides = chapters.map((el, i) => (
    <Slide key={el} title={el as Chapters} queue={i} chapter={chapter} />
  ))

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoad(true), 150)
  }, [])

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        marginTop: 300,
        paddingBottom: 50,
        gap: 50,
        transition: '0.2s ease',
        opacity: 1,
        // opacity: `${load ? 1 : 0}`,
      }}
    >
      {slides}
    </div>
  )
}
