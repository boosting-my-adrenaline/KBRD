import React from 'react'
interface IProps {
  show: boolean
}

export const BlurScreen: React.FC<IProps> = ({ show }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-green-100 ${
        !show && `opacity-0`
      } transition duration-1000 ease-in-out`}
    ></div>
  )
}
