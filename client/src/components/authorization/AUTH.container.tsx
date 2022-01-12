import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../utils/useDidMountEffect'
import { AUTHloginContainer } from './login/AUTH.login.container'
import { AUTHsignupContainer } from './signup/AUTH.signup.container'

export const AUTHcontainer: React.FC = ({}) => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const [isSigningUp, setISU] = useState(false)
  const [rotating, setRotating] = useState(0)

  useEffect(() => setISU(true), [])

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
        className={`z-20 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-yellow-100 `}
      >
        <div
          className={`z-20  items-center justify-center transition duration-1000 ease-in-out`}
        >
          <div
            className={` absolute top-0 left-0 z-20 flex flex-row `}
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
            className={` fixed top-0 right-0 left-0  flex flex-row justify-center transition duration-1000 ease`}
            style={{
              transform: `rotateY(${rotating}deg)`,
              height: 65,
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
              className={` flex items-center justify-center bg-yellow-300`}
              style={{
                width: '50%',
                border: '2px solid transparent',
                borderLeftColor: 'black',
                borderBottomColor: 'black',
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            ></div>
          </div>
          <div
            className={`flex flex-row overflow-y-hidden transition duration-500 ease-in-out`}
            style={{
              width: WIDTH * 2,
              height: 620,
              marginTop: 55,
              // overflow: 'hidden',
              transform: isSigningUp
                ? `translateX(${WIDTH / 2}px)`
                : `translateX(${-WIDTH / 2}px)`,

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
