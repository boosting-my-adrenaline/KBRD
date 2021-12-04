import React, { useEffect, useState } from 'react'

export const Width: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function getWindowDimensions(): { width: number; height: number } {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      {/* <div>W1 :{window.innerWidth}</div> */}
      <div style={{ fontSize: 40 }}>W2 :{windowDimensions.width}</div>
    </div>
  )
}
