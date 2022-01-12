import React, { useState, useEffect, useRef } from 'react'

import { BOOKContainer } from './components/book-redone/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Width } from './utils/GetWidth'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Background } from './components/BackgroundPlain'
import { MAINcontainer } from './components/main/MAIN.container'
import { Chapters } from './types/nav'
import { INFOcontainer } from './components/info/INFO.container'
import { BlurScreen } from './components/BlurScreen'
import { AUTHcontainer } from './components/authorization/AUTH.container'
// import { LoadingScreen } from './components/loading/LoadingScreen'
import { useAuthAction } from './hooks/useAction'
import { PerspectiveController } from './components/PerspectiveController'
import { Below1000 } from './components/belowSupportedResolution/Below1000'
import { NotFound } from './components/NotFound'
import { Footer } from './components/Footer'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'

export const App: React.FC = () => {
  const navigation = useNavigate()
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const [block, setBlock] = useState(false)

  const changeCurrentChapter = (chap: Chapters): void => {
    if (chap === Chapters.MAIN) {
      navigation('/')
    } else if (chap === Chapters.NOT_FOUND) {
      navigation('/not_found')
    } else {
      navigation(`/${chap.toLowerCase()}`)
    }
  }

  useEffect(() => {
    if (block) return

    setBlock(true)
    let id = setTimeout(() => changeCurrentChapter(chapter), 1100)

    let id2 = setTimeout(() => setBlock(false), 1700)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
      setBlock(false)
    }
  }, [chapter])

  const [initialScreen, setInitialScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => setInitialScreen(false), 1000)
  }, [])

  const isLoading = useTypedSelector((state) => state.nav.isLoading)

  // const { setLoadingOn, setLoadingOff } = useNavAction()
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

  const isOpened: boolean = useTypedSelector((state) => state.auth.isOpened)
  const { setOpenOff } = useAuthAction()

  useEffect(() => {
    setOpenOff()
  }, [])

  const renders = useRef(0)

  useEffect(() => {
    renders.current++
  })

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 32) {
        e.preventDefault()
      }
    })

    return () =>
      window.removeEventListener('keydown', (e) => {
        if (e.keyCode === 32) {
          e.preventDefault()
        }
      })
  }, [])

  const { token, login, logout, userId, email } = useAuth()
  const isAuthenticated = !!token

  // useEffect(() => {
  //   window.M.updateTextFields()
  // }, [])
  // const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated, email }}
    >
      <div className={''}>
        <BlurScreen show={initialScreen} />
        <PerspectiveController setPerspective={handleSetPerspective} />
        {/* <div className={`absolute top-8 left-8 `} style={{ zIndex: 999999 }}>
        renders: {renders.current}
      </div> */}
        {perspective[2] ? null : <Below1000 />}

        {perspective[2] ? (
          <div
            style={{
              opacity: initialScreen ? 0 : 1,
              transition: '1.5s ease',
            }}
          >
            <Navbar block={block} />
            <Footer />
            <Background />

            <div
              className={`fixed right-0 left-0 top-0 bottom-0 bg-gray-400 z-40  opacity-${
                isOpened ? '50 cursor-pointer' : '0'
              }`}
              style={{
                transition: '0.4s ease-in-out',
                display: isOpened ? 'block' : 'none',
              }}
              onMouseDown={() => setOpenOff()}
            ></div>

            <div>
              <div className=" visible z-50 absolute top-16">
                <Width />
              </div>
              <Routes>
                <Route path="/" element={<MAINcontainer />} />
                <Route path="/tap" element={<TAPContainer />} />
                <Route path="/book" element={<BOOKContainer />} />
                <Route path="/info" element={<INFOcontainer />} />
                <Route path="/auth" element={<AUTHcontainer />} />
                <Route element={<NotFound />} />
              </Routes>
              {/* <BOOKContainer /> */}
            </div>
          </div>
        ) : null}
      </div>
    </AuthContext.Provider>
  )
}
