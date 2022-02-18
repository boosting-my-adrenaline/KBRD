import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useDarkMode from '../../../hooks/useDarkMode'
import { useWindowSize } from '../../../hooks/useDimensions'
import useLanguage from '../../../hooks/useLanguage'
import R from '../../../static/profiles/russia.png'
import E from '../../../static/profiles/uk.png'

interface IProps {
  trainingLanguage: boolean
  toggleTrainingLanguage: () => void
}

export const LanguageMiniature: React.FC<IProps> = ({
  trainingLanguage,
  toggleTrainingLanguage,
}) => {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  const { isDarkMode } = useDarkMode()

  const { isEng, toggle } = useLanguage()

  const { width } = useWindowSize()
  return (
    <motion.div
      whileHover={{ scale: 1.16 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` relative flex cursor-pointer  ${
        hover ? `border-grey-700  bg-white/50` : `border-transparent`
      } items-center justify-center rounded-md border  p-1`}
      onMouseDown={toggle}
    >
      <div
        className={`h-[24px] w-[24px]  cursor-pointer rounded-full border ${
          isDarkMode ? ` border-gray-300` : ` border-gray-600`
        }`}
      >
        <img alt="" src={isEng ? E : R} />
      </div>
      {/* <div className={`flex `} onMouseDown={toggle}>
        {hover && (
          <div className={width > 1300 ? `` : `text-[10px]`}>
            interface -{`\u00a0`}
          </div>
        )}
        <div
          className={`${
            width > 1300 ? `h-[24px] w-[24px]` : `h-[16px] w-[16px]`
          }`}
        >
          {isEng ? (
            <img
              alt=""
              src={E}
              className={`w-f h-f rounded-full object-cover`}
            />
          ) : (
            <img alt="" src={R} />
          )}
        </div>
      </div>
      <div className={`flex `} onMouseDown={toggleTrainingLanguage}>
        {hover && (
          <div className={width > 1300 ? `` : `text-[10px]`}>
            training - {`\u00a0`}
          </div>
        )}
        <div
          className={`${
            width > 1300 ? `h-[24px] w-[24px]` : `h-[16px] w-[16px]`
          }`}
        >
          {trainingLanguage ? (
            <img
              alt=""
              src={E}
              className={`w-f h-f rounded-full object-cover`}
            />
          ) : (
            <img alt="" src={R} />
          )}
        </div>
      </div> */}
    </motion.div>
  )
}
