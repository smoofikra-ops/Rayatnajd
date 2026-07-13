import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { t } = useSettings();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("كيف أعتني بالأشجار بعد زراعتها؟", "How do I care for trees after planting?"),
      answer: t("تتطلب الأشجار حديثة الزراعة رياً منتظماً خاصة في فترات الجفاف الأولى. نوفر لك في رايات نجد دليلاً متكاملاً للعناية بأنواع معينة، إضافة إلى خدمات صيانة ومتابعة دورية تضمن استدامة نمو الأشجار.", "Newly planted trees require regular watering, especially during the initial dry periods. At Rayat Najd, we provide a comprehensive guide for caring for specific types, in addition to periodic maintenance and follow-up services that ensure the sustainable growth of trees."),
    },
    {
      question: t("ما هي العوامل المحددة لتكلفة التشجير؟", "What are the determining factors for afforestation costs?"),
      answer: t("يتم تحديد التكلفة بناءً على عدة عوامل تشمل مساحة الموقع، أنواع الأشجار المستخدمة، نظام الري المطلوب، وأعمال التصميم وتجهيز التربة. نقدم لك استشارة أولية وتسعيراً دقيقاً بعد تقييم احتياجات مساحتك.", "The cost is determined based on several factors, including the site area, the types of trees used, the required irrigation system, and design and soil preparation work. We offer an initial consultation and accurate pricing after assessing the needs of your space."),
    },
    {
      question: t("كيف تدعم مشاريعكم سياسات الاستدامة؟", "How do your projects support sustainability policies?"),
      answer: t("نركز على اختيار الأنواع النباتية المحلية والمناسبة للبيئة والتي تقلل من استهلاك المياه. كذلك، نعتمد أنظمة ري ذكية ومواد صديقة للبيئة تتماشى مع رؤية المملكة ومبادرات السعودية الخضراء لتعزيز التنوع البيولوجي.", "We focus on selecting native and environmentally friendly plant species that reduce water consumption. Also, we adopt smart irrigation systems and eco-friendly materials in line with the Kingdom's vision and the Saudi Green initiatives to enhance biodiversity."),
    },
    {
      question: t("كم تستغرق عملية التنفيذ عادة؟", "How long does the implementation process usually take?"),
      answer: t("تعتمد المدة الزمنية على حجم المشروع. المشاريع الصغيرة (الحدائق الخاصة) قد تستغرق أسبوعاً، بينما المشاريع الكبيرة (تنسيق المجمعات) يتم وضع جدول زمني مخصص يضمن الجودة وسرعة الإنجاز.", "The timeframe depends on the project size. Small projects (private gardens) may take up to a week, while large projects (complex landscaping) are given a customized timeline ensuring quality and fast completion."),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-bg-primary relative" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("الأسئلة", "Frequently Asked")} <span className="text-gradient-green">{t("الشائعة", "Questions")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t(
              "إجابات لبعض الاستفسارات الشائعة حول خدماتنا، طرق العناية، وتكاليف التشجير والاستدامة.",
              "Answers to some common inquiries about our services, care methods, afforestation costs, and sustainability."
            )}
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl overflow-hidden border border-text-main/5 shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-right focus:outline-none bg-bg-secondary/50 hover:bg-bg-secondary transition-colors"
              >
                <span className="font-bold text-text-main text-base text-right">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-text-muted leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
