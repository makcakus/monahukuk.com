#!/usr/bin/env python3
"""knowledge/*.md dosyalarını üretir: elle yazılmış açıklamalar + veriden (havuz, lexicon, ses modeli) üretilen tablolar.
Tabloların her biri koşturularak üretilir; el ile düzenleme. Kullanım: python3 build_knowledge.py

Doğrulama etiketleri (her dosyada):
  [V] bu çalışmada veriyle/koşturarak doğrulandı     [S] ikincil kaynak (sayfa açılamadı; arama özetinden)
  [K] genel dilbilgisi bilgisi; bu çalışmada kaynakla DOĞRULANMADI
"""
import collections
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
KB = HERE.parent / "knowledge"
RS = HERE.parent.parent / "reels-generator"
sys.path.insert(0, str(RS / "scripts"))
sys.path.insert(0, str(HERE))
import tr_text  # noqa: E402
import tr_voice  # noqa: E402
import build_pool  # noqa: E402

TAGS = ("Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, "
        "arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.")
VOW = set("aeɛiɪɯoɔuʊøyœæə")


def write(name, title, body):
    (KB / name).write_text(f"# {title}\n\n{TAGS}\n\n{body.strip()}\n", encoding="utf-8")
    print("yazıldı:", name)


def main():
    KB.mkdir(exist_ok=True)
    rows = [json.loads(l) for l in (HERE / "pool.jsonl").read_text(encoding="utf-8").splitlines()]
    lex = tr_voice.load_lexicon()
    plain = tr_voice.TrVoice("fahrettin")
    plain.lexicon = []
    taught = tr_voice.TrVoice("fahrettin")
    ent = build_pool.load_zemberek()
    flagc = collections.Counter()
    for _, m in ent:
        a = re.search(r"A:([^;\]]*)", m)
        if a:
            flagc.update(x.strip() for x in a.group(1).split(","))

    # ---------------------------------------------------------------- 1 alphabet-phonetics
    ex = {"a": "kara", "b": "baba", "c": "cam", "ç": "çay", "d": "dede", "e": "ev", "f": "fil", "g": "gül", "ğ": "dağ", "h": "hava",
          "ı": "ışık", "i": "iş", "j": "jüri", "k": "kitap", "l": "lale", "m": "masa", "n": "nane", "o": "okul", "ö": "ödev",
          "p": "para", "r": "renk", "s": "su", "ş": "şeker", "t": "tuz", "u": "uzun", "ü": "üzüm", "v": "vatan", "y": "yol", "z": "zaman"}
    ipa = {"a": "a~ɑ", "b": "b", "c": "dʒ", "ç": "tʃ", "d": "d", "e": "e~ɛ", "f": "f", "g": "ɡ~ɟ", "ğ": "uzatır / j / —", "h": "h", "ı": "ɯ",
           "i": "i", "j": "ʒ", "k": "k~c", "l": "ɫ~l", "m": "m", "n": "n", "o": "o", "ö": "œ", "p": "p", "r": "ɾ", "s": "s", "ş": "ʃ",
           "t": "t", "u": "u", "ü": "y", "v": "v~ʋ", "y": "j", "z": "z"}
    tbl = ["| harf | örnek | motor fonemleri [V] | genel IPA [K] |", "|---|---|---|---|"]
    for l, w in ex.items():
        tbl.append(f"| {l} | {w} | {' '.join(plain._word_phonemes(w))} | {ipa[l]} |")
    palat = {w: " ".join(plain._word_phonemes(w)) for w in ["kedi", "kitap", "küçük", "gül", "gece", "gelin", "kâr", "kar", "gâvur", "lale", "okul"]}
    write("alphabet-phonetics.md", "Alfabe ve sesler", f"""
Türk alfabesi 29 harftir; ses karşılıkları için genel kaynak Zimmer & Orgun (1999), *Handbook of the IPA*, s. 154–156 (künye doğrulandı, metne erişilmedi) [S].

## Harf, örnek, motor çıktısı

Aşağıdaki "motor fonemleri" sütunu ses motorunun (espeak-ng + Piper) **öğretilmiş kural olmadan** ürettiği seslerdir; doğru telaffuz iddiası değil, motorun yaptığıdır [V]. "Genel IPA" sütunu alfabenin standart betimidir [K].

{chr(10).join(tbl)}

## Şapkalı harfler (â î û)

- TDK kuralı: düzeltme işareti (1) yazılışları aynı, okunuşları ve anlamları ayrı sözcükleri ayırmak için uzun okunan ünlüde (adet/âdet, alem/âlem, kar/kâr, hala/hâlâ) ve (2) Arapça/Farsça kökenli sözcüklerde ince g, k ünsüzlerinden sonra gelen a ve u üzerinde kullanılır [S].
- Wikipedia'daki Türkçe sesbilgisi maddesi aynı ayrımı (kar / kâr) ve işaretin bazı alıntılarda (gâvur, lâzım) kullanıldığını, ama arkaikleştiğini belirtir [S].
- **Motor şapkalı harfleri yok sayar** [V]: `kar` ve `kâr` aynı sesleri üretir ({palat['kar']} / {palat['kâr']}). Bu yüzden telaffuz yazı düzeyinde değil ses düzeyinde öğretilir (`pronunciation-exceptions.md`).
- Şapkalı yazılan sözcüklerde öğretilmiş kural, düz yazımla (resmi) da şapkalıyla (resmî) da uygulanır; bu `tests/run_pool.py` T3b ile sınanır [V].

## ğ

ğ ünsüz olarak okunmaz; öncesindeki ünlüyü uzatır ya da iki ünlü arasında j'ye yakın bir geçiş verir [K]. Motor `dağ` için {' '.join(plain._word_phonemes('dağ'))} üretir (a uzatılmış) [V].

## Motorun ince k/g/l davranışı (gözlem) [V]

Standart betimlemede k ve g ön ünlülerin yanında ince okunur ([c], [ɟ]) [S, Wikipedia]. Motorun gerçek çıktısı:

| kelime | motor fonemleri |
|---|---|
""" + "\n".join(f"| {w} | {p} |" for w, p in palat.items()) + """

Bulgu: motor g'yi ön ünlülerin yanında inceltiyor (gül, gece, gelin: ɟ) ama k'yi inceltmiyor (kedi, kitap, küçük: k) ve l'yi çoğunlukla koyu (ɫ) üretiyor. Bu, ses motorunun taban sınırlamasıdır; kural gerekirse `reels-generator/resources/lexicon.json` ile kelime kelime düzeltilir.
""")

    # ---------------------------------------------------------------- 2 phonological-rules
    kt = plain._word_phonemes("kitabı")
    write("phonological-rules.md", "Sesbilgisi kuralları", f"""
Bu dosya kuralları anlatır; hangi kelimelerin istisna olduğu `pronunciation-exceptions.md` ve test havuzundadır.

## Ünlü uyumu [K]
- Büyük ünlü uyumu: ekin ünlüsü kökün son ünlüsüne uyar (kitap→kitaplar, ev→evler).
- Küçük ünlü uyumu: yuvarlaklık ek ünlüsüne geçer (okul→okulu, göz→gözü).
- **Ters uyumlu kökler:** bazı alıntı kelimelerde kök arka ünlüyle biter ama ek ince ünlülü gelir (saat→saati, hal→hâli, kabul→kabûlü, sosyal→sosyâli). Zemberek ana sözlüğünde bu kökler `InverseHarmony` ile işaretlidir [V]: {len({w for w, m in ent if 'InverseHarmony' in m})} kelime; bunların %98'i (382/389) arka ünlüyle biter, yani işaret "arka ünlülü köke ince ünlülü ek" tanımıyla tutarlıdır [V, ampirik]; işaretin resmî tanımı Zemberek belgelerinden alınamadı.
- Bu işaretli kelimelerde l/k/g ince ya da ünlü uzun okunur; test havuzunun A grubu bu 389 kelimedir. Hangisinin hangi biçimde okunacağı kullanıcının dinleyip onayıyla öğretilir (hepsi aynı değildir: kânun'da yalnız a uzar, tâkip'te k da incelir).

## Ünsüz sürekliliği ve değişimleri [K]
- Ünsüz benzeşmesi: ek ünsüzü sert/yumuşak olur (kitap-ta, ev-de; kitap-çı, ev-ci).
- Ünsüz yumuşaması: p, ç, t, k ünlüyle başlayan ekten önce b, c, d, ğ olur (kitap→kitabı).
- Ana sözlükte satır bazında bayrak sayıları [V]: Voicing {flagc['Voicing']} (yumuşayan), NoVoicing {flagc['NoVoicing']} (yumuşamayan), LastVowelDrop {flagc['LastVowelDrop']} (ünlü düşmesi: ağız→ağzı), Doubling {flagc['Doubling']} (ünsüz ikizleşmesi: hak→hakkı), InverseHarmony {flagc['InverseHarmony']}.
- Motor `kitabı` için {' '.join(kt)} üretir; yumuşama zaten yazıdaki biçimden (b) gelir, motor bunu düzeltmez [V].
- Ek ünsüzleri (kaynaştırma): y, n, s, ş (araba-y-ı, kanunu-n-da). Bu bilgi `tr_text.attach` içinde kısaltma+ek birleştirmede kullanılır (TBMM'de → Meclisinde).

## Uzunluk
Türkçede ünlü uzunluğu ayırt edici değildir ama alıntılarda ve şapkalı sözcüklerde duyulur (kâr, hâlâ) [S]. Ses modeli `ː` (uzun) ve `ʲ` (damaklılaşma) simgelerini sözlüğünde taşır; öğretme bu simgelerle yapılır [V].
""")

    # ---------------------------------------------------------------- 3 pronunciation-exceptions
    t = ["| öğretilen | eşleşme | kural | önce → sonra (temsilci) |", "|---|---|---|---|"]
    for e in lex:
        rep = (e.get("words") or [e["stem"]])[0]
        t.append(f"| {e.get('say','')} | {'tam: ' + ', '.join(e['words']) if 'words' in e else 'kök: ' + e['stem'] + '*'} | `{' ; '.join(e['edit'])}` | "
                 f"{rep}: {' '.join(plain._word_phonemes(rep))} → {' '.join(taught._word_phonemes(rep))} |")
    todoA = [r for r in rows if r["group"] == "A" and not r["changed"] and r["freq_rank"]][:60]
    todoB = [r for r in rows if r["group"] == "B" and not r["changed"]][:60]
    write("pronunciation-exceptions.md", "Telaffuz istisnaları ve öğretme", f"""
## Öğretme akışı (kullanıcı kulağıyla)
1. Kullanıcı bir kelimenin yanlış okunduğunu söyler ya da öncelik listesinden bir kelime seçilir.
2. `reels-generator/scripts/say.py "cümle" --phonemes` ile motorun fonemlerine bak.
3. 3–5 aday kural üret (`--try "kök=eski > yeni"`; uzun ünlü: `a > a ː`, ince k: `k > c`, ince l: `ɫ > l`), numaralı tek ses dosyasında kullanıcıya dinlet.
4. Kullanıcı numarayı seçince `lexicon.json`'a yaz, `python3 tests/run_pool.py` çalıştır (ölü kural / yanlış pozitif kontrolü), commit'le.
5. Kural **yalnız onaylanan kelimeye** uygulanır. Benzer görünen başka kelimeye (kânun'a uyan kural kâr'a) kullanıcı dinlemeden genelleştirilmez.

## Kullanıcının dinleyerek verdiği kararlar [V, kullanıcı beyanı]
- kânun: yalnız uzun a (k sert kalır) · ferâgat: uzun a · tâkip: uzun a + ince k · kabûl: uzun u + ince l (ʲ) · **sosyâl: ince a + açık l** (æ l; "uzun a + açık l" ilk önerisi reddedildi, kural geri alınıp yeniden öğretildi).
- Dosya 4'teki hâkim, hâlinde, lâzım, dâhil, ikâmet, mâlik ve dosya 5'teki resmî, millî, adlî, hukukî, kânunî, medenî, malî, idarî onaylandı.
- **Toplu karar (2026-11-01):** -al kelimelerinde (normal, general, federal, sinyal, metal, final, moral, dijital, orijinal, kristal, ihmal, işgal) ince a + açık l (`a ɫ $ > æ l`); -ol kelimelerinde (kontrol, rol, petrol, alkol, bol) ve -ul kelimelerinde (meşgul, makul) açık l (`ɔ ɫ $ > o l`, `ʊ ɫ $ > u l`).
- **"Diğer" kelimeler düz kalır** (kalp, hayal, saat, seyahat, itaat, dikkat): önerilen kurallar (tek uzun a, ince k) kabul edilmedi, bu kelimelere kural yoktur. Not: "1. öneriyi kullan" ifadesi, dinletilen ilk biçim (düz) olarak yorumlandı.
- Bilinen hata (düzeltildi): millî için ilk önerilen kural uzun î'yi ilk hecedeki i'ye uyguluyordu; `$` (kelime sonu) çapası eklenerek düzeltildi.

## Şu an öğretilmiş kurallar ({len(lex)}) [V]
{chr(10).join(t)}

## Öğretme öncelik listesi (sıklığa göre, henüz öğretilmedi) [V]
Kaynak: Zemberek `InverseHarmony` ∩ OpenSubtitles sıklığı. Sayı = sıklık sırası.

**A grubu:** {', '.join(f"{r['word']} ({r['freq_rank']})" for r in todoA)}

**B grubu (şapkalı yazılanlar):** {', '.join(r['word'] for r in todoB)}

Not: "ad" gibi kelimeler listede çıkabilir; bayrak ters uyumu gösterir, her zaman gerçek bir telaffuz sorunu olduğu anlamına gelmez. Bu yüzden her kelime için dinleme onayı şarttır.
""")

    # ---------------------------------------------------------------- 4 foreign-origin-words
    A = [r["word"] for r in rows if r["group"] == "A"]
    ends = collections.Counter(w[-2:] for w in A if len(w) >= 3)
    fe = ", ".join(f"-{k} ({v})" for k, v in ends.most_common(10))
    topA = [r for r in rows if r["group"] == "A" and r["freq_rank"]][:30]
    write("foreign-origin-words.md", "Yabancı kökenli kelimeler", f"""
Ters uyumlu kökler (`InverseHarmony`) büyük ölçüde alıntı kelimelerdir; ama bu dosyada kökenbilim iddiası **yoktur** (kaynak doğrulanmadı), yalnız veriden görünen örüntüler vardır.

## Veriden örüntüler [V]
- A grubunda (389 kelime) en sık son iki harf: {fe}. Yani sorun büyük ölçüde son hecede l/k/g yakınında ve ünlü uzunluğunda toplanıyor.
- Sıklığa göre ilk 30 A kelimesi: {', '.join(r['word'] for r in topA)}.
- Bunların çoğu günlük/hukuk dilinde yüksek sıklıklıdır; öğretme sırası bu sıklığa göredir.

## Çalışma kuralları
1. Yeni bir alıntı kelime kötü okunuyorsa önce `say.py --phonemes` ile fonemlere bak.
2. Motor kelimeyi hiç tanımıyorsa (yabancı özel ad, Latince terim: de facto, ex officio) `vo` metninde Türkçe okunuşuyla yaz ("de fakto"); bu `lexicon.json` işi değil metin işidir [K].
3. Alıntılarda çift ünsüz (hakkında, millî, adlî) yazıda zaten vardır; motor bunu çoğunlukla işler. Sorunlu görünürse fonem düzeyinde sına, tahmin etme.
4. Kural genellemesi yapma: aynı son heceyi taşıyan kelimeler farklı okunabilir (normal/kural, rol/rüya).
""")

    # ---------------------------------------------------------------- 5 stress-and-intonation
    def final_stress(ph):
        ph = ph.split(" ")
        if "ˈ" not in ph:
            return None
        i = ph.index("ˈ")
        return not [p for p in ph[i + 2:] if p in VOW]
    stats = {}
    for g in "CDE":
        k = [final_stress(r["engine_phonemes"]) for r in rows if r["group"] == g]
        k = [x for x in k if x is not None]
        stats[g] = (sum(k), len(k))
    write("stress-and-intonation.md", "Vurgu ve tonlama", f"""
## Vurgu
- Genel kural: Türkçe sözcüklerde vurgu çoğunlukla son hecededir (sevdi-ler → sevdilér) [K].
- İstisnalar: yer adları (İstánbul, Ánkara), bazı zarflar, olumsuzluk eki -me/-ma öncesi hece, soru eki -mi öncesi hece, birleşik sözcükler [K]. Yer adlarının ayrı bir vurgu kuralı izlediği literatürde belirtilir: Kabak & Vogel (2001), *Phonology* 18(3): 315–360 (künye doğrulandı); özet için Lorenzen, Himmel & Kabak ve Bokhari (2014) kaynakları arama sonuçlarında görüldü [S]. Tutarlı bir genel kural bulunmadığı da bildirilir [S].
- **Motorun verisi [V]:** vurguyu son hecede işaretleme oranı: yüksek sıklıklı kontrol kelimelerinde %{round(100*stats['C'][0]/stats['C'][1])} ({stats['C'][0]}/{stats['C'][1]}), hukuk terimlerinde %{round(100*stats['D'][0]/stats['D'][1])} ({stats['D'][0]}/{stats['D'][1]}), **il adlarında yalnız %{round(100*stats['E'][0]/stats['E'][1])}** ({stats['E'][0]}/{stats['E'][1]}). Yani motor yer adlarını ayrı vurgu örüntüsüyle işliyor; bu, literatürdeki yer adı istisnasıyla tutarlıdır ama her ilin vurgusunun doğru olduğu kanıtlanmadı (kulakla dinlenmedi).
- Fonem listesinde `ˈ` işareti vurgulu heceden hemen önce gelir. `lexicon.json` kuralları vurguyu şu an **değiştirmez** (eşleşme dışı bırakır, yalnız eşleşme içine düşen işareti korur). Vurgu düzeltmesi gerekirse kural motoruna "vurgu taşı" özelliği eklenmelidir (yapılmadı).

## Tonlama ve duraklar (uygulanan değerler) [V]
`reels-generator/scripts/tr_voice.py` cümleleri `. ! ? ; :` işaretlerinde böler; sessizlik süreleri: nokta/ünlem/soru {tr_voice.PAUSE['.']} sn, noktalı virgül {tr_voice.PAUSE[';']} sn, iki nokta {tr_voice.PAUSE[':']} sn, diğer {0.15} sn. Virgül cümleyi bölmez; fonem dizisinde duraklama simgesi olarak taşınır. Cümle sonu düşen tonlama motordan gelir, ayrıca ayarlanmaz.
- Kısa cümleler (15–30 kelimelik sahne metni) vurgu ve tonlamayı daha doğal verir; uzun, çok virgüllü cümleden kaçın [K, uygulama deneyimi].
""")

    # ---------------------------------------------------------------- 6 proper-nouns
    prov = [r for r in rows if r["group"] == "E"]
    write("proper-nouns.md", "Özel adlar", f"""
## İller (81) [V]
Motorun öğretilmiş kural olmadan ürettiği fonemler aşağıdadır. Doğruluk iddiası yoktur; vurgu konumu kulakla denetlenmedi.

| il | motor fonemleri |
|---|---|
""" + "\n".join(f"| {r['word']} | {r['engine_phonemes']} |" for r in prov) + """

## Notlar
- Büyük harfli `I` ve `İ` ile başlayan adlar (Iğdır, Isparta, İstanbul) küçük harfli yazımla aynı fonemleri verir [V].
- Hakkâri şapkalı yazılır (TDK); düz yazım (Hakkari) aynı sesleri üretir [V].
- Kişi adı ve unvanlar: `Av.` → Avukat, `Dr.` → Doktor (`resources/pronounce.json`). Yabancı kişi adlarını vo metninde Türkçe okunuşuyla yaz.
- Kurum adları (Anayasa Mahkemesi, Yargıtay) sözlük sözcükleridir; kısaltmaları `pronounce.json` açar.
""")

    # ---------------------------------------------------------------- 7 abbreviations-and-numbers
    pj = json.loads((RS / "resources/pronounce.json").read_text(encoding="utf-8"))
    ds = (HERE / "difficult-sentences.md").read_text(encoding="utf-8")
    ncases = len(re.findall(r"^\|\s*\d+\s*\|", ds, re.M))
    write("abbreviations-and-numbers.md", "Kısaltmalar ve sayılar", f"""
Uygulama: `reels-generator/scripts/tr_text.py` (`spoken()`), sözlük `reels-generator/resources/pronounce.json`.

## Sayılar [V]
- Tamsayı → yazı (bin için "bir bin" yok; milyon için "bir milyon"). `tests/run_pool.py` T5: 141 sayı ve 125 sıra sayısı **bağımsız** `num2words` (tr) ile karşılaştırıldı; fark yok.
- Binlik ayraç (1.250.000), ondalık virgül (3,5 → üç virgül beş), yüzde (%20, %5'lik), para (₺1.500, 5.000 TL → lira), tarih (31.07.2026, 30/9/2026), saat (20.00'de → yirmide, 09:15'te → dokuz on beşte), sıra sayısı (12. → on ikinci; yalnız 3 haneye kadar ve ardından sözcük geliyorsa), esas/karar (2025/12), parantezli bent (b → be) kuralları vardır.
- Rakama bitişik ek, ekin yazılışına göre korunur (2026'da → iki bin yirmi altıda); apostrof atılır.

## Kısaltmalar [V]
`pronounce.json` {len(pj)} giriş içerir. Sonu `~` olan açılımlar iyelik ekli adlardır (Kanunu, Meclisi); bunlardan sonra gelen ek `n` kaynaştırmasıyla bağlanır (HMK'ya → Hukuk Muhakemeleri Kanununa). Ek uyumu `tr_text.attach` ile kurulur; {ncases} vakalık `difficult-sentences.md` tablosu (1. bölüm) her koşuda sınanır (T6).

| kısaltma | okunuş |
|---|---|
""" + "\n".join(f"| {k} | {v.rstrip('~')} |" for k, v in pj.items()) + """

## Sınırlar
- Kısaltmanın hangi biçimde okunduğu (harf harf mi, sözcük gibi mi) sözlük girişidir; yeni kısaltmayı eklemeden önce nasıl okunduğunu kullanıcıya sor.
- Latince/yabancı ibareler ve ürün adları otomatik çözülmez; vo metnine okunuşuyla yaz.
""")

    # ---------------------------------------------------------------- 8 ipa-dictionary
    ids = taught.v.config.phoneme_id_map
    sym = sorted(ids)
    key = {"ː": "uzun ünlü", "ʲ": "damaklılaşma", "ɫ": "koyu (velarize) l", "c": "ince (damaksıl) k", "ɟ": "ince g", "ˈ": "vurgu (sonraki ünlüde)",
           "ɯ": "ı", "ʊ": "u (gevşek)", "ɪ": "i (gevşek)", "ɛ": "e", "œ": "ö", "y": "ü", "ʃ": "ş", "ʒ": "j", "ɾ": "r (tek vuruş)", "j": "y", "ɡ": "g"}
    lexrows = [f"| {e.get('say','')} | {(e.get('words') or [e['stem']])[0]} | {' '.join(plain._word_phonemes((e.get('words') or [e['stem']])[0]))} | {' '.join(taught._word_phonemes((e.get('words') or [e['stem']])[0]))} |" for e in lex]
    top = [r for r in rows if r["group"] in "AB" and r["freq_rank"]][:80]
    write("ipa-dictionary.md", "IPA sözlüğü (motor ve öğretilen)", f"""
Bu sözlük **doğru telaffuz sözlüğü değildir**. İki şeyi kaydeder: (1) ses modelinin bildiği simgeler, (2) öğretilmiş kuralların önce/sonra fonemleri. 1000 kelimenin tamamının motor çıktısı `tests/pronunciation-test-1000.md` içindedir.

## Ses modelinin simge sözlüğü [V]
Model {len(ids)} simge bilir. Türkçe için kullanılan ve anlamı bilinenler:

| simge | anlam |
|---|---|
""" + "\n".join(f"| {k} | {v} |" for k, v in key.items()) + f"""

Modelde olmayan bir simge kuralda yazılırsa fonem dizisinden **sessizce düşer**; bu yüzden `run_pool.py` T2 her fonemin sözlükte olduğunu sınar.

## Öğretilmiş kurallar, önce → sonra [V]
| öğretilen | temsilci | önce (motor) | sonra |
|---|---|---|---|
""" + "\n".join(lexrows) + """

## Sık A/B kelimeleri, motor fonemleri [V] (ilk 80, sıklığa göre)
| kelime | sıklık | motor |
|---|---|---|
""" + "\n".join(f"| {r['word']} | {r['freq_rank']} | {r['engine_phonemes']} |" for r in top))


if __name__ == "__main__":
    main()
