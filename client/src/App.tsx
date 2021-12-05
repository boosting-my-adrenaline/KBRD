import React, { useState, useEffect } from 'react'

import { BOOKContainer } from './components/book-redone/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { Width } from './utils/GetWidth'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Background } from './components/Background'
import { MAINcontainer } from './components/main/MAIN.container'
import { Chapters } from './types/nav'
import { INFOcontainer } from './components/info/INFO.container'
import { BlurScreen } from './components/BlurScreen'
import { AUTHcontainer } from './components/authorization/AUTH.container'
import { LoadingScreen } from './components/loading/LoadingScreen'
import { useAuthAction, useNavAction } from './hooks/useAction'
import { PerspectiveController } from './components/PerspectiveController'
import { margin } from '@mui/system'
import { Below1000 } from './components/belowSupportedResolution/Below1000'

export const App: React.FC = () => {
  const history = useHistory()
  const chapter = useTypedSelector((state) => state.nav.chapter)

  const [timer, setTimer] = useState(1)

  useEffect(() => {
    setInterval(() => setTimer((prev) => prev + 1), 100)
  }, [])

  const [block, setBlock] = useState(false)

  const changeCurrentChapter = (chap: Chapters): void => {
    chap !== 'MAIN' ? history.push(`/${chap.toLowerCase()}`) : history.push('/')
  }

  useEffect(() => {
    if (!block) {
      setBlock(true)
      setTimeout(() => changeCurrentChapter(chapter), 1100)
      setTimeout(() => setBlock(false), 1500)
    }
  }, [chapter])

  const [initialScreen, setInitialScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => setInitialScreen(false), 1000)
  }, [])

  const isLoading = useTypedSelector((state) => state.nav.isLoading)
  const { setLoadingOn, setLoadingOff } = useNavAction()
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

  return (
    <div className={''}>
      <BlurScreen show={initialScreen} />
      <PerspectiveController setPerspective={handleSetPerspective} />
      {perspective[2] ? null : <Below1000 />}
      {/* <button
        onClick={() => {
          isLoading ? setLoadingOff() : setLoadingOn()
        }}
        style={{ zIndex: 2022, position: 'absolute', top: 120, left: 120 }}
      >
        TEST
      </button> */}
      {/* <LoadingScreen show={isLoading} /> */}
      {perspective[2] ? (
        <div
          style={{
            opacity: initialScreen ? 0 : 1,
            transition: '1.5s ease',
          }}
        >
          <Navbar block={block} />
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

          <div
            // className={`overflow-y-hidden`}
            style={{
              marginTop: perspective[1],
              transform: `perspective(1000px) translateZ(${perspective[0]}px)`,
              // transition: '0.05s ease-in-out',
            }}
          >
            {/* <div className="z-50 absolute top-2">
              <Width />
              isBelow? {!perspective[2] ? 'below' : 'above'}
            </div> */}
            <Switch>
              <Route path="/" exact component={MAINcontainer} />
              <Route path="/tap" exact component={TAPContainer} />
              <Route path="/book" exact component={BOOKContainer} />
              <Route path="/info" exact component={INFOcontainer} />
              <Route path="/auth" exact component={AUTHcontainer} />
            </Switch>
          </div>
        </div>
      ) : null}
    </div>
  )
}
