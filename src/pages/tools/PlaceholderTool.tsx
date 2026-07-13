import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { Hammer } from "lucide-react";

export default function PlaceholderTool({ titleEn, titleAr }: { titleEn: string, titleAr: string }) {
  const { t } = useSettings();
  
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="premium-card p-12 rounded-3xl border-text-main/10 flex flex-col items-center justify-center"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Hammer className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            {t(titleAr, titleEn)}
          </h1>
          <p className="text-xl text-text-muted">
            {t("هذه الأداة قيد التطوير حالياً. يرجى العودة لاحقاً.", "This tool is currently under development. Please check back later.")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
