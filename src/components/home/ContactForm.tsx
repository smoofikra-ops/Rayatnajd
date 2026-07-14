import React, { useState } from "react";
import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const { t, language } = useSettings();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const clientType = (form.elements.namedItem('clientType') as HTMLSelectElement)?.value || '';
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const serviceText = form.querySelector(`#service option[value="${service}"]`)?.textContent || service;
    const clientTypeText = form.querySelector(`#clientType option[value="${clientType}"]`)?.textContent || clientType;

    const text = `طلب جديد عبر الموقع الإلكتروني:
الاسم: ${name}
رقم الجوال: ${phone}
نوع العميل: ${clientTypeText}
الخدمة المطلوبة: ${serviceText}
الرسالة: ${message}`;

    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => setSuccess(false), 5000);
      form.reset();
    }, 800);
  };

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("تحدث مع", "Talk to an")} <span className="text-gradient-green">{t("خبير", "Expert")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            {t(
              "نحن هنا للإجابة على استفساراتكم وتحويل أفكاركم إلى مساحات خضراء حقيقية. تواصل مع خبرائنا اليوم.",
              "We are here to answer your inquiries and turn your ideas into real green spaces. Talk to our experts today."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="premium-card p-6 md:p-8 rounded-3xl h-full flex flex-col justify-center space-y-8 border border-text-main/5 shadow-xl shadow-black/5">
              <h3 className="text-2xl font-bold text-text-main mb-4">{t("معلومات الاتصال", "Contact Information")}</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-1">{t("العنوان", "Address")}</h4>
                  <p className="text-text-muted">{t("الرياض، المملكة العربية السعودية", "Riyadh, Saudi Arabia")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-1">{t("رقم الهاتف", "Phone Number")}</h4>
                  <p className="text-text-muted" dir="ltr">+966 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-1">{t("البريد الإلكتروني", "Email")}</h4>
                  <p className="text-text-muted">info@rayatnajd.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 premium-card p-6 md:p-8 rounded-3xl border border-text-main/5 shadow-xl shadow-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-text-main">
                    {t("الاسم الكامل", "Full Name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-bg-primary border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={t("أدخل اسمك الكريم", "Enter your name") as string}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-text-main">
                    {t("رقم الجوال", "Phone Number")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-bg-primary border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={t("أدخل رقم الجوال", "Enter your phone") as string}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="clientType" className="text-sm font-semibold text-text-main">
                    {t("نوع العميل", "Client Type")}
                  </label>
                  <select
                    id="clientType"
                    required
                    defaultValue=""
                    className="w-full bg-bg-primary border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="" disabled>{t("اختر نوع العميل", "Select client type")}</option>
                    <option value="individual">{t("فرد", "Individual")}</option>
                    <option value="company">{t("شركة", "Company")}</option>
                    <option value="government">{t("جهة حكومية", "Government Entity")}</option>
                    <option value="contractor">{t("مقاول", "Contractor")}</option>
                    <option value="other">{t("أخرى", "Other")}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-text-main">
                    {t("الخدمة المطلوبة", "Requested Service")}
                  </label>
                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="w-full bg-bg-primary border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="" disabled>{t("اختر الخدمة", "Select a service")}</option>
                    <option value="landscaping">{t("تصميم وتنسيق الحدائق", "Landscape Design")}</option>
                    <option value="tree-planting">{t("زراعة الأشجار", "Tree Planting")}</option>
                    <option value="maintenance">{t("الصيانة والعناية", "Maintenance & Care")}</option>
                    <option value="irrigation">{t("شبكات الري", "Irrigation Systems")}</option>
                    <option value="hardscaping">{t("الهاردسكيب والممرات", "Hardscaping & Pathways")}</option>
                    <option value="nurseries">{t("توريد النباتات والأشجار", "Plants & Trees Supply")}</option>
                    <option value="consultation">{t("استشارات زراعية", "Agricultural Consultation")}</option>
                    <option value="other">{t("أخرى", "Other")}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-text-main">
                  {t("رسالتك", "Your Message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-bg-primary border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder={t("اكتب رسالتك أو استفسارك هنا...", "Write your message here...") as string}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
                    {t("إرسال الطلب", "Send Request")}
                  </>
                )}
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 p-4 rounded-xl text-center font-medium"
                >
                  {t("تم إرسال استفسارك بنجاح! سيقوم أحد خبرائنا بالتواصل معك قريباً.", "Your inquiry has been sent successfully! One of our experts will contact you soon.")}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
