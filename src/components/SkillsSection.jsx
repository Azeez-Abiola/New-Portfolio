import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '../data/portfolioData'

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 section-padding bg-black text-white relative">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-cream">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" 
            fill="#0D0D0D"
          />
        </svg>
      </div>

      {/* Section Number */}
      <motion.div 
        className="absolute top-12 left-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-6xl md:text-7xl text-white/20">
          02
        </div>
        <div className="w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="container-max relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-16 text-white"
          variants={itemVariants}
        >
          Tools
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* First special item - Dynamic text based on hover */}
          <motion.div
            className="col-span-2 bg-gray-900 border border-gray-700 p-6 rounded-lg flex items-center justify-start text-left min-h-[120px] hover:bg-gray-800 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-space-grotesk font-medium text-white text-lg">
                  Building cool stuff with{' '}
                  <span className="text-deep-orange font-semibold">
                    {hoveredSkill || 'amazing tools'}
                  </span>
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900 border border-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center min-h-[120px] hover:bg-gray-800 transition-colors duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div 
                className="text-white w-12 h-12 flex items-center justify-center group-hover:text-deep-orange transition-colors duration-300 mb-3"
                animate={{ 
                  scale: hoveredSkill === skill.name ? 1.1 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon />
              </motion.div>
              
              <motion.div 
                className="text-xs font-inter text-gray-400 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredSkill === skill.name ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection