import fs from "fs";
import path from "path";
import { getAllRoutes, injectSeoIntoHtml, generate404Html } from "../src/seo/routesRegistry";

async function prerender() {
  console.log("🚀 Starting SEO Pre-rendering & Static HTML generation...");

  const distDir = path.resolve(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Error: ${templatePath} not found! Run 'vite build' first.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(templatePath, "utf-8");
  const routes = getAllRoutes();

  let generatedCount = 0;

  for (const [routePath, routeData] of routes.entries()) {
    const html = injectSeoIntoHtml(templateHtml, routeData);

    let targetFile: string;
    if (routePath === "/") {
      targetFile = path.join(distDir, "index.html");
    } else {
      const cleanPath = routePath.replace(/^\/+/, "");
      const targetDir = path.join(distDir, cleanPath);
      fs.mkdirSync(targetDir, { recursive: true });
      targetFile = path.join(targetDir, "index.html");
    }

    fs.writeFileSync(targetFile, html, "utf-8");
    generatedCount++;
  }

  // Generate 404.html
  const notFoundHtml = generate404Html(templateHtml, "/404");
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf-8");
  console.log("✅ Generated dist/404.html");

  // Also write 404.html to public/ for dev/preview fallback if needed
  fs.writeFileSync(path.resolve(process.cwd(), "public", "404.html"), notFoundHtml, "utf-8");

  console.log(`✅ Pre-rendered ${generatedCount} route-specific HTML pages into dist/`);

  // Generate updated sitemap.xml
  generateSitemap(routes);
}

function generateSitemap(routes: ReturnType<typeof getAllRoutes>) {
  const baseUrl = "https://www.rayatnajd.com";
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const [routePath, data] of routes.entries()) {
    // Skip non-indexable routes
    if (data.robots && data.robots.includes("noindex")) {
      continue;
    }

    let priority = "0.7";
    let changefreq = "weekly";

    if (routePath === "/") {
      priority = "1.0";
      changefreq = "weekly";
    } else if (routePath.startsWith("/service/")) {
      priority = "0.9";
      changefreq = "weekly";
    } else if (routePath.startsWith("/projects/")) {
      priority = "0.8";
      changefreq = "monthly";
    } else if (routePath === "/projects" || routePath === "/blog" || routePath === "/knowledge") {
      priority = "0.9";
      changefreq = "weekly";
    } else if (routePath.startsWith("/blog/")) {
      priority = "0.8";
      changefreq = "monthly";
    } else if (routePath.startsWith("/knowledge/pillar/")) {
      priority = "0.9";
      changefreq = "weekly";
    } else if (routePath.startsWith("/knowledge/cluster/") || routePath.startsWith("/knowledge/article/")) {
      priority = "0.8";
      changefreq = "monthly";
    } else if (routePath === "/about" || routePath === "/contact" || routePath === "/catalog") {
      priority = "0.8";
      changefreq = "monthly";
    } else if (routePath.startsWith("/tools")) {
      priority = "0.7";
      changefreq = "monthly";
    } else if (["/terms", "/privacy", "/warranty", "/return-policy"].includes(routePath)) {
      priority = "0.3";
      changefreq = "yearly";
    }

    xml += `  <url>\n`;
    xml += `    <loc>${data.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const publicSitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
  const distSitemapPath = path.resolve(process.cwd(), "dist", "sitemap.xml");

  fs.writeFileSync(publicSitemapPath, xml, "utf-8");
  console.log(`✅ Updated public/sitemap.xml with ${routes.size} canonical routes`);

  if (fs.existsSync(path.resolve(process.cwd(), "dist"))) {
    fs.writeFileSync(distSitemapPath, xml, "utf-8");
    console.log(`✅ Updated dist/sitemap.xml`);
  }
}

prerender().catch(err => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
