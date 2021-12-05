import { margin } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { Hexagon } from './Hexagon'
import { GridHex } from './HexGrid'

interface IProps {
  show: boolean
}

export const LoadingScreen: React.FC<IProps> = ({ show }) => {
  const [borders, setBorders] = useState(false)

  useDidMountEffect(() => {
    setBorders(true)
    let id = setTimeout(() => setBorders(false), 350)

    return () => {
      clearTimeout(id)
      setBorders(true)
    }
  }, [show])

  return (
    <>
      <div
        className={`${
          show ? 'visible' : 'invisible'
        } absolute top-0 bottom-0 left-0 right-0 flex justify-center`}
        style={{
          zIndex: 2021,
          gap: show ? 0 : '100%',
          transition: `0.25s ease-in-out`,
        }}
      >
        <div
          className={` visible flex justify-end overflow-hidden box-content  opacity-70 ${
            borders ? '' : ''
          } border-red-500`}
          style={{
            width: `${1 ? '50%' : '0%'}`,
            backgroundColor: 'rgb(252, 211, 77)',
          }}
        ></div>
        <div
          className={` visible flex  justify-start overflow-hidden  box-content  opacity-70 ${
            borders ? '' : ''
          } border-red-500`}
          style={{
            width: `${1 ? '50%' : '0%'}`,
            backgroundColor: 'rgb(252, 211, 77)',
          }}
        ></div>

        <div
          className={`  fixed top-0 bottom-0 left-0 right-0 w-f h-f opacity-${
            show && !borders ? '60' : 0
          } opacity-0`}
          style={{
            transition: '0.5s ease',
          }}
        >
          {show && !borders ? <GridHex L={22} W={19} /> : null}
        </div>
      </div>
    </>
  )
}
