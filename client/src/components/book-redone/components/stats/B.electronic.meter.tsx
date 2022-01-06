import React from 'react'

interface IProps {
  mileage: number
  hidden?: boolean
  red?: boolean
}

export const BOOKelectronicmeter: React.FC<IProps> = ({
  mileage,
  hidden = false,
  red = false,
}) => {
  let first = mileage % 10
  let second = Math.floor((mileage % 100) / 10)
  let third = Math.floor((mileage % 1_000) / 100)
  let fourth = Math.floor((mileage % 10_000) / 1_000)
  let fifth = Math.floor((mileage % 100_000) / 10_000)
  let sixth = Math.floor((mileage % 1_000_000) / 100_000)

  let element = (num: number | string) => (
    <div
      className={`borde border-emerald-400 text-emerald-600 ${
        red && `border-red-400 text-red-600`
      }  flex items-center justify-center`}
      style={{
        textShadow: !red
          ? '0 0 1.5px  rgba(16, 185, 129, 0.85)'
          : '0 0 1.5px  rgba(244, 63 ,94, 0.85)',
        width: 20,
        height: 25,
      }}
    >
      {num}
    </div>
  )
  if (red) {
    return (
      <>
        {!hidden ? (
          <div className={`flex`}>
            {element(third)}
            {element(second)}
            {element(first)}
          </div>
        ) : (
          <div className={`flex`}>
            {mileage < 100 ? element(`\u00a0`) : element(third)}
            {mileage < 10 ? element(`\u00a0`) : element(second)}
            {mileage < 1 ? element(0) : element(first)}
          </div>
        )}
      </>
    )
  }

  return (
    <>
      {!hidden ? (
        <div className={`flex`}>
          {element(sixth)}
          {element(fifth)}
          {element(fourth)}
          {element(third)}
          {element(second)}
          {element(first)}
        </div>
      ) : (
        <div className={`flex`}>
          {mileage < 100_000 ? element(`\u00a0`) : element(sixth)}
          {mileage < 10_000 ? element(`\u00a0`) : element(fifth)}
          {mileage < 1_000 ? element(`\u00a0`) : element(fourth)}
          {mileage < 100 ? element(`\u00a0`) : element(third)}
          {mileage < 10 ? element(`\u00a0`) : element(second)}
          {mileage < 1 ? element(0) : element(first)}
        </div>
      )}
    </>
  )
}
