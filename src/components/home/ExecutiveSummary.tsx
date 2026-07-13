import { motion } from "motion/react";
import { TreePine, Sprout, Award, Map } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";
import { useSettings } from "../../contexts/SettingsContext";

export default function ExecutiveSummary() {
  const { t } = useSettings();

  const stats = [
    { value: <AnimatedCounter to={14} suffix="+" />, label: t("سنوات خبرة", "Years of Experience"), icon: <Award className="w-8 h-8 text-white" />, color: "bg-emerald-500/20", borderColor: "border-emerald-500/30", hoverColor: "hover:bg-emerald-500/30", iconBg: "bg-emerald-500/40" },
    { value: <AnimatedCounter to={50000} suffix="+" />, label: t("متر مربع مشاتل", "Sq Meters of Nurseries"), icon: <Sprout className="w-8 h-8 text-white" />, color: "bg-amber-500/20", borderColor: "border-amber-500/30", hoverColor: "hover:bg-amber-500/30", iconBg: "bg-amber-500/40" },
    { value: t("الثالثة", "Third"), label: t("تصنيف رسمي", "Official Grade"), icon: <TreePine className="w-8 h-8 text-white" />, color: "bg-lime-500/20", borderColor: "border-lime-500/30", hoverColor: "hover:bg-lime-500/30", iconBg: "bg-lime-500/40" },
    { value: <AnimatedCounter to={100} suffix="%" />, label: t("تغطية المملكة", "Kingdom Covered"), icon: <Map className="w-8 h-8 text-white" />, color: "bg-teal-500/20", borderColor: "border-teal-500/30", hoverColor: "hover:bg-teal-500/30", iconBg: "bg-teal-500/40" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden flex items-center min-h-[80vh] bg-[#0A1A10]">
      

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-relaxed py-2"
          >
              {t("نبتكر مساحات خضراء", "We create green spaces")} <br /> 
               <span className="block my-3 md:my-5"><span className="animate-heartbeat text-primary-light text-4xl md:text-6xl">{t("تنبض", "pulsating")}</span></span>
              <span className="block mt-2 leading-relaxed">{t("بالحياة والاستدامة", "with life and sustainability")}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl"
          >
            {t(
              "منذ عام 2010 نعمل على تطوير المشهد الحضري وزيادة الغطاء النباتي وتنفيذ مشاريع التشجير والاستدامة البيئية بما يتوافق مع رؤية المملكة 2030 والرياض الخضراء.",
              "Since 2010, we have been working on developing the urban landscape, increasing the vegetation cover, and implementing afforestation and environmental sustainability projects in accordance with the Kingdom's Vision 2030 and Green Riyadh."
            )}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
