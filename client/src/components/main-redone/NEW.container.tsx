import React from 'react'
import { MainState } from '../../App'
import { MAINREDONEbook } from './MAIN.REDONE.BOOK'
import { MAINREDONEtap } from './MAIN.REDONE.TAP'
import mainsvg from '../../static/mainsvg.svg'
import { MAINREDONEinfo } from './MAIN.REDONE.INFO'
import { BOOKContainer } from '../book-redone/BOOK.container'
import { TAPREDONEcontainer } from '../tap-redone/TAP.REDONE.container'
import { motion } from 'framer-motion'
import useColor from '../../hooks/useColor'
import useElementSize from '../../hooks/useElementSize'
import useDarkMode from '../../hooks/useDarkMode'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  trainingLanguage: boolean
  handleLanguage: () => void
  BOOK: boolean
  navHeight: number
}

export const NEWContainer: React.FC<IProps> = ({
  mainState,
  setMainState,
  trainingLanguage,
  handleLanguage,
  BOOK,
  navHeight,
}) => {
  const { themeColor1, themeColor2 } = useColor()

  const { isDarkMode } = useDarkMode()

  // return (
  //   <div className={`font-BebasNeue pt-10 text-[6.5rem]`}>
  //     <div
  //       className={` flex h-[10rem] w-[10rem] flex-col items-center justify-center`}
  //     >
  //       {[
  //         ['K', `rotate-[-45deg] translate-x-[-2px] translate-y-[2px]`],
  //         ['B', `rotate-[45deg]`],
  //         ['R', `rotate-[135deg] translate-x-[1px] translate-y-[-1px]`],
  //         ['D', `rotate-[225deg]`],
  //       ].map((el) => (
  //         <div
  //           className={`absolute flex h-[2px] w-[2px] ${el[1]} items-center justify-center `}
  //         >
  //           {' '}
  //           <div className={`absolute translate-y-[-3.1rem]`}>{el[0]}</div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )

  return (
    <motion.div
      className={`min-h-100vh flex w-[100vw] justify-start overflow-hidden `}
      // className={` flex h-[100vh] w-[100vw] items-center justify-center border-4 border-black`}
    >
      <motion.div
        initial={{ x: BOOK ? '0%' : '-50%' }}
        animate={{ x: BOOK ? '0%' : '-50%' }}
        transition={{ duration: 0.6 }}
        className={`min-h-100vh flex w-[200vw] justify-start ${
          isDarkMode ? `bg-black` : `bg-white`
        }`}
      >
        <div
          className={`flex min-h-[100vh] w-[100vw] items-start justify-center ${
            isDarkMode ? themeColor1.bg.t90030 : themeColor1.bg.t50
          } transition-colors duration-200 ease-in-out`}
        >
          <BOOKContainer handleLanguage={handleLanguage} />
        </div>
        <div
          className={`flex min-h-[100vh] w-[100vw] items-start justify-center  ${
            isDarkMode ? themeColor2.bg.t90030 : themeColor2.bg.t50
          }   transition-colors duration-200 ease-in-out`}
        >
          <TAPREDONEcontainer
            demo={false}
            handleLanguage={handleLanguage}
            trainingLanguage={trainingLanguage}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
