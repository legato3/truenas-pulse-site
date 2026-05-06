#!/usr/bin/env python3
"""Print unique SHA256 hashes of all inline scripts found in HTML files.

Usage:
  csp-hash-compute.py <file-or-dir> [<file-or-dir> ...]

Pass the build output directory (dist/) to cover all pages, not just index.html.
"""
import sys, re, hashlib, base64, os


def hashes_from_file(path: str) -> set[str]:
    with open(path, encoding="utf-8", errors="replace") as f:
        html = f.read()
    found = set()
    for s in re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", html, re.DOTALL):
        s = s.strip()
        if s:
            h = base64.b64encode(hashlib.sha256(s.encode()).digest()).decode()
            found.add(f"sha256-{h}")
    return found


targets = sys.argv[1:] if len(sys.argv) > 1 else ["/tmp/pulse-page.html"]
all_hashes: set[str] = set()

for target in targets:
    if os.path.isdir(target):
        for root, _dirs, files in os.walk(target):
            for fname in files:
                if fname.endswith(".html"):
                    all_hashes |= hashes_from_file(os.path.join(root, fname))
    else:
        all_hashes |= hashes_from_file(target)

if not all_hashes:
    print("ERROR: no inline scripts found", file=sys.stderr)
    sys.exit(1)

for h in sorted(all_hashes):
    print(h)
