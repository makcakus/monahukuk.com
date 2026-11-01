#!/usr/bin/env python3
"""reel.json içindeki her sahnenin `vo` metnini Türkçe sese çevirir -> audio/NN.wav

Çevrimdışı Piper Türkçe sesleri (sherpa-onnx ile). API, anahtar ve ağ gerekmez; ses
modelleri `scripts/setup.sh` ile resources/voices/ altına iner.

    python3 tts.py output/reels/<slug>/reel.json [--voice fahrettin|dfki|fettah] [--speed 1.0]

Ses seçimi resources/voice.json içindedir; her reels aynı sesle çıkar.
Telaffuz düzeltmeleri resources/pronounce.json içindedir (kısaltma -> okunuşu).
"""
import argparse
import json
import re
import sys
import wave
from pathlib import Path

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


def load_model(name):
    d = VOICES / f"vits-piper-tr_TR-{name}-medium"
    onnx = d / f"tr_TR-{name}-medium.onnx"
    if not onnx.exists():
        raise Stop(f"Ses modeli yok: {d}. Önce: bash scripts/setup.sh")
    try:
        import sherpa_onnx
    except ImportError:
        raise Stop("sherpa-onnx yok. Önce: bash scripts/setup.sh")
    cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
        vits=sherpa_onnx.OfflineTtsVitsModelConfig(model=str(onnx), tokens=str(d / "tokens.txt"),
                                                   data_dir=str(d / "espeak-ng-data")), num_threads=2))
    return sherpa_onnx.OfflineTts(cfg)


def spoken(text):
    """Kısaltmaları ve rakamları okunuşa çevirir. Asıl kural: vo'yu zaten okunacağı gibi yaz."""
    if PRONOUNCE.exists():
        for src, dst in json.loads(PRONOUNCE.read_text(encoding="utf-8")).items():
            text = re.sub(rf"(?<![\w]){re.escape(src)}(?![\w])", dst, text)
    if re.search(r"\d", text):
        raise Stop(f"vo'da rakam var: {text!r}. Sayıları yazıyla yaz (ör. 'otuz bir Ekim'); "
                   "TTS rakamları doğru okumaz.")
    return re.sub(r"\s+", " ", text).strip()


def synth(tts, text, speed):
    import numpy as np
    a = tts.generate(text, sid=0, speed=speed)
    if not a.sample_rate or len(a.samples) == 0:
        raise Stop(f"Ses üretilemedi: {text!r}")
    pcm = (np.clip(np.array(a.samples), -1, 1) * 32767).astype(np.int16)
    return a.sample_rate, pcm


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("reel", type=Path)
    ap.add_argument("--voice", default=None)
    ap.add_argument("--speed", type=float, default=1.0, help="1.0 normal; 0.9 biraz yavaş")
    ap.add_argument("--scene", type=int, help="yalnız bu sahnenin sesini yeniden üret")
    a = ap.parse_args()

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
