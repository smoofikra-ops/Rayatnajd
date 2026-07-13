const fs = require('fs');

const scrapedOutput = `[
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900191/1_k6tszv.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900192/2_scdiio.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900194/3_kc5r8o.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900197/4_bgoo8s.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900199/5_tzvkqg.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900201/6_rsmhm7.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900203/7_t9qa3q.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900205/8_qyh39d.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900208/9_ncs6pd.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900210/10_j56ckg.jpg?_s=public-apps",
  "https://res.cloudinary.com/erfajaoa/image/upload/h_250,fl_preserve_transparency/v1783900212/11_qx1atq.jpg?_s=public-apps"
]`;

const urls = JSON.parse(scrapedOutput).map(url => {
  return url.replace('h_250,fl_preserve_transparency/', '').split('?')[0];
});

let partnerCode = `  const partners = [
${urls.map((url, i) => `    { name: t("شريك النجاح ${i+1}", "Success Partner ${i+1}"), logo: "${url}" }`).join(',\n')}
  ];`;

let content = fs.readFileSync('src/components/home/SuccessPartners.tsx', 'utf8');

// Replace partners array
content = content.replace(/  const partners = \[[\s\S]*?\];/, partnerCode);

// Add import for CloudinaryImage
if (!content.includes('CloudinaryImage')) {
  content = content.replace('import { Building2 } from "lucide-react";', 'import { Building2 } from "lucide-react";\nimport { CloudinaryImage } from "../cloudinary/CloudinaryImage";');
}

// Replace rendering
const oldRender = `<div className="flex flex-col items-center gap-3">
                      <Building2 className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-bold text-slate-500 group-hover:text-text-main transition-colors text-center">{partner.name}</span>
                    </div>`;

const newRender = `<div className="flex flex-col items-center gap-3">
                      <div className="w-24 h-24 relative flex items-center justify-center">
                        <CloudinaryImage src={partner.logo} alt={partner.name} width={200} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-sm font-bold text-slate-500 group-hover:text-text-main transition-colors text-center">{partner.name}</span>
                    </div>`;

content = content.replace(oldRender, newRender);

fs.writeFileSync('src/components/home/SuccessPartners.tsx', content);
console.log('SuccessPartners.tsx patched');
