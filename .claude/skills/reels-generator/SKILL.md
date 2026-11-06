---
name: reels-generator
description: >-
  m.o.n.a.law Instagram hesabı için güncel hukuk haberinden yüzsüz Instagram Reels
  üretir: doğrulanmış kaynaktan senaryo, kelime kelime beliren metin animasyonu,
  çizgili sütun arka planı, yerel Türkçe seslendirme, 1080x1920 MP4, kapak ve
  caption. Şu isteklerde tetiklenir: "reels yap", "reels üret", "bugünün reelsleri",
  "günün hukuku", "günlük hukuk reels'i", "bu haberi reels yap", "şu konuda reels", "Instagram videosu",
  "m.o.n.a.law için içerik", "reels it", "make a reel about X", "Instagram reel for X",
  ya da bir haber/konu yapıştırılıp "reels'e çevir" dendiğinde.
---

# reels-generator — m.o.n.a.law Reels

Her reels bir web sayfasıdır. Sahneler `template/scene.html`'den render edilir,
başsız Chromium'da zaman elle sürülerek kare kare çekilir ve ffmpeg ile
seslendirmeyle birleştirilir. Render tarafında ağ ya da API anahtarı kullanılmaz.
Ses de yerel üretilir (bölüm 2). Dış servis yoktur.

Yollar bu skill klasörüne göredir: `.claude/skills/reels-generator/`. Çıktılar depo
kökünde `output/reels/<slug>/` altına yazılır. Slug biçimi `YYYY-AA-GG-konu`.

İlk kullanımda bir kez `bash scripts/setup.sh` çalıştır. Chromium başlamazsa
README'deki nota bak.

## 0. Günlük format: "Günün hukuku" bülteni

Her gün 1 reels, **o günün** hukuki gelişmeleri. İçinde **en az 5, en çok 10** haber olur
(10'dan fazla doğrulanmışsa vatandaşın geneline en çok dokunan 10'u). Yapı: kapak + 5–10 haber
sahnesi + kapanış (7–12 sahne). Süre 50–110 sn; 8+ haberde sahne başına 15–20 kelimelik vo
kullan. **"Bu hafta" gibi haftalık çerçeve kullanılmaz**: kapak ve kapanış günlük konuşur
("Bugün hukukta N gelişme", "Günün hukuku").

**Haber türleri** (hepsi alınabilir):
1. Resmî düzenlemeler: Resmî Gazete, kanun, yönetmelik, CB kararnamesi, tebliğ.
2. Yargı kararları: AYM, Yargıtay, Danıştay, AİHM, bölge adliye (içtihat ve norm denetimi).
3. Kurum kararları ve duyuruları: KVKK, Rekabet, BDDK, SPK, GİB, SGK, HSK, Adalet Bakanlığı, TBMM.
4. **Güncel olayların hukuki yönü:** gündemdeki bir olayın dayandığı ya da doğurduğu hukuki
   düzenleme/süreç. Şartı aynıdır: olay ve hukuki sonuç **resmî bir kaynakla** doğrulanır
   (mahkeme/kurum açıklaması, karar, ilgili mevzuat maddesi). Yalnızca haber sitesinde ya da
   X'te geçen iddia alınmaz; kişi adı, siyasi parti ve sürmekte olan yargılama konu edilmez.

### Haber nereden bulunur (aday bulma)

Aday bulmak için serbest kaynaklara bakılır, **hiçbiri tek başına doğrulama sayılmaz**:
- `WebSearch`: son 7 gün, genel gündem ("Anayasa Mahkemesi karar", "yargı paketi", "Resmî
  Gazete'de bugün", "yürürlüğe girdi" vb.).
- X (Twitter): `WebSearch` ile `allowed_domains: ["x.com", "twitter.com"]` kısıtlı arama.
  Avukat, baro ve haber hesaplarında ne konuşulduğuna bakmak için. Yalnızca "bu konu
  gündemde" sinyalidir; X'te okunan hiçbir bilgi reels'e olduğu gibi girmez.
- YargıMCP: `resmi_gazete_fihrist` (son 7–10 gün, her gün), `mevzuat_ara` (tarih
  aralığıyla yeni kanun, yönetmelik, CB kararı), `aym_ictihat_ara` (yeni norm denetimi ve
  bireysel başvuru kararları, `decision_date_start` ile), `ictihat_ara` (Yargıtay, Danıştay
  HGK/İBK ve daire kararları), `kurum_karari_ara` (KVKK, Rekabet, BDDK, SPK, GİB).
- Kurum duyuruları: TBMM, Adalet Bakanlığı, SGK, GİB, Rekabet, KVKK, BDDK, SPK.

Önce `legal_research_guide` ve gerekirse `hukuk_skill` ile araç kullanımına bak. Yargı PRO
kotası aylıktır ve her `*_getir` çağrısı kotadan düşer: önce `*_ara` ile ve snippet'lerle
ele, yalnız seçtiğin haberin metnini getir. Kota biterse **reels üretme**, kullanıcıya
nedenini bildir.

### Doğrulama kuralı (pazarlık yok)

Her haber için **birincil resmî kaynak metni** okunur: Resmî Gazete maddesi, mevzuat.gov.tr
metni, AYM/Yargıtay/Danıştay karar metni ya da kurum kararı. Haber sitesi, hukuk bürosu
yazısı ve X paylaşımı doğrulama sayılmaz. Reels'e giren her cümle, okuduğun metinde
bulunur:
- Sayı, tarih, tutar, madde numarası metinden birebir alınır.
- Yürürlük tarihi kanunun yürürlük maddesinden okunur ("yayımdan üç ay sonra" ise hesapla
  ve metindeki dayanağı yaz).
- Yargı kararında sonuç, hüküm bölümünden okunur; ayrıca gerekçe ve karşı oy ayrımına dikkat.
- Metinde olmayanı çıkarım olarak da yazma ("yeni düzenleme bekleniyor" gibi tahmin yok).
- Doğrulayamadığın haber reels'e girmez. Önce son 24–48 saate bak; 5 doğrulanmış habere
  ulaşamıyorsan pencereyi son 4 güne kadar genişlet (eski haberin gününü sahnede belirt: "Cuma
  günü yayımlanan…"); yine 5'e ulaşamıyorsan ya da Yargı PRO kotası/erişim sorunu varsa **video
  üretme**, kullanıcıya nedenini bildir.
- `reel.json > sources`: her haber için kaynak etiketi, tarih, sayı ve bağlantı yazılır.

### Haber seçimi (kullanıcı kuralı: geniş kitleyi ilgilendiren, çeşitli kaynaklardan)

**Ölçüt:** haber halkın tamamını ya da büyük bir kesimini ilgilendirmeli (aile, evlilik ve boşanma,
konut, kira, tapu, miras, iş ve işçi hakları, SGK/emeklilik, vergi, tüketici, trafik, eğitim, sağlık,
engelli ve çocuk hakları, kamulaştırma, geniş etkili harç/ücret/oran değişiklikleri).
**Tek kişiye ya da tek dosyaya ait karar haber değildir.**

**Kaynak çeşitliliği (zorunlu):** bir reels'te tek kaynaktan en çok 2 haber olur. AYM bireysel
başvuru kararları en çok 1 haberdir ve yalnızca geniş kitleyi ilgilendiren ilkeyi içerirse
alınır (pilot karar, içtihat değişikliği, bir meslek/vatandaş grubunu etkileyen sonuç). Öncelik sırası:
1. **Kanunlar** (TBMM'de kabul edilen ve Resmî Gazete'de yayımlanan; `mevzuat_ara`, KANUN, tarih aralığı).
   TBMM sitesi bu ortamdan açılmıyor: Genel Kurul'da kabul edilmiş ama Resmî Gazete'de
   yayımlanmamış kanunlar bulunamaz; yalnızca yayımlanmış kanun alınır, "Meclis'te kabul edildi" yazılmaz.
2. **Yargıtay Genel Kurulları ve içtihadı birleştirme** (HGK, CGK, BGK/İBK; `ictihat_ara`, `birimAdi`
   HGK/CGK, `kararTarihiStart`; konu aramalarıyla (kira, boşanma, aile konutu, iş kazası, tüketici,
   SGK) emsal kararlar), Danıştay Kurulları (İDDK, VDDK, İBK) ve daire kararlarından emsal niteliğinde olanlar.
3. **Resmî Gazete düzenlemeleri** (CB kararnamesi, yönetmelik, tebliğ) geniş kitleye etkisi olanlar.
4. AYM **norm denetimi** (iptal) kararları ve pilot kararlar.
5. Kurum kararları (KVKK, Rekabet, BDDK, SPK...; plan izin veriyorsa).

Yargıtay/Danıştay kararları yayım tarihi bakımından eski olabilir; bu durumda `cite`'ta karar
tarihi yazılır ("09.09.2026") ve caption bunu belirtir. Bugünün Resmî Gazetesi zayıfsa yeni
düzenleme uydurulmaz, yukarıdaki sırayla emsal kararlara geçilir.

Ayrıca: yeni mi (son 24–48 saat; yürürlük ya da son tarih bugün/yarınsa öne çıkar; yoksa son
haftalar), resmî kaynakta net mi. Siyasi parti, kişi adlı güncel soruşturma ve devam eden yargılamaya
dair haber alınmaz. Aynı haberi kısa süre önce yaptıysan tekrarlama (`output/reels/` geçmişine
bak). Sıralama: en çok ilgi çekecek olan kapağa ve ilk habere.

`content/articles/` içinde aynı konu varsa o metnin cümlelerini taşıma (CLAUDE.md bülten kuralı 5).

## 1. Senaryoyu yaz → `output/reels/<slug>/reel.json`

Tek doğruluk kaynağı bu dosyadır. Renderer başka hiçbir şey okumaz. Render ücretsiz;
onay için durma, hemen render et. Slug biçimi `YYYY-AA-GG-gunun-hukuku`.

```json
{
  "topic": "…",
  "slug": "2026-11-01-gunun-hukuku",
  "sources": [{ "label": "7596 sayılı Kanun, RG 27.10.2026 S. 33413, m. 1-8", "url": "https://www.mevzuat.gov.tr/…" }],
  "scenes": [
    { "role": "cover", "headline": "Bugün hukukta *6 gelişme*: biri bugün başladı.", "art": "adliye", "vo": "…" },
    { "role": "body", "heading": "…*vurgu*…", "art": "telefon",
      "body": ["en çok iki satır", "her biri tek satıra sığar"],
      "cite": "Resmî Gazete 10.10.2026 · Yönetmelik", "vo": "…" },
    { "role": "closing", "headline": "…", "cta": "…", "source": "Kaynak: Resmî Gazete", "art": "terazi", "vo": "…" }
  ]
}
```

**Kapak (`cover`)**: Tek cümle, kaydırmayı durdurur; sayı ("6 gelişme") ve en dikkat çekici
haberin ipucu. Soru, alt başlık ya da gövde yok. En fazla 5 satır.

**Haber sahnesi (`body`)**: Bir haber = bir sahne. Başlık haberin kendisidir (en çok 4 satır),
gövde en çok iki satır (her satır tek satıra sığar, renderer ölçer), `cite` zorunlu: ekranda
altın renkte küçük kaynak satırı (ör. "AYM E.2025/156 · RG 30.09.2026", en çok ~44 karakter).
Haberi anlat, yorum yapma, tavsiye verme.

**Kapanış (`closing`)**: Kapanış cümlesi, yumuşak davet (`cta`), kaynak satırı (`source`).

**Vurgu**: Başlıkta `*kelime*` o sahnenin vurgusudur (altın, italik), sahne başına en fazla
bir tane. Kapanışta vurgu bitiş karesidir, orada `*` yok.

**Görsel (`art`)**: Konuya uygun çizgi illüstrasyonu: `adliye`, `terazi`, `tokmak`, `belge`,
`kumsaati`, `ev`, `para`, `kalkan`, `kilit`, `araba`, `telefon`, `kisi`, `canta`
(`resources/art.json`). Her haber sahnesinde farklı olsun. Yeni konu için `art.json`'a
yeni çizim eklenebilir (400x400 görünüm kutusu, yalnız çizgi).

**Seslendirme (`vo`)**: Konuşulan metin; ekrandakini kelimesi kelimesine okumaz, tamamlar.
Sahne başına 15–30 kelime, doğal konuşma Türkçesi, kısa cümleler. Rakam, tarih, madde ve
sıra sayısı, kısaltma ve para yazıyla değil **olduğu gibi** yazılabilir: `scripts/tr_text.py`
okunuşa çevirir ("7596 sayılı" → "yedi bin beş yüz doksan altı sayılı", "175. madde" → "yüz
yetmiş beşinci madde", "%20" → "yüzde yirmi", "1 milyon TL" → "bir milyon lira", UYAP,
TBMM, AYM gibi kısaltmaları açar ve kısaltmadan sonra gelen eki uyumlu bağlar).

**Düzen**: Gövde sahneleri A ve B arasında dönüşümlüdür (tek sıradaki A: başlık üstte,
ortada illüstrasyon, gövde ve kaynak altta; B: üstte illüstrasyon, altta başlık ve gövde).
`layout` alanı sırayı ezer.

**Haber dili** (CLAUDE.md bülten kuralları):
- Ne olduğunu anlat; yorum ve tavsiye ya hiç olmaz ya da tek cümle olur.
- Kanun numarası gerekiyorsa tek cümlede geçer; kapak cümlesinin biçimi her gün aynı kalıpta olmasın.
- Bir haberde ancak resmî metinde yazan sonuç ve tarih yer alır.

**Reklam kaygısı**: Hesabın sahibi bu içeriğin reklam yasağı (Avukatlık Kanunu m. 55) kapsamı
dışında olduğunu değerlendiriyor. Yine de içerik bilgilendirme amaçlı kalır: müvekkil
çağrısı, sonuç vaadi, ücret ya da kampanya ifadesi yazılmaz. Renderer reklam çağrısı gibi
okunabilecek ifadelerde yalnızca uyarı verir, durmaz.

## 2. Seslendirme (yerel, ücretsiz, ağsız)

Higgsfield ya da başka bir dış servis kullanılmaz. Ses, Piper Türkçe modelleriyle
(piper-tts) bu makinede üretilir.

```bash
python3 .claude/skills/reels-generator/scripts/tts.py output/reels/<slug>/reel.json
python3 .claude/skills/reels-generator/scripts/tts.py output/reels/<slug>/reel.json --scene 3   # tek sahne
```

- Her sahnenin `vo` metni `audio/NN.wav` olur. Render süreleri ses uzunluğundan alır.
- Varsayılan ses Google Cloud TTS `google:tr-TR-Chirp3-HD-Gacrux`'tur (`voice.json`). Anahtar `GOOGLE_TTS_API_KEY` ya da bulut oturumunda proxy'nin eklediği anahtardır; ağ gerekir. Google seslerinde `lexicon.json` (fonem düzeltmesi) uygulanmaz, `pronounce.json` yazım düzeltmesi geçerlidir. Çevrimdışı Piper için `voice.json`'a `fahrettin` yaz.
- Piper ses seçenekleri (`fahrettin`, `dfki`, `fettah`). Her
  reels aynı sesle çıkar; değiştirmek için dosyayı düzenle ve `setup.sh`'i çalıştır
  (ya da `VOICES="fahrettin dfki fettah" bash scripts/setup.sh` ile hepsini indir).
- Telaffuz bilgisi, öğretme akışı ve 1000 kelimelik test havuzu için `.claude/skills/turkce-pronunciation/` skill'ine bak (kural değişikliğinden sonra `python3 .claude/skills/turkce-pronunciation/tests/run_pool.py`).
- Telaffuz iki katmandır:
  1. Metin: rakam, tarih, madde ve sıra sayısı, yüzde, para ve kısaltmalar `scripts/tr_text.py` ile
     okunuşa çevrilir. Yeni kısaltma için `resources/pronounce.json` (sonu `~` olan karşılık iyelik
     ekli ad demektir: Kanunu, Meclisi).
  2. Ses (fonem): motorun yazıdan sese aşaması â, î gibi işaretleri yok sayar; "kanun" düz okunur
     (kânun değil). Bunlar `resources/lexicon.json` ile ses düzeyinde öğretilir, kök bazlıdır
     ve tüm çekimlere uygulanır (kanun, kanunu, kanunun ...). Biçim ve kullanım için `scripts/tr_voice.py`.
- **Kullanıcı bir kelimenin yanlış okunduğunu söylerse (öğretme akışı):** (a) `scripts/say.py "cümle"
  --phonemes` ile motorun ürettiği sesleri gör; (b) 3–4 aday kural üret (`--try "kök=eski > yeni"`:
  uzun ünlü için `a > a ː`, ince k için `k > c`), her adayı numaralı tek ses dosyasında kullanıcıya
  gönder; (c) kullanıcı numarayı seçince kuralı `lexicon.json`'a ekle (`say` alanına doğru yazımı
  da yaz) ve commit'le; (d) o gün üretilen reels'in yalnız ilgili sahnesini `tts.py --scene N` ile
  yeniden üret. Sonraki tüm reels'ler öğrenilen telaffuzla çıkar. Kelime ikircikliyse (hal/hâl,
  kar/kâr) `stem` yerine `words` listesi kullan.
- Dinleyip kontrol et: ı/i, ş, kurum adları, sayılar. Kötü okunan cümleyi
  yeniden yaz (noktalama ve kısa cümleler okunuşu düzeltir), yalnızca o sahneyi `--scene`
  ile yeniden üret.
- Ses yoksa render sessiz video üretir; trend müzik Instagram'da eklenir.

## 3. Görsel ve hareket (hepsi kodla, kredisiz)

Her haber sahnesinde konuya uygun bir altın çizgi illüstrasyonu (bölüm 1, `art`) sahne
başında çizilerek belirir ve yavaşça süzülür; arkada ince bir sütun dizisi ve hafif ışık
vardır. Yazı kelime kelime belirir, sahne sonunda içerik kararır, sabit öğeler kıpırdamaz.
AI görseli kullanılmaz (Higgsfield dahil). Sahneye `images/NN.jpg` konursa şablon onu
koyulaştırıp arka plan olarak kullanır; bu elle sağlanan görsel içindir.

## 4. Render

```bash
python3 .claude/skills/reels-generator/scripts/render_reel.py output/reels/<slug>/reel.json
python3 .claude/skills/reels-generator/scripts/render_reel.py output/reels/<slug>/reel.json --scene 3   # tek sahne
```

Renderer şunları yapar ve hata olursa **durur**:
- Doğrulama: rol sırası, kaynak, her haber sahnesinde `cite`, vurgu sayısı, emoji. Reklam
  çağrısı gibi okunabilecek ifadelerde yalnız uyarır.
- Logo kontrolü: şeffaf PNG, en az 200px genişlik.
- Fontlar: `resources/fonts` içinden yüklenir. Ağ isteği engellenir; biri denenirse
  çalışma durur.
- Sığdırma: başlıklar 2px adımlarla küçülebilir (kapak 128→104, başlık 92→76,
  kapanış 100→84). Gövde metni hiç küçülmez. Taşarsa hangi sahne ve hangi blok
  olduğu yazılır. Çözüm metni kısaltmaktır, küçük punto değil.
- Kayma (drift) kontrolü: logo, folio, çizgi ve alt bilgi her sahnede sahne 1 ile
  piksel piksel aynı olmalı.

Çıktılar:
- `reel.mp4`: 1080x1920, 30 fps, H.264 ve AAC, ses −14 LUFS.
- `cover.jpg`: Instagram kapağı.
- `contact-sheet.jpg`: tüm sahneler yan yana.
- `stills/`, `html/` (tarayıcıda açılıp ince ayar yapılabilir) ve `frames/`.

**Göstermeden önce kendin kontrol et:**
- `contact-sheet.jpg` ve `cover.jpg` dosyasını aç. Kırpılan metin olmamalı, her
  sahnede tek vurgu olmalı, hiyerarşi küçük boyutta da belli olmalı, sabit öğeler
  aynı yerde durmalı.
- Metin, alttaki Instagram arayüz bandına (çizginin altı) girmemeli.
- `ffprobe` ile süre ve sesin olduğunu doğrula.

Sorun varsa metni ya da şablonu düzelt, yeniden render et, sonra göster.

## 5. Caption → `output/reels/<slug>/caption.md`

- İlk satır, "devamı" kesilmeden önce görünen önizlemedir. Tek başına merak
  uyandırmalı ve kapak cümlesinin tekrarı olmamalı.
- Ardından haber özeti gelir (80–180 kelime): her haberin bir cümlelik açıklaması, dayandığı
  karar/mevzuat numarasıyla. Sonra kaynak satırı (kurum, tarih, sayı; Instagram'da link
  tıklanmaz ama kaynak adı yazılır), şu satır: "Bu paylaşım bilgilendirme amaçlıdır, hukuki
  danışmanlık değildir." ve imza satırı ("MONA Hukuk · Antalya").
- **En sonda 2–3 hashtag** (açıklamanın son satırı, başka hiçbir şey sonrasında gelmez). Konuya
  gerçekten uyan etiketler seç (ör. #hukuk #antalyaavukat #anayasamahkemesi). Etiket duvarı ve
  emoji olmaz; `render_reel.py` sayıyı ve konumu denetler.

## 5b. Sessiz (açıklayıcı kart) kipi

Kullanıcı reels'i seslendirmesiz, görüntü ve (Instagram'dan seçeceği) müzikle paylaşmak
isterse `reel.json`'a `"silent": true` ekle. Bu kipte: ses (`tts.py`) gerekmez, `vo` yazılmaz,
`audio/` kullanılmaz ve çıktı videoda ses izi olmaz (müziği kullanıcı Instagram'da ekler).
Haber sahnesinde `body` 1–3 maddelik kısa paragraflardır (sarılır, her biri en çok 3 satır,
toplam ~40–50 kelime); sahne süresi ekrandaki metnin okunma hızından (~3,6 kelime/sn) hesaplanır.
Açıklama kaynak metinde olan olgularla sınırlıdır: karar tarihi, madde, miktar, süre, sonuç.
Yerleşim C otomatik uygulanır (küçük çizim üstte, başlık ve paragraflar altta).

### Sabit süreli hızlı kip (`"timing"`)

Kullanıcı kartların kısa olmasını isterse (kullanıcının son isteği: kapak 3 sn, haber kartı 4 sn,
kapanış 3 sn) `reel.json`'a `"timing": {"cover": 3, "body": 4, "closing": 3}` ekle.
Bu kipte girişler hızlanır (kelime 0,035 sn arayla, çizim ~0,5 sn, çıkış 0,2 sn), başlık
116 punto, gövde 46 punto olur. 3 saniyede ~10–12 kelime okunur: haber kartında başlık
(en çok ~9 kelime) + **tek kısa satır** (en çok ~8 kelime) + `cite` yeter. Giriş animasyonu
süreye sığmazsa renderer sahneyi uzatır ve "UYARI" yazar: metni kısalt.

## 6. Teslim

- `reel.mp4`, `cover.jpg` ve `caption.md` kullanıcıya `SendUserFile` ile gönderilir; ardından
  `PushNotification` ile telefona tek satırlık bildirim gider (ör. "Bugünün reels'i hazır:
  7 haber, 70 sn. Kaynaklar doğrulandı."). Hata ya da eksik doğrulama olursa bildirim bunu
  söyler ve video üretilmez.
- Kullanıcı yayın saatini 20:00 olarak belirledi; reels bundan önce hazır olmalı. Instagram'a
  yayın aracı yok, yükleme ve zamanlama kullanıcıdadır (uygulama ya da Meta Business Suite).
- Çıktı klasörü (`output/reels/<slug>/`) commit'lenip dala push edilir ki bulut oturumu
  kapansa da kaybolmasın (`frames/`, `html/`, `stills/` git dışında).
- Kullanıcı düzeltme isterse `reel.json`'u düzenle ve `--scene N` ile yalnız o sahneyi yeniden
  çek. Ses metni değiştiyse önce o sahnenin sesini yeniden üret.

## Tasarım dili — değiştirme

Koyu kâğıda basılmış bir dergi sayfası. Canva şablonu değil.

- Renkler: Tokenlar `template/scene.html > :root` içindedir. Lacivert zemin
  (#050D24, üstü #0C1A3E'ye açılır), krem mürekkep (#F5F1E6), altın vurgu (#D3A14A).
- Yazı tipleri: Cormorant Garamond (başlık, marka yüzü) ve Alegreya Sans (gövde,
  folio, alt bilgi). Alegreya Sans'ta 600 ağırlığı yoktur.
- Boyutlar: başlık 128/92/100 px, satır aralığı 0.92, harf aralığı −0.02em.
  Gövde 36 px. Bu aradaki fark kapatılmaz.
- Güvenli alan: sol 84, sağ 150 (Instagram düğmeleri), üst 232, alt çizgi y=1500.
  Altı Instagram caption bandıdır, oraya metin girmez.
- Sabit öğeler: sol üstte iki renkli yazı logosu (`resources/logo.png`: krem "M.O.N.A. HUKUK" + altın "ANTALYA · TÜRKİYE", sitenin başlığıyla aynı; `scripts/make_logo.py` üretir), sağ üstte
  `02 / 08` folio, çizgi ve `@m.o.n.a.law`.
- Hareket: yalnız belirme, yükselme ve çizgi çekme. Zıplama, dönme ve parlama yok.
  Kelimeler 85 ms arayla gelir, sahne sonunda içerik 0,3 sn'de kararır. Sabit öğeler
  hiç kıpırdamaz.
- Yasak: emoji, gölge, kutu, kart, yuvarlak köşe, filigran ve reel.json dışındaki her metin
  (folio ile alt bilgi hariç). Çizgi illüstrasyonu ve ince ışık serbest.
