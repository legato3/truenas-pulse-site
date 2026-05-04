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
    "Built for sysadmins, operators, and homelab users who need fast infrastructure visibility and safe remote remediation — away from a browser.",
  /** The shorter promo line from APP_STORE_METADATA.md, useful in tight contexts. */
  promoLine:
    "Free live monitoring, 1-hour history, and one included monitor for TrueNAS SCALE — with Pro admin tools when you need more control.",
  /** Minimum iOS version supported by the current App Store build (1.0.3). */
  minimumOsVersion: "17.6",
  /** Latest live App Store version + release date — kept in sync with /changelog. */
  latestVersion: "1.0.3",
  latestReleaseDate: "2026-04-25",
  origin: "https://pulse.phobos-cc.be",
  appStoreUrl: "https://apps.apple.com/app/id6759870893",
  appStoreId: "6759870893",
  testFlightUrl: "https://testflight.apple.com/join/r3xzH5eE",
  supportEmail: "chris@phobos-cc.be",
  supportUrl: "https://github.com/legato3/TrueNAS-Pulse-App/issues",
  bundleId: "Phobos.TrueNAS-Pulse",
  trademarkLine:
    "TrueNAS® is a registered trademark of iXsystems, Inc. TrueNAS Pulse is an independent third-party application and is not affiliated with, endorsed by, or sponsored by iXsystems.",
  trustLine: "One-time purchase. No subscription. No tracking.",
} as const;

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/screenshots", label: "Screenshots" },
  { href: "/pro", label: "Pro" },
  { href: "/changelog", label: "Changelog" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/eula", label: "EULA" },
  { href: "/contact", label: "Contact" },
] as const;
