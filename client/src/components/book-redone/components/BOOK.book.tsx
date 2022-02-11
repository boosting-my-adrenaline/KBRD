import React from 'react'
import useLanguage from '../../../hooks/useLanguage'

interface IProps {
  STRING: string
  fontW: boolean
}

export const BOOKBook: React.FC<IProps> = ({ STRING, fontW }) => {
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
  const { isEng } = useLanguage()

  return (
    <div
      className={`w-1000 ${
        fontW ? `font-courier font-[100]` : ``
      } visible z-40 flex flex-col space-y-4 text-2xl  transition duration-700 ease-in-out`}
    >
      <div
        className={`w-1000  z-40 flex flex-col space-y-4 text-2xl text-gray-800 `}
      >
        {/* <div>{`\u00a0`}</div> */}
        <div>{`\u00a0`}</div>

        {/* {rowing(LEFT3)} */}
        {/* <div className={`text-gray-700`}>{rowing(LEFT3)}</div> */}

        {/* <div className={`text-gray-800`}>{rowing(LEFT2)}</div> */}
        <div className={`text-gray-100`}>{rowing(LEFT1)}</div>

        <div className={`flex flex-row text-black`}>
          <div className={`text-gray-100`}>{rowing(LEFT)}</div>

          <div>{rowing(RIGHT)}</div>
        </div>

        <div className={`text-gray-100`}>{rowing(RIGHT1)}</div>

        {/* <div className={`text-gray-800`}>{rowing(RIGHT2)}</div> */}
        {/* <div className={`text-gray-700`}>{rowing(RIGHT3)}</div> */}

        <div>{`\u00a0`}</div>
        {/* <div>{`\u00a0`}</div> */}
      </div>
    </div>
  )
}
