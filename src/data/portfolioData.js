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

// Projects data
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    description: 'A full-stack mobile application built with React Native and Node.js',
    thumbnail: '/api/placeholder/400/300',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
    fullDescription: 'A comprehensive e-commerce mobile application featuring user authentication, product catalog, shopping cart, and payment integration. Built using React Native for cross-platform compatibility and Node.js backend with MongoDB for data management.'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animated interactions',
    thumbnail: '/api/placeholder/400/300',
    tech: ['React.js', 'TailwindCSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
    fullDescription: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design. Features include dynamic routing, contact forms, and optimized performance.'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management platform with real-time updates',
    thumbnail: '/api/placeholder/400/300',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/api/placeholder/600/400', '/api/placeholder/600/400'],
    fullDescription: 'A collaborative task management application enabling teams to organize, track, and complete projects efficiently. Features real-time updates, user roles, and project analytics.'
  }
];

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper architecture and state management.',
    image: '/api/placeholder/400/250',
    date: '2024-01-15',
    readTime: '8 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 2,
    title: 'Mobile Development with React Native',
    excerpt: 'A comprehensive guide to building cross-platform mobile apps using React Native and modern development practices.',
    image: '/api/placeholder/400/250',
    date: '2024-01-10',
    readTime: '12 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 3,
    title: 'Node.js Performance Optimization',
    excerpt: 'Tips and techniques for optimizing Node.js applications for better performance and scalability.',
    image: '/api/placeholder/400/250',
    date: '2024-01-05',
    readTime: '10 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 4,
    title: 'Modern CSS Techniques',
    excerpt: 'Explore the latest CSS features and techniques for creating beautiful and responsive web designs.',
    image: '/api/placeholder/400/250',
    date: '2023-12-28',
    readTime: '6 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 5,
    title: 'JavaScript ES2024 Features',
    excerpt: 'Discover the newest JavaScript features and how they can improve your development workflow.',
    image: '/api/placeholder/400/250',
    date: '2023-12-20',
    readTime: '9 min read',
    content: 'Full blog post content here...'
  }
];

// Social links data
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abiola-azeez-688865201/',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: 'medium'
  },
  {
    name: 'Resume',
    url: '/resume.pdf',
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
  email: 'contact@abiolaazeez.com',
  phone: '+234 xxx xxx xxxx'
};