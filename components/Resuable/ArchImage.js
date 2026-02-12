import Image from 'next/image'

export default function ArchImage({ 
  src, 
  alt, 
  overlayImage = null,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw"
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Main arch image */}
      <div 
        className="relative overflow-hidden w-full aspect-7/10"
        style={{
          borderRadius: '350px 350px 0 0',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Optional circular overlay image (bottom right) */}
       {overlayImage && (
          <div 
               className="absolute -bottom-[5vw] -right-[8vw] w-[20vw] h-[20vw] min-w-10 min-h-10 max-w-90 max-h-90 rounded-full overflow-hidden shadow-lg"
             >
               <Image
                 src={overlayImage.src}
                 alt={overlayImage.alt}
                 fill
                 sizes="20vw"
                 className="object-cover"
                 quality={90}
             />
          </div>
        )}
    </div>
  )
}