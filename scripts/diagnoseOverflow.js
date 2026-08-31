import puppeteer from 'puppeteer';

const VIEWPORTS = [
  { width: 320, height: 640, name: '320px' },
  { width: 360, height: 740, name: '360px' },
  { width: 375, height: 667, name: '375px' },
  { width: 390, height: 844, name: '390px' },
  { width: 393, height: 852, name: '393px' },
  { width: 412, height: 915, name: '412px' },
  { width: 430, height: 932, name: '430px' }
];

const ROUTES = [
  '/',
  '/service/palms',
  '/projects',
  '/contact',
  '/about',
  '/tools'
];

async function checkRoute(page, route, vp) {
  await page.setViewport({ width: vp.width, height: vp.height });
  await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {});
  
  // Wait a little for motion animations / carousels to stabilize
  await new Promise(r => setTimeout(r, 1000));

  const result = await page.evaluate((vpWidth) => {
    const docEl = document.documentElement;
    const body = document.body;
    
    const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
    const clientW = docEl.clientWidth;

    const overflowingElements = [];
    const all = document.querySelectorAll('*');

    for (const el of all) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      // Skip hidden / display none elements
      if (style.display === 'none' || style.visibility === 'hidden' || rect.width === 0 || rect.height === 0) {
        continue;
      }

      const isOverflowingRight = rect.right > vpWidth + 1;
      const isOverflowingLeft = rect.left < -1;
      const hasLargeScrollWidth = el.scrollWidth > vpWidth + 1 && style.overflowX !== 'hidden' && style.overflowX !== 'clip';

      if (isOverflowingRight || isOverflowingLeft || hasLargeScrollWidth) {
        let identifier = el.tagName.toLowerCase();
        if (el.id) identifier += `#${el.id}`;
        if (el.className && typeof el.className === 'string') {
          identifier += `.${el.className.trim().split(/\s+/).slice(0, 3).join('.')}`;
        }

        overflowingElements.push({
          identifier,
          rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          text: el.innerText ? el.innerText.slice(0, 40).replace(/\n/g, ' ') : '',
          isOverflowingRight,
          isOverflowingLeft,
          hasLargeScrollWidth
        });
      }
    }

    return {
      scrollWidth: scrollW,
      clientWidth: clientW,
      diff: scrollW - clientW,
      overflowingCount: overflowingElements.length,
      overflowingElements: overflowingElements.slice(0, 15) // Top 15
    };
  }, vp.width);

  return result;
}

async function run() {
  console.log('=== MOBILE RESPONSIVE OVERFLOW AUDIT ===\n');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    console.log(`\n----------------- ROUTE: ${route} -----------------`);
    for (const vp of VIEWPORTS) {
      const res = await checkRoute(page, route, vp);
      const status = res.diff === 0 ? 'PASS' : `FAIL (+${res.diff}px)`;
      console.log(`[${vp.name}] Client: ${res.clientWidth}px | Scroll: ${res.scrollWidth}px -> ${status}`);
      if (res.diff > 0 || res.overflowingCount > 0) {
        console.log(`  Found ${res.overflowingCount} overflowing elements:`);
        res.overflowingElements.forEach((el, idx) => {
          console.log(`   ${idx + 1}. <${el.identifier}> [left:${el.rect.left}, right:${el.rect.right}, width:${el.rect.width}, scrollW:${el.scrollWidth}] text: "${el.text}"`);
        });
      }
    }
  }

  await browser.close();
}

run().catch(console.error);
