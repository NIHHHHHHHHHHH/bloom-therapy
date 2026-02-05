import Button from './Button'
import AnimatedDiv from './AnimatedDiv' 

export default function WorkWithMe() {
  const challenges = [
    "Persistent feelings of sadness or hopelessness",
    "Trouble focusing or making decisions",
    "Difficulty maintaining relationships",
    "Feeling constantly exhausted or unmotivated",
    "A pervasive sense of being overwhelmed"
  ]

  return (
    <section className="w-full md:h-screen bg-accent">
      <div className="grid md:grid-cols-2 md:h-full">
        {/* Left Side - Image */}
        <AnimatedDiv
          direction="up"
          delay={0.3}
          triggerOnce={false}
          scrollDuration={0.4}
          className="relative h-70 md:h-full"
        >
          <img
            src="/images/work-with-me.webp"
            alt="Therapy session"
            className="w-full h-full object-cover"
          />
        </AnimatedDiv>

        {/* Right Side - Content */}
        <div className="flex flex-col md:h-full">
          <div className="flex-1 flex flex-col justify-center max-w-3xl px-2 sm:px-12 py-12 md:mx-10 lg:mx-12 xl:mx-16 2xl:mx-20 md:py-0">
            <AnimatedDiv
              direction="up"
              delay={0.3}
              triggerOnce={false}
              scrollDuration={0.4}
            >
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-medium text-foreground mb-8">
                You don't have to do this all alone.
              </h2>
            </AnimatedDiv>

            <AnimatedDiv
              direction="up"
              delay={0.3}
              triggerOnce={false}
              scrollDuration={0.4}
            >
              <p className="tex-base sm:text-lg xl:text-xl text-foreground mb-5 sm:mb-15 md:mb-7 xl:mb-10">
                If you are facing any of these, there's hope:
              </p>
            </AnimatedDiv>

            <AnimatedDiv
              direction="up"
              delay={0.4}
              triggerOnce={false}
              scrollDuration={0.4}
            >
              <ul className="list-disc list-inside space-y-3 mx-2 sm:mx-5 xl:mx-6 mb-7 xl:mb-10 tex-base sm:text-lg xl:text-xl text-foreground">
                {challenges.map((challenge, index) => (
                  <AnimatedDiv
                    key={index}
                    direction="up"
                    delay={0.5 + (0.1 * index)}
                    triggerOnce={false}
                    scrollDuration={0.5}
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
              delay={0.7}
              triggerOnce={false}
              scrollDuration={0.5}
            >
              <p className="tex-base sm:text-lg xl:text-xl text-foreground leading-relaxed">
                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
              </p>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            direction="up"
            delay={0.8}
            triggerOnce={false}
            scrollDuration={0.4}
          >
            <Button href="#contact" className='h-12 lg:h-20' fullWidth>
              WORK WITH ME
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
}