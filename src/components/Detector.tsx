import React, { useEffect, useState } from 'react'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { useKeyPress } from '../utils/useKeyPress'

interface IProps {
  // caps: boolean
  // language: 'rus' | 'eng'
  setCaps(caps: boolean): void
  setShift(shift: boolean): void
  // setLanguage(language: 'rus' | 'eng'): void
}

export const Detector: React.FC<IProps> = ({
  // caps,
  // language,
  setCaps,
  setShift,
  // setLanguage,
}) => {
  const [keyDown, setKeyDown] = useState('')
  const [keyUp, setKeyUp] = useState('')

  const caps = useKeyPress('CapsLock')
  const shift = useKeyPress('Shift')

  useDidMountEffect(() => {
    setCaps(caps)
  }, [caps])

  useDidMountEffect(() => {
    setShift(shift)
  }, [shift])

  return <> </>
}
