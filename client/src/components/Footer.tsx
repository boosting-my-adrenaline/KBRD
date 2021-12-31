import { GitHub } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { PerspectiveController } from './PerspectiveController'

export const Footer: React.FC = ({}) => {
  const chapter = useTypedSelector((state) => state.nav.chapter)
  const [appear, setAppear] = useState(false)

  const [params, setParams] = useState([0, 0])

  const handleSetParams = (fontSize: number, paddingX: number) => {
    setParams([fontSize, paddingX])
  }

  useEffect(() => {
    let id = setTimeout(() => {
      setAppear(true)
    }, 1900)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    setAppear(false)

    let id = setTimeout(() => {
      setAppear(true)
    }, 1510)

    return () => {
      clearTimeout(id)
    }
  }, [chapter])

  return (
    <>
      <div
        className={`w-full fixed bottom-0 right-0 left-0 border-t border-gray-500 py-2  flex gap-6 flex-between items-center`}
        style={{
          zIndex: 2022,
          padding: `5px ${params[1]}px`,
          transform: `translateY(${appear ? 0 : 50}px) `,
          transition: '0.5s ease-in-out',
          backgroundColor: 'rgba(100, 100, 100, 0.15)',
          fontSize: params[0] + 'px',
        }}
      >
        <a>&copy; 2022 KBRD. All rights reserved </a>
        <a className={`flex-grow`}></a>
        <a>away.float.away@gmail.com</a>

        <a
          href={`https://github.com/boosting-my-adrenaline`}
          target={'_blank'}
          className={`flex items-center gap-2 cursor-pointer underline decoration-lime-500`}
        >
          <GitHub
            className={`cursor-pointer`}
            style={{ width: params[0] + 6, height: params[0] + 6 }}
          />
          Github
        </a>
      </div>
      <PerspectiveController setFooter={handleSetParams} />
    </>
  )
}
