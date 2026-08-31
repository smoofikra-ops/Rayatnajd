import puppeteer from 'puppeteer';

const VIEWPORTS = [320, 360, 375, 390, 393, 412, 430];

const ROUTES = [
  '/',
  '/service/palms',
  '/projects',
  '/projects/umm-shalfah-afforestation',
  '/contact',
  '/about',
  '/tools'
];

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    console.log(`\n================== ROUTE: ${route} ==================`);
    for (const w of VIEWPORTS) {
      await page.setViewport({ width: w, height: 800 });
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 600));

      const report = await page.evaluate((vpWidth) => {
        const docEl = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
        const clientWidth = docEl.clientWidth;

        const culprits = [];
        const all = Array.from(document.querySelectorAll('*'));

        for (const el of all) {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);

          if (style.display === 'none' || style.visibility === 'hidden') continue;

          // Check if element spills past right or left of viewport
          const overflowRight = Math.round(rect.right - vpWidth);
          const overflowLeft = Math.round(-rect.left);

          if (overflowRight > 1 || overflowLeft > 1) {
            culprits.push({
              tag: el.tagName.toLowerCase(),
              id: el.id || '',
              classes: el.className && typeof el.className === 'string' ? el.className.split(/\s+/).slice(0, 3).join('.') : '',
              overflowRight: overflowRight > 1 ? overflowRight : 0,
              overflowLeft: overflowLeft > 1 ? overflowLeft : 0,
              rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
              text: el.innerText ? el.innerText.trim().slice(0, 30).replace(/\n/g, ' ') : ''
            });
          }
        }

        return {
          scrollWidth,
          clientWidth,
          diff: scrollWidth - clientWidth,
          culpritsCount: culprits.length,
          topCulprits: culprits.filter(c => c.overflowRight > 5 || c.overflowLeft > 5).slice(0, 10)
        };
      }, w);

      console.log(`Width ${w}px -> clientWidth: ${report.clientWidth}, scrollWidth: ${report.scrollWidth} [Diff: ${report.diff}px]`);
      if (report.topCulprits.length > 0) {
        console.log(`  Top overflowing elements at ${w}px:`);
        report.topCulprits.forEach((c, idx) => {
          console.log(`   ${idx + 1}. <${c.tag}${c.id ? '#' + c.id : ''}.${c.classes}> [L:${c.rect.left} R:${c.rect.right} W:${c.rect.width}] (overRight: ${c.overflowRight}, overLeft: ${c.overflowLeft}) text: "${c.text}"`);
        });
      }
    }
  }

  await browser.close();
}

run().catch(console.error);
