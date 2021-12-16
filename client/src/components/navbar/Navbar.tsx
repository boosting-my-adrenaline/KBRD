import React, { useState, useEffect, useRef } from 'react'
import SAMURAI from './../../static/profiles/samurai.svg'
import TEST from './../../static/profiles/test.svg'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useKeyPress } from '../../utils/useKeyPress'
import { ALeft } from './nav-components/ALeft'
import { ARight } from './nav-components/ARight'
import { Chapters, Directions } from '../../types/nav'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAuthAction, useNavAction } from '../../hooks/useAction'
import { chapters } from '../../redux/nav/nav.types'
import { AuthMiniature } from './nav-components/AuthMiniature'
import { NAVarrow } from './nav-components/ArrowPage'
import { HexagonRounded } from '../loading/HexagonRounded'
import { PerspectiveController } from '../PerspectiveController'
import { NAVlinks } from './nav-components/NAV.links'

interface IProps {
  block: boolean
}

export const Navbar: React.FC<IProps> = ({ block }) => {
  const isOpened = useTypedSelector((state) => state.auth.isOpened)

  const chapter = useTypedSelector((state) => state.nav.chapter)
  // const isLoading = useTypedSelector((state) => state.nav.isLoading)
  const isLoading = false

  const { changeChapter } = useNavAction()
  const { setOpenOn, setOpenOff } = useAuthAction()

  const leftArrowClick = useKeyPress('ArrowLeft')
  const rightArrowClick = useKeyPress('ArrowRight')

  useEffect(() => {
    if (leftArrowClick) {
      changeLink('LEFT' as Directions)
    }
  }, [leftArrowClick])

  useEffect(() => {
    if (rightArrowClick) {
      changeLink('RIGHT' as Directions)
    }
  }, [rightArrowClick])

  const getColors = (): string[] => {
    if (chapter === Chapters.BOOK) {
      return ['red', 'rgba(128, 0, 0, 1)']
    } else if (chapter === Chapters.TAP) {
      return ['blue', 'rgba(30, 58, 138, 1)']
    } else if (chapter === Chapters.INFO) {
      return ['yellow', 'rgba(20, 108, 70, 1)']
    } else if (chapter === Chapters.NOT_FOUND) {
      return ['gray', 'rgba(50, 50, 50, 1)']
    } else {
      return ['green', 'rgba(6, 78, 59, 1)']
    }
  }

  const [ThemeColor, ShadowColor] = getColors()

  function changeLink(dir: Directions) {
    if (block || isOpened) return

    const curIndex = chapters.indexOf(chapter)

    if (dir === 'LEFT') {
      chapter === Chapters.MAIN || chapter === Chapters.NOT_FOUND
        ? changeChapter(chapters[chapters.length - 1])
        : curIndex === 0
        ? changeChapter(chapters[chapters.length - 1])
        : changeChapter(chapters[curIndex - 1])
    } else if (dir === 'RIGHT') {
      chapter === Chapters.MAIN || chapter === Chapters.NOT_FOUND
        ? changeChapter(chapters[0])
        : curIndex === chapters.length - 1
        ? changeChapter(chapters[0])
        : changeChapter(chapters[curIndex + 1])
    }
  }

  function onClick(link: Chapters): void {
    if (block) return
    changeChapter(link)
  }

  const [perspective, setPerspective] = useState([-200, 65])

  const handleSetPerspective = (perspective: number, height: number) => {
    setPerspective([perspective, height])
  }

  return (
    <>
      <div
        className={`z-50 w-full fixed top-0 left-0 right-0 flex pr-4 justify-center items-center border 
         border-${ThemeColor}-500 border-b  transition-all duration-500 
         bg-${ThemeColor}-400  font-courier flex flex-row select-none`}
        style={{
          transition: '1.25s ease-in-out',
          // height: 65,
          zIndex: 2022,
          boxShadow: `0 1px 5px 1px ${ShadowColor}`,
        }}
      >
        <div
          className={`flex justify-center items-center `}
          style={{
            transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
            height: perspective[1],
          }}
        >
          <div
            className="w-1000 2k:w-1500 3k:w-2000 flex items-center gap-x-4 mx-6 "
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
            <a className="z-10 flex-grow outline-none flex">
              <div
                className={`p-1 hover:transform translate-y-2 cursor-pointer`}
                // onClick={() => changeChapter(Chapters.MAIN)}
              >
                {/* <img
                  src={SAMURAI}
                  alt=""
                  className="w-10 h-10 md:w-16 md:h-16 transition duration-900 cursor-pointer hover:scale-110 "
                /> */}
                {/* <img
                  src={TEST}
                  alt=""
                  className="w-10 h-10 md:w-16 md:h-16 transition duration-900 cursor-pointer hover:scale-110 "
                /> */}
                <HexagonRounded onClick={() => changeChapter(Chapters.MAIN)} />
              </div>
            </a>

            {/* <ALeft onClick={changeLink} chapter={chapter} isOpened={isOpened} /> */}
            <NAVlinks
              chapters={chapters}
              chapter={chapter}
              ThemeColor={ThemeColor}
              ShadowColor={ShadowColor}
              onClick={onClick}
            />
            <div onClick={() => changeChapter(Chapters.NOT_FOUND)}>404</div>
            {/* <ARight
              onClick={changeLink}
              chapter={chapter}
              isOpened={isOpened}
            /> */}
          </div>
          <div className={`px-6`}></div>
          <div style={{ zIndex: 20 }}>
            <AuthMiniature />
          </div>
        </div>
      </div>
      <NAVarrow
        chapter={chapter}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, ShadowColor]}
        direction={`left`}
      />
      <NAVarrow
        chapter={chapter}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, ShadowColor]}
        direction={`right`}
      />
      {/* <NAVarrowRight
        chapter={chapter}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, ShadowColor]}
      /> */}
      <PerspectiveController setNavPerspective={handleSetPerspective} />
    </>
  )
}
