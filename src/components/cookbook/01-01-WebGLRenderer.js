import React, { Component } from 'react'
import './01-01-WebGLRenderer.css'
import Main from '../../webgl/sketches/cookbook/01-01-WebGLRenderer'

export default class GettingStartedWebGLRenderer extends Component {
  componentDidMount () {
    this.webGLApp = new Main(this.node)
  }

  render () {
    return (
      <div className='GettingStarted' ref={(ref) => { this.node = ref; }} />
    )
  }
}
