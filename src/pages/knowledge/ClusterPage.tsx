import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../../contexts/SettingsContext';
import KnowledgeBreadcrumb from '../../components/knowledge/Breadcrumb';
import { clusters, firstPillar } from '../../data/knowledgeArchitecture';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';

export default function ClusterPage() {
  const { slug } = useParams();
  const { t, language } = useSettings();
  
  // Mock data fetching
  const cluster = clusters.find(c => c.slug === slug) || clusters[0];
  const pillar = firstPillar;

  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-bg-primary pt-24 lg:pt-32 pb-24">
      <Helmet>
        <title>{t(cluster.titleAr, cluster.titleEn)} | {t("رايات نجد", "Rayat Najd")}</title>
      </Helmet>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
        <div className="mb-8">
          <KnowledgeBreadcrumb items={[
            { nameAr: "مركز المعرفة", nameEn: "Knowledge Center", path: "/knowledge" },
            { nameAr: pillar.titleAr, nameEn: pillar.titleEn, path: `/knowledge/pillar/${pillar.slug}` },
            { nameAr: cluster.titleAr, nameEn: cluster.titleEn }
          ]} />
        </div>

        <div className="bg-card-background border border-card-border rounded-3xl p-8 lg:p-12 text-center mb-12 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
           
           <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Layers className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6">
                {t(cluster.titleAr, cluster.titleEn)}
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
                صفحة العنقود (Cluster Page) - هذا القالب جاهز لاستقبال المحتوى المتخصص، المقالات المرتبطة، الخدمات المباشرة، وقواعد المعرفة الدقيقة حول هذا الموضوع.
                <br/>
                <span className="text-sm">Cluster Page - This template is ready for specialized content, related articles, direct services, and detailed knowledge bases on this topic.</span>
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cluster.articleSlots && cluster.articleSlots.length > 0 ? (
             cluster.articleSlots.map((article, idx) => (
               <Link key={idx} to={`/knowledge/article/${article.slug}`} className="bg-card-background border border-card-border rounded-2xl p-6 hover:shadow-md transition-shadow group">
                 <div className="w-full h-40 bg-bg-secondary rounded-xl mb-4 flex items-center justify-center text-primary/40 font-bold border border-card-border/50">
                   {article.type === 'published' ? t("مقال منشور", "Published") : t("محجوز", "Slot")}
                 </div>
                 <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                 <div className="flex justify-between items-center mt-6">
                   <div className="text-sm font-medium text-primary">
                     {t("اقرأ المزيد", "Read More")}
                   </div>
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Arrow className="w-4 h-4 text-primary group-hover:text-white" />
                   </div>
                 </div>
               </Link>
             ))
           ) : (
             /* Mock Articles Placeholders */
             [1, 2, 3, 4, 5, 6].map(i => (
               <div key={i} className="bg-card-background border border-card-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                 <div className="w-full h-40 bg-bg-secondary rounded-xl mb-4 flex items-center justify-center text-text-muted text-sm border border-card-border/50">
                   Image Placeholder
                 </div>
                 <div className="h-6 bg-bg-secondary rounded-md w-3/4 mb-3"></div>
                 <div className="h-4 bg-bg-secondary rounded-md w-full mb-2"></div>
                 <div className="h-4 bg-bg-secondary rounded-md w-5/6 mb-4"></div>
                 <div className="flex justify-between items-center mt-6">
                   <div className="w-20 h-4 bg-bg-secondary rounded-md"></div>
                   <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Arrow className="w-4 h-4 text-primary" />
                   </div>
                 </div>
               </div>
             ))
           )}
        </div>
      </div>
    </div>
  );
}
