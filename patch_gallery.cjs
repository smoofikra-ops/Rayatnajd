const fs = require('fs');

const scrapedOutput = `[
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374914/WhatsApp_Image_2026-07-04_at_11.52.09_PM_ofjyqg.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374915/WhatsApp_Image_2026-07-04_at_11.52.11_PM_kztvxg.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374917/WhatsApp_Image_2026-07-04_at_11.52.12_PM_kybu8a.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374918/WhatsApp_Image_2026-07-04_at_11.52.13_PM_1_lndnzr.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374919/WhatsApp_Image_2026-07-04_at_11.52.13_PM_2_pph4tz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_3_fegq27.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374920/WhatsApp_Image_2026-07-04_at_11.52.13_PM_zfehyw.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374921/WhatsApp_Image_2026-07-04_at_11.56.59_PM_2_bqpfbo.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374922/WhatsApp_Image_2026-07-04_at_11.56.59_PM_3_j0mlag.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374923/WhatsApp_Image_2026-07-04_at_11.56.59_PM_4_rmlfci.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_5_hckj1e.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374924/WhatsApp_Image_2026-07-04_at_11.56.59_PM_6_xn2mb8.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374925/WhatsApp_Image_2026-07-04_at_11.56.59_PM_7_dizmsn.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374926/WhatsApp_Image_2026-07-04_at_11.56.59_PM_nivos5.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_1_bujl3k.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374927/WhatsApp_Image_2026-07-04_at_11.57.00_PM_2_vx3db9.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374930/WhatsApp_Image_2026-07-04_at_11.57.00_PM_4_gs3sjz.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_5_peku52.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374931/WhatsApp_Image_2026-07-04_at_11.57.00_PM_6_o0n7q5.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374932/WhatsApp_Image_2026-07-04_at_11.57.00_PM_l4wx3h.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_2_h7hdml.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374934/WhatsApp_Image_2026-07-04_at_11.57.01_PM_3_by0u4z.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374935/WhatsApp_Image_2026-07-04_at_11.57.01_PM_4_zeepcf.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374936/WhatsApp_Image_2026-07-04_at_11.57.01_PM_5_d0f0fu.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_6_wszj3w.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374937/WhatsApp_Image_2026-07-04_at_11.57.01_PM_ch4gj6.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374938/WhatsApp_Image_2026-07-04_at_11.57.02_PM_1_ujwsk9.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374939/WhatsApp_Image_2026-07-04_at_11.57.02_PM_2_tup7lj.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374940/WhatsApp_Image_2026-07-04_at_11.57.02_PM_3_iib3k8.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374941/WhatsApp_Image_2026-07-04_at_11.57.02_PM_4_ndu9uk.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783374942/WhatsApp_Image_2026-07-04_at_11.57.02_PM_5_p994ga.jpg?_s=public-apps"
]`;

const urls = JSON.parse(scrapedOutput).map(url => {
  return url.replace('h_250,fl_preserve_transparency/', '').split('?')[0];
});

const galleryItems = urls.map((url, i) => `{ url: "${url}", nameAr: "نبتة ${i+1}", nameEn: "Plant ${i+1}" }`);
const galleryCode = `gallery: [\n      ${galleryItems.join(',\n      ')}\n    ]`;

let content = fs.readFileSync('src/components/home/NurseriesCatalog.tsx', 'utf8');

// The original gallery code for palms:
const oldGalleryCodePalms = `gallery: [
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374898/WhatsApp_Image_2026-07-04_at_11.52.05_PM_delyfy.jpg", nameAr: "نخل واشنطن", nameEn: "Washingtonia Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374916/WhatsApp_Image_2026-07-04_at_11.52.12_PM_1_adrfjq.jpg", nameAr: "نخل ملكي", nameEn: "Royal Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374926/WhatsApp_Image_2026-07-04_at_11.56.59_PM_nivos5.jpg", nameAr: "نخل سيكس", nameEn: "Cycas Palm" },
      { url: "https://res.cloudinary.com/erfajaoa/image/upload/v1783374936/WhatsApp_Image_2026-07-04_at_11.57.01_PM_5_d0f0fu.jpg", nameAr: "نخل واشنطن", nameEn: "Washingtonia Palm" }
    ]`;

content = content.replaceAll(oldGalleryCodePalms, galleryCode);

// There is a duplicate gallery check in the modal UI! Look at lines 280-324, there are two identical gallery blocks.
// Let's remove the duplicated one to avoid errors.

const duplicateGallery = `                  {selectedCategory.gallery && selectedCategory.gallery.length > 0 && (
                    <div>
                      <h4 className="text-text-main font-bold mb-3 flex items-center gap-2">
                        <Trees className="w-4 h-4 text-primary" />
                        {t("معرض الصور", "Photo Gallery")}
                      </h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {selectedCategory.gallery.map((img: any, idx: number) => (
                          <div key={idx} className="relative group rounded-xl overflow-hidden h-32 bg-bg-secondary border border-text-main/10 shadow-sm">
                            <CloudinaryImage src={img.url} alt={language === 'ar' ? img.nameAr : img.nameEn} width={400} lazy={true} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2 text-center">
                              <span className="text-white text-[11px] font-bold w-full truncate px-1 leading-tight">
                                {language === 'ar' ? img.nameAr : img.nameEn}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}`;

content = content.replace(duplicateGallery, '');

fs.writeFileSync('src/components/home/NurseriesCatalog.tsx', content);
