import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { getAllRoutes, injectSeoIntoHtml, generate404Html } from "./src/seo/routesRegistry";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === "production";
  const routes = getAllRoutes();

  app.use(express.json());

  // API routes
  app.post("/api/weather-planting", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required");
      }
      
      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const { region, season } = req.body;
      const prompt = `Based on the current season (${season}) and real-time weather/temperature in the region of ${region} in Saudi Arabia, what is the best time for planting native trees? Please provide a brief recommendation (under 50 words) specifically mentioning the temperature and conditions. Please respond in Arabic.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      res.json({ recommendation: response.text });
    } catch (error: any) {
      const errorStr = JSON.stringify(error) + String(error?.message || error);
      const isQuotaError = error?.status === 429 || error?.status === "RESOURCE_EXHAUSTED" || errorStr.includes("429") || errorStr.includes("quota") || errorStr.includes("RESOURCE_EXHAUSTED");
      
      if (!isQuotaError) {
        console.error("Gemini API error:", error.message || error);
      }
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "GEMINI_API_KEY environment variable is missing. Please configure it in the app settings." });
      }

      // Handle quota limit gracefully
      if (isQuotaError) {
        return res.json({ 
          recommendation: "عذراً، تم تجاوز الحد الأقصى للطلبات مؤقتاً. يُنصح بالزراعة في الصباح الباكر أو المساء لتجنب حرارة الظهيرة، مع التركيز على النباتات المحلية المقاومة للجفاف." 
        });
      }

      res.status(500).json({ error: "Gemini API error: " + (error.message || "Unknown error") });
    }
  });

  let vite: any = null;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));
  }

  // Handle HTML rendering with Route-Specific SEO and true HTTP 404
  app.get("*all", async (req, res, next) => {
    const rawUrl = req.path;

    // Redirect trailing slashes (except root "/")
    if (rawUrl.length > 1 && rawUrl.endsWith("/")) {
      const cleanUrl = rawUrl.slice(0, -1);
      const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
      return res.redirect(301, cleanUrl + query);
    }

    // Skip API, Vite internals, and static assets with extensions
    if (
      rawUrl.startsWith("/api/") ||
      rawUrl.startsWith("/@") ||
      rawUrl.startsWith("/src/") ||
      rawUrl.startsWith("/node_modules/") ||
      path.extname(rawUrl) !== ""
    ) {
      return next();
    }

    try {
      let template: string;
      if (!isProd) {
        const rawTemplate = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, rawTemplate);
      } else {
        const distTemplatePath = path.join(process.cwd(), "dist", "index.html");
        template = fs.readFileSync(distTemplatePath, "utf-8");
      }

      // Check if route exists in registry
      const routeData = routes.get(rawUrl);

      if (routeData) {
        const html = injectSeoIntoHtml(template, routeData);
        return res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).send(html);
      }

      // Check for internal preview route
      if (rawUrl.startsWith("/internal/")) {
        const internalRoute = {
          path: rawUrl,
          title: "معاينة داخلية | رايات نجد",
          description: "معاينة داخلية للمراجعة فقط - غير مفهرسة",
          canonical: `https://www.rayatnajd.com${rawUrl}`,
          ogImage: "https://www.rayatnajd.com/og/rayat-najd-social-share.jpg",
          robots: "noindex, nofollow",
          h1: "معاينة داخلية",
          leadParagraph: "هذه الصفحة مخصصة للمعاينة الداخلية فقط.",
          jsonLd: {},
          initialHtml: ""
        };
        const html = injectSeoIntoHtml(template, internalRoute);
        return res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).send(html);
      }

      // Route NOT found: return true HTTP 404
      const notFoundHtml = generate404Html(template, rawUrl);
      return res.status(404).set({ "Content-Type": "text/html; charset=utf-8" }).send(notFoundHtml);
    } catch (err) {
      console.error("Error serving HTML:", err);
      if (!isProd && vite) {
        vite.ssrFixStacktrace(err);
      }
      return res.status(500).send("Internal Server Error");
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
