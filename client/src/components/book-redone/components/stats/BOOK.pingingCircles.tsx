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

  const circle = (num: number) => (
    <div className={`flex justify-center items-center`}>
      {'\u00a0'}
      <div
        className={`absolute  bg-black rounded-full bg-red-${refs[num] * 100}`}
        style={{
          width: 8,
          height: 8,
          transition: '0.5s ease-in-out',
        }}
      ></div>
    </div>
  )

  const circles = Array.from({ length: amount }, (_, i) => i)
    .reverse()
    .map((el) => <>{circle(el)}</>)

  return <div className={`flex flex-row`}>{circles}</div>
}
