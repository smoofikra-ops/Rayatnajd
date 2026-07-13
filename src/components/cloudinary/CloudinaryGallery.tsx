import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import { CloudinaryImage } from "./CloudinaryImage";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface CloudinaryGalleryProps {
  images: string[];
}

export function CloudinaryGallery({ images }: CloudinaryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <GalleryItem key={idx} img={img} idx={idx} onClick={() => openLightbox(idx)} />
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 sm:p-3 rounded-full transition-all"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 sm:p-4 rounded-full transition-all"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 rtl:hidden" />
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 hidden rtl:block" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 sm:p-4 rounded-full transition-all"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 rtl:hidden" />
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 hidden rtl:block" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[90vw] md:max-w-6xl aspect-[16/9] sm:aspect-auto sm:max-h-[85vh] flex items-center justify-center px-12 sm:px-0"
              onClick={(e) => e.stopPropagation()}
            >
              <CloudinaryImage
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                width={2560}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                lazy={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryItem({ img, idx, onClick }: { key?: React.Key; img: string; idx: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true, threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-zoom-in shadow-lg transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${
        idx === 0 || idx === 3 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
      }`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
      <CloudinaryImage
        src={img}
        alt={`Gallery ${idx}`}
        width={800}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="bg-black/50 backdrop-blur-sm p-3 md:p-4 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-500">
          <ZoomIn className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </div>
    </div>
  );
}
