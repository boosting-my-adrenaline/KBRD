import React, { useState, useEffect } from 'react'
import { getRandom } from './getRandom'
import { useDidMountEffect } from './useDidMountEffect'

interface IProps {
  title: string
  delay: [number, number]
  hide?: any
  multiple?: boolean
  blink?: any
}

export const FadeText: React.FC<IProps> = ({
  title,
  delay,
  hide = 0,
  multiple = false,
  blink = 0,
}) => {
  const symbols = title.split('').map((el, i) => (
    <TagSymbol
      // key={el + Math.random()}
      key={el + i}
      symbol={el}
      delay={delay}
      hide={hide}
      multiple={multiple}
      blink={blink}
    />
  ))

  return <>{symbols}</>
}

interface IProps2 {
  symbol: string
  delay: [number, number]
  hide?: any
  multiple: boolean
  blink: any
}

const TagSymbol: React.FC<IProps2> = ({
  symbol,
  delay,
  hide = 1,
  multiple,
  blink,
}) => {
  const [show, setShow] = useState(false)
  const [currentSymbol, setCurrentSymbol] = useState('\u00a0')

  const calculateDelay = () => {
    if (multiple) {
      return Math.floor(getRandom(delay[0], delay[1]) / 100) * 100
    } else return getRandom(delay[0], delay[1])
  }

  const del = calculateDelay()

  useEffect(() => {
    let id = setTimeout(() => {
      setCurrentSymbol(symbol)
      setShow(true)
    }, del)

    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => setShow(false), del * 0.5)

    return () => clearTimeout(id)
  }, [hide])

  useDidMountEffect(() => {
    // let id = setTimeout(() => {
    let id0 = setTimeout(() => setCurrentSymbol('\u00a0'), 1)
    let id1 = setTimeout(() => setShow(false), 2)
    let id2 = setTimeout(() => setCurrentSymbol(symbol), del * 0.2)
    let id3 = setTimeout(() => setShow(true), del * 2)
    // }, del * 0.75)

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
      clearTimeout(id2)
      clearTimeout(id3)
      setCurrentSymbol(symbol)
      setShow(true)
    }
  }, [blink])

  // useDidMountEffect(() => {
  //   let id0 = setTimeout(() => setShow(false), del * 25)
  //   // let id0 = setTimeout(() => setCurrentSymbol(' '), del * 0.75)
  //   let id1 = setTimeout(() => setCurrentSymbol(symbol), del * 75)
  //   let id2 = setTimeout(() => setShow(true), del * 1.5)

  //   return () => {
  //     clearTimeout(id0)
  //     clearTimeout(id1)
  //     clearTimeout(id2)
  //     setShow(true)
  //   }
  // }, [symbol])

  useDidMountEffect(() => setCurrentSymbol(symbol), [symbol])

  return (
    <span
      className="select-none"
      style={{ opacity: show ? 1 : 0, transition: `${delay[0] / 500}s ease` }}
    >
      {currentSymbol}
    </span>
  )
}
