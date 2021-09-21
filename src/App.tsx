import React from 'react'

import { BOOKContainer } from './components/book/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import { Width } from './utils/getWidth'
import { useTypedSelector } from './hooks/useTypedSelector'
import { Background } from './components/Background'

export const App: React.FC = () => {
  const chapter = useTypedSelector((state) => state.nav.chapter)

  return (
    <div>
      <Navbar />
      <Background />
      <div style={{ marginTop: 100 }}>
        {/* <div> W:{Width}</div> */}
        {/* <Width /> */}
        <Switch>
          <Route path="/book" component={BOOKContainer} />
          <Route path="/tap" component={TAPContainer} />
        </Switch>
      </div>
    </div>
  )
}
