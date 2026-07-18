import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ZoomIn } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSettings } from "../../contexts/SettingsContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import { mediaData } from "../../data/media";

interface ProjectItem {
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string; // For video
  nameAr: string;
  nameEn: string;
}

const projects: ProjectItem[] = [
  {
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    nameAr: "عرض مرئي لمشاريعنا",
    nameEn: "Video showcase of our projects",
  },
  ...mediaData.gallery
    .filter((img: any) => img.category === "projects")
    .map((img: any, idx: number) => ({
      type: "image" as const,
      url: img.url,
      nameAr: `مشروع ${idx + 1}`,
      nameEn: `Project ${idx + 1}`,
    }))
];

export default function ProjectsGallery() {
  const { t, language } = useSettings();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
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
    <section id="projects" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2"
          >
            {t("مشاريعنا", "Our Projects")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted mb-8"
          >
            {t(
              "نستعرض لكم أبرز مشاريعنا التي قمنا بتنفيذها.",
              "We showcase our most prominent executed projects."
            )}
          </motion.p>
        </div>
      </div>

      <div className="w-full relative px-0 group">
        <div className="overflow-hidden" ref={emblaRef} dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0 pl-4 rtl:pl-0 rtl:pr-4 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative group/card rounded-2xl overflow-hidden shadow-md bg-white aspect-[4/3] flex flex-col transition-all duration-300 hover:shadow-xl">
                  <div className="relative flex-grow overflow-hidden">
                    <CloudinaryImage
                      src={project.type === "video" ? (project.thumbnailUrl || "") : project.url}
                      alt={language === "ar" ? project.nameAr : project.nameEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/20 p-4 rounded-full text-white backdrop-blur-md transform transition-transform duration-300 group-hover/card:scale-110">
                        {project.type === "video" ? <Play className="w-8 h-8 ml-1" /> : <ZoomIn className="w-8 h-8" />}
                      </div>
                    </div>
                    {project.type === "video" && (
                      <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white text-center border-t border-gray-100 relative z-10 transition-colors group-hover/card:bg-gray-50 group-hover/card:text-primary">
                    <h3 className="font-bold text-lg text-gray-800 group-hover/card:text-primary transition-colors">
                      {language === "ar" ? project.nameAr : project.nameEn}
                    </h3>
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
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {projects[selectedItemIndex].type === "video" ? (
                <video
                  src={projects[selectedItemIndex].url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                />
              ) : (
                <CloudinaryImage
                  src={projects[selectedItemIndex].url}
                  alt="Enlarged view"
                  width={1600}
                  lazy={false}
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
