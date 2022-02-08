import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import useLanguage from '../../../hooks/useLanguage'

import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { AUTHcontainer } from '../../authorization/AUTH.container'
import { PerspectiveController } from '../../PerspectiveController'
import { PROFILEcontainer } from '../../profile/PROFILE.container'
import { PhotoMiniature } from './PhotoMiniature'

interface IProps {
  authOpen: boolean
  setAuthOpen: (auth: boolean) => void
}

export const AuthMiniature: React.FC<IProps> = ({ authOpen, setAuthOpen }) => {
  const auth = useContext(AuthContext)

  const { isAuthenticated: isLoggedIn } = auth

  const [appear, setAppear] = useState(true)

  useDidMountEffect(() => {
    setAppear(false)
    let id = setTimeout(() => setAppear(true), 300)

    return () => {
      clearTimeout(id)
    }
  }, [authOpen])

  const [perspective, setPerspective] = useState([0, 0, 48])

  const handleSetPerspective = (
    perspective: number,
    marginTop: number,
    marginLeft: number
  ) => {
    setPerspective([perspective, marginTop, marginLeft])
  }

  const [hover, setHover] = useState(false)

  const { isEng } = useLanguage()

  return (
    <div
      className={`flex items-center justify-center `}
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
            borderRadius: !authOpen ? 1000 : 10,
            // opacity: 0.2,
            marginLeft: authOpen ? perspective[2] : 0,
            marginTop: authOpen ? perspective[1] : 0,
            width: !authOpen ? 80 : 1150,
            height: !authOpen ? 50 : 700,
            x: !authOpen ? 0 : -490,
            y: !authOpen ? 0 : 410,
          }}
          transition={{
            default: { duration: 0.15, type: `spring` },
            width: { duration: 0.25, delay: 0.15 },
            height: { duration: 0.25, delay: 0.15, ease: `linear` },
            x: { duration: 0.4, type: `tween` },
            y: { duration: 0.4, type: `tween` },
          }}
          // whileHover={{ y: !authOpen ? -2 : 0 }}
          className={`absolute z-50  overflow-hidden border ${
            isLoggedIn ? `border-gray-600` : `border-gray-600`
          }  ${authOpen ? 'shadow-12th' : 'cursor-pointer'}`}
          onMouseDown={() => {
            if (!authOpen) setAuthOpen(true)
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!authOpen ? (
            <>
              {isLoggedIn ? (
                <div
                  className={` flex items-center justify-center overflow-hidden`}
                >
                  {!appear ? (
                    <div
                      className={`h-[1050px] w-[100%] ${
                        isLoggedIn ? `bg-purple-100` : `bg-yellow-200`
                      }`}
                    >
                      {' '}
                    </div>
                  ) : (
                    <PhotoMiniature />
                  )}
                </div>
              ) : (
                <div
                  className={`w-f h-f flex items-center justify-center bg-yellow-100 ${
                    isEng || `font-CourierC`
                  }`}
                >
                  {' '}
                  {isEng ? `Log in` : `Войти`}
                </div>
              )}
            </>
          ) : (
            <>
              {isLoggedIn ? (
                <PROFILEcontainer
                  authOpen={authOpen}
                  setAuthOpen={setAuthOpen}
                />
              ) : (
                <AUTHcontainer authOpen={authOpen} setAuthOpen={setAuthOpen} />
              )}
            </>
          )}
        </motion.div>
      }
    </div>
  )
}
