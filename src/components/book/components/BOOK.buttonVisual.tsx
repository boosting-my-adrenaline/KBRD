import React from 'react'

interface IProps {
  tag: string
  onClick(active: boolean): void
  active: boolean
}

export const BOOKbuttonVisual: React.FC<IProps> = ({
  tag,
  onClick,
  active,
}) => {
  return (
    <div className={`flex items-center justify-center`}>
      <button
        tabIndex={-1}
        className="z-10 bg-green-500 p-3 rounded-full justify-self-end outline-none "
        style={{
          backgroundColor: active ? 'lightcoral' : 'lightgrey',
          transition: '1s ease-in-out',
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          onClick(!active)
        }}
      >
        {tag}
      </button>
      <button
        className={`absolute p-3 rounded-full animate-pulse`}
        disabled
        style={{
          boxShadow: active ? '0 0 5px 2px lightcoral' : '',
          transition: '0.5s ease',
          color: 'transparent',
        }}
      >
        {tag}
      </button>
    </div>
  )
}
