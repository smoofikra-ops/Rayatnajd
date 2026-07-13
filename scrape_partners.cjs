const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://collection.cloudinary.com/erfajaoa/f0dfed3ad0d3041a9b36ba788c87414c', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 6000));
  
  const images = await page.evaluate(() => {
    const urls = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg.includes('cloudinary.com') && bg !== 'none') {
        urls.push(bg);
      }
      if (el.tagName.toLowerCase() === 'img' && el.src.includes('cloudinary.com')) {
        urls.push(el.src);
      }
    });
    return urls;
  });
  
  console.log(JSON.stringify(images, null, 2));
  await browser.close();
})();
