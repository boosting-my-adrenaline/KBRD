import React, { useState, useEffect } from 'react'
import { getRandom } from './getRandom'
import { useDidMountEffect } from './useDidMountEffect'

interface IProps {
  title: string
  hide: any
  delay: number
  component: 'h1' | 'h3'
  highlighter?: boolean
}

export const FadeText2: React.FC<IProps> = ({
  title,
  hide,
  delay,
  component,
  highlighter = false,
}) => {
  const symbols = title.split('').map((el, i) => (
    <TagSymbol
      // key={el + Math.random()}
      symbol={el}
      hide={hide}
      i={i}
      delay={delay}
      highlighter={highlighter}
    />
  ))

  if (component === 'h1') return <h1 className={`text-3xl pb-4`}>{symbols}</h1>

  return <h3>{symbols}</h3>
}

interface IProps2 {
  symbol: string
  hide: any
  i: number
  delay: number
  highlighter: boolean
}

const TagSymbol: React.FC<IProps2> = ({
  symbol,
  hide,
  i,
  delay,
  highlighter,
}) => {
  const [show, setShow] = useState(false)

  const calcDelay = i + Math.floor(Math.random() * delay)

  useEffect(() => {
    let id = setTimeout(() => setShow(true), calcDelay)

    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => setShow(false), calcDelay * 0.66)

    return () => clearTimeout(id)
  }, [hide])

  return (
    <span
      className={`opacity-${show ? 100 : 0} select-none ${
        highlighter ? `bg-red-600` : ``
      }`}
    >
      {symbol}
    </span>
  )
}
