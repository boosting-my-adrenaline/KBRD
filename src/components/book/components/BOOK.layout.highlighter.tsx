import React, { useEffect, useRef, useState } from 'react'
// import { Chapters } from '../../../types/nav'
// import { FadeText } from '../../../utils/FadeText'
// import { useDidMountEffect } from '../../../utils/useDidMountEffect'
// import {
//   formationForLEFT1,
//   formationForLEFT2,
//   formationForLEFT3,
//   formationForRIGHTLayout,
// } from '../book-utils/stringFormation'

// interface IProps {
//   failedTypesIndexes: number[]
//   STRING: string
//   overall: number
//   animation: boolean
//   currentString: string
//   chapter: Chapters
//   show: boolean
// }

// export const BOOKLayoutHighlighter: React.FC<IProps> = ({
//   STRING,
//   overall,
//   animation,
//   currentString,
//   chapter,
//   failedTypesIndexes,
//   show,
// }) => {
//   // const rawFIRST: string = STRING.slice(0, 1)
//   // const rawRIGHT: string = STRING.slice(0, 35)
//   // const rawRIGHT1: string = STRING.slice(35, 105)
//   // const rawRIGHT2: string = STRING.slice(105, 175)
//   // const rawRIGHT3: string = STRING.slice(175, 245)
//   // const rawLEFT: string = STRING.slice(-35)
//   // const rawLEFT1: string = STRING.slice(-105, -35)
//   // const rawLEFT2: string = STRING.slice(-175, -105)
//   // const rawLEFT3: string = STRING.slice(-245, -175)

//   const [ts, setTs] = useState(0)
//   const [appear, setAppear] = useState(false)

//   useDidMountEffect(() => {
//     setAppear(show)
//   }, [show])

//   useEffect(() => {
//     let id = setTimeout(() => {
//       setAppear(true)
//     }, 500)
//     return () => clearTimeout(id)
//   }, [])

//   useDidMountEffect(() => {
//     setTimeout(() => {
//       setAppear(false)
//     }, 0)
//   }, [chapter])

//   const [extraAppear, setExtraAppear] = useState(true)

//   useDidMountEffect(() => {
//     setExtraAppear(false)
//     let id = setTimeout(() => setExtraAppear(true), 500)
//     return () => {
//       clearTimeout(id)
//       setExtraAppear(true)
//     }
//   }, [currentString])

//   useEffect(() => {
//     setTs(() => 0 - 14.414 * (overall + 1))
//   }, [STRING])

//   const RIGHT1: string =
//     '\u00A0'.repeat(overall) + currentString.slice(34 + overall, 106 + overall)
//   const RIGHT2: string =
//     '\u00A0'.repeat(overall) + currentString.slice(104 + overall, 176 + overall)
//   const RIGHT3: string =
//     '\u00A0'.repeat(overall) + currentString.slice(174 + overall, 246 + overall)

//   const RIGHT: string = formationForRIGHTLayout(overall, currentString)
//   const LEFT1: string = formationForLEFT1(overall, currentString)
//   const LEFT2: string = formationForLEFT2(overall, currentString)
//   const LEFT3: string = formationForLEFT3(overall, currentString)

//   const formating = (str: string) => {
//     return (
//       str
//         .split('')
//         // .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
//         .map((el) =>
//           el === ' ' ? (
//             <div className="select-none bg-red-100">
//               {'\u00A0'}
//               {/* {el} */}
//             </div>
//           ) : (
//             <div className="select-none bg-red-200">
//               {'\u00A0'}
//               {/* {el} */}
//             </div>
//           )
//         )
//     )
//   }

//   const rowing = (str: string) => {
//     return <div className="w-full flex flex-row ">{formating(str)}</div>
//   }

//   return (
//     <div
//       className="absolute invisible z-30 border-5 border-grey-900 rounded-xl"
//       style={{
//         opacity: appear && extraAppear ? 1 : 0,
//         transition: '0.75s ease',
//         transform: 'translateX(0px)',
//       }}
//     >
//       <div
//         className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4  "
//         style={{
//           transform: `translateX(${ts}px)`,
//           transition: animation && appear ? '0.25s ease 0.0s' : '',
//           // boxShadow: '5px 5px 10px 10px rgba(0,0,0,1)',
//           // paddingLeft: `${-ts}px`,
//         }}
//       >
//         {rowing(LEFT3)}
//         {rowing(LEFT2)}
//         {rowing(LEFT1)}

//         <div className="flex flex-row">{rowing(RIGHT)}</div>

//         {rowing(RIGHT1)}
//         {rowing(RIGHT2)}
//         {rowing(RIGHT3)}
//       </div>
//     </div>
//   )
// }
