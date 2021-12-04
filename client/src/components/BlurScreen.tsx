import React from 'react'
interface IProps {
  show: boolean
}

export const BlurScreen: React.FC<IProps> = ({ show }) => {
  return (
    <div
      className={`bg-green-100`}
      style={{
        transition: '1s ease-in-out',
        opacity: show ? 1 : 0,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    ></div>
  )
}
