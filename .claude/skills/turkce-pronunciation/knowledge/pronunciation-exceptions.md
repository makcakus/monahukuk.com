# Telaffuz istisnaları ve öğretme

Doğrulama etiketleri: **[V]** bu çalışmada veriyle/koşturarak doğrulandı · **[S]** ikincil kaynak, sayfa açılamadı, arama özetinden · **[K]** genel dilbilgisi bilgisi, bu çalışmada kaynakla doğrulanmadı. Ayrıntı: `references/sources.md`.

## Öğretme akışı (kullanıcı kulağıyla)
1. Kullanıcı bir kelimenin yanlış okunduğunu söyler ya da öncelik listesinden bir kelime seçilir.
2. `reels-generator/scripts/say.py "cümle" --phonemes` ile motorun fonemlerine bak.
3. 3–5 aday kural üret (`--try "kök=eski > yeni"`; uzun ünlü: `a > a ː`, ince k: `k > c`, ince l: `ɫ > l`), numaralı tek ses dosyasında kullanıcıya dinlet.
4. Kullanıcı numarayı seçince `lexicon.json`'a yaz, `python3 tests/run_pool.py` çalıştır (ölü kural / yanlış pozitif kontrolü), commit'le.
5. Kural **yalnız onaylanan kelimeye** uygulanır. Benzer görünen başka kelimeye (kânun'a uyan kural kâr'a) kullanıcı dinlemeden genelleştirilmez.

## Kullanıcının dinleyerek verdiği kararlar [V, kullanıcı beyanı]
- kânun: yalnız uzun a (k sert kalır) · ferâgat: uzun a · tâkip: uzun a + ince k · kabûl: (ilk karar uzun u + ince l ʲ, sonra değiştirildi, aşağıya bak) · **sosyâl: ince a + açık l** (æ l; "uzun a + açık l" ilk önerisi reddedildi, kural geri alınıp yeniden öğretildi).
- Dosya 4'teki hâkim, hâlinde, lâzım, dâhil, ikâmet, mâlik ve dosya 5'teki resmî, millî, adlî, hukukî, kânunî, medenî, malî, idarî onaylandı.
- **Toplu karar (2026-11-01):** -al kelimelerinde (normal, general, federal, sinyal, metal, final, moral, dijital, orijinal, kristal, ihmal, işgal) ince a + açık l (`a ɫ $ > æ l`); -ol kelimelerinde (kontrol, rol, petrol, alkol, bol) ve -ul kelimelerinde (meşgul, makul) açık l (`ɔ ɫ $ > o l`, `ʊ ɫ $ > u l`).
- **2026-11-01 ikinci tur:** tavan: vurgusuz (model son "an"ı uzatıyordu, `stress: none`); kabûl ve sulh: uzun ü + açık l (`ʊ ɫ > y ː l`; önceki ince-l ʲ kararı kulakta yetersiz bulundu ve değiştirildi); itiraz: uzun i (`i t > i ː t`); iptâl: ince a + açık l, çekimlerde de.
- **"Diğer" kelimeler düz kalır** (kalp, hayal, saat, seyahat, itaat, dikkat): önerilen kurallar (tek uzun a, ince k) kabul edilmedi, bu kelimelere kural yoktur. Not: "1. öneriyi kullan" ifadesi, dinletilen ilk biçim (düz) olarak yorumlandı.
- Bilinen hata (düzeltildi): millî için ilk önerilen kural uzun î'yi ilk hecedeki i'ye uyguluyordu; `$` (kelime sonu) çapası eklenerek düzeltildi.

## Şu an öğretilmiş kurallar (26) [V]
| öğretilen | eşleşme | kural | önce → sonra (temsilci) |
|---|---|---|---|
| kânun | kök: kanun* | `k a > k a ː` | kanun: k a n ˈ ʊ n → k a ː n ˈ ʊ n |
| ferâgat | kök: feragat* | `ɾ a > ɾ a ː` | feragat: f e ɾ a ɡ ˈ a t → f e ɾ a ː ɡ ˈ a t |
| tâkip | kök: takip* | `t a k > t a ː c` | takip: t a k ˈ ɪ p → t a ː c ˈ ɪ p |
| hâkim | kök: hakim* | `h a k > h a ː c` | hakim: h ˈ a k ɪ m → h ˈ a ː c ɪ m |
| hâlinde | tam: halinde, halde, halen | `h a > h a ː` | halinde: h a l ɪ n d ˈ ɛ → h a ː l ɪ n d ˈ ɛ |
| lâzım | kök: lazım* | `ɫ a > l a ː` | lazım: ɫ ˈ a z ɯ m → l ˈ a ː z ɯ m |
| dâhil | kök: dahil* | `d a h > d a ː h` | dahil: d a h ˈ ɪ l → d a ː h ˈ ɪ l |
| ikâmet | kök: ikamet* | `k a > c a ː` | ikamet: i k a m ˈ ɛ t → i c a ː m ˈ ɛ t |
| mâlik | kök: malik* | `m a l > m a ː l` | malik: m a l ˈ ɪ k → m a ː l ˈ ɪ k |
| resmî | tam: resmi | `ɪ $ > i ː` | resmi: r ɛ s m ˈ ɪ → r ɛ s m ˈ i ː |
| millî | tam: milli | `ɪ $ > i ː` | milli: m ɪ l l ˈ ɪ → m ɪ l l ˈ i ː |
| adlî | tam: adli | `ɪ $ > i ː` | adli: a d l ˈ ɪ → a d l ˈ i ː |
| hukukî | tam: hukuki | `ɪ $ > i ː` | hukuki: h u k u k ˈ ɪ → h u k u k ˈ i ː |
| kânunî | tam: kanuni | `ɪ $ > i ː` | kanuni: k a n u n ˈ ɪ → k a ː n u n ˈ i ː |
| medenî | tam: medeni | `ɪ $ > i ː` | medeni: m e d e n ˈ ɪ → m e d e n ˈ i ː |
| malî | tam: mali | `ɪ $ > i ː` | mali: m a l ˈ ɪ → m a l ˈ i ː |
| idarî | tam: idari | `ɪ $ > i ː` | idari: i d a ɾ ˈ ɪ → i d a ɾ ˈ i ː |
| sosyâl | tam: sosyal | `a ɫ > æ l` | sosyal: s ɔ s j ˈ a ɫ → s ɔ s j ˈ æ l |
| -âl (ince a, açık l) | tam: normal, general, federal, sinyal, metal, final, moral, dijital, orijinal, kristal, ihmal, işgal | `a ɫ $ > æ l` | normal: n ɔ r m ˈ a ɫ → n ɔ r m ˈ æ l |
| -ol (açık l) | tam: kontrol, rol, petrol, alkol, bol | `ɔ ɫ $ > o l` | kontrol: k ɔ n t r ˈ ɔ ɫ → k ɔ n t r ˈ o l |
| -ul (açık l) | tam: meşgul, makul | `ʊ ɫ $ > u l` | meşgul: m ɛ ʃ ɡ ˈ ʊ ɫ → m ɛ ʃ ɡ ˈ u l |
| iptâl (ince a, açık l) | kök: iptal* | `a ɫ $ > æ l ; a l > æ l` | iptal: ɪ p t ˈ a ɫ → ɪ p t ˈ æ l |
| kabûl (uzun ü + açık l) | kök: kabul* | `ʊ ɫ > y ː l ; u l > y ː l` | kabul: k a b ˈ ʊ ɫ → k a b ˈ y ː l |
| sulh (uzun ü + açık l) | kök: sulh* | `ʊ ɫ > y ː l` | sulh: s ˈ ʊ ɫ h → s ˈ y ː l h |
| tavan (vurgusuz) | kök: tavan* | `` | tavan: t a v ˈ a n → t a v a n |
| îtiraz (uzun i) | kök: itiraz* | `i t > i ː t` | itiraz: i t i ɾ ˈ a z → i ː t i ɾ ˈ a z |

## Öğretme öncelik listesi (sıklığa göre, henüz öğretilmedi) [V]
Kaynak: Zemberek `InverseHarmony` ∩ OpenSubtitles sıklığı. Sayı = sıklık sırası.

**A grubu:** saat (214), dikkat (351), hayal (497), hak (757), kalp (1049), kat (1414), seyahat (2454), golf (3384), ihtimal (3663), hal (3848), hâl (3848), amiral (6014), ihlâl (6532), itaat (6899), gol (6960), vaat (9259), emlak (9411), sadakat (9499), ad (9844), kardinal (10167), anormal (10342), ideal (10407), radikal (11423), harf (13346), müzikal (13586), sembol (13898), global (14221), festival (15220), santral (15226), şefkat (15644), helâl (16011), protokol (16092), faul (16619), meçhul (17301), başrol (17644), ampul (19399), idrak (19627), usul (19943), sürat (20163), liberal (20196), harp (20455), kemal (21830), beraat (21860), had (22060), mareşal (22399), termal (22418), mahal (22689), ithal (22835), nasihat (22946), hakikat (22973), medikal (23656), gayrimenkul (23945), trol (24239), istirahat (24546), tropikal (24976), ishal (25398), imal (25662), suistimal (25968), cemal (26303), vals (26320)

**B grubu (şapkalı yazılanlar):** âmâ, tabiî, hâlâ, pekâlâ, tâbi, silâh, evlât, herhâlde, âşık, meselâ, hikâye, derhâl, askerî, ilâç, merkezî, kâr, filân, vahşî, dâhi, fikrî, tarihî, kâğıt, tıbbî, kalbî, ilân, rüzgâr, şikâyet, belâ, mahkûm, klâsik, felâket, ihtimalî, telâfi, âmin, reklâm, şeklî, âdet, inkâr, samimî, hayalî, bekâr, kâbus, şeytanî, dinî, hissî, hayatî, siyasî, şahsî, âdeta, bedenî, dükkân, kâp, mekân, indî, nâkil, imkân, iflâs, havaî, zekâ, siyahî

Not: "ad" gibi kelimeler listede çıkabilir; bayrak ters uyumu gösterir, her zaman gerçek bir telaffuz sorunu olduğu anlamına gelmez. Bu yüzden her kelime için dinleme onayı şarttır.
