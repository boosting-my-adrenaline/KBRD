import React, { useState, useEffect } from 'react'
import useDarkMode from '../../../hooks/useDarkMode'

interface IProps {
  overall: number
}

export const BOOKpointer: React.FC<IProps> = ({ overall }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(false)
    let id = setTimeout(() => setShow(true), 2000)

    return () => clearTimeout(id)
  }, [overall])

  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={`py z-32 boder absolute select-none space-y-4 border-gray-700 text-2xl transition duration-500 ease-in-out `}
    >
      <div>{'\u00A0'}</div>
      <div>{'\u00A0'}</div>
      <div>{'\u00A0'}</div>
      <div
        className={`absolute flex flex-row items-start justify-start `}
        style={{ transform: 'translate(8px, -96px)' }}
      >
        <div
          className={`absolute ${
            show ? 'visible' : 'invisible'
          } border-md  shadow-7th z-50 animate-pulse  rounded-sm  ${
            isDarkMode
              ? `border-white shadow-gray-800`
              : `border-black shadow-gray-400`
          }`}
        >
          {'\u00A0'}
        </div>
        <div
          className={`z-10 animate-pulse rounded-sm ${
            isDarkMode ? `bg-purple-900` : `bg-purple-100`
          }`}
        >
          {'\u00A0'}
        </div>
      </div>
    </div>
  )
}
