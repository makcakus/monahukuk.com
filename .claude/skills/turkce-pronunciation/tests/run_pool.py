#!/usr/bin/env python3
"""Telaffuz test havuzunu ve normalleştiriciyi sınar. Sonucu tests/last-run.md'ye yazar; FAIL varsa çıkış kodu 1.

    python3 run_pool.py

Ne SINAR: kaynak bütünlüğü (sha256), havuz bileşimi, motor fonemlerinin ses modelinin sözlüğünde olması,
öğretilen kuralların etkisi ve kontrol kelimelerine dokunmaması, sayı/sıra sayısı normalleştirmesi
(bağımsız num2words kütüphanesiyle), difficult-sentences.md'deki beklenen okunuşlar.
Ne SINAMAZ: kulakla duyulan doğruluk. Ses kalitesini yalnızca kullanıcı dinleyerek onaylayabilir.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
RS = HERE.parent.parent / "reels-generator" / "scripts"
sys.path.insert(0, str(RS))
sys.path.insert(0, str(HERE))

import tr_text  # noqa: E402
import tr_voice  # noqa: E402
import build_pool  # noqa: E402

results = []          # (ad, durum, ayrıntı)


def check(name, ok, detail=""):
    results.append((name, "PASS" if ok else "FAIL", detail))
    return ok


def info(name, detail):
    results.append((name, "BİLGİ", detail))


def main():
    rows = [json.loads(l) for l in (HERE / "pool.jsonl").read_text(encoding="utf-8").splitlines()]
    voice = tr_voice.TrVoice("fahrettin")
    if "--inject" in sys.argv:       # testin gerçekten FAIL verebildiğini göstermek için: --inject '{"stem":"kar","edit":["k a > c a ː"]}'
        voice.lexicon = voice.lexicon + [json.loads(sys.argv[sys.argv.index("--inject") + 1])]
        for r in rows:
            r["taught_phonemes"] = " ".join(voice._word_phonemes(r["word"]))
            r["changed"] = r["taught_phonemes"] != r["engine_phonemes"]
    lex = voice.lexicon

    # T0 kaynak ve havuz bütünlüğü
    for name, (_, sha) in build_pool.SOURCES.items():
        got = hashlib.sha256((build_pool.CACHE / name).read_bytes()).hexdigest()
        check(f"T0 kaynak sha256: {name}", got == sha, got[:16])
    counts = {g: sum(1 for r in rows if r["group"] == g) for g in "ABCDE"}
    check("T0 havuz bileşimi A389 B160 C200 D170 E81", counts == {"A": 389, "B": 160, "C": 200, "D": 170, "E": 81}, str(counts))
    check("T0 1000 satır, 1000 benzersiz kelime", len(rows) == 1000 and len({build_pool.tr_lower(r["word"]) for r in rows}) == 1000)

    # T1 gruplar kaynaktaki tanımlarına uyuyor (kaynak dosyalarından yeniden okunur)
    ent = build_pool.load_zemberek()
    inv = {w for w, m in ent if "InverseHarmony" in m}
    circ = {w for w, _ in ent if re.search("[âîû]", w)}
    check("T1 A: tüm kelimeler Zemberek'te InverseHarmony", all(r["word"] in inv for r in rows if r["group"] == "A"))
    check("T1 B: tüm kelimeler Zemberek'te şapkalı lemma", all(r["word"] in circ for r in rows if r["group"] == "B"))
    freq = build_pool.load_freq()
    check("T1 C: tüm kelimeler OpenSubtitles sıklık listesinde", all(r["word"] in freq for r in rows if r["group"] == "C"))
    check("T1 E: 81 il", counts["E"] == 81)
    zeyrek_missing = [r["word"] for r in rows if r["group"] == "D" and not r["in_zemberek"]]
    info("T1 D: Zemberek'te lemma olarak bulunmayan hukuk terimi (türemiş/özel ad)", f"{len(zeyrek_missing)}: {', '.join(zeyrek_missing)}")

    # T2 motor fonemleri modelin sözlüğünde
    idmap = set(voice.v.config.phoneme_id_map.keys())
    missing = {}
    for r in rows:
        for ph in r["taught_phonemes"].split(" "):
            if ph and ph not in idmap:
                missing.setdefault(ph, []).append(r["word"])
    check("T2 tüm fonemler ses modelinin sözlüğünde (yoksa sessizce düşer)", not missing,
          "; ".join(f"{k}: {v[:3]}" for k, v in missing.items()) or "eksik yok")
    check("T2 her kelime fonem üretiyor", all(r["engine_phonemes"].strip() for r in rows))

    # T3 öğretilen kurallar: etkileri ve kontrollere dokunmama
    dead = []
    for e in lex:
        reps = e.get("words") or [e["stem"]]
        for w in reps:
            with_rule = voice._word_phonemes(w)
            alone = tr_voice.TrVoice.__new__(tr_voice.TrVoice)
            alone.v, alone.sr, alone.lexicon = voice.v, voice.sr, [e]
            without = tr_voice.TrVoice.__new__(tr_voice.TrVoice)
            without.v, without.sr, without.lexicon = voice.v, voice.sr, []
            if alone._word_phonemes(w) == without._word_phonemes(w):
                dead.append((e.get("say"), w))
    check(f"T3 {len(lex)} kuralın hepsi temsilci kelimede gerçekten fonem değiştiriyor (ölü kural yok)", not dead, str(dead) or "")

    # T3b regresyon: şapkalı yazım düz yazımla aynı okunmalı (resmî == resmi); öğretilen her `say` biçimi için
    mism = [e["say"] for e in lex if e.get("say") and voice._word_phonemes(e["say"]) != voice._word_phonemes(tr_voice.plain_word(e["say"]))]
    check("T3b şapkalı yazım (resmî, kânun ...) düz yazımla aynı fonemleri üretiyor", not mism, str(mism) or "")
    circ_pool = [r for r in rows if r["group"] == "B" and r["changed"]]
    bad_c = [r["word"] for r in circ_pool if voice._word_phonemes(r["word"]) != voice._word_phonemes(tr_voice.plain_word(r["word"]))]
    check(f"T3b havuzdaki {len(circ_pool)} öğretilmiş şapkalı kelime düz yazımla aynı", not bad_c, str(bad_c) or "")

    def explicit(w):
        pw = tr_voice.plain_word(w)
        return any(pw in e.get("words", []) or e.get("stem") == pw for e in lex)
    for g, label in (("C", "kontrol"), ("E", "il adı"), ("D", "hukuk")):
        changed = [r["word"] for r in rows if r["group"] == g and r["changed"]]
        unintended = [w for w in changed if not explicit(w)]
        check(f"T3 {label} kelimeleri (grup {g}): öğretilen kurallar yalnız bilerek öğretilene dokunuyor", not unintended,
              f"değişen {len(changed)}: {', '.join(changed) or '—'}; kök/çekim yoluyla (incele): {', '.join(unintended) or '—'}")

    # T4 öğretme kapsamı (bilgi) ve öncelik listesi
    for g in "AB":
        grp = [r for r in rows if r["group"] == g]
        taught = [r for r in grp if r["changed"]]
        info(f"T4 grup {g}: öğretilen / toplam", f"{len(taught)} / {len(grp)}")
    todo = [r for r in rows if r["group"] == "A" and not r["changed"] and r["freq_rank"]]
    info("T4 öğretilecek A grubu, sıklığa göre ilk 40", ", ".join(f"{r['word']}({r['freq_rank']})" for r in todo[:40]))
    todoB = [r for r in rows if r["group"] == "B" and not r["changed"]]
    info("T4 öğretilecek B grubu (şapkalı), sıklığa göre ilk 40", ", ".join(r["word"] for r in todoB[:40]))

    # T5 sayı normalleştirmesi: bağımsız kütüphane (num2words) ile karşılaştırma
    try:
        from num2words import num2words
    except ImportError:
        check("T5 num2words kurulu", False, "pip install --no-deps num2words")
        num2words = None
    if num2words:
        nums = list(range(0, 121)) + [199, 200, 999, 1000, 1001, 1999, 2000, 2026, 7589, 7596, 10000, 33326, 33417, 99999,
                                      100000, 999999, 1000000, 1250000, 12345678, 2000000000]
        bad = [(n, tr_text.number_words(n).replace(" ", ""), num2words(n, lang="tr")) for n in nums
               if tr_text.number_words(n).replace(" ", "") != num2words(n, lang="tr")]
        check(f"T5 sayı okunuşu: {len(nums)} sayı, bağımsız num2words ile aynı", not bad, str(bad[:6]) or "")
        ords = list(range(1, 121)) + [175, 440, 444, 1000, 2026]
        badord = [(n, tr_text.ordinal_words(n).replace(" ", ""), num2words(n, lang="tr", to="ordinal")) for n in ords
                  if tr_text.ordinal_words(n).replace(" ", "") != num2words(n, lang="tr", to="ordinal")]
        check(f"T5 sıra sayısı: {len(ords)} sayı, bağımsız num2words ile aynı", not badord, str(badord[:6]) or "")

    # T6 difficult-sentences.md: yazı -> beklenen okunuş
    ds = (HERE / "difficult-sentences.md").read_text(encoding="utf-8")
    cases = re.findall(r"^\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$", ds, re.M)
    cases = [(n, a.replace("\\|", "|"), b.replace("\\|", "|")) for n, a, b in cases if n.isdigit()]
    wrong = [(n, tr_text.spoken(a), b) for n, a, b in cases if tr_text.spoken(a) != b]
    check(f"T6 zor cümleler: {len(cases)} vaka, normalleştirici beklenen okunuşu üretiyor", cases and not wrong,
          "; ".join(f"#{n}: üretilen «{g}» ≠ beklenen «{e}»" for n, g, e in wrong[:5]) or "")

    fails = [r for r in results if r[1] == "FAIL"]
    out = ["# Son test çalıştırması", "", f"`python3 tests/run_pool.py` → **{len([r for r in results if r[1]=='PASS'])} PASS, {len(fails)} FAIL**.", "",
           "Sınanan: kaynak bütünlüğü, havuz bileşimi, fonem sözlüğü, kural etkisi, sayı normalleştirmesi (bağımsız kütüphane), zor cümleler.",
           "Sınanamayan: kulakla duyulan doğruluk. Bu, yalnızca kullanıcının dinleyerek onayıyla kesinleşir.", "",
           "| sonuç | test | ayrıntı |", "|---|---|---|"]
    for name, st, d in results:
        out.append(f"| {st} | {name} | {str(d).replace('|', '/')} |")
    (HERE / "last-run.md").write_text("\n".join(out) + "\n", encoding="utf-8")
    print("\n".join(out[2:3]))
    for name, st, d in results:
        if st == "FAIL":
            print("FAIL:", name, "->", str(d)[:300])
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
