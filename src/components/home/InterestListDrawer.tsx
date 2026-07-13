import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Trash2, ClipboardList } from "lucide-react";
import { useSettings } from "../../contexts/SettingsContext";
import { useInterestList } from "../../contexts/InterestListContext";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";

export default function InterestListDrawer() {
  const { t, language } = useSettings();
  const { items, isInterestListOpen, setIsInterestListOpen, removeItem } = useInterestList();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    clientType: "فرد",
    notes: ""
  });

  const clientTypes = [
    t("فرد", "Individual"),
    t("مؤسسة", "Institution"),
    t("شركة", "Company"),
    t("جهة حكومية", "Government Entity"),
    t("مطور عقاري", "Real Estate Developer"),
    t("فندق أو منتجع", "Hotel or Resort"),
    t("مقاول أو شركة لاندسكيب", "Contractor or Landscape Co."),
    t("مشتل جملة أو تجزئة", "Wholesale/Retail Nursery")
  ];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    let message = `مرحباً رايات نجد،\n\n`;
    message += `أرغب في الاستفسار عن العناصر التي أضفتها إلى قائمة الاهتمام:\n\n`;
    
    message += `بيانات العميل:\n`;
    message += `الاسم: ${formData.name}\n`;
    message += `رقم الجوال: ${formData.phone}\n`;
    message += `المدينة: ${formData.city}\n`;
    message += `نوع العميل: ${formData.clientType}\n\n`;

    message += `قائمة الاهتمام:\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. الاسم: ${language === 'ar' ? item.nameAr : item.nameEn}\n`;
      message += `   التصنيف: ${language === 'ar' ? item.categoryAr : item.categoryEn}\n\n`;
    });

    if (formData.notes) {
      message += `ملاحظات إضافية:\n${formData.notes}\n\n`;
    }

    message += `الرجاء تزويدي بالمعلومات المناسبة أو عرض السعر إن أمكن.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966553308786?text=${encodedMessage}`, "_blank");
    setIsInterestListOpen(false);
  };

  return (
    <AnimatePresence>
      {isInterestListOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsInterestListOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: language === 'ar' ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-full max-w-md bg-bg-primary z-50 shadow-2xl flex flex-col border-${language === 'ar' ? 'l' : 'r'} border-text-main/10`}
          >
            <div className="flex items-center justify-between p-6 border-b border-text-main/10 bg-bg-secondary">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-text-main">{t("قائمة الاهتمام", "Interest List")}</h2>
                <span className="bg-text-main text-bg-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
                onClick={() => setIsInterestListOpen(false)}
                className="p-2 text-text-muted hover:bg-text-main/5 hover:text-text-main rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-text-muted space-y-4 opacity-50">
                  <ClipboardList className="w-16 h-16" />
                  <p>{t("القائمة فارغة", "The list is empty")}</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-3 bg-bg-secondary rounded-2xl border border-text-main/5 relative group">
                        {item.image && (
                          <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-bg-primary">
                            <CloudinaryImage src={item.image} alt={item.nameAr} width={150} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <h4 className="font-bold text-text-main truncate">{language === 'ar' ? item.nameAr : item.nameEn}</h4>
                          <p className="text-xs text-text-muted truncate">{language === 'ar' ? item.categoryAr : item.categoryEn}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="absolute top-2 rtl:left-2 ltr:right-2 p-1.5 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-text-main/10">
                    <h3 className="font-bold text-text-main mb-4">{t("بيانات التواصل", "Contact Information")}</h3>
                    <form id="interest-form" onSubmit={handleSendToWhatsApp} className="space-y-4">
                      <div>
                        <label className="block text-sm text-text-muted mb-1">{t("الاسم", "Name")}</label>
                        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-2 text-text-main focus:outline-none focus:border-primary/50" />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-1">{t("رقم الجوال", "Phone Number")}</label>
                        <input required type="tel" dir="ltr" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-2 text-text-main focus:outline-none focus:border-primary/50 text-left" />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-1">{t("المدينة", "City")}</label>
                        <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-2 text-text-main focus:outline-none focus:border-primary/50" />
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-1">{t("نوع العميل", "Client Type")}</label>
                        <select value={formData.clientType} onChange={e => setFormData({...formData, clientType: e.target.value})} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-2 text-text-main focus:outline-none focus:border-primary/50">
                          {clientTypes.map((type, i) => <option key={i} value={type as string}>{type}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-text-muted mb-1">{t("ملاحظات إضافية (اختياري)", "Additional Notes (Optional)")}</label>
                        <textarea rows={2} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full bg-bg-secondary border border-text-main/10 rounded-xl px-4 py-2 text-text-main focus:outline-none focus:border-primary/50 resize-none" />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>

            <div className="p-6 border-t border-text-main/10 bg-bg-secondary">
              <button
                type="submit"
                form="interest-form"
                disabled={items.length === 0}
                className="w-full py-4 bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 rtl:-scale-x-100" />
                {t("أرسل عبر واتساب", "Send via WhatsApp")}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
