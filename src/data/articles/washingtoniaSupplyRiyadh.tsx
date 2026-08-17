import React from 'react';
import { Article } from '../../types/knowledge';
import { CheckCircle2, AlertTriangle, Lightbulb, Map, Building2, PhoneCall, TrendingUp } from 'lucide-react';
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

const SpecsTable = () => (
  <div className="overflow-x-auto my-8 border border-card-border rounded-xl">
    <table className="w-full text-right">
      <thead className="bg-bg-secondary text-text-main">
        <tr>
          <th className="p-4 font-bold border-b border-card-border">الفئة (حسب طول التبتير)</th>
          <th className="p-4 font-bold border-b border-card-border">التأثير البصري</th>
          <th className="p-4 font-bold border-b border-card-border">طريقة النقل المطلوبة</th>
          <th className="p-4 font-bold border-b border-card-border">الاستخدام الشائع في الرياض</th>
        </tr>
      </thead>
      <tbody className="text-text-muted">
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">صغير (1.5 - 2 متر)</td>
          <td className="p-4">تأسيسي، يحتاج وقت للنمو</td>
          <td className="p-4">دينا، رافعة يدوية أو بوبكات</td>
          <td className="p-4">فلل خاصة، حدائق منزلية</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">متوسط (3 - 4 متر)</td>
          <td className="p-4">مظهر مكتمل، متناسق مع أسوار الفلل</td>
          <td className="p-4">شاحنة متوسطة، كرين 5 طن</td>
          <td className="p-4">مجمعات سكنية، محيط الفنادق</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">كبير (5 - 6 متر)</td>
          <td className="p-4">شاهق، يلفت الانتباه من مسافة</td>
          <td className="p-4">تريلا مسطحة، كرين 10 طن</td>
          <td className="p-4">مداخل المولات، الشوارع التجارية</td>
        </tr>
        <tr className="hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">عملاق (7+ متر)</td>
          <td className="p-4">تأثير معماري فوري (Instant Impact)</td>
          <td className="p-4">مقطورات خاصة، كرينات ضخمة</td>
          <td className="p-4">مشاريع الأمانة، الطرق السريعة</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const washingtoniaSupplyRiyadh: Article = {
  id: "washingtonia-supply-riyadh",
  slug: "washingtonia-palm-supply-riyadh",
  clusterId: "palm-trees",
  titleAr: "توريد نخيل واشنطونيا بالرياض | أسعار، مقاسات، وضمان الزراعة",
  titleEn: "Washingtonia Palm Supply in Riyadh | Prices & Sizes",
  heroImage: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-50.webp",
  authorId: "rayat-najd-editorial",
  publishedAt: "2024-05-25T08:00:00Z",
  readingTimeMinutes: 18,
  seo: {
    title: "توريد نخيل واشنطونيا بالرياض | أسعار ومقاسات للمشاريع – رايات نجد",
    description: "شركة توريد نخيل واشنطونيا بالرياض. أسعار تنافسية، جميع المقاسات (تبتير)، مع النقل والزراعة والضمان للمشاريع الحكومية والتجارية والفلل.",
    canonicalUrl: "https://www.rayatnajd.com/knowledge/palm-trees/washingtonia-palm-supply-riyadh"
  },
  geo: {
    schema: "Article",
    keywords: [
      "توريد نخيل واشنطونيا بالرياض", "نخيل واشنطونيا", "نخل واشنطونيا", 
      "مورد نخيل بالرياض", "اسعار نخيل واشنطونيا", "زراعة واشنطونيا",
      "نخيل الزينة", "نخيل شوارع", "شركة تشجير بالرياض"
    ],
    entityMentions: [
      "Washingtonia robusta", "Riyadh", "Saudi Vision 2030", "Rayat Najd"
    ],
    faqReady: true,
    knowledgeGraphReady: true
  },
  tags: [
    { id: "washingtonia", nameAr: "واشنطونيا", nameEn: "Washingtonia" },
    { id: "riyadh-projects", nameAr: "مشاريع الرياض", nameEn: "Riyadh Projects" },
    { id: "palm-supply", nameAr: "توريد النخيل", nameEn: "Palm Supply" }
  ],
  faqs: [
    {
      questionAr: "ما هو نخل واشنطونيا؟",
      answerAr: "هو نوع من نخيل الزينة (لا يثمر التمر) يتميز بسرعة نموه الكبيرة وجذعه الرفيع الممشوق وسعفه المروحي، ويستخدم بكثرة في تجميل الشوارع والمجمعات السكنية.",
      questionEn: "What is a Washingtonia palm?",
      answerEn: "An ornamental palm (non-fruiting) known for fast growth, a slender trunk, and fan-shaped leaves, widely used in streets and residential compounds."
    },
    {
      questionAr: "كم سعر نخيل واشنطونيا في الرياض؟",
      answerAr: "يختلف السعر بناءً على طول التبتير (طول الجذع)، حيث يبدأ تقريباً من 300 ريال للأطوال الصغيرة ويصل إلى أكثر من 2000 ريال للأطوال الكبيرة، السعر النهائي يعتمد على الكمية، وهل يشمل النقل والزراعة.",
      questionEn: "How much does Washingtonia cost in Riyadh?",
      answerEn: "Price varies by trunk height (from ~300 SAR for small to 2000+ SAR for large ones). Final price depends on volume and if transport/planting is included."
    },
    {
      questionAr: "كيف يتم قياس طول الواشنطونيا؟",
      answerAr: "يقاس بـ (التبتير)، وهو المسافة من سطح الأرض حتى بداية خروج السعف الأخضر، ولا يتم احتساب طول السعف ضمن القياس.",
      questionEn: "How is Washingtonia height measured?",
      answerEn: "Measured by the clear trunk length, from ground level to the base of the green fronds, excluding the leaves themselves."
    },
    {
      questionAr: "هل نخل الواشنطونيا يثمر؟",
      answerAr: "لا، نخيل الواشنطونيا هو نخيل زينة فقط، ولا ينتج تموراً قابلة للأكل، وهذا ما يجعله مفضلاً في الشوارع لعدم تساقط ثمار تلوث الأرصفة.",
      questionEn: "Does Washingtonia bear fruit?",
      answerEn: "No, it is strictly ornamental and does not produce edible dates, making it ideal for clean streets."
    },
    {
      questionAr: "هل يتحمل واشنطونيا حرارة الرياض؟",
      answerAr: "نعم، يتميز الواشنطونيا بتحمل عالٍ جداً للحرارة والجفاف وأشعة الشمس المباشرة، مما يجعله مثالياً لمناخ الرياض.",
      questionEn: "Does Washingtonia tolerate Riyadh's heat?",
      answerEn: "Yes, it is highly tolerant to heat, drought, and direct sun, perfect for Riyadh's climate."
    },
    {
      questionAr: "ما هو أفضل وقت لزراعة واشنطونيا بالرياض؟",
      answerAr: "يفضل زراعته في فصلي الربيع أو الخريف لتجنب صدمة الحرارة القصوى أو البرد القارس، ومع ذلك يمكن زراعته في أي وقت إذا تم نقله بـ (صلية) محكمة وتوفر ري مكثف.",
      questionEn: "Best time to plant Washingtonia in Riyadh?",
      answerEn: "Spring or autumn is best, though it can be planted anytime if transplanted with a secure root ball and intensive watering."
    },
    {
      questionAr: "ما هي الصلية (Root ball) في النخيل؟",
      answerAr: "هي الكتلة الترابية المحيطة بجذور النخلة والتي يتم قلعها معها من المزرعة للحفاظ على الجذور من الجفاف والتقطع أثناء النقل.",
      questionEn: "What is a root ball?",
      answerEn: "The mass of soil surrounding the roots, excavated and transported with the palm to protect roots from drying out."
    },
    {
      questionAr: "هل توفر رايات نجد ضماناً على زراعة النخيل؟",
      answerAr: "نعم، نقدم عقود توريد وزراعة تشمل فترة ضمان استبدال في حال فشل النخلة في التأقلم أو موتها خلال فترة الضمان المحددة.",
      questionEn: "Does Rayat Najd offer a planting warranty?",
      answerEn: "Yes, our supply and planting contracts include a replacement warranty if the palm fails to establish."
    },
    {
      questionAr: "كيف يتم الري بعد زراعة النخيل المنقول؟",
      answerAr: "يجب (الغمر) الكثيف واليومي للحوض خلال الأسابيع الأربعة الأولى لطرد الهواء وتثبيت التربة حول الجذور، ثم يتم تقليل الري تدريجياً وربطه بشبكة التنقيط.",
      questionEn: "How to irrigate newly transplanted palms?",
      answerEn: "Heavy, daily flooding for the first four weeks to remove air pockets, followed by gradual reduction and drip irrigation."
    },
    {
      questionAr: "هل الجذور تسبب ضرراً لأسوار الفلل؟",
      answerAr: "جذور الواشنطونيا ليفية وتمتد للأسفل بحثاً عن الماء، ولا تعتبر تدميرية كجذور الأشجار الخشبية الكبيرة (مثل الكونوكاربس)، لكن يُفضل زراعتها بمسافة آمنة (1.5 متر) عن القواعد.",
      questionEn: "Do Washingtonia roots damage villa walls?",
      answerEn: "The roots are fibrous and grow downwards, not destructive like large woody trees, but a safe distance (1.5m) from foundations is recommended."
    }
  ],
  relatedArticles: [
    { title: "أفضل أنواع النخيل للمشاريع في السعودية", slug: "best-palm-trees-for-projects-saudi-arabia", type: "published" },
    { title: "كيفية نقل النخيل الكبير بأمان", slug: "how-to-transport-large-palms", type: "slot" },
    { title: "تصميم شبكات الري للنخيل", slug: "palm-irrigation-networks", type: "slot" },
    { title: "صيانة الواشنطونيا وتقليمها", slug: "washingtonia-maintenance", type: "slot" }
  ],
  sections: [
    {
      id: "intro",
      titleAr: "1. مقدمة",
      titleEn: "Introduction",
      contentAr: (
        <>
          <p>
            تغير وجه مدينة الرياض بشكل متسارع، ومع كل مشروع تنموي، من الطرق السريعة إلى المجمعات السكنية الراقية، يقف <strong>نخيل الواشنطونيا (Washingtonia)</strong> كعنصر بصري ثابت لا غنى عنه.
          </p>
          <p>
            هذا النخيل ذو الطابع المعماري الممشوق، والمعروف بسرعة نموه وتحمله الأسطوري لحرارة نجد، أصبح الخيار الأول للمهندسين والمطورين. فإذا كنت تبحث عن <em>توريد نخيل واشنطونيا بالرياض</em> لمشروعك، فإن هذا الدليل سيوضح لك كل ما تحتاج لمعرفته من الأسعار، المقاسات، واشتراطات النقل والزراعة الآمنة.
          </p>
          <KeyTakeaway>
            نحن في <strong>رايات نجد للتشجير</strong> نفخر بقدرتنا على توريد آلاف النخلات من نوع واشنطونيا شهرياً من مزارعنا، بمقاسات موحدة، مع تقديم خدمات القلع بالصلية، والنقل الآمن بالكرينات، والزراعة الهندسية المدعومة بضمان الاستبدال.
          </KeyTakeaway>
        </>
      )
    },
    {
      id: "why-washingtonia",
      titleAr: "2. لماذا الواشنطونيا هي الخيار الأول لمشاريع الرياض؟",
      titleEn: "Why Washingtonia is the Top Choice in Riyadh",
      contentAr: (
        <>
          <p>السؤال الذي يطرحه الكثيرون: لماذا تفضل أمانات المدن والمطورون العقاريون الواشنطونيا على النخيل العربي في كثير من الأماكن العامة؟</p>
          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>سرعة النمو وتوفير التكاليف:</strong> الواشنطونيا تنمو أسرع بكثير من النخيل العربي، مما يسمح للمقاول بتوريد مقاسات متوسطة بتكلفة أقل، مع ضمان وصولها لارتفاعات شاهقة خلال سنوات قليلة.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>نظافة الموقع:</strong> الواشنطونيا لا تطرح تموراً. تساقط الثمار من النخيل البلدي على الأرصفة يسبب تلوثاً، يجذب الحشرات، ويزيد من تكلفة التنظيف في الشوارع التجارية.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>المظهر المعماري (Architectural Form):</strong> جذعها النحيف يسمح برؤية واجهات المحلات والفنادق دون إعاقتها، بينما تاجها المروحي في الأعلى يوفر لمسة استوائية فخمة.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>تحمل البيئة القاسية:</strong> قادرة على التأقلم مع درجات حرارة تتجاوز 50 درجة مئوية في الرياض دون أن تفقد اخضرار سعفها إذا توفر الري المناسب.
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "sizing-prices",
      titleAr: "3. المقاسات والتأثير البصري (شرح التبتير)",
      titleEn: "Sizes and Visual Impact",
      contentAr: (
        <>
          <p>
            أول قاعدة في سوق النخيل: <strong>لا يُقاس النخيل بطوله الكلي</strong>، بل يُقاس بـ "التبتير".
          </p>
          <div className="bg-bg-secondary p-4 rounded-lg my-4 border-r-4 border-gray-400">
            <strong>ما هو التبتير؟</strong><br/>
            هو المسافة من سطح الأرض إلى بداية خروج السعف الأخضر من الجذع. الجريد (السعف) لا يحسب لأنه يقص ويتغير طوله.
          </div>
          <SpecsTable />
        </>
      )
    },
    {
      id: "pricing-factors",
      titleAr: "4. ما الذي يحدد أسعار نخيل واشنطونيا؟",
      titleEn: "What Determines the Price?",
      contentAr: (
        <>
          <p>
            لا يوجد سعر موحد وثابت، حيث يتأثر السعر بعوامل متعددة يجب أن يناقشها المالك مع المورد:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border border-card-border rounded-xl">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" /> طول التبتير وسماكة الجذع
              </h4>
              <p className="text-sm text-text-muted">كلما زاد الطول زاد السعر تصاعدياً. كما أن الجذع السميك (الذي يدل على صحة النخلة) يكون أغلى من الجذع النحيف جداً.</p>
            </div>
            <div className="p-4 border border-card-border rounded-xl">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <Map className="w-5 h-5 text-primary" /> موقع التسليم والنقل
              </h4>
              <p className="text-sm text-text-muted">تكلفة إيجار التريلات والكرينات تشكل جزءاً كبيراً من السعر. المسافة من المزرعة إلى موقع المشروع في الرياض تحدد تكلفة النقل.</p>
            </div>
            <div className="p-4 border border-card-border rounded-xl">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> نوع العقد (توريد فقط أم تسليم مفتاح)
              </h4>
              <p className="text-sm text-text-muted">السعر "واصل للمشروع" يختلف عن السعر "شامل الزراعة"، ويختلف عن السعر "شامل الزراعة مع ضمان الاستبدال لمدة 3-6 أشهر".</p>
            </div>
            <div className="p-4 border border-card-border rounded-xl">
              <h4 className="font-bold text-text-main flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" /> الكمية والتوحيد (Uniformity)
              </h4>
              <p className="text-sm text-text-muted">طلب 50 نخلة متطابقة تماماً في الارتفاع لتجميل طريق واحد يتطلب جهداً في الفرز والانتقاء، وهو أمر نتميز به في رايات نجد.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "safe-planting",
      titleAr: "5. بروتوكول رايات نجد لقلع وزراعة الواشنطونيا",
      titleEn: "Rayat Najd Protocol for Transplanting",
      contentAr: (
        <>
          <p>
            شراء نخلة صحيحة لا يكفي إذا تمت زراعتها بطريقة خاطئة. أكثر من 60% من حالات موت الواشنطونيا في المشاريع سببها سوء القلع أو النقل. هذا هو بروتوكولنا:
          </p>
          <div className="space-y-6 mt-6">
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-r-2 border-primary/20 rtl:border-r-0 rtl:border-l-2 ml-4 rtl:mr-4 py-2">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-3 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-text-main">1. القلع بـ "الصلية"</h4>
              <p className="text-sm text-text-muted mt-1">يُمنع منعاً باتاً استخراج النخلة "عروق عارية". نقوم بحفر قطر دائري مناسب ورفع الكتلة الترابية المحيطة بالجذور (الصلية) وربطها بالخيش للحفاظ على رطوبتها.</p>
            </div>
            
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-r-2 border-primary/20 rtl:border-r-0 rtl:border-l-2 ml-4 rtl:mr-4 py-2">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-3 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-text-main">2. التقليم وتغليف القلب</h4>
              <p className="text-sm text-text-muted mt-1">نقوم بتقصيص السعف القديم، وربط السعف الجديد العلوي مع بعضه لحماية "قلب النخلة" من كسر الهواء أثناء نقلها على الشاحنات المسرعة.</p>
            </div>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-r-2 border-primary/20 rtl:border-r-0 rtl:border-l-2 ml-4 rtl:mr-4 py-2">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-3 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-text-main">3. الرفع الآمن (بدون جروح)</h4>
              <p className="text-sm text-text-muted mt-1">نستخدم أحزمة نسيجية عريضة لرفع النخلة بالكرين، ونتجنب السلاسل الحديدية التي تجرح الجذع وتكون مدخلاً للفطريات والسوسة.</p>
            </div>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-r-2 border-primary/20 rtl:border-r-0 rtl:border-l-2 ml-4 rtl:mr-4 py-2">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-3 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-text-main">4. الزراعة والغمر</h4>
              <p className="text-sm text-text-muted mt-1">حفر الجورة بحجم أكبر من الصلية بـ 30%، وضع تربة زراعية جيدة الصرف، ثم الزراعة باستخدام الميزان للتأكد من الاستقامة العمودية، يليها غمر فوري بالماء لسحب الهواء.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "common-mistakes",
      titleAr: "6. أخطاء قاتلة تجنبها عند زراعة الواشنطونيا",
      titleEn: "Fatal Mistakes to Avoid",
      contentAr: (
        <>
          <p>احذر من هذه الممارسات التي يقوم بها بعض العمالة غير المؤهلة:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-1">دفن الجذع أكثر من اللازم</h4>
              <p className="text-sm text-text-muted">إذا تم دفن النخلة بحيث يصل التراب إلى مستويات عالية من الجذع، سيؤدي ذلك لتعفن الجذع وموت النخلة.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-1">التعطيش في الأسابيع الأولى</h4>
              <p className="text-sm text-text-muted">النخلة المنقولة في حالة "صدمة". الاكتفاء بالتنقيط البسيط في الشهر الأول سيميتها. تحتاج لغمر يومي.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "irrigation",
      titleAr: "7. الري والصيانة ما بعد الزراعة",
      titleEn: "Irrigation and Post-Planting Care",
      contentAr: (
        <>
          <p>
            <strong>الشهر الأول:</strong> غمر يومي بالحوض لضمان ترطيب الصلية بالكامل وتثبيت التربة.
          </p>
          <p className="mt-3">
            <strong>الاستدامة:</strong> التحول إلى نظام الري بالتنقيط (Drip Irrigation) لتوفير المياه، بحيث يتم برمجته حسب فصول السنة (يومي في الصيف، مرتين إلى 3 أسبوعياً في الشتاء).
          </p>
          <p className="mt-3">
            <strong>التقليم (Pruning):</strong> الصيانة الوحيدة للواشنطونيا هي قص السعف السفلي الجاف مرة إلى مرتين سنوياً للحفاظ على المظهر الجمالي الممشوق.
          </p>
        </>
      )
    },
    {
      id: "conclusion",
      titleAr: "8. الخلاصة",
      titleEn: "Conclusion",
      contentAr: (
        <>
          <p>
            توريد نخيل الواشنطونيا هو استثمار ذكي لتجميل مشاريع الرياض بسرعة وكفاءة وبأقل تكاليف صيانة ممكنة. ولكن، النجاح يكمن في الاختيار الصحيح للمقاس، والنقل الهندسي الآمن، والالتزام ببروتوكولات الزراعة والري.
          </p>
          <p className="mt-4 font-medium text-text-main">
            لا تخاطر بمظهر مشروعك بالتعامل مع عمالة عشوائية. ابحث دائماً عن شريك تشجير مؤسسي يوفر لك ضمانات الاستبدال والتنفيذ الاحترافي.
          </p>
        </>
      )
    },
    {
      id: "cta",
      titleAr: "9. اطلب عرض سعر لتوريد الواشنطونيا",
      titleEn: "Request a Quote",
      contentAr: (
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-white mt-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج لتوريد واشنطونيا لمشروعك في الرياض؟</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            في رايات نجد، مستعدون لتوريد وزراعة أي كمية مطلوبة من نخيل الواشنطونيا، مع ضمان التطابق في المقاسات، وتقديم عقود زراعة بضمان الاستبدال.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/966557555716" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm">
              <PhoneCall className="w-5 h-5" />
              أرسل طلب تسعير عبر واتساب
            </a>
            <a href="tel:0557555716" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
              اتصل بنا: 0557555716
            </a>
          </div>
          <p className="mt-6 text-sm text-white/70">
            رايات نجد للتشجير | نزرع المستقبل... ونصنع الاستدامة
          </p>
        </div>
      )
    }
  ]
};
