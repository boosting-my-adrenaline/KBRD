// import { InfoRounded } from '@material-ui/icons'
import React, { useState } from 'react'
// import useLocalStorage from '../../../../hooks/useLocalStorage'
// import { FadeText } from '../../../../utils/FadeText'
// import { PingingCircles } from './BOOK.pingingCircles'

// interface IProps {
//   CPM: number
//   avgCPM: number
// }

// export const BOOKstatsCPMWidget: React.FC<IProps> = ({ CPM, avgCPM }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isHovered2, setIsHovered2] = useState(false)
//   const [isHoveredCurrent, setIsHoveredCurrent] = useState(false)
//   const [isHoveredChapter, setIsHoveredChapter] = useState(false)

//   const [showType, setShowType] = useLocalStorage<`short` | `long`>(
//     `cpm-widget`,
//     'long'
//   )

//   // const accuracyValue =
//   //   currentAccuracy > 0
//   //     ? currentAccuracy === 1000
//   //       ? `999`
//   //       : `${currentAccuracy}`
//   //     : `000`

//   // const chapterAccuracy = Math.floor(((overall - fti.length) / overall) * 1000)

//   return (
//     <div className={`flex items-center justify-center`}>
//       <div
//         className={`borde z-10 flex flex-row rounded-xl border-black px-2 ${
//           (isHovered || isHovered2) && `bg-red-100`
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         CPM |{`\u00a0`}
//         {CPM === 0 ? (
//           <PingingCircles />
//         ) : (
//           <FadeText title={`${CPM}`} delay={[200, 600]} blink={CPM} />
//         )}
//         {`\u00a0`}
//         {showType === `short` ? `` : `c/min`}
//       </div>
//       {isHovered || isHovered2 ? (
//         <div
//           className={`w-340px h-260px shadow-10th  -translate-y-85px  absolute flex rounded-xl border border-red-500 bg-red-200 p-2 px-6`}
//           onMouseEnter={() => setIsHovered2(true)}
//           onMouseLeave={() => setIsHovered2(false)}
//         >
//           <div className={`w-f flex  justify-center`}>
//             {
//               <div className={`w-f flex  flex-col items-center`}>
//                 <div
//                   className={`w-f flex justify-center text-xl text-gray-900`}
//                 >
//                   characters per minute
//                 </div>
//                 <div
//                   className={`w-f mx-2 my-2 h-px rounded-full bg-red-400`}
//                 ></div>
//                 <div className={`w-f flex flex-col items-start gap-4`}>
//                   {/* ////////// */}
//                   {isHoveredChapter ? (
//                     <div className={`w-f flex items-center justify-center `}>
//                       {`\u00a0`}
//                       <div
//                         className={`w-270px h-0px translate-x-10px translate-y-5px absolute`}
//                         style={{
//                           borderBottom: '30px solid #fca5a5',
//                           borderLeft: '30px solid transparent',
//                         }}
//                       >
//                         <div
//                           className={`flex flex-row flex-nowrap items-center whitespace-nowrap`}
//                         >
//                           no pauses included
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className={` `}>
//                       <span className={`text-gray-800 `}>
//                         <InfoRounded
//                           className={`mr-2 text-blue-500`}
//                           style={{ width: 16, height: 16 }}
//                           onMouseEnter={() => setIsHoveredCurrent(true)}
//                           onMouseLeave={() => setIsHoveredCurrent(false)}
//                         />
//                         current: {` `}
//                       </span>
//                       <span className={`text-gray-800`}>
//                         {CPM === 0 ? (
//                           `to be defined`
//                         ) : (
//                           <>
//                             {CPM} {showType === 'long' && 'c/min'}
//                           </>
//                         )}
//                       </span>
//                     </div>
//                   )}
//                   {/* ///////////// */}
//                   {isHoveredCurrent ? (
//                     <div className={`w-f flex items-center justify-center `}>
//                       {`\u00a0`}
//                       <div
//                         className={`w-270px h-0px translate-x-10px translate-y-5px absolute`}
//                         style={{
//                           borderTop: '30px solid #fca5a5',
//                           borderLeft: '30px solid transparent',
//                         }}
//                       >
//                         <div
//                           style={{
//                             transform: 'translateY(-30px) translateX(16px)',
//                           }}
//                         >
//                           last 40 chars
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div>
//                       <span className={`text-gray-800 `}>
//                         <InfoRounded
//                           className={`mr-2 text-blue-500 `}
//                           style={{ width: 16, height: 16 }}
//                           onMouseEnter={() => {
//                             setIsHoveredChapter(true)
//                           }}
//                           onMouseLeave={() => setIsHoveredChapter(false)}
//                         />
//                         average: {` `}
//                       </span>
//                       <span className={`text-gray-800`}>
//                         {avgCPM === 0 ? (
//                           `to be defined`
//                         ) : (
//                           <>
//                             {avgCPM} {showType === 'long' && 'c/min'}
//                           </>
//                         )}
//                       </span>
//                     </div>
//                   )}
//                   {/* /////// */}
//                   <div className={`  w-f flex justify-center`}>
//                     <div className={`borde flex items-center justify-center `}>
//                       <div
//                         className={`cursor-pointer rounded-l-xl border-l border-t border-b  border-red-400 py-1   px-7 ${
//                           showType === `short`
//                             ? `bg-red-400 text-gray-900`
//                             : `bg-red-200`
//                         } transition duration-300 ease-in-out`}
//                         onMouseDown={() => setShowType(`short`)}
//                       >
//                         {CPM || 167}
//                       </div>
//                       <div
//                         className={`cursor-pointer rounded-r-xl border-r border-t border-b border-red-400 py-1 px-6 ${
//                           showType === `long`
//                             ? `bg-red-400 text-gray-900`
//                             : `bg-red-200`
//                         } transition duration-300 ease-in-out `}
//                         onMouseDown={() => setShowType(`long`)}
//                       >
//                         {CPM || 167} {` `} c/min
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             }
//           </div>
//         </div>
//       ) : null}
//     </div>
//   )
// }
