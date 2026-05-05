#!/usr/bin/env python3
"""Patch /etc/caddy/Caddyfile script-src with hashes from a hashes file.
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

quoted = " ".join(f"'{h}'" for h in hashes)
replacement = (
    f"script-src 'self' {quoted} "
    "https://analytics.phobos-cc.be https://static.cloudflareinsights.com"
)

with open(caddy_path) as f:
    c = f.read()

new = re.sub(
    r"script-src 'self'[^;]*https://static\.cloudflareinsights\.com",
    replacement,
    c
)

if new == c:
    print("WARN: pattern not matched, Caddyfile unchanged", file=sys.stderr)
    sys.exit(1)

with open(caddy_path, "w") as f:
    f.write(new)

print(f"Caddyfile updated with {len(hashes)} hashes")
