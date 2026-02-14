import AnimatedDiv from '@/components/Resuable/AnimatedDiv'

export default function WhyIBecameTherapist() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 xs:px-12 xl:px-14 2xl:px-16">
      <div className="max-w-full">
        
        <AnimatedDiv className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-8">
            Why I Became a Therapist
          </h2>

          <p className="text-base lg:text-lg text-foreground leading-relaxed">
            I've always been drawn to understanding what helps people move through difficult experiences and find their way back to themselves. Early in my career, I saw how anxiety and unprocessed trauma could quietly shape someone's entire life—their relationships, their confidence, their sense of safety in the world.
          </p>

          <p className="text-base lg:text-lg text-foreground leading-relaxed">
            What became clear to me is that many people are doing their best to manage on their own, often for years, before reaching out for support. They're high-functioning, capable, and outwardly successful—but internally, they're exhausted. I wanted to create a space where people could finally slow down, be honest about what they're carrying, and do the deeper work of healing.
          </p>

          <p className="text-base lg:text-lg text-foreground leading-relaxed">
            Therapy, at its best, isn't just about symptom relief—it's about helping people develop insight, resilience, and a stronger relationship with themselves. That's the work I'm committed to, and it's what drives my practice every day.
          </p>
        </AnimatedDiv>

      </div>
    </section>
  )
}