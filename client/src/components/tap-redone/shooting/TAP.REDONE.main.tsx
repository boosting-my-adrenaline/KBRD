import { SettingsEthernet } from '@material-ui/icons'
import React, { useEffect, useState, useRef } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { TAPREDONEbuttons } from './buttons/TAP.REDONE.buttons'
import { TAPREDONEstats } from './TAP.REDONE.stats'
import { TAPREDONEtap } from './TAP.REDONE.tap'
import { TAPtimer } from './TAP.timer'

export type KeyColor = 'red' | 'emerald' | 'cyan' | 'amber' | 'fuchsia' | 'pink'

export enum State {
  STOP = `STOP`,
  RUN = `RUN`,
  PAUSE = `PAUSE`,
}

export enum AppearType {
  INTERVAL = `INTERVAL`,
  PREPARED = `PREPARED`,
}

interface IProps {
  demo: boolean
  trainingLanguage: boolean
}

export const TAPREDONEshooting: React.FC<IProps> = ({
  demo,
  trainingLanguage,
}) => {
  const success = useRef(0)
  const errors = useRef(0)

  const [missclicks, setMissclicks] = useState(0)

  // const [state, setState] = useLocalStorage(`TC-state`, State.STOP)
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

  const [cells, setCells] = useLocalStorage<(null | string)[]>(
    `TC-cells`,
    startingArray
  )
  const [keyDown, setKeyDown] = useState('')
  const [lastKey, setLastKey] = useState(``)
  const [limit, setLimit] = useLocalStorage(`TC-limit`, 18)
  const [limitMemory, setLimitMemory] = useLocalStorage(`TC-limit-memory`, 18)

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

  const [keyColor, setKeyColor] = useLocalStorage<KeyColor>(
    `TC-keyColor`,
    'red'
  )
  const [keyType, setKeyType] = useLocalStorage<[boolean, boolean, boolean]>(
    `TC-keyType`,
    [true, false, false]
  )

  const part1: string = trainingLanguage
    ? 'abcdefghijklmnopqrstuvwxyz'
    : 'абвгдежзийклмнопрстуфхцчшщъыьэюя'
  const part2: string = '0123456789'
  const part3: string = `!@#$%^&*()-_=+[]{}:;'"/?.,<>`

  let l = keyType[0] ? part1 : ''
  let n = keyType[1] ? part2 : ''
  let p = keyType[2] ? part3 : ''
  let alphabet = l + n + p

  const [maxLimit, setMaxLimit] = useState(25)
  const [lastRemoved, setLastRemoved] = useState(0)

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
    allowedIndexes = allowedIndexes.filter((el) => el !== lastRemoved)
    const allowedIndex =
      allowedIndexes[Math.floor(Math.random() * allowedIndexes.length)]

    // console.log(`allowedIndex: ${allowedIndex}`)
    setLastKey(randomChar)
    setCells((prev) =>
      prev.map((el, i) => (i === allowedIndex ? randomChar : el))
    )
  }

  const removeCell = (char: string) => {
    setLastRemoved(cells.indexOf(char))
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
    if (appearType === AppearType.PREPARED) return

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
    if (demo) return

    if (keyDown === ' ') handleStart()

    if (!KEYS.includes(keyDown) || state !== State.RUN) return

    if (cells.includes(keyDown)) {
      success.current++

      if (appearType === AppearType.PREPARED) {
        setIncreaser((prev) => prev + 1)
      }

      removeCell(keyDown)
    } else {
      errors.current++
      setMissclicks((prev) => prev + 1)
    }
  }, [keyDown])

  useDidMountEffect(() => {
    if (demo) {
      gameOver()
    }
  }, [demo])

  const handleEvent = (event: KeyboardEvent): void => {
    // event.preventDefault()
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
    window.addEventListener('keydown', handleEvent)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', handleEvent)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  const [appearType, setAppearType] = useLocalStorage<AppearType>(
    `TC-appear type`,
    AppearType.PREPARED
  )

  const [targets, setTargets] = useLocalStorage(`TC-targets`, 5)
  let Ptargets = targets - 1

  const [interval, setInterval] = useLocalStorage(`TC-interval`, 700)
  const [tick, setTick] = useState(true)

  const handleTick = () => {
    setTick((prev) => !prev)
  }
  const [increaser, setIncreaser] = useState(0)
  const [decreaser, setDecreaser] = useState(0)

  useDidMountEffect(() => {
    pushCell()
  }, [increaser])

  useDidMountEffect(() => {
    let randomChar = cells.filter((el) => el)[
      Math.floor(Math.random() * cells.filter((el) => el).length)
    ]
    removeCell(randomChar as string)
  }, [decreaser])

  useEffect(() => {
    clearCells()

    if (appearType === AppearType.INTERVAL) {
      setLimit(limitMemory)
      return
    } else {
      setLimitMemory(limit)
      setLimit(9)
    }
    if (state === State.RUN) {
      // setTest((prev) => prev + 10)
      for (let i = 0; i < targets; i++) {
        setIncreaser((prev) => prev + 1)
      }
    }
  }, [appearType])

  useEffect(() => {
    clearCells()

    if (appearType === AppearType.INTERVAL || state !== State.RUN) return
    for (let i = 0; i < targets; i++) {
      setIncreaser((prev) => prev + 1)
    }
  }, [state])

  useEffect(() => {
    if (appearType !== AppearType.PREPARED || state !== State.RUN) {
      return
    }
    if (cells.filter((el) => el).length < Ptargets) {
      setIncreaser((prev) => prev + 1)
    } else if (cells.filter((el) => el).length > targets) {
      setDecreaser((prev) => prev + 1)
    }
  }, [cells, targets])

  useDidMountEffect(() => {
    if (state !== State.RUN) return
    if (cells.filter((el) => el).length < targets) {
      setIncreaser((prev) => prev + 1)
    } else if (cells.filter((el) => el).length > targets) {
      // setDecreaser((prev) => prev + 1)
    }
  }, [targets])

  useEffect(() => {
    if (appearType === AppearType.PREPARED) return

    if (state === State.RUN && interval > 50) {
      pushCell()
    }
  }, [tick])

  const { isEng } = useLanguage()

  const swap = () => {
    let arr1 = 'abcdefghijklmnopqrstuvwxyz'
    let arr2 = 'абвгдежзийклмнопрстуфхчэшя'
    if (trainingLanguage) {
      setCells((prev) =>
        prev.map((el) => {
          if (arr1.includes(el as string)) {
            return arr2[arr1.indexOf(el as string)]
          } else {
            return null
          }
        })
      )
    } else {
      clearCells()
      // setStarted(false)
    }
  }

  useDidMountEffect(() => {
    swap()
  }, [trainingLanguage])

  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 ${
        isEng || `font-CourierC`
      }`}
    >
      <TAPREDONEbuttons
        demo={demo}
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
        appearType={appearType}
        setAppearType={setAppearType}
        targets={targets}
        setTargets={setTargets}
      />
      <TAPREDONEstats
        succesed={success.current}
        errors={errors.current}
        show={!demo}
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
        trainingLanguage={trainingLanguage}
      />
      <TAPtimer handleTick={handleTick} interval={interval} />
    </div>
  )
}
