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
    setTimeout(() => {
      setAppear(false)
    }, 0)
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
      className={'absolute text-2xl space-y-4 z-50'}
      style={{ opacity: !appear ? '0' : '1', transition: '1s ease-in-out' }}
    >
      <div>{'\u00A0'}</div>
      <div>{'\u00A0'}</div>
      <div>{'\u00A0'}</div>
      <div className={`absolute flex flex-row items-start justify-start `}>
        <div
          className={`${
            show ? 'visible' : 'invisible'
          } border-md  border-black rounded-sm  animate-pulse z-0`}
          style={{
            transform: 'translate(8px, -0px)',
            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.5)',
            transition: '0.01s ease-in-out',
          }}
        >
          {'\u00A0'}
        </div>
      </div>
    </div>
  )
}
