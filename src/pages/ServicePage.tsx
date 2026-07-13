import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import { getServiceData } from "../data/servicesData";
import { CloudinaryImage } from "../components/cloudinary/CloudinaryImage";
import ContactForm from "../components/home/ContactForm";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import React, { useState } from "react";

const FaqItem: React.FC<{ q: any, language: string }> = ({ q, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-bg-primary rounded-2xl border border-text-main/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
      >
        <span className="font-bold text-text-main">{language === 'ar' ? q.qAr : q.qEn}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-text-muted text-sm leading-relaxed border-t border-text-main/5 pt-4 text-right">
          {language === 'ar' ? q.aAr : q.aEn}
        </div>
      )}
    </div>
  );
}

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useSettings();
  const data = getServiceData(id || "");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleQuoteClick = () => {
    window.dispatchEvent(new Event("openQuoteModal"));
  };

  const handleWhatsApp = () => {
    const text = language === 'ar' 
      ? `مرحباً رايات نجد، أرغب في الاستفسار عن قسم: ${data.titleAr}`
      : `Hello Rayat Najd, I would like to inquire about: ${data.titleEn}`;
    window.open(`https://wa.me/966553308786?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      {/* 1. Professional Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 w-full h-full"
        >
          <CloudinaryImage 
            src="https://res.cloudinary.com/erfajaoa/image/upload/v1783374944/WhatsApp_Image_2026-07-04_at_11.57.02_PM_pfl01h.jpg" 
            alt={language === 'ar' ? data.titleAr : data.titleEn} 
            width={1920}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {language === 'ar' ? data.titleAr : data.titleEn}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {language === 'ar' ? data.subtitleAr : data.subtitleEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-bg-secondary py-4 border-b border-text-main/5">
        <div className="container mx-auto px-6 max-w-7xl flex items-center gap-2 text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">
            {t("الرئيسية", "Home")}
          </Link>
          <span className="text-text-main/30">/</span>
          <Link to="/#services" className="hover:text-primary transition-colors">
            {t("حلولنا المتكاملة", "Integrated Solutions")}
          </Link>
          <span className="text-text-main/30">/</span>
          <span className="text-text-main font-bold">
            {language === 'ar' ? data.titleAr : data.titleEn}
          </span>
        </div>
      </div>

      {/* 2 & 3. Introduction & Importance */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-main mb-6">
                {t("نظرة عامة", "Overview")}
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-4xl mx-auto text-justify md:text-center">
                {language === 'ar' ? data.introAr : data.introEn}
              </p>
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 text-start">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  {t("لماذا هذا النشاط مهم؟", "Why is this activity important?")}
                </h3>
                <p className="text-text-main/80 leading-relaxed text-lg text-justify md:text-start">
                  {language === 'ar' ? data.importanceAr : data.importanceEn}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Types/Services Included */}
      <section className="py-20 bg-bg-secondary border-y border-text-main/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                {t("الأنواع والخدمات المتاحة", "Available Types & Services")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.types.map((type: any, idx: number) => (
                <div key={idx} className="bg-bg-primary p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-text-main/5 hover:border-primary/30 transition-all duration-300 flex flex-col group">
                  <div className="text-4xl bg-bg-secondary w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-xl text-text-main mb-3">
                    {language === 'ar' ? type.nameAr : type.nameEn}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">
                    {language === 'ar' ? type.descAr : type.descEn}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 & 6. Gallery */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                  {t("معرض الصور", "Photo Gallery")}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.gallery.map((img: any, idx: number) => (
                  <div key={idx} className="relative group rounded-3xl overflow-hidden aspect-square bg-bg-secondary shadow-sm hover:shadow-xl transition-shadow">
                    <CloudinaryImage 
                      src={img.url} 
                      alt={language === 'ar' ? img.nameAr : img.nameEn} 
                      width={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-bold text-lg">
                        {language === 'ar' ? img.nameAr : img.nameEn}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 8. Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-main mb-12">
              {t("لماذا تختار رايات نجد؟", "Why Choose Rayat Najd?")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-bg-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-main">{t("نفهم احتياجك", "We Understand You")}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("نستمع لك بعناية لنحول رؤيتك إلى واقع يناسب بيئتك وتطلعاتك الشخصية.", "We listen carefully to turn your vision into a reality that suits your environment and personal aspirations.")}</p>
              </div>
              <div className="p-8 bg-bg-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-main">{t("نزرع لتدوم", "Planted to Last")}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("نختار النباتات التي تعيش وتتأقلم مع مناخنا لتستمتع بمساحتك الخضراء لسنوات طويلة.", "We select plants that thrive in our climate so you can enjoy your green space for years to come.")}</p>
              </div>
              <div className="p-8 bg-bg-secondary rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-main">{t("معك خطوة بخطوة", "With You Every Step")}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t("من أول فكرة وحتى ما بعد اكتمال المشروع، نحن بجانبك لنضمن لك راحة البال.", "From the first idea to long after completion, we are by your side to ensure your peace of mind.")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ Specific */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 bg-bg-secondary border-y border-text-main/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-text-main mb-10 text-center">
                {t("الأسئلة الشائعة", "Frequently Asked Questions")}
              </h2>
              <div className="space-y-4">
                {data.faq.map((q: any, idx: number) => (
                  <FaqItem key={idx} q={q} language={language} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 10. Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                 {t("تواصل معنا", "Contact Us")}
               </h2>
               <p className="text-lg text-text-muted max-w-2xl mx-auto">
                 {t("نحن هنا للإجابة على استفساراتك وتقديم الدعم اللازم.", "We are here to answer your inquiries and provide necessary support.")}
               </p>
            </div>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2560')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md leading-tight">
                {t(`مهتم بـ ${language === 'ar' ? data.titleAr : data.titleEn}؟`, `Interested in ${language === 'ar' ? data.titleAr : data.titleEn}?`)}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 drop-shadow-md">
                {t("دع خبراء رايات نجد يساعدونك في اختيار الحل الأنسب لمشروعك.", "Let Rayat Najd experts help you choose the most suitable solution for your project.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={handleQuoteClick} 
                  className="w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-bg-secondary hover:-translate-y-1 transition-all shadow-xl shadow-black/10"
                >
                  {t("اطلب عرض سعر", "Request a Quote")}
                </button>
                <button 
                  onClick={handleWhatsApp} 
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary hover:-translate-y-1 transition-all shadow-xl shadow-black/10"
                >
                  {t("تحدث مع أحد المختصين", "Talk to a Specialist")}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
