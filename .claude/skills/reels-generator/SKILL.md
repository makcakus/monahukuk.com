---
name: reels-generator
description: >-
  m.o.n.a.law Instagram hesabı için güncel hukuk haberinden yüzsüz Instagram Reels
  üretir: doğrulanmış kaynaktan senaryo, kelime kelime beliren metin animasyonu,
  isteğe bağlı AI arka plan görseli, Türkçe seslendirme, 1080x1920 MP4, kapak ve
  caption. Şu isteklerde tetiklenir: "reels yap", "reels üret", "bugünün reelsleri",
  "günlük 2 reels", "bu haberi reels yap", "şu konuda reels", "Instagram videosu",
  "m.o.n.a.law için içerik", "reels it", "make a reel about X", "Instagram reel for X",
  ya da bir haber/konu yapıştırılıp "reels'e çevir" dendiğinde.
---

# reels-generator — m.o.n.a.law Reels

Her reels bir web sayfasıdır. Sahneler `template/scene.html`'den render edilir,
başsız Chromium'da zaman elle sürülerek kare kare çekilir ve ffmpeg ile
seslendirmeyle birleştirilir. Render tarafında ağ ya da API anahtarı kullanılmaz.
Ses ve görseli Higgsfield MCP üretir (aşağıda). Render bunlar olmadan da çalışır:
ses yoksa video sessiz çıkar, görsel yoksa düz zemin kullanılır.

Yollar bu skill klasörüne göredir: `.claude/skills/reels-generator/`. Çıktılar depo
kökünde `output/reels/<slug>/` altına yazılır. Slug biçimi `YYYY-AA-GG-konu`.

İlk kullanımda bir kez `bash scripts/setup.sh` çalıştır. Chromium başlamazsa
README'deki nota bak.

## 0. Konu seç ve doğrula — atlanmaz

Hedef: haftanın ya da günün **güncel hukuk haberi**. Hedef kitle geniş: hukuk
dışından da izlenecek. Yabancılara yönelik konuya zorlama.

1. Aday bul: `WebSearch` (son 7 gün), YargıMCP (`resmi_gazete_fihrist`, `mevzuat_ara`,
   `ictihat_ara`; kota bittiyse atla), TBMM, AYM, Yargıtay, Danıştay, Rekabet,
   BDDK ve KVKK duyuruları.
2. Kullanıcıya 4–5 aday sun. Her biri için tek satır, tarih ve resmi kaynak ver.
   Günde iki tane seçilir. Kullanıcı "sen seç" derse en geniş kitleyi etkileyen
   ikisini al.
3. Seçilen haberi **resmi kaynaktan** doğrula: Resmî Gazete metni, karar metni ya da
   kurum duyurusu. Haber sitesi tek başına yetmez. Doğrulanamayan bilgi reels'e
   girmez. Kaynak `reel.json > sources` alanına yazılır. Renderer kaynaksız reel'i
   reddeder.
4. `content/articles/tr/` ve `content/hukuki-haberler/` içinde aynı konu varsa o metnin
   cümlelerini ve yapısını taşıma (CLAUDE.md bülten kuralı 5).

## 1. Senaryoyu yaz → `output/reels/<slug>/reel.json`

Tek doğruluk kaynağı bu dosyadır. Renderer başka hiçbir şey okumaz. Render ücretsiz;
onay için durma, hemen render et. Sonra contact sheet'i metinle yan yana göster ve
düzeltme bekle.

```json
{
  "topic": "…",
  "slug": "2026-10-11-konu",
  "sources": [{ "label": "Resmî Gazete, 11.10.2026, S. 33xxx", "url": "https://www.resmigazete.gov.tr/…" }],
  "scenes": [
    { "role": "cover",   "headline": "Kiracı artık *on gün* içinde…", "vo": "…" },
    { "role": "body",    "heading": "…", "body": ["tek satır", "tek satır"], "vo": "…" },
    { "role": "body",    "heading": "…", "body": ["tek satır"], "layout": "B", "vo": "…" },
    { "role": "closing", "headline": "…", "cta": "…", "source": "Kaynak: Resmî Gazete", "vo": "…" }
  ]
}
```

**Kapak (`cover`)**: İlk 1,5 saniyede kaydırmayı durduran tek cümle. Okura ne
değiştiğini söyler: "Artık…", "…yasaklandı", "…sona erdi". Soru, alt başlık ya da
gövde olmaz. En fazla 5 satır.

**Gövde (`body`)**: Her sahne tek fikir taşır. Kısa başlık (en fazla 4 satır) ve
en fazla iki gövde satırı olur. Her satır tek satıra sığmalı; renderer ölçer. Üçüncü
satıra ihtiyaç varsa o iki sahnedir ya da kesilir.

**Kapanış (`closing`)**: Kapanış cümlesi, yumuşak davet (`cta`) ve tercihen kaynak
satırı (`source`). Davet örnekleri: "Ayrıntılar kaynakta.", "Kaydedin, lazım
olur." Satış dili kullanılmaz (aşağıdaki reklam kuralı).

**Sahne sayısı**: 3–8, içerik belirler, doldurma yapılmaz. Hedef toplam süre
20–40 sn.

**Vurgu**: Başlıkta `*kelime*` o sahnenin vurgusudur; altın renkte, italik basılır.
Sahne başına en fazla bir vurgu olur. Kapanışın vurgusu bitiş karesidir, orada
`*` kullanılmaz. B düzenindeki bir sahnede vurgu kelimesi yoksa üstteki kısa çizgi
altına döner. Her sahnede tam bir vurgu olur; renderer sayar.

**Seslendirme (`vo`)**: Her sahnenin konuşulan metni. Ekrandaki metni kelimesi
kelimesine okumaz, onu tamamlar. Sahne başına 8–22 kelime, doğal konuşma Türkçesi.
Rakamları ve madde numaralarını okunacağı gibi yaz: "yedinci madde", "yüzde on",
"6098 sayılı" yerine "Türk Borçlar Kanunu". Kısaltma kullanma ("TBK" değil).

**Düzen**: Gövde sahneleri A ve B arasında dönüşümlüdür (tek sıradaki A). A'da
başlık üstte, gövde altta, ortası boştur. B'de blok optik merkezdedir ve üstünde
kısa çizgi vardır. `layout` alanı bu sırayı ezer.

**Haber dili** (CLAUDE.md bülten kuralları):
- Ne olduğunu anlat; yorum ve tavsiye ya hiç olmaz ya da tek cümle olur.
- Her reels aynı kalıpla kurulmaz; kapak cümlesinin biçimini değiştir.
- Kanun numarası gerekiyorsa tek cümlede geçer.

**Reklam yasağı** (Avukatlık Kanunu m. 55 ve TBB Reklam Yasağı Yönetmeliği):
- İçerik bilgilendirme amaçlıdır.
- Müvekkil çekmeye yönelik çağrı, sonuç vaadi, ücret ya da kampanya, "en iyi"
  gibi üstünlük iddiası, gerçek dosya ya da müvekkil örneği kullanılmaz.
- "DM", "bio'daki link", "bizi arayın", "ücretsiz danışma" gibi ifadeler
  kullanılmaz; renderer bunları reddeder.
- Şüphede kalırsan kullanıcıya sor. Son değerlendirme avukatındır.

## 2. Seslendirme (Higgsfield, krediyle çalışır)

1. Araçları `ToolSearch` ile yükle: `mcp__Higgsfield__generate_audio_batch`,
   `generate_audio`, `list_voices`, `jobs_wait`, `balance`.
2. Ses tekliği: Hesabın sesi `resources/voice.json` dosyasındadır. Dosya yoksa
   `list_voices` ile Türkçe konuşabilen 2–3 ses bul, kullanıcıya örnek dinlet,
   seçimi `{"model": "...", "voice_type": "...", "voice_id": "...", "speech_rate": 0}`
   olarak kaydet. Her reels aynı sesle seslendirilir.
3. Maliyet: Önce `get_cost: true` ile ön hesap yap. `seed_audio` sahne başına
   yaklaşık 0,6 kredi; 5 sahne yaklaşık 3 kredi. `balance` ile bakiyeyi kontrol et.
   Gün içinde ilk kez harcamadan önce kullanıcıya toplam krediyi bildir. Bakiye
   yetmezse sessiz render et ve söyle.
4. Her sahnenin `vo` metnini ayrı üret (`generate_audio_batch`, sahne başına bir
   satır, `format: "mp3"`, `sample_rate: 44100`). Sonucu `curl` ile
   `output/reels/<slug>/audio/NN.mp3` olarak indir (`01.mp3` = sahne 1). Sahne
   süresi ses süresinden hesaplanır; ses metnin animasyonundan kısaysa sahne
   kendiliğinden uzar.
5. Türkçe telaffuzu dinleyip kontrol et (özellikle ı/i, ş, kurum adları). Bozuksa
   metni düzelt ve yalnızca o sahneyi yeniden üret.

## 3. Arka plan görseli

**Varsayılan, kredisiz:** Görseli olmayan her sahnede şablon, ince altın çizgilerle çizilmiş
bir mahkeme sütunu dizisi ve hafif bir ışık basar. Kadraj sahne sırasına göre değişir,
bu yüzden set tek düze durmaz. Ek iş gerekmez.

**İsteğe bağlı AI görseli (krediyle çalışır):** İki şartı vardır. Higgsfield hesabı en az
"basic" plan olmalı (ücretsiz planda görsel modelleri çalışmaz, 2026-10-12'de doğrulandı).
Üretilen dosyaların indiği `cloudfront.net` alan adı ortamın ağ politikasında açık olmalı;
kapalıyken dosyalar `curl` ile inmez. İkisi de yoksa varsayılanla devam et.

Reels başına en fazla 2 sahneye görsel koy. Genellikle kapak ya da bir B sahnesi
olur; her sahneye görsel koymak setin dergi dilini bozar. `generate_image` ile
9:16 dikey üret, `output/reels/<slug>/images/NN.jpg` olarak kaydet (NN = sahne
no). Şablon görseli koyulaştırır, üzerine lacivert örtü atar ve yavaş zoom
uygular.

İstem kuralları:
- Soyut ya da mimari olmalı: mermer sütun, adliye koridoru silueti, terazi, kâğıt
  dokusu, mühür, kalem, pencereden düşen ışık.
- Koyu lacivert ve altın tonlar, sinematik, düşük kontrastlı, düz alan bol.
- Yasak: gerçek kişi, yüz, hâkim ya da avukat portresi, bayrak, kurum logosu,
  görselde yazı, kan ya da şiddet.
- İstemin sonuna "no text, no letters, no people, no logos" ekle.

## 4. Render

```bash
python3 .claude/skills/reels-generator/scripts/render_reel.py output/reels/<slug>/reel.json
python3 .claude/skills/reels-generator/scripts/render_reel.py output/reels/<slug>/reel.json --scene 3   # tek sahne
```

Renderer şunları yapar ve hata olursa **durur**:
- Doğrulama: rol sırası, kaynak, vurgu sayısı, emoji ve reklam ifadeleri.
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
- Ardından 60–120 kelime haber özeti gelir. Sonra kaynak satırı (kurum, tarih,
  sayı; Instagram'da link tıklanmaz ama kaynak adı yazılır) ve şu satır:
  "Bu paylaşım bilgilendirme amaçlıdır, hukuki danışmanlık değildir."
- Boş satırdan sonra 8–15 hashtag gelir. Geniş (#hukuk #avukat), orta (#kiracıhakları)
  ve dar (#antalyaavukat) etiketler karışık olsun. Etiket duvarı ve emoji olmaz.

## 6. Teslim

- Kullanıcıya `SendUserFile` ile `reel.mp4`, `cover.jpg` ve `caption.md` gönder.
  Yanına contact sheet ile reel.json'daki metinleri koy.
- Instagram'a yayın aracı yok. Yükleme ve zamanlama kullanıcıdadır (uygulama ya da
  Meta Business Suite). Trend bir müzik eklenecekse uygulamada, seslendirmenin
  altında düşük seviyede eklenir.
- Kullanıcı düzeltme isterse `reel.json`'u düzenle ve `--scene N` ile yalnız o
  sahneyi yeniden çek. Ses metni değiştiyse önce o sahnenin sesini yeniden üret.

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
- Sabit öğeler: sol üstte logo (`resources/logo.png`, CSS mask, krem), sağ üstte
  `02 / 05` folio, çizgi ve `@m.o.n.a.law`.
- Hareket: yalnız belirme, yükselme ve çizgi çekme. Zıplama, dönme ve parlama yok.
  Kelimeler 85 ms arayla gelir, sahne sonunda içerik 0,3 sn'de kararır. Sabit öğeler
  hiç kıpırdamaz.
- Yasak: emoji, gölge, parlama, kutu, kart, yuvarlak köşe, ikon, filigran ve
  reel.json dışındaki her metin (folio ile alt bilgi hariç).
