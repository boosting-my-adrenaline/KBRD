import React from 'react'
import { FadeText } from './FadeText'

interface IProps {
  str: string
  bg?: string
  font?: string
  delay?: [number, number]
}

export const FadeText3: React.FC<IProps> = ({
  str,
  bg = 'white',
  delay = [300, 700],
  font = 'black',
}) => {
  let arr = str.split(' ')
  let result: string[] = []
  arr.forEach((el) => {
    result.push(el)
    result.push(' ')
  })
  result.pop()

  const text = result.map((el) => {
    if (el !== ' ') {
      return (
        <span className={`bg-${bg} rounded-sm px-1 text-${font}`}>
          {el.split('').map((elem) => (
            <FadeText title={elem} delay={delay} hide={0} />
          ))}
        </span>
      )
    } else {
      return <span>{`\u00A0`}</span>
    }
  })

  return <>{text}</>
}
