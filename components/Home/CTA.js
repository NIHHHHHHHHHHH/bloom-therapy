import Button from '../Resuable/Button'
import AnimatedDiv from '../Resuable/AnimatedDiv' 

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
            Ready to feel more like yourself again?
          </h2>
        </AnimatedDiv>
        
        <AnimatedDiv
          direction="up"
          delay={0.3}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <p className="text-base lg:text-lg xl:text-xl text-primary leading-relaxed mb-20 max-w-3xl mx-auto mt-4">
            If you're tired of feeling stuck in anxiety, stress, or overthinking—and you're ready to do the deeper work—I'm here to help. Let's talk about whether therapy is the right fit for you.
          </p>
        </AnimatedDiv>

        <AnimatedDiv
          direction="up"
          delay={0.4}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <Button 
            href="/contact"
            variant="outline-primary"
          >
            SCHEDULE A FREE CONSULTATION  
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  )
}