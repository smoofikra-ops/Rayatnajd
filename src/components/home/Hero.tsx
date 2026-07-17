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
  
   // Default is muted

    const SEQUENCES = [
    // 1. Normal typing without correction
    [
      { type: "type", text: t("رايات نجد شريكك الأول في صناعة البيئة.", "Rayat Najd is your premier partner in the environmental industry.") as string, speed: 50 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 2. partially type “الزراعية”, delete the partial word, then rewrite it.
    [
      { type: "type", text: t("خبرة واسعة في إدارة المشاريع الزراع", "Extensive experience in managing agricultural proj") as string, speed: 50 },
      { type: "pause", ms: 350 },
      { type: "deleteChars", count: language === "ar" ? 5 : 4, speed: 35 },
      { type: "pause", ms: 300 },
      { type: "type", text: t("الزراعية والبيئية.", "agricultural and environmental projects.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 3. Normal typing
    [
      { type: "type", text: t("نلتزم بأعلى معايير الجودة والتميز.", "We are committed to the highest standards of quality and excellence.") as string, speed: 50 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 4. correct and rewrite “الاستدامة”.
    [
      { type: "type", text: t("رايات نجد شريكك الأول في صناعة الاستدا", "Rayat Najd is your premier partner in sustainab") as string, speed: 50 },
      { type: "pause", ms: 350 },
      { type: "deleteChars", count: language === "ar" ? 6 : 9, speed: 35 },
      { type: "pause", ms: 300 },
      { type: "type", text: t("الاستدامة.", "sustainability.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 5. correct and rewrite “خضرة”.
    [
      { type: "type", text: t("في رايات نجد، نبني مستقبلًا أكثر خضر", "At Rayat Najd, we build a greener fut") as string, speed: 50 },
      { type: "pause", ms: 350 },
      { type: "deleteChars", count: language === "ar" ? 3 : 3, speed: 35 },
      { type: "pause", ms: 300 },
      { type: "type", text: t("خضرة واستدامة.", "greener and more sustainable future.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 6. correct and rewrite “التشجير”.
    [
      { type: "type", text: t("حلول متكاملة للتشغيل والتشج", "Integrated solutions for operations and affores") as string, speed: 50 },
      { type: "pause", ms: 350 },
      { type: "deleteChars", count: language === "ar" ? 5 : 7, speed: 35 },
      { type: "pause", ms: 300 },
      { type: "type", text: t("والتشجير وإدارة المشاتل.", "and afforestation and nursery management.") as string, speed: 75 },
      { type: "pause", ms: 2500 },
      { type: "deleteAll", speed: 30 },
      { type: "pause", ms: 500 }
    ],
    // 7. correct and rewrite “التنفيذ”.
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
    setText(""); // Reset text on language change to re-trigger typing

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
            } 
            else if (step.type === "type") {
              const str = step.text as string;
              for (let j = 0; j < str.length; j++) {
                if (!isMounted) return;
                currentText += str[j];
                setText(currentText);
                const variance = Math.random() * 20 - 10;
                await wait((step.speed || 50) + variance);
              }
            } 
            else if (step.type === "deleteChars") {
              const count = step.count || 1;
              for (let j = 0; j < count; j++) {
                if (!isMounted) return;
                currentText = currentText.slice(0, -1);
                setText(currentText);
                const variance = Math.random() * 10 - 5;
                await wait((step.speed || 35) + variance);
              }
            } 
            else if (step.type === "deleteAll") {
              while (currentText.length > 0) {
                if (!isMounted) return;
                currentText = currentText.slice(0, -1);
                setText(currentText);
                const variance = Math.random() * 10 - 5;
                await wait((step.speed || 25) + variance);
              }
            }
          }
        }
      }
    };

    runTypewriter();

    return () => {
      isMounted = false;
    };
  }, [language]);

  return (
    <section className="relative min-h-screen h-auto py-32 md:py-40 w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-bg-primary overflow-hidden pointer-events-none">
        <video
          src="https://f.top4top.io/m_3841yt7fd1.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/20 to-bg-primary/90 z-10 transition-colors pointer-events-none"></div>
      </div>
      

      

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center text-center -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full premium-card border border-text-main/20 mb-8 md:mb-10"
        >
          <Leaf className="w-4 h-4 text-accent-gold" />
          <span className="text-sm font-medium text-text-main">{t("تأسست 2010", "Established 2010")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-6xl md:text-[80px] lg:text-[100px] leading-tight md:leading-[116px] font-bold mb-4 md:mb-10 tracking-tight py-2 md:py-4 text-white drop-shadow-md`}
          style={{ filter: theme === "dark" ? "drop-shadow(0 4px 6px rgba(0,0,0,0.8))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-300 via-emerald-400 to-accent-gold animate-gradient-wave pb-2 md:pb-4 inline-block">
            {t("رايات نجد", "Rayat Najd")}
          </span> <br className="hidden md:block" />
          <span className={`text-xl sm:text-2xl md:text-4xl leading-snug mt-2 md:mt-4 max-w-[90vw] block whitespace-normal md:whitespace-nowrap py-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bbf7d0] to-white animate-gradient-wave font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]`}>
            {t("نصنع مساحات خضراء تنبض بالحياة والاستدامة", "We create green spaces that thrive with life and sustainability")}
          </span>
        </motion.h1>

        <div className="h-16 mb-14 flex items-center justify-center w-full">
          <p className="text-[18px] text-[#faf7f7] font-light flex items-center justify-center gap-1 Typewriter text-center w-full" dir={language === "ar" ? "rtl" : "ltr"} style={{ direction: language === "ar" ? "rtl" : "ltr", unicodeBidi: "plaintext" }}>
            <span className="Typewriter__wrapper text-center">{text}</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[3px] h-5 md:h-6 bg-accent-gold Typewriter__cursor"
              style={{ marginInlineStart: '2px' }}
            ></motion.span>
          </p>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl"
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
              <p className="text-sm md:text-base text-white/95 font-semibold text-center">{stat.label}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-white/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
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
        <div className="w-6 h-10 border-2 border-text-main/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-text-main rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
