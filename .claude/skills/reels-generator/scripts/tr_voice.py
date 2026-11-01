"""Piper Türkçe ses + "öğretilen telaffuz" (resources/lexicon.json).

Motorun yazıdan sese çeviren aşaması â, î gibi işaretleri yok sayar ve "kanun"u düz okur.
Ses modeli ise uzun ünlü (ː) ve ince k (c, ʲ) seslerini bilir. Bu yüzden bir kelimenin
seslerini (fonemlerini) kelime bazında düzeltiriz: kural köke bağlıdır, tüm çekimlere uygulanır
(kanun, kanunu, kanunun, kanunlar ...).

lexicon.json:
  [{"say": "kânun", "stem": "kanun", "edit": ["k a > c a ː"]},
   {"say": "hâl",   "words": ["hal", "halinde"], "edit": ["h a > h a ː"]}]

`stress`: "none" (vurguyu kaldır) | "first" (ilk heceye taşı). `edit`: "<bulunacak sesler> > <yerine>" (ses sembolleri boşlukla ayrılır; sona `$` kelime sonuna sabitler). İlk eşleşme değişir;
vurgu işaretleri (ˈ ˌ) eşleşmede göz ardı edilir. `stem` kelime başı eşleşmesidir,
`words` tam eşleşme listesidir (kısa/ikircikli kelimeler için).
"""
import json
import re
from pathlib import Path

import numpy as np

SKILL = Path(__file__).resolve().parent.parent
VOICES = SKILL / "resources/voices"
LEXICON = SKILL / "resources/lexicon.json"
STRESS = {"ˈ", "ˌ"}
VOWELS = set("aeɛiɪɯoɔuʊøyœəɑ")
WORD = re.compile(r"[\w'’]+", re.UNICODE)
SENT_END = re.compile(r"(?<=[.!?;:])\s+")
PAUSE = {".": 0.35, "!": 0.35, "?": 0.35, ";": 0.25, ":": 0.2}


def load_lexicon(extra=None):
    entries = json.loads(LEXICON.read_text(encoding="utf-8")) if LEXICON.exists() else []
    return entries + list(extra or [])


def _tr_lower(s):
    return s.replace("İ", "i").replace("I", "ı").lower()


def plain_word(s):
    """Küçük harf + şapkalı harfleri düzleştir (resmî -> resmi). Kural eşleşmesi ve fonemleştirme bununla yapılır:
    motor â/î/û'yu zaten yok sayar; böylece metne "resmî" de "resmi" de yazılsa öğretilen kural uygulanır."""
    return _tr_lower(s).replace("â", "a").replace("î", "i").replace("û", "u")


def apply_edits(phonemes, edits):
    """phonemes: sembol listesi. Her edit için ilk eşleşmeyi değiştir (vurgu işaretleri göz ardı)."""
    for edit in edits:
        left, right = (part.split() for part in edit.split(">"))
        anchored = bool(left) and left[-1] == "$"      # "ɪ $ > i ː": yalnız kelime sonunda
        if anchored:
            left = left[:-1]
        idx = [i for i, p in enumerate(phonemes) if p not in STRESS]
        flat = [phonemes[i] for i in idx]
        for s in range(len(flat) - len(left) + 1):
            if anchored and s != len(flat) - len(left):
                continue
            if flat[s:s + len(left)] == left:
                first, last = idx[s], idx[s + len(left) - 1]
                inner = [p for p in phonemes[first:last + 1] if p in STRESS]   # eşleşme içindeki vurgu
                new = list(right)
                if inner:   # vurguyu yerine koyduğumuz ilk ünlünün önüne taşı
                    pos = next((i for i, p in enumerate(new) if p in VOWELS), 0)
                    new[pos:pos] = inner
                phonemes = phonemes[:first] + new + phonemes[last + 1:]
                break
    return phonemes


def set_stress(phonemes, mode):
    """Vurgu: "none" = vurgu işaretini kaldır (motor son hece "an/al"ı uzatıyorsa), "first" = ilk heceye taşı."""
    ph = [p for p in phonemes if p not in STRESS]
    if mode == "first":
        pos = next((i for i, p in enumerate(ph) if p in VOWELS), 0)
        ph[pos:pos] = ["ˈ"]
    return ph


def match_entries(word, lexicon):
    """Kelimeye uyan tüm kurallar (sırayla uygulanır: ör. kanuni -> kanun kökü + sıfat sonu î)."""
    w = plain_word(word)
    return [e for e in lexicon if w in e.get("words", []) or ("stem" in e and w.startswith(e["stem"]))]


class TrVoice:
    def __init__(self, name, extra_lexicon=None):
        from piper import PiperVoice
        model = VOICES / f"vits-piper-tr_TR-{name}-medium" / f"tr_TR-{name}-medium.onnx"
        if not model.exists():
            raise FileNotFoundError(f"Ses modeli yok: {model}. Önce: bash scripts/setup.sh")
        self.v = PiperVoice.load(str(model))
        self.sr = self.v.config.sample_rate
        self.lexicon = load_lexicon(extra_lexicon)

    def _word_phonemes(self, word):
        word = plain_word(word)
        ph = [p for sent in self.v.phonemize(word) for p in sent]
        for entry in match_entries(word, self.lexicon):
            ph = apply_edits(ph, entry.get("edit", []))
            if entry.get("stress"):
                ph = set_stress(ph, entry["stress"])
        return ph

    def sentence_phonemes(self, sentence):
        out, pending_space = [], False
        for m in re.finditer(r"[\w'’]+|[^\w\s]", sentence, re.UNICODE):
            tok = m.group(0)
            if re.match(r"[\w'’]", tok):
                if pending_space:
                    out.append(" ")
                out += self._word_phonemes(tok.replace("'", "").replace("’", ""))
                pending_space = True
            elif tok in ",;:.!?":
                out.append(tok)
        return out

    def synth(self, text, speed=1.0):
        from piper import SynthesisConfig
        cfg = SynthesisConfig(length_scale=1.0 / speed)
        parts = []
        for sent in [s for s in SENT_END.split(text.strip()) if s.strip()]:
            ph = self.sentence_phonemes(sent)
            if not ph:
                continue
            ids = self.v.phonemes_to_ids(ph)
            audio = self.v.phoneme_ids_to_audio(ids, cfg)
            parts.append(np.asarray(audio, dtype=np.float32).reshape(-1))
            tail = sent.strip()[-1]
            parts.append(np.zeros(int(self.sr * PAUSE.get(tail, 0.15)), dtype=np.float32))
        pcm = np.concatenate(parts) if parts else np.zeros(1, dtype=np.float32)
        return self.sr, (np.clip(pcm, -1, 1) * 32767).astype(np.int16)
