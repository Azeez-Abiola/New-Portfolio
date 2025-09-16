import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { useNavigate } from 'react-router-dom'

const SelectedWorksSection = () => {
  const navigate = useNavigate()

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

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <section className="py-24 section-padding relative">
      {/* Section Number */}
      <motion.div 
        className="absolute top-12 left-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-6xl md:text-7xl text-black/20">
          03
        </div>
        <div className="w-12 h-1 bg-black/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="container-max"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Selected Works
          </h2>
          <p className="font-inter text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
              variants={itemVariants}
            >
              {/* Project Image */}
              <motion.div 
                className={`${index % 2 === 1 ? 'md:col-start-2' : ''} group cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-black/5 aspect-[4/3] hover-glow">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-deep-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      className="bg-cream px-6 py-3 rounded-full font-space-grotesk font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      View Project
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''} space-y-6`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
                    {project.title}
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-black/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-black/5 text-black font-inter font-medium rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: '#FF5722', color: '#FDF6E3' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.button
                      className="px-8 py-3 bg-deep-orange text-cream font-space-grotesk font-semibold rounded-full hover-lift hover-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(project.id)}
                    >
                      View Project
                    </motion.button>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border-2 border-black text-black font-space-grotesk font-semibold rounded-full hover:bg-black hover:text-cream transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-space-grotesk font-semibold text-lg border-b-2 border-deep-orange text-deep-orange cursor-pointer">
              View All Projects →
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SelectedWorksSection