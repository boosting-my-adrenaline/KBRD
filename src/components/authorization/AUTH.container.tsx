import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { AUTHloginContainer } from './login/AUTH.login.container'
import { AUTHsignupContainer } from './signup/AUTH.signup.container'

export const AUTHcontainer: React.FC = ({}) => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => setAppear(true), 50)
    return () => clearTimeout(id)
  }, [])

  useDidMountEffect(() => {
    let id = setTimeout(() => setAppear(false), 100)
    return () => clearTimeout(id)
  }, [chapter])

  const [isSigningUp, setISU] = useState(true)
  const [rotating, setRotating] = useState(0)

  useEffect(() => {
    if (!isSigningUp) {
      setRotating(180)
    } else {
      setRotating(0)
    }
  }, [isSigningUp])

  const WIDTH = 1150
  return (
    <>
      <div
        className={`z-20 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-white`}
      >
        <div
          className={`z-20  items-center justify-center `}
          style={{
            // opacity: appear ? 1 : 0,
            transition: '1s ease',
          }}
        >
          <div
            className={`absolute top-0 left-0 z-20 flex flex-row `}
            style={{ width: WIDTH }}
          >
            <div
              className={`flex justify-center items-center no-select ${
                !isSigningUp ? `cursor-pointer` : ``
              }`}
              style={{ fontSize: '2em', width: '50%', height: 65 }}
              onMouseDown={() => setISU(true)}
            >
              LOG IN
            </div>
            <div
              className={`flex justify-center items-center no-select ${
                isSigningUp ? `cursor-pointer` : ``
              }`}
              style={{
                fontSize: '2em',
                width: '50%',
                height: 65,
              }}
              onMouseDown={() => setISU(false)}
            >
              SIGN UP
            </div>
          </div>
          <div
            className={`fixed top-0 right-0 left-0 h-16 flex flex-row justify-center `}
            style={{
              transform: `rotateY(${rotating}deg)`,
              transition: '1s ease-out',
            }}
          >
            <div
              className={` flex items-center justify-center `}
              style={{
                width: '50%',
                border: '2px solid transparent',
                transform: 'translate(-2px, -2px)',

                borderBottomRightRadius: 10,
              }}
            ></div>
            <div
              className={` flex items-center justify-center bg-gray-300`}
              style={{
                width: '50%',
                border: '2px solid transparent',
                borderLeftColor: 'black',
                borderBottomColor: 'black',
                borderBottomLeftRadius: 10,
              }}
            ></div>
          </div>
          <div
            className={`flex flex-row overflow-y-hidden`}
            style={{
              width: WIDTH * 2,
              height: 620,
              marginTop: 55,
              // overflow: 'hidden',
              transform: isSigningUp
                ? `translateX(${WIDTH / 2}px)`
                : `translateX(${-WIDTH / 2}px)`,
              transition: '0.75s ease-in-out',

              // backgroundColor: 'lightcoral',
            }}
          >
            <div
              className={`flex justify-center items-center`}
              style={{ width: WIDTH }}
            >
              <AUTHloginContainer />
            </div>
            <div
              className={`flex justify-center items-center`}
              style={{ width: WIDTH }}
            >
              <AUTHsignupContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
