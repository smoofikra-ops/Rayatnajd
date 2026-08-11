import React, { useState, useEffect, useRef } from 'react';
import { heroImages } from '../../data/heroImages';

interface HeroSlideshowProps {
  isActive: boolean;
}

export default function HeroSlideshow({ isActive }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layers, setLayers] = useState([heroImages[0], heroImages[1]]);
  
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  ).current;

  // Preload next image silently when layers update
  useEffect(() => {
    if (prefersReducedMotion) return;
    const hiddenLayerImg = layers[activeLayer === 0 ? 1 : 0];
    if (hiddenLayerImg) {
      const img = new Image();
      img.src = hiddenLayerImg.src;
    }
  }, [layers, activeLayer, prefersReducedMotion]);

  useEffect(() => {
    if (!isActive || prefersReducedMotion) return;

    const interval = setInterval(() => {
      const nextGlobalIndex = (activeIndex + 1) % heroImages.length;
      const nextLayer = activeLayer === 0 ? 1 : 0;
      
      // Start crossfade by switching the active layer
      setActiveLayer(nextLayer);
      setActiveIndex(nextGlobalIndex);

      // Wait for crossfade to finish, then prepare the hidden layer for the next transition
      setTimeout(() => {
        const nextNextGlobalIndex = (nextGlobalIndex + 1) % heroImages.length;
        setLayers(prev => {
          const newLayers = [...prev];
          // update the layer that is now hidden
          newLayers[activeLayer] = heroImages[nextNextGlobalIndex];
          return newLayers;
        });
      }, 1200); // Wait 1200ms for transition
    }, 5000); // 5s slide duration

    return () => clearInterval(interval);
  }, [isActive, activeIndex, activeLayer, prefersReducedMotion]);

  const getAnimationClass = (index: number) => {
    if (prefersReducedMotion) return '';
    const mod = index % 4;
    switch (mod) {
      case 0: return 'animate-slow-zoom-in';
      case 1: return 'animate-slow-pan-left';
      case 2: return 'animate-slow-zoom-out';
      case 3: return 'animate-slow-pan-right';
      default: return 'animate-slow-zoom-in';
    }
  };

  return (
    <>
      {/* Layer 0 */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${activeLayer === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        {layers[0] && (
          <img
            src={layers[0].src}
            alt={layers[0].altAr}
            className={`w-full h-full object-cover origin-${layers[0].focalPoint || 'center'} ${activeLayer === 0 ? getAnimationClass(activeIndex) : ''}`}
            fetchPriority={activeIndex === 0 && activeLayer === 0 ? "high" : "auto"}
            decoding={activeIndex === 0 && activeLayer === 0 ? "sync" : "async"}
            style={{ objectPosition: layers[0].desktopPosition }}
          />
        )}
      </div>

      {/* Layer 1 */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${activeLayer === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        {layers[1] && (
          <img
            src={layers[1].src}
            alt={layers[1].altAr}
            className={`w-full h-full object-cover origin-${layers[1].focalPoint || 'center'} ${activeLayer === 1 ? getAnimationClass(activeIndex) : ''}`}
            decoding="async"
            style={{ objectPosition: layers[1].desktopPosition }}
          />
        )}
      </div>
    </>
  );
}