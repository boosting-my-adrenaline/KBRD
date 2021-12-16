import React, { useEffect, useState } from 'react'
import { useAuthAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { AUTHcontainer } from '../../authorization/AUTH.container'
import { PerspectiveController } from '../../PerspectiveController'
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

  const [perspective, setPerspective] = useState([0, 0, 48])

  const handleSetPerspective = (
    perspective: number,
    marginTop: number,
    marginLeft: number
  ) => {
    setPerspective([perspective, marginTop, marginLeft])
  }

  const [hover, setHover] = useState(false)

  // useDidMountEffect(() => {
  //   if (hover) {
  //     setParams((prev) => {
  //       let arr = prev
  //       arr[1] = arr[1] - 10
  //       return arr
  //     })
  //   } else {
  //     setParams((prev) => {
  //       let arr = prev
  //       arr[1] = arr[1] + 10
  //       return arr
  //     })
  //   }
  // }, [hover])

  return (
    <div
      className={`flex justify-center items-center `}
      style={{
        width: 80,
        height: 50,
        zIndex: 2021,
        // opacity: 0.6,
      }}
    >
      <PerspectiveController setPerspective2={handleSetPerspective} />
      {/* {
        // isOpen ? (
        1 ? (
          <div
            style={{
              position: 'fixed',
              // backgroundColor: 'rgba(50, 50, 50, 0.2)',
              backgroundColor: 'red',
              top: 65,
              left: 0,
              right: 0,
              bottom: 0,
              cursor: 'pointer',
              zIndex: 49,
            }}
            onClick={() => setOpenOff()}
          ></div>
        ) : null
      } */}
      {
        <div
          className={`absolute z-50  border border-black overflow-hidden  ${
            isOpen ? '' : 'cursor-pointer'
          }`}
          style={{
            borderRadius: !isOpen ? 1000 : 10,
            // opacity: 0.2,
            marginLeft: isOpen ? perspective[2] : 0,
            marginTop: isOpen ? perspective[1] : 0,
            width: !isOpen ? 80 : 1150,
            height: !isOpen ? 50 : 700,
            transition: '0.4s ease',
            transform: `translateX(${!isOpen ? 0 : -490}px) translateY(${
              !isOpen ? (hover ? -3 : 0) : 410
            }px) 
            perspective(1000px) 
            translateZ(${perspective[0]}px)`,
            boxShadow: isOpen ? '2px 5px 20px 10px rgba(0,0,0,0.1)' : '',
          }}
          onMouseDown={() => {
            if (!isOpen) setOpenOn()
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!isOpen ? (
            <>
              {isLoggedIn ? (
                <div
                  className={`flex items-center justify-center overflow-hidden`}
                >
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
                  className={`bg-yellow-100 w-f h-f flex justify-center items-center`}
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
