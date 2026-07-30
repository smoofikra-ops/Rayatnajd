import { motion } from "motion/react";
import { ArrowLeft, Leaf, TreePine, Sprout, Award, Map } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";
import StatsCarousel from "./StatsCarousel";
import { useEffect, useState, useRef } from "react";
import { useSettings } from "../../contexts/SettingsContext";
import { mediaData } from "../../data/media";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Hero() {
  const [text, setText] = useState("");
  const { t, language, theme } = useSettings();
  
  const stats = [
    { value: <AnimatedCounter to={14} suffix="+" />, label: t("سنوات خبرة", "Years of Experience"), icon: <Award className="w-8 h-8 text-white" />, color: "bg-emerald-500/20", borderColor: "border-emerald-500/30", hoverColor: "hover:bg-emerald-500/30", iconBg: "bg-emerald-500/40" },
    { value: <AnimatedCounter to={50000} suffix="+" />, label: t("متر مربع مشاتل", "Sq Meters of Nurseries"), icon: <Sprout className="w-8 h-8 text-white" />, color: "bg-amber-500/20", borderColor: "border-amber-500/30", hoverColor: "hover:bg-amber-500/30", iconBg: "bg-amber-500/40" },
    { value: t("الثالثة", "Third"), label: t("تصنيف رسمي", "Official Grade"), icon: <TreePine className="w-8 h-8 text-white" />, color: "bg-lime-500/20", borderColor: "border-lime-500/30", hoverColor: "hover:bg-lime-500/30", iconBg: "bg-lime-500/40" },
    { value: <AnimatedCounter to={100} suffix="%" />, label: t("تغطية المملكة", "Kingdom Covered"), icon: <Map className="w-8 h-8 text-white" />, color: "bg-teal-500/20", borderColor: "border-teal-500/30", hoverColor: "hover:bg-teal-500/30", iconBg: "bg-teal-500/40" },
  ];

  const SEQUENCES = [
    [
      { type: "type", text: t("رايات نجد شريكك الأول في صناعة البيئة.", "Rayat Najd is your premier partner in the environmental industry.") as string, speed: 50 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    [
      { type: "type", text: t("خبرة عريقة في المقاولات الزراعية", "Deep expertise in agricultural contracting") as string, speed: 50 },
      { type: "pause", ms: 300 },
      { type: "type", text: t(" والتشجير وإدارة المشاتل.", " and afforestation and nursery management.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    [
      { type: "type", text: t("من التخطيط إلى التنف", "From planning to execu") as string, speed: 50 },
      { type: "pause", ms: 400 },
      { type: "deleteChars", count: language === "ar" ? 4 : 5, speed: 35 },
      { type: "pause", ms: 350 },
      { type: "type", text: t("التنفيذ، وصولًا إلى الاستدامة.", "execution, all the way to sustainability.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ]
  ];

  useEffect(() => {
    let isMounted = true;
    setText("");
    const runTypewriter = async () => {
      while (isMounted) {
        for (let i = 0; i < SEQUENCES.length; i++) {
          if (!isMounted) break;
          const sequence = SEQUENCES[i];
          let currentText = "";
          for (let step of sequence) {
            if (!isMounted) return;
            if (step.type === "pause") {
              await wait(step.ms || 300);
            } else if (step.type === "type") {
              const str = step.text as string;
              for (let j = 0; j < str.length; j++) {
                if (!isMounted) return;
                currentText += str[j];
                setText(currentText);
                await wait((step.speed || 50) + Math.random() * 20 - 10);
              }
            } else if (step.type === "deleteChars") {
              const count = step.count || 1;
              for (let j = 0; j < count; j++) {
                if (!isMounted) return;
                currentText = currentText.slice(0, -1);
                setText(currentText);
                await wait((step.speed || 35) + Math.random() * 10 - 5);
              }
            } else if (step.type === "deleteAll") {
              while (currentText.length > 0) {
                if (!isMounted) return;
                currentText = currentText.slice(0, -1);
                setText(currentText);
                await wait((step.speed || 25) + Math.random() * 10 - 5);
              }
            }
          }
        }
      }
    };
    runTypewriter();
    return () => { isMounted = false; };
  }, [language]);

  return (
    <section className="relative min-h-[85vh] h-auto py-32 md:py-40 w-full flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center text-center -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-card border border-text-main/20 mb-6 md:mb-10 bg-[#274227] backdrop-blur-md"
        >
          <Leaf className="w-4 h-4 text-accent-gold" />
          <span className="text-sm font-medium text-[#022113]">{t("تأسست 2010", "Established 2010")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[80px] lg:text-[100px] leading-tight md:leading-[116px] font-bold mb-4 md:mb-10 tracking-tight py-2 md:py-4"
        >
          <span className="pb-2 md:pb-4 inline-block font-black text-white drop-shadow-md">
            {t("رايات نجد", "Rayat Najd")}
          </span> <br className="hidden md:block" />
          <span className="text-xl sm:text-2xl md:text-4xl leading-snug mt-2 md:mt-4 max-w-[90vw] block whitespace-normal md:whitespace-nowrap py-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bbf7d0] to-white animate-gradient-wave font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {t("نصنع مساحات خضراء تنبض بالحياة والاستدامة", "We create green spaces that thrive with life and sustainability")}
          </span>
        </motion.h1>

        <div className="h-16 mb-14 flex items-center justify-center w-full">
          <p className="text-[18px] text-[#faf7f7] font-light flex items-center justify-center gap-1 Typewriter text-center w-full" dir={language === "ar" ? "rtl" : "ltr"} style={{ direction: language === "ar" ? "rtl" : "ltr", unicodeBidi: "plaintext" }}>
            <span className="Typewriter__wrapper text-center drop-shadow-md">{text}</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[3px] h-5 md:h-6 bg-accent-gold Typewriter__cursor drop-shadow-md"
              style={{ marginInlineStart: '2px' }}
            ></motion.span>
          </p>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl drop-shadow-sm font-medium"
        >
          {t(
            "منذ عام 2010 نعمل على تطوير المشهد الحضري وزيادة الغطاء النباتي وتنفيذ مشاريع التشجير والاستدامة البيئية بما يتوافق مع رؤية المملكة 2030 والرياض الخضراء.",
            "Since 2010, we have been working on developing the urban landscape, increasing the vegetation cover, and implementing afforestation and environmental sustainability projects in accordance with the Kingdom's Vision 2030 and Green Riyadh."
          )}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              className={`backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center group border transition-all hover:-translate-y-1 ${stat.color} ${stat.borderColor} ${stat.hoverColor}`}
            >
              <div className={`mb-4 p-4 rounded-xl transition-colors ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">{stat.value}</h3>
              <p className="text-sm md:text-base text-white/95 font-semibold text-center drop-shadow-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-4 mb-8"
        >
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(14,90,54,0.8)]"
          >
            <span className="relative flex items-center gap-2">
              {t("طلب عرض سعر", "Request a Quote")}
              <ArrowLeft className={`w-5 h-5 transition-transform ${language === 'en' ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
