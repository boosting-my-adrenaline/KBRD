import React, { useState, useEffect, useRef } from 'react'
import { useKeyPress } from '../../utils/useKeyPress'
import { AuthMiniature } from './nav-components/AuthMiniature'
// import { NAVarrow } from './nav-components/ArrowPage'
// import { PerspectiveController } from '../PerspectiveController'
// import { NAVlinks } from './nav-components/NAV.links'
import { NAVlogo } from './nav-components/NAV.logo'
import { MainState } from '../../App'
import { Width } from '../../utils/GetWidth'
import useLanguage from '../../hooks/useLanguage'
import { LanguageMiniature } from './nav-components/LanguageMiniature'
import useColor, { colorElements } from '../../hooks/useColor'
import { useWindowSize } from '../../hooks/useDimensions'
import { motion } from 'framer-motion'
import { NavbarPallette } from './nav-components/Pallete'
import { useScroll } from '../../hooks/useScroll'
import useElementSize from '../../hooks/useElementSize'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import useDarkMode from '../../hooks/useDarkMode'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  authOpen: boolean
  setAuthOpen: (auth: boolean) => void
  trainingLanguage: boolean
  toggleTrainingLanguage: () => void
  BOOK: boolean
  setBOOK: (BOOK: boolean) => void
  setNavHeight: (height: number) => void
}

export const Navbar: React.FC<IProps> = ({
  mainState,
  setMainState,
  authOpen,
  setAuthOpen,
  trainingLanguage,
  toggleTrainingLanguage,
  BOOK,
  setBOOK,
  setNavHeight,
}) => {
  const {
    mainColor1,
    themeColor1,
    setMainColor1,
    mainColor2,
    themeColor2,
    setMainColor2,
  } = useColor()

  const [delay, setDelay] = useState(false)
  const [delay2, setDelay2] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => setDelay(true), 100)

    let id2 = setTimeout(() => setDelay(false), 300)
    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [BOOK])

  useEffect(() => {
    let id = setTimeout(() => setDelay2(true), 0)

    let id2 = setTimeout(() => setDelay2(false), 375)
    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [BOOK])

  useDidMountEffect(() => {
    let d1 = delay
    let d2 = delay2
    if (open) {
      setDelay(false)
      setDelay2(false)

      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      } catch (error) {
        window.scrollTo(0, 0)
      }
    }

    // return () => {
    //   setDelay(delay)
    //   setDelay2(delay2)
    // }
  }, [open])

  const { width } = useWindowSize()

  const { isDarkMode, toggle } = useDarkMode()

  const getFirst = () => {
    if (width >= 3840) {
      return 'w-[27.09vw]'
    } else if (width < 3840 && width >= 2880) {
      return 'w-[26.95vw]'
    } else if (width < 2880 && width >= 2560) {
      return 'w-[26.79vw]'
    } else if (width < 2560 && width >= 2400) {
      return 'w-[26.795vw]'
    } else if (width < 2400 && width >= 2133) {
      return 'w-[26.711vw]'
    } else if (width < 2133 && width >= 1920) {
      return 'w-[26.635vw]'
    } else if (width < 1920 && width >= 1745) {
      return 'w-[26.528vw]'
    } else if (width < 1745 && width >= 1536) {
      return 'w-[26.43vw]'
    } else if (width < 1536 && width >= 1440) {
      // return 'w-[33.79vw]'
      return 'w-[26.29vw]'
    } else if (width < 1440 && width >= 1280) {
      return 'w-[26.19vw]'
    } else {
      return 'w-[25.980vw]'
    }
  }

  const { isScrollingTop } = useScroll()

  const [squareRef, { height }] = useElementSize()

  useEffect(() => {
    setNavHeight(height)
  }, [height])

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const ref: any = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <>
      <motion.div
        // ref={squareRef}
        animate={{ top: !isScrollingTop ? -45 : 0 }}
        className={`font-courier fixed left-0 right-0 z-[2024] flex w-full select-none flex-row items-end justify-center transition duration-1000 ease-in-out`}
      >
        {/* {elements} */}
        <motion.div
          animate={{ x: open ? 200 : 0 }}
          className={`absolute right-2 top-0 z-50 flex h-[38px] items-center `}
        >
          <AuthMiniature authOpen={authOpen} setAuthOpen={setAuthOpen} />
          <LanguageMiniature
            trainingLanguage={trainingLanguage}
            toggleTrainingLanguage={toggleTrainingLanguage}
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`z-10 cursor-pointer`}
            onMouseDown={() => toggle()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="30px"
              xmlSpace="preserve"
            >
              <path
                d="M69.6 50.6c0-11.8 4.7-22.5 12.2-30.4 2.3-2.4 1-6.5-2.3-7.1-5.2-.9-10.7-.9-16.3-.1-23 3.5-40.9 22.3-43.3 45.5-3.2 30.9 21 57 51.3 57 13.9 0 26.6-5.5 35.9-14.5 2.5-2.4 1.3-6.7-2.2-7.4-20.1-4-35.3-21.7-35.3-43z"
                style={{
                  fill: !isDarkMode ? '#000' : 'rgb(252 211 77)',
                  stroke: '#000',
                  strokeMiterlimit: 10,
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
        <div
          className={` font-BungeeShade absolute  left-0 z-40 flex h-[36px] cursor-pointer text-[1.5rem]`}
        >
          {/* {elements} */}
          <motion.div
            animate={{
              x: (!BOOK || delay) && !open ? '0%' : '-100%',
            }}
            className={` flex w-[20vw] items-center justify-end  ${
              isDarkMode ? `text-gray-100` : `text-black`
            }`}
            onMouseDown={() => setBOOK(true)}
          >
            <span className={``}>{`<`} BOOK</span>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          onMouseDown={handleClick}
          // onMouseLeave={() => setOpen(false)}
          animate={{ x: open ? 0 : delay2 ? 0 : !BOOK ? `110%` : '-110%' }}
          className={`font-BungeeShade absolute z-40 flex h-[30px] cursor-pointer items-center justify-center text-[1.5rem] uppercase ${
            isDarkMode ? `text-gray-300` : `text-black`
          }`}
        >
          THEME: {'\u00a0'}
          {open ? (
            <div
              // ref={squareRef}
              className={`flex items-start justify-center gap-1`}
            >
              {/* ////// */}
              {colorElements.map((el) => (
                <>
                  {' '}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={el[0]}
                    onMouseEnter={() => {
                      BOOK ? setMainColor1(el[0]) : setMainColor2(el[0])
                    }}
                    className={`w-[2vw] cursor-pointer rounded-md border  ${el[1]} ${el[2]}`}
                  >
                    {`\u00a0`}
                  </motion.div>
                  <div className={`flex-grow`} />
                </>
              ))}

              {/* ////// */}
            </div>
          ) : (
            <motion.span
              // ref={ref}
              onMouseDown={() => {
                setTimeout(() => setOpen(true))
              }}
              className={`rounded-md border ${
                isDarkMode ? `border-gray-300 text-white` : `border-gray-600`
              } px-[0.5vw] ${
                delay2
                  ? isDarkMode
                    ? `bg-gray-600`
                    : `bg-gray-200`
                  : !BOOK
                  ? isDarkMode
                    ? themeColor2.bg.t600
                    : themeColor2.bg.t400
                  : isDarkMode
                  ? themeColor1.bg.t600
                  : themeColor1.bg.t400
              }`}
            >
              {delay2 ? '\u00a0'.repeat(6) : BOOK ? mainColor1 : mainColor2}
            </motion.span>
          )}
        </motion.div>

        <div
          className={`font-BungeeShade absolute right-0 z-40 flex h-[36px] cursor-pointer text-[1.5rem]`}
        >
          <motion.div
            animate={{ x: (BOOK || delay) && !open ? '0%' : '100%' }}
            className={`text flex w-[20vw] items-center justify-start ${
              isDarkMode ? `text-gray-100` : `text-black`
            }`}
            onMouseDown={() => setBOOK(false)}
          >
            <span className={``}> TAP {`>`}</span>
          </motion.div>
        </div>
        <div
          className={`relative flex h-[36px] w-full items-center justify-center overflow-hidden `}
        >
          <div
            className={`flex h-[10000px] w-[10000px] origin-center rotate-[40deg] gap-[6.8vw]`}
          >
            <motion.div
              animate={{ x: (!BOOK || delay) && !open ? '0%' : '-100%' }}
              className={`box-border h-[100%] w-[50%] cursor-pointer border-[0.15vw] ${
                isDarkMode ? themeColor1.border.t500 : themeColor1.border.t800
              } ${
                isDarkMode ? themeColor1.bg.t800 : themeColor1.bg.t400
              } transition-colors duration-500 ease-in-out`}
              onMouseDown={() => setBOOK(true)}
            ></motion.div>

            <motion.div
              animate={{ x: delay2 ? 0 : !BOOK ? `77%` : '-77%' }}
              className={`border-gray-5001 relative flex h-[100%] w-[30vw] items-center justify-center overflow-hidden  `}
            >
              {' '}
              <div
                className={`flex h-[302px] w-[90vw] rotate-[-40deg] items-center justify-center `}
              >
                {' '}
              </div>
            </motion.div>

            <motion.div
              animate={{ x: (BOOK || delay) && !open ? '0%' : '100%' }}
              className={`border-box shadow-6th h-[100%] w-[50%] cursor-pointer border-[0.15vw]  ${
                isDarkMode ? themeColor2.border.t500 : themeColor2.border.t800
              }  ${isDarkMode ? themeColor2.bg.t800 : themeColor2.bg.t400}`}
              onMouseDown={() => setBOOK(false)}
            ></motion.div>
          </div>
        </div>
        <div
          className={`absolute flex h-[2px] w-[100vw] justify-start gap-[45vw]`}
        >
          <motion.div
            animate={{ x: (!BOOK || delay) && !open ? '0%' : '-102.5%' }}
            // transition={{ bounce: 0.2 }}
            className={`-z-10 ${getFirst()}  h-[2px] ${themeColor1.bg.t500} ${
              !delay && BOOK && `in visible`
            } ${
              isDarkMode
                ? `shadow-16th ${themeColor1.shadow.t400}`
                : `shadow-14th ${themeColor1.shadow.t900}`
            }`}
          />
          <motion.div
            animate={{ x: (BOOK || delay) && !open ? '0%' : '102%' }}
            className={` -z-10 h-[2px] flex-grow ${themeColor2.bg.t500} ${
              !delay && !BOOK && `i nvisible`
            }  ${
              isDarkMode
                ? `shadow-16th ${themeColor2.shadow.t400}`
                : `shadow-14th ${themeColor2.shadow.t900}`
            }`}
          />
        </div>
      </motion.div>
    </>
  )
}
