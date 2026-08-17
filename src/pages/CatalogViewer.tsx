import { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Printer, Box } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CatalogViewer() {
  const { t, language } = useSettings();
  const [activeTab, setActiveTab] = useState('products'); // products, values, services, vision
  
  const products = [
    { title: t("نخيل البلميط", "Sabal Palm"), category: t("نخيل الزينة", "Ornamental Palms"), height: t("حتى 20 متر", "Up to 20m"), img: "https://images.unsplash.com/photo-1595191833504-48615ff2786a?auto=format&fit=crop&q=80&w=600", desc: t("يعد نخيل البلميط من أنواع النخيل المميزة التي تنتمي إلى الفصيلة الفوفلية...", "Sabal palm is a distinctive type of palm...") },
    { title: t("أشجار اللوز البجلي", "Bajli Almond Trees"), category: t("الأشجار المحلية", "Native Trees"), height: t("5-10 أمتار", "5-10 meters"), img: "https://images.unsplash.com/photo-1444312645910-faa973a8d0c8?auto=format&fit=crop&q=80&w=600", desc: t("شجرة محلية مميزة تتحمل البيئة القاسية", "A distinctive native tree that withstands harsh environments") },
    { title: t("أشجار النيم", "Neem Trees"), category: t("أشجار الظل", "Shade Trees"), height: t("20+ متر", "20+ meters"), img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600", desc: t("شجرة ظل كثيفة سريعة النمو", "Fast-growing dense shade tree") },
    { title: t("نخيل بلدي (تمر)", "Date Palms"), category: t("نخيل مثمر", "Fruit Palms"), height: t("متعددة الأحجام", "Various Sizes"), img: "https://images.unsplash.com/photo-1505370390141-8db221cacc55?auto=format&fit=crop&q=80&w=600", desc: t("نخيل إنتاج التمور عالي الجودة", "High-quality date-producing palm") },
    { title: t("نخيل واشنطونيا", "Washingtonia Palm"), category: t("نخيل الزينة", "Ornamental Palms"), height: t("تصل إلى 30 متر", "Up to 30m"), img: "https://images.unsplash.com/photo-1595191833504-48615ff2786a?auto=format&fit=crop&q=80&w=600", desc: t("نخل مجمل للشوارع والميادين الكبيرة", "Beautifying palm for large streets and squares") },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-secondary flex flex-col font-sans" dir={language === "ar" ? "rtl" : "ltr"}>
      
      {/* Header toolbar - Hidden when printing */}
      <div className="print:hidden bg-bg-primary border-b border-text-main/10 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-text-muted hover:text-text-main p-2 rounded-full hover:bg-bg-secondary transition-colors">
             <ArrowRight className="w-5 h-5 rtl:rotate-0 ltr:rotate-180" />
          </Link>
          <h1 className="text-xl font-bold text-text-main">{t("كتالوج رايات نجد الشامل", "Rayat Najd Comprehensive Catalog")}</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 border border-text-main/10 hover:bg-bg-secondary rounded-lg text-text-main text-sm font-medium transition-colors">
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">{t("طباعة / PDF", "Print / PDF")}</span>
          </button>
          <button onClick={handlePrint} className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t("تحميل النسخة", "Download Copy")}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full print:block print:w-full print:max-w-none">
        
          {/* Sidebar Navigation - hidden when printing */}
        <div className="print:hidden w-full md:w-64 border-l rtl:border-l-0 rtl:border-r border-text-main/10 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto">
           <button 
             onClick={() => setActiveTab('products')} 
             className={`px-4 py-3 rounded-lg text-start whitespace-nowrap font-medium transition-colors ${activeTab === 'products' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-bg-primary hover:text-text-main'}`}
           >
             {t("المشاتل والأشجار", "Nurseries & Trees")}
           </button>
           <button 
             onClick={() => setActiveTab('services')} 
             className={`px-4 py-3 rounded-lg text-start whitespace-nowrap font-medium transition-colors ${activeTab === 'services' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-bg-primary hover:text-text-main'}`}
           >
             {t("خدماتنا المتميزة", "Our Premium Services")}
           </button>
           <button 
             onClick={() => setActiveTab('values')} 
             className={`px-4 py-3 rounded-lg text-start whitespace-nowrap font-medium transition-colors ${activeTab === 'values' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-bg-primary hover:text-text-main'}`}
           >
             {t("القيم والمبادئ", "Values & Principles")}
           </button>
           <button 
             onClick={() => setActiveTab('vision')} 
             className={`px-4 py-3 rounded-lg text-start whitespace-nowrap font-medium transition-colors ${activeTab === 'vision' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:bg-bg-primary hover:text-text-main'}`}
           >
             {t("رؤية 2030 والأهداف", "Vision 2030 & Goals")}
           </button>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 p-6 md:p-12 print:p-0">
           
           {/* Products Tab */}
           {activeTab === 'products' && (
             <motion.div initial={{opacity:0}} animate={{opacity:1}} className="print:block">
               <div className="mb-12 print:mt-10">
                 <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 border-b border-text-main/10 pb-6">{t("الأشجار والنباتات", "Trees & Plants")}</h2>
                 <p className="text-text-muted text-lg">{t("مخزون ضخم لتغطية كافة المشاريع البيئية والزراعية", "A massive inventory to cover all environmental and agricultural projects")}</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
                 {products.map((product, i) => (
                   <div key={i} className="bg-bg-primary border border-text-main/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 print:border-black/20 print:break-inside-avoid shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-full md:w-1/3 h-48 md:h-full min-h-[150px] bg-bg-secondary rounded-xl overflow-hidden print:w-1/3 relative">
                       <img src={product.img} alt={product.title as string} loading="lazy" className="w-full h-full object-cover" />
                     </div>
                     <div className="w-full md:w-2/3 flex flex-col justify-center print:w-2/3">
                        <span className="text-primary text-sm font-bold bg-primary/10 w-fit px-3 py-1 rounded-full mb-3 print:border print:border-primary">
                          {product.category}
                        </span>
                        <h3 className="text-2xl font-bold text-text-main mb-2">{product.title}</h3>
                        <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-3 print:line-clamp-none">{product.desc}</p>
                        <hr className="border-text-main/5 mb-4"/>
                        <p className="text-text-main font-medium flex justify-between">
                          <span className="text-text-muted">{t("الارتفاع:", "Height:")}</span> {product.height}
                        </p>
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
           )}

           {/* Services Tab */}
           {activeTab === 'services' && (
             <motion.div initial={{opacity:0}} animate={{opacity:1}} className="print:block">
               <div className="mb-12">
                 <h2 className="text-3xl font-black text-text-main mb-4 border-b border-text-main/10 pb-6">{t("الخدمات", "Services")}</h2>
               </div>
               <div className="space-y-6 print:space-y-4">
                  {[
                    t("التشجير والمقاولات الزراعية", "Afforestation & Agricultural Contracting"),
                    t("تطوير المشهد الحضري", "Urban Landscape Development"),
                    t("نقل الأشجار العملاقة", "Moving Giant Trees"),
                    t("الصيانة الزراعية", "Agricultural Maintenance"),
                    t("شبكات الري الذكية", "Smart Irrigation Systems")
                  ].map((srv, i) => (
                    <div key={i} className="bg-bg-primary p-6 rounded-xl border border-text-main/10 print:break-inside-avoid flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Box className="text-primary w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-text-main">{srv}</h3>
                    </div>
                  ))}
               </div>
             </motion.div>
           )}

           {/* Values and Vision can be simpler similarly for brevity as it's a generated catalog page */}
           {(activeTab === 'values' || activeTab === 'vision') && (
             <motion.div initial={{opacity:0}} animate={{opacity:1}} className="print:block">
                <div className="mb-12">
                 <h2 className="text-3xl font-black text-text-main mb-4 border-b border-text-main/10 pb-6">
                   {activeTab === 'values' ? t("القيم والمبادئ", "Values & Principles") : t("رؤية 2030 والأهداف", "Vision 2030 & Goals")}
                 </h2>
                 <p className="text-text-muted text-lg">
                   {activeTab === 'values' ? t("الاستدامة، الجودة، الموثوقية", "Sustainability, Quality, Reliability") : t("مبادرة السعودية الخضراء والرياض الخضراء", "Saudi Green Initiative & Green Riyadh")}
                 </p>
               </div>
               <div className="bg-bg-primary p-8 rounded-2xl border border-text-main/10 text-center py-24">
                  <p className="text-text-muted text-xl">{t("هذا القسم يتم سحب بياناته بالتزامن مع الموقع الرئيسي.", "This section is synced dynamically with the main website data.")}</p>
               </div>
             </motion.div>
           )}

        </div>
      </div>
    </div>
  );
}
