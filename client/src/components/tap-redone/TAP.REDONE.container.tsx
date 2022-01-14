import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { PerspectiveController } from '../PerspectiveController'
import { TAPREDONEshooting } from './shooting/TAP.REDONE.main'

export const TAPREDONEcontainer: React.FC = () => {
  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  const [appear, setAppear] = useState<boolean>(true)
  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 250)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 50)
    return () => clearTimeout(id)
  }, [chapter])

  return (
    <>
      <div
        // className={`select-none ${appear || `opacity-0`}`}
        className={`flex flex-col justify-center items-center`}
        style={{
          marginTop: perspective[1] - 30,
          transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
          transition: '0.05s ease-in-out',
        }}
      >
        <div
          className={`flex flex-col justify-center items-center  -translate-y-0px transition-opacity duration-700 ease-in-out ${
            !appear && `opacity-0`
          }`}
          style={{ transition: `0.7s ease-in-out` }}
        >
          <TAPREDONEshooting />
        </div>
      </div>
      <PerspectiveController setTap={handleSetPerspective} />
    </>
  )
}
