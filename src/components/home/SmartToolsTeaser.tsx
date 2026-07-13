import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useSettings } from "../../contexts/SettingsContext";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

export default function SmartToolsTeaser() {
  const { t, language } = useSettings();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-bg-secondary to-bg-primary relative overflow-hidden border-y border-text-main/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-bg-primary rounded-full border border-primary/30 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
            {t("اكتشف", "Discover")} <span className="text-gradient-green">{t("مركز الأدوات الذكية", "Smart Tools Center")}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
            {t(
              "مجموعة متكاملة من الأدوات المدعومة بالذكاء الاصطناعي، من المصمم الذكي وحاسبة التكلفة إلى اختيار النباتات وتحليل الموقع.",
              "A comprehensive suite of AI-powered tools, from smart designer and cost calculator to plant selection and site analysis."
            )}
          </p>
          
          <Link 
            to="/tools" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {language === 'ar' && <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />}
            {t("استكشف الأدوات", "Explore Tools")}
            {language === 'en' && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
