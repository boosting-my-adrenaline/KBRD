import React, { useState, useEffect, useRef } from 'react'
import { KBRD } from './KBRD'
import { letter1, letter2 } from '../../static/letters'

export const KBRDContainer: React.FC = () => {
  const [STRING, setSTRING] = useState<string>('')

  const [keyDown, setKeyDown] = useState('')

  const rendersCount = useRef(0)

  useEffect(() => {
    rendersCount.current++
  })

  useEffect(() => {
    setSTRING(letter1)
  }, [])

  const handleEvent = (event: KeyboardEvent) => {
    const { key } = event
    setKeyDown(key)
    setKeyDown('')
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
      handleSuccess()
    }
  }, [keyDown])

  function handleSuccess(): void {
    setSTRING((str) => str.substring(1) + str[0])
  }

  return (
    <div className="flex flex-col font-courier">
      <div className="m-10 p-2 flex flex-row gap-2 rounded-full bg-red-200">
        <button
          className="bg-green-500 p-3 rounded-full"
          onClick={handleSuccess}
        >
          SUCCESS
        </button>
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          {rendersCount.current}
        </button>
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          {keyDown}
        </button>
      </div>

      <KBRD STRING={STRING} />
    </div>
  )
}
