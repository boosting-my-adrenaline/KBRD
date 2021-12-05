import React, { useEffect, useState } from 'react'
// import { useDidMountEffect } from '../../../../utils/useDidMountEffect'
// import { BOOKbuttonVisual } from '../BOOK.buttonVisual'
// import {
//   hackString,
//   lowerAll,
//   moveString,
//   removePunctuation,
//   shuffle,
//   upperAll,
// } from './stringFormation'
// import { letter1, letter2, letter3, letter4 } from './strings'

// interface IProps {
//   // STRING: string
//   // setSTRING(string: string): void
//   // setCurrentString(string: string): void
//   overall: number
//   currentString: string
//   handleStringErase(str: string): void
//   handleStringNoErase(str: string): void
//   uppercase: boolean
// }

// export const BOOKstring: React.FC<IProps> = ({
//   // STRING,
//   // setSTRING,
//   // setCurrentString,
//   currentString,
//   handleStringErase,
//   handleStringNoErase,
//   overall,
//   uppercase,
// }) => {
//   const [now, setNow] = useState(currentString)

//   useDidMountEffect(() => {
//     handleStringManually(now, overall)
//   }, [now])

//   const [punctuation, setPunctuation] = useState(true)
//   const [caseSensitivity, setCaseSensetivity] = useState(true)

//   function handleStringManually(string: string, now: number) {
//     if (punctuation) {
//     }
//   }

//   const handleShuffle = () => {
//     if (!punctuation) {
//       return handleStringErase(removePunctuation(shuffle(now), overall))
//     }
//     handleStringErase(shuffle(now))
//   }

//   useDidMountEffect(() => {
//     if (!punctuation) {
//       return handleStringNoErase(removePunctuation(now, overall))
//     }
//     handleStringNoErase(now)
//   }, [punctuation])

//   useDidMountEffect(() => {
//     if (caseSensitivity) {
//       return handleStringNoErase(now)
//     }
//     if (!uppercase) {
//       handleStringNoErase(lowerAll(now))
//     }
//   }, [caseSensitivity])

//   return (
//     <div
//       className={`z-50 absolute text-xl transform -translate-y-20 flex gap-8`}
//     >
//       <button onMouseDown={() => setNow(letter1)}>1</button>
//       <button onMouseDown={() => setNow(letter2)}>2</button>
//       <button onMouseDown={() => setNow(letter3)}>3</button>
//       <button onMouseDown={() => setNow(letter4)}>4</button>
//       {/* <button onMouseDown={handleHackString}>HS</button> */}
//       <button onMouseDown={handleShuffle}>shuffle</button>

//       <BOOKbuttonVisual
//         tag={`punctuation`}
//         active={punctuation}
//         onClick={setPunctuation}
//       />
//       <BOOKbuttonVisual
//         tag={`case`}
//         active={caseSensitivity}
//         onClick={setCaseSensetivity}
//       />
//       {uppercase ? 1 : 0}

//       <div>Test</div>
//     </div>
//   )
// }
