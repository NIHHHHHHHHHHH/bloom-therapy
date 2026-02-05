'use client'

import ArchImage from './ArchImage'
import Accordion from './Accordion'
import AnimatedDiv from './AnimatedDiv' 

export default function FAQs() {
  const faqs = [
    {
      question: "Do you offer in-person or online therapy?",
      answer: "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. My office is a quiet, private space designed to feel calm and grounding."
    },
    {
      question: "What types of issues do you specialize in?",
      answer: "I specialize in anxiety, panic, trauma (including EMDR), burnout, and perfectionism. I work primarily with high-achieving adults who feel functional on the outside but are struggling internally with stress, overthinking, or past experiences."
    },
    {
      question: "How long does therapy typically last?",
      answer: "Therapy is individualized. Some clients find relief in a few months, while deeper work—especially trauma processing—may take longer. We'll work collaboratively to set goals and pace our work in a way that feels right for you."
    }
  ]

  return (
    <section className="bg-primary py-16 lg:py-24 px-2 xs:px-10 2xl:px-20">
      <div className="max-w-full mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* First Div - Image */}
          <AnimatedDiv
            direction="up"
            delay={0.1}
            triggerOnce={false}
            scrollDuration={0.8}
            className="flex justify-center"
          >
            <ArchImage
              src="/images/faqs.webp"
              alt="Lavender flowers in a vase"
              className="w-full max-w-35 md:max-w-sm xl:max-w-md 2xl:max-w-lg"
            />
          </AnimatedDiv>

          {/* Second Div - Content */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="w-full max-w-4xl space-y-8">
              <AnimatedDiv
                direction="up"
                delay={0.2}
                triggerOnce={false}
                scrollDuration={0.6}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-12 text-left">
                  Frequently Asked Questions
                </h2>
              </AnimatedDiv>

              <AnimatedDiv
                direction="up"
                delay={0.3}
                triggerOnce={false}
                scrollDuration={0.6}
              >
                <Accordion items={faqs} variant="faq" />
              </AnimatedDiv>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}