// Commercial status layer for the Rayat Najd Plant Knowledge Base internal preview.
//
// This file is intentionally kept SEPARATE from plantDatabase.ts / plant.ts.
// It does not modify the PlantProduct schema and does not rewrite any of the
// 148 researched plant records — it only maps SKUs to the internal Rayat Najd
// Excel inventory data ("مصدر بيانات المعرفة رايات نجد.xlsx") so the UI can
// distinguish "Rayat Najd Confirmed Product" from "Knowledge Base / Reference"
// records without touching the botanical data itself.
//
// Source of truth for these numbers: the internal comparison work done against
// the Rayat Najd Excel inventory file (Priority 1 source) — see the sources[]
// entries already present on each corresponding PlantProduct record.

export type CommercialStatus =
  | "rayat-najd-confirmed"
  | "knowledge-base"
  | "needs-human-review";

export interface RayatNajdCommercialRecord {
  /** SKU of the matching PlantProduct record in plantDatabase.ts */
  sku: string;
  /** The name exactly as written in Rayat Najd's internal Excel file */
  internalNameAsWritten: string;
  /** Quantity as recorded in the internal Excel inventory */
  qty: number;
  /** Caliper/height nursery spec, only present for the large-caliper tree table */
  sizeSpec?: string;
  /** Set when this quantity was shared across multiple species in one source cell */
  sharedCellNote?: string;
}

export interface NeedsHumanReviewEntry {
  /** Undefined when no PlantProduct record exists yet (blocked pending review) */
  sku?: string;
  nameAsWritten: string;
  internalQty?: number;
  reason: string;
}

// 7 species that already existed in the Knowledge Base (from earlier research
// batches) and were subsequently confirmed as actual Rayat Najd nursery stock
// when the internal Excel file was cross-matched against the database.
const matchedToExistingKnowledgeBase: RayatNajdCommercialRecord[] = [
  { sku: "RN-PLANT-004", internalNameAsWritten: "Azadirachta Indica", qty: 20, sizeSpec: "height 3000-3500mm, caliper 90-120mm" },
  { sku: "RN-PLANT-012", internalNameAsWritten: "Prosopis Cineraria", qty: 261, sizeSpec: "height 3000-3500mm, caliper 60-90mm" },
  { sku: "RN-PLANT-043", internalNameAsWritten: "Casuarina Equisetifolia", qty: 37, sizeSpec: "height 3500-4000mm, caliper 120-150mm" },
  { sku: "RN-PLANT-047", internalNameAsWritten: "Peltophorum Pterocarpum", qty: 263, sizeSpec: "height 3500-4000mm, caliper 90-120mm" },
  { sku: "RN-PLANT-068", internalNameAsWritten: "Rosmarinus Officinalis", qty: 2233, sharedCellNote: "خلية مشتركة مع Sporobolus virginicus و Portulaca grandiflora" },
  { sku: "RN-PLANT-080", internalNameAsWritten: "Tecoma Stans", qty: 165, sizeSpec: "height 3000-3500mm, caliper 60-90mm" },
  { sku: "RN-PLANT-100", internalNameAsWritten: "Portulaca Grandiflora", qty: 42443, sharedCellNote: "خلية مشتركة مع Frankenia pulverulenta" },
];

// 25 new species researched specifically because they were confirmed Rayat
// Najd nursery stock with no prior Knowledge Base record (batch 8).
const newlyResearchedConfirmed: RayatNajdCommercialRecord[] = [
  { sku: "RN-PLANT-124", internalNameAsWritten: "Brachychiton Populneus", qty: 100, sizeSpec: "height 3500-4000mm, caliper 120-150mm" },
  { sku: "RN-PLANT-125", internalNameAsWritten: "Cassia Javanica", qty: 62, sizeSpec: "height 3000-3500mm, caliper 120-150mm" },
  { sku: "RN-PLANT-126", internalNameAsWritten: "Pongamia Glabra", qty: 37, sizeSpec: "height 3000-3500mm, caliper 90-120mm" },
  { sku: "RN-PLANT-127", internalNameAsWritten: "Terminalia Mantaly", qty: 42, sizeSpec: "height 3500-4000mm, caliper 90-120mm" },
  { sku: "RN-PLANT-128", internalNameAsWritten: "Ziziphus Jujuba", qty: 63, sizeSpec: "height 3000-3500mm, caliper 90-120mm" },
  { sku: "RN-PLANT-129", internalNameAsWritten: "Cordia Sebestena", qty: 12, sizeSpec: "height 3000-3500mm, caliper 60-90mm" },
  { sku: "RN-PLANT-130", internalNameAsWritten: "Dalbergia Sissoo", qty: 102, sizeSpec: "height 4000-5000mm, caliper 90-120mm" },
  { sku: "RN-PLANT-131", internalNameAsWritten: "Swietenia Macrophylla", qty: 67, sizeSpec: "height 3500-4000mm, caliper 120-150mm" },
  { sku: "RN-PLANT-132", internalNameAsWritten: "Limonium lobatum / winged sea lavender", qty: 161, sharedCellNote: "خلية مشتركة مع Ruellia simplex White" },
  { sku: "RN-PLANT-133", internalNameAsWritten: "Ruellia Simplex White", qty: 161, sharedCellNote: "خلية مشتركة مع Limonium lobatum" },
  { sku: "RN-PLANT-134", internalNameAsWritten: "Lavandula Dentata", qty: 13717, sharedCellNote: "خلية مشتركة مع Malcolmia grandiflora (منقول إلى Needs Human Review)" },
  { sku: "RN-PLANT-135", internalNameAsWritten: "Farsetia Burtoniae", qty: 174 },
  { sku: "RN-PLANT-136", internalNameAsWritten: "Frankenia pulverulenta / european seaheath", qty: 42443, sharedCellNote: "خلية مشتركة مع Portulaca grandiflora" },
  { sku: "RN-PLANT-137", internalNameAsWritten: "Cyperus conglomeratus / saad", qty: 64, sharedCellNote: "خلية مشتركة مع Cyperus alternifolius" },
  { sku: "RN-PLANT-138", internalNameAsWritten: "Cyperus Alternifolius", qty: 64, sharedCellNote: "خلية مشتركة مع Cyperus conglomeratus" },
  { sku: "RN-PLANT-139", internalNameAsWritten: "Zamia furfuracea / cardboard palm", qty: 97 },
  { sku: "RN-PLANT-140", internalNameAsWritten: "Pennisetum villosum / feathertop grass", qty: 862, sharedCellNote: "خلية مشتركة مع Muhlenbergia capillaris" },
  { sku: "RN-PLANT-141", internalNameAsWritten: "Muhlenbergia Capillaris", qty: 862, sharedCellNote: "خلية مشتركة مع Pennisetum villosum" },
  { sku: "RN-PLANT-142", internalNameAsWritten: "Sporobolus virginicus / sand couch", qty: 2233, sharedCellNote: "خلية مشتركة مع Rosmarinus officinalis و Portulaca grandiflora" },
  { sku: "RN-PLANT-143", internalNameAsWritten: "Moraea sisyrinchium / Barbary Nut", qty: 3016, sharedCellNote: "خلية مشتركة مع Ruellia tuberosa" },
  { sku: "RN-PLANT-144", internalNameAsWritten: "Ruellia Tuberosa", qty: 3016, sharedCellNote: "خلية مشتركة مع Moraea sisyrinchium" },
  { sku: "RN-PLANT-145", internalNameAsWritten: "Rhazya stricta / harmel, hamad", qty: 1693 },
  { sku: "RN-PLANT-146", internalNameAsWritten: "Ipomea pes-Capre / Beach Morning Glory", qty: 48078 },
  { sku: "RN-PLANT-147", internalNameAsWritten: "Chloris Virgata / feather Finger Grass", qty: 4166 },
  { sku: "RN-PLANT-148", internalNameAsWritten: "Peganum Harmala / Wild Rue", qty: 1544 },
];

export const rayatNajdConfirmedProducts: RayatNajdCommercialRecord[] = [
  ...matchedToExistingKnowledgeBase,
  ...newlyResearchedConfirmed,
];

// Confirmed Rayat Najd inventory items that could not yet become a full
// PlantProduct record because their scientific name could not be verified
// with confidence — per the no-guessing rule, these are surfaced for human
// review instead of being invented.
export const needsHumanReviewEntries: NeedsHumanReviewEntry[] = [
  {
    nameAsWritten: "Malcolmia Grandiflora",
    internalQty: 13717,
    reason:
      "لم يُعثر على اسم علمي معتمد بهذا الشكل عبر Kew Plants of the World Online. الاسم الأقرب الموثق دوليًا هو Malcolmia maritima، لكن لم يُفترض التطابق دون تأكيد مستقل تجنبًا للتخمين. الكمية (13717) واردة في خلية مشتركة مع Lavandula dentata (RN-PLANT-134) في ملف Excel الداخلي.",
  },
];

const confirmedSkuSet = new Set(rayatNajdConfirmedProducts.map((r) => r.sku));

export function getCommercialStatus(sku: string): CommercialStatus {
  return confirmedSkuSet.has(sku) ? "rayat-najd-confirmed" : "knowledge-base";
}

export function getRayatNajdCommercialData(sku: string): RayatNajdCommercialRecord | undefined {
  return rayatNajdConfirmedProducts.find((r) => r.sku === sku);
}

export const COMMERCIAL_STATUS_LABELS: Record<CommercialStatus, { ar: string; en: string }> = {
  "rayat-najd-confirmed": { ar: "منتج مؤكد من رايات نجد", en: "Rayat Najd Confirmed Product" },
  "knowledge-base": { ar: "قاعدة معرفة فقط", en: "Knowledge Base Only" },
  "needs-human-review": { ar: "يحتاج مراجعة بشرية", en: "Needs Human Review" },
};
