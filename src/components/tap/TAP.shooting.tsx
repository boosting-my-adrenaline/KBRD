import React, { useState, useEffect, useRef } from 'react'
import { TAPshootingButtons } from './shooting/TAP.shooting.buttons'
import { TAPshootingModal } from './shooting/TAP.shooting.modal'
import { TAPshootingTimers } from './shooting/TAP.timers'
import { TAPtap } from './shooting/TAP.tap'
import { useDidMountEffect } from '../../utils/useDidMountEffect'

// type faze = 'on' | 'off'

type CellsAmount = 7 | 19 | 29

export type KeyColor = 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink'

export const TAPshooting: React.FC = () => {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz'

  const [cells, setCells] = useState<Array<string | null>>(
    Array.from({ length: 29 }, (_, i) => null)
  )
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAppear(true)
    }, 250)
  }, [])

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
    console.log('tryina')
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
        transition: '0.5s ease-in-out',
        opacity: !appear ? '0' : '1',
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
