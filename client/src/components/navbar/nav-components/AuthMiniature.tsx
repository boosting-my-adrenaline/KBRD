import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
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
  // const isLoggedIn = !(user.user_name == `guest`)

  const auth = useContext(AuthContext)

  const { isAuthenticated: isLoggedIn } = auth

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
      {
        <motion.div
          animate={{
            borderRadius: !isOpen ? 1000 : 10,
            // opacity: 0.2,
            marginLeft: isOpen ? perspective[2] : 0,
            marginTop: isOpen ? perspective[1] : 0,
            width: !isOpen ? 80 : 1150,
            height: !isOpen ? 50 : 700,
            x: !isOpen ? 0 : -490,
            y: !isOpen ? 0 : 410,
          }}
          transition={{
            default: { duration: 0.15, type: `spring` },
            width: { duration: 0.25, delay: 0.15 },
            height: { duration: 0.25, delay: 0.15, ease: `linear` },
            x: { duration: 0.4, type: `tween` },
            y: { duration: 0.4, type: `tween` },
          }}
          whileHover={{ scale: !isOpen ? 1.1 : 1 }}
          className={`absolute z-50  border border-black overflow-hidden  ${
            isOpen ? 'shadow-12th' : 'cursor-pointer'
          }`}
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
        </motion.div>
      }
    </div>
  )
}
