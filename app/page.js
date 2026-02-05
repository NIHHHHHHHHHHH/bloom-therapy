import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HeroBanner from '@/components/HeroBanner'
import MySpecialties from '@/components/MySpecialities'
import WorkWithMe from '@/components/WorkWithMe'
import AboutMe from '@/components/AboutMe'
import FAQs from '@/components/FAQs'


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HeroBanner />
      <MySpecialties />
      <WorkWithMe />
      <AboutMe />
      <FAQs />
    </main>
  )
}