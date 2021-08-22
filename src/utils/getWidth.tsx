import React, { useEffect, useState } from 'react'

function getWindowDimensions(): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const Width: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <div>{window.innerWidth}</div>
}
