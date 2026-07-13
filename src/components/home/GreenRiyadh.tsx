import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { mediaData } from "../../data/media";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";

export default function GreenRiyadh() {
  const { t } = useSettings();

  const points = [
    t("زيادة الغطاء النباتي", "Increasing vegetation cover"),
    t("تطوير المشهد الحضري", "Developing urban landscape"),
    t("تحسين جودة الحياة", "Improving quality of life"),
    t("مكافحة التصحر", "Combating desertification"),
    t("تعزيز الاستدامة البيئية", "Enhancing environmental sustainability"),
    t("دعم السياحة البيئية", "Supporting ecotourism")
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative overflow-hidden">
      <div className="absolute -left-[20%] top-1/2 w-1/2 h-full bg-secondary/10 blur-[150px] pointer-events-none rounded-full translate-y-[-50%]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[21px] md:text-3xl lg:text-4xl font-bold text-gradient-identity mb-6 py-2 text-center md:text-start md:whitespace-nowrap">
                {t("شريك في بناء", "Partner in Building")} <span className="text-gradient-green">{t("الرياض الخضراء", "Green Riyadh")}</span>
              </h2>
              <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed">
                {t(
                  "تسهم رايات نجد في دعم مستهدفات الرياض الخضراء ورؤية المملكة 2030 من خلال تحويل المساحات إلى واحات خضراء مستدامة تنبض بالحياة، وتعزز من جودة الحياة الحضرية.",
                  "Rayat Najd contributes to supporting the goals of Green Riyadh and the Kingdom's Vision 2030 by transforming spaces into sustainable, vibrant green oases, and enhancing the quality of urban life."
                )}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {points.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="text-primary-light w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span className="text-text-muted font-medium text-xs md:text-base leading-tight md:leading-normal">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden premium-card border-primary/20 p-2">
            {/* Split Image Animation Container to represent transformation */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden group cursor-ew-resize">
               <CloudinaryImage 
                 src={"https://res.cloudinary.com/erfajaoa/image/upload/v1783648047/6c6592cf-fb96-4ee4-9892-d491f8c713de.png"} 
                 alt="Green Riyadh" 
                 width={1200}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end">
                  <div className="rtl:text-right ltr:text-left">
                    <h3 className="text-2xl font-bold text-text-main mb-2">
                      {t("تحول حضري مستدام", "Sustainable Urban Transformation")}
                    </h3>
                    <p className="text-text-main/80 text-sm max-w-sm">
                      {t("نصنع الفارق في كل تفصيل أخضر نزرعه في العاصمة.", "We make a difference in every green detail we plant in the capital.")}
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
