import React, { useState, useEffect } from 'react'
import { MainState } from '../App'
import useDarkMode from '../hooks/useDarkMode'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { PerspectiveController } from './PerspectiveController'
import GH from '../static/profiles/GH.svg'

interface IProps {
  below?: boolean
  mainState?: MainState
}

export const Footer: React.FC<IProps> = ({ below = false, mainState = 1 }) => {
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
  }, [mainState])

  const [emailCopy, setEmailCopy] = useState(false)

  const handleCopyEmail = async () => {
    // document.execCommand('copy', true, `away.float.away@gmail.com`)
    let text = `away.float.away@gmail.com`
    setEmailCopy(true)
    setTimeout(() => setEmailCopy(false), 750)
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const { isDarkMode } = useDarkMode()

  return (
    <>
      <div
        className={`z-2022 font-Cooper fixed bottom-0 right-0 left-0  flex w-full border-t border-gray-500 py-2 ${
          appear || `translate-y-20`
        }  flex-between ${
          below
            ? `justify-around bg-gray-800 text-white `
            : `gap-6  ${isDarkMode ? 'text-gray-100' : ''}`
        } items-center bg-gray-400/30 opacity-100 transition duration-500 ease-in-out `}
        style={{
          padding: !below ? `5px ${params[1]}px` : `6px 2px`,
          fontSize: params[0] + 'px',
        }}
      >
        {below || (
          <a className={`whitespace-nowrap`}>
            &copy; 2022 KBRD. All rights reserved{' '}
          </a>
        )}
        {below || <a className={`flex-grow`}></a>}
        <div
          className={`text-md relative flex items-center justify-center rounded-xl px-2 transition-colors duration-150 hover:bg-emerald-100 hover:text-gray-800`}
        >
          <a onMouseDown={handleCopyEmail}>away.float.away@gmail.com</a>
          {emailCopy && (
            <div
              className={`absolute ${
                !emailCopy && `opacity-0`
              }  w-f h-f font-courier flex items-center justify-center rounded-xl  bg-emerald-300 transition duration-300 ease-in-out`}
            >
              Copied!
            </div>
          )}
        </div>

        <a
          href={`https://github.com/boosting-my-adrenaline`}
          target={'_blank'}
          className={`flex cursor-pointer items-center gap-2 underline decoration-sky-500`}
        >
          <img
            src={GH}
            alt=""
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
