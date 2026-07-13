const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://collection.cloudinary.com/erfajaoa/a08134899068c8b7e12fb99fdb7bee7e', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));
  
  const images = await page.evaluate(() => {
    const urls = [];
    document.querySelectorAll('img').forEach(el => {
      if (el.src.includes('cloudinary.com') && !el.src.includes('logo')) {
        urls.push(el.src);
      }
    });
    return urls;
  });
  
  console.log(JSON.stringify(images, null, 2));
  await browser.close();
})();
