import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/App.css'
import Home from './pages/Home.tsx'
import NewPost from './pages/NewPost.tsx'
import Post from './pages/Post.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/post/:postid" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
