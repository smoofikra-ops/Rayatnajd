import React from "react";
import { MapPin } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { cn } from "../../lib/utils";

/** Visual context only. These are existing Rayat Najd library photos, not verified photos of the named project. */
const illustrationPool = {
  afforestation: [
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-01.webp",
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-04.webp",
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-07.webp",
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-10.webp"
  ],
  palms: [
    "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-18.webp",
    "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-03.webp"
  ],
  landscape: [
    "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-projects.webp",
    "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-17.webp"
  ],
  maintenance: [
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-09.webp",
    "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-06.webp"
  ]
};
interface ProjectMediaPlaceholderProps {
  nameAr?: string; nameEn?: string; categoryNameAr?: string; categoryNameEn?: string;
  locationAr?: string; locationEn?: string;
  variant?: "card" | "carousel" | "hero" | "compact"; className?: string;
}
export function ProjectMediaPlaceholder({nameAr,nameEn,categoryNameAr,categoryNameEn,locationAr,locationEn,variant="card",className}: ProjectMediaPlaceholderProps) {
  const {t,language}=useSettings();
  const title=language==="ar"?nameAr:nameEn;
  const location=language==="ar"?locationAr:locationEn;
  const category=language==="ar"?categoryNameAr:categoryNameEn;
  const raw=(nameAr||nameEn||"");
  const key=/نخيل|نخل|palm/i.test(raw)?"palms":/صيانة|رعاية|تشغيل|maintenance|operation/i.test(raw)?"maintenance":/جامعة|منتجع|مسطحات|landscape|resort/i.test(raw)?"landscape":"afforestation";
  const pool=illustrationPool[key];
  const hash=Array.from(raw).reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  const src=pool[hash%pool.length];
  return <div className={cn("relative w-full h-full overflow-hidden bg-[#0c2419] group",variant==="card"&&"min-h-[190px]",variant==="carousel"&&"min-h-[220px]",variant==="hero"&&"min-h-[280px] md:min-h-[360px]",variant==="compact"&&"min-h-[120px]",className)}>
    <img src={src} alt={language==="ar"?`صورة توضيحية لنشاط ${category||"التشجير"} — ليست توثيقًا لمشروع ${title||""}`:`Illustrative ${category||"landscape"} image, not a verified photo of ${title||"this project"}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
    <span className="absolute top-3 right-3 rounded-lg bg-black/70 px-2.5 py-1 text-[11px] text-white font-medium backdrop-blur-sm">{t("صورة توضيحية — ليست من توثيق المشروع","Illustrative — not project documentation")}</span>
    <div className="absolute bottom-3 right-3 left-3 flex items-center gap-2 text-white/90 text-xs">
      <MapPin className="w-4 h-4 shrink-0 text-accent-gold"/><span className="truncate">{location||t("المملكة العربية السعودية","Saudi Arabia")}</span>
    </div>
  </div>;
}
