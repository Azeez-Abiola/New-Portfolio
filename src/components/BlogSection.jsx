import { motion } from 'framer-motion'
import { blogPosts } from '../data/portfolioData'
import { useNavigate } from 'react-router-dom'

const BlogSection = () => {
  const navigate = useNavigate()

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Duplicate blog posts for infinite scroll effect
  const duplicatedPosts = [...blogPosts, ...blogPosts, ...blogPosts]

  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
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
          04
        </div>
        <div className="w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="section-padding relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="container-max text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
            Latest Insights
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Thoughts and insights on web development, mobile apps, and the latest tech trends.
          </p>
        </motion.div>

        {/* Infinite Scrolling Blog Cards */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="flex gap-6 animate-infinite-scroll">
            {duplicatedPosts.map((post, index) => (
              <motion.div
                key={`${post.id}-${index}`}
                className="flex-shrink-0 w-80 bg-cream rounded-2xl overflow-hidden hover-lift hover-glow cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBlogClick(post.id)}
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-deep-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-black/60 font-inter mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-space-grotesk font-bold text-xl mb-3 line-clamp-2 group-hover:text-deep-orange transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="font-inter text-black/70 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.div 
                    className="mt-4 flex items-center text-deep-orange font-space-grotesk font-semibold text-sm"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* View All Posts Link */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-space-grotesk font-semibold text-lg border-b-2 border-deep-orange text-deep-orange cursor-pointer">
              View All Posts →
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BlogSection