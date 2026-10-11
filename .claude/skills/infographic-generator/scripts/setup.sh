#!/usr/bin/env bash
# Python bağımlılıkları, Chromium ve fontlar (hepsi OFL, depoya commit edilebilir).
set -euo pipefail
cd "$(dirname "$0")/.."

python3 -m pip install --quiet playwright jinja2 pillow
python3 -m playwright install chromium || echo "playwright install chromium başarısız; hazır kurulu Chromium varsa sorun değil."

BASE="https://raw.githubusercontent.com/google/fonts/main/ofl"
get() { [ -s "resources/fonts/$2" ] || curl -fsSL "$BASE/$1" -o "resources/fonts/$2"; }
get "instrumentserif/InstrumentSerif-Regular.ttf" "InstrumentSerif-Regular.ttf"
get "instrumentserif/InstrumentSerif-Italic.ttf"  "InstrumentSerif-Italic.ttf"
get "manrope/Manrope%5Bwght%5D.ttf"                "Manrope-Variable.ttf"
get "jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf"    "JetBrainsMono-Variable.ttf"
echo "Kurulum tamam."
