const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://collection.cloudinary.com/erfajaoa/cdd9b304ff2aa718bb8c8f3d36e0c125', { waitUntil: 'networkidle2' });
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
