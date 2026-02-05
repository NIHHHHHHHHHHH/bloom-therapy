import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HeroBanner from '@/components/HeroBanner'
import MySpecialties from '@/components/MySpecialities'
import WorkWithMe from '@/components/WorkWithMe'
import AboutMe from '@/components/AboutMe'
import OurOffice from '@/components/OurOffice'
import FAQs from '@/components/FAQs'
import ProfessionalBackground from '@/components/ProfessionalBackground'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HeroBanner />
      <MySpecialties />
      <WorkWithMe />
      <AboutMe />
      <OurOffice />
      <FAQs />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </main>
  )
}