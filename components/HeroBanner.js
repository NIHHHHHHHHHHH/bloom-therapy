// components/HeroBanner.jsx
import Button from './Button';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full  bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto  md:h-[60vh] lg:h-[73vh] xl:h-[85vh]">
        {/* Left Content Column */}
        <div className="flex flex-col order-2 md:order-1">
          {/* Text Content */}
          <div className="flex-1 px-6 py-0 md:py-12 sm:px-12 md:px-10 xl:px-18 flex items-start md:items-center pt-10 md:pt-0">
            <div className="max-w-4xl w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl  font-medium text-foreground mb-8">
                Live a fulfilling life.
              </h1>
              
              <div className="space-y-4 text-foreground font-regular">
                <p className="text-xl">
                  Life can be challenging—especially when you're trying to balance your personal and professional life.
                </p>
                
                <p className="text-xl">
                  It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                </p>
              </div>
            </div>
          </div>

          {/* Button at bottom with no padding/margin */}
          <div className="w-full pt-10 xs:pt-40 md:pt-0">
            <Button href="#contact" className="h-15 xl:h-20" fullWidth>
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative h-100 sm:h-72 md:h-auto order-1 lg:order-2">
          <Image
            src="/images/hero-banner.webp"
            alt="Relaxing lifestyle scene with coffee, flowers, and straw hat"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}