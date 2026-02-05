import ArchImage from './ArchImage'
import Button from './Button'

export default function AboutMe() {
  return (
    <section className="bg-secondary px-10 py-16 lg:py-28 pb-24 md:pb-32 lg:pb-48">
      <div className="max-w-full mx-auto w-full">
        <div className="grid lg:grid-cols-2  items-center">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center items-center space-y-8 order-2 lg:order-1">
            <div className=" space-y-8 max-w-3xl w-full px-4 lg:px-10">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-8">
                Hi, I'm Lilac.
              </h2>
              
              <p className="text-base lg:text-xl text-foreground font-normal">
                I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
              </p>
            </div>

            <div className="max-w-3xl w-full flex justify-center items-center mt-16 2xl:mt-32">
              <Button href="#contact">
                 Let's Chat
              </Button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-2 mb-10 lg:mb-0">
            <ArchImage
              src="/images/about-arch.webp"
              alt="Person holding lilac flowers"
              overlayImage={{
                src: "/images/about-circle.webp",
                alt: "White hydrangea flowers"
              }}
              className="w-full max-w-20 sm:max-w-3xs lg:max-w-xs xl:max-w-sm 2xl:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}