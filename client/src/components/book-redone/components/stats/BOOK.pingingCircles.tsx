import React, { useState, useEffect, useRef } from 'react'

interface IProps {
  // amount?: number
}

export const PingingCircles: React.FC<IProps> = ({}) => {
  const amount = 3
  const [refresher, setRefresher] = useState(false)
  const ref1 = useRef(2)
  const ref2 = useRef(4)
  const ref3 = useRef(6)

  const refs = [ref1.current, ref2.current, ref3.current]

  useEffect(() => {
    let id = setInterval(() => {
      ref1.current < 6 ? (ref1.current = ref1.current + 2) : (ref1.current = 2)
      ref2.current < 6 ? (ref2.current = ref2.current + 2) : (ref2.current = 2)
      ref3.current < 6 ? (ref3.current = ref3.current + 2) : (ref3.current = 2)
      setRefresher((prev) => !prev)
    }, 400)

    return () => clearInterval(id)
  }, [])

  const circle = (num: number, key: any) => (
    <div key={key} className={`flex items-center justify-center`}>
      {'\u00a0'}
      <div
        className={`absolute rounded-full bg-emerald-${
          refs[num] * 100
        } w-8px h-8px transition duration-500 ease-in-out`}
      ></div>
    </div>
  )

  const circles = Array.from({ length: amount }, (_, i) => i)
    .reverse()
    .map((el, i) => <>{circle(el, el)}</>)

  return <div className={`flex flex-row`}>{circles}</div>
}
