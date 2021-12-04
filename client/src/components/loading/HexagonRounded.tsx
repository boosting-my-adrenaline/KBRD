import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

interface IProps {
  Kstart?: number
  K2start?: number
  K3start?: number
  K4start?: number
  onClick(): void
  tsition?: number
}

export const HexagonRounded: React.FC<IProps> = ({
  Kstart = 0.26,
  K2start = 0.22,
  K3start = 0.18,
  K4start = 0.14,
  onClick,
  tsition = 0.175,
}) => {
  const [K, setK] = useState(Kstart)
  const [K2, setK2] = useState(K2start)
  const [K3, setK3] = useState(K3start)
  const [K4, setK4] = useState(K4start)

  const [observer, setObserver] = useState(0)

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setK((prev) => prev * 0.5)
      setTimeout(() => setK(Kstart), 100)
    }, 90)

    let id2 = setTimeout(() => {
      setK2((prev) => prev * 0.5)
      setTimeout(() => setK2(K2start), 100)
    }, 60)

    let id3 = setTimeout(() => {
      setK3((prev) => prev * 0.5)
      setTimeout(() => setK3(K3start), 100)
    }, 30)

    let id4 = setTimeout(() => {
      setK4((prev) => prev * 0.5)
      setTimeout(() => setK4(K4start), 100)
    }, 0)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
      clearTimeout(id3)
      clearTimeout(id4)
    }
  }, [observer])

  const handleClick = () => {
    onClick()
    setObserver((prev) => prev + 1)
  }

  return (
    <div
      className={`flex items-center justify-center`}
      onMouseDown={handleClick}
    >
      <div className={'flex justify-center items-center'}>
        <div
          className={`absolute bg-indigo-700`}
          style={{
            width: 200 * K,
            height: 132 * K,
            borderRadius: 20 * Math.pow(K, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-700`}
          style={{
            width: 200 * K,
            height: 132 * K,
            transform: 'rotate(120deg)',
            borderRadius: 20 * Math.pow(K, 0.65),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-700`}
          style={{
            width: 200 * K,
            height: 132 * K,
            transform: 'rotate(-120deg)',
            borderRadius: 20 * Math.pow(K, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
      </div>
      <div className={'absolute flex justify-center items-center font-courier'}>
        <div
          className={`absolute bg-indigo-500`}
          style={{
            width: 200 * K2,
            height: 132 * K2,
            borderRadius: 20 * Math.pow(K2, 0.75),
            transition: `${tsition}s ease-in-out`,

            fontSize: 150,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-500`}
          style={{
            width: 200 * K2,
            height: 132 * K2,
            transform: 'rotate(120deg)',
            borderRadius: 20 * Math.pow(K2, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-500`}
          style={{
            width: 200 * K2,
            height: 132 * K2,
            transform: 'rotate(-120deg)',
            borderRadius: 20 * Math.pow(K2, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
      </div>
      <div className={'absolute flex justify-center items-center font-courier'}>
        <div
          className={`absolute bg-indigo-300`}
          style={{
            width: 200 * K3,
            height: 132 * K3,
            borderRadius: 20 * Math.pow(K3, 0.75),
            transition: `${tsition}s ease-in-out`,

            fontSize: 150,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-300`}
          style={{
            width: 200 * K3,
            height: 132 * K3,
            transform: 'rotate(120deg)',
            borderRadius: 20 * Math.pow(K3, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-300`}
          style={{
            width: 200 * K3,
            height: 132 * K3,
            transform: 'rotate(-120deg)',
            borderRadius: 20 * Math.pow(K3, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
      </div>
      <div className={'absolute flex justify-center items-center font-courier'}>
        <div
          className={`absolute bg-indigo-100`}
          style={{
            width: 200 * K4,
            height: 132 * K4,
            borderRadius: 20 * Math.pow(K4, 0.75),
            transition: `${tsition}s ease-in-out`,
            fontSize: 150,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-100`}
          style={{
            width: 200 * K4,
            height: 132 * K4,
            transform: 'rotate(120deg)',
            borderRadius: 20 * Math.pow(K4, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
        <div
          className={`absolute bg-indigo-100`}
          style={{
            width: 200 * K4,
            height: 132 * K4,
            transform: 'rotate(-120deg)',
            borderRadius: 20 * Math.pow(K4, 0.75),
            transition: `${tsition}s ease-in-out`,
          }}
        ></div>
      </div>
    </div>
  )
}
