/**
 * Single-source-of-truth for site-wide identity copy and links.
 *
 * Canonical brand language lives in /app/repos/TrueNAS-Pulse/docs/APP_STORE_METADATA.md
 * and /app/repos/TrueNAS-Pulse/docs/MONETIZATION.md — when those change, update here too.
 */
export const site = {
  name: "TrueNAS Pulse",
  subtitle: "Third-Party SCALE Monitor",
  tagline:
    "Free live monitoring, 1-hour history, and one included monitor for TrueNAS SCALE — with Pro admin tools when you need more control.",
  origin: "https://pulse.phobos-cc.be",
  appStoreUrl: "https://apps.apple.com/app/id6759870893",
  appStoreId: "6759870893",
  supportEmail: "support@phobos-cc.be",
  supportUrl: "https://github.com/phobos-/TrueNAS-Pulse/issues",
  bundleId: "Phobos.TrueNAS-Pulse",
  trademarkLine:
    "TrueNAS® is a registered trademark of iXsystems, Inc. TrueNAS Pulse is an independent third-party application and is not affiliated with, endorsed by, or sponsored by iXsystems.",
  trustLine: "One-time purchase. No subscription. No tracking.",
} as const;

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pro", label: "Pro" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/eula", label: "EULA" },
  { href: "/contact", label: "Contact" },
  { href: "/press", label: "Press" },
] as const;
