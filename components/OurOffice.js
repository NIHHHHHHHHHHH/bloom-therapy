export default function OurOffice() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-6">
            A Space Designed for Healing
          </h2>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding—with natural light, comfortable seating, and an uncluttered environment where you can feel at ease.
          </p>
        </div>

        {/* Image Grid - 2 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
          {/* Image 1 */}
          <div className="relative aspect-4/5 overflow-hidden rounded-lg">
            <img
              src="/images/office1.webp"
              alt="Santa Monica therapy office - comfortable seating area"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative aspect-4/5 overflow-hidden rounded-lg">
            <img
              src="/images/office2.webp"
              alt="Therapy room with natural light in Santa Monica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Left Column - Location */}
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

          {/* Right Column - Session Options */}
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

        </div>

      </div>
    </section>
  )
}