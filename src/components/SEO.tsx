import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = "رايات نجد للتشجير والاستدامة البيئية | نزرع المستقبل... ونصنع الاستدامة", 
  description = "شركة رايات نجد للتشجير والاستدامة البيئية، رائدة في مشاريع التشجير والمشهد الحضري في المملكة العربية السعودية والرياض. نقدم حلولاً زراعية متكاملة ومستدامة.", 
  keywords = "رايات نجد, تشجير, زراعة, الرياض الخضراء, استدامة بيئية, السعودية, رؤية 2030, تصميم حدائق, تنسيق حدائق, لاندسكيب",
  canonicalUrl = "https://rayatnajd.com/",
  ogImage = "https://res.cloudinary.com/erfajaoa/image/upload/f_auto,q_auto/v1783298171/%D9%84%D9%82%D8%B7%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9_2026-06-28_%D9%81%D9%8A_4.03.31_%D8%B5_mfq3dq.png"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
