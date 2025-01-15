import React, { Component } from 'react'
import {motion} from 'motion/react'
import { Link, redirect, useNavigate } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router'




export default class Home extends Component <{},{key:string}>{
   constructor(props:any){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
        key: "home"
        }
    } 

    handleClick = (e:any) =>{
        this.setState({key:"change"})
    }


  render() {
    return ( 
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{scaleY:0}} transition={{duration: .8}} key={this.state.key}>      
      <div className="mainContainer">
        <div className="textContainer">
        <p className="nameText">Tyler Bowen</p>
        <p className="textElement">
          <Link className='link' to='/devlog' onClick={this.handleClick}>
            Dev Log
          </Link>
        </p>
        <p className="textElement"> 
          <Link to="/projects" className='link'> 
            Projects
          </Link>
          </p>
        <p className="textElement">          
          <Link to="/about" className='link'> 
            About Me
          </Link>
        </p>
        </div>
        </div>
    </motion.div>
    )
  }
}
