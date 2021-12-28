import React, { useState } from 'react'

interface IProps {
  exp: [number, number]
  expMSG: null | string
}

export const LEVELlevel: React.FC<IProps> = ({ exp, expMSG }) => {
  return (
    <div className={`flex flex-col w-1000`}>
      <div className={`flex flex-row w-f`}>
        <div
          className={`z-10 w-f border border-gray-900 justify-center rounded-xl flex items-center overflow-hidden bg-yellow-50`}
          style={{ height: 40 }}
        >
          <div className={`absolute`}>
            {expMSG ? (
              <div>{expMSG}</div>
            ) : (
              <>
                {exp[0]} / {exp[1]}
              </>
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
              className={`w-f bg-yellow-${300} `}
              style={{ height: 40, transition: '0.2s ease-in-out' }}
            ></div>
          </div>
          <div className={`flex-grow`}></div>
        </div>
      </div>{' '}
      <div className={`flex items-center justify-evenly`}> </div>
    </div>
  )
}
