// Image Asset Mapping Layer — Bunny CDN → Plant SKU
//
// This file is intentionally kept SEPARATE from plantDatabase.ts / plant.ts.
// It does not modify the PlantProduct schema and does not rewrite any of the
// 148 researched plant records — it only maps a small set of SKUs to Bunny
// CDN assets that were manually, visually verified against real Rayat Najd
// nursery photography (never inferred from filenames, which are generic and
// sequential).
//
// Source of truth for the mapping below: the manual visual audit of
// `04-products/palm-trees/`, `04-products/trees/native-drought-tolerant/`,
// `04-products/mixed-nursery-stock/`, and
// `06-media-library/nursery-photography-al-hair/` on Bunny CDN — see
// Image_Asset_Audit_Report.md (delivered alongside this branch) for the full
// methodology, confidence reasoning, and per-image notes behind every entry.
//
// Guiding principle: Bunny CDN is the media source of truth (files here are
// never renamed/moved/deleted/recompressed — this layer only records a
// pointer to them). Plant Knowledge Base (plantDatabase.ts) is the botanical
// source of truth. This file is the bridge between the two, built only from
// verified visual evidence — never assumption.
//
// Only SKUs with a confidently-verified image appear in `plantImageAssets`.
// Every other PlantProduct record (129 of 148) intentionally has no entry
// here and must keep rendering the existing Placeholder.

export type ImageAssetConfidence = "high" | "medium-high" | "medium";

export type ImageAssetSourceFolder =
  | "palm-trees"
  | "native-drought-tolerant"
  | "mixed-nursery-stock"
  | "media-library-al-hair";

export interface PlantImageAsset {
  /** SKU of the matching PlantProduct record in plantDatabase.ts */
  sku: string;
  /** Full Bunny CDN URL of the verified asset. Bunny is never modified — this is a pointer only. */
  url: string;
  /** Visual-audit confidence that this image genuinely depicts the SKU's species */
  confidence: ImageAssetConfidence;
  /** Which audited Bunny folder this asset came from */
  source: ImageAssetSourceFolder;
  /** Short human-readable justification, taken from the audit notes */
  notes?: string;
}

export interface PlantImageAssetEntry {
  /** The single image to use as the SKU's card/hero thumbnail */
  primary: PlantImageAsset;
  /** Additional verified images for the same SKU, if more than one was found (e.g. a gallery) */
  secondary?: PlantImageAsset[];
}

const BUNNY_BASE = "https://cdn.rayatnajd.com";
const PALM = `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery`;
const NATIVE = `${BUNNY_BASE}/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree`;
const MIXED = `${BUNNY_BASE}/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock`;

/**
 * Verified species-level image mappings, one entry per SKU that survived the
 * no-guessing rule during the visual audit (20 SKUs as of this pass).
 */
export const plantImageAssets: Record<string, PlantImageAssetEntry> = {
  "RN-PLANT-001": {
    primary: {
      sku: "RN-PLANT-001",
      url: `${NATIVE}-34.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Ziziphus spina-christi (السدر) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-002": {
    primary: {
      sku: "RN-PLANT-002",
      url: `${NATIVE}-49.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Vachellia tortilis (السمر) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-003": {
    primary: {
      sku: "RN-PLANT-003",
      url: `${NATIVE}-28.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Vachellia gerrardii (الطلح النجدي) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-007": {
    primary: {
      sku: "RN-PLANT-007",
      url: `${PALM}-31.webp`,
      confidence: "high",
      source: "palm-trees",
      notes: "Phoenix dactylifera — classic pinnate feather fronds + shark-tooth trunk pattern in an agricultural date-grove setting.",
    },
    secondary: [
      {
        sku: "RN-PLANT-007",
        url: `${PALM}-40.webp`,
        confidence: "high",
        source: "palm-trees",
        notes: "Corroborating date-palm farm-row shot.",
      },
      {
        sku: "RN-PLANT-007",
        url: `${PALM}-64.webp`,
        confidence: "high",
        source: "palm-trees",
        notes: "Corroborating date-palm orchard shot.",
      },
    ],
  },
  "RN-PLANT-013": {
    primary: {
      sku: "RN-PLANT-013",
      url: `${NATIVE}-27.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Vachellia flava (السلم) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-014": {
    primary: {
      sku: "RN-PLANT-014",
      url: `${NATIVE}-54.webp`,
      confidence: "medium-high",
      source: "native-drought-tolerant",
      notes: "Haloxylon persicum (الغضا) — red handwritten tag reads \"غضا\"; leafless pale jointed-stem morphology consistent with the species.",
    },
  },
  "RN-PLANT-021": {
    primary: {
      sku: "RN-PLANT-021",
      url: `${NATIVE}-03.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Vachellia tortilis subsp. raddiana (السيال) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-022": {
    primary: {
      sku: "RN-PLANT-022",
      url: `${NATIVE}-10.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Vachellia nilotica (القرض) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
    secondary: [
      {
        sku: "RN-PLANT-022",
        url: `${NATIVE}-29.webp`,
        confidence: "high",
        source: "native-drought-tolerant",
        notes: "Corroborating قرض tagged specimen.",
      },
    ],
  },
  "RN-PLANT-026": {
    primary: {
      sku: "RN-PLANT-026",
      url: `${NATIVE}-33.webp`,
      confidence: "high",
      source: "native-drought-tolerant",
      notes: "Olea europaea (الزيتون) — corroborated by nursery-applied Arabic tag matching nameAr.",
    },
  },
  "RN-PLANT-042": {
    primary: {
      sku: "RN-PLANT-042",
      url: `${PALM}-58.webp`,
      confidence: "high",
      source: "palm-trees",
      notes: "Roystonea regia — smooth ringed trunk + prominent green crownshaft, clearest evidence in the pool.",
    },
    secondary: [
      {
        sku: "RN-PLANT-042",
        url: `${PALM}-59.webp`,
        confidence: "high",
        source: "palm-trees",
        notes: "Field-digging shot of the same crownshaft palm type, confirming real nursery stock.",
      },
    ],
  },
  "RN-PLANT-058": {
    primary: {
      sku: "RN-PLANT-058",
      url: `${MIXED}-30.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Bougainvillea sp. — unmistakable papery-bract flower structure; hero-quality mass-planting shot.",
    },
    secondary: [
      {
        sku: "RN-PLANT-058",
        url: `${MIXED}-66.webp`,
        confidence: "high",
        source: "mixed-nursery-stock",
        notes: "Multi-cultivar Bougainvillea block (magenta/orange/red/white).",
      },
    ],
  },
  "RN-PLANT-077": {
    primary: {
      sku: "RN-PLANT-077",
      url: `${MIXED}-72.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Agave americana — non-variegated field, classic Century Plant rosette form.",
    },
  },
  "RN-PLANT-078": {
    primary: {
      sku: "RN-PLANT-078",
      url: `${MIXED}-57.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Nerium oleander — whorled narrow leathery leaves + pinwheel flower clusters is diagnostic.",
    },
  },
  "RN-PLANT-079": {
    primary: {
      sku: "RN-PLANT-079",
      url: `${MIXED}-14.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Lantana camara — distinctive color-changing flower-cluster pattern.",
    },
    secondary: [
      {
        sku: "RN-PLANT-079",
        url: `${MIXED}-56.webp`,
        confidence: "high",
        source: "mixed-nursery-stock",
        notes: "Massive corroborating Lantana field.",
      },
    ],
  },
  "RN-PLANT-080": {
    primary: {
      sku: "RN-PLANT-080",
      url: `${MIXED}-67.webp`,
      confidence: "medium-high",
      source: "mixed-nursery-stock",
      notes: "Tecoma stans — trumpet flower cluster + compound leaf structure matches; flower reads more golden-orange than typical \"yellow\" description.",
    },
  },
  "RN-PLANT-081": {
    primary: {
      sku: "RN-PLANT-081",
      url: `${MIXED}-50.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Euphorbia milii — thorny succulent stem + paired rounded colored bract structure is diagnostic.",
    },
    secondary: [
      {
        sku: "RN-PLANT-081",
        url: `${MIXED}-74.webp`,
        confidence: "high",
        source: "mixed-nursery-stock",
        notes: "Corroborating Crown of Thorns wheelbarrow shot.",
      },
    ],
  },
  "RN-PLANT-086": {
    primary: {
      sku: "RN-PLANT-086",
      url: `${MIXED}-18.webp`,
      confidence: "medium-high",
      source: "mixed-nursery-stock",
      notes: "Caesalpinia pulcherrima — flower shape with long stamens + fine bipinnate leaf distinguishes it from the look-alike Delonix regia (RN-PLANT-049).",
    },
  },
  "RN-PLANT-091": {
    primary: {
      sku: "RN-PLANT-091",
      url: `${MIXED}-32.webp`,
      confidence: "high",
      source: "mixed-nursery-stock",
      notes: "Hibiscus rosa-sinensis — large ruffled double flower with prominent central column is diagnostic.",
    },
    secondary: [
      {
        sku: "RN-PLANT-091",
        url: `${MIXED}-71.webp`,
        confidence: "medium-high",
        source: "mixed-nursery-stock",
        notes: "Single-flower-form corroborating specimen.",
      },
    ],
  },
  "RN-PLANT-138": {
    primary: {
      sku: "RN-PLANT-138",
      url: `${MIXED}-22.webp`,
      confidence: "medium-high",
      source: "mixed-nursery-stock",
      notes: "Cyperus alternifolius — distinctive umbrella-whorl bract arrangement at stem tips.",
    },
  },
};

/** Returns the verified primary image for a SKU, or undefined if none exists (Placeholder should be used). */
export function getVerifiedImageForSku(sku: string): PlantImageAsset | undefined {
  return plantImageAssets[sku]?.primary;
}

/** True when a SKU has at least one verified image. */
export function hasVerifiedImage(sku: string): boolean {
  return sku in plantImageAssets;
}

// ---------------------------------------------------------------------------
// Category-level media — usable as category heroes / galleries / service-page
// headers / catalog headers, but NEVER attached to an individual species'
// product card, since the exact species in these photos could not be safely
// confirmed at the species level (per the audit's no-guessing rule). Kept in
// the same file for now since the volume is small; split out if it grows.
// ---------------------------------------------------------------------------

export type CategoryMediaGroup =
  | "palm-trees-washingtonia"
  | "native-drought-tolerant-general"
  | "ornamental-mass-planting";

export interface CategoryMediaAsset {
  url: string;
  group: CategoryMediaGroup;
  source: ImageAssetSourceFolder;
  notes?: string;
}

export const categoryMediaAssets: CategoryMediaAsset[] = [
  {
    url: `${PALM}-48.webp`,
    group: "palm-trees-washingtonia",
    source: "palm-trees",
    notes: "Villa-courtyard hero shot, Washingtonia sp. — species not distinguishable at photo level.",
  },
  {
    url: `${PALM}-50.webp`,
    group: "palm-trees-washingtonia",
    source: "palm-trees",
    notes: "Luxury villa-entrance hero shot, Washingtonia sp.",
  },
  {
    url: `${BUNNY_BASE}/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-22.webp`,
    group: "palm-trees-washingtonia",
    source: "media-library-al-hair",
    notes: "Golden-hour Washingtonia grove hero shot.",
  },
  {
    url: `${BUNNY_BASE}/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-24.webp`,
    group: "palm-trees-washingtonia",
    source: "media-library-al-hair",
    notes: "Golden-hour Washingtonia grove hero shot.",
  },
  {
    url: `${NATIVE}-65.webp`,
    group: "native-drought-tolerant-general",
    source: "native-drought-tolerant",
    notes: "Single specimen tree flanked by matching nursery rows, mountain backdrop — species not distinguishable at photo level.",
  },
  {
    url: `${MIXED}-30.webp`,
    group: "ornamental-mass-planting",
    source: "mixed-nursery-stock",
    notes: "Bougainvillea mass-planting field (also individually verified — see RN-PLANT-058).",
  },
  {
    url: `${MIXED}-56.webp`,
    group: "ornamental-mass-planting",
    source: "mixed-nursery-stock",
    notes: "Lantana mass-planting field (also individually verified — see RN-PLANT-079).",
  },
];
