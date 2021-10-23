import React, { useState, useEffect, useRef } from 'react'
import samurai from './../../static/samurai.svg'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useKeyPress } from '../../utils/useKeyPress'
import { ALeft } from './nav-components/ALeft'
import { ARight } from './nav-components/ARight'
import { Chapters, Directions } from '../../types/nav'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAction } from '../../hooks/useAction'

interface IProps {
  block: boolean
}

export const Navbar: React.FC<IProps> = ({ block }) => {
  const location = useLocation()
  const Path = location.pathname

  const chapter = useTypedSelector((state) => state.nav.chapter)

  const { changeChapter } = useAction()

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

  const [current, setCurrent] = useState(location.pathname)

  const ArrowLeft: boolean = useKeyPress('ArrowLeft')
  const ArrowRight: boolean = useKeyPress('ArrowRight')

  const getColors = (): string[] => {
    if (chapter === 'BOOK') {
      return ['red', 'rgba(128, 0, 0, 1)']
    } else if (chapter === 'TAP') {
      return ['blue', 'rgba(30, 58, 138, 1)']
    }
    return ['green', 'rgba(6, 78, 59, 1)']
  }

  const [ThemeColor, ShadowColor] = getColors()

  const chapters = Object.keys(Chapters).splice(1)
  const links = chapters.map((LINK) => (
    <>
      <a
        className={`outline-none text:2xl md:text-4xl border-${ThemeColor}-500 select-none
         flex-row rounded-md transition-all underline hover:no-underline  text-gray-800 hover:text-black cursor-pointer ${
           chapter === LINK && `bg-${ThemeColor}-200`
         }`}
        style={{
          padding: chapter === LINK ? '2px 10px 2px 8px' : '',
          boxShadow: chapter === LINK ? `2px 2px 5px 2px ${ShadowColor}` : '',
        }}
        onClick={() => onClick(LINK as Chapters)}
      >
        {LINK}
      </a>
    </>
  ))

  function changeLink(dir: Directions) {
    if (block) return

    const curIndex = chapters.indexOf(chapter)

    if (dir === 'LEFT') {
      chapter === 'MAIN'
        ? changeChapter(chapters[chapters.length - 1] as Chapters)
        : curIndex === 0
        ? changeChapter(chapters[chapters.length - 1] as Chapters)
        : changeChapter(chapters[curIndex - 1] as Chapters)
    } else if (dir === 'RIGHT') {
      chapter === 'MAIN'
        ? changeChapter(chapters[0] as Chapters)
        : curIndex === chapters.length - 1
        ? changeChapter(chapters[0] as Chapters)
        : changeChapter(chapters[curIndex + 1] as Chapters)
    }
  }

  function onClick(link: Chapters): void {
    if (block) return
    changeChapter(link)
  }

  return (
    <>
      <div
        className={`z-50 w-full fixed top-0 left-0 right-0 flex justify-center
         border-${ThemeColor}-500 border-b h-10 md:h-16 transition-all duration-500 
         bg-${ThemeColor}-400 shadow-2xl font-courier `}
        style={{
          transition: '1.25s ease-in-out',
          boxShadow: `0 1px 5px 1px ${ShadowColor}`,
        }}
      >
        <div className="w-1000 2k:w-1500 3k:w-2000 flex items-center gap-x-4 mx-9">
          {/* <span>:{chapter}</span> */}
          {/* <span>:{block ? 'block' : 'not'}</span> */}
          <a className="flex-grow outline-none flex">
            <div
              className={`p-1  rounded-full`}
              onClick={() => changeChapter(Chapters.MAIN)}
            >
              <img
                src={samurai}
                alt=""
                className="w-10 h-10 md:w-16 md:h-16 transition duration-900 cursor-pointer hover:scale-110 "
              />
            </div>
          </a>

          <ALeft onClick={changeLink} chapter={chapter} />
          {links}
          <ARight onClick={changeLink} chapter={chapter} />
        </div>
      </div>
    </>
  )
}
