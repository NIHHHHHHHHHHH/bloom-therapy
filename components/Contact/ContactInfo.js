import AnimatedDiv from '@/components/Resuable/AnimatedDiv'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "(310) 555-7890",
      link: "tel:3105557890"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "contact@mayareynolds.com",
      link: "mailto:contact@mayareynolds.com"
    },
    {
      icon: MapPinIcon,
      title: "Office Address",
      content: "123th Street 45 W\nSanta Monica, CA 90401"
    },
    {
      icon: ClockIcon,
      title: "Office Hours",
      content: "Monday – Friday\n9:00 AM – 6:00 PM"
    }
  ]

  return (
    <section className="bg-primary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-6xl mx-auto">
        
        <AnimatedDiv className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
            Contact Information
          </h2>
          <p className="text-base lg:text-lg text-foreground">
            Prefer to reach out directly? Here's how to get in touch.
          </p>
        </AnimatedDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <AnimatedDiv 
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <detail.icon className="w-10 h-10 text-icon" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {detail.title}
              </h3>
              {detail.link ? (
                <a 
                  href={detail.link}
                  className="text-base text-foreground hover:text-icon transition-colors whitespace-pre-line"
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-base text-foreground whitespace-pre-line">
                  {detail.content}
                </p>
              )}
            </AnimatedDiv>
          ))}
        </div>

      </div>
    </section>
  )
}