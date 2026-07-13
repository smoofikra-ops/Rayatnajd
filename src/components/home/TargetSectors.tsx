import { motion } from "motion/react";
import { Building2, Paintbrush, HardHat, Landmark, Hotel, Warehouse, School, Hospital, ShoppingBag } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";

const SECTORS = [
  {
    title: "المطورون العقاريون",
    titleEn: "Real Estate Developers",
    icon: Building2,
    desc: "حلول متكاملة لتشجير المشاريع السكنية والتجارية والمخططات العمرانية، بما يحقق أعلى معايير الجودة والاستدامة.",
    descEn: "Integrated afforestation solutions for residential and commercial projects and urban plans, achieving the highest standards of quality and sustainability.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783626924/%D9%85%D8%B7%D9%88%D8%B1_%D8%B9%D9%82%D8%A7%D8%B1%D9%8A_a6ihnn.png"
  },
  {
    title: "شركات التنسيق",
    titleEn: "Landscaping Companies",
    icon: Paintbrush,
    desc: "شريك موثوق لتوريد النخيل والأشجار والشجيرات وتنفيذ أعمال اللاندسكيب للمشاريع المختلفة.",
    descEn: "A reliable partner for supplying palms, trees, shrubs, and executing landscaping works for various projects.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274487/WhatsApp_Image_2026-07-03_at_6.59.15_PM_8_tpujld.jpg"
  },
  {
    title: "شركات المقاولات",
    titleEn: "Contracting Companies",
    icon: HardHat,
    desc: "نقدم حلول التشجير وتطوير المشهد الحضري للمشاريع الإنشائية، مع قدرة عالية على تنفيذ المشاريع الكبيرة وفق أعلى المعايير.",
    descEn: "We provide afforestation and urban landscape development solutions for construction projects, with high capability to execute large projects.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783638790/f9b24911-ce32-4631-af66-39ec267826df.png"
  },
  {
    title: "الجهات الحكومية",
    titleEn: "Government Entities",
    icon: Landmark,
    desc: "شراكات مستدامة لتحقيق رؤية المملكة في زيادة الغطاء النباتي والمشاريع البيئية.",
    descEn: "Sustainable partnerships to achieve the Kingdom's vision of increasing vegetation and environmental projects.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783636613/da5f03dc-aa34-46b5-b1aa-d7e92e9802f4.png"
  },
  {
    title: "الفنادق والمنتجعات",
    titleEn: "Hotels & Resorts",
    icon: Hotel,
    desc: "تصميم وتنفيذ بيئات خضراء جذابة ترتقي بتجربة الضيوف في قطاع الضيافة.",
    descEn: "Designing and implementing attractive green environments that elevate the guest experience in hospitality.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783637476/9da1989a-767b-4e78-b64f-64976944067b.png"
  },
  {
    title: "المشاتل التجارية",
    titleEn: "Commercial Nurseries",
    icon: Warehouse,
    desc: "توفير أفضل الأصناف والنباتات لدعم سلاسل الإمداد الزراعية والتجارية.",
    descEn: "Providing the best varieties and plants to support agricultural and commercial supply chains.",
    img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783637249/73ecbc51-9c72-4f23-9b5c-5e252e7b636d.png"
  }
];

export default function TargetSectors() {
  const { t, language } = useSettings();

  return (
    <section id="sectors" className="py-16 md:py-20 bg-white dark:bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-dots pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[29px] font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
        >
          {t("نفخر بخدمة نخبة من الجهات الحكومية والشركات الوطنية الرائدة", "We are proud to serve an elite group of government agencies and leading national companies")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-muted mb-16 max-w-2xl mx-auto"
        >
          {t(
            "شراكات استراتيجية لتقديم حلول بيئية مخصصة تلبي احتياجات مختلف القطاعات التنموية.",
            "Strategic partnerships to provide customized environmental solutions that meet the needs of various development sectors."
          )}
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 w-full max-w-6xl mx-auto py-4">
          {SECTORS.map((sector, index) => {
            const Icon = sector.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden h-[250px] md:h-[400px] premium-card cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={sector.img} 
                    alt={language === "ar" ? sector.title : sector.titleEn} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Default dark overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-500"></div>
                  {/* Hover green overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 md:p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-primary group-hover:border-primary-light transition-all duration-500 transform group-hover:-translate-y-2">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10 w-full transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:bg-black/40">
                    <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-1 drop-shadow-md">
                      {language === "ar" ? sector.title : sector.titleEn}
                    </h3>
                    
                    <p className="text-white/80 md:text-white/90 text-xs md:text-base font-medium line-clamp-2 drop-shadow-md leading-relaxed">
                      {language === "ar" ? sector.desc : sector.descEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
