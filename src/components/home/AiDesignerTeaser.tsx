import { motion } from "motion/react";
import { Sparkles, Scan, LayoutDashboard } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";

export default function AiDesignerTeaser() {
  const { t } = useSettings();

  return (
    <section id="ai-designer" className="py-12 relative overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-primary/20 text-center border-t border-text-main/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-bg-primary rounded-full border border-primary/50 flex items-center justify-center mb-8 relative"
        >
           <Sparkles className="w-10 h-10 text-accent-gold" />
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
             className="absolute inset-[-10px] rounded-full border border-dashed border-primary/50"
           ></motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-text-main mb-6 leading-relaxed py-2 md:leading-relaxed"
        >
          {t("المصمم", "The")} <span className="text-gradient-gold leading-relaxed">{t("الذكي", "Smart")}</span> {t("للمناظر الطبيعية", "Landscape Designer")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-text-muted font-light mb-12 max-w-3xl"
        >
          {t(
            "مستشارك الافتراضي المتكامل. ارفع صورة موقعك وسيقوم الذكاء الاصطناعي بتوليد مقترحات التشجير وحساب الكميات وتقدير التكاليف بلمسة زر.",
            "Your comprehensive virtual advisor. Upload a photo of your site and the AI will generate afforestation proposals, calculate quantities, and estimate costs with the touch of a button."
          )}
        </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full"
        >
           <div className="relative w-1/2 sm:w-auto cursor-not-allowed">
             <span className="absolute -top-3 -right-2 bg-red-500/90 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">{t("قريباً", "Soon")}</span>
             <button disabled className="w-full px-2 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full bg-accent-gold/20 text-text-main/50 text-xs sm:text-lg font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 pointer-events-none">
               <Scan className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
               {t("المصمم الذكي", "Smart Designer")}
             </button>
           </div>
           <div className="relative w-1/2 sm:w-auto cursor-not-allowed">
             <span className="absolute -top-3 -right-2 bg-red-500/90 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">{t("قيد التطوير", "Under Dev")}</span>
             <button disabled className="w-full px-2 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full premium-card bg-bg-secondary/20 text-text-muted text-xs sm:text-lg font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 border-text-main/5 pointer-events-none">
               <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 opacity-50" />
               {t("حاسبة التكاليف", "Cost Calculator")}
             </button>
           </div>
        </motion.div>
        
        {/* Mockup visualization area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full rounded-tr-3xl rounded-tl-3xl border-t border-l border-r border-text-main/10 premium-card-green h-64 md:h-96 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-bg-primary/80 flex flex-col items-center justify-center">
             <div className="w-full max-w-4xl px-8 h-full flex flex-col items-center justify-center">
                <div className="w-full h-2/3 border-2 border-dashed border-primary/50 flex items-center justify-center rounded-2xl mb-4 bg-primary/5">
                   <p className="text-text-muted font-medium">{t("منطقة توليد التصور الذكي ستظهر هنا", "The intelligent visualization generation area will appear here")}</p>
                </div>
                <div className="flex gap-4 w-full justify-center opacity-50">
                   <div className="w-16 h-2 bg-text-main/10 rounded-full"></div>
                   <div className="w-32 h-2 bg-text-main/10 rounded-full"></div>
                   <div className="w-16 h-2 bg-text-main/10 rounded-full"></div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
