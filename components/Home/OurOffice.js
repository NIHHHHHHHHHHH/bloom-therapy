import AnimatedDiv from '../Resuable/AnimatedDiv'

export default function OurOffice() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <AnimatedDiv 
            direction="up" 
            delay={0.1} 
            duration={0.5}
            triggerOnce={false}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-6">
              A Space Designed for Healing
            </h2>
          </AnimatedDiv>
          
          <AnimatedDiv 
            direction="up" 
            delay={0.2} 
            duration={0.5}
            triggerOnce={false}
          >
            <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              My Santa Monica office is a quiet, private space designed to feel calm and grounding—with natural light, comfortable seating, and an uncluttered environment where you can feel at ease.
            </p>
          </AnimatedDiv>
        </div>

        {/* Image Grid - 2 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mb-12 max-w-5xl mx-auto">
          {/* Image 1 */}
          <AnimatedDiv 
            direction="up" 
            delay={0.3} 
            duration={0.5}
            triggerOnce={false}
          >
            <div className="relative aspect-4/3 md:aspect-4/5 overflow-hidden rounded-lg">
              <img
                src="/images/office1.webp"
                alt="Santa Monica therapy office - comfortable seating area"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedDiv>

          {/* Image 2 */}
          <AnimatedDiv 
            direction="up" 
            delay={0.4} 
            duration={0.5}
            triggerOnce={false}
          >
            <div className="relative aspect-4/3 md:aspect-4/5 overflow-hidden rounded-lg">
              <img
                src="/images/office2.webp"
                alt="Therapy room with natural light in Santa Monica"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedDiv>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Left Column - Location */}
          <AnimatedDiv 
            direction="up" 
            delay={0.5} 
            duration={0.5}
            triggerOnce={false}
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                Conveniently Located
              </h3>
              <p className="text-base lg:text-lg text-muted leading-relaxed">
                My office is located in Santa Monica, California, easily accessible for clients throughout the Los Angeles area. Street parking and nearby lots are available.
              </p>
              <p className="text-base lg:text-lg text-muted mt-4">
                <span className="font-medium text-foreground">Address:</span><br />
                123th Street 45 W<br />
                Santa Monica, CA 90401
              </p>
            </div>
          </AnimatedDiv>

          {/* Right Column - Session Options */}
          <AnimatedDiv 
            direction="up" 
            delay={0.6} 
            duration={0.5}
            triggerOnce={false}
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                In-Person & Telehealth
              </h3>
              <p className="text-base lg:text-lg text-muted leading-relaxed">
                I offer both in-person sessions from my Santa Monica office and secure telehealth appointments for clients throughout California. The space is designed to help you feel comfortable and grounded from the moment you arrive.
              </p>
              <p className="text-base lg:text-lg text-muted mt-4">
                <span className="font-medium text-foreground">What to Expect:</span> Privacy, comfort, and a judgment-free environment where healing can begin.
              </p>
            </div>
          </AnimatedDiv>

        </div>

      </div>
    </section>
  )
}