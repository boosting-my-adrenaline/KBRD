import React, { useState, KeyboardEvent, useRef } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import animationGif from '../../static/animation.gif'
import animationGif2 from '../../static/animation2.gif'
import animationGif3 from '../../static/animation3.gif'
import animationGif4 from '../../static/animation4.gif'

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
  borderActive?: string
  bg?: string
  hov?: string
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
  borderActive = `border-sky-500`,
  id = `login`,
  bg = `bg-sky-100`,
  hov = `bg-sky-300/80`,
  text = `text-2xl`,
  height = 60,
  the34 = false,
}) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [placeholderState, setPlaceholderState] = useState(false)

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
      return `text-red-500`
    } else if (success) {
      return `text-emerald-500`
    } else if (warning) {
      return `text-amber-500`
    } else {
      return `text-gray-600/80`
    }
  }

  const borderColor = () => {
    if (error) {
      return `border-red-300`
    } else if (success) {
      return `border-emerald-300`
    } else if (warning) {
      return `border-amber-300`
    } else {
      return border
    }
  }

  const borderActiveColor = () => {
    if (error) {
      return `border-red-500`
    } else if (success) {
      return `border-emerald-500`
    } else if (warning) {
      return `border-amber-500`
    } else {
      return borderActive
    }
  }

  const bgColor = () => {
    if (error) {
      return `bg-red-100`
    } else if (success) {
      return `bg-emerald-100`
    } else if (warning) {
      return `bg-amber-100`
    } else {
      return bg
    }
  }

  const hoverColor = () => {
    if (error) {
      return `bg-red-300`
    } else if (success) {
      return `bg-emerald-300`
    } else if (warning) {
      return `bg-amber-300`
    } else {
      return hov
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

  return (
    <div className={`flex flex-col items-stretch`}>
      <div
        className={` text-sm ${
          placeholderState ? placeholderColor() : `text-transparent`
        } pl-4 transition duration-275 ease-in-out font-thin`}
        style={{
          transform: `translateX(${placeholderState ? 0 : 300}px)`,
        }}
      >
        {placeholder}:
      </div>

      <div
        className={`flex items-center overflow-hidden relative justify-center rounded-lg`}
        style={{ height: height }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`flex items-center justify-center w-f h-f`}>
          <input
            className={`w-f h-f border pl-4 ${
              active || hover ? borderActiveColor() : borderColor()
            } 
          ${active ? `text-gray-800` : `text-gray-700`}
          rounded-lg bg-transparent active:bg-transparent hover:bg-transparent focus:bg-transparent outline-none ${text}`}
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
              className={`absolute flex justify-center items-center rounded-lg cursor-pointer border hover:-translate-y-0.5 ${borderActiveColor()} ${hoverColor()} transition duration-250 ease-in-out`}
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
          className={`absolute -z-10 transition duration-275 ease-in-out`}
          style={{
            transform: `translate(${
              !hover && !active ? `-550` : '10'
            }px, -10px) `,
          }}
        >
          <div
            className={`${hoverColor()} border ${borderActiveColor()}  flex items-center flex-row-reverse rotate-20deg`}
            style={{ width: 550, height: 255 }}
          ></div>
        </div>
        <div
          className={`-z-20 absolute 
          ${bgColor()}
          `}
          style={{
            width: 550,
            height: 100,
          }}
        />
        <div
          className={`-z-10 absolute bg-transparent flex items-center pl-4 w-f h-f ${text} ${placeholderColor()}   font-thin transition duration-275 ease-in-out`}
          style={{
            transform: `translateX(${active || hover || value ? 550 : 0}px)`,
          }}
        >
          {placeholder}
        </div>
      </div>

      <div className={`text-sm pl-4  ${placeholderColor()}`}>
        {helper.trim() ? helper : `\u00a0`}
      </div>
    </div>
  )
}
