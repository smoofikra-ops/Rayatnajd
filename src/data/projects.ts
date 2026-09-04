import { Project, ProjectCategory, ProjectMediaStatus } from "../types/project";
import { hydrateProjectWithMedia, hydrateProjectsWithMedia } from "../lib/bunnyProjectMedia";
export type { Project, ProjectCategory, ProjectStatus, ProjectMedia, ProjectStat, ProjectMediaStatus } from "../types/project";

const BUNNY_BASE = "https://cdn.rayatnajd.com";

export const projectsData: Project[] = [
  {
    id: "proj-01",
    slug: "saiysad-national-park-taif",
    nameAr: "مشروع تشجير وتأهيل منتزه سيسد الوطني بالطائف",
    nameEn: "Saiysad National Park Afforestation & Rehabilitation Project - Taif",
    shortDescriptionAr: "زراعة وتأهيل مساحات واسعة من منتزه سيسد الوطني بالنباتات المحلية الجبلية وشبكات الري الحديثة.",
    shortDescriptionEn: "Afforestation and ecological rehabilitation in Saiysad National Park with native trees and irrigation.",
    descriptionAr: "مشروع تشجير وتأهيل بيئي شامل لمنتزه سيسد الوطني بالطائف بالتعاون مع وزارة البيئة والمياه والزراعة، يركز على استعادة التنوع الحيوي وزراعة الأشجار المحلية المتكيفة وتأسيس شبكات ري مستدامة.",
    descriptionEn: "Comprehensive afforestation and ecological rehabilitation project for Saiysad National Park in Taif, focusing on native species restoration and sustainable irrigation.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "الطائف، منطقة مكة المكرمة",
    locationEn: "Taif, Makkah Region",
    clientAr: "وزارة البيئة والمياه والزراعة",
    clientEn: "Ministry of Environment, Water and Agriculture",
    year: "2024",
    status: "ongoing",
    featured: true,
    featuredOrder: 2,
    bunnyFolder: "03-projects/saiysad-national-park-taif",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "المساحة المستهدفة", labelEn: "Target Area", value: "500,000 م²" },
      { labelAr: "الأنواع المغروسة", labelEn: "Target Species", value: "أشجار جبلية ومحلية" }
    ]
  },
  {
    id: "proj-02",
    slug: "university-of-khulais",
    nameAr: "مشروع تشجير وتطوير المساحات الخضراء بجامعة خليص",
    nameEn: "University of Khulais Afforestation & Green Landscaping Project",
    shortDescriptionAr: "تطوير الحرم الجامعي وتنسيق المساحات الخارجية وزراعة أشجار الظل المحلية.",
    shortDescriptionEn: "Campus greening, shade tree planting, and irrigation across Khulais University.",
    descriptionAr: "مشروع متكامل لتشجير وتنسيق الحرم الجامعي بمحافظة خليص لتعزيز المشهد البيئي والجمالي وتوفير مسطحات خضراء مستدامة تعتمد على أنظمة الري المرشدة.",
    descriptionEn: "Integrated campus afforestation and landscaping in Khulais Governorate to enhance biodiversity and create sustainable shaded green corridors.",
    category: "landscape",
    categoryNameAr: "المشهد الحضري والحدائق",
    categoryNameEn: "Urban Landscape",
    locationAr: "محافظة خليص، منطقة مكة المكرمة",
    locationEn: "Khulais Governorate, Makkah Region",
    clientAr: "جامعة جدة - فرع خليص",
    clientEn: "University of Jeddah - Khulais Campus",
    year: "2023",
    status: "completed",
    featured: true,
    featuredOrder: 2,
    bunnyFolder: "03-projects/university-of-khulais",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "عدد الأشجار", labelEn: "Trees Planted", value: "+15,000" },
      { labelAr: "شبكة الري", labelEn: "Irrigation", value: "تنقيط ذكي" }
    ]
  },
  {
    id: "proj-03",
    slug: "makkah-desalination-plant",
    nameAr: "مشروع تشجير وتشغيل المسطحات الخضراء بمحطة تحلية مكة المكرمة",
    nameEn: "Makkah Desalination Plant Afforestation & Landscape Project",
    shortDescriptionAr: "تنفيذ أحزمة خضراء مقاومة للملوحة وتشجير مرافق المحطة وصيانتها.",
    shortDescriptionEn: "Salinity-resistant green belt and facility landscape maintenance at Makkah Desalination Plant.",
    descriptionAr: "مشروع إنشاء وتأهيل الأحزمة الخضراء المحيطة بمحطة تحلية مكة المكرمة باستخدام نباتات متكيفة مع الأجواء الحارة والرطبة، مع خدمات الصيانة والتشغيل الدورية.",
    descriptionEn: "Creation and maintenance of protective green belts around Makkah Desalination Plant using resilient native species.",
    category: "maintenance",
    categoryNameAr: "الصيانة والتشغيل",
    categoryNameEn: "Maintenance & Operations",
    locationAr: "مكة المكرمة",
    locationEn: "Makkah Al-Mukarramah",
    clientAr: "الهيئة السعودية للمياه",
    clientEn: "Saudi Water Authority",
    year: "2023",
    status: "completed",
    featured: true,
    featuredOrder: 3,
    bunnyFolder: "03-projects/makkah-desalination-plant",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "طول الحزام الأخضر", labelEn: "Green Belt Length", value: "3.5 كم" },
      { labelAr: "نوع النباتات", labelEn: "Plant Species", value: "مقاومة للملوحة" }
    ]
  },
  {
    id: "proj-04",
    slug: "al-shuqaiq-desalination-plant",
    nameAr: "مشروع تشجير وتشغيل محطة تحلية الشقيق",
    nameEn: "Al-Shuqaiq Desalination Plant Afforestation & Maintenance",
    shortDescriptionAr: "تشجير وتثبيت مصدات الرياح وتنسيق المساحات الخضراء الساحلية بمحطة الشقيق.",
    shortDescriptionEn: "Coastal greening, windbreak planting, and operational landscape management at Al-Shuqaiq.",
    descriptionAr: "مشروع بيئي لحماية المنشآت الحيوية وتنمية الغطاء النباتي الساحلي بمحطة تحلية الشقيق في منطقة جازان، وتثبيت التربة بمصدات رياح خضراء مستدامة.",
    descriptionEn: "Coastal afforestation and windbreak green barriers at Al-Shuqaiq Desalination Plant in Jazan Region.",
    category: "maintenance",
    categoryNameAr: "الصيانة والتشغيل",
    categoryNameEn: "Maintenance & Operations",
    locationAr: "الشقيق، منطقة جازان",
    locationEn: "Al-Shuqaiq, Jazan Region",
    clientAr: "الهيئة السعودية للمياه",
    clientEn: "Saudi Water Authority",
    year: "2024",
    status: "ongoing",
    featured: true,
    featuredOrder: 4,
    bunnyFolder: "03-projects/al-shuqaiq-desalination-plant",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "الموقع", labelEn: "Location", value: "ساحل البحر الأحمر" },
      { labelAr: "النظام", labelEn: "System", value: "ري بالتنقيط المعالج" }
    ]
  },
  {
    id: "proj-05",
    slug: "al-tumayrat-al-jouf",
    nameAr: "مشروع تشجير وتنمية الغطاء النباتي بالطميرات بالجوف",
    nameEn: "Al-Tumayrat Afforestation & Vegetation Development - Al-Jouf",
    shortDescriptionAr: "زراعة النباتات البرية والأشجار الصحراوية المتكيفة مع بيئة الجوف ومكافحة التصحر.",
    shortDescriptionEn: "Desert vegetation restoration and cold-hardy native tree planting in Al-Tumayrat, Al-Jouf.",
    descriptionAr: "مشروع وطني لاستعادة الغطاء النباتي الطبيعي في منطقة الطميرات بالجوف، شمل زراعة أنواع برية مستوطنة مثل الرمث والغضا والطلح لمكافحة زحف الرمال.",
    descriptionEn: "Ecological restoration project in Al-Tumayrat, Al-Jouf, planting native cold-hardy desert shrubs and trees to combat desertification.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "الطميرات، منطقة الجوف",
    locationEn: "Al-Tumayrat, Al-Jouf Region",
    clientAr: "وزارة البيئة والمياه والزراعة",
    clientEn: "Ministry of Environment, Water and Agriculture",
    year: "2023",
    status: "completed",
    featured: true,
    featuredOrder: 5,
    bunnyFolder: "03-projects/al-tumayrat-al-jouf",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "الشتلات المغروسة", labelEn: "Seedlings", value: "+80,000" },
      { labelAr: "النسبة المحققة", labelEn: "Success Rate", value: "94%" }
    ]
  },
  {
    id: "proj-06",
    slug: "umm-al-hamam-al-asyah",
    nameAr: "مشروع تشجير روضة أم الحمام بمحافظة الأسياح",
    nameEn: "Umm Al-Hamam Rawdah Afforestation Project - Al-Asyah",
    shortDescriptionAr: "إعادة تأهيل روضة أم الحمام بالأنواع الفطرية المستوطنة وحصاد مياه السيول.",
    shortDescriptionEn: "Ecological restoration of Umm Al-Hamam basin with native Acacia and Ziziphus species.",
    descriptionAr: "مشروع إعادة تأهيل النظام البيئي لروضة أم الحمام بمحافظة الأسياح في منطقة القصيم عبر زراعة آلاف أشجار السدر والطلح البري وتطبيق تقنيات حصاد مياه الأمطار.",
    descriptionEn: "Ecological restoration of Umm Al-Hamam Rawdah in Al-Asyah, Qassim Region, utilizing native afforestation and rainwater harvesting techniques.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "الأسياح، منطقة القصيم",
    locationEn: "Al-Asyah, Qassim Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2023",
    status: "completed",
    featured: true,
    featuredOrder: 6,
    bunnyFolder: "03-projects/umm-al-hamam-al-asyah",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "الأشجار المحلية", labelEn: "Native Trees", value: "+100,000" },
      { labelAr: "الأنظمة المطبقة", labelEn: "Implemented", value: "حصاد مياه الأمطار" }
    ]
  },
  {
    id: "proj-07",
    slug: "umm-shalhah-al-asyah",
    nameAr: "مشروع تشجير وتأهيل محمية أم شلحة بالأسياح",
    nameEn: "Umm Shalhah Afforestation & Ecological Reserve - Al-Asyah",
    shortDescriptionAr: "زراعة أكثر من 150,000 شجرة برية وإنشاء منظومة حصاد مياه الأمطار والري الذكي.",
    shortDescriptionEn: "Planting over 150,000 native trees with smart rainwater harvesting and drip irrigation systems.",
    descriptionAr: "مشروع بيئي رائد يهدف إلى استعادة الغطاء النباتي في محمية أم شلحة بمحافظة الأسياح من خلال زراعة أكثر من 150 ألف شجرة برية مستوطنة وتطبيق أحدث أنظمة الري بالطاقة الشمسية وحصاد مياه الأمطار لمكافحة التصحر.",
    descriptionEn: "Pioneering environmental project restoring vegetation cover in Umm Shalhah Reserve (Al-Asyah) with 150k+ native trees and solar-powered irrigation.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "الأسياح، منطقة القصيم",
    locationEn: "Al-Asyah, Qassim Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2024",
    status: "ongoing",
    featured: false,
    bunnyFolder: "03-projects/environmental-sustainability/umm-shalfah-afforestation",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "عدد الأشجار", labelEn: "Total Trees", value: "150,000+" },
      { labelAr: "معدل البقاء", labelEn: "Survival Rate", value: "95%" },
      { labelAr: "طاقة الري", labelEn: "Irrigation Power", value: "طاقة شمسية 100%" }
    ]
  },
  {
    id: "proj-08",
    slug: "al-owaisi-care-maintenance",
    nameAr: "مشروع رعاية وصيانة مشاريع التشجير بالعويصي",
    nameEn: "Al-Owaisi Afforestation Care & Landscape Maintenance",
    shortDescriptionAr: "أعمال الرعاية والري الدوري والتقليم الوقائي وحماية الشتلات بالعويصي.",
    shortDescriptionEn: "Comprehensive plant care, irrigation monitoring, and protection of seedlings at Al-Owaisi.",
    descriptionAr: "مشروع متخصص في استدامة ورعاية مواقع التشجير بالعويصي في القصيم لضمان نمو واستقرار الأشجار المغروسة ومتابعة خطوط الري والحماية ضد العوامل المناخية.",
    descriptionEn: "Long-term maintenance and plant healthcare operations for Al-Owaisi afforestation project sites in Qassim Region.",
    category: "maintenance",
    categoryNameAr: "الصيانة والتشغيل",
    categoryNameEn: "Maintenance & Operations",
    locationAr: "العويصي، منطقة القصيم",
    locationEn: "Al-Owaisi, Qassim Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2024",
    status: "ongoing",
    featured: false,
    bunnyFolder: "03-projects/al-owaisi-care-maintenance",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "مدة العقد", labelEn: "Duration", value: "36 شهراً" },
      { labelAr: "فريق العمل", labelEn: "Field Team", value: "مهندسون وفنيون متخصصون" }
    ]
  },
  {
    id: "proj-09",
    slug: "umm-al-hamam-umm-shalhah-care-maintenance",
    nameAr: "مشروع رعاية وصيانة مواقع تشجير أم الحمام وأم شلحة",
    nameEn: "Umm Al-Hamam & Umm Shalhah Joint Care & Maintenance Project",
    shortDescriptionAr: "إدارة واستدامة مواقع التشجير المشتركة وضمان أعلى نسب نجاح للأشجار.",
    shortDescriptionEn: "Long-term maintenance, survival rate optimization, and irrigation management across joint sites.",
    descriptionAr: "مشروع الرعاية والصيانة الميدانية الشاملة لمواقع التشجير في روضة أم الحمام ومحمية أم شلحة بالأسياح لحماية الغطاء النباتي واستدامته.",
    descriptionEn: "Comprehensive field care and landscape maintenance across Umm Al-Hamam and Umm Shalhah afforestation sites.",
    category: "maintenance",
    categoryNameAr: "الصيانة والتشغيل",
    categoryNameEn: "Maintenance & Operations",
    locationAr: "الأسياح، منطقة القصيم",
    locationEn: "Al-Asyah, Qassim Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2024",
    status: "ongoing",
    featured: false,
    bunnyFolder: "03-projects/umm-al-hamam-umm-shalhah-care-maintenance",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "نطاق الصيانة", labelEn: "Maintenance Scope", value: "شامل لجميع المواقع" },
      { labelAr: "نسبة النجاح المستهدفة", labelEn: "Target Survival", value: "95%+" }
    ]
  },
  {
    id: "proj-10",
    slug: "al-jumum-afforestation",
    nameAr: "مشروع تشجير وتأهيل محافظة الجموم",
    nameEn: "Al-Jumum Afforestation & Environmental Greening Project",
    shortDescriptionAr: "تشجير المناطق المحيطة بمحافظة الجموم وزراعة مصدات رياح وأشجار الظل.",
    shortDescriptionEn: "Afforestation, green barrier planting, and native tree establishment in Al-Jumum governorate.",
    descriptionAr: "مشروع تشجير متكامل في محافظة الجموم بمنطقة مكة المكرمة يستهدف مكافحة التصحر وزيادة المساحات الخضراء وزراعة الأنواع البرية المحلية الملائمة لطبيعة المنطقة.",
    descriptionEn: "Integrated afforestation initiative in Al-Jumum governorate planting native trees and establishing ecological windbreaks.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "محافظة الجموم، منطقة مكة المكرمة",
    locationEn: "Al-Jumum Governorate, Makkah Region",
    clientAr: "وزارة البيئة والمياه والزراعة",
    clientEn: "Ministry of Environment, Water and Agriculture",
    year: "2023",
    status: "completed",
    featured: false,
    bunnyFolder: "03-projects/al-jumum-afforestation",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "عدد الشتلات", labelEn: "Seedlings", value: "+50,000" },
      { labelAr: "الهدف", labelEn: "Objective", value: "مكافحة التصحر" }
    ]
  },
  {
    id: "proj-11",
    slug: "khulais-afforestation",
    nameAr: "مشروع تشجير وتنمية أودية محافظة خليص",
    nameEn: "Khulais Valleys Afforestation & Vegetation Enhancement",
    shortDescriptionAr: "استزراع بطون الأودية والمناطق التابعة لخليص بالنباتات البرية المقاومة للجفاف.",
    shortDescriptionEn: "Valley revegetation and drought-tolerant native tree cultivation throughout Khulais.",
    descriptionAr: "مشروع إعادة تأهيل الغطاء النباتي الطبيعي في بطون أودية محافظة خليص بمنطقة مكة المكرمة بالاعتماد على مياه الأمطار والأشجار الفطرية المقاومة للظروف المناخية القاسية.",
    descriptionEn: "Revegetation of natural valley basins in Khulais Governorate using drought-hardy indigenous species.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "محافظة خليص، منطقة مكة المكرمة",
    locationEn: "Khulais Governorate, Makkah Region",
    clientAr: "وزارة البيئة والمياه والزراعة",
    clientEn: "Ministry of Environment, Water and Agriculture",
    year: "2023",
    status: "completed",
    featured: false,
    bunnyFolder: "03-projects/khulais-afforestation",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "الموقع", labelEn: "Location", value: "بطون أودية خليص" },
      { labelAr: "نوع الأشجار", labelEn: "Tree Types", value: "سمر وطلح وسدر" }
    ]
  },
  {
    id: "proj-12",
    slug: "al-nafthah-afforestation",
    nameAr: "مشروع تشجير وتأهيل موقع النفثة",
    nameEn: "Al-Nafthah Afforestation & Ecological Development",
    shortDescriptionAr: "تشجير موقع النفثة بالأنواع البرية المناسبة للبيئة الرعوية وحماية التربة.",
    shortDescriptionEn: "Afforestation and soil conservation using endemic pastoral species at Al-Nafthah.",
    descriptionAr: "مشروع بيئي يهدف إلى تنمية المراعي الطبيعية وتثبيت التربة في موقع النفثة بمنطقة القصيم وزراعة الأشجار والشجيرات الرعوية الأصلية.",
    descriptionEn: "Pastoral landscape improvement and soil erosion control through native revegetation at Al-Nafthah.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "النفثة، منطقة القصيم",
    locationEn: "Al-Nafthah, Qassim Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2024",
    status: "ongoing",
    featured: false,
    bunnyFolder: "03-projects/al-nafthah-afforestation",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "النوع المستهدف", labelEn: "Target Type", value: "نباتات رعوية برية" },
      { labelAr: "الهدف البيئي", labelEn: "Goal", value: "تثبيت التربة" }
    ]
  },
  {
    id: "proj-13",
    slug: "al-aflaj-afforestation",
    nameAr: "مشروع تشجير وتأهيل روضات محافظة الأفلاج",
    nameEn: "Al-Aflaj Afforestation & Ecological Restoration Project",
    shortDescriptionAr: "زراعة أشجار السدر والطلح والغاف الرمادي وحصاد مياه الأمطار بروضات الأفلاج.",
    shortDescriptionEn: "Ecological restoration of Al-Aflaj natural depressions using native Acacia and Prosopis species.",
    descriptionAr: "مشروع استصلاح وتأهيل روضات ومواقع محافظة الأفلاج في منطقة الرياض بالتعاون مع المركز الوطني للغطاء النباتي لتعزيز التنوع الأحيائي ومكافحة التصحر.",
    descriptionEn: "Restoration of natural depressions and vegetation sanctuaries in Al-Aflaj Governorate, planting endemic desert tree species.",
    category: "afforestation",
    categoryNameAr: "استدامة وتشجير صحراوي",
    categoryNameEn: "Afforestation & Sustainability",
    locationAr: "محافظة الأفلاج، منطقة الرياض",
    locationEn: "Al-Aflaj Governorate, Riyadh Region",
    clientAr: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر",
    clientEn: "National Center for Vegetation Cover & Combating Desertification",
    year: "2023",
    status: "completed",
    featured: false,
    bunnyFolder: "03-projects/al-aflaj-afforestation",
    primaryImage: "",
    heroImage: "",
    mediaStatus: "awaiting-bunny-sync",
    gallery: [],
    videos: [],
    stats: [
      { labelAr: "الموقع", labelEn: "Location", value: "محافظة الأفلاج" },
      { labelAr: "الأنواع الرئيسية", labelEn: "Key Species", value: "سدر، طلح، غاف" }
    ]
  },
  {
    id: "proj-14",
    slug: "montjaa-othaib",
    nameAr: "منتجع عذيب - الرياض - ديراب",
    nameEn: "Othaib Resort - Riyadh, Dirab",
    shortDescriptionAr: "زراعة نخل واشنطن عربي - توريد وتركيب.",
    shortDescriptionEn: "Planting of Washingtonia and Arab palms - supply and installation.",
    descriptionAr: "مشروع متكامل لتوريد وتركيب وزراعة نخيل واشنطن ونخيل عربي لمنتجع عذيب في منطقة ديراب بالرياض، وفق أعلى المعايير الهندسية والزراعية المعتمدة لدى رايات نجد.",
    descriptionEn: "Comprehensive supply, installation, and planting of Washingtonia and Arab palms for Othaib Resort in Dirab, Riyadh, executed to Rayat Najd's highest horticultural standards.",
    category: "palms",
    categoryNameAr: "توريد وزراعة النخيل",
    categoryNameEn: "Palms Supply & Planting",
    locationAr: "الرياض - ديراب",
    locationEn: "Riyadh - Dirab",
    clientAr: "منتجع عذيب",
    clientEn: "Othaib Resort",
    year: "2024",
    status: "completed",
    featured: true,
    featuredOrder: 1,
    bunnyFolder: "03-projects/montjaa-othaib-dirab",
    primaryImage: `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery-48.webp`,
    heroImage: `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery-48.webp`,
    mediaStatus: "verified-project-media",
    gallery: [
      {
        type: "image",
        url: `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery-48.webp`,
        captionAr: "نخيل واشنطن في منتجع عذيب بديراب",
        captionEn: "Washingtonia palms at Othaib Resort, Dirab",
        isPrimary: true
      },
      {
        type: "image",
        url: `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery-50.webp`,
        captionAr: "أعمال زراعة وتنسيق النخيل",
        captionEn: "Palm planting and landscaping works"
      }
    ],
    videos: [
      {
        type: "video",
        url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/montjaa-othaib-dirab/montjaa-othaib-dirab-video.mp4",
        thumbnailUrl: `${BUNNY_BASE}/04-products/palm-trees/rayat-najd-palm-tree-nursery-48.webp`,
        captionAr: "فيديو توثيقي لأعمال توريد وزراعة نخيل واشنطن وعربي بمنتجع عذيب بديراب",
        captionEn: "Video documenting Washingtonia and Arab palm installation at Othaib Resort, Dirab",
        isPrimary: true
      }
    ],
    stats: [
      { labelAr: "نوع الأعمال", labelEn: "Scope", value: "توريد وتركيب وزراعة" },
      { labelAr: "نوع النخيل", labelEn: "Palm Variety", value: "نخل واشنطن وعربي" },
      { labelAr: "الموقع", labelEn: "Location", value: "الرياض - ديراب" }
    ]
  }
];

// Helper Functions with dynamic Bunny Media Resolution
export const getFeaturedProjects = (): Project[] => {
  const featured = projectsData
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
  return hydrateProjectsWithMedia(featured);
};

export const getAllProjects = (): Project[] => {
  return hydrateProjectsWithMedia(projectsData);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return undefined;
  return hydrateProjectWithMedia(project);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  const filtered = projectsData.filter((p) => p.category === category);
  return hydrateProjectsWithMedia(filtered);
};

export const getProjectCategories = (): { key: ProjectCategory | "all"; nameAr: string; nameEn: string }[] => {
  return [
    { key: "all", nameAr: "جميع المشاريع", nameEn: "All Projects" },
    { key: "afforestation", nameAr: "استدامة وتشجير صحراوي", nameEn: "Afforestation" },
    { key: "palms", nameAr: "توريد وزراعة النخيل", nameEn: "Palms Supply" },
    { key: "relocation", nameAr: "نقل الأشجار المعمرة", nameEn: "Tree Relocation" },
    { key: "landscape", nameAr: "المشهد الحضري والحدائق", nameEn: "Urban Landscape" },
    { key: "native", nameAr: "النباتات المحلية والمشاتل", nameEn: "Native Flora" },
    { key: "irrigation", nameAr: "شبكات الري الذكي", nameEn: "Smart Irrigation" },
    { key: "maintenance", nameAr: "الصيانة والتشغيل", nameEn: "Maintenance" },
  ];
};
