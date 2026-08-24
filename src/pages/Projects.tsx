import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  Filter, 
  Trees, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Layers,
  ChevronRight,
  Home
} from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import { 
  getAllProjects, 
  getProjectCategories, 
  Project 
} from "../data/projects";
import { ProjectCategory } from "../types/project";
import SEO from "../components/SEO";
import { CloudinaryImage } from "../components/cloudinary/CloudinaryImage";
import { ProjectMediaPlaceholder } from "../components/projects/ProjectMediaPlaceholder";

export default function Projects() {
  const { t, language } = useSettings();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "ongoing">("all");

  const categories = useMemo(() => getProjectCategories(), []);
  const allProjects = useMemo(() => getAllProjects(), []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (statusFilter !== "all" && project.status !== statusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchAr = project.nameAr.toLowerCase().includes(query) || 
                        project.descriptionAr.toLowerCase().includes(query) ||
                        project.locationAr.toLowerCase().includes(query) ||
                        project.categoryNameAr.toLowerCase().includes(query);
        const matchEn = project.nameEn.toLowerCase().includes(query) || 
                        project.descriptionEn.toLowerCase().includes(query) ||
                        project.locationEn.toLowerCase().includes(query) ||
                        project.categoryNameEn.toLowerCase().includes(query);
        return matchAr || matchEn;
      }
      return true;
    });
  }, [allProjects, selectedCategory, statusFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-main">
      <SEO 
        title={t("مشاريع رايات نجد | سجل الإنجازات والتشجير", "Rayat Najd Projects | Landmark Works")}
        description={t(
          "استكشف مشاريع رايات نجد الكبرى في التشجير البيئي، وتوريد النخيل، ونقل الأشجار المعمرة، وتطوير المشهد الحضري بالمملكة العربية السعودية.",
          "Explore Rayat Najd's flagship projects in environmental afforestation, palm supply, mature tree relocation, and urban landscaping across Saudi Arabia."
        )}
      />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-bg-primary">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url('https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-projects.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>{t("الرئيسية", "Home")}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-white/40" />
            <span className="text-accent-gold font-medium">{t("المشاريع", "Projects")}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-gold text-xs md:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>{t("سجل إنجازات رايات نجد", "Rayat Najd Proven Track Record")}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t("مشاريعنا الوطنية الكبرى", "Our Landmark National Projects")}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed">
              {t(
                "نفتخر بتنفيذ وإدارة أضخم مبادرات التشجير، وتوريد النخيل، وتطوير المساحات الخضراء، ونقل الأشجار المعمرة وفق أعلى المعايير الهندسية والبيئية لدعم مستهدفات رؤية 2030.",
                "We take pride in delivering landmark afforestation programs, palm supply, urban landscaping, and giant tree transplantations aligned with Vision 2030."
              )}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-accent-gold mb-1">+13</div>
              <div className="text-xs md:text-sm text-white/80">{t("مشروعاً وطنياً منجزاً", "National Projects")}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-accent-gold mb-1">+500,000</div>
              <div className="text-xs md:text-sm text-white/80">{t("شجرة وغرسة برية", "Trees & Saplings Planted")}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-accent-gold mb-1">+280</div>
              <div className="text-xs md:text-sm text-white/80">{t("شجرة معمرة تم نقلها", "Mature Trees Relocated")}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-accent-gold mb-1">98%</div>
              <div className="text-xs md:text-sm text-white/80">{t("متوسط نسبة الاستدامة والنجاح", "Average Survival Rate")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-bg-secondary/95 backdrop-blur-xl border-y border-card-border shadow-sm py-4">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]"
                        : "bg-card-background text-text-muted hover:text-text-main border border-card-border hover:bg-primary/5"
                    }`}
                  >
                    {language === "ar" ? cat.nameAr : cat.nameEn}
                  </button>
                );
              })}
            </div>

            {/* Search and Status Inputs */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 rtl:right-3 ltr:left-3 text-text-muted pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("ابحث في المشاريع...", "Search projects...")}
                  className="w-full bg-card-background border border-card-border rounded-xl rtl:pr-9 rtl:pl-3 ltr:pl-9 ltr:pr-3 py-2 text-xs md:text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute top-1/2 -translate-y-1/2 rtl:left-3 ltr:right-3 text-xs text-text-muted hover:text-text-main"
                  >
                    ✕
                  </button>
                )}
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                aria-label={t("تصفية حالة المشروع", "Filter by project status")}
                className="bg-card-background border border-card-border rounded-xl px-3 py-2 text-xs md:text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
              >
                <option value="all">{t("كل الحالات", "All Status")}</option>
                <option value="completed">{t("مكتمل", "Completed")}</option>
                <option value="ongoing">{t("قائم / جاري", "Ongoing")}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-text-muted">
              {t("عرض", "Showing")}{" "}
              <span className="font-bold text-primary">{filteredProjects.length}</span>{" "}
              {t("من أصل", "of")}{" "}
              <span className="font-bold text-text-main">{allProjects.length}</span>{" "}
              {t("مشروعاً", "projects")}
            </div>
            
            {(selectedCategory !== "all" || searchQuery !== "" || statusFilter !== "all") && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setStatusFilter("all");
                }}
                className="text-xs text-primary hover:underline font-semibold"
              >
                {t("إعادة ضبط التصفية", "Reset filters")}
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-card-background rounded-3xl border border-card-border p-8">
              <Trees className="w-16 h-16 text-text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-text-main mb-2">
                {t("لم يتم العثور على مشاريع مطابقة", "No matching projects found")}
              </h3>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                {t("جرب تعديل خيارات البحث أو التصفية للاطلاع على مشاريعنا الأخرى.", "Try adjusting your search criteria or filters to explore other projects.")}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setStatusFilter("all");
                }}
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                {t("عرض جميع المشاريع", "View All Projects")}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-card-background rounded-2xl md:rounded-3xl border border-card-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
                >
                  {/* Card Media Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                    {project.heroImage ? (
                      <>
                        <CloudinaryImage
                          src={project.heroImage}
                          alt={language === "ar" ? project.nameAr : project.nameEn}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-3 rtl:right-3 ltr:left-3 flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 rounded-lg bg-primary/90 backdrop-blur-md text-white text-xs font-bold shadow-sm">
                            {language === "ar" ? project.categoryNameAr : project.categoryNameEn}
                          </span>
                        </div>

                        <div className="absolute top-3 rtl:left-3 ltr:right-3">
                          {project.status === "completed" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
                              <CheckCircle2 className="w-3 h-3" />
                              {t("مكتمل", "Completed")}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
                              <Clock className="w-3 h-3" />
                              {t("قائم ومستمر", "Ongoing")}
                            </span>
                          )}
                        </div>

                        {/* Location Badge */}
                        <div className="absolute bottom-3 rtl:right-3 ltr:left-3 text-white flex items-center gap-1.5 text-xs drop-shadow-md">
                          <MapPin className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                          <span className="font-medium truncate max-w-[260px]">
                            {language === "ar" ? project.locationAr : project.locationEn}
                          </span>
                        </div>
                      </>
                    ) : (
                      <ProjectMediaPlaceholder
                        nameAr={project.nameAr}
                        nameEn={project.nameEn}
                        categoryNameAr={project.categoryNameAr}
                        categoryNameEn={project.categoryNameEn}
                        locationAr={project.locationAr}
                        locationEn={project.locationEn}
                        variant="card"
                      />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-text-main mb-2.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {language === "ar" ? project.nameAr : project.nameEn}
                      </h2>
                      
                      <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                        {language === "ar" ? project.shortDescriptionAr : project.shortDescriptionEn}
                      </p>

                      {/* Mini Stats Row */}
                      {project.stats && project.stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-bg-secondary border border-card-border/60">
                          {project.stats.slice(0, 2).map((stat, sIdx) => (
                            <div key={sIdx} className="text-center">
                              <div className="text-xs font-bold text-primary truncate">{stat.value}</div>
                              <div className="text-[10px] text-text-muted truncate">
                                {language === "ar" ? stat.labelAr : stat.labelEn}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-card-border flex items-center justify-between">
                      <span className="text-xs text-text-muted font-medium">
                        {project.year ? project.year : t("رايات نجد", "Rayat Najd")}
                      </span>
                      
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-primary hover:text-primary-dark group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all"
                      >
                        <span>{t("تفاصيل المشروع", "View Details")}</span>
                        {language === "ar" ? (
                          <ArrowLeft className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {t("هل تخطط لمشروع زراعي أو تشجير بيئي؟", "Planning an Afforestation or Landscape Project?")}
          </h2>
          <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "فريقنا الهندسي والزراعي في رايات نجد مستعد لتزويدك بأفضل الحلول والاستشارات الفنية وتوريد الشتلات والنخيل بأعلى معايير الجودة.",
              "Rayat Najd's agronomic and engineering team is ready to provide turnkey solutions, technical consultations, and premium nursery supply."
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="px-6 py-3.5 rounded-2xl bg-accent-gold text-text-main font-bold text-sm md:text-base hover:brightness-110 shadow-lg transition-all"
            >
              {t("طلب عرض سعر للمشروع", "Request a Project Quote")}
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm md:text-base backdrop-blur-md border border-white/20 transition-all"
            >
              {t("تواصل مع خبرائنا", "Contact Our Experts")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
