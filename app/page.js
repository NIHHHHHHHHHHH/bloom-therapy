import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HeroBanner from '@/components/HeroBanner'
import MySpecialties from '@/components/MySpecialities'


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HeroBanner />
      <MySpecialties />
    </main>
  )
}