import React, { useState, useEffect } from 'react'
import GH from '../../static/profiles/GH.svg'

// https://github.com/boosting-my-adrenaline

export const BelowNavbar: React.FC<{ isHorizontal: boolean }> = ({
  isHorizontal,
}) => {
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 600)
    return () => clearTimeout(id)
  }, [])

  return (
    <div
      className={`z-51 fixed top-0 right-0 left-0 bg-gray-200   ${
        isHorizontal ? `h-43px` : `h-43px`
      } shadow-11th flex select-none items-center justify-center px-4 opacity-90`}
    >
      <div className={`flew-grow w-70% flex justify-end`}>
        <a href={`https://github.com/boosting-my-adrenaline`} target={'_blank'}>
          <img
            alt=""
            src={GH}
            className={`cursor-pointer ${
              isHorizontal ? `w-40px h-40px` : `w-30px h-30px`
            } transition duration-1000 ease-in-out`}
          />
        </a>
      </div>
    </div>
  )
}
