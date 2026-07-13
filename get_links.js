import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://collection.cloudinary.com/erfajaoa/cdd9b304ff2aa718bb8c8f3d36e0c125', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000));
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  console.log(JSON.stringify(links, null, 2));
  await browser.close();
})();
