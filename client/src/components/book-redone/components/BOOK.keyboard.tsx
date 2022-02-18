import React from 'react'
import { useKeyCode } from '../../../utils/useKeyCode'
import { BOOKkey } from './BOOK.key'
import E from '../../../static/profiles/uk.png'
import useColor from '../../../hooks/useColor'
import useDarkMode from '../../../hooks/useDarkMode'

interface IProps {
  isLocalEng: boolean
  show: [boolean, boolean, boolean, boolean]
  handleShow: (show: 0) => void
  handleLanguage: () => void
}

export const BOOKkeyboard: React.FC<IProps> = ({
  isLocalEng,
  show,
  handleShow,
  handleLanguage,
}) => {
  // isLocalEng = false
  const isMac = true
  const row1: [string[], boolean][] = [
    [['~', '`'], useKeyCode(`Backquote`)],
    [isLocalEng ? [`!`, `1`] : [`!`, `1`], useKeyCode(`Digit1`)],
    [isLocalEng ? [`@`, `2`] : [`"`, `2`], useKeyCode(`Digit2`)],
    [isLocalEng ? [`#`, `3`] : [`№`, `3`], useKeyCode(`Digit3`)],
    [isLocalEng ? [`$`, `4`] : [`;`, `4`], useKeyCode(`Digit4`)],
    [isLocalEng ? [`%`, `5`] : [`%`, `5`], useKeyCode(`Digit5`)],
    [isLocalEng ? [`^`, `6`] : [`:`, `6`], useKeyCode(`Digit6`)],
    [isLocalEng ? [`&`, `7`] : [`?`, `7`], useKeyCode(`Digit7`)],
    [isLocalEng ? [`*`, `8`] : [`*`, `8`], useKeyCode(`Digit8`)],
    [isLocalEng ? [`(`, `9`] : [`(`, `9`], useKeyCode(`Digit9`)],
    [isLocalEng ? [`)`, `0`] : [`%`, `0`], useKeyCode(`Digit0`)],
    [[`—`, `-`], useKeyCode(`Minus`)],
    [[`+`, `=`], useKeyCode(`Equal`)],
    [isLocalEng ? [`Delete`] : [`Delete`], useKeyCode(`Backspace`)],
  ]

  const row2: [string[], boolean][] = [
    [[`Tab`], useKeyCode(`Tab`)],
    [isLocalEng ? [`Q`] : [`Й`], useKeyCode(`KeyQ`)],
    [isLocalEng ? [`W`] : [`Ц`], useKeyCode(`KeyW`)],
    [isLocalEng ? [`E`] : [`У`], useKeyCode(`KeyE`)],
    [isLocalEng ? [`R`] : [`К`], useKeyCode(`KeyR`)],
    [isLocalEng ? [`T`] : [`Е`], useKeyCode(`KeyT`)],
    [isLocalEng ? [`Y`] : [`Н`], useKeyCode(`KeyY`)],
    [isLocalEng ? [`U`] : [`Г`], useKeyCode(`KeyU`)],
    [isLocalEng ? [`I`] : [`Ш`], useKeyCode(`KeyI`)],
    [isLocalEng ? [`O`] : [`Щ`], useKeyCode(`KeyO`)],
    [isLocalEng ? [`P`] : [`З`], useKeyCode(`KeyP`)],
    [isLocalEng ? [`{`, `[`] : [`Х`], useKeyCode(`BracketLeft`)],
    [isLocalEng ? [`{`, `]`] : ['Ъ'], useKeyCode(`BracketRight`)],
    [[`|`, `\\`], useKeyCode(`Backslash`)],
  ]
  const row3: [string[], boolean][] = [
    [[isMac ? `Caps Lock` : `CapsLk`], useKeyCode(`CapsLock`)],
    [isLocalEng ? [`A`] : [`Ф`], useKeyCode(`KeyA`)],
    [isLocalEng ? [`S`] : [`Ы`], useKeyCode(`KeyS`)],
    [isLocalEng ? [`D`] : [`В`], useKeyCode(`KeyD`)],
    [isLocalEng ? [`F`] : [`А`], useKeyCode(`KeyF`)],
    [isLocalEng ? [`G`] : [`П`], useKeyCode(`KeyG`)],
    [isLocalEng ? [`H`] : [`Р`], useKeyCode(`KeyH`)],
    [isLocalEng ? [`J`] : [`О`], useKeyCode(`KeyJ`)],
    [isLocalEng ? [`K`] : [`Л`], useKeyCode(`KeyK`)],
    [isLocalEng ? [`L`] : [`Д`], useKeyCode(`KeyL`)],
    [isLocalEng ? [`:`, `;`] : [`Ж`], useKeyCode(`Semicolon`)],
    [isLocalEng ? [`"`, `'`] : [`Э`], useKeyCode(`Quote`)],
    [[isMac ? `Return` : `Enter`], useKeyCode(`Enter`)],
  ]
  const row4: [string[], boolean][] = [
    [[`Shift`], useKeyCode(`ShiftLeft`)],
    [isLocalEng ? [`Z`] : [`Я`], useKeyCode(`KeyZ`)],
    [isLocalEng ? [`X`] : [`Ч`], useKeyCode(`KeyX`)],
    [isLocalEng ? [`C`] : [`С`], useKeyCode(`KeyC`)],
    [isLocalEng ? [`V`] : [`М`], useKeyCode(`KeyV`)],
    [isLocalEng ? [`B`] : [`И`], useKeyCode(`KeyB`)],
    [isLocalEng ? [`N`] : [`Т`], useKeyCode(`KeyN`)],
    [isLocalEng ? [`M`] : [`Ь`], useKeyCode(`KeyM`)],
    [isLocalEng ? [`<`, `,`] : [`Б`], useKeyCode(`Comma`)],
    [isLocalEng ? [`>`, '.'] : [`Ю`], useKeyCode(`Period`)],
    [[`?`, `/`], useKeyCode(`Slash`)],
    [[`ShiftR`], useKeyCode(`ShiftRight`)],
  ]
  const row5: [string[], boolean][] = [
    [[``], useKeyCode(``)],

    [[`Control`], useKeyCode(`ControlLeft`)],
    [[`Option`], useKeyCode(`AltLeft`)],
    [[`Command`], useKeyCode(`MetaLeft`)],
    [[`Space`], useKeyCode(`Space`)],
    [[`Command`], useKeyCode(`MetaRight`)],
    [[`Option`], useKeyCode(`AltRight`)],
    [[``], useKeyCode(``)],
    [[``], useKeyCode(``)],
    [[``], useKeyCode(``)],
  ]

  const { themeColor1 } = useColor()

  const { isDarkMode } = useDarkMode()

  return (
    <div className={`flex  w-[980px] items-start justify-between  p-1 py-2`}>
      <div
        className={`flex cursor-pointer items-center justify-center rounded-full border ${
          isDarkMode ? `border-gray-300` : `border-gray-600`
        }`}
        onMouseDown={handleLanguage}
      >
        <img
          alt=""
          src={E}
          className={`${show[0] ? `h-[28px]` : `h-[30px]`} w-[30px]`}
        />
      </div>

      {show[0] && (
        <div
          className={` flex w-[1000px] flex-col items-center justify-center gap-[0.65rem] `}
        >
          <div className={`flex gap-2`}>
            {row1.map((el) => (
              <BOOKkey tag={el[0]} active={el[1]} />
            ))}
          </div>
          <div className={`flex gap-2`}>
            {row2.map((el) => (
              <BOOKkey tag={el[0]} active={el[1]} />
            ))}
          </div>
          <div className={`flex gap-2`}>
            {row3.map((el) => (
              <BOOKkey tag={el[0]} active={el[1]} />
            ))}
          </div>
          <div className={`flex gap-2`}>
            {row4.map((el) => (
              <BOOKkey tag={el[0]} active={el[1]} />
            ))}
          </div>
        </div>
      )}

      <div
        className={`flex ${
          show[0] ? `h-[28px]` : `h-[30px]`
        } w-[30px] cursor-pointer items-center justify-center rounded-full border ${
          isDarkMode ? `border-gray-300` : `border-gray-600`
        } ${isDarkMode ? themeColor1.bg.t700 : themeColor1.bg.t300}`}
        onMouseDown={() => handleShow(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5 19.992"
          width="20px"
          className={show[0] ? `rotate-180` : `translate-y-[2px] `}
        >
          <path
            d="M33.5 0v5.223L16.63 19.992 0 5.343V.12l16.63 12.908z"
            // fill="rgb(107 114 128)"
            className={isDarkMode ? `fill-gray-200` : ` fill-gray-900`}
          ></path>
        </svg>
      </div>
    </div>
  )
}

// import React from 'react'
// import { useKeyCode } from '../../../utils/useKeyCode'
// import { BOOKkey } from './BOOK.key'

// interface IProps {
//   isLocalEng: boolean
// }

// export const BOOKkeyboard: React.FC<IProps> = ({}) => {
//   let isLocalEng = false
//   const isMac = true
//   const row1: [string[], boolean][] = [
//     [['~', '`'], useKeyCode(`Backquote`)],
//     [isLocalEng ? [`!`, `1`] : [`!`, `1`], useKeyCode(`Digit1`)],
//     [isLocalEng ? [`@`, `2`] : [`"`, `2`], useKeyCode(`Digit2`)],
//     [isLocalEng ? [`#`, `3`] : [`№`, `3`], useKeyCode(`Digit3`)],
//     [isLocalEng ? [`$`, `4`] : [`;`, `4`], useKeyCode(`Digit4`)],
//     [isLocalEng ? [`%`, `5`] : [`%`, `5`], useKeyCode(`Digit5`)],
//     [isLocalEng ? [`^`, `6`] : [`:`, `6`], useKeyCode(`Digit6`)],
//     [isLocalEng ? [`&`, `7`] : [`?`, `7`], useKeyCode(`Digit7`)],
//     [isLocalEng ? [`*`, `8`] : [`*`, `8`], useKeyCode(`Digit8`)],
//     [isLocalEng ? [`(`, `9`] : [`(`, `9`], useKeyCode(`Digit9`)],
//     [isLocalEng ? [`)`, `0`] : [`%`, `0`], useKeyCode(`Digit0`)],
//     [[`—`, `-`], useKeyCode(`Minus`)],
//     [[`+`, `=`], useKeyCode(`Equal`)],
//     [isLocalEng ? [`Delete`] : [`Delete`], useKeyCode(`Backspace`)],
//   ]

//   const row2: [string[], boolean][] = [
//     [[`Tab`], useKeyCode(`Tab`)],
//     [isLocalEng ? [`Q`] : [`Й`], useKeyCode(`KeyQ`)],
//     [isLocalEng ? [`W`] : [`Ц`], useKeyCode(`KeyW`)],
//     [isLocalEng ? [`E`] : [`У`], useKeyCode(`KeyE`)],
//     [isLocalEng ? [`R`] : [`К`], useKeyCode(`KeyR`)],
//     [isLocalEng ? [`T`] : [`Е`], useKeyCode(`KeyT`)],
//     [isLocalEng ? [`Y`] : [`Н`], useKeyCode(`KeyY`)],
//     [isLocalEng ? [`U`] : [`Г`], useKeyCode(`KeyU`)],
//     [isLocalEng ? [`I`] : [`Ш`], useKeyCode(`KeyI`)],
//     [isLocalEng ? [`O`] : [`Щ`], useKeyCode(`KeyO`)],
//     [isLocalEng ? [`P`] : [`З`], useKeyCode(`KeyP`)],
//     [isLocalEng ? [`{`, `[`] : [`Х`], useKeyCode(`BracketLeft`)],
//     [isLocalEng ? [`{`, `]`] : ['Ъ'], useKeyCode(`BracketRight`)],
//     [isLocalEng ? [`|`, `\\`] : [``], useKeyCode(`Backslash`)],
//   ]
//   const row3: [string[], boolean][] = [
//     [[isMac ? `Caps Lock` : `CapsLk`], useKeyCode(`CapsLock`)],
//     [isLocalEng ? [`A`] : [`Ф`], useKeyCode(`KeyA`)],
//     [isLocalEng ? [`S`] : [`Ы`], useKeyCode(`KeyS`)],
//     [isLocalEng ? [`D`] : [`В`], useKeyCode(`KeyD`)],
//     [isLocalEng ? [`F`] : [`А`], useKeyCode(`KeyF`)],
//     [isLocalEng ? [`G`] : [`П`], useKeyCode(`KeyG`)],
//     [isLocalEng ? [`H`] : [`Р`], useKeyCode(`KeyH`)],
//     [isLocalEng ? [`J`] : [`О`], useKeyCode(`KeyJ`)],
//     [isLocalEng ? [`K`] : [`Л`], useKeyCode(`KeyK`)],
//     [isLocalEng ? [`L`] : [`Д`], useKeyCode(`KeyL`)],
//     [isLocalEng ? [`:`, `;`] : [`Ж`], useKeyCode(`Semicolon`)],
//     [isLocalEng ? [`"`, `'`] : [`Э`], useKeyCode(`Quote`)],
//     [[isMac ? `Return` : `Enter`], useKeyCode(`Enter`)],
//   ]
//   const row4: [string[], boolean][] = [
//     [[`Shift`], useKeyCode(`ShiftLeft`)],
//     [isLocalEng ? [`Z`] : [`Я`], useKeyCode(`KeyZ`)],
//     [isLocalEng ? [`X`] : [`Ч`], useKeyCode(`KeyX`)],
//     [isLocalEng ? [`C`] : [`С`], useKeyCode(`KeyC`)],
//     [isLocalEng ? [`V`] : [`М`], useKeyCode(`KeyV`)],
//     [isLocalEng ? [`B`] : [`И`], useKeyCode(`KeyB`)],
//     [isLocalEng ? [`N`] : [`Т`], useKeyCode(`KeyN`)],
//     [isLocalEng ? [`M`] : [`Ь`], useKeyCode(`KeyM`)],
//     [isLocalEng ? [`<`, `,`] : [`Б`], useKeyCode(`Comma`)],
//     [isLocalEng ? [`>`, '.'] : [`Ю`], useKeyCode(`Period`)],
//     [[`?`, `/`], useKeyCode(`Slash`)],
//     [[`ShiftR`], useKeyCode(`ShiftRight`)],
//   ]
//   const row5: [string[], boolean][] = [
//     [[``], useKeyCode(``)],

//     [[`Control`], useKeyCode(`ControlLeft`)],
//     [[`Option`], useKeyCode(`AltLeft`)],
//     [[`Command`], useKeyCode(`MetaLeft`)],
//     [[`Space`], useKeyCode(`Space`)],
//     [[`Command`], useKeyCode(`MetaRight`)],
//     [[`Option`], useKeyCode(`AltRight`)],
//     [[``], useKeyCode(``)],
//     [[``], useKeyCode(``)],
//     [[``], useKeyCode(``)],
//   ]

//   return (
//     <div
//       className={`mt-3 flex h-[350px] w-[1000px] flex-col items-center justify-center gap-[0.65rem]`}
//     >
//       <div className={`flex gap-2`}>
//         {row1.map((el) => (
//           <BOOKkey tag={el[0]} active={el[1]} />
//         ))}
//       </div>
//       <div className={`flex gap-2`}>
//         {row2.map((el) => (
//           <BOOKkey tag={el[0]} active={el[1]} />
//         ))}
//       </div>
//       <div className={`flex gap-2`}>
//         {row3.map((el) => (
//           <BOOKkey tag={el[0]} active={el[1]} />
//         ))}
//       </div>
//       <div className={`flex gap-2`}>
//         {row4.map((el) => (
//           <BOOKkey tag={el[0]} active={el[1]} />
//         ))}
//       </div>
//       <div className={`flex gap-2`}>
//         {row5.map((el) => (
//           <BOOKkey tag={el[0]} active={el[1]} />
//         ))}
//       </div>
//     </div>
//   )
// }
