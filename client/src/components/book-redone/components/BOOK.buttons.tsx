import { handleBreakpoints } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { BOOKfunctionalButtons } from './buttons/BOOK.functionalButtons'

interface IProps {
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
  fontW: boolean
  handleFW: () => void
  pointer: boolean
  setPointer: (pointer: boolean) => void
}

export const BOOKbuttons: React.FC<IProps> = ({
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
  fontW,
  handleFW,
  pointer,
  setPointer,
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
        className={`bg-rd-200  w-1000px z-10 flex select-none  flex-col items-center justify-center transition duration-500 ease-in-out`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`${
            running && !hover && `opacity-80`
          } flex  w-full flex-col items-center justify-center  transition duration-200 ease-in-out`}
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
              fontW={fontW}
              handleFW={handleFW}
              pointer={pointer}
              setPointer={setPointer}
            />
          </div>
          {/* <div className={`py w-1000px px my-3 h-[1px] bg-emerald-200`}></div> */}
        </div>
      </div>
    </>
  )
}
