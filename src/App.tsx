import React from 'react'

import { BOOKContainer } from './components/book/BOOK.container'
import { Navbar } from './components/navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import { Width } from './utils/getWidth'

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <Width /> */}
      <div
      // className="flex justify-center"
      >
        <Switch>
          <Route path="/book" component={BOOKContainer} />
        </Switch>
      </div>
    </div>
  )
}
