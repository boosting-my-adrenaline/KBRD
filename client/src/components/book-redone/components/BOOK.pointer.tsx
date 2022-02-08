import React, { useState, useEffect } from 'react'

interface IProps {
  overall: number
}

export const BOOKpointer: React.FC<IProps> = ({ overall }) => {
  const [show, setShow] = useState(true)
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    let id = setInterval(() => setTimer((prev) => !prev), 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setShow(false)
    let id = setTimeout(() => setShow(true), 2000)

    return () => clearTimeout(id)
  }, [overall])

  return (
    <div
      className={`py z-32 boder absolute select-none  space-y-4 border-black text-2xl transition duration-500 ease-in-out `}
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
          } border-md  shadow-7th z-50  animate-pulse rounded-sm border-black`}
        >
          {'\u00A0'}
        </div>
        <div className={`z-10 animate-pulse rounded-sm bg-purple-200`}>
          {'\u00A0'}
        </div>
      </div>
    </div>
  )
}
