import { useSettings } from "../contexts/SettingsContext";
import { Info, Phone, MessageSquare, TreePine, Sprout, Leaf } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function TopBanner() {
  const { t, language } = useSettings();

  const messagesAr = [
    "نلفت انتباه عملائنا الكرام بأن الموقع الإلكتروني يمر حالياً بمرحلة تطوير وتحديث مستمرة. نعتذر عن عدم إيقاف الموقع مؤقتاً لحرصنا على استمرار تواصلكم معنا. نعمل جاهدين على تحسين وتطوير المنصة لتوفير تجربة أفضل. لأي استفسارات أو طلبات، نحن على أتم الاستعداد لخدمتكم والتواصل معكم مباشرة عبر الاتصال أو الواتساب.",
    "نقدم خدمات متكاملة في تنسيق الحدائق وتطوير المشهد الحضري للجهات الحكومية والخاصة بأعلى معايير الجودة.",
    "حلول مبتكرة لتصميم وتنفيذ المساحات الخضراء في القصور والفلل، لنخلق لك بيئة طبيعية تنبض بالحياة.",
    "شريكك الأمثل من المقاولين لتنفيذ المشاريع الزراعية الكبرى، وتوريد النخيل والأشجار بمختلف الأنواع والأحجام.",
    "نلتزم بتحقيق مستهدفات مبادرة السعودية الخضراء من خلال مشاريع التشجير المستدامة وزيادة الرقعة الخضراء."
  ];

  const messagesEn = [
    "We would like to inform our valued customers that the website is currently undergoing continuous development and updates. We apologize for not temporarily suspending the site out of our commitment to maintaining communication with you. We are working hard to improve and develop the platform to provide a better experience. For any inquiries or requests, we are fully prepared to serve you and communicate directly via call or WhatsApp.",
    "We provide integrated services in landscaping and urban development for government and private sectors with the highest quality standards.",
    "Innovative solutions for designing and implementing green spaces in palaces and villas, creating a vibrant natural environment for you.",
    "Your ideal contractor partner for executing major agricultural projects and supplying palms and trees of various types and sizes.",
    "We are committed to achieving the goals of the Saudi Green Initiative through sustainable afforestation projects and increasing green areas."
  ];

  const messages = language === 'ar' ? messagesAr : messagesEn;

  // We duplicate the messages array to create a seamless infinite loop
  const loopContent = [...messages, ...messages];

  return (
    <div className="bg-primary/90 text-white overflow-hidden py-2.5 px-4 relative z-40 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="shrink-0 flex items-center justify-center bg-white/20 p-1.5 rounded-full z-10">
            <Info className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          
          <div className="flex-grow overflow-hidden relative flex items-center h-6 md:h-7" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div 
              className="flex items-center absolute ltr:left-0 rtl:right-0 w-max whitespace-nowrap animate-marquee hover:pause-marquee"
              style={{ animationDuration: '120s' }}
            >
              {loopContent.map((msg, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-4 inline-block font-medium text-xs md:text-sm">{msg}</span>
                  {idx !== loopContent.length - 1 && (
                     <div className="px-2 flex items-center justify-center text-green-400">
                        {idx % 3 === 0 ? <TreePine className="w-4 h-4 mx-2 shrink-0" /> : idx % 3 === 1 ? <Sprout className="w-4 h-4 mx-2 shrink-0" /> : <Leaf className="w-4 h-4 mx-2 shrink-0" />}
                     </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="shrink-0 flex items-center gap-2 md:gap-4 ltr:border-l ltr:border-white/20 rtl:border-r rtl:border-white/20 rtl:pr-2 rtl:md:pr-4 ltr:pl-2 ltr:md:pl-4 z-10">
            <a href="tel:+966553308786" className="flex items-center gap-1.5 hover:text-white/80 transition-colors bg-white/10 hover:bg-white/20 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="hidden sm:inline" dir="ltr">+966 55 330 8786</span>
            </a>
            <a href="https://wa.me/966553308786" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors bg-green-500/80 hover:bg-green-500 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">
              <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="hidden sm:inline">{t("واتساب", "WhatsApp")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
