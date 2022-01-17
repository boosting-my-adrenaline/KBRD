import { GitHub } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDidMountEffect } from '../utils/useDidMountEffect'
import { PerspectiveController } from './PerspectiveController'

interface IProps {
  below?: boolean
}

export const Footer: React.FC<IProps> = ({ below = false }) => {
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

  return (
    <>
      <div
        className={`z-2022 w-full fixed bottom-0 right-0 left-0  border-t border-gray-500 py-2  flex  flex-between ${
          below ? `justify-around text-white bg-gray-800 ` : `gap-6 `
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
          className={`flex items-center justify-center hover:bg-emerald-100 hover:text-gray-800 relative text-md px-2 rounded-xl transition-colors duration-150`}
        >
          <a onMouseDown={handleCopyEmail}>away.float.away@gmail.com</a>
          {emailCopy && (
            <div
              className={`absolute ${
                !emailCopy && `opacity-0`
              }  bg-emerald-300 w-f h-f flex justify-center items-center rounded-xl  font-courier transition duration-300 ease-in-out`}
            >
              Copied!
            </div>
          )}
        </div>

        <a
          href={`https://github.com/boosting-my-adrenaline`}
          target={'_blank'}
          className={`flex items-center gap-2 cursor-pointer underline decoration-sky-500`}
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
