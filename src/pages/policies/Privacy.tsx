import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import SEO from "../../components/SEO";

export default function Privacy() {
  const { t } = useSettings();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg-secondary text-text-main">
      <SEO
        title={t("سياسة الخصوصية | رايات نجد", "Privacy Policy | Rayat Najd")}
        description={t("سياسة الخصوصية وحماية البيانات في موقع رايات نجد للتشجير والاستدامة البيئية.", "Privacy policy and data protection at Rayat Najd.")}
        canonicalUrl="https://www.rayatnajd.com/privacy"
        breadcrumbs={[
          { name: "الرئيسية", item: "/" },
          { name: "سياسة الخصوصية", item: "/privacy" }
        ]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-bg-primary rounded-2xl p-8 md:p-12 shadow-sm border border-text-main/10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            {t("سياسة الخصوصية", "Privacy Policy")}
          </h1>
          
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">{t("1. جمع المعلومات", "1. Information Collection")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نحن نجمع المعلومات التي تقدمونها لنا مباشرة، مثل عند ملء نموذج الاتصال أو طلب عرض سعر. قد تشمل هذه المعلومات الاسم، البريد الإلكتروني، رقم الهاتف، وتفاصيل المشروع.",
                  "We collect information you provide directly to us, such as when you fill out a contact form or request a quote. This may include your name, email, phone number, and project details."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("2. استخدام المعلومات", "2. Use of Information")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، الرد على استفساراتكم، والتواصل معكم بخصوص مشاريعكم أو خدماتنا وعروضنا الجديدة.",
                  "We use the information we collect to provide and improve our services, respond to your inquiries, and communicate with you about your projects or our new services and offers."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("3. حماية البيانات", "3. Data Protection")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نحن نتخذ تدابير أمنية مناسبة لحماية معلوماتكم الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.",
                  "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("4. مشاركة المعلومات", "4. Information Sharing")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نحن لا نبيع أو نؤجر معلوماتكم الشخصية لجهات خارجية. قد نشارك معلوماتكم مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا أو إدارة أعمالنا، بشرط أن يوافقوا على الحفاظ على سرية هذه المعلومات.",
                  "We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("5. ملفات تعريف الارتباط (Cookies)", "5. Cookies")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "قد نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم على موقعنا وتتبع كيفية استخدام الموقع. يمكنكم التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحكم.",
                  "We may use cookies to enhance the user experience on our site and track how the site is used. You can control cookie settings through your browser."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
