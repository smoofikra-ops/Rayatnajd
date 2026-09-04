import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_TITLE = "رايات نجد | تشجير وتنسيق حدائق وتوريد الأشجار والنخيل بالرياض";
const DEFAULT_DESC = "شركة رايات نجد للتشجير والاستدامة البيئية بالرياض. نقدم حلول التشجير المتكاملة، وتوريد الأشجار والنخيل، وتنفيذ وتنسيق المشاريع الزراعية والمشهد الحضري في السعودية.";
const DEFAULT_CANONICAL = "https://www.rayatnajd.com/";
const DEFAULT_OG_IMAGE = "https://www.rayatnajd.com/og/rayat-najd-social-share.jpg";

export default function SEO({ 
  title = DEFAULT_TITLE, 
  description = DEFAULT_DESC, 
  keywords = "رايات نجد, تشجير, تنسيق حدائق, توريد الأشجار والنخيل, الرياض, استدامة بيئية, مشاتل, مقاولات زراعية",
  canonicalUrl = DEFAULT_CANONICAL,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "رايات نجد للتشجير والاستدامة البيئية",
  ogTitle,
  ogDescription,
  ogType = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  noindex = false,
  breadcrumbs,
  structuredData
}: SEOProps) {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  // Build BreadcrumbList Schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": b.item.startsWith("http") ? b.item : `https://www.rayatnajd.com${b.item.startsWith('/') ? '' : '/'}${b.item}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="رايات نجد للتشجير والاستدامة البيئية" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Breadcrumbs Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Custom Page Schema */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

