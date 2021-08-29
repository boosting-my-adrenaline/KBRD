import React from 'react'

export const KBRDlayout: React.FC<{ failedTypesIndexes: number[] }> = ({
  failedTypesIndexes,
}) => {
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
          className="rounded-md bg-red-300"
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
      }}
    >
      <div className="flex flex-row-reverse ">{fillWithAreas(176, 245)}</div>
      <div className="flex flex-row-reverse ">{fillWithAreas(106, 175)}</div>
      <div className="flex flex-row-reverse ">{fillWithAreas(36, 105)}</div>
      <div className="flex flex-row">
        <div className="flex flex-row-reverse ">{fillWithAreas(1, 35)}</div>
        <div key={0} className="animate-pulse rounded-sm bg-purple-300">
          {'\u00A0'}
        </div>
      </div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
    </div>
  )
}
