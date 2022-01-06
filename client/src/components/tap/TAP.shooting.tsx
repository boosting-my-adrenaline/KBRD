import React, { useState, useEffect, useRef } from 'react'
import { TAPshootingButtons } from './shooting/TAP.shooting.buttons'
import { TAPshootingModal } from './shooting/TAP.shooting.modal'
import { TAPshootingTimers } from './shooting/TAP.timers'
import { TAPtap } from './shooting/TAP.tap'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { useTypedSelector } from '../../hooks/useTypedSelector'

type CellsAmount = 7 | 19 | 29

export type KeyColor = 'red' | 'emerald' | 'cyan' | 'amber' | 'fuchsia' | 'pink'

export type KeyType = 'number' | 'letter' | 'punctuation'

export const TAPshooting: React.FC = () => {
  const [cells, setCells] = useState<Array<string | null>>(
    Array.from({ length: 29 }, (_, i) => null)
  )
  const [appear, setAppear] = useState(false)
  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 250)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 50)
    return () => clearTimeout(id)
  }, [chapter])

  const [missclicks, setMissclicks] = useState(0)

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleCloseModal = (): void => {
    setModalOpen(false)
    clearCells()
    setFuse(0)
    setNewGame(true)
  }

  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)

  const handleRunning = (): void => {
    if (!running) {
      setRunning(true)
    } else {
      setRunning(false)
    }
  }

  useEffect(() => {})

  const [newGame, setNewGame] = useState(true)

  useDidMountEffect(() => {
    setTimeout(() => {
      setNewGame(false)
    }, 150)
  }, [started])

  const handleOpenModal = (): void => {
    // setRunning(false)
    setStarted(false)
    setModalOpen(true)
    setMissclicks(0)

    setTimeout(() => handleCloseModal(), 1500)
  }

  const [lastKey, setLastKey] = useState('')
  // const [updater, setUpdater] = useState(0)
  const [fuse, setFuse] = useState(0)
  const [limit, setLimit] = useState(15)
  const [cellsAmount, setCellsAmount] = useState<CellsAmount>(29)
  const [typeCells, setTypeCells] = useState({
    numbers: true,
    letters: true,
    punctuation: false,
  })

  const handleSetTypeCells = (type: 1 | 2 | 3) => {
    if (type === 1) {
      setTypeCells((prev) => ({ ...prev, numbers: !prev.numbers }))
    } else if (type === 2) {
      setTypeCells((prev) => ({ ...prev, letters: !prev.letters }))
      // setTypeCells((prev) => ({ ...prev, letters: true }))
    } else if (type === 3) {
      setTypeCells((prev) => ({ ...prev, punctuation: !prev.punctuation }))
    }
  }

  useEffect(() => {
    setFuse(cells.filter((el) => el).length)
    if (limit >= 19 && cells.length !== 29) {
      setCellsAmount(29)
    } else if (limit < 19 && limit >= 7 && cells.length !== 19) {
      setCellsAmount(19)
    } else if (limit < 7 && cells.length !== 7) {
      setCellsAmount(7)
    }
  }, [limit])

  useEffect(() => {
    setCells((prev) => {
      let arr = prev
      let res: (string | null)[] = []
      for (let i = 0; i < cellsAmount; i++) {
        res.push(arr[i] || null)
      }
      return res
    })
  }, [cellsAmount])

  useEffect(() => {
    if (fuse >= limit) {
      handleOpenModal()
    }
  }, [fuse])

  const [intervalPush, setIntervalPush] = useState(700)
  const [tick, setTick] = useState(false)

  const handleTick = (): void => {
    setTick((prev) => !prev)
  }

  const alphabet1: string = '0123456789'
  const alphabet2: string = 'abcdefghijklmnopqrstuvwxyz'
  const alphabet3: string = `!@#$%^&*()-_=+[]{}:;'"/?.,<>`

  let n = typeCells.numbers ? alphabet1 : ''
  let p = typeCells.punctuation ? alphabet3 : ''
  let alphabet = alphabet2 + n + p

  const pushCell = (): void => {
    let res = false
    while (!res && fuse < limit) {
      let randN = Math.floor(Math.random() * cells.length)
      let s = Math.floor(Math.random() * alphabet.length)
      let randS = alphabet[s]

      if (!cells.includes(randS) && !cells[randN]) {
        setCells((prev) => {
          let arr = prev
          arr[randN] = randS
          return arr
        })
        res = true
        setFuse((prev) => prev + 1)
      }
    }
  }

  const removeCell = (char: string): void => {
    setCells((prev) => {
      let arr = prev
      arr[prev.indexOf(char)] = null
      return arr
    })
    setFuse((prev) => prev - 1)
  }

  const clearCells = (): void => {
    setCells((prev) => prev.map((el) => null))
  }

  const handleStart = (): void => {
    setStarted((prev) => !prev)
  }

  const handleEvent = (event: KeyboardEvent): void => {
    const { key } = event
    if (!key) return
    setLastKey('')
    setLastKey(key.toLowerCase())
  }

  useEffect(() => {
    if (lastKey !== '' && running && alphabet.includes(lastKey)) {
      if (cells.includes(lastKey)) {
        removeCell(lastKey)
      } else {
        setMissclicks((prev) => prev + 1)
      }
    }
    if (lastKey === ' ' && started == running) {
      handleStart()
    }
  }, [lastKey])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleEvent(e)
    })
    return () => {
      window.removeEventListener('keydown', (e) => {
        handleEvent(e)
      })
    }
  }, [])

  useEffect(() => {
    if (running && intervalPush > 50) {
      pushCell()
    }
  }, [tick])

  const [keyColor, setKeyColor] = useState<KeyColor>('red')

  return (
    <div
      className="flex flex-col "
      style={{
        transform: 'translateY(-30px)',
        transition: '1s ease',
        opacity: !appear ? '0' : '1',
        // marginTop: -50,
      }}
    >
      <>
        <TAPshootingModal
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
        />
        <TAPshootingTimers
          handleTick={handleTick}
          interval={running ? intervalPush : 100000}
        />
      </>
      {/* <button onClick={handleOpenModal}>TEST</button> */}
      {/* <h2>newGame: {newGame ? 1 : 0}</h2> */}

      <TAPshootingButtons
        limit={limit}
        setLimit={setLimit}
        running={running}
        handleStart={handleStart}
        intervalPush={intervalPush}
        setIntervalPush={setIntervalPush}
        pushCell={pushCell}
        started={started}
        keyColor={keyColor}
        setKeyColor={setKeyColor}
        typeCells={typeCells}
        handleSetTypeCells={handleSetTypeCells}
      />
      {/* <div
        style={{
          backgroundColor: 'lightgrey',
          width: 1100,
          height: 630,
          position: 'absolute',
          marginTop: 140,
          marginLeft: 411,
          clipPath:
            'polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%)',
        }}
      ></div> */}
      {/* <h1>mc: {missclicks}</h1> */}
      {/* <h1>fuse: {fuse}</h1> */}
      {/* <h1>clength: {cells.length}</h1>
      <h1>limit: {limit}</h1> */}
      {/* <h1>started? {started ? 1 : 0}</h1> */}
      {/* <h1>running? {running ? 1 : 0}</h1> */}
      <TAPtap
        keyColor={keyColor}
        handleStart={handleStart}
        cells={cells}
        missclicks={missclicks}
        bluring={!running && cells.filter((el) => el).length > 0}
        running={running}
        started={started}
        newGame={newGame}
        handleRunning={handleRunning}
      />
    </div>
  )
}
