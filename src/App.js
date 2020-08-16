import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import {
  Home,
  Team,
  Enterprise,
  Explore,
  MarketPlace,
  Pricing,
  NotFound
} from './pages'

import './App.css'

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Router>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/team' component={Team} />
        <Route path='/enterprise' component={Enterprise} />
        <Route path='/explore'>
          <Explore searchValue={searchValue} />
        </Route>
        <Route path='/marketplace' component={MarketPlace} />
        <Route path='/pricing' component={Pricing} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App