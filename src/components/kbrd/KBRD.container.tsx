import React, { useState, useEffect, useRef } from 'react'
import { KBRD } from './KBRD'
import { letter1, letter2 } from '../../static/letters'
import { shuffleArray } from '../../utils/shuffleArray'

// const test1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

export const KBRDContainer: React.FC = () => {
  const [STRING, setSTRING] = useState<string>('')
  const [test, setTest] = useState(0)

  const [keyDown, setKeyDown] = useState('')

  const rendersCount = useRef(1)

  useEffect(() => {
    setSTRING(letter1)
  }, [])

  useEffect(() => {
    rendersCount.current++
  })

  useEffect(() => {
    const keyPressHandler = (
      e: React.KeyboardEvent<HTMLImageElement>
    ): void => {
      e.preventDefault()
      if (e.key === 'Shift') {
        return
      }
      setKeyDown('')
      setKeyDown(e.key)
      // if (e.key === STRING[0]) {
      //   handleSuccess()
      // }
    }

    document.addEventListener('keydown', keyPressHandler)
    return () => {
      document.removeEventListener('keydown', keyPressHandler)
    }
  }, [])

  useEffect(() => {
    if (keyDown === STRING[0]) {
      handleSuccess()
    }
  }, [keyDown])

  function handleSuccess(): void {
    setSTRING((str) => {
      let inter = str.split('')
      let a = inter[0]
      for (let i = 0; i < str.length - 1; i++) {
        inter[i] = str[i + 1]
      }
      inter[inter.length - 1] = a
      return inter.join('')
    })
    setTest((test) => test + 1)
  }

  const FIRST: string = STRING.slice(0, 1)
  const RIGHT: string = STRING.slice(1, 35)
  const RIGHT1: string = STRING.slice(35, 105)
  const RIGHT2: string = STRING.slice(105, 175)
  const RIGHT3: string = STRING.slice(175, 245)
  const LEFT: string = STRING.slice(-35)
  const LEFT1: string = STRING.slice(-105, -35)
  const LEFT2: string = STRING.slice(-175, -105)
  const LEFT3: string = STRING.slice(-245, -175)

  useEffect(() => {
    console.log(STRING.length)
    console.log('FIRST', FIRST)
    console.log('RIGHT', RIGHT)
    console.log('RIGHT1', RIGHT1)
    console.log('RIGHT2', RIGHT2)
    console.log('RIGHT3', RIGHT3)
    console.log('LEFT', LEFT)
    console.log('LEFT1', LEFT1)
    console.log('LEFT2', LEFT2)
    console.log('LEFT3', LEFT3)
  }, [STRING])

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

      <KBRD
        FIRST={FIRST}
        RIGHT={RIGHT}
        RIGHT1={RIGHT1}
        RIGHT2={RIGHT2}
        RIGHT3={RIGHT3}
        LEFT={LEFT}
        LEFT1={LEFT1}
        LEFT2={LEFT2}
        LEFT3={LEFT3}
      />
    </div>
  )
}
