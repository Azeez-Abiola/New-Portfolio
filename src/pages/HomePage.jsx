import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import SelectedWorksSection from '../components/SelectedWorksSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import ScrollReveal from '../components/ScrollReveal'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <ScrollReveal delay={0.1}>
        <SkillsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <SelectedWorksSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <BlogSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <ContactSection />
      </ScrollReveal>
    </div>
  )
}

export default HomePage