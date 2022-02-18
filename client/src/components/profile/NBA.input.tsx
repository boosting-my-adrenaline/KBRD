import React, { useState, KeyboardEvent, useRef } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import animationGif from '../../static/animation.gif'
import animationGif2 from '../../static/animation2.gif'
import animationGif3 from '../../static/animation3.gif'
import animationGif4 from '../../static/animation4.gif'
import useLanguage from '../../hooks/useLanguage'
import useDarkMode from '../../hooks/useDarkMode'

// onChange={(e) => setUsername(e.target.value.replaceAll(' ', ''))}

interface IProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  helper: string
  focus?: any
  onEnter?: () => void
  password?: boolean
  id?: string
  type?: string
  error?: boolean
  success?: boolean
  warning?: boolean
  border?: string
  borderDark?: string
  borderActive?: string
  borderActiveDark?: string
  bg?: string
  bgDark?: string
  hov?: string
  hovDark?: string
  text?: string
  height?: number
  the34?: boolean
}

export const NBAinput: React.FC<IProps> = ({
  value = '',
  onChange,
  focus,
  onEnter = () => {},
  password = false,
  placeholder,
  helper,
  type,
  error = false,
  success = false,
  warning = false,
  border = `border-sky-300`,
  borderDark = `border-sky-200`,
  borderActive = `border-sky-500`,
  borderActiveDark = `border-sky-100`,
  id = `login`,
  bg = `bg-sky-100`,
  bgDark = `bg-sky-900`,
  hov = `bg-sky-300/80`,
  hovDark = `bg-sky-700`,
  text = `text-2xl`,
  height = 60,
  the34 = false,
}) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [placeholderState, setPlaceholderState] = useState(false)

  const { isDarkMode } = useDarkMode()

  useDidMountEffect(() => {
    if (!hover && !active && !value) {
      setPlaceholderState(false)
    }
    let id0 = setTimeout(() => {
      if (hover || active || value) {
        setPlaceholderState(true)
      }
    }, 400)

    return () => {
      clearTimeout(id0)
    }
  }, [hover, active, value])

  useDidMountEffect(() => {
    inputRef.current.focus()
  }, [focus])

  const placeholderColor = () => {
    if (error) {
      return isDarkMode ? `text-red-300` : `text-red-500`
    } else if (success) {
      return isDarkMode ? `text-emerald-300` : `text-emerald-500`
    } else if (warning) {
      return isDarkMode ? `text-amber-300` : `text-amber-500`
    } else {
      return isDarkMode ? `text-gray-300` : `text-gray-600/80`
    }
  }

  const borderColor = () => {
    if (error) {
      return isDarkMode ? `border-red-400` : `border-red-300`
    } else if (success) {
      return isDarkMode ? `border-emerald-400` : `border-emerald-300`
    } else if (warning) {
      return isDarkMode ? `border-amber-400` : `border-amber-300`
    } else {
      return isDarkMode ? borderDark : border
    }
  }

  const borderActiveColor = () => {
    if (error) {
      return isDarkMode ? `border-red-200` : `border-red-500`
    } else if (success) {
      return isDarkMode ? `border-emerald-200` : `border-emerald-500`
    } else if (warning) {
      return isDarkMode ? `border-amber-200` : `border-amber-500`
    } else {
      return isDarkMode ? borderActiveDark : borderActive
    }
  }

  const bgColor = () => {
    if (error) {
      return isDarkMode ? `bg-red-900` : `bg-red-100`
    } else if (success) {
      return isDarkMode ? `bg-emerald-900` : `bg-emerald-100`
    } else if (warning) {
      return isDarkMode ? `bg-amber-900` : `bg-amber-100`
    } else {
      return isDarkMode ? bgDark : bg
    }
  }

  const hoverColor = () => {
    if (error) {
      return isDarkMode ? `bg-red-700` : `bg-red-300`
    } else if (success) {
      return isDarkMode ? `bg-emerald-700` : `bg-emerald-300`
    } else if (warning) {
      return isDarkMode ? `bg-amber-700` : `bg-amber-300`
    } else {
      return isDarkMode ? hovDark : hov
    }
  }

  const inputRef = useRef<any>(null)

  const onKeyHandler = (event: KeyboardEvent) => {
    if (event.key === `Enter`) {
      onEnter()
    }
  }

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setTimeout(() => setShow((prev) => !prev), 175)
  }

  const { isEng } = useLanguage()

  return (
    <div
      className={`flex flex-col items-stretch ${
        isEng ? `font-courier` : `font-CourierC`
      }`}
    >
      <div
        className={` text-sm ${
          placeholderState ? placeholderColor() : `text-transparent`
        } duration-275 pl-4 font-thin transition ease-in-out`}
        style={{
          transform: `translateX(${placeholderState ? 0 : 300}px)`,
        }}
      >
        {placeholder}:
      </div>

      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg`}
        style={{ height: height }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`w-f h-f flex items-center justify-center`}>
          <input
            className={`} w-f h-f border pl-4 ${
              active || hover ? borderActiveColor() : borderColor()
            } 
          ${
            active
              ? isDarkMode
                ? `text-gray-100`
                : `text-gray-800`
              : isDarkMode
              ? `text-gray-300`
              : `text-gray-700`
          }
          rounded-lg bg-transparent outline-none hover:bg-transparent focus:bg-transparent active:bg-transparent ${text}`}
            id={id}
            type={!show ? type : ``}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            value={value}
            onChange={(e) => onChange(e.target.value.replaceAll(' ', ''))}
            autoFocus
            ref={inputRef}
            onKeyDown={onKeyHandler}
          />
          {password && (
            <div
              className={`absolute flex cursor-pointer items-center justify-center rounded-lg border hover:-translate-y-0.5 ${borderActiveColor()} ${hoverColor()} duration-250 transition ease-in-out`}
              style={{
                height: 20,
                width: 48,
                right: 10,
              }}
              onMouseDown={handleShow}
            >
              {the34 ? (
                <>
                  {' '}
                  {show ? (
                    <img alt="show" src={animationGif} />
                  ) : (
                    <img alt="hide" src={animationGif2} />
                  )}
                </>
              ) : (
                <>
                  {' '}
                  {show ? (
                    <img alt="show" src={animationGif3} />
                  ) : (
                    <img alt="hide" src={animationGif4} />
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div
          className={`duration-275 absolute -z-10 transition ease-in-out`}
          style={{
            transform: `translate(${
              !hover && !active ? `-550` : '10'
            }px, -10px) `,
          }}
        >
          <div
            className={`${hoverColor()} border ${borderActiveColor()}  rotate-20deg flex flex-row-reverse items-center`}
            style={{ width: 550, height: 255 }}
          ></div>
        </div>
        <div
          className={`absolute -z-20 
          ${bgColor()}
          `}
          style={{
            width: 550,
            height: 100,
          }}
        />
        <div
          className={`w-f h-f absolute -z-10 flex items-center bg-transparent pl-4 ${text} ${placeholderColor()}   duration-275 font-thin transition ease-in-out`}
          style={{
            transform: `translateX(${active || hover || value ? 550 : 0}px)`,
          }}
        >
          {placeholder}
        </div>
      </div>

      <div className={`pl-4 text-sm  ${placeholderColor()}`}>
        {helper.trim() ? helper : `\u00a0`}
      </div>
    </div>
  )
}
