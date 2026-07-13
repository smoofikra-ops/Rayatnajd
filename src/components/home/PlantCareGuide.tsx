import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { Sun, Droplet, Thermometer, Wind, Leaf, X } from "lucide-react";

export default function PlantCareGuide() {
  const { t, language } = useSettings();
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const careGuides = [
    {
      name: t("شجرة السمر", "Acacia tortilis"),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783640670/efef7ddd-fbfa-4141-8b22-bba84237b69d.png",
      description: t(
        "شجرة محلية تتحمل الجفاف والحرارة الشديدة، ممتازة للظل في البيئات الصحراوية.",
        "A native tree that withstands drought and extreme heat, excellent for shade in desert environments."
      ),
      care: [
        { icon: Sun, text: t("شمس كاملة", "Full Sun") },
        { icon: Droplet, text: t("ري منخفض", "Low Watering") },
        { icon: Thermometer, text: t("يتحمل الحرارة", "Heat Tolerant") }
      ]
    },
    {
      name: t("شجرة السدر", "Ziziphus spina-christi"),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783640436/3f94c320-a8ad-4f6e-bfe1-a3a86b792d3c.png",
      description: t(
        "شجرة دائمة الخضرة، ذات أهمية بيئية وتاريخية كبيرة، تنتج ثمار النبق.",
        "An evergreen tree with significant environmental and historical importance, produces jujube fruits."
      ),
      care: [
        { icon: Sun, text: t("شمس كاملة", "Full Sun") },
        { icon: Droplet, text: t("ري معتدل", "Moderate Watering") },
        { icon: Wind, text: t("مصد للرياح", "Windbreaker") }
      ]
    },
    {
      name: t("شجرة الطلح", "Acacia gerrardii"),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783640250/df3e251a-140d-4770-9777-1f5b4747110e.png",
      description: t(
        "من أهم أشجار البيئة السعودية، تثبت النيتروجين في التربة وتوفر ظلاً واسعاً.",
        "One of the most important trees in the Saudi environment, fixes nitrogen in the soil and provides wide shade."
      ),
      care: [
        { icon: Sun, text: t("شمس كاملة", "Full Sun") },
        { icon: Droplet, text: t("ري منخفض جداً", "Very Low Watering") },
        { icon: Leaf, text: t("يحسن التربة", "Improves Soil") }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase">{t("دليل العناية", "Care Guide")}</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gradient-identity"
          >
            {t("دليل العناية", "Care Guide for")} <span className="text-gradient-green">{t("بالأشجار المحلية", "Native Trees")}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-6xl mx-auto">
          {careGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedGuide(guide)}
              className="premium-card group flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-24 md:h-64 overflow-hidden">
                <img 
                  src={guide.img} 
                  alt={guide.name as string} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-2 md:p-6">
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="text-[10px] md:text-2xl font-bold text-white leading-tight md:leading-normal">{guide.name}</h3>
                    <span className="hidden md:block text-white/80 text-sm font-medium">{t("اضغط للتفاصيل", "Click for details")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedGuide(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-bg-primary w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedGuide(null)}
                className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20 transition-colors`}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img src={selectedGuide.img} alt={selectedGuide.name as string} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 w-full md:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-text-main mb-4">{selectedGuide.name}</h3>
                <p className="text-text-muted leading-relaxed mb-8">{selectedGuide.description}</p>
                <div className="grid grid-cols-1 gap-4">
                  {selectedGuide.care.map((item: any, idx: number) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 bg-bg-secondary p-4 rounded-xl border border-black/5">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-text-main">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
