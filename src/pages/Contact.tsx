import { motion } from "framer-motion";
import { useSettings } from "../contexts/SettingsContext";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export default function Contact() {
  const { t, language } = useSettings();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        language === "ar"
          ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
          : "Your message has been sent successfully! We will contact you soon.",
        {
          position: language === 'ar' ? 'bottom-left' : 'bottom-right'
        }
      );
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595191833504-48615ff2786a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t("اتصل بنا", "Contact Us")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-50 max-w-2xl mx-auto"
          >
            {t(
              "نحن هنا للإجابة على استفساراتك وتلبية احتياجات مشروعك. تواصل معنا اليوم.",
              "We are here to answer your inquiries and meet your project needs. Contact us today."
            )}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 relative z-20 -mt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {t("معلومات التواصل", "Contact Information")}
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">{t("رقم الهاتف", "Phone Number")}</h3>
                        <p className="text-gray-900 font-medium" dir="ltr">+966 55 330 8786</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">{t("البريد الإلكتروني", "Email Address")}</h3>
                        <p className="text-gray-900 font-medium">info@rayatnajd.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">{t("العنوان", "Address")}</h3>
                        <p className="text-gray-900 font-medium leading-relaxed">
                          {t("الرياض، المملكة العربية السعودية", "Riyadh, Saudi Arabia")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">{t("ساعات العمل", "Working Hours")}</h3>
                        <p className="text-gray-900 font-medium leading-relaxed">
                          {t("الأحد - الخميس: 8:00 ص - 5:00 م", "Sun - Thu: 8:00 AM - 5:00 PM")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-500 mb-4">{t("تابعنا", "Follow Us")}</h3>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-50 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 h-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("أرسل لنا رسالة", "Send Us a Message")}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          {t("الاسم الكامل", "Full Name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={language === 'ar' ? "محمد عبدالله" : "Mohammed Abdullah"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          {t("البريد الإلكتروني", "Email Address")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          {t("رقم الهاتف", "Phone Number")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="05x xxx xxxx"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          {t("الموضوع", "Subject")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={language === 'ar' ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        {t("الرسالة", "Message")} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder={language === 'ar' ? "اكتب رسالتك هنا..." : "Write your message here..."}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>{t("إرسال الرسالة", "Send Message")}</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d115933.26543166668!2d46.6669921!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1715424563821!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </div>
  );
}
