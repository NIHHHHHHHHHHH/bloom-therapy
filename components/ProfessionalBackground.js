'use client'

import Accordion from './Accordion'
import AnimatedDiv from './AnimatedDiv' // Adjust the import path as needed

export default function ProfessionalBackground() {
  const background = [
    {
      question: "Education",
      answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
      question: "Licensure",
      answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
      question: "Certifications",
      answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
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
          <Accordion items={background} defaultOpenIndex={0} variant="default" />
        </AnimatedDiv>
      </div>
    </section>
  )
}