import { useState } from 'react'
import { Link } from 'react-router'
import './styles/App.css'

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="textContainer">
        <p className="nameText">Tyler Bowen</p>
        <p className="textElement">
          <Link to="/devlog" className='link'> 
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
    </>
  )
}

export default App
