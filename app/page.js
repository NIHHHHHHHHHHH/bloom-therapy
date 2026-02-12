import Header from '@/components/Layout/Header'
import HeroSection from '@/components/Home/HeroSection'
import HeroBanner from '@/components/Home/HeroBanner'
import MySpecialties from '@/components/Home/MySpecialities'
import WorkWithMe from '@/components/Home/WorkWithMe'
import AboutMe from '@/components/Home/AboutMe'
import OurOffice from '@/components/Home/OurOffice'
import FAQs from '@/components/Home/FAQs'
import ProfessionalBackground from '@/components/Home/ProfessionalBackground'
import CTA from '@/components/Home/CTA'
import Footer from '@/components/Layout/Footer'


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