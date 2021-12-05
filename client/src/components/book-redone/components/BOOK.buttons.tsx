import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKbuttonVisual } from './BOOK.buttonVisual'
import { hackString } from './strings/stringFormation'

interface IProps {
  animationBook: boolean
  setAnimationBook(animation: boolean): void
  SUCCESS(): void
  // lastKey: {
  //   current: string
  // }
  // successTypes: number
  // failureTypes: {
  //   current: number
  // }
  // successAndFailedTypes: {
  //   current: number
  // }
  // failedTypesIndexes: {
  //   current: number[]
  // }
  highlighter: boolean
  setHighlighter(turn: boolean): void
  STRING: string
  // caps: boolean
  // shift: boolean
}

export const BOOKbuttons: React.FC<IProps> = ({
  animationBook,
  setAnimationBook,
  SUCCESS,
  // lastKey,
  // successTypes,
  // failureTypes,
  // successAndFailedTypes,
  // failedTypesIndexes,
  setHighlighter,
  highlighter,
  STRING,
  // caps,
  // shift,
}) => {
  const [appear, setAppear] = useState(false)

  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 700)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    setTimeout(() => {
      setAppear(false)
    }, 0)
  }, [chapter])

  return (
    <div
      className=" mx-60 mt-40 p-2 flex flex-row gap-2 rounded-full bg-red-00"
      style={{
        transform: 'translateY(-135px)',
        opacity: !appear ? '0' : '1',
        transition: '0.5s ease-in-out',
      }}
    >
      {}
      <BOOKbuttonVisual
        tag={'animation'}
        onClick={setAnimationBook}
        active={animationBook}
      />
      <BOOKbuttonVisual
        tag={'hightlighter'}
        onClick={setHighlighter}
        active={highlighter}
      />
      {/* <BOOKbuttonVisual tag={'CAPS'} onClick={setHighlighter} active={caps} /> */}
      {/* <BOOKbuttonVisual tag={'SHIFT'} onClick={setHighlighter} active={shift} /> */}
      <button
        className="bg-blue-300 p-3 rounded-full justify-self-end	outline-none transition"
        onMouseDown={() => {
          for (let i = 0; i < 10; i++) {
            SUCCESS()
          }
        }}
      >
        x10
      </button>
      <button
        className="bg-blue-300 p-3 rounded-full justify-self-end	outline-none transition"
        onMouseDown={() => {
          for (let i = 0; i < 100; i++) {
            SUCCESS()
          }
        }}
      >
        x100
      </button>
      S:{STRING[0]}
      <div onMouseDown={() => console.log(hackString())}>XDD</div>
      {/* <div className=" ml-auto">
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          FTI:{[...failedTypesIndexes.current].join('-')}
        </button>
        <button className="bg-green-500 p-3 rounded-full justify-self-end	">
          OA:{successAndFailedTypes.current}
        </button>
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
      </div> */}
    </div>
  )
}
