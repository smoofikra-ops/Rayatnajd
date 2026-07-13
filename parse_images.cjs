const fs = require('fs');
const images = JSON.parse(fs.readFileSync('scrape11_output.json', 'utf8') || '[]');
console.log(images.length);
