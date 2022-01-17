import React, { useState, useEffect } from 'react'
import { useKeyPress } from '../../utils/useKeyPress'
import { Chapters, Directions } from '../../types/nav'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAuthAction, useNavAction } from '../../hooks/useAction'
import { chapters } from '../../redux/nav/nav.types'
import { AuthMiniature } from './nav-components/AuthMiniature'
import { NAVarrow } from './nav-components/ArrowPage'
import { PerspectiveController } from '../PerspectiveController'
import { NAVlinks } from './nav-components/NAV.links'
import { NAVlogo } from './nav-components/NAV.logo'

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
    if ([Chapters.BOOK, Chapters.B].includes(chapter)) {
      return ['bg-red-400', 'border-red-500', 'shadow-red-700']
    } else if (chapter === Chapters.TAP) {
      return ['bg-sky-400', 'border-sky-500', 'shadow-sky-700']
    } else if (chapter === Chapters.INFO) {
      return ['bg-amber-400', 'border-amber-500', 'shadow-amber-700']
    } else if (chapter === Chapters.NOT_FOUND) {
      return ['bg-gray-400', 'border-gray-500', 'shadow-gray-500']
    } else {
      return ['bg-emerald-400', 'border-emerald-500', 'shadow-emerald-500']
    }
  }

  const [ThemeColor, BorderColor, ShadowColor] = getColors()

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
        className={`z-50 w-full fixed top-0 left-0 right-0 pr-4 justify-center items-center border-b border-t
${BorderColor}   ${ThemeColor}  shadow-6th ${ShadowColor} font-courier flex flex-row select-none `}
        style={{
          transition: '1.25s ease-in-out',
          // height: 65, bg-${ThemeColor}-400
          zIndex: 2022,
          // boxShadow: `0 1px 5px 1px ${ShadowColor}`,
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
            <a className="z-10 flex-grow outline-none flex items-center ">
              <div
                className={` cursor-pointer flex`}
                // onClick={() => changeChapter(Chapters.MAIN)}
              >
                {/* <HexagonRounded onClick={() => changeChapter(Chapters.MAIN)} /> */}
                {/* 1 */}
                <NAVlogo onClick={() => changeChapter(Chapters.MAIN)} />
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
        colors={[ThemeColor, BorderColor, ShadowColor]}
        direction={`left`}
      />
      <NAVarrow
        chapter={chapter}
        onClick={changeLink}
        isOpened={isOpened}
        colors={[ThemeColor, BorderColor, ShadowColor]}
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
