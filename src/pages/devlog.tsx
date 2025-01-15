import React, { Component } from 'react'
import TopBanner from '../components/topBanner'
import "../styles/devlog.css"

export default class Devlog extends Component {
  render() {
    return (
      <div className='devlogContainer'>
        <TopBanner name='Dev Log'/>
      </div>
    )
  }
}
