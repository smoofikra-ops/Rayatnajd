import { motion } from "motion/react";
import { Leaf, Eye, Droplet, Sun } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import VisionCarousel from "./VisionCarousel";

export default function Vision2030() {
  const { t } = useSettings();

  const pillars = [
    {
       title: t("رؤية 2030", "Vision 2030"),
       desc: t("بناء مجتمع حيوي وبيئة عامرة ومستدامة.", "Building a vibrant society and a prosperous, sustainable environment."),
       icon: <Eye className="w-6 h-6 text-accent-gold" />,
       bgImage: "https://res.cloudinary.com/erfajaoa/image/upload/v1783649441/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%B1%D9%88%D9%94%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-2030-_-Saudi-vision-2030-Logo-300x169_tnagkw.png"
    },
    {
      title: t("مبادرة السعودية الخضراء", "Saudi Green Initiative"),
      desc: t("زراعة مليارات الأشجار واستعادة الأراضي المهدرة.", "Planting billions of trees and restoring degraded land."),
      icon: <Leaf className="w-6 h-6 text-accent-gold" />,
      bgImage: "https://res.cloudinary.com/erfajaoa/image/upload/v1783649012/20085149-1a2b-4aab-98d8-096b1c9478a5.png"
   },
   {
      title: t("برنامج جودة الحياة", "Quality of Life Program"),
      desc: t("تحسين المشهد الحضري وتطوير المرافق الصديقة للبيئة.", "Improving urban landscape and developing eco-friendly facilities."),
      icon: <Sun className="w-6 h-6 text-accent-gold" />,
      bgImage: "https://res.cloudinary.com/erfajaoa/image/upload/v1783720711/a6ae8ee6-0cd8-42f1-80ff-e1c7f0e1726e.png"
   },
   {
      title: t("الاستدامة البيئية", "Environmental Sustainability"),
      desc: t("ترشيد استهلاك المياه والاعتماد على نباتات البيئة المحلية.", "Rationalizing water consumption and relying on local native plants."),
      icon: <Droplet className="w-6 h-6 text-accent-gold" />,
      bgImage: "https://res.cloudinary.com/erfajaoa/image/upload/v1783720922/7f912e3e-c6ac-492b-ab1d-f42eaf895116.png"
   }
  ];

  return (
    <section className="py-16 md:py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center justify-center mb-6"
          >
            <img 
              src="https://res.cloudinary.com/erfajaoa/image/upload/v1783649441/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%B1%D9%88%D9%94%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-2030-_-Saudi-vision-2030-Logo-300x169_tnagkw.png" 
              alt="Vision 2030" 
              className="h-24 md:h-28 object-contain mb-4" 
            />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("نلهم المستقبل برؤية", "Inspiring the future with Vision")} <span className="text-gradient-gold leading-relaxed">2030</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t(
              "رسالتنا تتناغم بوضوح مع الطموحات الوطنية الكبرى، لنكون الأداة التنفيذية والموثوقة لخلق مستقبل بيئي مستدام للأجيال القادمة.",
              "Our mission clearly harmonizes with major national ambitions, to be the reliable executive tool for creating a sustainable environmental future for generations to come."
            )}
          </motion.p>
        </div>

        <div className="w-[100vw] relative left-1/2 -translate-x-1/2">
          <VisionCarousel pillars={pillars} />
        </div>
      </div>
    </section>
  );
}
