import React, { useState, useEffect, useRef } from 'react'
import samurai from './../../static/samurai.svg'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useKeyPress } from '../../utils/useKeyPress'
import { ALeft } from './nav-components/ALeft'
import { ARight } from './nav-components/ARight'

export const Navbar: React.FC = () => {
  const location = useLocation()
  const Path = location.pathname

  const history = useHistory()

  const leftArrowClick = useKeyPress('ArrowLeft')
  const rightArrowClick = useKeyPress('ArrowRight')

  useEffect(() => {
    if (leftArrowClick) {
      changeLink('left')
    }
  }, [leftArrowClick])

  useEffect(() => {
    if (rightArrowClick) {
      changeLink('right')
    }
  }, [rightArrowClick])

  const [current, setCurrent] = useState(location.pathname)

  const ArrowLeft: boolean = useKeyPress('ArrowLeft')
  const ArrowRight: boolean = useKeyPress('ArrowRight')

  const chapters = ['BOOK', 'JSON', 'INFO']

  const links = chapters.map((link: string) => (
    <NavLink key={link} exact to={`/${link.toLowerCase()}`}>
      <a
        className="outline-none text:2xl md:text-4xl border-red-500 flex-row rounded-md transition-all underline hover:no-underline  text-gray-800 hover:text-black cursor-pointer"
        style={{
          padding: Path === '/' + link.toLowerCase() ? '2px 10px 2px 8px' : '',
          backgroundColor:
            Path === '/' + link.toLowerCase() ? 'rgb(254, 202, 202)' : '',
          // borderWidth: Path === '/' + link.toLowerCase() ? '1px' : '',
          boxShadow:
            Path === '/' + link.toLowerCase()
              ? '2px 2px 5px 2px rgba(128, 0, 0, 1)'
              : '',
        }}
      >
        {link}
      </a>
    </NavLink>
  ))

  function changeLink(direction: string): void {
    let currentI = chapters.map((el) => el.toLowerCase()).indexOf(Path.slice(1))
    if (direction === 'right') {
      if (Path === '/') {
        return history.push('/' + chapters[0].toLowerCase())
      }

      const getNextI = (cur: number) => {
        if (cur === chapters.length - 1) {
          return 0
        } else {
          return cur + 1
        }
      }
      const nextI = getNextI(currentI)
      history.push('/' + chapters[nextI].toLowerCase())
    } else if (direction === 'left') {
      if (Path === '/') {
        return history.push('/' + chapters[chapters.length - 1].toLowerCase())
      }

      const getNextI = (cur: number) => {
        if (cur === 0) {
          return chapters.length - 1
        } else {
          return cur - 1
        }
      }
      const nextI = getNextI(currentI)
      history.push('/' + chapters[nextI].toLowerCase())
    }
  }

  return (
    <>
      <div
        className="z-50 w-full top-0 left-0 right-0 flex justify-center border-red-500 border-b h-10 md:h-16 transition-all duration-500 bg-red-400 shadow-2xl font-courier "
        style={{ position: 'fixed' }}
      >
        <div className="w-1000 2k:w-1500 3k:w-2000 flex items-center gap-x-4 mx-9">
          <a className="flex-grow outline-none">
            <NavLink exact to="/">
              <img
                src={samurai}
                alt=""
                className="w-10 h-10 md:w-16 md:h-16 transition duration-900 cursor-pointer hover:scale-110 "
              />
            </NavLink>
          </a>

          <ALeft />
          {links}
          <ARight />
        </div>
      </div>
    </>
  )
}
