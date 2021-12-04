import React, { useEffect, useRef, useState } from 'react'
import { getRandom } from '../../utils/getRandom'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { getRandomLetter } from './getRandomLetter'

interface IProps {
  delay?: number
  interval?: [number, number]
  setIsSymbol(isS: boolean): void
}

export const BlinkRandomSymbol: React.FC<IProps> = ({
  delay = 0,
  interval = [400, 2000],
  setIsSymbol,
}) => {
  const [symbol, setSymbol] = useState(' ')
  const [show, setShow] = useState(false)

  const used = useRef('I')

  const handleChange = (s: string, del: number) => {
    if (!firstHandle.current) {
      setShow(false)
      setTimeout(() => setSymbol(s), 410)
      setTimeout(() => setShow(true), del)
    } else {
      setTimeout(() => setSymbol(s), del * 0.5)
      setTimeout(() => setShow(true), del * 0.5)
      firstHandle.current = false
    }
  }

  useDidMountEffect(() => {
    if (show) {
      setIsSymbol(true)
    } else {
      setIsSymbol(false)
    }
  }, [show])

  const firstHandle = useRef(true)

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
      className={'select-none'}
      style={{
        opacity: show ? 1 : 0,
        transition: '0.4s ease-in-out',
        textTransform: 'uppercase',
        transform: `rotate(${''}deg)`,
      }}
    >
      {symbol}
    </div>
  )
}
