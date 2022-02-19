import React from 'react'
import useColor from '../../../hooks/useColor'
import useDarkMode from '../../../hooks/useDarkMode'
import { useWindowSize } from '../../../hooks/useDimensions'
import useLanguage from '../../../hooks/useLanguage'

interface IProps {
  STRING: string
  fontW: boolean
}

export const RUSBOOKBook: React.FC<IProps> = ({ STRING, fontW }) => {
  const RIGHT: string = STRING.slice(0, 35)
  const RIGHT1: string = STRING.slice(35, 105)
  const RIGHT2: string = STRING.slice(105, 175)
  const RIGHT3: string = STRING.slice(175, 245)
  const LEFT: string = STRING.slice(-35)
  const LEFT1: string = STRING.slice(-105, -35)
  const LEFT2: string = STRING.slice(-175, -105)
  const LEFT3: string = STRING.slice(-245, -175)

  const formating = (str: string) => {
    return str.replace(/ /g, '\u00a0')
  }

  const rowing = (str: string) => {
    return (
      <div className={`flex w-full flex-row whitespace-nowrap`}>
        {formating(str)}
      </div>
    )
  }

  const { isDarkMode } = useDarkMode()
  const { isEng } = useLanguage()

  const { width } = useWindowSize()
  let xl = width >= 1500

  const { themeColor1 } = useColor()
  return (
    <div
      className={`w-1000 ${
        !fontW ? `font-CourierC` : `font-CourierC font-extrabold`
      } visible z-40 flex flex-col  transition duration-700 ease-in-out`}
    >
      <div
        className={`w-1000  z-40 flex flex-col space-y-4 text-2xl ${
          isDarkMode ? `text-[rgb(17 24 39)]` : themeColor1.text.t100
        } `}
      >
        <div className={``}>{rowing(LEFT1)}</div>

        <div className={`flex flex-row  `}>
          <div>{rowing(LEFT)}</div>

          <div className={isDarkMode ? `text-gray-50` : `text-black`}>
            {rowing(RIGHT)}
          </div>
        </div>

        <div className={``}>{rowing(RIGHT1)}</div>
      </div>
    </div>
  )
}
