import React, { useState, useEffect, useRef } from 'react'
import { KBRD } from './KBRD'
import { KEYS, letter1, letter2 } from '../../static/letters'

export const KBRDContainer: React.FC = () => {
  const [STRING, setSTRING] = useState<string>('')

  const [keyDown, setKeyDown] = useState('')

  const rendersCount = useRef(0)

  const successTypes = useRef(0)
  const failureTypes = useRef(0)
  const failureInARow = useRef(0)
  const streakRow = useRef(0)

  const failureArray = useRef([null])

  const lastKey = useRef('')
  const capslockKey = useRef(false)

  useEffect(() => {
    rendersCount.current++
  })

  useEffect(() => {
    setSTRING(letter1)
  }, [])

  const handleEvent = (event: KeyboardEvent) => {
    const { key } = event
    if (KEYS.includes(key)) {
      setKeyDown(key)
      setKeyDown('')
    }
  }

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
    if (keyDown === STRING[0]) {
      SUCCESS()
    } else if (keyDown !== STRING[0] && KEYS.includes(keyDown)) {
      FAILURE()
    }
    if (keyDown === ' ') {
      lastKey.current = 'Space'
    } else if (keyDown === 'CapsLock') {
      capslockKey.current = !capslockKey.current
    } else if (KEYS.includes(keyDown)) {
      lastKey.current = keyDown
    }
  }, [keyDown])

  function SUCCESS(): void {
    setSTRING((str) => str.substring(1) + str[0])
    successTypes.current++
    failureInARow.current = 0
  }

  function FAILURE(): void {
    if (streakRow.current === 0 && keyDown === STRING[1]) {
      streakRow.current++
    } else if (streakRow.current === 1 && keyDown === STRING[2]) {
      streakRow.current++
    } else if (streakRow.current === 2 && keyDown === STRING[3]) {
      SUCCESS()
      SUCCESS()
      SUCCESS()
      SUCCESS()
      failureTypes.current--
      streakRow.current = 0
    } else {
      streakRow.current = 0
    }

    if (failureInARow.current === 0) {
      failureInARow.current = 1
      failureTypes.current++
    }
  }

  return (
    <div className="flex flex-col justify-center align-center font-courier">
      <div className="m-10 p-2 flex flex-row gap-2 rounded-full bg-red-200">
        <button className="bg-green-500 p-3 rounded-full" onClick={SUCCESS}>
          SUCCESS
        </button>
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          {rendersCount.current}
        </button>

        <div className="ml-auto">
          {capslockKey.current ? (
            <button className="bg-red-500 p-3 rounded-full justify-self-end	">
              CAPSLOCK
            </button>
          ) : null}
          <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            ROW:{failureInARow.current}
          </button>
          <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            STREAK:{streakRow.current}
          </button>
          <button>{'\u00A0'}</button>
          <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            S:{successTypes.current}
          </button>
          <button className="bg-red-500 p-3 rounded-full justify-self-end	">
            F:{failureTypes.current}
          </button>
          <button className="bg-purple-500 p-3 rounded-full justify-self-end	">
            {lastKey.current === ''
              ? '\u00A0'.repeat(3)
              : lastKey.current.length === 1
              ? '\u00A0' + lastKey.current + '\u00A0'
              : lastKey.current}
          </button>
        </div>
      </div>

      <KBRD STRING={STRING} />
    </div>
  )
}
