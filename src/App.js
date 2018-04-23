import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu'
import GettingStarted from './components/cookbook/01-GettingStarted'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Menu} />
          <Route path='/getting-started' component={GettingStarted} />
        </div>
      </Router>
    )
  }
}

export default App
