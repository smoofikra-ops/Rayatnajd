import { mediaData } from "./media";

export const servicesData: Record<string, any> = {
  palms: {
    id: "palms",
    titleAr: "النخيل",
    titleEn: "Palms",
    subtitleAr: "تشكيلة واسعة من النخيل العربي للزينة والمشاريع",
    subtitleEn: "A wide variety of Arabian palms for decoration and projects",
    bannerImg: mediaData.products?.[0]?.url || "https://images.unsplash.com/photo-1595191833504-48615ff2786a?auto=format&fit=crop&q=80&w=2560",
    introAr: "نعتز بتوفير أفضل أنواع النخيل التي تناسب بيئتنا المحلية، لتضفي طابعاً أصيلاً وجمالاً فريداً على مشاريعكم.",
    introEn: "We are proud to provide the best palm types that suit our local environment, adding an authentic character and unique beauty to your projects.",
    importanceAr: "يعد النخيل رمزاً للأصالة في المملكة، ويتحمل الظروف المناخية القاسية، مما يجعله الخيار الأول لتشجير الطرق والقصور والمشاريع الكبرى.",
    importanceEn: "Palms are a symbol of authenticity in the Kingdom, tolerating harsh climatic conditions, making them the top choice for planting in roads, palaces, and major projects.",
    types: [
      { nameAr: "النخيل العربي", nameEn: "Arabian Palm", icon: "🌴", descAr: "أصالة وجمال يتحمل أقسى الظروف.", descEn: "Authenticity and beauty that withstands harsh conditions." },
      { nameAr: "نخيل واشنطونيا", nameEn: "Washingtonia Palm", icon: "🌴", descAr: "طول فارع يضيف هيبة للمداخل.", descEn: "Tall height adding prestige to entrances." },
      { nameAr: "النخل الملوكي", nameEn: "Royal Palm", icon: "🌴", descAr: "مظهر ملكي للقصور والمنتجعات.", descEn: "Royal appearance for palaces and resorts." },
      { nameAr: "نخيل جوز الهند", nameEn: "Coconut Palm", icon: "🌴", descAr: "لمسة استوائية مميزة.", descEn: "A distinct tropical touch." },
      { nameAr: "نقل النخيل", nameEn: "Palm Relocation", icon: "🚛", descAr: "نقل آمن لضمان حياة النخلة.", descEn: "Safe relocation to ensure the palm's life." },
      { nameAr: "زراعة النخيل", nameEn: "Palm Planting", icon: "🌱", descAr: "طرق علمية لزراعة ناجحة.", descEn: "Scientific methods for successful planting." }
    ],
    gallery: [
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374898/WhatsApp_Image_2026-07-04_at_11.52.05_PM_delyfy.jpg", nameAr: "نخل واشنطن", nameEn: "Washingtonia Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg", nameAr: "نخل ملكي", nameEn: "Royal Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374926/WhatsApp_Image_2026-07-04_at_11.56.59_PM_nivos5.jpg", nameAr: "نخل سيكس", nameEn: "Cycas Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374936/WhatsApp_Image_2026-07-04_at_11.57.01_PM_5_d0f0fu.jpg", nameAr: "نخل واشنطن", nameEn: "Washingtonia Palm" }
    ],
    projects: [
      { nameAr: "مشروع تشجير طريق الملك فهد", nameEn: "King Fahd Road Afforestation", img: mediaData.projects?.[0]?.url || "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca" },
      { nameAr: "تطوير واجهات القصور", nameEn: "Palace Facades Development", img: mediaData.projects?.[1]?.url || "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3" }
    ],
    faq: [
      { qAr: "هل تقدمون ضماناً على زراعة النخيل؟", qEn: "Do you offer a guarantee on palm planting?", aAr: "نعم، نقدم ضماناً على نمو النخلة بشرط التزام العميل ببرنامج الري والصيانة الموصى به.", aEn: "Yes, we provide a growth guarantee provided the client adheres to the recommended irrigation and maintenance program." },
      { qAr: "ما هو أفضل وقت لزراعة النخيل؟", qEn: "What is the best time to plant palms?", aAr: "يمكن زراعة النخيل في أغلب أوقات السنة، ولكن يفضل تجنب فترات البرد القارس أو الحر الشديد.", aEn: "Palms can be planted most times of the year, but it's best to avoid extreme cold or extreme heat periods." }
    ]
  },
  // Default fallback for other services
  trees: {
    id: "trees",
    titleAr: "الأشجار",
    titleEn: "Trees",
    subtitleAr: "أشجار متنوعة للطرق والحدائق والمشاريع الكبرى",
    subtitleEn: "Various trees for roads, gardens, and major projects",
    bannerImg: mediaData.products?.[1]?.url || "https://images.unsplash.com/photo-1444312645910-faa973a8d0c8?auto=format&fit=crop&q=80&w=2560",
    introAr: "نقدم مجموعة مختارة من الأشجار المحلية والمستوردة التي تلبي كافة الاحتياجات وتتحمل مناخ المملكة.",
    introEn: "We offer a selection of local and imported trees that meet all needs and withstand the Kingdom's climate.",
    importanceAr: "تساهم الأشجار في توفير الظل، تنقية الهواء، وتحسين جودة الحياة بما يتماشى مع رؤية المملكة 2030.",
    importanceEn: "Trees contribute to providing shade, purifying air, and improving the quality of life in line with Saudi Vision 2030.",
    types: [
      { nameAr: "أشجار الظل", nameEn: "Shade Trees", icon: "🌳", descAr: "لتبريد الأجواء.", descEn: "To cool the atmosphere." },
      { nameAr: "أشجار الزينة", nameEn: "Ornamental Trees", icon: "🌸", descAr: "لإضافة ألوان وجمال.", descEn: "To add colors and beauty." },
      { nameAr: "الأشجار المقاومة للجفاف", nameEn: "Drought Resistant Trees", icon: "🌵", descAr: "لترشيد استهلاك المياه.", descEn: "To rationalize water consumption." },
      { nameAr: "الأشجار المحلية", nameEn: "Native Trees", icon: "🌿", descAr: "مثل السدر والسمر.", descEn: "Like Ziziphus and Samar." }
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", nameAr: "أشجار النيم", nameEn: "Neem Trees" },
      { url: "https://images.unsplash.com/photo-1542314831-c6a4d14eff3e?auto=format&fit=crop&q=80&w=800", nameAr: "أشجار السدر", nameEn: "Ziziphus Trees" },
    ],
    projects: [],
    faq: []
  }
};

export const getServiceData = (id: string) => {
  return servicesData[id] || {
    id,
    titleAr: "خدمات رايات نجد",
    titleEn: "Rayat Najd Services",
    subtitleAr: "حلول بيئية مبتكرة",
    subtitleEn: "Innovative environmental solutions",
    bannerImg: mediaData.hero[1].url,
    introAr: "نقدم أفضل الخدمات للارتقاء ببيئتنا وتحقيق الاستدامة.",
    introEn: "We offer the best services to elevate our environment and achieve sustainability.",
    importanceAr: "نلتزم بأعلى معايير الجودة لضمان استدامة المشاريع ونجاحها.",
    importanceEn: "We are committed to the highest quality standards to ensure the sustainability and success of projects.",
    types: [
      { nameAr: "خدمات متكاملة", nameEn: "Integrated Services", icon: "✨", descAr: "حلول تناسب كافة الاحتياجات.", descEn: "Solutions for all needs." }
    ],
    gallery: [],
    projects: [],
    faq: []
  };
};
