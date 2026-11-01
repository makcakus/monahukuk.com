# Kaynaklar ve doğrulama durumu

Kaynaklar 2026-11-01'de bu çalışma sırasında kontrol edildi. "Doğrulandı" yalnız fiilen yapılan kontrol için yazıldı; yapılamayanlar **Doğrulanamadı** başlığında ayrıca listelenir.

## Veri kaynakları (dosya olarak indirildi, bütünlük pinlendi)

| ID | kaynak | ne için | doğrulama | lisans |
|---|---|---|---|---|
| S1 | Zemberek-NLP `master-dictionary.dict` (GitHub, `ahmetaa/zemberek-nlp`, raw) | A grubu (`InverseHarmony`, 389 kelime), B grubu (şapkalı lemma), bayrak sayıları | indirildi; **sha256** `c539e12904d1ccac4792073f05deeae2babe692249dc4a359da254f1bd338f6f`; 28 921 satır; `LICENSE` dosyası da indirilip okundu | Apache-2.0 (LICENSE dosyasından, sha256 `c55ac4a9…ea07a`) |
| S2 | FrequencyWords `tr_50k.txt` (GitHub, `hermitdave/FrequencyWords`, 2018, OpenSubtitles) | C grubu (kontrol) ve tüm kelimelerin sıklık sırası | indirildi; **sha256** `480192844e7fdfe9591bbf0b9cfbb96ed5751cfbba7024fd45d8cb7508e07d5c`; README indirilip okundu: kod MIT, **içerik CC-BY-SA-4.0**, veri OPUS OpenSubtitles2018 | CC-BY-SA-4.0 (içerik). Havuz bu listeden türetilmiş sıra bilgisi taşır; atıf ve benzer paylaşım gerekir |
| S8 | `num2words` 0.5.14 (PyPI), Türkçe | sayı/sıra sayısı okunuşunun **bağımsız** doğrulaması (T5) | kuruldu ve çalıştırıldı; 141 sayı + 125 sıra sayısında `tr_text` çıktısıyla boşluksuz karşılaştırıldı, fark yok | LGPL |
| S9 | Ses modelleri (`vits-piper-tr_TR-*-medium`, sherpa-onnx `tts-models` GitHub release), Piper | ses ve fonem sözlüğü (159 simge) | indirildi; model `config.phoneme_id_map` okundu; `fahrettin` MODEL_CARD okundu: veri seti **CC0** (`NabuCasa/voice-datasets`), model *İngilizce lessac sesinden ince ayarlı* | bkz. Doğrulanamadı #6 |

`tests/build_pool.py` indirilen dosyaların sha256'sını her koşuda kontrol eder; farklıysa havuzu üretmeyi reddeder (T0).

## Literatür ve belgeler (içeriğe değil künyeye/özete erişildi)

| ID | kaynak | ne için | doğrulama |
|---|---|---|---|
| S3 | TDK Yazım Kılavuzu, düzeltme işareti kuralı | şapkalı harf kuralı | tdk.gov.tr bu ortamda açılmadı. **İkincil kaynaklardan** (arama sonuçları: Karamanoğlu Mehmetbey Üniv. e-arşiv kaydı (earsiv.kmu.edu.tr) "Türkçe Sözlük'te uzun ünlü ve düzeltme işareti (şapka) kullanımı", turkedebiyati.org, haber metinleri) iki kullanımın özeti görüldü: uzun ünlü ayrımı (adet/âdet, kar/kâr, hala/hâlâ) ve ince g/k sonrası a/u. Madde numarası doğrulanmadı |
| S4 | Zimmer, K. & Orgun, O. (1999), "Turkish", *Handbook of the IPA*, CUP, s. 154–156 | alfabe-ses karşılıkları | **künye** WALS/PHOIBLE kayıtlarından doğrulandı (arama sonucu). Metne erişilmedi |
| S5 | Göksel, A. & Kerslake, C. (2005), *Turkish: A Comprehensive Grammar*, Routledge, ISBN 978-0415114943 (ciltsiz) / 978-0415217613 (ciltli) | genel dilbilgisi referansı | **künye** Routledge ve kitapçı sayfalarından doğrulandı (arama sonucu); 2. baskı var (ISBN 9781138350533). Metne erişilmedi, bu çalışmadaki hiçbir iddia doğrudan bu kitaba dayandırılmadı |
| S6 | Kabak, B. & Vogel, I. (2001), "The phonological word and stress assignment in Turkish", *Phonology* 18(3): 315–360 | yer adı vurgu istisnası | **künye** iki bağımsız kaynakça listesinden doğrulandı (Lorenzen, Himmel & Kabak, OCP16; Cambridge sayfası). Yer adlarının ayrı vurgu örüntüsü Lorenzen vd. ve Bokhari (2014, Indiana Üniv. bildirisi) özetinden okundu; makalenin kendisine erişilmedi |
| S7 | Wikipedia, "Turkish phonology" | k/g damaklılaşması, kar/kâr, gâvur/lâzım | sayfa açılamadı; arama özeti okundu. İkincil kaynak |

## Doğrulanamadı (açıkça)
1. **TDK Yazım Kılavuzu birincil metni** (tdk.gov.tr erişilemedi). Şapka kuralı yalnız ikincil özetlerle teyitli.
2. **Zemberek `InverseHarmony` bayrağının resmî tanımı**: GitHub API (403) ve beklenen kaynak dosyası (404) alınamadı, arama sonuçlarında da çıkmadı. Anlam, veriden *ampirik* çıkarıldı: bayraklı 389 kelimenin 382'si (%98) arka ünlüyle bitiyor; `kalp`, `saat`, `harf`, `kabul`, `hal`, `sosyal` bayraklı. Bu, tanımla tutarlıdır ama tanımın kendisi değildir.
3. **Zimmer & Orgun, Göksel & Kerslake, Kabak & Vogel** içeriği (yalnız künyeleri doğrulandı).
4. **Kulakla duyulan doğruluk**: hiçbir motor çıktısı bu çalışmada dinlenmedi. Tüm fonem ve ses iddiaları motorun ürettiği sembollere dayanır; doğruluk yalnızca kullanıcının dinleyip onayıyla kesinleşir.
5. **D grubundaki hukuk terimlerinin listesi elle derlenmiştir** (bağımsız bir hukuk sözlüğüne dayanmaz). Zemberek lemma listesinde 30'u bulunmaz (türemiş/özel ad: bozma, soruşturma, yargıtay…), bu `last-run.md`'de bilgi satırıdır.
6. **Ses modelinin lisansı**: `fahrettin` veri seti CC0 ama model İngilizce *lessac* modelinden ince ayarlanmış; temel modelin/veri setinin ticari kullanım koşulları doğrulanmadı. `dfki` ve `fettah` model kartları okunmadı. Ticari/pazarlama kullanımından önce kontrol edilmeli.
7. **Erişim engelleri:** `tdk.gov.tr`, `huggingface.co`, `api.github.com`, Wikipedia ve akademik siteler bu ortamdan açılmadı (ağ politikası); bu yüzden S3–S7 arama özetine dayanır.

## Havuzun kapsamı hakkında dürüst not
Havuz 1000 **kelimedir** (A 389, B 160, C 200, D 170, E 81, hepsi benzersiz). Sayı, tarih, kısaltma ve cümle vakaları ayrı dosyadadır (`tests/difficult-sentences.md`, 63 normalleştirme vakası + 15 dinleme cümlesi; sayılar ayrıca 266 sayıyla bağımsız kütüphaneyle sınanır). Havuz telaffuzun **doğruluğunu** değil, kapsamı, tutarlılığı ve öğretilen kuralların yan etkisini sınar.
