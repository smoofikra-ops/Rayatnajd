import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";

export default function Terms() {
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
            {t("الشروط والأحكام", "Terms and Conditions")}
          </h1>
          
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">{t("1. مقدمة", "1. Introduction")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "مرحباً بكم في موقع رايات نجد للتشجير. باستخدامكم لهذا الموقع، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية.",
                  "Welcome to the Rayat Najd landscaping website. By using this website, you agree to comply with and be bound by these terms and conditions. Please read them carefully."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("2. استخدام الموقع", "2. Website Usage")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "يجب استخدام هذا الموقع للأغراض المشروعة فقط. يمنع استخدام الموقع بطريقة قد تؤدي إلى تعطيله أو إتلافه أو إعاقة وصول الآخرين إليه.",
                  "This website must be used for lawful purposes only. You are prohibited from using the site in any way that could damage, disable, or impair it or interfere with any other party's use."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("3. حقوق الملكية الفكرية", "3. Intellectual Property Rights")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لشركة رايات نجد أو مورديها ومحمية بموجب قوانين حقوق النشر.",
                  "All content on this site, including text, graphics, logos, and images, is the property of Rayat Najd or its suppliers and protected by copyright laws."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("4. إخلاء المسؤولية", "4. Disclaimer")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "يتم توفير المعلومات على هذا الموقع كما هي دون أي ضمانات صريحة أو ضمنية. نحن لا نضمن دقة أو اكتمال هذه المعلومات.",
                  "The information on this website is provided 'as is' without any express or implied warranties. We do not warrant the accuracy or completeness of this information."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("5. التعديلات", "5. Modifications")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. استمرار استخدامكم للموقع بعد إجراء التعديلات يعتبر قبولاً منكم للشروط المعدلة.",
                  "We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of the site following any changes constitutes your acceptance of the new terms."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
