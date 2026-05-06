#!/usr/bin/env python3
"""Patch /etc/caddy/Caddyfile: update script-src hashes and ensure font-src includes data:.

Usage: csp-hash-patch.py <hashes-file> [caddyfile-path]
"""
import re, sys

hashes_file = sys.argv[1]
caddy_path = sys.argv[2] if len(sys.argv) > 2 else "/etc/caddy/Caddyfile"

with open(hashes_file) as f:
    hashes = [line.strip() for line in f if line.strip()]

if not hashes:
    print("ERROR: hashes file is empty", file=sys.stderr)
    sys.exit(1)

with open(caddy_path) as f:
    c = f.read()

# --- patch script-src hashes ---
quoted = " ".join(f"'{h}'" for h in hashes)
script_src_replacement = (
    f"script-src 'self' {quoted} "
    "https://analytics.phobos-cc.be https://static.cloudflareinsights.com"
)
script_pattern = r"script-src 'self'[^;]*https://static\.cloudflareinsights\.com"
if not re.search(script_pattern, c):
    print("WARN: script-src pattern not matched, Caddyfile unchanged", file=sys.stderr)
    sys.exit(1)
new = re.sub(script_pattern, script_src_replacement, c)

# --- patch font-src: ensure data: is present ---
new = re.sub(r"font-src 'self'(?!\s+data:)", "font-src 'self' data:", new)

if new == c:
    print(f"Caddyfile already up-to-date with {len(hashes)} hashes, no write needed")
else:
    with open(caddy_path, "w") as f:
        f.write(new)
    print(f"Caddyfile updated with {len(hashes)} hashes + font-src data:")
