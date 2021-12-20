import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKfunctionalButtons } from './buttons/BOOK.functionalButtons'

interface IProps {
  animationBook: boolean
  setAnimationBook(animation: boolean): void
  SUCCESS(): void
  punctuation: boolean
  caseSensitivity: boolean
  setCaseSensetivity(cs: boolean): void
  setPunctuation(p: boolean): void

  highlighter: boolean
  setHighlighter(turn: boolean): void
  STRING: string
  caps: boolean
  capsError: number
  running: boolean
  handleReset(): void
}

export const BOOKbuttons: React.FC<IProps> = ({
  animationBook,
  setAnimationBook,
  SUCCESS,

  setHighlighter,
  highlighter,
  STRING,
  punctuation,
  caseSensitivity,
  setCaseSensetivity,
  setPunctuation,
  caps,
  capsError,
  running,
  handleReset,
}) => {
  const [appear, setAppear] = useState(false)

  const chapter = useTypedSelector((state) => state.nav.chapter)

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 1000)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => {
      setAppear(false)
    }, 0)
    return () => clearTimeout(id)
  }, [chapter])

  const [hover, setHover] = useState(false)

  return (
    <div
      className="mt-10 z-10 flex flex-col justify-center items-center  bg-rd-200 select-none borde border-red-800  "
      style={{
        opacity: !appear ? '0' : '1',
        // maxWidth: '70%',
        // width: '1200px',
        width: '1000px',
        transition: '0.5s ease-in-out',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`opacity-${
          running && !hover ? 80 : 100
        } flex flex-col justify-center items-center  `}
        style={{ transition: '0.2s ease-in-out' }}
      >
        <div className="w-f flex flex-col justify-center  bg-rd-200 ">
          <BOOKfunctionalButtons
            setAnimationBook={setAnimationBook}
            animationBook={animationBook}
            setHighlighter={setHighlighter}
            highlighter={highlighter}
            punctuation={punctuation}
            setPunctuation={setPunctuation}
            caseSensitivity={caseSensitivity}
            setCaseSensetivity={setCaseSensetivity}
            caps={caps}
            capsError={capsError}
            handleReset={handleReset}
          />
        </div>
        <div
          className={`bg-red-200 my-4 `}
          style={{
            height: 1,
            width: '1000px',
            //  marginLeft: 92
          }}
        ></div>
      </div>
    </div>
  )
}
