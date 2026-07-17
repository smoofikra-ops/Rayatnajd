import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../contexts/SettingsContext";

export default function QuoteFormModal() {
  const { t } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    clientType: "",
    projectType: "",
    interestedCategories: [] as string[],
    quantity: "",
    budget: "",
    expectedTime: "",
    notes: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openQuoteModal", handleOpen);
    return () => window.removeEventListener("openQuoteModal", handleOpen);
  }, []);

  if (!isOpen) return null;

  const clientTypes = [
    t("فرد", "Individual"),
    t("مؤسسة", "Establishment"),
    t("شركة", "Company"),
    t("جهة حكومية", "Government Entity"),
    t("مطور عقاري", "Real Estate Developer"),
    t("فندق أو منتجع", "Hotel or Resort"),
    t("مقاول أو شركة لاندسكيب", "Contractor or Landscape Co."),
    t("مشتل جملة أو تجزئة", "Wholesale/Retail Nursery")
  ];

  const projectTypes = [
    t("قصر أو فيلا", "Palace or Villa"),
    t("مزرعة أو استراحة", "Farm or Resort"),
    t("مشروع حكومي", "Government Project"),
    t("مشروع تجاري", "Commercial Project"),
    t("فندق أو منتجع", "Hotel or Resort"),
    t("طريق أو شارع", "Road or Street"),
    t("حديقة أو منتزه", "Park or Garden"),
    t("توريد فقط", "Supply Only"),
    t("نقل أشجار", "Tree Relocation"),
    t("صيانة وتشجير", "Maintenance and Afforestation")
  ];

  const categories = [
    t("النخيل", "Palms"),
    t("الأشجار المحلية والبرية", "Local & Wild Trees"),
    t("أشجار الظل", "Shade Trees"),
    t("أشجار الزينة", "Ornamental Trees"),
    t("الأشجار المقاومة للجفاف", "Drought Resistant Trees"),
    t("الشجيرات والنباتات التجميلية", "Shrubs & Cosmetic Plants"),
    t("النباتات المتسلقة ومغطيات التربة", "Climbers & Ground Covers"),
    t("أشجار ونباتات المشاريع", "Project Trees & Plants"),
    t("الأشجار النادرة والمميزة", "Rare & Special Trees"),
    t("نقل الأشجار", "Tree Relocation"),
    t("مشاريع التشجير", "Afforestation Projects"),
    t("الصيانة الزراعية", "Agricultural Maintenance"),
    t("تنسيق المواقع", "Landscaping"),
    t("أنظمة الري", "Irrigation Systems")
  ];

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      interestedCategories: prev.interestedCategories.includes(category)
        ? prev.interestedCategories.filter(c => c !== category)
        : [...prev.interestedCategories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "966553308786";
    
    let text = `مرحباً رايات نجد،\n\nأرغب في طلب عرض سعر.\n\n`;
    text += `بيانات العميل:\n`;
    text += `الاسم: ${formData.name}\n`;
    if (formData.phone) text += `رقم الجوال: ${formData.phone}\n`;
    if (formData.city) text += `المدينة: ${formData.city}\n`;
    text += `نوع العميل: ${formData.clientType}\n\n`;

    text += `تفاصيل المشروع:\n`;
    text += `نوع المشروع: ${formData.projectType}\n`;
    text += `الأقسام المهتم بها:\n${formData.interestedCategories.map(c => `- ${c}`).join('\n')}\n`;
    if (formData.quantity) text += `الكمية التقريبية: ${formData.quantity}\n`;
    if (formData.budget) text += `الميزانية التقريبية: ${formData.budget}\n`;
    if (formData.expectedTime) text += `وقت التنفيذ المتوقع: ${formData.expectedTime}\n\n`;

    if (formData.notes) {
      text += `ملاحظات إضافية:\n${formData.notes}\n\n`;
    }
    
    text += `الرجاء التواصل معي لتجهيز العرض المناسب.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-bg-primary rounded-2xl shadow-2xl shadow-black/50 border border-text-main/10 overflow-hidden flex flex-col max-h-[90vh]"
            dir={document.documentElement.dir}
          >
            <div className="flex items-center justify-between p-6 border-b border-text-main/5">
              <h3 className="text-2xl font-bold text-text-main">
                {t("طلب عرض سعر", "Request a Quote")}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-main transition-colors select-none p-2 rounded-full hover:bg-bg-secondary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("الاسم", "Name")}</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("رقم الجوال", "Phone Number")}</label>
                    <input required type="tel" dir="ltr" placeholder="0553308786" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-left" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("المدينة", "City")}</label>
                    <input required type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("نوع العميل", "Client Type")}</label>
                    <select required value={formData.clientType} onChange={(e) => setFormData({ ...formData, clientType: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary">
                      <option value="" disabled>{t("اختر...", "Select...")}</option>
                      {clientTypes.map((type, idx) => <option key={idx} value={type as string}>{type}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("نوع المشروع", "Project Type")}</label>
                    <select required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary">
                      <option value="" disabled>{t("اختر...", "Select...")}</option>
                      {projectTypes.map((type, idx) => <option key={idx} value={type as string}>{type}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-3">{t("الأقسام المهتم بها", "Categories of Interest")}</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, idx) => {
                      const isSelected = formData.interestedCategories.includes(category as string);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCategoryToggle(category as string)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                            isSelected 
                              ? 'bg-primary text-white border-primary' 
                              : 'bg-bg-secondary text-text-muted border-text-main/10 hover:border-primary/50'
                          }`}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("الكمية التقريبية", "Approx Quantity")}</label>
                    <input type="text" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("الميزانية التقريبية", "Approx Budget")}</label>
                    <input type="text" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{t("وقت التنفيذ المتوقع", "Expected Time")}</label>
                    <input type="text" value={formData.expectedTime} onChange={(e) => setFormData({ ...formData, expectedTime: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">{t("ملاحظات إضافية", "Additional Notes")}</label>
                  <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary resize-none" placeholder={t("تحديد الموقع أو المدينة أو لرفع ملفات يرجى مشاركتها في الواتساب...", "Location, city, or if you have files to attach, please share them in WhatsApp...") as string}></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={formData.interestedCategories.length === 0} className="w-full bg-primary hover:bg-primary-light disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20 flex justify-center items-center gap-2">
                    {t("إرسال عبر الواتساب", "Send via WhatsApp")}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
