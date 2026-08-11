export interface HeroImage {
  id: string;
  fileId: string;
  src: string;
  altAr: string;
  altEn: string;
  focalPoint?: string;
  desktopPosition?: string;
  mobilePosition?: string;
}

export const heroImages: HeroImage[] = [
  {
    id: "hero-01",
    fileId: "16Yx0KUATp5YercJ6efWdTVhEG-GYxUB9",
    src: "https://drive.usercontent.google.com/download?id=16Yx0KUATp5YercJ6efWdTVhEG-GYxUB9&export=view",
    altAr: "مشروع تشجير رايات نجد",
    altEn: "Rayat Najd Afforestation Project",
    focalPoint: "center",
    desktopPosition: "center",
    mobilePosition: "center"
  },
  {
    id: "hero-02",
    fileId: "1cRts4LpPDHlaAWs4xcpdG67bs0M7hWe6",
    src: "https://drive.usercontent.google.com/download?id=1cRts4LpPDHlaAWs4xcpdG67bs0M7hWe6&export=view",
    altAr: "مشاريع زراعية",
    altEn: "Agricultural Projects",
    focalPoint: "center",
    desktopPosition: "center",
    mobilePosition: "center"
  },
  {
    id: "hero-03",
    fileId: "1fAYB6cKehL1M8st2q2qnxAfBqWP1ITQX",
    src: "https://drive.usercontent.google.com/download?id=1fAYB6cKehL1M8st2q2qnxAfBqWP1ITQX&export=view",
    altAr: "تنسيق حدائق",
    altEn: "Landscaping",
    focalPoint: "center",
    desktopPosition: "center",
    mobilePosition: "center"
  },
  {
    id: "hero-04",
    fileId: "1gfr-lrgCnvmQh4u6tcIQm_64HyF8cMZN",
    src: "https://drive.usercontent.google.com/download?id=1gfr-lrgCnvmQh4u6tcIQm_64HyF8cMZN&export=view",
    altAr: "استدامة بيئية",
    altEn: "Environmental Sustainability",
    focalPoint: "center",
    desktopPosition: "center",
    mobilePosition: "center"
  },
  {
    id: "hero-05",
    fileId: "1GvDmUIUrirFb3_u26haYQhsuV9l-DLGo",
    src: "https://drive.usercontent.google.com/download?id=1GvDmUIUrirFb3_u26haYQhsuV9l-DLGo&export=view",
    altAr: "الرياض الخضراء",
    altEn: "Green Riyadh",
    focalPoint: "center",
    desktopPosition: "center",
    mobilePosition: "center"
  }
];
