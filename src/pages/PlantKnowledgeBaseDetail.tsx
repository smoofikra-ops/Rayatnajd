import { useMemo, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Leaf,
  Sprout,
  Droplets,
  Sun,
  Ruler,
  Sprout as SproutIcon,
  Scissors,
  Flower2,
  Globe2,
  Search as SearchIcon,
  BookMarked,
  AlertTriangle,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { plantDatabase } from "../data/plantDatabase";
import { PRIMARY_CATEGORIES } from "../types/plant";
import {
  getCommercialStatus,
  getRayatNajdCommercialData,
  COMMERCIAL_STATUS_LABELS,
} from "../data/plantCommercialStatus";
import { classifySource, PROVENANCE_LABELS } from "../lib/plantProvenance";
import { cn } from "../lib/utils";

function extractSynonyms(scientificName: string): string[] {
  const matches = [...scientificName.matchAll(/syn\.\s*([^,)]+)/gi)];
  return matches.map((m) => m[1].trim());
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Leaf;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-card-border bg-card-background p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="font-bold text-card-heading">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, value }: { label: string; value?: ReactNode }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className="py-2 border-b border-card-border/50 last:border-0">
      <dt className="text-xs text-text-muted mb-0.5">{label}</dt>
      <dd className="text-sm text-card-heading">{value}</dd>
    </div>
  );
}

function YesNoBadge({ value, labelAr }: { value: boolean | undefined; labelAr: string }) {
  if (value === undefined) return null;
  return (
    <span
      className={cn(
        "text-xs px-2.5 py-1 rounded-full border",
        value ? "bg-primary/10 text-primary border-primary/30" : "bg-card-border/20 text-text-muted border-card-border"
      )}
    >
      {labelAr}: {value ? "نعم" : "لا"}
    </span>
  );
}

export default function PlantKnowledgeBaseDetail() {
  const { sku } = useParams<{ sku: string }>();
  const plant = useMemo(() => plantDatabase.find((p) => p.sku === sku), [sku]);

  if (!plant) {
    return (
      <div dir="rtl" className="min-h-screen bg-bg-secondary flex flex-col items-center justify-center gap-4 p-6">
        <p className="text-text-muted">لم يُعثر على سجل بهذا الرمز: {sku}</p>
        <Link to="/internal/plant-kb" className="text-primary underline">
          العودة لقاعدة المعرفة
        </Link>
      </div>
    );
  }

  const status = getCommercialStatus(plant.sku);
  const commercialData = getRayatNajdCommercialData(plant.sku);
  const category = PRIMARY_CATEGORIES.find((c) => c.id === plant.primaryCategory);
  const synonyms = extractSynonyms(plant.scientificName);

  return (
    <div dir="rtl" className="min-h-screen bg-bg-secondary text-text-main">
      <Helmet>
        <title>{plant.nameAr} — Rayat Najd Plant Knowledge Base</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-primary-dark text-white text-center text-xs sm:text-sm py-2 px-4">
        معاينة داخلية للمراجعة فقط — Read Only
      </div>

      <header className="border-b border-card-border bg-card-background/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
          <Link to="/internal/plant-kb" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
            <ArrowRight className="w-4 h-4" />
            العودة لقاعدة المعرفة
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* identity header */}
        <section className="rounded-2xl border border-card-border bg-card-background p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="text-xs px-2.5 py-1 rounded-full border bg-primary/5 border-primary/20 text-primary">
                  {category?.nameAr} / {category?.nameEn}
                </span>
                <span
                  className={cn(
                    "text-xs px-2.5 py-1 rounded-full border flex items-center gap-1",
                    status === "rayat-najd-confirmed"
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "bg-card-border/30 text-text-muted border-card-border"
                  )}
                >
                  {status === "rayat-najd-confirmed" && <ShieldCheck className="w-3 h-3" />}
                  {COMMERCIAL_STATUS_LABELS[status].ar}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-card-heading">{plant.nameAr}</h1>
              <p className="text-text-muted">{plant.nameEn}</p>
              <p className="text-sm italic text-text-muted mt-1">{plant.scientificName}</p>
              {plant.family && <p className="text-xs text-text-muted mt-1">الفصيلة (Family): {plant.family}</p>}
              {plant.localNameAr && <p className="text-xs text-text-muted">الاسم المحلي: {plant.localNameAr}</p>}
              {synonyms.length > 0 && (
                <p className="text-xs text-text-muted mt-1">المرادفات العلمية: {synonyms.join("، ")}</p>
              )}
            </div>
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent-gold/10 flex items-center justify-center border border-card-border shrink-0">
              <Leaf className="w-10 h-10 text-primary/40" strokeWidth={1.5} />
            </div>
          </div>
          {plant.subCategoryAr && (
            <p className="text-xs text-text-muted mt-3">التصنيف الفرعي: {plant.subCategoryAr}</p>
          )}
          {plant.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {plant.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-card-border/30 text-text-muted">
                  {t}
                </span>
              ))}
            </div>
          )}
          <p className="text-[11px] text-text-muted/70 mt-3">{plant.sku}</p>
        </section>

        {/* Rayat Najd Commercial Data */}
        {status === "rayat-najd-confirmed" && commercialData && (
          <section className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <h2 className="font-bold text-card-heading">بيانات رايات نجد التجارية (Rayat Najd Commercial Data)</h2>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <Field label="الاسم كما ورد في ملف رايات نجد الداخلي" value={commercialData.internalNameAsWritten} />
              <Field label="الكمية في المخزون (Qty)" value={commercialData.qty.toLocaleString("en-US")} />
              <Field label="المواصفة (Size Spec)" value={commercialData.sizeSpec} />
              <Field label="ملاحظة الخلية المشتركة" value={commercialData.sharedCellNote} />
            </dl>
            <p className="text-[11px] text-primary/70 mt-3">
              المصدر: ملف "مصدر بيانات المعرفة رايات نجد.xlsx" — Priority 1 Commercial Source of Truth
            </p>
          </section>
        )}

        {/* Uses */}
        <Section icon={Sprout} title="الاستخدامات (Uses)">
          <p className="text-sm text-card-heading mb-3">{plant.usage.primaryUseAr}</p>
          <p className="text-xs text-text-muted mb-3">{plant.usage.primaryUseEn}</p>
          {plant.usage.secondaryUsesAr && plant.usage.secondaryUsesAr.length > 0 && (
            <ul className="list-disc list-inside text-sm text-text-muted mb-3 space-y-1">
              {plant.usage.secondaryUsesAr.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2">
            <YesNoBadge value={plant.usage.suitableForUrbanLandscaping} labelAr="تشجير حضري" />
            <YesNoBadge value={plant.usage.suitableForGardens} labelAr="حدائق" />
            <YesNoBadge value={plant.usage.suitableForRoads} labelAr="طرقات" />
            <YesNoBadge value={plant.usage.suitableForFarms} labelAr="مزارع" />
            <YesNoBadge value={plant.usage.suitableForGovernmentProjects} labelAr="مشاريع حكومية" />
            <YesNoBadge value={plant.usage.suitableForWindbreaks} labelAr="مصدات رياح" />
            <YesNoBadge value={plant.usage.suitableForDesertificationControl} labelAr="مكافحة تصحر" />
            <YesNoBadge value={plant.usage.suitableForEnvironmentalAfforestation} labelAr="تشجير بيئي" />
          </div>
        </Section>

        {/* Saudi Suitability */}
        <Section icon={Globe2} title="الملاءمة المناطقية السعودية (Saudi Suitability)">
          <dl>
            <Field label="أفضل المناطق" value={plant.regions.bestRegions?.join("، ")} />
            <Field label="مناطق مقبولة" value={plant.regions.acceptableRegions?.join("، ")} />
            <Field label="مناطق غير موصى بها" value={plant.regions.notRecommendedRegions?.join("، ")} />
          </dl>
          {!plant.regions.bestRegions && !plant.regions.acceptableRegions && (
            <p className="text-xs text-text-muted">لا توجد بيانات مناطقية موثقة لهذا النوع بعد.</p>
          )}
        </Section>

        {/* Climate */}
        <Section icon={Sun} title="المناخ (Climate)">
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6">
            <Field label="تحمل الحرارة" value={plant.climate.heatTolerance} />
            <Field label="تحمل البرودة" value={plant.climate.coldTolerance} />
            <Field label="تحمل الصقيع" value={plant.climate.frostTolerance} />
            <Field label="تحمل الجفاف" value={plant.climate.droughtTolerance} />
            <Field label="تحمل الملوحة" value={plant.climate.salinityTolerance} />
            <Field label="تحمل الرياح" value={plant.climate.windTolerance} />
            <Field label="تحمل الغبار" value={plant.climate.dustTolerance} />
            <Field label="متطلب الإضاءة" value={plant.climate.sunRequirementAr} />
          </dl>
        </Section>

        {/* Soil */}
        <Section icon={Ruler} title="التربة (Soil)">
          <dl>
            <Field label="أنواع التربة" value={plant.soil.soilTypes?.join("، ")} />
            <Field label="متطلب الصرف" value={plant.soil.drainageRequirementAr} />
            <Field
              label="نطاق درجة الحموضة"
              value={plant.soil.phRange ? `${plant.soil.phRange.min} – ${plant.soil.phRange.max}` : undefined}
            />
          </dl>
        </Section>

        {/* Irrigation */}
        <Section icon={Droplets} title="الري (Irrigation)">
          <dl>
            <Field label="مستوى الاحتياج المائي" value={plant.irrigation.level} />
            <Field label="ملاحظة تكرار الري" value={plant.irrigation.frequencyNoteAr} />
            <Field label="استخدام المياه المعالجة" value={plant.irrigation.treatedWaterUse === undefined ? undefined : plant.irrigation.treatedWaterUse ? "نعم" : "لا"} />
            <Field label="احتياج الشجرة الناضجة" value={plant.irrigation.matureTreeWaterNeedAr} />
          </dl>
        </Section>

        {/* Growth */}
        <Section icon={SproutIcon} title="النمو (Growth)">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field label="معدل النمو" value={plant.growth.growthRateAr} />
            <Field
              label="الارتفاع المتوقع (م)"
              value={plant.growth.expectedHeightMeters ? `${plant.growth.expectedHeightMeters.min} – ${plant.growth.expectedHeightMeters.max}` : undefined}
            />
            <Field
              label="اتساع المظلة المتوقع (م)"
              value={plant.growth.expectedCanopyWidthMeters ? `${plant.growth.expectedCanopyWidthMeters.min} – ${plant.growth.expectedCanopyWidthMeters.max}` : undefined}
            />
            <Field label="نوع الجذر" value={plant.growth.rootTypeAr} />
            <Field label="شكل التاج" value={plant.growth.crownShapeAr} />
            <Field
              label="طبيعة الأوراق"
              value={
                plant.growth.leafHabit === "evergreen"
                  ? "دائم الخضرة"
                  : plant.growth.leafHabit === "deciduous"
                    ? "متساقط الأوراق"
                    : plant.growth.leafHabit === "semi-deciduous"
                      ? "شبه متساقط"
                      : undefined
              }
            />
            <Field
              label="العمر المتوقع (سنة)"
              value={plant.growth.expectedLifespanYears ? `${plant.growth.expectedLifespanYears.min} – ${plant.growth.expectedLifespanYears.max}` : undefined}
            />
          </dl>
        </Section>

        {/* Planting & Care */}
        <Section icon={Scissors} title="الزراعة والعناية (Planting & Care)">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field label="أفضل موسم للزراعة" value={plant.care.bestPlantingSeasonAr} />
            <Field label="طريقة الإكثار" value={plant.care.propagationMethodAr} />
            <Field label="احتياجات التقليم" value={plant.care.pruningNeedsAr} />
            <Field label="مستوى العناية" value={plant.care.maintenanceLevel} />
            <Field label="التباعد الموصى به" value={plant.care.recommendedSpacingAr} />
            <Field label="الآفات والأمراض الرئيسية" value={plant.care.majorPestsAndDiseasesAr?.join("، ")} />
          </dl>
        </Section>

        {/* Flowering & Fruiting */}
        <Section icon={Flower2} title="الإزهار والإثمار (Flowering & Fruiting)">
          <div className="flex gap-2 mb-3">
            <span className={cn("text-xs px-2.5 py-1 rounded-full border", plant.bloom.hasFlowers ? "bg-primary/10 text-primary border-primary/30" : "bg-card-border/20 text-text-muted border-card-border")}>
              أزهار: {plant.bloom.hasFlowers ? "نعم" : "لا"}
            </span>
            <span className={cn("text-xs px-2.5 py-1 rounded-full border", plant.bloom.hasFruit ? "bg-primary/10 text-primary border-primary/30" : "bg-card-border/20 text-text-muted border-card-border")}>
              ثمار: {plant.bloom.hasFruit ? "نعم" : "لا"}
            </span>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field label="موسم الإزهار" value={plant.bloom.floweringSeasonAr} />
            <Field label="لون الأزهار" value={plant.bloom.flowerColorAr} />
            <Field label="العطر" value={plant.bloom.fragranceAr} />
            <Field label="موسم الإثمار" value={plant.bloom.fruitingSeasonAr} />
            <Field label="نوع الثمار" value={plant.bloom.fruitTypeAr} />
            <Field label="القيمة للملقحات" value={plant.bloom.pollinatorValueAr} />
          </dl>
        </Section>

        {/* Environmental Value */}
        <Section icon={Leaf} title="القيمة البيئية (Environmental Value)">
          <div className="flex flex-wrap gap-2">
            <YesNoBadge value={plant.ecology.supportsBiodiversity} labelAr="تنوع حيوي" />
            <YesNoBadge value={plant.ecology.supportsPollinators} labelAr="ملقحات" />
            <YesNoBadge value={plant.ecology.honeyProduction} labelAr="إنتاج عسل" />
            <YesNoBadge value={plant.ecology.soilStabilization} labelAr="تثبيت تربة" />
            <YesNoBadge value={plant.ecology.sandStabilization} labelAr="تثبيت رمال" />
            <YesNoBadge value={plant.ecology.desertificationControl} labelAr="مكافحة تصحر" />
            <YesNoBadge value={plant.ecology.vegetationCoverImprovement} labelAr="تحسين غطاء نباتي" />
            <YesNoBadge value={plant.ecology.grazingUse} labelAr="استخدام رعوي" />
            <YesNoBadge value={plant.ecology.desertConditionsTolerance} labelAr="تحمل ظروف صحراوية" />
          </div>
        </Section>

        {/* SEO / AI Search Data */}
        <Section icon={SearchIcon} title="بيانات SEO / البحث الذكي (SEO / AI Search Data)">
          <dl>
            <Field label="عنوان SEO (عربي)" value={plant.seo.seoTitleAr} />
            <Field label="عنوان SEO (إنجليزي)" value={plant.seo.seoTitleEn} />
            <Field label="الوصف التعريفي (عربي)" value={plant.seo.metaDescriptionAr} />
            <Field label="الوصف التعريفي (إنجليزي)" value={plant.seo.metaDescriptionEn} />
            <Field label="النص البديل للصورة (عربي)" value={plant.seo.altTextAr} />
            <Field label="الكلمات المفتاحية" value={plant.seo.keywords.join("، ")} />
            <Field label="وسوم البحث" value={plant.seo.searchTags.join("، ")} />
            <Field label="الرابط المقترح (Slug)" value={plant.seo.slugEn} />
          </dl>
        </Section>

        {/* Sources with provenance badges */}
        <Section icon={BookMarked} title="المصادر (Sources)">
          <ul className="space-y-2">
            {plant.sources.map((s, i) => {
              const provenance = classifySource(s.url);
              const label = PROVENANCE_LABELS[provenance];
              const isRealLink = s.url.startsWith("http");
              return (
                <li key={i} className="flex flex-col gap-1 pb-2 border-b border-card-border/50 last:border-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", label.colorClass)}>
                      {label.ar}
                    </span>
                  </div>
                  <p className="text-sm text-card-heading">{s.label}</p>
                  {isRealLink ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1 w-fit"
                    >
                      {s.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <p className="text-xs text-text-muted italic">{s.url}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Data Gaps */}
        <Section icon={AlertTriangle} title="الفجوات البحثية (Data Gaps)">
          {plant.dataGaps.length === 0 ? (
            <p className="text-sm text-text-muted">لا توجد فجوات مسجلة لهذا السجل.</p>
          ) : (
            <ul className="space-y-2">
              {plant.dataGaps.map((g, i) => (
                <li key={i} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-amber-500 shrink-0">•</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </main>
    </div>
  );
}
