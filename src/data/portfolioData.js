import { 
  HTMLIcon, 
  CSSIcon, 
  JavaScriptIcon, 
  ReactIcon, 
  NodeIcon, 
  TailwindIcon, 
  ViteIcon, 
  ExpoIcon, 
  MongoDBIcon, 
  PostmanIcon 
} from '../components/TechIcons'

// Skills data with real SVG icons
export const skills = [
  { name: 'HTML', icon: HTMLIcon },
  { name: 'CSS', icon: CSSIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'React Native', icon: ReactIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'TailwindCSS', icon: TailwindIcon },
  { name: 'Vite', icon: ViteIcon },
  { name: 'Expo', icon: ExpoIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Postman', icon: PostmanIcon }
];

// Web Projects data
export const projects = [
  {
    id: 1,
    title: 'Stephanie Balogun Portfolio',
    description: 'Professional film colorist portfolio showcasing color grading expertise and visual storytelling',
    thumbnail: '/Images/Selected-Works/stephanie.png',
    tech: ['React.js', 'TailwindCSS', 'JavaScript', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/stephanie.png',
      '/Images/Selected-Works/stephanie1.png'
    ],
    fullDescription: 'Stephanie Balogun Portfolio is a professional film colorist portfolio website featuring her expertise in color grading for films, commercials, and music videos. The platform showcases her unique visual storytelling approach with "Color is my language" as the central theme, presenting selected works, client testimonials, and comprehensive color grading services.'
  },
  {
    id: 2,
    title: 'Propellaco Official Website',
    description: 'Music industry platform empowering artists and shaping icons in the entertainment industry',
    thumbnail: '/Images/Selected-Works/propellaco.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/propellaco.png',
      '/Images/Selected-Works/propellaco1.png'
    ],
    fullDescription: 'Propellaco Official Website is a comprehensive music industry platform focused on "Building Futures in Music" and "Empowering Artists, Shaping Icons." The platform connects talented artists with industry opportunities, featuring artist showcases, talent management services, and comprehensive music industry solutions.'
  },
  {
    id: 3,
    title: 'TeazyTech Official Website',
    description: 'Educational technology platform empowering educators with cutting-edge knowledge and tools',
    thumbnail: '/Images/Selected-Works/teazytech.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/teazytech.png',
      '/Images/Selected-Works/teazytech1.png'
    ],
    fullDescription: 'TeazyTech Official Website is an innovative educational technology platform that empowers educators with cutting-edge knowledge and tools. The platform offers professional development programs, technology integration strategies, instructional content design, and comprehensive EdTech solutions for modern classrooms and advanced learners.'
  },
  {
    id: 4,
    title: 'Hovidas Technologies',
    description: 'Technology integration company delivering scalable digital solutions across diverse industries',
    thumbnail: '/Images/Selected-Works/hovidas.jpg',
    tech: ['React.js', 'TailwindCSS', 'JavaScript', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/hovidas.jpg',
      '/Images/Selected-Works/hovidas1.png'
    ],
    fullDescription: 'Hovidas Technologies is a forward-thinking technology integrator that delivers practical, scalable, and efficient digital solutions for organizations across diverse industries. The platform showcases their comprehensive services including technology integration, custom application development, technology consulting, and talent hiring & outsourcing solutions.'
  },
  {
    id: 5,
    title: 'Lorenzo Movies',
    description: 'Comprehensive entertainment platform for unlimited movie streaming, TV series, and anime content',
    thumbnail: '/Images/Selected-Works/lorenzomovies.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/lorenzomovies.png',
      '/Images/Selected-Works/lorenzomovies1.png'
    ],
    fullDescription: 'Lorenzo Movies is a comprehensive entertainment platform offering unlimited movies, TV series, animes, and more. The platform features HD 4K quality content, download and offline viewing capabilities, multiple categories including movies, animation, series, and anime, with tons of blockbuster content available for streaming and download.'
  },
  {
    id: 6,
    title: 'Marvin Kitchen LMS',
    description: 'Comprehensive culinary academy learning management system',
    thumbnail: '/Images/Selected-Works/marvin.png',
    tech: ['React.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'Paystack API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/marvin.png',
      '/Images/Selected-Works/marvin1.jpg'
    ],
    fullDescription: 'Marvin Kitchen LMS is a comprehensive culinary academy management platform featuring multi-role dashboard system, real-time course tracking, and integrated payment gateway. Built with modern technologies for scalability and optimal learning experience.'
  },
  {
    id: 7,
    title: 'OgaKay Vehicle Maintenance Platform',
    description: 'Comprehensive automotive services marketplace platform',
    thumbnail: '/Images/Selected-Works/ogakay.png',
    tech: ['React.js', 'JavaScript', 'TailwindCSS', 'Firebase', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/ogakay.png',
      '/Images/Selected-Works/ogakay2.jpg'
    ],
    fullDescription: 'OgaKay Vehicle Maintenance Platform is a comprehensive automotive services marketplace featuring real-time service tracking, multi-role dashboard interfaces, and integrated Google Maps for location services. Built for optimal user engagement and service provider management.'
  }
];

// Mobile Projects data
export const mobileProjects = [
  {
    id: 1,
    title: 'EazyFit',
    description: 'Africa\'s most trusted fashion platform connecting customers with verified stylists and designers',
    thumbnail: '/Images/Selected-Works/Mobile-works/eazyfit.png',
    tech: ['React Native', 'Expo', 'JavaScript', 'Firebase', 'Payment Integration'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/eazyfit1.png', '/Images/Selected-Works/Mobile-works/eazyfit2.png'],
    fullDescription: 'EazyFit is Africa\'s most trusted fashion platform that solves the biggest problems in custom fashion ordering. The app connects customers with verified stylists for both native wear and English styles, featuring secure payments, on-time delivery guarantee, and quality-checked designers for stress-free fashion ordering.'
  },
  {
    id: 2,
    title: 'IWM', 
    description: 'Private banking mobile application providing secure, efficient, and personalized banking services',
    thumbnail: '/Images/Selected-Works/Mobile-works/IWM.png',
    tech: ['React Native', 'TypeScript', 'Expo', 'Secure Banking APIs', 'Apple Pay', 'Google Pay'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/IWM1.png', '/Images/Selected-Works/Mobile-works/IWM2.png'],
    fullDescription: 'IWM is a comprehensive private banking mobile application that simplifies banking with same-day USD account opening worldwide. Features include secure cross-border transfers, physical Visa debit card delivery, Apple/Google Pay support, dedicated relationship manager chat, and deposits insured up to $1M by US law.'
  },
  {
    id: 3,
    title: 'Lorenzo Movie App',
    description: 'Mobile entertainment platform offering unlimited movies, TV series, and anime streaming',
    thumbnail: '/Images/Selected-Works/Mobile-works/lorenzomovieapp.png', 
    tech: ['React Native', 'JavaScript', 'Node.js', 'MongoDB', 'Video Streaming APIs'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/lorenzomovieapp1.png', '/Images/Selected-Works/Mobile-works/lorenzomovieapp2.png'],
    fullDescription: 'Lorenzo Movie App is a feature-rich mobile entertainment platform offering unlimited movies, TV series, animes, and more. The app provides HD 4K quality streaming, download and offline viewing capabilities, multiple content categories, and access to tons of blockbuster movies and trending content.'
  },
  {
    id: 4,
    title: 'Poster Box',
    description: 'Comprehensive delivery services marketplace mobile application',
    thumbnail: '/Images/Selected-Works/Mobile-works/Poster.png', 
    tech: ['React Native', 'TypeScript', 'NativeWind', 'Redux Toolkit', 'React Native Maps', 'Expo'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/Poster1.png', '/Images/Selected-Works/Mobile-works/Poster2.png'],
    fullDescription: 'Poster Box is a comprehensive delivery services marketplace platform featuring real-time authentication, multi-role dashboard interfaces, integrated React Native Maps for delivery tracking, and comprehensive KYC authentication system for secure operations.'
  }
];

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper architecture and state management.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-15',
    readTime: '8 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 2,
    title: 'Mobile Development with React Native',
    excerpt: 'A comprehensive guide to building cross-platform mobile apps using React Native and modern development practices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-10',
    readTime: '12 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 3,
    title: 'Node.js Performance Optimization',
    excerpt: 'Tips and techniques for optimizing Node.js applications for better performance and scalability.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-05',
    readTime: '10 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 4,
    title: 'Modern CSS Techniques',
    excerpt: 'Explore the latest CSS features and techniques for creating beautiful and responsive web designs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    date: '2023-12-28',
    readTime: '6 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 5,
    title: 'JavaScript ES2024 Features',
    excerpt: 'Discover the newest JavaScript features and how they can improve your development workflow.',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&crop=center',
    date: '2023-12-20',
    readTime: '9 min read',
    content: 'Full blog post content here...'
  }
];

// Social links data
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Azeez-Abiola',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abiola-azeez-688865201/',
    icon: 'linkedin'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/darnyy_abiola',
    icon: 'twitter'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@abiolaquadri111',
    icon: 'medium'
  },
  {
    name: 'Resume',
    url: 'https://docs.google.com/document/d/1YVOEhGziRzYDvgen_j5qYpE3bhm4ihssoSYvI8iuNUQ/edit?tab=t.0',
    icon: 'document'
  }
];

// Personal information
export const personalInfo = {
  name: 'Abiola Azeez Quadri',
  title: 'Software Engineer',
  bio: 'Proficient in Mobile and Web Development. Over the past 4 years I\'ve helped companies, startups, founders and clients build amazing, converting, real-life products that solve real-life problems.',
  education: 'Electrical and Electronics Engineering Graduate, University of Ilorin',
  location: 'Nigeria',
  email: 'Abiolaquadri111@gmail.com',
  phone: '+234 xxx xxx xxxx'
};