import React, { useState, useEffect } from 'react'
import { Chapters } from '../../../types/nav'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

export const BOOKfailures: React.FC<{
  failedTypesIndexes: number[]
  chapter: Chapters
}> = ({ failedTypesIndexes, chapter }) => {
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 100)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 250)

    return () => clearTimeout(id)
  }, [chapter])

  const filling = [1, 2, 3, 4, 5, 6, 7].map((el) => (
    <div key={el} className="flex flex-row ">
      {Array.from({ length: 70 }, (_, i) => i + 1).map((letter) => (
        <div key={letter} className="bg-red-600 rounded-md">
          {'\u00A0'}
        </div>
      ))}
    </div>
  ))

  function fillWithAreas(from: number, to: number) {
    let row = []
    for (let i = from; i <= to; i++) {
      row.push(
        <div
          key={i}
          className="rounded-sm bg-red-400"
          style={{
            backgroundColor: failedTypesIndexes.includes(i)
              ? ''
              : 'transparent',
          }}
        >
          {'\u00A0'}
        </div>
      )
    }
    return row
  }

  return (
    <div
      className="w-1000 font-courier text-2xl flex flex-col justify-center align-center space-y-4 "
      style={{
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 35,
        opacity: appear ? 1 : 0,
        transition: '0.4s ease-in-out',
      }}
    >
      <div className="flex flex-row-reverse ">{fillWithAreas(176, 245)}</div>
      <div className="flex flex-row-reverse ">{fillWithAreas(106, 175)}</div>
      <div className="flex flex-row-reverse ">{fillWithAreas(36, 105)}</div>
      <div className="flex flex-row">
        <div className="flex flex-row-reverse ">{fillWithAreas(1, 35)}</div>
        <div>{'\u00A0'}</div>
      </div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
    </div>
  )
}
