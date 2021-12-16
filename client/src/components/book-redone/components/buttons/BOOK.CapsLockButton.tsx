import React, { useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  caps: boolean
  capsError: number
}

export const BOOKcapsLockButton: React.FC<IProps> = ({ caps, capsError }) => {
  const [blinking, setBlinking] = useState(false)

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
      className={` rounded-md p-3 border-2 bg-${
        blinking ? 'red-300 animate-ping' : ''
      } border-${caps ? 'red-500 text-red-500' : 'gray-300 text-gray-300'} `}
    >
      CAPS LOCK
    </div>
  )
}
