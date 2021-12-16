import React, { useState } from 'react'

interface IProps {
  show: boolean
  setShow(show: boolean): void
}

export const BOOKarrowButton: React.FC<IProps> = ({ show, setShow }) => {
  const [pos, setPos] = useState(0)

  const handleClick = () => {
    if (show) {
      setShow(!show)

      setTimeout(() => setPos(565), 270)

      setTimeout(() => setPos(0), 850)
    } else {
      setTimeout(() => setPos(565), 270)

      setTimeout(() => {
        setShow(!show)

        setPos(0)
      }, 850)
    }
  }
  return (
    <div
      className={`flex justify-center imtes-center `}
      style={{
        transition: '0.53s ease ',
        // transform: `rotate(${!show ? 45 : 225}deg)`,
        // transform: `translateX(${show ? 0 : 500}px)`,
        transform: `translateX(${pos}px)`,
      }}
    >
      <div
        className={`rounded-full border border-gray-${
          show ? 900 : 300
        } cursor-pointer bg-${show ? 'red-200' : 'red-100'}`}
        style={{
          width: 56,
          height: 56,
          transition: '0.5s ease 0.3s',
          transform: `rotate(${!show ? 45 : 225}deg)`,
          // transform: `translateX(${show ? 0 : 500}px)`,
          // transform: `translateX(${pos}px)`,
        }}
        onMouseDown={handleClick}
      >
        <div
          className={`rounded-sm border-t-4 border-r-4 border-gray-${
            show ? 900 : 300
          } `}
          style={{
            width: 26,
            height: 26,
            transition: '0.2s ease 0.5s',

            transform: `translate(11px, 17px) `,
          }}
        ></div>
      </div>
    </div>
  )
}
