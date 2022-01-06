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
          className={`border border-gray-800 bg-red-100 rounded-lg p-1 shadow-6th shadow-red-300  ${
            hover && `shadow-3xl shadow-red-500`
          }
       `}
          style={{
            transform: `translateY(${hover ? -2 : 0}px)`,
            transition: '0.2s ease',
            height: 40,
            width: 40,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <div
          className={`flex flex-col `}
          style={{
            transition: '0.2s ease',
            // height: 40,
            // width: 40,
          }}
        >
          <div className={`font-medium whitespace-nowrap text-md`}>{title}</div>
          <div className={`invisibl flex `} style={{}}>
            {Array.from({ length: award }, (el) => true).map((el) => (
              <img src={star} style={{ width: 12, height: 12 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
