import React from 'react'

interface IProps {
  STRING: string
  highlighter: boolean
}

export const BOOKLayout: React.FC<IProps> = ({ STRING, highlighter }) => {
  const rawRIGHT: string = STRING.slice(0, 35)
  const rawRIGHT1: string = STRING.slice(35, 105)
  const rawRIGHT2: string = STRING.slice(105, 175)
  const rawRIGHT3: string = STRING.slice(175, 245)
  const rawLEFT: string = STRING.slice(-35)
  const rawLEFT1: string = STRING.slice(-105, -35)
  const rawLEFT2: string = STRING.slice(-175, -105)
  const rawLEFT3: string = STRING.slice(-245, -175)

  const formating = (str: string) => {
    return str.split('').map((el, i) => {
      if (el === ' ') {
        return (
          <div key={el + i} className="bg-red-00 select-none">
            {'\u00A0'}
            {/* {el} */}
          </div>
        )
      } else {
        return (
          <div
            key={el + i}
            className={`bg-ed-200 flex select-none items-center justify-center ${
              !highlighter && `opacity-0`
            }`}
          >
            {'\u00A0'}
            {/* {el} */}
            <div
              className={`absolute rounded-sm bg-red-200`}
              style={{ padding: '0 2px' }}
            >
              {'\u00A0'}
            </div>
          </div>
        )
      }
    })
  }

  const rowing = (str: string, bl?: 1 | 2) => {
    let bluring = bl === 1 ? `opacity-80` : bl === 2 ? `opacity-70` : ` `

    return (
      <div className={`flex w-full flex-row ${bluring}`}>{formating(str)}</div>
    )
  }

  return (
    <div
      className={`z-31 visible absolute rounded-xl transition duration-700 ease-in-out `}
    >
      <div className="w-1000 font-courier z-10 flex flex-col space-y-4 text-2xl  ">
        {/* <div className="flex flex-row ">{'\u00A0'}</div> */}

        {rowing(rawLEFT3, 2)}
        {rowing(rawLEFT2, 1)}
        {rowing(rawLEFT1)}

        <div className="flex flex-row">
          {rowing(rawLEFT)}

          {rowing(rawRIGHT)}
        </div>

        {rowing(rawRIGHT1)}
        {rowing(rawRIGHT2, 1)}
        {rowing(rawRIGHT3, 2)}
        {/* <div className="flex flex-row ">{'\u00A0'}</div> */}
      </div>
    </div>
  )
}
