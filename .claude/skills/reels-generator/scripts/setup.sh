#!/usr/bin/env bash
# Bağımlılıkları kurar ve fontları resources/fonts/ içine indirir (hepsi OFL).
set -euo pipefail
cd "$(dirname "$0")/.."

python3 -m pip install --quiet playwright jinja2 pillow
if ! python3 -c "from playwright.sync_api import sync_playwright as s
with s() as p: p.chromium.launch().close()" 2>/dev/null; then
  python3 -m playwright install chromium
fi
command -v ffmpeg >/dev/null || { echo "ffmpeg bulunamadı: kur (apt install ffmpeg / brew install ffmpeg)"; exit 1; }

BASE="https://raw.githubusercontent.com/google/fonts/main/ofl"
get() { # <depo yolu> <hedef dosya>
  [ -s "resources/fonts/$2" ] || curl -fsSL "$BASE/$1" -o "resources/fonts/$2"
}
get "cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf"        "CormorantGaramond-Variable.ttf"
get "cormorantgaramond/CormorantGaramond-Italic%5Bwght%5D.ttf" "CormorantGaramond-Italic-Variable.ttf"
get "alegreyasans/AlegreyaSans-Regular.ttf" "AlegreyaSans-Regular.ttf"
get "alegreyasans/AlegreyaSans-Medium.ttf"  "AlegreyaSans-Medium.ttf"
get "alegreyasans/AlegreyaSans-Bold.ttf"    "AlegreyaSans-Bold.ttf"
echo "Kurulum tamam."
