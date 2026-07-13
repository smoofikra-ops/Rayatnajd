const fs = require('fs');

const rawUrls = JSON.parse(fs.readFileSync('scrape11_output.json', 'utf8'));
const validUrls = rawUrls
  .filter(url => !url.includes('cloudinary_logo') && !url.includes('customer-logos'))
  .map(url => url.replace('h_250,fl_preserve_transparency/', '').split('?')[0]);

// Categorize them based on date/time pattern in the URL
let categorizedGallery = [];
validUrls.forEach((url, i) => {
  let cat = 'trees';
  if (url.includes('2026-07-03')) {
    cat = 'projects';
  } else if (url.includes('11.52')) {
    cat = 'nurseries';
  } else {
    cat = 'trees';
  }
  categorizedGallery.push({ url, category: cat });
});

// Write to a temporary JSON file to inspect
fs.writeFileSync('categorized.json', JSON.stringify(categorizedGallery, null, 2));
console.log('Total valid images:', categorizedGallery.length);
