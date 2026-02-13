import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import AboutHero from '@/components/About/AboutHero'
import DetailedBio from '@/components/About/DetailedBio'
import TherapeuticApproach from '@/components/About/TherapeuticApproach'
import EducationCredentials from '@/components/About/EducationCredentials'
import WhyIBecameTherapist from '@/components/About/WhyIBecameTherapist'
import AboutCTA from '@/components/About/AboutCTA'

export const metadata = {
  title: 'About Dr. Maya Reynolds | Licensed Clinical Psychologist',
  description: 'Learn about Dr. Maya Reynolds\' background, therapeutic approach, and specializations in anxiety, trauma, and burnout therapy in Santa Monica, CA.',
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <DetailedBio />
      <TherapeuticApproach />
      <EducationCredentials />
      <WhyIBecameTherapist />
      <AboutCTA />
      <Footer />
    </main>
  )
}