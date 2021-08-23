import React, { useState, useEffect, useRef } from 'react'
import { KBRD } from './KBRD'
import { letter1, letter2 } from '../../static/letters'

// const test1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

export const KBRDContainer: React.FC = () => {
  const [STRING, setSTRING] = useState<string>('')
  const [test, setTest] = useState(0)

  const [keyDown, setKeyDown] = useState('')

  const rendersCount = useRef(0)

  useEffect(() => {
    rendersCount.current++
  })

  useEffect(() => {
    setSTRING(letter1)
    // function keyListener(e: React.KeyboardEvent) {
    //   e.preventDefault()
    //   if (e.key === 'Shift') {
    //     return
    //   }
    //   setKeyDown('')
    //   setKeyDown(e.key)
    // }

    document.addEventListener(
      'keydown',
      (e) => {
        e.preventDefault()
        if (e.key === 'Shift') {
          return
        }
        // setKeyDown('')
        setKeyDown(e.key)
        console.log(e.key)
        if (e.key === STRING[0]) {
          setSTRING((str) => {
            let inter = str.split('')
            let a = inter[0]
            for (let i = 0; i < str.length - 1; i++) {
              inter[i] = str[i + 1]
            }
            inter[inter.length - 1] = a
            return inter.join('')
          })
        }
        // setKeyDown('')
      },
      false
    )
    return () => {
      document.removeEventListener(
        'keydown',
        (e) => {
          e.preventDefault()
          if (e.key === 'Shift') {
            return
          }
          setKeyDown('')
          setKeyDown(e.key)
        },
        false
      )
    }
  }, [])

  useEffect(() => {
    if (keyDown === STRING[0]) {
      handleSuccess()
    }
    setKeyDown('')
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
    // setTest((test) => test + 1)
  }

  return (
    <div className="flex flex-col font-courier">
      <div className="m-10 p-2 flex flex-row gap-2 rounded-full bg-red-200">
        <button
          className="bg-green-500 p-3 rounded-full"
          // onClick={handleSuccess}
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
