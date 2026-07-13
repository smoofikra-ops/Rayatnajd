import { motion } from "motion/react";
import { TreeDeciduous, Wind, Binoculars } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import impactImg1 from "../../assets/images/regenerated_image_1783950636798.png";

export default function ImpactSection() {
  const { t } = useSettings();

  const impacts = [
    {
      title: t("مكافحة التصحر", "Combating Desertification"),
      desc: t(
        "من مكافحة التصحر إلى صناعة الحياة. نثبت التربة ونصد زحف الرمال لحماية المدن والطرقات من التآكل البيئي بأساليب مستدامة.",
        "From combating desertification to creating life. We stabilize the soil and repel sand encroachment to protect cities and roads from environmental erosion using sustainable methods."
      ),
      icon: <Wind />,
      image: impactImg1
    },
    {
      title: t("الأثر البيئي والمناخي", "Environmental and Climatic Impact"),
      desc: t(
        "خفض معدلات الكربون، تقديم مساحات ظل حضرية، تقليل الاحتباس الحراري، وتحسين جودة الهواء والتنوع البيولوجي.",
        "Reducing carbon rates, providing urban shaded areas, mitigating global warming, and improving air quality and biodiversity."
      ),
      icon: <TreeDeciduous />,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: t("دعم السياحة ونمط الحياة", "Supporting Tourism and Lifestyle"),
      desc: t(
        "تطوير مساحات خضراء تصنع وجهات استثنائية، ترفع من مقاييس المنتجعات، وتعزز جودة الحياة اليومية للسكان.",
        "Developing green spaces that create exceptional destinations, elevate resort standards, and enhance the daily quality of life for residents."
      ),
      icon: <Binoculars />,
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-bg-primary relative border-y border-text-main/5">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1466692476877-3ea661123f75?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("الأثر الذي", "The Impact We")} <span className="text-gradient-green">{t("نصنعه", "Create")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t(
              "نحن لا نزرع الأشجار فحسب، بل نبني نظماً بيئية متكاملة تضمن استدامة الموارد للأجيال القادمة.",
              "We don't just plant trees; we build integrated ecosystems that ensure resource sustainability for future generations."
            )}
          </motion.p>
        </div>

         <div className="grid grid-cols-3 gap-3 md:gap-8">
           {impacts.map((impact, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-bg-secondary/50 rounded-2xl md:rounded-3xl border border-primary/20 hover:bg-primary/5 transition-all overflow-hidden flex flex-col group shadow-sm hover:shadow-md"
             >
                <div className="w-full h-32 md:h-48 relative overflow-hidden shrink-0 border-b border-primary/10">
                  <img src={impact.image} alt={impact.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-3 md:bottom-4 rtl:right-4 ltr:left-4 bg-bg-primary/90 p-2 md:p-3 rounded-xl border border-primary/20 text-primary shadow-sm backdrop-blur-sm z-10 group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="scale-75 md:scale-100">{impact.icon}</div>
                  </div>
                </div>
                <div className="p-4 md:p-8 pt-4 md:pt-6 text-center md:rtl:text-right md:ltr:text-left flex-grow">
                  <h3 className="text-[13px] md:text-2xl font-bold text-text-main mb-2 md:mb-4 leading-tight group-hover:text-primary transition-colors">{impact.title}</h3>
                  <p className="text-text-muted leading-relaxed font-light text-[10px] md:text-base hidden sm:block">{impact.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
