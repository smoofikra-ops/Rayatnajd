import React from 'react';
import { Article } from '../../types/knowledge';
import { CheckCircle2, AlertTriangle, Lightbulb, TrendingUp, ShieldCheck, PhoneCall } from 'lucide-react';
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
          <th className="p-4 font-bold border-b border-card-border">الاستخدام الأمثل</th>
          <th className="p-4 font-bold border-b border-card-border">تحمل الحرارة</th>
          <th className="p-4 font-bold border-b border-card-border">سرعة النمو</th>
        </tr>
      </thead>
      <tbody className="text-text-muted">
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">نخيل واشنطونيا</td>
          <td className="p-4">الشوارع، مداخل المدن، المجمعات السكنية</td>
          <td className="p-4">ممتاز</td>
          <td className="p-4">سريع</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">النخيل العربي (البلدي)</td>
          <td className="p-4">المزارع، الفلل، المشاريع التراثية</td>
          <td className="p-4">ممتاز جداً</td>
          <td className="p-4">متوسط</td>
        </tr>
        <tr className="border-b border-card-border hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">نخيل السكري / البرحي</td>
          <td className="p-4">المشاريع الزراعية، القصور، الاستثمار</td>
          <td className="p-4">ممتاز</td>
          <td className="p-4">متوسط</td>
        </tr>
        <tr className="hover:bg-card-background">
          <td className="p-4 font-bold text-text-main">النخيل الكناري</td>
          <td className="p-4">المنتجعات، الفنادق الفاخرة، الميادين</td>
          <td className="p-4">جيد جداً</td>
          <td className="p-4">بطيء</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const palmSupplySaudiArabia: Article = {
  id: "palm-supply-saudi-arabia",
  slug: "palm-supply-saudi-arabia",
  clusterId: "palm-trees",
  titleAr: "توريد النخيل في السعودية | الدليل الشامل لتوريد وزراعة ونقل النخيل للمشاريع",
  titleEn: "Palm Tree Supply in Saudi Arabia | Complete Guide for Projects",
  heroImage: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-36.webp",
  authorId: "rayat-najd-editorial",
  publishedAt: "2024-05-15T08:00:00Z",
  readingTimeMinutes: 25,
  seo: {
    title: "توريد النخيل في السعودية | توريد وزراعة ونقل النخيل للمشاريع – رايات نجد",
    description: "دليل شامل لخدمات توريد النخيل في السعودية للمشاريع الحكومية والتجارية، يشمل اختيار الأنواع، النقل، الزراعة، الري والصيانة مع رايات نجد.",
    canonicalUrl: "https://www.rayatnajd.com/knowledge/palm-trees/palm-supply-saudi-arabia"
  },
  geo: {
    schema: "Article",
    keywords: [
      "توريد النخيل في السعودية", "توريد النخيل", "توريد نخيل بالرياض", 
      "مورد نخيل", "مورد نخيل معتمد", "شركة توريد نخيل", "توريد النخيل للمشاريع", 
      "توريد نخيل للمشاريع الحكومية", "زراعة النخيل", "نقل النخيل", "أشجار النخيل الكبيرة"
    ],
    entityMentions: [
      "Rayat Najd", "Palm Trees", "Washingtonia", "Date Palm", 
      "Saudi Vision 2030", "Landscaping", "Green Riyadh"
    ],
    faqReady: true,
    knowledgeGraphReady: true
  },
  tags: [
    { id: "palm-supply", nameAr: "توريد النخيل", nameEn: "Palm Supply" },
    { id: "saudi-projects", nameAr: "مشاريع السعودية", nameEn: "Saudi Projects" },
    { id: "landscaping", nameAr: "تشجير", nameEn: "Landscaping" }
  ],
  faqs: [
    {
      questionAr: "ما أفضل أنواع النخيل للمشاريع في السعودية؟",
      answerAr: "يعتبر نخيل الواشنطونيا الأفضل لشوارع المدن والمجمعات نظراً لسرعة نموه ومظهره الجمالي، بينما يفضل النخيل المثمر (مثل السكري والبرحي) في المزارع والمشاريع التراثية لإنتاجه ومقاومته العالية.",
      questionEn: "What are the best palm types for projects in Saudi Arabia?",
      answerEn: "Washingtonia palms are best for city streets due to fast growth, while fruiting palms are preferred for farms and heritage projects."
    },
    {
      questionAr: "هل توفر رايات نجد توريد النخيل خارج الرياض؟",
      answerAr: "نعم، نقدم خدمات توريد وزراعة ونقل النخيل إلى كافة مناطق المملكة العربية السعودية بأسطول نقل متخصص ومجهز.",
      questionEn: "Does Rayat Najd supply palms outside Riyadh?",
      answerEn: "Yes, we supply, plant, and transport palms to all regions of Saudi Arabia."
    },
    {
      questionAr: "كيف يتم نقل النخيل الكبير؟",
      answerAr: "يتم نقل النخيل الكبير باستخدام رافعات (كرينات) مخصصة، مع تجهيز الجذور بـ (صلية) ولفها بالخيش وترطيبها، ونقلها عبر شاحنات مجهزة لتفادي صدمة النقل.",
      questionEn: "How are large palms transported?",
      answerEn: "Transported using specialized cranes, root balls wrapped in burlap, and specialized trucks."
    },
    {
      questionAr: "ما الفرق بين النخيل العربي والواشنطونيا؟",
      answerAr: "النخيل العربي (نخيل التمر) يثمر ويحتاج لعناية خاصة وتلقيح، بينما الواشنطونيا نخيل زينة سريع النمو ولا يثمر تمراً، ويستخدم بكثرة في تنسيق الشوارع.",
      questionEn: "What is the difference between Arabic and Washingtonia palms?",
      answerEn: "Arabic palms produce dates, Washingtonia are purely ornamental and fast-growing."
    },
    {
      questionAr: "هل يتم توريد النخيل مع الزراعة؟",
      answerAr: "نعم، خدماتنا متكاملة تشمل التوريد، النقل، تجهيز التربة، الحفر، الزراعة، وتمديد شبكات الري، بالإضافة لبرامج الصيانة والمتابعة.",
      questionEn: "Is supply accompanied by planting?",
      answerEn: "Yes, our services are comprehensive including supply, transport, planting, and irrigation."
    },
    {
      questionAr: "هل يمكن توريد كميات كبيرة للمشاريع الحكومية؟",
      answerAr: "بالتأكيد، نمتلك في رايات نجد قدرة استيعابية لتوريد آلاف النخلات بمقاسات موحدة ومطابقة لمواصفات وزارة الشؤون البلدية والقروية.",
      questionEn: "Can you supply large quantities for government projects?",
      answerEn: "Absolutely, we have the capacity to supply thousands of palms matching ministry specifications."
    },
    {
      questionAr: "ما العوامل التي تحدد تكلفة توريد النخيل؟",
      answerAr: "تعتمد التكلفة على: نوع النخلة، ارتفاعها (طول الجذع)، سماكة الجذع، موقع التسليم، وما إذا كان العقد يشمل الزراعة والري والصيانة.",
      questionEn: "What factors determine palm supply costs?",
      answerEn: "Type, height, trunk thickness, delivery location, and inclusion of planting and maintenance."
    },
    {
      questionAr: "ما أفضل نظام ري للنخيل؟",
      answerAr: "نظام الري بالتنقيط هو الأفضل والأكثر كفاءة، خاصة عند تزويده بمتحكمات ذكية (Smart Controllers) لتنظيم أوقات الري وكميات المياه.",
      questionEn: "What is the best irrigation system for palms?",
      answerEn: "Drip irrigation, especially when equipped with smart controllers."
    },
    {
      questionAr: "ما مدة متابعة النخيل بعد الزراعة؟",
      answerAr: "نوفر برامج متابعة وصيانة تبدأ من شهر وتصل إلى عقود صيانة سنوية شاملة تضمن نمو وتأقلم النخيل في موقعه الجديد.",
      questionEn: "How long is the follow-up period after planting?",
      answerEn: "We offer programs from one month up to annual comprehensive maintenance contracts."
    }
  ],
  relatedArticles: [
    { title: "أفضل أنواع النخيل للمشاريع في السعودية", slug: "best-palms-for-projects-ksa", type: "slot" },
    { title: "توريد نخيل واشنطونيا بالرياض", slug: "washingtonia-supply-riyadh", type: "slot" },
    { title: "كيفية نقل النخيل الكبير بأمان", slug: "safe-large-palm-transport", type: "slot" },
    { title: "زراعة النخيل للمشاريع الحكومية", slug: "planting-palms-gov-projects", type: "slot" },
    { title: "تكلفة توريد وزراعة النخيل في السعودية", slug: "palm-supply-cost-ksa", type: "slot" },
    { title: "كيفية اختيار مورد نخيل معتمد", slug: "how-to-choose-palm-supplier", type: "slot" }
  ],
  sections: [
    {
      id: "intro",
      titleAr: "1. مقدمة",
      titleEn: "Introduction",
      contentAr: (
        <>
          <p>
            تعتبر أشجار النخيل رمزاً تاريخياً وبيئياً أصيلاً في المملكة العربية السعودية، ولم يقتصر دورها على إنتاج التمور فحسب، بل تطور ليصبح عنصراً معمارياً وهندسياً لا غنى عنه في <strong>مشاريع اللاندسكيب (Landscaping)</strong> والتطوير الحضري الحديث.
          </p>
          <p>
            مع تسارع وتيرة البناء والتنمية تماشياً مع <strong>رؤية السعودية 2030</strong> ومبادرات مثل <strong>"السعودية الخضراء"</strong>، تضاعف الطلب على <em>توريد النخيل في السعودية</em> بشكل غير مسبوق، سواء لتشجير الطرق الرئيسية، أو تجميل المجمعات السكنية والفنادق، أو تلبية اشتراطات المشاريع الحكومية والبلدية.
          </p>
          <KeyTakeaway>
            في <strong>رايات نجد للتشجير والاستدامة البيئية</strong>، ومنذ تأسيسنا عام 2010، أخذنا على عاتقنا تقديم خدمات توريد النخيل للمشاريع بمعايير مؤسسية صارمة، نتجاوز فيها المفهوم التقليدي للبيع، لنقدم حلولاً متكاملة تشمل التوريد، والنقل الآمن، والزراعة الهندسية، وتأسيس شبكات الري الذكية.
          </KeyTakeaway>
          <p>
            في هذا الدليل الشامل، نستعرض كل ما يحتاجه المقاولون، المطورون العقاريون، والجهات الحكومية لضمان نجاح مشاريع توريد وزراعة النخيل، بدءاً من اختيار الأنواع وصولاً إلى استراتيجيات النقل والصيانة الدورية.
          </p>
        </>
      )
    },
    {
      id: "importance",
      titleAr: "2. لماذا يحظى النخيل بأهمية كبيرة في مشاريع المملكة؟",
      titleEn: "Why are Palms Important in Saudi Projects?",
      contentAr: (
        <>
          <p>
            لا يخلو أي مشروع تطويري كبير في المملكة من تواجد النخيل ضمن مخططاته الهندسية، ويعود ذلك لعدة أسباب استراتيجية وبيئية:
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>التكيف المناخي الاستثنائي:</strong> النخيل مصمم ربانياً لتحمل درجات الحرارة القاسية في الصيف الخليجي، ومقاومة الجفاف، والرياح القوية، مما يجعله الخيار الأكثر أماناً للاستثمار البيئي.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>الهوية البصرية الوطنية:</strong> يعكس النخيل الطابع العربي والإسلامي، ويضفي فخامة وهيبة على المداخل الرئيسية للقصور، الفنادق، والدوائر الحكومية.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>الاستدامة واستهلاك المياه:</strong> مقارنة بالمسطحات الخضراء الواسعة وبعض الأشجار المستوردة العريضة الأوراق، يعتبر استهلاك النخيل للمياه معتدلاً وقابلاً للإدارة بكفاءة عند استخدام تقنيات الري الحديثة.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong>التأثير الفوري (Instant Impact):</strong> من خلال <em>توريد النخيل</em> الكبير والجاهز، يمكن تغيير معالم أي مشروع وتحويله إلى مساحة خضراء ناضجة في غضون أيام قليلة، دون الانتظار لسنوات حتى تنمو الشتلات.
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "supply-meaning",
      titleAr: "3. ما المقصود بخدمة توريد النخيل للمشاريع؟",
      titleEn: "What is Project Palm Supply?",
      contentAr: (
        <>
          <p>
            إن خدمة <strong>توريد النخيل للمشاريع</strong> لا تعني مجرد عملية شراء بسيطة لنخلة من المشتل وإيصالها למوقع العميل، بل هي عملية لوجستية وزراعية معقدة تتطلب تخطيطاً دقيقاً ودورة حياة متكاملة تشمل:
          </p>
          <ol className="list-decimal list-inside space-y-4 mt-4 text-text-muted">
            <li><strong>الاختيار والانتقاء الميداني:</strong> فرز النخيل في المزارع أو المشاتل بناءً على المواصفات الفنية المطلوبة بدقة (الارتفاع بالتبتير، استقامة الجذع، الخلو التام من سوسة النخيل الحمراء والأمراض الفطرية).</li>
            <li><strong>القلع الهندسي والتجهيز:</strong> حفر النخلة بحذر شديد مع الحفاظ على ما يسمى بـ "الصلية" (الكتلة الترابية المحيطة بالمجموع الجذري) لحماية الجذور الحساسة من التعرض للهواء والجفاف.</li>
            <li><strong>النقل المتخصص والآمن:</strong> استخدام شاحنات ورافعات مخصصة لضمان عدم تعرض الجذع للكسر أو تعرض "الجمارة" (القلب النابض للنخلة) للتلف الدقيق أثناء المطبات واهتزازات الطرق.</li>
            <li><strong>الزراعة الهندسية:</strong> حفر الجُوَر (الحفر) بالمقاسات المناسبة لحجم الصلية، وإضافة المحسنات الزراعية والتربة البديلة إذا لزم الأمر، وضبط استقامة النخلة وميولها بالاستعانة بالمعدات.</li>
            <li><strong>التأمين وتقديم الضمانات:</strong> تقديم ضمانات تعاقدية على بقاء النخلة حية وتجاوزها لـ "صدمة النقل" بنجاح، واستبدالها في حال الفشل.</li>
          </ol>
        </>
      )
    },
    {
      id: "supply-vs-retail",
      titleAr: "4. ما الفرق بين بيع النخيل الفردي وتوريد النخيل للمشاريع؟",
      titleEn: "Retail vs. Project Supply",
      contentAr: (
        <>
          <p>كثيراً ما يقع بعض المطورين والمقاولين في خطأ الخلط بين الشراء من المشاتل العادية وبين التعاقد مع شركة متخصصة لتوريد النخيل للمشاريع، وهذا الجدول يوضح الفروقات الجوهرية:</p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-card-background border border-card-border rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" /> البيع العشوائي (Retail)
              </h4>
              <ul className="space-y-3 text-text-muted text-sm">
                <li>• <strong>المسؤولية:</strong> التركيز على بيع القطعة الواحدة دون تحمل أي مسؤولية ما بعد البيع أو الزراعة.</li>
                <li>• <strong>الكفاءة:</strong> الاعتماد على عمالة غير مؤهلة هندسياً، مما يزيد من نسبة موت النخيل بعد زراعته.</li>
                <li>• <strong>التوحيد البصري:</strong> توفير مقاسات وأطوال متفاوتة غير متطابقة (عشوائية) تفسد المنظر المعماري للمشروع.</li>
                <li>• <strong>الضمانات:</strong> لا توجد ضمانات حقيقية أو موثقة على بقاء النخلة.</li>
                <li>• <strong>الالتزام:</strong> غياب معايير الجودة والتقارير الفنية الدورية للمهندسين الاستشاريين في المشروع.</li>
              </ul>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/30 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> التوريد المؤسسي للمشاريع
              </h4>
              <ul className="space-y-3 text-text-muted text-sm">
                <li>• <strong>المسؤولية:</strong> إدارة المشروع بالكامل من قبل مهندسين زراعيين مختصين من بداية الاختيار حتى التسليم النهائي.</li>
                <li>• <strong>التوحيد البصري:</strong> القدرة الموثوقة على توفير كميات ضخمة بمقاسات "موحدة" متطابقة (Uniformity) تخدم التصميم الهندسي.</li>
                <li>• <strong>الأمان:</strong> تطبيق معايير الأمان والسلامة في الرفع والنقل الثقيل لتقليل المخاطر.</li>
                <li>• <strong>الخدمات المكملة:</strong> توفير عقود صيانة، وتمديد شبكات ري احترافية، وضمان استبدال فوري.</li>
                <li>• <strong>الالتزام:</strong> القدرة الفائقة على تلبية كراسات الشروط والمواصفات الحكومية بصرامة واجتياز فحوصات الاستشاريين.</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: "palm-types-overview",
      titleAr: "5. أنواع النخيل المناسبة للمشاريع في السعودية",
      titleEn: "Palm Types for Projects in KSA",
      contentAr: (
        <>
          <p>
            تتعدد أصناف النخيل المتاحة في السوق السعودي، ولكن عند الحديث عن المشاريع (التجارية، الحكومية، اللاندسكيب)، فإن اختيار نوع النخلة هو قرار هندسي وبصري بحت. يجب أن يتماشى مع هوية المشروع، والميزانية المرصودة، واحتياجات الصيانة المستقبلية.
          </p>
          <ComparisonTable />
        </>
      )
    },
    {
      id: "washingtonia",
      titleAr: "6. نخيل واشنطونيا (Washingtonia Robusta)",
      titleEn: "Washingtonia Palms",
      contentAr: (
        <>
          <p>
            يعتبر <strong>نخيل واشنطونيا</strong> أو ما يُعرف بـ (نخيل المروحة) الخيار الأول بلا منازع لمشاريع تجميل الشوارع، والبلديات، والمجمعات التجارية في المملكة العربية السعودية.
          </p>
          <h4 className="font-bold text-lg mt-6 mb-2">مميزات نخيل الواشنطونيا للمشاريع:</h4>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li><strong>سرعة النمو الفائقة:</strong> يحقق ارتفاعات شاهقة في وقت قياسي مقارنة بالنخيل العربي.</li>
            <li><strong>المظهر المعماري الحديث:</strong> جذعه الرفيع والممشوق وسعفه المروحي يضفي لمسة عصرية (Tropical/Modern) تتناسب مع واجهات الفنادق والمجمعات.</li>
            <li><strong>انخفاض تكاليف الصيانة:</strong> لا يتطلب عمليات تلقيح (تنبيت) أو جني ثمار (صرام)، مما يوفر تكاليف العمالة بشكل كبير.</li>
            <li><strong>نظافة الموقع:</strong> لا يتساقط منه ثمار تفسد الأرصفة أو تجذب الحشرات، مما يجعله مثالياً لمواقف السيارات وممرات المشاة.</li>
          </ul>
          <CloudinaryImage 
            src="https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-37.webp" 
            alt="توريد وزراعة نخيل واشنطونيا في شوارع الرياض" 
            className="rounded-2xl w-full h-[400px] object-cover my-6"
            lazy={true}
          />
        </>
      )
    },
    {
      id: "arabic-palm",
      titleAr: "7. النخيل العربي (نخيل التمر البلدي)",
      titleEn: "Arabic Date Palms",
      contentAr: (
        <>
          <p>
            النخيل العربي (Phoenix dactylifera) هو رمز الضيافة والأصالة. في المشاريع التي تحمل طابعاً تراثياً أو تعكس الهوية النجدية، مثل مشاريع <strong>بوابة الدرعية</strong>، يكون النخيل العربي هو الخيار الإلزامي لتأصيل الهوية.
          </p>
          <h4 className="font-bold text-lg mt-6 mb-2">مميزات النخيل العربي للمشاريع:</h4>
          <ul className="list-disc list-inside space-y-2 text-text-muted mb-6">
            <li><strong>ارتباط عميق بالبيئة:</strong> ابن بيئته الأصلي، متكيف تماماً مع أقسى ظروف الجفاف والحرارة.</li>
            <li><strong>الإنتاجية المزدوجة:</strong> يوفر ظلاً وجمالاً، بالإضافة إلى إنتاج التمور إن رغب مالك المشروع في استثمارها.</li>
            <li><strong>الهوية البصرية المتينة:</strong> الجذع العريض والقوي يمنح شعوراً بالفخامة والرسوخ، ويفضل استخدامه في البوابات الرئيسية للقصور الملكية والمنشآت الحكومية.</li>
          </ul>
          <div className="p-4 bg-bg-secondary rounded-lg text-sm text-text-muted italic border-r-4 border-gray-400">
            ملاحظة هامة للمطورين: يتطلب النخيل العربي صيانة موسمية مجدولة (تكريب، تلقيح، جني ثمار) للحفاظ على مظهره الجمالي ومنع تساقط الثمار العشوائي في الأماكن العامة.
          </div>
        </>
      )
    },
    {
      id: "project-types",
      titleAr: "14-19. تخصصات توريد النخيل بحسب طبيعة المشروع",
      titleEn: "Supply Specializations by Project Type",
      contentAr: (
        <>
          <p>
            في <strong>رايات نجد</strong>، ندرك تماماً أن احتياجات توريد النخيل تختلف جذرياً باختلاف طبيعة المشروع والجهة المالكة. لذلك، قمنا بتقسيم عمليات التوريد لتلبي متطلبات قطاعات محددة بمهنية عالية:
          </p>
          
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">أولاً: توريد النخيل للجهات الحكومية والأمانات</h3>
              <p className="text-text-muted">
                تخضع هذه المشاريع لكراسات شروط دقيقة تصدرها وزارة الشؤون البلدية والقروية (MOMRAH) وهيئات تطوير المدن. نتميز بـ:
              </p>
              <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                <li>توريد نخيل متطابق بنسبة 100% في الطول وسماكة الجذع (Uniformity).</li>
                <li>توفير شهادات خلو من الأمراض الزراعية (خاصة سوسة النخيل).</li>
                <li>قدرة تشغيلية ضخمة لتنفيذ أطوال طرق تصل لعدة كيلومترات في مدد زمنية حرجة.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-2">ثانياً: توريد النخيل للمطورين العقاريين والمجمعات السكنية (Compounds)</h3>
              <p className="text-text-muted">
                المطور العقاري يبحث عن القيمة الجمالية التي ترفع من قيمة العقار وتسرع عمليات البيع. لذلك:
              </p>
              <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                <li>نركز على توريد الواشنطونيا الممشوقة للمداخل لإعطاء انطباع بالارتفاع والفخامة.</li>
                <li>زراعة نخيل الزينة حول مناطق المسابح والكلوب هاوس.</li>
                <li>تنفيذ شبكات ري مخفية وآمنة للأطفال والسكان.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-2">ثالثاً: توريد النخيل للفنادق والمنتجعات الفاخرة</h3>
              <p className="text-text-muted">
                تتطلب هذه الوجهات بيئة بصرية استثنائية وهادئة:
              </p>
              <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                <li>استخدام النخيل الكناري (Canary Island Date Palm) بندرة لجمال تاجه العريض وجذعه المميز.</li>
                <li>اختيار أشجار خالية تماماً من العيوب البصرية (Aesthetic Perfection).</li>
                <li>تنفيذ أعمال الزراعة ليلاً لعدم إزعاج نزلاء الفندق أو التأثير على سير العمل.</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      id: "supply-stages",
      titleAr: "20. مراحل توريد وزراعة النخيل خطوة بخطوة",
      titleEn: "Phases of Palm Supply and Planting",
      contentAr: (
        <>
          <p>
            لضمان نسبة نجاح زراعة تقارب 100%، نتبع في <strong>رايات نجد</strong> بروتوكولاً هندسياً صارماً يمر عبر مراحل متسلسلة لا تقبل التنازل:
          </p>
          
          <div className="relative border-r-2 border-primary/20 rtl:border-r-0 rtl:border-l-2 ml-4 rtl:mr-4 mt-8 space-y-8">
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-lg text-text-main">المرحلة الأولى: فحص الموقع والاختيار</h4>
              <p className="text-text-muted mt-2">يتم فحص تربة المشروع أولاً والتأكد من خلوها من العوائق الإنشائية والمياه الجوفية القريبة. ثم يقوم المهندسون باختيار النخيل في المزارع ووضع علامات (Tagging) على النخل المطابق للمواصفات.</p>
            </div>
            
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-lg text-text-main">المرحلة الثانية: القلع والتجهيز (الصلية)</h4>
              <p className="text-text-muted mt-2">عملية فصل النخلة عن الأرض هي الأخطر. يتم تقليم السعف وربطه لحماية "القلب"، وتحفر الجذور بحذر لتشكيل كرة ترابية (صلية) تلف بالخيش المدعوم بالأسلاك للحفاظ على تماسك الجذور.</p>
            </div>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-lg text-text-main">المرحلة الثالثة: النقل الاستراتيجي</h4>
              <p className="text-text-muted mt-2">رفع النخلة بكرينات (Cranes) بحزام مزدوج لعدم خدش الجذع، وتمديدها أفقياً على تريلات (شاحنات طويلة). تنفذ الرحلات عادة في فترات المساء لتجنب حرارة الشمس المباشرة على الجذور المكشوفة جزئياً.</p>
            </div>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-lg text-text-main">المرحلة الرابعة: الزراعة الهندسية</h4>
              <p className="text-text-muted mt-2">حفر الجور بضعف حجم الصلية، وضع تربة زراعية محسنة ومبيدات فطرية أسفل الحفرة. يتم إنزال النخلة عمودياً باستخدام الميزان الزئبقي لضمان الاستقامة التامة بنسبة 90 درجة.</p>
            </div>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
              <span className="absolute -left-2.5 rtl:-left-auto rtl:-right-2.5 top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-bg-primary"></span>
              <h4 className="font-bold text-lg text-text-main">المرحلة الخامسة: الري الغزير (الغمر المبدئي)</h4>
              <p className="text-text-muted mt-2">فور الزراعة، يتم غمر حوض النخلة بالماء بالكامل لطرد الجيوب الهوائية من التربة ومنع تعفن الجذور، وتستمر جدولة الري المكثف للأسابيع الأربعة الأولى.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "mistakes",
      titleAr: "31. أهم الأخطاء الشائعة في مشاريع توريد وزراعة النخيل",
      titleEn: "Common Mistakes in Palm Projects",
      contentAr: (
        <>
          <p>
            الكثير من المقاولين يواجهون خسائر فادحة بسبب موت النخيل بعد أسابيع من زراعته. لتجنب هذه الخسائر، نوضح أبرز الأخطاء القاتلة:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ دفن قلب النخلة</h4>
              <p className="text-sm text-text-muted">زراعة النخلة بعمق زائد بحيث يصل التراب أو الماء إلى مستوى قلب النخلة (الجمارة)، مما يؤدي لتعفنها وموتها فوراً.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ انهيار الصلية</h4>
              <p className="text-sm text-text-muted">نقل النخلة دون تثبيت الكتلة الترابية المحيطة بالجذور، مما يؤدي إلى تقطع الشعيرات الجذرية الدقيقة وفقدان النخلة لقدرتها على امتصاص الماء.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ التعطيش بعد الزراعة</h4>
              <p className="text-sm text-text-muted">عدم الالتزام بجدول الري الغزير خلال الأربعين يوماً الأولى. النخلة المنقولة حديثاً تعاني من "صدمة" وتحتاج للترطيب المستمر.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ الجروح والكدمات الناقلة للسوسة</h4>
              <p className="text-sm text-text-muted">استخدام أحزمة رفع حديدية أو غير مبطنة تجرح الجذع، مما يجعل الجرح بيئة خصبة ومفتوحة لاجتذاب سوسة النخيل الحمراء.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "why-rayat-najd",
      titleAr: "34. لماذا تختار رايات نجد لمشروعك؟",
      titleEn: "Why Choose Rayat Najd?",
      contentAr: (
        <>
          <p>
            لا نكتفي في رايات نجد بكوننا مورداً، بل نحن شريك هندسي واستراتيجي يضمن نجاح الجانب الأخضر من مشروعك. 
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <strong>أسطول نقل ومعدات ضخمة:</strong> نمتلك القدرة على توريد مئات النخلات يومياً للمشاريع الكبرى دون تعطل، مع أسطول مجهز بمتطلبات السلامة.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <strong>ضمانات استبدال قانونية:</strong> نقدم عقوداً واضحة تتضمن فترة ضمان لبقاء النخيل حياً، مع الاستبدال الفوري في حال الفشل دون تكاليف إضافية على المالك.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <strong>إشراف هندسي 100%:</strong> جميع مراحل العمل (الاختيار، القلع، الزراعة) تتم تحت إشراف مهندسين زراعيين خبراء في البيئة السعودية.
              </div>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "vision-2030",
      titleAr: "37. علاقة مشاريع توريد النخيل برؤية المملكة 2030",
      titleEn: "Alignment with Vision 2030",
      contentAr: (
        <>
          <p>
            يلعب قطاع التشجير وتوريد النخيل دوراً محورياً في تحقيق مستهدفات <strong>رؤية السعودية 2030</strong> ومبادراتها المنبثقة، وتحديداً:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 text-text-muted">
            <li><strong>مبادرة السعودية الخضراء:</strong> التي تستهدف زراعة 10 مليارات شجرة لتقليل الانبعاثات الكربونية ومكافحة التصحر.</li>
            <li><strong>برنامج جودة الحياة:</strong> من خلال أنسنة المدن، زيادة المسطحات الخضراء، رفع نصيب الفرد من الرقعة الخضراء، وخلق بيئة حضرية تشجع على المشي والأنشطة الصحية (مثل ما يتم في مشروع الرياض الخضراء).</li>
            <li><strong>الاستدامة البيئية:</strong> الاعتماد على نباتات محلية (مثل النخيل) متكيفة مع المناخ لتخفيف استهلاك المياه الجوفية والاعتماد على مياه الصرف المعالجة.</li>
          </ul>
          <KeyTakeaway>
            مساهمتنا في رايات نجد لا تقتصر على الجانب التجاري، بل نحن فخورون بأن نكون جزءاً فاعلاً في تحويل رؤية المملكة إلى واقع أخضر ملموس يعيشه المواطن والمقيم يومياً.
          </KeyTakeaway>
        </>
      )
    },
    {
      id: "conclusion",
      titleAr: "39. الخلاصة",
      titleEn: "Conclusion",
      contentAr: (
        <>
          <p>
            نجاح مشاريع توريد النخيل في السعودية ليس ضرباً من الحظ، بل هو نتيجة للخبرة، التخطيط الهندسي، والالتزام الصارم بمعايير الزراعة والنقل. اختيارك للمورد المؤهل والشركة المنفذة المحترفة هو الاستثمار الحقيقي الذي سيحمي مشروعك من الخسائر المادية وتشويه المنظر العام.
          </p>
          <p className="mt-4 font-medium text-text-main">
            سواء كنت تمثل جهة حكومية، أو شركة مقاولات كبرى، أو مطوراً عقارياً يبحث عن التميز؛ فإن <strong>رايات نجد للتشجير والاستدامة البيئية</strong> تقف على أتم الاستعداد لتحويل مخططاتك إلى واقع أخضر حيّ ينبض بالحياة، بأعلى معايير الجودة والضمان.
          </p>
        </>
      )
    },
    {
      id: "cta",
      titleAr: "40. اطلب عرض سعر لمشروعك",
      titleEn: "Request a Quote",
      contentAr: (
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-white mt-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">هل لديك مشروع قادم يحتاج إلى توريد نخيل؟</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            تحدث مع خبرائنا المهندسين اليوم لمناقشة تفاصيل مشروعك، ومراجعة كراسة الشروط، والحصول على عرض سعر تنافسي مدعوم بأقوى الضمانات الفنية في السوق السعودي.
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
            رايات نجد للتشجير والاستدامة البيئية | نزرع المستقبل... ونصنع الاستدامة.
          </p>
        </div>
      )
    }
  ]
};
