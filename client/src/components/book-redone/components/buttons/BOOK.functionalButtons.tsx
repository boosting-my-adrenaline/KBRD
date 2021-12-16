import React, { useState, useEffect } from 'react'
import { BOOKarrowButton } from './BOOK.arrowButton'
import { BOOKbuttonVisual } from './BOOK.buttonVisual'
import { BOOKcapsLockButton } from './BOOK.CapsLockButton'

interface IProps {
  setAnimationBook(animation: boolean): void
  animationBook: boolean
  setHighlighter(turn: boolean): void
  highlighter: boolean
  punctuation: boolean
  setPunctuation(value: boolean): void
  caseSensitivity: boolean
  setCaseSensetivity(value: boolean): void
  caps: boolean
  capsError: any
}

export const BOOKfunctionalButtons: React.FC<IProps> = ({
  setAnimationBook,
  animationBook,
  setHighlighter,
  highlighter,
  punctuation,
  setPunctuation,
  caseSensitivity,
  setCaseSensetivity,
  caps,
  capsError,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(true)
    }, 700)
    return () => clearTimeout(id)
  }, [])

  return (
    <div
      className="z-10 flex-grow flex flex-row justify-start  items-center borde border-red-900"
      style={{
        transition: '0.5s ease',
        // paddingTop: 88,
        // transform: 'translateY(-37px)',
      }}
    >
      {/* <div className={`z-20 flex justify-center items-center `}>
        <BOOKarrowButton show={show} setShow={setShow} />
      </div> */}

      <div
        className=" flex-grow flex flex-row justify-start items-center gap-4  borde border-red-500 "
        style={{
          transition: '0.7s ease 0.1s all',
          zIndex: -1,
          transform: `rotateY(${show ? 0 : -90}deg) translateX(${
            show ? 0 : -500
          }px)`,
          // transform: `rotateY(${55}deg) translateX(${-1100}px)`,

          // transform: `translateX(${show ? 0 : -1100}px)`,
        }}
      >
        {/* <BOOKbuttonVisual
          tag={'smooth'}
          onClick={setAnimationBook}
          active={animationBook}
          disabled
          hoverInfo={`currently not working (soon)`}
        /> */}
        <BOOKbuttonVisual
          tag={'hightlighter'}
          onClick={setHighlighter}
          active={highlighter}
          hoverInfo={`turns on/off hightlighter`}
        />

        {/* <div
          className={`bg-red-200 mx-2`}
          style={{ height: 50, width: 1 }}
        ></div> */}

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
        <BOOKcapsLockButton caps={caps} capsError={capsError} />
      </div>
      {/* <div className={`z-20 flex justify-center items-center `}>
        <BOOKbas BAS={BAS} setBAS={setBAS} show={show} />
      </div> */}
    </div>
  )
}
