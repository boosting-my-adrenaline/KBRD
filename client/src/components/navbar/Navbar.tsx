import React, { useState, useEffect } from 'react'
import { useKeyPress } from '../../utils/useKeyPress'
import { AuthMiniature } from './nav-components/AuthMiniature'
// import { NAVarrow } from './nav-components/ArrowPage'
import { PerspectiveController } from '../PerspectiveController'
import { NAVlinks } from './nav-components/NAV.links'
import { NAVlogo } from './nav-components/NAV.logo'
import { MainState } from '../../App'
import { Width } from '../../utils/GetWidth'
import useLanguage from '../../hooks/useLanguage'
import { LanguageMiniature } from './nav-components/LanguageMiniature'

interface IProps {
  mainState: MainState
  setMainState: (state: MainState) => void
  authOpen: boolean
  setAuthOpen: (auth: boolean) => void
  trainingLanguage: boolean
  toggleTrainingLanguage: () => void
}

export const Navbar: React.FC<IProps> = ({
  mainState,
  setMainState,
  authOpen,
  setAuthOpen,
  trainingLanguage,
  toggleTrainingLanguage,
}) => {
  // const isOpened = useTypedSelector((state) => state.auth.isOpened)

  // const isLoading = useTypedSelector((state) => state.nav.isLoading)
  const isLoading = false

  const { isEng } = useLanguage()

  const getColors = (): string[] => {
    switch (mainState) {
      case MainState.MAIN:
        return ['bg-emerald-400', 'border-emerald-500', 'shadow-emerald-500']

      case MainState.BOOK:
        return ['bg-red-400', 'border-red-500', 'shadow-red-700']

      case MainState.TAP:
        return ['bg-sky-400', 'border-sky-500', 'shadow-sky-700']

      case MainState.INFO:
        return ['bg-amber-400', 'border-amber-500', 'shadow-amber-700']
    }
  }

  // const getColors = (): string[] => {
  //   if ([MainState.BOOK, MainState.B].includes(mainState)) {
  //     return ['bg-red-400', 'border-red-500', 'shadow-red-700']
  //   } else if (mainState === MainState.TAP) {
  //     return ['bg-sky-400', 'border-sky-500', 'shadow-sky-700']
  //   } else if (mainState === MainState.INFO) {
  //     return ['bg-amber-400', 'border-amber-500', 'shadow-amber-700']
  //   } else if (mainState === MainState.NOT_FOUND) {
  //     return ['bg-gray-400', 'border-gray-500', 'shadow-gray-500']
  //   } else {
  //     return ['bg-emerald-400', 'border-emerald-500', 'shadow-emerald-500']
  //   }
  // }

  const [ThemeColor, BorderColor, ShadowColor] = getColors()

  // function changeLink(dir: Directions) {
  //   if (block || isOpened) return

  //   const curIndex = chapters.indexOf(mainState)

  //   if (dir === 'LEFT') {
  //     mainState === MainState.MAIN || mainState === MainState.NOT_FOUND
  //       ? changeChapter(chapters[chapters.length - 1])
  //       : curIndex === 0
  //       ? changeChapter(chapters[chapters.length - 1])
  //       : changeChapter(chapters[curIndex - 1])
  //   } else if (dir === 'RIGHT') {
  //     mainState === MainState.MAIN || mainState === MainState.NOT_FOUND
  //       ? changeChapter(chapters[0])
  //       : curIndex === chapters.length - 1
  //       ? changeChapter(chapters[0])
  //       : changeChapter(chapters[curIndex + 1])
  //   }
  // }

  function onClick(state: MainState): void {
    setMainState(state)
  }

  const [perspective, setPerspective] = useState([-200, 65])

  const handleSetPerspective = (perspective: number, height: number) => {
    setPerspective([perspective, height])
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-[2024] w-full items-center justify-center border-b border-t pr-4
${BorderColor}   ${ThemeColor}  shadow-6th ${ShadowColor} font-courier flex select-none flex-row`}
        style={{
          transition: '1.25s ease-in-out',
          // height: 65, bg-${ThemeColor}-400
          // boxShadow: `0 1px 5px 1px ${ShadowColor}`,
        }}
      >
        <div
          className={`flex items-center justify-center `}
          style={{
            transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
            height: perspective[1],
          }}
        >
          <div
            className="w-1000 2k:w-1500 3k:w-2000 mx-6 flex items-center gap-x-4 "
            style={{
              transform: `perspective(1000px) rotateX(${
                isLoading ? -90 : 0
              }deg) translateY(${!isLoading ? 0 : -10}px) translateZ(${
                isLoading ? -75 : 0
              }px)`,
              transition: '0.3s ease-in-out',
              // height: 65,
            }}
          >
            <a className="z-10 flex flex-grow items-center outline-none ">
              <div
                className={` flex cursor-pointer`}
                // onClick={() => changeChapter(Chapters.MAIN)}
              >
                {/* <HexagonRounded onClick={() => changeChapter(Chapters.MAIN)} /> */}
                {/* 1 */}
                <NAVlogo onClick={() => setMainState(MainState.MAIN)} />
                {/* <Width /> */}
              </div>
            </a>

            {/* <ALeft onClick={changeLink} chapter={chapter} isOpened={isOpened} /> */}
            <NAVlinks mainState={mainState} onClick={onClick} />
            {/* <ARight
              onClick={changeLink}
              chapter={chapter}
              isOpened={isOpened}
            /> */}
          </div>
          <div className={`px-6`}></div>
          <div style={{ zIndex: 20 }}>
            <AuthMiniature authOpen={authOpen} setAuthOpen={setAuthOpen} />
          </div>
        </div>
        <div className={`absolute right-4 z-50`}>
          <LanguageMiniature
            trainingLanguage={trainingLanguage}
            toggleTrainingLanguage={toggleTrainingLanguage}
          />
        </div>
      </div>
      {/* <NAVarrow
        chapter={mainState}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, BorderColor, ShadowColor]}
        direction={`left`}
      />
      <NAVarrow
        chapter={mainState}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, BorderColor, ShadowColor]}
        direction={`right`}
      /> */}

      <PerspectiveController setNavPerspective={handleSetPerspective} />
    </>
  )
}
