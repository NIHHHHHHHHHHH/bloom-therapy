'use client'

import Accordion from './Accordion'
import AnimatedDiv from './AnimatedDiv' 

export default function ProfessionalBackground() {
  const background = [
    {
      question: "Education",
      answer: "I earned my Doctor of Psychology (PsyD) in Clinical Psychology, with specialized training in trauma-informed care, cognitive-behavioral therapy, and EMDR. My education emphasized integrative, evidence-based approaches to treating anxiety, trauma, and stress-related conditions."
    },
    {
      question: "Licensure",
      answer: "I am a Licensed Clinical Psychologist in the state of California. I provide therapy to adults throughout California via secure telehealth, as well as in-person sessions from my Santa Monica office."
    },
    {
      question: "My Approach",
      answer: "I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques. My work is structured yet flexible, emphasizing safety, stabilization, and helping clients develop insight and resilience over time."
    }
  ]

  return (
    <section className="bg-secondary py-16 lg:py-27 px-4 sm:px-0">
      <div className="max-w-sm sm:max-w-lg lg:max-w-xl  xl:max-w-2xl 2xl:max-w-4xl mx-auto w-full">
        <AnimatedDiv
          direction="up"
          delay={0.2}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-10 text-center">
            My Professional Background
          </h2>
        </AnimatedDiv>

        <AnimatedDiv
          direction="up"
          delay={0.3}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <Accordion items={background}  variant="default" />
        </AnimatedDiv>
      </div>
    </section>
  )
}