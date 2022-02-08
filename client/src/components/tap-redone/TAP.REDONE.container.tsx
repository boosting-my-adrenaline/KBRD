import React, { useState } from 'react'
import { PerspectiveController } from '../PerspectiveController'
import { TAPREDONEshooting } from './shooting/TAP.REDONE.main'

interface IProps {
  demo: boolean
  trainingLanguage: boolean
}

export const TAPREDONEcontainer: React.FC<IProps> = ({
  demo,
  trainingLanguage,
}) => {
  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  return (
    <>
      <div
        // className={`select-none ${appear || `opacity-0`}`}
        className={`flex flex-col items-center justify-center`}
        style={{
          marginTop: perspective[1],
          transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
          transition: '0.05s ease-in-out',
        }}
      >
        <div
          className={`-translate-y-0px flex flex-col items-center  justify-center transition-opacity duration-700 ease-in-out`}
          style={{ transition: `0.7s ease-in-out` }}
        >
          <TAPREDONEshooting demo={demo} trainingLanguage={trainingLanguage} />
        </div>
      </div>
      <PerspectiveController setTap={handleSetPerspective} />
    </>
  )
}
