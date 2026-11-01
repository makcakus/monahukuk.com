# Yabancı kökenli kelimeler

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

Ters uyumlu kökler (`InverseHarmony`) büyük ölçüde alıntı kelimelerdir; ama bu dosyada kökenbilim iddiası **yoktur** (kaynak doğrulanmadı), yalnız veriden görünen örüntüler vardır.

## Veriden örüntüler [V]
- A grubunda (389 kelime) en sık son iki harf: -al (182), -at (60), -ol (49), -ul (39), -âl (20), -ak (8), -ik (6), -âk (4), -ûl (3), -lp (2). Yani sorun büyük ölçüde son hecede l/k/g yakınında ve ünlü uzunluğunda toplanıyor.
- Sıklığa göre ilk 30 A kelimesi: saat, kabul, kontrol, dikkat, hayal, normal, hak, kalp, general, kat, iptal, meşgul, bol, sosyal, rol, seyahat, federal, sinyal, alkol, golf, metal, ihtimal, hal, hâl, petrol, makul, orijinal, amiral, ihlâl, itaat.
- Bunların çoğu günlük/hukuk dilinde yüksek sıklıklıdır; öğretme sırası bu sıklığa göredir.

## Çalışma kuralları
1. Yeni bir alıntı kelime kötü okunuyorsa önce `say.py --phonemes` ile fonemlere bak.
2. Motor kelimeyi hiç tanımıyorsa (yabancı özel ad, Latince terim: de facto, ex officio) `vo` metninde Türkçe okunuşuyla yaz ("de fakto"); bu `lexicon.json` işi değil metin işidir [K].
3. Alıntılarda çift ünsüz (hakkında, millî, adlî) yazıda zaten vardır; motor bunu çoğunlukla işler. Sorunlu görünürse fonem düzeyinde sına, tahmin etme.
4. Kural genellemesi yapma: aynı son heceyi taşıyan kelimeler farklı okunabilir (normal/kural, rol/rüya).
