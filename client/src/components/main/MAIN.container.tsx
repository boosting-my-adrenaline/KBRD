import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { chapters } from '../../redux/nav/nav.types'
import { Chapters } from '../../types/nav'
import { PerspectiveController } from '../PerspectiveController'
import { Slide } from './components/Slide'

export const MAINcontainer: React.FC = () => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const slides = chapters.map((el, i) => (
    <Slide key={el} title={el as Chapters} queue={i} chapter={chapter} />
  ))

  const [load, setLoad] = useState(false)
  const [marginT, setMarginT] = useState(0)

  useEffect(() => {
    setTimeout(() => setLoad(true), 150)
  }, [])

  return (
    <>
      <div
        className="flex flex-col justify-center items-center "
        style={{
          marginTop: marginT,
          paddingBottom: 50,
          gap: 50,
          transition: '0.2s ease',
          opacity: 1,
          // opacity: `${load ? 1 : 0}`,
        }}
      >
        {slides}
      </div>
      mt: {marginT}
      <PerspectiveController setMainMT={setMarginT} />
    </>
  )
}
