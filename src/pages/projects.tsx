import React, { Component } from 'react'
import TopBanner from '../components/topBanner'
import "../styles/projects.css"

export default class Projects extends Component {
  render() {
    return (
        <div className="projectsContainer">
        <TopBanner name='Projects'></TopBanner>
        </div>
    )
  }
}
