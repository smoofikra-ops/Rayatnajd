export type ProjectCategory =
  | "afforestation"
  | "palms"
  | "relocation"
  | "landscape"
  | "native"
  | "irrigation"
  | "maintenance";

export type ProjectStatus = "completed" | "in_progress" | "ongoing";

export interface ProjectMedia {
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  captionAr?: string;
  captionEn?: string;
  isPrimary?: boolean;
}

export interface ProjectStat {
  labelAr: string;
  labelEn: string;
  value: string;
}

export type ProjectMediaStatus =
  | "verified-project-media"
  | "media-missing"
  | "video-only"
  | "awaiting-bunny-sync";

export interface Project {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: ProjectCategory;
  categoryNameAr: string;
  categoryNameEn: string;
  locationAr: string;
  locationEn: string;
  clientAr?: string;
  clientEn?: string;
  year?: string;
  status: ProjectStatus;
  featured: boolean;
  featuredOrder?: number; // 1 to 6 for homepage
  bunnyFolder?: string;
  primaryImage?: string;
  heroImage: string;
  mediaStatus: ProjectMediaStatus;
  gallery: ProjectMedia[];
  videos?: ProjectMedia[];
  stats?: ProjectStat[];
  tags?: string[];
  highlightsAr?: string[];
  highlightsEn?: string[];
}
