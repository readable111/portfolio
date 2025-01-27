import React, { Component } from 'react'
import '../styles/about.css'
import ReactLogo from '../assets/react.svg'
import PythonLogo from '../assets/python-logo-only.svg'
import AzureLogo from '../assets/Microsoft_Azure.svg'
import CPPLogo from '../assets/ISO_C++_Logo.svg'
import MySQLLogo from '../assets/mysql-icon.svg'
import { AnimatePresence, motion } from 'motion/react'

export default class About extends Component {
  render() {
    return(
      <div className='scrollableContainer'>
          <h1>
            Who am I?
          </h1>
          <p className='bodyText'>
            Hello, my name is Tyler Bowen, an aspiring Software Engineer passionate about learning and applying as many things as possible. I graduated with a B.S. in Computer Science from the University of North Texas, where I have developed a wide variety of skills and projects, including a mobile app for lifestyle farmers to track crop development, and a GUI for controlling 5 SmarAct Stages with Picometer precision for my University's Particle Physics lab.
            My willingness to throw myself deep into any project has led to experience in Mobile Development, Backend Development, Cloud Technologies like Azure, Systems Programming, and Networking. 
          </p>
          <div className='ImageContainer'>
              <img src={ReactLogo} className='logo' /> 
              <img src={PythonLogo} className='logo' /> 
              <img src={AzureLogo} className='logo' /> 
              <img src={CPPLogo} className='logo' />
              <img src={MySQLLogo} className='logo' /> 
          </div>
          <p className='bodyText'>
          </p>
      </div>
        )
  }
}