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
        <div className="absolute top-150 left-24 px-3 py-1 rounded-full bg-red-100 text:2xl md:text-4xl"></div>
        <Switch>
          <Route path="/kbrd" component={KBRDContainer} />
        </Switch>
      </div>
    </div>
  )
}
