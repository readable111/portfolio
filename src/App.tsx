import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/App.css'
import Home from './pages/Home.tsx'
import NewPost from './pages/NewPost.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/newPost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
