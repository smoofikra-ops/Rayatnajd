export function getCinematicBackgroundUrl(
  publicId: string,
  width: number,
  height: number,
  quality: 'good' | 'eco' = 'good'
) {
  // Base URL
  const baseUrl = "https://res.cloudinary.com/erfajaoa/image/upload";
  // Transformations: format auto, quality auto:good/eco, fill crop, auto gravity, device pixel ratio auto
  const transformations = `f_auto,q_auto:${quality},c_fill,g_auto,w_${width},h_${height},dpr_auto`;
  
  return `${baseUrl}/${transformations}/v1/${publicId}.jpg`;
}
