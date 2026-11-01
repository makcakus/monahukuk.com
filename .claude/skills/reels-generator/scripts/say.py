#!/usr/bin/env python3
"""Telaffuz laboratuvarı: bir cümleyi seslendir; ses düzeltme kurallarını denemek için.

    python3 say.py "Türk Medeni Kanunu" --out kanun.wav
    python3 say.py "Türk Medeni Kanunu" --try "kanun=k a > c a ː" --out aday1.wav
    python3 say.py "Türk Medeni Kanunu" --phonemes          # sesleri yazdır (dinlemeden bak)

--try "kök=eski > yeni": geçici kural (lexicon.json'a yazılmaz). Birden fazla verilebilir.
Metin önce tr_text ile normalleştirilir (rakam, kısaltma); --raw ile bu atlanır.
"""
import argparse
import sys
import wave
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import tr_text  # noqa: E402
import tr_voice  # noqa: E402


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("text")
    ap.add_argument("--voice", default=None)
    ap.add_argument("--try", dest="tries", action="append", default=[], metavar="KÖK=ESKİ > YENİ")
    ap.add_argument("--out", type=Path)
    ap.add_argument("--speed", type=float, default=1.0)
    ap.add_argument("--raw", action="store_true", help="tr_text normalleştirmesini atla")
    ap.add_argument("--phonemes", action="store_true")
    a = ap.parse_args()

    import json
    voice = a.voice or json.loads((tr_voice.SKILL / "resources/voice.json").read_text())["voice"]
    extra = []
    for t in a.tries:
        stem, edit = t.split("=", 1)
        extra.insert(0, {"stem": stem.strip(), "edit": [edit.strip()]})
    v = tr_voice.TrVoice(voice, extra)
    text = a.text if a.raw else tr_text.spoken(a.text)
    print("okunan:", text)
    if a.phonemes:
        print(" ".join(v.sentence_phonemes(text)))
    if a.out:
        sr, pcm = v.synth(text, a.speed)
        with wave.open(str(a.out), "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(sr)
            w.writeframes(pcm.tobytes())
        print(f"{a.out} ({len(pcm) / sr:.1f} sn)")


if __name__ == "__main__":
    main()
