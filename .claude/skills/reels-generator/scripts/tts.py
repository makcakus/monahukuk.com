#!/usr/bin/env python3
"""reel.json içindeki her sahnenin `vo` metnini Türkçe sese çevirir -> audio/NN.wav

Varsayılan: çevrimdışı Piper Türkçe sesleri (piper-tts ile, öğretilen telaffuzlarla: resources/lexicon.json). API, anahtar ve ağ gerekmez; ses
modelleri `scripts/setup.sh` ile resources/voices/ altına iner.

    python3 tts.py output/reels/<slug>/reel.json [--voice fahrettin|dfki|fettah] [--speed 1.0]

`--voice google:tr-TR-...` ile Google Cloud TTS (anahtar gerekir, GoogleVoice sınıfına bak).
Ses seçimi resources/voice.json içindedir; her reels aynı sesle çıkar.
Rakamlar, tarihler, sıra sayıları ve kısaltmalar otomatik okunuşa çevrilir (tr_text.py);
kötü okunan kelime için resources/pronounce.json'a ekle.
"""
import argparse
import json
import re
import sys
import wave
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import tr_text  # noqa: E402

SKILL = Path(__file__).resolve().parent.parent
VOICES = SKILL / "resources/voices"
CONFIG = SKILL / "resources/voice.json"
PRONOUNCE = SKILL / "resources/pronounce.json"


class Stop(Exception):
    pass


def default_voice():
    if CONFIG.exists():
        return json.loads(CONFIG.read_text())["voice"]
    return "fahrettin"


class GoogleVoice:
    """Google Cloud Text-to-Speech (yerli Türkçe sinir ağı sesleri). Anahtar: ortam değişkeni GOOGLE_TTS_API_KEY.
    Ses adı: `google:tr-TR-Chirp3-HD-Charon` gibi (voice.json ya da --voice). Liste: `tts.py --list-google`.
    Çıktı Piper'dan çok daha doğal tonlama verir; ama kelime bazlı öğretilen telaffuz (lexicon.json) burada
    uygulanmaz, düzeltme için metindeki yazımı değiştir (pronounce.json okunuş yazımı hâlâ geçerli)."""

    URL = "https://texttospeech.googleapis.com/v1/text:synthesize"

    def __init__(self, name):
        import os
        self.key = os.environ.get("GOOGLE_TTS_API_KEY")
        if not self.key:
            raise Stop("GOOGLE_TTS_API_KEY yok (ortam değişkeni). Anahtarı ortam gizli değişkenlerine ekle.")
        self.name = name

    def synth(self, text, speed=1.0):
        import base64
        import io
        import urllib.error
        import urllib.request
        body = {"input": {"text": text},
                "voice": {"languageCode": "tr-TR", "name": self.name},
                "audioConfig": {"audioEncoding": "LINEAR16", "sampleRateHertz": 24000, "speakingRate": speed}}
        req = urllib.request.Request(f"{self.URL}?key={self.key}", json.dumps(body).encode(),
                                     {"Content-Type": "application/json"})
        try:
            data = json.load(urllib.request.urlopen(req, timeout=60))
        except urllib.error.HTTPError as e:
            raise Stop(f"Google TTS hata {e.code}: {e.read().decode()[:300]}")
        import numpy as np
        with wave.open(io.BytesIO(base64.b64decode(data["audioContent"]))) as w:
            return w.getframerate(), np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)


def list_google():
    import os
    import urllib.request
    key = os.environ.get("GOOGLE_TTS_API_KEY")
    if not key:
        raise Stop("GOOGLE_TTS_API_KEY yok.")
    data = json.load(urllib.request.urlopen(
        f"https://texttospeech.googleapis.com/v1/voices?languageCode=tr-TR&key={key}", timeout=30))
    for v in data.get("voices", []):
        print(v["name"], v.get("ssmlGender", ""))


def load_model(name):
    if name.startswith("google:"):
        return GoogleVoice(name.split(":", 1)[1])
    try:
        import tr_voice
        return tr_voice.TrVoice(name)
    except FileNotFoundError as e:
        raise Stop(str(e))
    except ImportError:
        raise Stop("piper-tts yok. Önce: bash scripts/setup.sh")


def spoken(text):
    """Rakam, tarih, sıra sayısı, kısaltma -> okunuş (scripts/tr_text.py + resources/pronounce.json)."""
    return tr_text.spoken(text)


def synth(tts, text, speed):
    sr, pcm = tts.synth(text, speed)
    if len(pcm) < sr // 4:
        raise Stop(f"Ses üretilemedi: {text!r}")
    return sr, pcm


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("reel", type=Path, nargs="?")
    ap.add_argument("--list-google", action="store_true", help="tr-TR Google seslerini listele")
    ap.add_argument("--voice", default=None)
    ap.add_argument("--speed", type=float, default=1.0, help="1.0 normal; 0.9 biraz yavaş")
    ap.add_argument("--scene", type=int, help="yalnız bu sahnenin sesini yeniden üret")
    a = ap.parse_args()
    if a.list_google:
        return list_google()
    if not a.reel:
        ap.error("reel.json yolu gerekli")

    out = a.reel.resolve().parent
    reel = json.loads(a.reel.read_text(encoding="utf-8"))
    voice = a.voice or default_voice()
    tts = load_model(voice)
    (out / "audio").mkdir(exist_ok=True)
    total = 0.0
    for i, s in enumerate(reel["scenes"], 1):
        if a.scene and i != a.scene:
            continue
        text = spoken(s["vo"])
        sr, pcm = synth(tts, text, a.speed)
        path = out / "audio" / f"{i:02d}.wav"
        with wave.open(str(path), "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(sr)
            w.writeframes(pcm.tobytes())
        dur = len(pcm) / sr
        total += dur
        print(f"  {i:02d}  {dur:5.2f} sn  {text[:70]}")
    print(f"ses: {voice}, toplam {total:.1f} sn -> {out / 'audio'}")


if __name__ == "__main__":
    try:
        main()
    except Stop as e:
        print(f"DURDU: {e}", file=sys.stderr)
        sys.exit(1)
