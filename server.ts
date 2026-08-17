import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "10mb" }));

// Server-side Gemini AI integration for Clinical Fertility Assistant
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "AURA Fertility & IVF API",
    timestamp: new Date().toISOString(),
    aiEnabled: Boolean(process.env.GEMINI_API_KEY)
  });
});

app.post("/api/ai-fertility-consult", async (req, res) => {
  try {
    const { message, history, patientContext } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAIClient();
    if (!ai) {
      // Fallback with rich clinical heuristic guidance if no API key is set
      const response = generateClinicalFallbackResponse(message, patientContext);
      return res.json({ response, source: "clinical_engine_fallback" });
    }

    const systemPrompt = `You are "Dr. Aura AI", the Senior Reproductive Endocrinology & Fertility Clinical Copilot at AURA Institute of Reproductive Medicine & IVF (India's premier fertility network).
Your tone is empathetic, scientifically rigorous, reassuring, world-class, and crystal clear.
Guidelines:
1. Explain medical terms (AMH, AFC, ICSI, Blastocyst, PGT-A, Endometrial Receptivity, ERA, Beta-hCG) in accessible, comforting terms.
2. Provide clear diagnostic insights, lifestyle adjustments, and recommend the appropriate clinical consultations without replacing official in-person medical diagnosis.
3. If patient mentions age, AMH, failed IVF cycles, or duration of trying, provide realistic cumulative success odds and explain modern technologies like Day-5 Blastocyst culture, Laser Hatching, and PGT-A.
4. Highlight AURA's zero-hidden-cost guarantee, 84.6% cumulative blastocyst success rate, and 24/7 dedicated embryology oversight.
5. Format key points with clean bullet points and short paragraphs for readability.`;

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `${systemPrompt}\n\nPatient Context: ${JSON.stringify(patientContext || {})}\n\nUser Question: ${message}`
          }
        ]
      }
    ];

    const modelResponse = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
    });

    const responseText = modelResponse.text || "Thank you for reaching out to AURA Fertility. Our senior clinical specialists are available to review your case in detail.";

    return res.json({
      response: responseText,
      source: "gemini-3.7-flash"
    });
  } catch (error: any) {
    console.error("AI Fertility Consultation error:", error);
    // Graceful fallback
    const fallback = generateClinicalFallbackResponse(req.body?.message || "", req.body?.patientContext);
    return res.json({
      response: fallback,
      source: "clinical_engine_fallback"
    });
  }
});

function generateClinicalFallbackResponse(msg: string, context?: any): string {
  const query = msg.toLowerCase();
  
  if (query.includes("amh") || query.includes("ovarian reserve")) {
    return `### Understanding Your AMH & Ovarian Reserve

**Anti-Müllerian Hormone (AMH)** is a key biomarker produced by granulosa cells in growing ovarian follicles. Here is how we interpret your parameters at AURA:

* **Optimal Range (> 2.0 ng/mL):** Robust follicular reserve, typically predicting a strong response to mild/standard gonadotropin stimulation.
* **Borderline Range (1.0 – 2.0 ng/mL):** Moderate reserve; we recommend customized individualized stimulation (COS) with recombinant FSH to maximize egg maturity.
* **Diminished Ovarian Reserve (< 1.0 ng/mL):** At AURA, low AMH is **not** a barrier to biological parenthood. We utilize our specialized **DOR Protocol** combining DHEA/CoQ10 priming, dual stimulation (DuoStim), and micro-dose flare protocols to optimize egg quality over quantity.

**Next Recommended Step:** We suggest combining AMH with an **Antral Follicle Count (AFC)** ultrasound scan on Day 2/3 of your cycle. Would you like to schedule a complimentary second opinion with our Senior Reproductive Endocrinologist?`;
  }

  if (query.includes("cost") || query.includes("price") || query.includes("package") || query.includes("emi")) {
    return `### Transparent IVF & Treatment Pricing at AURA

At AURA, we uphold a **100% Zero-Hidden-Cost Transparency Guarantee**. Every package includes standard laboratory, embryology, and procedural fees:

* **Standard IVF Protocol:** ₹1,10,000 – ₹1,35,000 (Includes egg retrieval, ICSI, and fresh transfer)
* **Advanced Blastocyst (Day 5) + PICSI:** ₹1,55,000 – ₹1,85,000 (Includes time-lapse incubation and laser hatching)
* **PGT-A Screened Comprehensive Cycle:** ₹2,10,000 – ₹2,60,000 (Comprehensive chromosomal aneuploidy screening)
* **Social Egg Freezing (10-Year Storage Option):** ₹85,000 – ₹1,15,000

💳 **0% Interest No-Cost EMI Available:** Flexible 6, 12, and 18-month tenure through our healthcare finance partners (starting at ₹7,999/month). 

Would you like our financial concierge to share a customized breakdown for your city?`;
  }

  if (query.includes("failed") || query.includes("recurrent") || query.includes("implantation")) {
    return `### Hope After Previous IVF Setbacks

Over 35% of couples who achieve successful pregnancies at AURA joined us after experiencing 1 to 4 failed cycles elsewhere. We specialize in **Recurrent Implantation Failure (RIF)** using advanced interventions:

1. **AI-Driven Time-Lapse Embryo Monitoring:** Non-invasive kinetic evaluation selecting the highest-viability blastocyst.
2. **Endometrial Receptivity Analysis (ERA):** Pinpoints your precise personal "window of implantation".
3. **PGT-A Screening:** Prevents transferring chromosomally abnormal embryos, which cause >60% of early implantation failures.
4. **Immunological Mapping & PRP Instillation:** Rejuvenates thin endometrium (<7mm).

We are here with you. Would you like to have your previous lab reports reviewed by our Medical Board?`;
  }

  return `### Thank You for Inquiring with AURA Institute

At AURA, every fertility journey is treated as a unique scientific and human endeavor. Our team of internationally trained embryologists and reproductive medicine pioneers achieve an industry-leading **84.6% blastocyst transfer success rate**.

**How we can assist you today:**
* **Book an HD Virtual Consultation** with a top fertility specialist.
* **Get a Free Review of Your Prior Scans & Semen/AMH Reports**.
* **Calculate Your Personalized Fertility Score** using our clinical estimator below.

Feel free to ask about specific procedures (IVF, ICSI, IUI, PGT-A, Egg Freezing), medications, or financial plans!`;
}

// Vite middleware in dev / Static files in production
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const startServer = (port: number) => {
    const server = app.listen(port, "0.0.0.0", () => {
      console.log(`✨ AURA Fertility & IVF Server running on http://0.0.0.0:${port}`);
    });

    server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "EADDRINUSE") {
        console.warn(`Port ${port} is busy, retrying on ${port + 1}...`);
        startServer(port + 1);
        return;
      }
      throw error;
    });
  };

  startServer(DEFAULT_PORT);
}

setupVite();
