import { motion } from "motion/react";
import { Leaf, ShieldCheck, Star, Lightbulb, HeartHandshake, Flag, Target, BookOpen, RefreshCw } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";

export default function CoreValues() {
  const { t } = useSettings();

  const values = [
    { title: t("الاستدامة", "Sustainability"), icon: Leaf, text: "text-sm md:text-xl", desc: t("نحافظ على الموارد البيئية للأجيال القادمة", "Preserving environmental resources for future generations") },
    { title: t("الجودة", "Quality"), icon: Star, text: "text-lg md:text-2xl", desc: t("أعلى المعايير في التنفيذ والإدارة", "Highest standards in execution and management") },
    { title: t("الموثوقية", "Reliability"), icon: ShieldCheck, text: "text-sm md:text-xl", desc: t("نبني ثقة دائمة مع شركائنا", "Building lasting trust with our partners") },
    { title: t("الابتكار", "Innovation"), icon: Lightbulb, text: "text-lg md:text-2xl", desc: t("نقدم حلولاً إبداعية غير مسبوقة", "Delivering unprecedented creative solutions") },
    { title: t("المسؤولية", "Responsibility"), icon: HeartHandshake, text: "text-sm md:text-xl", desc: t("ملتزمون تجاه المجتمع والبيئة", "Committed to society and the environment") },
    { title: t("الريادة", "Leadership"), icon: Flag, text: "text-base md:text-2xl", desc: t("نسعى دائماً لنكون في طليعة القطاع", "Always striving to be at the forefront of the sector") },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative border-t border-text-main/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("قيمنا", "Our")} <span className="text-gradient-green">{t("الأساسية", "Core Values")}</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t(
              "المبادئ التي تقود عملنا ونصنع بها الفارق البيئي من أجل وطن أخضر ومستدام.",
              "The principles that guide our work and make an environmental difference for a green, sustainable homeland."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                  className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-8 flex flex-col items-center md:items-start justify-start shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[15px_15px_40px_-10px_rgba(20,184,166,0.2),-10px_-10px_30px_-10px_rgba(255,255,255,0.8)] border border-primary/5 transition-all duration-300 cursor-pointer group text-center md:text-start"
                  style={{ transformStyle: "preserve-3d" }}
                >
                   <div 
                     className="w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-bg-secondary flex items-center justify-center mb-2 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary group-hover:shadow-lg group-hover:shadow-primary/30"
                     style={{ transform: "translateZ(30px)" }}
                   >
                     <Icon className="w-4 h-4 md:w-7 md:h-7" strokeWidth={2} />
                   </div>
                   <h3 
                     className={`${v.text} font-bold text-text-main mb-1 md:mb-3 group-hover:text-primary transition-colors duration-300`}
                     style={{ transform: "translateZ(20px)" }}
                   >
                     {v.title}
                   </h3>
                   <p 
                     className="text-text-muted text-[10px] md:text-base leading-tight md:leading-relaxed"
                     style={{ transform: "translateZ(10px)" }}
                   >
                     {v.desc}
                   </p>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
