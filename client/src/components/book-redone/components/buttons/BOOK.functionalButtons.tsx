import React, { useState, useEffect } from 'react'
import useLanguage from '../../../../hooks/useLanguage'
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
  fontW: boolean
  handleFW: () => void
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
  fontW,
  handleFW,
}) => {
  const [show, setShow] = useState(true)

  // useEffect(() => {
  //   let id = setTimeout(() => {
  //     setShow(true)
  //   }, 900)
  //   return () => clearTimeout(id)
  // }, [])

  const { isEng } = useLanguage()

  return (
    <div
      className={`borde ease z-10 flex flex-grow  flex-row items-center justify-start border-red-900 transition duration-500 ${
        isEng || `font-CourierC`
      }`}
    >
      <div
        className={`-z-1 borde flex flex-grow flex-row items-center justify-start  gap-4 border-red-500  transition  delay-100 duration-700 ease-in-out `}
        style={{
          transform: `rotateY(${show ? 0 : -90}deg) translateX(${
            show ? 0 : -500
          }px)`,
        }}
      >
        <BOOKbuttonVisual
          tag={isEng ? 'hightlighter' : `выделитель`}
          onClick={setHighlighter}
          active={highlighter}
        />
        <BOOKbuttonVisual
          tag={isEng ? `punctuation` : `пунктуация`}
          active={punctuation}
          onClick={setPunctuation}
        />
        <BOOKbuttonVisual
          tag={isEng ? `case` : `регистр`}
          active={caseSensitivity}
          onClick={setCaseSensetivity}
        />
        <BOOKbuttonVisual
          tag={isEng ? `A` : `A`}
          active={fontW}
          onClick={handleFW}
        />
        <div className={'flex-grow'}></div>
        <BOOKbuttonVisualFunctional
          title={isEng ? `reset` : `сброс`}
          onClick={handleReset}
        />
        <div className={'px-2'}></div>
        <BOOKcapsLockButton caps={caps} capsError={capsError} />
      </div>
    </div>
  )
}
