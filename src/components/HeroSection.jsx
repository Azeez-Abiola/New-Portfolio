import { motion } from 'framer-motion'
import { socialLinks } from '../data/portfolioData'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1)
  
  const bioText = "Proficient in Mobile and Web Development. Over the past 4 years I've helped companies, startups, founders and clients build amazing, converting, real-life products."
  const words = bioText.split(' ')

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(prev => prev + 1)
      }
    }, 2000) // 2 seconds delay for each word

    return () => clearTimeout(timer)
  }, [currentWordIndex, words.length])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const nameVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen bg-cream relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-6 h-6 border-2 border-yellow-400 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-32 w-8 h-2 bg-purple-400 rounded-full"
          animate={{ 
            rotate: [0, 180, 360],
            y: [0, -15, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-32 left-1/2 w-3 h-3 bg-pink-400 rounded-full"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-5 h-5 border-2 border-orange-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-40 w-6 h-1 bg-cyan-400 rounded-full"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            x: [0, -10, 0] 
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Social Icons - Top Right */}
      <motion.div 
        className="absolute top-8 right-8 z-50 flex gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black text-cream rounded-full flex items-center justify-center hover:bg-deep-orange transition-all duration-300 text-sm font-bold"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          >
            {link.name === 'GitHub' && 'G'}
            {link.name === 'LinkedIn' && 'L'}
            {link.name === 'Medium' && 'M'}
            {link.name === 'Resume' && 'R'}
            {link.name === 'Twitter' && 'T'}
          </motion.a>
        ))}
      </motion.div>

      {/* Social Links - Left Side */}
      <motion.div 
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-3 h-3 bg-black rounded-full hover:bg-deep-orange transition-all duration-300 hover:scale-125"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen section-padding">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Side - Number */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="font-space-grotesk font-bold text-8xl md:text-9xl text-black">
              01
            </div>
            <div className="w-16 h-1 bg-black mt-4"></div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-deep-orange/20 to-cream/20 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center text-6xl">
                👤
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            className="text-right max-w-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="font-inter text-lg md:text-xl mb-4 text-black/70"
              variants={itemVariants}
            >
              Hi, I am <span className="font-semibold text-deep-orange">Abiola Azeez Quadri</span>
            </motion.div>

            <motion.h1 
              className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-8"
              variants={nameVariants}
            >
              SOFTWARE
              <br />
              <span className="text-deep-orange">ENGINEER</span>
            </motion.h1>

            <motion.div 
              className="font-inter text-sm md:text-base leading-relaxed mb-6"
              variants={itemVariants}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-1"
                  initial={{ color: '#0D0D0D80' }}
                  animate={{ 
                    color: index <= currentWordIndex ? '#FF5722' : '#0D0D0D80'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="font-inter text-sm text-black/60"
              variants={itemVariants}
            >
              Electrical and Electronics Engineering Graduate, University of Ilorin
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right - Scroll Text */}
      <motion.div 
        className="absolute bottom-8 right-8 transform rotate-90 origin-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="font-inter text-xs text-gray-400 tracking-widest">
          SCROLL DOWN
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection