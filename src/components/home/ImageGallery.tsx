import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { mediaData } from "../../data/media";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";

// Add some categories logic. For now, we reuse the same images but filter them by category index.
const CATEGORIES = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All' },
  { id: 'nurseries', nameAr: 'المشاتل', nameEn: 'Nurseries' },
  { id: 'projects', nameAr: 'المشاريع', nameEn: 'Projects' },
  { id: 'trees', nameAr: 'الأشجار', nameEn: 'Trees' }
];

const GalleryItem = ({ img, idx, openLightbox }: { img: any, idx: number, openLightbox: (idx: number) => void, key?: React.Key }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true, threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className="flex-none px-3 w-[85%] sm:w-1/2 md:w-1/3">
      <motion.div
        ref={ref}
        whileHover={{ scale: 0.98 }}
        className={`relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg group transition-all duration-700 delay-${(idx % 4) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={() => openLightbox(idx)}
      >
        <CloudinaryImage
          src={img.url || img}
          alt={`Project ${idx + 1}`}
          width={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-white/20 p-4 rounded-full text-white backdrop-blur-md transform transition-transform duration-300 group-hover:scale-110">
            <ZoomIn className="w-8 h-8" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ImageGallery() {
  const { t, language } = useSettings();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  // Re-generate images based on category just for demo
  const images = activeCategory === 'all' 
    ? mediaData.gallery 
    : mediaData.gallery.filter((img: any) => img.category === activeCategory);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      direction: language === 'ar' ? 'rtl' : 'ltr',
      align: "start"
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5, stopOnMouseEnter: true })]
  );

  // Re-init carousel when category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [activeCategory, emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (idx: number) => setSelectedImageIndex(idx);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const showNextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedImageIndex !== null) {
          setSelectedImageIndex((selectedImageIndex + 1) % images.length);
      }
  };
  
  const showPrevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedImageIndex !== null) {
          setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
      }
  };

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative border-y border-text-main/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("معرض", "Image")} <span className="text-gradient-green">{t("الصور", "Gallery")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted mb-8"
          >
            {t(
              "جولة بصرية في مشاريعنا، شاهد كيف نغيّر ملامح الطبيعة بلمسات خضراء تنبض بالحياة.",
              "A visual tour of our projects, see how we change the features of nature with vibrant green touches."
            )}
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex overflow-x-auto flex-nowrap items-center justify-start md:justify-center gap-3 mb-8 pb-4 hide-scrollbar w-full px-4"
          >
             {CATEGORIES.map(cat => (
                 <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap shrink-0 px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-text-muted hover:bg-bg-primary border border-text-main/10'}`}
                 >
                     {language === 'ar' ? cat.nameAr : cat.nameEn}
                 </button>
             ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full relative px-0 md:px-12 group max-w-[1600px] mx-auto">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex -ml-3 rtl:-mr-3 ltr:-ml-3 py-4">
              {images.map((img, index) => (
                <GalleryItem 
                  key={`${activeCategory}-${index}`}
                  img={img} 
                  idx={index} 
                  openLightbox={openLightbox} 
                />
              ))}
            </div>
          </div>
          
          <button 
             onClick={scrollPrev}
             className="absolute top-1/2 -translate-y-1/2 rtl:right-2 ltr:left-2 md:rtl:-right-6 md:ltr:-left-6 w-12 h-12 rounded-full bg-white text-primary shadow-xl flex items-center justify-center z-10 hover:bg-primary-light hover:text-white transition-colors scale-90 md:scale-100 opacity-0 group-hover:opacity-100"
          >
             <ChevronRight className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
          </button>
          <button 
             onClick={scrollNext}
             className="absolute top-1/2 -translate-y-1/2 rtl:left-2 ltr:right-2 md:rtl:-left-6 md:ltr:-right-6 w-12 h-12 rounded-full bg-white text-primary shadow-xl flex items-center justify-center z-10 hover:bg-primary-light hover:text-white transition-colors scale-90 md:scale-100 opacity-0 group-hover:opacity-100"
          >
             <ChevronLeft className="w-6 h-6 rtl:rotate-0 ltr:rotate-180" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
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
            
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-white/20 p-4 rounded-full transition-colors z-50"
              onClick={language === 'ar' ? showNextImage : showPrevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-white/20 p-4 rounded-full transition-colors z-50"
              onClick={language === 'ar' ? showPrevImage : showNextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <CloudinaryImage
                src={typeof images[selectedImageIndex] === 'string' ? (images[selectedImageIndex] as string) : (images[selectedImageIndex] as any).url}
                alt="Enlarged view"
                width={1600}
                lazy={false}
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
