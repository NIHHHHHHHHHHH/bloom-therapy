

'use client'

import ArchImage from './ArchImage'
import Accordion from './Accordion'

export default function FAQs() {
  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Answer goes here."
    },
    {
      question: "What are your rates?",
      answer: "Answer goes here."
    },
    {
      question: "Do you have any openings?",
      answer: "Answer goes here."
    }
  ]

  return (
    <section className="bg-primary py-16 lg:py-24 px-2 xs:px-10 2xl:px-20">
      <div className="max-w-full mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* First Div - Image */}
          <div className="flex justify-center">
            <ArchImage
              src="/images/faqs.webp"
              alt="Lavender flowers in a vase"
              className="w-full max-w-35 md:max-w-sm xl:max-w-md 2xl:max-w-lg"
            />
          </div>

          {/* Second Div - Content */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="w-full max-w-4xl space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-12 text-left">
                FAQs
              </h2>

              <Accordion items={faqs} variant="faq" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}