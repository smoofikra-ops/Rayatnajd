import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ZoomIn, ArrowLeft, ArrowRight, MapPin, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSettings } from "../../contexts/SettingsContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
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

export default function ProjectsGallery() {
  const { t, language } = useSettings();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const featuredProjects = useMemo(() => getFeaturedProjects(), []);
  const allProjects = useMemo(() => getAllProjects(), []);

  const carouselItems: CarouselProjectItem[] = useMemo(() => {
    const videoItem: CarouselProjectItem = {
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-65.webp",
      nameAr: "عرض مرئي لمشاريع رايات نجد",
      nameEn: "Rayat Najd Projects Video Showcase",
      categoryAr: "مشاريع وطنية كبرى",
      categoryEn: "National Mega Projects",
      locationAr: "المملكة العربية السعودية",
      locationEn: "Kingdom of Saudi Arabia",
    };

    const projectItems: CarouselProjectItem[] = featuredProjects.map((p) => ({
      type: "image" as const,
      url: p.heroImage,
      nameAr: p.nameAr,
      nameEn: p.nameEn,
      categoryAr: p.categoryNameAr,
      categoryEn: p.categoryNameEn,
      locationAr: p.locationAr,
      locationEn: p.locationEn,
      slug: p.slug,
    }));

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

  const openLightbox = (idx: number) => setSelectedItemIndex(idx);
  const closeLightbox = () => setSelectedItemIndex(null);

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
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_28%] min-w-0 pl-4 rtl:pl-0 rtl:pr-4"
              >
                <div 
                  className="relative group/card rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 aspect-[4/3] flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-accent-gold/40 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
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

                    {/* Action Icon on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/20 p-3.5 rounded-full text-white backdrop-blur-md transform transition-transform duration-300 group-hover/card:scale-110">
                        {item.type === "video" ? <Play className="w-7 h-7 ml-0.5" /> : <ZoomIn className="w-7 h-7" />}
                      </div>
                    </div>

                    {item.type === "video" && (
                      <div className="absolute top-3 rtl:left-3 ltr:right-3 bg-accent-gold text-text-main p-2 rounded-full shadow-lg">
                        <Play className="w-4 h-4 ml-0.5" />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label={t("إغلاق", "Close")}
            >
              <X className="w-7 h-7" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {carouselItems[selectedItemIndex].type === "video" ? (
                <video
                  src={carouselItems[selectedItemIndex].url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                />
              ) : (
                <CloudinaryImage
                  src={carouselItems[selectedItemIndex].url}
                  alt={language === "ar" ? carouselItems[selectedItemIndex].nameAr : carouselItems[selectedItemIndex].nameEn}
                  width={1600}
                  lazy={false}
                  className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
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
