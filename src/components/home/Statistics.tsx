import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Statistics() {
  const { t } = useSettings();

  const data = [
    {
      name: t("2020", "2020"),
      trees: 15000,
      area: 50000,
    },
    {
      name: t("2021", "2021"),
      trees: 35000,
      area: 120000,
    },
    {
      name: t("2022", "2022"),
      trees: 80000,
      area: 250000,
    },
    {
      name: t("2023", "2023"),
      trees: 150000,
      area: 500000,
    },
    {
      name: t("2024", "2024"),
      trees: 250000,
      area: 1000000,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-bg-primary relative border-y border-text-main/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gradient-identity mb-6 leading-relaxed py-2 md:leading-relaxed"
          >
            {t("إحصائيات", "Statistics")} <span className="text-gradient-green">{t("الأثر البيئي", "Environmental Impact")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            {t(
              "نحن نؤمن بلغة الأرقام. شاهد نمو مشاريعنا والأثر الإيجابي الذي نحققه عاماً بعد عام.",
              "We believe in the language of numbers. Witness the growth of our projects and the positive impact we make year after year."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-12">
          {/* Trees Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-card rounded-2xl md:rounded-3xl p-4 md:p-8"
          >
            <h3 className="text-xs md:text-xl font-bold text-text-main mb-2 md:mb-6 text-center">
              {t("الأشجار المزروعة (حتى الآن)", "Trees Planted (To Date)")}
            </h3>
            <div className="h-40 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" opacity={0.2} vertical={false} />
                  <XAxis dataKey="name" stroke="#888" tickLine={false} axisLine={false} tick={{fontSize: 10}} />
                  <YAxis stroke="#888" tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} tick={{fontSize: 10}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  />
                  <Bar dataKey="trees" name={t("شجرة", "Trees") as string} fill="#16A34A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Area Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-card rounded-2xl md:rounded-3xl p-4 md:p-8"
          >
            <h3 className="text-xs md:text-xl font-bold text-text-main mb-2 md:mb-6 text-center">
              {t("المساحات الخضراء (متر مربع)", "Green Areas (Sq. Meters)")}
            </h3>
            <div className="h-40 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" opacity={0.2} vertical={false} />
                  <XAxis dataKey="name" stroke="#888" tickLine={false} axisLine={false} tick={{fontSize: 10}} />
                  <YAxis stroke="#888" tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} tick={{fontSize: 10}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  />
                  <Bar dataKey="area" name={t("متر مربع", "Sq.m") as string} fill="#D4AF37" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
