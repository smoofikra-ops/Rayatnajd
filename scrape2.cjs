const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://collection.cloudinary.com/erfajaoa/7f31b774b832aa0e2371240f54878595', { waitUntil: 'networkidle2' });
  await page.waitForTimeout(5000);
  
  const images = await page.evaluate(() => {
    const urls = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        urls.push(bg);
      }
      if (el.tagName.toLowerCase() === 'img') {
        urls.push(el.src);
      }
    });
    return urls;
  });
  
  console.log(JSON.stringify(images, null, 2));
  await browser.close();
})();
