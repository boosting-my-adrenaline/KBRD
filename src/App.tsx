import React from 'react'

import { BOOKContainer } from './components/book/BOOK.container'
import { TAPContainer } from './components/tap/TAP.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import { Width } from './utils/getWidth'

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: 100 }}>
        {/* <div> W:{Width}</div> */}
        <Width />
        <Switch>
          <Route path="/book" component={BOOKContainer} />
          <Route path="/tap" component={TAPContainer} />
        </Switch>
      </div>
    </div>
  )
}
