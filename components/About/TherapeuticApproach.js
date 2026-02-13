import AnimatedDiv from '@/components/Resuable/AnimatedDiv'

export default function TherapeuticApproach() {
  const approaches = [
    {
      title: "Cognitive-Behavioral Therapy (CBT)",
      description: "Understanding patterns of thinking and behavior, and developing practical tools to manage anxiety and stress."
    },
    {
      title: "EMDR (Eye Movement Desensitization and Reprocessing)",
      description: "A structured approach for processing trauma and distressing memories at a pace that feels safe."
    },
    {
      title: "Mindfulness-Based Practices",
      description: "Developing present-moment awareness and self-compassion to reduce reactivity and increase emotional regulation."
    },
    {
      title: "Body-Oriented Techniques",
      description: "Recognizing and working with the physical manifestations of anxiety and trauma stored in the body."
    }
  ]

  return (
    <section className="bg-primary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        <AnimatedDiv className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-6">
            My Therapeutic Approach
          </h2>
          <p className="text-lg lg:text-xl text-foreground max-w-3xl mx-auto">
            I integrate multiple evidence-based methods to create a personalized approach for each client.
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <AnimatedDiv 
              key={index}
              delay={index * 0.1}
              className="bg-secondary p-8 rounded-lg"
            >
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                {approach.title}
              </h3>
              <p className="text-base lg:text-lg text-foreground leading-relaxed">
                {approach.description}
              </p>
            </AnimatedDiv>
          ))}
        </div>

      </div>
    </section>
  )
}