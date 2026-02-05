import Image from 'next/image';
import AnimatedDiv from './AnimatedDiv'; 

const MySpecialties = () => {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/images/self-esteem.webp",
      imageAlt: "Person standing in a minimalist room with coffee"
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/images/relationships.webp",
      imageAlt: "Person sitting outdoors in a relaxed pose"
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/images/burnout.webp",
      imageAlt: "Person sitting at desk in contemplative pose"
    }
  ];

  return (
    <section className="bg-primary py-17 lg:py-23 2xl:py-28 px-6 md:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-full mx-auto">
        {/* Section Title */}
        <AnimatedDiv
          direction="up"
          delay={0.2}
          triggerOnce={false}
          scrollDuration={0.6}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-center mb-12 md:mb-16">
            My Specialties
          </h2>
        </AnimatedDiv>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <AnimatedDiv
              key={index}
              direction="up"
              delay={0.1 * index}
              triggerOnce={false}
              scrollDuration={0.4}
              className="border border-foreground bg-secondary p-8 md:p-5 flex flex-col items-start"
            >
              {/* Title */}
              <AnimatedDiv
                direction="up"
                delay={0.2 + (0.1 * index)}
                triggerOnce={false}
                scrollDuration={0.4}
              >
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {specialty.title}
                </h3>
              </AnimatedDiv>

              {/* Description */}
              <AnimatedDiv
                direction="up"
                delay={0.3 + (0.1 * index)}
                triggerOnce={false}
                scrollDuration={0.4}
                className="grow"
              >
                <p className="text-foreground font-medium text-sm my-4 2xl:my-10">
                  {specialty.description}
                </p>
              </AnimatedDiv>

              {/* Circular Image */}
              <AnimatedDiv
                direction="up"
                delay={0.4 + (0.1 * index)}
                triggerOnce={false}
                scrollDuration={0.4}
                className="w-full aspect-square rounded-full overflow-hidden mx-auto max-w-xs sm:max-w-57 lg:max-w-3xs 2xl:max-w-sm mt-8 2xl:mt-11 relative"
              >
                <Image
                  src={specialty.image}
                  alt={specialty.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </AnimatedDiv>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySpecialties;