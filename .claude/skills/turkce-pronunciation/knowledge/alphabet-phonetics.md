# Alfabe ve sesler

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

Türk alfabesi 29 harftir; ses karşılıkları için genel kaynak Zimmer & Orgun (1999), *Handbook of the IPA*, s. 154–156 (künye doğrulandı, metne erişilmedi) [S].

## Harf, örnek, motor çıktısı

Aşağıdaki "motor fonemleri" sütunu ses motorunun (espeak-ng + Piper) **öğretilmiş kural olmadan** ürettiği seslerdir; doğru telaffuz iddiası değil, motorun yaptığıdır [V]. "Genel IPA" sütunu alfabenin standart betimidir [K].

| harf | örnek | motor fonemleri [V] | genel IPA [K] |
|---|---|---|---|
| a | kara | k a ɾ ˈ a | a~ɑ |
| b | baba | b a b ˈ a | b |
| c | cam | d ʒ ˈ a m | dʒ |
| ç | çay | t ʃ ˈ a j | tʃ |
| d | dede | d e d ˈ ɛ | d |
| e | ev | ˈ ɛ v | e~ɛ |
| f | fil | f ˈ ɪ l | f |
| g | gül | ɟ ˈ ø l | ɡ~ɟ |
| ğ | dağ | d ˈ a ː | uzatır / j / — |
| h | hava | h a v ˈ a | h |
| ı | ışık | ɯ ʃ ˈ ɯ k | ɯ |
| i | iş | ˈ ɪ ʃ | i |
| j | jüri | ʒ y ɾ ˈ ɪ | ʒ |
| k | kitap | k i t ˈ a p | k~c |
| l | lale | ɫ ˈ a l ɛ | ɫ~l |
| m | masa | m ˈ a s a | m |
| n | nane | n a n ˈ ɛ | n |
| o | okul | o k ˈ ʊ ɫ | o |
| ö | ödev | œ d ˈ ɛ v | œ |
| p | para | p a ɾ ˈ a | p |
| r | renk | r ˈ æ n k | ɾ |
| s | su | s ˈ ʊ | s |
| ş | şeker | ʃ e k ˈ ɛ r | ʃ |
| t | tuz | t ˈ ʊ z | t |
| u | uzun | u z ˈ ʊ n | u |
| ü | üzüm | ˈ y z ø m | y |
| v | vatan | v a t ˈ a n | v~ʋ |
| y | yol | j ˈ ɔ ɫ | j |
| z | zaman | z a m ˈ a n | z |

## Şapkalı harfler (â î û)

- TDK kuralı: düzeltme işareti (1) yazılışları aynı, okunuşları ve anlamları ayrı sözcükleri ayırmak için uzun okunan ünlüde (adet/âdet, alem/âlem, kar/kâr, hala/hâlâ) ve (2) Arapça/Farsça kökenli sözcüklerde ince g, k ünsüzlerinden sonra gelen a ve u üzerinde kullanılır [S].
- Wikipedia'daki Türkçe sesbilgisi maddesi aynı ayrımı (kar / kâr) ve işaretin bazı alıntılarda (gâvur, lâzım) kullanıldığını, ama arkaikleştiğini belirtir [S].
- **Motor şapkalı harfleri yok sayar** [V]: `kar` ve `kâr` aynı sesleri üretir (k ˈ a r / k ˈ a r). Bu yüzden telaffuz yazı düzeyinde değil ses düzeyinde öğretilir (`pronunciation-exceptions.md`).
- Şapkalı yazılan sözcüklerde öğretilmiş kural, düz yazımla (resmi) da şapkalıyla (resmî) da uygulanır; bu `tests/run_pool.py` T3b ile sınanır [V].

## ğ

ğ ünsüz olarak okunmaz; öncesindeki ünlüyü uzatır ya da iki ünlü arasında j'ye yakın bir geçiş verir [K]. Motor `dağ` için d ˈ a ː üretir (a uzatılmış) [V].

## Motorun ince k/g/l davranışı (gözlem) [V]

Standart betimlemede k ve g ön ünlülerin yanında ince okunur ([c], [ɟ]) [S, Wikipedia]. Motorun gerçek çıktısı:

| kelime | motor fonemleri |
|---|---|
| kedi | k e d ˈ ɪ |
| kitap | k i t ˈ a p |
| küçük | k y t ʃ ˈ ø k |
| gül | ɟ ˈ ø l |
| gece | ɟ ˈ e d ʒ ɛ |
| gelin | ɟ e l ˈ ɪ n |
| kâr | k ˈ a r |
| kar | k ˈ a r |
| gâvur | ɡ a v ˈ ʊ r |
| lale | ɫ ˈ a l ɛ |
| okul | o k ˈ ʊ ɫ |

Bulgu: motor g'yi ön ünlülerin yanında inceltiyor (gül, gece, gelin: ɟ) ama k'yi inceltmiyor (kedi, kitap, küçük: k) ve l'yi çoğunlukla koyu (ɫ) üretiyor. Bu, ses motorunun taban sınırlamasıdır; kural gerekirse `reels-generator/resources/lexicon.json` ile kelime kelime düzeltilir.
