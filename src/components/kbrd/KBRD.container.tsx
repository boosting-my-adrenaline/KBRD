import React, { useState, useEffect, useRef } from 'react'
import { KBRD } from './KBRD'
import { KBRDlayout } from './KBRD.layout'
import { KEYS, letter1, letter2 } from '../../static/letters'

interface IHistoryOfFailed {
  desired: string
  pressed: string
  previous: string
}

export const KBRDContainer: React.FC = () => {
  const [STRING, setSTRING] = useState<string>('')

  const [keyDown, setKeyDown] = useState('')

  const rendersCount = useRef(0)

  const successAndFailedTypes = useRef(0)
  const failureTypes = useRef(0)
  const successTypes =
    successAndFailedTypes.current - failureTypes.current < 0
      ? 0
      : successAndFailedTypes.current - failureTypes.current
  const failureInARow = useRef(0)
  const streakRow = useRef(0)

  const failedTypeStatus = useRef(false)
  const escapeFailedTypeStatus = useRef(false)
  const failedTypesIndexes = useRef([] as number[])

  const historyOfFailed = useRef([] as IHistoryOfFailed[])

  const lastKey = useRef('')
  const prelastKey = useRef('')

  useEffect(() => {
    prelastKey.current = lastKey.current
  }, [keyDown])

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
    } else if (KEYS.includes(keyDown)) {
      lastKey.current = keyDown
    }
  }, [keyDown])

  function SUCCESS(): void {
    setSTRING((str) => str.substring(1) + str[0])
    successAndFailedTypes.current++
    failedTypesIndexes.current = failedTypesIndexes.current
      .map((el) => el + 1)
      .filter((el) => el <= 245)
    if (failedTypeStatus.current && !escapeFailedTypeStatus.current) {
      failedTypesIndexes.current = [...failedTypesIndexes.current, 1]
    }
    failedTypeStatus.current = false
    if (escapeFailedTypeStatus.current) {
      escapeFailedTypeStatus.current = false
    }
    if (failureInARow.current !== 0) {
      failureInARow.current = 0
    }
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
      escapeFailedTypeStatus.current = true
      failureTypes.current--
      streakRow.current = 0
    } else {
      streakRow.current = 0
    }

    if (failureInARow.current === 0) {
      failureInARow.current = 1
      failureTypes.current++
      historyOfFailed.current = [
        ...historyOfFailed.current,
        {
          desired: STRING[0] === ' ' ? 'Space' : STRING[0],
          pressed: keyDown === ' ' ? 'Space' : keyDown,
          previous: prelastKey.current,
        },
      ]
      console.log(historyOfFailed.current)

      failedTypeStatus.current = true
    }
  }

  return (
    <div className="flex flex-col justify-center align-center font-courier ">
      <div className="Lore m-10 p-2 flex flex-row gap-2 rounded-full bg-red-200">
        <button className="bg-green-500 p-3 rounded-full" onClick={SUCCESS}>
          SUCCESS
        </button>
        <button
          className="bg-green-500 p-3 rounded-full"
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              SUCCESS()
            }
          }}
        >
          x10
        </button>
        <button
          className="bg-green-500 p-3 rounded-full"
          onClick={() => {
            for (let i = 0; i < 100; i++) {
              SUCCESS()
            }
          }}
        >
          x100
        </button>
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          {rendersCount.current}
        </button>

        <div className="ml-auto">
          {/* <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            ROW:{failureInARow.current}
          </button>
          <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            STREAK:{streakRow.current}
          </button> */}

          <button>{'\u00A0'}</button>
          <button className="bg-green-500 p-3 rounded-full justify-self-end	">
            S:{successTypes}
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
          <button className="bg-purple-400 p-3 rounded-full justify-self-end	">
            {prelastKey.current === ''
              ? '\u00A0'.repeat(3)
              : prelastKey.current.length === 1
              ? '\u00A0' + prelastKey.current + '\u00A0'
              : prelastKey.current}
          </button>
        </div>
      </div>
      <div className="mt-12 md:mt-32 flex justify-center align-center">
        <KBRD STRING={STRING} overall={successAndFailedTypes.current} />
        <KBRDlayout failedTypesIndexes={failedTypesIndexes.current} />
      </div>
    </div>
  )
}
