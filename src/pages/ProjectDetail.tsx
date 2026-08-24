import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  ZoomIn, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Home, 
  Sparkles, 
  FileText, 
  Trees, 
  Layers, 
  ShieldCheck, 
  Send,
  Camera,
  Info
} from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import { 
  getProjectBySlug, 
  getProjectsByCategory, 
  getAllProjects, 
  Project 
} from "../data/projects";
import SEO from "../components/SEO";
import { CloudinaryImage } from "../components/cloudinary/CloudinaryImage";
import { ProjectMediaPlaceholder } from "../components/projects/ProjectMediaPlaceholder";
import { toast } from "sonner";

const IMAGES_PER_PAGE = 12;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useSettings();
  const navigate = useNavigate();
  
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleImagesCount, setVisibleImagesCount] = useState<number>(IMAGES_PER_PAGE);

  const project = useMemo(() => {
    if (!slug) return undefined;
    return getProjectBySlug(slug);
  }, [slug]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return getProjectsByCategory(project.category)
      .filter((p) => p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-main flex items-center justify-center pt-24 pb-16 px-4">
        <div className="text-center max-w-md bg-card-background p-8 rounded-3xl border border-card-border shadow-lg">
          <Trees className="w-16 h-16 text-text-muted mx-auto mb-4 opacity-40" />
          <h1 className="text-2xl font-bold mb-2">{t("المشروع غير موجود", "Project Not Found")}</h1>
          <p className="text-text-muted text-sm mb-6">
            {t("عذراً، لم نتمكن من العثور على بيانات هذا المشروع أو قد تم نقله.", "Sorry, the requested project could not be found.")}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            {language === "ar" ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{t("العودة لدليل المشاريع", "Back to Projects")}</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: language === "ar" ? project.nameAr : project.nameEn,
        text: language === "ar" ? project.shortDescriptionAr : project.shortDescriptionEn,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(t("تم نسخ رابط المشروع بنجاح", "Project link copied to clipboard"));
    }
  };

  const nextLightboxImage = () => {
    if (selectedImageIndex === null || !project.gallery?.length) return;
    setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length);
  };

  const prevLightboxImage = () => {
    if (selectedImageIndex === null || !project.gallery?.length) return;
    setSelectedImageIndex((selectedImageIndex - 1 + project.gallery.length) % project.gallery.length);
  };

  const galleryItems = project.gallery || [];
  const visibleGallery = galleryItems.slice(0, visibleImagesCount);
  const hasMoreImages = visibleImagesCount < galleryItems.length;

  return (
    <div className="min-h-screen bg-bg-primary text-text-main">
      <SEO
        title={`${language === "ar" ? project.nameAr : project.nameEn} | رايات نجد`}
        description={language === "ar" ? project.shortDescriptionAr : project.shortDescriptionEn}
        ogImage={project.heroImage || undefined}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-primary-dark/95 via-primary-dark/90 to-bg-primary text-white">
        {project.heroImage ? (
          <div 
            className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
        ) : (
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5da87b_1px,transparent_1px)] [background-size:24px_24px]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>{t("الرئيسية", "Home")}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-white/40" />
            <Link to="/projects" className="hover:text-white transition-colors">
              <span>{t("المشاريع", "Projects")}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-white/40" />
            <span className="text-accent-gold font-medium truncate max-w-[280px]">
              {language === "ar" ? project.nameAr : project.nameEn}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-xl bg-primary text-white text-xs md:text-sm font-bold shadow-sm">
                  {language === "ar" ? project.categoryNameAr : project.categoryNameEn}
                </span>

                {project.status === "completed" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/90 text-white text-xs md:text-sm font-semibold backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t("مشروع منجز", "Completed Project")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/90 text-white text-xs md:text-sm font-semibold backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5" />
                    {t("مشروع قائم ومستمر", "Ongoing Execution")}
                  </span>
                )}

                {galleryItems.length > 0 ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
                    <Camera className="w-3.5 h-3.5 text-accent-gold" />
                    <span>{galleryItems.length} {t("صورة موثقة", "Photos")}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md text-white/80 text-xs font-medium">
                    <Sparkles className="w-3 h-3 text-accent-gold" />
                    <span>{t("الوسائط قيد التحديث", "Media Updating")}</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {language === "ar" ? project.nameAr : project.nameEn}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
                {language === "ar" ? project.shortDescriptionAr : project.shortDescriptionEn}
              </p>
            </div>

            {/* Quick Metadata Card */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-xs md:text-sm text-white/90 space-y-2.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
                  <span className="font-semibold">{t("الموقع:", "Location:")}</span>
                  <span className="text-white/80">{language === "ar" ? project.locationAr : project.locationEn}</span>
                </div>
                {project.clientAr && (
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-accent-gold shrink-0" />
                    <span className="font-semibold">{t("الجهة:", "Client:")}</span>
                    <span className="text-white/80">{language === "ar" ? project.clientAr : project.clientEn}</span>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent-gold shrink-0" />
                    <span className="font-semibold">{t("الفترة الزمنية:", "Timeline:")}</span>
                    <span className="text-white/80">{project.year}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                  className="flex-1 py-3 px-4 rounded-xl bg-accent-gold hover:brightness-110 text-text-main font-bold text-xs md:text-sm shadow-md transition-all text-center"
                >
                  {t("طلب مشروع مماثل", "Request Similar Project")}
                </button>
                <button
                  onClick={handleShare}
                  aria-label={t("مشاركة المشروع", "Share project")}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      {project.stats && project.stats.length > 0 && (
        <section className="py-6 bg-bg-secondary border-b border-card-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="bg-card-background p-4 rounded-2xl border border-card-border text-center shadow-sm">
                  <div className="text-xl md:text-2xl lg:text-3xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-muted font-medium">
                    {language === "ar" ? stat.labelAr : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content & Gallery */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left/Main Column: Overview & Highlights & Gallery */}
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Overview */}
              <div className="bg-card-background rounded-3xl p-6 md:p-8 border border-card-border shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-text-main mb-4 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>{t("نطاق العمل والتفاصيل الفنية", "Scope of Work & Technical Overview")}</span>
                </h2>
                <p className="text-sm md:text-base text-text-muted leading-relaxed whitespace-pre-line">
                  {language === "ar" ? project.descriptionAr : project.descriptionEn}
                </p>
              </div>

              {/* Key Highlights */}
              {project.highlightsAr && project.highlightsAr.length > 0 && (
                <div className="bg-card-background rounded-3xl p-6 md:p-8 border border-card-border shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold text-text-main mb-6 flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span>{t("أبرز ركائز ومعايير التنفيذ", "Key Execution Highlights & Standards")}</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(language === "ar" ? project.highlightsAr : project.highlightsEn || project.highlightsAr).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-bg-secondary border border-card-border/60">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-text-main leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Section */}
              <div className="bg-card-background rounded-3xl p-6 md:p-8 border border-card-border shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-text-main flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-primary" />
                    <span>{t("معرض صور وتوثيق المشروع", "Project Photo Documentation")}</span>
                  </h2>
                  {galleryItems.length > 0 && (
                    <span className="text-xs text-text-muted font-semibold">
                      {galleryItems.length} {t("صور موثقة", "Photos")}
                    </span>
                  )}
                </div>

                {galleryItems.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {visibleGallery.map((item, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedImageIndex(imgIdx)}
                          className="group/img relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-card-border bg-bg-secondary shadow-xs hover:shadow-md transition-all"
                        >
                          <CloudinaryImage
                            src={item.url}
                            alt={language === "ar" ? item.captionAr || project.nameAr : item.captionEn || project.nameEn}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                              <ZoomIn className="w-6 h-6" />
                            </div>
                          </div>
                          {(item.captionAr || item.captionEn) && (
                            <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent text-[11px] text-white/90 truncate">
                              {language === "ar" ? item.captionAr : item.captionEn}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Pagination / Load More */}
                    {hasMoreImages && (
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => setVisibleImagesCount((prev) => prev + IMAGES_PER_PAGE)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-secondary hover:bg-primary/10 border border-card-border hover:border-primary/40 text-primary font-bold text-xs md:text-sm transition-all"
                        >
                          <span>
                            {t(
                              `عرض المزيد من الصور (${galleryItems.length - visibleImagesCount} متبقية)`,
                              `Load More Photos (${galleryItems.length - visibleImagesCount} remaining)`
                            )}
                          </span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary border border-card-border/80 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Sparkles className="w-7 h-7 text-accent-gold" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-text-main text-sm md:text-base">
                        {t("الوسائط الميدانية قيد التحديث والتوثيق", "Field Media Currently Being Updated")}
                      </h3>
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                        {t(
                          "يجري رفع وتحديث وتوثيق الصور والفيديوهات الحية لهذا المشروع المعتمد عبر خوادم Bunny CDN لتوفير أعلى دقة وسرعة تصفح.",
                          "High-resolution field media for this approved project is currently being synced via Bunny CDN."
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar Actions & Related Projects */}
            <div className="lg:col-span-4 space-y-8">
              {/* Consultation Card */}
              <div className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-3xl p-6 md:p-8 shadow-lg">
                <Sparkles className="w-8 h-8 text-accent-gold mb-3" />
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {t("هل ترغب بتنفيذ مشروع مماثل؟", "Interested in a Similar Project?")}
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-6">
                  {t(
                    "نقدم دراسات فنية، وتوريد مباشر من مشاتلنا، وتنفيذ وإشراف هندسي متكامل لجميع المشاريع الزراعية والبيئية.",
                    "We offer technical site studies, direct nursery supply, and turnkey engineering supervision."
                  )}
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                  className="w-full py-3 rounded-xl bg-accent-gold hover:brightness-110 text-text-main font-bold text-sm shadow-md transition-all mb-3 text-center"
                >
                  {t("طلب عرض سعر مخصص", "Request Custom Quote")}
                </button>
                <Link
                  to="/contact"
                  className="block text-center w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
                >
                  {t("تواصل مع الإدارة الفنية", "Contact Technical Team")}
                </Link>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="bg-card-background rounded-3xl p-6 border border-card-border shadow-sm">
                  <h4 className="text-sm font-bold text-text-main mb-3">{t("الكلمات المفتاحية", "Tags")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-bg-secondary text-text-muted text-xs border border-card-border/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-card-background rounded-3xl p-6 border border-card-border shadow-sm">
                  <h3 className="text-base font-bold text-text-main mb-4">{t("مشاريع ذات صلة", "Related Projects")}</h3>
                  <div className="space-y-4">
                    {relatedProjects.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/projects/${rel.slug}`}
                        className="group flex gap-3 items-center p-2 rounded-xl hover:bg-bg-secondary transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-bg-secondary">
                          {rel.heroImage ? (
                            <CloudinaryImage
                              src={rel.heroImage}
                              alt={language === "ar" ? rel.nameAr : rel.nameEn}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          ) : (
                            <ProjectMediaPlaceholder
                              nameAr={rel.nameAr}
                              nameEn={rel.nameEn}
                              categoryNameAr={rel.categoryNameAr}
                              categoryNameEn={rel.categoryNameEn}
                              locationAr={rel.locationAr}
                              locationEn={rel.locationEn}
                              variant="compact"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs md:text-sm font-bold text-text-main group-hover:text-primary transition-colors truncate">
                            {language === "ar" ? rel.nameAr : rel.nameEn}
                          </h4>
                          <p className="text-[11px] text-text-muted truncate mt-0.5">
                            {language === "ar" ? rel.locationAr : rel.locationEn}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && galleryItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label={t("إغلاق", "Close")}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            {galleryItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightboxImage();
                }}
                aria-label={t("الصورة السابقة", "Previous image")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {galleryItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightboxImage();
                }}
                aria-label={t("الصورة التالية", "Next image")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image & Caption */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryItems[selectedImageIndex] && (
                <>
                  <CloudinaryImage
                    src={galleryItems[selectedImageIndex].url}
                    alt="Enlarged view"
                    width={1800}
                    lazy={false}
                    className="max-w-full max-h-[75vh] rounded-2xl shadow-2xl object-contain"
                  />
                  {(galleryItems[selectedImageIndex].captionAr || galleryItems[selectedImageIndex].captionEn) && (
                    <div className="mt-4 text-center text-white/90 text-sm max-w-xl bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl">
                      {language === "ar" 
                        ? galleryItems[selectedImageIndex].captionAr 
                        : galleryItems[selectedImageIndex].captionEn}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
