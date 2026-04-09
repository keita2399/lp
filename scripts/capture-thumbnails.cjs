// Run from portfolio dir: node ../lp/scripts/capture-thumbnails.cjs
const { chromium } = require("C:/dev/portfolio/node_modules/playwright");
const path = require("path");


const OUT = path.join(__dirname, "../public/thumbnails");

const targets = [
  {
    slug: "estimate-ai",
    url: "https://estimate-ai-xi.vercel.app/flow",
    file: "estimate-ai.png",
    delay: 5000,
  },
  {
    slug: "excel-to-web",
    url: "https://estimate-ai-xi.vercel.app/excel",
    file: "excel-to-web.png",
    delay: 5000,
  },
  {
    slug: "contract-checker",
    url: "https://contract-checker-vert.vercel.app",
    file: "contract-checker.png",
    delay: 4000,
  },
  {
    slug: "receipt-scanner",
    url: "https://receipt-scanner-iota.vercel.app",
    file: "receipt-scanner.png",
    delay: 4000,
  },
  {
    slug: "ai-document-checker",
    url: "https://ai-document-checker-keita2399s-projects.vercel.app",
    file: "ai-document-checker.png",
    delay: 4000,
  },
  {
    slug: "travel-time-app",
    url: "https://travel-time-app-keita2399s-projects.vercel.app",
    file: "travel-time-app.png",
    delay: 5000,
  },
  {
    slug: "line-notify-app",
    url: "https://line-notify-app-keita2399s-projects.vercel.app",
    file: "line-notify-app.png",
    delay: 4000,
  },
  {
    slug: "line-claude-sync",
    url: "https://portfolio-two-orpin-45.vercel.app/demo/chat",
    file: "line-claude-sync.png",
    delay: 4000,
  },
];

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1.5,
  });

  for (const t of targets) {
    console.log(`Capturing: ${t.slug} → ${t.url}`);
    const page = await ctx.newPage();
    try {
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      try {
        await page.waitForSelector("main, #__next, body", { timeout: 8000 });
      } catch (_) {}
      await page.waitForTimeout(t.delay);

      const outPath = path.join(OUT, t.file);
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: 1280, height: 720 },
      });
      console.log(`  ✓ Saved ${t.file}`);
    } catch (err) {
      console.error(`  ✗ Failed ${t.slug}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Done.");
}

capture().catch(console.error);
