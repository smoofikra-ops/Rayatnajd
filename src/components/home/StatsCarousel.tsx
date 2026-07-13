import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

export default function StatsCarousel({ stats }: { stats: any[] }) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    direction: 'rtl',
    dragFree: true,
    align: 'center'
  }, [
    AutoScroll({ 
      playOnInit: !prefersReducedMotion, 
      speed: -0.8, // Negative speed in RTL moves items from right to left
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
        // Adjust max distance to fade out completely before the edge
        const maxDist = containerRect.width / 2
        const progress = Math.max(0, 1 - distance / maxDist)
        
        const easeProgress = Math.pow(progress, 2)
        
        // Scale: 0.75 at edges to 1.15 at center
        const scale = 0.75 + (easeProgress * 0.40)
        
        // Opacity: 0 at edges to 1 at center
        const opacity = Math.min(1, progress * 2.5) 
        
        // Blur: 6px at edges to 0 at center
        const blur = Math.max(0, (1 - progress) * 6)
        
        const inner = slide.querySelector('.embla-card-inner') as HTMLElement
        if (inner) {
          inner.style.transform = `scale(${scale})`
          inner.style.opacity = `${opacity}`
          inner.style.filter = `blur(${blur}px)`
          
          if (progress > 0.6) {
            const intensity = Math.min(1, (progress - 0.6) * 2.5)
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

  const loopStats = [...stats, ...stats, ...stats, ...stats]

  return (
    <div className="w-full overflow-hidden relative py-16" ref={emblaRef} dir="rtl">
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-bg-primary to-transparent z-40 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-bg-primary to-transparent z-40 pointer-events-none"></div>

      <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
        {loopStats.map((stat, index) => (
          <div 
            key={index} 
            className="flex-none w-[220px] sm:w-[260px] md:w-[280px] mx-3 md:mx-5 will-change-transform"
          >
            <div 
              className={`embla-card-inner backdrop-blur-md p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center group border ${stat.color} ${stat.borderColor} h-full`}
              style={{ transformOrigin: 'center center', willChange: 'transform, opacity, filter' }}
            >
              <div className={`mb-3 md:mb-4 p-3 md:p-4 rounded-xl ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 drop-shadow-md">{stat.value}</h3>
              <p className="text-xs md:text-sm text-white/95 font-semibold text-center">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
