# Vurgu ve tonlama

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

## Vurgu
- Genel kural: Türkçe sözcüklerde vurgu çoğunlukla son hecededir (sevdi-ler → sevdilér) [K].
- İstisnalar: yer adları (İstánbul, Ánkara), bazı zarflar, olumsuzluk eki -me/-ma öncesi hece, soru eki -mi öncesi hece, birleşik sözcükler [K]. Yer adlarının ayrı bir vurgu kuralı izlediği literatürde belirtilir: Kabak & Vogel (2001), *Phonology* 18(3): 315–360 (künye doğrulandı); özet için Lorenzen, Himmel & Kabak ve Bokhari (2014) kaynakları arama sonuçlarında görüldü [S]. Tutarlı bir genel kural bulunmadığı da bildirilir [S].
- **Motorun verisi [V]:** vurguyu son hecede işaretleme oranı: yüksek sıklıklı kontrol kelimelerinde %80 (158/198), hukuk terimlerinde %76 (130/170), **il adlarında yalnız %21** (17/81). Yani motor yer adlarını ayrı vurgu örüntüsüyle işliyor; bu, literatürdeki yer adı istisnasıyla tutarlıdır ama her ilin vurgusunun doğru olduğu kanıtlanmadı (kulakla dinlenmedi).
- Fonem listesinde `ˈ` işareti vurgulu heceden hemen önce gelir. `lexicon.json` kuralları vurguyu şu an **değiştirmez** (eşleşme dışı bırakır, yalnız eşleşme içine düşen işareti korur). Vurgu düzeltmesi gerekirse kural motoruna "vurgu taşı" özelliği eklenmelidir (yapılmadı).

## Tonlama ve duraklar (uygulanan değerler) [V]
`reels-generator/scripts/tr_voice.py` cümleleri `. ! ? ; :` işaretlerinde böler; sessizlik süreleri: nokta/ünlem/soru 0.35 sn, noktalı virgül 0.25 sn, iki nokta 0.2 sn, diğer 0.15 sn. Virgül cümleyi bölmez; fonem dizisinde duraklama simgesi olarak taşınır. Cümle sonu düşen tonlama motordan gelir, ayrıca ayarlanmaz.
- Kısa cümleler (15–30 kelimelik sahne metni) vurgu ve tonlamayı daha doğal verir; uzun, çok virgüllü cümleden kaçın [K, uygulama deneyimi].
