const fs = require('fs');
const content = fs.readFileSync('src/data/blogData.ts', 'utf-8');
const newPost = `  {
    id: "palm-supply-ksa",
    slug: "palm-supply-saudi-arabia",
    title: "توريد النخيل في السعودية | الدليل الشامل لتوريد وزراعة ونقل النخيل للمشاريع",
    excerpt: "دليل شامل لخدمات توريد النخيل في السعودية للمشاريع الحكومية والتجارية، يشمل اختيار الأنواع، النقل، الزراعة، الري والصيانة.",
    content: \`
      <h2>دليل شامل لتوريد النخيل في السعودية</h2>
      <p>اكتشف أهمية النخيل في المشاريع وكيفية اختياره والعناية به في هذا الدليل.</p>
      <p><a href="/knowledge/article/palm-supply-saudi-arabia" class="text-primary font-bold">اقرأ المقال الكامل في مركز المعرفة هنا</a></p>
    \`,
    image: "https://res.cloudinary.com/erfajaoa/image/upload/f_auto,q_auto/v1/clusters/palm-trees",
    date: "2024-05-15",
    author: "رايات نجد",
    category: "توريد النخيل",
    tags: ["توريد نخيل", "السعودية", "مشاريع"],
    metaTitle: "توريد النخيل في السعودية | رايات نجد",
    metaDescription: "دليل شامل لخدمات توريد النخيل في السعودية"
  },`;
const updated = content.replace('export const BLOG_POSTS: BlogPost[] = [', 'export const BLOG_POSTS: BlogPost[] = [\n' + newPost);
fs.writeFileSync('src/data/blogData.ts', updated);
