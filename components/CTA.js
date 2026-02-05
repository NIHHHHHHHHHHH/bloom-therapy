import Button from './Button'

export default function CTA() {
  return (
    <section className="bg-cta py-20 lg:py-27 px-5 sm:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl  font-medium text-primary mb-8">
          Get started today.
        </h2>
        
        <p className="text-base lg:text-lg xl:text-xl text-primary leading-relaxed mb-20 max-w-3xl mx-auto mt-4">
          Ready to take the first step towards a happier, healthier you?<br />
          Contact me to book your first session. I look forward to starting this therapeutic journey with you.
        </p>

        <Button 
          href="#contact"
          variant="outline-primary"
        >
          GET IN TOUCH 
        </Button>
      </div>
    </section>
  )
}