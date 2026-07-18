import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe, ArrowLeft, ArrowRight, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { useSettings } from "../contexts/SettingsContext";
import { useInterestList } from "../contexts/InterestListContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, theme, setTheme, language, setLanguage } = useSettings();
  const { items, setIsInterestListOpen } = useInterestList();

  const NAV_LINKS = [
    { name: t("الرئيسية", "Home"), path: "/" },
    { name: t("من نحن", "About Us"), path: "/about" },
    { name: t("خدماتنا", "Services"), path: "/#services" },
    { name: t("مشاريعنا", "Projects"), path: "/#projects" },
    { name: t("المشاتل والأشجار", "Nurseries & Trees"), path: "/#nurseries" },
    { name: t("مركز الأدوات الذكية", "Smart Tools"), path: "/tools" },
    { name: t("المدونة", "Blog"), path: "/blog" },
    { name: t("اتصل بنا", "Contact Us"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLanguage = () => setLanguage(language === "ar" ? "en" : "ar");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-bg-primary/90 backdrop-blur-lg py-3 shadow-lg border-text-main/10" 
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 rounded-full shadow-lg overflow-hidden border-2 border-primary/20 bg-white flex items-center justify-center"
            >
              <motion.img 
                src="https://res.cloudinary.com/erfajaoa/image/upload/v1783298171/%D9%84%D9%82%D8%B7%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9_2026-06-28_%D9%81%D9%8A_4.03.31_%D8%B5_mfq3dq.png" 
                alt="Rayat Najd Logo"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <span className="font-bold text-xl tracking-tight text-text-main hidden sm:block">
              {t("رايات نجد", "Rayat Najd")}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 p-1.5 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 shadow-inner">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name as string}
                to={link.path}
                className="group relative flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800 border-b-[4px] shadow-sm hover:border-b-[2px] hover:translate-y-[2px] hover:shadow-md transition-all duration-200"
              >
                {language === 'ar' ? (
                  <ArrowLeft className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-1" />
                ) : null}
                <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {link.name}
                </span>
                {language !== 'ar' ? (
                  <ArrowRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsInterestListOpen(true)}
              className="relative p-2 text-text-muted hover:text-text-main transition-colors flex items-center gap-2 group"
              title={t("قائمة الاهتمام", "Interest List") as string}
            >
              <ClipboardList className="w-5 h-5 group-hover:text-primary transition-colors" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md border border-bg-primary">
                  {items.length}
                </span>
              )}
            </button>
            <button 
              onClick={toggleLanguage}
              className="p-2 text-text-muted hover:text-text-main transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === "ar" ? "EN" : "AR"}
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-main transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
              className="px-6 py-2.5 rounded-full bg-text-main text-bg-primary text-sm font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {t("اطلب عرض سعر", "Request Quote")}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsInterestListOpen(true)}
              className="relative p-2 text-text-muted hover:text-text-main transition-colors"
            >
              <ClipboardList className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md border border-bg-primary">
                  {items.length}
                </span>
              )}
            </button>
            <button 
              onClick={toggleTheme}
              className="text-text-muted p-2"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="text-text-main p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 bg-gradient-to-b from-green-500/5 to-emerald-500/10">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name as string}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group mercury-effect px-5 py-3 flex items-center justify-between text-base font-medium text-text-main bg-white dark:bg-slate-800 rounded-xl border border-green-200 dark:border-green-800 border-b-[4px] shadow-sm active:border-b-[0px] active:translate-y-[4px] transition-all duration-200"
                  >
                    <span className="group-hover:text-primary transition-colors">{link.name}</span>
                    {language === 'ar' ? (
                      <ArrowLeft className="w-5 h-5 text-green-600 opacity-50 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-green-600 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    )}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => {toggleLanguage(); setIsMobileMenuOpen(false);}}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors text-base font-medium text-text-main"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 opacity-60" />
                    {language === "ar" ? "English Version" : "النسخة العربية"}
                  </div>
                </button>
              </div>
              
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('openQuoteModal'));
                }}
                className="mt-4 w-full px-5 py-4 rounded-2xl bg-text-main text-center text-bg-primary font-semibold active:scale-[0.98] transition-all shadow-md"
              >
                {t("اطلب عرض سعر", "Request Quote")}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
