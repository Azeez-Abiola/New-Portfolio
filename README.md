# Abiola Azeez Quadri - Portfolio Website

A modern, animated portfolio website built with React.js, TailwindCSS, and Vite. Features smooth animations, responsive design, and a premium user experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with premium animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animated**: Smooth entrance animations and micro-interactions using Framer Motion
- **Fast**: Built with Vite for lightning-fast development and build times
- **Dynamic Routing**: Project and blog pages with React Router
- **Accessibility**: Semantic HTML and proper keyboard navigation

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 🎨 Design System

### Colors
- **Cream**: `#FDF6E3` - Primary background
- **Black**: `#0D0D0D` - Primary text
- **Deep Orange**: `#FF5722` - Accent color

### Typography
- **Headers**: Space Grotesk (Google Fonts)
- **Body Text**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── HeroSection.jsx
│   ├── SkillsSection.jsx
│   ├── SelectedWorksSection.jsx
│   ├── BlogSection.jsx
│   └── SocialIcon.jsx
├── pages/               # Page components
│   ├── HomePage.jsx
│   ├── ProjectPage.jsx
│   └── BlogPage.jsx
├── data/                # Static data
│   └── portfolioData.js
├── assets/              # Images and static assets
├── App.jsx              # Main app component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`)

## 📱 Sections

### Hero Section
- Animated name and title
- Professional bio
- Social media links with hover animations
- Scroll indicator

### Skills Section
- Grid layout with skill icons
- Interactive hover effects
- "Building cool stuff with..." introduction card

### Selected Works
- Project showcase with alternating layout
- Project detail pages with routing
- Technology tags and external links

### Blog Section
- Infinite scrolling blog carousel
- Blog post detail pages
- Read time and publication dates

## 🎯 Customization

### Adding Projects
Edit `src/data/portfolioData.js` and add new project objects to the `projects` array:

```javascript
{
  id: 4,
  title: 'Your Project Name',
  description: 'Brief description',
  thumbnail: '/path/to/image',
  tech: ['React', 'Node.js'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/your-repo',
  screenshots: ['/path/to/screenshot1', '/path/to/screenshot2'],
  fullDescription: 'Detailed project description'
}
```

### Adding Blog Posts
Add new blog post objects to the `blogPosts` array in the same data file.

### Updating Social Links
Update the `socialLinks` array with your actual social media URLs.

## 🏗️ Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌟 Key Features Implemented

✅ **Modern React Architecture** - Component-based structure with hooks
✅ **Smooth Animations** - Framer Motion integration with custom animations
✅ **Responsive Design** - Mobile-first approach with Tailwind breakpoints
✅ **Route Navigation** - Dynamic project and blog pages
✅ **Custom Design System** - Consistent colors, typography, and spacing
✅ **Performance Optimized** - Vite build system with fast hot reload

## 🎨 Animation Details

- **Entrance Animations**: Staggered reveals with opacity and transform
- **Hover Effects**: Scale, color, and shadow transitions
- **Infinite Scroll**: CSS keyframe animation for blog section
- **Micro-interactions**: Button clicks, icon rotations, and scroll indicators

## 📞 Contact

- **Name**: Abiola Azeez Quadri
- **Role**: Software Engineer
- **Education**: Electrical and Electronics Engineering Graduate, University of Ilorin
- **LinkedIn**: [Add your LinkedIn URL here]

## 📝 License

This project is created for portfolio purposes. Feel free to use it as inspiration for your own portfolio!

---

Built with ❤️ using React, TailwindCSS, and Framer Motion