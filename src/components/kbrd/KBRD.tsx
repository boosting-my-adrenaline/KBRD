import React from 'react'

export const KBRD: React.FC<{ STRING: string }> = ({ STRING }) => {
  const FIRST: string = STRING.slice(0, 1)
  const RIGHT: string = STRING.slice(1, 35)
  const RIGHT1: string = STRING.slice(35, 105)
  const RIGHT2: string = STRING.slice(105, 175)
  const RIGHT3: string = STRING.slice(175, 245)
  const LEFT: string = STRING.slice(-35)
  const LEFT1: string = STRING.slice(-105, -35)
  const LEFT2: string = STRING.slice(-175, -105)
  const LEFT3: string = STRING.slice(-245, -175)

  const formating = (str: string) => {
    return str
      .split('')
      .map((el) => (el !== ' ' ? <div>{el}</div> : <div>{'\u00A0'}</div>))
  }

  const rowing = (str: string) => {
    return <div className="w-full flex flex-row">{formating(str)}</div>
  }

  return (
    <>
      <div className="w-1000 z-10 font-courier text-2xl flex flex-col space-y-4 ">
        {rowing(LEFT3)}
        {rowing(LEFT2)}
        {rowing(LEFT1)}

        <div className="flex flex-row">
          {rowing(LEFT)}

          <div className=" rounded-sm">{rowing(FIRST)}</div>

          {rowing(RIGHT)}
        </div>

        {rowing(RIGHT1)}
        {rowing(RIGHT2)}
        {rowing(RIGHT3)}
      </div>
    </>
  )
}
