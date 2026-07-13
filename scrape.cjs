const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://collection.cloudinary.com/erfajaoa/7f31b774b832aa0e2371240f54878595', { waitUntil: 'networkidle2' });
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  
  console.log(JSON.stringify(images, null, 2));
  await browser.close();
})();
