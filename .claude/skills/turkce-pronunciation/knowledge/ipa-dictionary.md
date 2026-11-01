# IPA sözlüğü (motor ve öğretilen)

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

Bu sözlük **doğru telaffuz sözlüğü değildir**. İki şeyi kaydeder: (1) ses modelinin bildiği simgeler, (2) öğretilmiş kuralların önce/sonra fonemleri. 1000 kelimenin tamamının motor çıktısı `tests/pronunciation-test-1000.md` içindedir.

## Ses modelinin simge sözlüğü [V]
Model 159 simge bilir. Türkçe için kullanılan ve anlamı bilinenler:

| simge | anlam |
|---|---|
| ː | uzun ünlü |
| ʲ | damaklılaşma |
| ɫ | koyu (velarize) l |
| c | ince (damaksıl) k |
| ɟ | ince g |
| ˈ | vurgu (sonraki ünlüde) |
| ɯ | ı |
| ʊ | u (gevşek) |
| ɪ | i (gevşek) |
| ɛ | e |
| œ | ö |
| y | ü |
| ʃ | ş |
| ʒ | j |
| ɾ | r (tek vuruş) |
| j | y |
| ɡ | g |

Modelde olmayan bir simge kuralda yazılırsa fonem dizisinden **sessizce düşer**; bu yüzden `run_pool.py` T2 her fonemin sözlükte olduğunu sınar.

## Öğretilmiş kurallar, önce → sonra [V]
| öğretilen | temsilci | önce (motor) | sonra |
|---|---|---|---|
| kânun | kanun | k a n ˈ ʊ n | k a ː n ˈ ʊ n |
| ferâgat | feragat | f e ɾ a ɡ ˈ a t | f e ɾ a ː ɡ ˈ a t |
| tâkip | takip | t a k ˈ ɪ p | t a ː c ˈ ɪ p |
| hâkim | hakim | h ˈ a k ɪ m | h ˈ a ː c ɪ m |
| hâlinde | halinde | h a l ɪ n d ˈ ɛ | h a ː l ɪ n d ˈ ɛ |
| lâzım | lazım | ɫ ˈ a z ɯ m | l ˈ a ː z ɯ m |
| dâhil | dahil | d a h ˈ ɪ l | d a ː h ˈ ɪ l |
| ikâmet | ikamet | i k a m ˈ ɛ t | i c a ː m ˈ ɛ t |
| mâlik | malik | m a l ˈ ɪ k | m a ː l ˈ ɪ k |
| resmî | resmi | r ɛ s m ˈ ɪ | r ɛ s m ˈ i ː |
| millî | milli | m ɪ l l ˈ ɪ | m ɪ l l ˈ i ː |
| adlî | adli | a d l ˈ ɪ | a d l ˈ i ː |
| hukukî | hukuki | h u k u k ˈ ɪ | h u k u k ˈ i ː |
| kânunî | kanuni | k a n u n ˈ ɪ | k a ː n u n ˈ i ː |
| medenî | medeni | m e d e n ˈ ɪ | m e d e n ˈ i ː |
| malî | mali | m a l ˈ ɪ | m a l ˈ i ː |
| idarî | idari | i d a ɾ ˈ ɪ | i d a ɾ ˈ i ː |
| kabûl | kabul | k a b ˈ ʊ ɫ | k a b ˈ u ː l ʲ |
| sosyâl | sosyal | s ɔ s j ˈ a ɫ | s ɔ s j ˈ æ l |
| -âl (ince a, açık l) | normal | n ɔ r m ˈ a ɫ | n ɔ r m ˈ æ l |
| -ol (açık l) | kontrol | k ɔ n t r ˈ ɔ ɫ | k ɔ n t r ˈ o l |
| -ul (açık l) | meşgul | m ɛ ʃ ɡ ˈ ʊ ɫ | m ɛ ʃ ɡ ˈ u l |

## Sık A/B kelimeleri, motor fonemleri [V] (ilk 80, sıklığa göre)
| kelime | sıklık | motor |
|---|---|---|
| saat | 214 | s a ˈ a t |
| kabul | 269 | k a b ˈ ʊ ɫ |
| kontrol | 296 | k ɔ n t r ˈ ɔ ɫ |
| dikkat | 351 | d i k ː ˈ a t |
| hayal | 497 | h a j ˈ a ɫ |
| normal | 680 | n ɔ r m ˈ a ɫ |
| hak | 757 | h ˈ a k |
| kalp | 1049 | k ˈ a ɫ p |
| general | 1141 | ɟ e n e ɾ ˈ a ɫ |
| kat | 1414 | k ˈ a t |
| iptal | 1480 | ɪ p t ˈ a ɫ |
| meşgul | 1631 | m ɛ ʃ ɡ ˈ ʊ ɫ |
| bol | 1758 | b ˈ ɔ ɫ |
| sosyal | 2015 | s ɔ s j ˈ a ɫ |
| rol | 2249 | r ˈ ɔ ɫ |
| seyahat | 2454 | s e j a h ˈ a t |
| federal | 2513 | f e d e ɾ ˈ a ɫ |
| sinyal | 2969 | s ɪ n j ˈ a ɫ |
| alkol | 3235 | a ɫ k ˈ ɔ ɫ |
| golf | 3384 | ɡ ˈ ɔ ɫ f |
| metal | 3499 | m e t ˈ a ɫ |
| ihtimal | 3663 | ɪ h t i m ˈ a ɫ |
| hal | 3848 | h ˈ a ɫ |
| hâl | 3848 | h ˈ a ɫ |
| petrol | 4352 | p ɛ t r ˈ ɔ ɫ |
| makul | 4953 | m a k ˈ ʊ ɫ |
| orijinal | 5149 | o ɾ i ʒ i n ˈ a ɫ |
| amiral | 6014 | a m i ɾ ˈ a ɫ |
| ihlâl | 6532 | ɪ h ɫ ˈ a ɫ |
| itaat | 6899 | i t a ˈ a t |
| gol | 6960 | ɡ ˈ ɔ ɫ |
| işgal | 6991 | ɪ ʃ ɡ ˈ a ɫ |
| kristal | 8323 | k r ɪ s t ˈ a ɫ |
| final | 8512 | f i n ˈ a ɫ |
| ihmal | 8791 | ɪ h m ˈ a ɫ |
| dijital | 9132 | d i ʒ i t ˈ a ɫ |
| vaat | 9259 | v a ˈ a t |
| emlak | 9411 | æ m ɫ ˈ a k |
| sadakat | 9499 | s a d a k ˈ a t |
| moral | 9605 | m o ɾ ˈ a ɫ |
| ad | 9844 | ˈ a d |
| kardinal | 10167 | k a r d i n ˈ a ɫ |
| anormal | 10342 | a n ɔ r m ˈ a ɫ |
| ideal | 10407 | i d e ˈ a ɫ |
| radikal | 11423 | r a d i k ˈ a ɫ |
| harf | 13346 | h ˈ a r f |
| müzikal | 13586 | m y z i k ˈ a ɫ |
| sembol | 13898 | s æ m b ˈ ɔ ɫ |
| global | 14221 | ɡ ɫ o b ˈ a ɫ |
| festival | 15220 | f ɛ s t i v ˈ a ɫ |
| santral | 15226 | s a n t r ˈ a ɫ |
| şefkat | 15644 | ʃ ɛ f k ˈ a t |
| helâl | 16011 | h e ɫ ˈ a ɫ |
| protokol | 16092 | p r o t o k ˈ ɔ ɫ |
| faul | 16619 | f a ˈ ʊ ɫ |
| feragat | 17206 | f e ɾ a ɡ ˈ a t |
| meçhul | 17301 | m ɛ t ʃ h ˈ ʊ ɫ |
| başrol | 17644 | b a ʃ r ˈ ɔ ɫ |
| ampul | 19399 | a m p ˈ ʊ ɫ |
| idrak | 19627 | ɪ d r ˈ a k |
| usul | 19943 | u s ˈ ʊ ɫ |
| sürat | 20163 | s y ɾ ˈ a t |
| liberal | 20196 | l i b e ɾ ˈ a ɫ |
| harp | 20455 | h ˈ a r p |
| kemal | 21830 | k e m ˈ a ɫ |
| beraat | 21860 | b e ɾ a ˈ a t |
| had | 22060 | h ˈ a d |
| mareşal | 22399 | m a ɾ e ʃ ˈ a ɫ |
| termal | 22418 | t ɛ r m ˈ a ɫ |
| mahal | 22689 | m a h ˈ a ɫ |
| ithal | 22835 | ɪ t h ˈ a ɫ |
| nasihat | 22946 | n a s i h ˈ a t |
| hakikat | 22973 | h a k i k ˈ a t |
| medikal | 23656 | m e d i k ˈ a ɫ |
| gayrimenkul | 23945 | ɡ a j r i m æ n k ˈ ʊ ɫ |
| trol | 24239 | t r ˈ ɔ ɫ |
| istirahat | 24546 | ɪ s t i ɾ a h ˈ a t |
| tropikal | 24976 | t r o p i k ˈ a ɫ |
| ishal | 25398 | ɪ s h ˈ a ɫ |
| imal | 25662 | i m ˈ a ɫ |
