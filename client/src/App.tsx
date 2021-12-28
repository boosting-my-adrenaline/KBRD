import React, { useState, useEffect, useRef } from 'react'

import { BOOKContainer } from './components/book-redone/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { Width } from './utils/GetWidth'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Background } from './components/BackgroundPlain'
import { MAINcontainer } from './components/main/MAIN.container'
import { Chapters } from './types/nav'
import { INFOcontainer } from './components/info/INFO.container'
import { BlurScreen } from './components/BlurScreen'
import { AUTHcontainer } from './components/authorization/AUTH.container'
import { LoadingScreen } from './components/loading/LoadingScreen'
import { useAuthAction, useNavAction } from './hooks/useAction'
import { PerspectiveController } from './components/PerspectiveController'
import { Below1000 } from './components/belowSupportedResolution/Below1000'
import { NotFound } from './components/NotFound'
import { Footer } from './components/Footer'

////////////////

// REMOVE SPACEBAR PAGE DOWN

export const App: React.FC = () => {
  const history = useHistory()
  const chapter = useTypedSelector((state) => state.nav.chapter)

  // const [timer, setTimer] = useState(1)

  useEffect(() => {
    // setInterval(() => setTimer((prev) => prev + 1), 100)
  }, [])

  const [block, setBlock] = useState(false)

  const changeCurrentChapter = (chap: Chapters): void => {
    // chap !== 'MAIN' ? history.push(`/${chap.toLowerCase()}`) : history.push('/')
    if (chap === Chapters.MAIN) {
      history.push('/')
    } else if (chap === Chapters.NOT_FOUND) {
      history.push('/not_found')
    } else {
      history.push(`/${chap.toLowerCase()}`)
    }
  }

  useEffect(() => {
    if (block) return

    setBlock(true)
    let id = setTimeout(() => changeCurrentChapter(chapter), 1100)

    let id2 = setTimeout(() => setBlock(false), 1700)
    // if (!block) {
    //   setBlock(true)

    //   setTimeout(() => {
    //     if (!block) {
    //       // setTimeout(() => changeCurrentChapter(chapter), 1100)
    //       // setTimeout(() => setBlock(false), 1500)
    //       changeCurrentChapter(chapter)
    //     }
    //   }, 1100)

    //   setTimeout(() => {
    //     if (!block) {
    //       setBlock(false)
    //       // setTimeout(() => changeCurrentChapter(chapter), 1100)
    //       // setTimeout(() => setBlock(false), 1500)
    //       // changeCurrentChapter(chapter)
    //     }
    //   }, 1700)
    // }

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

  const isOpened = useTypedSelector((state) => state.auth.isOpened)
  const { setOpenOff } = useAuthAction()

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

  return (
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
            {/* <div className="z-50 absolute top-16">
              <Width />
            </div> */}
            <Switch>
              <Route path="/" exact component={MAINcontainer} />
              <Route path="/tap" exact component={TAPContainer} />
              <Route path="/book" exact component={BOOKContainer} />
              <Route path="/info" exact component={INFOcontainer} />
              <Route path="/auth" exact component={AUTHcontainer} />
              <Route component={NotFound} />
            </Switch>
            {/* <BOOKContainer /> */}
          </div>
        </div>
      ) : null}
    </div>
  )
}
