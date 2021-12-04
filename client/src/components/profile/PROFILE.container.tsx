import React, { useState, useEffect } from 'react'
import { Button, Hidden } from '@mui/material'
import { useAuthAction } from '../../hooks/useAction'
import { PhotoMiniature } from '../navbar/nav-components/PhotoMiniature'
import { PROFILEinfo } from './PROFILE.info'
import { setOpenOff } from '../../redux/auth/auth.actions'
import { PROFILEprofile } from './PROFILE.profile'
import { PROFILEstats } from './PROFILE.stats'

export const PROFILEcontainer: React.FC = () => {
  const { logOut, setOpenOff } = useAuthAction()

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
    setFloating((prev) => prev + 170)
    let id = setTimeout(() => setFloating((prev) => prev - 170), 300)

    return () => {
      setFloating(0)
      clearTimeout(id)
    }
  }, [statsSection])

  const WIDTH = 1150

  const handleLogout = () => {
    setOpenOff()
    setTimeout(() => logOut(), 100)
  }

  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 bg-purple-200`}>
      <>
        <button
          className={`absolute  z-50 text-2xl border border-black rounded-full py-2 px-4 bg-purple-${
            floating > 100 ? `300` : `400`
          }
          hover:bg-purple-500`}
          style={{ top: 95, left: 900 + floating, transition: '0.7s ease' }}
          onMouseDown={handleLogout}
        >
          <div className={`flex flex-row`}>
            Log
            <div
              style={{
                width: floating < 100 ? 10 : 0,
                transition: '0.3s ease',
              }}
            ></div>
            Out
          </div>
        </button>

        <div
          className={`z-20 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-purple-200`}
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
                  !statsSection ? `cursor-pointer` : ``
                }`}
                style={{ fontSize: '2em', width: '50%', height: 65 }}
                onMouseDown={() => setStatsSection(true)}
              >
                STATS
              </div>
              <div
                className={`flex justify-center items-center no-select ${
                  statsSection ? `cursor-pointer` : ``
                }`}
                style={{
                  fontSize: '2em',
                  width: '50%',
                  height: 65,
                }}
                onMouseDown={() => setStatsSection(false)}
              >
                PROFILE
              </div>
            </div>
            <div
              className={`fixed top-0 right-0 left-0 h-16 flex flex-row justify-center `}
              style={{
                transform: `rotateY(${rotating}deg)`,
                transition: '1s ease-out',
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
                className={` flex items-center justify-center bg-purple-300`}
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
                transform: statsSection
                  ? `translateX(${WIDTH / 2}px)`
                  : `translateX(${-WIDTH / 2}px)`,
                transition: '0.75s ease-in-out',
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
