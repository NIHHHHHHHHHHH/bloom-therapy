import AnimatedDiv from '../Resuable/AnimatedDiv' 

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-foreground/10">
      {/* Top Section - Contact Info */}
      <div className="bg-primary py-12 lg:py-14 ">
        <div className="max-w-2xl xl:max-w-6xl 2xl:max-w-full mx-auto 2xl:mx-20 ">
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr] gap-12 lg:gap-8">
            
            {/* Column 1 - Name & Contact */}
            <AnimatedDiv
              direction="up"
              delay={0.1}
              triggerOnce={false}
              scrollDuration={0.6}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-8">
                Dr. Maya Reynolds
              </h3>
              <div className="space-y-3">
                <p className="text-base lg:text-xl text-foreground">
                  123th Street 45 W,<br />
                   Santa Monica, CA 90401
                </p>
                <p className="text-base lg:text-xl">
                  <a 
                    href="mailto:contact@mayareynolds.com" 
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                   contact@mayareynolds.com
                  </a>
                </p>
                <p className="text-base lg:text-xl">
                  <a 
                    href="tel:5555555555" 
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                    (310) 555-7890
                  </a>
                </p>
              </div>
            </AnimatedDiv>

            {/* Column 2 - Hours */}
            <AnimatedDiv
              direction="up"
              delay={0.2}
              triggerOnce={false}
              scrollDuration={0.6}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl xl:text-4xl font-medium text-foreground mb-6">
                Hours
              </h3>
              <p className="text-base lg:text-xl text-foreground">
                Monday – Friday<br />
                9am – 6pm
              </p>
            </AnimatedDiv>

            {/* Column 3 - Find */}
            <AnimatedDiv
              direction="up"
              delay={0.3}
              triggerOnce={false}
              scrollDuration={0.6}
              className="text-center md:text-right"
            >
              <h3 className="text-3xl xl:text-4xl font-medium text-foreground mb-6">
                Find
              </h3>
              <nav className="space-y-3">
                <a 
                  href="/" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
                <a 
                  href="/contact" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  Contact
                </a>
                <a 
                  href="/about" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  About
                </a>
              </nav>
            </AnimatedDiv>

          </div>
        </div>
      </div>

      {/* Bottom Section - Legal Links & Credits */}
      <div className="bg-secondary py-2 lg:py-4 ">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Legal Links */}
          <AnimatedDiv
            direction="up"
            delay={0.2}
            triggerOnce={false}
            scrollDuration={0.6}
          >
            <div className="flex flex-wrap justify-center gap-0  md:gap-6 text-base font-medium text-foreground mt-10">
              <a href="#" className="underline hover:opacity-70 transition-opacity">
                Privacy & Cookies Policy
              </a>
              <a href="#" className="underline hover:opacity-70 transition-opacity">
                Good Faith Estimate
              </a>
              <a href="#" className="underline hover:opacity-70 transition-opacity">
                Website Terms & Conditions
              </a>
              <a href="#" className="underline hover:opacity-70 transition-opacity">
                Disclaimer
              </a>
            </div>
          </AnimatedDiv>

          {/* Credits */}
          <AnimatedDiv
            direction="up"
            delay={0.3}
            triggerOnce={false}
            scrollDuration={0.6}
          >
            <p className="text-base text-foreground  text-center m-6 xs:mb-16">
              Website Template Credits:{' '}
              <a 
                href="#" 
                className="underline hover:opacity-70 transition-opacity font-medium"
              >
                Go Bloom Creative
              </a>
            </p>
          </AnimatedDiv>

          {/* Copyright */}
          <AnimatedDiv
            direction="up"
            delay={0.4}
            triggerOnce={false}
            scrollDuration={0.6}
          >
            <p className="text-base text-foreground text-center">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </p>
          </AnimatedDiv>

        </div>
      </div>
    </footer>
  )
}