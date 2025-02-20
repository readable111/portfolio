import React, { Component } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import About from './about'
import Devlog from './devlog'
import Projects from './projects'
import Login from '../components/Login.tsx'
import LoginButton from '../components/LoginButton'
import { Link } from 'react-router'
import GlobalContext from '../components/GlobalContext'


export default class Home extends Component<{}, { aboutSelected: boolean, projectSelected: boolean, devSelected: boolean, key: string, loginVisible: boolean }> {
  constructor(props: any) {
    super(props)
    this.handleDevPress = this.handleDevPress.bind(this)
    this.handleProjectPress = this.handleProjectPress.bind(this)
    this.handleAboutPress = this.handleAboutPress.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.showLoginModal = this.showLoginModal.bind(this)
    this.state = {
      aboutSelected: false,
      projectSelected: false,
      devSelected: false,
      loginVisible: false,
      key: ""
    }
  }

  static contextType = GlobalContext

  handleDevPress = () => {
    this.setState({
      devSelected: true, projectSelected: false, aboutSelected: false, key: "dev"
    })
  }

  handleProjectPress = () => {
    console.log("projects pressed")
    this.setState({ projectSelected: true, aboutSelected: false, devSelected: false, key: "project" })
  }

  handleAboutPress = () => {
    this.setState({ projectSelected: false, aboutSelected: true, devSelected: false, key: "about" })
  }

  closeLoginModal = () => {
    this.setState({ loginVisible: false })
  }

  showLoginModal = () => {
    this.setState({ loginVisible: true })
  }

  render() {
    const { user, isLoggedIn } = this.context
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}>
        <div className="mainContainer">
          <div className="textContainer">
            <p className="nameText">Tyler Bowen</p>
            <p className="textElement">
              {
                this.state.devSelected ?
                  <div className='link-selected' onClick={this.handleDevPress}>
                    Dev Log
                  </div>
                  :
                  <div className='link' onClick={this.handleDevPress}>
                    Dev Log
                  </div>
              }
            </p>
            <p className="textElement">
              {
                this.state.projectSelected ?
                  <div className='link-selected' onClick={this.handleProjectPress}>
                    Projects
                  </div>
                  :
                  <div className='link' onClick={this.handleProjectPress}>
                    Projects
                  </div>
              }
            </p>
            <p className="textElement">
              {
                this.state.aboutSelected ?
                  <div className='link-selected' onClick={this.handleAboutPress}>
                    About Me
                  </div>
                  :
                  <div className='link' onClick={this.handleAboutPress}>
                    About Me
                  </div>
              }
            </p>
          </div>

          <AnimatePresence mode='wait'>
            <div className='componentContainer'>
              {this.state.aboutSelected && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                  className='motion-div'
                >
                  <About />
                </motion.div>
              )}
              {this.state.devSelected && (
                <motion.div
                  key="devlog"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                  className='motion-div'
                >
                  <Devlog />
                </motion.div>
              )}
            </div>
          </AnimatePresence>
          {this.state.projectSelected && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              className='motion-div'
            >
              <Projects />
            </motion.div>
          )}
          {isLoggedIn ?
            null
            :
            <LoginButton onClick={this.showLoginModal} />
          }
          {
            this.state.loginVisible ? (
              <div className='loginContainer'>
                <Login onClick={this.closeLoginModal} />
              </div>
            ) :
              null
          }
        </div>
      </motion.div>
    )
  }
}
