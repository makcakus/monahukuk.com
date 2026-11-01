# Son test çalıştırması

`python3 tests/run_pool.py` → **19 PASS, 0 FAIL**.

Sınanan: kaynak bütünlüğü, havuz bileşimi, fonem sözlüğü, kural etkisi, sayı normalleştirmesi (bağımsız kütüphane), zor cümleler.
Sınanamayan: kulakla duyulan doğruluk. Bu, yalnızca kullanıcının dinleyerek onayıyla kesinleşir.

| sonuç | test | ayrıntı |
|---|---|---|
| PASS | T0 kaynak sha256: master-dictionary.dict | c539e12904d1ccac |
| PASS | T0 kaynak sha256: tr_50k.txt | 480192844e7fdfe9 |
| PASS | T0 havuz bileşimi A389 B160 C200 D170 E81 | {'A': 389, 'B': 160, 'C': 200, 'D': 170, 'E': 81} |
| PASS | T0 1000 satır, 1000 benzersiz kelime |  |
| PASS | T1 A: tüm kelimeler Zemberek'te InverseHarmony |  |
| PASS | T1 B: tüm kelimeler Zemberek'te şapkalı lemma |  |
| PASS | T1 C: tüm kelimeler OpenSubtitles sıklık listesinde |  |
| PASS | T1 E: 81 il |  |
| BİLGİ | T1 D: Zemberek'te lemma olarak bulunmayan hukuk terimi (türemiş/özel ad) | 30: bozma, onama, kesinleşme, tutuklama, mirasçı, borçlu, alacaklı, zamanaşımı, şüpheli, soruşturma, kovuşturma, yargılama, yargıtay, danıştay, tüketici, emeklilik, vatandaşlık, tenfiz, tanıma, yetkisizlik, görevsizlik, birleştirme, arabulucu, uzlaşma, kiracı, savcılık, düzeltme, karşıoy, ödeme, haksız |
| PASS | T2 tüm fonemler ses modelinin sözlüğünde (yoksa sessizce düşer) | eksik yok |
| PASS | T2 her kelime fonem üretiyor |  |
| PASS | T3 19 kuralın hepsi temsilci kelimede gerçekten fonem değiştiriyor (ölü kural yok) | [] |
| PASS | T3b şapkalı yazım (resmî, kânun ...) düz yazımla aynı fonemleri üretiyor | [] |
| PASS | T3b havuzdaki 13 öğretilmiş şapkalı kelime düz yazımla aynı | [] |
| PASS | T3 kontrol kelimeleri (grup C): öğretilen kurallar yalnız bilerek öğretilene dokunuyor | değişen 1: lazım; kök/çekim yoluyla (incele): — |
| PASS | T3 il adı kelimeleri (grup E): öğretilen kurallar yalnız bilerek öğretilene dokunuyor | değişen 0: —; kök/çekim yoluyla (incele): — |
| PASS | T3 hukuk kelimeleri (grup D): öğretilen kurallar yalnız bilerek öğretilene dokunuyor | değişen 1: ikamet; kök/çekim yoluyla (incele): — |
| BİLGİ | T4 grup A: öğretilen / toplam | 3 / 389 |
| BİLGİ | T4 grup B: öğretilen / toplam | 13 / 160 |
| BİLGİ | T4 öğretilecek A grubu, sıklığa göre ilk 40 | saat(214), kontrol(296), dikkat(351), hayal(497), normal(680), hak(757), kalp(1049), general(1141), kat(1414), iptal(1480), meşgul(1631), bol(1758), rol(2249), seyahat(2454), federal(2513), sinyal(2969), alkol(3235), golf(3384), metal(3499), ihtimal(3663), hal(3848), hâl(3848), petrol(4352), makul(4953), orijinal(5149), amiral(6014), ihlâl(6532), itaat(6899), gol(6960), işgal(6991), kristal(8323), final(8512), ihmal(8791), dijital(9132), vaat(9259), emlak(9411), sadakat(9499), moral(9605), ad(9844), kardinal(10167) |
| BİLGİ | T4 öğretilecek B grubu (şapkalı), sıklığa göre ilk 40 | âmâ, tabiî, hâlâ, pekâlâ, tâbi, silâh, evlât, herhâlde, âşık, meselâ, hikâye, derhâl, askerî, ilâç, merkezî, kâr, filân, vahşî, dâhi, fikrî, tarihî, kâğıt, tıbbî, kalbî, ilân, rüzgâr, şikâyet, belâ, mahkûm, klâsik, felâket, ihtimalî, telâfi, âmin, reklâm, şeklî, âdet, inkâr, samimî, hayalî |
| PASS | T5 sayı okunuşu: 141 sayı, bağımsız num2words ile aynı | [] |
| PASS | T5 sıra sayısı: 125 sayı, bağımsız num2words ile aynı | [] |
| PASS | T6 zor cümleler: 63 vaka, normalleştirici beklenen okunuşu üretiyor |  |
