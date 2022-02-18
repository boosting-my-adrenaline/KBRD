import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useWindowSize } from '../../hooks/useDimensions'
import useLocalStorage from '../../hooks/useLocalStorage'
import { PerspectiveController } from '../PerspectiveController'
import { TAPREDONEshooting } from './shooting/TAP.REDONE.main'

interface IProps {
  demo: boolean
  trainingLanguage: boolean
  handleLanguage: () => void
}

export const TAPREDONEcontainer: React.FC<IProps> = ({
  demo,
  trainingLanguage,
  handleLanguage,
}) => {
  const [perspective, setPerspective] = useState<[number, number]>([0, 100])

  const handleSetPerspective = (perspective: number, margin: number) => {
    setPerspective([perspective, margin])
  }

  const { width } = useWindowSize()

  return (
    <>
      <motion.div
        animate={{}}
        // className={`select-none ${appear || `opacity-0`}`}
        className={`mt-[70px] flex flex-col items-center justify-center`}
        // style={{
        //   marginTop: perspective[1],
        //   transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
        //   transition: '0.05s ease-in-out',
        // }}
      >
        <div
          className={`-translate-y-0px flex flex-col items-center  justify-center transition-opacity duration-700 ease-in-out`}
          style={{ transition: `0.7s ease-in-out` }}
        >
          <TAPREDONEshooting
            demo={demo}
            trainingLanguage={trainingLanguage}
            handleLanguage={handleLanguage}
          />
        </div>
      </motion.div>
      <PerspectiveController setTap={handleSetPerspective} />
    </>
  )
}
