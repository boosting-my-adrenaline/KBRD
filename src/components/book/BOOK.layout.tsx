import React, { useState, useEffect, useRef } from 'react'
import {
  formationForLEFT1,
  formationForLEFT2,
  formationForLEFT3,
  formationForRIGHT,
} from './book-utils/stringFormation'

export const BOOKLayout: React.FC<{
  failedTypesIndexes: number[]
  overall: number
  currentString: string
}> = ({ failedTypesIndexes, overall, currentString }) => {
  const [ts, setTs] = useState(0)

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAppear(true)
    }, 1000)
  }, [])

  const stringFormated = useRef(
    Array.from({ length: 70 }, (_, i) => i) as number[]
  )
  // useEffect(() => {
  //   // stringFormated.current = stringFormated.current.filter(
  //   //   (el) => !failedTypesIndexes.includes(el)
  //   // )
  //   // setTs((ts) => ts + 1)
  // }, [failedTypesIndexes])

  const Border = (
    <div
      className="z-30 bg-red-100 w-20 rounded-md"
      // style={{ boxShadow: '0px 0px 5px 10px rgba(0, 0, 0, 0.1)' }} //rgba(254, 226, 226, 1)
      style={{ transform: 'translateY(-5px)' }}
    >
      <div className="flex flex-row ">
        {'\u00A0'} {'\u00A0'}
      </div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
      <div className="flex flex-row ">{'\u00A0'}</div>
    </div>
  )

  return (
    <div
      className="visible font-courier text-2xl flex flex-row justify-between items-stretch space-y-4 "
      style={{
        position: 'absolute',
        alignSelf: 'center',
      }}
    >
      {/* {Border} */}
      <div
        className="w-1000 font-courier text-2xl flex flex-col space-y-4"
        style={{
          transform: 'translateY(-8px)',
          opacity: !appear ? '0' : '1',
          transition: '0.5s ease',
        }}
      >
        {/* <div className="flex flex-row-reverse ">{fillWithAreas(176, 245)}</div>
        <div className="flex flex-row-reverse ">{fillWithAreas(106, 175)}</div>
        <div className="flex flex-row-reverse ">{fillWithAreas(36, 105)}</div> */}
        <div className="flex flex-row">
          {/* <div className="flex flex-row-reverse ">{fillWithAreas(1, 35)}</div> */}
          <div className="flex flex-row-reverse">
            {stringFormated.current
              .filter((el) => el > overall && el < 35)
              .map((el) =>
                failedTypesIndexes.includes(el) ? (
                  <div style={{ backgroundColor: 'red', borderRadius: 4 }}>
                    {'\u00A0'}
                  </div>
                ) : (
                  <div style={{ backgroundColor: 'grey', borderRadius: 4 }}>
                    {'\u00A0'}
                  </div>
                )
              )}
          </div>

          <div key={0} className="animate-pulse rounded-sm bg-purple-300">
            {'\u00A0'}
          </div>
        </div>
        <div className="flex flex-row ">{'\u00A0'}</div>
        <div className="flex flex-row ">{'\u00A0'}</div>
        <div className="flex flex-row ">{'\u00A0'}</div>
      </div>
      {/* {Border} */}
    </div>
  )
}
