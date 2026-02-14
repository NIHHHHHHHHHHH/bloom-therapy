import AnimatedDiv from '@/components/Resuable/AnimatedDiv'

export default function ContactMap() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-6xl mx-auto">
        
        <AnimatedDiv className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Find My Office
            </h2>
            <p className="text-base lg:text-lg text-foreground">
              Conveniently located in Santa Monica with street parking and nearby lots available
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-96 lg:h-500px rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7506234340956!2d-118.4967!3d34.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzU1LjQiTiAxMTjCsDI5JzQ4LjEiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Maya Reynolds Office Location"
            />
          </div>

          {/* Directions Info */}
          <div className="bg-primary p-6 lg:p-8 rounded-lg">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Getting Here
            </h3>
            <div className="space-y-3 text-base text-foreground">
              <p>
                <strong>By Car:</strong> Street parking is available on 45th Street. There are also several paid parking lots within a short walk.
              </p>
              <p>
                <strong>By Public Transit:</strong> The office is accessible via Metro Expo Line (26th Street/Bergamot station) and several bus lines.
              </p>
              <p>
                <strong>Accessibility:</strong> The building is wheelchair accessible with an elevator available.
              </p>
            </div>
          </div>

        </AnimatedDiv>

      </div>
    </section>
  )
}