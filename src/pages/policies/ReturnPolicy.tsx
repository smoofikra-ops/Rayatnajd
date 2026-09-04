import { motion } from "motion/react";
import { useSettings } from "../../contexts/SettingsContext";
import SEO from "../../components/SEO";

export default function ReturnPolicy() {
  const { t } = useSettings();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg-secondary text-text-main">
      <SEO
        title={t("سياسة الاسترجاع والإلغاء | رايات نجد", "Return & Cancellation Policy | Rayat Najd")}
        description={t("سياسة الاسترجاع والإلغاء وتوريد المواد في شركة رايات نجد للتشجير والاستدامة البيئية.", "Return, cancellation and material supply policies at Rayat Najd.")}
        canonicalUrl="https://www.rayatnajd.com/return-policy"
        breadcrumbs={[
          { name: "الرئيسية", item: "/" },
          { name: "سياسة الاسترجاع", item: "/return-policy" }
        ]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-bg-primary rounded-2xl p-8 md:p-12 shadow-sm border border-text-main/10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            {t("سياسة الاسترجاع والإلغاء", "Return and Cancellation Policy")}
          </h1>
          
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">{t("1. إلغاء الخدمات", "1. Services Cancellation")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "يمكن للعميل طلب إلغاء الخدمات أو تعديلها قبل بدء العمل الفعلي أو توريد المواد. في حال تم الإلغاء بعد بدء التوريد أو العمل، قد يتم خصم التكاليف التي تكبدتها الشركة حتى تاريخ الإلغاء.",
                  "The customer can request to cancel or modify services before the actual work or material supply begins. If cancellation occurs after supply or work has started, costs incurred by the company up to the cancellation date may be deducted."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("2. استرجاع المواد والنباتات", "2. Materials and Plants Return")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "نظراً لطبيعة النباتات ككائنات حية تتأثر بظروف النقل وتغير البيئة، لا يمكن استرجاعها بعد تسليمها وزراعتها في الموقع وقبولها من قبل العميل، إلا في حالة وجود عيب أو مرض ظاهر وقت التسليم وقبل الزراعة.",
                  "Due to the nature of plants as living organisms affected by transportation and environmental changes, they cannot be returned after being delivered, planted, and accepted by the customer on-site, unless there is an apparent defect or disease at the time of delivery and before planting."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("3. المواد الصلبة والأدوات", "3. Hardscaping Materials and Tools")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "بالنسبة للمواد غير الحية (مثل أنظمة الري، الأحجار، الأواني)، يمكن استرجاعها أو استبدالها خلال 7 أيام من تاريخ التسليم، بشرط أن تكون في حالتها الأصلية غير مستخدمة ومغلفة بغلافها الأصلي.",
                  "For non-living materials (e.g., irrigation systems, stones, pots), they can be returned or exchanged within 7 days from the delivery date, provided they are in their original unused condition and packaging."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">{t("4. استرداد المبالغ", "4. Refunds")}</h2>
              <p className="text-text-muted leading-relaxed">
                {t(
                  "تتم معالجة المبالغ المستردة للحالات المستحقة وفقاً لطريقة الدفع الأصلية، وقد تستغرق عملية الاسترداد من 7 إلى 14 يوم عمل حسب البنك المصدر.",
                  "Refunds for eligible cases are processed according to the original payment method, and the refund process may take 7 to 14 business days depending on the issuing bank."
                )}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
