import React, { useState, useEffect, useRef } from 'react'
import samurai from './../../static/samurai.svg'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current++
  })

  const links = ['KBRD', 'JSON', 'Info'].map((link: string) => (
    <NavLink exact to={`/${link.toLowerCase()}`}>
      <a className="text:2xl md:text-4xl  flex-row  transition-all underline hover:no-underline  text-gray-800 hover:text-black cursor-pointer">
        {link}
      </a>
    </NavLink>
  ))

  return (
    <>
      <div
        className="w-full flex justify-center border-red-500  border-b h-10 md:h-16 transition-all duration-500 bg-red-400 shadow-xl font-courier "
        style={{ position: 'sticky' }}
      >
        <div className="w-1000 2k:w-1500 3k:w-2000 flex items-center gap-x-4 mx-5">
          <a className="flex-grow">
            <NavLink exact to="/">
              <img
                src={samurai}
                alt=""
                className="w-10 h-10 md:w-16 md:h-16 transition duration-500 cursor-pointer hover:scale-110 "
              />{' '}
            </NavLink>
          </a>

          {links}
        </div>
      </div>
    </>
  )
}
