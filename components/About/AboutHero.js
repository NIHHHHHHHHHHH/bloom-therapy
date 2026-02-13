
'use client'

import AnimatedDiv from '@/components/Resuable/AnimatedDiv'
import ArchImage from '@/components/Resuable/ArchImage'

export default function AboutHero() {
  return (
    <section className="bg-primary pt-32 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-full mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <AnimatedDiv 
            direction="left" 
            className="flex justify-center lg:justify-start order-1 md:order-1 w-full"
            triggerOnce={true}
            duration={0.8}
            delay={0.6}
          >
            <ArchImage
              src="/images/Dr-Maya-Reynolds.webp"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              className="w-full max-w-44 md:max-w-md lg:max-w-xl"
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 448px, 512px"
              priority
            />
          </AnimatedDiv>

          {/* Right - Content */}
          <AnimatedDiv 
            direction="right" 
            className="flex flex-col justify-center space-y-2 xs:space-y-4 md:space-y-6 order-2 md:order-2 text-center md:text-left"
            triggerOnce={false}
            duration={0.4}
            delay={0.2}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb:0 md:mb-12">
              Dr. Maya Reynolds
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground font-medium">
              Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy
            </p>

            <p className="text-base lg:text-lg xl:text-xl text-foreground ">
              Based in Santa Monica, California, I work with high-achieving adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My approach is warm, collaborative, and grounded in evidence-based methods.
            </p>
          </AnimatedDiv>

        </div>
      </div>
    </section>
  )
}