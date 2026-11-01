# Kısaltmalar ve sayılar

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

Uygulama: `reels-generator/scripts/tr_text.py` (`spoken()`), sözlük `reels-generator/resources/pronounce.json`.

## Sayılar [V]
- Tamsayı → yazı (bin için "bir bin" yok; milyon için "bir milyon"). `tests/run_pool.py` T5: 141 sayı ve 125 sıra sayısı **bağımsız** `num2words` (tr) ile karşılaştırıldı; fark yok.
- Binlik ayraç (1.250.000), ondalık virgül (3,5 → üç virgül beş), yüzde (%20, %5'lik), para (₺1.500, 5.000 TL → lira), tarih (31.07.2026, 30/9/2026), saat (20.00'de → yirmide, 09:15'te → dokuz on beşte), sıra sayısı (12. → on ikinci; yalnız 3 haneye kadar ve ardından sözcük geliyorsa), esas/karar (2025/12), parantezli bent (b → be) kuralları vardır.
- Rakama bitişik ek, ekin yazılışına göre korunur (2026'da → iki bin yirmi altıda); apostrof atılır.

## Kısaltmalar [V]
`pronounce.json` 57 giriş içerir. Sonu `~` olan açılımlar iyelik ekli adlardır (Kanunu, Meclisi); bunlardan sonra gelen ek `n` kaynaştırmasıyla bağlanır (HMK'ya → Hukuk Muhakemeleri Kanununa). Ek uyumu `tr_text.attach` ile kurulur; 63 vakalık `difficult-sentences.md` tablosu (1. bölüm) her koşuda sınanır (T6).

| kısaltma | okunuş |
|---|---|
| UYAP | Uyap |
| SEGBİS | Segbis |
| e-Devlet | E devlet |
| e-Tebligat | E tebligat |
| UETS | Uets |
| KEP | Kep |
| HMK | Hukuk Muhakemeleri Kanunu |
| TMK | Türk Medeni Kanunu |
| TBK | Türk Borçlar Kanunu |
| TCK | Türk Ceza Kanunu |
| CMK | Ceza Muhakemesi Kanunu |
| İİK | İcra ve İflas Kanunu |
| İYUK | İdari Yargılama Usulü Kanunu |
| TTK | Türk Ticaret Kanunu |
| VUK | Vergi Usul Kanunu |
| GVK | Gelir Vergisi Kanunu |
| KDVK | Katma Değer Vergisi Kanunu |
| SGK | Sosyal Güvenlik Kurumu |
| KVKK | Kişisel Verileri Koruma Kanunu |
| KVK | Kişisel Verileri Koruma Kurumu |
| TKHK | Tüketicinin Korunması Hakkında Kanun |
| AYM | Anayasa Mahkemesi |
| AİHM | Avrupa İnsan Hakları Mahkemesi |
| AİHS | Avrupa İnsan Hakları Sözleşmesi |
| HSK | Hâkimler ve Savcılar Kurulu |
| TBMM | Türkiye Büyük Millet Meclisi |
| TBB | Türkiye Barolar Birliği |
| BDDK | Bankacılık Düzenleme ve Denetleme Kurumu |
| SPK | Sermaye Piyasası Kurulu |
| SEDDK | Sigorta ve Emeklilik Düzenleme ve Denetleme Kurumu |
| GİB | Gelir İdaresi Başkanlığı |
| TÜİK | Türkiye İstatistik Kurumu |
| TCMB | Merkez Bankası |
| EPDK | Enerji Piyasası Düzenleme Kurumu |
| BTK | Bilgi Teknolojileri ve İletişim Kurumu |
| RTÜK | Radyo ve Televizyon Üst Kurulu |
| MASAK | Masak |
| ÖTV | Özel Tüketim Vergisi |
| KDV | Katma Değer Vergisi |
| SMS | Es Em Es |
| HAGB | Hükmün Açıklanmasının Geri Bırakılması |
| TL | lira |
| Av. | Avukat |
| Dr. | Doktor |
| m. | madde |
| md. | madde |
| fık. | fıkra |
| bk. | bakınız |
| S. | sayı |
| E. | Esas |
| K. | Karar |
| RG | Resmî Gazete |
| vb. | ve benzeri |
| vs. | vesaire |
| yy. | yüzyıl |
| no. | numara |
| No. | numara |

## Sınırlar
- Kısaltmanın hangi biçimde okunduğu (harf harf mi, sözcük gibi mi) sözlük girişidir; yeni kısaltmayı eklemeden önce nasıl okunduğunu kullanıcıya sor.
- Latince/yabancı ibareler ve ürün adları otomatik çözülmez; vo metnine okunuşuyla yaz.
