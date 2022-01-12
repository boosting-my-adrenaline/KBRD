import React, { useState, useEffect } from 'react'
import {
  BOOKbuttonVisual,
  BOOKbuttonVisualFunctional,
} from './BOOK.buttonVisual'
import { BOOKcapsLockButton } from './BOOK.CapsLockButton'

interface IProps {
  setHighlighter(turn: boolean): void
  highlighter: boolean
  punctuation: boolean
  setPunctuation(value: boolean): void
  caseSensitivity: boolean
  setCaseSensetivity(value: boolean): void
  caps: boolean
  capsError: any
  handleReset(): void
}

export const BOOKfunctionalButtons: React.FC<IProps> = ({
  setHighlighter,
  highlighter,
  punctuation,
  setPunctuation,
  caseSensitivity,
  setCaseSensetivity,
  caps,
  capsError,
  handleReset,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true)
    }, 900)
    return () => clearTimeout(id)
  }, [])

  return (
    <div
      className={`z-10 flex-grow flex flex-row justify-start  items-center borde border-red-900 transition duration-500 ease`}
    >
      <div
        className={`-z-1 flex-grow flex flex-row justify-start items-center gap-4  borde border-red-500  transition  duration-700 delay-100 ease-in-out `}
        style={{
          transform: `rotateY(${show ? 0 : -90}deg) translateX(${
            show ? 0 : -500
          }px)`,
        }}
      >
        <BOOKbuttonVisual
          tag={'hightlighter'}
          onClick={setHighlighter}
          active={highlighter}
          hoverInfo={`turns on/off hightlighter`}
        />

        <BOOKbuttonVisual
          tag={`punctuation`}
          active={punctuation}
          onClick={setPunctuation}
          hoverInfo={`removes punctuation`}
        />
        <BOOKbuttonVisual
          tag={`case`}
          active={caseSensitivity}
          onClick={setCaseSensetivity}
          hoverInfo={`turns on/off case sensetivity`}
        />
        <div className={'flex-grow'}></div>

        <BOOKbuttonVisualFunctional title={`reset`} onClick={handleReset} />
        <div className={'px-2'}></div>

        <BOOKcapsLockButton caps={caps} capsError={capsError} />
      </div>
    </div>
  )
}
