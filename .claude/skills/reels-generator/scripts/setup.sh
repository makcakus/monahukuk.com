#!/usr/bin/env bash
# Bağımlılıklar, Chromium, fontlar ve Türkçe ses modelleri. Hepsi ücretsiz, anahtarsız.
set -euo pipefail
cd "$(dirname "$0")/.."

python3 -m pip install --quiet playwright jinja2 pillow numpy "sherpa-onnx<2"   # 2.x yerleşik fonemleştiriciyi kaldırdı
# Chromium: önce hazır kurulu olanı dene (sürüm uyuşmazlığına takılmaz), yoksa Playwright indirsin
if ! python3 - <<'PY' 2>/dev/null
import glob, os
from playwright.sync_api import sync_playwright
base = os.environ.get("PLAYWRIGHT_BROWSERS_PATH") or "/opt/pw-browsers"
exe = sorted(glob.glob(f"{base}/chromium-*/chrome-linux/chrome"))
with sync_playwright() as p:
    p.chromium.launch(executable_path=exe[-1] if exe else None).close()
PY
then
  python3 -m playwright install chromium
fi
command -v ffmpeg >/dev/null || { echo "ffmpeg bulunamadı: kur (apt install ffmpeg / brew install ffmpeg)"; exit 1; }

# Fontlar (OFL)
BASE="https://raw.githubusercontent.com/google/fonts/main/ofl"
get() { [ -s "resources/fonts/$2" ] || curl -fsSL "$BASE/$1" -o "resources/fonts/$2"; }
get "cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf"        "CormorantGaramond-Variable.ttf"
get "cormorantgaramond/CormorantGaramond-Italic%5Bwght%5D.ttf" "CormorantGaramond-Italic-Variable.ttf"
get "alegreyasans/AlegreyaSans-Regular.ttf" "AlegreyaSans-Regular.ttf"
get "alegreyasans/AlegreyaSans-Medium.ttf"  "AlegreyaSans-Medium.ttf"
get "alegreyasans/AlegreyaSans-Bold.ttf"    "AlegreyaSans-Bold.ttf"

# Türkçe ses: yalnızca seçili ses iner (resources/voice.json); hepsi için: VOICES="fahrettin dfki fettah"
VOICE="$(python3 -c "import json;print(json.load(open('resources/voice.json'))['voice'])")"
mkdir -p resources/voices
for v in ${VOICES:-$VOICE}; do
  m="vits-piper-tr_TR-$v-medium"
  [ -d "resources/voices/$m" ] && continue
  curl -fsSL "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/$m.tar.bz2" | tar -xj -C resources/voices
done
echo "Kurulum tamam."
