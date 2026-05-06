/**
 * SVG icon paths for each feature — directly mirrored from the iOS app's
 * ProFeature.icon SF Symbol mapping in EntitlementManager.swift.
 *
 * Each value is a complete <svg> string rendered via set:html.
 * 24×24 viewBox, stroke-based, stroke-width 1.5, round caps/joins.
 */

const svg = (inner: string): string =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">${inner}</svg>`;

export const featureIcons: Record<string, string> = {
  // ── Scale ──────────────────────────────────────────────────────────────────

  // bell.and.waveform.fill
  monitors: svg(
    `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,
  ),

  // square.stack.3d.up → layers
  serverComparison: svg(
    `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>`,
  ),

  // slider.horizontal.3
  configDriftComparison: svg(
    `<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>`,
  ),

  // ── Advanced Control ───────────────────────────────────────────────────────

  // externaldrive.fill → hard-drive
  diskManagement: svg(
    `<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>`,
  ),

  // network → globe
  networkEditing: svg(
    `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,
  ),

  // folder.badge.person.crop → folder-user
  shareManagement: svg(
    `<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M8 21v-1a4 4 0 0 1 8 0v1"/>`,
  ),

  // slider.horizontal.3 → wrench (different from configDrift to distinguish)
  serviceManagement: svg(
    `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>`,
  ),

  // gearshape.2 → settings-2 (two circles on lines)
  serviceLifecycle: svg(
    `<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>`,
  ),

  // square.grid.2x2 → layout-grid
  appLifecycle: svg(
    `<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>`,
  ),

  // desktopcomputer → monitor
  vmLifecycle: svg(
    `<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>`,
  ),

  // camera.on.rectangle → camera
  manualSnapshots: svg(
    `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>`,
  ),

  // (Free tier) container cube
  containerLifecycle: svg(
    `<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  ),

  // pencil.and.list.clipboard → clipboard-check
  dataProtectionEditing: svg(
    `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>`,
  ),

  // power
  powerOperations: svg(
    `<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>`,
  ),

  // square.and.arrow.down → download
  updateInstallation: svg(
    `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>`,
  ),

  // xmark.circle → circle-x
  jobManagement: svg(
    `<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>`,
  ),

  // ── Operator Productivity ──────────────────────────────────────────────────

  // doc.text.magnifyingglass → file-search
  logsViewer: svg(
    `<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="5" cy="17" r="3"/><path d="m9 21-1.5-1.5"/>`,
  ),

  // chart.xyaxis.line → trending-up
  advancedReporting: svg(
    `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>`,
  ),

  // (custom) gauge — per-pool fill-rate sparkline
  storageRunway: svg(
    `<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>`,
  ),

  // checklist
  batchActions: svg(
    `<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>`,
  ),

  // bell.slash → bell-off
  alertAcknowledgement: svg(
    `<path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"/><path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><line x1="2" x2="22" y1="2" y2="22"/>`,
  ),

  // doc.zipper → archive box
  supportBundle: svg(
    `<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>`,
  ),

  // externaldrive.badge.checkmark → save-to-drive
  configBackup: svg(
    `<path d="M21 5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5Z"/><path d="M12 9v7"/><path d="m9 13 3 3 3-3"/>`,
  ),

  // arrow.clockwise.circle → rotate-ccw
  configRestore: svg(
    `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
  ),

  // display.and.arrow.down → terminal prompt
  terminal: svg(
    `<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>`,
  ),

  // icloud.and.arrow.up.fill → cloud-upload
  cloudSync: svg(
    `<path d="M12 13v8"/><path d="m8 17 4-4 4 4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/>`,
  ),

  // bolt.badge.clock → zap (lightning)
  liveActivities: svg(
    `<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>`,
  ),
};
