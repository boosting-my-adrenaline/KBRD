import React, { useEffect, useRef, useState } from 'react'
import { getRandom } from '../../utils/getRandom'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { getRandomLetter } from './getRandomLetter'

interface IProps {
  interval?: [number, number]
  setIsSymbol(isS: boolean): void
}

export const BlinkRandomSymbol: React.FC<IProps> = ({
  interval = [1000, 3000],
  setIsSymbol,
}) => {
  // const [symbol, setSymbol] = useState(' ')
  const symbol = useRef(' ')
  const used = useRef('I')

  const [show, setShow] = useState(false)

  const handleChange = (s: string, del: number) => {
    // if (!firstHandle.current || 1) {
    setShow(false)
    setTimeout(() => (symbol.current = s), 410)
    // setTimeout(() => setSymbol(s), 410)
    setTimeout(() => setShow(true), del)
    // } else {
    //   setTimeout(() => setSymbol(s), del * 0.5)
    //   setTimeout(() => setShow(true), del * 0.5)
    //   firstHandle.current = false
    // }
  }

  useDidMountEffect(() => {
    if (show) {
      setIsSymbol(true)
    } else {
      setIsSymbol(false)
    }
  }, [show])

  const handleTimeout = () => {
    let symbol1 = getRandomLetter(used.current)
    used.current = symbol1
    let delay1 = getRandom(interval[0], interval[1])
    handleChange(symbol1, delay1)
    setTimeout(() => {
      handleTimeout()
    }, delay1 * 2)
  }

  useEffect(() => {
    setTimeout(() => handleTimeout(), 0)
  }, [])

  return (
    <div
      className={`select-none uppercase ${
        !show && `opacity-0`
      } transition duration-400 ease-in-out`}
    >
      {symbol.current}
    </div>
  )
}
