import { ImgHTMLAttributes, useState } from "react";
import { getCloudinaryUrl } from "../../data/media";
import { cn } from "../../lib/utils";
import { Trees } from "lucide-react";

interface CloudinaryImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string | null;
  alt: string;
  width?: number;
  className?: string;
  lazy?: boolean;
}

export function CloudinaryImage({ src, alt, width, className, lazy = true, ...props }: CloudinaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || src.trim() === "") {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[120px] flex flex-col items-center justify-center bg-bg-secondary text-text-muted/60 p-4 select-none",
          className
        )}
        aria-label={alt}
      >
        <Trees className="w-8 h-8 opacity-40 mb-1.5 text-primary" />
        <span className="text-[11px] text-text-muted/70 font-medium text-center">
          {alt || "رايات نجد"}
        </span>
      </div>
    );
  }

  const optimizedUrl = getCloudinaryUrl(src, width);

  if (!optimizedUrl || optimizedUrl.trim() === "") {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[120px] flex flex-col items-center justify-center bg-bg-secondary text-text-muted/60 p-4 select-none",
          className
        )}
        aria-label={alt}
      >
        <Trees className="w-8 h-8 opacity-40 mb-1.5 text-primary" />
        <span className="text-[11px] text-text-muted/70 font-medium text-center">
          {alt || "رايات نجد"}
        </span>
      </div>
    );
  }

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

