import { useState, useMemo, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ZoomIn, ArrowLeft, ArrowRight, MapPin, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSettings } from "../../contexts/SettingsContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import { ProjectMediaPlaceholder } from "../projects/ProjectMediaPlaceholder";
import { getFeaturedProjects, getAllProjects } from "../../data/projects";

interface CarouselProjectItem {
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  nameAr: string;
  nameEn: string;
  categoryAr?: string;
  categoryEn?: string;
  locationAr?: string;
  locationEn?: string;
  slug?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`;
  }
  return null;
}

export default function ProjectsGallery() {
  const { t, language } = useSettings();
  const navigate = useNavigate();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const featuredProjects = useMemo(() => getFeaturedProjects(), []);
  const allProjects = useMemo(() => getAllProjects(), []);

  const carouselItems: CarouselProjectItem[] = useMemo(() => {
    const videoItem: CarouselProjectItem = {
      type: "video",
      url: "https://youtu.be/cvKABrwq05M",
      thumbnailUrl: "https://img.youtube.com/vi/cvKABrwq05M/maxresdefault.jpg",
      nameAr: "عرض مرئي لمشاريع رايات نجد",
      nameEn: "Rayat Najd Projects Video Showcase",
      categoryAr: "مشاريع وطنية كبرى",
      categoryEn: "National Mega Projects",
      locationAr: "المملكة العربية السعودية",
      locationEn: "Kingdom of Saudi Arabia",
    };

    const projectItems: CarouselProjectItem[] = featuredProjects.map((p) => {
      const hasVideo = p.videos && p.videos.length > 0 && !!p.videos[0].url;
      return {
        type: hasVideo ? ("video" as const) : ("image" as const),
        url: hasVideo ? p.videos![0].url : (p.heroImage || p.primaryImage || ""),
        thumbnailUrl: p.heroImage || p.primaryImage || "",
        nameAr: p.nameAr,
        nameEn: p.nameEn,
        categoryAr: p.categoryNameAr,
        categoryEn: p.categoryNameEn,
        locationAr: p.locationAr,
        locationEn: p.locationEn,
        slug: p.slug,
      };
    });

    return [videoItem, ...projectItems];
  }, [featuredProjects]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      direction: language === "ar" ? "rtl" : "ltr",
      align: "start",
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5, stopOnMouseEnter: true })]
  );

  const handleCardClick = (item: CarouselProjectItem, index: number) => {
    const hasMedia = item.type === "video" ? !!item.url : !!item.url.trim();
    if (hasMedia) {
      setSelectedItemIndex(index);
    } else if (item.slug) {
      navigate(`/projects/${item.slug}`);
    }
  };

  const closeLightbox = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  // Keyboard shortcut (Escape key) to easily exit the video/image viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    if (selectedItemIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItemIndex, closeLightbox]);

  return (
    <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-md mb-4 leading-relaxed py-1"
          >
            {t("مشاريعنا الكبرى", "Our Landmark Projects")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/90 drop-shadow-sm mb-6"
          >
            {t(
              "نستعرض لكم أبرز مشاريعنا الوطنية في التشجير البيئي، توريد النخيل، وتطوير المشهد الحضري.",
              "Showcasing our prominent national projects in environmental afforestation, palms, and urban landscapes."
            )}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold/90 hover:bg-accent-gold text-text-main font-bold text-xs md:text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <span>{t("استعراض كافة المشاريع (13 مشروعاً)", "View All Projects (13 Projects)")}</span>
              {language === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="w-full relative px-0 group">
        <div className="overflow-hidden" ref={emblaRef} dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="flex">
            {carouselItems.map((item, index) => {
              const hasMedia = item.type === "video" ? !!item.url : !!item.url.trim();

              return (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_28%] min-w-0 pl-4 rtl:pl-0 rtl:pr-4"
                >
                  <div 
                    className="relative group/card rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 aspect-[4/3] flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-accent-gold/40 cursor-pointer"
                    onClick={() => handleCardClick(item, index)}
                  >
                    {hasMedia ? (
                      <div className="relative flex-grow overflow-hidden">
                        <CloudinaryImage
                          src={item.type === "video" ? (item.thumbnailUrl || "") : item.url}
                          alt={language === "ar" ? item.nameAr : item.nameEn}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                        {/* Top Badges */}
                        {item.categoryAr && (
                          <div className="absolute top-3 rtl:right-3 ltr:left-3">
                            <span className="px-2.5 py-1 rounded-lg bg-primary/90 backdrop-blur-md text-white text-[11px] font-bold shadow-sm">
                              {language === "ar" ? item.categoryAr : item.categoryEn}
                            </span>
                          </div>
                        )}

                        {/* Action Icon on Hover / Always visible play button for videos */}
                        {item.type === "video" ? (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/90 border-2 border-white shadow-2xl flex items-center justify-center text-text-main transform transition-transform duration-300 group-hover/card:scale-115 group-hover/card:bg-accent-gold">
                              <Play className="w-8 h-8 fill-current rtl:mr-1 ltr:ml-1 text-[#0f2e1f]" />
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white/20 p-3.5 rounded-full text-white backdrop-blur-md transform transition-transform duration-300 group-hover/card:scale-110">
                              <ZoomIn className="w-7 h-7" />
                            </div>
                          </div>
                        )}

                        {item.type === "video" && (
                          <div className="absolute top-3 rtl:left-3 ltr:right-3 bg-red-600/90 text-white px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                            <Play className="w-3 h-3 fill-current" />
                            <span>{t("فيديو", "Video")}</span>
                          </div>
                        )}

                        {/* Bottom Details */}
                        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                          <h3 className="font-bold text-sm md:text-base leading-snug drop-shadow line-clamp-1 mb-1">
                            {language === "ar" ? item.nameAr : item.nameEn}
                          </h3>
                          
                          {item.locationAr && (
                            <div className="flex items-center justify-between text-xs text-white/80">
                              <div className="flex items-center gap-1 truncate max-w-[80%]">
                                <MapPin className="w-3 h-3 text-accent-gold shrink-0" />
                                <span className="truncate">{language === "ar" ? item.locationAr : item.locationEn}</span>
                              </div>
                              
                              {item.slug && (
                                <Link
                                  to={`/projects/${item.slug}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-accent-gold hover:text-white p-1"
                                  title={t("فتح صفحة المشروع", "Open project page")}
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </Link>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <ProjectMediaPlaceholder
                        nameAr={item.nameAr}
                        nameEn={item.nameEn}
                        categoryNameAr={item.categoryAr}
                        categoryNameEn={item.categoryEn}
                        locationAr={item.locationAr}
                        locationEn={item.locationEn}
                        variant="carousel"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-8 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Top Bar with Clear Close Controls */}
            <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-none">
              <div className="text-white/90 text-sm font-semibold truncate max-w-[70%] drop-shadow pointer-events-auto">
                {language === "ar" 
                  ? carouselItems[selectedItemIndex].nameAr 
                  : carouselItems[selectedItemIndex].nameEn}
              </div>
              
              <button
                className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/20 hover:bg-red-600/90 text-white font-medium text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                aria-label={t("إغلاق المشغل", "Close Player")}
              >
                <span>{t("إغلاق (Esc)", "Close (Esc)")}</span>
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 300 }}
              className="relative w-full max-w-5xl flex flex-col items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {carouselItems[selectedItemIndex].type === "video" ? (
                <div className="w-full aspect-video max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20">
                  {getYouTubeEmbedUrl(carouselItems[selectedItemIndex].url) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(carouselItems[selectedItemIndex].url)!}
                      title={language === "ar" ? carouselItems[selectedItemIndex].nameAr : carouselItems[selectedItemIndex].nameEn}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={carouselItems[selectedItemIndex].url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              ) : (
                <CloudinaryImage
                  src={carouselItems[selectedItemIndex].url}
                  alt={language === "ar" ? carouselItems[selectedItemIndex].nameAr : carouselItems[selectedItemIndex].nameEn}
                  width={1600}
                  lazy={false}
                  className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
                />
              )}

              {carouselItems[selectedItemIndex].slug && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-white text-sm font-semibold">
                    {language === "ar" ? carouselItems[selectedItemIndex].nameAr : carouselItems[selectedItemIndex].nameEn}
                  </span>
                  <Link
                    to={`/projects/${carouselItems[selectedItemIndex].slug}`}
                    className="px-4 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    {t("عرض التفاصيل الكاملة للمشروع", "View Full Project Details")}
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

