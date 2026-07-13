import { ImgHTMLAttributes, useState } from "react";
import { getCloudinaryUrl } from "../../data/media";
import { cn } from "../../lib/utils";

interface CloudinaryImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  lazy?: boolean;
}

export function CloudinaryImage({ src, alt, width, className, lazy = true, ...props }: CloudinaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const optimizedUrl = getCloudinaryUrl(src, width);

  return (
    <img
      src={optimizedUrl}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      className={cn(
        "transition-opacity duration-500",
        !isLoaded ? "opacity-0" : "opacity-100",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}
