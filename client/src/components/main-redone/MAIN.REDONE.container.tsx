import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { chapters } from '../../redux/nav/nav.types'
import { Chapters } from '../../types/nav'
import { PerspectiveController } from '../PerspectiveController'
// import { Slide } from './components/Slide'

export const MAINREDONEcontainer: React.FC = () => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  // const slides = chapters.map((el, i) => (
  //   <Slide key={el} title={el as Chapters} queue={i} chapter={chapter} />
  // ))

  // const [load, setLoad] = useState(false)

  // useEffect(() => {
  //   let id = setTimeout(() => setLoad(true), 450)
  //   return () => clearTimeout(id)
  // }, [])

  // useDidMountEffect(() => {
  //   let id = setTimeout(() => setLoad(false), 400)
  //   return () => clearTimeout(id)
  // }, [chapter])

  const [marginT, setMarginT] = useState(0)
  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  return (
    <div
      style={{
        marginTop: perspective[1],
        transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
        // transition: '0.05s ease-in-out',
      }}
    >
      <div
        className={` flex flex-col justify-center items-center transition duration-200 ease-int-out`}
        style={{
          marginTop: marginT,
          paddingBottom: 50,
          gap: 50,
          transition: '0.2s ease',
          // opacity: `${load ? 1 : 0}`,
          opacity: 1,
        }}
      ></div>
      <PerspectiveController
        setMainMT={setMarginT}
        setBook={handleSetPerspective}
      />
    </div>
  )
}
