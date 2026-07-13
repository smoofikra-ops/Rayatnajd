import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Cloud, Sun, Droplets, MapPin, Loader2, Leaf } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const SAUDI_REGIONS = [
  { id: "riyadh", name: "Riyadh", nameAr: "الرياض" },
  { id: "jeddah", name: "Jeddah", nameAr: "جدة" },
  { id: "dammam", name: "Dammam", nameAr: "الدمام" },
  { id: "abha", name: "Abha", nameAr: "أبها" },
];

export default function WeatherWidget() {
  const { t, language } = useSettings();
  const [selectedRegion, setSelectedRegion] = useState(SAUDI_REGIONS[0]);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleEntry = useIntersectionObserver(titleRef, { freezeOnceVisible: true, threshold: 0.1 });
  const isTitleVisible = !!titleEntry?.isIntersecting;

  const fetchPlantingAdvice = async (regionName: string) => {
    setLoading(true);
    setError(null);
    try {
      const currentMonth = new Date().getMonth();
      const seasons = ["Winter", "Spring", "Summer", "Autumn"];
      const seasonIndex = Math.floor(((currentMonth + 1) % 12) / 3);
      const currentSeason = seasons[seasonIndex];

      const res = await fetch("/api/weather-planting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          region: regionName,
          season: currentSeason,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to fetch recommendation");
      }

      const data = await res.json();
      setRecommendation(data.recommendation);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("GEMINI_API_KEY")) {
        setError(t("يرجى تكوين مفتاح GEMINI_API_KEY في إعدادات التطبيق.", "Please configure GEMINI_API_KEY in the app settings.") as string);
      } else {
        const isQuota = err.message?.includes("429") || err.message?.includes("quota") || err.message?.includes("RESOURCE_EXHAUSTED");
        const is503 = err.message?.includes("503") || err.message?.includes("High demand") || err.message?.includes("rate limit");
        setError(
          isQuota 
            ? t(
                "عذراً، تم تجاوز الحد الأقصى للطلبات مؤقتاً. ننصح باختيار الأشجار المحلية المقاومة للجفاف.",
                "Quota exceeded temporarily. We recommend choosing drought-resistant native trees."
              ) as string
          : is503 
           ? t(
              "خدمة الذكاء الاصطناعي تواجه ضغطاً حالياً. في هذا الموسم، ننصح باختيار الأشجار المحلية المقاومة للجفاف.",
              "The AI service is currently experiencing high demand. In this season, we recommend choosing drought-resistant native trees."
            ) as string
          : (err.message || t(
              "حدث خطأ أثناء جلب التوصية. يرجى المحاولة لاحقاً.",
              "An error occurred while fetching the recommendation. Please try again later."
            ) as string)
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlantingAdvice(selectedRegion.name);
  }, [selectedRegion]);

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase">{t("طقس الزراعة", "Planting Weather")}</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          <h2
            ref={titleRef}
            className={`text-3xl md:text-5xl font-bold mb-6 text-text-main transition-all duration-1000 ${
              isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t("أفضل وقت", "Best Time")} <span className="text-gradient-green">{t("للزراعة", "For Planting")}</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-main/70 leading-relaxed"
          >
            {t(
              "نستخدم الذكاء الاصطناعي مع بيانات الطقس الحية لتقديم أفضل النصائح لزراعة الأشجار المحلية في منطقتك.",
              "We use AI with real-time weather data to provide the best advice for planting native trees in your region."
            )}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-6 md:p-12 border-primary/10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-sm font-bold text-text-main/70 mb-3 uppercase tracking-wider">
                  {t("اختر المنطقة", "Select Region")}
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-bg-secondary border border-black/10 rounded-xl px-4 md:px-6 py-3 md:py-4 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer font-bold text-base md:text-lg text-center"
                    value={selectedRegion.id}
                    onChange={(e) => {
                      const region = SAUDI_REGIONS.find((r) => r.id === e.target.value);
                      if (region) setSelectedRegion(region);
                    }}
                  >
                    {SAUDI_REGIONS.map((region) => (
                      <option key={region.id} value={region.id}>
                        {language === 'ar' ? region.nameAr : region.name}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-5 md:w-6 h-5 md:h-6 text-primary pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-bg-secondary p-4 md:p-6 rounded-2xl border border-black/5 flex flex-col items-center justify-center gap-2 md:gap-3 text-center">
                  <Sun className="w-6 md:w-8 h-6 md:h-8 text-accent-gold" />
                  <span className="font-bold text-text-main text-sm md:text-base">{t("الطقس المباشر", "Live Weather")}</span>
                </div>
                <div className="bg-bg-secondary p-4 md:p-6 rounded-2xl border border-black/5 flex flex-col items-center justify-center gap-2 md:gap-3 text-center">
                  <Leaf className="w-6 md:w-8 h-6 md:h-8 text-primary" />
                  <span className="font-bold text-text-main text-sm md:text-base">{t("تحليل الذكاء الاصطناعي", "AI Analysis")}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-center border border-primary/10">
              <h3 className="text-lg md:text-xl font-bold text-text-main mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <Cloud className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                {t("توصية الزراعة الذكية", "Smart Planting Recommendation")}
              </h3>
              
              <div className="min-h-[120px] flex items-center">
                {loading ? (
                  <div className="flex flex-col items-center justify-center w-full gap-4 opacity-70">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-sm font-medium">{t("جاري التحليل...", "Analyzing...")}</span>
                  </div>
                ) : error ? (
                  <div className="text-red-500 font-medium bg-red-50 p-4 rounded-xl w-full border border-red-100 text-sm md:text-base">
                    {error}
                  </div>
                ) : recommendation ? (
                  <p className="text-start md:text-center text-sm md:text-base font-[system-ui] leading-relaxed text-text-muted font-normal">
                    {recommendation}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
