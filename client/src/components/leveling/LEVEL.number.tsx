import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

interface IProps {
  level: number
}

export const LEVELnumber: React.FC<IProps> = ({ level }) => {
  const [lvl, setLvl] = useState(level)

  const bgColor = (): [string, string] => {
    switch (lvl) {
      case 1:
        return ['bg-red-100', 'shadow-red-300']
      case 2:
        return ['bg-red-200', 'shadow-red-400']
      case 3:
        return ['bg-red-300', 'shadow-red-500']
      case 4:
        return ['bg-rose-400', 'shadow-rose-600']
      case 5:
        return ['bg-rose-500', 'shadow-rose-700']
      case 6:
        return ['bg-rose-600', 'shadow-rose-800']
      case 7:
        return ['bg-orange-500', 'shadow-orange-700']
      case 8:
        return ['bg-emerald-400', 'shadow-emerald-600']
      case 9:
        return ['bg-teal-300', 'shadow-teal-500']
      case 10:
        return ['bg-cyan-300', 'shadow-cyan-500']
      default:
        return ['', '']
    }
    // if (lvl === 1) {
    //   return `red-50`
    // } else
  }

  useDidMountEffect(() => {
    let id = setTimeout(() => setLvl(level), 500)
  }, [level])

  const [tick, setTick] = useState(false)
  useEffect(() => {
    let id = setInterval(() => setTick((prev) => !prev), 2000)

    return () => clearInterval(id)
  }, [])

  return (
    <div
      className={`z-10 rounded-xl border border-gray-800 font-courier text-3xl flex items-center justify-center ${
        bgColor()[0]
      }  shadow-sm ${tick && 'shadow-3xl'} ${bgColor()[1]} 
      
        `}
      style={{
        height: 40,
        width: 40,
        transition: '2s ease-in-out',
        // boxShadow: `0px 1px 10px 5px rgba(100, 100, 100, ${tick ? 1 : 0})`,
      }}
    >
      <div
        className={`z-10 flex items-center justify-center`}
        style={{
          height: 40,
          width: 40,
          transition: '0.3s ease-in-out',
        }}
      >
        {lvl !== 10 ? (
          lvl
        ) : (
          <>
            <span style={{ marginLeft: 1 }}>1</span>
            <span style={{ marginLeft: -4 }}>0</span>
          </>
        )}
      </div>
      {/* <div
        className={'absolute bg-transparent rounded-xl'}
        style={{
          height: 34,
          width: 34,
          transition: '2s ease-in-out',
          boxShadow: `0px 1px 10px 5px rgba(100, 100, 100, ${tick ? 1 : 0})`,
        }}
      ></div> */}
    </div>
  )
}
