import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { Building2 } from "lucide-react";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import { useState, useEffect, useRef } from "react";

export default function SuccessPartners() {
  const { t, language } = useSettings();
  const [activeCat, setActiveCat] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const partnerCategories = [
    {
      titleAr: "الجهات الحكومية",
      titleEn: "Government Agencies",
      partners: [
        { nameAr: "وزارة البلديات والإسكان", nameEn: "Ministry of Municipalities and Housing", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900191/1_k6tszv.jpg", color: "#006253" },
        { nameAr: "وزارة البيئة والمياه والزراعة", nameEn: "Ministry of Environment, Water & Agriculture", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900192/2_scdiio.jpg", color: "#2E8B57" },
        { nameAr: "وزارة الدفاع", nameEn: "Ministry of Defense", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900194/3_kc5r8o.jpg", color: "#8B7355" },
        { nameAr: "الهيئة الملكية لمدينة الرياض", nameEn: "Royal Commission for Riyadh City", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900197/4_bgoo8s.jpg", color: "#927b4b" },
      ]
    },
    {
      titleAr: "البرامج الوطنية",
      titleEn: "National Programs",
      partners: [
        { nameAr: "برنامج الرياض الخضراء", nameEn: "Green Riyadh Program", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900199/5_tzvkqg.jpg", color: "#228B22" }
      ]
    },
    {
      titleAr: "المشاريع الوطنية الكبرى",
      titleEn: "Major National Projects",
      partners: [
        { nameAr: "روشن", nameEn: "ROSHN", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900201/6_rsmhm7.jpg", color: "#006b7a" },
        { nameAr: "نيوم", nameEn: "NEOM", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900203/7_t9qa3q.jpg", color: "#b9975b" },
        { nameAr: "البحر الأحمر الدولية", nameEn: "Red Sea Global", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900205/8_qyh39d.jpg", color: "#007a99" },
      ]
    },
    {
      titleAr: "الشركات الوطنية",
      titleEn: "National Companies",
      partners: [
        { nameAr: "نادك", nameEn: "NADEC", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900208/9_ncs6pd.jpg", color: "#007843" },
        { nameAr: "المراعي", nameEn: "Almarai", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783962760/ALMARAI_pehxo0.jpg", color: "#004B87" },
      ]
    },
    {
      titleAr: "القطاع الصحي",
      titleEn: "Health Sector",
      partners: [
        { nameAr: "مدينة الملك فهد الطبية", nameEn: "King Fahd Medical City", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900212/11_qx1atq.jpg", color: "#00684A" }
      ]
    },
    {
      titleAr: "البنية التحتية والمرافق",
      titleEn: "Infrastructure & Utilities",
      partners: [
        { nameAr: "المؤسسة العامة لتحلية المياه المالحة", nameEn: "Saline Water Conversion Corporation", logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783962771/TAHLIAT_ALMIYA_ua5ujk.jpg", color: "#006BB6" },
        { nameAr: "محطة الشقيق", nameEn: "Shuqaiq Plant", logo: null, color: "#94a3b8" },
        { nameAr: "محطة الشعيبة", nameEn: "Shoaiba Plant", logo: null, color: "#94a3b8" },
        { nameAr: "محطة ينبع", nameEn: "Yanbu Plant", logo: null, color: "#94a3b8" },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-cat-index') || '0', 10);
            setActiveCat(index);
          }
        });
      },
      {
        root: containerRef.current,
        rootMargin: "0px -40% 0px -40%", // Trigger when crossing the center 20% of the container
        threshold: 0,
      }
    );

    const els = containerRef.current?.querySelectorAll('.partner-category-group');
    if (els) {
      els.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [language]);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase">{t("شركاؤنا", "Our Partners")}</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("شركاء", "Success")} <span className="text-gradient-green">{t("النجاح", "Partners")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            {t(
              "نعتز بشراكاتنا الاستراتيجية مع نخبة من الجهات الحكومية والخاصة لتحقيق مستهدفات الرؤية.",
              "We cherish our strategic partnerships with elite government and private entities to achieve the vision's goals."
            )}
          </motion.p>
        </div>

        {/* Dynamic Sticky Title Area */}
        <div className="h-20 flex flex-col items-center justify-center mb-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h3 className="text-xl md:text-3xl font-bold text-primary px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10 shadow-sm">
                {language === 'ar' ? partnerCategories[activeCat].titleAr : partnerCategories[activeCat].titleEn}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Marquee Row */}
        <div 
          className="relative w-full overflow-hidden flex py-10 group" 
          dir="ltr"
          ref={containerRef}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-6 md:gap-8 pr-6 md:pr-8 shrink-0">
                {partnerCategories.map((category, catIdx) => (
                  <div key={`${setIndex}-${catIdx}`} data-cat-index={catIdx} className="partner-category-group flex gap-6 md:gap-8 shrink-0">
                    {category.partners.map((partner, idx) => (
                      <div 
                        key={idx}
                        className="relative bg-bg-primary/50 backdrop-blur-sm border border-text-main/10 rounded-2xl w-[200px] md:w-[240px] h-[160px] md:h-[200px] flex flex-col items-center justify-end p-4 transition-all duration-500 hover:scale-[1.15] hover:translate-y-2 hover:z-20 hover:bg-white group/card cursor-default shrink-0 overflow-hidden hover:shadow-[0_25px_50px_-12px_var(--shadow-color),0_10px_30px_-5px_var(--shadow-color)] hover:border-[color:var(--hover-color)]"
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        style={{ '--hover-color': partner.color, '--shadow-color': `${partner.color}50` } as React.CSSProperties}
                      >
                         {partner.logo ? (
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                              <CloudinaryImage src={partner.logo} alt={language === 'ar' ? partner.nameAr : partner.nameEn} width={400} className="w-full h-full object-cover transition-all duration-500 transform group-hover/card:scale-110" />
                            </div>
                         ) : (
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 text-primary/40 flex items-center justify-center group-hover/card:text-primary group-hover/card:bg-primary/10 transition-colors duration-500">
                                <Building2 className="w-6 h-6 md:w-8 md:h-8" />
                              </div>
                            </div>
                         )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
