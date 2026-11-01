---
name: turkce-pronunciation
description: >-
  Türkçe seslendirmede (TTS) telaffuz bilgisi, öğretme akışı ve test havuzu. Kullanım: bir kelime ya da cümle
  yanlış okunduğunda, kullanıcı "kânun diye okusun", "ferâgat", "sosyâl", "yanlış telaffuz", "şapkalı", "uzun a",
  "ince l/k" gibi bir düzeltme istediğinde, rakam/tarih/kısaltma okunuşu bozulduğunda, reels ya da başka bir
  seslendirmenin metnini yazarken, yeni bir telaffuz kuralı öğretilirken ve telaffuz testleri koşulurken.
---

# turkce-pronunciation

Türkçe seslendirmenin (reels-generator'ın yerel Piper sesi) doğru okuması için bilgi tabanı, öğretme akışı ve
**gerçek kaynaklardan üretilmiş 1000 kelimelik test havuzu**. Uygulama kodu `reels-generator/scripts/` altındadır
(`tr_text.py` metin normalleştirme, `tr_voice.py` fonem kuralları, `say.py` laboratuvar). Bu skill neyin neden
öyle olduğunu, neyin doğrulandığını ve neyin doğrulanmadığını tutar.

## Değişmez kurallar
1. **Dinlemeden "doğru" deme.** Hiçbir ses çıktısı Claude tarafından dinlenemez. Fonem çıktısı motorun ne yaptığını
   gösterir, telaffuzun doğru olduğunu değil. Doğruluk yalnız kullanıcının dinleyip onayıyla kesinleşir.
2. **Genelleme yok.** Bir kelime için öğretilen kural, kullanıcı dinleyip onaylamadan benzer görünen başka kelimeye
   uygulanmaz (kânun'da yalnız a uzar, tâkip'te k da incelir).
3. **Kaynak uydurma.** Bir dilbilgisi ya da telaffuz iddiası için `references/sources.md`'de karşılığı yoksa iddiayı
   `[K]` (doğrulanmadı) diye işaretle. Kaynak sayfasını açamadıysan "doğruladım" yazma.
4. **Her kural değişikliğinden sonra** `python3 tests/run_pool.py` çalıştır; FAIL varsa commit'leme.

## Dosyalar
- `knowledge/alphabet-phonetics.md`: harfler, şapkalı harfler, motorun ince k/g/l davranışı
- `knowledge/phonological-rules.md`: ünlü uyumu, ters uyumlu kökler, ünsüz yumuşaması, bayrak sayıları
- `knowledge/pronunciation-exceptions.md`: **öğretilen kurallar**, kullanıcı kararları, öncelik listesi
- `knowledge/foreign-origin-words.md`, `stress-and-intonation.md`, `proper-nouns.md`
- `knowledge/abbreviations-and-numbers.md`: sayı/tarih/saat/kısaltma kuralları
- `knowledge/ipa-dictionary.md`: modelin simgeleri, kuralların önce/sonra fonemleri
- `tests/pronunciation-test-1000.md`: **1000 benzersiz kelime** (A 389 ters uyumlu kök, B 160 şapkalı lemma, C 200 kontrol, D 170 hukuk terimi, E 81 il)
- `tests/difficult-sentences.md`: 63 otomatik doğrulanan normalleştirme vakası + 15 dinleme cümlesi
- `tests/build_pool.py`, `build_knowledge.py`, `run_pool.py`; `tests/last-run.md` son sonuç
- `references/sources.md`: kaynaklar, sha256'lar, **doğrulanamayanlar**

## Bir kelime yanlış okunduğunda (öğretme akışı)
1. Kelimenin motor fonemlerini gör: `python3 .claude/skills/reels-generator/scripts/say.py "cümle" --phonemes`.
2. Havuzda mı? `tests/pronunciation-test-1000.md` içinde ara; sıklık sırası ve Zemberek bayrağı öncelik verir.
3. 3–5 aday kural üret: `--try "kök=eski > yeni"` (uzun ünlü `a > a ː`, ince k `k > c`, ince l `ɫ > l`, sona sabitle `$`).
   Adayları numaralı tek ses dosyasında kullanıcıya gönder (`SendUserFile`).
4. Kullanıcı numarayı seçince `reels-generator/resources/lexicon.json`'a ekle (`say` alanına doğru yazımı yaz;
   ikircikli kelime için `words`, kök için `stem`).
5. `python3 .claude/skills/turkce-pronunciation/tests/run_pool.py` ve gerekiyorsa `build_pool.py` + `build_knowledge.py`;
   ilgili reels sahnesini `tts.py --scene N` ile yeniden üret; commit'le.

Metin sorunuysa (rakam, tarih, kısaltma, ek uyumu): `tr_text.py` / `resources/pronounce.json`; vaka eklemek için
`tests/difficult-sentences.md` tablosuna satır ekle (beklenen okunuşu elle gözden geçirerek) ve testi koştur.

## Bilinen sınırlar (özet; ayrıntı sources.md)
- Motor şapkalı harfleri yok sayar, k'yi hiç inceltmez, l'yi çoğunlukla koyu verir; bunlar kelime kelime öğretilir.
- Vurgu düzeltme özelliği yoktur (kural motoru vurguyu taşımaz).
- Ses modelinin temel lisansı (İngilizce lessac'tan ince ayar) ticari kullanım için doğrulanmadı.
