import React from 'react'

import { KBRDContainer } from './components/kbrd/KBRD.container'
import { Navbar } from './components/navbar/Navbar'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { Width } from './utils/getWidth'

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <Width /> */}
      <div className="flex justify-center">
        <Switch>
          <Route path="/book" component={KBRDContainer} />
        </Switch>
      </div>
    </div>
  )
}
