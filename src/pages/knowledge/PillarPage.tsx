import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { firstPillar, clusters } from '../../data/knowledgeArchitecture';
import { useSettings } from '../../contexts/SettingsContext';
import KnowledgeBreadcrumb from '../../components/knowledge/Breadcrumb';
import TableOfContents from '../../components/knowledge/TableOfContents';
import ReadingProgress from '../../components/knowledge/ReadingProgress';
import { ArrowLeft, ArrowRight, Download, FileText, LayoutGrid, Leaf, Sparkles } from 'lucide-react';
import { CloudinaryImage } from '../../components/cloudinary/CloudinaryImage';
import SEO from '../../components/SEO';

export default function PillarPage() {
  const { slug } = useParams();
  const { t, language } = useSettings();
  
  // In a real app, we would fetch the pillar by slug. For now, we use the mock.
  const pillar = firstPillar;
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const pillarUrl = `https://www.rayatnajd.com/knowledge/pillar/${pillar.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pillar.seo.title,
    "description": pillar.seo.description,
    "image": pillar.heroImage,
    "author": {
      "@type": "Organization",
      "name": "رايات نجد للتشجير والاستدامة البيئية"
    },
    "publisher": {
      "@type": "Organization",
      "name": "رايات نجد للتشجير والاستدامة البيئية",
      "url": "https://www.rayatnajd.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.rayatnajd.com/01-brand/logo/rayatnajd-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pillarUrl
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-24 lg:pt-32 pb-24">
      <SEO
        title={pillar.seo.title}
        description={pillar.seo.description}
        canonicalUrl={pillarUrl}
        ogType="article"
        ogImage={pillar.heroImage}
        structuredData={articleSchema}
        breadcrumbs={[
          { name: "الرئيسية", item: "/" },
          { name: "مركز المعرفة", item: "/knowledge" },
          { name: language === 'ar' ? pillar.titleAr : pillar.titleEn, item: `/knowledge/pillar/${pillar.slug}` }
        ]}
      />

      <ReadingProgress />

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        
        <div className="mb-8">
          <KnowledgeBreadcrumb items={[
            { nameAr: "مركز المعرفة", nameEn: "Knowledge Center", path: "/knowledge" },
            { nameAr: pillar.titleAr, nameEn: pillar.titleEn }
          ]} />
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 h-[400px] lg:h-[500px]">
          <CloudinaryImage 
            src={pillar.heroImage} 
            alt={t(pillar.titleAr, pillar.titleEn)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-8 lg:p-12 w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                {pillar.tags.map(tag => (
                  <span key={tag.id} className="px-3 py-1 bg-primary/20 backdrop-blur-md text-white text-xs rounded-full border border-white/10">
                    {t(tag.nameAr, tag.nameEn)}
                  </span>
                ))}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
              >
                {t(pillar.titleAr, pillar.titleEn)}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
              >
                {t(pillar.descriptionAr, pillar.descriptionEn)}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          
          {/* Main Content Area */}
          <main className="flex-grow lg:w-2/3 xl:w-3/4">
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
               <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl mb-10 flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-text-main leading-relaxed m-0">
                    هذه الصفحة هي المرجع الشامل (Pillar Page) وتعتبر نقطة الانطلاق لكل ما يخص التشجير في المملكة.
                    <br/><span className="text-sm text-text-muted">This page is the Pillar Page and serves as the starting point for everything related to afforestation in the Kingdom.</span>
                  </p>
               </div>

              {pillar.sections.map((section) => (
                <section key={section.id} id={`section-${section.id}`} className="scroll-mt-32 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6">
                    {t(section.titleAr, section.titleEn)}
                  </h2>
                  <div className="p-8 bg-card-background border border-card-border rounded-2xl shadow-sm text-center">
                    <p className="text-text-muted">
                      [محتوى هيكلي فارغ جاهز للملء مستقبلاً / Empty structured content ready for future populating]
                    </p>
                  </div>
                </section>
              ))}
            </div>

            {/* Clusters (Child Topics) */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
                <LayoutGrid className="w-6 h-6 text-primary" />
                {t("المواضيع المتفرعة", "Subtopics & Clusters")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clusters.map((cluster, idx) => (
                  <Link 
                    key={cluster.id}
                    to={`/knowledge/cluster/${cluster.slug}`}
                    className="p-5 rounded-2xl bg-card-background border border-card-border hover:border-primary/30 hover:shadow-md transition-all group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                         <Leaf className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-text-main group-hover:text-primary transition-colors">
                        {t(cluster.titleAr, cluster.titleEn)}
                      </span>
                    </div>
                    <Arrow className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {pillar.faqs.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-text-main mb-6">
                  {t("الأسئلة الشائعة", "Frequently Asked Questions")}
                </h3>
                <div className="space-y-4">
                  {pillar.faqs.map((faq, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-bg-secondary border border-card-border">
                      <h4 className="font-bold text-text-main mb-2">{t(faq.questionAr, faq.questionEn)}</h4>
                      <p className="text-text-muted">{t(faq.answerAr, faq.answerEn)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 xl:w-1/4 shrink-0 space-y-8">
            <TableOfContents sections={pillar.sections} />
            
            {/* Downloadable Resources */}
            {pillar.downloadableResources.length > 0 && (
              <div className="bg-card-background border border-card-border rounded-2xl p-6">
                <h3 className="font-bold text-lg text-text-main mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  {t("الموارد القابلة للتنزيل", "Downloadable Resources")}
                </h3>
                <div className="space-y-3">
                  {pillar.downloadableResources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.url}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-secondary transition-colors border border-transparent hover:border-card-border group"
                    >
                      <FileText className="w-5 h-5 text-text-muted group-hover:text-primary" />
                      <span className="text-sm font-medium text-text-main group-hover:text-primary">
                        {t(resource.titleAr, resource.titleEn)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            
          </aside>
        </div>
      </div>
    </div>
  );
}
