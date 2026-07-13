import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { Building2 } from "lucide-react";
import { CloudinaryImage } from "../cloudinary/CloudinaryImage";
import { mediaData } from "../../data/media";

export default function SuccessPartners() {
  const { t } = useSettings();

  const partners = [
    { name: t("شريك النجاح 1", "Success Partner 1"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900191/1_k6tszv.jpg" },
    { name: t("شريك النجاح 2", "Success Partner 2"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900192/2_scdiio.jpg" },
    { name: t("شريك النجاح 3", "Success Partner 3"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900194/3_kc5r8o.jpg" },
    { name: t("شريك النجاح 4", "Success Partner 4"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900197/4_bgoo8s.jpg" },
    { name: t("شريك النجاح 5", "Success Partner 5"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900199/5_tzvkqg.jpg" },
    { name: t("شريك النجاح 6", "Success Partner 6"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900201/6_rsmhm7.jpg" },
    { name: t("شريك النجاح 7", "Success Partner 7"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900203/7_t9qa3q.jpg" },
    { name: t("شريك النجاح 8", "Success Partner 8"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900205/8_qyh39d.jpg" },
    { name: t("شريك النجاح 9", "Success Partner 9"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900208/9_ncs6pd.jpg" },
    { name: t("شريك النجاح 10", "Success Partner 10"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900210/10_j56ckg.jpg" },
    { name: t("شريك النجاح 11", "Success Partner 11"), logo: "https://res.cloudinary.com/erfajaoa/image/upload/v1783900212/11_qx1atq.jpg" }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-wider uppercase">{t("شركاؤنا", "Our Partners")}</span>
            <div className="h-px w-12 bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("شركاء", "Success")} <span className="text-gradient-green">{t("النجاح", "Partners")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            {t(
              "نعتز بشراكاتنا الاستراتيجية مع نخبة من الجهات الحكومية والخاصة لتحقيق مستهدفات الرؤية.",
              "We cherish our strategic partnerships with elite government and private entities to achieve the vision's goals."
            )}
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden flex group" dir="ltr">
          <div className="flex w-fit animate-marquee pause-marquee hover:pause-marquee">
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-6 md:gap-8 pr-6 md:pr-8 shrink-0">
                {partners.map((partner, index) => (
                  <motion.a
                    href="#"
                    key={`${setIndex}-${index}`}
                    whileTap={{ scale: 0.95, opacity: 0.5 }}
                    className="flex-none w-[180px] md:w-[220px] flex items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    dir={document.documentElement.dir}
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <div className="w-24 h-24 relative flex items-center justify-center">
                        <CloudinaryImage src={partner.logo} alt={partner.name} width={200} className="max-w-full max-h-full object-contain" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
