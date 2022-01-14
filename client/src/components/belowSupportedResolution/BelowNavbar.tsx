import React, { useState, useEffect } from 'react'
import { GitHub } from '@material-ui/icons'

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
      className={`bg-gray-200 z-51 fixed top-0 right-0 left-0   ${
        isHorizontal ? `h-43px` : `h-43px`
      } opacity-90 flex justify-center items-center px-4 select-none shadow-11th`}
    >
      <div className={`flew-grow flex justify-end w-70%`}>
        <a href={`https://github.com/boosting-my-adrenaline`} target={'_blank'}>
          <GitHub
            className={`cursor-pointer ${
              isHorizontal ? `w-40px h-40px` : `w-30px h-30px`
            } transition duration-1000 ease-in-out`}
          />
        </a>
      </div>
    </div>
  )
}
