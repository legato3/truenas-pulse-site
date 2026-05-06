// Generate favicon set, apple-touch-icon, OG image, and webmanifest from the
// app icon master. Run with `bun run scripts/generate-assets.mjs` whenever the
// master art changes; outputs land in /public/.
//
// Master source: TrueNAS-Pulse repo at assets/icon/TrueNAS_Pulse_AppIcon_Master_UNMASKED_1024.png
// We default to that file; fall back to ./public/icon-master.png if a copy was
// staged inside this repo.
import sharp from "sharp";
import { existsSync, mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const PUB = resolve(ROOT, "public");
mkdirSync(PUB, { recursive: true });

const candidateMasters = [
  resolve(ROOT, "public", "icon-master.png"),
  resolve(
    ROOT,
    "..",
    "TrueNAS-Pulse",
    "assets",
    "icon",
    "TrueNAS_Pulse_AppIcon_Master_UNMASKED_1024.png",
  ),
];

const master = candidateMasters.find((p) => existsSync(p));
if (!master) {
  console.error("[generate-assets] master icon not found at any of:");
  for (const c of candidateMasters) console.error("  -", c);
  process.exit(1);
}

console.log("[generate-assets] master:", master);

// 1. apple-touch-icon (iOS Home Screen, 180×180 — Apple's canonical size)
await sharp(master)
  .resize(180, 180, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toFile(resolve(PUB, "apple-touch-icon.png"));

// 2. favicon-32 (browser tab) + 16 (legacy)
await sharp(master).resize(32, 32).png().toFile(resolve(PUB, "favicon-32.png"));
await sharp(master).resize(16, 16).png().toFile(resolve(PUB, "favicon-16.png"));

// 3. PWA-style icons for the webmanifest
for (const size of [192, 512]) {
  await sharp(master)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(resolve(PUB, `icon-${size}.png`));
}

// 4. SVG favicon: a tiny pulse glyph that matches the in-page header logo.
//    Browsers prefer SVG when both are available — wins on all DPRs.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#0a0a0b"/>
  <circle cx="16" cy="16" r="11" fill="none" stroke="#56b3e6" stroke-opacity="0.55" stroke-width="1.6"/>
  <circle cx="16" cy="16" r="4.5" fill="#56b3e6"/>
</svg>`;
writeFileSync(resolve(PUB, "favicon.svg"), faviconSvg);

// 5. Plain favicon.ico fallback (just a 32×32 PNG renamed — modern browsers accept it).
copyFileSync(resolve(PUB, "favicon-32.png"), resolve(PUB, "favicon.ico"));

// 6. OG / Twitter card — 1200×630, brand colors, plain composition.
//    Pure SVG composed and rasterized via sharp. No external font fetch — we
//    use system sans-serif so the build is reproducible offline.
const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0b"/>
      <stop offset="100%" stop-color="#15161a"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#56b3e6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#56b3e6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(80, 110)">
    <circle cx="36" cy="36" r="32" fill="none" stroke="#56b3e6" stroke-opacity="0.55" stroke-width="3"/>
    <circle cx="36" cy="36" r="13" fill="#56b3e6"/>
  </g>
  <text x="80" y="290" font-family="-apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif" font-size="76" font-weight="600" fill="#ffffff" letter-spacing="-2">TrueNAS Pulse</text>
  <text x="80" y="356" font-family="-apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif" font-size="34" font-weight="400" fill="#9aa0a6" letter-spacing="-0.5">Third-Party SCALE Monitor — native iOS.</text>
  <text x="80" y="438" font-family="-apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif" font-size="22" font-weight="400" fill="#737a87">Free live monitoring, 1-hour history, one local monitor.</text>
  <text x="80" y="468" font-family="-apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif" font-size="22" font-weight="400" fill="#737a87">Pro adds fleet, 30-day reporting, lifecycle, Server Console.</text>
  <g transform="translate(80, 540)">
    <circle cx="6" cy="6" r="6" fill="#38ad70"/>
    <text x="22" y="11" font-family="-apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif" font-size="20" font-weight="500" fill="#ffffff">truenaspulse.com</text>
  </g>
</svg>`);
await sharp(ogSvg).png({ compressionLevel: 9 }).toFile(resolve(PUB, "og-image.png"));

// 7. Web manifest (PWA-ready; site is fully static so it's a courtesy file).
const manifest = {
  name: "TrueNAS Pulse",
  short_name: "Pulse",
  description: "Third-Party SCALE Monitor — native iOS app for TrueNAS SCALE.",
  start_url: "/",
  display: "browser",
  background_color: "#0a0a0b",
  theme_color: "#0a0a0b",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
};
writeFileSync(
  resolve(PUB, "site.webmanifest"),
  JSON.stringify(manifest, null, 2),
);

// 8. robots.txt
writeFileSync(
  resolve(PUB, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: https://truenaspulse.com/sitemap-index.xml\n`,
);

console.log("[generate-assets] wrote:");
for (const f of [
  "favicon.svg",
  "favicon.ico",
  "favicon-16.png",
  "favicon-32.png",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "og-image.png",
  "site.webmanifest",
  "robots.txt",
]) {
  console.log(`  - public/${f}`);
}
