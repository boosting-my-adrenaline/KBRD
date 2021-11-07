import React, { useState, useEffect } from 'react'
import { getRandom } from './getRandom'
import { useDidMountEffect } from './useDidMountEffect'

interface IProps {
  title: string
  delay: [number, number]
  hide: any
  multiple?: boolean
}

export const FadeText: React.FC<IProps> = ({
  title,
  delay,
  hide,
  multiple = false,
}) => {
  const symbols = title.split('').map((el) => (
    <TagSymbol
      // key={el + Math.random()}
      symbol={el}
      delay={delay}
      hide={hide}
      multiple={multiple}
    />
  ))

  return <span>{symbols}</span>
}

interface IProps2 {
  symbol: string
  delay: [number, number]
  hide: any
  multiple: boolean
}

const TagSymbol: React.FC<IProps2> = ({ symbol, delay, hide, multiple }) => {
  const [show, setShow] = useState(false)

  const calculateDelay = () => {
    if (multiple) {
      return Math.floor(getRandom(delay[0], delay[1]) / 100) * 100
    } else return getRandom(delay[0], delay[1])
  }

  const del = calculateDelay()

  useEffect(() => {
    let id = setTimeout(() => setShow(true), del)

    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => setShow(false), del * 0.5)

    return () => clearTimeout(id)
  }, [hide])

  return (
    <span
      className="select-none"
      style={{ opacity: show ? 1 : 0, transition: `${delay[0] / 500}s ease` }}
    >
      {symbol}
    </span>
  )
}
