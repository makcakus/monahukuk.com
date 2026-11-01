#!/usr/bin/env python3
"""1000 kelimelik telaffuz test havuzunu KAYNAKLARDAN üretir (elle uydurma yok).

Gruplar (toplam tam 1000):
  A  389  Zemberek ana sözlüğünde `InverseHarmony` işaretli kökler (ince ünlülü ek alan arka ünlülü kelimeler;
          l/k/g'si ince ya da ünlüsü uzun okunan adaylar: saat, kabul, hal, harf, sosyal ...)
  B  160  Zemberek'te şapkalı (â î û) yazılan, A'da olmayan en sık 160 kelime (OpenSubtitles sıklığına göre)
  C  200  Kontrol: OpenSubtitles'ta en sık, A/B ile ilgisiz düz kelimeler (öğretilen kuralların bunlara DOKUNMAMASI gerekir)
  D  170  Hukuk terimleri (elle derlenmiş; her biri Zemberek/sıklık listesinde aranır, bulunmayanlar işaretlenir)
  E   81  İl adları

Çıktı: tests/pronunciation-test-1000.md ve tests/pool.jsonl.  Kullanım: python3 build_pool.py
"""
import hashlib
import json
import re
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
CACHE = HERE / ".cache"
RS = HERE.parent.parent / "reels-generator" / "scripts"
sys.path.insert(0, str(RS))

SOURCES = {
    "master-dictionary.dict": ("https://raw.githubusercontent.com/ahmetaa/zemberek-nlp/master/morphology/src/main/resources/tr/master-dictionary.dict",
                               "c539e12904d1ccac4792073f05deeae2babe692249dc4a359da254f1bd338f6f"),
    "tr_50k.txt": ("https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/tr/tr_50k.txt",
                   "480192844e7fdfe9591bbf0b9cfbb96ed5751cfbba7024fd45d8cb7508e07d5c"),
}

LEGAL = """mahkeme dava davacı davalı karar hüküm temyiz istinaf tebligat duruşma celse tanık bilirkişi keşif delil ispat
ikrar yemin feragat kabul sulh vekâlet vekil avukat savcı hâkim kanun madde fıkra bent yönetmelik tüzük kararname
genelge içtihat emsal bozma onama kesinleşme infaz tutuklama gözaltı beraat mahkûmiyet ceza hapis tazminat nafaka
velayet boşanma evlilik miras vasiyet mirasçı tereke tapu ipotek haciz icra iflas konkordato alacak borç borçlu
alacaklı kefil kefalet teminat sözleşme akit taraf süre zamanaşımı kusur kasıt taksir suç fail mağdur şüpheli sanık
iddianame savunma itiraz şikâyet ihbar soruşturma kovuşturma yargılama yargıtay danıştay anayasa idare vergi harç
resmî noter tescil ticaret şirket ortak anonim limited kooperatif rekabet tüketici marka patent telif işçi işveren
kıdem sigorta prim emeklilik ikamet vatandaşlık yabancı iltica tenfiz tanıma usul esas görev yetki yetkisizlik
görevsizlik birleştirme ıslah tahkim hakem arabulucu uzlaşma şerh kayıt tespit tedbir ihtiyati temlik devir kira
kiracı mülkiyet zilyet irtifak rehin vesayet kayyum ehliyet temsil muvafakat rıza kanıt mütalaa savcılık düzeltme
karşıoy gerekçe sonuç ilam makbuz tutanak zabıt celp müzekkere tahliye tahsilat ödeme faiz temerrüt ifa ibra defter
bilanço çek senet poliçe bono zarar haksız fiil sorumluluk ihmal bildirim başvuru dilekçe cevap beyan ibraz iade ret
red hacir iptal butlan fesih nüfus noterlik ihtar kıymet bedel
hukuk adli adalet daire kurul heyet üye başkan kâtip mübaşir müdür müdürlük dosya evrak belge sureti tasdik onay imza
paraf mühür damga gelir gümrük ithalat ihracat kadastro imar kamulaştırma istimlak orman hazine vakıf dernek seçim
meclis belediye valilik kaymakamlık emniyet jandarma zabıta cezaevi hükümlü tutuklu denetim serbestlik ihlal tazmin
telafi mahrum gaip kısıtlı ergin küçük çocuk evlat nesep soyadı nişan evlenme rejimi katkı iştirak ortaklık tasfiye
ihya kurumlar hacizli rehinli haklı haksızlık usulsüz hukuka aykırı""".split()

PROVINCES = """Adana Adıyaman Afyonkarahisar Ağrı Aksaray Amasya Ankara Antalya Ardahan Artvin Aydın Balıkesir Bartın Batman
Bayburt Bilecik Bingöl Bitlis Bolu Burdur Bursa Çanakkale Çankırı Çorum Denizli Diyarbakır Düzce Edirne Elazığ Erzincan
Erzurum Eskişehir Gaziantep Giresun Gümüşhane Hakkâri Hatay Iğdır Isparta İstanbul İzmir Kahramanmaraş Karabük Karaman
Kars Kastamonu Kayseri Kırıkkale Kırklareli Kırşehir Kilis Kocaeli Konya Kütahya Malatya Manisa Mardin Mersin Muğla Muş
Nevşehir Niğde Ordu Osmaniye Rize Sakarya Samsun Siirt Sinop Sivas Şanlıurfa Şırnak Tekirdağ Tokat Trabzon Tunceli Uşak
Van Yalova Yozgat Zonguldak""".split()

TR_UP = str.maketrans("İI", "iı")


def tr_lower(s):
    return s.translate(TR_UP).lower()


def plain(s):
    return tr_lower(s).replace("â", "a").replace("î", "i").replace("û", "u")


def fetch():
    CACHE.mkdir(exist_ok=True)
    for name, (url, sha) in SOURCES.items():
        p = CACHE / name
        if not p.exists():
            print("indiriliyor:", name)
            p.write_bytes(urllib.request.urlopen(url, timeout=120).read())
        got = hashlib.sha256(p.read_bytes()).hexdigest()
        if got != sha:
            raise SystemExit(f"{name}: sha256 uyuşmuyor ({got}); kaynak değişmiş. Havuzu yeniden üretme, incele.")
    print("kaynak sha256'ları doğrulandı")


def load_zemberek():
    ent = []
    for l in (CACHE / "master-dictionary.dict").read_text(encoding="utf-8").splitlines():
        m = re.match(r"^(\S.*?)(?: \[(.*)\])?$", l)
        if m:
            ent.append((m.group(1), m.group(2) or ""))
    return ent


def load_freq():
    freq = {}
    for rank, l in enumerate((CACHE / "tr_50k.txt").read_text(encoding="utf-8").splitlines(), 1):
        w, _, c = l.rpartition(" ")
        if w and w not in freq:
            freq[w] = (rank, int(c))
    return freq


def main():
    fetch()
    ent, freq = load_zemberek(), load_freq()
    zem_words = {w for w, _ in ent}
    flags = {}
    for w, m in ent:
        a = re.search(r"A:([^;\]]*)", m)
        flags.setdefault(w, set()).update(x.strip() for x in a.group(1).split(",")) if a else flags.setdefault(w, set())
    inv = sorted({w for w, m in ent if "InverseHarmony" in m and re.fullmatch(r"[a-zçğıöşüâîû]+", w)})
    circ = sorted({w for w, _ in ent if re.fullmatch(r"[a-zçğıöşüâîû]+", w) and re.search("[âîû]", w)})
    circ_by_plain = {}
    for w in circ:
        circ_by_plain.setdefault(plain(w), w)

    def f(w):
        return freq.get(plain(w)) or freq.get(w)

    A = sorted(inv, key=lambda w: (f(w)[0] if f(w) else 10**9, w))     # sık olanlar önce: öğretme önceliği
    in_A = set(A)
    cand_B = [w for w in circ if w not in in_A and f(w)]
    cand_B.sort(key=lambda w: f(w)[0])
    B, seen = [], set(plain(w) for w in A)
    for w in cand_B:
        if plain(w) in seen:
            continue
        seen.add(plain(w))
        B.append(w)
        if len(B) == 160:
            break
    assert len(B) == 160, f"B grubu {len(B)}"

    assert len(PROVINCES) == 81 and len(set(PROVINCES)) == 81
    seen |= {tr_lower(p) for p in PROVINCES}
    special = set(plain(w) for w in A) | set(plain(w) for w in circ)
    C = []
    for w, (rank, cnt) in sorted(freq.items(), key=lambda kv: kv[1][0]):
        if not re.fullmatch(r"[a-zçğıöşü]{3,}", w) or w in special or w in seen:
            continue
        C.append(w)
        seen.add(w)
        if len(C) == 200:
            break
    assert len(C) == 200

    D, dseen = [], set()
    for w in LEGAL:
        k = tr_lower(w)
        if k in dseen or k in seen or plain(w) in special or plain(w) in {plain(x) for x in A}:
            continue
        dseen.add(k)
        D.append(w)
        if len(D) == 170:
            break
    assert len(D) == 170, f"hukuk listesi {len(D)} < 170: listeyi genişlet"

    import tr_voice
    plain_voice = tr_voice.TrVoice("fahrettin", None)
    plain_voice.lexicon = []
    taught_voice = tr_voice.TrVoice("fahrettin", None)

    rows = []
    for group, words, src in (("A", A, "Zemberek InverseHarmony"), ("B", B, "Zemberek şapkalı lemma + OpenSubtitles sıklığı"),
                              ("C", C, "OpenSubtitles 2018 sıklık"), ("D", D, "elle derlenen hukuk terimi"),
                              ("E", PROVINCES, "il adları (81)")):
        for w in words:
            lw = tr_lower(w)
            base = " ".join(plain_voice._word_phonemes(lw))
            taught = " ".join(taught_voice._word_phonemes(lw))
            rules = [e.get("say", "") for e in tr_voice.match_entries(lw, taught_voice.lexicon)]
            fr = f(w)
            zem = sorted(flags.get(w, set()) | flags.get(plain(w), set()))
            circ_form = circ_by_plain.get(plain(w), "")
            rows.append({"n": len(rows) + 1, "word": w, "group": group, "source": src,
                         "freq_rank": fr[0] if fr else None, "freq_count": fr[1] if fr else None,
                         "in_zemberek": (w in zem_words) or (plain(w) in zem_words) or (tr_lower(w) in zem_words),
                         "zemberek_flags": zem, "tdk_circumflex": circ_form,
                         "engine_phonemes": base, "taught_phonemes": taught, "taught_rule": rules,
                         "changed": base != taught})
    uniq = {tr_lower(r["word"]) for r in rows}
    assert len(rows) == 1000 and len(uniq) == 1000, (len(rows), len(uniq))
    with open(HERE / "pool.jsonl", "w", encoding="utf-8") as fh:
        for r in rows:
            fh.write(json.dumps(r, ensure_ascii=False) + "\n")

    G = {"A": "ince-l/uzun-ünlü adayı (InverseHarmony)", "B": "şapkalı yazılan (Zemberek)", "C": "kontrol (düz)",
         "D": "hukuk terimi", "E": "il adı"}
    md = ["# Telaffuz test havuzu: 1000 kelime", "",
          "Bu dosya `tests/build_pool.py` ile kaynaklardan üretilir; elle düzenleme. Kaynaklar ve sha256'ları: `references/sources.md`.",
          "Çalıştırma sonucu: `tests/last-run.md` (`python3 tests/run_pool.py`).", "",
          "- **motor**: ses motorunun (espeak-ng/Piper) öğretilmiş kural OLMADAN ürettiği fonemler. Doğru telaffuz iddiası değildir; yalnızca motorun ne yaptığıdır.",
          "- **öğretilen**: `reels-generator/resources/lexicon.json` kuralı uygulandıktan sonraki fonemler (— = değişmedi).",
          "- **sıklık**: OpenSubtitles 2018 Türkçe 50k listesindeki sıra (— = listede yok). Öğretme önceliği için kullanılır.",
          "- **Zemberek**: sözlük bayrakları (— = girdi yok ya da bayraksız). **şapkalı**: Zemberek'teki şapkalı yazım.", ""]
    counts = {g: sum(1 for r in rows if r["group"] == g) for g in G}
    md.append("| grup | açıklama | kelime |\n|---|---|---|")
    for g, d in G.items():
        md.append(f"| {g} | {d} | {counts[g]} |")
    md.append(f"| | toplam | {len(rows)} |\n")
    md.append("| # | kelime | grup | sıklık | Zemberek | şapkalı | motor | öğretilen |\n|---|---|---|---|---|---|---|---|")
    for r in rows:
        md.append("| {n} | {w} | {g} | {fr} | {zf} | {tc} | {eng} | {tp} |".format(
            n=r["n"], w=r["word"], g=r["group"], fr=r["freq_rank"] or "—",
            zf=(", ".join(r["zemberek_flags"]) or ("var" if r["in_zemberek"] else "—")), tc=r["tdk_circumflex"] or "—",
            eng=r["engine_phonemes"], tp=(r["taught_phonemes"] if r["changed"] else "—")))
    (HERE / "pronunciation-test-1000.md").write_text("\n".join(md) + "\n", encoding="utf-8")
    print("havuz:", counts, "toplam", len(rows))
    print("hukuk terimi Zemberek'te bulunmayan:", [r["word"] for r in rows if r["group"] == "D" and not r["in_zemberek"]])


if __name__ == "__main__":
    main()
