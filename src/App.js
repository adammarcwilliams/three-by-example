import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu'
import GettingStartedWebGLRenderer from './components/cookbook/01-01-WebGLRenderer'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Menu} />
          <Route path='/cookbook/01-01-WebGLRenderer' component={GettingStartedWebGLRenderer} />
        </div>
      </Router>
    )
  }
}

export default App
