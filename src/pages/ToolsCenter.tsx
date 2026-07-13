import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";
import { 
  Sparkles, 
  Calculator, 
  TreePine, 
  Sprout, 
  UploadCloud, 
  Map 
} from "lucide-react";

export default function ToolsCenter() {
  const { t } = useSettings();

  const tools = [
    {
      id: "ai-designer",
      titleAr: "المصمم الذكي",
      titleEn: "Smart Designer",
      icon: Sparkles,
      path: "/tools/ai-designer",
      descAr: "توليد مقترحات التشجير بالذكاء الاصطناعي",
      descEn: "Generate afforestation proposals using AI"
    },
    {
      id: "cost-calculator",
      titleAr: "حاسبة التكلفة",
      titleEn: "Cost Calculator",
      icon: Calculator,
      path: "/tools/cost-calculator",
      descAr: "حساب كميات وتقدير تكاليف المشروع",
      descEn: "Calculate quantities and estimate project costs"
    },
    {
      id: "tree-selection",
      titleAr: "اختيار الأشجار",
      titleEn: "Tree Selection",
      icon: TreePine,
      path: "/tools/tree-selection",
      descAr: "دليل العناية واختيار النباتات المحلية",
      descEn: "Care guide and native plant selection"
    },
    {
      id: "plant-suggestion",
      titleAr: "اقتراح النباتات",
      titleEn: "Plant Suggestion",
      icon: Sprout,
      path: "/tools/plant-suggestion",
      descAr: "توصيات زراعية ذكية بناءً على الطقس",
      descEn: "Smart planting recommendations based on weather"
    },
    {
      id: "project-upload",
      titleAr: "رفع صورة المشروع",
      titleEn: "Upload Project Image",
      icon: UploadCloud,
      path: "/tools/project-upload",
      descAr: "قم برفع صورة مساحتك للبدء",
      descEn: "Upload an image of your space to get started"
    },
    {
      id: "ai-site-analysis",
      titleAr: "تحليل الموقع بالذكاء الاصطناعي",
      titleEn: "AI Site Analysis",
      icon: Map,
      path: "/tools/ai-site-analysis",
      descAr: "تحليل شامل لبيئة الموقع وظروفه",
      descEn: "Comprehensive analysis of site environment and conditions"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-bg-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase">{t("الأدوات", "Tools")}</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("مركز", "Smart")} <span className="text-gradient-green">{t("الأدوات الذكية", "Tools Center")}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted"
          >
            {t(
              "مجموعة متكاملة من الأدوات المدعومة بالذكاء الاصطناعي لمساعدتك في تخطيط وتنفيذ مشاريع التشجير بكل احترافية.",
              "A comprehensive suite of AI-powered tools to help you plan and execute your afforestation projects professionally."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  to={tool.path}
                  target="_blank"
                  className="block h-full premium-card p-8 rounded-3xl border-text-main/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {t(tool.titleAr, tool.titleEn)}
                  </h3>
                  <p className="text-text-muted">
                    {t(tool.descAr, tool.descEn)}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
