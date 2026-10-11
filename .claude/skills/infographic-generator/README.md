# infographic-generator

Ardona Instagram carousels from HTML/CSS: 1080x1350 slides at 2x, plus caption. No API, no keys.

1. `bash .claude/skills/infographic-generator/scripts/setup.sh` (playwright, jinja2, pillow, Chromium, fonts)
2. Put a transparent PNG logo at `resources/logo.png` (at least 200px wide).
3. Ask Claude: "make a carousel about X".
4. Manual render: `python3 .claude/skills/infographic-generator/scripts/render_carousel.py output/<slug>/slides.json`
5. Output: `output/<slug>/01.jpg…`, `contact-sheet.jpg`, `caption.md`.
