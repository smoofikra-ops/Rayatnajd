import { servicesData } from "../data/servicesData";
import { getAllProjects } from "../data/projects";
import { BLOG_POSTS } from "../data/blogData";
import { categories, firstPillar, clusters } from "../data/knowledgeArchitecture";
import { palmSupplySaudiArabia } from "../data/articles/palmSupplySaudiArabia";
import { bestPalmsForProjectsKsa } from "../data/articles/bestPalmsForProjectsKsa";
import { washingtoniaSupplyRiyadh } from "../data/articles/washingtoniaSupplyRiyadh";

export interface RouteSeoData {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string;
  ogType?: 'website' | 'article';
  robots?: string;
  h1: string;
  leadParagraph: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  jsonLd: Record<string, any>;
  initialHtml: string;
}

const DEFAULT_IMAGE = "https://www.rayatnajd.com/og/rayat-najd-social-share.jpg";

function buildBreadcrumbLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://www.rayatnajd.com${item.url.startsWith('/') ? '' : '/'}${item.url}`
    }))
  };
}

function buildHtmlShell({
  title,
  h1,
  leadParagraph,
  breadcrumbs = [],
  extraHtml = ""
}: {
  title: string;
  h1: string;
  leadParagraph: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  extraHtml?: string;
}) {
  const breadcrumbHtml = breadcrumbs.length > 0
    ? `<nav aria-label="breadcrumb" class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex flex-wrap gap-2 items-center">
        ${breadcrumbs.map((b, i) => `
          ${i > 0 ? '<span class="text-gray-300 dark:text-gray-600">/</span>' : ''}
          <a href="${b.url}" class="hover:underline text-gray-600 dark:text-gray-300 font-medium">${b.name}</a>
        `).join("")}
       </nav>`
    : "";

  return `
    <div class="pre-rendered-view" dir="rtl" style="font-family: system-ui, -apple-system, sans-serif; color: #1a202c; background-color: #fcfdfd; min-height: 100vh;">
      <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <a href="/" style="font-size: 1.25rem; font-weight: 800; color: #166534; text-decoration: none;">رايات نجد للتشجير</a>
          <nav style="display: flex; gap: 1.25rem; font-size: 0.875rem; flex-wrap: wrap;">
            <a href="/" style="color: #4a5568; text-decoration: none;">الرئيسية</a>
            <a href="/about" style="color: #4a5568; text-decoration: none;">من نحن</a>
            <a href="/#services" style="color: #4a5568; text-decoration: none;">خدماتنا</a>
            <a href="/projects" style="color: #4a5568; text-decoration: none;">مشاريعنا</a>
            <a href="/knowledge" style="color: #4a5568; text-decoration: none;">مركز المعرفة</a>
            <a href="/blog" style="color: #4a5568; text-decoration: none;">المدونة</a>
            <a href="/contact" style="color: #4a5568; text-decoration: none;">اتصل بنا</a>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem;">
        ${breadcrumbHtml}
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #166534; margin-bottom: 1.25rem; line-height: 1.3;">${h1}</h1>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4a5568; margin-bottom: 2rem;">${leadParagraph}</p>
        ${extraHtml}
      </main>
    </div>
  `;
}

export function getAllRoutes(): Map<string, RouteSeoData> {
  const routes = new Map<string, RouteSeoData>();

  // 1. Home Page
  routes.set("/", {
    path: "/",
    title: "رايات نجد | تشجير وتنسيق حدائق وتوريد الأشجار والنخيل بالرياض",
    description: "شركة رايات نجد للتشجير والاستدامة البيئية بالرياض. نقدم حلول التشجير المتكاملة، وتوريد الأشجار والنخيل، وتنفيذ وتنسيق المشاريع الزراعية والمشهد الحضري في السعودية.",
    canonical: "https://www.rayatnajd.com/",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "رايات نجد للتشجير والاستدامة البيئية بالمملكة العربية السعودية",
    leadParagraph: "نزرع المستقبل ونصنع الاستدامة. رواد التشجير، وتوريد النخيل والأشجار المحلية، وشبكات الري الذكية وتنسيق المشهد الحضري للمشاريع الكبرى والجهات الحكومية والخاصة بالرياض ومناطق المملكة.",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.rayatnajd.com/#organization",
          "name": "رايات نجد للتشجير والاستدامة البيئية",
          "alternateName": "Rayat Najd",
          "url": "https://www.rayatnajd.com/",
          "logo": "https://cdn.rayatnajd.com/01-brand/logo/rayatnajd-logo.png",
          "telephone": "+966557555716",
          "email": "info@rayatnajd.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "الرياض",
            "addressCountry": "SA"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.rayatnajd.com/#website",
          "url": "https://www.rayatnajd.com/",
          "name": "رايات نجد للتشجير والاستدامة البيئية",
          "inLanguage": "ar"
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "رايات نجد للتشجير والاستدامة البيئية",
      h1: "رايات نجد للتشجير والاستدامة البيئية",
      leadParagraph: "شريككم الاستراتيجي لتنفيذ مشاريع التشجير الكبرى، توريد النخيل والأشجار البرية، وهندسة شبكات الري الذكية بما يتوافق مع رؤية المملكة 2030 ومبادرة السعودية الخضراء.",
      extraHtml: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/service/palms" style="color: inherit; text-decoration: none;">توريد النخيل</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">توريد وزراعة ونقل النخيل العربي ونخيل الواشنطونيا للمشاريع والحدائق العامة والميادين.</p>
          </div>
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/service/trees" style="color: inherit; text-decoration: none;">الأشجار المحلية</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">توريد الأشجار البرية المقاومة للجفاف مثل السدر والسمر والغاف والطلح لتنمية الغطاء النباتي.</p>
          </div>
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/projects" style="color: inherit; text-decoration: none;">المشاريع المنفذة</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">سجل حافل بالمشاريع الوطنية في الطائف، مكة، الشقيق، الجوف، والأسياح وغيرها.</p>
          </div>
        </div>
      `
    })
  });

  // 2. About Us
  routes.set("/about", {
    path: "/about",
    title: "من نحن | رايات نجد للتشجير والاستدامة البيئية",
    description: "تعرف على شركة رايات نجد للتشجير، رؤيتنا، رسالتنا، وخبراتنا الواسعة في تنفيذ مشاريع التشجير والمشهد الحضري ومبادرات السعودية الخضراء.",
    canonical: "https://www.rayatnajd.com/about",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "من نحن | رايات نجد للتشجير والاستدامة البيئية",
    leadParagraph: "شركة رائدة في مجال التشجير والمقاولات الزراعية والاستدامة البيئية بالمملكة العربية السعودية، نساهم في تحقيق مستهدفات رؤية 2030 من خلال زيادة المسطحات الخضراء والارتقاء بالمشهد الحضري.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "من نحن", url: "/about" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "من نحن", url: "/about" }
        ]),
        {
          "@type": "AboutPage",
          "@id": "https://www.rayatnajd.com/about#webpage",
          "url": "https://www.rayatnajd.com/about",
          "name": "من نحن | رايات نجد",
          "description": "تعرف على شركة رايات نجد للتشجير، رؤيتنا ورسالتنا وقيمنا في الاستدامة البيئية."
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "من نحن | رايات نجد للتشجير",
      h1: "من نحن | رايات نجد للتشجير والاستدامة البيئية",
      leadParagraph: "تأسست رايات نجد برؤية طموحة لتقديم حلول التشجير المتكاملة والمبتكرة التي تخدم البيئة والمجتمع. نلتزم بأعلى معايير الجودة والاستدامة في جميع مشاريعنا بالمملكة.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "من نحن", url: "/about" }
      ],
      extraHtml: `
        <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 2rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #166534; margin-bottom: 1rem;">رؤيتنا ورسالتنا</h2>
          <p style="color: #4a5568; line-height: 1.8; margin-bottom: 1rem;">أن نكون الخيار الأول والوجهة الموثوقة للمشاريع الحكومية والخاصة في قطاع التشجير والغطاء النباتي، عبر توفير أفضل الممارسات الزراعية وحلول الري الموفرة للمياه.</p>
          <p style="color: #4a5568; line-height: 1.8;">نعمل انطلاقاً من مشاتلنا في الرياض لخدمة مختلف مدن المملكة بأسطول نقل متخصص وفريق هندسي وبيئي متكامل.</p>
        </div>
      `
    })
  });

  // 3. Contact Us
  routes.set("/contact", {
    path: "/contact",
    title: "تواصل معنا | رايات نجد للتشجير بالرياض",
    description: "تواصل مع فريق رايات نجد للاستشارات الزراعية، طلبات توريد الأشجار والنخيل، وتنفيذ مشاريع التشجير واللاندسكيب في السعودية.",
    canonical: "https://www.rayatnajd.com/contact",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "تواصل مع رايات نجد للتشجير والاستدامة البيئية",
    leadParagraph: "يسعدنا الرد على استفساراتكم وتقديم الدعم الفني والاستشارات البيئية لجميع مشاريعكم. اتصل بنا عبر الهاتف أو البريد الإلكتروني أو الواتساب.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "تواصل معنا", url: "/contact" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "تواصل معنا", url: "/contact" }
        ]),
        {
          "@type": "ContactPage",
          "@id": "https://www.rayatnajd.com/contact#webpage",
          "url": "https://www.rayatnajd.com/contact",
          "name": "تواصل معنا | رايات نجد",
          "mainEntity": {
            "@type": "Organization",
            "name": "رايات نجد للتشجير",
            "telephone": "+966557555716",
            "email": "info@rayatnajd.com"
          }
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "تواصل معنا | رايات نجد",
      h1: "تواصل معنا",
      leadParagraph: "فريقنا المتخصص جاهز لمناقشة متطلبات مشروعك، تقديم عروض الأسعار، وترتيب الزيارات الميدانية.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "تواصل معنا", url: "/contact" }
      ],
      extraHtml: `
        <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 1rem;">بيانات التواصل المباشر</h2>
          <p style="margin-bottom: 0.75rem; color: #4a5568;"><strong>الهاتف والواتساب:</strong> <span dir="ltr">0557555716</span></p>
          <p style="margin-bottom: 0.75rem; color: #4a5568;"><strong>البريد الإلكتروني:</strong> info@rayatnajd.com</p>
          <p style="margin-bottom: 0.75rem; color: #4a5568;"><strong>الموقع:</strong> الرياض، المملكة العربية السعودية</p>
        </div>
      `
    })
  });

  // 4. Services (9 Services)
  const serviceKeys = Object.keys(servicesData);
  for (const key of serviceKeys) {
    const s = servicesData[key];
    const path = `/service/${key}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${s.titleAr} بالرياض والسعودية | خدمات رايات نجد`;
    const description = s.introAr || s.subtitleAr;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: s.bannerImg || DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: s.titleAr,
      leadParagraph: s.introAr || s.subtitleAr,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "خدماتنا", url: "/#services" },
        { name: s.titleAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "خدماتنا", url: "/#services" },
            { name: s.titleAr, url: path }
          ]),
          {
            "@type": "Service",
            "@id": `${canonical}#service`,
            "name": s.titleAr,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "رايات نجد للتشجير والاستدامة البيئية",
              "url": "https://www.rayatnajd.com/"
            },
            "areaServed": {
              "@type": "Country",
              "name": "المملكة العربية السعودية"
            }
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: s.titleAr,
        leadParagraph: s.introAr || s.subtitleAr,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "خدماتنا", url: "/#services" },
          { name: s.titleAr, url: path }
        ],
        extraHtml: `
          <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
            <h2 style="font-size: 1.5rem; font-weight: 700; color: #166534; margin-bottom: 1rem;">أهمية الخدمة ومميزاتها</h2>
            <p style="color: #4a5568; line-height: 1.8; margin-bottom: 1.5rem;">${s.importanceAr || ""}</p>
            <div style="margin-top: 1.5rem;">
              <a href="/contact" style="display: inline-block; background: #166534; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 700;">اطلب استشارة أو عرض سعر الآن</a>
            </div>
          </div>
        `
      })
    });
  }

  // 5. Projects Listing
  routes.set("/projects", {
    path: "/projects",
    title: "مشاريعنا المنفذة | رايات نجد للتشجير والاستدامة البيئية",
    description: "استعرض معرض المشاريع الزراعية والتشجير الكبرى المنفذة بواسطة رايات نجد في الطائف، مكة، الشقيق، الجوف، الأسياح ومختلف مناطق المملكة.",
    canonical: "https://www.rayatnajd.com/projects",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "سجل مشاريع رايات نجد للتشجير",
    leadParagraph: "نفخر بتنفيذ وإدارة نخبة من المشاريع البيئية والزراعية ومبادرات إعادة تأهيل الغطاء النباتي للمؤسسات الحكومية والخاصة في مختلف أرجاء المملكة العربية السعودية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "مشاريعنا", url: "/projects" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "مشاريعنا", url: "/projects" }
        ]),
        {
          "@type": "CollectionPage",
          "@id": "https://www.rayatnajd.com/projects#webpage",
          "url": "https://www.rayatnajd.com/projects",
          "name": "مشاريع رايات نجد للتشجير"
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "مشاريع رايات نجد",
      h1: "معرض المشاريع المنفذة",
      leadParagraph: "تصفح المشاريع البيئية والزراعية المنفذة بأعلى المعايير الهندسية في المملكة العربية السعودية.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مشاريعنا", url: "/projects" }
      ],
      extraHtml: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${getAllProjects().slice(0, 6).map(p => `
            <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
              <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/projects/${p.slug}" style="color: inherit; text-decoration: none;">${p.nameAr}</a></h2>
              <p style="color: #718096; font-size: 0.95rem; margin-bottom: 0.5rem;">${p.locationAr} - ${p.clientAr || ""}</p>
              <p style="color: #4a5568; font-size: 0.9rem; line-height: 1.5;">${p.shortDescriptionAr}</p>
            </div>
          `).join("")}
        </div>
      `
    })
  });

  // 6. Individual Project Pages (14 Projects)
  const allProjects = getAllProjects();
  for (const p of allProjects) {
    const path = `/projects/${p.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${p.nameAr} | مشاريع رايات نجد`;
    const description = p.shortDescriptionAr;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: p.primaryImage || p.heroImage || DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: p.nameAr,
      leadParagraph: p.shortDescriptionAr,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مشاريعنا", url: "/projects" },
        { name: p.nameAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "مشاريعنا", url: "/projects" },
            { name: p.nameAr, url: path }
          ]),
          {
            "@type": "ItemPage",
            "@id": `${canonical}#project`,
            "url": canonical,
            "name": p.nameAr,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "رايات نجد للتشجير"
            }
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: p.nameAr,
        leadParagraph: p.shortDescriptionAr,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "مشاريعنا", url: "/projects" },
          { name: p.nameAr, url: path }
        ],
        extraHtml: `
          <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
            <p style="color: #166534; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">الجهة المستفيدة: ${p.clientAr || ""} | الموقع: ${p.locationAr} | سنة التنفيذ: ${p.year || ""}</p>
            <div style="color: #4a5568; line-height: 1.8; margin-top: 1rem;">
              <p>${p.descriptionAr || p.shortDescriptionAr}</p>
            </div>
            <div style="margin-top: 2rem;">
              <a href="/projects" style="color: #166534; font-weight: 700; text-decoration: underline;">&larr; العودة لجميع المشاريع</a>
            </div>
          </div>
        `
      })
    });
  }

  // 7. Blog Listing
  routes.set("/blog", {
    path: "/blog",
    title: "المدونة البيئية والزراعية | مقالات رايات نجد للتشجير",
    description: "مقالات وأدلة متخصصة في التشجير، الأشجار المحلية، توريد النخيل، شبكات الري الحديثة، ومبادرات الاستدامة البيئية بالمملكة العربية السعودية.",
    canonical: "https://www.rayatnajd.com/blog",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "المدونة البيئية والزراعية",
    leadParagraph: "استكشف أحدث المقالات والدراسات التخصصية في علوم التشجير، المشاتل، وإدارة وتطوير المساحات الخضراء ومبادرة السعودية الخضراء.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "المدونة", url: "/blog" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "المدونة", url: "/blog" }
        ]),
        {
          "@type": "Blog",
          "@id": "https://www.rayatnajd.com/blog#blog",
          "url": "https://www.rayatnajd.com/blog",
          "name": "مدونة رايات نجد للتشجير والاستدامة",
          "description": "أدلة ومقالات متخصصة حول التشجير والنباتات المحلية والنخيل وشبكات الري في السعودية."
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "مدونة رايات نجد",
      h1: "المدونة البيئية والزراعية",
      leadParagraph: "مقالات وأدلة إرشادية للمطورين والمهندسين وأصحاب المشاريع بالمملكة.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "المدونة", url: "/blog" }
      ],
      extraHtml: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${BLOG_POSTS.slice(0, 6).map(b => `
            <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
              <span style="font-size: 0.8rem; color: #166534; font-weight: 700;">${b.category} • ${b.date}</span>
              <h2 style="font-size: 1.25rem; font-weight: 700; color: #1a202c; margin: 0.5rem 0;"><a href="/blog/${b.slug}" style="color: inherit; text-decoration: none;">${b.title}</a></h2>
              <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">${b.excerpt}</p>
            </div>
          `).join("")}
        </div>
      `
    })
  });

  // 8. Blog Articles (14 Posts)
  for (const b of BLOG_POSTS) {
    const path = `/blog/${b.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = b.metaTitle || `${b.title} | رايات نجد`;
    const description = b.metaDescription || b.excerpt;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: b.image || DEFAULT_IMAGE,
      ogType: "article",
      robots: "index, follow",
      h1: b.title,
      leadParagraph: b.excerpt,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "المدونة", url: "/blog" },
        { name: b.title, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "المدونة", url: "/blog" },
            { name: b.title, url: path }
          ]),
          {
            "@type": "BlogPosting",
            "@id": `${canonical}#article`,
            "headline": b.title,
            "description": description,
            "datePublished": b.date,
            "author": {
              "@type": "Organization",
              "name": b.author || "رايات نجد"
            },
            "publisher": {
              "@type": "Organization",
              "name": "رايات نجد للتشجير",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.rayatnajd.com/01-brand/logo/rayatnajd-logo.png"
              }
            },
            "image": b.image || DEFAULT_IMAGE,
            "mainEntityOfPage": canonical
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: b.title,
        leadParagraph: b.excerpt,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "المدونة", url: "/blog" },
          { name: b.title, url: path }
        ],
        extraHtml: `
          <div style="background: #ffffff; padding: 2.5rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
            <div style="font-size: 0.9rem; color: #718096; margin-bottom: 1.5rem; display: flex; gap: 1.5rem;">
              <span>الكاتب: ${b.author}</span>
              <span>تاريخ النشر: ${b.date}</span>
              <span>القسم: ${b.category}</span>
            </div>
            <div style="color: #2d3748; line-height: 1.9; font-size: 1.05rem;">
              ${b.content}
            </div>
            <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0;">
              <a href="/blog" style="color: #166534; font-weight: 700; text-decoration: underline;">&larr; العودة إلى جميع مقالات المدونة</a>
            </div>
          </div>
        `
      })
    });
  }

  // 9. Knowledge Hub
  routes.set("/knowledge", {
    path: "/knowledge",
    title: "مركز المعرفة للتشجير والاستدامة البيئية | رايات نجد",
    description: "المرجع الشامل للتشجير، اللاندسكيب، اختيار النباتات والأشجار المحلية، وأنظمة الري الحديثة بالمملكة العربية السعودية.",
    canonical: "https://www.rayatnajd.com/knowledge",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "مركز المعرفة الزراعية والبيئية",
    leadParagraph: "دليل موثوق ومفصل يجمع المعايير الفنية، الدراسات البيئية، وتوصيات الخبراء لتطوير المسطحات الخضراء بالمملكة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "مركز المعرفة", url: "/knowledge" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "مركز المعرفة", url: "/knowledge" }
        ]),
        {
          "@type": "CollectionPage",
          "@id": "https://www.rayatnajd.com/knowledge#hub",
          "url": "https://www.rayatnajd.com/knowledge",
          "name": "مركز المعرفة للتشجير | رايات نجد"
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "مركز المعرفة | رايات نجد",
      h1: "مركز المعرفة الزراعية والبيئية",
      leadParagraph: "الموسوعة المتخصصة لعلوم التشجير والنباتات المحلية بالمملكة.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مركز المعرفة", url: "/knowledge" }
      ],
      extraHtml: `
        <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #166534; margin-bottom: 1rem;">أبرز محاور المعرفة</h2>
          <ul style="line-height: 2; color: #4a5568;">
            <li><a href="/knowledge/pillar/afforestation-in-saudi-arabia" style="color: #166534; font-weight: 700;">الدليل الشامل للتشجير في السعودية (Pillar)</a></li>
            <li><a href="/knowledge/category/landscaping" style="color: #166534;">هندسة اللاندسكيب والمشهد الحضري</a></li>
            <li><a href="/knowledge/category/sustainability" style="color: #166534;">الاستدامة البيئية وترشيد مياه الري</a></li>
          </ul>
        </div>
      `
    })
  });

  // 10. Knowledge Pillar
  routes.set(`/knowledge/pillar/${firstPillar.slug}`, {
    path: `/knowledge/pillar/${firstPillar.slug}`,
    title: firstPillar.seo.title,
    description: firstPillar.seo.description,
    canonical: `https://www.rayatnajd.com/knowledge/pillar/${firstPillar.slug}`,
    ogImage: firstPillar.heroImage || DEFAULT_IMAGE,
    ogType: "article",
    robots: "index, follow",
    h1: firstPillar.titleAr,
    leadParagraph: firstPillar.descriptionAr,
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "مركز المعرفة", url: "/knowledge" },
      { name: firstPillar.titleAr, url: `/knowledge/pillar/${firstPillar.slug}` }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "مركز المعرفة", url: "/knowledge" },
          { name: firstPillar.titleAr, url: `/knowledge/pillar/${firstPillar.slug}` }
        ]),
        {
          "@type": "Article",
          "headline": firstPillar.titleAr,
          "description": firstPillar.descriptionAr
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: firstPillar.titleAr,
      h1: firstPillar.titleAr,
      leadParagraph: firstPillar.descriptionAr,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مركز المعرفة", url: "/knowledge" },
        { name: firstPillar.titleAr, url: `/knowledge/pillar/${firstPillar.slug}` }
      ],
      extraHtml: `
        <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 1rem;">أقسام الدليل</h2>
          <ul style="line-height: 2; color: #4a5568;">
            ${firstPillar.sections.map(s => `<li>${s.titleAr}</li>`).join("")}
          </ul>
        </div>
      `
    })
  });

  // 11. Knowledge Clusters (10 Clusters)
  for (const c of clusters) {
    const path = `/knowledge/cluster/${c.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${c.titleAr} | رايات نجد للتشجير`;
    const description = `دليل ومقالات متخصصة حول ${c.titleAr} في المملكة العربية السعودية ضمن مشروعات ومبادرات رايات نجد للتشجير والاستدامة البيئية.`;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: c.titleAr,
      leadParagraph: description,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مركز المعرفة", url: "/knowledge" },
        { name: c.titleAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "مركز المعرفة", url: "/knowledge" },
            { name: c.titleAr, url: path }
          ]),
          {
            "@type": "CollectionPage",
            "name": c.titleAr,
            "description": description
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: c.titleAr,
        leadParagraph: description,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "مركز المعرفة", url: "/knowledge" },
          { name: c.titleAr, url: path }
        ],
        extraHtml: `
          <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
            <p style="color: #4a5568; line-height: 1.8;">استكشف المقالات والأدلة الفنية الخاصة بموضوع ${c.titleAr}.</p>
          </div>
        `
      })
    });
  }

  // 12. Knowledge Categories (2 Categories)
  for (const cat of categories) {
    const path = `/knowledge/category/${cat.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${cat.titleAr} | مركز المعرفة | رايات نجد`;
    const description = cat.descriptionAr;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: cat.titleAr,
      leadParagraph: cat.descriptionAr,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مركز المعرفة", url: "/knowledge" },
        { name: cat.titleAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "مركز المعرفة", url: "/knowledge" },
            { name: cat.titleAr, url: path }
          ]),
          {
            "@type": "CollectionPage",
            "name": cat.titleAr,
            "description": description
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: cat.titleAr,
        leadParagraph: description,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "مركز المعرفة", url: "/knowledge" },
          { name: cat.titleAr, url: path }
        ]
      })
    });
  }

  // 13. Knowledge Articles (3 Articles)
  const knowledgeArticles = [palmSupplySaudiArabia, bestPalmsForProjectsKsa, washingtoniaSupplyRiyadh];
  for (const art of knowledgeArticles) {
    const path = `/knowledge/article/${art.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${art.titleAr} | رايات نجد`;
    const description = art.seo?.description || art.titleAr;

    routes.set(path, {
      path,
      title,
      description,
      canonical,
      ogImage: art.heroImage || DEFAULT_IMAGE,
      ogType: "article",
      robots: "index, follow",
      h1: art.titleAr,
      leadParagraph: description,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "مركز المعرفة", url: "/knowledge" },
        { name: art.titleAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "مركز المعرفة", url: "/knowledge" },
            { name: art.titleAr, url: path }
          ]),
          {
            "@type": "Article",
            "headline": art.titleAr,
            "description": description,
            "datePublished": art.publishedAt,
            "author": {
              "@type": "Organization",
              "name": "رايات نجد"
            }
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: art.titleAr,
        leadParagraph: description,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "مركز المعرفة", url: "/knowledge" },
          { name: art.titleAr, url: path }
        ],
        extraHtml: `
          <div style="background: #ffffff; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1.5rem;">
            <p style="color: #718096; font-size: 0.9rem; margin-bottom: 1rem;">تاريخ النشر: ${art.publishedAt}</p>
            <p style="color: #4a5568; line-height: 1.8;">${description}</p>
          </div>
        `
      })
    });
  }

  // 14. Tools Center & Tools
  routes.set("/tools", {
    path: "/tools",
    title: "الأدوات الذكية والمعرفة | رايات نجد",
    description: "أدوات وحاسبات ذكية لاختيار الأشجار، تصميم المساحات الخضراء، واحتساب التكاليف الزراعية بالذكاء الاصطناعي.",
    canonical: "https://www.rayatnajd.com/tools",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "الأدوات الذكية للتشجير والتخطيط",
    leadParagraph: "استخدم أحدث الأدوات التفاعلية المدعومة بالذكاء الاصطناعي لاختيار النباتات الملائمة وحساب تكاليف التشجير والري بدقة.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "الأدوات الذكية", url: "/tools" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "الأدوات الذكية", url: "/tools" }
        ]),
        {
          "@type": "CollectionPage",
          "name": "الأدوات الذكية | رايات نجد"
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "الأدوات الذكية | رايات نجد",
      h1: "الأدوات الذكية للتشجير والتخطيط",
      leadParagraph: "حاسبات وأدوات تفاعلية لدعم اتخاذ القرار في المشاريع الزراعية والبيئية.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "الأدوات الذكية", url: "/tools" }
      ]
    })
  });

  const toolPages = [
    { slug: "ai-designer", titleAr: "المصمم الذكي بالذكاء الاصطناعي", desc: "أداة لتصميم المساحات الخضراء واختيار النباتات الملائمة للمناخ السعودي." },
    { slug: "tree-selection", titleAr: "أداة اختيار الأشجار المناسبة", desc: "دليل تفاعلي لاختيار أفضل أصناف الأشجار المحلية الملائمة لكل منطقة." },
    { slug: "plant-suggestion", titleAr: "أداة اقتراح النباتات", desc: "اقتراحات مخصصة للنباتات والشجيرات حسب نوع التربة ومصادر المياه." },
    { slug: "cost-calculator", titleAr: "حاسبة تكاليف التشجير والري", desc: "تقدير تكلفة مشاريع التشجير وشبكات الري وحساب كميات الأشجار المطلوبة." },
    { slug: "project-upload", titleAr: "رفع مخطط أو صورة المشروع", desc: "رفع مخططات اللاندسكيب للحصول على دراسة فنية وعرض سعر مخصص." },
    { slug: "ai-site-analysis", titleAr: "تحليل الموقع بالذكاء الاصطناعي", desc: "تحليل تضاريس الموقع والمناخ واقتراح حلول التشجير الأنسب." }
  ];

  for (const tool of toolPages) {
    const path = `/tools/${tool.slug}`;
    const canonical = `https://www.rayatnajd.com${path}`;
    const title = `${tool.titleAr} | أدوات رايات نجد`;

    routes.set(path, {
      path,
      title,
      description: tool.desc,
      canonical,
      ogImage: DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: tool.titleAr,
      leadParagraph: tool.desc,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "الأدوات الذكية", url: "/tools" },
        { name: tool.titleAr, url: path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: "الأدوات الذكية", url: "/tools" },
            { name: tool.titleAr, url: path }
          ]),
          {
            "@type": "WebApplication",
            "name": tool.titleAr,
            "description": tool.desc
          }
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: tool.titleAr,
        leadParagraph: tool.desc,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: "الأدوات الذكية", url: "/tools" },
          { name: tool.titleAr, url: path }
        ]
      })
    });
  }

  // 15. Catalog Page
  routes.set("/catalog", {
    path: "/catalog",
    title: "كتالوج رايات نجد | منتجات النخيل والأشجار ونباتات المشاتل",
    description: "استعرض كتالوج رايات نجد لمنتجات النخيل العربي والواشنطونيا وأشجار الظل والنباتات المحلية لمشاريع التشجير في السعودية.",
    canonical: "https://www.rayatnajd.com/catalog",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "index, follow",
    h1: "كتالوج رايات نجد الشامل للنخيل والأشجار",
    leadParagraph: "استعرض كتالوج رايات نجد لمنتجات النخيل العربي والواشنطونيا وأشجار الظل والنباتات المحلية لمشاريع التشجير في السعودية.",
    breadcrumbs: [
      { name: "الرئيسية", url: "/" },
      { name: "الكتالوج", url: "/catalog" }
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbLd([
          { name: "الرئيسية", url: "/" },
          { name: "الكتالوج", url: "/catalog" }
        ]),
        {
          "@type": "CollectionPage",
          "@id": "https://www.rayatnajd.com/catalog#webpage",
          "url": "https://www.rayatnajd.com/catalog",
          "name": "كتالوج رايات نجد الشامل",
          "description": "استعرض كتالوج رايات نجد لمنتجات النخيل العربي والواشنطونيا وأشجار الظل والنباتات المحلية لمشاريع التشجير في السعودية."
        }
      ]
    },
    initialHtml: buildHtmlShell({
      title: "كتالوج رايات نجد | منتجات النخيل والأشجار ونباتات المشاتل",
      h1: "كتالوج رايات نجد الشامل للنخيل والأشجار",
      leadParagraph: "استعراض أصناف النخيل والأشجار المحلية ونباتات المشاتل المتوفرة للتوريد والتنفيذ لمشاريع التشجير الكبرى بالمملكة العربية السعودية.",
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: "الكتالوج", url: "/catalog" }
      ],
      extraHtml: `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/service/palms" style="color: inherit; text-decoration: none;">نخيل الزينة والنخيل المثمر</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">نخيل واشنطونيا، نخيل بلدي مثمر (تمر)، وأصناف نخيل الزينة المعتمدة للميادين والشوارع والمشاريع الكبرى.</p>
          </div>
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/service/trees" style="color: inherit; text-decoration: none;">الأشجار البرية والمحلية</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">أشجار السدر، السمر، الغاف، اللوز البجلي، وأشجار النيم المقاومة للجفاف والمناسبة للمناخ الصحراوي.</p>
          </div>
          <div style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #166534; margin-bottom: 0.5rem;"><a href="/contact" style="color: inherit; text-decoration: none;">طلب تسعيرة وتوريد</a></h2>
            <p style="color: #718096; font-size: 0.95rem; line-height: 1.6;">تواصل مباشرة مع فريق التوريد والمشاتل للحصول على عروض الأسعار والكميات والمواصفات الفنية.</p>
          </div>
        </div>
      `
    })
  });

  // 16. Policy Pages
  const policies = [
    { path: "/terms", titleAr: "الشروط والأحكام", desc: "الشروط والأحكام الخاصة باستخدام موقع وخدمات شركة رايات نجد للتشجير." },
    { path: "/privacy", titleAr: "سياسة الخصوصية", desc: "سياسة الخصوصية وحماية البيانات الشخصية لعملاء ومستخدمي رايات نجد." },
    { path: "/warranty", titleAr: "سياسة الضمان", desc: "سياسة وضوابط ضمان نمو الأشجار والنخيل وشبكات الري في رايات نجد." },
    { path: "/return-policy", titleAr: "سياسة الاسترجاع", desc: "سياسة الاسترجاع والاستبدال للتوريدات الزراعية في شركة رايات نجد." }
  ];

  for (const pol of policies) {
    const canonical = `https://www.rayatnajd.com${pol.path}`;
    const title = `${pol.titleAr} | رايات نجد للتشجير`;

    routes.set(pol.path, {
      path: pol.path,
      title,
      description: pol.desc,
      canonical,
      ogImage: DEFAULT_IMAGE,
      ogType: "website",
      robots: "index, follow",
      h1: pol.titleAr,
      leadParagraph: pol.desc,
      breadcrumbs: [
        { name: "الرئيسية", url: "/" },
        { name: pol.titleAr, url: pol.path }
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbLd([
            { name: "الرئيسية", url: "/" },
            { name: pol.titleAr, url: pol.path }
          ])
        ]
      },
      initialHtml: buildHtmlShell({
        title,
        h1: pol.titleAr,
        leadParagraph: pol.desc,
        breadcrumbs: [
          { name: "الرئيسية", url: "/" },
          { name: pol.titleAr, url: pol.path }
        ]
      })
    });
  }

  return routes;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function injectSeoIntoHtml(templateHtml: string, route: RouteSeoData): string {
  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

  // 2. Replace Meta Description
  const metaDescRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
  const newMetaDesc = `<meta name="description" content="${escapeHtml(route.description)}" />`;
  if (metaDescRegex.test(html)) {
    html = html.replace(metaDescRegex, newMetaDesc);
  } else {
    html = html.replace('</head>', `  ${newMetaDesc}\n  </head>`);
  }

  // 3. Replace Canonical
  const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;
  const newCanonical = `<link rel="canonical" href="${route.canonical}" />`;
  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, newCanonical);
  } else {
    html = html.replace('</head>', `  ${newCanonical}\n  </head>`);
  }

  // 4. Replace Robots
  const robotsRegex = /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i;
  const newRobots = `<meta name="robots" content="${route.robots || 'index, follow'}" />`;
  if (robotsRegex.test(html)) {
    html = html.replace(robotsRegex, newRobots);
  } else {
    html = html.replace('</head>', `  ${newRobots}\n  </head>`);
  }

  // 5. Open Graph tags
  const ogTitleRegex = /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i;
  const newOgTitle = `<meta property="og:title" content="${escapeHtml(route.ogTitle || route.title)}" />`;
  if (ogTitleRegex.test(html)) {
    html = html.replace(ogTitleRegex, newOgTitle);
  } else {
    html = html.replace('</head>', `  ${newOgTitle}\n  </head>`);
  }

  const ogDescRegex = /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i;
  const newOgDesc = `<meta property="og:description" content="${escapeHtml(route.ogDescription || route.description)}" />`;
  if (ogDescRegex.test(html)) {
    html = html.replace(ogDescRegex, newOgDesc);
  } else {
    html = html.replace('</head>', `  ${newOgDesc}\n  </head>`);
  }

  const ogUrlRegex = /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i;
  const newOgUrl = `<meta property="og:url" content="${route.canonical}" />`;
  if (ogUrlRegex.test(html)) {
    html = html.replace(ogUrlRegex, newOgUrl);
  } else {
    html = html.replace('</head>', `  ${newOgUrl}\n  </head>`);
  }

  const ogImageRegex = /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i;
  const newOgImage = `<meta property="og:image" content="${route.ogImage}" />`;
  if (ogImageRegex.test(html)) {
    html = html.replace(ogImageRegex, newOgImage);
  } else {
    html = html.replace('</head>', `  ${newOgImage}\n  </head>`);
  }

  const ogTypeRegex = /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i;
  const newOgType = `<meta property="og:type" content="${route.ogType || 'website'}" />`;
  if (ogTypeRegex.test(html)) {
    html = html.replace(ogTypeRegex, newOgType);
  } else {
    html = html.replace('</head>', `  ${newOgType}\n  </head>`);
  }

  // 6. Twitter tags
  const twTitleRegex = /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i;
  const newTwTitle = `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`;
  if (twTitleRegex.test(html)) {
    html = html.replace(twTitleRegex, newTwTitle);
  } else {
    html = html.replace('</head>', `  ${newTwTitle}\n  </head>`);
  }

  const twDescRegex = /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i;
  const newTwDesc = `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`;
  if (twDescRegex.test(html)) {
    html = html.replace(twDescRegex, newTwDesc);
  } else {
    html = html.replace('</head>', `  ${newTwDesc}\n  </head>`);
  }

  const twUrlRegex = /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i;
  const newTwUrl = `<meta name="twitter:url" content="${route.canonical}" />`;
  if (twUrlRegex.test(html)) {
    html = html.replace(twUrlRegex, newTwUrl);
  } else {
    html = html.replace('</head>', `  ${newTwUrl}\n  </head>`);
  }

  // 7. Inject structured data (JSON-LD)
  if (route.jsonLd) {
    const jsonLdTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(route.jsonLd, null, 2)}\n    </script>`;
    // Remove the default template's ld+json if on a route that is not "/"
    if (route.path !== "/") {
      html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdTag);
    }
  }

  // 8. Inject initial semantic HTML inside <div id="root">
  if (route.initialHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.initialHtml}</div>`);
  }

  return html;
}

export function generate404Html(templateHtml: string, requestedPath: string = ""): string {
  const notFoundRoute: RouteSeoData = {
    path: requestedPath || "/404",
    title: "الصفحة غير موجودة (404) | رايات نجد للتشجير",
    description: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يرجى تصفح خدمات ومشاريع رايات نجد أو العودة للصفحة الرئيسية.",
    canonical: `https://www.rayatnajd.com${requestedPath.startsWith('/') ? requestedPath : `/${requestedPath}`}`,
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    robots: "noindex, follow",
    h1: "الصفحة غير موجودة (404 Error)",
    leadParagraph: "عذراً، لم يتم العثور على الصفحة المطلوبة على خوادم رايات نجد. قد يكون الرابط خاطئاً أو تم نقل المحتوى.",
    jsonLd: {},
    initialHtml: `
      <div class="not-found-view" dir="rtl" style="font-family: system-ui, -apple-system, sans-serif; color: #1a202c; background-color: #fcfdfd; min-height: 100vh; display: flex; flex-direction: column;">
        <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem;">
          <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <a href="/" style="font-size: 1.25rem; font-weight: 800; color: #166534; text-decoration: none;">رايات نجد للتشجير</a>
            <a href="/" style="color: #4a5568; font-size: 0.875rem; text-decoration: none;">الرئيسية</a>
          </div>
        </header>
        <main style="max-width: 600px; margin: auto; padding: 3rem 1.5rem; text-align: center;">
          <div style="font-size: 4rem; font-weight: 900; color: #166534; margin-bottom: 1rem;">404</div>
          <h1 style="font-size: 2rem; font-weight: 800; color: #1a202c; margin-bottom: 1rem;">الصفحة غير موجودة</h1>
          <p style="color: #718096; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">عذراً، الرابط الذي تحاول الوصول إليه غير متاح. يمكنك العودة للصفحة الرئيسية أو تصفح خدماتنا ومشاريعنا.</p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/" style="background: #166534; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 700;">الصفحة الرئيسية</a>
            <a href="/#services" style="background: #f0fdf4; color: #166534; border: 1px solid #166534; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 700;">خدماتنا</a>
            <a href="/projects" style="background: #f0fdf4; color: #166534; border: 1px solid #166534; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 700;">مشاريعنا</a>
          </div>
        </main>
      </div>
    `
  };

  return injectSeoIntoHtml(templateHtml, notFoundRoute);
}
