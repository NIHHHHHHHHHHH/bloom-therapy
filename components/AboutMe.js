import ArchImage from './ArchImage'
import Button from './Button'
import AnimatedDiv from './AnimatedDiv'

export default function AboutMe() {
  return (
    <section className="bg-secondary px-10 py-16 lg:py-28 pb-24 md:pb-32 lg:pb-48">
      <div className="max-w-full mx-auto w-full">
        <div className="grid lg:grid-cols-2  items-center">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center items-center space-y-8 order-2 lg:order-1">
            <div className=" space-y-8 max-w-3xl w-full px-4 lg:px-10">
              <AnimatedDiv
                direction="up"
                delay={0.2}
                triggerOnce={false}
                scrollDuration={0.6}
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-8">
                  Hi, I'm Dr. Maya Reynolds.
                </h2>
              </AnimatedDiv>
              
              <AnimatedDiv
                direction="up"
                delay={0.3}
                triggerOnce={false}
                scrollDuration={0.6}
              >
                <p className="text-base lg:text-xl text-foreground font-normal">
                 I'm a licensed clinical psychologist based in Santa Monica, California. I work with high-achieving adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My approach is warm, collaborative, and grounded—combining evidence-based methods like CBT, EMDR, and mindfulness to help you feel more regulated, connected, and resilient.
                </p>
              </AnimatedDiv>
            </div>

            <AnimatedDiv
              direction="up"
              delay={0.4}
              triggerOnce={false}
              scrollDuration={0.6}
              className="max-w-3xl w-full flex justify-center items-center mt-16 2xl:mt-32"
            >
              <Button href="#contact">
                 LEARN MORE ABOUT MY APPROACH
              </Button>
            </AnimatedDiv>
          </div>

          {/* Right Side - Images */}
          <AnimatedDiv
            direction="up"
            delay={0.1}
            triggerOnce={false}
            scrollDuration={0.8}
            className="flex justify-center lg:justify-center order-1 lg:order-2 mb-10 lg:mb-0"
          >
            <ArchImage
              src="/images/about-arch.webp"
              alt="Person holding lilac flowers"
              overlayImage={{
                src: "/images/about-circle.webp",
                alt: "White hydrangea flowers"
              }}
              className="w-full max-w-20 sm:max-w-3xs lg:max-w-xs xl:max-w-sm 2xl:max-w-lg"
            />
          </AnimatedDiv>

        </div>
      </div>
    </section>
  )
}