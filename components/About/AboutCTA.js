import AnimatedDiv from '@/components/Resuable/AnimatedDiv'
import Button from '@/components/Resuable/Button'

export default function AboutCTA() {
  return (
    <section className="bg-cta py-20 lg:py-32 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-4xl mx-auto text-center">
        
        <AnimatedDiv className="space-y-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-primary">
            Ready to start therapy?
          </h2>
          
          <p className="text-base lg:text-lg xl:text-xl text-primary leading-relaxed max-w-3xl mx-auto">
            If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living in a fast-paced environment—let's talk.
          </p>

          <Button href="/contact" variant="outline-primary">
            Schedule a Consultation
          </Button>
        </AnimatedDiv>

      </div>
    </section>
  )
}