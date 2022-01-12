import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

interface IProps {
  overall: number
}

export const BOOKpointer: React.FC<IProps> = ({ overall }) => {
  const [appear, setAppear] = useState(false)
  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 300)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 0)
    return () => clearTimeout(id)
  }, [chapter])

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
      className={`py z-32 absolute text-2xl space-y-4  select-none border-black boder transition duration-500 ease-in-out ${
        !appear && `opacity-0`
      }`}
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
          } border-md  border-black rounded-sm  animate-pulse z-50 shadow-7th`}
        >
          {'\u00A0'}
        </div>
        <div className={`rounded-sm bg-purple-200 animate-pulse z-10`}>
          {'\u00A0'}
        </div>
      </div>
    </div>
  )
}
