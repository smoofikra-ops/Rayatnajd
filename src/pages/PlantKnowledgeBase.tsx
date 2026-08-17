import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Search,
  Leaf,
  Sprout,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  ChevronDown,
  X,
} from "lucide-react";
import { plantDatabase } from "../data/plantDatabase";
import { getVerifiedImageForSku } from "../data/plantImageAssets";
import { PRIMARY_CATEGORIES, type PlantProduct, type PrimaryCategoryId, type ToleranceLevel, type WaterNeedLevel } from "../types/plant";
import {
  getCommercialStatus,
  needsHumanReviewEntries,
  COMMERCIAL_STATUS_LABELS,
  type CommercialStatus,
} from "../data/plantCommercialStatus";
import { cn } from "../lib/utils";

// ─── helpers ──────────────────────────────────────────────────────────────

function extractSynonyms(scientificName: string): string[] {
  const matches = [...scientificName.matchAll(/syn\.\s*([^,)]+)/gi)];
  return matches.map((m) => m[1].trim());
}

function isNative(p: PlantProduct): boolean {
  return p.tags.some((t) => /native/i.test(t));
}

function matchesSearch(p: PlantProduct, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  const haystack = [
    p.nameAr,
    p.nameEn,
    p.scientificName,
    p.localNameAr ?? "",
    ...extractSynonyms(p.scientificName),
    ...p.tags,
    getCommercialStatus(p.sku) === "rayat-najd-confirmed"
      ? ""
      : "",
  ]
    .join(" | ")
    .toLowerCase();
  return haystack.includes(q);
}

const STATUS_DOT: Record<CommercialStatus, string> = {
  "rayat-najd-confirmed": "bg-primary",
  "knowledge-base": "bg-text-muted",
  "needs-human-review": "bg-amber-500",
};

const STATUS_BADGE_CLASS: Record<CommercialStatus, string> = {
  "rayat-najd-confirmed": "bg-primary/10 text-primary border-primary/30",
  "knowledge-base": "bg-card-border/40 text-text-muted border-card-border",
  "needs-human-review": "bg-amber-500/10 text-amber-600 border-amber-500/30",
};

const TOLERANCE_OPTIONS: ToleranceLevel[] = ["low", "medium", "high", "very-high"];
const WATER_OPTIONS: WaterNeedLevel[] = ["low", "medium", "high"];

const TOLERANCE_LABEL: Record<ToleranceLevel, string> = {
  low: "منخفضة",
  medium: "متوسطة",
  high: "عالية",
  "very-high": "عالية جدًا",
};
const WATER_LABEL: Record<WaterNeedLevel, string> = {
  low: "منخفض",
  medium: "متوسط",
  high: "مرتفع",
};

const USE_FLAGS: { key: keyof PlantProduct["usage"]; labelAr: string }[] = [
  { key: "suitableForUrbanLandscaping", labelAr: "تشجير حضري" },
  { key: "suitableForGardens", labelAr: "حدائق" },
  { key: "suitableForRoads", labelAr: "طرقات" },
  { key: "suitableForFarms", labelAr: "مزارع" },
  { key: "suitableForGovernmentProjects", labelAr: "مشاريع حكومية" },
  { key: "suitableForWindbreaks", labelAr: "مصدات رياح" },
  { key: "suitableForDesertificationControl", labelAr: "مكافحة تصحر" },
  { key: "suitableForEnvironmentalAfforestation", labelAr: "تشجير بيئي" },
];

// ─── small UI atoms ─────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
  active,
  onClick,
}: {
  icon: typeof Leaf;
  label: string;
  value: number;
  accent: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 min-w-[150px] text-right rounded-2xl border p-4 sm:p-5 transition-all",
        "bg-card-background border-card-border hover:border-primary/40",
        active && "ring-2 ring-primary border-primary/50"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", accent)}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-card-heading">{value}</span>
      </div>
      <p className="text-xs sm:text-sm text-text-muted">{label}</p>
    </button>
  );
}

function PlaceholderThumb({ categoryId }: { categoryId: PrimaryCategoryId }) {
  return (
    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent-gold/10 flex items-center justify-center border border-card-border">
      <Leaf className="w-10 h-10 text-primary/40" strokeWidth={1.5} />
      <span className="sr-only">{categoryId}</span>
    </div>
  );
}

function PlantCard({ p }: { key?: string; p: PlantProduct }) {
  const status = getCommercialStatus(p.sku);
  const category = PRIMARY_CATEGORIES.find((c) => c.id === p.primaryCategory);
  // Only SKUs that survived the visual Bunny-CDN audit's no-guessing rule get
  // a real photo here; everything else keeps the PlaceholderThumb.
  const verifiedImage = getVerifiedImageForSku(p.sku);
  return (
    <Link
      to={`/internal/plant-kb/${p.sku}`}
      className="group block rounded-2xl border border-card-border bg-card-background p-4 hover:shadow-lg hover:border-primary/40 transition-all"
    >
      {verifiedImage ? (
        <div className="w-full h-32 rounded-xl overflow-hidden border border-card-border">
          <img
            src={verifiedImage.url}
            alt={p.seo.altTextEn}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <PlaceholderThumb categoryId={p.primaryCategory} />
      )}
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-card-heading truncate">{p.nameAr}</h3>
          <p className="text-xs text-text-muted truncate">{p.nameEn}</p>
        </div>
        <span
          className={cn("shrink-0 w-2.5 h-2.5 rounded-full mt-1.5", STATUS_DOT[status])}
          title={COMMERCIAL_STATUS_LABELS[status].ar}
        />
      </div>
      <p className="text-xs italic text-text-muted mt-1 truncate">{p.scientificName}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="text-[10px] px-2 py-0.5 rounded-full border bg-primary/5 border-primary/20 text-primary">
          {category?.nameAr}
        </span>
        <span className={cn("text-[10px] px-2 py-0.5 rounded-full border", STATUS_BADGE_CLASS[status])}>
          {COMMERCIAL_STATUS_LABELS[status].ar}
        </span>
      </div>
      {p.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-card-border/30 text-text-muted">
              {t}
            </span>
          ))}
          {p.tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 text-text-muted">+{p.tags.length - 3}</span>
          )}
        </div>
      )}
      <p className="sku-tag text-[10px] text-text-muted/70 mt-2">{p.sku}</p>
    </Link>
  );
}

function NeedsReviewCard({
  entry,
}: {
  key?: string;
  entry: (typeof needsHumanReviewEntries)[number];
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-right rounded-2xl border-2 border-dashed border-amber-500/40 bg-amber-500/5 p-4 hover:border-amber-500/70 transition-all"
      >
        <div className="w-full h-32 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
          <AlertTriangle className="w-10 h-10 text-amber-500/60" strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-card-heading mt-3">{entry.nameAsWritten}</h3>
        <p className="text-xs text-amber-600 mt-1">لا يوجد Plant Record بعد — يحتاج مراجعة بشرية</p>
        {entry.internalQty !== undefined && (
          <p className="text-[10px] text-text-muted mt-1">الكمية في بيانات رايات نجد: {entry.internalQty.toLocaleString("en-US")}</p>
        )}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card-background rounded-2xl border border-card-border max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-card-heading flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                {entry.nameAsWritten}
              </h3>
              <button onClick={() => setOpen(false)} className="text-text-muted hover:text-card-heading">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">{entry.reason}</p>
            {entry.internalQty !== undefined && (
              <p className="text-xs text-text-muted mt-4 pt-4 border-t border-card-border">
                الكمية الواردة في ملف رايات نجد الداخلي: <strong>{entry.internalQty.toLocaleString("en-US")}</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── main page ──────────────────────────────────────────────────────────

export default function PlantKnowledgeBase() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CommercialStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<PrimaryCategoryId | "all">("all");
  const [showFilters, setShowFilters] = useState(false);
  const [nativeFilter, setNativeFilter] = useState<"all" | "native" | "non-native">("all");
  const [droughtFilter, setDroughtFilter] = useState<ToleranceLevel | "all">("all");
  const [salinityFilter, setSalinityFilter] = useState<ToleranceLevel | "all">("all");
  const [waterFilter, setWaterFilter] = useState<WaterNeedLevel | "all">("all");
  const [regionFilter, setRegionFilter] = useState<"all" | "documented">("all");
  const [useFilter, setUseFilter] = useState<string>("all");

  const stats = useMemo(() => {
    const total = plantDatabase.length;
    const confirmed = plantDatabase.filter((p) => getCommercialStatus(p.sku) === "rayat-najd-confirmed").length;
    const kbOnly = total - confirmed;
    const needsReview = needsHumanReviewEntries.length;
    const byCategory = PRIMARY_CATEGORIES.map((c) => ({
      ...c,
      count: plantDatabase.filter((p) => p.primaryCategory === c.id).length,
    }));
    return { total, confirmed, kbOnly, needsReview, byCategory };
  }, []);

  const filtered = useMemo(() => {
    return plantDatabase.filter((p) => {
      if (!matchesSearch(p, search)) return false;
      if (statusFilter !== "all" && getCommercialStatus(p.sku) !== statusFilter) return false;
      if (categoryFilter !== "all" && p.primaryCategory !== categoryFilter) return false;
      if (nativeFilter === "native" && !isNative(p)) return false;
      if (nativeFilter === "non-native" && isNative(p)) return false;
      if (droughtFilter !== "all" && p.climate.droughtTolerance !== droughtFilter) return false;
      if (salinityFilter !== "all" && p.climate.salinityTolerance !== salinityFilter) return false;
      if (waterFilter !== "all" && p.irrigation.level !== waterFilter) return false;
      if (regionFilter === "documented" && !(p.regions.bestRegions && p.regions.bestRegions.length > 0)) return false;
      if (useFilter !== "all" && !(p.usage as unknown as Record<string, unknown>)[useFilter]) return false;
      return true;
    });
  }, [search, statusFilter, categoryFilter, nativeFilter, droughtFilter, salinityFilter, waterFilter, regionFilter, useFilter]);

  const activeFilterCount = [nativeFilter, droughtFilter, salinityFilter, waterFilter, regionFilter, useFilter].filter(
    (f) => f !== "all"
  ).length;

  return (
    <div dir="rtl" className="min-h-screen bg-bg-secondary text-text-main">
      <Helmet>
        <title>Rayat Najd Plant Knowledge Base — معاينة داخلية</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* internal banner */}
      <div className="bg-primary-dark text-white text-center text-xs sm:text-sm py-2 px-4">
        معاينة داخلية للمراجعة فقط — Read Only — غير مرتبطة بالموقع العام أو الكتالوج
      </div>

      <header className="border-b border-card-border bg-card-background/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-card-heading">Rayat Najd Plant Knowledge Base</h1>
              <p className="text-xs text-text-muted">قاعدة المعرفة النباتية — معاينة داخلية</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* dashboard stats */}
        <section className="flex flex-wrap gap-3">
          <StatCard
            icon={BookOpen}
            label="Total Plant Records"
            value={stats.total}
            accent="bg-primary/10 text-primary"
            active={statusFilter === "all"}
            onClick={() => setStatusFilter("all")}
          />
          <StatCard
            icon={ShieldCheck}
            label="Rayat Najd Confirmed Products"
            value={stats.confirmed}
            accent="bg-primary/10 text-primary"
            active={statusFilter === "rayat-najd-confirmed"}
            onClick={() => setStatusFilter("rayat-najd-confirmed")}
          />
          <StatCard
            icon={BookOpen}
            label="Knowledge Base Only"
            value={stats.kbOnly}
            accent="bg-text-muted/10 text-text-muted"
            active={statusFilter === "knowledge-base"}
            onClick={() => setStatusFilter("knowledge-base")}
          />
          <StatCard
            icon={AlertTriangle}
            label="Needs Human Review"
            value={stats.needsReview}
            accent="bg-amber-500/10 text-amber-600"
          />
        </section>

        {/* category tiles */}
        <section>
          <h2 className="text-sm font-bold text-text-muted mb-2">الفئات (Categories)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            <button
              onClick={() => setCategoryFilter("all")}
              className={cn(
                "text-right rounded-xl border p-3 text-xs transition-all bg-card-background border-card-border hover:border-primary/40",
                categoryFilter === "all" && "ring-2 ring-primary border-primary/50"
              )}
            >
              <span className="block font-bold text-card-heading">الكل</span>
              <span className="text-text-muted">{stats.total}</span>
            </button>
            {stats.byCategory.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoryFilter(c.id)}
                className={cn(
                  "text-right rounded-xl border p-3 text-xs transition-all bg-card-background border-card-border hover:border-primary/40",
                  categoryFilter === c.id && "ring-2 ring-primary border-primary/50"
                )}
              >
                <span className="block font-bold text-card-heading truncate">{c.nameAr}</span>
                <span className="text-text-muted">{c.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* search + filters */}
        <section className="space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث بالاسم العربي، الإنجليزي، العلمي، المرادفات، أو الوسوم... (مثال: سدر أو Ziziphus)"
                className="w-full h-12 pr-11 pl-4 rounded-xl bg-card-background border border-card-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
              <Search className="absolute top-1/2 -translate-y-1/2 right-4 w-4 h-4 text-text-muted" />
            </div>
            <button
              onClick={() => setShowFilters((s) => !s)}
              className={cn(
                "h-12 px-4 rounded-xl border flex items-center gap-2 text-sm shrink-0",
                "bg-card-background border-card-border hover:border-primary/40",
                activeFilterCount > 0 && "border-primary/50 text-primary"
              )}
            >
              فلاتر إضافية
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown className={cn("w-4 h-4 transition-transform", showFilters && "rotate-180")} />
            </button>
          </div>

          {showFilters && (
            <div className="rounded-2xl border border-card-border bg-card-background p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Native / Non-Native</label>
                <select
                  value={nativeFilter}
                  onChange={(e) => setNativeFilter(e.target.value as typeof nativeFilter)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  <option value="native">أصيل / Native</option>
                  <option value="non-native">غير أصيل / Non-Native</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Drought Tolerance</label>
                <select
                  value={droughtFilter}
                  onChange={(e) => setDroughtFilter(e.target.value as typeof droughtFilter)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  {TOLERANCE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {TOLERANCE_LABEL[t]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Salinity Tolerance</label>
                <select
                  value={salinityFilter}
                  onChange={(e) => setSalinityFilter(e.target.value as typeof salinityFilter)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  {TOLERANCE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {TOLERANCE_LABEL[t]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Water Requirement</label>
                <select
                  value={waterFilter}
                  onChange={(e) => setWaterFilter(e.target.value as typeof waterFilter)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  {WATER_OPTIONS.map((w) => (
                    <option key={w} value={w}>
                      {WATER_LABEL[w]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Saudi Region Suitability</label>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value as typeof regionFilter)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  <option value="documented">موثّق مناطقيًا فقط</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Landscape Use</label>
                <select
                  value={useFilter}
                  onChange={(e) => setUseFilter(e.target.value)}
                  className="w-full h-9 rounded-lg border border-card-border bg-bg-secondary px-2 text-sm"
                >
                  <option value="all">الكل</option>
                  {USE_FLAGS.map((u) => (
                    <option key={u.key} value={u.key}>
                      {u.labelAr}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </section>

        {/* results */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-text-muted">
              عرض <strong className="text-card-heading">{filtered.length}</strong> من {stats.total} سجلًا
              {statusFilter === "all" && ` + ${needsHumanReviewEntries.length} بانتظار المراجعة`}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <PlantCard key={p.sku} p={p} />
            ))}
            {statusFilter === "all" &&
              categoryFilter === "all" &&
              activeFilterCount === 0 &&
              !search.trim() &&
              needsHumanReviewEntries.map((entry) => <NeedsReviewCard key={entry.nameAsWritten} entry={entry} />)}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-muted">لا توجد نتائج مطابقة لهذا البحث/الفلترة.</div>
          )}
        </section>
      </main>
    </div>
  );
}
