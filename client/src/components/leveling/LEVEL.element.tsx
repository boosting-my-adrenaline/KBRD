import React, { useState } from 'react'
import star from '../../static/awardstar.svg'

interface IProps {
  image: any
  title: string
  description?: string | null
  width: number | string
  award: number
}

export const LEVELelement: React.FC<IProps> = ({
  image,
  title,
  width,
  award,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={`  borde border-gray-800 `}
      style={{ margin: '4px 0', flex: width }}
    >
      <div className={`flex gap-4 flex-nowrap items-start `}>
        <img
          src={image}
          className={`border border-gray-800 h-40px w-40px  bg-red-100 rounded-lg p-1 shadow-6th shadow-red-300 hover:-translate-y-3px ${
            hover && `shadow-3xl shadow-red-500`
          } transition duration-200 ease-linear `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <div className={`flex flex-col transition duration-200 ease-linear`}>
          <div className={`font-medium whitespace-nowrap text-md`}>{title}</div>
          <div className={`invisibl flex `}>
            {Array.from({ length: award }, (el) => true).map((_, i) => (
              <img key={i} src={star} style={{ width: 12, height: 12 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
