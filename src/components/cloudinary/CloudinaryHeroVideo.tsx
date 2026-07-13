import { CloudinaryImage } from "./CloudinaryImage";
import { getCloudinaryUrl } from "../../data/media";

interface CloudinaryHeroVideoProps {
  videoUrl?: string;
  fallbackImageUrl?: string;
  title?: string;
}

export function CloudinaryHeroVideo({ videoUrl, fallbackImageUrl, title }: CloudinaryHeroVideoProps) {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-bg-primary/40 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/40 z-10"></div>
      
      {videoUrl ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster={fallbackImageUrl ? getCloudinaryUrl(fallbackImageUrl, 1200) : undefined}
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback to image if video fails to load or isn't supported */}
          {fallbackImageUrl && (
            <img 
              src={getCloudinaryUrl(fallbackImageUrl, 2560)} 
              alt={title || "Hero background"}
              className="w-full h-full object-cover"
            />
          )}
        </video>
      ) : fallbackImageUrl ? (
        <CloudinaryImage
          src={fallbackImageUrl}
          alt={title || "Hero background"}
          width={2560}
          className="w-full h-full object-cover"
          lazy={false} // eager load hero image
        />
      ) : null}
    </div>
  );
}
