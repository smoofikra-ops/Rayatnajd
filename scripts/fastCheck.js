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

  // Test with body overflow-x unset to reveal TRUE overflows
  await page.evaluateOnNewDocument(() => {
    window.addEventListener('DOMContentLoaded', () => {
      // document.body.style.overflowX = 'visible';
    });
  });

  for (const route of ROUTES) {
    console.log(`\n>>> ROUTE: ${route}`);
    for (const w of VIEWPORTS) {
      await page.setViewport({ width: w, height: 800 });
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });

      const data = await page.evaluate((vpWidth) => {
        // Find any element whose bounding box extends beyond the viewport
        const badElements = [];
        const elements = document.querySelectorAll('*');
        
        for (const el of elements) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;

          // Check if right edge exceeds viewport or left edge is negative
          if (rect.right > vpWidth + 0.5 || rect.left < -0.5) {
            // Check if contained inside an element with overflow:hidden / clip
            let p = el.parentElement;
            let clipped = false;
            while (p && p !== document.body && p !== document.documentElement) {
              const ps = window.getComputedStyle(p);
              if (ps.overflowX === 'hidden' || ps.overflowX === 'clip' || ps.overflow === 'hidden') {
                const pr = p.getBoundingClientRect();
                if (rect.right <= pr.right + 0.5 && rect.left >= pr.left - 0.5) {
                  clipped = true;
                  break;
                }
              }
              p = p.parentElement;
            }

            if (!clipped) {
              let sel = el.tagName.toLowerCase();
              if (el.id) sel += `#${el.id}`;
              if (el.className && typeof el.className === 'string') {
                sel += `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}`;
              }
              badElements.push({
                sel,
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                text: el.innerText ? el.innerText.trim().slice(0, 25) : ''
              });
            }
          }
        }

        return {
          docScrollW: document.documentElement.scrollWidth,
          bodyScrollW: document.body.scrollWidth,
          clientW: document.documentElement.clientWidth,
          badCount: badElements.length,
          badElements: badElements.slice(0, 5)
        };
      }, w);

      const status = (data.docScrollW === w && data.bodyScrollW <= w && data.badCount === 0) ? 'PASS' : 'WARN/FAIL';
      console.log(`[${w}px] status: ${status} | clientW: ${data.clientW} | docScrollW: ${data.docScrollW} | bodyScrollW: ${data.bodyScrollW} | unclipped bad elements: ${data.badCount}`);
      if (data.badElements.length > 0) {
        data.badElements.forEach((b, idx) => {
          console.log(`    ${idx+1}. <${b.sel}> [L:${b.left}, R:${b.right}, W:${b.width}] "${b.text}"`);
        });
      }
    }
  }

  await browser.close();
}

run().catch(console.error);
