import { handleBreakpoints } from '@mui/system'
import React, { useEffect, useState } from 'react'
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
  handleTest(): void
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
  handleTest,
}) => {
  const [hover, setHover] = useState(false)

  // useEffect(() => {
  //   setInterval(() => {
  //     handleTest()
  //     setHover(true)
  //     setHover(false)
  //   }, 1000)
  // }, [])

  return (
    <>
      <div
        className={`bg-rd-200 borde w-1000px z-10 mt-10 flex  select-none flex-col items-center justify-center  border-red-800 ${
          show || `opacity-0`
        } transition duration-500 ease-in-out`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`${
            running && !hover && `opacity-80`
          }  flex flex-col items-center justify-center  transition duration-200 ease-in-out`}
        >
          <div className={`w-f flex flex-col  justify-center `}>
            {/* <div onMouseDown={handleTest}>TEST</div> */}

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
          <div className={`py w-1000px px my-4 h-[1px] bg-red-200`}></div>
        </div>
      </div>
    </>
  )
}
