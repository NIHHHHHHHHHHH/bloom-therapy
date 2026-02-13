import AnimatedDiv from '@/components/Resuable/AnimatedDiv'
import Accordion from '@/components/Resuable/Accordion'

export default function EducationCredentials() {
  const credentials = [
    {
      question: "Education",
      answer: "I earned my Doctor of Psychology (PsyD) in Clinical Psychology, with specialized training in trauma-informed care, cognitive-behavioral therapy, and EMDR. My education emphasized integrative, evidence-based approaches to treating anxiety, trauma, and stress-related conditions."
    },
    {
      question: "Licensure & Certifications",
      answer: "I am a Licensed Clinical Psychologist in the state of California (License #PSY12345). I maintain active certifications in EMDR therapy and continue ongoing training in trauma treatment and anxiety disorders."
    },
    {
      question: "Professional Affiliations",
      answer: "I am a member of the American Psychological Association (APA), the California Psychological Association (CPA), and the EMDR International Association (EMDRIA)."
    }
  ]

  return (
    <section className="bg-accent py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-4xl mx-auto">
        
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-6">
            Education & Credentials
          </h2>
        </AnimatedDiv>

        <Accordion items={credentials} defaultOpenIndex={0} variant="default" />

      </div>
    </section>
  )
}