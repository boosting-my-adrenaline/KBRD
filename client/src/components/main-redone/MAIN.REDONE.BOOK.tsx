import MainBook2 from '../../static/mainbook2.svg'
import { MAINBOOKinside } from './MAIN.BOOK.inside'
import svgbook2 from '../../static/svgbook2.svg'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { MainState } from '../../App'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  trainingLanguage: boolean
}
export const MAINREDONEbook: React.FC<IProps> = ({
  mainState,
  setMainState,
  trainingLanguage,
}) => {
  const keybs: [string, number][] = [
    ['B', 2],
    ['O', 4],
    ['O', 3],
    ['K', 1],
  ]

  const keyb = (char: string, i: number) => (
    <motion.div
      key={i}
      initial={{
        y: -400,
        // width: 64,
        // height: 64,
      }}
      animate={{ y: 0 }}
      transition={{ delay: 0.9 + i * 0.2 }}
      className={`flex items-center justify-center`}
    >
      <motion.div
        initial={{
          fontSize: `3.4em`,
          width: 64,
          height: 64,
        }}
        // whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
        animate={{ y: !transformation ? 0 : -700 }}
        transition={{ delay: i * 0.1 + 0.15 }}
        className={`font-courier  py shadow-4th flex items-center justify-center rounded-xl border-2 border-gray-800 bg-red-200 text-gray-800 shadow-gray-500`}
      >
        {char}
      </motion.div>
    </motion.div>
  )

  const [transformation, setTransformation] = useState(false)

  const [card, setCard] = useState<`sm` | `md` | `lg`>()

  useDidMountEffect(() => {
    if (mainState === MainState.BOOK) {
      setTransformation(true)
    } else {
      setTransformation(false)
    }
  }, [mainState])

  const handleOnClick = () => {
    setMainState(MainState.BOOK)
  }

  // const handleOnClick = () => {
  //   setMainState(MainState.MAIN)
  //   setTimeout(() => setMainState(MainState.BOOK), 1200)
  // }

  return (
    <motion.div
      initial={{
        y: `-300%`,
        minHeight: 400,
        position: 'absolute',
        borderRadius: 20,
      }}
      animate={
        mainState === MainState.MAIN
          ? {
              y: `0%`,
              x: `-55%`,
              width: `32%`,
              height: `70%`,
              position: 'absolute',
            }
          : mainState === MainState.TAP
          ? {
              y: `0%`,
              x: `-355%`,
              width: `22%`,
              height: `40%`,
              position: 'absolute',
            }
          : mainState === MainState.INFO
          ? {
              y: `-27%`,
              x: `-120%`,
              width: `32%`,
              height: `70%`,
              scale: 0.5,
              position: 'absolute',
            }
          : {
              width: `100%`,
              height: `100%`,
              x: `0%`,
              y: `0%`,
              position: 'absolute',
            }
      }
      className={`absolute select-none bg-red-100`}
      transition={{ delay: 0.0, duration: 1 }}
    >
      <motion.div
        initial={{
          width: `100%`,
          height: `100%`,
          boxShadow: `4px 4px 11px 8px rgba(153, 27 ,27, 0.8)`,
        }}
        whileHover={{
          scale: !transformation ? 1.15 : 1,
          x: !transformation ? -10 : 0,
          backgroundImage: !transformation
            ? `linear-gradient(to bottom, #fecaca, #feaead, #fa938f, #f57670, #ec5851, #ea4551, #e72e52, #e40054, #de0077, #c7009f, #9816c7, #0e41e9)`
            : `none`,
          boxShadow: `4px 4px 11px 11px rgba(153, 27 ,27, 0.65)`,
        }}
        animate={
          !transformation
            ? {
                padding: 4,
                borderRadius: 25,
                border: `1px solid white`,
                backgroundImage: `linear-gradient(to bottom, #ffffff, #faf6fd, #f9ecf7, #fbe2ee, #fdd7e1, #f7c4cc, #f1b1b6, #e99f9d, #d87f7c, #c5605b, #b0403a, #991b1b)`,
              }
            : {
                padding: 0,
                border: `none`,
                borderRadius: 0,
                backgroundImage: `none`,
                // backgroundSize: `cover`,
                // backgroundPosition: `bottom`,
                // backgroundImage: `url(${MainTap})`,
              }
        }
      >
        <motion.div
          initial={{
            width: `100%`,
            height: `100%`,
          }}
          animate={
            !transformation
              ? {
                  backgroundColor: `rgb(254, 226, 226)`,
                  border: `2px solid white`,
                  borderRadius: 20,
                }
              : {
                  backgroundColor: `transparent`,
                  border: `none`,
                  borderRadius: 0,
                }
          }
          // transition={{ duration: 0.5 }}
          // whileTap={{ scale: 1.15 }}
          className={`    flex flex-col items-center justify-center overflow-hidden `}
        >
          {(mainState === MainState.MAIN || mainState == MainState.INFO) && (
            <div
              className={`w-f h-f absolute z-20  cursor-pointer`}
              onMouseDown={handleOnClick}
            ></div>
          )}

          <motion.div
            initial={{}}
            animate={
              !transformation
                ? { height: `23%`, minHeight: 150 }
                : { height: 0, minHeight: 0 }
            }
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`bg-sky-20 flex items-center  justify-center gap-3 `}
          >
            {keybs.map((el) => keyb(el[0], el[1]))}
          </motion.div>

          <motion.div
            initial={{ height: `0%` }}
            animate={!transformation ? { height: `43%` } : { height: `100%` }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`flex-grow! w-f flex items-center justify-center bg-red-100 `}
          >
            <MAINBOOKinside
              show={transformation}
              mainState={mainState}
              trainingLanguage={trainingLanguage}
            />
          </motion.div>
          <div className={`flex-grow`}></div>
          <motion.div
            initial={{ height: `90%` }}
            animate={
              !transformation ? { height: `40%` } : { height: `0%`, y: 400 }
            }
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className={` `}
            style={{
              // height: `100%`,
              width: `100%`,
              // backgroundImage: `url(${svgbook2})`,
              // backgroundSize: `cover`,
              // backgroundPosition: `bottom`,
              backgroundSize: `cover`,
              backgroundPosition: `bottom`,
              backgroundImage: `url(${MainBook2})`,
              backgroundRepeat: `no-repeat no-repeat`,
            }}
          >
            <motion.div
              animate={{ opacity: 0 }}
              transition={{ delay: 1 }}
              className={`w-f h-2 border border-red-100 bg-red-100`}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// interface IProps {
//   mainState: MainState
//   setMainState: (state: MainState) => void
// }
// export const MAINREDONEbook: React.FC<IProps> = ({
//   mainState,
//   setMainState,
// }) => {
//
//   const keyb = (char: string, i: number) => (
//     <motion.div
//       initial={{
//         y: -400,
//         width: 64,
//         height: 64,
//       }}
//       animate={{ y: 0 }}
//       transition={{ delay: 0.9 + i * 0.2 }}
//       className={`flex justify-center items-center`}
//     >
//       <motion.div
//         key={i}
//         initial={{
//           fontSize: `3.4em`,
//           width: 64,
//           height: 64,
//         }}
//         whileHover={{ rotate: [0, 15, -15, 0], scale: 1.05 }}
//         animate={{ y: !transformation ? 0 : -700 }}
//         transition={{ delay: i * 0.1 + 0.15 }}
//         className={`font-courier bg-red-200 text-gray-800 border-2 border-gray-800 flex justify-center items-center rounded-xl py shadow-4th shadow-gray-500`}
//       >
//         {char}
//       </motion.div>
//     </motion.div>
//   )

//   const [transformation, setTransformation] = useState(false)

//   const [card, setCard] = useState<`sm` | `md` | `lg`>()

//   useDidMountEffect(() => {
//     if (mainState === MainState.BOOK) {
//       setTransformation(true)
//     } else {
//       setTransformation(false)
//     }
//   }, [mainState])

//   const handleOnClick = () => {
//     if (mainState === MainState.MAIN) {
//       setMainState(MainState.BOOK)
//     }
//   }

//   return (
//     <motion.div
//       initial={{
//         y: -3000,
//         // minHeight: 450,
//       }}
//       animate={
//         !transformation
//           ? {
//               z: -10,
//               y: 0,
//               width: `32%`,
//               height: `70%`,
//               // maxHeight: 500,
//               position: `absolute`,
//               marginLeft: `40%`,
//               marginRight: `75%`,
//             }
//           : {
//               z: 10,
//               y: 0,
//               width: `100%`,
//               height: `100%`,
//               position: `absolute`,
//               marginLeft: `50%`,
//               marginRight: `50%`,
//             }
//       }
//       className={`select-none`}
//       transition={{ delay: 0.0, duration: 1 }}
//     >
//       <motion.div
//         initial={{
//           width: `100%`,
//           height: `100%`,
//           boxShadow: `4px 4px 11px 8px rgba(153, 27 ,27, 0.8)`,
//         }}
//         whileHover={{
//           scale: !transformation ? 1.15 : 1,
//           x: !transformation ? -10 : 0,
//           boxShadow: `4px 4px 11px 11px rgba(153, 27 ,27, 0.65)`,
//         }}
//         animate={
//           !transformation
//             ? {
//                 backgroundColor: `rgb(254, 226, 226)`,
//                 border: `3px solid white`,
//                 borderRadius: 20,
//               }
//             : {
//                 backgroundColor: `transparent`,
//                 border: `none`,
//                 borderRadius: 0,
//               }
//         }
//         // transition={{ duration: 0.5 }}
//         // whileTap={{ scale: 1.15 }}
//         className={`    flex justify-center items-center flex-col overflow-hidden `}
//       >
//         {mainState === MainState.MAIN && (
//           <div
//             className={`z-10 absolute w-f h-f  cursor-pointer`}
//             onMouseDown={handleOnClick}
//           ></div>
//         )}

//         <motion.div
//           initial={{}}
//           animate={
//             !transformation
//               ? { height: `23%`, minHeight: 150 }
//               : { height: 0, minHeight: 0 }
//           }
//           transition={{ delay: 0.3, duration: 0.4 }}
//           className={`z-60 flex gap-3 bg-sky-20  items-center justify-center `}
//         >
//           {/* <div
//             style={{ minHeight: 75 }}
//             className={` flex-grow bg-emerald-400`}
//           /> */}
//           {keybs.map((el) => keyb(el[0], el[1]))}
//           {/* <div
//             style={{ minHeight: 75 }}
//             className={` flex-grow bg-emerald-400`}
//           /> */}
//         </motion.div>

//         <motion.div
//           initial={{ height: `0%` }}
//           animate={!transformation ? { height: `43%` } : { height: `100%` }}
//           transition={{ delay: 0.3, duration: 0.4 }}
//           className={`flex-grow! flex justify-center items-center bg-emerald-20 w-f `}
//         >
//           <MAINBOOKinside show={transformation} />
//         </motion.div>
//         <div className={`flex-grow`}></div>
//         <motion.div
//           initial={{ height: `90%` }}
//           animate={
//             !transformation ? { height: `40%` } : { height: `0%`, y: 400 }
//           }
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className={` `}
//           style={{
//             // height: `100%`,
//             width: `100%`,
//             // backgroundImage: `url(${svgbook2})`,
//             // backgroundSize: `cover`,
//             // backgroundPosition: `bottom`,
//             backgroundSize: `cover`,
//             backgroundPosition: `bottom`,
//             backgroundImage: `url(${MainBook2})`,
//           }}
//         >
//           <motion.div
//             animate={{ opacity: 0 }}
//             transition={{ delay: 1 }}
//             className={`w-f h-2 border border-red-100 bg-red-100`}
//           ></motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }
