'use client'

import AnimatedDiv from './AnimatedDiv'
import Button from './Button'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh] lg:h-[73vh] xl:h-[85vh]">
        {/* Left Content Column */}
        <div className="flex flex-col order-2 md:order-1">
          {/* Text Content */}
          <AnimatedDiv 
            className="flex-1 px-6 py-0 md:py-12 sm:px-12 md:px-10 xl:px-18 flex items-start md:items-center pt-10 md:pt-0"
            triggerOnce={true}
            direction="up"
            duration={0.8}
            delay={0.2}
          >
            <div className="max-w-4xl w-full">
              <AnimatedDiv
                triggerOnce={true}
                direction="up"
                duration={0.8}
                delay={0.4}
                distance={30}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-foreground mb-8">
                  You're not alone in this.
                </h1>
              </AnimatedDiv>
              
              <AnimatedDiv 
                className="space-y-4 text-foreground font-regular"
                triggerOnce={true}
                direction="up"
                duration={0.8}
                delay={0.6}
                distance={30}
              >
                <p className="text-xl">
                  High-achieving, thoughtful adults often feel functional on the outside—while quietly struggling with anxiety, stress, or the weight of past experiences.
                </p>
                
                <p className="text-xl">
                 Therapy can help you move from surviving to actually living—with more ease, clarity, and connection to yourself.
                </p>
              </AnimatedDiv>
            </div>
          </AnimatedDiv>

          {/* Button at bottom */}
          <AnimatedDiv 
            className="w-full pt-10 xs:pt-40 md:pt-0"
            triggerOnce={false}
            direction="up"
            duration={0.4}
            delay={0.8}
            distance={30}
          >
            <Button href="#contact" className="h-15 xl:h-20" fullWidth>
              LEARN HOW THERAPY HELPS 
            </Button>
          </AnimatedDiv>
        </div>

        {/* Right Image Column */}
        <AnimatedDiv 
          className="relative h-100 sm:h-72 md:h-auto order-1 lg:order-2"
          triggerOnce={false}
          direction="up"
          duration={0.4}
        >
          <Image
            src="/images/hero-banner.webp"
            alt="Relaxing lifestyle scene with coffee, flowers, and straw hat"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedDiv>
      </div>
    </section>
  )
}