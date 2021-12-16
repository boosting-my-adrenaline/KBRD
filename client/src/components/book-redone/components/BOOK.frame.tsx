import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

export const BOOKframe: React.FC = () => {
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

  return (
    <div
      className={`z-50 visible absolute text-2xl flex flex-row select-none`}
      style={{ opacity: !appear ? '0' : '1', transition: '0.5s ease-in-out' }}
    >
      <div className={` bg-red-100`} style={{ width: 10000 }}>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
      </div>
      <div className={`space-y-4  `} style={{ width: 1007 }}>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
      </div>
      <div className={`bg-red-100`} style={{ width: 10000 }}>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
        <div>{'\u00A0'}</div>
      </div>
    </div>
  )
}
