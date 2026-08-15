import React from 'react';
import { Article } from '../../types/knowledge';
import { CheckCircle2, AlertTriangle, Lightbulb, Map, Building2, PhoneCall } from 'lucide-react';
import { CloudinaryImage } from '../../components/cloudinary/CloudinaryImage';

const KeyTakeaway = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-xl my-8">
    <div className="flex items-start gap-4">
      <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-1" />
      <div className="text-text-main text-lg leading-relaxed font-medium">
        {children}
      </div>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="overflow-x-auto my-8 border border-card-border rounded-xl">
    <table className="w-full text-right">
      <thead className="bg-bg-secondary text-text-main">
        <tr>
          <th className="p-4 font-bold border-b border-card-border">نوع النخيل</th>
          <th className="p-4 font-bold border-b border-card-border">الطابع البصري</th>
          <th className="p-4 font-bold border-b border-card-border">تحمل الحرارة</th>
          <th className="p-4 font-bold border-b border-card-border">الاستخدام الأمثل</th>
          <th className="p-4 font-bold border-b border-card-border">مستوى الصيانة</th>
        </tr>
      </thead>
      <tbody className="text-text-muted">
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">واشنطونيا</td>
          <td className="p-4">استوائي، حديث، جذع ممشوق</td>
          <td className="p-4">ممتاز</td>
          <td className="p-4">الطرق، المجمعات السكنية، مداخل المدن</td>
          <td className="p-4">منخفض</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">العربي (البلدي)</td>
          <td className="p-4">تراثي، فخم، جذع عريض</td>
          <td className="p-4">ممتاز جداً</td>
          <td className="p-4">المشاريع التراثية، القصور، الفلل</td>
          <td className="p-4">متوسط إلى مرتفع</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">البرحي / السكري</td>
          <td className="p-4">ريفي، زراعي، كثيف السعف</td>
          <td className="p-4">ممتاز</td>
          <td className="p-4">المزارع الكبيرة، الاستثمار الزراعي</td>
          <td className="p-4">مرتفع</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">المجدول</td>
          <td className="p-4">هيكل ضخم، مظهر ملكي</td>
          <td className="p-4">جيد جداً</td>
          <td className="p-4">القصور الملكية، المشاريع الخاصة</td>
          <td className="p-4">مرتفع</td>
        </tr>
        <tr className="hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">الكناري</td>
          <td className="p-4">تاج عريض، سعف كثيف جداً</td>
          <td className="p-4">جيد (يحتاج رعاية في الصيف)</td>
          <td className="p-4">المنتجعات الفاخرة، الفنادق 5 نجوم</td>
          <td className="p-4">مرتفع</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const bestPalmsForProjectsKsa: Article = {
  id: "best-palms-for-projects-ksa",
  slug: "best-palm-trees-for-projects-saudi-arabia",
  clusterId: "palm-trees",
  titleAr: "أفضل أنواع النخيل للمشاريع في السعودية | دليل الاختيار للطرق والفلل والفنادق",
  titleEn: "Best Palm Trees for Projects in Saudi Arabia | Selection Guide",
  heroImage: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-35.webp",
  authorId: "rayat-najd-editorial",
  publishedAt: "2024-05-20T08:00:00Z",
  readingTimeMinutes: 20,
  seo: {
    title: "أفضل أنواع النخيل للمشاريع في السعودية | دليل الاختيار – رايات نجد",
    description: "دليل عملي لاختيار أفضل أنواع النخيل للمشاريع في السعودية، مع مقارنة بين الواشنطونيا والنخيل العربي والبرحي والمجدول والسكري والكناري واستخداماتها المختلفة.",
    canonicalUrl: "https://www.rayatnajd.com/knowledge/palm-trees/best-palm-trees-for-projects-saudi-arabia"
  },
  geo: {
    schema: "Article",
    keywords: [
      "أفضل أنواع النخيل", "أنواع النخيل في السعودية", "أفضل أنواع النخيل للمشاريع في السعودية",
      "نخيل المشاريع", "نخيل الطرق", "نخيل الفنادق", "نخيل واشنطونيا", 
      "نخيل عربي", "نخيل برحي", "توريد نخيل بالرياض", "توريد النخيل"
    ],
    entityMentions: [
      "Washingtonia", "Phoenix dactylifera", "Canary Island Date Palm",
      "Medjool", "Sukkari", "Barhi", "Rayat Najd", "Green Riyadh"
    ],
    faqReady: true,
    knowledgeGraphReady: true
  },
  tags: [
    { id: "palm-types", nameAr: "أنواع النخيل", nameEn: "Palm Types" },
    { id: "landscaping-projects", nameAr: "مشاريع التشجير", nameEn: "Landscaping Projects" },
    { id: "riyadh", nameAr: "الرياض", nameEn: "Riyadh" }
  ],
  faqs: [
    {
      questionAr: "ما أفضل نخيل يتحمل حرارة الرياض؟",
      answerAr: "النخيل العربي بجميع أصنافه (البلدي، السكري، البرحي) بالإضافة إلى نخيل الواشنطونيا، فهي الأكثر قدرة على تحمل درجات الحرارة القاسية والجفاف في منطقة الرياض.",
      questionEn: "What is the best palm for Riyadh's heat?",
      answerEn: "Arabic date palms and Washingtonia palms are the most resilient to Riyadh's extreme heat and drought."
    },
    {
      questionAr: "ما أفضل نخيل للطرق؟",
      answerAr: "نخيل الواشنطونيا هو الخيار الأمثل للطرق والشوارع؛ لسرعة نموه، انخفاض تكلفة صيانته، وعدم تساقط ثمار قد تشوه أو تلوث الأرصفة.",
      questionEn: "What is the best palm for roads?",
      answerEn: "Washingtonia palms are ideal for roads due to fast growth, low maintenance, and no fruit drop."
    },
    {
      questionAr: "ما الفرق بين الواشنطونيا والنخيل العربي؟",
      answerAr: "الواشنطونيا نخيل زينة سريع النمو لا يثمر ويتميز بجذع رفيع، بينما النخيل العربي يثمر تمراً ويتميز بجذع عريض وطابع تراثي ويحتاج لعناية موسمية كالتلقيح.",
      questionEn: "What is the difference between Washingtonia and Arabic palm?",
      answerEn: "Washingtonia is a fast-growing ornamental palm without dates. Arabic palm produces dates, has a thicker trunk, and requires seasonal care."
    },
    {
      questionAr: "ما أفضل نخيل للفنادق والمنتجعات؟",
      answerAr: "يعتبر النخيل الكناري (Canary Palm) ونخيل الواشنطونيا من أفضل الخيارات للفنادق لإضفائها طابعاً استوائياً وفخماً على المداخل والمسابح.",
      questionEn: "What is the best palm for hotels and resorts?",
      answerEn: "Canary palms and Washingtonia are top choices for hotels, providing a tropical and luxurious feel."
    },
    {
      questionAr: "ما أفضل نخيل للمشاريع الحكومية؟",
      answerAr: "حسب كراسة الشروط، غالباً ما يُعتمد نخيل الواشنطونيا في تجميل الشوارع، والنخيل العربي في تجميل الميادين والمباني السيادية لتعزيز الهوية الوطنية.",
      questionEn: "What is the best palm for government projects?",
      answerEn: "Washingtonia is common for streetscaping, while Arabic palms are used for plazas and sovereign buildings to reflect national identity."
    },
    {
      questionAr: "هل يمكن نقل النخيل الكبير؟",
      answerAr: "نعم، يتم نقل النخيل الكبير بواسطة رافعات وشاحنات مخصصة مع الحفاظ على الصلية الترابية لحماية الجذور، وهو تخصص دقيق نقوم به في رايات نجد.",
      questionEn: "Can large palms be transported?",
      answerEn: "Yes, using specialized cranes and trucks while preserving the root ball, a precise service offered by Rayat Najd."
    },
    {
      questionAr: "كيف يتم اختيار ارتفاع النخلة؟",
      answerAr: "يتم تحديد الارتفاع بناءً على النطاق العمراني للمشروع؛ فالمباني العالية تحتاج نخيلاً بارتفاعات شاهقة، بينما الفلل والمشاريع السكنية تناسبها الارتفاعات المتوسطة (3-6 أمتار).",
      questionEn: "How to choose palm height?",
      answerEn: "Height depends on the architectural scale; tall buildings need tall palms, while villas suit medium heights (3-6 meters)."
    },
    {
      questionAr: "ما أفضل نظام ري للنخيل؟",
      answerAr: "الري بالتنقيط (Drip Irrigation) المدعوم بأنظمة تحكم ذكية لضمان كمية مياه دقيقة وتقليل الهدر.",
      questionEn: "What is the best irrigation system for palms?",
      answerEn: "Drip irrigation supported by smart controllers to ensure precise watering and minimize waste."
    },
    {
      questionAr: "كم يحتاج النخيل من الصيانة؟",
      answerAr: "نخيل الزينة مثل الواشنطونيا يحتاج تقليماً دورياً فقط، بينما النخيل المثمر يحتاج للتكريب، التلقيح، جني الثمار، والمكافحة الحشرية الدورية.",
      questionEn: "How much maintenance do palms need?",
      answerEn: "Ornamental palms need periodic pruning, while fruiting palms need pollination, harvesting, and pest control."
    },
    {
      questionAr: "هل توفر رايات نجد التوريد والزراعة والنقل؟",
      answerAr: "نعم، نقدم خدمة متكاملة تشمل التوريد من مزارعنا، النقل الآمن، والزراعة الهندسية وتأسيس شبكات الري بضمانات شاملة.",
      questionEn: "Does Rayat Najd provide supply, planting, and transport?",
      answerEn: "Yes, a turnkey service including supply from our farms, safe transport, and engineered planting with irrigation."
    },
    {
      questionAr: "هل يمكن توريد كميات كبيرة للمشاريع؟",
      answerAr: "بالتأكيد، نمتلك القدرة الاستيعابية لتلبية توريد آلاف النخلات للمشاريع الكبرى والتطوير الحضري بمواصفات موحدة.",
      questionEn: "Can you supply large quantities for projects?",
      answerEn: "Absolutely, we have the capacity to supply thousands of uniform palms for mega projects."
    },
    {
      questionAr: "ما هو النخيل السكري؟",
      answerAr: "من أشهر أنواع النخيل في منطقة القصيم والرياض، يشتهر بإنتاج تمر السكري المتميز، ويزرع غالباً في المزارع والقصور لغرض الإنتاج الفاخر.",
      questionEn: "What is the Sukkari palm?",
      answerEn: "A famous palm in Qassim and Riyadh, producing premium Sukkari dates, planted mainly in farms and palaces."
    },
    {
      questionAr: "لماذا يفضل المطورون العقاريون الواشنطونيا؟",
      answerAr: "لتكلفتها الاقتصادية، وسرعة نموها التي تعطي انطباعاً باكتمال المشروع، ومظهرها الجمالي الذي يناسب التصاميم المعمارية الحديثة.",
      questionEn: "Why do developers prefer Washingtonia?",
      answerEn: "Due to cost-efficiency, fast growth giving a finished look, and aesthetic appeal suiting modern architecture."
    },
    {
      questionAr: "ما الفرق بين السكري والبرحي في المشاريع؟",
      answerAr: "كلاهما نخيل مثمر، ولكن البرحي يتميز بإنتاج رطب يستهلك طازجاً وله تاج كثيف، بينما السكري يركز على إنتاج التمور الفاخرة، وكلاهما يحتاج رعاية زراعية عالية.",
      questionEn: "Difference between Sukkari and Barhi in projects?",
      answerEn: "Both are fruiting; Barhi is known for fresh rutab and dense crown, Sukkari for premium dates. Both need high maintenance."
    },
    {
      questionAr: "هل يمكن زراعة النخيل في أي تربة؟",
      answerAr: "يتحمل النخيل ظروفاً قاسية، ولكن لضمان النمو يجب حفر جور مناسبة وإحلال التربة بتربة زراعية محسنة جيدة الصرف لتفادي تعفن الجذور.",
      questionEn: "Can palms be planted in any soil?",
      answerEn: "Palms are hardy, but require proper planting holes with amended, well-draining soil to prevent root rot."
    }
  ],
  relatedArticles: [
    { title: "توريد نخيل واشنطونيا بالرياض", slug: "washingtonia-supply-riyadh", type: "slot" },
    { title: "دليل زراعة النخيل في السعودية", slug: "palm-planting-guide-ksa", type: "slot" },
    { title: "كيفية نقل النخيل الكبير", slug: "how-to-transport-large-palms", type: "slot" },
    { title: "شبكات الري المناسبة للنخيل", slug: "palm-irrigation-networks", type: "slot" },
    { title: "صيانة النخيل بعد الزراعة", slug: "palm-maintenance-after-planting", type: "slot" },
    { title: "توريد النخيل للمشاريع الحكومية", slug: "palm-supply-government-projects", type: "slot" }
  ],
  sections: [
    {
      id: "intro",
      titleAr: "1. مقدمة",
      titleEn: "Introduction",
      contentAr: (
        <>
          <p>
            تعد أشجار النخيل بمثابة العمود الفقري لمشاريع التشجير وتطوير المشهد الحضري في المملكة العربية السعودية. بفضل قدرتها الاستثنائية على تحمل المناخ القاسي وتوفيرها للظل والجمال المعماري، أصبح <strong>توريد النخيل في السعودية</strong> متطلباً أساسياً في كافة المشاريع التنموية.
          </p>
          <p>
            لكن، مع تنوع فئات المشاريع—من الطرق السريعة إلى الفنادق الفاخرة والقصور الخاصة—يبرز السؤال الأهم: <em>ما هي أفضل أنواع النخيل للمشاريع في السعودية؟</em> الإجابة ليست واحدة، فما يناسب رصيف شارع تجاري قد لا يكون الخيار الأمثل لمدخل منتجع سياحي فاخر.
          </p>
          <KeyTakeaway>
            في <strong>رايات نجد للتشجير والاستدامة البيئية</strong>، نعمل كشريك هندسي منذ عام 2010 لتقديم استشارات التوريد والاختيار لمختلف القطاعات. في هذا الدليل الشامل، نضع بين يديك مقارنة دقيقة وتوجيهات عملية لاختيار نوع النخلة الأنسب لمشروعك، لضمان استدامة الاستثمار وتقليل تكاليف الصيانة المستقبلية.
          </KeyTakeaway>
        </>
      )
    },
    {
      id: "why-selection-matters",
      titleAr: "2. لماذا يختلف اختيار النخيل من مشروع إلى آخر؟",
      titleEn: "Why Selection Varies by Project",
      contentAr: (
        <>
          <p>
            اختيار نوع النخلة ليس مجرد قرار جمالي، بل هو التزام طويل الأمد يترتب عليه تكاليف مالية مستمرة إذا تم الاختيار بشكل خاطئ. يختلف الاختيار بناءً على:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 text-text-muted">
            <li><strong>الهوية البصرية (Visual Identity):</strong> المشاريع التراثية والتاريخية كبوابة الدرعية تتطلب نخيلاً عربياً أصيلاً لتعزيز الهوية، بينما المجمعات السكنية الحديثة (Compounds) تميل لنخيل الواشنطونيا الممشوق.</li>
            <li><strong>الميزانية التشغيلية (OpEx):</strong> النخيل المثمر يتطلب ميزانية سنوية للتكريب، التلقيح، جني الثمار، ومكافحة السوسة، بينما نخيل الزينة يتطلب تقليماً بسيطاً للجريد الجاف.</li>
            <li><strong>تأثير الموقع:</strong> تساقط ثمار النخيل العربي على الأرصفة العامة ومواقف السيارات يسبب تشوهاً بصرياً ويجذب الحشرات، لذا يُستبعد غالباً من الشوارع التجارية لصالح الواشنطونيا.</li>
          </ul>
        </>
      )
    },
    {
      id: "factors",
      titleAr: "3. العوامل التي تحدد نوع النخيل المناسب",
      titleEn: "Factors Determining Palm Type",
      contentAr: (
        <>
          <p>قبل التعاقد مع مورد نخيل، يجب على المالك أو الاستشاري دراسة العوامل التالية لضمان نجاح الزراعة:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 border border-card-border rounded-xl bg-bg-secondary">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <span className="text-primary text-xl">☀️</span> المناخ والحرارة
              </h4>
              <p className="text-sm text-text-muted">جميع النخيل يتحمل الحرارة، لكن بعض الأنواع مثل الكناري قد تتأثر بحرارة الصيف المباشرة والجفاف الشديد وتحتاج لترطيب وعناية خاصة في منطقة الرياض، عكس النخيل العربي والواشنطونيا.</p>
            </div>
            <div className="p-5 border border-card-border rounded-xl bg-bg-secondary">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <span className="text-primary text-xl">🌱</span> طبيعة التربة
              </h4>
              <p className="text-sm text-text-muted">النخيل يحتاج لتربة جيدة الصرف لتفادي تعفن الجذور. يجب تقييم ملوحة التربة والمياه في الموقع قبل الزراعة لاختيار الصنف الأكثر تحملاً للملوحة.</p>
            </div>
            <div className="p-5 border border-card-border rounded-xl bg-bg-secondary">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <span className="text-primary text-xl">💧</span> توفر المياه وشبكات الري
              </h4>
              <p className="text-sm text-text-muted">يجب التأكد من وجود مصدر مياه مستدام. النخيل الكبير المنقول يحتاج إلى غمر مكثف في الشهر الأول، ثم ينتقل لنظام الري بالتنقيط.</p>
            </div>
            <div className="p-5 border border-card-border rounded-xl bg-bg-secondary">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <span className="text-primary text-xl">📏</span> المساحة والارتفاع المطلوب
              </h4>
              <p className="text-sm text-text-muted">التناسب المعماري ضروري. المداخل ذات الأسقف العالية تحتاج نخيلاً بأطوال تبدأ من 5 أمتار للتبتير، بينما الفلل والمساحات الضيقة تحتاج مقاسات أصغر لتجنب تشابك السعف مع المباني.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "comparison",
      titleAr: "4. مقارنة أهم أنواع النخيل المستخدمة في السعودية",
      titleEn: "Comparison of Key Palm Types",
      contentAr: (
        <>
          <p>يقدم الجدول التالي مقارنة سريعة وشاملة لأكثر الأنواع طلباً في قطاع المشاريع:</p>
          <ComparisonTable />
        </>
      )
    },
    {
      id: "details-washingtonia",
      titleAr: "5. نخيل واشنطونيا (Washingtonia)",
      titleEn: "Washingtonia Palms",
      contentAr: (
        <>
          <p>
            نخيل الواشنطونيا، أو "نخلة المروحة"، هو ملك مشاريع اللاندسكيب الحديثة في السعودية. يتميز بسرعة نموه الاستثنائية، جذعه الرفيع الممشوق، وسعفه الذي يشبه المروحة المفتوحة.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-text-muted">
            <li><strong>المميزات:</strong> تكلفة توريد اقتصادية مقارنة بالنخيل المثمر، لا يطرح ثماراً (مما يحافظ على نظافة الموقع)، ويضفي طابعاً استوائياً حديثاً (Tropical/Modern).</li>
            <li><strong>التحديات:</strong> سعفه الجاف يتدلى للأسفل مكوناً "تنورة" قد تشكل خطراً في حال نشوب حريق، لذا يجب تقليمه باستمرار في الأماكن العامة.</li>
            <li><strong>الاستخدام المثالي:</strong> تشجير الطرق السريعة، مداخل المجمعات التجارية (المولات)، والكومباوندات السكنية.</li>
          </ul>
        </>
      )
    },
    {
      id: "details-arabic",
      titleAr: "6. النخيل العربي (نخيل التمر البلدي)",
      titleEn: "Arabic Date Palms",
      contentAr: (
        <>
          <p>
            نخيل التمر (Phoenix dactylifera) هو رمز المملكة المتجذر في هويتها. يتميز بجذعه الغليظ والخشن، وسعفه الريشي الكثيف، وقدرته المهولة على تحمل الجفاف.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-text-muted">
            <li><strong>المميزات:</strong> هوية بصرية قوية ورصينة، إنتاج التمور، مقاومة لا مثيل لها للحرارة والجفاف، وعمر افتراضي طويل جداً.</li>
            <li><strong>التحديات:</strong> تكلفة مبدئية أعلى في التوريد والنقل لوزنه الثقيل، وحاجة ماسة لبرنامج صيانة زراعية سنوي (تكريب، تلقيح، قطاف).</li>
            <li><strong>الاستخدام المثالي:</strong> الدوائر والميادين الحكومية، القصور الملكية، والمشاريع التراثية والتاريخية.</li>
          </ul>
        </>
      )
    },
    {
      id: "details-barhi",
      titleAr: "7. نخيل البرحي",
      titleEn: "Barhi Palms",
      contentAr: (
        <>
          <p>
            نخيل البرحي هو صنف من أصناف النخيل المثمر، يُعرف بإنتاجه الغزير للرطب الأصفر الحلو الذي يؤكل في مرحلة البسر (الخلال). 
          </p>
          <p className="mt-4 text-text-muted">
            في قطاع المشاريع، يُطلب البرحي خصيصاً للمزارع الكبيرة، الاستراحات الخاصة، وقصور الشخصيات الهامة، حيث تكون الغاية الأساسية هي الحصول على إنتاج طازج ومميز خلال فصل الصيف، بالإضافة إلى تاجه الكثيف الذي يوفر ظلاً ممتازاً.
          </p>
        </>
      )
    },
    {
      id: "details-sukkari",
      titleAr: "8. نخيل السكري",
      titleEn: "Sukkari Palms",
      contentAr: (
        <>
          <p>
            نخيل السكري هو الصنف الأكثر شعبية في منطقة القصيم وامتداداً للرياض. ينتج تمر السكري ذو اللون الذهبي والطعم شديد الحلاوة.
          </p>
          <p className="mt-4 text-text-muted">
            مثل البرحي، يُورّد نخيل السكري كاستثمار إنتاجي في المشاريع الزراعية الكبرى، ومشاريع الأمن الغذائي، وكذلك لمزارع الفلل الفاخرة التي يفضل ملاكها التمتع بإنتاجهم الخاص من التمور.
          </p>
        </>
      )
    },
    {
      id: "details-medjool",
      titleAr: "9. نخيل المجدول",
      titleEn: "Medjool Palms",
      contentAr: (
        <>
          <p>
            تُعرف نخلة المجدول بـ "ملكة التمور" لضخامة ثمرتها. بصرياً، تعتبر نخلة المجدول ضخمة الجذع بشكل ملفت، وذات تاج مهيب.
          </p>
          <p className="mt-4 text-text-muted">
            نظراً لغلاء سعرها وندرتها النسبية مقارنة بالأصناف الأخرى، يُقتصر توريد النخيل المجدول عادة على مشاريع الـ VIP، والمزارع النموذجية، ومداخل القصور الفخمة حيث تبرز الهيبة والتميز.
          </p>
        </>
      )
    },
    {
      id: "details-canary",
      titleAr: "10. النخيل الكناري (Canary Island Date Palm)",
      titleEn: "Canary Island Date Palm",
      contentAr: (
        <>
          <p>
            النخيل الكناري هو نخيل زينة يتميز بجذع عريض يشبه الأناناس عند تكريبه بشكل فني، وتاج كثيف جداً ومقوس من السعف الريشي الطويل.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-text-muted">
            <li><strong>المميزات:</strong> فخامة بصرية لا تضاهى، يمنح شعوراً بالرفاهية المطلقة (Luxury Resort Vibe).</li>
            <li><strong>التحديات:</strong> حساس للحرارة المباشرة والجفاف الشديد في نجد إذا لم يتم ريه بانتظام، وبطيء النمو جداً، مما يرفع من تكلفة توريد المقاسات الكبيرة منه بشكل كبير.</li>
            <li><strong>الاستخدام المثالي:</strong> المنتجعات السياحية الفاخرة، الفنادق ذات الـ 5 نجوم، وحول المسابح والنوافير الرئيسية.</li>
          </ul>
        </>
      )
    },
    {
      id: "decision-guide",
      titleAr: "11. اختر النخيل حسب مشروعك (دليل القرار)",
      titleEn: "Decision Guide by Project",
      contentAr: (
        <>
          <p>لتسهيل عملية اتخاذ القرار، قسمنا التوصيات بحسب طبيعة المشروع:</p>
          
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-card-background border border-card-border rounded-xl">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2 mb-3">
                <Map className="w-5 h-5" /> إذا كان المشروع طريقاً أو ممشى (Streets & Boulevards)
              </h3>
              <p className="text-text-muted mb-3">
                <strong>الخيار الأمثل:</strong> نخيل الواشنطونيا.<br/>
                <strong>السبب:</strong> لا يتساقط منه ثمار تلوث مسارات المشي أو السيارات، ينمو بسرعة لتوفير ظل نسبي ومظهر حضري، وتكلفته ممتازة للكميات الكبيرة (مشاريع الكيلومترات).
              </p>
            </div>

            <div className="p-6 bg-card-background border border-card-border rounded-xl">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5" /> إذا كان المشروع فندقاً أو منتجعاً سياحياً (Hotels & Resorts)
              </h3>
              <p className="text-text-muted mb-3">
                <strong>الخيار الأمثل:</strong> النخيل الكناري (للمناطق المائية والمداخل) + الواشنطونيا (للمحيط الخارجي).<br/>
                <strong>السبب:</strong> الكناري يضفي الفخامة والطابع الاستوائي المطلوب في وجهات الضيافة.
              </p>
            </div>

            <div className="p-6 bg-card-background border border-card-border rounded-xl">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5" /> إذا كان المشروع مجمعاً سكنياً (Compounds)
              </h3>
              <p className="text-text-muted mb-3">
                <strong>الخيار الأمثل:</strong> الواشنطونيا كخيار أساسي، وتطعيم بالنخيل العربي أو السكري في المناطق المركزية للمجمع.<br/>
                <strong>السبب:</strong> الواشنطونيا تعطي انطباعاً بالارتفاع وتناسب الواجهات الزجاجية، بينما النخيل المثمر في منطقة النادي يوفر لمسة أليفة للسكان.
              </p>
            </div>

            <div className="p-6 bg-card-background border border-card-border rounded-xl">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5" /> إذا كان المشروع جهة حكومية أو مبنى سيادي (Government Projects)
              </h3>
              <p className="text-text-muted mb-3">
                <strong>الخيار الأمثل:</strong> النخيل العربي (نخيل التمر).<br/>
                <strong>السبب:</strong> كراسات الشروط والمواصفات (MOMRAH) تؤكد غالباً على النخيل المحلي لتعزيز الهوية الوطنية والتزاماً بمبادرات الاستدامة بالاعتماد على النباتات المتكيفة تماماً.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "sizing",
      titleAr: "12-13. كيف تحدد المقاس والارتفاع المناسب للنخلة؟",
      titleEn: "Choosing Size and Height",
      contentAr: (
        <>
          <p>
            في قطاع المقاولات والزراعة، لا يقاس النخيل بالارتفاع الكلي (لأن طول السعف متغير)، بل يُقاس بـ <strong>(طول التبتير)</strong>، وهو طول الجذع الخشبي الصافي من سطح الأرض وحتى بداية خروج السعف الأخضر.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-card-border p-6 rounded-xl">
              <h4 className="font-bold text-text-main mb-3">النخيل الصغير والمتوسط (1.5 إلى 3 متر تبتير)</h4>
              <ul className="list-disc list-inside text-sm text-text-muted space-y-2">
                <li>نسبة نجاح الزراعة أعلى جداً وأسهل في التأقلم.</li>
                <li>تكلفة النقل والتوريد منخفضة لعدم الحاجة لرافعات ضخمة.</li>
                <li>مناسب للفلل السكنية، الحدائق الصغيرة، والمساحات التي لا تتطلب تأثيراً بصرياً شاهقاً فورياً.</li>
              </ul>
            </div>
            <div className="border border-primary/30 bg-primary/5 p-6 rounded-xl">
              <h4 className="font-bold text-primary mb-3">النخيل الكبير (4 إلى 8 متر تبتير)</h4>
              <ul className="list-disc list-inside text-sm text-text-muted space-y-2">
                <li>يوفر التأثير البصري الفوري (Instant Impact) للمشروع المكتمل.</li>
                <li>عملية النقل خطرة ومعقدة وتحتاج إلى رافعات (كرينات) متخصصة وتأمين الصلية بعناية.</li>
                <li>مناسب للطرق السريعة، الواجهات الضخمة، المداخل الرئيسية للمولات والمستشفيات.</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: "maintenance",
      titleAr: "14. متطلبات الزراعة، الري، والصيانة",
      titleEn: "Planting, Irrigation, and Maintenance",
      contentAr: (
        <>
          <p>نجاح المشروع لا ينتهي بتوريد أفضل أنواع النخيل، بل يعتمد على ما يحدث بعد إنزال النخلة في الموقع:</p>
          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <strong>الزراعة الهندسية:</strong> يجب حفر جورة تتناسب مع حجم الصلية، وإحلال التربة بأسمدة عضوية ومبيدات فطرية، وضبط الاستقامة العمودية 100%.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <strong>شبكات الري:</strong> النخيل الكبير يحتاج إلى الغمر الكثيف لطرد الجيوب الهوائية في الأسابيع الأولى، ثم يتم ربطه بنظام ري بالتنقيط يبرمج عبر متحكمات آلية لضمان عدم التعطيش.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <strong>برنامج الصيانة:</strong> النخيل المثمر سيحتاج إلى عقد صيانة سنوي يشمل التكريب والوقاية من حشرة سوسة النخيل الحمراء الفتاكة.
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "why-rayat-najd",
      titleAr: "16. لماذا رايات نجد للتشجير والاستدامة البيئية؟",
      titleEn: "Why Rayat Najd?",
      contentAr: (
        <>
          <p>
            تأسست <strong>رايات نجد</strong> عام 2010 لتكون شريكاً يعتمد عليه في توريد النخيل للمشاريع الكبرى. بفضل امتلاكنا لمشاتل ومزارع تتجاوز مساحتها 50,000 متر مربع في الرياض والخرج، نحن قادرون على:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 text-text-muted">
            <li><strong>التوريد الموحد:</strong> توريد آلاف النخلات المتطابقة في الارتفاع والمواصفات (Uniformity).</li>
            <li><strong>الخدمة المتكاملة (Turnkey):</strong> من اقتلاع النخلة في المزرعة، والنقل الآمن بأسطولنا الخاص، وصولاً للزراعة وتأسيس الري.</li>
            <li><strong>الضمانات القانونية:</strong> عقود صيانة وضمان استبدال تحمي استثمارك وتقي المشروع من مخاطر الفشل الزراعي.</li>
          </ul>
        </>
      )
    },
    {
      id: "conclusion",
      titleAr: "17. الخلاصة",
      titleEn: "Conclusion",
      contentAr: (
        <>
          <p>
            لا يوجد صنف نخيل واحد يصلح لكل زمان ومكان؛ فالواشنطونيا مثالية للطرق الحديثة، والنخيل العربي يعكس الهوية الأصيلة في المقار الحكومية، والكناري يضفي الفخامة على الفنادق. تحديد الهدف من التشجير هو الخطوة الأولى.
          </p>
          <p className="mt-4 text-text-main font-medium">
            تذكر دائماً أن جودة التوريد واحترافية النقل والزراعة لا تقل أهمية عن نوع النخلة نفسها. اختيارك لمورد معتمد كشركة رايات نجد هو الضمان الأكيد لنجاح وازدهار مشروعك.
          </p>
        </>
      )
    },
    {
      id: "cta",
      titleAr: "18. اطلب عرض سعر لمشروعك",
      titleEn: "Request a Quote",
      contentAr: (
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-white mt-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">هل تبحث عن المورد الأنسب لمشروعك؟</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            فريق المهندسين الزراعيين في رايات نجد جاهزون لتقديم الاستشارة، وتحديد الأنواع والمقاسات المناسبة لمخططات مشروعك، وتقديم عرض سعر تنافسي لتوريد وزراعة النخيل.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/966557555716" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm">
              <PhoneCall className="w-5 h-5" />
              تحدث مع المختص عبر واتساب
            </a>
            <a href="tel:0557555716" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
              اتصل بنا: 0557555716
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">
            رايات نجد للتشجير والاستدامة البيئية | نزرع المستقبل... ونصنع الاستدامة
          </p>
        </div>
      )
    }
  ]
};
