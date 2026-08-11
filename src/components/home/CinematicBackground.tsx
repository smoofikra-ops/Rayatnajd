import React, { useEffect, useState, useRef } from 'react';
import { getCinematicBackgroundUrl } from '../../utils/cloudinary';

export const cinematicBackgrounds: Record<string, { publicId: string; overlay: string; videoUrl?: string }> = {
  hero: {
    publicId: "WhatsApp_Image_2026-07-04_at_11.52.12_PM_kybu8a_r6r5td",
    overlay: "rgba(8, 34, 24, 0.50)",
    videoUrl: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/hero/Desktop/national%20center%20cover%20dron-9__7__2026%D8%8C%204_24%20%D8%B5.mp4"
  },
  about: {
    publicId: "about-farm_dhu5w5",
    overlay: "rgba(14, 45, 30, 0.44)"
  },
  services: {
    publicId: "services-afforestation_g3rzrf",
    overlay: "rgba(7, 38, 25, 0.52)"
  },
  palms: {
    publicId: "arabic_palm_lzuutu",
    overlay: "rgba(18, 46, 27, 0.48)"
  },
  "palm-projects": {
    publicId: "palms-project_bgivil",
    overlay: "rgba(10, 31, 24, 0.54)"
  },
  trees: {
    publicId: "trees-project_ttapby",
    overlay: "rgba(10, 31, 24, 0.54)"
  },
  projects: {
    publicId: "projects-landscape_eulurg",
    overlay: "rgba(10, 31, 24, 0.54)"
  },
  sustainability: {
    publicId: "sustainability-green_shcmju",
    overlay: "rgba(5, 42, 25, 0.50)"
  }
};

const GRADIENT_OVERLAY = `linear-gradient(180deg, rgba(4, 20, 14, 0.25) 0%, rgba(4, 20, 14, 0.50) 65%, rgba(4, 20, 14, 0.72) 100%)`;

export default function CinematicBackground() {
  const [activeKey, setActiveKey] = useState<string>('hero');
  const [prevKey, setPrevKey] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Setup intersection observer
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const options = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const key = entry.target.getAttribute('data-background-key');
          if (key && cinematicBackgrounds[key]) {
            setActiveKey(prev => {
              if (prev !== key) {
                setPrevKey(prev);
                setIsTransitioning(true);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, prefersReducedMotion ? 50 : (isMobile ? 700 : 1000));
                return key;
              }
              return prev;
            });
          }
        }
      });
    }, options);

    // Observe all elements with data-background-key
    const elements = document.querySelectorAll('[data-background-key]');
    elements.forEach(el => observerRef.current?.observe(el));

    // Prefetching logic could be added here, but the img decoding="async" does it fairly well naturally if we load them smartly.

    return () => {
      window.removeEventListener('resize', handleResize);
      observerRef.current?.disconnect();
    };
  }, [isMobile]); // Re-bind on mobile change to adjust timing if needed, but the ref holds the elements.
  // Actually, we should just run it once to bind to DOM.
  // We'll refactor the useeffect slightly if it causes re-bind issues.

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Re-observe if DOM changes? Usually Home is static after mount.
    const elements = document.querySelectorAll('[data-background-key]');
    elements.forEach(el => {
      if (observerRef.current) observerRef.current.observe(el);
    });
  }, []);

  const getImgUrl = (key: string) => {
    if (!key || !cinematicBackgrounds[key]) return '';
    const { publicId } = cinematicBackgrounds[key];
    
    if (isMobile) {
      return getCinematicBackgroundUrl(publicId, 768, 1024, 'eco');
    } else if (windowSize.width <= 1280) {
      return getCinematicBackgroundUrl(publicId, 1280, 900, 'good');
    } else {
      return getCinematicBackgroundUrl(publicId, 1920, 1080, 'good');
    }
  };

  const activeBg = cinematicBackgrounds[activeKey];
  const prevBg = cinematicBackgrounds[prevKey];
  
  const activeUrl = getImgUrl(activeKey);
  const prevUrl = getImgUrl(prevKey);

  const transitionDuration = isMobile ? '700ms' : '1000ms';
  const transitionEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div 
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none bg-bg-primary"
      aria-hidden="true"
    >
      {/* Previous Image Layer (fades out) */}
      {prevKey && (
        prevBg?.videoUrl ? (
        <video
          key={`prev-video-${prevKey}`}
          src={prevBg.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          poster={prevUrl}
          className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity`}
          style={{
            opacity: isTransitioning ? 0 : 0,
            transition: `opacity ${transitionDuration} ${transitionEasing}, filter ${transitionDuration} ${transitionEasing}`,
            filter: isTransitioning ? 'blur(0px)' : 'blur(0px)'
          }}
        />
      ) : prevUrl && (
        <img
          key={`prev-${prevKey}`}
          src={prevUrl}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity animate-ken-burns`}
          style={{
            opacity: isTransitioning ? 0 : 0,
            transition: `opacity ${transitionDuration} ${transitionEasing}, filter ${transitionDuration} ${transitionEasing}`,
            filter: isTransitioning ? 'blur(0px)' : 'blur(0px)'
          }}
          decoding="async"
        />
      ))}

      {/* Active Image Layer (fades in) */}
      {activeBg?.videoUrl ? (
        <video
          key={`active-video-${activeKey}`}
          src={activeBg.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={activeUrl}
          disablePictureInPicture
          ref={(el) => {
            if (el) {
              el.defaultMuted = true;
              el.muted = true;
              el.play().catch((e) => console.log("Video autoplay blocked:", e));
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity`}
          style={{
            opacity: isTransitioning ? 0 : 1,
            transition: `opacity ${transitionDuration} ${transitionEasing}, filter ${transitionDuration} ${transitionEasing}`,
            filter: isTransitioning ? 'blur(4px)' : 'blur(0px)'
          }}
        />
      ) : activeUrl && (
        <img
          key={`active-${activeKey}`}
          src={activeUrl}
          alt=""
          fetchPriority={activeKey === 'hero' ? 'high' : 'low'}
          className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity animate-ken-burns`}
          style={{
            opacity: isTransitioning ? 0 : 1,
            
            transition: `opacity ${transitionDuration} ${transitionEasing}, filter ${transitionDuration} ${transitionEasing}`,
            filter: isTransitioning ? 'blur(4px)' : 'blur(0px)'
          }}
          decoding="async"
        />
      )}

      {/* Overlay - Solid Color (transitions opacity/color) */}
      <div 
        className="absolute inset-0 w-full h-full transition-colors"
        style={{
          backgroundColor: activeBg ? activeBg.overlay : 'rgba(8, 34, 24, 0.50)',
          transitionDuration,
          transitionTimingFunction: transitionEasing
        }}
      />

      {/* Overlay - Gradient */}
      <div 
        className="absolute inset-0 w-full h-full opacity-80"
        style={{ backgroundImage: GRADIENT_OVERLAY }}
      />
    </div>
  );
}
