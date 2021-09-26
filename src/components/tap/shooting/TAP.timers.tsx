import React, { useState, useEffect } from 'react'

interface IProps {
  interval: number
  handleTick(): void
}

export const TAPshootingTimers: React.FC<IProps> = ({
  interval,
  handleTick,
}) => {
  useEffect(() => {
    let id = setInterval(() => handleTick(), interval)

    return () => {
      clearInterval(id)
    }
  }, [interval])

  return <h1></h1>
}
