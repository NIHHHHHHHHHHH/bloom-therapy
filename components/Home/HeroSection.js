'use client'

import AnimatedDiv from '../Resuable/AnimatedDiv'
import ArchImage from '../Resuable/ArchImage'
import Button from '../Resuable/Button'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-primary flex items-center py-0 xl:pt-14 px-6 xl:px-14 2xl:px-24 mt-8 md:mt-14 lg:mt-10 xl:mt-20">
      <div className="max-w-full mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-[40%_60%] items-center">
          
          {/* Image Side */}
          <AnimatedDiv 
            className="flex justify-center lg:justify-start items-start order-1 md:order-1 w-full"
            triggerOnce={true}
            direction="up"
            duration={0.8}
            delay={0.6}
          >
            <ArchImage
              src="/images/herosec-img.webp"
              alt="Person holding beautiful lilac flowers"
              className="w-full max-w-44 md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
              sizes="(max-width: 768px) 176px, (max-width: 1024px) 448px, (max-width: 1280px) 576px, (max-width: 1536px) 672px, 768px"
            />
          </AnimatedDiv>

          {/* Content Side */}
          <AnimatedDiv 
            className="flex flex-col justify-center items-center order-2 md:order-2 text-center md:text-left space-y-8 lg:space-y-10 max-w-6xl mb-20 2xl:mb-32"
            triggerOnce={false}
            direction="up"
            duration={0.4}
            delay={0.2}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl font-medium text-foreground">
              Heal your mind<br />
              and find peace
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-xl text-foreground font-medium">
              Anxiety & trauma therapy in Santa Monica, CA
            </p>

            <div className="pt-2">
              <Button href="/contact">
                SCHEDULE A CONSULTATION
              </Button>
            </div>
          </AnimatedDiv>

        </div>
      </div>
    </section>
  )
}