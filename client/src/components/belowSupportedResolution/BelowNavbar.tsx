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
      className={`bg-gray-200  fixed top-0 right-0 left-0  z-50 max-h-16 opacity-90 flex justify-center items-center px-4 select-none`}
      style={{
        height: !isHorizontal ? 43 : 65,
        boxShadow: '2px 0 4px 4px rgba(50, 50, 50, 0.3)',
        zIndex: 51,
      }}
    >
      <div className={`flew-grow flex justify-end `} style={{ width: '70%' }}>
        <a href={`https://github.com/boosting-my-adrenaline`} target={'_blank'}>
          <GitHub
            className={`cursor-pointer `}
            style={{
              width: isHorizontal ? 40 : 30,
              height: isHorizontal ? 40 : 30,
              transform: `translateX(${appear ? 0 : 1000}px)`,
              transition: '0.9s ease',
            }}
          />
        </a>
      </div>
    </div>
  )
}
