export default function Footer() {
  return (
    <footer className="bg-primary border-t border-foreground/10">
      {/* Top Section - Contact Info */}
      <div className="bg-primary py-12 lg:py-14 ">
        <div className="max-w-2xl xl:max-w-6xl 2xl:max-w-full mx-auto 2xl:mx-20 ">
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr] gap-12 lg:gap-8">
            
            {/* Column 1 - Name & Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground mb-8">
                Lilac Template
              </h3>
              <div className="space-y-3">
                <p className="text-base lg:text-xl text-foreground">
                  123 Example Road<br />
                  Minneapolis, MN
                </p>
                <p className="text-base lg:text-xl">
                  <a 
                    href="mailto:email@example.com" 
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                    email@example.com
                  </a>
                </p>
                <p className="text-base lg:text-xl">
                  <a 
                    href="tel:5555555555" 
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                    (555) 555-5555
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2 - Hours */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl xl:text-4xl font-medium text-foreground mb-6">
                Hours
              </h3>
              <p className="text-base lg:text-xl text-foreground">
                Monday – Friday<br />
                10am – 6pm
              </p>
            </div>

            {/* Column 3 - Find */}
            <div className="text-center md:text-right">
              <h3 className="text-3xl xl:text-4xl font-medium text-foreground mb-6">
                Find
              </h3>
              <nav className="space-y-3">
                <a 
                  href="#" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  Contact
                </a>
                <a 
                  href="#" 
                  className="block text-base lg:text-xl text-foreground underline hover:opacity-70 transition-opacity"
                >
                  Blog
                </a>
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section - Legal Links & Credits */}
      <div className="bg-secondary py-2 lg:py-4 ">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Legal Links */}
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

          {/* Credits */}
          <p className="text-base text-foreground  text-center m-6 xs:mb-16">
            Website Template Credits:{' '}
            <a 
              href="#" 
              className="underline hover:opacity-70 transition-opacity font-medium"
            >
              Go Bloom Creative
            </a>
          </p>

          {/* Copyright */}
          <p className="text-base text-foreground text-center">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>

        </div>
      </div>
    </footer>
  )
}