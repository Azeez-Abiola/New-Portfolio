import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import MobileProjectPage from './pages/MobileProjectPage'
import BlogPage from './pages/BlogPage'
import AllMobileAppsPage from './pages/AllMobileAppsPage'
import AllBlogsPage from './pages/AllBlogsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/mobile-project/:id" element={<MobileProjectPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/mobile-apps" element={<AllMobileAppsPage />} />
          <Route path="/blog" element={<AllBlogsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App