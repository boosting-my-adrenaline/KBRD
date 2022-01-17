import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { BOOKfunctionalButtons } from './buttons/BOOK.functionalButtons'

interface IProps {
  show: boolean
  punctuation: boolean
  caseSensitivity: boolean
  setCaseSensetivity(cs: boolean): void
  setPunctuation(p: boolean): void

  highlighter: boolean
  setHighlighter(turn: boolean): void
  caps: boolean
  capsError: number
  running: boolean
  handleReset(): void
}

export const BOOKbuttons: React.FC<IProps> = ({
  show,
  setHighlighter,
  highlighter,
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
    <>
      <div
        className={`mt-10 z-10 flex flex-col justify-center items-center  bg-rd-200 select-none borde border-red-800  w-1000px ${
          (appear && show) || `opacity-0`
        } transition duration-500 ease-in-out`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`${
            running && !hover && `opacity-80`
          }  flex flex-col justify-center items-center  transition duration-200 ease-in-out`}
        >
          <div className={`w-f flex flex-col justify-center  bg-rd-200 `}>
            <BOOKfunctionalButtons
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
          <div className={`bg-red-200 my-4 py w-1000px h-1px`}></div>
        </div>
      </div>
    </>
  )
}
