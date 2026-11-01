# Zor cümleler

İki bölüm var. **1. bölüm** otomatik doğrulanır (`python3 tests/run_pool.py`, T6): yazının normalleştiriciden geçtikten sonraki okunuşu, 
elle gözden geçirilmiş beklenen okunuşla birebir aynı olmalıdır. Sayı ve sıra sayısı okunuşları ayrıca bağımsız `num2words` ile sınanır (T5).
**2. bölüm** kulakla dinlenecek cümlelerdir; bunların doğruluğu yalnızca kullanıcının dinleyip onayıyla kesinleşir, otomatik sınanamaz.

## 1. Normalleştirme vakaları (otomatik)

| # | yazı | beklenen okunuş |
|---|---|---|
| 1 | 7589 sayılı Kanun 31.07.2026 tarihinde yayımlandı. | yedi bin beş yüz seksen dokuz sayılı Kanun otuz bir Temmuz iki bin yirmi altı tarihinde yayımlandı. |
| 2 | 12. Yargı Paketi 2026'da yürürlüğe girdi. | on ikinci Yargı Paketi iki bin yirmi altıda yürürlüğe girdi. |
| 3 | 3. Hukuk Dairesi karar verdi. | üçüncü Hukuk Dairesi karar verdi. |
| 4 | Cezalar %20 arttı. | Cezalar yüzde yirmi arttı. |
| 5 | %5'lik oran uygulanacak. | yüzde beşlik oran uygulanacak. |
| 6 | 5.000 TL idari para cezası verildi. | beş bin lira idari para cezası verildi. |
| 7 | Bedel 1.250.000 TL olarak belirlendi. | Bedel bir milyon iki yüz elli bin lira olarak belirlendi. |
| 8 | ₺1.500 harç yatırılacak. | bin beş yüz lira harç yatırılacak. |
| 9 | Ceza 3,5 yıl hapis olarak belirlendi. | Ceza üç virgül beş yıl hapis olarak belirlendi. |
| 10 | Medeni Kanun m. 440 ve 444 değişti. | Medeni Kanun madde dört yüz kırk ve dört yüz kırk dört değişti. |
| 11 | E. 2025/12, K. 2026/47 sayılı karar. | Esas iki bin yirmi beş, on iki, Karar iki bin yirmi altı, kırk yedi sayılı karar. |
| 12 | TBMM'de kabul edildi. | Türkiye Büyük Millet Meclisinde kabul edildi. |
| 13 | AYM'nin kararı Resmî Gazete'de yayımlandı. | Anayasa Mahkemesinin kararı Resmî Gazetede yayımlandı. |
| 14 | UYAP'a girin. | Uyapa girin. |
| 15 | HMK m. 149 değişiyor. | Hukuk Muhakemeleri Kanunu madde yüz kırk dokuz değişiyor. |
| 16 | SGK'dan belge alın. | Sosyal Güvenlik Kurumundan belge alın. |
| 17 | KVKK'ya aykırı bulundu. | Kişisel Verileri Koruma Kanununa aykırı bulundu. |
| 18 | TCK'yı değiştiren kanun çıktı. | Türk Ceza Kanununu değiştiren kanun çıktı. |
| 19 | Av. Ahmet duruşmaya katıldı. | Avukat Ahmet duruşmaya katıldı. |
| 20 | KDV'ye zam geldi. | Katma Değer Vergisine zam geldi. |
| 21 | ÖTV'si arttı. | Özel Tüketim Vergisi arttı. |
| 22 | BDDK'nın kararı açıklandı. | Bankacılık Düzenleme ve Denetleme Kurumunun kararı açıklandı. |
| 23 | RG'de yayımlandı. | Resmî Gazetede yayımlandı. |
| 24 | Kanun 31 Ekim'de yürürlüğe girdi. | Kanun otuz bir Ekimde yürürlüğe girdi. |
| 25 | 1 Kasım'da başladı. | bir Kasımda başladı. |
| 26 | 21 Mart'tan itibaren geçerli. | yirmi bir Marttan itibaren geçerli. |
| 27 | 2026'da değişecek. | iki bin yirmi altıda değişecek. |
| 28 | 10'u kabul edildi. | onu kabul edildi. |
| 29 | 3'ü reddedildi. | üçü reddedildi. |
| 30 | 1'i ise bekliyor. | biri ise bekliyor. |
| 31 | Bin kişi katıldı, 1000 kişi değil. | Bin kişi katıldı, bin kişi değil. |
| 32 | Süre 15 gün, 30 gün ve 45 gün olabilir. | Süre on beş gün, otuz gün ve kırk beş gün olabilir. |
| 33 | 2 milyar liralık bütçe. | iki milyar liralık bütçe. |
| 34 | Dosya 2026/123 esasına kayıtlıdır. | Dosya iki bin yirmi altı, yüz yirmi üç esasına kayıtlıdır. |
| 35 | 7. Yargı Paketi ve 11. Yargı Paketi. | yedinci Yargı Paketi ve on birinci Yargı Paketi. |
| 36 | 18 yaşını doldurmamış çocuk. | on sekiz yaşını doldurmamış çocuk. |
| 37 | %100 oranında. | yüzde yüz oranında. |
| 38 | 5651 sayılı Kanun ek 4. madde. | beş bin altı yüz elli bir sayılı Kanun ek dördüncü madde. |
| 39 | Sayı: 33415 olarak yayımlandı. | Sayı: otuz üç bin dört yüz on beş olarak yayımlandı. |
| 40 | Saat 20.00'de yayımlanacak. | Saat yirmide yayımlanacak. |
| 41 | 0 ile 9 arası. | sıfır ile dokuz arası. |
| 42 | 3. sayfada, 21. maddede. | üçüncü sayfada, yirmi birinci maddede. |
| 43 | AYM'ye başvuru yapıldı. | Anayasa Mahkemesine başvuru yapıldı. |
| 44 | TBMM'nin gündemine alındı. | Türkiye Büyük Millet Meclisinin gündemine alındı. |
| 45 | SGK'ya bildirildi. | Sosyal Güvenlik Kurumuna bildirildi. |
| 46 | HMK'ya göre süre işler. | Hukuk Muhakemeleri Kanununa göre süre işler. |
| 47 | UYAP'ta görüntülenebilir. | Uyapta görüntülenebilir. |
| 48 | BDDK'da inceleniyor. | Bankacılık Düzenleme ve Denetleme Kurumunda inceleniyor. |
| 49 | TÜİK'in verilerine göre. | Türkiye İstatistik Kurumunun verilerine göre. |
| 50 | KVKK'nın kararı. | Kişisel Verileri Koruma Kanununun kararı. |
| 51 | İİK'nın 67. maddesi. | İcra ve İflas Kanununun altmış yedinci maddesi. |
| 52 | CMK m. 134 ve TCK m. 106. | Ceza Muhakemesi Kanunu madde yüz otuz dört ve Türk Ceza Kanunu madde yüz altı. |
| 53 | TBK'nın 344. maddesi uyarınca. | Türk Borçlar Kanununun üç yüz kırk dördüncü maddesi uyarınca. |
| 54 | Dr. Ayşe ve Av. Mehmet. | Doktor Ayşe ve Avukat Mehmet. |
| 55 | 2. Hukuk Dairesi'nin 2025/1234 E., 2026/567 K. sayılı kararı. | ikinci Hukuk Dairesinin iki bin yirmi beş, bin iki yüz otuz dört Esas, iki bin yirmi altı, beş yüz altmış yedi Karar sayılı kararı. |
| 56 | Kira artışı yıllık %25 ile sınırlı. | Kira artışı yıllık yüzde yirmi beş ile sınırlı. |
| 57 | Tebligat 7 gün içinde yapılır. | Tebligat yedi gün içinde yapılır. |
| 58 | 17 Eylül 2026'da karar verildi. | on yedi Eylül iki bin yirmi altıda karar verildi. |
| 59 | 30/9/2026 tarihli ve 33386 sayılı Resmî Gazete. | otuz Eylül iki bin yirmi altı tarihli ve otuz üç bin üç yüz seksen altı sayılı Resmî Gazete. |
| 60 | 1.000.000 TL'ye kadar ödeme yapılır. | bir milyon liraya kadar ödeme yapılır. |
| 61 | 4. fıkranın (b) bendi. | dördüncü fıkranın be bendi. |
| 62 | 100. yıl ve 1. sınıf. | yüzüncü yıl ve birinci sınıf. |
| 63 | Duruşma 09:15'te başlayacak. | Duruşma dokuz on beşte başlayacak. |

## 2. Dinleme testi cümleleri (kulakla)

Bu cümleleri `python3 reels-generator/scripts/say.py "…" --out cumle.wav` ile seslendir ve kullanıcıya dinlet.

- Medeni Kânun'un yüz yetmiş beşinci maddesi, süresiz nafakaya ilişkindir.
- Hâkim, ferâgat ve kabûl beyanını tutanağa geçirdi.
- Resmî Gazete'de yayımlanan kânunî düzenleme, hukukî ve malî sonuçlar doğurur.
- Sosyâl medya hesabı açılırken yaş doğrulaması yapılır.
- Tâkip işlemleri, icra dairesinde başlatılır.
- Taşınmaz maliki, ikâmet adresini bildirmekle yükümlüdür.
- Dâhil olan bedel, lâzım gelen harçlarla birlikte ödenir.
- Hâlinde, mahkeme tedbir kararı verebilir.
- Millî ve idarî yargı, adlî yargıdan ayrıdır.
- Saat, kontrol ve dikkat kelimelerinde ünlü uzunluğu dinlenmelidir.
- Hayal, normal, general ve federal kelimelerinde son l dinlenmelidir.
- Rol, alkol, petrol ve sinyal kelimelerindeki ince l dinlenmelidir.
- Seyahat, itaat, vaat ve sadakat kelimelerindeki uzun a dinlenmelidir.
- Iğdır, Isparta, İstanbul ve Hakkâri illeri okunmalıdır.
- Antalya Barosu, Antalya Bölge Adliye Mahkemesi'ne başvurdu.
