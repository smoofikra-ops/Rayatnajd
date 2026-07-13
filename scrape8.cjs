const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', async (response) => {
    if (response.url().includes('collection.cloudinary.com/api')) {
      try {
        const json = await response.json();
        console.log('API Response JSON for', response.url());
        console.log(JSON.stringify(json).substring(0, 500));
        
        if (json.assets) {
           console.log("Found assets:");
           json.assets.forEach(a => console.log(a.secure_url || a.url));
        }
      } catch (e) {}
    }
  });

  await page.goto('https://collection.cloudinary.com/erfajaoa/a08134899068c8b7e12fb99fdb7bee7e', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));
  await browser.close();
})();
