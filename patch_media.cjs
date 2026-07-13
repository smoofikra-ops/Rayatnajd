const fs = require('fs');

const categorized = JSON.parse(fs.readFileSync('categorized.json', 'utf8'));

let mediaCode = fs.readFileSync('src/data/media.ts', 'utf8');

// Replace gallery: [ ... ] with new gallery
const galleryStart = mediaCode.indexOf('gallery: [');
const galleryEnd = mediaCode.lastIndexOf(']') + 1;

if (galleryStart !== -1 && galleryEnd !== -1) {
  const newGalleryCode = 'gallery: [\n' + categorized.map(item => `    { url: "${item.url}", category: "${item.category}" }`).join(',\n') + '\n  ]';
  mediaCode = mediaCode.substring(0, galleryStart) + newGalleryCode + mediaCode.substring(galleryEnd);
  fs.writeFileSync('src/data/media.ts', mediaCode);
  console.log('Patched media.ts');
} else {
  console.log('Could not find gallery in media.ts');
}
