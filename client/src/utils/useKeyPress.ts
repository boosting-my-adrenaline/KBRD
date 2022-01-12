import { useState, useEffect } from 'react'

export function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (event: KeyboardEvent) => {
    const { key } = event
    if (targetKey === key) {
      setKeyPressed(true)
    }
  }

  const upHandler = (event: KeyboardEvent) => {
    const { key } = event
    if (targetKey === key) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])
  return keyPressed
}
