import Button from '../Resuable/Button'
import AnimatedDiv from '../Resuable/AnimatedDiv' 

export default function WorkWithMe() {
  const challenges = [
    "Constant worry or tension in their body",
    "Difficulty sleeping or always bracing for something to go wrong",
    "Stuck in overthinking or racing thoughts",
    "Exhausted from years of pushing through stress",
    "Disconnected from themselves despite outward success"
  ]

  return (
    <section className="w-full lg:h-screen bg-accent">
      <div className="grid lg:grid-cols-2 lg:h-full">
        {/* Left Side - Image */}
        <AnimatedDiv
          direction="up"
          delay={0.1}
          duration={0.5}
          triggerOnce={false}
          className="relative h-100 sm:h-125 lg:h-full"
        >
          <img
            src="/images/start-therapy.webp"
            alt="Therapy session"
            className="w-full h-full object-cover"
          />
        </AnimatedDiv>

        {/* Right Side - Content */}
        <div className="flex flex-col lg:h-full">
          <div className="flex-1 flex flex-col justify-center max-w-3xl px-6 sm:px-12 py-12 lg:mx-10 xl:mx-12 2xl:mx-16 lg:py-0">
            <AnimatedDiv
              direction="up"
              delay={0.2}
              duration={0.5}
              triggerOnce={false}
            >
              <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-foreground mb-6 lg:mb-8">
                You're functional on the outside, but struggling on the inside.
              </h2>
            </AnimatedDiv>

            <AnimatedDiv
              direction="up"
              delay={0.3}
              duration={0.5}
              triggerOnce={false}
            >
              <p className="text-base sm:text-lg xl:text-xl text-foreground mb-6 lg:mb-7 xl:mb-10">
                Many of my clients come to therapy feeling:
              </p>
            </AnimatedDiv>

            <AnimatedDiv
              direction="up"
              delay={0.4}
              duration={0.5}
              triggerOnce={false}
            >
              <ul className="list-disc list-inside space-y-3 mx-4 sm:mx-5 xl:mx-6 mb-6 lg:mb-7 xl:mb-10 text-base sm:text-lg xl:text-xl text-foreground">
                {challenges.map((challenge, index) => (
                  <AnimatedDiv
                    key={index}
                    direction="up"
                    delay={0.5 + (0.05 * index)}
                    duration={0.5}
                    triggerOnce={false}
                  >
                    <li>
                      {challenge}
                    </li>
                  </AnimatedDiv>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv
              direction="up"
              delay={0.75}
              duration={0.5}
              triggerOnce={false}
            >
              <p className="text-base sm:text-lg xl:text-xl text-foreground leading-relaxed mb-6 lg:mb-0">
                Therapy is a space to slow down, reconnect, and build resilience—not just symptom relief, but lasting change.
              </p>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            direction="up"
            delay={0.85}
            duration={0.5}
            triggerOnce={false}
          >
            <Button href="/contact" className='h-12 lg:h-20' fullWidth>
              START THERAPY
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
}