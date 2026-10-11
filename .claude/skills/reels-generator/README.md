# reels-generator

Güncel hukuk haberinden m.o.n.a.law için 1080x1920 Instagram Reels üretir (ayrıntı: SKILL.md).

1. `bash .claude/skills/reels-generator/scripts/setup.sh` — playwright, jinja2, pillow ve fontlar; ffmpeg gerekir.
2. Claude'a "bugünün reelslerini yap" ya da "şu haberi reels yap" de.
3. Elle render: `python3 .claude/skills/reels-generator/scripts/render_reel.py output/reels/<slug>/reel.json`
4. Çıktı: `output/reels/<slug>/reel.mp4`, `cover.jpg`, `contact-sheet.jpg`, `caption.md`.
5. Logo: `resources/logo.png` (şeffaf PNG). Gerçek logo gelince değiştir; yoksa `scripts/make_logo.py`.
6. Chromium açılmazsa: hazır kurulu tarayıcıyla eşleşen playwright sürümünü kur (ör. `pip install playwright==1.56.0`).
