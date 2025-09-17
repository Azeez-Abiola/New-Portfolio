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
      } else {
        // Reset to start the loop again
        setCurrentWordIndex(-1)
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
          className="absolute top-20 left-4 md:left-20 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full"
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
          className="absolute top-40 right-8 md:right-32 w-4 h-4 md:w-6 md:h-6 border-2 border-yellow-400 rounded-full"
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
          className="absolute bottom-40 left-8 md:left-32 w-6 h-1.5 md:w-8 md:h-2 bg-purple-400 rounded-full"
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
          className="absolute top-32 left-1/2 w-2.5 h-2.5 md:w-3 md:h-3 bg-pink-400 rounded-full"
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
          className="absolute bottom-32 right-4 md:right-20 w-4 h-4 md:w-5 md:h-5 border-2 border-orange-400 rounded-full"
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
          className="absolute top-1/2 right-8 md:right-40 w-5 h-0.5 md:w-6 md:h-1 bg-cyan-400 rounded-full"
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
        className="absolute top-4 md:top-8 right-4 md:right-8 z-50 flex gap-2 md:gap-4"
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
            className="p-2 md:p-3 bg-black/5 hover:bg-deep-orange hover:text-cream rounded-full transition-all duration-300 hover:scale-110 hover-glow"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          >
            {link.name === 'GitHub' && (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            )}
            {link.name === 'LinkedIn' && (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            )}
            {link.name === 'Medium' && (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            )}
            {link.name === 'Resume' && (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            )}
            {link.name === 'Twitter' && (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            )}
          </motion.a>
        ))}
      </motion.div>

      {/* Social Links - Left Side */}
      <motion.div 
        className="hidden lg:flex fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4"
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
      <div className="flex items-center justify-center min-h-screen section-padding px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-0">
          {/* Left Side - Number */}
          <motion.div 
            className="text-center lg:text-left order-1 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="font-space-grotesk font-bold text-6xl md:text-8xl lg:text-9xl text-black">
              01
            </div>
            <div className="w-12 lg:w-16 h-1 bg-black mt-4 mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div 
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-deep-orange/20 to-cream/20 shadow-2xl">
              <img 
                src="/Images/hero1.jpg"
                alt="Abiola Azeez Quadri - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            className="text-center lg:text-right max-w-md order-3 lg:order-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="font-inter text-base md:text-lg lg:text-xl mb-4 text-black/70"
              variants={itemVariants}
            >
              Hi, I am <span className="font-semibold text-deep-orange">Abiola Azeez Quadri</span>
            </motion.div>

            <motion.h1 
              className="font-space-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-6 md:mb-8"
              variants={nameVariants}
            >
              SOFTWARE
              <br />
              <span className="text-deep-orange">ENGINEER</span>
            </motion.h1>

            <motion.div 
              className="font-inter text-sm md:text-base leading-relaxed mb-4 md:mb-6"
              variants={itemVariants}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-1"
                  initial={{ color: '#0D0D0D80' }}
                  animate={{ 
                    color: index === currentWordIndex ? '#FF5722' : '#0D0D0D80'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="font-inter text-xs md:text-sm text-black/60"
              variants={itemVariants}
            >
              Electrical and Electronics Engineering Graduate, University of Ilorin
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection