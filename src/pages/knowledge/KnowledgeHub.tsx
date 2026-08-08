import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useSettings } from '../../contexts/SettingsContext';
import { categories, firstPillar, clusters } from '../../data/knowledgeArchitecture';
import { ArrowLeft, ArrowRight, Search, BookOpen, TreePine, Recycle } from 'lucide-react';
import { CloudinaryImage } from '../../components/cloudinary/CloudinaryImage';

export default function KnowledgeHub() {
  const { t, language } = useSettings();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { title: string; type: string; link: string; description?: string }[] = [];
    
    clusters.forEach(c => {
      if (c.titleAr.toLowerCase().includes(query) || c.titleEn.toLowerCase().includes(query) || c.descriptionAr.toLowerCase().includes(query)) {
        results.push({
          title: t(c.titleAr, c.titleEn),
          type: t('تصنيف فرعي', 'Cluster'),
          link: `/knowledge/cluster/${c.slug}`,
          description: t(c.descriptionAr, c.descriptionEn)
        });
      }
      
      if (c.articleSlots) {
        c.articleSlots.forEach(article => {
          if (article.title.toLowerCase().includes(query)) {
            results.push({
              title: article.title,
              type: t('مقال', 'Article'),
              link: `/knowledge/article/${article.slug}`
            });
          }
        });
      }
    });

    return results.slice(0, 5);
  }, [searchQuery, language, t]);

  return (
    <div className="min-h-screen bg-bg-primary pt-24 lg:pt-32 pb-24">
      <Helmet>
        <title>{language === 'ar' ? 'مركز المعرفة | رايات نجد' : 'Knowledge Center | Rayat Najd'}</title>
        <meta name="description" content={language === 'ar' ? 'المرجع العربي الأول لتشجير، اللاندسكيب، والنخيل في المملكة العربية السعودية.' : 'The premier Arabic reference for afforestation, landscaping, and palm trees in Saudi Arabia.'} />
      </Helmet>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
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
            className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main mb-6 leading-tight"
          >
            {t("مركز ", "Knowledge ")} 
            <span className="text-primary">{t("المعرفة", "Center")}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-text-muted leading-relaxed mb-8"
          >
            {t(
              "أكبر مرجع عربي متخصص في مجالات التشجير، اللاندسكيب، الاستدامة البيئية، وكل ما يتعلق بالنباتات والمشاريع الخضراء.",
              "The largest specialized Arabic reference in afforestation, landscaping, environmental sustainability, and everything related to plants and green projects."
            )}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder={t("ابحث في مركز المعرفة...", "Search in Knowledge Center...")}
              className="w-full h-14 pl-12 pr-4 rtl:pr-12 rtl:pl-4 rounded-2xl bg-card-background border border-card-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm relative z-10"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4 w-5 h-5 text-text-muted z-20" />
            
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card-background border border-card-border rounded-xl shadow-xl z-50 overflow-hidden text-start">
                {searchResults.map((result, idx) => (
                  <Link
                    key={idx}
                    to={result.link}
                    className="block px-6 py-4 hover:bg-bg-secondary border-b border-card-border last:border-0 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-text-main">{result.title}</span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{result.type}</span>
                    </div>
                    {result.description && (
                      <p className="text-sm text-text-muted line-clamp-1">{result.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/knowledge/category/${category.slug}`}
                className="block h-full p-8 rounded-3xl bg-card-background border border-card-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {category.icon === 'TreePine' ? <TreePine className="w-7 h-7" /> : <Recycle className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {t(category.titleAr, category.titleEn)}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {t(category.descriptionAr, category.descriptionEn)}
                </p>
                <div className="flex items-center text-primary font-medium text-sm gap-2">
                  {t("استكشف التصنيف", "Explore Category")}
                  <Arrow className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pillars Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main">
              {t("الأدلة الشاملة (Pillars)", "Comprehensive Guides (Pillars)")}
            </h2>
          </div>
          
          <Link 
            to={`/knowledge/pillar/${firstPillar.slug}`}
            className="block relative rounded-3xl overflow-hidden group h-[300px] md:h-[400px]"
          >
            <CloudinaryImage 
              src={firstPillar.heroImage}
              alt={t(firstPillar.titleAr, firstPillar.titleEn)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
               <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {t("دليل شامل", "Pillar Guide")}
                 </span>
               </div>
               <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                 {t(firstPillar.titleAr, firstPillar.titleEn)}
               </h3>
               <p className="text-white/80 max-w-3xl line-clamp-2 md:line-clamp-none mb-6">
                 {t(firstPillar.descriptionAr, firstPillar.descriptionEn)}
               </p>
               <div className="flex items-center text-white font-medium text-sm gap-2 group-hover:text-primary transition-colors">
                  {t("اقرأ الدليل الشامل", "Read Comprehensive Guide")}
                  <Arrow className="w-4 h-4 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
               </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
