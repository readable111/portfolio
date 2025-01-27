import React, { Component } from 'react'
import {AnimatePresence, motion} from 'motion/react'
import About from './about'
import Devlog from './devlog'
import Projects from './projects'



export default class Home extends Component<{},{aboutSelected: boolean, projectSelected: boolean, devSelected: boolean, key:string}>{
   constructor(props:any){
    super(props)
    this.handleDevPress = this.handleDevPress.bind(this)
    this.handleProjectPress = this.handleProjectPress.bind(this)
    this.handleAboutPress = this.handleAboutPress.bind(this)
    this.state = {
      aboutSelected: false, 
      projectSelected: false,
      devSelected: false,
      key: ""
      }
    } 

    handleDevPress =() =>{
      this.setState({devSelected:true, projectSelected:false, aboutSelected:false, key:"dev"
      })
    }

    handleProjectPress = () =>{
      console.log("projects pressed")
      this.setState({projectSelected: true, aboutSelected:false, devSelected:false, key:"project"})
    }

    handleAboutPress = () =>{
      this.setState({projectSelected: false, aboutSelected:true, devSelected:false, key:"about"})
    }

  render() {
    return ( 
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: .8}}>      
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
  {this.state.aboutSelected && (
    <motion.div
      key="about"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className="componentContainer"
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
      transition={{ duration: 0.5}}
      className="componentContainer"
    >
      <Devlog />
    </motion.div>
  )}
  {this.state.projectSelected && (
    <motion.div
      key="projects"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5}}
      className="componentContainer"
    >
      <Projects />
    </motion.div>
  )}
      </AnimatePresence>
      </div>
    </motion.div>
    )
  }
}
