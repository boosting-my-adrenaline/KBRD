import React, { useState, useEffect } from 'react'

import { Navbar } from './components/navbar/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Width } from './utils/GetWidth'
import { Background } from './components/Background'
import { InitialScreen } from './components/InitialScreen'
// import { LoadingScreen } from './components/loading/LoadingScreen'
import { PerspectiveController } from './components/PerspectiveController'
import { Below1000 } from './components/belowSupportedResolution/Below1000'
// import { NotFound } from './components/NotFound'
import { Footer } from './components/Footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { MAINREDONEcontainer } from './components/main-redone/MAIN.REDONE.container'
import { useDidMountEffect } from './utils/useDidMountEffect'
import { Test } from './components/Test'
import useLocalStorage from './hooks/useLocalStorage'

export enum MainState {
  MAIN = 'MAIN',
  BOOK = 'BOOK',
  TAP = 'TAP',
  INFO = 'INFO',
}

export const App: React.FC = () => {
  const [initialScreen, setInitialScreen] = useState(false)

  useEffect(() => {
    setTimeout(() => setInitialScreen(false), 1200)
  }, [])

  const [perspective, setPerspective] = useState<[number, number, boolean]>([
    0,
    100,
    true,
  ])

  const handleSetPerspective = (
    perspective: number,
    margin: number,
    is1000plus: boolean
  ) => {
    setPerspective([perspective, margin, is1000plus])
  }

  useDidMountEffect(() => {
    let before = mainState

    return () => setMainState(before)
  }, [perspective[2]])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault()
      }
    })

    return () =>
      window.removeEventListener('keydown', (e) => {
        if (e.key === ' ') {
          e.preventDefault()
        }
      })
  }, [])

  const { token, login, logout, userId, email } = useAuth()
  const isAuthenticated = !!token

  const [mainState, setMainState] = useState(MainState.MAIN)
  const navigate = useNavigate()

  useDidMountEffect(() => {
    if (mainState === MainState.MAIN) {
      navigate(`/`)
    } else {
      navigate(`/${mainState.toLowerCase()}`)
    }
  }, [mainState])

  const [authOpen, setAuthOpen] = useState(false)

  const [trainingLanguage, setTrainingLanguage] = useLocalStorage(
    `training-lang`,
    true
  )

  const toggleTrainingLanguage = () => {
    setTrainingLanguage((prev) => !prev)
  }

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated, email }}
    >
      <div className={`  flex items-center justify-center`}>
        <InitialScreen show={initialScreen} />
        <PerspectiveController setPerspective={handleSetPerspective} />

        {perspective[2] ? null : <Below1000 />}

        {perspective[2] ? (
          <div
            style={{
              opacity: initialScreen ? 0 : 1,
              transition: '1.5s ease',
            }}
          >
            <Navbar
              mainState={mainState}
              setMainState={setMainState}
              authOpen={authOpen}
              setAuthOpen={setAuthOpen}
              trainingLanguage={trainingLanguage}
              toggleTrainingLanguage={toggleTrainingLanguage}
            />
            <Footer mainState={mainState} />
            <div
              className={`fixed inset-0 z-[2023]  bg-gray-400 blur-[5px] ${
                authOpen
                  ? 'block cursor-pointer opacity-50'
                  : 'hidden opacity-0'
              } duration-400 transition ease-in-out `}
              style={{
                display: authOpen ? 'block' : 'none',
              }}
              onMouseDown={() => setAuthOpen(false)}
            ></div>

            <div className={` flex items-center justify-center`}>
              <Routes>
                <Route
                  path="*"
                  element={
                    <MAINREDONEcontainer
                      mainState={mainState}
                      setMainState={setMainState}
                      trainingLanguage={trainingLanguage}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        ) : null}
      </div>
    </AuthContext.Provider>
  )
}
