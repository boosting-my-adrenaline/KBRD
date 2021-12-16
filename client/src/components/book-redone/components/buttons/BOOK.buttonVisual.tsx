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
        isHovered ? setInfo(true) : setInfo(false)
      },
      isHovered ? 700 : 10
    )

    return () => clearTimeout(id)
  }, [isHovered])

  return (
    <div
      className={` flex items-center justify-center`}
      style={{
        transform: `translateY(${isHovered ? -5 : 0}px)`,
        transition: '0.15s ease',
      }}
    >
      <button
        tabIndex={-1}
        className={`z-10  p-3 rounded-full justify-self-end outline-none text-${
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
      </button>
      <button
        className={`absolute p-2 rounded-full animate-pulse `}
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
        } transition-150 absolute z-20 border border-gray-500 text-center text-sm px-2 py-4 rounded-lg bg-${
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
