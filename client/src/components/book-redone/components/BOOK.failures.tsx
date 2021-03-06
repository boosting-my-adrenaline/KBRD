import React from 'react'
import useDarkMode from '../../../hooks/useDarkMode'

interface IProps {
  failedTypesIndexes: number[]
  highlighter: boolean
}

export const BOOKfailures: React.FC<IProps> = ({
  failedTypesIndexes,
  highlighter,
}) => {
  const { isDarkMode } = useDarkMode()

  function fillWithAreas(from: number, to: number) {
    let row = []
    for (let i = from; i <= to; i++) {
      row.push(
        <div
          key={i}
          className={`rounded-sm ${
            failedTypesIndexes.includes(i)
              ? isDarkMode
                ? `bg-red-700`
                : `bg-red-300`
              : `bg-transparent`
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
      className={`z-35 w-1000 font-courier  align-center absolute flex flex-col justify-center space-y-4 text-2xl  transition duration-500 ease-in-out`}
    >
      {/* <div className={`flex flex-row-reverse opacity-60`}>
        {fillWithAreas(176, 245)}
      </div> */}
      {/* <div className={`flex flex-row-reverse opacity-70`}>
        {fillWithAreas(106, 175)}
      </div> */}
      <div className="flex flex-row ">{'\u00A0'}</div>

      <div className="flex flex-row-reverse ">{fillWithAreas(36, 105)}</div>
      <div className="flex flex-row">
        <div className={`flex flex-row-reverse`}>{fillWithAreas(1, 35)}</div>
        <div>{'\u00A0'}</div>
      </div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      {/* <div className="flex flex-row ">{'\u00A0'}</div> */}
    </div>
  )
}
