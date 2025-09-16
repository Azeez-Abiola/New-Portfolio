import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App