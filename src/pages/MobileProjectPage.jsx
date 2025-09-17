import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mobileProjects } from '../data/portfolioData'

const MobileProjectPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = mobileProjects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding bg-black text-white">
        <div className="text-center">
          <h1 className="font-space-grotesk font-bold text-4xl mb-4">Mobile Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-deep-orange text-cream font-space-grotesk font-semibold rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen pt-16 pb-24 section-padding bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-max">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-3 text-white hover:text-deep-orange transition-colors duration-300 font-space-grotesk font-semibold"
          variants={itemVariants}
          whileHover={{ x: -5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </motion.button>

        {/* Project Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {project.title}
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h2 className="font-space-grotesk font-bold text-2xl mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-deep-orange text-black font-inter font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-deep-orange text-black font-space-grotesk font-semibold rounded-full hover-lift hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live App
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-space-grotesk font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile App Screenshots in Phone Mockups */}
        <motion.div variants={itemVariants}>
          <h2 className="font-space-grotesk font-bold text-2xl mb-6">App Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-12 justify-items-center">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ perspective: '1000px' }}
              >
                {/* Phone Mockup Frame */}
                <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex items-center justify-between px-6">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm">
                          <div className="w-2 h-1 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Screenshot */}
                    <img 
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover mt-8"
                    />
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full"></div>
                  </div>
                  
                  {/* Phone Buttons */}
                  <div className="absolute right-[-4px] top-20 w-1 h-12 bg-gray-800 rounded-r"></div>
                  <div className="absolute right-[-4px] top-36 w-1 h-16 bg-gray-800 rounded-r"></div>
                  <div className="absolute right-[-4px] top-56 w-1 h-16 bg-gray-800 rounded-r"></div>
                </div>
                
                {/* Floating Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-deep-orange text-black px-3 py-1 rounded-full text-sm font-semibold"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Mobile
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation to other mobile projects */}
        <motion.div 
          className="mt-24 pt-12 border-t border-white/10"
          variants={itemVariants}
        >
          <h3 className="font-space-grotesk font-bold text-xl mb-8">Other Mobile Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mobileProjects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <motion.div
                  key={otherProject.id}
                  className="bg-white/10 p-6 rounded-2xl cursor-pointer hover-lift hover-glow backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/mobile-project/${otherProject.id}`)}
                >
                  <h4 className="font-space-grotesk font-bold text-lg mb-2">
                    {otherProject.title}
                  </h4>
                  <p className="font-inter text-white/70 text-sm">
                    {otherProject.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MobileProjectPage