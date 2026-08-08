import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../../contexts/SettingsContext';
import KnowledgeBreadcrumb from '../../components/knowledge/Breadcrumb';
import { CloudinaryImage } from '../../components/cloudinary/CloudinaryImage';
import { palmSupplySaudiArabia } from '../../data/articles/palmSupplySaudiArabia';
import { bestPalmsForProjectsKsa } from '../../data/articles/bestPalmsForProjectsKsa';
import { washingtoniaSupplyRiyadh } from '../../data/articles/washingtoniaSupplyRiyadh';
import { Article } from '../../types/knowledge';
import { Calendar, User, Clock, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

const allArticles: Record<string, Article> = {
  'palm-supply-saudi-arabia': palmSupplySaudiArabia,
  'best-palm-trees-for-projects-saudi-arabia': bestPalmsForProjectsKsa,
  'washingtonia-palm-supply-riyadh': washingtoniaSupplyRiyadh
};

export default function ArticlePage() {
  const { slug } = useParams();
  const { t, language } = useSettings();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (slug && allArticles[slug]) {
      setArticle(allArticles[slug]);
    } else {
      // Fallback for preview or unknown routes
      setArticle(palmSupplySaudiArabia);
    }
  }, [slug]);

  // TOC Intersection Observer
  useEffect(() => {
    if (!article) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    article.sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article]);

  if (!article) {
    return <div className="min-h-screen pt-32 flex justify-center"><div className="animate-pulse w-16 h-16 bg-primary/20 rounded-full"></div></div>;
  }

  const Chevron = language === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-bg-primary pt-24 lg:pt-32 pb-24">
      <Helmet>
        <title>{article.seo.title}</title>
        <meta name="description" content={article.seo.description} />
        {article.seo.canonicalUrl && <link rel="canonical" href={article.seo.canonicalUrl} />}
        {/* Basic Schema Injection */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.seo.title,
            "description": article.seo.description,
            "image": article.heroImage,
            "author": { "@type": "Organization", "name": "Rayat Najd" },
            "publisher": { "@type": "Organization", "name": "Rayat Najd" },
            "datePublished": article.publishedAt
          })}
        </script>
        {article.faqs && article.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": article.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.questionAr,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answerAr
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="mb-6">
          <KnowledgeBreadcrumb items={[
            { nameAr: "مركز المعرفة", nameEn: "Knowledge Center", path: "/knowledge" },
            { nameAr: "النخيل", nameEn: "Palm Trees", path: "/knowledge/cluster/palm-trees" },
            { nameAr: article.titleAr, nameEn: article.titleEn }
          ]} />
        </div>

        {/* Hero Section */}
        <div className="mb-12 border-b border-card-border pb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <span key={tag.id} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {t(tag.nameAr, tag.nameEn)}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main mb-6 leading-tight">
            {t(article.titleAr, article.titleEn)}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-text-muted text-sm font-medium">
            <div className="flex items-center gap-2">
               <User className="w-4 h-4" />
               {article.authorId === 'rayat-najd-editorial' ? t("فريق التحرير الهندسي", "Engineering Editorial Team") : article.authorId}
            </div>
            <div className="flex items-center gap-2">
               <Calendar className="w-4 h-4" />
               {new Date(article.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
               <Clock className="w-4 h-4" />
               {article.readingTimeMinutes} {t("دقيقة قراءة", "min read")}
            </div>
          </div>
        </div>

        {article.heroImage && (
          <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-md">
            <CloudinaryImage src={article.heroImage} alt={t(article.titleAr, article.titleEn)} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Main Content Area */}
          <main className="flex-grow lg:w-2/3 xl:w-3/4">
             {article.sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 mb-16">
                  {section.id !== 'cta' && (
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6 leading-snug">
                       {t(section.titleAr, section.titleEn)}
                    </h2>
                  )}
                  <div className="prose dark:prose-invert max-w-none text-lg text-text-muted leading-loose space-y-6">
                    {language === 'ar' ? section.contentAr : section.contentEn}
                  </div>
                </section>
             ))}

             {/* FAQs */}
             {article.faqs && article.faqs.length > 0 && (
               <section id="faqs" className="scroll-mt-32 mb-16 pt-8 border-t border-card-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">
                     {t("الأسئلة الشائعة", "Frequently Asked Questions")}
                  </h2>
                  <div className="space-y-4">
                    {article.faqs.map((faq, index) => (
                      <details key={index} className="group bg-card-background border border-card-border rounded-xl p-6 open:bg-primary/5 transition-colors cursor-pointer">
                        <summary className="flex justify-between items-center font-bold text-text-main text-lg marker:content-none">
                          {t(faq.questionAr, faq.questionEn)}
                          <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="mt-4 text-text-muted leading-relaxed">
                          {t(faq.answerAr, faq.answerEn)}
                        </p>
                      </details>
                    ))}
                  </div>
               </section>
             )}

             {/* Future Related Articles Slots */}
             {article.relatedArticles && article.relatedArticles.length > 0 && (
               <section className="mb-16 pt-8 border-t border-card-border">
                  <h2 className="text-2xl font-bold text-text-main mb-8">
                     {t("مقالات ذات صلة مستقبلاً", "Future Related Articles")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {article.relatedArticles.map((rel, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-card-border bg-bg-secondary flex justify-between items-center group cursor-pointer hover:border-primary/50 transition-colors">
                           <span className="font-bold text-text-main group-hover:text-primary transition-colors">{rel.title}</span>
                           <Chevron className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                        </div>
                     ))}
                  </div>
               </section>
             )}
          </main>

          {/* Table of Contents Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4 shrink-0 hidden lg:block">
            <div className="sticky top-32 p-6 rounded-2xl border border-card-border bg-card-background">
               <h3 className="font-bold text-xl text-text-main mb-4">{t("محتويات الدليل", "Table of Contents")}</h3>
               <ul className="space-y-3">
                 {article.sections.map(section => (
                   <li key={section.id}>
                     <a 
                        href={`#${section.id}`} 
                        className={`block text-sm font-medium transition-colors ${activeSection === section.id ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
                     >
                       {t(section.titleAr, section.titleEn)}
                     </a>
                   </li>
                 ))}
                 {article.faqs && article.faqs.length > 0 && (
                   <li>
                     <a href="#faqs" className={`block text-sm font-medium transition-colors ${activeSection === 'faqs' ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}>
                        {t("الأسئلة الشائعة", "FAQs")}
                     </a>
                   </li>
                 )}
               </ul>
            </div>
          </aside>
          
        </div>
      </div>
    </div>
  );
}
