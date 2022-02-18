import React, { useState } from 'react'
// import { MainState } from '../../../App'

// interface IProps {
//   link: MainState
//   mainState: MainState
//   onClick(state: MainState): void
// }

// export const NAVlink: React.FC<IProps> = ({ link, mainState, onClick }) => {
//   const [hover, setHover] = useState(false)
//   const [isClicked, setIsClicked] = useState(false)

//   return (
//     <div
//       className={`flex cursor-pointer items-center justify-center  py-1`}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       onClick={() => {
//         setIsClicked(true)
//         setTimeout(() => setIsClicked(false), 1500)
//         if (mainState === link) {
//           return
//         }
//         setTimeout(() => {
//           onClick(MainState.MAIN)
//         }, 0)
//         setTimeout(() => {
//           onClick(link)
//         }, 600)
//       }}
//     >
//       <a
//         className={`text:xl select-none flex-row  rounded-md lowercase
//          outline-none transition-all md:text-2xl  ${
//            isClicked && 'animate-bounce'
//          }
//          ${
//            hover && 'animate-pusle'
//          }  cursor-pointer text-gray-800 hover:text-black `}
//         style={{
//           transform: `translateY(${hover ? -6 : 0}px)`,
//         }}
//       >
//         <div>{link}</div>
//       </a>
//     </div>
//   )
// }
