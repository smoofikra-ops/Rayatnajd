import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useSettings } from "../../contexts/SettingsContext";
import { mediaData } from "../../data/media";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";

export default function Services() {
  const { t, language } = useSettings();

  const services = [
    {
      id: "palms",
      title: t("النخيل", "Palms"),
      desc: t("تشكيلة واسعة من النخيل العربي للزينة والمشاريع.", "A wide variety of Arabian palms for decoration and projects."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374935/WhatsApp_Image_2026-07-04_at_11.57.01_PM_4_zeepcf.jpg",
      items: [
        { text: t("النخيل العربي", "Arabian Palm"), icon: "🌴" },
        { text: t("نخيل واشنطونيا", "Washingtonia Palm"), icon: "🌴" },
        { text: t("النخل الملوكي", "Royal Palm"), icon: "🌴" },
        { text: t("نخيل جوز الهند", "Coconut Palm"), icon: "🌴" },
        { text: t("نقل النخيل", "Palm Relocation"), icon: "🚛" },
        { text: t("زراعة النخيل", "Palm Planting"), icon: "🌱" },
      ],
      buttonText: t("استكشف المزيد من أنواع النخيل", "Explore more palm types"),
      motivation: t("اكتشف جميع أنواع النخيل المناسبة لمشروعك.", "Discover all palm types suitable for your project."),
      path: "/service/palms"
    },
    {
      id: "trees",
      title: t("الأشجار", "Trees"),
      desc: t("أشجار متنوعة للطرق والحدائق والمشاريع الكبرى.", "Various trees for roads, gardens, and major projects."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783534251/WhatsApp_Image_2026-07-08_at_9.08.12_PM_xtzfpb.jpg",
      items: [
        { text: t("أشجار الظل", "Shade Trees"), icon: "🌳" },
        { text: t("أشجار الزينة", "Ornamental Trees"), icon: "🌸" },
        { text: t("الأشجار المقاومة للجفاف", "Drought Resistant Trees"), icon: "🌵" },
        { text: t("الأشجار المحلية", "Native Trees"), icon: "🌿" },
        { text: t("توريد الأشجار", "Tree Supply"), icon: "🚛" },
      ],
      buttonText: t("استكشف المزيد من الأشجار", "Explore more trees"),
      motivation: t("تعرّف على الأشجار المناسبة للطرق والحدائق والفلل والمشاريع الكبرى.", "Learn about trees suitable for roads, gardens, villas, and major projects."),
      path: "/service/trees"
    },
    {
      id: "plants",
      title: t("النباتات والشجيرات", "Plants & Shrubs"),
      desc: t("مجموعة متنوعة من النباتات الداخلية والخارجية لتجميل المساحات.", "A diverse collection of indoor and outdoor plants to beautify spaces."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783537108/WhatsApp_Image_2026-07-08_at_9.55.36_PM_2_df11ju.jpg",
      items: [
        { text: t("النباتات الداخلية", "Indoor Plants"), icon: "🪴" },
        { text: t("الشجيرات المزهرة", "Flowering Shrubs"), icon: "🌺" },
        { text: t("النباتات العطرية", "Aromatic Plants"), icon: "🌿" },
        { text: t("مغطيات التربة", "Ground Covers"), icon: "🌱" },
        { text: t("النباتات المتسلقة", "Climbing Plants"), icon: "🍃" },
      ],
      buttonText: t("استكشف المزيد من النباتات والشجيرات", "Explore more plants and shrubs"),
      motivation: t("أضف لمسة جمالية لمشروعك مع تشكيلتنا الواسعة من النباتات.", "Add an aesthetic touch to your project with our wide selection of plants."),
      path: "/service/plants"
    },
    {
      id: "projects",
      title: t("مشاريع التشجير", "Afforestation Projects"),
      desc: t("تنفيذ وإدارة مشاريع التشجير الكبرى بأعلى المعايير.", "Execution and management of major afforestation projects to the highest standards."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274476/WhatsApp_Image_2026-07-03_at_6.59.16_PM_10_zaajil.jpg",
      items: [
        { text: t("المشاريع الحكومية", "Government Projects"), icon: "🏢" },
        { text: t("المشاريع التجارية", "Commercial Projects"), icon: "🏬" },
        { text: t("تشجير الطرق", "Road Afforestation"), icon: "🛣️" },
        { text: t("المجمعات السكنية", "Residential Complexes"), icon: "🏘️" },
      ],
      buttonText: t("استكشف المزيد من مشاريع التشجير", "Explore more afforestation projects"),
      motivation: t("استعرض حلول التشجير المناسبة للمشاريع الحكومية والتجارية.", "Browse afforestation solutions suitable for government and commercial projects."),
      path: "/service/projects"
    },
    {
      id: "urban",
      title: t("تطوير المشهد الحضري", "Urban Landscape Development"),
      desc: t("تصميم وتطوير المساحات الخضراء في المدن.", "Designing and developing green spaces in cities."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783635891/8aa0c2f2-5996-4907-a0e2-f24a332326e2.png",
      items: [
        { text: t("تصميم الحدائق العامة", "Public Park Design"), icon: "🏞️" },
        { text: t("تجميل الميادين", "Square Beautification"), icon: "⛲" },
        { text: t("ممرات المشاة", "Pedestrian Walkways"), icon: "🚶" },
        { text: t("المنتزهات البيئية", "Eco Parks"), icon: "🌲" },
      ],
      buttonText: t("استكشف المزيد من حلول تطوير المشهد الحضري", "Explore more urban development solutions"),
      motivation: t("نساهم في تحسين جودة الحياة من خلال تطوير الساحات والميادين.", "We contribute to improving quality of life through the development of squares and plazas."),
      path: "/service/urban"
    },
    {
      id: "relocation",
      title: t("نقل الأشجار", "Tree Relocation"),
      desc: t("خدمات نقل الأشجار العملاقة بأمان واحترافية.", "Safe and professional relocation services for giant trees."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783627796/f1fcc336-17f7-4b63-aebf-63766f607b25.png",
      items: [
        { text: t("نقل الأشجار المعمرة", "Relocating Perennial Trees"), icon: "🌳" },
        { text: t("معدات ثقيلة متخصصة", "Specialized Heavy Equipment"), icon: "🚜" },
        { text: t("رعاية ما بعد النقل", "Post-relocation Care"), icon: "⚕️" },
        { text: t("ضمان نجاح الزراعة", "Planting Success Guarantee"), icon: "✅" },
      ],
      buttonText: t("استكشف المزيد من خدمات نقل الأشجار", "Explore more tree relocation services"),
      motivation: t("نحافظ على الثروة النباتية من خلال أحدث تقنيات نقل الأشجار المعمرة.", "We preserve plant wealth through the latest techniques in relocating perennial trees."),
      path: "/service/relocation"
    },
    {
      id: "irrigation",
      title: t("حلول الري الذكية", "Smart Irrigation"),
      desc: t("أنظمة ري حديثة وفعالة لترشيد استهلاك المياه.", "Modern and efficient irrigation systems to rationalize water consumption."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783630273/%D8%B1%D8%A7%D9%8A%D8%AA_%D9%86%D8%AC%D8%AF_%D8%A7%D9%84%D8%B1%D9%8A_uqv6fm.png",
      items: [
        { text: t("شبكات الري بالتنقيط", "Drip Irrigation Networks"), icon: "💧" },
        { text: t("أنظمة التحكم الآلي", "Automated Control Systems"), icon: "⚙️" },
        { text: t("حساسات الرطوبة", "Moisture Sensors"), icon: "🌡️" },
        { text: t("إدارة استهلاك المياه", "Water Consumption Management"), icon: "📊" },
      ],
      buttonText: t("استكشف المزيد من حلول الري الذكية", "Explore more smart irrigation solutions"),
      motivation: t("اكتشف أنظمة الري الحديثة التي تقلل استهلاك المياه وترفع كفاءة التشغيل.", "Discover modern irrigation systems that reduce water consumption and increase operational efficiency."),
      path: "/service/irrigation"
    },
    {
      id: "maintenance",
      title: t("الصيانة الزراعية", "Agricultural Maintenance"),
      desc: t("برامج صيانة متكاملة للحفاظ على صحة وجمال النباتات.", "Comprehensive maintenance programs to preserve the health and beauty of plants."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783630483/%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D9%86%D8%A9_%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9_jndcyz.png",
      items: [
        { text: t("التقليم والتشذيب", "Pruning and Trimming"), icon: "✂️" },
        { text: t("مكافحة الآفات", "Pest Control"), icon: "🐛" },
        { text: t("التسميد العضوي", "Organic Fertilization"), icon: "💩" },
        { text: t("فحص صحة النباتات", "Plant Health Inspection"), icon: "🔬" },
      ],
      buttonText: t("استكشف المزيد من خدمات الصيانة الزراعية", "Explore more agricultural maintenance services"),
      motivation: t("نوفر رعاية شاملة لضمان استدامة وحيوية مشاريعك الزراعية.", "We provide comprehensive care to ensure the sustainability and vitality of your agricultural projects."),
      path: "/service/maintenance"
    },
    {
      id: "sustainability",
      title: t("مبادرات الاستدامة", "Sustainability Initiatives"),
      desc: t("حلول بيئية مبتكرة لدعم رؤية المملكة 2030.", "Innovative environmental solutions to support Saudi Vision 2030."),
      img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783635704/2636738d-f094-40b2-ba90-a11490e446fe.png",
      items: [
        { text: t("مكافحة التصحر", "Combating Desertification"), icon: "🏜️" },
        { text: t("تقليل الانبعاثات الكربونية", "Reducing Carbon Emissions"), icon: "📉" },
        { text: t("إعادة تدوير المخلفات", "Waste Recycling"), icon: "♻️" },
        { text: t("التوعية البيئية", "Environmental Awareness"), icon: "📢" },
      ],
      buttonText: t("استكشف المزيد من مبادرات الاستدامة البيئية", "Explore more environmental sustainability initiatives"),
      motivation: t("اكتشف كيف نساهم في تحقيق رؤية المملكة 2030 وزيادة الغطاء النباتي.", "Discover how we contribute to achieving Saudi Vision 2030 and increasing vegetation cover."),
      path: "/service/sustainability"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-bg-primary relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-5xl font-bold text-gradient-identity mb-4 py-2">
                {t("حلولنا المتكاملة", "Integrated Solutions")}
             </h2>
             <p className="text-lg md:text-xl text-text-muted">
                {t(
                  "حلول متكاملة بمعايير عالمية لتشجير واستدامة",
                  "Integrated solutions with global standards for afforestation and sustainability"
                )}
             </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              tabIndex={0}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl h-[280px] md:h-[450px] premium-card focus:outline-none ${index === services.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Background Image */}
              <CloudinaryImage
                src={service.img}
                alt={service.title}
                width={600}
                lazy={true}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
              />
              
              {/* Dark Gradient always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500"></div>

              {/* Default Content (Disappears on hover/focus) */}
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end z-0 opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500">
                <h3 className="text-lg md:text-3xl font-bold text-white mb-2 line-clamp-2 md:line-clamp-none">{service.title}</h3>
                <p className="text-white/80 text-xs md:text-base line-clamp-2 hidden sm:block">{service.desc}</p>
              </div>

              {/* Hover/Tap Blur Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 z-10 flex flex-col p-4 md:p-8">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 transform -translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 border-b border-white/10 pb-2 md:pb-3">
                  {service.title}
                </h3>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 md:pr-2 rtl:pr-0 rtl:pl-1 md:rtl:pl-2">
                  <ul className="space-y-2 md:space-y-3">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 md:gap-3 text-white/90 text-xs md:text-base font-medium opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform translate-x-4 rtl:-translate-x-4 group-hover:translate-x-0 group-focus:translate-x-0 transition-all duration-500"
                        style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
                      >
                        <span className="text-base md:text-lg">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0" style={{ transitionDelay: "300ms" }}>
                  <Link 
                    to={service.path} 
                    className="block w-full py-3 px-4 bg-primary hover:bg-primary-light text-white text-center rounded-xl font-bold transition-colors shadow-lg shadow-primary/20 text-sm md:text-base"
                    onClick={(e) => {
                      // Allow normal link navigation
                    }}
                  >
                    {service.buttonText}
                  </Link>
                  <p className="text-white/70 text-xs md:text-sm text-center mt-3 leading-relaxed">
                    {service.motivation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
