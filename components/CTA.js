import Button from './Button'
import AnimatedDiv from './AnimatedDiv' // Adjust the import path as needed

export default function CTA() {
  return (
    <section className="bg-cta py-20 lg:py-27 px-5 sm:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedDiv
          direction="up"
          delay={0.2}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <h2 className="text-4xl lg:text-5xl  font-medium text-primary mb-8">
            Get started today.
          </h2>
        </AnimatedDiv>
        
        <AnimatedDiv
          direction="up"
          delay={0.3}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <p className="text-base lg:text-lg xl:text-xl text-primary leading-relaxed mb-20 max-w-3xl mx-auto mt-4">
            Ready to take the first step towards a happier, healthier you?<br />
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
        </AnimatedDiv>

        <AnimatedDiv
          direction="up"
          delay={0.4}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <Button 
            href="#contact"
            variant="outline-primary"
          >
            GET IN TOUCH 
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  )
}