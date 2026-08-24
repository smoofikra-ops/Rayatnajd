import manifestData from "../data/projectMediaManifest.json";
import { Project, ProjectMedia, ProjectMediaStatus, ProjectCategory } from "../types/project";

export interface ProjectManifestEntry {
  slug: string;
  bunnyFolder: string;
  mediaStatus: ProjectMediaStatus;
  primaryImage: string | null;
  images: {
    filename?: string;
    url: string;
    type?: "image" | "video";
    captionAr?: string;
    captionEn?: string;
    isPrimary?: boolean;
  }[];
  videos: {
    url: string;
    thumbnailUrl?: string;
    type?: "video";
    captionAr?: string;
    captionEn?: string;
  }[];
}

export interface ResolvedProjectMedia {
  primaryImage: string | null;
  heroImage: string | null;
  gallery: ProjectMedia[];
  videos: ProjectMedia[];
  imageCount: number;
  videoCount: number;
  mediaStatus: ProjectMediaStatus;
  bunnyFolder: string;
}

const DEFAULT_CDN_BASE = "https://cdn.rayatnajd.com";

/**
 * Standard folder mappings registry.
 * Maps project slugs to their canonical Bunny CDN storage folders.
 * Centralized mapping exception:
 * 'umm-shalhah-al-asyah' -> '03-projects/environmental-sustainability/umm-shalfah-afforestation'
 */
export const FOLDER_MAPPINGS: Record<string, string> = {
  "umm-shalhah-al-asyah": "03-projects/environmental-sustainability/umm-shalfah-afforestation",
  "saiysad-national-park-taif": "03-projects/saiysad-national-park-taif",
  "university-of-khulais": "03-projects/university-of-khulais",
  "makkah-desalination-plant": "03-projects/makkah-desalination-plant",
  "al-shuqaiq-desalination-plant": "03-projects/al-shuqaiq-desalination-plant",
  "al-tumayrat-al-jouf": "03-projects/al-tumayrat-al-jouf",
  "umm-al-hamam-al-asyah": "03-projects/umm-al-hamam-al-asyah",
  "al-owaisi-care-maintenance": "03-projects/al-owaisi-care-maintenance",
  "umm-al-hamam-umm-shalhah-care-maintenance": "03-projects/umm-al-hamam-umm-shalhah-care-maintenance",
  "al-jumum-afforestation": "03-projects/al-jumum-afforestation",
  "khulais-afforestation": "03-projects/khulais-afforestation",
  "al-nafthah-afforestation": "03-projects/al-nafthah-afforestation",
  "al-aflaj-afforestation": "03-projects/al-aflaj-afforestation",
  ...(manifestData.folderMappings || {})
};

/**
 * Resolves the canonical Bunny folder for a given project slug or path.
 */
export function resolveProjectFolder(slugOrFolder: string): string {
  if (FOLDER_MAPPINGS[slugOrFolder]) {
    return FOLDER_MAPPINGS[slugOrFolder];
  }
  if (slugOrFolder.startsWith("03-projects/")) {
    return slugOrFolder;
  }
  return `03-projects/${slugOrFolder}`;
}

/**
 * Bunny Project Media Resolver
 * Resolves media assets for any given project using the indexed manifest.
 * Guarantees zero runtime directory scans and no leaked credentials.
 */
export function resolveProjectMedia(project: { slug: string; bunnyFolder?: string }): ResolvedProjectMedia {
  const bunnyFolder = project.bunnyFolder || resolveProjectFolder(project.slug);
  
  // Look up folder in manifest projects dictionary
  const manifestProjects = (manifestData.projects || {}) as Record<string, ProjectManifestEntry>;
  
  let entry: ProjectManifestEntry | undefined = manifestProjects[bunnyFolder];
  
  // Fallback: search by slug if folder key didn't match directly
  if (!entry) {
    entry = Object.values(manifestProjects).find((p) => p.slug === project.slug);
  }

  // If no entry or no verified images/videos in manifest
  if (!entry || (!entry.images?.length && !entry.videos?.length)) {
    return {
      primaryImage: null,
      heroImage: null,
      gallery: [],
      videos: [],
      imageCount: 0,
      videoCount: 0,
      mediaStatus: "awaiting-bunny-sync",
      bunnyFolder
    };
  }

  // Process and sanitize images
  const rawImages = entry.images || [];
  const processedGallery: ProjectMedia[] = rawImages
    .filter((img) => img && typeof img.url === "string" && img.url.trim() !== "")
    .map((img) => ({
      type: "image" as const,
      url: img.url.trim(),
      captionAr: img.captionAr,
      captionEn: img.captionEn,
      isPrimary: !!img.isPrimary
    }));

  // Process videos
  const rawVideos = entry.videos || [];
  const processedVideos: ProjectMedia[] = rawVideos
    .filter((v) => v && typeof v.url === "string" && v.url.trim() !== "")
    .map((v) => ({
      type: "video" as const,
      url: v.url.trim(),
      thumbnailUrl: v.thumbnailUrl,
      captionAr: v.captionAr,
      captionEn: v.captionEn
    }));

  // Determine Primary Image
  // 1. Explicit primaryImage in manifest entry
  // 2. Image marked isPrimary
  // 3. Image with "cover" or "primary" in URL
  // 4. First valid image in gallery
  let primaryImage: string | null = null;
  if (entry.primaryImage && typeof entry.primaryImage === "string" && entry.primaryImage.trim() !== "") {
    primaryImage = entry.primaryImage.trim();
  } else {
    const primaryItem = processedGallery.find((img) => img.isPrimary);
    if (primaryItem) {
      primaryImage = primaryItem.url;
    } else {
      const coverItem = processedGallery.find((img) => 
        img.url.toLowerCase().includes("cover") || 
        img.url.toLowerCase().includes("primary") ||
        img.url.toLowerCase().includes("hero")
      );
      if (coverItem) {
        primaryImage = coverItem.url;
      } else if (processedGallery.length > 0) {
        primaryImage = processedGallery[0].url;
      }
    }
  }

  // Determine Media Status
  let mediaStatus: ProjectMediaStatus = "awaiting-bunny-sync";
  if (processedGallery.length > 0) {
    mediaStatus = "verified-project-media";
  } else if (processedVideos.length > 0) {
    mediaStatus = "video-only";
  }

  return {
    primaryImage,
    heroImage: primaryImage,
    gallery: processedGallery,
    videos: processedVideos,
    imageCount: processedGallery.length,
    videoCount: processedVideos.length,
    mediaStatus,
    bunnyFolder
  };
}

/**
 * Hydrates a project object with dynamically resolved media properties.
 */
export function hydrateProjectWithMedia(project: Project): Project {
  const resolved = resolveProjectMedia(project);
  return {
    ...project,
    bunnyFolder: resolved.bunnyFolder,
    primaryImage: resolved.primaryImage || "",
    heroImage: resolved.heroImage || "",
    gallery: resolved.gallery,
    videos: resolved.videos,
    mediaStatus: resolved.mediaStatus
  };
}

/**
 * Hydrates an array of projects with resolved media.
 */
export function hydrateProjectsWithMedia(projects: Project[]): Project[] {
  return projects.map(hydrateProjectWithMedia);
}
