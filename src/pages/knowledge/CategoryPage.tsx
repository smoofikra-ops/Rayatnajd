import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../../contexts/SettingsContext';
import KnowledgeBreadcrumb from '../../components/knowledge/Breadcrumb';
import { categories, firstPillar } from '../../data/knowledgeArchitecture';
import { LayoutGrid } from 'lucide-react';
import { CloudinaryImage } from '../../components/cloudinary/CloudinaryImage';

export default function CategoryPage() {
  const { slug } = useParams();
  const { t } = useSettings();
  
  // Mock data fetching
  const category = categories.find(c => c.slug === slug) || categories[0];

  return (
    <div className="min-h-screen bg-bg-primary pt-24 lg:pt-32 pb-24">
      <Helmet>
        <title>{t(category.titleAr, category.titleEn)} | {t("رايات نجد", "Rayat Najd")}</title>
      </Helmet>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="mb-8">
          <KnowledgeBreadcrumb items={[
            { nameAr: "مركز المعرفة", nameEn: "Knowledge Center", path: "/knowledge" },
            { nameAr: category.titleAr, nameEn: category.titleEn }
          ]} />
        </div>

        <div className="bg-card-background border border-card-border rounded-3xl p-8 lg:p-12 text-center mb-12 shadow-sm">
           <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
             <LayoutGrid className="w-8 h-8" />
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6">
             {t(category.titleAr, category.titleEn)}
           </h1>
           <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
             {t(category.descriptionAr, category.descriptionEn)}
           </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
           {/* Mock Pillar Listing */}
           {firstPillar.categoryId === category.id && (
             <div className="bg-card-background border border-card-border rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-shadow">
               <div className="w-full md:w-1/3 h-48 bg-bg-secondary rounded-xl flex items-center justify-center text-text-muted text-sm border border-card-border/50 overflow-hidden">
                 <CloudinaryImage src={firstPillar.heroImage} alt="" className="w-full h-full object-cover" />
               </div>
               <div className="w-full md:w-2/3">
                 <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">Pillar Guide</span>
                 <h2 className="text-2xl font-bold text-text-main mb-3">{t(firstPillar.titleAr, firstPillar.titleEn)}</h2>
                 <p className="text-text-muted mb-4">{t(firstPillar.descriptionAr, firstPillar.descriptionEn)}</p>
                 <a href={`/knowledge/pillar/${firstPillar.slug}`} className="text-primary font-medium hover:underline">
                   {t("اقرأ الدليل", "Read Guide")}
                 </a>
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
