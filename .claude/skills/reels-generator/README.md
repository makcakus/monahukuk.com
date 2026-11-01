# reels-generator

Günlük hukuk bülteni reels'i (en az 6 doğrulanmış haber) için 1080x1920 MP4 üretir. Ses yerel Türkçe TTS,
görsel kodla çizilir; dış servis ve anahtar yok. Ayrıntı: SKILL.md.

1. `bash .claude/skills/reels-generator/scripts/setup.sh` (playwright, sherpa-onnx, fontlar, Türkçe ses; ffmpeg gerekir)
2. Claude'a "bugünün reels'ini yap" de (ya da günlük otomasyon çalışsın).
3. Elle: `python3 .claude/skills/reels-generator/scripts/tts.py output/reels/<slug>/reel.json` ardından `render_reel.py` aynı argümanla.
4. Çıktı: `output/reels/<slug>/reel.mp4`, `cover.jpg`, `contact-sheet.jpg`, `caption.md`.
5. Ses: `resources/voice.json` (`fahrettin`, `dfki`, `fettah`). Kötü okunan kısaltma: `resources/pronounce.json`.
6. Logo: `resources/logo.png` (şeffaf PNG). Gerçek logo gelince değiştir; yoksa `scripts/make_logo.py`.
7. Chromium: hazır kurulu tarayıcı otomatik bulunur (`CHROMIUM_PATH` ile ezilebilir).
