const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('request', request => {
    console.log('>>', request.method(), request.url());
  });

  await page.goto('https://collection.cloudinary.com/erfajaoa/a08134899068c8b7e12fb99fdb7bee7e', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
