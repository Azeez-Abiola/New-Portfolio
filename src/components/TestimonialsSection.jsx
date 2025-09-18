import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { testimonials } from '../data/portfolioData'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)
  const controls = useAnimation()

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleDotClick = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

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

  const testimonialVariants = {
    enter: {
      x: 1000,
      opacity: 0,
      scale: 0.8
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      x: -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-deep-orange to-orange-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Number */}
      <motion.div 
        className="absolute top-8 md:top-12 left-4 md:left-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          05
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-5xl lg:text-6xl mb-6">
            What People I've <span className="text-cream">Worked With</span> Say
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Real feedback from amazing people I've had the privilege to work with
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <div className="relative min-h-[400px] md:min-h-[500px] flex items-center">
            <motion.div
              key={currentIndex}
              className="w-full"
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="order-2 md:order-1">
                    {/* Quote Icon */}
                    <motion.div 
                      className="mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <svg className="w-12 h-12 text-cream" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </motion.div>

                    {/* Rating Stars */}
                    <motion.div 
                      className="flex gap-1 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </motion.svg>
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote 
                      className="text-xl md:text-2xl font-inter leading-relaxed mb-8 text-white/90"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      "{currentTestimonial.testimonial}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.8 }}
                    >
                      <h4 className="font-space-grotesk font-bold text-xl text-cream mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-white/70 mb-2">
                        {currentTestimonial.position} at {currentTestimonial.company}
                      </p>
                      <p className="text-sm text-white/50">
                        Project: {currentTestimonial.project} • {currentTestimonial.date}
                      </p>
                    </motion.div>
                  </div>

                  {/* Client Avatar */}
                  <div className="order-1 md:order-2 flex justify-center">
                    <motion.div 
                      className="relative"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-cream to-white/20 p-1">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center overflow-hidden">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/30 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-space-grotesk font-bold text-deep-orange">
                              {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-cream rounded-full"
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/40 rounded-full"
                        animate={{ 
                          y: [0, 15, 0],
                          x: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex items-center justify-center gap-8 mt-12"
          variants={itemVariants}
        >
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cream scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Auto-play Indicator */}
        <motion.div 
          className="text-center mt-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-white/60">
            <motion.div
              className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-white/40'}`}
              animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection