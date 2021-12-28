import React, { useState } from 'react'
import { PerspectiveController } from '../PerspectiveController'
import { TAPshooting } from './TAP.shooting'

export const TAPContainer: React.FC = () => {
  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  return (
    <>
      <div
        className={`select-none`}
        style={{
          marginTop: perspective[1],
          transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
          // transition: '0.05s ease-in-out',
        }}
      >
        <TAPshooting />
      </div>
      <PerspectiveController setTap={handleSetPerspective} />
    </>
  )
}

// numbers
