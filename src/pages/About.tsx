import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import {
  ArrowLeft, ArrowRight, Home, X, Sprout, Building2, MapPin, CheckCircle2,
  TreePine, Users, Award, Target, TrendingUp, HeartHandshake, Eye, Shield, Map, Lightbulb, Leaf
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
  const { t, language } = useSettings();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isRtl = language === 'ar';

  const numbers = [
    { value: 2010, label: t("عام التأسيس", "Established"), suffix: "", prefix: "" },
    { value: 50000, label: t("مساحة المشاتل والمزارع (م²)", "Nurseries Area (m²)"), suffix: "+", prefix: "" },
    { value: 3, label: t("التصنيف المعتمد", "Certified Grade"), suffix: "", prefix: t("الدرجة ", "Grade ") },
    { value: 25, label: t("فريق العمل", "Team Members"), suffix: "+", prefix: "" },
    { value: 100, label: t("تغطية المملكة", "Kingdom Coverage"), suffix: "%", prefix: "" },
  ];

  const values = [
    { icon: <Sprout className="w-6 h-6 text-primary" />, title: t("الاستدامة", "Sustainability"), desc: t("نخطط للأثر طويل المدى، ونحرص على اختيار حلول زراعية تتوافق مع البيئة وتحافظ على الموارد.", "We plan for long-term impact and carefully choose agricultural solutions that align with the environment.") },
    { icon: <Award className="w-6 h-6 text-primary" />, title: t("الجودة", "Quality"), desc: t("نلتزم بمعايير دقيقة في اختيار الأشجار، التوريد، الزراعة، النقل، والتنفيذ.", "We adhere to strict standards in tree selection, supply, planting, and execution.") },
    { icon: <Shield className="w-6 h-6 text-primary" />, title: t("الموثوقية", "Reliability"), desc: t("نحترم العقود والمواعيد ونبني علاقات طويلة المدى مع عملائنا.", "We respect contracts and deadlines and build long-term relationships.") },
    { icon: <Map className="w-6 h-6 text-primary" />, title: t("المسؤولية الوطنية", "National Responsibility"), desc: t("نسهم في زيادة الغطاء النباتي، مكافحة التصحر، وتحسين المشهد الحضري.", "We contribute to increasing vegetation cover and improving the urban landscape.") },
    { icon: <Lightbulb className="w-6 h-6 text-primary" />, title: t("الابتكار", "Innovation"), desc: t("نوظف التقنيات الحديثة والأدوات الرقمية لتحسين التخطيط وتجربة العميل.", "We employ modern technologies and digital tools to improve planning.") },
    { icon: <TrendingUp className="w-6 h-6 text-primary" />, title: t("المعرفة", "Knowledge"), desc: t("نعمل على نشر ثقافة التشجير والزراعة والاستدامة.", "We work on spreading the culture of afforestation and sustainability.") },
    { icon: <HeartHandshake className="w-6 h-6 text-primary" />, title: t("الشراكة", "Partnership"), desc: t("نتعامل مع العميل كشريك نجاح، وليس كمجرد مستفيد من خدمة.", "We treat the client as a success partner, not just a service beneficiary.") },
    { icon: <Target className="w-6 h-6 text-primary" />, title: t("التأثير", "Impact"), desc: t("نقيس نجاحنا بقيمة المساحات التي تم تطويرها والأثر البيئي الذي تحقق.", "We measure our success by the value of developed spaces and environmental impact.") }
  ];

  const features = [
    t("خبرة عملية منذ عام 2010.", "Practical experience since 2010."),
    t("تصنيف رسمي من الدرجة الثالثة.", "Official third-grade classification."),
    t("مشاتل ومزارع خاصة تتجاوز 50,000 م².", "Private nurseries and farms exceeding 50,000 m²."),
    t("مخزون متنوع من النخيل والأشجار والشجيرات.", "Diverse inventory of palms, trees, and shrubs."),
    t("شاحنات ومعدات متخصصة لنقل الأشجار.", "Specialized trucks and equipment for tree relocation."),
    t("القدرة على التوريد والتنفيذ والصيانة.", "Capacity for supply, execution, and maintenance."),
    t("خبرة في المشاريع الحكومية والخاصة.", "Experience in governmental and private projects."),
    t("تغطية الرياض والخرج ومختلف مناطق المملكة.", "Covering Riyadh, Al-Kharj, and various regions of the Kingdom."),
    t("حلول مناسبة للمناخ السعودي.", "Solutions suitable for the Saudi climate."),
    t("توجه واضح نحو الاستدامة وتطوير المشهد الحضري.", "Clear focus on sustainability and urban landscape development.")
  ];

  const scope = [
    { title: t("النخيل والأشجار", "Palms & Trees"), path: "/catalog" },
    { title: t("مشاريع التشجير", "Afforestation Projects"), path: "/service/1" },
    { title: t("نقل الأشجار الكبيرة", "Large Tree Relocation"), path: "/service/2" },
    { title: t("تطوير المشهد الحضري", "Urban Landscape Development"), path: "/service/1" },
    { title: t("الصيانة الزراعية", "Agricultural Maintenance"), path: "/service/4" },
    { title: t("شبكات الري", "Irrigation Systems"), path: "/service/3" },
    { title: t("تنسيق المواقع", "Landscaping"), path: "/service/1" },
    { title: t("الاستدامة البيئية", "Environmental Sustainability"), path: "/service/1" }
  ];

  const sectors = [
    t("الجهات الحكومية", "Government Entities"),
    t("المطورون العقاريون", "Real Estate Developers"),
    t("شركات المقاولات", "Contracting Companies"),
    t("شركات التنسيق واللاندسكيب", "Landscaping Companies"),
    t("الفنادق والمنتجعات", "Hotels & Resorts"),
    t("القصور والفلل", "Palaces & Villas"),
    t("المشاريع التجارية", "Commercial Projects"),
    t("مشاتل الجملة والتجزئة", "Wholesale & Retail Nurseries"),
    t("المزارع والاستراحات", "Farms & Rest Houses")
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t("من نحن | رايات نجد للتشجير والاستدامة البيئية", "About Us | Rayat Najd")}</title>
        <meta name="description" content={t("تعرف على رايات نجد، مؤسسة سعودية متخصصة في التشجير والمقاولات الزراعية ونقل الأشجار والاستدامة البيئية منذ 2010.", "Learn about Rayat Najd, a Saudi establishment specialized in afforestation, agricultural contracting, tree relocation, and environmental sustainability since 2010.")} />
      </Helmet>

      {/* Inner Navigation Bar */}
      <div className="sticky top-[60px] md:top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50" aria-label="Back">
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span className="hidden sm:inline">{t("رجوع", "Back")}</span>
          </button>
          <div className="w-px h-4 bg-gray-200 mx-1"></div>
          <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50" aria-label="Home">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">{t("الرئيسية", "Home")}</span>
          </Link>
        </div>
        
        {/* Breadcrumbs for desktop */}
        <div className="hidden md:flex items-center text-sm text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors">{t("الرئيسية", "Home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{t("من نحن", "About Us")}</span>
        </div>

        <button onClick={() => navigate(-1)} className="flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-grow">
        {/* 1. Hero */}
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/erfajaoa/image/upload/v1783961159/nursery_hero_v3o4lk.jpg" 
              alt="Rayat Najd Farms" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center text-white space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white inline-block pb-2">
                {t("رايات نجد للتشجير", "Rayat Najd")} <br className="hidden md:block"/> {t("والاستدامة البيئية", "for Afforestation & Sustainability")}
              </span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-3xl font-medium text-green-100"
            >
              {t("نزرع المستقبل... ونصنع الاستدامة", "We Plant the Future... We Create Sustainability")}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              {t("شركة سعودية متخصصة في التشجير، المقاولات الزراعية، نقل الأشجار، تطوير المشهد الحضري، والاستدامة البيئية، بخبرة تمتد منذ عام 2010 ومشاتل ومزارع تتجاوز مساحتها 50,000 متر مربع في الرياض والخرج.", "A Saudi company specialized in afforestation, agricultural contracting, tree relocation, urban landscape development, and environmental sustainability, with experience spanning since 2010 and nurseries and farms exceeding 50,000 square meters in Riyadh and Al-Kharj.")}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <button onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))} className="bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 w-full sm:w-auto">
                {t("اطلب عرض سعر", "Request a Quote")}
              </button>
              <Link to="/catalog" className="bg-white hover:bg-gray-50 text-primary px-8 py-3.5 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 w-full sm:w-auto">
                {t("استعرض مشاريعنا", "View Our Projects")}
              </Link>
              <a href="https://wa.me/966553308786" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-green-600/30 transition-all hover:-translate-y-1 w-full sm:w-auto">
                {t("تحدث مع أحد المختصين", "Talk to an Expert")}
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. Our Story */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[21px] md:text-4xl font-bold text-gray-900">{t("أكثر من 15 عامًا من الخبرة والنمو", "Over 15 Years of Experience and Growth")}</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-justify sm:text-center">
              <p>
                {t("تأسست رايات نجد عام 2010 بهدف تقديم حلول زراعية موثوقة للمشاريع الحكومية والخاصة. ومنذ انطلاقتها، توسعت أعمال المؤسسة من توريد النخيل والأشجار إلى تنفيذ مشاريع التشجير، نقل الأشجار الكبيرة، تطوير المشهد الحضري، صيانة المساحات الخضراء، وتنفيذ شبكات الري.", "Rayat Najd was established in 2010 to provide reliable agricultural solutions for governmental and private projects. Since its inception, the establishment's business has expanded from supplying palms and trees to executing afforestation projects, relocating large trees, urban landscape development, maintaining green spaces, and executing irrigation systems.")}
              </p>
              <p>
                {t("تعتمد رايات نجد على مشاتل ومزارع خاصة في الرياض والخرج، ومخزون متنوع من النخيل والأشجار والشجيرات والنباتات المناسبة للبيئة السعودية، إلى جانب فريق تشغيلي ومعدات مخصصة لنقل الأشجار وتنفيذ المشاريع.", "Rayat Najd relies on private nurseries and farms in Riyadh and Al-Kharj, and a diverse inventory of palms, trees, shrubs, and plants suitable for the Saudi environment, along with an operational team and specialized equipment for relocating trees and executing projects.")}
              </p>
              <p className="font-semibold text-primary text-xl">
                {t("اليوم نعمل على تعزيز مكانة رايات نجد كشريك وطني في التشجير والاستدامة البيئية، والمساهمة في بناء مدن ووجهات أكثر خضرة وجودة حياة.", "Today, we work on enhancing Rayat Najd's position as a national partner in afforestation and environmental sustainability, and contributing to building greener cities and destinations with a higher quality of life.")}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Our Numbers */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
            {numbers.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center space-y-3 w-[140px] md:w-[200px]">
                <span className="text-4xl md:text-5xl font-bold text-accent-gold flex items-center justify-center" dir="ltr">
                  <AnimatedCounter to={stat.value} />
                  <span>{stat.suffix}</span>
                </span>
                <span className="text-xs md:text-xl font-medium text-green-50">{stat.prefix}{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Who we are today? */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{t("من نحن اليوم؟", "Who are we today?")}</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {t("رايات نجد ليست مجرد مشتل أو مورد أشجار، بل مؤسسة سعودية متخصصة في تقديم حلول متكاملة تشمل الإنتاج، التوريد، النقل، الزراعة، التنفيذ، والصيانة.", "Rayat Najd is not just a nursery or a tree supplier, but a Saudi establishment specialized in providing integrated solutions including production, supply, transportation, planting, execution, and maintenance.")}
                </p>
                <p>
                  {t("نعمل مع الجهات الحكومية والشركات والمطورين العقاريين والفنادق والمنتجعات والقصور والمشاريع التجارية، ونقدم لكل مشروع حلولًا تناسب موقعه، هدفه، وطبيعة البيئة المحيطة به.", "We work with governmental entities, companies, real estate developers, hotels, resorts, palaces, and commercial projects, and we provide each project with solutions that suit its location, objective, and the nature of its surrounding environment.")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Vision and Mission */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Eye className="w-8 h-8" />
              </div>
              <div className="text-center md:text-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-start">{t("رؤيتنا", "Our Vision")}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("أن نكون الشريك الوطني الرائد في التشجير والاستدامة البيئية وتطوير المشهد الحضري في المملكة العربية السعودية، وأن نصبح نموذجًا إقليميًا في تحويل البيئات الجافة إلى مساحات أكثر حيوية واستدامة.", "To be the leading national partner in afforestation, environmental sustainability, and urban landscape development in the Kingdom of Saudi Arabia, and to become a regional model in transforming dry environments into more vibrant and sustainable spaces.")}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-center md:text-start">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{t("رسالتنا", "Our Mission")}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("تقديم حلول متكاملة في التشجير والمقاولات الزراعية والاستدامة البيئية، مدعومة بالخبرة الميدانية والمشاتل الإنتاجية والكوادر المؤهلة، بما يسهم في زيادة الغطاء النباتي وتحسين جودة الحياة ودعم مستهدفات رؤية المملكة 2030.", "Providing integrated solutions in afforestation, agricultural contracting, and environmental sustainability, supported by field experience, productive nurseries, and qualified personnel, contributing to increasing vegetation cover, improving quality of life, and supporting the objectives of the Kingdom's Vision 2030.")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Our Values */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("قيمنا", "Our Values")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. What makes us unique? */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("ما الذي يميز رايات نجد؟", "What Makes Rayat Najd Unique?")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Scope of work */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("نطاق أعمالنا", "Our Scope of Work")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {scope.map((item, i) => (
                <Link to={item.path} key={i} className="bg-white border border-gray-100 hover:border-primary/30 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <TreePine className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Nurseries and Farms */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[22px] md:text-4xl font-bold text-gray-900 mb-6">{t("من مشاتلنا إلى موقع المشروع", "From Our Nurseries to the Project Site")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {t("تمتلك رايات نجد مشاتل ومزارع إنتاجية في الرياض والخرج، تضم أنواعًا متعددة من النخيل، الأشجار المحلية والبرية، أشجار الظل والزينة، الأشجار المقاومة للجفاف، الشجيرات، النباتات المزهرة، النباتات العطرية، ومغطيات التربة.", "Rayat Najd owns productive nurseries and farms in Riyadh and Al-Kharj, containing multiple types of palms, local and wild trees, shade and ornamental trees, drought-resistant trees, shrubs, flowering plants, aromatic plants, and ground covers.")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("تمنحنا هذه الأصول القدرة على التحكم في جودة النباتات، تجهيز الكميات المطلوبة، وخدمة المشاريع الكبيرة بكفاءة أعلى.", "These assets give us the ability to control plant quality, prepare the required quantities, and serve large projects with higher efficiency.")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <img src="https://res.cloudinary.com/erfajaoa/image/upload/v1783961159/nursery_hero_v3o4lk.jpg" alt="Nursery" className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
              <img src="https://res.cloudinary.com/erfajaoa/image/upload/v1783896502/z4b0s2mlyy7b4wngc92n.jpg" alt="Trees" className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
              <img src="https://res.cloudinary.com/erfajaoa/image/upload/v1783896499/v5nmtx1kicf4qmd0yq1f.jpg" alt="Plants" className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
              <img src="https://res.cloudinary.com/erfajaoa/image/upload/v1783896489/bhmh6tihh2m5gyl10mku.jpg" alt="Palms" className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
            </div>

            <div className="text-center">
              <Link to="/catalog" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
                {t("استعرض المشاتل والأشجار", "View Nurseries & Trees")}
                {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
            </div>
          </div>
        </section>

        {/* 10. National & Environmental Impact */}
        <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square rounded-full bg-primary/10 flex items-center justify-center p-8 border-4 border-white shadow-xl">
                  <Leaf className="w-full h-full text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                  <span className="text-3xl font-bold text-accent-gold block text-center" dir="ltr">2030</span>
                  <span className="text-xs font-bold text-primary">{t("رؤية المملكة", "Kingdom Vision")}</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("نزرع أثرًا يتجاوز حدود المشروع", "We Plant an Impact Beyond the Project Boundaries")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("نؤمن أن التشجير ليس مجرد إضافة جمالية، بل استثمار في البيئة والإنسان والاقتصاد. لذلك تسعى رايات نجد إلى المساهمة في:", "We believe that afforestation is not just an aesthetic addition, but an investment in the environment, humanity, and the economy. Therefore, Rayat Najd seeks to contribute to:")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  t("زيادة الغطاء النباتي.", "Increasing vegetation cover."),
                  t("مكافحة التصحر.", "Combating desertification."),
                  t("تماسك التربة والحد من انجرافها.", "Soil cohesion and preventing erosion."),
                  t("تقليل أثر الغبار والعواصف الرملية.", "Reducing the impact of dust and sandstorms."),
                  t("تحسين جودة الحياة.", "Improving quality of life."),
                  t("دعم التنوع النباتي.", "Supporting plant diversity."),
                  t("تطوير المدن والطرق والوجهات السياحية.", "Developing cities, roads, and tourist destinations."),
                  t("دعم مستهدفات رؤية المملكة 2030 والرياض الخضراء.", "Supporting the objectives of Kingdom Vision 2030 and Green Riyadh.")
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 11. Sectors We Serve */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("القطاعات التي نخدمها", "Sectors We Serve")}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {sectors.map((sector, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-green-50/50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-gray-800 text-center">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Chairman */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 shrink-0 border border-gray-200">
                <Users className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{isRtl ? "م. سعيد بن علي القرني" : "Eng. Saeed Bin Ali Al-Qarni"}</h3>
                  <p className="text-primary font-bold">{t("رئيس مجلس الإدارة", "Chairman of the Board")}</p>
                </div>
                <div className="text-gray-600 leading-relaxed text-lg italic border-r-4 border-primary/30 pr-4 space-y-4">
                  <p>
                    {t("منذ تأسيس رايات نجد، عملنا على بناء مؤسسة تعتمد على الخبرة، الجودة، والالتزام. ونؤمن بأن مستقبل التنمية في المملكة يرتبط ارتباطًا وثيقًا بالاستدامة وتحسين جودة الحياة وزيادة المساحات الخضراء.", "Since the founding of Rayat Najd, we have worked on building an establishment based on experience, quality, and commitment. We believe that the future of development in the Kingdom is closely linked to sustainability, improving the quality of life, and increasing green spaces.")}
                  </p>
                  <p>
                    {t("طموحنا لا يقتصر على تنفيذ مشاريع التشجير، بل يمتد إلى بناء أثر بيئي مستدام والمحافظة على الأشجار والنباتات المحلية، وتقديم حلول تليق بالمشاريع الوطنية الكبرى.", "Our ambition is not limited to executing afforestation projects, but extends to building a sustainable environmental impact, preserving local trees and plants, and providing solutions worthy of major national projects.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Projects Teaser */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t("من مشاريعنا", "Our Projects")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { name: t("مشروع تشجير طويق", "Tuwaiq Afforestation"), type: t("حكومي", "Government"), city: t("الرياض", "Riyadh"), img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783896499/v5nmtx1kicf4qmd0yq1f.jpg", service: t("توريد وتنفيذ", "Supply & Execute") },
                { name: t("منتجع العمارية", "Al Ammariya Resort"), type: t("خاص", "Private"), city: t("الرياض", "Riyadh"), img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783896502/z4b0s2mlyy7b4wngc92n.jpg", service: t("تنسيق وزراعة", "Landscaping & Planting") },
                { name: t("حي الملك عبدالله", "King Abdullah District"), type: t("تطوير", "Development"), city: t("الخرج", "Al-Kharj"), img: "https://res.cloudinary.com/erfajaoa/image/upload/v1783896489/bhmh6tihh2m5gyl10mku.jpg", service: t("صيانة زراعية", "Agricultural Maint.") }
              ].map((p, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="h-48 overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">{p.type}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{p.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {p.city}</span>
                      <span className="flex items-center gap-1"><Leaf className="w-4 h-4" /> {p.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/#projects" className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3.5 rounded-full font-bold transition-all">
                {t("استعرض جميع المشاريع", "View All Projects")}
              </Link>
            </div>
          </div>
        </section>

        {/* 14. CTA */}
        <section className="py-20 px-4 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <TreePine className="absolute -left-20 -top-20 w-96 h-96" />
            <Leaf className="absolute -right-10 -bottom-10 w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">{t("لنصنع معًا مساحة أكثر خضرة واستدامة", "Let's Create a Greener and More Sustainable Space Together")}</h2>
            <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
              {t("شاركنا تفاصيل مشروعك، وسيساعدك فريق رايات نجد في اختيار الحل المناسب من مرحلة التخطيط وحتى التنفيذ.", "Share your project details with us, and the Rayat Najd team will help you choose the right solution from planning to execution.")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button onClick={() => window.dispatchEvent(new CustomEvent('openQuoteModal'))} className="bg-accent-gold hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                {t("اطلب عرض سعر", "Request a Quote")}
              </button>
              <a href="https://wa.me/966553308786" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
                {t("تحدث عبر واتساب", "Talk via WhatsApp")}
              </a>
              <Link to="/#services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 w-full sm:w-auto">
                {t("استعرض خدماتنا", "View Our Services")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
