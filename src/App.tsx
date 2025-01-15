import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/App.css'
import About from './pages/about.tsx'
import Projects from './pages/projects.tsx'
import Devlog from './pages/devlog.tsx'
import Home from './pages/Home.tsx'
import { AnimatePresence } from 'motion/react'

function App() {


  return (
    <BrowserRouter>
    <AnimatePresence>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/devlog' element={<Devlog/>}/>
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
