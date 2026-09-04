import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import { 
  Calculator, 
  TreePine, 
  Sprout, 
  UploadCloud, 
  Map as MapIcon,
  BookOpen,
  Trees,
  Recycle,
  Building2,
  Bot,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search
} from 'lucide-react';
import SEO from '../components/SEO';

const TOOLS = [
  { id: "ai-designer", titleAr: "المصمم الذكي", titleEn: "Smart Designer", icon: Sparkles, path: "/tools/ai-designer" },
  { id: "cost-calculator", titleAr: "حاسبة التكلفة", titleEn: "Cost Calculator", icon: Calculator, path: "/tools/cost-calculator" },
  { id: "tree-selection", titleAr: "اختيار الأشجار", titleEn: "Tree Selection", icon: TreePine, path: "/tools/tree-selection" },
  { id: "plant-suggestion", titleAr: "اقتراح النباتات", titleEn: "Plant Suggestion", icon: Sprout, path: "/tools/plant-suggestion" },
  { id: "project-upload", titleAr: "رفع صورة المشروع", titleEn: "Upload Project Image", icon: UploadCloud, path: "/tools/project-upload" },
  { id: "ai-site-analysis", titleAr: "تحليل الموقع بالذكاء الاصطناعي", titleEn: "AI Site Analysis", icon: MapIcon, path: "/tools/ai-site-analysis" }
];

export default function ToolsCenter() {
  const { t, language } = useSettings();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const PILLARS = [
    {
      id: "smart-tools",
      titleAr: "الأدوات الذكية",
      titleEn: "Smart Tools",
      icon: Calculator,
      shortDescAr: "مجموعة من الأدوات الذكية التي تساعد في اتخاذ القرار.",
      shortDescEn: "Smart tools to help with decision making.",
      descAr: "مجموعة من الأدوات الذكية التي تساعد العملاء والمهندسين في اتخاذ القرار واختيار الحلول المناسبة للمشاريع.",
      descEn: "A set of smart tools that help clients and engineers make decisions and choose appropriate solutions for projects.",
      examplesAr: ["حاسبة عدد الأشجار", "حاسبة المساحات", "حاسبة الري", "اختيار الشجرة المناسبة", "تقدير كمية المياه", "مستشار التشجير الذكي"],
      examplesEn: ["Tree Calculator", "Area Calculator", "Irrigation Calculator", "Tree Selection", "Water Estimation", "Smart Landscaping Advisor"],
      btnAr: "استكشف الأدوات الذكية",
      btnEn: "Explore Smart Tools",
      isTools: true
    },
    {
      id: "articles",
      titleAr: "المقالات والدراسات",
      titleEn: "Knowledge Articles",
      icon: BookOpen,
      shortDescAr: "مقالات وأدلة متخصصة في التشجير والاستدامة.",
      shortDescEn: "Articles and guides on landscaping and sustainability.",
      descAr: "مقالات احترافية وأدلة علمية وتقنية متخصصة في التشجير والاستدامة واللاندسكيب.",
      descEn: "Professional articles and specialized scientific and technical guides in afforestation, sustainability, and landscaping.",
      examplesAr: ["أحدث المقالات", "الأدلة الإرشادية", "دراسات الحالة", "نصائح الخبراء", "الأسئلة الشائعة"],
      examplesEn: ["Latest Articles", "Guides", "Case Studies", "Expert Tips", "FAQs"],
      btnAr: "استكشف المقالات",
      btnEn: "Explore Articles",
      path: "/blog"
    },
    {
      id: "encyclopedia",
      titleAr: "موسوعة الأشجار والنخيل",
      titleEn: "Palm & Tree Encyclopedia",
      icon: Trees,
      shortDescAr: "قاعدة معرفية متكاملة تضم مئات الأنواع من النباتات.",
      shortDescEn: "Comprehensive knowledge base of hundreds of plant species.",
      descAr: "قاعدة معرفية متكاملة تضم مئات الأنواع من الأشجار والنخيل والنباتات مع معلومات تفصيلية عن كل نوع.",
      descEn: "A comprehensive knowledge base comprising hundreds of types of trees, palms, and plants with detailed information on each species.",
      examplesAr: ["الأشجار المحلية", "أشجار الظل", "أشجار الزينة", "الأشجار المقاومة للجفاف", "النخيل", "النباتات المزهرة"],
      examplesEn: ["Native Trees", "Shade Trees", "Ornamental Trees", "Drought-Resistant Trees", "Palms", "Flowering Plants"],
      btnAr: "استكشف الموسوعة",
      btnEn: "Explore Encyclopedia",
      path: "/catalog"
    },
    {
      id: "sustainability",
      titleAr: "الاستدامة البيئية",
      titleEn: "Environmental Sustainability",
      icon: Recycle,
      shortDescAr: "محتوى متخصص حول الاستدامة ودعم رؤية المملكة 2030.",
      shortDescEn: "Specialized content on sustainability and Vision 2030.",
      descAr: "محتوى متخصص حول الاستدامة البيئية ودعم رؤية المملكة 2030 وزيادة الغطاء النباتي ومكافحة التصحر.",
      descEn: "Specialized content on environmental sustainability, supporting Vision 2030, increasing vegetation cover, and combating desertification.",
      examplesAr: ["التشجير الحضري", "جودة الحياة", "مكافحة التصحر", "الاستدامة", "الغطاء النباتي", "التنوع البيئي"],
      examplesEn: ["Urban Afforestation", "Quality of Life", "Combating Desertification", "Sustainability", "Vegetation Cover", "Biodiversity"],
      btnAr: "استكشف الاستدامة",
      btnEn: "Explore Sustainability",
      path: "/about"
    },
    {
      id: "projects",
      titleAr: "المشاريع الوطنية",
      titleEn: "National Projects",
      icon: Building2,
      shortDescAr: "تعرف على تطبيقات التشجير في المشاريع الكبرى.",
      shortDescEn: "Learn about landscaping applications in major projects.",
      descAr: "تعرف على تطبيقات التشجير والاستدامة في المشاريع الحكومية والقطاع الخاص داخل المملكة.",
      descEn: "Learn about afforestation and sustainability applications in government and private sector projects within the Kingdom.",
      examplesAr: ["الطرق", "الحدائق", "المجمعات", "الفنادق", "المدارس", "المستشفيات", "المدن الذكية"],
      examplesEn: ["Roads", "Parks", "Complexes", "Hotels", "Schools", "Hospitals", "Smart Cities"],
      btnAr: "استكشف المشاريع",
      btnEn: "Explore Projects",
      path: "/#projects"
    },
    {
      id: "ai-assistant",
      titleAr: "مساعد رايات نجد الذكي",
      titleEn: "Rayat Najd AI Assistant",
      icon: Bot,
      shortDescAr: "مساعدك الذكي لاختيار النباتات وحلول الهندسة.",
      shortDescEn: "Your smart assistant for plant selection and engineering solutions.",
      descAr: "مساعد ذكي يعتمد على الذكاء الاصطناعي لتقديم التوصيات والحلول.",
      descEn: "An AI-powered smart assistant to provide recommendations and solutions.",
      examplesAr: ["اقتراح أفضل الأشجار", "الإجابة عن الأسئلة", "اقتراح حلول الري", "تحليل المشروع", "توصيات هندسية", "توصيات الاستدامة"],
      examplesEn: ["Suggest Best Trees", "Answer Questions", "Suggest Irrigation Solutions", "Project Analysis", "Engineering Recommendations", "Sustainability Recommendations"],
      btnAr: "قريباً",
      btnEn: "Coming Soon",
      isComingSoon: true
    }
  ];

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24 min-h-screen bg-bg-primary">
      <SEO
        title={language === 'ar' ? 'مركز الأدوات الذكية للتشجير | رايات نجد' : 'Smart Landscaping Tools | Rayat Najd'}
        description={language === 'ar' ? 'أدوات ذكية متقدمة لحساب تكاليف التشجير، واختيار الأشجار والنباتات الملائمة، وتخطيط المشهد الحضري بالمملكة.' : 'Advanced smart tools for landscaping cost calculation, tree selection, and urban greenery planning in Saudi Arabia.'}
        canonicalUrl="https://www.rayatnajd.com/tools"
        breadcrumbs={[
          { name: "الرئيسية", item: "/" },
          { name: "الأدوات الذكية", item: "/tools" }
        ]}
      />

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 lg:w-12 bg-primary/50"></div>
            <span className="text-primary font-bold tracking-wider uppercase text-xs lg:text-sm">{t("بوابة المعرفة", "Knowledge Portal")}</span>
            <div className="h-px w-8 lg:w-12 bg-primary/50"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main mb-4 lg:mb-6 leading-tight"
          >
            {t("مركز ", "Knowledge & ")} 
            <span className="text-primary">{t("المعرفة ", "Intelligence ")}</span>
            {t("والذكاء", "Center")}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-text-muted leading-relaxed"
          >
            {t(
              "مرجعك الشامل والموثوق لكل ما يخص التشجير، الاستدامة البيئية، وأحدث تقنيات اللاندسكيب في المملكة.",
              "Your comprehensive and reliable reference for everything related to afforestation, environmental sustainability, and the latest landscaping technologies in the Kingdom."
            )}
          </motion.p>
        </div>

        {/* Smart Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isExpanded = expandedId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, layout: { duration: 0.3, type: "spring", bounce: 0.2 } }}
                className={`relative flex flex-col bg-card-background border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${isExpanded ? 'ring-2 ring-primary/20' : ''}`}
                onClick={() => handleCardClick(pillar.id)}
              >
                <div className="p-3 lg:p-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                  <div className={`shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm lg:text-xl font-bold text-text-main mb-1 line-clamp-1">
                      {t(pillar.titleAr, pillar.titleEn)}
                    </h3>
                    <p className="text-xs text-text-muted line-clamp-2">
                      {t(pillar.shortDescAr, pillar.shortDescEn)}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                    <ChevronDown className={`w-5 h-5 text-text-muted transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`} />
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-6 pt-2 border-t border-card-border/50">
                        <p className="text-sm text-text-main mb-4 leading-relaxed">
                          {t(pillar.descAr, pillar.descEn)}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                            {t("المحتويات:", "Contents:")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(language === 'ar' ? pillar.examplesAr : pillar.examplesEn).map((ex, i) => (
                              <span key={i} className="px-3 py-1 bg-bg-secondary text-text-main text-xs rounded-full border border-card-border">
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>

                        {pillar.isTools ? (
                          <div className="space-y-2 mt-4">
                            <h4 className="text-sm font-bold text-text-main mb-3">
                              {t("الأدوات المتاحة:", "Available Tools:")}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {TOOLS.map(tool => {
                                const ToolIcon = tool.icon;
                                return (
                                  <Link 
                                    key={tool.id}
                                    to={tool.path}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-bg-secondary hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors group"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ToolIcon className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-medium text-text-main group-hover:text-primary">{language === 'ar' ? tool.titleAr : tool.titleEn}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!pillar.isComingSoon && pillar.path) {
                                if (pillar.path.startsWith('/#')) {
                                  navigate('/');
                                  setTimeout(() => {
                                    document.getElementById(pillar.path!.substring(2))?.scrollIntoView({ behavior: 'smooth' });
                                  }, 100);
                                } else {
                                  navigate(pillar.path);
                                }
                              }
                            }}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                              pillar.isComingSoon 
                                ? 'bg-bg-secondary text-text-muted cursor-not-allowed border border-card-border' 
                                : 'bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/20 active:scale-[0.98]'
                            }`}
                          >
                            {t(pillar.btnAr, pillar.btnEn)}
                            {!pillar.isComingSoon && (
                              language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
