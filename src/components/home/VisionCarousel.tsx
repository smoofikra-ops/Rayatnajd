import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { CloudinaryImage } from '../cloudinary/CloudinaryImage'

export default function VisionCarousel({ pillars }: { pillars: any[] }) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    direction: 'rtl',
    dragFree: true,
    align: 'center'
  }, [
    AutoScroll({ 
      playOnInit: !prefersReducedMotion, 
      speed: 0.8, // positive speed in RTL moves from right to left
      stopOnInteraction: false, 
      stopOnMouseEnter: true 
    })
  ])

  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!emblaApi) return

    const updateTransforms = () => {
      const container = emblaApi.containerNode()
      if (!container) return
      
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      const slides = emblaApi.slideNodes()
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect()
        const slideCenter = rect.left + rect.width / 2
        
        const distance = Math.abs(containerCenter - slideCenter)
        // Fade out completely before hitting the edge
        const maxDist = containerRect.width / 2
        const progress = Math.max(0, 1 - distance / maxDist)
        
        const easeProgress = Math.pow(progress, 2)
        
        // Scale: 0.82 at edges to 1.15 at center
        const scale = 0.82 + (easeProgress * 0.33)
        
        // Opacity: 0 at edges to 1 at center
        const opacity = Math.min(1, progress * 2.5) 
        
        // Blur: 4px at edges to 0 at center
        const blur = Math.max(0, (1 - progress) * 4)
        
        const inner = slide.querySelector('.embla-card-inner') as HTMLElement
        if (inner) {
          inner.style.transform = `scale(${scale})`
          inner.style.opacity = `${opacity}`
          inner.style.filter = `blur(${blur}px)`
          
          if (progress > 0.6) {
            const intensity = Math.min(1, (progress - 0.6) * 2.5)
            // Green glow shadow + deep shadow
            inner.style.boxShadow = `0 20px 40px -10px rgba(0,0,0,${intensity * 0.6}), 0 0 40px rgba(16, 185, 129, ${intensity * 0.25})`
          } else {
            inner.style.boxShadow = 'none'
          }
        }
        slide.style.zIndex = `${Math.round(easeProgress * 100)}`
      })

      rafRef.current = requestAnimationFrame(updateTransforms)
    }

    rafRef.current = requestAnimationFrame(updateTransforms)

    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [emblaApi])

  // Duplicate multiple times to ensure enough slides for infinite looping without gaps
  const loopPillars = [...pillars, ...pillars, ...pillars, ...pillars]

  return (
    <div className="w-full overflow-hidden relative py-20" ref={emblaRef} dir="rtl">
      {/* Edge Gradients for smooth fade in/out masking */}
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg-primary to-transparent z-40 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg-primary to-transparent z-40 pointer-events-none"></div>

      <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
        {loopPillars.map((pillar, index) => (
          <div 
            key={index} 
            className="flex-none w-[280px] sm:w-[320px] md:w-[360px] mx-3 md:mx-5 will-change-transform"
          >
            <div 
              className={`embla-card-inner premium-card p-5 md:p-8 rounded-3xl border border-accent-gold/10 hover:border-accent-gold/40 transition-colors group relative overflow-hidden bg-bg-secondary/50 h-full flex flex-col`}
              style={{ transformOrigin: 'center center', willChange: 'transform, opacity, filter' }}
            >
              {pillar.bgImage ? (
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <CloudinaryImage src={pillar.bgImage} alt={pillar.title as string} width={400} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-accent-gold/5 rounded-bl-full -z-10 group-hover:bg-accent-gold/10 transition-colors"></div>
              )}
              
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-bg-primary rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-inner border border-text-main/5">
                <div className="scale-75 md:scale-100">{pillar.icon}</div>
              </div>
              
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-text-main mb-2 md:mb-3">{pillar.title}</h3>
              <p className="relative z-10 text-text-muted text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
