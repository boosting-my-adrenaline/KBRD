import React, { useState, useEffect } from 'react'
import { getRandom } from './getRandom'
import { useDidMountEffect } from './useDidMountEffect'

interface IProps {
  title: string
  delay: [number, number]
  hide: any
}

export const FadeText: React.FC<IProps> = ({ title, delay, hide }) => {
  const symbols = title.split('').map((el) => (
    <TagSymbol
      // key={el + Math.random()}
      symbol={el}
      delay={delay}
      hide={hide}
    />
  ))

  return <span>{symbols}</span>
}

interface IProps2 {
  symbol: string
  delay: [number, number]
  hide: any
}

const TagSymbol: React.FC<IProps2> = ({ symbol, delay, hide }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => setShow(true), getRandom(delay[0], delay[1]))

    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(
      () => setShow(false),
      getRandom(delay[0], delay[1]) * 0.5
    )

    return () => clearTimeout(id)
  }, [hide])

  return (
    <span
      className="select-none"
      style={{ opacity: show ? 1 : 0, transition: `${delay[0] / 1000}s ease` }}
    >
      {symbol}
    </span>
  )
}
