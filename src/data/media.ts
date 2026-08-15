export const getCloudinaryUrl = (url: string, width?: number) => {
  if (!url) return '';
  if (!url.includes('res.cloudinary.com')) return url; // Return as is if not cloudinary

  // A standard cloudinary URL looks like: https://res.cloudinary.com/<cloud_name>/image/upload/f_auto,q_auto/v1234567890/folder/image.jpg
  // We can insert /upload/f_auto,q_auto,w_xxx/ after /upload/ if it doesn't already have transformations
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex !== -1 && !url.includes('f_auto')) {
    const transform = `f_auto,q_auto${width ? `,w_${width}` : ''}`;
    return `${url.slice(0, uploadIndex + 8)}${transform}/${url.slice(uploadIndex + 8)}`;
  }
  return url;
};

// All imagery below is served from the verified Bunny CDN (https://cdn.rayatnajd.com).
// Source: assets-manifest.json / assets-index.csv (Rayat Najd digital asset library).
export const mediaData = {
  brand: {
    // No finished, transparent-background Rayat Najd logo exists in the verified asset
    // library yet (only 2 AI-generated logo-concept sketches, which are excluded from use).
    // Left as a placeholder pending real logo artwork.
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
  },
  hero: [
    {
      title: "Hero Green Riyadh",
      url: "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-projects.webp",
      alt: "مشروع تشجير وتنسيق مساحات خضراء تابع لرايات نجد",
      type: "image"
    },
    {
      title: "Hero Sustainability",
      url: "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-sustainability.webp",
      alt: "مشروع تشجير صحراوي لمكافحة التصحر ودعم الاستدامة البيئية",
      type: "image"
    }
  ],
  services: [
    {
      id: "afforestation",
      url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-65.webp",
      alt: "أعمال تشجير وزراعة في مشروع مكافحة التصحر بأم شلفح",
      type: "image"
    },
    {
      id: "urban-landscape",
      url: "https://cdn.rayatnajd.com/02-website/backgrounds/rayat-najd-website-background-projects.webp",
      alt: "تنسيق مساحة خضراء ومسارات ضمن أحد مشاريع رايات نجد",
      type: "image"
    },
    {
      id: "giant-trees",
      url: "https://cdn.rayatnajd.com/05-services/mature-tree-relocation/rayat-najd-mature-tree-relocation-01.webp",
      alt: "معدات ثقيلة متخصصة أثناء نقل شجرة معمرة",
      type: "image"
    },
    {
      id: "maintenance",
      url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-65.webp",
      alt: "عناية ومتابعة صحة النباتات في مشتل رايات نجد",
      type: "image"
    },
    {
      id: "irrigation",
      url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-66.webp",
      alt: "شبكة ري بالتنقيط لدعم غرسة صغيرة في مشروع تشجير صحراوي",
      type: "image"
    },
    {
      id: "supplying",
      url: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-01.webp",
      alt: "نخيل جاهز للتوريد في مشتل رايات نجد",
      type: "image"
    }
  ],
  projects: [
    {
      id: "project-1",
      url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-67.webp",
      alt: "غرسة تشجير مروية بالتنقيط في مشروع أم شلفح الصحراوي",
      type: "image"
    },
    {
      id: "project-2",
      url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-68.webp",
      alt: "صف من الغراس الصحراوية مع خطوط الري في مشروع أم شلفح",
      type: "image"
    },
    {
      id: "project-3",
      url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-69.webp",
      alt: "منظر واسع لأرض صحراوية قيد التشجير ضمن مشروع مكافحة التصحر",
      type: "image"
    }
  ],
  nursery: [
    {
      id: "nursery-1",
      url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-18.webp",
      alt: "منظر عام لمشتل رايات نجد في الحائر بالرياض",
      type: "image"
    }
  ],
  products: [
    {
      category: "palms",
      product: "sabal-palm",
      url: "https://cdn.rayatnajd.com/04-products/palm-trees/rayat-najd-palm-tree-nursery-02.webp",
      alt: "نخيل في مشتل رايات نجد جاهز للزراعة",
      type: "image"
    },
    {
      category: "native",
      product: "native-tree",
      url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-01.webp",
      alt: "شجرة محلية مقاومة للجفاف في مشتل رايات نجد",
      type: "image"
    },
    {
      category: "shade",
      product: "shade-tree",
      url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-49.webp",
      alt: "شتلة شجرة في المشتل معدّة لمشاريع التظليل",
      type: "image"
    },
    {
      category: "ornamental",
      product: "flowering-shrub",
      url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-17.webp",
      alt: "شجيرة مزهرة من تشكيلة رايات نجد",
      type: "image"
    },
    {
      category: "native",
      product: "drought-tolerant",
      url: "https://cdn.rayatnajd.com/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-19.webp",
      alt: "شجرة سعودية محلية مقاومة للجفاف",
      type: "image"
    }
  ],
  videos: [
    {
      id: "drone-view",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // REPLACE WITH CLOUDINARY URL
      alt: "عرض جوي لمشاريعنا",
      type: "video"
    }
  ],
  gallery: [
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-21.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-22.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-23.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-24.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-25.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-26.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-27.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-28.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-29.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-30.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-31.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-32.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-33.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-34.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-35.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-36.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-37.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-38.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-39.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/03-projects/environmental-sustainability/umm-shalfah-afforestation/rayat-najd-umm-shalfah-desert-afforestation-project-40.webp", category: "projects" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-18.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-20.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-22.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-23.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-24.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-25.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-26.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-27.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-28.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-29.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-30.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-31.webp", category: "nurseries" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-33.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-34.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-35.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-36.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-37.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-38.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-39.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-40.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-41.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-42.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-43.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-44.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-45.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-46.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-47.webp", category: "trees" },
    { url: "https://cdn.rayatnajd.com/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-48.webp", category: "trees" }
  ]
};
