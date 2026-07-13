const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  // clear cache
  const client = await page.target().createCDPSession();
  await client.send('Network.clearBrowserCache');
  await client.send('Network.clearBrowserCookies');

  await page.goto('https://collection.cloudinary.com/erfajaoa/a08134899068c8b7e12fb99fdb7bee7e', { waitUntil: 'networkidle2' });
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
