const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', async (response) => {
    if (response.url().includes('api')) {
      try {
        const text = await response.text();
        if (text.includes('resources')) {
          console.log('API Response:', text);
        }
      } catch (e) {}
    }
  });

  await page.goto('https://collection.cloudinary.com/erfajaoa/a08134899068c8b7e12fb99fdb7bee7e', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));
  await browser.close();
})();
