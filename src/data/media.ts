export const getCloudinaryUrl = (url: string, width?: number) => {
  if (!url) return '';
  if (!url.includes('res.cloudinary.com')) return url; // Return as is if not cloudinary

  // Example implementation to inject transformations if it is a cloudinary URL
  // A standard cloudinary URL looks like: https://res.cloudinary.com/<cloud_name>/image/upload/v1234567890/folder/image.jpg
  // We can insert /upload/f_auto,q_auto,w_xxx/ after /upload/ if it doesn't already have transformations
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex !== -1 && !url.includes('f_auto')) {
    const transform = `f_auto,q_auto${width ? `,w_${width}` : ''}`;
    return `${url.slice(0, uploadIndex + 8)}${transform}/${url.slice(uploadIndex + 8)}`;
  }
  return url;
};

export const mediaData = {
  brand: {
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format", // REPLACE WITH CLOUDINARY URL
  },
  hero: [
    {
      title: "Hero Green Riyadh",
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2560", // REPLACE WITH CLOUDINARY URL
      alt: "مشروع تشجير حضري مستدام في الرياض",
      type: "image"
    },
    {
      title: "Hero Sustainability",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2560", // REPLACE WITH CLOUDINARY URL
      alt: "نحو مستقبل أخضر ومستدام",
      type: "image"
    }
  ],
  services: [
    {
      id: "afforestation",
      url: "https://images.unsplash.com/photo-1595166316223-93d183060fc1?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "التشجير والمقاولات الزراعية",
      type: "image"
    },
    {
      id: "urban-landscape",
      url: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "تطوير المشهد الحضري",
      type: "image"
    },
    {
      id: "giant-trees",
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "نقل الأشجار العملاقة",
      type: "image"
    },
    {
      id: "maintenance",
      url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "الصيانة الزراعية",
      type: "image"
    },
    {
      id: "irrigation",
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "شبكات الري الذكية",
      type: "image"
    },
    {
      id: "supplying",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "توريد النخيل والأشجار",
      type: "image"
    }
  ],
  projects: [
    {
      id: "project-1",
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "مشروع تشجير طريق الملك فهد",
      type: "image"
    },
    {
      id: "project-2",
      url: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "حديقة الملك سلمان",
      type: "image"
    },
    {
      id: "project-3",
      url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "الرياض الخضراء",
      type: "image"
    }
  ],
  nursery: [
    {
      id: "nursery-1",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", // REPLACE WITH CLOUDINARY URL
      alt: "مشاتل رايات نجد",
      type: "image"
    }
  ],
  products: [
    {
      category: "palms",
      product: "sabal-palm",
      url: "https://images.unsplash.com/photo-1595191833504-48615ff2786a?auto=format&fit=crop&q=80&w=600", // REPLACE WITH CLOUDINARY URL
      alt: "نخيل البلميط",
      type: "image"
    },
    {
      category: "native",
      product: "bajli-almond",
      url: "https://images.unsplash.com/photo-1444312645910-faa973a8d0c8?auto=format&fit=crop&q=80&w=600", // REPLACE WITH CLOUDINARY URL
      alt: "أشجار اللوز البجلي",
      type: "image"
    },
    {
      category: "shade",
      product: "neem-tree",
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600", // REPLACE WITH CLOUDINARY URL
      alt: "أشجار النيم",
      type: "image"
    },
    {
      category: "fruit",
      product: "date-palm",
      url: "https://images.unsplash.com/photo-1505370390141-8db221cacc55?auto=format&fit=crop&q=80&w=600", // REPLACE WITH CLOUDINARY URL
      alt: "نخيل بلدي (تمر)",
      type: "image"
    },
    {
      category: "native",
      product: "ziziphus",
      url: "https://images.unsplash.com/photo-1542314831-c6a4d14eff3e?auto=format&fit=crop&q=80&w=600", // REPLACE WITH CLOUDINARY URL
      alt: "أشجار السدر",
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
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274473/WhatsApp_Image_2026-07-03_at_6.59.15_PM_1_mqafij.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274476/WhatsApp_Image_2026-07-03_at_6.59.15_PM_2_ljvh2f.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274485/WhatsApp_Image_2026-07-03_at_6.59.15_PM_5_vd3uup.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274472/WhatsApp_Image_2026-07-03_at_6.59.15_PM_6_tiqsaa.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274484/WhatsApp_Image_2026-07-03_at_6.59.15_PM_ysrnor.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274486/WhatsApp_Image_2026-07-03_at_6.59.16_PM_13_orvhre.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274487/WhatsApp_Image_2026-07-03_at_6.59.16_PM_1_gfnath.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274476/WhatsApp_Image_2026-07-03_at_6.59.16_PM_22_uc6x3b.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274484/WhatsApp_Image_2026-07-03_at_6.59.16_PM_24_jwozvi.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274477/WhatsApp_Image_2026-07-03_at_6.59.16_PM_2_f6bqkh.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274478/WhatsApp_Image_2026-07-03_at_6.59.16_PM_3_sd1ywi.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274486/WhatsApp_Image_2026-07-03_at_6.59.16_PM_4_czzxuu.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274472/WhatsApp_Image_2026-07-03_at_6.59.16_PM_5_hdqktb.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274484/WhatsApp_Image_2026-07-03_at_6.59.16_PM_6_tyqgrc.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274482/WhatsApp_Image_2026-07-03_at_6.59.16_PM_fk9qke.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274472/WhatsApp_Image_2026-07-03_at_7.02.09_PM_jfbnqc.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274475/WhatsApp_Image_2026-07-03_at_7.02.11_PM_23_qgs2da.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783274481/WhatsApp_Image_2026-07-03_at_7.02.11_PM_24_remfcl.jpg", category: "projects" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374899/WhatsApp_Image_2026-07-04_at_11.52.06_PM_1_hjhdjs.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374899/WhatsApp_Image_2026-07-04_at_11.52.06_PM_2_esfzcu.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374905/WhatsApp_Image_2026-07-04_at_11.52.07_PM_5_qoi00h.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374906/WhatsApp_Image_2026-07-04_at_11.52.07_PM_nuqgxw.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374909/WhatsApp_Image_2026-07-04_at_11.52.08_PM_2_mlkari.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374911/WhatsApp_Image_2026-07-04_at_11.52.08_PM_cia8is.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374917/WhatsApp_Image_2026-07-04_at_11.52.12_PM_kybu8a.jpg", category: "nurseries" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374923/WhatsApp_Image_2026-07-04_at_11.56.59_PM_4_rmlfci.jpg", category: "trees" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374925/WhatsApp_Image_2026-07-04_at_11.56.59_PM_7_dizmsn.jpg", category: "trees" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_1_bujl3k.jpg", category: "trees" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374930/WhatsApp_Image_2026-07-04_at_11.57.00_PM_4_gs3sjz.jpg", category: "trees" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374932/WhatsApp_Image_2026-07-04_at_11.57.00_PM_l4wx3h.jpg", category: "trees" },
    { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374952/WhatsApp_Image_2026-07-04_at_11.57.04_PM_gl59wv.jpg", category: "trees" }
  ]
};
