import fs from 'fs';

const urls = [
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274473/WhatsApp_Image_2026-07-03_at_6.59.15_PM_1_mqafij.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274476/WhatsApp_Image_2026-07-03_at_6.59.15_PM_2_ljvh2f.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274485/WhatsApp_Image_2026-07-03_at_6.59.15_PM_5_vd3uup.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274472/WhatsApp_Image_2026-07-03_at_6.59.15_PM_6_tiqsaa.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274484/WhatsApp_Image_2026-07-03_at_6.59.15_PM_ysrnor.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274486/WhatsApp_Image_2026-07-03_at_6.59.16_PM_13_orvhre.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274487/WhatsApp_Image_2026-07-03_at_6.59.16_PM_1_gfnath.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274476/WhatsApp_Image_2026-07-03_at_6.59.16_PM_22_uc6x3b.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274484/WhatsApp_Image_2026-07-03_at_6.59.16_PM_24_jwozvi.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274477/WhatsApp_Image_2026-07-03_at_6.59.16_PM_2_f6bqkh.jpg",
  "https://res.cloudinary.com/erfajaoa/image/upload/v1783274478/WhatsApp_Image_2026-07-03_at_6.59.16_PM_3_sd1ywi.jpg",
];

let blogData = fs.readFileSync('src/data/blogData.ts', 'utf8');

let imgIndex = 0;
blogData = blogData.replace(/image:\s*".*?"/g, (match) => {
  if (imgIndex < urls.length) {
    const replacement = `image: "${urls[imgIndex]}"`;
    imgIndex++;
    return replacement;
  }
  return match;
});

fs.writeFileSync('src/data/blogData.ts', blogData);
console.log('Replaced images:', imgIndex);
