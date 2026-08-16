// Classifies a plant record's SourceRef entries by provenance, purely for
// display in the internal Plant Knowledge Base preview. Read-only, derived
// from data already present in plantDatabase.ts — adds no new facts.

export type SourceProvenance = "internal" | "saudi-official" | "external";

const SAUDI_OFFICIAL_MARKERS = [
  "ncvc.gov.sa",
  "spa.gov.sa",
  "ncw.gov.sa",
  "mewa.gov.sa",
  "saudipedia.com",
  "ksanature.com",
  "riyadhenv.gov.sa",
  "rcrc.gov.sa",
  "rp2.adv3.com",
  "pubhtml5.com/eqkr", // archived mirror of the official Manual of Riyadh Plants
  "ksu.edu.sa",
];

export function classifySource(url: string): SourceProvenance {
  if (url.startsWith("Internal Rayat Najd")) return "internal";
  const lower = url.toLowerCase();
  if (SAUDI_OFFICIAL_MARKERS.some((m) => lower.includes(m))) return "saudi-official";
  return "external";
}

export const PROVENANCE_LABELS: Record<SourceProvenance, { ar: string; en: string; colorClass: string }> = {
  internal: {
    ar: "بيانات رايات نجد الداخلية",
    en: "Rayat Najd Internal Data",
    colorClass: "bg-accent-gold/15 text-accent-gold border-accent-gold/30",
  },
  "saudi-official": {
    ar: "مصدر سعودي رسمي/موثّق",
    en: "Verified Saudi Source",
    colorClass: "bg-primary/15 text-primary border-primary/30",
  },
  external: {
    ar: "بحث علمي خارجي موثّق",
    en: "Verified External Research",
    colorClass: "bg-secondary/15 text-secondary border-secondary/30",
  },
};
