import React, { useState } from 'react'
import { ExpMSG } from './LEVEL.container'
import { LEVELicon } from './LEVEL.icon'
import { LEVELinfo } from './LEVEL.info'

interface IProps {
  exp: [number, number]
  level: number
  expMSG: ExpMSG
  setHide(hide: boolean): void
}

export const LEVELlevel: React.FC<IProps> = ({
  exp,
  level,
  expMSG,
  setHide,
}) => {
  const bgColor = (): [string, string] => {
    switch (level) {
      case 1:
        return ['bg-yellow-300', 'bg-yellow-50']
      case 2:
        return ['bg-red-200', 'bg-red-50']
      case 3:
        return ['bg-red-300', 'bg-red-50']
      case 4:
        return ['bg-rose-400', 'bg-rose-50']
      case 5:
        return ['bg-rose-500', 'bg-rose-50']
      case 6:
        return ['bg-rose-600', 'bg-rose-50']
      case 7:
        return ['bg-yellow-400', 'bg-yellow-50']
      case 8:
        return ['bg-emerald-400', 'bg-emerald-50']
      case 9:
        return ['bg-teal-300', 'bg-teal-50']
      case 10:
        return ['bg-cyan-200', 'bg-cyan-200']
      default:
        return ['', '']
    }
  }

  return (
    <div
      className={`flex flex-row w-1000 gap-4 mx-auto`}
      style={{ width: '1028px', transform: `translateX(-10px)` }}
    >
      <LEVELicon level={level} expMSG={expMSG} />
      <div className={`flex flex-row w-f items-center`}>
        <div
          className={` w-f border border-gray-900 justify-center rounded-xl flex items-center overflow-hidden 
            ${bgColor()[1]} 
          `}
          style={{ height: 40 }}
        >
          <div className={`absolute`}>
            {expMSG ? (
              <div>{expMSG}</div>
            ) : (
              <>{level === 10 ? <> </> : `${exp[0]} / ${exp[1]}`}</>
            )}
          </div>
          <div
            className={` h-f flex items-center `}
            style={{
              // height: 40,
              width: `${(100 / exp[1]) * exp[0]}%`,
              // transition: `1s ease-out`,
              transition: `0.03s ease-out`,
            }}
          >
            <div
              className={`w-f h-f
               ${bgColor()[0]} `}
              style={{
                height: 45,
                transition: '0.1s ease-in-out',
              }}
            ></div>
          </div>
          <div className={`flex-grow`}></div>
        </div>
      </div>{' '}
      <LEVELinfo setHide={setHide} />
    </div>
  )
}
