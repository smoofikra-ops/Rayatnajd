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
      await new Promise(r => setTimeout(r, 400));

      const report = await page.evaluate((vpWidth) => {
        // Temporarily check unmasked overflow by inspecting element bounding boxes
        const all = Array.from(document.querySelectorAll('*'));
        const offending = [];

        for (const el of all) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;

          // An element whose right edge > vpWidth + 1 or left edge < -1
          // AND which is NOT clipped by an ancestor with overflow hidden/clip
          if (rect.right > vpWidth + 1.5 || rect.left < -1.5) {
            let parent = el.parentElement;
            let isClipped = false;
            while (parent && parent !== document.body && parent !== document.documentElement) {
              const pStyle = window.getComputedStyle(parent);
              if (pStyle.overflowX === 'hidden' || pStyle.overflowX === 'clip') {
                const pRect = parent.getBoundingClientRect();
                if (rect.right <= pRect.right + 1 && rect.left >= pRect.left - 1) {
                  isClipped = true;
                  break;
                }
              }
              parent = parent.parentElement;
            }

            if (!isClipped) {
              let tag = el.tagName.toLowerCase();
              if (el.id) tag += `#${el.id}`;
              const cls = el.className && typeof el.className === 'string' ? el.className.split(/\s+/).slice(0, 3).join('.') : '';
              offending.push({
                tag: `${tag}.${cls}`,
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                scrollWidth: el.scrollWidth,
                text: el.innerText ? el.innerText.trim().slice(0, 30).replace(/\n/g, ' ') : ''
              });
            }
          }
        }

        return {
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          offendingCount: offending.length,
          topOffending: offending.slice(0, 8)
        };
      }, w);

      console.log(`[${w}px] clientW: ${report.clientWidth} | docScrollW: ${report.scrollWidth} | bodyScrollW: ${report.bodyScrollWidth} | unclipped overflowing: ${report.offendingCount}`);
      if (report.topOffending.length > 0) {
        report.topOffending.forEach((o, i) => {
          console.log(`  ${i+1}. <${o.tag}> [L:${o.left}, R:${o.right}, W:${o.width}, scrollW:${o.scrollWidth}] "${o.text}"`);
        });
      }
    }
  }

  await browser.close();
}

run().catch(console.error);
