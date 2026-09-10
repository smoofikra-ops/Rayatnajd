import { Link } from "react-router-dom";
import { Trees, Home, Search, Compass, BookOpen, Mail } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";
import SEO from "../components/SEO";

export default function NotFound() {
  const { t } = useSettings();

  return (
    <div className="min-h-screen bg-bg-primary text-text-main flex items-center justify-center pt-28 pb-20 px-4">
      <SEO 
        title="الصفحة غير موجودة (404) | رايات نجد"
        description="عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تفضل بزيارة صفحتنا الرئيسية أو تصفح خدمات ومشاريع رايات نجد."
        noindex={true}
      />
      
      <div className="text-center max-w-xl bg-card-background p-8 md:p-12 rounded-3xl border border-card-border shadow-2xl relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Trees className="w-12 h-12" />
        </div>

        <span className="inline-block text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
          404 Error
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4 leading-tight">
          {t("الصفحة المطلوبة غير موجودة", "Page Not Found")}
        </h1>

        <p className="text-text-muted text-base mb-8 leading-relaxed">
          {t(
            "عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو ربما تم تغييره أو نقله. يمكنك العودة للصفحة الرئيسية أو استكشاف أقسام الموقع عبر الروابط التالية.",
            "Sorry, the page you are looking for doesn't exist or has been moved. You can return to the home page or explore our services and projects below."
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-right">
          <Link
            to="/"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-card-border bg-bg-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-text-main text-sm font-semibold"
          >
            <Home className="w-4 h-4 text-primary shrink-0" />
            <span>{t("الصفحة الرئيسية", "Home Page")}</span>
          </Link>
          <Link
            to="/#services"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-card-border bg-bg-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-text-main text-sm font-semibold"
          >
            <Compass className="w-4 h-4 text-primary shrink-0" />
            <span>{t("خدمات التشجير", "Afforestation Services")}</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-card-border bg-bg-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-text-main text-sm font-semibold"
          >
            <Search className="w-4 h-4 text-primary shrink-0" />
            <span>{t("معرض المشاريع", "Projects Gallery")}</span>
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-card-border bg-bg-primary/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-text-main text-sm font-semibold"
          >
            <BookOpen className="w-4 h-4 text-primary shrink-0" />
            <span>{t("المدونة البيئية", "Environmental Blog")}</span>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
        >
          <Home className="w-5 h-5" />
          {t("العودة إلى الرئيسية", "Back to Home")}
        </Link>
      </div>
    </div>
  );
}
