import React, { useEffect, useState } from 'react'
import { useAuthAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { AUTHcontainer } from '../../authorization/AUTH.container'
import { PROFILEcontainer } from '../../profile/PROFILE.container'
import { PhotoMiniature } from './PhotoMiniature'

export const AuthMiniature: React.FC = ({}) => {
  const user = useTypedSelector((state) => state.auth.user)
  // const users = useTypedSelector((state) => state.auth.users)
  const isLoggedIn = !!user

  // const getUserInfo = (array: User[], id: number | null) => {
  //   let result: null | User = null
  //   array.forEach((el) => {
  //     if (el.id === id) {
  //       return result === el
  //     }
  //   })

  //   return result
  // }

  // const userInfo: User | null = getUserInfo(users, user)

  const { setOpenOn, setOpenOff } = useAuthAction()
  const isOpen = useTypedSelector((state) => state.auth.isOpened)

  const chapter = useTypedSelector((state) => state.nav.chapter)
  const [appear, setAppear] = useState(true)

  useDidMountEffect(() => {
    setAppear(false)
    let id = setTimeout(() => setAppear(true), 300)

    return () => {
      clearTimeout(id)
    }
  }, [isOpen])

  useDidMountEffect(() => {
    setOpenOff()
  }, [chapter])

  return (
    <div
      className={`flex justify-center items-center `}
      style={{
        width: 80,
        height: 50,
      }}
    >
      {isOpen ? (
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
            isOpen ? '' : 'cursor-pointer'
          }`}
          style={{
            borderRadius: !isOpen ? 1000 : 10,
            width: !isOpen ? 80 : 1150,
            height: !isOpen ? 50 : 700,
            transition: '0.4s ease',
            transform: `translateX(${!isOpen ? 0 : -490}px) translateY(${
              !isOpen ? 0 : 410
            }px)`,
            boxShadow: isOpen ? '2px 5px 20px 10px rgba(0,0,0,0.1)' : '',
          }}
          onClick={() => {
            // isLoggedIn ? logOut() : logIn()
            if (!isOpen) setOpenOn()
          }}
        >
          {/* <div
            className={`absolute `}
            style={{ top: 100, right: 200, zIndex: 50 }}
          >
            <PhotoMiniature />
          </div> */}
          {!isOpen ? (
            <>
              {isLoggedIn ? (
                <div className={`flex items-center justify-center`}>
                  {!appear ? (
                    <div
                      className={`${
                        isLoggedIn ? `bg-purple-100` : `bg-yellow-200`
                      }`}
                      style={{
                        width: '100%',
                        height: 1050,
                      }}
                    >
                      {' '}
                    </div>
                  ) : (
                    <PhotoMiniature />
                  )}
                </div>
              ) : (
                <div
                  className={`bg-yellow-100 w-full h-full flex justify-center items-center`}
                >
                  {' '}
                  Log in
                </div>
              )}
            </>
          ) : (
            <>{isLoggedIn ? <PROFILEcontainer /> : <AUTHcontainer />}</>
          )}
        </div>
      }
    </div>
  )
}
