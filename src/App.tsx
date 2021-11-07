import React, { useState, useEffect } from 'react'

import { BOOKContainer } from './components/book/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
// import { Width } from './utils/GetWidth'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Background } from './components/Background'
import { MAINcontainer } from './components/main/MAIN.container'
import { useNavAction } from './hooks/useAction'
import { Chapters } from './types/nav'
import { INFOcontainer } from './components/info/INFO.container'
import { LoadingScreen } from './components/LoadingScreen'
import { AUTHcontainer } from './components/authorization/AUTH.container'

export const App: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname

  const chapter = useTypedSelector((state) => state.nav.chapter)

  const [block, setBlock] = useState(false)

  const changeCurrentChapter = (chap: Chapters): void => {
    chap !== 'MAIN' ? history.push(`/${chap.toLowerCase()}`) : history.push('/')
  }

  useEffect(() => {
    if (!block) {
      setBlock(true)
      setTimeout(() => changeCurrentChapter(chapter), 1100)
      setTimeout(() => setBlock(false), 1100)
    }
  }, [chapter])

  const [initialScreen, setInitialScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => setInitialScreen(false), 1000)
  }, [])

  return (
    <>
      <LoadingScreen show={initialScreen} />
      <div style={{ opacity: initialScreen ? 0 : 1, transition: '1.5s ease' }}>
        <Navbar block={block} />
        <Background />
        <div style={{ marginTop: 100 }}>
          {/* <div> W:{Width}</div> */}
          {/* <Width /> */}
          <Switch>
            <Route path="/" exact component={MAINcontainer} />
            <Route path="/tap" exact component={TAPContainer} />
            <Route path="/book" exact component={BOOKContainer} />
            <Route path="/info" exact component={INFOcontainer} />
            <Route path="/auth" exact component={AUTHcontainer} />
          </Switch>
        </div>
      </div>
    </>
  )
}
