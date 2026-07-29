import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";

export default function Warranty() {
  const { t } = useSettings();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg-secondary text-text-main">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-bg-primary rounded-2xl p-8 md:p-12 shadow-sm border border-text-main/10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            {t("سياسة الضمان", "Warranty Policy")}
          </h1>
          
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">{t("1. نطاق الضمان", "1. Warranty Scope")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "تلتزم رايات نجد بتقديم خدمات زراعية وتشجير عالية الجودة. يشمل ضماننا بقاء النباتات والأشجار المزروعة ونموها خلال الفترة المحددة في عقد المشروع، بشرط الالتزام بتعليمات العناية المقدمة من قبلنا.",
                  "Rayat Najd is committed to providing high-quality landscaping and planting services. Our warranty covers the survival and growth of planted plants and trees during the period specified in the project contract, provided our care instructions are followed."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("2. شروط الضمان", "2. Warranty Conditions")}</h2>
              <ul className="list-disc list-inside text-text-muted leading-relaxed space-y-2">
                <li>{t("يجب توفير ري كافٍ ومنتظم حسب توجيهات خبرائنا.", "Sufficient and regular irrigation must be provided as directed by our experts.")}</li>
                <li>{t("يجب حماية النباتات من العبث أو التلف المتعمد.", "Plants must be protected from tampering or intentional damage.")}</li>
                <li>{t("عدم إضافة أي أسمدة أو مبيدات كيميائية دون استشارة مسبقة منا.", "No chemical fertilizers or pesticides should be added without prior consultation with us.")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("3. الاستثناءات", "3. Exclusions")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "لا يغطي الضمان التلف الناتج عن الكوارث الطبيعية (مثل العواصف الشديدة، الصقيع، الحرارة الاستثنائية)، أو الآفات والأمراض التي تظهر بعد فترة التسليم، أو الإهمال في الصيانة.",
                  "The warranty does not cover damage resulting from natural disasters (e.g., severe storms, frost, exceptional heat), pests and diseases appearing after the delivery period, or maintenance negligence."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("4. آلية المطالبة", "4. Claim Mechanism")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "في حالة ملاحظة أي تدهور في صحة النباتات المشمولة بالضمان، يرجى التواصل معنا فوراً عبر قنوات الاتصال الرسمية لإرسال فريق الفحص والتقييم واتخاذ الإجراءات اللازمة إما بالعلاج أو الاستبدال.",
                  "In case of noticing any deterioration in the health of plants covered by the warranty, please contact us immediately through official communication channels to dispatch an inspection team and take necessary actions, either treatment or replacement."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
