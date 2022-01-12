import React, { useState, useEffect, useContext } from 'react'
import { PROFILEinfo } from './PROFILE.info'
import { PROFILEprofile } from './PROFILE.profile'
import { PROFILEstats } from './PROFILE.stats'
import { AuthContext } from '../../context/AuthContext'
import { NBAbutton } from './NBA.button'

export const PROFILEcontainer: React.FC = () => {
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

  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 bg-purple-200`}>
      <>
        <div
          className={`flex justify-center items-center absolute z-50 transition duration-700 ease-linear`}
          style={{ top: 95, left: 900 + floating }}
          // onMouseDown={handleLogout}
        >
          <NBAbutton tag={`Log Out`} onClick={handleLogout} />
        </div>

        <div
          className={`z-20 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-purple-200`}
        >
          <div
            className={`z-20  items-center justify-center transition duration-1000 ease-linear`}
          >
            <div
              className={`absolute top-0 left-0 z-20 flex flex-row `}
              style={{ width: WIDTH }}
            >
              <div
                className={`w-50% h-65px  text-2em flex justify-center items-center no-select ${
                  !statsSection && `cursor-pointer`
                } `}
                onMouseDown={() => setStatsSection(true)}
              >
                STATS
              </div>
              <div
                className={`w-50% h-65px  text-2em  flex justify-center items-center no-select ${
                  statsSection && `cursor-pointer`
                }`}
                onMouseDown={() => setStatsSection(false)}
              >
                PROFILE
              </div>
            </div>
            <div
              className={`fixed top-0 right-0 left-0 h-65px flex flex-row justify-center transition duration-1000 ease-out`}
              style={{
                transform: `rotateY(${rotating}deg)`,
              }}
            >
              <div
                className={`w-50% flex items-center justify-center -translate-y-2px -translate-x-2px`}
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
              className={`flex flex-row overflow-y-hidden transition duration-750 ease-in-out`}
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
                className={`flex justify-center items mt-32`}
                style={{ width: WIDTH }}
              >
                <PROFILEstats />
              </div>
              <div
                className={`flex justify-center items-center`}
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
