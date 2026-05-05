#!/usr/bin/env python3
"""Read a page HTML file and print SHA256 hashes of all inline scripts."""
import sys, re, hashlib, base64

src = sys.argv[1] if len(sys.argv) > 1 else "/tmp/pulse-page.html"
with open(src) as f:
    html = f.read()

scripts = re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", html, re.DOTALL)
hashes = []
for s in scripts:
    s = s.strip()
    if s:
        h = base64.b64encode(hashlib.sha256(s.encode()).digest()).decode()
        hashes.append(f"sha256-{h}")

if not hashes:
    print("ERROR: no inline scripts found", file=sys.stderr)
    sys.exit(1)

for h in hashes:
    print(h)
