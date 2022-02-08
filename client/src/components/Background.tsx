import React, { useEffect, useState } from 'react'
import svg2 from '../static/svg2.svg'
import svgbook2 from '../static/svgbook2.svg'
import svg3 from '../static/svg3.svg'
import svg4 from '../static/svg4.svg'
import svg5 from '../static/svg5.svg'
import svg6 from '../static/svg6.svg'
import svg7 from '../static/svg7.svg'
import svg8 from '../static/svg8.svg'
import svg4041 from '../static/svg4041.svg'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { MainState } from '../App'

interface IProps {
  mainState: MainState
}

export const Background: React.FC<IProps> = ({ mainState }) => {
  // const mainState = useTypedSelector((state) => state.nav.chapter)

  const bgColor = (): string => {
    switch (mainState) {
      case MainState.MAIN:
        return 'bg-emerald-100'
      case MainState.BOOK:
        return 'bg-red-100'
      case MainState.TAP:
        return 'bg-sky-100'
      case MainState.INFO:
        return 'bg-amber-100'
    }
  }

  const getImage = () => {
    switch (mainState) {
      case MainState.MAIN:
        return [svg2, `auto 100%`, `left`]
      case MainState.BOOK:
        return [svgbook2, `100% auto`, `bottom`]
      case MainState.TAP:
        return [svg5, `100% auto`, `bottom`]
      case MainState.INFO:
        return [svg8, `100% 100%`, `center`]

      default:
        return []
    }
  }

  const [appear, setAppear] = useState(false)
  const [params, setParams] = useState(getImage())

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 100)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id0 = setTimeout(() => {
      setAppear(false)
    }, 350)

    let id1 = setTimeout(() => {
      setParams(getImage())
    }, 850)

    let id2 = setTimeout(() => {
      setAppear(true)
    }, 1050)
    // return () => clearTimeout(id)
  }, [mainState])

  return (
    <div
      className={`w-f fixed top-0 bottom-0 right-0 ${bgColor()} duration-2000 transition-colors ease-in-out`}
    >
      <div
        className={`fixed top-0 left-0 bottom-0 right-0  ${
          appear ? `${params[3]}` : `opacity-0`
        } duration-600 transition ease-in-out `}
        style={{
          backgroundImage: ` url(${params[0]})`,
          backgroundRepeat: `no-repeat no-repeat`,
          backgroundSize: params[1],
          backgroundPosition: params[2],
        }}
      ></div>
    </div>
  )
}
