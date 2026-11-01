# Telaffuz test havuzu: 1000 kelime

Bu dosya `tests/build_pool.py` ile kaynaklardan üretilir; elle düzenleme. Kaynaklar ve sha256'ları: `references/sources.md`.
Çalıştırma sonucu: `tests/last-run.md` (`python3 tests/run_pool.py`).

- **motor**: ses motorunun (espeak-ng/Piper) öğretilmiş kural OLMADAN ürettiği fonemler. Doğru telaffuz iddiası değildir; yalnızca motorun ne yaptığıdır.
- **öğretilen**: `reels-generator/resources/lexicon.json` kuralı uygulandıktan sonraki fonemler (— = değişmedi).
- **sıklık**: OpenSubtitles 2018 Türkçe 50k listesindeki sıra (— = listede yok). Öğretme önceliği için kullanılır.
- **Zemberek**: sözlük bayrakları (— = girdi yok ya da bayraksız). **şapkalı**: Zemberek'teki şapkalı yazım.

| grup | açıklama | kelime |
|---|---|---|
| A | ince-l/uzun-ünlü adayı (InverseHarmony) | 389 |
| B | şapkalı yazılan (Zemberek) | 160 |
| C | kontrol (düz) | 200 |
| D | hukuk terimi | 170 |
| E | il adı | 81 |
| | toplam | 1000 |

| # | kelime | grup | sıklık | Zemberek | şapkalı | motor | öğretilen |
|---|---|---|---|---|---|---|---|
| 1 | saat | A | 214 | InverseHarmony, NoVoicing | — | s a ˈ a t | — |
| 2 | kabul | A | 269 | InverseHarmony | — | k a b ˈ ʊ ɫ | k a b ˈ y ː l |
| 3 | kontrol | A | 296 | InverseHarmony | — | k ɔ n t r ˈ ɔ ɫ | k ɔ n t r ˈ o l |
| 4 | dikkat | A | 351 | InverseHarmony | — | d i k ː ˈ a t | — |
| 5 | hayal | A | 497 | InverseHarmony | — | h a j ˈ a ɫ | — |
| 6 | normal | A | 680 | InverseHarmony | — | n ɔ r m ˈ a ɫ | n ɔ r m ˈ æ l |
| 7 | hak | A | 757 | Doubling, InverseHarmony | — | h ˈ a k | — |
| 8 | kalp | A | 1049 | InverseHarmony, NoVoicing, Voicing | — | k ˈ a ɫ p | — |
| 9 | general | A | 1141 | InverseHarmony | — | ɟ e n e ɾ ˈ a ɫ | ɟ e n e ɾ ˈ æ l |
| 10 | kat | A | 1414 | InverseHarmony | — | k ˈ a t | — |
| 11 | iptal | A | 1480 | InverseHarmony | — | ɪ p t ˈ a ɫ | ɪ p t ˈ æ l |
| 12 | meşgul | A | 1631 | InverseHarmony | — | m ɛ ʃ ɡ ˈ ʊ ɫ | m ɛ ʃ ɡ ˈ u l |
| 13 | bol | A | 1758 | InverseHarmony | — | b ˈ ɔ ɫ | b ˈ o l |
| 14 | sosyal | A | 2015 | InverseHarmony | — | s ɔ s j ˈ a ɫ | s ɔ s j ˈ æ l |
| 15 | rol | A | 2249 | InverseHarmony | — | r ˈ ɔ ɫ | r ˈ o l |
| 16 | seyahat | A | 2454 | InverseHarmony, NoVoicing | — | s e j a h ˈ a t | — |
| 17 | federal | A | 2513 | InverseHarmony | — | f e d e ɾ ˈ a ɫ | f e d e ɾ ˈ æ l |
| 18 | sinyal | A | 2969 | InverseHarmony | — | s ɪ n j ˈ a ɫ | s ɪ n j ˈ æ l |
| 19 | alkol | A | 3235 | InverseHarmony | — | a ɫ k ˈ ɔ ɫ | a ɫ k ˈ o l |
| 20 | golf | A | 3384 | InverseHarmony | — | ɡ ˈ ɔ ɫ f | — |
| 21 | metal | A | 3499 | InverseHarmony | — | m e t ˈ a ɫ | m e t ˈ æ l |
| 22 | ihtimal | A | 3663 | InverseHarmony | — | ɪ h t i m ˈ a ɫ | — |
| 23 | hal | A | 3848 | Doubling, InverseHarmony | hâl | h ˈ a ɫ | — |
| 24 | hâl | A | 3848 | Doubling, InverseHarmony | hâl | h ˈ a ɫ | — |
| 25 | petrol | A | 4352 | InverseHarmony | — | p ɛ t r ˈ ɔ ɫ | p ɛ t r ˈ o l |
| 26 | makul | A | 4953 | InverseHarmony | — | m a k ˈ ʊ ɫ | m a k ˈ u l |
| 27 | orijinal | A | 5149 | InverseHarmony | — | o ɾ i ʒ i n ˈ a ɫ | o ɾ i ʒ i n ˈ æ l |
| 28 | amiral | A | 6014 | InverseHarmony | — | a m i ɾ ˈ a ɫ | — |
| 29 | ihlâl | A | 6532 | InverseHarmony | ihlâl | ɪ h ɫ ˈ a ɫ | — |
| 30 | itaat | A | 6899 | InverseHarmony | — | i t a ˈ a t | — |
| 31 | gol | A | 6960 | InverseHarmony | — | ɡ ˈ ɔ ɫ | — |
| 32 | işgal | A | 6991 | InverseHarmony | — | ɪ ʃ ɡ ˈ a ɫ | ɪ ʃ ɡ ˈ æ l |
| 33 | kristal | A | 8323 | InverseHarmony | — | k r ɪ s t ˈ a ɫ | k r ɪ s t ˈ æ l |
| 34 | final | A | 8512 | InverseHarmony | — | f i n ˈ a ɫ | f i n ˈ æ l |
| 35 | ihmal | A | 8791 | InverseHarmony | — | ɪ h m ˈ a ɫ | ɪ h m ˈ æ l |
| 36 | dijital | A | 9132 | InverseHarmony | — | d i ʒ i t ˈ a ɫ | d i ʒ i t ˈ æ l |
| 37 | vaat | A | 9259 | InverseHarmony, Voicing | — | v a ˈ a t | — |
| 38 | emlak | A | 9411 | InverseHarmony | — | æ m ɫ ˈ a k | — |
| 39 | sadakat | A | 9499 | InverseHarmony | — | s a d a k ˈ a t | — |
| 40 | moral | A | 9605 | InverseHarmony | — | m o ɾ ˈ a ɫ | m o ɾ ˈ æ l |
| 41 | ad | A | 9844 | Doubling, InverseHarmony | — | ˈ a d | — |
| 42 | kardinal | A | 10167 | InverseHarmony | — | k a r d i n ˈ a ɫ | — |
| 43 | anormal | A | 10342 | InverseHarmony | — | a n ɔ r m ˈ a ɫ | — |
| 44 | ideal | A | 10407 | InverseHarmony | — | i d e ˈ a ɫ | — |
| 45 | radikal | A | 11423 | InverseHarmony | — | r a d i k ˈ a ɫ | — |
| 46 | harf | A | 13346 | InverseHarmony | — | h ˈ a r f | — |
| 47 | müzikal | A | 13586 | InverseHarmony | — | m y z i k ˈ a ɫ | — |
| 48 | sembol | A | 13898 | InverseHarmony | — | s æ m b ˈ ɔ ɫ | — |
| 49 | global | A | 14221 | InverseHarmony | — | ɡ ɫ o b ˈ a ɫ | — |
| 50 | festival | A | 15220 | InverseHarmony | — | f ɛ s t i v ˈ a ɫ | — |
| 51 | santral | A | 15226 | InverseHarmony | — | s a n t r ˈ a ɫ | — |
| 52 | şefkat | A | 15644 | InverseHarmony | — | ʃ ɛ f k ˈ a t | — |
| 53 | helâl | A | 16011 | InverseHarmony | helâl | h e ɫ ˈ a ɫ | — |
| 54 | protokol | A | 16092 | InverseHarmony | — | p r o t o k ˈ ɔ ɫ | — |
| 55 | faul | A | 16619 | InverseHarmony | — | f a ˈ ʊ ɫ | — |
| 56 | feragat | A | 17206 | InverseHarmony | — | f e ɾ a ɡ ˈ a t | f e ɾ a ː ɡ ˈ a t |
| 57 | meçhul | A | 17301 | InverseHarmony | — | m ɛ t ʃ h ˈ ʊ ɫ | — |
| 58 | başrol | A | 17644 | InverseHarmony | — | b a ʃ r ˈ ɔ ɫ | — |
| 59 | ampul | A | 19399 | InverseHarmony | — | a m p ˈ ʊ ɫ | — |
| 60 | idrak | A | 19627 | InverseHarmony | — | ɪ d r ˈ a k | — |
| 61 | usul | A | 19943 | InverseHarmony | — | u s ˈ ʊ ɫ | — |
| 62 | sürat | A | 20163 | InverseHarmony, NoVoicing | — | s y ɾ ˈ a t | — |
| 63 | liberal | A | 20196 | InverseHarmony | — | l i b e ɾ ˈ a ɫ | — |
| 64 | harp | A | 20455 | InverseHarmony, Voicing | — | h ˈ a r p | — |
| 65 | kemal | A | 21830 | InverseHarmony | — | k e m ˈ a ɫ | — |
| 66 | beraat | A | 21860 | InverseHarmony, NoVoicing | — | b e ɾ a ˈ a t | — |
| 67 | had | A | 22060 | Doubling, InverseHarmony | — | h ˈ a d | — |
| 68 | mareşal | A | 22399 | InverseHarmony | — | m a ɾ e ʃ ˈ a ɫ | — |
| 69 | termal | A | 22418 | InverseHarmony | — | t ɛ r m ˈ a ɫ | — |
| 70 | mahal | A | 22689 | Doubling, InverseHarmony | — | m a h ˈ a ɫ | — |
| 71 | ithal | A | 22835 | InverseHarmony | — | ɪ t h ˈ a ɫ | — |
| 72 | nasihat | A | 22946 | InverseHarmony | — | n a s i h ˈ a t | — |
| 73 | hakikat | A | 22973 | InverseHarmony | — | h a k i k ˈ a t | — |
| 74 | medikal | A | 23656 | InverseHarmony | — | m e d i k ˈ a ɫ | — |
| 75 | gayrimenkul | A | 23945 | InverseHarmony | — | ɡ a j r i m æ n k ˈ ʊ ɫ | — |
| 76 | trol | A | 24239 | InverseHarmony | — | t r ˈ ɔ ɫ | — |
| 77 | istirahat | A | 24546 | InverseHarmony | — | ɪ s t i ɾ a h ˈ a t | — |
| 78 | tropikal | A | 24976 | InverseHarmony | — | t r o p i k ˈ a ɫ | — |
| 79 | ishal | A | 25398 | InverseHarmony | — | ɪ s h ˈ a ɫ | — |
| 80 | imal | A | 25662 | InverseHarmony | — | i m ˈ a ɫ | — |
| 81 | suistimal | A | 25968 | InverseHarmony | — | s u ɪ s t i m ˈ a ɫ | — |
| 82 | cemal | A | 26303 | InverseHarmony | — | d ʒ e m ˈ a ɫ | — |
| 83 | vals | A | 26320 | InverseHarmony | — | v ˈ a ɫ s | — |
| 84 | kanaat | A | 27302 | InverseHarmony | — | k a n a ˈ a t | — |
| 85 | oval | A | 27632 | InverseHarmony | — | o v ˈ a ɫ | — |
| 86 | faal | A | 28334 | InverseHarmony | — | f a ˈ a ɫ | — |
| 87 | cemaat | A | 28501 | InverseHarmony | — | d ʒ e m a ˈ a t | — |
| 88 | kabahat | A | 29222 | InverseHarmony | — | k a b a h ˈ a t | — |
| 89 | yâr | A | 29484 | InverseHarmony | yâr | j ˈ a r | — |
| 90 | maktul | A | 30421 | InverseHarmony | — | m a k t ˈ ʊ ɫ | — |
| 91 | mineral | A | 30526 | InverseHarmony | — | m i n e ɾ ˈ a ɫ | — |
| 92 | illegal | A | 30577 | InverseHarmony | — | ɪ l l e ɡ ˈ a ɫ | — |
| 93 | spiral | A | 32935 | InverseHarmony | — | s p i ɾ ˈ a ɫ | — |
| 94 | terminal | A | 33073 | InverseHarmony | — | t ɛ r m i n ˈ a ɫ | — |
| 95 | materyal | A | 33850 | InverseHarmony | — | m a t ɛ r j ˈ a ɫ | — |
| 96 | ikmal | A | 34213 | InverseHarmony | — | ɪ k m ˈ a ɫ | — |
| 97 | refakat | A | 34319 | InverseHarmony | — | r e f a k ˈ a t | — |
| 98 | portal | A | 34592 | InverseHarmony | — | p ɔ r t ˈ a ɫ | — |
| 99 | misal | A | 34820 | InverseHarmony | — | m i s ˈ a ɫ | — |
| 100 | hilâl | A | 35246 | InverseHarmony | hilâl | h i ɫ ˈ a ɫ | — |
| 101 | vokal | A | 38979 | InverseHarmony | — | v o k ˈ a ɫ | — |
| 102 | idol | A | 40176 | InverseHarmony | — | i d ˈ ɔ ɫ | — |
| 103 | aval | A | 40686 | InverseHarmony | — | a v ˈ a ɫ | — |
| 104 | hilkat | A | 41047 | InverseHarmony | — | h ɪ l k ˈ a t | — |
| 105 | menkul | A | 41093 | InverseHarmony | — | m æ n k ˈ ʊ ɫ | — |
| 106 | iştirak | A | 41288 | InverseHarmony | — | ɪ ʃ t i ɾ ˈ a k | — |
| 107 | katedral | A | 42226 | InverseHarmony | — | k a t ɛ d r ˈ a ɫ | — |
| 108 | intikal | A | 43049 | InverseHarmony | — | ɪ n t i k ˈ a ɫ | — |
| 109 | celâl | A | 43937 | InverseHarmony | celâl | d ʒ e ɫ ˈ a ɫ | — |
| 110 | kolesterol | A | 44510 | InverseHarmony | — | k o l ɛ s t e ɾ ˈ ɔ ɫ | — |
| 111 | lokal | A | 44744 | InverseHarmony | — | ɫ o k ˈ a ɫ | — |
| 112 | opal | A | 44890 | InverseHarmony | — | o p ˈ a ɫ | — |
| 113 | ful | A | 47059 | InverseHarmony | — | f ˈ ʊ ɫ | — |
| 114 | ahval | A | — | InverseHarmony | — | a h v ˈ a ɫ | — |
| 115 | akkefal | A | — | InverseHarmony | — | a k ː e f ˈ a ɫ | — |
| 116 | akropol | A | — | InverseHarmony | — | a k r o p ˈ ɔ ɫ | — |
| 117 | alg | A | — | InverseHarmony | — | ˈ a ɫ ɡ | — |
| 118 | alveol | A | — | InverseHarmony | — | a ɫ v e ˈ ɔ ɫ | — |
| 119 | amal | A | — | InverseHarmony | — | a m ˈ a ɫ | — |
| 120 | ametal | A | — | InverseHarmony | — | a m e t ˈ a ɫ | — |
| 121 | amfibol | A | — | InverseHarmony | — | a m f i b ˈ ɔ ɫ | — |
| 122 | arzuhâl | A | — | InverseHarmony | arzuhâl | a r z u h ˈ a ɫ | — |
| 123 | asosyal | A | — | InverseHarmony | — | a s ɔ s j ˈ a ɫ | — |
| 124 | astropikal | A | — | InverseHarmony | — | a s t r o p i k ˈ a ɫ | — |
| 125 | atol | A | — | InverseHarmony | — | a t ˈ ɔ ɫ | — |
| 126 | atonal | A | — | InverseHarmony | — | a t o n ˈ a ɫ | — |
| 127 | ayal | A | — | InverseHarmony | — | a j ˈ a ɫ | — |
| 128 | banal | A | — | InverseHarmony | — | b a n ˈ a ɫ | — |
| 129 | bandrol | A | — | InverseHarmony | — | b a n d r ˈ ɔ ɫ | — |
| 130 | barkarol | A | — | InverseHarmony | — | b a r k a ɾ ˈ ɔ ɫ | — |
| 131 | batyal | A | — | InverseHarmony | — | b a t j ˈ a ɫ | — |
| 132 | belâgat | A | — | InverseHarmony | belâgat | b e ɫ a ɡ ˈ a t | — |
| 133 | belâhat | A | — | InverseHarmony | belâhat | b e ɫ a h ˈ a t | — |
| 134 | bemol | A | — | InverseHarmony | — | b e m ˈ ɔ ɫ | — |
| 135 | benzol | A | — | InverseHarmony | — | b æ n z ˈ ɔ ɫ | — |
| 136 | berkemal | A | — | InverseHarmony | — | b ɛ r k e m ˈ a ɫ | — |
| 137 | beytülmal | A | — | InverseHarmony | — | b ɛ j t ø l m ˈ a ɫ | — |
| 138 | biat | A | — | InverseHarmony | — | b i ˈ a t | — |
| 139 | bidat | A | — | InverseHarmony | — | b i d ˈ a t | — |
| 140 | bienal | A | — | InverseHarmony | — | b i e n ˈ a ɫ | — |
| 141 | biyomedikal | A | — | InverseHarmony | — | b i j o m e d i k ˈ a ɫ | — |
| 142 | brakisefal | A | — | InverseHarmony | — | b r a k i s e f ˈ a ɫ | — |
| 143 | cerahat | A | — | InverseHarmony | — | d ʒ e ɾ a h ˈ a t | — |
| 144 | cevval | A | — | InverseHarmony | — | d ʒ ɛ v v ˈ a ɫ | — |
| 145 | cidal | A | — | InverseHarmony | — | d ʒ i d ˈ a ɫ | — |
| 146 | cihanşümul | A | — | InverseHarmony | — | d ʒ i h a n ʃ y m ˈ ʊ ɫ | — |
| 147 | debagat | A | — | InverseHarmony, NoVoicing | — | d e b a ɡ ˈ a t | — |
| 148 | dialkol | A | — | InverseHarmony | — | d i a ɫ k ˈ ɔ ɫ | — |
| 149 | divanıharp | A | — | InverseHarmony, Voicing | — | d i v a n ɯ h ˈ a r p | — |
| 150 | diyagonal | A | — | InverseHarmony | — | d i j a ɡ o n ˈ a ɫ | — |
| 151 | dolikosefal | A | — | InverseHarmony | — | d o l i k o s e f ˈ a ɫ | — |
| 152 | duhul | A | — | InverseHarmony | — | d u h ˈ ʊ ɫ | — |
| 153 | dömifinal | A | — | InverseHarmony | — | d œ m i f i n ˈ a ɫ | — |
| 154 | eflak | A | — | InverseHarmony | — | ɛ f ɫ ˈ a k | — |
| 155 | ekol | A | — | InverseHarmony | — | e k ˈ ɔ ɫ | — |
| 156 | elipsoidal | A | — | InverseHarmony | — | e l ɪ p s o i d ˈ a ɫ | — |
| 157 | emsal | A | — | InverseHarmony | — | æ m s ˈ a ɫ | — |
| 158 | emval | A | — | InverseHarmony | — | æ m v ˈ a ɫ | — |
| 159 | enstrümantal | A | — | InverseHarmony | — | æ n s t r y m a n t ˈ a ɫ | — |
| 160 | enternasyonal | A | — | InverseHarmony | — | æ n t ɛ r n a s j o n ˈ a ɫ | — |
| 161 | etanol | A | — | InverseHarmony | — | e t a n ˈ ɔ ɫ | — |
| 162 | etilalkol | A | — | InverseHarmony | — | e t i ɫ a ɫ k ˈ ɔ ɫ | — |
| 163 | etol | A | — | InverseHarmony | — | e t ˈ ɔ ɫ | — |
| 164 | eşkâl | A | — | InverseHarmony | eşkâl | ɛ ʃ k ˈ a ɫ | — |
| 165 | farzımuhal | A | — | InverseHarmony | — | f a r z ɯ m u h ˈ a ɫ | — |
| 166 | fecaat | A | — | InverseHarmony | — | f e d ʒ a ˈ a t | — |
| 167 | fenol | A | — | InverseHarmony | — | f e n ˈ ɔ ɫ | — |
| 168 | feodal | A | — | InverseHarmony | — | f e o d ˈ a ɫ | — |
| 169 | fesahat | A | — | InverseHarmony | — | f e s a h ˈ a t | — |
| 170 | firkat | A | — | InverseHarmony | — | f ɪ r k ˈ a t | — |
| 171 | fleol | A | — | InverseHarmony | — | f l e ˈ ɔ ɫ | — |
| 172 | formol | A | — | InverseHarmony | — | f ɔ r m ˈ ɔ ɫ | — |
| 173 | fümerol | A | — | InverseHarmony | — | f y m e ɾ ˈ ɔ ɫ | — |
| 174 | gassal | A | — | InverseHarmony | — | ɡ a s s ˈ a ɫ | — |
| 175 | gayr | A | — | InverseHarmony | — | ɡ ˈ a j r | — |
| 176 | gayrimakul | A | — | InverseHarmony | — | ɡ a j r i m a k ˈ ʊ ɫ | — |
| 177 | gayrimesul | A | — | InverseHarmony | — | ɡ a j r i m e s ˈ ʊ ɫ | — |
| 178 | gazal | A | — | InverseHarmony | — | ɡ a z ˈ a ɫ | — |
| 179 | glikol | A | — | InverseHarmony | — | ɡ l i k ˈ ɔ ɫ | — |
| 180 | gramatikal | A | — | InverseHarmony | — | ɡ r a m a t i k ˈ a ɫ | — |
| 181 | hakkâk | A | — | InverseHarmony | hakkâk | h a k ː ˈ a k | — |
| 182 | hamakat | A | — | InverseHarmony | — | h a m a k ˈ a t | — |
| 183 | hasbıhâl | A | — | InverseHarmony | hasbıhâl | h a s b ɯ h ˈ a ɫ | — |
| 184 | hazakat | A | — | InverseHarmony | — | h a z a k ˈ a t | — |
| 185 | helâk | A | — | InverseHarmony | helâk | h e ɫ ˈ a k | — |
| 186 | hemhâl | A | — | InverseHarmony | hemhâl | h æ m h ˈ a ɫ | — |
| 187 | hidrosefal | A | — | InverseHarmony | — | h ɪ d r o s e f ˈ a ɫ | — |
| 188 | hidrozol | A | — | InverseHarmony | — | h ɪ d r o z ˈ ɔ ɫ | — |
| 189 | hilat | A | — | InverseHarmony | — | h i ɫ ˈ a t | — |
| 190 | hiperbol | A | — | InverseHarmony | — | h i p ɛ r b ˈ ɔ ɫ | — |
| 191 | hiperboloidal | A | — | InverseHarmony | — | h i p ɛ r b o ɫ o i d ˈ a ɫ | — |
| 192 | hol | A | — | InverseHarmony | — | h ˈ ɔ ɫ | — |
| 193 | hormonal | A | — | InverseHarmony | — | h ɔ r m o n ˈ a ɫ | — |
| 194 | hulûl | A | — | InverseHarmony | hulûl | h u ɫ ˈ ʊ ɫ | — |
| 195 | husul | A | — | InverseHarmony | — | h u s ˈ ʊ ɫ | — |
| 196 | hüsnühâl | A | — | InverseHarmony | hüsnühâl | h ø s n y h ˈ a ɫ | — |
| 197 | hüsnükabul | A | — | InverseHarmony | — | h ø s n y k a b ˈ ʊ ɫ | — |
| 198 | ibzal | A | — | InverseHarmony | — | ɪ b z ˈ a ɫ | — |
| 199 | icmal | A | — | InverseHarmony | — | ɪ d ʒ m ˈ a ɫ | — |
| 200 | ihtifal | A | — | InverseHarmony | — | ɪ h t i f ˈ a ɫ | — |
| 201 | ihtilâl | A | — | InverseHarmony | ihtilâl | ɪ h t i ɫ ˈ a ɫ | — |
| 202 | ikbal | A | — | InverseHarmony | — | ɪ k b ˈ a ɫ | — |
| 203 | ilmihâl | A | — | InverseHarmony | ilmihâl | ɪ l m i h ˈ a ɫ | — |
| 204 | immoral | A | — | InverseHarmony | — | ɪ m m o ɾ ˈ a ɫ | — |
| 205 | imsak | A | — | InverseHarmony | — | ˈ ɪ m s a k | — |
| 206 | imtisal | A | — | InverseHarmony | — | ɪ m t i s ˈ a ɫ | — |
| 207 | infial | A | — | InverseHarmony | — | ɪ n f i ˈ a ɫ | — |
| 208 | infinitezimal | A | — | InverseHarmony | — | ɪ n f i n i t e z i m ˈ a ɫ | — |
| 209 | inhilâl | A | — | InverseHarmony | inhilâl | ɪ n h i ɫ ˈ a ɫ | — |
| 210 | inhimak | A | — | InverseHarmony | — | ɪ n h i m ˈ a k | — |
| 211 | inkisarıhayal | A | — | InverseHarmony | — | ɪ n k i s a ɾ ɯ h a j ˈ a ɫ | — |
| 212 | integral | A | — | InverseHarmony | — | ɪ n t ɛ ɟ r ˈ a ɫ | — |
| 213 | intihal | A | — | InverseHarmony | — | ɪ n t i h ˈ a ɫ | — |
| 214 | inzal | A | — | InverseHarmony | — | ɪ n z ˈ a ɫ | — |
| 215 | iptizal | A | — | InverseHarmony | — | ɪ p t i z ˈ a ɫ | — |
| 216 | irsal | A | — | InverseHarmony | — | ɪ r s ˈ a ɫ | — |
| 217 | irtical | A | — | InverseHarmony | — | ɪ r t i d ʒ ˈ a ɫ | — |
| 218 | irtihal | A | — | InverseHarmony | — | ɪ r t i h ˈ a ɫ | — |
| 219 | isal | A | — | InverseHarmony | — | i s ˈ a ɫ | — |
| 220 | istical | A | — | InverseHarmony | — | ɪ s t i d ʒ ˈ a ɫ | — |
| 221 | istidlâl | A | — | InverseHarmony | istidlâl | ɪ s t ɪ d ɫ ˈ a ɫ | — |
| 222 | istihlâk | A | — | InverseHarmony | istihlâk | ɪ s t ɪ h ɫ ˈ a k | — |
| 223 | istihraç | A | — | InverseHarmony | — | ɪ s t ɪ h r ˈ a t ʃ | — |
| 224 | istihsal | A | — | InverseHarmony | — | ɪ s t ɪ h s ˈ a ɫ | — |
| 225 | istikbal | A | — | InverseHarmony | — | ɪ s t ɪ k b ˈ a ɫ | — |
| 226 | istiklâl | A | — | InverseHarmony | istiklâl | ɪ s t ɪ k ɫ ˈ a ɫ | — |
| 227 | istimal | A | — | InverseHarmony | — | ɪ s t i m ˈ a ɫ | — |
| 228 | istimlâk | A | — | InverseHarmony | istimlâk | ɪ s t ɪ m ɫ ˈ a k | — |
| 229 | istiskal | A | — | InverseHarmony | — | ɪ s t ɪ s k ˈ a ɫ | — |
| 230 | itidal | A | — | InverseHarmony | — | i t i d ˈ a ɫ | — |
| 231 | itikâl | A | — | InverseHarmony | itikâl | i t i k ˈ a ɫ | — |
| 232 | ittisal | A | — | InverseHarmony | — | i t ː i s ˈ a ɫ | — |
| 233 | izmihlâl | A | — | InverseHarmony | izmihlâl | ɪ z m ɪ h ɫ ˈ a ɫ | — |
| 234 | izzetüikbal | A | — | InverseHarmony | — | ɪ z z e t y ɪ k b ˈ a ɫ | — |
| 235 | iğfal | A | — | InverseHarmony | — | ɪ j f ˈ a ɫ | — |
| 236 | iştial | A | — | InverseHarmony | — | ɪ ʃ t i ˈ a ɫ | — |
| 237 | iştigal | A | — | InverseHarmony | — | ɪ ʃ t i ɡ ˈ a ɫ | — |
| 238 | jeosenklinal | A | — | InverseHarmony | — | ʒ e o s æ n k l i n ˈ a ɫ | — |
| 239 | jeotermal | A | — | InverseHarmony | — | ʒ e o t ɛ r m ˈ a ɫ | — |
| 240 | jul | A | — | InverseHarmony | — | ʒ ˈ ʊ ɫ | — |
| 241 | jurnal | A | — | InverseHarmony | — | ʒ ʊ r n ˈ a ɫ | — |
| 242 | jurnallemek | A | — | InverseHarmony | — | ʒ ʊ r n a ɫ l e m ˈ ɛ k | — |
| 243 | kapital | A | — | InverseHarmony | — | k a p i t ˈ a ɫ | — |
| 244 | karambol | A | — | InverseHarmony | — | k a ɾ a m b ˈ ɔ ɫ | — |
| 245 | kefal | A | — | InverseHarmony | — | k e f ˈ a ɫ | — |
| 246 | kental | A | — | InverseHarmony | — | k æ n t ˈ a ɫ | — |
| 247 | ketal | A | — | InverseHarmony | — | k e t ˈ a ɫ | — |
| 248 | kilojul | A | — | InverseHarmony | — | k i ɫ o ʒ ˈ ʊ ɫ | — |
| 249 | kilovatsaat | A | — | InverseHarmony | — | k i ɫ o v a t s a ˈ a t | — |
| 250 | koloidal | A | — | InverseHarmony | — | k o ɫ o i d ˈ a ɫ | — |
| 251 | koral | A | — | InverseHarmony | — | k o ɾ ˈ a ɫ | — |
| 252 | koramiral | A | — | InverseHarmony | — | k o ɾ a m i ɾ ˈ a ɫ | — |
| 253 | korgeneral | A | — | InverseHarmony | — | k ɔ r ɟ e n e ɾ ˈ a ɫ | — |
| 254 | krezol | A | — | InverseHarmony | — | k r e z ˈ ɔ ɫ | — |
| 255 | kıraat | A | — | InverseHarmony | — | k ɯ ɾ a ˈ a t | — |
| 256 | kıtal | A | — | InverseHarmony | — | k ɯ t ˈ a ɫ | — |
| 257 | lakrimal | A | — | InverseHarmony | — | ɫ a k r i m ˈ a ɫ | — |
| 258 | lal | A | — | InverseHarmony | — | ɫ ˈ a ɫ | — |
| 259 | legal | A | — | InverseHarmony | — | l e ɡ ˈ a ɫ | — |
| 260 | liyakat | A | — | InverseHarmony | — | l i j a k ˈ a t | — |
| 261 | lügat | A | — | InverseHarmony | — | l y ɡ ˈ a t | — |
| 262 | lümensaat | A | — | InverseHarmony | — | l y m æ n s a ˈ a t | — |
| 263 | mahlûl | A | — | InverseHarmony | mahlûl | m a h ɫ ˈ ʊ ɫ | — |
| 264 | mahmul | A | — | InverseHarmony | — | m a h m ˈ ʊ ɫ | — |
| 265 | mahsul | A | — | InverseHarmony | — | m a h s ˈ ʊ ɫ | — |
| 266 | makbul | A | — | InverseHarmony | — | m a k b ˈ ʊ ɫ | — |
| 267 | makrosefal | A | — | InverseHarmony | — | m a k r o s e f ˈ a ɫ | — |
| 268 | maksimal | A | — | InverseHarmony | — | m a k s i m ˈ a ɫ | — |
| 269 | malul | A | — | InverseHarmony | — | m a ɫ ˈ ʊ ɫ | — |
| 270 | mamul | A | — | InverseHarmony | — | m a m ˈ ʊ ɫ | — |
| 271 | marjinal | A | — | InverseHarmony | — | m a r ʒ i n ˈ a ɫ | — |
| 272 | matriarkal | A | — | InverseHarmony | — | m a t r i a r k ˈ a ɫ | — |
| 273 | meal | A | — | InverseHarmony | — | m e ˈ a ɫ | — |
| 274 | mebzul | A | — | InverseHarmony | — | m ɛ b z ˈ ʊ ɫ | — |
| 275 | mecal | A | — | InverseHarmony | — | m e d ʒ ˈ a ɫ | — |
| 276 | medlûl | A | — | InverseHarmony | medlûl | m ɛ d ɫ ˈ ʊ ɫ | — |
| 277 | meful | A | — | InverseHarmony | — | m e f ˈ ʊ ɫ | — |
| 278 | megapol | A | — | InverseHarmony | — | m e ɡ a p ˈ ɔ ɫ | — |
| 279 | melal | A | — | InverseHarmony | — | m e ɫ ˈ a ɫ | — |
| 280 | memluk | A | — | InverseHarmony | — | m æ m ɫ ˈ ʊ k | — |
| 281 | memul | A | — | InverseHarmony | — | m e m ˈ ʊ ɫ | — |
| 282 | menfaat | A | — | InverseHarmony | — | m æ n f a ˈ a t | — |
| 283 | mentol | A | — | InverseHarmony | — | m æ n t ˈ ɔ ɫ | — |
| 284 | meral | A | — | InverseHarmony | — | m e ɾ ˈ a ɫ | — |
| 285 | merkat | A | — | InverseHarmony | — | m ɛ r k ˈ a t | — |
| 286 | mesul | A | — | InverseHarmony | — | m e s ˈ ʊ ɫ | — |
| 287 | methal | A | — | InverseHarmony | — | m ɛ t h ˈ a ɫ | — |
| 288 | metropol | A | — | InverseHarmony | — | m ɛ t r o p ˈ ɔ ɫ | — |
| 289 | metrûk | A | — | InverseHarmony | metrûk | m ɛ t r ˈ ʊ k | — |
| 290 | meyyal | A | — | InverseHarmony | — | m ɛ j j ˈ a ɫ | — |
| 291 | meşakkat | A | — | InverseHarmony | — | m e ʃ a k ː ˈ a t | — |
| 292 | meşihat | A | — | Doubling, InverseHarmony | — | m e ʃ i h ˈ a t | — |
| 293 | mikrosefal | A | — | InverseHarmony | — | m ɪ k r o s e f ˈ a ɫ | — |
| 294 | minimal | A | — | InverseHarmony | — | m i n i m ˈ a ɫ | — |
| 295 | minval | A | — | InverseHarmony | — | m ɪ n v ˈ a ɫ | — |
| 296 | miskal | A | — | InverseHarmony | — | m ɪ s k ˈ a ɫ | — |
| 297 | mitral | A | — | InverseHarmony | — | m ɪ t r ˈ a ɫ | — |
| 298 | monokl | A | — | InverseHarmony | — | m o n ˈ ɔ k l | — |
| 299 | monopol | A | — | InverseHarmony | — | m o n o p ˈ ɔ ɫ | — |
| 300 | muhal | A | — | InverseHarmony | — | m u h ˈ a ɫ | — |
| 301 | muhik | A | — | Doubling, InverseHarmony | — | m u h ˈ ɪ k | — |
| 302 | muvafakat | A | — | InverseHarmony | — | m u v a f a k ˈ a t | — |
| 303 | muvakkat | A | — | InverseHarmony, NoVoicing | — | m u v a k ː ˈ a t | — |
| 304 | münhal | A | — | InverseHarmony | — | m ø n h ˈ a ɫ | — |
| 305 | müzikhol | A | — | InverseHarmony | — | m y z ɪ k h ˈ ɔ ɫ | — |
| 306 | nazarıdikkat | A | — | InverseHarmony, NoVoicing | — | n a z a ɾ ɯ d i k ː ˈ a t | — |
| 307 | nominal | A | — | InverseHarmony | — | n o m i n ˈ a ɫ | — |
| 308 | nükul | A | — | InverseHarmony | nükûl | n y k ˈ ʊ ɫ | — |
| 309 | nüzul | A | — | InverseHarmony | — | n y z ˈ ʊ ɫ | — |
| 310 | oramiral | A | — | InverseHarmony | — | o ɾ a m i ɾ ˈ a ɫ | — |
| 311 | orgeneral | A | — | InverseHarmony | — | ɔ r ɟ e n e ɾ ˈ a ɫ | — |
| 312 | oryantal | A | — | InverseHarmony | — | ɔ r j a n t ˈ a ɫ | — |
| 313 | otokontrol | A | — | InverseHarmony | — | o t o k ɔ n t r ˈ ɔ ɫ | — |
| 314 | parabol | A | — | InverseHarmony | — | p a ɾ a b ˈ ɔ ɫ | — |
| 315 | pastoral | A | — | InverseHarmony | — | p a s t o ɾ ˈ a ɫ | — |
| 316 | pektoral | A | — | InverseHarmony | — | p ɛ k t o ɾ ˈ a ɫ | — |
| 317 | piramidal | A | — | InverseHarmony | — | p i ɾ a m i d ˈ a ɫ | — |
| 318 | piryol | A | — | InverseHarmony | — | p ɪ r j ˈ ɔ ɫ | — |
| 319 | pirüpak | A | — | InverseHarmony | — | p i ɾ y p ˈ a k | — |
| 320 | profiterol | A | — | InverseHarmony | — | p r o f i t e ɾ ˈ ɔ ɫ | — |
| 321 | pürdikkat | A | — | InverseHarmony | — | p ø r d i k ː ˈ a t | — |
| 322 | pürmelâl | A | — | InverseHarmony | pürmelâl | p ø r m e ɫ ˈ a ɫ | — |
| 323 | pürsıhhat | A | — | InverseHarmony | — | p ø r s ɯ h h ˈ a t | — |
| 324 | pırnal | A | — | InverseHarmony | — | p ɯ r n ˈ a ɫ | — |
| 325 | rakik | A | — | InverseHarmony | — | r a k ˈ ɪ k | — |
| 326 | razmol | A | — | InverseHarmony | — | r a z m ˈ ɔ ɫ | — |
| 327 | resital | A | — | InverseHarmony | — | r e s i t ˈ a ɫ | — |
| 328 | resmikabul | A | — | InverseHarmony | — | r ɛ s m i k a b ˈ ʊ ɫ | — |
| 329 | resul | A | — | InverseHarmony | — | r e s ˈ ʊ ɫ | — |
| 330 | resülmal | A | — | InverseHarmony | — | r e s ø l m ˈ a ɫ | — |
| 331 | rical | A | — | InverseHarmony | — | r i d ʒ ˈ a ɫ | — |
| 332 | ricat | A | — | InverseHarmony, NoVoicing | — | r i d ʒ ˈ a t | — |
| 333 | rikkat | A | — | InverseHarmony | — | r i k ː ˈ a t | — |
| 334 | riyal | A | — | InverseHarmony | — | r i j ˈ a ɫ | — |
| 335 | santimantal | A | — | InverseHarmony | — | s a n t i m a n t ˈ a ɫ | — |
| 336 | sarahat | A | — | InverseHarmony | — | s a ɾ a h ˈ a t | — |
| 337 | sefahat | A | — | InverseHarmony | — | s e f a h ˈ a t | — |
| 338 | semahat | A | — | InverseHarmony | — | s e m a h ˈ a t | — |
| 339 | sinüzoidal | A | — | InverseHarmony | — | s i n y z o i d ˈ a ɫ | — |
| 340 | sirkat | A | — | InverseHarmony, NoVoicing | — | s ɪ r k ˈ a t | — |
| 341 | sistol | A | — | InverseHarmony | — | s ɪ s t ˈ ɔ ɫ | — |
| 342 | siyakat | A | — | InverseHarmony | — | s i j a k ˈ a t | — |
| 343 | spesiyal | A | — | InverseHarmony | — | s p e s i j ˈ a ɫ | — |
| 344 | sterol | A | — | InverseHarmony | — | s t e ɾ ˈ ɔ ɫ | — |
| 345 | sual | A | — | InverseHarmony | — | s u ˈ a ɫ | — |
| 346 | sukutuhayal | A | — | InverseHarmony | — | s u k u t u h a j ˈ a ɫ | — |
| 347 | sulp | A | — | InverseHarmony, Voicing | — | s ˈ ʊ ɫ p | — |
| 348 | sıhhat | A | — | InverseHarmony | — | s ɯ h h ˈ a t | — |
| 349 | sınaat | A | — | InverseHarmony | — | s ɯ n a ˈ a t | — |
| 350 | takat | A | — | InverseHarmony | — | t a k ˈ a t | — |
| 351 | talik | A | — | InverseHarmony | — | t a l ˈ ɪ k | — |
| 352 | tavik | A | — | InverseHarmony | — | t a v ˈ ɪ k | — |
| 353 | tefrik | A | — | InverseHarmony | — | t ɛ f r ˈ ɪ k | — |
| 354 | tercümeihâl | A | — | InverseHarmony | tercümeihâl | t ɛ r d ʒ y m e i h ˈ a ɫ | — |
| 355 | tergal | A | — | InverseHarmony | — | t ɛ r ɡ ˈ a ɫ | — |
| 356 | timbal | A | — | InverseHarmony | — | t ɪ m b ˈ a ɫ | — |
| 357 | timsal | A | — | InverseHarmony | — | t ɪ m s ˈ a ɫ | — |
| 358 | total | A | — | InverseHarmony | — | t o t ˈ a ɫ | — |
| 359 | transandantal | A | — | InverseHarmony | — | t r a n s a n d a n t ˈ a ɫ | — |
| 360 | trikosefal | A | — | InverseHarmony | — | t r i k o s e f ˈ a ɫ | — |
| 361 | tul | A | — | InverseHarmony | — | t ˈ ʊ ɫ | — |
| 362 | turnusol | A | — | InverseHarmony | — | t ʊ r n u s ˈ ɔ ɫ | — |
| 363 | tuval | A | — | InverseHarmony | — | t u v ˈ a ɫ | — |
| 364 | tuğamiral | A | — | InverseHarmony | — | t u ː a m i ɾ ˈ a ɫ | — |
| 365 | tuğgeneral | A | — | InverseHarmony | — | t u ː ɟ e n e ɾ ˈ a ɫ | — |
| 366 | tümamiral | A | — | InverseHarmony | — | t y m a m i ɾ ˈ a ɫ | — |
| 367 | tümgeneral | A | — | InverseHarmony | — | t ø m ɟ e n e ɾ ˈ a ɫ | — |
| 368 | valf | A | — | InverseHarmony | — | v ˈ a ɫ f | — |
| 369 | vebal | A | — | InverseHarmony | — | v e b ˈ a ɫ | — |
| 370 | vesaik | A | — | InverseHarmony | — | v e s a ˈ ɪ k | — |
| 371 | visal | A | — | InverseHarmony | — | v i s ˈ a ɫ | — |
| 372 | visamiral | A | — | InverseHarmony | — | v i s a m i ɾ ˈ a ɫ | — |
| 373 | vusul | A | — | InverseHarmony | — | v u s ˈ ʊ ɫ | — |
| 374 | vüsat | A | — | InverseHarmony | — | v y s ˈ a t | — |
| 375 | zanaat | A | — | InverseHarmony | — | z a n a ˈ a t | — |
| 376 | zeval | A | — | InverseHarmony | — | z e v ˈ a ɫ | — |
| 377 | zühul | A | — | InverseHarmony | — | z y h ˈ ʊ ɫ | — |
| 378 | zülâl | A | — | InverseHarmony | zülâl | z y ɫ ˈ a ɫ | — |
| 379 | âlemşümul | A | — | InverseHarmony | âlemşümul | a l æ m ʃ y m ˈ ʊ ɫ | — |
| 380 | üful | A | — | InverseHarmony | — | y f ˈ ʊ ɫ | — |
| 381 | üniversal | A | — | InverseHarmony | — | y n i v ɛ r s ˈ a ɫ | — |
| 382 | şakul | A | — | InverseHarmony | — | ʃ a k ˈ ʊ ɫ | — |
| 383 | şarampol | A | — | InverseHarmony | — | ʃ a ɾ a m p ˈ ɔ ɫ | — |
| 384 | şecaat | A | — | InverseHarmony | — | ʃ e d ʒ a ˈ a t | — |
| 385 | şefaat | A | — | InverseHarmony | — | ʃ e f a ˈ a t | — |
| 386 | şenaat | A | — | InverseHarmony | — | ʃ e n a ˈ a t | — |
| 387 | şevval | A | — | InverseHarmony | — | ʃ ɛ v v ˈ a ɫ | — |
| 388 | şimal | A | — | InverseHarmony | — | ʃ i m ˈ a ɫ | — |
| 389 | şümul | A | — | InverseHarmony | — | ʃ y m ˈ ʊ ɫ | — |
| 390 | âmâ | B | 11 | var | âmâ | ˈ a m a | — |
| 391 | tabiî | B | 139 | var | tabiî | t a b i ˈ ɪ | — |
| 392 | hâlâ | B | 174 | var | hâlâ | h ˈ a ɫ a | — |
| 393 | pekâlâ | B | 189 | var | pekâlâ | p e k ˈ a ɫ a | — |
| 394 | tâbi | B | 444 | var | tâbi | t a b ˈ ɪ | — |
| 395 | silâh | B | 553 | var | silâh | s i ɫ ˈ a h | — |
| 396 | evlât | B | 581 | var | evlât | ɛ v ɫ ˈ a t | — |
| 397 | herhâlde | B | 855 | var | herhâlde | h ɛ r h a ɫ d ˈ ɛ | — |
| 398 | âşık | B | 967 | NoVoicing | âşık | a ʃ ˈ ɯ k | — |
| 399 | meselâ | B | 1008 | var | meselâ | m ˈ e s e ɫ a | — |
| 400 | resmî | B | 1066 | var | resmî | r ɛ s m ˈ ɪ | r ɛ s m ˈ i ː |
| 401 | dâhil | B | 1296 | LastVowelDrop | dâhil | d a h ˈ ɪ l | d a ː h ˈ ɪ l |
| 402 | hikâye | B | 1300 | var | hikâye | h i k a j ˈ ɛ | — |
| 403 | derhâl | B | 1650 | var | derhâl | d ɛ r h ˈ a ɫ | — |
| 404 | askerî | B | 1654 | var | askerî | a s k e ɾ ˈ ɪ | — |
| 405 | ilâç | B | 1790 | var | ilâç | i ɫ ˈ a t ʃ | — |
| 406 | merkezî | B | 1870 | var | merkezî | m ɛ r k e z ˈ ɪ | — |
| 407 | kâr | B | 1904 | var | kâr | k ˈ a r | — |
| 408 | filân | B | 1907 | var | filân | f i ɫ ˈ a n | — |
| 409 | vahşî | B | 1993 | var | vahşî | v a h ʃ ˈ ɪ | — |
| 410 | dâhi | B | 2008 | var | dâhi | d a h ˈ ɪ | — |
| 411 | fikrî | B | 2102 | var | fikrî | f ɪ k r ˈ ɪ | — |
| 412 | tarihî | B | 2196 | var | tarihî | t a ɾ i h ˈ ɪ | — |
| 413 | kâğıt | B | 2399 | var | kâğıt | k a ː ˈ ɯ t | — |
| 414 | tıbbî | B | 2460 | var | tıbbî | t ɯ b ː ˈ ɪ | — |
| 415 | kalbî | B | 2518 | var | kalbî | k a ɫ b ˈ ɪ | — |
| 416 | hâkim | B | 2550 | var | hâkim | h ˈ a k ɪ m | h ˈ a ː c ɪ m |
| 417 | ilân | B | 2874 | var | ilân | i ɫ ˈ a n | — |
| 418 | rüzgâr | B | 2928 | var | rüzgâr | r ø z ɡ ˈ a r | — |
| 419 | şikâyet | B | 2992 | NoVoicing | şikâyet | ʃ i k a j ˈ ɛ t | — |
| 420 | belâ | B | 3025 | var | belâ | b ˈ e ɫ a | — |
| 421 | mahkûm | B | 3122 | var | mahkûm | m ˈ a h k ʊ m | — |
| 422 | kânun | B | 3370 | var | kânun | k a n ˈ ʊ n | k a ː n ˈ ʊ n |
| 423 | klâsik | B | 3507 | var | klâsik | k ɫ a s ˈ ɪ k | — |
| 424 | felâket | B | 3624 | NoVoicing | felâket | f e ɫ a k ˈ ɛ t | — |
| 425 | ihtimalî | B | 3792 | var | ihtimalî | ɪ h t ˈ i m a l ɪ | — |
| 426 | telâfi | B | 3818 | var | telâfi | t e ɫ a f ˈ ɪ | — |
| 427 | âmin | B | 3852 | var | âmin | a m ˈ ɪ n | — |
| 428 | hâlen | B | 3856 | var | hâlen | h a l ˈ æ n | h a ː l ˈ æ n |
| 429 | reklâm | B | 4061 | var | reklâm | r ɛ k ɫ ˈ a m | — |
| 430 | şeklî | B | 4448 | var | şeklî | ʃ ɛ k l ˈ ɪ | — |
| 431 | âdet | B | 4794 | NoVoicing | âdet | a d ˈ ɛ t | — |
| 432 | inkâr | B | 4801 | var | inkâr | ɪ n k ˈ a r | — |
| 433 | samimî | B | 5001 | var | samimî | s ˈ a m i m ɪ | — |
| 434 | hayalî | B | 5041 | var | hayalî | h a j a l ˈ ɪ | — |
| 435 | bekâr | B | 5182 | var | bekâr | b e k ˈ a r | — |
| 436 | kâbus | B | 5200 | var | kâbus | k a b ˈ ʊ s | — |
| 437 | şeytanî | B | 5262 | var | şeytanî | ʃ ɛ j t a n ˈ ɪ | — |
| 438 | dinî | B | 5694 | var | dinî | d i n ˈ ɪ | — |
| 439 | malî | B | 5859 | var | malî | m a l ˈ ɪ | m a l ˈ i ː |
| 440 | hissî | B | 6087 | var | hissî | h ɪ s s ˈ ɪ | — |
| 441 | hayatî | B | 6137 | var | hayatî | h a j a t ˈ ɪ | — |
| 442 | siyasî | B | 6455 | var | siyasî | s i j a s ˈ ɪ | — |
| 443 | şahsî | B | 7026 | var | şahsî | ʃ a h s ˈ ɪ | — |
| 444 | âdeta | B | 7139 | var | âdeta | a d e t ˈ a | — |
| 445 | bedenî | B | 7284 | var | bedenî | b e d e n ˈ ɪ | — |
| 446 | millî | B | 7442 | var | millî | m ɪ l l ˈ ɪ | m ɪ l l ˈ i ː |
| 447 | dükkân | B | 7506 | var | dükkân | d y k ː ˈ a n | — |
| 448 | kâp | B | 7640 | Voicing | kâp | k ˈ a p | — |
| 449 | mekân | B | 7643 | var | mekân | m e k ˈ a n | — |
| 450 | indî | B | 7665 | var | indî | ɪ n d ˈ ɪ | — |
| 451 | nâkil | B | 7690 | LastVowelDrop | nâkil | n a k ˈ ɪ l | — |
| 452 | imkân | B | 7845 | var | imkân | ɪ m k ˈ a n | — |
| 453 | iflâs | B | 7973 | var | iflâs | ɪ f ɫ ˈ a s | — |
| 454 | havaî | B | 8111 | var | havaî | h a v a ˈ ɪ | — |
| 455 | zekâ | B | 8453 | var | zekâ | z e k ˈ a | — |
| 456 | siyahî | B | 8627 | var | siyahî | s i j a h ˈ ɪ | — |
| 457 | ticarî | B | 8664 | var | ticarî | t i d ʒ a ɾ ˈ ɪ | — |
| 458 | ilâ | B | 9123 | var | ilâ | ˈ i ɫ a | — |
| 459 | maddî | B | 9401 | var | maddî | m a d ː ˈ ɪ | — |
| 460 | harikulâde | B | 9476 | var | harikulâde | h a ɾ i k ˈ u ɫ a d ɛ | — |
| 461 | sahtekâr | B | 9855 | var | sahtekâr | s a h t e k ˈ a r | — |
| 462 | naklî | B | 9871 | var | naklî | n a k l ˈ ɪ | — |
| 463 | fevkalâde | B | 10129 | var | fevkalâde | f ɛ v k ˈ a ɫ a d ɛ | — |
| 464 | hâliyle | B | 10169 | var | hâliyle | h a l ˈ ɪ j l ɛ | — |
| 465 | harbî | B | 10229 | var | harbî | h a r b ˈ ɪ | — |
| 466 | ebedî | B | 10322 | var | ebedî | e b e d ˈ ɪ | — |
| 467 | ilâhî | B | 10606 | var | ilâhî | i ɫ a h ˈ ɪ | — |
| 468 | hâlükârda | B | 10731 | var | hâlükârda | h a l y k a r d ˈ a | — |
| 469 | yabanî | B | 10918 | var | yabanî | j a b a n ˈ ɪ | — |
| 470 | ukalâ | B | 11040 | var | ukalâ | u k ˈ a ɫ a | — |
| 471 | tahminî | B | 11416 | var | tahminî | t a h m i n ˈ ɪ | — |
| 472 | manevî | B | 11547 | var | manevî | m a n e v ˈ ɪ | — |
| 473 | nihaî | B | 11567 | var | nihaî | n i h a ˈ ɪ | — |
| 474 | madenî | B | 11586 | var | madenî | m a d e n ˈ ɪ | — |
| 475 | istilâ | B | 11652 | var | istilâ | ɪ s t ˈ i ɫ a | — |
| 476 | metîn | B | 11707 | LastVowelDrop | metîn | m e t ˈ ɪ n | — |
| 477 | kâse | B | 11804 | var | kâse | k ˈ a s ɛ | — |
| 478 | medenî | B | 11849 | var | medenî | m e d e n ˈ ɪ | m e d e n ˈ i ː |
| 479 | taklidî | B | 11866 | var | taklidî | t a k l i d ˈ ɪ | — |
| 480 | keyfî | B | 12085 | var | keyfî | k ɛ j f ˈ ɪ | — |
| 481 | ruhanî | B | 12210 | var | ruhanî | r u h a n ˈ ɪ | — |
| 482 | mâni | B | 12390 | var | mâni | m a n ˈ ɪ | — |
| 483 | âciz | B | 12976 | LastVowelDrop | âciz | ˈ a d ʒ ɪ z | — |
| 484 | hakikî | B | 13179 | var | hakikî | h a k i k ˈ ɪ | — |
| 485 | âdem | B | 13463 | var | âdem | a d ˈ æ m | — |
| 486 | insanî | B | 13678 | var | insanî | ˈ ɪ n s a n ɪ | — |
| 487 | hâlbuki | B | 13835 | var | hâlbuki | h a ɫ b u k ˈ ɪ | — |
| 488 | flâş | B | 13952 | var | flâş | f ɫ ˈ a ʃ | — |
| 489 | cehennemî | B | 14003 | var | cehennemî | d ʒ e h æ n n e m ˈ ɪ | — |
| 490 | illâ | B | 14078 | var | illâ | ˈ ɪ l ɫ a | — |
| 491 | mahallî | B | 14294 | var | mahallî | m a h a ɫ l ˈ ɪ | — |
| 492 | şâhıs | B | 14491 | LastVowelDrop | şâhıs | ʃ a h ˈ ɯ s | — |
| 493 | pilâv | B | 14860 | var | pilâv | p i ɫ ˈ a v | — |
| 494 | dâhice | B | 15067 | var | dâhice | d a h ˈ i d ʒ ɛ | — |
| 495 | galâksi | B | 15622 | var | galâksi | ɡ a ɫ a k s ˈ ɪ | — |
| 496 | klâs | B | 15645 | var | klâs | k ɫ ˈ a s | — |
| 497 | villâ | B | 16094 | var | villâ | v ˈ ɪ l ɫ a | — |
| 498 | meslekî | B | 16121 | var | meslekî | m ɛ s l e k ˈ ɪ | — |
| 499 | âlâ | B | 16173 | var | âlâ | ˈ a ɫ a | — |
| 500 | telâffuz | B | 16893 | var | telâffuz | t e ɫ ˈ a f f ʊ z | — |
| 501 | hukukî | B | 16980 | var | hukukî | h u k u k ˈ ɪ | h u k u k ˈ i ː |
| 502 | telâş | B | 17144 | var | telâş | t e ɫ ˈ a ʃ | — |
| 503 | maî | B | 17168 | var | maî | m a ˈ ɪ | — |
| 504 | seferî | B | 17216 | var | seferî | s e f e ɾ ˈ ɪ | — |
| 505 | nikâh | B | 17572 | var | nikâh | n i k ˈ a h | — |
| 506 | tabelâ | B | 17580 | var | tabelâ | t a b ˈ e ɫ a | — |
| 507 | daimî | B | 17623 | var | daimî | d ˈ a i m ɪ | — |
| 508 | aklî | B | 17655 | var | aklî | a k l ˈ ɪ | — |
| 509 | rahîm | B | 17875 | LastVowelDrop | rahîm | r ˈ a h ɪ m | — |
| 510 | ilâve | B | 18081 | var | ilâve | i ɫ a v ˈ ɛ | — |
| 511 | cevizî | B | 18096 | var | cevizî | d ʒ ˈ e v i z ɪ | — |
| 512 | harekât | B | 18326 | NoVoicing | harekât | h a ɾ e k ˈ a t | — |
| 513 | yegâne | B | 18593 | var | yegâne | j e ɡ a n ˈ ɛ | — |
| 514 | günahkâr | B | 18712 | var | günahkâr | ɟ y n a h k ˈ a r | — |
| 515 | sunî | B | 18944 | var | sunî | s u n ˈ ɪ | — |
| 516 | kısmî | B | 19058 | var | kısmî | k ɯ s m ˈ ɪ | — |
| 517 | velâyet | B | 19097 | NoVoicing | velâyet | v e ɫ a j ˈ ɛ t | — |
| 518 | aşikâr | B | 19407 | var | aşikâr | a ʃ i k ˈ a r | — |
| 519 | zihnî | B | 19491 | var | zihnî | z ɪ h n ˈ ɪ | — |
| 520 | devrî | B | 20003 | var | devrî | d ɛ v r ˈ ɪ | — |
| 521 | teşkilât | B | 20746 | NoVoicing | teşkilât | t ɛ ʃ k i ɫ ˈ a t | — |
| 522 | parlâmento | B | 20911 | var | parlâmento | p a r ɫ a m æ n t ˈ ɔ | — |
| 523 | kâhin | B | 21237 | var | kâhin | k a h ˈ ɪ n | — |
| 524 | vâris | B | 21659 | var | vâris | v a ɾ ˈ ɪ s | — |
| 525 | âlem | B | 22012 | var | âlem | a l ˈ æ m | — |
| 526 | yâran | B | 22341 | var | yâran | j a ɾ ˈ a n | — |
| 527 | dâhilî | B | 23046 | var | dâhilî | d a h i l ˈ ɪ | d a ː h i l ˈ ɪ |
| 528 | mecazî | B | 23159 | var | mecazî | m e d ʒ a z ˈ ɪ | — |
| 529 | vâkıf | B | 23161 | LastVowelDrop | vâkıf | v a k ˈ ɯ f | — |
| 530 | klân | B | 23287 | var | klân | k ɫ ˈ a n | — |
| 531 | kamuflâj | B | 24714 | var | kamuflâj | k a m ʊ f ɫ ˈ a ʒ | — |
| 532 | tahlilî | B | 24800 | var | tahlilî | t a h l i l ˈ ɪ | — |
| 533 | kanunî | B | 25102 | var | kanunî | k a n u n ˈ ɪ | k a ː n u n ˈ i ː |
| 534 | idarî | B | 25170 | var | idarî | i d a ɾ ˈ ɪ | i d a ɾ ˈ i ː |
| 535 | haricî | B | 25202 | var | haricî | h a ɾ i d ʒ ˈ ɪ | — |
| 536 | cinsî | B | 25253 | var | cinsî | d ʒ ɪ n s ˈ ɪ | — |
| 537 | edebî | B | 26343 | var | edebî | e d e b ˈ ɪ | — |
| 538 | hâlihazırda | B | 26630 | var | hâlihazırda | h a l i h a z ɯ r d ˈ a | — |
| 539 | ekselâns | B | 26916 | var | ekselâns | ɛ k s e ɫ ˈ a n s | — |
| 540 | dâhiyane | B | 28018 | var | dâhiyane | d a h i j a n ˈ ɛ | — |
| 541 | umumî | B | 28183 | var | umumî | ˈ u m u m ɪ | — |
| 542 | kânunen | B | 28270 | var | kânunen | k a n u n ˈ æ n | k a ː n u n ˈ æ n |
| 543 | tadilât | B | 28481 | NoVoicing | tadilât | t a d i ɫ ˈ a t | — |
| 544 | tezgâh | B | 28623 | var | tezgâh | t ɛ z ɡ ˈ a h | — |
| 545 | mimarî | B | 28625 | var | mimarî | m i m a ɾ ˈ ɪ | — |
| 546 | hünkâr | B | 28684 | var | hünkâr | h ø n k ˈ a r | — |
| 547 | tesadüfî | B | 28895 | var | tesadüfî | t e s a d y f ˈ ɪ | — |
| 548 | demirî | B | 28956 | var | demirî | d e m i ɾ ˈ ɪ | — |
| 549 | muhafazakâr | B | 29390 | var | muhafazakâr | m u h a f a z a k ˈ a r | — |
| 550 | bir | C | 1 | var | — | b ˈ ɪ r | — |
| 551 | için | C | 5 | var | — | i t ʃ ˈ ɪ n | — |
| 552 | ben | C | 9 | var | — | b ˈ æ n | — |
| 553 | çok | C | 10 | Voicing | — | t ʃ ˈ ɔ k | — |
| 554 | evet | C | 12 | var | — | e v ˈ ɛ t | — |
| 555 | var | C | 13 | var | — | v ˈ a r | — |
| 556 | değil | C | 16 | var | — | d ˈ e j ɪ l | — |
| 557 | şey | C | 17 | var | — | ʃ ˈ ɛ j | — |
| 558 | hayır | C | 18 | LastVowelDrop | — | h a j ˈ ɯ r | — |
| 559 | daha | C | 19 | var | — | d a h ˈ a | — |
| 560 | sen | C | 20 | var | — | s ˈ æ n | — |
| 561 | kadar | C | 21 | var | — | k a d ˈ a r | — |
| 562 | bana | C | 22 | — | — | b a n ˈ a | — |
| 563 | gibi | C | 23 | var | — | ɟ i b ˈ ɪ | — |
| 564 | yok | C | 24 | NoVoicing, Voicing | — | j ˈ ɔ k | — |
| 565 | bunu | C | 25 | — | — | b u n ˈ ʊ | — |
| 566 | onu | C | 26 | — | — | o n ˈ ʊ | — |
| 567 | iyi | C | 27 | var | — | i j ˈ i | — |
| 568 | tamam | C | 28 | var | — | t a m ˈ a m | — |
| 569 | beni | C | 29 | — | — | b e n ˈ ɪ | — |
| 570 | seni | C | 30 | — | — | s e n ˈ ɪ | — |
| 571 | her | C | 31 | var | — | h ˈ ɛ r | — |
| 572 | benim | C | 32 | — | — | b e n ˈ ɪ m | — |
| 573 | sana | C | 33 | — | — | s a n ˈ a | — |
| 574 | neden | C | 36 | var | — | n e d ˈ æ n | — |
| 575 | zaman | C | 37 | var | — | z a m ˈ a n | — |
| 576 | sadece | C | 38 | var | — | s a d ˈ e d ʒ ɛ | — |
| 577 | senin | C | 39 | — | — | s e n ˈ ɪ n | — |
| 578 | burada | C | 40 | — | — | b ˈ u ɾ a d a | — |
| 579 | olduğunu | C | 41 | — | — | ɔ ɫ d u ː n ˈ ʊ | — |
| 580 | nasıl | C | 42 | var | — | n a s ˈ ɯ ɫ | — |
| 581 | hiç | C | 43 | var | — | h ˈ ɪ t ʃ | — |
| 582 | sonra | C | 44 | var | — | s ɔ n r ˈ a | — |
| 583 | şimdi | C | 45 | var | — | ʃ ɪ m d ˈ ɪ | — |
| 584 | öyle | C | 47 | var | — | ˈ œ j l e | — |
| 585 | misin | C | 50 | — | — | m i s ˈ ɪ n | — |
| 586 | önce | C | 51 | var | — | ˈ œ n d ʒ ɛ | — |
| 587 | biraz | C | 52 | var | — | b i ɾ ˈ a z | — |
| 588 | hadi | C | 53 | var | — | h a d ˈ ɪ | — |
| 589 | güzel | C | 54 | var | — | ɟ y z ˈ æ l | — |
| 590 | musun | C | 55 | — | — | m u s ˈ ʊ n | — |
| 591 | oldu | C | 56 | — | — | ɔ ɫ d ˈ ʊ | — |
| 592 | yani | C | 57 | var | — | j a n ˈ ɪ | — |
| 593 | böyle | C | 58 | var | — | b ˈ œ j l ɛ | — |
| 594 | ona | C | 59 | — | — | o n ˈ a | — |
| 595 | lütfen | C | 61 | var | — | l ˈ ø t f æ n | — |
| 596 | onun | C | 62 | — | — | o n ˈ ʊ n | — |
| 597 | bile | C | 63 | var | — | b ˈ i l ɛ | — |
| 598 | bak | C | 64 | — | — | b ˈ a k | — |
| 599 | çünkü | C | 65 | var | — | t ʃ ø n k ˈ ø | — |
| 600 | peki | C | 66 | var | — | p e k ˈ ɪ | — |
| 601 | eğer | C | 67 | var | — | e j ˈ ɛ r | — |
| 602 | artık | C | 68 | var | — | a r t ˈ ɯ k | — |
| 603 | gerçekten | C | 69 | var | — | ɟ ɛ r t ʃ ɛ k t ˈ æ n | — |
| 604 | geri | C | 70 | var | — | ɟ e ɾ ˈ ɪ | — |
| 605 | biliyorum | C | 71 | — | — | b i l ˈ i j o ɾ ʊ m | — |
| 606 | istiyorum | C | 72 | — | — | ɪ s t ˈ i j o ɾ ʊ m | — |
| 607 | kim | C | 73 | var | — | k ˈ ɪ m | — |
| 608 | olarak | C | 74 | — | — | o ɫ a ɾ ˈ a k | — |
| 609 | başka | C | 75 | var | — | b a ʃ k ˈ a | — |
| 610 | belki | C | 76 | var | — | b æ l k ˈ ɪ | — |
| 611 | tek | C | 77 | var | — | t ˈ ɛ k | — |
| 612 | doğru | C | 78 | var | — | d o ː ɾ ˈ ʊ | — |
| 613 | büyük | C | 79 | var | — | b y j ˈ ø k | — |
| 614 | olan | C | 80 | — | — | o ɫ ˈ a n | — |
| 615 | biri | C | 81 | var | — | b i ɾ ˈ ɪ | — |
| 616 | olur | C | 82 | var | — | o ɫ ˈ ʊ r | — |
| 617 | buraya | C | 83 | — | — | b ˈ u ɾ a j a | — |
| 618 | bay | C | 84 | var | — | b ˈ a j | — |
| 619 | olacak | C | 86 | — | — | o ɫ a d ʒ ˈ a k | — |
| 620 | adam | C | 87 | var | — | a d ˈ a m | — |
| 621 | ile | C | 88 | var | — | ˌ i l ɛ | — |
| 622 | hiçbir | C | 89 | var | — | h ɪ t ʃ b ˈ ɪ r | — |
| 623 | biz | C | 90 | var | — | b ˈ ɪ z | — |
| 624 | yardım | C | 91 | var | — | j a r d ˈ ɯ m | — |
| 625 | demek | C | 92 | var | — | d e m ˈ ɛ k | — |
| 626 | hey | C | 93 | var | — | h ˈ ɛ j | — |
| 627 | sanırım | C | 94 | — | — | s a n ˈ ɯ ɾ ɯ m | — |
| 628 | bilmiyorum | C | 96 | — | — | b ɪ l m ˈ i j o ɾ ʊ m | — |
| 629 | bunun | C | 97 | — | — | b u n ˈ ʊ n | — |
| 630 | tüm | C | 98 | var | — | t ˈ ø m | — |
| 631 | teşekkürler | C | 99 | — | — | t e ʃ e k ː ø r l ˈ ɛ r | — |
| 632 | fazla | C | 100 | var | — | f ˈ a z ɫ a | — |
| 633 | yeni | C | 101 | var | — | j e n ˈ ɪ | — |
| 634 | gün | C | 102 | var | — | ɟ ˈ ø n | — |
| 635 | ederim | C | 103 | — | — | e d ˈ e ɾ ɪ m | — |
| 636 | nerede | C | 104 | var | — | n ˈ e ɾ e d ɛ | — |
| 637 | tanrım | C | 105 | — | — | t ˈ a n r ɯ m | — |
| 638 | şeyi | C | 107 | — | — | ʃ e j ˈ ɪ | — |
| 639 | merhaba | C | 108 | var | — | m ˈ ɛ r h a b a | — |
| 640 | efendim | C | 109 | var | — | e f æ n d ˈ ɪ m | — |
| 641 | orada | C | 110 | — | — | ˈ o ɾ a d a | — |
| 642 | son | C | 111 | var | — | s ˈ ɔ n | — |
| 643 | kötü | C | 112 | var | — | k œ t ˈ ø | — |
| 644 | şeyler | C | 113 | — | — | ʃ ɛ j l ˈ ɛ r | — |
| 645 | gece | C | 114 | var | — | ɟ ˈ e d ʒ ɛ | — |
| 646 | biliyor | C | 115 | — | — | b i l ˈ i j ɔ r | — |
| 647 | sorun | C | 116 | var | — | s o ɾ ˈ ʊ n | — |
| 648 | iki | C | 117 | var | — | i k ˈ ɪ | — |
| 649 | harika | C | 118 | var | — | h a ɾ i k ˈ a | — |
| 650 | gerek | C | 119 | var | — | ɟ e ɾ ˈ ɛ k | — |
| 651 | tam | C | 121 | var | — | t ˈ a m | — |
| 652 | bütün | C | 123 | var | — | b y t ˈ ø n | — |
| 653 | diye | C | 124 | var | — | d i j ˈ ɛ | — |
| 654 | hemen | C | 125 | var | — | h e m ˈ æ n | — |
| 655 | siz | C | 126 | var | — | s ˈ ɪ z | — |
| 656 | üzgünüm | C | 127 | — | — | ø z ɟ ˈ y n ø m | — |
| 657 | olabilir | C | 129 | — | — | o ɫ a b i l ˈ ɪ r | — |
| 658 | olsun | C | 131 | — | — | ɔ ɫ s ˈ ʊ n | — |
| 659 | küçük | C | 132 | var | — | k y t ʃ ˈ ø k | — |
| 660 | size | C | 133 | — | — | s i z ˈ ɛ | — |
| 661 | yüzden | C | 134 | — | — | j ø z d ˈ æ n | — |
| 662 | bayan | C | 135 | var | — | b a j ˈ a n | — |
| 663 | aynı | C | 136 | var | — | a j n ˈ ɯ | — |
| 664 | teşekkür | C | 137 | var | — | t e ʃ e k ː ˈ ø r | — |
| 665 | hakkında | C | 138 | var | — | h a k ː ɯ n d ˈ a | — |
| 666 | gel | C | 140 | — | — | ɟ ˈ æ l | — |
| 667 | onları | C | 141 | — | — | ɔ n ɫ ˈ a ɾ ɯ | — |
| 668 | kendi | C | 142 | var | — | k æ n d ˈ ɪ | — |
| 669 | kız | C | 143 | var | — | k ˈ ɯ z | — |
| 670 | nin | C | 144 | — | — | n ˈ ɪ n | — |
| 671 | devam | C | 145 | var | — | d e v ˈ a m | — |
| 672 | bize | C | 146 | — | — | b i z ˈ ɛ | — |
| 673 | oluyor | C | 148 | — | — | o ɫ ˈ u j ɔ r | — |
| 674 | ver | C | 149 | — | — | v ˈ ɛ r | — |
| 675 | izin | C | 150 | LastVowelDrop | — | i z ˈ ɪ n | — |
| 676 | bizi | C | 152 | — | — | b i z ˈ ɪ | — |
| 677 | buna | C | 153 | — | — | b u n ˈ a | — |
| 678 | anne | C | 154 | var | — | a n n ˈ ɛ | — |
| 679 | selam | C | 155 | var | — | s e ɫ ˈ a m | — |
| 680 | vardı | C | 156 | — | — | v a r d ˈ ɯ | — |
| 681 | geldi | C | 157 | — | — | ɟ æ l d ˈ ɪ | — |
| 682 | bizim | C | 158 | — | — | b ˈ i z ɪ m | — |
| 683 | sizi | C | 159 | — | — | s i z ˈ ɪ | — |
| 684 | dur | C | 160 | — | — | d ˈ ʊ r | — |
| 685 | kimse | C | 161 | var | — | k ˈ ɪ m s ɛ | — |
| 686 | göre | C | 162 | var | — | ɟ œ ɾ ˈ ɛ | — |
| 687 | asla | C | 163 | var | — | ˈ a s ɫ a | — |
| 688 | özür | C | 164 | LastVowelDrop | — | œ z ˈ ø r | — |
| 689 | seninle | C | 165 | — | — | s e n ˈ ɪ n l ɛ | — |
| 690 | baba | C | 166 | var | — | b a b ˈ a | — |
| 691 | değilim | C | 167 | — | — | d ˈ e j i l ɪ m | — |
| 692 | aslında | C | 168 | var | — | a s ɫ ɯ n d ˈ a | — |
| 693 | önemli | C | 169 | — | — | œ n æ m l ˈ ɪ | — |
| 694 | tekrar | C | 170 | var | — | t ɛ k r ˈ a r | — |
| 695 | git | C | 171 | — | — | ɟ ˈ ɪ t | — |
| 696 | nın | C | 172 | — | — | n ˈ ɯ n | — |
| 697 | yoksa | C | 173 | var | — | j ˌ ɔ k s a | — |
| 698 | işte | C | 175 | var | — | ɪ ʃ t ˈ ɛ | — |
| 699 | benimle | C | 177 | — | — | b e n ˈ ɪ m l ɛ | — |
| 700 | içinde | C | 178 | var | — | i t ʃ ɪ n d ˈ ɛ | — |
| 701 | mısın | C | 179 | — | — | m ɯ s ˈ ɯ n | — |
| 702 | yine | C | 180 | var | — | j i n ˈ ɛ | — |
| 703 | bence | C | 182 | var | — | b ˈ æ n d ʒ ɛ | — |
| 704 | şekilde | C | 183 | — | — | ʃ e k ɪ l d ˈ ɛ | — |
| 705 | olmak | C | 184 | Aorist_I | — | ɔ ɫ m ˈ a k | — |
| 706 | bugün | C | 185 | var | — | b u ɡ ˈ ø n | — |
| 707 | söyle | C | 186 | — | — | s ˈ œ j l ɛ | — |
| 708 | birlikte | C | 187 | var | — | b ɪ r l ɪ k t ˈ ɛ | — |
| 709 | olmaz | C | 188 | var | — | ɔ ɫ m ˈ a z | — |
| 710 | uzun | C | 190 | var | — | u z ˈ ʊ n | — |
| 711 | lazım | C | 191 | var | — | ɫ ˈ a z ɯ m | l ˈ a ː z ɯ m |
| 712 | biliyorsun | C | 192 | — | — | b i l i j ɔ r s ˈ ʊ n | — |
| 713 | zaten | C | 193 | var | — | z a t ˈ æ n | — |
| 714 | para | C | 194 | var | — | p a ɾ ˈ a | — |
| 715 | ilk | C | 195 | var | — | ˈ ɪ l k | — |
| 716 | geliyor | C | 196 | — | — | ɟ e l ˈ i j ɔ r | — |
| 717 | onunla | C | 197 | — | — | o n ˈ ʊ n ɫ a | — |
| 718 | gerçek | C | 198 | var | — | ɟ ɛ r t ʃ ˈ ɛ k | — |
| 719 | dostum | C | 199 | — | — | d ˈ ɔ s t ʊ m | — |
| 720 | bakalım | C | 201 | — | — | b a k a ɫ ˈ ɯ m | — |
| 721 | onlar | C | 202 | — | — | ɔ n ɫ ˈ a r | — |
| 722 | haydi | C | 203 | var | — | h a j d ˈ ɪ | — |
| 723 | birkaç | C | 204 | var | — | b ɪ r k ˈ a t ʃ | — |
| 724 | emin | C | 205 | var | — | e m ˈ ɪ n | — |
| 725 | herkes | C | 207 | var | — | h ɛ r k ˈ ɛ s | — |
| 726 | dakika | C | 208 | var | — | d a k i k ˈ a | — |
| 727 | söyledi | C | 210 | — | — | s ˈ œ j l e d ɪ | — |
| 728 | istiyorsun | C | 211 | — | — | ɪ s t i j ɔ r s ˈ ʊ n | — |
| 729 | pek | C | 212 | var | — | p ˈ ɛ k | — |
| 730 | ister | C | 213 | var | — | ɪ s t ˈ ɛ r | — |
| 731 | yapıyorsun | C | 215 | — | — | j a p ɯ j ɔ r s ˈ ʊ n | — |
| 732 | eve | C | 216 | — | — | e v ˈ ɛ | — |
| 733 | yıl | C | 217 | var | — | j ˈ ɯ ɫ | — |
| 734 | miyim | C | 218 | — | — | m ˈ i j ɪ m | — |
| 735 | çocuk | C | 219 | var | — | t ʃ o d ʒ ˈ ʊ k | — |
| 736 | yer | C | 220 | var | — | j ˈ ɛ r | — |
| 737 | hep | C | 221 | var | — | h ˈ ɛ p | — |
| 738 | şunu | C | 222 | — | — | ʃ u n ˈ ʊ | — |
| 739 | neler | C | 223 | var | — | n e l ˈ ɛ r | — |
| 740 | dilerim | C | 224 | — | — | d i l ˈ e ɾ ɪ m | — |
| 741 | bekle | C | 225 | — | — | b ˈ ɛ k l ɛ | — |
| 742 | sizin | C | 226 | — | — | s i z ˈ ɪ n | — |
| 743 | bırak | C | 227 | — | — | b ɯ ɾ ˈ a k | — |
| 744 | olduğu | C | 228 | — | — | ɔ ɫ d ˈ ʊ ː | — |
| 745 | ilgili | C | 229 | var | — | ɪ l ɟ i l ˈ ɪ | — |
| 746 | gidelim | C | 230 | — | — | ɟ i d e l ˈ ɪ m | — |
| 747 | yere | C | 231 | — | — | j e ɾ ˈ ɛ | — |
| 748 | etmek | C | 232 | Aorist_A, Voicing | — | ɛ t m ˈ ɛ k | — |
| 749 | dan | C | 234 | NoSuffix | — | d ˈ a n | — |
| 750 | mahkeme | D | 1930 | var | — | m a h k ˈ e m ɛ | — |
| 751 | dava | D | 970 | var | — | d a v ˈ a | — |
| 752 | davacı | D | 19646 | var | — | d a v a d ʒ ˈ ɯ | — |
| 753 | davalı | D | 18625 | var | — | d a v a ɫ ˈ ɯ | — |
| 754 | karar | D | 346 | var | — | k a ɾ ˈ a r | — |
| 755 | hüküm | D | 5413 | LastVowelDrop | — | h ˈ y k ø m | — |
| 756 | temyiz | D | 16716 | var | — | t ˈ æ m j ɪ z | — |
| 757 | istinaf | D | — | var | — | ɪ s t i n ˈ a f | — |
| 758 | tebligat | D | — | NoVoicing | — | t ɛ b l i ɡ ˈ a t | — |
| 759 | duruşma | D | 6654 | var | — | d u ɾ ˈ ʊ ʃ m a | — |
| 760 | celse | D | — | var | — | d ʒ ˈ æ l s ɛ | — |
| 761 | tanık | D | 2078 | var | — | t a n ˈ ɯ k | — |
| 762 | bilirkişi | D | — | var | — | b i l ɪ r k i ʃ ˈ ɪ | — |
| 763 | keşif | D | 5936 | LastVowelDrop | — | k e ʃ ˈ ɪ f | — |
| 764 | delil | D | 3863 | var | — | d e l ˈ ɪ l | — |
| 765 | ispat | D | 9984 | NoVoicing | — | ɪ s p ˈ a t | — |
| 766 | ikrar | D | — | var | — | ɪ k r ˈ a r | — |
| 767 | yemin | D | 689 | var | — | j e m ˈ ɪ n | — |
| 768 | sulh | D | 33584 | var | — | s ˈ ʊ ɫ h | s ˈ y ː l h |
| 769 | vekil | D | 11915 | var | — | v e k ˈ ɪ l | — |
| 770 | avukat | D | 1402 | NoVoicing | — | a v u k ˈ a t | — |
| 771 | savcı | D | 4832 | var | — | s a v d ʒ ˈ ɯ | — |
| 772 | madde | D | 3158 | var | — | m a d ː ˈ ɛ | — |
| 773 | fıkra | D | 20262 | var | — | f ɯ k r ˈ a | — |
| 774 | bent | D | 43793 | Voicing | — | b ˈ æ n t | — |
| 775 | yönetmelik | D | — | var | — | j œ n ˈ ɛ t m e l ɪ k | — |
| 776 | tüzük | D | — | var | — | t y z ˈ ø k | — |
| 777 | kararname | D | — | var | — | k a ɾ a r n ˈ a m ɛ | — |
| 778 | genelge | D | — | var | — | ɟ e n æ l ɡ ˈ ɛ | — |
| 779 | içtihat | D | — | var | — | ɪ t ʃ t i h ˈ a t | — |
| 780 | bozma | D | 13139 | — | — | b ˈ ɔ z m a | — |
| 781 | onama | D | — | — | — | o n ˈ a m a | — |
| 782 | kesinleşme | D | — | — | — | k e s ɪ n l ˈ ɛ ʃ m ɛ | — |
| 783 | infaz | D | 10125 | var | — | ɪ n f ˈ a z | — |
| 784 | tutuklama | D | 6906 | — | — | t u t ˈ ʊ k ɫ a m a | — |
| 785 | gözaltı | D | 25980 | var | — | ɟ œ z a ɫ t ˈ ɯ | — |
| 786 | ceza | D | 2206 | var | — | d ʒ e z ˈ a | — |
| 787 | hapis | D | 4217 | LastVowelDrop | — | h a p ˈ ɪ s | — |
| 788 | tazminat | D | 11968 | NoVoicing | — | t a z m i n ˈ a t | — |
| 789 | nafaka | D | 22066 | var | — | n a f a k ˈ a | — |
| 790 | boşanma | D | 5185 | var | — | b o ʃ ˈ a n m a | — |
| 791 | evlilik | D | 1591 | var | — | ɛ v l i l ˈ ɪ k | — |
| 792 | miras | D | 6549 | var | — | m i ɾ ˈ a s | — |
| 793 | vasiyet | D | 20919 | NoVoicing | — | v a s i j ˈ ɛ t | — |
| 794 | mirasçı | D | — | — | — | m i ɾ a s t ʃ ˈ ɯ | — |
| 795 | tereke | D | — | var | — | t e ɾ e k ˈ ɛ | — |
| 796 | tapu | D | 37945 | var | — | t a p ˈ ʊ | — |
| 797 | ipotek | D | 22246 | var | — | i p o t ˈ ɛ k | — |
| 798 | haciz | D | 35371 | LastVowelDrop | — | h ˈ a d ʒ ɪ z | — |
| 799 | icra | D | 21190 | var | — | ɪ d ʒ r ˈ a | — |
| 800 | konkordato | D | — | var | — | k ɔ n k ɔ r d a t ˈ ɔ | — |
| 801 | alacak | D | 1253 | var | — | a ɫ a d ʒ ˈ a k | — |
| 802 | borç | D | 3264 | Voicing | — | b ˈ ɔ r t ʃ | — |
| 803 | borçlu | D | 4478 | — | — | b ɔ r t ʃ ɫ ˈ ʊ | — |
| 804 | alacaklı | D | — | — | — | a ɫ a d ʒ a k ɫ ˈ ɯ | — |
| 805 | kefil | D | 14688 | var | — | k e f ˈ ɪ l | — |
| 806 | kefalet | D | 12152 | NoVoicing | — | k e f a l ˈ ɛ t | — |
| 807 | teminat | D | 21714 | NoVoicing | — | t e m i n ˈ a t | — |
| 808 | sözleşme | D | 8697 | var | — | s œ z l ˈ ɛ ʃ m ɛ | — |
| 809 | taraf | D | 2814 | var | — | t a ɾ ˈ a f | — |
| 810 | süre | D | 467 | var | — | s y ɾ ˈ ɛ | — |
| 811 | zamanaşımı | D | — | — | — | z a m a n ˈ a ʃ ɯ m ɯ | — |
| 812 | kusur | D | 16023 | var | — | k u s ˈ ʊ r | — |
| 813 | kasıt | D | — | LastVowelDrop | — | k a s ˈ ɯ t | — |
| 814 | taksir | D | — | var | — | t a k s ˈ ɪ r | — |
| 815 | suç | D | 884 | var | — | s ˈ ʊ t ʃ | — |
| 816 | fail | D | 28757 | var | — | f a ˈ ɪ l | — |
| 817 | mağdur | D | 20199 | var | — | m ˈ a ː d ʊ r | — |
| 818 | şüpheli | D | 1601 | — | — | ʃ ø p h e l ˈ ɪ | — |
| 819 | sanık | D | 10438 | var | — | s a n ˈ ɯ k | — |
| 820 | iddianame | D | — | var | — | i d ː i a n ˈ a m ɛ | — |
| 821 | savunma | D | 1860 | var | — | s a v ˈ ʊ n m a | — |
| 822 | itiraz | D | 7216 | var | — | i t i ɾ ˈ a z | i ː t i ɾ ˈ a z |
| 823 | ihbar | D | 4858 | var | — | ɪ h b ˈ a r | — |
| 824 | soruşturma | D | 3220 | — | — | s o ɾ ˈ ʊ ʃ t ʊ r m a | — |
| 825 | kovuşturma | D | — | — | — | k o v ˈ ʊ ʃ t ʊ r m a | — |
| 826 | yargılama | D | 12075 | — | — | j a r ɡ ˈ ɯ ɫ a m a | — |
| 827 | yargıtay | D | — | — | — | j a r ɡ ɯ t ˈ a j | — |
| 828 | danıştay | D | — | — | — | d a n ɯ ʃ t ˈ a j | — |
| 829 | anayasa | D | 20652 | var | — | a n a j ˈ a s a | — |
| 830 | idare | D | 1848 | var | — | i d a ɾ ˈ ɛ | — |
| 831 | vergi | D | 3822 | var | — | v ɛ r ɡ ˈ ɪ | — |
| 832 | harç | D | 49688 | Voicing | — | h ˈ a r t ʃ | — |
| 833 | noter | D | 40094 | var | — | n o t ˈ ɛ r | — |
| 834 | tescil | D | — | var | — | t ɛ s d ʒ ˈ ɪ l | — |
| 835 | ticaret | D | 4835 | NoVoicing | — | t i d ʒ a ɾ ˈ ɛ t | — |
| 836 | şirket | D | 1950 | NoVoicing | — | ʃ ɪ r k ˈ ɛ t | — |
| 837 | ortak | D | 1160 | var | — | ɔ r t ˈ a k | — |
| 838 | anonim | D | 21476 | var | — | a n ˈ o n ɪ m | — |
| 839 | limited | D | — | var | — | l i m i t ˈ ɛ d | — |
| 840 | kooperatif | D | — | var | — | k o o p e ɾ a t ˈ ɪ f | — |
| 841 | rekabet | D | 7450 | NoVoicing | — | r e k a b ˈ ɛ t | — |
| 842 | tüketici | D | 38550 | — | — | t y k e t i d ʒ ˈ ɪ | — |
| 843 | marka | D | 6985 | var | — | m a r k ˈ a | — |
| 844 | patent | D | 27060 | NoVoicing | — | p a t ˈ æ n t | — |
| 845 | telif | D | 21877 | var | — | t e l ˈ ɪ f | — |
| 846 | işçi | D | 6848 | var | — | ɪ ʃ t ʃ ˈ ɪ | — |
| 847 | işveren | D | — | var | — | ɪ ʃ v e ɾ ˈ æ n | — |
| 848 | kıdem | D | — | var | — | k ɯ d ˈ æ m | — |
| 849 | sigorta | D | 3277 | var | — | s i ɡ ɔ r t ˈ a | — |
| 850 | prim | D | 31610 | var | — | p r ˈ ɪ m | — |
| 851 | emeklilik | D | 10477 | — | — | e m ɛ k l i l ˈ ɪ k | — |
| 852 | ikamet | D | 27932 | NoVoicing | — | i k a m ˈ ɛ t | i c a ː m ˈ ɛ t |
| 853 | vatandaşlık | D | 21704 | — | — | v a t a n d a ʃ ɫ ˈ ɯ k | — |
| 854 | yabancı | D | 1536 | var | — | j a b a n d ʒ ˈ ɯ | — |
| 855 | iltica | D | 41004 | var | — | ɪ l t i d ʒ ˈ a | — |
| 856 | tenfiz | D | — | — | — | t ˈ æ n f ɪ z | — |
| 857 | tanıma | D | 11221 | — | — | t a n ˈ ɯ m a | — |
| 858 | esas | D | 3948 | var | — | e s ˈ a s | — |
| 859 | görev | D | 1153 | var | — | ɟ œ ɾ ˈ ɛ v | — |
| 860 | yetki | D | 6000 | var | — | j ɛ t k ˈ ɪ | — |
| 861 | yetkisizlik | D | — | — | — | j ɛ t k ˈ i s ɪ z l ɪ k | — |
| 862 | görevsizlik | D | — | — | — | ɟ œ ɾ ˈ ɛ v s ɪ z l ɪ k | — |
| 863 | birleştirme | D | 41560 | — | — | b ɪ r l ˈ ɛ ʃ t ɪ r m ɛ | — |
| 864 | ıslah | D | 23759 | var | — | ɯ s ɫ ˈ a h | — |
| 865 | tahkim | D | — | var | — | t ˈ a h k ɪ m | — |
| 866 | hakem | D | 13628 | var | — | h a k ˈ æ m | — |
| 867 | arabulucu | D | 35834 | — | — | a ɾ a b u ɫ u d ʒ ˈ ʊ | — |
| 868 | uzlaşma | D | 17531 | — | — | ʊ z ɫ ˈ a ʃ m a | — |
| 869 | şerh | D | — | var | — | ʃ ˈ ɛ r h | — |
| 870 | kayıt | D | 1807 | LastVowelDrop, NoVoicing, Voicing | — | k a j ˈ ɯ t | — |
| 871 | tespit | D | 2059 | NoVoicing | — | t ɛ s p ˈ ɪ t | — |
| 872 | tedbir | D | 16963 | var | — | t ɛ d b ˈ ɪ r | — |
| 873 | temlik | D | — | NoVoicing | — | t æ m l ˈ ɪ k | — |
| 874 | devir | D | 17161 | LastVowelDrop | — | d e v ˈ ɪ r | — |
| 875 | kira | D | 3331 | var | — | k i ɾ ˈ a | — |
| 876 | kiracı | D | 21293 | — | — | k i ɾ a d ʒ ˈ ɯ | — |
| 877 | mülkiyet | D | 29187 | NoVoicing | — | m ø l k i j ˈ ɛ t | — |
| 878 | zilyet | D | — | var | — | z ɪ l j ˈ ɛ t | — |
| 879 | irtifak | D | — | NoVoicing | — | ɪ r t i f ˈ a k | — |
| 880 | rehin | D | 6606 | var | — | r e h ˈ ɪ n | — |
| 881 | vesayet | D | — | NoVoicing | — | v e s a j ˈ ɛ t | — |
| 882 | kayyum | D | — | var | — | k ˈ a j j ʊ m | — |
| 883 | ehliyet | D | 11483 | NoVoicing | — | ɛ h l i j ˈ ɛ t | — |
| 884 | temsil | D | 2762 | var | — | t æ m s ˈ ɪ l | — |
| 885 | rıza | D | 16846 | var | — | r ɯ z ˈ a | — |
| 886 | kanıt | D | 1430 | NoVoicing | — | k a n ˈ ɯ t | — |
| 887 | savcılık | D | 11360 | — | — | s a v d ʒ ɯ ɫ ˈ ɯ k | — |
| 888 | düzeltme | D | 14849 | — | — | d y z ˈ æ l t m ɛ | — |
| 889 | karşıoy | D | — | — | — | k a r ʃ ɯ ˈ ɔ j | — |
| 890 | gerekçe | D | 20278 | var | — | ɟ e ɾ ˈ ɛ k t ʃ ɛ | — |
| 891 | sonuç | D | 1956 | var | — | s o n ˈ ʊ t ʃ | — |
| 892 | makbuz | D | 33743 | var | — | m ˈ a k b ʊ z | — |
| 893 | tutanak | D | — | var | — | t u t a n ˈ a k | — |
| 894 | zabıt | D | — | LastVowelDrop | — | z a b ˈ ɯ t | — |
| 895 | celp | D | 34869 | Voicing | — | d ʒ ˈ æ l p | — |
| 896 | müzekkere | D | — | var | — | m y z e k ː e ɾ ˈ ɛ | — |
| 897 | tahliye | D | 2815 | var | — | t a h l i j ˈ ɛ | — |
| 898 | ödeme | D | 1898 | — | — | œ d ˈ e m ɛ | — |
| 899 | faiz | D | 17857 | var | — | f ˈ a ɪ z | — |
| 900 | temerrüt | D | — | var | — | t e m ɛ r r ˈ ø t | — |
| 901 | ifa | D | — | var | — | i f ˈ a | — |
| 902 | ibra | D | — | var | — | ɪ b r ˈ a | — |
| 903 | defter | D | 14163 | var | — | d ɛ f t ˈ ɛ r | — |
| 904 | bilanço | D | — | var | — | b i ɫ a n t ʃ ˈ ɔ | — |
| 905 | çek | D | 773 | var | — | t ʃ ˈ ɛ k | — |
| 906 | senet | D | 38774 | var | — | s e n ˈ ɛ t | — |
| 907 | poliçe | D | — | var | — | p o l ˈ i t ʃ ɛ | — |
| 908 | bono | D | 27930 | var | — | b o n ˈ ɔ | — |
| 909 | zarar | D | 564 | var | — | z a ɾ ˈ a r | — |
| 910 | haksız | D | 3698 | — | — | h ˈ a k s ɯ z | — |
| 911 | fiil | D | 40009 | var | — | f i ˈ ɪ l | — |
| 912 | sorumluluk | D | 3746 | var | — | s o ɾ ʊ m ɫ u ɫ ˈ ʊ k | — |
| 913 | bildirim | D | 43453 | var | — | b ˈ ɪ l d i ɾ ɪ m | — |
| 914 | başvuru | D | 10612 | var | — | b a ʃ v u ɾ ˈ ʊ | — |
| 915 | dilekçe | D | 20811 | var | — | d i l ˈ ɛ k t ʃ ɛ | — |
| 916 | cevap | D | 430 | var | — | d ʒ e v ˈ a p | — |
| 917 | beyan | D | 15761 | var | — | b e j ˈ a n | — |
| 918 | ibraz | D | — | var | — | ɪ b r ˈ a z | — |
| 919 | iade | D | 5408 | var | — | i a d ˈ ɛ | — |
| 920 | Adana | E | — | — | — | a d ˈ a n a | — |
| 921 | Adıyaman | E | — | — | — | a d ˈ ɯ j a m a n | — |
| 922 | Afyonkarahisar | E | — | — | — | a f j ɔ n k a ɾ ˈ a h i s a r | — |
| 923 | Ağrı | E | 4631 | var | — | ˈ a ː ɾ ɯ | — |
| 924 | Aksaray | E | — | — | — | ˈ a k s a ɾ a j | — |
| 925 | Amasya | E | — | — | — | a m ˈ a s j a | — |
| 926 | Ankara | E | 26086 | — | — | ˈ a n k a ɾ a | — |
| 927 | Antalya | E | — | — | — | a n t ˈ a ɫ j a | — |
| 928 | Ardahan | E | — | — | — | a r d a h ˈ a n | — |
| 929 | Artvin | E | — | — | — | ˈ a r t v ɪ n | — |
| 930 | Aydın | E | 27855 | var | — | ˈ a j d ɯ n | — |
| 931 | Balıkesir | E | — | — | — | b a ɫ ɯ k e s ˈ ɪ r | — |
| 932 | Bartın | E | — | — | — | b ˈ a r t ɯ n | — |
| 933 | Batman | E | 6597 | var | — | b ˈ a t m a n | — |
| 934 | Bayburt | E | — | — | — | b ˈ a j b ʊ r t | — |
| 935 | Bilecik | E | — | — | — | b i l e d ʒ ˈ ɪ k | — |
| 936 | Bingöl | E | — | — | — | b ˈ ɪ n ɟ œ l | — |
| 937 | Bitlis | E | — | — | — | b ˈ ɪ t l ɪ s | — |
| 938 | Bolu | E | — | — | — | b ˈ o ɫ ʊ | — |
| 939 | Burdur | E | — | — | — | b ˈ ʊ r d ʊ r | — |
| 940 | Bursa | E | — | — | — | b ˈ ʊ r s a | — |
| 941 | Çanakkale | E | — | — | — | t ʃ a n ˈ a k ː a l ɛ | — |
| 942 | Çankırı | E | — | — | — | t ʃ ˈ a n k ɯ ɾ ɯ | — |
| 943 | Çorum | E | — | — | — | t ʃ ˈ o ɾ ʊ m | — |
| 944 | Denizli | E | — | — | — | d e n ˈ ɪ z l ɪ | — |
| 945 | Diyarbakır | E | — | — | — | d i j a r b a k ˈ ɯ r | — |
| 946 | Düzce | E | — | var | — | d ˈ ø z d ʒ ɛ | — |
| 947 | Edirne | E | — | — | — | e d ˈ ɪ r n ɛ | — |
| 948 | Elazığ | E | — | — | — | e ɫ a z ˈ ɯ ɯ | — |
| 949 | Erzincan | E | — | — | — | ɛ r z ɪ n d ʒ ˈ a n | — |
| 950 | Erzurum | E | — | — | — | ˈ ɛ r z u ɾ ʊ m | — |
| 951 | Eskişehir | E | — | — | — | ɛ s k i ʃ e h ˈ ɪ r | — |
| 952 | Gaziantep | E | — | — | — | ɡ a z ˈ i a n t ɛ p | — |
| 953 | Giresun | E | — | — | — | ɟ i ɾ ˈ e s ʊ n | — |
| 954 | Gümüşhane | E | — | — | — | ɟ ø m ˈ ø ʃ a ː n e | — |
| 955 | Hakkâri | E | — | — | — | h a k c ˈ a ː ɾ ɪ | — |
| 956 | Hatay | E | — | — | — | h ˈ a t a j | — |
| 957 | Iğdır | E | — | — | — | ˈ ɯ ɯ d ɯ r | — |
| 958 | Isparta | E | — | — | — | ɯ s p ˈ a r t a | — |
| 959 | İstanbul | E | 10487 | — | — | ɪ s t ˈ a n b ʊ ɫ | — |
| 960 | İzmir | E | — | — | — | ˈ ɪ z m ɪ r | — |
| 961 | Kahramanmaraş | E | — | — | — | k a h r a m a n m a ɾ ˈ a ʃ | — |
| 962 | Karabük | E | — | — | — | k a ɾ a b ˈ ø k | — |
| 963 | Karaman | E | — | var | — | k a ɾ a m ˈ a n | — |
| 964 | Kars | E | — | — | — | k ˈ a r s | — |
| 965 | Kastamonu | E | — | — | — | k ˈ a s t a m o n ʊ | — |
| 966 | Kayseri | E | — | — | — | k ˈ a j s e ɾ ɪ | — |
| 967 | Kırıkkale | E | — | — | — | k ɯ ɾ ɯ k ː ˈ a l ɛ | — |
| 968 | Kırklareli | E | — | — | — | k ˈ ɯ r k ɫ a ɾ e l ɪ | — |
| 969 | Kırşehir | E | — | — | — | k ɯ r ʃ e h ˈ ɪ r | — |
| 970 | Kilis | E | — | — | — | k ˈ i l ɪ s | — |
| 971 | Kocaeli | E | — | — | — | k o d ʒ ˈ ɛ j l ɪ | — |
| 972 | Konya | E | — | — | — | k ˈ ɔ n j a | — |
| 973 | Kütahya | E | — | — | — | k y t ˈ a h j a | — |
| 974 | Malatya | E | — | — | — | m a ɫ ˈ a t j a | — |
| 975 | Manisa | E | — | — | — | m a n ˈ i s a | — |
| 976 | Mardin | E | — | — | — | m ˈ a r d ɪ n | — |
| 977 | Mersin | E | — | var | — | m ˈ ɛ r s ɪ n | — |
| 978 | Muğla | E | — | — | — | m ˈ u ː ɫ a | — |
| 979 | Muş | E | 25371 | var | — | m ˈ ʊ ʃ | — |
| 980 | Nevşehir | E | — | — | — | n ɛ v ʃ e h ˈ ɪ r | — |
| 981 | Niğde | E | — | — | — | n ˈ ɪ j d ɛ | — |
| 982 | Ordu | E | 2254 | var | — | ˈ ɔ r d ʊ | — |
| 983 | Osmaniye | E | — | — | — | o s m ˈ a n ɪ j ɛ | — |
| 984 | Rize | E | — | — | — | r ˈ i z ɛ | — |
| 985 | Sakarya | E | — | — | — | s a k ˈ a r j a | — |
| 986 | Samsun | E | — | var | — | s ˈ a m s ʊ n | — |
| 987 | Siirt | E | — | — | — | s ˈ i ɪ r t | — |
| 988 | Sinop | E | — | — | — | s ˈ i n ɔ p | — |
| 989 | Sivas | E | — | — | — | s ˈ i v a s | — |
| 990 | Şanlıurfa | E | — | — | — | ʃ a n ɫ ɯ ʊ r f ˈ a | — |
| 991 | Şırnak | E | — | — | — | ʃ ˈ ɯ r n a k | — |
| 992 | Tekirdağ | E | — | — | — | t e k ˈ ɪ r d a ː | — |
| 993 | Tokat | E | 8480 | var | — | t ˈ o k a t | — |
| 994 | Trabzon | E | — | — | — | t r ˈ a b z ɔ n | — |
| 995 | Tunceli | E | — | — | — | t ˈ ʊ n d ʒ ɛ l ɪ | — |
| 996 | Uşak | E | 15169 | var | — | ˈ u ʃ a k | — |
| 997 | Van | E | 3125 | — | — | v ˈ a n | — |
| 998 | Yalova | E | — | — | — | j a ɫ o v ˈ a | — |
| 999 | Yozgat | E | — | — | — | j ˈ ɔ z ɡ a t | — |
| 1000 | Zonguldak | E | — | — | — | z ɔ n ɡ ʊ ɫ d ˈ a k | — |
