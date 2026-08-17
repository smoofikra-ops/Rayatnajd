// Unified plant/tree product record schema for the Rayat Najd product & knowledge database.
// Powers: website, digital catalog/PDF, government tenders, technical proposals,
// nurseries, afforestation projects, SEO, and AI-search discovery.
//
// Data discipline: every factual (non-identity) field is optional. A field is populated
// ONLY when backed by a cited, credible source (Saudi official sources first — MEWA /
// National Center for Vegetation Cover Development & Combating Desertification — then
// FAO, Kew Science/POWO, or other recognized botanical databases). If no trustworthy
// source was found, the field is left undefined and the gap is recorded in `dataGaps`
// rather than estimated or invented.

export interface SourceRef {
  label: string;
  url: string;
}

export type ToleranceLevel = "low" | "medium" | "high" | "very-high";
export type WaterNeedLevel = "low" | "medium" | "high";
export type YesNoUnverified = boolean | undefined;

export interface PlantImageSet {
  hero?: string;
  fullTree?: string;
  leaves?: string;
  flower?: string;
  fruit?: string;
  landscapeUse?: string;
  /** Real, verified Rayat Najd nursery/project photos, if any exist for this species. */
  rayatNajdRealPhotos?: string[];
  /**
   * True only when every image above is a confirmed Rayat Najd nursery/project photo.
   * When false, at least one image is a temporary reference photo and MUST NOT be
   * presented as work executed by Rayat Najd.
   */
  allImagesAreRayatNajdOriginal: boolean;
}

export interface PlantUsage {
  primaryUseAr: string;
  primaryUseEn: string;
  secondaryUsesAr?: string[];
  secondaryUsesEn?: string[];
  suitableForUrbanLandscaping?: YesNoUnverified;
  suitableForFarms?: YesNoUnverified;
  suitableForRoads?: YesNoUnverified;
  suitableForGardens?: YesNoUnverified;
  suitableForGovernmentProjects?: YesNoUnverified;
  suitableForDesertificationControl?: YesNoUnverified;
  suitableForWindbreaks?: YesNoUnverified;
  suitableForEnvironmentalAfforestation?: YesNoUnverified;
}

export interface SaudiRegionSuitability {
  bestRegions?: string[];
  acceptableRegions?: string[];
  notRecommendedRegions?: string[];
}

export interface ClimateTolerance {
  heatTolerance?: ToleranceLevel;
  coldTolerance?: ToleranceLevel;
  frostTolerance?: ToleranceLevel;
  droughtTolerance?: ToleranceLevel;
  salinityTolerance?: ToleranceLevel;
  windTolerance?: ToleranceLevel;
  dustTolerance?: ToleranceLevel;
  sunRequirementAr?: string;
  sunRequirementEn?: string;
}

export interface SoilRequirements {
  soilTypes?: ("sandy" | "clay" | "loamy" | "calcareous" | "saline")[];
  drainageRequirementAr?: string;
  drainageRequirementEn?: string;
  /** Only populated when a reliable published range exists. */
  phRange?: { min: number; max: number };
}

export interface IrrigationProfile {
  level?: WaterNeedLevel;
  frequencyNoteAr?: string;
  frequencyNoteEn?: string;
  treatedWaterUse?: YesNoUnverified;
  matureTreeWaterNeedAr?: string;
  matureTreeWaterNeedEn?: string;
}

export interface GrowthProfile {
  growthRateAr?: string;
  growthRateEn?: string;
  expectedHeightMeters?: { min: number; max: number };
  expectedCanopyWidthMeters?: { min: number; max: number };
  rootTypeAr?: string;
  rootTypeEn?: string;
  crownShapeAr?: string;
  crownShapeEn?: string;
  leafHabit?: "evergreen" | "deciduous" | "semi-deciduous";
  expectedLifespanYears?: { min: number; max: number };
}

export interface PlantingAndCare {
  bestPlantingSeasonAr?: string;
  bestPlantingSeasonEn?: string;
  propagationMethodAr?: string;
  propagationMethodEn?: string;
  pruningNeedsAr?: string;
  pruningNeedsEn?: string;
  maintenanceLevel?: "low" | "medium" | "high";
  majorPestsAndDiseasesAr?: string[];
  majorPestsAndDiseasesEn?: string[];
  recommendedSpacingAr?: string;
  recommendedSpacingEn?: string;
}

export interface FloweringAndFruiting {
  hasFlowers: boolean;
  floweringSeasonAr?: string;
  floweringSeasonEn?: string;
  flowerColorAr?: string;
  flowerColorEn?: string;
  fragranceAr?: string;
  fragranceEn?: string;
  hasFruit: boolean;
  fruitingSeasonAr?: string;
  fruitingSeasonEn?: string;
  fruitTypeAr?: string;
  fruitTypeEn?: string;
  pollinatorValueAr?: string;
  pollinatorValueEn?: string;
}

export interface EcologicalValue {
  supportsBiodiversity?: YesNoUnverified;
  supportsPollinators?: YesNoUnverified;
  honeyProduction?: YesNoUnverified;
  soilStabilization?: YesNoUnverified;
  sandStabilization?: YesNoUnverified;
  desertificationControl?: YesNoUnverified;
  vegetationCoverImprovement?: YesNoUnverified;
  grazingUse?: YesNoUnverified;
  desertConditionsTolerance?: YesNoUnverified;
}

export interface PlantSeo {
  seoTitleAr: string;
  seoTitleEn: string;
  metaDescriptionAr: string;
  metaDescriptionEn: string;
  altTextAr: string;
  altTextEn: string;
  keywords: string[];
  searchTags: string[];
  /** e.g. "native-trees/sidr" */
  slugEn: string;
  structuredDataType: string;
}

export type PrimaryCategoryId =
  | "native-environmental-trees"
  | "fruit-economic-trees"
  | "palm-trees"
  | "shade-windbreak-trees"
  | "ornamental-urban-trees"
  | "coastal-salt-tolerant-planting"
  | "medicinal-aromatic-plants"
  | "shrubs-ornamental-plants"
  | "climbers-groundcovers-seasonal"
  | "lawns-grasses";

export interface PlantProduct {
  sku: string;
  nameAr: string;
  nameEn: string;
  scientificName: string;
  family?: string;
  localNameAr?: string;
  primaryCategory: PrimaryCategoryId;
  subCategoryAr?: string;
  subCategoryEn?: string;
  tags: string[];

  usage: PlantUsage;
  regions: SaudiRegionSuitability;
  climate: ClimateTolerance;
  soil: SoilRequirements;
  irrigation: IrrigationProfile;
  growth: GrowthProfile;
  care: PlantingAndCare;
  bloom: FloweringAndFruiting;
  ecology: EcologicalValue;
  images: PlantImageSet;
  seo: PlantSeo;

  /** Cited sources backing the populated fields above. */
  sources: SourceRef[];
  /**
   * Explicit, human-readable list of fields left unpopulated because no credible
   * source was found — never silently omitted, never estimated.
   */
  dataGaps: string[];
}

export const PRIMARY_CATEGORIES: { id: PrimaryCategoryId; nameAr: string; nameEn: string }[] = [
  { id: "native-environmental-trees", nameAr: "الأشجار الرعوية والبيئية", nameEn: "Native & Environmental Trees" },
  { id: "fruit-economic-trees", nameAr: "الأشجار المثمرة والإنتاج الزراعي", nameEn: "Fruit & Economic Trees" },
  { id: "palm-trees", nameAr: "النخيل", nameEn: "Palm Trees" },
  { id: "shade-windbreak-trees", nameAr: "أشجار الظل ومصدات الرياح", nameEn: "Shade Trees & Windbreaks" },
  { id: "ornamental-urban-trees", nameAr: "أشجار الزينة والتشجير الحضري", nameEn: "Ornamental & Urban Trees" },
  { id: "coastal-salt-tolerant-planting", nameAr: "الأشجار والنباتات الساحلية", nameEn: "Coastal & Salt-Tolerant Planting" },
  { id: "medicinal-aromatic-plants", nameAr: "الأشجار والنباتات الطبية والعطرية", nameEn: "Medicinal & Aromatic Plants" },
  { id: "shrubs-ornamental-plants", nameAr: "الشجيرات ونباتات الزينة", nameEn: "Shrubs & Ornamental Plants" },
  { id: "climbers-groundcovers-seasonal", nameAr: "النباتات المتسلقة ومغطيات التربة والموسميات", nameEn: "Climbers, Ground Covers & Seasonal Plants" },
  { id: "lawns-grasses", nameAr: "المسطحات الخضراء والنجيليات", nameEn: "Lawns & Grasses" },
];
