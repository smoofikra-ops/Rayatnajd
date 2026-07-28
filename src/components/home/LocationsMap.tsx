import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { MapPin } from "lucide-react";

export default function LocationsMap() {
  const { t } = useSettings();

  return (
    <section className="py-8 md:py-20 bg-white dark:bg-bg-primary relative overflow-hidden" id="locations">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary"
          >
            <MapPin className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-main mb-6 leading-relaxed py-2"
          >
            {t("مواقعنا", "Our Locations")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-8">
          {/* Mashatel Al Riyadh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-bg-secondary rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-text-main/10"
          >
            <div className="p-3 md:p-6 border-b border-text-main/10 bg-white dark:bg-bg-primary">
              <h3 className="text-sm md:text-2xl font-bold text-text-main text-center">
                {t("مشاتل الرياض", "Mashatel Al Riyadh")}
              </h3>
            </div>
            <div className="w-full aspect-[4/5] md:aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0849887631302!2d46.797980404583974!3d24.518274995539883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0b005f52ae7f%3A0x7b7da2f493de103b!2z2YXYtNin2KrZhCDZhtiu2YQg2YTZhNio2YrYuQ!5e1!3m2!1sar!2ssa!4v1785262801574!5m2!1sar!2ssa"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>

          {/* Mashatel Al Kharj */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col bg-bg-secondary rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-text-main/10"
          >
            <div className="p-3 md:p-6 border-b border-text-main/10 bg-white dark:bg-bg-primary">
              <h3 className="text-sm md:text-2xl font-bold text-text-main text-center">
                {t("مشاتل الخرج", "Mashatel Al Kharj")}
              </h3>
            </div>
            <div className="w-full aspect-[4/5] md:aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3817.686129394511!2d47.72224228803542!3d24.286852852349455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2ssa!4v1785263281532!5m2!1sar!2ssa"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
