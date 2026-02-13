import AnimatedDiv from '@/components/Resuable/AnimatedDiv'

export default function ContactHero() {
  return (
    <section className="bg-primary pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-4xl mx-auto text-center">
        
        <AnimatedDiv className="space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground">
            Get in Touch
          </h1>
          
          <p className="text-xl lg:text-2xl text-foreground font-serif italic">
            Taking the first step is often the hardest part
          </p>

          <p className="text-base lg:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you're ready to schedule a consultation or have questions about therapy, I'm here to help. Fill out the form below or reach out directly using the contact information provided.
          </p>
        </AnimatedDiv>

      </div>
    </section>
  )
}