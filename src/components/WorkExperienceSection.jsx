import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const workExperience = [
  {
    id: 1,
    position: 'Senior Frontend Developer',
    company: 'Marvin Kitchen Culinary Academy',
    period: 'January 2025 – Present',
    duration: 'Ongoing (Freelance/Gig Project)',
    description: 'Developed and maintained a comprehensive culinary academy management platform using React.js, TypeScript, and TailwindCSS. Built responsive user interfaces for multiple user roles including students, instructors, and administrators.',
    responsibilities: [
      'Developed comprehensive culinary academy management platform',
      'Built responsive interfaces for multiple user roles',
      'Implemented real-time authentication and role-based access control',
      'Created interactive dashboard components with data visualization',
      'Integrated Paystack payment gateway for secure transactions',
      'Developed mobile-first responsive designs'
    ],
    projects: [
      'Marvin Kitchen Culinary Academy Platform',
      'Multi-Role Dashboard System',
      'Student Management System',
      'Real-time Course Tracking'
    ],
    technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'Paystack API', 'Vite', 'Context API'],
    isActive: true
  },
  {
    id: 2,
    position: 'Senior Frontend Developer',
    company: 'IWM Private Banking',
    period: 'September 2024 – June 2025',
    duration: '10 months (Full-time/Contract)',
    description: 'Developed and maintained a comprehensive private banking mobile application using React Native, TypeScript, and Expo.',
    responsibilities: [
      'Built private banking mobile application',
      'Implemented secure banking authentication flows',
      'Created interactive dashboard components',
      'Integrated secure banking APIs and payment systems',
      'Developed comprehensive testing suite with Jest',
      'Built role-based access control systems'
    ],
    projects: [
      'IWM Private Banking Mobile App',
      'Secure Banking Dashboard System',
      'Customer Onboarding System',
      'Real-time Banking Management'
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Secure Banking APIs', 'Apple Pay', 'Google Pay', 'Jest'],
    isActive: false
  },
  {
    id: 3,
    position: 'Senior Frontend Developer',
    company: 'Ogakay',
    period: 'January 2024 – Present',
    duration: 'Ongoing',
    description: 'Developed and maintained a comprehensive automotive services marketplace platform using React.js, JavaScript, and TailwindCSS.',
    responsibilities: [
      'Built automotive services marketplace platform',
      'Implemented real-time authentication with Firebase',
      'Created multi-role dashboard interfaces',
      'Integrated Google Maps API for location services',
      'Developed service provider management systems',
      'Built real-time service tracking features'
    ],
    projects: [
      'Ogakay Automotive Services Platform',
      'Multi-Role Dashboard System',
      'Service Provider Management',
      'Real-time Service Tracking'
    ],
    technologies: ['React.js', 'JavaScript', 'TailwindCSS', 'Firebase', 'Google Maps API', 'Vite'],
    isActive: true
  },
  {
    id: 4,
    position: 'Senior Frontend Developer',
    company: 'Poster Box',
    period: 'January 2024 – May 2024',
    duration: '5 months',
    description: 'Developed comprehensive delivery services marketplace platform using React Native, TypeScript, and NativeWind.',
    responsibilities: [
      'Built delivery services marketplace platform',
      'Implemented real-time authentication with Redux',
      'Created multi-role dashboard interfaces',
      'Integrated React Native Maps for delivery tracking',
      'Built comprehensive KYC and authentication system',
      'Developed real-time communication features'
    ],
    projects: [
      'Poster Box Platform',
      'Multi-Role Dashboard System',
      'Delivery Management System',
      'Real-time Communication Features'
    ],
    technologies: ['React Native', 'TypeScript', 'NativeWind', 'Redux Toolkit', 'React Native Maps', 'Expo'],
    isActive: false
  },
  {
    id: 5,
    position: 'Senior Frontend Developer',
    company: 'StudyMeister',
    period: 'May 2024 – August 2024',
    duration: '4 months',
    description: 'Developed and optimized responsive user interfaces using React.js, TypeScript, and TailwindCSS for AI-powered content generation platform.',
    responsibilities: [
      'Developed responsive user interfaces with React.js',
      'Integrated AI-powered content generation system',
      'Implemented interactive components with real-time feedback',
      'Ensured cross-browser compatibility and mobile responsiveness',
      'Increased platform usability by 20%',
      'Reduced document creation time by 30%'
    ],
    projects: [
      'StudyMeister AI Content Platform'
    ],
    technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'MongoDB'],
    isActive: false
  },
  {
    id: 6,
    position: 'Senior Frontend Developer',
    company: 'SwiftyHost',
    period: 'January 2021 – Present',
    duration: '3+ years',
    description: 'Led frontend development for SwiftyHost\'s MVP, integrating Angular, TypeScript, and Node.js with focus on SEO optimization.',
    responsibilities: [
      'Led frontend development for SwiftyHost MVP',
      'Implemented SEO optimization strategies',
      'Collaborated with backend developers and designers',
      'Supervised brand identity team',
      'Increased customer sign-ups by 30%',
      'Improved organic traffic by 25%'
    ],
    projects: [
      'SwiftyHost Web Hosting Platform'
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Google Cloud Platform', 'TailwindCSS', 'MySQL'],
    isActive: true
  },
  {
    id: 7,
    position: 'Senior Frontend Developer',
    company: 'Smartlearn',
    period: 'October 2019 – September 2020',
    duration: '1 year',
    description: 'Led frontend development for online education platform using Vue.js and TypeScript with integrated content delivery systems.',
    responsibilities: [
      'Led frontend development with Vue.js',
      'Integrated video, document, and live streaming systems',
      'Ensured cross-platform accessibility',
      'Delivered fully responsive UI',
      'Increased platform engagement by 20%',
      'Successfully launched MVP on time'
    ],
    projects: [
      'Smartlearn Edtech Platform'
    ],
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'MongoDB'],
    isActive: false
  },
  {
    id: 8,
    position: 'Frontend Developer',
    company: 'LorenzoTvmedia',
    period: 'May 2017 – July 2019',
    duration: '2+ years',
    description: 'Developed and launched media platform using React.js with integrated content management system.',
    responsibilities: [
      'Developed media platform with React.js',
      'Created blog platform with CMS integration',
      'Collaborated with backend developers',
      'Implemented SEO improvements',
      'Increased platform traffic by 35%',
      'Delivered full CMS integration'
    ],
    projects: [
      'LorenzoTvmedia Platform',
      'LorenzoTvmedia Blog'
    ],
    technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'MySQL'],
    isActive: false
  },
  {
    id: 9,
    position: 'Junior Frontend Developer',
    company: 'One Credit Pay Solutions Limited',
    period: 'October 2016 – May 2017',
    duration: '8 months',
    description: 'Redesigned and optimized company website and contributed to fintech platform development.',
    responsibilities: [
      'Redesigned company website with Angular',
      'Contributed to fintech platform development',
      'Collaborated with backend engineers',
      'Integrated secure payment gateways',
      'Improved website responsiveness by 20%',
      'Increased transaction volume'
    ],
    projects: [
      'One Credit Pay Platform'
    ],
    technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Node.js', 'MySQL'],
    isActive: false
  }
]

const WorkExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(workExperience[0])
  const [hoveredCard, setHoveredCard] = useState(null)
  const detailsRef = useRef(null)

  // Function to handle experience selection and mobile scroll
  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience)
    
    // Scroll to details section on mobile/tablet
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1, // Reduced from 0.3
        staggerChildren: 0.05 // Reduced from 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced from y: 50
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-32 left-16 w-4 h-4 bg-deep-orange/30 rounded-full"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-6 h-1 bg-deep-orange/40 rounded-full"
          animate={{ 
            rotate: [0, 360],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-3 h-3 border border-deep-orange/50 rotate-45"
          animate={{ 
            rotate: [45, 405, 45],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Section Number */}
      <motion.div 
        className="absolute top-8 md:top-12 left-4 md:left-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.4 }}
      >
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          05
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <div 
        className="max-w-7xl mx-auto py-16 md:py-20 relative z-10 px-4 md:px-8"
      >
        {/* Section Header */}
        <div 
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
            My Work <span className="text-deep-orange">Experience</span>
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            Over 5 years of crafting digital experiences across startups and established companies. 
            Each role has shaped my expertise in building scalable, user-centric applications.
          </p>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience List - Left Side */}
          <div 
            className="lg:col-span-1 space-y-4 order-1 lg:order-1"
          >
            <h3 className="font-space-grotesk font-bold text-lg md:text-xl mb-4 md:mb-6 text-deep-orange">
              Companies & Roles
            </h3>
            <div className="space-y-3">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    selectedExperience.id === exp.id 
                      ? 'bg-deep-orange/20 border-deep-orange text-white' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onClick={() => handleExperienceSelect(exp)}
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={cardVariants}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-space-grotesk font-semibold text-sm md:text-base">
                      {exp.company}
                    </h4>
                    {exp.isActive && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-xs md:text-sm text-white/60 mb-1">{exp.position}</p>
                  <p className="font-inter text-xs md:text-sm text-white/50">{exp.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Details - Right Side */}
          <div 
            ref={detailsRef}
            className="lg:col-span-2 order-2 lg:order-2"
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
              key={`experience-${selectedExperience.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl">
                    {selectedExperience.position}
                  </h3>
                  {selectedExperience.isActive && (
                    <motion.span 
                      className="px-4 py-2 bg-deep-orange/20 text-deep-orange text-sm rounded-full font-semibold mt-2 md:mt-0 w-fit"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Currently Active
                    </motion.span>
                  )}
                </div>
                <h4 className="font-space-grotesk font-semibold text-xl text-deep-orange mb-2">
                  {selectedExperience.company}
                </h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/60">
                  <span className="font-inter text-sm">{selectedExperience.period}</span>
                  <span className="hidden md:block">•</span>
                  <span className="font-inter text-sm">{selectedExperience.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-inter text-white/80 leading-relaxed mb-6">
                {selectedExperience.description}
              </p>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                  Key Responsibilities
                </h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedExperience.responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <div className="w-1.5 h-1.5 bg-deep-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-white/70 leading-relaxed">
                        {responsibility}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                  Key Projects
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.projects.map((project, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-deep-orange/10 text-deep-orange border border-deep-orange/20 rounded-full text-sm font-inter"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-white/10 text-white rounded-full text-sm font-inter hover:bg-white/20 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className="mt-16 md:mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '25+', label: 'Projects Completed' },
            { number: '15+', label: 'Companies Worked With' },
            { number: '10+', label: 'Technologies Mastered' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="font-space-grotesk font-bold text-3xl md:text-4xl text-deep-orange mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection