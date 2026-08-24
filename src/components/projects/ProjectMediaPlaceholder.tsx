import React from "react";
import { Trees, Sparkles, MapPin } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { cn } from "../../lib/utils";

interface ProjectMediaPlaceholderProps {
  nameAr?: string;
  nameEn?: string;
  categoryNameAr?: string;
  categoryNameEn?: string;
  locationAr?: string;
  locationEn?: string;
  variant?: "card" | "carousel" | "hero" | "compact";
  className?: string;
}

export function ProjectMediaPlaceholder({
  nameAr,
  nameEn,
  categoryNameAr,
  categoryNameEn,
  locationAr,
  locationEn,
  variant = "card",
  className,
}: ProjectMediaPlaceholderProps) {
  const { t, language } = useSettings();
  const isAr = language === "ar";

  const title = isAr ? nameAr : nameEn;
  const category = isAr ? categoryNameAr : categoryNameEn;
  const location = isAr ? locationAr : locationEn;

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden flex flex-col justify-between select-none",
        "bg-gradient-to-br from-[#0c2419] via-[#123625] to-[#0a1b13]",
        variant === "card" && "p-5 min-h-[190px]",
        variant === "carousel" && "p-5 min-h-[220px]",
        variant === "hero" && "p-8 md:p-12 min-h-[280px] md:min-h-[360px]",
        variant === "compact" && "p-3 min-h-[120px]",
        className
      )}
      role="img"
      aria-label={title || t("مشروع رايات نجد", "Rayat Najd Project")}
    >
      {/* Subtle Geometric / Nature Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#5da87b_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Decorative Organic Wave Shapes */}
      <svg
        className="absolute -right-8 -bottom-8 w-48 h-48 md:w-64 md:h-64 text-emerald-500/10 pointer-events-none transition-transform duration-700 group-hover:scale-110"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.2,13.5,77.8,27,69.1,39.3C60.4,51.6,50.4,62.7,38.1,70.5C25.8,78.3,12.9,82.8,-0.9,84.4C-14.7,85.9,-29.4,84.5,-42.2,77.6C-55,70.7,-65.9,58.3,-74.1,44.4C-82.3,30.5,-87.8,15.3,-86.7,0.6C-85.7,-14,-78.1,-28,-68.9,-40.1C-59.7,-52.1,-48.9,-62.2,-36.3,-70.2C-23.7,-78.1,-9.3,-83.9,3.8,-90.5C16.9,-97.1,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      {/* Top Header Row inside Placeholder */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold tracking-wide">
          <Trees className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{category || t("مشروع معتمد", "Approved Project")}</span>
        </div>

        {/* Discreet updating badge */}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px] font-medium backdrop-blur-xs">
          <Sparkles className="w-2.5 h-2.5 text-accent-gold/80" />
          <span>{t("الوسائط قيد التحديث", "Media Updating")}</span>
        </span>
      </div>

      {/* Center Icon & Branding */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2 shadow-inner group-hover:scale-105 transition-transform duration-500">
          <Trees className="w-6 h-6 md:w-7 md:h-7 opacity-85 text-accent-gold" />
        </div>
        <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">
          {t("رايات نجد للمشاريع البيئية", "Rayat Najd Projects")}
        </span>
      </div>

      {/* Bottom Information Row inside Placeholder */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
        {location ? (
          <div className="flex items-center gap-1 text-[11px] text-white/75 truncate">
            <MapPin className="w-3 h-3 text-accent-gold shrink-0" />
            <span className="truncate max-w-[200px]">{location}</span>
          </div>
        ) : (
          <span className="text-[11px] text-white/60">{t("المملكة العربية السعودية", "Kingdom of Saudi Arabia")}</span>
        )}
        <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded">
          {t("موثق", "Verified")}
        </span>
      </div>
    </div>
  );
}
