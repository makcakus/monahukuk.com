"""Türkçe seslendirme metni normalleştirici: rakam, tarih, sıra sayısı, yüzde, para, kısaltma -> okunuş.

`spoken(text)` kullanılır. Böylece `vo` alanında "7589 sayılı", "12. Yargı Paketi", "31.07.2026",
"%20", "5 bin TL", "m. 440" gibi yazımlar doğal okunur. Ek apostrofu atılır ve ek olduğu gibi
yapıştırılır: "2026'da" -> "iki bin yirmi altıda" (yazılan ek zaten okunuşa göredir).
"""
import json
import re
from pathlib import Path

PRONOUNCE = Path(__file__).resolve().parent.parent / "resources/pronounce.json"

ONES = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"]
TENS = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"]
SCALES = [(10**12, "trilyon"), (10**9, "milyar"), (10**6, "milyon"), (10**3, "bin")]
MONTHS = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül",
          "Ekim", "Kasım", "Aralık"]
ORD_LAST = {"bir": "birinci", "iki": "ikinci", "üç": "üçüncü", "dört": "dördüncü", "beş": "beşinci",
            "altı": "altıncı", "yedi": "yedinci", "sekiz": "sekizinci", "dokuz": "dokuzuncu",
            "on": "onuncu", "yirmi": "yirminci", "otuz": "otuzuncu", "kırk": "kırkıncı",
            "elli": "ellinci", "altmış": "altmışıncı", "yetmiş": "yetmişinci", "seksen": "sekseninci",
            "doksan": "doksanıncı", "yüz": "yüzüncü", "bin": "bininci", "milyon": "milyonuncu",
            "milyar": "milyarıncı", "trilyon": "trilyonuncu"}


def _below_1000(n):
    parts = []
    h, r = divmod(n, 100)
    if h:
        parts.append(("" if h == 1 else ONES[h] + " ") + "yüz")
    t, o = divmod(r, 10)
    if t:
        parts.append(TENS[t])
    if o:
        parts.append(ONES[o])
    return " ".join(parts)


def number_words(n):
    """0..999 trilyon. 1000 -> 'bin' (bir bin değil), 1 000 000 -> 'bir milyon'."""
    if n == 0:
        return "sıfır"
    out = []
    for value, name in SCALES:
        q, n = divmod(n, value)
        if q:
            out.append("bin" if (value == 1000 and q == 1) else f"{_below_1000(q) if q < 1000 else number_words(q)} {name}")
    if n:
        out.append(_below_1000(n))
    return " ".join(out)


def ordinal_words(n):
    words = number_words(n).split(" ")
    words[-1] = ORD_LAST.get(words[-1], words[-1])
    return " ".join(words)



# ---- Kısaltma açılınca ek uyumu: "TBMM'de" -> "Türkiye Büyük Millet Meclisinde" ----
VOWELS = "aeıioöuü"
HARD = "çfhkpsşt"
HIGH = {"a": "ı", "ı": "ı", "e": "i", "i": "i", "o": "u", "u": "u", "ö": "ü", "ü": "ü"}
KINDS = {"de": "loc", "da": "loc", "te": "loc", "ta": "loc", "den": "abl", "dan": "abl", "ten": "abl", "tan": "abl",
         "e": "dat", "a": "dat", "ye": "dat", "ya": "dat", "i": "acc", "ı": "acc", "u": "acc", "ü": "acc",
         "yi": "acc", "yı": "acc", "yu": "acc", "yü": "acc", "in": "gen", "ın": "gen", "un": "gen", "ün": "gen",
         "nin": "gen", "nın": "gen", "nun": "gen", "nün": "gen", "ler": "pl", "lar": "pl",
         "si": "poss3", "sı": "poss3", "su": "poss3", "sü": "poss3", "nde": "loc", "nda": "loc", "nden": "abl", "ndan": "abl", "ne": "dat", "na": "dat"}


LETTER_NAMES = {"a": "a", "b": "be", "c": "ce", "ç": "çe", "d": "de", "e": "e", "f": "fe", "g": "ge", "ğ": "yumuşak ge", "h": "he",
                "ı": "ı", "i": "i", "j": "je", "k": "ke", "l": "le", "m": "me", "n": "ne", "o": "o", "ö": "ö", "p": "pe",
                "r": "re", "s": "se", "ş": "şe", "t": "te", "u": "u", "ü": "ü", "v": "ve", "y": "ye", "z": "ze"}


def attach(word, suffix, poss):
    """word + yazılı ek -> ünlü uyumuna göre doğru ek. poss: ad iyelik ekli (Kanunu, Meclisi ...),
    bu durumda hâl ekinden önce 'n' kaynaştırması gelir (Kanunu'nda)."""
    kind = KINDS.get(suffix.lower())
    if not kind:
        return word + suffix
    low = word.lower()
    last_v = next((c for c in reversed(low) if c in VOWELS), "e")
    two = "a" if last_v in "aıou" else "e"
    high = HIGH[last_v]
    ends_vowel = low[-1] in VOWELS
    if kind == "pl":
        return word + "l" + two + "r"
    if kind == "poss3":
        return word if poss else word + ("s" if ends_vowel else "") + high
    if kind in ("loc", "abl"):
        d = "nd" if poss else ("d" if ends_vowel or low[-1] not in HARD else "t")
        return word + d + two + ("n" if kind == "abl" else "")
    buf = "n" if poss else ("y" if ends_vowel else "")
    if kind == "dat":
        return word + buf + two
    if kind == "acc":
        return word + buf + high
    # gen
    return word + ("n" if (poss or ends_vowel) else "") + high + "n"


def _num(s):
    return int(s.replace(".", "")) if re.fullmatch(r"\d{1,3}(\.\d{3})+", s) else int(s)


def _year(y):
    return number_words(int(y))


def _suffix(m_suffix):
    return (m_suffix or "").lstrip("'’")


def spoken(text):
    # 1) sözlük (kısaltma -> okunuş); uzun anahtarlar önce. Sonda "~" = iyelik ekli ad (Kanunu, Meclisi).
    if PRONOUNCE.exists():
        table = json.loads(PRONOUNCE.read_text(encoding="utf-8"))
        for src in sorted(table, key=len, reverse=True):
            full = table[src]
            poss = full.endswith("~")
            full = full.rstrip("~")

            def rep(m, full=full, poss=poss):
                suf = (m.group(1) or "").lstrip("'’")
                return attach(full, suf, poss) if suf else full
            text = re.sub(rf"(?<![\w]){re.escape(src)}(['’][A-Za-zÇĞİÖŞÜçğıöşü]+)?(?![\w])", rep, text)

    # 2) tarih: 31.07.2026 ve 31/07/2026
    def date(m):
        d, mo, y = int(m.group(1)), int(m.group(2)), m.group(3)
        if not 1 <= mo <= 12:
            return m.group(0)
        return f"{number_words(d)} {MONTHS[mo]} {_year(y)}{_suffix(m.group(4))}"
    text = re.sub(r"\b(\d{1,2})[./](\d{1,2})[./](\d{4})('?[A-Za-zÇĞİÖŞÜçğıöşü]*)?", date, text)

    # 2b) saat: 20.00'de -> yirmide, 20:30 -> yirmi otuz, saat 9.05 -> dokuz sıfır beş
    def clock(m):
        h, mi = int(m.group(1)), int(m.group(2))
        spoken_min = "" if mi == 0 else (" " + number_words(mi) if mi >= 10 else " sıfır " + number_words(mi))
        return number_words(h) + spoken_min + _suffix(m.group(3))
    text = re.sub(r"(?<![\d.,:])([01]?\d|2[0-3]):([0-5]\d)(?!\d)('?[A-Za-zÇĞİÖŞÜçğıöşü]*)", clock, text)
    text = re.sub(r"(?<=saat )([01]?\d|2[0-3])\.([0-5]\d)(?![\d.])('?[A-Za-zÇĞİÖŞÜçğıöşü]*)", clock, text, flags=re.IGNORECASE)

    # 2c) parantez içi tek harf (fıkra bendi): (b) -> be  (TDK harf adları)
    text = re.sub(r"\(([a-zçğıöşü])\)", lambda m: LETTER_NAMES[m.group(1)], text)

    # 3) yüzde: %20, % 20, yüzde 20
    text = re.sub(r"%\s?(\d+)(?:[,.](\d+))?", lambda m: "yüzde " + number_words(int(m.group(1)))
                  + (f" virgül {number_words(int(m.group(2)))}" if m.group(2) else ""), text)

    # 4) para: 5.000 TL, 2,5 milyon TL, ₺1.500
    text = re.sub(r"₺\s?(\d[\d.]*)", lambda m: f"{number_words(_num(m.group(1)))} lira", text)
    text = re.sub(r"\bTL\b", "lira", text)

    # 5) esas/karar numarası: 2025/12 -> iki bin yirmi beş, on iki
    text = re.sub(r"\b((?:19|20)\d{2})/(\d{1,6})\b",
                  lambda m: f"{number_words(int(m.group(1)))}, {number_words(int(m.group(2)))}", text)

    # 6) sıra sayısı: "12. Yargı", "3. Hukuk Dairesi" (cümle sonu noktasını ezmemek için ≤ 3 hane)
    text = re.sub(r"\b(\d{1,3})\.(?=\s+[A-Za-zÇĞİÖŞÜçğıöşü])", lambda m: ordinal_words(int(m.group(1))), text)

    # 7) ondalık: 3,5 -> üç virgül beş
    text = re.sub(r"\b(\d+),(\d{1,2})\b(?!\d)", lambda m: f"{number_words(int(m.group(1)))} virgül "
                  + number_words(int(m.group(2))), text)

    # 8) kalan tamsayılar (+ apostrofla ek): 7589 sayılı, 2026'da, 31 Ekim'den
    text = re.sub(r"\b(\d{1,3}(?:\.\d{3})+|\d+)('?[A-Za-zÇĞİÖŞÜçğıöşü]*)",
                  lambda m: number_words(_num(m.group(1))) + _suffix(m.group(2)) if not m.group(2) or m.group(2).startswith(("'", "’")) else number_words(_num(m.group(1))) + " " + m.group(2),
                  text)

    text = re.sub(r"(?<=\w)['’](?=\w)", "", text)      # Ekim'de -> Ekimde (apostrof duraklama yaratmasın)
    return re.sub(r"\s+", " ", text).strip()


if __name__ == "__main__":
    import sys
    print(spoken(" ".join(sys.argv[1:])))
