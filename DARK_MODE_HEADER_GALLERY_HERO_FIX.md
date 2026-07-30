# Dark Mode Header, Gallery, and Hero Fixes Report

## 1. Root Cause of the Header Issue
The header navigation links were implemented using Tailwind's hardcoded utility colors like `bg-white dark:bg-slate-800` combined with the theme-aware `text-text-main`. Due to how Tailwind CSS evaluates variables for dark mode when class-based toggling is used without explicit media query configuration, the `dark:` variant did not reliably override the background. This resulted in `bg-white` being applied, while the `.dark` class updated `--foreground` to white, creating white text on a white background.

## 2. Root Cause of the Gallery Filter Issue
Similarly, the gallery filter buttons in `ImageGallery.tsx` used `bg-white text-text-main`. In dark mode, `text-text-main` evaluated to white (due to the `.dark` CSS variable shift), while `bg-white` remained a hardcoded literal white. This created invisible text until the user hovered over the button, which triggered a background color shift.

## 3. Files Modified
- `src/components/Navbar.tsx`
- `src/components/home/ImageGallery.tsx`
- `src/components/home/CinematicBackground.tsx`
- `src/index.css`

## 4. Theme Tokens Changed
- Replaced hardcoded literal colors (`bg-white`, `dark:bg-slate-800`) with semantic theme variables (`bg-card-background`). 
- Replaced hardcoded borders (`border-black/5`, `border-white/10`) with semantic theme border variables (`border-card-border`, `border-primary/30`).
- Updated the `.animate-ken-burns` keyframe animation scales and translations in `index.css` to respect the requested smooth, slow Ken Burns effect with appropriate GPU acceleration.

## 5. Navigation States Tested
- **Default/Inactive**: Fixed by applying `bg-card-background` to ensure a dark background in dark mode and light background in light mode. Text contrast is fully legible.
- **Hover/Active**: The original hover effects (border bottoms, translations, drop shadows) were preserved and remain highly readable.
- **Scrolled/Transparent Header**: Works normally, as the text contrast depends on the navigation pill containers.
- **Mobile Dropdown/Drawer**: Updated the menu container and items to use appropriate semantic background variables for full legibility.

## 6. Gallery States Tested
- **Default Inactive**: Now utilizes `bg-card-background border-card-border` instead of `bg-white`, ensuring that it beautifully adapts to both light and dark mode with high contrast.
- **Active State**: Kept as the brand primary green with white text, providing distinct and accessible signaling.
- **Hover**: Background safely shifts to `bg-bg-secondary`, remaining readable.

## 7. Hero Animation Implementation
- Created a slow, GPU-accelerated cinematic Ken Burns animation (`@keyframes ken-burns`).
- Modified `CinematicBackground.tsx` to apply `animate-ken-burns` to the `img` layers rather than utilizing a static transition scale.
- Animation smoothly interpolates `transform: scale(1.03) translate3d(0,0,0)` to `scale(1.08) translate3d(-1.5%, -1%, 0)` in an infinite alternate loop, safely avoiding any edge clipping or layout recalculation.
- The animation strictly affects the background image overlay. Navigation, text, and Call-to-Action components remain stable and perfectly readable.

## 8. Mobile Behavior
- Created a separate `@media (max-width: 768px)` override for `.animate-ken-burns` in `index.css` to increase the animation duration (slower, more subtle movement).
- The `scale(1.03)` base transformation ensures that `object-fit: cover` will not expose empty background edges during panning.

## 9. Reduced-Motion Behavior
- The global `@media (prefers-reduced-motion: reduce)` block successfully catches and resets the `.animate-ken-burns` class (via `animation-duration: 0.01ms !important`), ensuring users requesting reduced motion receive a completely static hero image while retaining full fidelity and content access.

## 10. Performance Impact
- **Negligible to Positive**: The animation strictly utilizes `transform`, `will-change: transform`, and `translate3d`, safely offloading the Ken Burns effect to the GPU. This eliminates layout thrashing and repaints. 
- Using dynamic CSS variables for the dark mode shift rather than JS-based context logic keeps parsing times flat.

## 11. Remaining Issues
- None regarding the requested scope. Contrast is restored universally.

## 12. Rollback Instructions
If a rollback is required:
1. Revert `bg-card-background` in `Navbar.tsx` to `bg-white dark:bg-slate-800`.
2. Revert `bg-card-background text-text-main` in `ImageGallery.tsx` back to `bg-white text-text-main`.
3. In `index.css`, revert `@keyframes ken-burns` to its original 30s `scale(1.05)` values.
4. Remove the `animate-ken-burns` class string addition from `img` elements in `CinematicBackground.tsx`.
