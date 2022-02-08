import React, { useState, useEffect, useContext } from 'react'
import { PROFILEinfo } from './PROFILE.info'
import { PROFILEprofile } from './PROFILE.profile'
import { PROFILEstats } from './PROFILE.stats'
import { AuthContext } from '../../context/AuthContext'
import { NBAbutton } from './NBA.button'
import useLanguage from '../../hooks/useLanguage'

interface IProps {
  authOpen: boolean
  setAuthOpen: (auth: boolean) => void
}

export const PROFILEcontainer: React.FC<IProps> = ({
  authOpen,
  setAuthOpen,
}) => {
  const auth = useContext(AuthContext)

  const [statsSection, setStatsSection] = useState(true)
  const [rotating, setRotating] = useState(0)

  useEffect(() => {
    if (!statsSection) {
      setRotating(180)
    } else {
      setRotating(0)
    }
  }, [statsSection])

  const [floating, setFloating] = useState(0)

  useEffect(() => {
    setFloating((prev) => prev + 150)
    let id = setTimeout(() => setFloating((prev) => prev - 150), 300)

    return () => {
      setFloating(0)
      clearTimeout(id)
    }
  }, [statsSection])

  const WIDTH = 1150

  const handleLogout = () => {
    // setOpenOff()
    setTimeout(() => auth.logout(), 0)
  }

  const { isEng } = useLanguage()

  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 bg-purple-200 ${
        isEng ? `font-courier` : `font-CourierC`
      }`}
    >
      <>
        <div
          className={`absolute z-50 flex items-center justify-center transition duration-700 ease-linear`}
          style={{
            top: 95,
            left: 900 + floating,
            transition: `0.7s ease-in-out`,
          }}
          // onMouseDown={handleLogout}
        >
          <NBAbutton tag={isEng ? `Log Out` : 'Выйти'} onClick={handleLogout} />
        </div>

        <div
          className={`fixed top-0 right-0 left-0 bottom-0 z-20 flex items-center justify-center bg-purple-200`}
        >
          <div
            className={`z-20  items-center justify-center transition duration-1000 ease-linear`}
          >
            <div
              className={`absolute top-0 left-0 z-20 flex flex-row `}
              style={{ width: WIDTH }}
            >
              <div
                className={`w-50% h-65px  text-2em no-select flex items-center justify-center ${
                  !statsSection && `cursor-pointer`
                } `}
                onMouseDown={() => setStatsSection(true)}
              >
                {isEng ? `STATS` : `СТАТИСТИКА`}
              </div>
              <div
                className={`w-50% h-65px  text-2em  no-select flex items-center justify-center ${
                  statsSection && `cursor-pointer`
                }`}
                onMouseDown={() => setStatsSection(false)}
              >
                {isEng ? `PROFILE` : `ПРОФИЛЬ`}
              </div>
            </div>
            <div
              className={`h-65px fixed top-0 right-0 left-0 flex flex-row justify-center transition duration-1000 ease-out`}
              style={{
                transform: `rotateY(${rotating}deg)`,
              }}
            >
              <div
                className={`w-50% -translate-y-2px -translate-x-2px flex items-center justify-center`}
                style={{
                  border: '2px solid transparent',
                  borderBottomRightRadius: 10,
                }}
              ></div>
              <div
                className={`w-50% flex items-center justify-center bg-purple-300`}
                style={{
                  border: '2px solid transparent',
                  borderLeftColor: 'black',
                  borderBottomColor: 'black',
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              ></div>
            </div>
            <div
              className={`duration-750 flex flex-row overflow-y-hidden transition ease-in-out`}
              style={{
                width: WIDTH * 2,
                height: 620,
                marginTop: 55,
                // overflow: 'hidden',
                transform: statsSection
                  ? `translateX(${WIDTH / 2}px)`
                  : `translateX(${-WIDTH / 2}px)`,
              }}
            >
              <PROFILEinfo statsSection={statsSection} />
              <div
                className={`items mt-32 flex justify-center`}
                style={{ width: WIDTH }}
              >
                <PROFILEstats />
              </div>
              <div
                className={`flex items-center justify-center`}
                style={{ width: WIDTH }}
              >
                <PROFILEprofile />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
