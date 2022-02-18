import { useState, useEffect } from 'react'

export function useKeyCode(keyCode: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (event: KeyboardEvent) => {
    const { code } = event
    if (keyCode === code) {
      setKeyPressed(true)
    }
  }

  const upHandler = (event: KeyboardEvent) => {
    const { code } = event
    if (keyCode === code) {
      setKeyPressed(false)
    }
  }

  const resizeHandler = () => {
    setKeyPressed(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])
  return keyPressed
}
