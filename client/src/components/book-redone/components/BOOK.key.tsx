import React from 'react'
import useColor from '../../../hooks/useColor'
import useDarkMode from '../../../hooks/useDarkMode'

interface IProps {
  tag: string[]
  active: boolean
}

export const BOOKkey: React.FC<IProps> = ({ tag, active }) => {
  let isMac = true
  const { isDarkMode } = useDarkMode()

  const { themeColor1 } = useColor()

  return (
    <>
      <div
        className={`font-SF flex h-[54px] ${
          isDarkMode ? `shadow-gray-500/60` : `shadow-gray-500`
        } ${
          active
            ? `${
                isDarkMode ? themeColor1.bg.t500 : themeColor1.bg.t400
              } shadow-sm`
            : `${
                isDarkMode ? themeColor1.bg.t900 : themeColor1.bg.t100
              } shadow-lg`
        } ${
          isMac && tag[0].length > 1
            ? ` items-end justify-end  text-sm lowercase ${
                tag[0] === `Delete` || tag[0] === `Tab`
                  ? `w-[85px]`
                  : tag[0] === `Caps Lock` || tag[0] === `Return`
                  ? `w-[99px]`
                  : tag[0] === `Shift` || tag[0] === `ShiftR`
                  ? `w-[130px]`
                  : tag[0] === `Control` || tag[0] === `Option`
                  ? `
                  w-[54px] items-end justify-center`
                  : tag[0] === `Space`
                  ? `w-[294px]`
                  : tag[0] === `Command`
                  ? `w-[72px]`
                  : ``
              }`
            : `w-[54px] items-center justify-center text-[1.3rem] uppercase`
        } rounded-md border ${
          isDarkMode ? `border-gray-300 text-gray-200` : `border-gray-600`
        } ${
          tag[0].length === 1 ||
          [`Shift`, `ShiftR`, `Caps Lock`].includes(tag[0])
            ? ``
            : `invisible`
        }`}
      >
        {tag[0].length === 1 && !tag[1] ? (
          tag
        ) : tag[0] && tag[1] ? (
          <div
            className={`w-f h-f flex flex-col items-center justify-center gap-[14px]  text-[1.1rem]`}
          >
            <span className={`leading-[6px]`}>{tag[0]}</span>
            <span className={`leading-[6px]`}>{tag[1]}</span>
          </div>
        ) : ['Tab', `Caps Lock`, `Shift`].includes(tag[0]) ? (
          <div className={`w-full pl-1  text-left`}> {tag[0]} </div>
        ) : ['Delete', `Return`, `ShiftR`].includes(tag[0]) ? (
          <div className={`w-f pr-1.5  text-right`}>
            {' '}
            {tag[0] === `ShiftR` ? `Shift` : tag[0]}{' '}
          </div>
        ) : ['Control', `Option`, `Command`].includes(tag[0]) ? (
          <div className={`w-full text-center`}>{tag[0]}</div>
        ) : tag[0] === `Space` ? (
          ``
        ) : tag[0] === `Arrows` ? (
          <div>A</div>
        ) : (
          ``
        )}
      </div>
    </>
  )
}

// import React from 'react'
// import { useKeyCode } from '../../../utils/useKeyCode'

// interface IProps {
//   tag: string[]
//   active: boolean
// }

// export const BOOKkey: React.FC<IProps> = ({ tag, active }) => {
//   let isMac = true

//   return (
//     <>
//       <div
//         className={`font-SF flex h-[54px] shadow-gray-500 ${
//           active ? `bg-emerald-300 shadow-sm` : `shadow-lg`
//         } ${
//           isMac && tag[0].length > 1
//             ? ` items-end justify-end  text-sm lowercase ${
//                 tag[0] === `Delete` || tag[0] === `Tab`
//                   ? `w-[85px]`
//                   : tag[0] === `Caps Lock` || tag[0] === `Return`
//                   ? `w-[99px]`
//                   : tag[0] === `Shift` || tag[0] === `ShiftR`
//                   ? `w-[130px]`
//                   : tag[0] === `Control` || tag[0] === `Option`
//                   ? `
//                   w-[54px] items-end justify-center`
//                   : tag[0] === `Space`
//                   ? `w-[294px]`
//                   : tag[0] === `Command`
//                   ? `w-[72px]`
//                   : ``
//               }`
//             : `w-[54px] items-center justify-center text-[1.3rem] uppercase`
//         } rounded-md border border-gray-600 `}
//       >
//         {tag[0].length === 1 && !tag[1] ? (
//           tag
//         ) : tag[0] && tag[1] ? (
//           <div
//             className={`w-f h-f flex flex-col items-center justify-center gap-[14px]  text-[1.1rem]`}
//           >
//             <span className={`leading-[6px]`}>{tag[0]}</span>
//             <span className={`leading-[6px]`}>{tag[1]}</span>
//           </div>
//         ) : ['Tab', `Caps Lock`, `Shift`].includes(tag[0]) ? (
//           <div className={`w-full pl-1  text-left`}> {tag[0]} </div>
//         ) : ['Delete', `Return`, `ShiftR`].includes(tag[0]) ? (
//           <div className={`w-f pr-1.5  text-right`}>
//             {' '}
//             {tag[0] === `ShiftR` ? `Shift` : tag[0]}{' '}
//           </div>
//         ) : ['Control', `Option`, `Command`].includes(tag[0]) ? (
//           <div className={`w-full text-center`}>{tag[0]}</div>
//         ) : tag[0] === `Space` ? (
//           ``
//         ) : tag[0] === `Arrows` ? (
//           <div>A</div>
//         ) : (
//           ``
//         )}
//       </div>
//     </>
//   )
// }
