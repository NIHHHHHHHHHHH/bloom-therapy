'use client'

import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

export default function Accordion({ 
  items, 
  defaultOpenIndex = null,
  variant = 'default' // 'default' or 'faq'
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Variant-specific classes
  const variants = {
    default: {
      container: "space-y-0 border-t border-foreground",
      item: "border-b border-foreground",
      button: "w-full py-4 flex items-center justify-between text-left",
      icon: "w-6 h-6 lg:w-7 lg:h-7 text-foreground shrink-0",
      question: "text-lg sm:text-xl lg:text-2xl text-foreground ",
      answer: "pb-6 px-6 lg:px-12 text-base xl:text-lg text-foreground flex justify-center"
    },
    faq: {
      container: "space-y-0 border-t border-foreground",
      item: "border-b border-foreground",
      button: "w-full py-6 flex items-center gap-4 text-left",
      icon: "w-7.5 h-7.5 text-icon shrink-0",
      question: "text-2xl xs:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-medium text-foreground",
      answer: "pb-6 pl-11.5 text-base lg:text-xl text-foreground"
    }
  }

  const classes = variants[variant]

  return (
    <div className={classes.container}>
      {items.map((item, index) => (
        <div key={index} className={classes.item}>
          <button
            onClick={() => toggleItem(index)}
            className={classes.button}
          >
            {variant === 'faq' ? (
              <>
                {openIndex === index ? (
                  <MinusIcon className={classes.icon} />
                ) : (
                  <PlusIcon className={classes.icon} />
                )}
                <span className={classes.question}>
                  {item.question}
                </span>
              </>
            ) : (
              <>
                <span className={classes.question}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <MinusIcon className={classes.icon} />
                ) : (
                  <PlusIcon className={classes.icon} />
                )}
              </>
            )}
          </button>
          
          {openIndex === index && (
            <div className={classes.answer}>
              {variant === 'default' ? (
                <div className="max-w-3xl text-left">
                  {item.answer}
                </div>
              ) : (
                item.answer
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}