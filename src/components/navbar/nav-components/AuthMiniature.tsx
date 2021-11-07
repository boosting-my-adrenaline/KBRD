import React, { useEffect, useState } from 'react'
import { useAuthAction, useNavAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import AS from '../../../static/AS.jpeg'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { AUTHcontainer } from '../../authorization/AUTH.container'

export const AuthMiniature: React.FC = ({}) => {
  const isLoggedIn = useTypedSelector((state) => state.auth.user !== null)

  const { setOpenOn, setOpenOff } = useAuthAction()
  const open = useTypedSelector((state) => state.auth.isOpened)

  const chapter = useTypedSelector((state) => state.nav.chapter)
  const [appear, setAppear] = useState(true)

  useDidMountEffect(() => {
    setAppear(false)
    let id = setTimeout(() => setAppear(true), 300)

    return () => {
      clearTimeout(id)
    }
  }, [open])

  useDidMountEffect(() => {
    setOpenOff()
  }, [chapter])

  return (
    <div
      className={`flex justify-center items-center`}
      style={{
        width: 80,
        height: 50,
      }}
    >
      {open ? (
        <div
          style={{
            position: 'fixed',
            backgroundColor: 'rgba(50, 50, 50, 0.2)',
            top: 65,
            left: 0,
            right: 0,
            bottom: 0,
            cursor: 'pointer',
            zIndex: 49,
          }}
          onClick={() => setOpenOff()}
        ></div>
      ) : null}
      {
        <div
          className={`absolute z-50  border border-black overflow-hidden ml-8 ${
            open ? '' : 'cursor-pointer'
          }`}
          style={{
            borderRadius: !open ? 1000 : 10,
            width: !open ? 80 : 1150,
            height: !open ? 50 : 700,
            transition: '0.4s ease',
            transform: `translateX(${!open ? 0 : -490}px) translateY(${
              !open ? 0 : 410
            }px)`,
          }}
          onClick={() => {
            // isLoggedIn ? logOut() : logIn()
            if (!open) setOpenOn()
          }}
        >
          {!open ? (
            <>
              {isLoggedIn ? (
                <>
                  {!appear ? (
                    <div
                      className={`bg-white`}
                      style={{
                        width: '100%',
                        height: 1050,
                      }}
                    >
                      {' '}
                    </div>
                  ) : (
                    <img
                      alt="lolo"
                      src={AS}
                      className={`w-16 h-16`}
                      style={{ opacity: appear ? 1 : 0, transition: '0.3s' }}
                    />
                  )}
                </>
              ) : (
                <div
                  className={`bg-white w-full h-full flex justify-center items-center`}
                >
                  {' '}
                  Log in
                </div>
              )}
            </>
          ) : (
            <AUTHcontainer />
          )}
        </div>
      }
    </div>
  )
}
