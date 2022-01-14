import React, { useEffect } from 'react'

interface IProps {
  interval: number
  handleTick(): void
}

export const TAPtimer: React.FC<IProps> = ({ interval, handleTick }) => {
  useEffect(() => {
    let id = setInterval(() => handleTick(), interval)

    return () => {
      clearInterval(id)
    }
  }, [interval])

  return <></>
}
