import { Info, InfoRounded, WarningRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDidMountEffect } from '../../../../utils/useDidMountEffect'

interface IProps {
  tag: string
  onClick?(active: boolean): void
  active: boolean
  hoverInfo?: string
  disabled?: boolean
}

export const BOOKbuttonVisual: React.FC<IProps> = ({
  tag,
  onClick = () => {},
  active,
  hoverInfo = 'just a text to test if its working',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const [info, setInfo] = useState(false)

  useDidMountEffect(() => {
    let id = setTimeout(
      () => {
        isHovered ? setInfo(false) : setInfo(false)
      },
      isHovered ? 700 : 10
    )

    return () => clearTimeout(id)
  }, [isHovered])

  return (
    <div
      className={` flex items-center justify-center overflow-hidden rounded-xl`}
      style={{
        transform: `translateY(${isHovered ? -3 : 0}px)`,
        transition: '0.15s ease',
      }}
    >
      <button
        tabIndex={-1}
        // className={`z-10  p-3 rounded-full justify-self-end outline-none text-${
        //   disabled ? 'gray-500' : active ? 'gray-800' : 'gray-600'
        // } ${disabled ? 'cursor-not-allowed' : ''}`}

        className={`relative overflow-hidden z-10 px-4 py-2 rounded-xl  justify-self-end outline-none text-${
          disabled ? 'gray-500' : active ? 'gray-800' : 'gray-600'
        } ${disabled ? 'cursor-not-allowed' : ''}`}
        style={{
          backgroundColor: disabled
            ? 'lightgray'
            : active
            ? 'lightcoral'
            : 'lightgrey',
          transition: '1s ease-in-out',
        }}
        onMouseDown={(e) => {
          if (disabled) return
          e.preventDefault()
          onClick(!active)
          setIsHovered(false)
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {tag}
        <div
          className={`absolute -z-10 `}
          style={{
            transform: `translate(${!isHovered ? `-250` : '-20'}px, -100px)`,
            transition: '0.3s ease-in-out',
          }}
        >
          <div
            className={`bg-red-200`}
            style={{ width: 220, height: 150, transform: `rotate(20deg)` }}
          ></div>
        </div>
      </button>
      <button
        className={`absolute  px-3 py-1 rounded-xl  animate-pulse `}
        disabled
        style={{
          boxShadow: active && !disabled ? '0 0 5px 4px lightcoral' : '',
          transition: '0.5s ease',
          color: 'transparent',
        }}
      >
        {tag}
      </button>

      <div
        className={`${
          info ? 'visible' : 'invisible'
        } transition-150 absolute z-20 border border-gray-500 text-center text-sm 
        px-2 py-4 rounded-lg
         bg-${
           !disabled ? 'blue-200' : 'yellow-300'
         } flex justify-center items-end opacity-60`}
        style={{
          width: 200,
          transform: 'translateY(-70px)',
        }}
      >
        <div className={'z-30'}>{hoverInfo}</div>
        <div
          className={`z-20 absolute border-b border-r border-gray-500 p  bg-${
            !disabled ? 'blue-200' : 'yellow-300'
          }`}
          style={{
            transform: 'translate(0px, 29px) rotateZ(45deg)',
            width: 25,
            height: 25,
          }}
        >
          {/* <div style={{ transform: `rotate(-45deg) translate(0, -2px)` }}>
            {disabled ? <WarningRounded /> : <InfoRounded />}
          </div> */}
        </div>
      </div>
    </div>
  )
}

interface IProps2 {
  title: string
  onClick(): void
}

export const BOOKbuttonVisualFunctional: React.FC<IProps2> = ({
  title,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`overflow-hidden rounded-xl`}
      style={{
        transform: `translateY(${hover ? -3 : 0}px)`,
        transition: '0.15s ease',
      }}
    >
      <div
        className={`relative overflow-hidden rounded-xl px-4 py-2  border border-red-400 active:bg-red-100 cursor-pointer `}
        style={{
          transition: '0.25s ease-in-out',
        }}
        onMouseDown={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <div
          className={`absolute -z-10 `}
          style={{
            transform: `translate(${!hover ? `-245` : '-120'}px, -100px)`,
            transition: '0.3s ease-in-out',
          }}
        >
          <div
            className={`bg-red-400`}
            style={{ width: 220, height: 150, transform: `rotate(20deg)` }}
          ></div>
        </div>
        <div
          className={`-z-20 absolute bg-red-200`}
          style={{
            width: 200,
            height: 100,
            transform: `translate(-100px, -50px)`,
          }}
        ></div>
      </div>
    </div>
  )
}
