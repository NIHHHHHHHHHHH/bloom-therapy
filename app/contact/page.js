import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'

export const metadata = {
  title: 'Contact Dr. Maya Reynolds | Schedule a Consultation',
  description: 'Get in touch with Dr. Maya Reynolds to schedule a therapy consultation. Located in Santa Monica, CA. In-person and telehealth appointments available.',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}