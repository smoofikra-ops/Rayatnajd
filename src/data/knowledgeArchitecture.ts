import { KnowledgeCategory, PillarPage, ClusterPage } from '../types/knowledge';

export const categories: KnowledgeCategory[] = [
  {
    id: "landscaping",
    titleAr: "هندسة اللاندسكيب",
    titleEn: "Landscaping",
    descriptionAr: "כל ما يتعلق بهندسة المناظر الطبيعية وتنسيق الحدائق.",
    descriptionEn: "Everything related to landscape engineering and gardening.",
    icon: "TreePine",
    slug: "landscaping"
  },
  {
    id: "sustainability",
    titleAr: "الاستدامة البيئية",
    titleEn: "Environmental Sustainability",
    descriptionAr: "الممارسات البيئية والتنمية المستدامة.",
    descriptionEn: "Environmental practices and sustainable development.",
    icon: "Recycle",
    slug: "sustainability"
  }
];

export const firstPillar: PillarPage = {
  id: "afforestation-ksa",
  slug: "afforestation-in-saudi-arabia",
  categoryId: "landscaping",
  titleAr: "التشجير في المملكة العربية السعودية",
  titleEn: "Afforestation in Saudi Arabia",
  descriptionAr: "الدليل الشامل للتشجير وزيادة الغطاء النباتي في المملكة العربية السعودية ضمن رؤية 2030.",
  descriptionEn: "The comprehensive guide to afforestation and increasing vegetation cover in Saudi Arabia under Vision 2030.",
  heroImage: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-13.webp",
  sections: [
    { id: "intro", titleAr: "مقدمة", titleEn: "Introduction" },
    { id: "vision-2030", titleAr: "رؤية 2030 والتشجير", titleEn: "Vision 2030 and Afforestation" },
    { id: "climate", titleAr: "المناخ والنباتات المناسبة", titleEn: "Climate and Suitable Plants" },
    { id: "irrigation", titleAr: "أنظمة الري الحديثة", titleEn: "Modern Irrigation Systems" },
    { id: "challenges", titleAr: "التحديات والحلول", titleEn: "Challenges and Solutions" },
  ],
  seo: {
    title: "التشجير في المملكة العربية السعودية | رايات نجد",
    description: "الدليل الشامل لمشاريع التشجير وزيادة الغطاء النباتي في السعودية، وتطبيقات الاستدامة البيئية.",
    canonicalUrl: "https://www.rayatnajd.com/knowledge/pillar/afforestation-in-saudi-arabia"
  },
  geo: {
    schema: "Article",
    keywords: ["التشجير في السعودية", "رؤية 2030 التشجير", "السعودية الخضراء", "لاندسكيب السعودية", "الغطاء النباتي", "Saudi Afforestation"],
    entityMentions: ["رؤية السعودية 2030", "مبادرة السعودية الخضراء", "وزارة البيئة والمياه والزراعة"],
    faqReady: true,
    knowledgeGraphReady: true
  },
  tags: [
    { id: "t1", nameAr: "تشجير", nameEn: "Afforestation" },
    { id: "t2", nameAr: "رؤية 2030", nameEn: "Vision 2030" }
  ],
  relatedServicesIds: ["tree-supply", "irrigation"],
  relatedProjectsIds: ["green-riyadh", "diriyah"],
  relatedArticlesIds: [],
  faqs: [
    {
      questionAr: "ما هي أهداف مبادرة السعودية الخضراء؟",
      answerAr: "تهدف لزراعة 10 مليارات شجرة وتقليل الانبعاثات الكربونية وتحسين جودة الحياة.",
      questionEn: "What are the goals of the Saudi Green Initiative?",
      answerEn: "It aims to plant 10 billion trees, reduce carbon emissions, and improve quality of life."
    }
  ],
  downloadableResources: [
    {
      titleAr: "دليل التشجير الحضري.pdf",
      titleEn: "Urban Afforestation Guide.pdf",
      url: "#"
    }
  ]
};

export const clusters: ClusterPage[] = [
  { id: "c1", slug: "landscaping-company", pillarId: "afforestation-ksa", titleAr: "شركة تشجير", titleEn: "Landscaping Company", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c2", slug: "palm-supply", pillarId: "afforestation-ksa", titleAr: "توريد النخيل", titleEn: "Palm Supply", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [{ title: "توريد النخيل في السعودية", slug: "palm-supply-saudi-arabia", type: "published" }], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c3", slug: "tree-supply", pillarId: "afforestation-ksa", titleAr: "توريد الأشجار", titleEn: "Tree Supply", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c4", slug: "palm-transportation", pillarId: "afforestation-ksa", titleAr: "نقل النخيل", titleEn: "Palm Transportation", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c5", slug: "tree-transportation", pillarId: "afforestation-ksa", titleAr: "نقل الأشجار", titleEn: "Tree Transportation", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c6", slug: "tree-planting", pillarId: "afforestation-ksa", titleAr: "زراعة الأشجار", titleEn: "Tree Planting", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c7", slug: "irrigation-networks", pillarId: "afforestation-ksa", titleAr: "شبكات الري", titleEn: "Irrigation Networks", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c8", slug: "agricultural-maintenance", pillarId: "afforestation-ksa", titleAr: "الصيانة الزراعية", titleEn: "Agricultural Maintenance", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c9", slug: "urban-landscape", pillarId: "afforestation-ksa", titleAr: "تطوير المشهد الحضري", titleEn: "Urban Landscape Development", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] },
  { id: "c10", slug: "environmental-sustainability", pillarId: "afforestation-ksa", titleAr: "الاستدامة البيئية", titleEn: "Environmental Sustainability", descriptionAr: "", descriptionEn: "", seo: { title: "", description: "" }, geo: { schema: "", keywords: [], entityMentions: [], faqReady: false, knowledgeGraphReady: false }, subcategories: [], articleSlots: [], relatedServicesIds: [], relatedProjectsIds: [], relatedCategoriesIds: [], galleryStructure: [], faqs: [], tags: [] }
];
