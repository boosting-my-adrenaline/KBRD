import React, { useEffect, useState } from 'react'
// // import { Chapters, Directions } from '../../../types/nav'
// import { useKeyPress } from '../../../utils/useKeyPress'
// import ArrowLeftLogo from '../../../static/ArrowLeft.svg'
// import { useDidMountEffect } from '../../../utils/useDidMountEffect'

// interface IProps {
//   onClick(dir: Directions): void
//   chapter: Chapters
//   isOpened: boolean
//   colors: [string, string, string]
//   direction: 'right' | 'left'
// }

// export const NAVarrow: React.FC<IProps> = ({
//   onClick,
//   chapter,
//   isOpened,
//   colors,
//   direction,
// }) => {
//   const ArrowLeft: boolean = useKeyPress('ArrowLeft')
//   const ArrowRight: boolean = useKeyPress('ArrowRight')

//   const ArrowDown = direction === `left` ? ArrowLeft : ArrowRight

//   const [colorsSt, setColorsSt] = useState(colors)

//   const [ThemeColor, BorderColor, ShadowColor] = colorsSt
//   const mutatedThemeColor = () => {
//     let res = ThemeColor.split('')
//     res[res.length - 3] = '3'
//     return res.join('')
//   }

//   const [show, setShow] = useState(false)
//   const [hover, setHover] = useState(false)

//   useEffect(() => {
//     let id = setTimeout(() => {
//       if (
//         [
//           Chapters.BOOK,
//           Chapters.TAP,
//           Chapters.INFO,
//           Chapters.NOT_FOUND,
//         ].includes(chapter)
//       ) {
//         setShow(true)
//       }
//     }, 1300)

//     let id2 = setTimeout(() => setShow(false), 4000)

//     return () => {
//       clearTimeout(id)
//       clearTimeout(id2)
//     }
//   }, [])

//   useDidMountEffect(() => {
//     setShow(false)
//     let id = setTimeout(() => {
//       setShow(true)
//       setColorsSt(colors)
//     }, 2300)
//     if (
//       ![
//         Chapters.BOOK,
//         Chapters.TAP,
//         Chapters.INFO,
//         Chapters.NOT_FOUND,
//       ].includes(chapter)
//     ) {
//       clearTimeout(id)
//     }

//     let id2 = setTimeout(() => setShow(false), 4000)
//     return () => {
//       clearTimeout(id)
//       clearTimeout(id2)
//     }
//   }, [chapter])

//   useDidMountEffect(() => {
//     let id = setTimeout(() => {
//       if (ArrowDown) {
//         setShow(true)
//       }
//     })

//     let id2 = setTimeout(() => {
//       if (ArrowDown) {
//         setShow(false)
//       }
//     }, 1000)

//     return () => {
//       clearTimeout(id)
//       clearTimeout(id2)
//     }
//   }, [ArrowDown])

//   return (
//     <div
//       className={`absolute z-50 outline-none cursor-pointer invisible 135k:visible p-1  rounded-xl  transition duration-150  flex items-center justify-center
//       opacity-${show && !isOpened ? 100 : 0}`}
//       style={{
//         top: 400,
//         left: direction === 'left' ? 50 : '',
//         right: direction === 'right' ? 50 : '',
//         width: 55,
//         height: 55,

//         transition: '1s ease-in-out',
//       }}
//       onClick={() => onClick('LEFT' as Directions)}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <div
//         className={`absolute rounded-lg ${mutatedThemeColor} border ${BorderColor} ${
//           ArrowDown ? `shadow-4th` : `shadow-5th`
//         } ${ShadowColor} p-2 hover:bg-gray-100 `}
//         style={{
//           width: 55,
//           height: 55,
//           // boxShadow: ArrowDown
//           //   ? `1px 1px 4px 1px ${ShadowColor}`
//           //   : `4px 4px 11px 8px ${ShadowColor}`,
//           transition: '0.2s ease-in-out',
//           transform: `translateY(${hover ? -7 : 0}px)`,
//         }}
//       >
//         <img
//           alt="AL"
//           src={ArrowLeftLogo}
//           className={`w-10 h-10 z-10 transform ${
//             direction === 'right' ? '-rotate-180' : ``
//           }`}
//         />
//       </div>
//     </div>
//   )
// }
