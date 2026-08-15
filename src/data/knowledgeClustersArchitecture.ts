import { ClusterPage } from '../types/knowledge';

export const comprehensiveClusters: ClusterPage[] = [
  {
    id: "cluster-landscaping",
    slug: "landscaping",
    pillarId: "afforestation-ksa",
    titleAr: "التشجير",
    titleEn: "Landscaping",
    descriptionAr: "المحور الشامل لهندسة اللاندسكيب والتشجير.",
    descriptionEn: "The comprehensive hub for landscaping and afforestation.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-31.webp",
    subcategories: ["residential-landscaping", "commercial-landscaping", "public-parks"],
    articleSlots: [],
    relatedServicesIds: ["landscape-design", "execution"],
    relatedProjectsIds: ["riyadh-parks", "jeddah-corniche"],
    relatedCategoriesIds: ["sustainability", "urban-landscape"],
    galleryStructure: ["Before & After", "Design Concepts", "Execution Phases"],
    faqs: [
      {
        questionAr: "ما هي أهم عوامل نجاح التشجير؟",
        answerAr: "اختيار النباتات المناسبة، جودة التربة، وأنظمة الري الفعالة.",
        questionEn: "What are the key factors for successful landscaping?",
        answerEn: "Selecting suitable plants, soil quality, and efficient irrigation systems."
      }
    ],
    seo: {
      title: "التشجير - مركز المعرفة | رايات نجد",
      description: "دليل التشجير وهندسة المناظر الطبيعية في السعودية.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/landscaping"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["التشجير", "لاندسكيب", "تنسيق حدائق", "Landscaping"],
      entityMentions: ["Landscaping", "Afforestation"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-landscaping", nameAr: "تشجير", nameEn: "Landscaping" }
    ]
  },
  {
    id: "cluster-palm-trees",
    slug: "palm-trees",
    pillarId: "afforestation-ksa",
    titleAr: "النخيل",
    titleEn: "Palm Trees",
    descriptionAr: "قاعدة المعرفة المتخصصة في أنواع النخيل، توريدها، وزراعتها.",
    descriptionEn: "Specialized knowledge base on palm tree types, supply, and planting.",
    heroImage: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-55.webp",
    subcategories: ["washingtonia-palms", "date-palms", "ornamental-palms"],
    articleSlots: [],
    relatedServicesIds: ["palm-supply", "palm-transportation"],
    relatedProjectsIds: ["diriyah-gate", "boulevard-riyadh"],
    relatedCategoriesIds: ["nurseries"],
    galleryStructure: ["Palm Varieties", "Transportation Process", "Planting Process"],
    faqs: [
      {
        questionAr: "كيف يتم نقل النخيل الكبير؟",
        answerAr: "بواسطة رافعات متخصصة ومعالجة الجذور لحمايتها.",
        questionEn: "How are large palm trees transported?",
        answerEn: "Using specialized cranes and root treatment for protection."
      }
    ],
    seo: {
      title: "النخيل - مركز المعرفة | رايات نجد",
      description: "المرجع الشامل للنخيل وتوريده وزراعته في المملكة.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/palm-trees"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["النخيل", "توريد نخل", "واشنطونيا", "Palm Trees"],
      entityMentions: ["Palm Tree", "Washingtonia"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-palm", nameAr: "نخيل", nameEn: "Palm" }
    ]
  },
  {
    id: "cluster-trees",
    slug: "trees",
    pillarId: "afforestation-ksa",
    titleAr: "الأشجار",
    titleEn: "Trees",
    descriptionAr: "موسوعة الأشجار الملائمة لبيئة المملكة وطرق زراعتها.",
    descriptionEn: "Encyclopedia of trees suitable for the Kingdom's environment and planting methods.",
    heroImage: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-60.webp",
    subcategories: ["shade-trees", "fruit-trees", "drought-resistant-trees"],
    articleSlots: [],
    relatedServicesIds: ["tree-supply", "tree-planting"],
    relatedProjectsIds: ["green-riyadh"],
    relatedCategoriesIds: ["nurseries", "sustainability"],
    galleryStructure: ["Tree Species", "Growth Stages", "Foliage Details"],
    faqs: [
      {
        questionAr: "ما هي أفضل أشجار الظل في السعودية؟",
        answerAr: "النيم، البونسيانا، والفيكس بأنواعه.",
        questionEn: "What are the best shade trees in Saudi Arabia?",
        answerEn: "Neem, Poinciana, and various Ficus species."
      }
    ],
    seo: {
      title: "الأشجار - مركز المعرفة | رايات نجد",
      description: "الدليل الشامل للأشجار وأنواعها في السعودية.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/trees"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["الأشجار", "أشجار ظل", "أشجار زينة", "Trees"],
      entityMentions: ["Tree", "Shade Tree"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-tree", nameAr: "أشجار", nameEn: "Trees" }
    ]
  },
  {
    id: "cluster-nurseries",
    slug: "nurseries",
    pillarId: "afforestation-ksa",
    titleAr: "المشاتل",
    titleEn: "Nurseries",
    descriptionAr: "إدارة المشاتل وإنتاج النباتات وتوريدها.",
    descriptionEn: "Nursery management, plant production, and supply.",
    heroImage: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-17.webp",
    subcategories: ["wholesale-nurseries", "plant-production", "greenhouses"],
    articleSlots: [],
    relatedServicesIds: ["wholesale-supply"],
    relatedProjectsIds: [],
    relatedCategoriesIds: ["trees", "palm-trees"],
    galleryStructure: ["Nursery Facilities", "Seedlings", "Greenhouses"],
    faqs: [
      {
        questionAr: "هل توفرون توريد كميات تجارية للمشاريع؟",
        answerAr: "نعم، مشاتلنا مجهزة لتوريد ملايين الشتلات والأشجار للمشاريع الكبرى.",
        questionEn: "Do you supply commercial quantities for projects?",
        answerEn: "Yes, our nurseries are equipped to supply millions of seedlings and trees for major projects."
      }
    ],
    seo: {
      title: "المشاتل - مركز المعرفة | رايات نجد",
      description: "كل ما يخص مشاتل الأشجار والنباتات وإنتاجها.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/nurseries"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["مشاتل", "شتلات", "إنتاج زراعي", "Nurseries"],
      entityMentions: ["Plant Nursery", "Seedling"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-nursery", nameAr: "مشاتل", nameEn: "Nursery" }
    ]
  },
  {
    id: "cluster-irrigation",
    slug: "irrigation",
    pillarId: "afforestation-ksa",
    titleAr: "شبكات الري",
    titleEn: "Irrigation",
    descriptionAr: "تقنيات وأنظمة الري الحديثة والمستدامة.",
    descriptionEn: "Modern and sustainable irrigation technologies and systems.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-75.webp",
    subcategories: ["drip-irrigation", "smart-irrigation", "sprinkler-systems"],
    articleSlots: [],
    relatedServicesIds: ["irrigation-networks"],
    relatedProjectsIds: ["smart-city-irrigation"],
    relatedCategoriesIds: ["sustainability", "agricultural-maintenance"],
    galleryStructure: ["System Installations", "Smart Controllers", "Watering Patterns"],
    faqs: [
      {
        questionAr: "ما هو أفضل نظام ري لتوفير المياه؟",
        answerAr: "نظام الري بالتنقيط المتصل بمتحكمات ذكية وحساسات رطوبة.",
        questionEn: "What is the best irrigation system for saving water?",
        answerEn: "Drip irrigation connected to smart controllers and moisture sensors."
      }
    ],
    seo: {
      title: "شبكات الري - مركز المعرفة | رايات نجد",
      description: "أنظمة وشبكات الري الحديثة والذكية.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/irrigation"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["شبكات الري", "ري ذكي", "ري بالتنقيط", "Irrigation"],
      entityMentions: ["Irrigation", "Drip Irrigation", "Smart Controller"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-irrigation", nameAr: "ري", nameEn: "Irrigation" }
    ]
  },
  {
    id: "cluster-maintenance",
    slug: "agricultural-maintenance",
    pillarId: "afforestation-ksa",
    titleAr: "الصيانة الزراعية",
    titleEn: "Agricultural Maintenance",
    descriptionAr: "أدلة وبرامج الصيانة الدورية للأشجار والمشاريع الزراعية.",
    descriptionEn: "Guides and periodic maintenance programs for trees and agricultural projects.",
    heroImage: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-12.webp",
    subcategories: ["pruning", "fertilization", "pest-control"],
    articleSlots: [],
    relatedServicesIds: ["agricultural-maintenance"],
    relatedProjectsIds: ["park-maintenance-riyadh"],
    relatedCategoriesIds: ["trees", "palm-trees", "irrigation"],
    galleryStructure: ["Pruning Techniques", "Fertilization Process", "Equipment"],
    faqs: [
      {
        questionAr: "متى يجب تقليم الأشجار؟",
        answerAr: "يعتمد على نوع الشجرة، ولكن بشكل عام في أواخر الشتاء أو أوائل الربيع.",
        questionEn: "When should trees be pruned?",
        answerEn: "Depends on the tree type, but generally in late winter or early spring."
      }
    ],
    seo: {
      title: "الصيانة الزراعية - مركز المعرفة | رايات نجد",
      description: "دليل الصيانة الزراعية والاهتمام بالنباتات.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/agricultural-maintenance"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["صيانة زراعية", "تقليم أشجار", "تسميد", "Maintenance"],
      entityMentions: ["Fertilizer", "Pruning", "Pest Control"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-maintenance", nameAr: "صيانة", nameEn: "Maintenance" }
    ]
  },
  {
    id: "cluster-sustainability",
    slug: "environmental-sustainability",
    pillarId: "afforestation-ksa",
    titleAr: "الاستدامة البيئية",
    titleEn: "Environmental Sustainability",
    descriptionAr: "الممارسات البيئية لتقليل الانبعاثات وتحسين جودة الحياة.",
    descriptionEn: "Environmental practices to reduce emissions and improve quality of life.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-62.webp",
    subcategories: ["carbon-reduction", "water-management", "biodiversity"],
    articleSlots: [],
    relatedServicesIds: ["landscape-design"],
    relatedProjectsIds: ["green-riyadh", "saudi-green-initiative"],
    relatedCategoriesIds: ["irrigation", "urban-landscape"],
    galleryStructure: ["Sustainable Practices", "Biodiversity", "Recycling"],
    faqs: [
      {
        questionAr: "كيف يساهم التشجير في الاستدامة؟",
        answerAr: "يقلل التلوث، يخفض درجات الحرارة، ويوفر موائل للحياة الفطرية.",
        questionEn: "How does afforestation contribute to sustainability?",
        answerEn: "Reduces pollution, lowers temperatures, and provides habitats for wildlife."
      }
    ],
    seo: {
      title: "الاستدامة البيئية - مركز المعرفة | رايات نجد",
      description: "الاستدامة البيئية ومكافحة التصحر في رؤية 2030.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/environmental-sustainability"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["استدامة بيئية", "مكافحة التصحر", "جودة الحياة", "Sustainability"],
      entityMentions: ["Sustainability", "Desertification", "Carbon Capture"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-sustainability", nameAr: "استدامة", nameEn: "Sustainability" }
    ]
  },
  {
    id: "cluster-urban",
    slug: "urban-landscape-development",
    pillarId: "afforestation-ksa",
    titleAr: "تطوير المشهد الحضري",
    titleEn: "Urban Landscape Development",
    descriptionAr: "تحسين المدن والأحياء من خلال دمج الطبيعة في البنية التحتية.",
    descriptionEn: "Improving cities and neighborhoods by integrating nature into infrastructure.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-32.webp",
    subcategories: ["streetscapes", "public-plazas", "urban-parks"],
    articleSlots: [],
    relatedServicesIds: ["landscape-design", "execution"],
    relatedProjectsIds: ["riyadh-art", "sports-boulevard"],
    relatedCategoriesIds: ["landscaping", "sustainability"],
    galleryStructure: ["Streetscapes", "Plazas", "Urban Furniture"],
    faqs: [
      {
        questionAr: "ما هو المشهد الحضري؟",
        answerAr: "التصميم البصري والوظيفي للمساحات العامة في المدن.",
        questionEn: "What is urban landscape?",
        answerEn: "The visual and functional design of public spaces in cities."
      }
    ],
    seo: {
      title: "تطوير المشهد الحضري - مركز المعرفة | رايات نجد",
      description: "تطوير المشهد الحضري وانسنة المدن.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/urban-landscape-development"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["مشهد حضري", "أنسنة المدن", "تخطيط عمراني", "Urban Landscape"],
      entityMentions: ["Urban Planning", "Urban Heat Island"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-urban", nameAr: "مشهد حضري", nameEn: "Urban" }
    ]
  },
  {
    id: "cluster-gov-projects",
    slug: "government-landscaping-projects",
    pillarId: "afforestation-ksa",
    titleAr: "مشاريع التشجير الحكومية",
    titleEn: "Government Landscaping Projects",
    descriptionAr: "معايير ومتطلبات ومقاييس تنفيذ المشاريع الحكومية.",
    descriptionEn: "Standards, requirements, and metrics for executing government projects.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-63.webp",
    subcategories: ["ministry-guidelines", "municipality-projects", "mega-projects"],
    articleSlots: [],
    relatedServicesIds: ["execution", "wholesale-supply"],
    relatedProjectsIds: ["misk-city", "king-salman-park"],
    relatedCategoriesIds: ["landscaping", "nurseries"],
    galleryStructure: ["Mega Projects", "Infrastructure", "Public Parks"],
    faqs: [
      {
        questionAr: "هل تلتزمون بمواصفات أمانة الرياض؟",
        answerAr: "نعم، جميع أعمالنا مطابقة למواصفات وزارة الشؤون البلدية والقروية والإسكان.",
        questionEn: "Do you comply with Riyadh Municipality specifications?",
        answerEn: "Yes, all our work complies with MOMRAH specifications."
      }
    ],
    seo: {
      title: "مشاريع التشجير الحكومية - مركز المعرفة | رايات نجد",
      description: "تنفيذ ومعايير مشاريع التشجير الحكومية في السعودية.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/government-landscaping-projects"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["مشاريع حكومية", "أمانة الرياض", "مشاريع تشجير", "Government Projects"],
      entityMentions: ["MOMRAH", "King Salman Park"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-gov", nameAr: "مشاريع حكومية", nameEn: "Gov Projects" }
    ]
  },
  {
    id: "cluster-vision-2030",
    slug: "green-riyadh-vision-2030",
    pillarId: "afforestation-ksa",
    titleAr: "الرياض الخضراء ورؤية 2030",
    titleEn: "Green Riyadh & Vision 2030",
    descriptionAr: "مواكبة برامج جودة الحياة ومبادرات السعودية الخضراء.",
    descriptionEn: "Aligning with Quality of Life programs and Saudi Green Initiatives.",
    heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-64.webp",
    subcategories: ["green-riyadh-initiative", "saudi-green-initiative", "quality-of-life-program"],
    articleSlots: [],
    relatedServicesIds: ["landscape-design", "tree-supply"],
    relatedProjectsIds: ["green-riyadh", "sports-boulevard"],
    relatedCategoriesIds: ["sustainability", "urban-landscape"],
    galleryStructure: ["Vision 2030 Events", "Green Riyadh Progress", "Initiative Launches"],
    faqs: [
      {
        questionAr: "ما هو هدف مشروع الرياض الخضراء؟",
        answerAr: "رفع نصيب الفرد من المساحة الخضراء وزيادة نسبة الغطاء النباتي في العاصمة.",
        questionEn: "What is the goal of the Green Riyadh project?",
        answerEn: "To increase per capita green space and vegetation cover in the capital."
      }
    ],
    seo: {
      title: "الرياض الخضراء ورؤية 2030 - مركز المعرفة | رايات نجد",
      description: "مبادرات السعودية الخضراء وبرامج الرؤية 2030 للتشجير.",
      canonicalUrl: "https://www.rayatnajd.com/knowledge/cluster/green-riyadh-vision-2030"
    },
    geo: {
      schema: "CollectionPage",
      keywords: ["الرياض الخضراء", "رؤية 2030", "السعودية الخضراء", "Vision 2030", "Green Riyadh"],
      entityMentions: ["Vision 2030", "Green Riyadh", "Saudi Green Initiative", "Quality of Life Program"],
      faqReady: true,
      knowledgeGraphReady: true
    },
    tags: [
      { id: "tag-vision2030", nameAr: "رؤية 2030", nameEn: "Vision 2030" }
    ]
  }
];
