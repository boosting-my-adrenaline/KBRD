import React, { useEffect, useState, useRef } from 'react'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { TAPREDONEbuttons } from './buttons/TAP.REDONE.buttons'
import { TAPREDONEtap } from './TAP.REDONE.tap'
import { TAPtimer } from './TAP.timer'

export type KeyColor = 'red' | 'emerald' | 'cyan' | 'amber' | 'fuchsia' | 'pink'

export enum State {
  STOP = `STOP`,
  RUN = `RUN`,
  PAUSE = `PAUSE`,
}

export const TAPREDONEshooting: React.FC = () => {
  const success = useRef(0)
  const errors = useRef(0)

  const [missclicks, setMissclicks] = useState(0)

  const [state, setState] = useState(State.STOP)
  const [started, setStarted] = useState(false)
  const [block, setBlock] = useState(false)

  const handleStart = () => {
    if (!block) {
      setStarted((prev) => !prev)
    }
  }

  const [startingArray, setStartingArray] = useState(
    Array.from({ length: 19 }, () => null)
  )

  const [cells, setCells] = useState<(null | string)[]>(startingArray)
  const [keyDown, setKeyDown] = useState('')
  const [lastKey, setLastKey] = useState(``)
  const [limit, setLimit] = useState(18)

  useEffect(() => {
    if (limit > 19 && cells.length <= 19) {
      setStartingArray(Array.from({ length: 29 }, () => null))
      setCells((prev) => [
        ...prev,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ])
    } else if (limit <= 19 && cells.length > 19) {
      setStartingArray(Array.from({ length: 19 }, () => null))
      setCells((prev) => prev.filter((_, i) => i < 19))
    }
  }, [limit])

  const [keyColor, setKeyColor] = useState<KeyColor>('red')
  const [keyType, setKeyType] = useState<[boolean, boolean, boolean]>([
    true,
    false,
    false,
  ])

  const part1: string = 'abcdefghijklmnopqrstuvwxyz'
  const part2: string = '0123456789'
  const part3: string = `!@#$%^&*()-_=+[]{}:;'"/?.,<>`

  let l = keyType[0] ? part1 : ''
  let n = keyType[1] ? part2 : ''
  let p = keyType[2] ? part3 : ''
  let alphabet = l + n + p

  const [maxLimit, setMaxLimit] = useState(25)

  useEffect(() => {
    if (alphabet.length >= 29) {
      setMaxLimit(29)
    } else {
      setMaxLimit(alphabet.length)
    }
  }, [keyType])

  const pushCell = () => {
    let allowed = alphabet
      .split('')
      .filter((el) => !cells.includes(el) && el !== lastKey)

    if (allowed.length < 1) {
      gameOver()
      return
    }

    let randomNumber = Math.floor(allowed.length * Math.random())
    let randomChar = allowed[randomNumber]

    let allowedIndexes: number[] = []

    cells.forEach((el, i) => !el && allowedIndexes.push(i))
    const allowedIndex =
      allowedIndexes[Math.floor(Math.random() * allowedIndexes.length)]

    // console.log(`allowedIndex: ${allowedIndex}`)
    setLastKey(randomChar)
    setCells((prev) =>
      prev.map((el, i) => (i === allowedIndex ? randomChar : el))
    )
  }

  const removeCells = (char: string) => {
    setCells((prev) => prev.map((el) => (el === char ? null : el)))
  }

  const gameOver = () => {
    setState(State.STOP)
    setStarted(false)
    clearCells()
  }

  const clearCells = () => {
    setCells(startingArray)
  }

  useDidMountEffect(() => {
    if (
      cells.filter((el) => el).length >= limit ||
      cells.filter((el) => !el).length < 1
    ) {
      gameOver()
    }
  }, [cells])

  const handleKeyTypes = (type: 1 | 2 | 3) => {
    if (type === 1) {
      if (!keyType[1] && !keyType[2]) return
      setKeyType((prev) => [!prev[0], prev[1], prev[2]])
    } else if (type === 2) {
      if (!keyType[0] && !keyType[2]) return
      setKeyType((prev) => [prev[0], !prev[1], prev[2]])
    } else if (type === 3) {
      if (!keyType[1] && !keyType[0]) return
      setKeyType((prev) => [prev[0], prev[1], !prev[2]])
    }
  }

  const KEYS = (part1 + part2 + part3).split('')

  useDidMountEffect(() => {
    if (keyDown === ' ') handleStart()

    if (!KEYS.includes(keyDown) || state !== State.RUN) return ////////////
    // if (!KEYS.includes(keyDown)) return ////////////

    if (cells.includes(keyDown)) {
      success.current++
      removeCells(keyDown)
    } else {
      errors.current++
      setMissclicks((prev) => prev + 1)
    }
  }, [keyDown])

  const handleEvent = (event: KeyboardEvent): void => {
    if (event.key === ' ') {
      setSpaceDown(true)
    }
    setKeyDown('')
    setKeyDown(event.key.toLowerCase())
  }

  const [spaceDown, setSpaceDown] = useState(false)

  const upHandler = (event: KeyboardEvent): void => {
    if (event.key === ' ') {
      setSpaceDown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleEvent(e)
    })
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', (e) => {
        handleEvent(e)
      })
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  const [interval, setInterval] = useState(700)
  const [tick, setTick] = useState(true)

  const handleTick = () => {
    setTick((prev) => !prev)
  }

  useEffect(() => {
    if (state === State.RUN && interval > 50) {
      pushCell()
    }
  }, [tick])

  return (
    <div className={`flex flex-col items-center justify-center gap-10`}>
      <TAPREDONEbuttons
        state={state}
        handleStart={handleStart}
        interval={interval}
        setInterval={setInterval}
        keyColor={keyColor}
        setKeyColor={setKeyColor}
        keyType={keyType}
        handleKeyType={handleKeyTypes}
        limit={limit}
        setLimit={setLimit}
        spaceDown={spaceDown}
        started={started}
        maxLimit={maxLimit}
      />
      <TAPREDONEtap
        cells={cells}
        state={state}
        limit={limit}
        missclicks={missclicks}
        handleStart={handleStart}
        keyColor={keyColor}
        started={started}
        setState={setState}
        block={block}
        setBlock={setBlock}
      />
      <TAPtimer handleTick={handleTick} interval={interval} />
    </div>
  )
}
