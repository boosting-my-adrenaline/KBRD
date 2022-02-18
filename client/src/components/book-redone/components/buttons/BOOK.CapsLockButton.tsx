import React, { useState } from 'react'
import useDarkMode from '../../../../hooks/useDarkMode'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  caps: boolean
  capsError: number
}

export const BOOKcapsLockButton: React.FC<IProps> = ({ caps, capsError }) => {
  const [blinking, setBlinking] = useState(false)
  const { isDarkMode } = useDarkMode()

  useDidMountEffect(() => {
    setBlinking(true)
    let id = setTimeout(() => setBlinking(false), 200)

    return () => {
      setBlinking(false)
      clearTimeout(id)
    }
  }, [capsError])

  return (
    <div
      className={` rounded-md border-2 p-3 ${
        blinking ? '${bg-red-300} animate-ping' : ''
      } ${
        caps
          ? isDarkMode
            ? 'border-red-400 text-red-400'
            : 'border-red-500 text-red-500'
          : isDarkMode
          ? 'border-gray-800/80 text-gray-800/80'
          : 'border-gray-300 text-gray-300'
      } `}
    >
      CAPS LOCK
    </div>
  )
}
