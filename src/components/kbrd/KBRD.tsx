import React from 'react'

export type PropsKBRD = {
  FIRST: string
  RIGHT: string
  RIGHT1: string
  RIGHT2: string
  RIGHT3: string
  LEFT: string
  LEFT1: string
  LEFT2: string
  LEFT3: string
}

export const KBRD: React.FC<PropsKBRD> = ({
  FIRST = '',
  RIGHT = '',
  RIGHT1 = '',
  RIGHT2 = '',
  RIGHT3 = '',
  LEFT = '',
  LEFT1 = '',
  LEFT2 = '',
  LEFT3 = '',
}: PropsKBRD) => {
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
      <div className="w-1000 mt-12 md:mt-32 bg-red-100 font-courier text-2xl flex flex-col space-y-4">
        {rowing(LEFT3)}
        {rowing(LEFT2)}
        {rowing(LEFT1)}

        <div className="flex flex-row">
          {rowing(LEFT)}

          <div className="bg-red-600">{rowing(FIRST)}</div>

          {rowing(RIGHT)}
        </div>

        {rowing(RIGHT1)}
        {rowing(RIGHT2)}
        {rowing(RIGHT3)}

        <div></div>
      </div>
    </>
  )
}
