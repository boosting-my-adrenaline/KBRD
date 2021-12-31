import React, { useState } from 'react'
import { LEVELnumber } from './LEVEL.number'

interface IProps {
  exp: [number, number]
  level: number
  expMSG: null | string
}

export const LEVELlevel: React.FC<IProps> = ({ exp, level, expMSG }) => {
  return (
    <div className={`flex flex-row w-1000 gap-4 mx-auto`}>
      <LEVELnumber level={level} />
      <div className={`flex flex-row w-f items-center`}>
        <div
          className={`z-10 w-f border border-gray-900 justify-center rounded-xl flex items-center overflow-hidden bg-yellow-50`}
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
              className={`w-f h-f bg-yellow-300 `}
              style={{
                height: 45,
                transition: '0.1s ease-in-out',
              }}
            ></div>
          </div>
          <div className={`flex-grow`}></div>
        </div>
      </div>{' '}
      <div className={`flex items-center justify-evenly`}> </div>
    </div>
  )
}
