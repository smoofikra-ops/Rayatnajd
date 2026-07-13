import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
