/**
 * 27-feature canonical registry — mirrored from
 * /app/repos/TrueNAS-Pulse/docs/PRO_FEATURES.md (table at "Feature Registry").
 *
 * Categories follow the iOS app's ProFeature.category (Scale / Advanced Control /
 * Operator Productivity).
 *
 * Copy lifted verbatim from MONETIZATION.md "Feature Description Copy" table where
 * present (paywall copy is benefit-led — APP_STORE_METADATA copy is App-Store-listing).
 * Where the registry has a longer description than the paywall copy, we use the
 * benefit-led version because this is operator-facing marketing copy.
 */
export type FeatureCategory = "Scale" | "Advanced Control" | "Operator Productivity";

export type FeatureTier = "Free" | "Pro" | "Enterprise (reserved)";

export interface Feature {
  /** Stable id matching the ProFeature enum case in the iOS app. */
  id: string;
  name: string;
  category: FeatureCategory;
  tier: FeatureTier;
  /** Operator-facing benefit-led description. Plain text, no markdown. */
  description: string;
}

export const features: Feature[] = [
  // ── Scale (visibility across multiple servers) ──────────────────
  {
    id: "monitors",
    name: "Monitors",
    category: "Scale",
    tier: "Pro",
    description:
      "Get notified before a full pool, overheating drive, or crashed service becomes a real problem. Free includes one local monitor on the active server; Pro removes the limit across every server.",
  },
  {
    id: "serverComparison",
    name: "Fleet",
    category: "Scale",
    tier: "Pro",
    description:
      "Spot the problem server instantly. Health, storage, and services across every system in one anomaly-first view.",
  },
  {
    id: "configDriftComparison",
    name: "Config Drift Comparison",
    category: "Scale",
    tier: "Pro",
    description:
      "Find where your servers disagree. Spot the config change that caused the problem before it spreads.",
  },
  {
    id: "unlimitedServers",
    name: "Unlimited Servers",
    category: "Scale",
    tier: "Enterprise (reserved)",
    description:
      "Reserved for a future tier. Pro currently caps at 8 servers; Free at 2.",
  },

  // ── Advanced Control (lifecycle + mutation) ─────────────────────
  {
    id: "diskManagement",
    name: "Disk & VDEV Management",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Replace a failed drive from your phone. Online, offline, replace, extend, and wipe — no laptop, no web UI, no delay.",
  },
  {
    id: "networkEditing",
    name: "Network Editing",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Change DNS, gateway, or hostname safely — with preflight checks before anything goes live.",
  },
  {
    id: "shareManagement",
    name: "Share Management",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Add or change an SMB or NFS share without opening a browser.",
  },
  {
    id: "serviceLifecycle",
    name: "Service Lifecycle",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Start, stop, and restart services from your phone. Full lifecycle control behind a confirmation gate.",
  },
  {
    id: "appLifecycle",
    name: "App Lifecycle",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Manage app workloads on the go. Start, stop, and restart containers remotely.",
  },
  {
    id: "vmLifecycle",
    name: "VM Lifecycle",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Control virtual machines remotely. Start, stop, and power off guests from your phone.",
  },
  {
    id: "serviceManagement",
    name: "Service Management",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Tweak service settings and autostart from anywhere — no web UI needed.",
  },
  {
    id: "manualSnapshots",
    name: "Manual Snapshots",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Create snapshots on demand for free. Pro adds delete, clone, and rollback so you can recover any dataset to any point in time.",
  },
  {
    id: "containerLifecycle",
    name: "Container Lifecycle",
    category: "Advanced Control",
    tier: "Free",
    description:
      "Start, stop, and force-stop TrueNAS 26 native containers — included in the free tier.",
  },
  {
    id: "dataProtectionEditing",
    name: "Data Protection Controls",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Run, enable, disable, and edit data protection tasks without logging into the web UI.",
  },
  {
    id: "powerOperations",
    name: "Power Operations",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Reboot and shut down servers from your phone, with a guarded confirmation slider.",
  },
  {
    id: "updateInstallation",
    name: "System Update Installation",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Install available TrueNAS system updates from your phone, when it's safe to.",
  },
  {
    id: "jobManagement",
    name: "Job Management",
    category: "Advanced Control",
    tier: "Pro",
    description:
      "Abort running middleware jobs that need operator intervention.",
  },

  // ── Operator Productivity (everyday leverage) ───────────────────
  {
    id: "logsViewer",
    name: "Log Streaming",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "See exactly what's happening on your server right now, filtered to what matters.",
  },
  {
    id: "advancedReporting",
    name: "Advanced Reporting",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "See when problems started and why. 30 days of CPU, memory, and network history to trace any incident. Free includes 1H.",
  },
  {
    id: "storageRunway",
    name: "Storage Runway",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Per-pool fill-rate sparkline and projected days remaining — see how long you have before a pool fills up.",
  },
  {
    id: "batchActions",
    name: "Batch Actions",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Update all apps, start all services, or dismiss all alerts — one tap.",
  },
  {
    id: "alertAcknowledgement",
    name: "Alert Acknowledgement",
    category: "Operator Productivity",
    tier: "Free",
    description:
      "Dismiss and acknowledge alerts to keep the signal clean. Critical alerts always stay visible.",
  },
  {
    id: "supportBundle",
    name: "Support Bundle",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Generate and share a full TrueNAS support bundle directly from your device.",
  },
  {
    id: "configBackup",
    name: "Config Backup",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Download TrueNAS config backups directly to your device.",
  },
  {
    id: "configRestore",
    name: "Config Restore",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Restore your TrueNAS config from a backup — with safety checks built in.",
  },
  {
    id: "terminal",
    name: "Terminal",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "SSH into your server from anywhere. Diagnose and fix without switching devices.",
  },
  {
    id: "cloudSync",
    name: "iCloud Sync",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Set up once, use everywhere. Server list and monitor configs sync across your devices via iCloud Key-Value Store. API tokens never leave the Keychain.",
  },
  {
    id: "liveActivities",
    name: "Live Activities",
    category: "Operator Productivity",
    tier: "Pro",
    description:
      "Watch pool scrubs, replications, and updates on the Lock Screen and in the Dynamic Island — no need to open the app.",
  },
];

export const featureCategories: FeatureCategory[] = [
  "Scale",
  "Advanced Control",
  "Operator Productivity",
];

export const featuresByCategory = (cat: FeatureCategory): Feature[] =>
  features.filter((f) => f.category === cat);
