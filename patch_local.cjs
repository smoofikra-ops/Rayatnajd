const fs = require('fs');

const scrapedOutput = `[
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783640436/3f94c320-a8ad-4f6e-bfe1-a3a86b792d3c.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534248/WhatsApp_Image_2026-07-08_at_9.08.09_PM_1_t2y2w6.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534247/WhatsApp_Image_2026-07-08_at_9.08.09_PM_2_wb9sjz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534250/WhatsApp_Image_2026-07-08_at_9.08.09_PM_peu7lv.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534249/WhatsApp_Image_2026-07-08_at_9.08.10_PM_iofosz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534249/WhatsApp_Image_2026-07-08_at_9.08.11_PM_1_yjcawb.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534250/WhatsApp_Image_2026-07-08_at_9.08.11_PM_iskjeh.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534251/WhatsApp_Image_2026-07-08_at_9.08.12_PM_1_rsag6k.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534251/WhatsApp_Image_2026-07-08_at_9.08.12_PM_xtzfpb.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534253/WhatsApp_Image_2026-07-08_at_9.08.13_PM_1_mx4cpz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534253/WhatsApp_Image_2026-07-08_at_9.08.13_PM_2_rcqrex.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534254/WhatsApp_Image_2026-07-08_at_9.08.13_PM_3_sqmlei.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534254/WhatsApp_Image_2026-07-08_at_9.08.13_PM_spn9c1.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534255/WhatsApp_Image_2026-07-08_at_9.08.16_PM_1_lwvarl.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534256/WhatsApp_Image_2026-07-08_at_9.08.16_PM_2_xua9eg.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534257/WhatsApp_Image_2026-07-08_at_9.08.16_PM_3_tvpdpz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.16_PM_4_mhrojf.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.16_PM_te0jmi.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534257/WhatsApp_Image_2026-07-08_at_9.08.17_PM_1_yrr6lb.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534258/WhatsApp_Image_2026-07-08_at_9.08.17_PM_2_z3zlff.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.17_PM_rqvxg2.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534259/WhatsApp_Image_2026-07-08_at_9.08.18_PM_1_v3ngtu.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.18_PM_2_rsh2ju.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534262/WhatsApp_Image_2026-07-08_at_9.08.18_PM_3_al0jwd.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534268/WhatsApp_Image_2026-07-08_at_9.08.18_PM_spzxli.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534268/WhatsApp_Image_2026-07-08_at_9.08.19_PM_tfv11o.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.20_PM_cdsqkq.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534267/WhatsApp_Image_2026-07-08_at_9.08.21_PM_1_fes2m1.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534269/WhatsApp_Image_2026-07-08_at_9.08.21_PM_2_ewevqs.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534274/WhatsApp_Image_2026-07-08_at_9.08.21_PM_3_jr67q7.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.21_PM_yuw6vf.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.22_PM_w2ev0w.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.23_PM_1_ni3tc7.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783534272/WhatsApp_Image_2026-07-08_at_9.08.23_PM_2_sttyfd.jpg?_s=public-apps"
]`;

const urls = JSON.parse(scrapedOutput).map(url => {
  return url.replace('h_250,fl_preserve_transparency/', '').split('?')[0];
});

const galleryItems = urls.map((url, i) => `{ url: "${url}", nameAr: "شجرة محلية ${i+1}", nameEn: "Local Tree ${i+1}" }`);
const galleryCode = `    gallery: [\n      ${galleryItems.join(',\n      ')}\n    ]`;

let content = fs.readFileSync('src/components/home/NurseriesCatalog.tsx', 'utf8');

const targetSection = `    examplesEn: ["Ziziphus", "Samar", "Najdi Talh", "Acacia", "Wild trees suitable for Saudi climate"],
    img: mediaData.products[1].url,`;

if (content.includes(targetSection)) {
  content = content.replace(targetSection, targetSection + '\n' + galleryCode);
  fs.writeFileSync('src/components/home/NurseriesCatalog.tsx', content);
  console.log('Local and Wild Trees gallery patched');
} else {
  console.log('Target section not found');
}
