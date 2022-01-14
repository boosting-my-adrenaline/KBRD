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

  // const filling = [1, 2, 3, 4, 5, 6, 7].map((el) => (
  //   <div key={el} className={`flex flex-row `}>
  //     {Array.from({ length: 70 }, (_, i) => i + 1).map((letter) => (
  //       <div key={letter} className="bg-red-600 rounded-md">
  //         {'\u00A0'}
  //       </div>
  //     ))}
  //   </div>
  // ))

  function fillWithAreas(from: number, to: number) {
    let row = []
    for (let i = from; i <= to; i++) {
      row.push(
        <div
          key={i}
          className={`rounded-sm ${
            failedTypesIndexes.includes(i) ? `bg-red-400` : `bg-transparent`
          }`}
        >
          {'\u00A0'}
        </div>
      )
    }
    return row
  }

  return (
    <div
      className={`z-35 w-1000 absolute  font-courier text-2xl flex flex-col justify-center align-center space-y-4 ${
        !appear && `opacity-0`
      } transition duration-500 ease-in-out`}
    >
      <div className={`flex flex-row-reverse opacity-60`}>
        {fillWithAreas(176, 245)}
      </div>
      <div className={`flex flex-row-reverse opacity-70`}>
        {fillWithAreas(106, 175)}
      </div>

      <div className="flex flex-row-reverse ">{fillWithAreas(36, 105)}</div>
      <div className="flex flex-row">
        <div className={`flex flex-row-reverse`}>{fillWithAreas(1, 35)}</div>
        <div>{'\u00A0'}</div>
      </div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
    </div>
  )
}
