import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Leaf, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ChevronDown, Youtube } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import { motion, AnimatePresence } from "motion/react";

const FooterAccordion = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10 md:border-none py-4 md:py-0">
      <button 
        className="flex items-center justify-between w-full md:cursor-auto text-right md:pointer-events-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-white font-semibold md:mb-6">{title}</h3>
        <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${isOpen ? 'rotate-180': ''}`} />
      </button>
      
      {/* Mobile view (collapsible) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>

      {/* Desktop view (always visible) */}
      <div className="hidden md:block">
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const { t, language, setLanguage } = useSettings();

  return (
    <footer className="relative text-white pt-16 md:pt-24 pb-8 md:pb-10 mt-0 border-t-0 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-6 mb-8 md:mb-0 text-center md:text-right md:ltr:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
              <div className="relative w-12 h-12 rounded-full shadow-lg overflow-hidden border-2 border-primary/20 bg-white flex items-center justify-center">
                <img 
                  src="https://cdn.rayatnajd.com/01-brand/logo/rayatnajd-logo.png"
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
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
              <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-black text-white hover:brightness-110 border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:brightness-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-[#0077b5] text-white hover:brightness-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                aria-label="Snapchat"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-[#FFFC00] hover:brightness-110 p-2 overflow-hidden"
              >
                <img 
                  src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/02-website/icons/snap-logo.png" 
                  alt="Snapchat" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a 
                href="https://www.youtube.com/@rayatnajd-sa" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-[#FF0000] text-white hover:brightness-110"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@rayatnajd.sa" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg bg-black text-white hover:brightness-110 border border-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.33-.02-.66-.01-.99.14-2.08 1.14-4 2.8-5.3 1.7-1.3 3.87-1.92 5.96-1.67V11.6c-1.14-.23-2.35-.14-3.41.36-1.23.54-2.14 1.6-2.45 2.89-.13.51-.15 1.05-.08 1.57.17 1.34.98 2.54 2.14 3.21 1.05.62 2.31.78 3.47.53 1.31-.28 2.4-1.12 2.99-2.32.34-.67.49-1.43.48-2.18-.04-4.83-.02-9.67-.03-14.51h-.03z"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterAccordion title={t("روابط سريعة", "Quick Links") as string}>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("من نحن", "About Us")}</Link></li>
              <li><Link to="/#services" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("خدماتنا", "Services")}</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("مشاريعنا", "Projects")}</Link></li>
              <li><Link to="/catalog" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("الكتالوج", "Catalog")}</Link></li>
              <li>
                <Link to="/tools" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">
                  {t("المعرفة والذكاء", "Knowledge & Intelligence")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">
                  {t("المدونة", "Blog")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">
                  {t("اتصل بنا", "Contact Us")}
                </Link>
              </li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("دليل العناية بالنباتات", "Plant Care Guide")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("مبادرات الرياض الخضراء", "Green Riyadh Initiatives")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("انضم إلينا", "Join Us")}</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title={t("القطاعات", "Sectors") as string}>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("الجهات الحكومية", "Government Agencies")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("المطورون العقاريون", "Real Estate Developers")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("الفنادق والمنتجعات", "Hotels & Resorts")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("المقاولون", "Contractors")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("القصور والفلل الخاصة", "Private Palaces & Villas")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("المراكز التجارية", "Commercial Centers")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("المؤسسات التعليمية", "Educational Institutions")}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("المستشفيات والمراكز الصحية", "Hospitals & Healthcare")}</a></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title={t("السياسات", "Policies") as string}>
            <ul className="space-y-4">
              <li><Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("الشروط والأحكام", "Terms & Conditions")}</Link></li>
              <li><Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("سياسة الخصوصية", "Privacy Policy")}</Link></li>
              <li><Link to="/warranty" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("سياسة الضمان", "Warranty Policy")}</Link></li>
              <li><Link to="/return-policy" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm mercury-effect inline-block px-3 py-1 -mx-3 rounded-lg">{t("سياسة الاسترجاع", "Return Policy")}</Link></li>
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
                <span dir="ltr" className="text-[14px] leading-[20px]">0557555716</span>
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
          <div className="flex flex-col items-start gap-2">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} {t("رايات نجد للتشجير. جميع الحقوق محفوظة.", "Rayat Najd. All rights reserved.")}
            </p>
            <p className="text-white/80 text-xs flex items-center gap-1 mt-1">
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
