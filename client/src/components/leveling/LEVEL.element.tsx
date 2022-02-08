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
      <div className={`flex flex-nowrap items-start gap-4 `}>
        <img
          src={image}
          className={`h-40px w-40px shadow-6th hover:-translate-y-3px  rounded-lg border border-gray-800 bg-red-100 p-1 shadow-red-300 ${
            hover && `shadow-3xl shadow-red-500`
          } transition duration-200 ease-linear `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <div className={`flex flex-col transition duration-200 ease-linear`}>
          <div className={`text-md whitespace-nowrap font-medium`}>{title}</div>
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
