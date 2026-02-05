'use client'

import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import ArchImage from './ArchImage'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-primary py-16 lg:py-24 px-0 xs:px-10 2xl:px-20">
      <div className="max-w-full mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* First Div - Image */}
          <div className="flex justify-center ">
            <ArchImage
              src="/images/faqs.webp"
              alt="Lavender flowers in a vase"
              className="w-full max-w-35 md:max-w-sm xl:max-w-md  2xl:max-w-lg"
            />
          </div>

          {/* Second Div - Content */}
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="w-full max-w-4xl space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-12 text-left">
                FAQs
              </h2>

              <div className="space-y-0 border-t border-foreground">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-foreground">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-6 flex items-center gap-4 text-left"
                    >
                      {openIndex === index ? (
                        <MinusIcon className="w-7.5 h-7.5 text-icon shrink-0" />
                      ) : (
                        <PlusIcon className="w-7.5 h-7.5 text-icon shrink-0" />
                      )}
                      <span className="text-2xl xs:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-medium text-foreground">
                        {faq.question}
                      </span>
                    </button>
                    
                    {openIndex === index && (
                      <div className="pb-6  text-base lg:text-xl text-foreground">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}