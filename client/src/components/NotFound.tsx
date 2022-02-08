// import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
// import { isTemplateSpan } from 'typescript'
// import { useTypedSelector } from '../hooks/useTypedSelector'
// import { useDidMountEffect } from '../utils/useDidMountEffect'

// export const NotFound: React.FC = ({}) => {
//   const [appear, setAppear] = useState(false)
//   // const chapter = useTypedSelector((state) => state.nav.chapter)

//   useEffect(() => {
//     let id = setTimeout(() => {
//       setAppear(true)
//     }, 300)

//     return () => {
//       clearTimeout(id)
//     }
//   }, [])

//   useDidMountEffect(() => {
//     let id = setTimeout(() => {
//       setAppear(false)
//     }, 250)

//     return () => {
//       clearTimeout(id)
//     }
//   }, [chapter])

//   const items = `404 NOT FOUND`
//     .split(``)
//     .map((el) => (el === ` ` ? `\u00a0` : el))

//   const [turn, setTurn] = useState(0)

//   useEffect(() => {
//     let id = setTimeout(() => setTurn(1), 1500)
//   }, [])

//   return (
//     <div
//       className={`mt-24 z-20 translate-y-0 ${
//         appear || `opacity-0`
//       } transition duration-300 ease-in-out`}
//     >
//       <motion.div className={`flex `}>
//         {items.map((el, i) => (
//           <motion.div
//             initial={{ y: -500 }}
//             animate={{ y: turn ? 250 : 0 }}
//             transition={{ delay: 0.3 + i * 0.05 }}
//             // whileHover={{ scale: 2 }}
//             key={i}
//             className={`font-courier text-gray-800`}
//             style={{ fontSize: `7rem` }}
//           >
//             {el}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }
