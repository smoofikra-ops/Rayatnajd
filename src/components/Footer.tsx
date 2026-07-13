import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Leaf, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ChevronDown } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import { motion, AnimatePresence } from "motion/react";

const FooterAccordion = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10 md:border-none py-4 md:py-0">
      <button 
        className="flex items-center justify-between w-full md:cursor-auto text-right"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-white font-semibold md:mb-6">{title}</h3>
        <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${isOpen ? 'rotate-180': ''}`} />
      </button>
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div 
            initial={window.innerWidth < 768 ? { height: 0, opacity: 0 } : false}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:!h-auto md:!opacity-100 overflow-hidden"
          >
            <div className="pt-4 md:pt-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Footer() {
  const { t, language, setLanguage } = useSettings();

  return (
    <footer className="relative text-white pt-16 md:pt-24 pb-8 md:pb-10 mt-0 border-t-0">
      {/* Background with seamless mask transition */}
      <div 
        className="absolute inset-0 bg-gradient-animated pointer-events-none -z-20"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)'
        }}
      ></div>
      
      {/* Atmospheric radial glows bleeding upwards into the page */}
      <div className="absolute top-0 left-0 right-0 h-[100px] pointer-events-none -z-10">
        <div className="absolute -top-20 left-1/4 right-1/4 h-[200px] bg-primary/20 rounded-[100%] blur-[80px]"></div>
        <div className="absolute -top-10 -left-20 w-[60%] h-[200px] bg-accent-gold/10 rounded-[100%] blur-[80px]"></div>
        <div className="absolute -top-10 -right-20 w-[60%] h-[200px] bg-primary-dark/15 rounded-[100%] blur-[80px]"></div>
      </div>
      
      {/* Overlay for text contrast, masked seamlessly */}
      <div 
        className="absolute inset-0 bg-black/20 pointer-events-none -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100px)'
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6 mb-8 md:mb-0 text-center md:text-right md:ltr:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
              <div className="relative w-12 h-12 rounded-full shadow-lg overflow-hidden border-2 border-primary/20 bg-white flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/erfajaoa/image/upload/v1783298171/%D9%84%D9%82%D8%B7%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9_2026-06-28_%D9%81%D9%8A_4.03.31_%D8%B5_mfq3dq.png" 
                  alt="Rayat Najd Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {t("رايات نجد", "Rayat Najd")}
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed font-semibold">
              {t("نزرع المستقبل... ونصنع الاستدامة", "We plant the future... and create sustainability")}
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              {t(
                "شريككم الأول في التشجير والاستدامة البيئية، نعمل على تطوير المشهد الحضري وزيادة الغطاء النباتي بما يتوافق مع رؤية المملكة 2030.",
                "Your premier partner in afforestation and environmental sustainability. We work on developing the urban landscape."
              )}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-black text-white hover:brightness-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:brightness-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-[#0077b5] text-white hover:brightness-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-[#FFFC00] text-black hover:brightness-110">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.21,1.52A5.15,5.15,0,0,0,8.27,3a4.7,4.7,0,0,0-1.42,3.33,7,7,0,0,0,.15,1.55c.2.82.52,1.6.86,2.37a8.55,8.55,0,0,1,.87,2.22,1.21,1.21,0,0,1-.06.75A2.32,2.32,0,0,1,7.21,14c-1.21.36-2.48.51-3.69.74A1.66,1.66,0,0,0,2.15,16a1.32,1.32,0,0,0,.19,1.07A1.56,1.56,0,0,0,3.61,18a6.56,6.56,0,0,0,2.6-.45,4.71,4.71,0,0,1,2.06-.21,1.91,1.91,0,0,1,1.32.9,1.83,1.83,0,0,1,.19,1.14c-.06.58-.2,1.15-.36,1.72a2.38,2.38,0,0,0,1.59,2.83,5.17,5.17,0,0,0,3,.14,2.38,2.38,0,0,0,1.76-2.55c-.13-.67-.31-1.34-.41-2a1.86,1.86,0,0,1,1.48-2.18,4.72,4.72,0,0,1,2.2.14,6.57,6.57,0,0,0,2.5.55A1.56,1.56,0,0,0,21.66,17a1.32,1.32,0,0,0,.19-1.07A1.66,1.66,0,0,0,20.48,14.7c-1.21-.23-2.48-.38-3.69-.74a2.32,2.32,0,0,1-1.46-.77,1.21,1.21,0,0,1-.06-.75,8.55,8.55,0,0,1,.87-2.22c.34-.77.66-1.55.86-2.37a7,7,0,0,0,.15-1.55A4.7,4.7,0,0,0,15.73,3,5.15,5.15,0,0,0,11.79,1.52Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-black text-white hover:brightness-110 border border-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.33-.02-.66-.01-.99.14-2.08 1.14-4 2.8-5.3 1.7-1.3 3.87-1.92 5.96-1.67V11.6c-1.14-.23-2.35-.14-3.41.36-1.23.54-2.14 1.6-2.45 2.89-.13.51-.15 1.05-.08 1.57.17 1.34.98 2.54 2.14 3.21 1.05.62 2.31.78 3.47.53 1.31-.28 2.4-1.12 2.99-2.32.34-.67.49-1.43.48-2.18-.04-4.83-.02-9.67-.03-14.51h-.03z"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterAccordion title={t("روابط سريعة", "Quick Links") as string}>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("من نحن", "About Us")}</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("خدماتنا", "Services")}</a></li>
              <li><a href="#products" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("الكتالوج", "Catalog")}</a></li>
              <li>
                <Link to="/tools" className="text-white/80 hover:text-accent-gold transition-colors text-sm">
                  {t("مركز الأدوات الذكية", "Smart Tools")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-accent-gold transition-colors text-sm">
                  {t("المدونة", "Blog")}
                </Link>
              </li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("دليل العناية بالنباتات", "Plant Care Guide")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("مبادرات الرياض الخضراء", "Green Riyadh Initiatives")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("انضم إلينا", "Join Us")}</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title={t("القطاعات", "Sectors") as string}>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("الجهات الحكومية", "Government Agencies")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("المطورون العقاريون", "Real Estate Developers")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("الفنادق والمنتجعات", "Hotels & Resorts")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("المقاولون", "Contractors")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("القصور والفلل الخاصة", "Private Palaces & Villas")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("المراكز التجارية", "Commercial Centers")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("المؤسسات التعليمية", "Educational Institutions")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent-gold transition-colors text-sm">{t("المستشفيات والمراكز الصحية", "Hospitals & Healthcare")}</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title={t("تحدث مع خبير", "Talk to an Expert") as string}>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0" />
                <span>{t("الرياض، المملكة العربية السعودية", "Riyadh, Saudi Arabia")}</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                <span dir="ltr" className="text-[14px] leading-[20px] -ml-[33px]">+966 55 330 8786</span>
                <span className="mx-2">|</span>
                <span dir="ltr">+966 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                <span>info@rayatnajd.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <svg className="w-5 h-5 text-accent-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t("الأحد - الخميس: 8:00 ص - 5:00 م", "Sun - Thu: 8:00 AM - 5:00 PM")}</span>
              </li>
              <li className="pt-4">
                 <button 
                   onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
                   className="inline-block px-6 py-2.5 rounded-full bg-white text-emerald-900 hover:bg-white/90 text-sm font-semibold hover:opacity-80 transition-opacity w-full md:w-auto"
                 >
                   {t("اطلب عرض سعر", "Request a Quote")}
                 </button>
              </li>
            </ul>
          </FooterAccordion>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} {t("رايات نجد للتشجير. جميع الحقوق محفوظة.", "Rayat Najd. All rights reserved.")}
            </p>
            <p className="text-white/80 text-xs flex items-center gap-1">
               {t("تصميم بواسطة", "Designed by")} <a href="https://www.nmolabs.com/" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">نمو لابز (Numo Labs)</a>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-black/20 border border-white/10 rounded-full p-1 shadow-inner">
             <button 
               onClick={() => setLanguage("ar")}
               className={`px-3 py-1 text-xs rounded-full transition-colors ${language === "ar" ? "bg-primary text-white" : "text-white/80 hover:text-white"}`}>
               العربية
             </button>
             <button 
                onClick={() => setLanguage("en")}
               className={`px-3 py-1 text-xs rounded-full transition-colors ${language === "en" ? "bg-primary text-white" : "text-white/80 hover:text-white"}`}>
               English
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
