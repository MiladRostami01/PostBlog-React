import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Routes elements 
import AllPosts from './pages/AllPosts'
import NewPost from './pages/NewPost'
import Favorites from './pages/Favorites'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <AllPosts />} />
        <Route path="new-post" element={<NewPost />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  )
}

export default App



