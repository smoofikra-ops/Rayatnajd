#!/bin/bash
sed -i 's/transform: `scale(${isTransitioning ? 1.05 : 1.08})`,//g' src/components/home/CinematicBackground.tsx
sed -i 's/transform: `scale(${isTransitioning ? 1.03 : 1.08})`,//g' src/components/home/CinematicBackground.tsx
sed -i 's/transform ${transitionDuration} ${transitionEasing}, //g' src/components/home/CinematicBackground.tsx
sed -i 's/className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity`}/className={`absolute inset-0 w-full h-full object-cover origin-center transition-all will-change-transform will-change-opacity animate-ken-burns`}/g' src/components/home/CinematicBackground.tsx
