// TTK (Türk Ticaret Kanunu) Beşinci Kitap "Deniz Ticareti" (m.931-1400)
// konu makalelerini kanunun resmi kısım sistematiğine göre gruplamak için
// kullanılır. Yalnızca "Türk Ticaret Kanunu - Deniz Ticareti" makale
// grubunda (tr locale, articles sayfası) kullanılır; çalışma alanları
// sayfalarını etkilemez. Kitap 1 "Ticari İşletme" (m.1-123) için bkz.
// ttk-groups.ts; Kitap 2 "Ticaret Şirketleri" (m.124-644) için bkz.
// ttk-book2-*-groups.ts dosyaları; Kitap 3 "Kıymetli Evrak" (m.645-849)
// için bkz. ttk-kiymetli-evrak-groups.ts; Kitap 4 "Taşıma İşleri"
// (m.850-930) için bkz. ttk-tasima-isleri-groups.ts.
//
// Deniz Ticareti (m.931-1400), TTK'nın en hacimli kitabıdır — yaklaşık
// 470 madde ile gemi, kaptan, donatan, deniz ticareti sözleşmeleri
// (navlun, çarter, taşıma senedi), deniz kazaları (çatma, kurtarma,
// müşterek avarya), gemi alacakları, sorumluluğun sınırlanması ve
// cebri icraya ilişkin özel hükümleri kapsar. Bu nedenle bu kitap,
// önceki kitaplardan çok daha fazla sayıda batch gerektirecektir.
//
// Bu dosya, ilk batch'i kapsar: Birinci Kısım "Gemi"nin Birinci Bölümü
// "Genel Hükümler"in tamamı (gemi ve ticaret gemisi tanımları, m.931;
// denize/yola/yüke elverişli gemi kavramları, m.932; tamir kabul etmez
// gemi ve tamire değmez gemi ayrımı ile değerleme zamanlaması, m.933;
// gemi adamları tanımı - kaptan, gemi zabitleri, tayfalar ve diğer
// çalışanlar, m.934; Deniz Ticareti hükümlerinin ticaret gemilerine
// uygulanması ile yat/eğitim gemileri, Devlet/harp gemileri ve yapı
// hâlindeki yabancı gemiler bakımından istisnaları, m.935; gemilerin
// sicile kayıtlı olup olmadığına bakılmaksızın taşınır eşya sayılması,
// m.936; ve İİK'nın taşınmaza ilişkin hükümlerine tabi kılınan gemiler
// ile TMK'daki belirli taşınmaz hükümlerinin (aile konutu, miras,
// vasiyet) gemilere kıyasen uygulanması istisnası, m.937) ve İkinci
// Bölüm "Geminin Kimliği"nin tamamı (geminin adının seçilmesi ve
// iltibas yasağı, m.938; geminin adının ve bağlama limanının gövdeye
// yazılma zorunluluğu, m.939; Türk Bayrağını çekme hakkı ve yükümlülüğü
// - gerçek kişi, ortaklık, tüzel kişi, ticaret şirketi ve donatma
// iştiraki bakımından Türk vatandaşlığı/çoğunluk testleri, m.940;
// çıplak kira (bareboat charter) yoluyla geçici bayrak değişikliği
// istisnaları, m.941; Türk Bayrağı çekme hakkının kaybedilmesi ve altı
// aylık ek süre imkânı, m.942; hakkın ispatı - gemi tasdiknamesi, m.943;
// bayrak şahadetnamesi, m.944; küçük gemiler ve yat/eğitim gemileri için
// muafiyet, m.945; geminin bağlama limanı tanımı, m.946; ceza hükümleri
// - kanuna aykırı bayrak çekme, m.947; tasdikname/şahadetname almadan
// veya gemide bulundurmadan bayrak çekme, m.948; harp gemileri ile
// istihkâmlar önünde ve limanda bayrak çekmeme, m.949; geminin adı ve
// bağlama limanının yazılmaması, m.950; bu suçlarda kast şartı, m.951;
// yurt dışında veya açık denizde işlenen fiillerin cezalandırılması,
// m.952; ve tasdikname/şahadetname düzenlenmesi ile gemi işaretlemesine
// ilişkin yönetmelik çıkarma yetkisi, m.953) kapsanmıştır. Bu batch ile
// Birinci Kısım "Gemi"nin "Genel Hükümler" ve "Geminin Kimliği"
// bölümleri (m.931-953) eksiksiz tamamlanmış olur.
//
// İkinci batch, Birinci Kısım "Gemi"nin Üçüncü Bölümü "Gemi Sicili"nin
// açılışını kapsar (m.954-972): sicil müdürlüklerinin kuruluşu ve
// mahkeme gözetimi, yetkili sicil müdürlüğü, tescili caiz/zorunlu/yasak
// gemiler (Genel Hükümler, m.954-958); tescil isteminin şekli ve
// içeriği, gerekli belgeler, tescil edilecek hususlar, mülkiyet itirazı
// hâlinde şerh, yapı hâlindeki gemilere özgü sicilden geçiş ve tescildeki
// değişikliklerin bildirilmesi (Geminin Tescili, m.959-964); sicilden
// istem üzerine ve resen silinme ile Türk Bayrağını kaybeden gemilerde
// ipotek alacaklılarının onayına bağlı koruma mekanizması (Silinme,
// m.965-967); gemi tasdiknamesinin içeriği, yeniden düzenlenmesi,
// değişikliklerin işlenmesi ve ibraz zorunluluğu (Gemi Tasdiknamesi,
// m.968-971); ve sicil işlemlerini yaptırmaya davet usulü (m.972). Bu
// batch ile Üçüncü Bölüm "Gemi Sicili"nin açılışı tamamlanmış olur.
//
// Üçüncü batch, Üçüncü Bölüm "Gemi Sicili"nin geri kalanını kapsar ve bu
// bölümü m.954-995 aralığında eksiksiz tamamlar (m.973-995): sicilin
// açıklığı, m.973; sicil karineleri (malik ve hak sahibi karinesi,
// silinen hakkın yokluğu karinesi), m.974; sicilin gerçek hukuki duruma
// uygun hâle getirilmesi ve bu istemin zamanaşımına uğramaması, m.975;
// itirazlar, m.976; şerhler - verilebilecekleri hâller, verilmesi,
// sağladığı hak, hükümden düşmesi ve silinmesi, m.977-981; itiraz veya
// şerhin ihtiyati tedbirin kalkmasıyla kendiliğinden kalkması, m.982;
// sicile güven ilkesi - TMK'daki tapu siciline güven ilkesinin deniz
// ticareti hukukundaki karşılığı, m.983; zamanaşımı, m.984; ve kayıt
// giderleri, m.985 (Sicilin Hükümleri) ile İ) Yapı Hâlindeki Gemilere
// Özgü Sicil'in tamamı: genel esaslar, m.986; tescil isteminin şekli ve
// içeriği, m.987-988; tescil edilecek hususlar ve değişiklik bildirimi,
// m.989-990; sicilin hükümleri (ilgi ispatı şartlı açıklık, karine ve
// sicile güven ilkesinin kıyasen uygulanması), m.991; ve silinme,
// m.992 (m.986-992) ile son olarak J) Sicil müdürlüğünün kararlarına
// itiraz, m.993; K) Yönetmelik çıkarma yetkisi, m.994; ve L) Türk
// Uluslararası Gemi Sicili'ne ilişkin özel hükümlerin saklı tutulması,
// m.995 kapsanmıştır. Bu batch ile Üçüncü Bölüm "Gemi Sicili" (m.954-995)
// eksiksiz tamamlanmış olur.
//
// Dördüncü batch, Dördüncü Bölüm "Mülkiyet ve Diğer Ayni Haklar"ın
// açılışını kapsar: Birinci Ayırım "Uygulanacak Hükümler" (m.996-997 -
// bu bölüm hükümlerinin yalnız Türk Gemi Siciline kayıtlı gemiler
// hakkında uygulanması ile sicile kayıtlı olmayan Türk gemileri
// üzerindeki mülkiyet ve sınırlı ayni haklara Türk Medenî Kanununun
// taşınırlara ilişkin hükümlerinin uygulanması) ve İkinci Ayırım
// "Mülkiyet"in tamamı (m.998-1011): İktisabı - Aslen (sahiplenme, m.998;
// olağan zamanaşımı, m.999; olağanüstü zamanaşımı, m.1000) ve Devren
// (devrin şekli, m.1001; devrin kapsamı, m.1002); Zıya (geminin zıyaı,
// m.1003; terk, m.1004; zamanaşımı, m.1005); Sicile kayıtlı gemi payı ve
// iştirak payı üzerinde mülkiyet - İktisabı (aslen, m.1006; devren -
// devir yoluyla, m.1007, iştirak payının bırakılması yoluyla, m.1008) ve
// Zıyaı (m.1009); ve Yapı hâlinde bulunan gemiler ve yapı payları
// üzerindeki mülkiyet - sicile kaydolunmayan (m.1010) ve sicile
// kaydolunan (m.1011) yapılar ve yapı payları. Bu batch ile Dördüncü
// Bölüm'ün Birinci ve İkinci Ayırımları (m.996-1011) eksiksiz
// tamamlanmış olur.
//
// Beşinci batch, Üçüncü Ayırım "Gemi Rehni"nin açılışını kapsar
// (m.1012-1029): sicile kayıtlı olmayan gemilerde donatma iştiraki
// yoluyla işletilen gemilerdeki iştirak payının rehninin Türk Medenî
// Kanununun alacaklar ve diğer haklar üzerindeki rehinlere ilişkin
// hükümlerine tabi olması, m.1012; tersane sahibinin, geminin yapımı ve
// onarımından doğan alacakları için feragat edilemeyen kanuni ipotek
// isteme hakkı, bu ipoteğin TMK m.895-897 uyarınca kurulması ve
// kurulmadan önce sicile şerh verilebilmesi ile kısmi tamamlanma
// hâlinde teminat ipoteği imkânı, m.1013 (B) Sicile kayıtlı olan
// gemilerin rehni – I) Tersane sahibinin ipoteği); gemi ipoteğinin
// niteliği ve sicile kayıtlı gemilerin sözleşmeye dayalı rehninde tek
// yol olması, m.1014; kurulması - malik ile alacaklının şekle bağlı
// anlaşması ve tescili, m.1015; sicile geçirilecek hususlar - alacaklı
// kimliği, alacak tutarı, faiz, derece, yabancı para ve azami miktar
// ipoteği, m.1016; ipoteğin derecesinin TMK'nın taşınmaz rehni
// hükümlerine göre belirlenmesi, m.1017; teminat altına aldığı alacak
// - TMK m.875-876 atfı ve malike ihbar yoluyla muacceliyet, m.1018;
// faizler - kanuni asgari faize genişletme imkânı, m.1019 (II) Gemi
// ipoteği); ipoteğin kapsamı - gemi, gemi payı, bütünleyici parça,
// eklenti, kamulaştırma bedeli ve üçüncü kişi tazminat istemleri,
// m.1020; birlikte gemi ipoteğinde birden çok geminin müteselsil
// sorumluluğu ve alacağın paylaştırılması, m.1021; ve sigorta
// tazminatı - kural olarak ipoteğin sigorta tazminatını kapsaması,
// m.1022; sigortacının yapacağı ödemeler, m.1023; gemi ipoteğinin
// sigortacıya bildirilmesi - bildirim yükümü, birden çok sigortacı ve
// ipotekli alacaklının yerleşim yeri değişikliği, m.1024-1026;
// sigortacının borcundan kurtulması, m.1027; ipoteğin ödeyen
// sigortacıya geçmesi, m.1028; ve sigortacının prim ve ödemeleri kabul
// etmek zorunluluğu, m.1029 (6) İpoteğin kapsamı) kapsanmıştır. Bu
// batch ile Üçüncü Ayırım "Gemi Rehni"nin açılışı (m.1012-1029)
// tamamlanmış olur.
//
// Altıncı batch, Üçüncü Ayırım "Gemi Rehni"nin devamını kapsar ve
// "7) İpoteğin hükümleri" (m.1030-1037: alacağın muacceliyetinden önce
// ipotekli alacaklının gemi maliki aleyhine - teminatın tehlikeye
// düşmesi hâlinde ültimatom ve ihtiyati haciz/yediemin/ilamlı takip
// yoluyla kademeli koruma, m.1030 - ve üçüncü kişiler aleyhine - yalnızca
// men davası, m.1031 - hakları ile malikin def'ide bulunma, m.1032,
// muacceliyet bildirimi, m.1033, ve kendisine temsilci atanmasını
// isteme, m.1034, hakları; alacağın muacceliyetinden sonra malikin
// borcu ödeme hakkı, m.1035, alacağın malike geçmesi/halefiyet, m.1036,
// ve belgelerin verilmesini istem hakkı, m.1037), "8) Gemi ipoteğinin
// devri ve değiştirilmesi" (m.1038-1043: alacağın devriyle ipoteğin
// otomatik geçişi, ayrılmazlık ilkesi ve tescilin kurucu niteliği,
// m.1038, yeni alacaklıya karşı ileri sürülebilecek def'i ve itirazlar
// ile sicile güven ilkesinin sınırları, m.1039, ipoteğin içeriğinin,
// m.1041, derecesinin, m.1042, ve teminat altına aldığı alacağın,
// m.1043, değiştirilmesi) ve "9) Gemi ipoteğinin sona ermesi"
// (m.1044-1053: alacağın düşmesi, m.1044, alacaklı ve malik
// sıfatlarının birleşmesi, m.1045, birlikte gemi ipoteğinde malikin
// ve borçlunun halefiyeti, m.1046-1047, sicil-dışı ipoteklerin
// zamanaşımına bağlı düşmesi, m.1048, tarafların anlaşması, m.1049,
// alacaklının feragati, m.1050, ipoteğin süresinin dolması, m.1051,
// ve alacaklının bilinmemesi ile paranın tevdii hâllerinde mahkemece
// düşme kararı verilmesi, m.1052-1053) kapsanmıştır. Bu batch ile
// gemi ipoteğinin çekirdek rejimi (m.1013-1053) eksiksiz tamamlanmış
// olur; Üçüncü Ayırım "Gemi Rehni"nden geriye yalnızca "III) Yapı
// hâlindeki gemiler üzerinde ipotek" (m.1054-1058) kalmakta olup, bunu
// Dördüncü Ayırım "İntifa Hakkı" (m.1059-1060) izleyecek ve bu iki
// ayırımın tamamlanmasıyla Birinci Kısım "Gemi" sona erecektir. Beşinci
// Kitap "Deniz Ticareti" bundan sonra sırasıyla İkinci Kısım "Donatan ve
// Donatma İştiraki" (m.1061+), Üçüncü Kısım "Kaptan" (m.1088+), Dördüncü
// Kısım "Deniz Ticareti Sözleşmeleri" (m.1119+ - çarter sözleşmeleri,
// navlun sözleşmeleri, taşıma senedi) ve kitabın devamındaki Deniz
// Kazaları (Çatma, Kurtarma, Müşterek Avarya), Gemi Alacakları,
// Sorumluluğun Sınırlanması ve Cebrî İcraya İlişkin Özel Hükümler
// Kısımlarını da kapsayacak olup, kitabın m.1400'e kadar sürmesi
// nedeniyle onlarca ayrı batch gerektirecektir; bu dosya yalnızca
// yukarıda sayılan m.931-1053 aralığını kapsar ve ileriki batch'lerde
// yeni slug eşlemeleriyle genişletilecektir.
//
// Yedinci ve bu dosya bakımından son batch, Üçüncü Ayırım "Gemi
// Rehni"nin "III) Yapı hâlindeki gemiler üzerinde ipotek" alt başlığını
// (m.1054-1058: ipoteğin konusu - omurganın konulup yapının açık ve
// sürekli şekilde ayırt edilebilir hâle geldiği andan itibaren kurulma
// imkânı ile onsekiz gros tonilatodan küçük yapılarda ipotek yasağı,
// m.1054; kurulması - malik-alacaklı anlaşması ve yapı hâlindeki
// gemilere özgü sicile tescil, m.1055; kapsamı - yapımın her aşamasını
// ve tersanede işaretlenmiş henüz monte edilmemiş malzemeyi de kapsama
// alan genişletilmiş ipotek kapsamı ile sigorta tazminatının ancak
// ayrıca sigorta ettirilmişse kapsanması, m.1056; derecesi - yapımı
// tamamlanan geminin gemi siciline geçişinde ipoteğin eski derecesini
// koruması, m.1057; ve uygulanacak hükümler - m.1014-1053'teki ordinar
// gemi ipoteği rejiminin özel hükümler saklı kalmak kaydıyla kıyasen
// uygulanması, m.1058) ve Dördüncü Ayırım "İntifa Hakkı"nın tamamını
// (m.1059-1060: kurulması - sicile kayıtlı gemiler üzerinde intifa
// hakkı kurulabilmesi, aksi kararlaştırılmadıkça tam yararlanma yetkisi
// ve akdî intifa hakkının m.1015'teki gemi ipoteği kuruluş mekanizmasına
// tabi olması, m.1059; ve uygulanacak hükümler - TMK'nın taşınmazlar
// üzerindeki intifa hakkı hükümlerine tabi olma ile intifa hakkı-gemi
// ipoteği ilişkisinde TMK m.869'a atıf, m.1060) kapsamıştır. Bu batch
// ile Birinci Kısım "Gemi" (m.931-1060) İLK MADDESİNDEN SON MADDESİNE
// KADAR EKSİKSİZ TAMAMLANMIŞ olur. Beşinci Kitap "Deniz Ticareti" bundan
// sonra sırasıyla İkinci Kısım "Donatan ve Donatma İştiraki"
// (m.1061-1087), Üçüncü Kısım "Kaptan" (m.1088-1118) ve Dördüncü Kısım
// "Deniz Ticareti Sözleşmeleri" (m.1119'dan itibaren - gemi kira
// sözleşmeleri, zaman çarteri, navlun ve taşıma sözleşmeleri) ile devam
// edecek olup, kitabın devamında henüz kapsanmamış çok sayıda Kısım
// (Deniz Kazaları - Çatma, Kurtarma, Müşterek Avarya -, Gemi Alacakları,
// Sorumluluğun Sınırlanması ve Cebrî İcraya İlişkin Özel Hükümler dahil)
// m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca
// yukarıda sayılan m.931-1060 aralığını kapsar ve ileriki batch'ler,
// İkinci Kısım'dan itibaren yeni bir dosyada yeni slug eşlemeleriyle
// devam edecektir.
//
// Sekizinci batch, Beşinci Kitap "Deniz Ticareti"nin İkinci Kısmı
// "Donatan ve Donatma İştiraki"ni (m.1061-1087) açar. Bu batch, "A)
// Donatan" alt başlığının tamamını (m.1061-1063: donatanın tanımı -
// gemisini menfaat sağlamak amacıyla kullanan gemi maliki ile kendisine
// ait olmayan bir gemiyi kendi adına bizzat veya kaptan aracılığıyla
// kullanan kişinin üçüncü kişilerle ilişkilerinde donatan sayılması,
// m.1061; gemi adamlarının, zorunlu/isteğe bağlı kılavuzun kusurlarından
// doğan sorumluluk - yolcu ve yük ilgilileri bakımından taşıyanın
// sorumluluğu hükümlerine atıf ve milletlerarası sorumluluk sınırlandırma
// sözleşmelerinden doğan hakkın saklı tutulması, m.1062; ve donatan
// sıfatı dolayısıyla açılacak davalarda geminin bağlama limanındaki
// yetkili mahkeme, m.1063) ve "B) Donatma İştiraki" alt başlığının
// açılışını (m.1064-1075: iştirakin tanımı - paylı mülkiyet hâlindeki
// ortak donatanların gemiyi hepsi adına ve hesabına işletmesi ile tek
// başına gemi maliki/işletme hakkı sahibi ticaret şirketleri ve tüzel
// kişiler bakımından istisna, m.1064; iştirakin onbeş gün içinde ticaret
// ve gemi sicillerine tescili ve tescil edilecek hususlar, m.1065;
// paydaşlar arası ilişkilerde sözleşme önceliği ve 1067-1087 nci
// maddelerin yedek hukuk niteliği, m.1066; iştirak kararlarının pay
// değerine göre oy çoğunluğuyla alınması ile sözleşme değişikliği/
// sözleşmeye aykırı veya amaca yabancı kararlarda oybirliği şartı,
// m.1067 (1) Kararlar); gemi müdürünün oy çoğunluğuyla, paydaş olmayan
// biri için oybirliğiyle atanması, her zaman çoğunlukla azli ve
// atama/azlin sicillere tescili, m.1068; yönetim yetkisinin 1070 inci
// maddeye tabi olması ile olağanüstü tamirler ve kaptan atama/azli için
// önceden iştirak kararı gereği, m.1069 (2) Gemi müdürü - a) Atanması ve
// görevden alınması, b) Yönetim yetkisi); temsil yetkisinin kapsamı -
// olağan işler, donatım/bakım, navlun sözleşmeleri, sigorta ettirme,
// kaptanın yalnızca gemi müdürüne bağlı olması, dava/takip temsili ve
// kambiyo taahhüdü/ödünç para/gemi satışı-rehni için özel yetki şartı,
// m.1070; işlemlerin hak ve borçlarının iştirake ait olması, m.1071; ve
// temsil yetkisi sınırlamalarının yalnızca bunu bilen üçüncü kişilere
// karşı ileri sürülebilmesi, m.1072 (c) Temsil yetkisi - aa) Kapsamı, bb)
// Hükümleri, cc) Sınırlandırılması); ve özen yükümlülüğü - tedbirli bir
// donatanın özeni, m.1073, defter tutma ve belge saklama yükümlülüğü,
// m.1074, ve bilgi/hesap verme yükümlülüğü - paydaşların istem üzerine
// bilgi alma hakkı ile çoğunluğun hesabı onaylamasının itiraz eden
// paydaşın haklarını düşürmemesi, m.1075 (d) Yükümlülükleri - aa) Özen
// yükümlülüğü, bb) Defter tutma ve belgeleri saklama yükümlülüğü, cc)
// Bilgi ve hesap verme yükümlülüğü)) kapsamıştır. Donatma İştiraki'nin
// geri kalanı (m.1076-1087: kazanca ve zarara katılma, giderlere
// katılma, paydaş donatanların şahsında değişiklik, paydaş donatan olan
// kaptan, paydaş donatanların sorumluluğu, sona ermesi, tasfiyesi ve
// yetkili mahkeme) ileriki bir batch'te ele alınacak olup, bunun
// ardından Beşinci Kitap sırasıyla Üçüncü Kısım "Kaptan" (m.1088-1118)
// ve Dördüncü Kısım "Deniz Ticareti Sözleşmeleri" (m.1119'dan itibaren)
// ile devam edecek; kitabın devamında henüz kapsanmamış çok sayıda Kısım
// (Deniz Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır.
//
// Dokuzuncu ve bu dosya bakımından son batch, "B) Donatma İştiraki"nin
// geri kalanını (m.1076-1087) kapsayarak İkinci Kısım "Donatan ve
// Donatma İştiraki"ni tamamen kapatır: kazanca ve zarara katılma -
// iştirakin kazanç/zararının gemi payına göre dağıtılması ve takvim
// yılı sonunda hesap/dağıtım yapılması, m.1076 (V); giderlere katılma -
// paydaşların iştirakin (özellikle donatım/tamir) giderlerine payları
// oranında katılma zorunluluğu ile ödemeyen paydaşın hesabına diğer
// paydaşlarca verilen avansların doğurduğu temerrüt faizi ve
// sigortalanabilir menfaatin sigorta ettirilmesi hâlinde sigorta
// giderlerinin borçlu paydaşa ait olması, m.1077 (VI); paydaş
// donatanların şahsında değişiklik - şahıs değişikliğinin iştirakin
// devamına engel olmaması ve hiçbir paydaşın iştirakten çıkarılamaması,
// m.1078 (VII); ve paydaş donatan olan kaptan - onayı olmaksızın işine
// son verilen kaptan-paydaşın payının bilirkişi değeriyle diğer
// paydaşlarca satın alınmasını isteme hakkı ile bu hakkın haklı sebep
// olmaksızın gecikmede hak düşürücü niteliği, m.1079 (VIII) kapsanmıştır.
// Ardından paydaş donatanların sorumluluğu ele alınmıştır: iştirakin
// borçlarından üçüncü kişilere karşı iştirak payı oranında şahsi
// sorumluluk (deniz alacaklarından sorumluluğun sınırlandırılması
// hükümleri saklı), m.1080 (1); ve iştirak payının devri hâlinde
// devredenin bildirime kadar süren sorumluluğu, devralanın iktisap
// anından itibaren bağlılığı ve önceki kararlara/taahhütlere bağlılığı,
// tekeffül hakları saklı kalmak kaydıyla diğer paydaşların devralana
// karşı takas hakkı ile cebrî icra yoluyla iktisapta da aynı hükümlerin
// uygulanması, m.1081 (2) kapsanmıştır. Son olarak sona erme ve tasfiye
// düzenlenmiştir: sona erme sebepleri - çoğunluk kararıyla fesih ve
// geminin devri kararının fesih hükmünde sayılması, m.1082 (a); çıkmak
// isteyen paydaşın haklı sebeple izin veya mahkemeden fesih istemi,
// dürüstlük kuralına göre daraltılmış haklı sebep standardı ve
// mahkemece diğer paydaşlara tanınan bilirkişi değeriyle pay devralma
// süresi, m.1083 (b); iştirakin iflasının sona erdirici etkisi, m.1084
// (c) (X); paydaş donatanın ölüm veya iflasının sona ermeyi
// gerektirmemesi, m.1085 (2); tasfiye - geminin açık artırmayla satışı
// esası, navlun sözleşmesiyle bağlılık sırasında satış yasağı ve
// istisnası, oybirlikle satış şeklinin değiştirilebilmesi ile
// uzlaşılamaması hâlinde mahkemece tasfiye memuru atanması ve kollektif
// şirket tasfiye memurlarına ilişkin hükümlerin kıyasen uygulanması,
// m.1086 (XI); ve yetkili mahkeme - paydaş donatanlar aleyhine bu
// sıfatları dolayısıyla açılacak davalarda bağlama limanı mahkemesinin
// ek yetkili mahkeme olması, m.1087 (XII) kapsanmıştır. Bu batch ile
// İkinci Kısım "Donatan ve Donatma İştiraki" (m.1061-1087) İLK
// MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Beşinci
// Kitap "Deniz Ticareti" bundan sonra sırasıyla Üçüncü Kısım "Kaptan"
// (m.1088-1118) ve Dördüncü Kısım "Deniz Ticareti Sözleşmeleri"
// (m.1119'dan itibaren - gemi kira sözleşmeleri, zaman çarteri, navlun
// sözleşmeleri) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1087
// aralığını kapsar ve ileriki batch'ler, Üçüncü Kısım "Kaptan"dan
// itibaren yeni bir dosyada yeni slug eşlemeleriyle devam edecektir.
//
// Onuncu batch, Beşinci Kitap "Deniz Ticareti"nin Üçüncü Kısmı
// "Kaptan"ını (m.1088-1118) açar. Bu batch, "A) Özen yükümlülüğü" -
// kaptanın bütün işlerinde, özellikle ifası kendisine düşen
// sözleşmelerin yerine getirilmesinde tedbirli bir kaptan gibi hareket
// etme zorunluluğu, m.1088; "B) Sorumluluğu" - kaptanın kusuruyla yol
// açtığı zararlardan yolcular dahil gemi ve eşyayla ilgili herkese
// karşı sorumluluğu, donatanın emrine uymanın sorumluluğu kaldırmaması,
// durumu bilerek emir veren donatanın da sorumlu olması ve milletlerarası
// sorumluluk sınırlandırma sözleşmelerinden doğan hakkın saklı tutulması,
// m.1089; ve "C) Görevleri"nin açılışını kapsar: I) Geminin elverişliliği
// ile ilgili olarak - 1) geminin denize ve yola elverişli olmasına ve
// gemiye/gemi adamlarına/yüke ait belgelerin gemide bulunmasına dikkat
// etme, m.1090, 2) yükleme ve boşaltma araçlarının elverişliliğine,
// istifin özel istifçilerce yapılsa bile denizcilik usullerine uygun
// gerçekleştirilmesine, aşırı yüklenmemeye, gerekli safraya ve
// ambarların donanımına dikkat etme, m.1091; II) yabancı mevzuata uyma -
// yabancı ülke kolluk/vergi/gümrük kurallarına uymamaktan ve harp kaçağı
// eşya yüklemekten doğan zararları tazmin yükümlülüğü, m.1092; III) yola
// çıkma - ilk elverişli fırsatta yola çıkma zorunluluğu, kaptanın
// yönetemeyecek durumda olması hâlinde donatandan talimat alma veya
// vekil kaptan bırakma ile vekilin seçiminde kusur standardı, m.1093;
// IV) gemide hazır bulunma - yükleme/boşaltma sırasında ve güvenli
// olmayan limanda kaptan ile ikinci kaptanın eşzamanlı ayrılma yasağı,
// tehlike/deniz hâlinde mutlak gemide kalma yükümlülüğü, m.1094; V)
// kaptanın gemi zabitlerine danışması - danışmanın kaptanı bağlamaması
// ve nihai sorumluluğun daima kaptanda kalması, m.1095; VI) gemi jurnali
// - tutma yükümlülüğü ve tutacak kişiler, m.1096, içeriği ve imza şartı,
// m.1097; VII) deniz raporu - düzenlenmesini isteyebilecek kişiler,
// düzenleneceği yer ve düzenleyici makam, m.1098, tespit edilecek
// konular, m.1099, usulü, m.1100, tutanağın aslının saklanması, m.1101;
// ve VIII) donatanın menfaatlerini koruma - gemi zayi olsa bile kaptanın
// gerektiği sürece bu yükümlülüğü sürdürmesi, m.1102 kapsanmıştır. Bu
// batch ile "A) Özen yükümlülüğü", "B) Sorumluluğu" ve "C) Görevleri"nin
// I-VIII alt başlıkları (m.1088-1102) tamamlanmış olur; Üçüncü Kısım
// "Kaptan"ın geri kalanı, özellikle "D) Kanundan doğan temsil yetkisi"
// (m.1103-1118 - kaptanın donatanı temsil yetkisinin kapsamı, kredi
// işlemleri, sınırlandırılması, vekâletsiz iş görme ve yükle ilgili
// olanların menfaatlerini koruma) ileriki bir batch'te ele alınarak
// Üçüncü Kısım tamamlanacak, ardından Beşinci Kitap Dördüncü Kısım
// "Deniz Ticareti Sözleşmeleri" (m.1119'dan itibaren) ve kitabın
// devamındaki henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları, Gemi
// Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin
// Özel Hükümler dahil) m.1400'e kadar sürecek şekilde izleyecektir.
//
// Onbirinci ve bu dosya bakımından son batch, Üçüncü Kısım "Kaptan"ın
// geri kalanı olan "D) Kanundan doğan temsil yetkisi"ni (m.1103-1118)
// kapsayarak Üçüncü Kısmı baştan sona tamamlar. Bu batch, "I) Donatanın
// temsilcisi sıfatıyla - 1) Kapsamı"nın tamamını kapsar: a) gemi bağlama
// limanında bulunduğu sırada kaptanın hukuki işlemlerinin kural olarak
// donatanı bağlamaması ve gemi adamı tutma yetkisinin istisna olarak
// korunması, m.1103; b) gemi bağlama limanı dışında bulunduğu sırada
// kaptanın donatım/yakıt/kumanya/gemi adamları/denize-yola-yüke
// elverişlilik ve yolculuğun güvenli sürdürülmesine ilişkin geniş temsil
// yetkisi, taşıma sözleşmeleri yapma ve dava açma yetkisi ile yabancı
// bayraklı gemilerde malike/kiracıya açılacak dava ve takiplerin kaptana
// da yöneltilebilmesi, m.1104; ve c) kredi işlemlerinde zaruret ve
// ihtiyaçla ölçülülük şartı, işlemin geçerliliğinin fiilen amacına uygun
// kullanılıp kullanılmadığına bağlı olmaması ile kötüniyetli/ağır ihmalli
// üçüncü kişi istisnası ve kambiyo taahhütlerinde açık yetki şartı,
// m.1105 kapsanmıştır. Ardından "2) Temsil yetkisinin sınırlandırılması"
// - sınırlandırmanın yalnızca bunu bilen üçüncü kişilere karşı ileri
// sürülebilmesi, m.1106; "3) Fesihten sonra kaptanın yetkilerinin
// kaldırılması" - donatanın fesih bildirim süresinde kaptanın yetki
// kullanmasını yasaklayabilmesi, m.1107; "4) Kaptanın vekâletsiz iş
// görmesi" - yetkisiz biçimde kendi parasından avans veren veya kendi
// adına borçlanan kaptanın tazminat alacağı bakımından üçüncü kişi
// sayılması, m.1108; "5) Donatanın kaptanın yaptığı işlemlerden doğan
// sorumluluğu" - donatanın kaptanın kanuni yetkileri dâhilindeki
// işlemlerinden dolayı hak iktisap etmesi ve borç altına girmesi,
// kaptanın kural olarak şahsen borçlanmaması ve m.1088-1089'daki kişisel
// sorumluluğun saklı tutulması, m.1109; ve "6) Kaptanın donatana karşı
// hak ve yükümlülükleri" - iç ilişkide yetki kapsamının m.1103-1105'e
// tabi olması, bilgi verme ve talimat alma yükümlülüğü, olağanüstü
// tamir/alımlarda zorunluluk şartı, hesap verme yükümlülüğü ve navlun
// dışında alınan ödül/tazminatların donatan hesabına yazılması, m.1110
// kapsanmıştır. Bu batch ayrıca "II) Kendi hesabına gemiye eşya yükleme
// yasağı" - donatanın muvafakati olmaksızın yükleme yasağı ve ihlalinde
// en yüksek navlun ödeme yükümlülüğü ile aşan zarar için tazminat hakkı,
// m.1111; "III) Yükle ilgili olanların menfaatlerini koruma yükümlülüğü
// - 1) Genel olarak" - yükün korunması özeni, özel önlemlerde talimat
// alma/kendi takdirine göre hareket etme, büyük zararı önlemek için
// eşyayı boşaltma/satma/rehnetme yetkisi ve yükle ilgililerin istem
// haklarını kendi adına kullanma yetkisi, m.1112; "2) Rotadan sapma" -
// umulmayan hâlde başka rotadan devam/ara verme/kalkma limanına dönme
// ve navlun sözleşmesinin sona ermesinde m.1211'e yönlendirme, m.1113;
// ve "3) Eşya üzerinde tasarruf yetkisi - a) Genel olarak" - yolculuğun
// devamı için zorunluluk hâlinde tasarruf yetkisi, m.1114, "b) Müşterek
// avarya hâlinde" - ilgililere en az zarar veren önlemin seçilmesi
// zorunluluğu, m.1115, ve "c) Diğer hâllerde" - para ihtiyacının başka
// yolla karşılanamaması veya donatan için katlanılamayacak zarar şartı,
// m.1116 kapsanmıştır. Son olarak "d) Kaptanın işlemlerinin donatanı
// bağlaması" - m.1116 uyarınca yapılan tasarruftan zarar gören yükle
// ilgililerin zararının donatanca tazmini ve tazminat miktarının m.1186
// ile satış hâlinde net satış bedeliyle belirlenmesi, m.1117; ve "4) Dış
// ilişkide işlemlerin geçerliliği" - m.1112, 1114, 1115 ve 1117'ye göre
// yapılan işlemlerin geçerliliğinin m.1105/2'deki iyiniyet ölçütüne göre
// belirlenmesi, m.1118 kapsanmıştır. BU BATCH İLE ÜÇÜNCÜ KISIM "KAPTAN"
// (m.1088-1118) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ
// TAMAMLANMIŞ olur. Beşinci Kitap "Deniz Ticareti" bundan sonra Dördüncü
// Kısım "Deniz Ticareti Sözleşmeleri" (m.1119'dan itibaren - gemi kira
// sözleşmeleri, zaman çarteri sözleşmesi, navlun ve eşya/yolcu taşıma
// sözleşmeleri) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1118
// aralığını kapsar ve ileriki batch'ler, Dördüncü Kısım "Deniz Ticareti
// Sözleşmeleri"nden itibaren yeni bir dosyada yeni slug eşlemeleriyle
// devam edecektir.
//
// Onikinci batch, Beşinci Kitap "Deniz Ticareti"nin Dördüncü Kısmı
// "Deniz Ticareti Sözleşmeleri"ni (m.1119'dan itibaren) açar. Bu, çarter
// sözleşmelerini ve navlun ile eşya/yolcu taşıma sözleşmelerini kapsayan,
// kitabın en hacimli Kısımlarından biridir. Bu batch, bu yeni Kısmın
// Birinci Bölümü "Gemi Kira Sözleşmeleri"ni (m.1119-1130) baştan sona ve
// eksiksiz kapsar: A) Tanımı ve türleri - kiraya verenin belirli bir süre
// için geminin kullanılmasını kira bedeli karşılığında kiracıya bırakmayı
// üstlendiği sözleşme ile gemi adamlarının da birlikte verilmesinin
// sözleşmenin niteliğini değiştirmemesi, m.1119; B) Gemi kira senedi -
// taraflardan her birinin kendi giderine gemi kira çarter partisi
// düzenlenmesini isteme hakkı, m.1120; C) Sicile şerh - sözleşmenin Türk
// Gemi Siciline veya özel sicile şerhi ve bu şerhin sonraki maliklere
// kiracının gemiyi kullanmasına izin verme zorunluluğu yüklemesi, m.1121;
// D) Hüküm ve sonuçları - geminin kullanılmasından doğan üçüncü kişi
// istemlerinin kiracıya ait olması, m.1122 (I); kiraya verenin gemiyi
// denize elverişli ve amaca uygun teslim borcu, m.1123 (II); geminin
// ayıplarından doğan giderlerin kiraya verene, olağan bakım ve işletme
// giderlerinin kiracıya ait olması ile yirmidört saati aşan hareketsizlik
// hâlinde kira bedeli indirimi, m.1124 (III); kiracının gemiyi tahsis
// amacına uygun kullanma hakkı ve donatım malzemesini misli iade şartıyla
// kullanma hakkı, m.1125 (IV); kiracının sigorta yaptırma yükümlülüğü ve
// poliçede kiraya verenin ismen bildirilmesi ile "kimin olacaksa onun
// lehine" yaptırılması zorunluluğu, m.1126 (V); gemi adamlarının
// çalıştırılmasından doğan borçların kural olarak kiracıya ait olması,
// mürettebatlı kiralamada kiraya verenin müteselsil sorumluluğu, m.1127
// (VI); kira bedelinin aylık ve peşin ödenmesi ile kiraya verenin hapis
// hakkı, alacak rehni ve m.1201'deki hapis hakkından oluşan üçlü teminat
// paketi, m.1128 (VII); geminin teslim alındığı hâliyle iadesi, normal
// kullanımdan doğan aşınmadan sorumsuzluk ve gecikmeli iadede kademeli
// (ilk onbeş gün olağan, sonrası iki kat) tazminat, m.1129 (VIII); ve E)
// Uygulanacak hükümler - Türk Borçlar Kanununun adi kira sözleşmesi
// hükümlerinin nitelikleri elverdiği ölçüde uygulanması, m.1130 -
// kapsanmıştır. BU BATCH İLE BİRİNCİ BÖLÜM "GEMİ KİRA SÖZLEŞMELERİ"
// (m.1119-1130) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ
// TAMAMLANMIŞ olur. Dördüncü Kısım "Deniz Ticareti Sözleşmeleri" bundan
// sonra İkinci Bölüm "Zaman Çarteri Sözleşmesi" (m.1131'den itibaren) ile
// devam edecek, ardından geniş kapsamlı navlun sözleşmeleri ve eşya/
// yolcu taşıma sözleşmeleri Bölümleri izleyecek olup, kitabın devamında
// henüz kapsanmamış pek çok Kısım ve Bölüm (Deniz Kazaları - Çatma,
// Kurtarma, Müşterek Avarya -, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1130 aralığını kapsar ve ileriki batch'ler, İkinci Bölüm "Zaman
// Çarteri Sözleşmesi"nden itibaren yeni slug eşlemeleriyle devam
// edecektir.
//
// Onüçüncü ve bu dosya bakımından son batch, Dördüncü Kısım "Deniz Ticareti
// Sözleşmeleri"nin İkinci Bölümü "Zaman Çarteri Sözleşmesi"ni (m.1131-1137)
// baştan sona ve eksiksiz kapsar: A) Tanımı - tahsis edenin donatılmış bir
// geminin ticari yönetimini belli bir süre için ve bir ücret karşılığında
// tahsis olunana bırakmayı üstlenmesi ile teknik yönetimi elinde bulunduran
// tahsis edenin geminin zilyedi sayılması, m.1131; B) Zaman çarter partisi -
// taraflardan her birinin kendi giderine sözleşme şartlarını içeren bir
// zaman çarter partisi düzenlenmesini isteme hakkı, m.1132; C) Tarafların
// hakları ve borçları - I) Tahsis edenin borçları - geminin kararlaştırılan
// tarih ve yerde hazır bulundurulması ile sözleşme süresince denize ve yola
// elverişli ve amaca uygun bir hâlde bulundurulması, m.1133; II) Geminin
// ticari yönetimi - ticari yönetimin tahsis olunana ait olması ve kaptanın
// buna ilişkin talimatlara uyma zorunluluğu, m.1134; III) Giderler - geminin
// ticari işletilmesinden doğan, özellikle yakıt temini için gerekli
// giderler dâhil tüm giderlere tahsis olunanın katlanması, m.1135; IV)
// Ücret ödeme borcu ve teminatı - tahsis ücretinin aylık ve peşin ödenmesi,
// yirmidört saati aşan hareketsizlikte ücret muafiyeti ve tahsis edenin
// hapis hakkı, alacak rehni ile m.1201'deki hapis hakkından oluşan üçlü
// teminat paketi, m.1136; ve V) Tahsis olunanın sorumluluğu ve gemiyi iade
// yükümlülüğü - geminin ticari yönetiminden doğan zararlardan tahsis
// olunanın sorumluluğu ile gecikmeli iadede tahsis ücretinin iki katı
// tutarında tazminat, m.1137 - kapsanmıştır. BU BATCH İLE İKİNCİ BÖLÜM
// "ZAMAN ÇARTERİ SÖZLEŞMESİ" (m.1131-1137) İLK MADDESİNDEN SON MADDESİNE
// KADAR EKSİKSİZ TAMAMLANMIŞ olur. Dördüncü Kısım "Deniz Ticareti
// Sözleşmeleri" bundan sonra çok daha hacimli bir sonraki Bölüme, Üçüncü
// Bölüm "Navlun Sözleşmesi"ne (m.1138'den itibaren - yolculuk çarteri ve
// kırkambar sözleşmeleri, yükleme/boşaltma usulü, taşıyanın sorumluluğu ve
// hakları dâhil) geçecek olup, kitabın devamında henüz kapsanmamış pek çok
// Kısım ve Bölüm (Deniz Kazaları - Çatma, Kurtarma, Müşterek Avarya -, Gemi
// Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel
// Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya
// yalnızca yukarıda sayılan m.931-1137 aralığını kapsar ve ileriki
// batch'ler, Üçüncü Bölüm "Navlun Sözleşmesi"nden itibaren yeni slug
// eşlemeleriyle devam edecektir.
//
// Ondördüncü batch, Dördüncü Kısım "Deniz Ticareti Sözleşmeleri"nin Üçüncü
// Bölümü "Navlun Sözleşmesi"ni (m.1138'den itibaren) açar. Bu, gemi kira
// sözleşmeleri ve zaman çarteri sözleşmesinden çok daha hacimli, çarter
// partilerini ve taşıma senetlerini kapsayan, kitabın en büyük
// Bölümlerinden biridir. Bu batch, yeni Bölümün Birinci Ayırımı "Genel
// Hükümler"ini (m.1138-1141) baştan sona ve eksiksiz kapsar: navlun
// sözleşmesinin türleri - yolculuk çarteri sözleşmesinde geminin
// tamamının/bir kısmının/belli bir yerinin taşıtana tahsisi ile kırkambar
// sözleşmesinde ayırt edilmiş eşyanın taşınması ayrımı ve posta idaresinin
// deniz taşımalarının Bölüm dışında kalması, m.1138; yolculuk çarter
// partisi - taraflardan her birinin kendi giderine düzenlenmesini isteme
// hakkı, m.1139; kamaralar - geminin tamamının tahsisinde kamaraların
// hariç tutulmuş sayılması ve taşıtan izni olmaksızın kamaralara eşya
// yükletilememesi, m.1140; ve taşıyanın, gemiyi denize, yola ve yüke
// elverişli bulundurma yükümlülüğü - her türlü navlun sözleşmesinde geçerli
// bu temel yükümlülük, yükle ilgili olanlara karşı elverişsizlikten doğan
// sorumluluk ve tedbirli bir taşıyandan beklenen özenin gösterilmesine
// rağmen keşfedilemeyen eksiklik hâlinde kurtuluş imkânı, m.1141
// kapsanmıştır. Bu batch ayrıca İkinci Ayırım "Yükleme ve Boşaltma"nın,
// daha doğrusu "A) Yükleme" alt başlığının açılışını kapsar (m.1142-1151):
// demirleme yeri - kaptanın sözleşmede kararlaştırılan yere demirlemesi ve
// yalnızca liman/bölge kararlaştırılmışsa bekleme alanında yükleme yerinin
// belirlenmesini beklemesi, m.1142; yükleme giderleri - aksi
// kararlaştırılmadıkça eşyanın gemiye kadar taşıma giderinin taşıtana,
// yükleme giderinin taşıyana ait olması, m.1143; yüklenecek eşya -
// kararlaştırılandan başka eşya için taşıyanın durumu güçleşmedikçe kabul
// yükümlülüğü ve eşyanın ferden belirlenmiş olması hâlinde bu hakkın
// işlememesi, m.1144, doğru bildirimde bulunma yükümlülüğü - eşya hakkında
// taşıtan ve yükletenin tam ve doğru beyan yükümlülüğü ile taşıyana karşı
// doğrudan, diğer zarar görenlere karşı kusura bağlı iki kademeli
// sorumluluk, m.1145, caiz olmayan eşya ve yükleme hakkında - harp kaçağı
// veya yasaklı eşya yükleme ile kolluk/vergi/gümrük kurallarına aykırılık,
// kaptan onayının sorumluluğu kaldırmaması ve kaptanın tehlike hâlinde
// karaya çıkarma/denize atma yetkisi, m.1146, gizlice yüklenen eşya
// hakkında - kaptan bilgisi olmaksızın gizli yükleme yapanın sorumluluğu
// ile kaptanın karaya çıkarma, denize atma veya en yüksek navlunla gemide
// tutma yetkisi, m.1147, tehlikeli eşya hakkında - kaptan bilgisi
// olmaksızın yüklenen tehlikeli eşyada taşıtan/yükletenin kusursuz
// sorumluluğu, kaptanın her zaman ve heryerde eşyayı zararsız hâle
// getirme yetkisi ve kaptanın bilerek onay verdiği tehlikeli eşyanın
// zarar vermesi hâlinde dahi taşıyan/kaptanın tazminat yükümlülüğünün
// bulunmaması, m.1148, ve bilgi - taşıyan veya acentesinin bilgisinin
// m.1146-1148 bakımından kaptanın bilgisi sayılması, m.1149; başka gemiye
// yükleme ve aktarma - taşıtan izni olmaksızın başka gemiye yükleme
// yasağı, buna aykırılığın sorumluluk doğurması ve tehlike hâlinde
// yolculuk başladıktan sonraki aktarmaların istisna tutulması, m.1150; ve
// güverteye konacak eşya - kural olarak güvertede taşıma ve küpeşteye
// asma yasağı, yükletenle anlaşma/ticari teamül/mevzuat istisnaları,
// güverte kaydının taşıma senedine düşülmesi zorunluluğu ve iyiniyetli
// üçüncü kişilere karşı ileri sürülememesi, aykırı güverte taşımasında
// m.1178-1179'a göre sorumluluk ve m.1186/1187'ye göre sınırlama, ve
// ambarda taşıma anlaşmasına aykırı güverte taşımasının m.1187 anlamında
// kasıtlı/pervasız fiil sayılması, m.1151 kapsanmıştır. BU BATCH İLE
// BİRİNCİ AYIRIM "GENEL HÜKÜMLER" (m.1138-1141) İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur; İkinci Ayırım "Yükleme ve
// Boşaltma"nın geri kalanı, özellikle "A) Yükleme"nin süreler (hazırlık
// bildirimi, yükleme süresi, sürastarya), yolculuk başlamadan önce fesih,
// yüklemenin hiç veya süresinde yapılmaması, birden çok yükleten/taşıtan,
// kırkambar sözleşmesi ve belgeleri verme yükümlülüğü alt başlıklarını
// kapsayan m.1152-1165 aralığı ile "B) Boşaltma" (m.1166-1177) ileriki
// batch'lerde ele alınacak olup, bunların ardından çok önemli ve yoğun
// biçimde içtihada konu olan "Üçüncü Ayırım: Taşıyanın Sorumluluğu ve
// Hakları" (m.1178'den itibaren - yük zararlarından sorumluluk,
// sorumluluk sınırları, hak düşürücü süreler dâhil) izleyecektir; kitabın
// devamında henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz
// Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1151 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Onbeşinci batch, "A) Yükleme"nin "VI. Süreler" alt bölümünü
// (m.1152-1157) ve bunun doğrudan hukuki sonuçlarını düzenleyen
// "VII. Yolculuk başlamadan önce sözleşmenin feshi" (m.1158) ile
// "VIII. Yüklemenin hiç veya süresinde yapılmaması" (m.1159-1160) alt
// bölümlerini kapsar. "VI. Süreler" bakımından: hazırlık bildirimi -
// yüklemenin belli bir günde başlayacağı kararlaştırılmamışsa taşıyan
// veya temsilcisinin gemi m.1142'deki demirleme yerine varınca
// taşıtana bildirimde bulunması, yalnızca liman/bölge kararlaştırılmış
// hâllerde bekleme alanında kalma ve liman yönetimi talimatının
// taşıtan talimatı sayılması, taşıtandan başka bir muhataba bildirim
// gerektiğinde bulunamama/kaçınma hâlinde derhâl taşıtana bildirim ve
// bildirim girişim tarihinde yapılmış sayılma kurgusu, ve bildirimin
// şekle bağlı olmaması ama muhatabına ulaşması zorunluluğu, m.1152;
// yükleme süresi - hazırlık bildiriminin ulaşmasını izleyen ilk takvim
// gününden veya fiilen başlanmışsa o andan itibaren işlemeye başlaması,
// sözleşmede belirlenmemişse yirmidört saat kesintisiz çalışma
// varsayımıyla hesaplanması ve ayrı ücret kararlaştırılabilmesi,
// m.1153; sürastarya süresi - kararlaştırılmışsa taşıyanın yükleme
// süresinden fazla bekleme zorunluluğu, süre belirtilmeksizin
// sürastaryadan söz edilmişse on günlük yasal süre ve sürenin
// bildirime gerek kalmaksızın kendiliğinden başlaması, m.1154;
// sürastarya parası - miktarın sözleşmeyle sınırlanabilmesi veya
// zorunlu/yararlı giderler ölçütü, borçlusunun yükleme limanında
// taşıtan olması ve taşıyanın ödeme/teminat şartına bağlı bekleme ve
// tam zarar talebi hakkı, zaman birimi sonunda muacceliyet ve
// navluna ilişkin hükümlerin kıyasen dahi uygulanamaması, m.1155;
// yükleme ve sürastarya sürelerinin hesabı - yükleme süresinin
// takvime göre aralıksız hesaplanması, taşıtanın faaliyet alanındaki
// tesadüfi sebeplerin süreye dahil edilmesi, taşıyanın faaliyet
// alanındaki tesadüfi sebeplerin süreden sayılmaması, her iki tarafı
// ilgilendiren tesadüfi sebeplerin (fırtına, buz istilası, seferberlik)
// süreye eklenmesi ama yine de sürastarya parası doğurması, ve
// sürastarya süresinin -taşıyan kusuru hariç- bu hâllerden etkilenmeden
// kesintisiz hesaplanması, m.1156; ve hızlandırma primi - yüklemenin
// süresinden önce bitirilmesi hâlinde taşıyanın taşıtana ödeme
// yapmasını öngören anlaşmaların geçerliliği ve navlun belirlemeye
// ilişkin idari/mali/cezai hükümleri dolanma amacı taşıyan anlaşmaların
// geçersizliği, m.1157 kapsanmıştır. Bu batch ayrıca "VII. Yolculuk
// başlamadan önce sözleşmenin feshi" - taşıtanın gemi yüklemesini
// tamamlayıp yolculuğa çıkıncaya kadar fesih hakkı, fesih tazminatının
// yoksun kalınan kazanç ve doğmuş alacaklardan oluşması, tereddüt
// hâlinde toplam navlunun yüzde otuzunun karine sayılması, yeni navlun
// sözleşmeleriyle elde edilen kazancın mahsubu, eşya yüklendikten sonra
// fesihte boşaltma süresinin ayrıca beklenmesi ve bu zararın sürastarya
// ücretinden az olamaması, ve birden fazla yolculukta fesih hakkının
// ayrı ayrı veya birlikte kullanılabilmesi, m.1158; ve "VIII. Yüklemenin
// hiç veya süresinde yapılmaması" - 1) yüklemenin hiç yapılmaması:
// yükleme ve sürastarya süresi bittiği hâlde yükleme başlamamışsa
// taşıyanın sözleşmeyi feshedilmiş sayma veya beklemeye devam etme
// seçimlik hakları, feshi kabul edip tazminat isteyebilmek için yazılı
// bildirim zorunluluğu ve beklemeye devam edilirse tam zarar talebi,
// m.1159, ve 2) eksik yükleme: sürenin sonunda taşıyanın beklemek
// zorunda olmaması, taşıtan talimatıyla beklenirse gider/zarar talebi,
// taşıtanın yola çıkma istemi hâlinde taşıyanın tam navlun, doğmuş
// sürastarya ücreti, gider/zarar ve ek teminat talep edebilmesi ile
// başka eşyayla doldurulan alanın navlununun mahsubu, ve hiçbir talimat
// verilmemişse taşıyanın talimat istemli yazılı bildirimi ile süre
// sonunda sözleşmeyi feshedilmiş sayarak m.1158 haklarını kullanabilmesi,
// m.1160 kapsanmıştır. BU BATCH İLE "A) YÜKLEME"NİN SÜRELER, YOLCULUK
// BAŞLAMADAN FESİH VE YÜKLEMENİN HİÇ/EKSİK YAPILMAMASI ALT BÖLÜMLERİ
// (m.1152-1160) TAMAMLANMIŞ olur. "A) Yükleme"den geriye yalnızca "IX)
// Birden çok yükleten veya taşıtanın bulunması" (m.1161-1162), "X)
// Kırkambar sözleşmesi" yükleme hükümleri (m.1163-1164) ve "XI) Belgeleri
// verme yükümlülüğü" (m.1165) kalmakta olup, bunlar ileriki bir batch'te
// ele alınarak "A) Yükleme" tamamen kapatılacaktır; bunun ardından "B)
// Boşaltma" (m.1166-1177 - Yükleme ile büyük ölçüde paralel bir yapı
// izleyecektir) ve ardından kitabın en hacimli ve en yoğun içtihada konu
// olan bölümlerinden biri olan "Üçüncü Ayırım: Taşıyanın Sorumluluğu ve
// Hakları" (m.1178'den itibaren - yük zararlarından sorumluluk,
// sorumluluk sınırları, hak düşürücü süreler, fiilî taşıyanın
// sorumluluğu ve taşıyanın navlun hakları dâhil) izleyecektir; kitabın
// devamında henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz
// Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1160 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Onaltıncı ve bu dosya bakımından son batch, "A) Yükleme"nin geri kalan
// tamamını (m.1161-1165) kapsayarak bu alt başlığı baştan sona kapatır. Bu
// batch, "IX. Birden çok yükleten veya taşıtanın bulunması"nı (m.1161-1162:
// birden çok yükleten - yolculuk çarteri sözleşmesine veya taşıtanın
// sonradan verdiği geçerli talimata göre eşyanın aynı limanda birden çok
// kişiden teslim alınacağı hâllerde hazırlık bildiriminin yalnızca taşıtana
// yapılması, m.1152-1160 hükümlerinin birden çok yükleten bulunması dikkate
// alınmaksızın uygulanması ve yükletenlerin kendi eşyaları için yükleme
// yerinin değiştirilmesini isteyebilmesi -giderleri taşıtana ait olmak ve
// yükleme/sürastarya süreleri manevra sırasında işlemeye devam etmek
// kaydıyla-, m.1161, ve birden çok taşıtan - geminin belli kısımları veya
// yerleri için birden çok taşıtanla yapılan bağımsız yolculuk çarteri
// sözleşmelerinde m.1152-1157 hükümlerinin her sözleşme için ayrı ayrı
// uygulanması, ancak m.1158'deki fesih hâllerinde gemiye alınmış eşyanın
// boşaltılması yolculuğun gecikmesine veya aktarmaya sebep olabilecekse
// diğer bütün taşıtanların onayı alınmadıkça boşaltmanın istenememesi,
// m.1162) kapsar. Ardından "X. Kırkambar sözleşmesi"nin yükleme hükümlerini
// (m.1163-1164: yükleme anı - taşıtanın taşıyanın veya yetkili temsilcisinin
// çağrısı üzerine gecikmeden eşyayı yükleme zorunluluğu, gecikme hâlinde
// taşıyanın teslimi beklememesi ve taşıtanın -başka eşyadan elde edilen
// navlunun mahsubu kaydıyla- tam navlun ödeme yükümlülüğü, ve taşıyanın bu
// istemi ancak yola çıkmadan önce yazılı bildirimde bulunmuşsa ileri
// sürebilmesi, m.1163, ve taşıtanın sözleşmeyi feshetmesi - yüklemeden sonra
// tam navlun ve 1201 inci madde uyarınca teminat altına alınmış diğer
// alacakları ödeyerek veya 1202 nci madde uyarınca teminat vererek fesih
// hakkı, gemiye alınmış eşyanın boşaltılması yolculuğun gecikmesine veya
// aktarmaya sebep olabilecekse diğer bütün taşıtanların onayı şartı -m.1162
// ile birebir örtüşen bir cross-consent mekanizması- ve taşıyanın eşyanın
// çıkarılması için rota değiştirme veya limana uğrama zorunluluğunun
// bulunmaması, m.1164) kapsamıştır. Son olarak "XI. Belgeleri verme
// yükümlülüğü"nü (m.1165: her türlü navlun sözleşmesinde taşıtan ve
// yükletenin, eşyanın teslim alınacağı süre içinde eşyanın taşınması için
// gerekli belgeleri taşıyana verme zorunluluğu ve bu belgelerdeki
// yolsuzluklardan, özellikle gerçeğe uymayan beyanlardan doğan zararlardan
// taşıtan ve yükletenin taşıyana ve yükle ilgili diğer kişilere karşı 1145
// inci madde gereğince sorumlu olması) kapsayarak BU BATCH İLE "A) YÜKLEME"
// (m.1142-1165) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ
// olur. İkinci Ayırım "Yükleme ve Boşaltma" bundan sonra "B) Boşaltma"
// (m.1166-1177 - demirleme yeri, boşaltma giderleri, süreler, boşaltmanın
// hiç veya süresinde yapılmaması, kısmi çarter sözleşmelerinde ve kırkambar
// sözleşmesinde boşaltma dâhil, "A) Yükleme" ile büyük ölçüde paralel bir
// yapı izleyecektir) ile devam edecek olup, bunun ardından kitabın en
// hacimli ve en yoğun içtihada konu olan bölümlerinden biri olan "Üçüncü
// Ayırım: Taşıyanın Sorumluluğu ve Hakları" (m.1178'den itibaren - yük
// zararlarından sorumluluk, sorumluluk sınırları, hak düşürücü süreler,
// fiilî taşıyanın sorumluluğu ve taşıyanın navlun hakları dâhil)
// izleyecektir; kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1165 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Onyedinci ve bu dosya bakımından son batch, "B) Boşaltma"yı (m.1166-1177)
// baştan sona ve eksiksiz kapsayarak İkinci Ayırım "Yükleme ve Boşaltma"yı
// (m.1142-1177) tamamen kapatır. Bu batch, demirleme yeri - kaptanın eşyayı
// boşaltmak için gemiyi sözleşmede kararlaştırılan yere demirlemesi ve
// yalnızca liman/bölge kararlaştırılmışsa bekleme alanında boşaltma yerinin
// belirlenmesini beklemesi, m.1166 (I); boşaltma giderleri - aksi
// kararlaştırılmadıkça eşyanın gemiden çıkartılması giderinin taşıyana,
// geri kalan boşaltma giderlerinin gönderilene ait olması, m.1167 (II); ve
// süreler kümesinin tamamını (III) kapsar: hazırlık bildirimi - boşaltmanın
// belli bir günde başlayacağı kararlaştırılmamışsa taşıyan veya
// temsilcisinin gemi m.1166'daki demirleme yerine varınca gönderilene
// bildirimde bulunması, liman/bölge senaryosunda bekleme alanında kalma ve
// liman yönetimi talimatının gönderilenin talimatı sayılması, çarter
// partiye, konişmentoya veya taşıtanın talimatına göre gönderilenden başka
// bir muhataba bildirim gerektiğinde bulunamama/kaçınma hâlinde derhâl
// taşıtana bildirim ve bildirim girişim tarihinde yapılmış sayılma kurgusu,
// m.1168 (1); boşaltma süresi - hazırlık bildiriminin ulaşmasını izleyen
// ilk takvim gününden veya fiilen başlanmışsa o andan itibaren işlemeye
// başlaması ve sözleşmede belirlenmemişse çok faktörlü ölçütle
// hesaplanması, m.1169 (2); sürastarya süresi - kararlaştırılmışsa
// taşıyanın boşaltma süresinden fazla bekleme zorunluluğu, süre
// belirtilmeksizin sürastaryadan söz edilmişse on günlük yasal süre ve
// bildirime gerek kalmaksızın kendiliğinden başlaması, m.1170 (3);
// sürastarya parası - miktar ve muacceliyet kurallarının yükleme limanıyla
// aynı olması, ancak boşaltma limanında doğan sürastarya parasının
// borçlusunun -gönderilen değil- taşıtan olması ve m.1155/4'ün aksine
// taşıyana gemiyi alıkoyma hakkının tanınmamış olması, m.1171 (4);
// boşaltma ve sürastarya sürelerinin hesabı - gönderilenin faaliyet
// alanındaki tesadüfi sebeplerin süreye dahil edilmesi, taşıyanın faaliyet
// alanındaki tesadüfi sebeplerin süreden sayılmaması, ortak tesadüfi
// sebeplerin süreye eklenmesi ama yine de sürastarya parası doğurması ve
// sürastarya süresinin -taşıyan kusuru hariç- kesintisiz hesaplanması,
// m.1172 (5); ve hızlandırma primi - boşaltmanın süresinden önce
// bitirilmesi hâlinde taşıyanın taşıtana ödeme yapmasını öngören
// anlaşmaların geçerliliği ve navlun belirlemeye ilişkin hükümleri dolanma
// amaçlı anlaşmaların geçersizliği, m.1173 (6) kapsanmıştır. Bu batch
// ayrıca "IV) Boşaltmanın hiç veya süresinde yapılmaması" - gönderilenin
// hazır olduğunu bildirip de süresinde teslim almaması hâlinde taşıyanın
// Türk Borçlar Kanunu m.107-109'daki alacaklı temerrüdü haklarını
// kullanabilmesi, gönderilenin kaçınması/cevapsız kalması/bulunamaması
// hâlinde aynı yola başvurup taşıtana da bildirim zorunluluğu, ve
// gönderilenin gecikmesi veya tevdi işlemi yüzünden aşılan süre için
// sürastarya parası, sürastarya süresi sonrası gecikmeler için tam zarar
// istenebilmesi, m.1174; "V) Kısmi çarter sözleşmelerinde" - birden çok
// taşıtanla yapılan bağımsız yolculuk çarteri sözleşmelerinde m.1168 ilâ
// 1174'ün her sözleşme için ayrı ayrı uygulanması, m.1175; ve "VI)
// Kırkambar sözleşmesinde boşaltma" - gönderilenin çağrı üzerine
// gecikmeden teslim alma yükümlülüğü ve gönderilen tanınmıyorsa ilan
// yoluyla bildirim, m.1176 (1), ile taşıtanın üçüncü şahıslarla yaptığı
// kırkambar sözleşmelerinin, yolculuk çarteri taşıyanının m.1168-1174'e
// tabi hak ve yükümlülüklerini değiştirmemesi, m.1177 (2) kapsanmıştır. BU
// BATCH İLE "B) BOŞALTMA" (m.1166-1177) İLK MADDESİNDEN SON MADDESİNE
// KADAR EKSİKSİZ TAMAMLANMIŞ olur ve bununla birlikte İKİNCİ AYIRIM
// "YÜKLEME VE BOŞALTMA" (m.1142-1177) BAŞTAN SONA TAMAMEN KAPANMIŞ olur.
// Dördüncü Kısım "Deniz Ticareti Sözleşmeleri"nin Üçüncü Bölümü "Navlun
// Sözleşmesi" bundan sonra, kitabın en hacimli ve en yoğun içtihada konu
// olan Ayırımlarından biri olan "Üçüncü Ayırım: Taşıyanın Sorumluluğu ve
// Hakları" (m.1178'den itibaren) ile devam edecektir: A) Taşıyanın
// sorumluluğu - genel olarak, sorumluluktan kurtulma hâlleri, kusursuzluk
// karineleri, sebeplerin birleşmesi, inceleme ve bildirim, sorumluluğu
// sınırlandırma hakkı, tazminat istemi için süre, fiilî taşıyanın
// sorumluluğu; B) Taşıyanın hakları - navlun ödenmesini istem hakkı. Bu
// Ayırım, m.1141'deki elverişlilik yükümlülüğü ve bu dosyada işlenen
// hâkimiyet (custody) kavramları üzerine inşa edilecek olup, hacmi
// nedeniyle birden fazla ileriki batch'e yayılacaktır; kitabın devamında
// henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz Kazaları,
// Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin
// Özel Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu
// dosya yalnızca yukarıda sayılan m.931-1177 aralığını kapsar ve ileriki
// batch'ler, Üçüncü Ayırım "Taşıyanın Sorumluluğu ve Hakları"ndan itibaren
// yeni slug eşlemeleriyle devam edecektir.
//
// Onsekizinci batch, Üçüncü Ayırım "Taşıyanın Sorumluluğu ve Hakları"nın
// açılışını kapsar: "A) Taşıyanın sorumluluğu" başlığı altında "I. Genel
// olarak" (m.1178 - taşıyanın navlun sözleşmesinin ifasında, özellikle
// yükletme, istif, elden geçirme, taşıma, koruma, gözetim ve boşaltmada
// tedbirli bir taşıyandan beklenen özeni gösterme yükümlülüğü ile eşyanın
// zıyaı, hasarı veya geç tesliminden doğan zararlardan ancak bunların
// eşyanın taşıyanın hâkimiyetinde bulunduğu sırada meydana gelmiş olması
// şartıyla sorumlu olması, m.1178/1-2; hâkimiyetin başlangıcı - eşyanın
// yükletenden veya yükleme limanı makamlarından/üçüncü kişilerden teslim
// alındığı an - ve sona ermesi - gönderilene fiilen teslim, gönderilenin
// kaçınması hâlinde emre hazır tutulma (m.1174'teki tevdi mekanizmasıyla
// doğrudan bağlantılı) veya boşaltma limanı makamlarına/üçüncü kişilere
// teslim, hangisi önce gerçekleşirse, m.1178/3; sözleşmede kararlaştırılan
// veya olayın özelliklerine göre makul süre içinde teslim edilmemesi
// hâlinde teslimde gecikme karinesi, m.1178/4; ve teslim süresinin
// dolmasından itibaren aralıksız altmış gün içinde teslim olunmayan
// eşyanın zayi olmuş sayılabilmesi karinesi, m.1178/5) ve "II. Sorumluluktan
// kurtulma hâlleri"ni (m.1179-1181: 1) taşıyana yüklenemeyecek sebep -
// taşıyanın veya adamlarının kastından/ihmalinden doğmayan zarardan
// sorumsuzluk ile bunun ispat yükünün taşıyana ait olması ve "taşıyanın
// adamları" kavramının işlevsel-geniş tanımı, m.1179; 2) teknik kusur ve
// yangın - geminin sevkine veya teknik yönetimine ilişkin hareket ya da
// yangın sonucu zarardan taşıyanın yalnız kendi kusurundan sorumlu olması,
// yükün menfaati gereği alınan önlemlerin teknik yönetime dahil sayılmaması
// ve tereddüt hâlinde zararın teknik yönetimin sonucu olmadığının kabulü,
// m.1180; ve 3) denizde kurtarma - müşterek avarya hâli hariç can ve eşya
// kurtarmadan doğan zarardan sorumsuzluk ile salt eşya kurtarmaya yönelik
// teşebbüslerde ayrıca makul hareket tarzı şartı, m.1181) kapsar. Bu batch
// ayrıca "III. Taşıyanın kusursuzluk ve uygun illiyet bağı karinelerinden
// yararlandığı hâller"i (m.1182: denizin/suların tehlike ve kazaları, harp
// olayları/karışıklık/kamu düşmanı hareketleri/makam emirleri/karantina,
// mahkeme el koyma kararları, grev/lokavt, yükleten-taşıtan-malik ve
// adamlarının fiil/ihmali, kendiliğinden eksilme/gizli ayıp/doğal nitelik,
// ambalaj yetersizliği ve işaret yetersizliği şeklindeki sekiz bentlik
// kusursuzluk karinesi listesi, m.1182/1; taşıyanın sorumlu olduğu bir
// olayın bu sebeplerin ortaya çıkmasına yol açtığının ispatı hâlinde
// karineden yararlanılamaması, m.1182/2; ve zararın muhtemelen bu
// sebeplerden birinden ileri geldiği durumlarda -aksi ispatlanabilir-
// karine, m.1182/3) ve "IV. Sebeplerin birleşmesi"ni (m.1183 - taşıyan
// kusurunun başka bir sebeple birleşerek zarara yol açması hâlinde
// taşıyanın yalnızca kendi kusuruna bağlanabilen kısımdan sorumlu olması
// ve bu kısmi sorumluluk için kusura bağlanamayacak kısmın taşıyanca
// ispatı zorunluluğu) kapsayarak, taşıyanın hâkimiyet esaslı sorumluluk
// tetikleyicisi, ispat yükü tersine çevrilmiş kusur standardı, dar
// kapsamlı teknik kusur/yangın istisnası, sekiz bentlik kusursuzluk
// karinesi listesi ve karma nedensellikte kısmi sorumluluk kuralından
// oluşan temel sorumluluk mimarisini (m.1178-1183) tamamlar. Üçüncü
// Ayırım bundan sonra "V. İnceleme ve bildirim" (m.1184-1185), "VI.
// Sorumluluğu sınırlandırma hakkı" (m.1186-1187 - sorumluluk sınırları ve
// bu haktan kayıp), "VII. Tazminat istemi için süre" (m.1188-1189 - hak
// düşürücü süre), "VIII. Sözleşme dışı istemler" (m.1190) ve "IX. Fiilî
// taşıyanın sorumluluğu" (m.1191-1192) ile devam edecek, ardından "B)
// Taşıyanın hakları" (m.1193'ten itibaren - navlun ödenmesini istem hakkı)
// izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1183 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Ondokuzuncu batch, Üçüncü Ayırım "Taşıyanın Sorumluluğu ve Hakları"nın "V.
// İnceleme ve bildirim" alt başlığını (m.1184-1185) baştan sona kapsar. Bu
// batch, m.1184'ü - gönderilenin eşyayı teslim almadan önce taşıyan, kaptan
// veya gönderilenin, eşyanın hâl ve durumunu, ölçü, sayı veya tartısını
// tespit ettirmek amacıyla mahkemeye, yetkili diğer makamlara veya bu husus
// için yetkili uzmanlara inceletebilmesi ve mümkün oldukça diğer tarafın da
// incelemede hazır bulundurulması, m.1184/1; inceleme giderlerinin kural
// olarak başvuruda bulunana ait olması, ancak sonuçta taşıyanın tazminat
// vermesi gereken bir zıya veya hasar belirlenirse giderlerin taşıyana
// geçmesi, m.1184/2 - ve m.1185'i - zıya veya hasarın en geç teslim
// sırasında, haricen belli değilse teslim tarihinden itibaren aralıksız üç
// gün içinde yazılı olarak bildirilmesi ve ihbarnamede zararın genel olarak
// belirtilmesi zorunluluğu, m.1185/1; eşyanın incelenmesinin tarafların
// katılımıyla mahkeme, yetkili makam veya resmen atanmış uzmanlarca
// yapılmış olması hâlinde ayrıca bildirime gerek olmaması, m.1185/2;
// gerçek veya muhtemel zıya/hasar hâlinde taşıyan ve gönderilenin eşyanın
// incelenmesi ve koli sayısının belirlenmesi için karşılıklı kolaylık
// gösterme yükümlülüğü, m.1185/3; zıya veya hasarın ne bildirilmiş ne de
// tespit ettirilmiş olması hâlinde taşıyanın eşyayı taşıma senedinde yazılı
// olduğu gibi teslim ettiği ve sonradan belirlenen zararın taşıyanın
// sorumlu olmadığı bir sebepten ileri geldiği yönündeki -aksi ispatlanabilir-
// çifte karine, m.1185/4; teslimdeki gecikmenin, teslim tarihinden itibaren
// aralıksız altmış gün içinde yazılı olarak bildirilmesi zorunluluğu ve
// süresinde bildirilmeyen gecikme zararları için tazminat ödenmemesi,
// m.1185/5; ve eşyanın fiilî taşıyan tarafından teslimi hâlinde kendisine
// veya taşıyana yapılan bildirimin karşılıklı olarak diğerine yapılmış
// sayılması ile kaptan ve sorumlu gemi zabiti dâhil taşıyan veya fiilî
// taşıyan ad ve hesabına hareket eden bir kişiye yapılan bildirimin
// taşıyana veya fiilî taşıyana yapılmış sayılması, m.1185/6 - kapsanmıştır.
// BU BATCH İLE "V. İNCELEME VE BİLDİRİM" (m.1184-1185) İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Üçüncü Ayırım bundan sonra
// "VI. Sorumluluğu sınırlandırma hakkı" (m.1186-1187 - sorumluluk sınırları/
// SDR bazlı hesaplama, sorumluluğu sınırlandırma hakkının kaybı), "VII.
// Tazminat istemi için süre" (m.1188-1189 - bir yıllık hak düşürücü süre,
// hak düşürücü süre itirazından yararlanma hakkının kaybı), "VIII. Sözleşme
// dışı istemler" (m.1190) ve "IX. Fiilî taşıyanın sorumluluğu" (m.1191-1192)
// ile devam edecek, ardından "B) Taşıyanın hakları" (m.1193'ten itibaren)
// izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1185 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Yirminci batch, Üçüncü Ayırım "Taşıyanın Sorumluluğu ve Hakları"nın "VI.
// Sorumluluğu sınırlandırma hakkı" alt başlığını (m.1186-1187) baştan sona
// kapsar. Bu batch, m.1186'yı - eşyanın uğradığı her türlü zıya veya hasar
// nedeniyle taşıyanın, koli veya ünite başına 666,67 Özel Çekme Hakkı (SDR)
// ile zıyaa/hasara uğrayan eşyanın gayri safî ağırlığının her bir kilogramı
// için 2 SDR'den hangisi yüksekse o sınırla sorumlu olması ve eşyanın cinsi/
// değeri yüklemeden önce bildirilip taşıma senedine yazılmışsa bu istisnanın
// devreye girmesi, SDR'nin fiilî ödeme günündeki TCMB kuruna göre TL'ye
// çevrilmesi, m.1186/1; tazminat toplamının eşyanın boşaltıldığı veya
// boşaltılması gereken yerdeki ve tarihteki değerine göre, borsa fiyatı/cari
// piyasa fiyatı/olağan değer hiyerarşisiyle hesaplanması, m.1186/2; eşya
// konteyner/palet gibi bir taşıma gerecine topluca konmuşsa taşıma senedinde
// içerik olarak yazılmış her koli/ünitenin ayrı sayılması, aksi hâlde taşıma
// gerecinin tek koli sayılması ve bizzat taşıma gerecinin zıyaında -taşıyana
// ait olmadıkça- ayrı bir koli sayılması, m.1186/3; yükletenin bildiriminin
// taşıma senedine yazılmışsa karine oluşturması ama taşıyan bakımından
// bağlayıcı olmaması ve m.1239/3'ün bu kayıtlara uygulanmaması, m.1186/4;
// yükletenin cins/değeri kasten gerçeğe aykırı bildirmesi hâlinde taşıyanın
// hiçbir şekilde sorumlu olmaması, m.1186/5; taşıma süresinin aşılmasından
// doğan sorumluluğun geciken eşya için ödenecek navlunun iki buçuk katıyla,
// bu tutarın da toplam navlun miktarıyla sınırlı olması, m.1186/6; birinci ve
// altıncı fıkraların birlikte uygulanması hâlinde toplam sorumluluğun tam
// zıya tazminatını aşamaması, m.1186/7; ve tarafların birinci/altıncı
// fıkralardaki sınırlardan daha yüksek tutarlar kararlaştırabilmesi, ancak
// birinci fıkra bakımından kararlaştırılan sınırın o fıkradaki daha yüksek
// sınırın altında olamaması, m.1186/8 - kapsar. Bu batch ayrıca m.1187'yi -
// zarara veya teslimdeki gecikmeye kasten veya pervasızca bir davranışla ve
// böyle bir zararın/gecikmenin meydana gelmesi ihtimalinin bilinciyle
// işlenmiş bir fiil/ihmalin sebebiyet verdiği ispat edildiğinde taşıyanın
// 1186 ncı maddedeki sorumluluk sınırlarından yararlanamaması, m.1187/1; ve
// aynı standarda uyan taşıyanın adamlarının da 1190 ıncı maddenin ikinci
// fıkrasına dayanarak bu sınırlardan yararlanamaması, m.1187/2 - kapsayarak
// BU BATCH İLE "VI. SORUMLULUĞU SINIRLANDIRMA HAKKI" (m.1186-1187) İLK
// MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Üçüncü Ayırım
// bundan sonra "VII. Tazminat istemi için süre" (m.1188-1189 - bir yıllık
// hak düşürücü süre, rücu davası için doksan günlük ek süre, hak düşürücü
// süre itirazından yararlanma hakkının kaybı), "VIII. Sözleşme dışı
// istemler" (m.1190) ve "IX. Fiilî taşıyanın sorumluluğu" (m.1191-1192) ile
// devam edecek, ardından "B) Taşıyanın hakları" (m.1193'ten itibaren)
// izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1187 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Yirmibirinci batch, Üçüncü Ayırım "Taşıyanın Sorumluluğu ve Hakları"nın
// "VII. Tazminat istemi için süre" alt başlığını (m.1188-1189) baştan sona
// kapsar. Bu batch, m.1188'i - eşyanın zıyaı veya hasarı ile geç
// tesliminden dolayı taşıyana karşı her türlü tazminat istem hakkının bir
// yıl içinde yargı yoluna başvurulmadığı takdirde düşmesi, m.1188/1; bu
// sürenin taşıyanın eşyayı veya bir kısmını teslim ettiği veya eşya hiç
// teslim edilmemişse onun teslim edilmesinin gerektiği tarihten itibaren
// işlemeye başlaması, m.1188/2; sorumlu tutulan kişinin rücu davasının
// birinci fıkradaki hak düşürücü sürenin sona ermesinden sonra da
// açılabilmesi, ancak bu hakkın tazminat bedelinin ödendiği veya dava
// dilekçesinin tebellüğ edildiği tarihten itibaren doksan gün içinde
// kullanılmadıkça düşmesi, m.1188/3; ve bu sürenin tarafların dava
// sebebinin doğmasından sonra yapacakları bir anlaşmayla uzatılabilmesi,
// m.1188/4 - kapsar. Bu batch ayrıca m.1189'u - tazminat isteminin
// muhatabının, zarar göreni dava açma süresini kaçırması sonucunu
// doğuracak şekilde oyalaması hâlinde hak düşürücü sürenin geçmiş olduğu
// itirazından yararlanamaması, m.1189/1; ve bu takdirde dava açma
// süresinin, zarar görenin bu durumu öğrendiği tarihten itibaren yeniden
// işlemeye başlaması, m.1189/2 - kapsayarak BU BATCH İLE "VII. TAZMİNAT
// İSTEMİ İÇİN SÜRE" (m.1188-1189) İLK MADDESİNDEN SON MADDESİNE KADAR
// EKSİKSİZ TAMAMLANMIŞ olur. Üçüncü Ayırım bundan sonra "VIII. Sözleşme
// dışı istemler" (m.1190 - taşıyanın savunma ve sınırlama haklarının
// eşya zararına dayanan sözleşme dışı istemlere genişletilmesi) ve "IX.
// Fiilî taşıyanın sorumluluğu" (m.1191-1192) ile devam edecek, ardından
// "B) Taşıyanın hakları" (m.1193'ten itibaren - navlun ödenmesini istem
// hakkı) izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda
// Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1189 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Yirmiikinci ve bu dosya bakımından son batch, Üçüncü Ayırım "Taşıyanın
// Sorumluluğu ve Hakları"nın "VIII. Sözleşme dışı istemler" (m.1190) ve "IX.
// Fiilî taşıyanın sorumluluğu" (m.1191-1192) alt başlıklarını kapsar. Bu
// batch, m.1190'ı - taşıyanın sorumluluktan kurtulması hâlleri ile
// sorumluluğu sınırlandırılmasına ilişkin hükümlerin, navlun sözleşmesine
// konu eşyanın zıya, hasar veya geç teslimi yüzünden taşıyan aleyhine
// haksız fiile veya diğer bir sebebe dayanılarak açılacak bütün davalarda
// uygulanması, m.1190/1; böyle bir davanın taşıyanın adamlarından biri
// aleyhine açılması hâlinde, o adamın da görevi veya yetkisi sınırları
// içinde hareket ettiğini ispat etmek kaydıyla aynı kurtulma hâlleri ve
// sınırlandırma hakkından yararlanabilmesi, m.1190/2; ve taşıyan ile
// adamlarından istenebilecek tazminat miktarlarının toplamının, 1187 nci
// madde hükmü saklı kalmak kaydıyla, 1186 ncı maddedeki sorumluluk sınırını
// aşamaması, m.1190/3 - kapsar. Bu batch ayrıca m.1191'i - taşımanın
// gerçekleştirilmesinin kısmen veya tamamen bir fiilî taşıyana bırakıldığı
// takdirde taşıyanın, navlun sözleşmesine göre bu bırakma hakkına sahip
// olup olmadığı dikkate alınmaksızın taşımanın tamamından sorumlu kalmaya
// devam etmesi ve fiilî taşıyan ile onun taşıma borcunun ifasında
// kullandığı, görevi/yetkisi sınırı içinde hareket eden adamlarının fiil ve
// ihmallerinden de bu Kanun hükümlerine göre sorumlu olması, m.1191/1; bu
// Kanunun taşıyanın sorumluluğuna ilişkin tüm hükümlerinin fiilî taşıyanın
// bizzat gerçekleştirdiği taşımadan sorumluluğu hakkında da geçerli olması
// ve fiilî taşıyanın adamları aleyhine dava açılması hâlinde 1187/2 ile
// 1190/2-3'ün uygulanması, m.1191/2; taşıyanın kanunen kendisine
// yüklenmeyen bir borç/yükümlülüğü üstlenmesi veya tanınan bir haktan
// vazgeçmesi sonucunu doğuran özel anlaşmaların, açık ve yazılı onayı
// olmadıkça fiilî taşıyanı bağlamaması ama taşıyanı bağlamaya devam etmesi,
// m.1191/3; taşıyan ile fiilî taşıyanın aynı zarardan sorumlu oldukları
// takdirde ve ölçüde müteselsil sorumlu olmaları, m.1191/4; taşıyan, fiilî
// taşıyan ve adamları tarafından ödenecek tazminatın toplamının kanundaki
// sorumluluk sınırlarını aşamaması, m.1191/5; ve bu madde hükümlerinin
// taşıyan ile fiilî taşıyan arasındaki rücu ilişkisini etkilememesi,
// m.1191/6 - kapsar. Son olarak bu batch m.1192'yi - 1191/1 hükmüne halel
// gelmemek kaydıyla, navlun sözleşmesinde taşımanın belirli bir kısmının
// taşıyandan başka bir kişi tarafından gerçekleştirileceğinin öngörülmüş
// olması durumunda, eşya fiilî taşıyanın hâkimiyetinde iken meydana gelecek
// zıya, hasar veya teslimdeki gecikmeden taşıyanın sorumlu olmayacağına
// ilişkin şart konabilmesi, ancak bu şartın yetkili Türk mahkemesinde fiilî
// taşıyan aleyhine dava açılamadığı hâllerde geçersiz olması ve zararın
// fiilî taşıyanın hâkimiyetinde meydana geldiğini ispat yükünün taşıyana
// ait olması, m.1192/1; şartın geçerliğinin, fiilî taşıyanın adı, unvanı ve
// işyeri adresinin navlun sözleşmesinden anlaşılmasına, belirlenmemişse
// taşıyanın belirlendiği anda ve en geç eşyanın fiilî taşıyana teslimini
// takiben derhâl gönderilene bildirimde bulunmasına bağlı olması ve
// bildirim yapılmazsa taşıyanın sorumluluğunun devam etmesi, m.1192/2; ve
// fiilî taşıyanın, eşyanın hâkimi olduğu sırada ortaya çıkan zıya, hasar
// veya gecikmeden 1191/2 uyarınca sorumlu olması, m.1192/3 - kapsayarak BU
// BATCH İLE "A) TAŞIYANIN SORUMLULUĞU" (m.1178-1192) İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Üçüncü Ayırım bundan sonra "B)
// Taşıyanın hakları" (m.1193'ten itibaren - "I. Navlun ödenmesini istem
// hakkı", m.1193-1198: ölçü/tartı/sayı üzerine navlun, zaman üzerine
// navlun, navlun kararlaştırılmamışsa, navlun dışında kalan prim ve
// giderler, navlunun muacceliyeti, eşyanın navlun yerine bırakılması) ile
// devam edecek olup, kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1192 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Yirmiüçüncü ve bu dosya bakımından son batch, Üçüncü Ayırım "Taşıyanın
// Sorumluluğu ve Hakları"nın "B) Taşıyanın hakları" başlığını açar: "I.
// Navlun ödenmesini istem hakkı" (m.1193-1198). Bu batch, navlun miktarının
// ölçü, tartı veya sayı üzerine kararlaştırılmış olması hâlinde, tereddüt
// hâlinde, gönderilene teslim edilen eşyanın ölçü, tartı veya sayısına göre
// belirlenmesi, m.1193; zaman üzerine kararlaştırılmış navlunun -yüklemenin
// belli bir günde başlayacağı öngörülmüşse o günden, değilse 1152 nci madde
// uyarınca hazırlık bildiriminde bulunulduğu günü izleyen günden, safra ile
// yolculukta ise yolculuğa hazır olunduğunun haber verildiği günü izleyen
// günden ya da geminin yola çıktığı günden itibaren- işlemeye başlaması,
// sürastarya süresince işlememesi, boşaltmanın tamamlandığı günden sonra
// işlememesi ve taşıyanın kusuru olmaksızın yolculuk gecikir veya kesilirse
// 1221/1 ve 1222/2 hükümleri saklı kalmak üzere araya giren günler için de
// ödenmesi, m.1194; navlun miktarı kararlaştırılmamışsa yükleme zamanı ve
// yerinde mutat olan navlunun ödenmesi ile taşınmak üzere teslim alınan
// eşya kararlaştırılmış olandan fazla ise fazlası için de sözleşmede
// belirlenen miktarın oranlanmasına göre navlun ödenmesi, m.1195; taşıyanın
// navlun dışında pey akçesi, prim, bahşiş ve benzeri bir ad altında başkaca
// istemde bulunamaması, aksine sözleşme yoksa gemiciliğin olağan ve
// olağanüstü giderlerinin -özellikle kılavuz, liman, fener, römorkaj,
// karantina, buz kırdırma ve benzeri hizmetlere ilişkin resim ve ücretler
// ile bu giderleri doğuran sebeplere ilişkin önlemlerin- navlun
// sözleşmesi hükümlerine göre yükümlü olmasa bile yalnız taşıyana düşmesi,
// ve bu kuralın müşterek avarya hâlleri ile eşyanın korunması, emniyet
// altına alınması ve kurtarılması için yapılan giderlere uygulanmaması,
// m.1196; navlunun eşyanın tesliminin istendiği anda ve her hâlde
// boşaltma süresinin sonunda muaccel olması, m.1197; ve taşıyanın,
// bozulmuş veya hasarlanmış olup olmadığına bakılmaksızın eşyayı navlun
// yerine kabul etmek zorunda tutulamaması, m.1198 - kapsamıştır. Üçüncü
// Ayırım'ın "B) Taşıyanın hakları" başlığı bundan sonra "I. Navlun
// ödenmesini istem hakkı" başlığının m.1198'den sonra hangi maddeyle
// devam ettiği veya "B) Taşıyanın hakları"nın bir sonraki numaralı alt
// başlığı ile ilerleyecek olup, bu kapsam ileriki bir batch'te
// mevzuat.gov.tr üzerinden ayrıca teyit edilecektir (chunk 16 metni,
// m.1198'in hemen ardından "4. Zıyaa uğrayan eşyanın durumu" başlığının
// ortasında kesilmiş olup, bu başlığa ve sonrasına ilişkin resmi metin
// henüz alınmamıştır); kitabın devamında henüz kapsanmamış çok sayıda
// Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1198 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Yirmidördüncü ve bu dosya bakımından son batch, "B) Taşıyanın hakları"
// başlığının geri kalanının tamamını kapsayarak hem bu alt başlığı hem de
// içinde bulunduğu "Üçüncü Ayırım: Taşıyanın Sorumluluğu ve Hakları"nı
// (m.1178-1207) baştan sona kapatır. Bu batch, önce "I. Navlun ödenmesini
// istem hakkı"nın kalan iki maddesini tamamlar: "4. Zıyaa uğrayan eşyanın
// durumu" - boşaltma süresinin sonuna kadar bir kaza sonucunda zıyaa
// uğrayan eşya için navlun ödenmemesi ve peşin ödenmişse geri alınması,
// navlun götürü kararlaştırılmışsa kısmi zıyada oransal indirim hakkı,
// niteliği itibarıyla içinden bozulma/kendiliğinden eksilme/olağan akma ve
// sızma yüzünden zıyaa uğrayan eşya ile yolda ölen hayvanlar için teslim
// edilmiş olup olmadığına bakılmaksızın navlun ödenmesi (m.1182/1(f)'deki
// kusursuzluk karinesiyle bağlantılı istisna) ve müşterek avarya dolayısıyla
// feda edilen eşyaya düşen navlun için garame paylarında müşterek avarya
// hükümlerinin uygulanması, m.1199; ve "5. Navlun borçlusu" - navlunun
// borçlusunun taşıtan olması, m.1200. Ardından "II. Hapis hakkı"nı
// (m.1201-1202) kapsar: "1. Genel olarak" - taşıyanın navlun sözleşmesinden
// doğan bütün alacakları için TMK m.950-953 uyarınca eşya üzerinde hapis
// hakkına sahip olması, hapis hakkının eşya taşıyanın zilyetliğinde
// bulunduğu sürece devam etmesi ve teslimden sonra dahi otuz gün içinde
// mahkemeye müracaat edilmek ve eşya henüz gönderilenin zilyetliğinde
// bulunmak şartıyla kullanılabilmesi, hapis hakkının yalnızca üzerinde
// kullanıldığı eşyanın taşındığı yolculuktan doğan alacakları teminat altına
// alması ve ancak alacağı teminata alacak miktardaki eşya üzerinde
// kullanılabilmesi -müşterek avarya ve kurtarma alacakları için eşyanın
// tümü üzerinde kullanılabilmesi istisnası saklı kalmak üzere-, m.1201; ve
// "2. Çekişmeli tutarın yatırılması ve teminat" - taşıyanın alacakları
// hakkında uyuşmazlık çıkması hâlinde çekişmeli tutar mahkemece belirlenecek
// yere yatırılır yatırılmaz eşyayı teslim etme zorunluluğu ve taşıyanın
// eşyanın tesliminden sonra yeterli teminat göstererek yatırılmış tutarı
// çekebilmesi, m.1202. Son olarak bu batch, "III. Üçüncü kişi gönderilenin
// durumu"nu (m.1203-1207) baştan sona kapsar: "1. Ödeme yükümlülüğünün
// doğması" - eşyanın taşıtandan başka bir kişiye teslim edilecek olması
// hâlinde bu kişinin, navlun sözleşmesi/konişmento/diğer bir denizde taşıma
// senedi uyarınca eşyanın teslimini istediğinde bu belgenin hükümlerine göre
// ödemeye yetkili kılındığı bütün alacakları ödemekle yükümlü olması, m.1203;
// "2. Gönderilene karşı hapis hakkının kullanılması" - gönderilenin, eşyanın
// teslimini istediği andan itibaren sadece 1203 üncü maddedeki alacaklar
// için hapis hakkının kullanılmasına katlanma zorunluluğu, 1398-1400 üncü
// maddelere göre yürütülecek takiplerde bildirim ve tebliğlerin önce
// gönderilene, gönderilen bulunamaz veya kaçınırsa taşıtana yapılması, ve
// eşyanın tek bir navlun sözleşmesine dayanılarak taşınıp birden çok
// konişmentoya/taşıma senedine dayanılarak çeşitli gönderilenlere teslim
// edileceği hâllerde hapis hakkının her konişmentoya isabet eden alacaklar
// için ayrı ayrı kullanılması, m.1204; ve "3. Rücu hakkı" - eşyayı
// gönderilene teslim etmiş olan taşıyanın 1203 üncü maddeye göre
// gönderilenden istenebilecek alacakları taşıtandan isteyememesi, ancak
// taşıtanın sebepsiz zenginleştiği oranda rücu edebilmesi (a) Eşyanın
// teslimi hâlinde, m.1205); taşıyanın hapis hakkı kullandığı eşyanın paraya
// çevrilmesinden alacağını tamamen alamadığı oranda taşıtandan
// isteyebilmesi (b) Hapis hakkının paraya çevrilmesi hâlinde, m.1206); ve
// gönderilen teslim isteme hakkını kullanmazsa taşıtanın navlun sözleşmesi
// gereğince navlunu ve diğer alacakları taşıyana ödemekle yükümlü kalması
// ile bu hâlde taşıtanın boşaltmayla ilgili hükümler bakımından gönderilen
// yerine geçmesi (c) Gönderilenin eşyayı teslim almaması hâlinde, m.1207) -
// kapsanmıştır. BU BATCH İLE "B) TAŞIYANIN HAKLARI" (m.1193-1207) VE
// BÖYLECE ÜÇÜNCÜ AYIRIM "TAŞIYANIN SORUMLULUĞU VE HAKLARI" (m.1178-1207)
// İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Dördüncü
// Kısım "Deniz Ticareti Sözleşmeleri"nin Üçüncü Bölümü "Navlun Sözleşmesi"
// bundan sonra "Dördüncü Ayırım: Taşıtanın ve Yükletenin Sorumluluğu"
// (m.1208'den itibaren - taşıtan ve yükletenin, kendilerinin veya
// adamlarının kusurundan kaynaklanmadıkça taşıyanın/fiilî taşıyanın geminin
// zıyaı veya hasarı dolayısıyla uğradığı zarardan sorumlu olmaması, m.1208 -
// karşılaştırmalı olarak kısa bir Ayırım olup muhtemelen "Beşinci Ayırım:
// Yolculuğun Başlamasına veya Devamına Engel Olan Sebepler Yüzünden
// Sözleşmenin Sona Ermesi"nin açılışıyla aynı veya buna yakın bir ileriki
// batch'te birleştirilecektir) ile devam edecek olup, kitabın devamında
// henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi
// Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel
// Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya
// yalnızca yukarıda sayılan m.931-1207 aralığını kapsar ve ileriki batch'ler
// yeni slug eşlemeleriyle devam edecektir.
//
// Yirmibeşinci batch, "Dördüncü Ayırım: Taşıtanın ve Yükletenin
// Sorumluluğu"nu (m.1208) baştan sona ve eksiksiz kapsayarak bu kısa
// Ayırımı kapatır: "A) Kusur sorumluluğu" - taşıtan ve yükletenin,
// kendilerinin veya adamlarının kusurundan kaynaklanmış olmadıkça,
// taşıyanın veya fiilî taşıyanın geminin zıyaı veya hasarı dolayısıyla ya
// da diğer bir sebeple uğradığı zarardan sorumlu olmaması ve özel
// hükümlerin saklı tutulması, m.1208. Bu batch ayrıca "Beşinci Ayırım:
// Yolculuğun Başlamasına veya Devamına Engel Olan Sebepler Yüzünden
// Sözleşmenin Sona Ermesi"nin açılışını kapsar: "A) Sözleşmenin hükümden
// düşmesi → I. Geminin zayi olması sebebiyle" alt başlığının tamamını
// (m.1209-1213): yolculuk başlamadan önce geminin umulmayan bir hâl
// yüzünden zayi olması hâlinde iki taraftan birinin ötekine tazminat
// vermekle yükümlü olmaksızın navlun sözleşmesinin hükümden düşmesi ve
// yalnızca zıya anına kadar doğmuş borçların ifasının gerekmesi, m.1209
// (1. Yolculuk başlamadan önce); yolculuk başladıktan sonra geminin zayi
// olması hâlinde taşıyana o ana kadar doğmuş alacakları dışında mesafe
// navlunu ödenmesi gerekmesi, mesafe navlununun kurtarılan eşyanın
// miktarına, alınan mesafeye, yolculuğun giderlerine/süresine/rizikolarına
// göre hakkaniyete uygun hesaplanması ve kurtarılan eşyanın emniyet altına
// alındığı yer ve tarihteki değerini aşamaması, m.1210 (2. Yolculuk
// başladıktan sonra - a) Mesafe navlunu); sözleşmenin hükümden düşmesinin
// kaptanın 1112 nci madde gereğince yükle ilgili olanların menfaatini
// koruma yükümlülüğünü ortadan kaldırmaması, acil hâllerde danışmaya gerek
// olmaksızın eşyayı başka gemiyle taşıtma/depo ettirme/satma yetkisi ve bu
// amaçla rehnetme/kısmen satma yetkisi, taşıyanın mesafe navlunu/alacakları
// ile müşterek avarya garame payları/kurtarma alacakları ödenmedikçe veya
// teminat gösterilmedikçe kaptanın eşyayı elden çıkarmaya zorunlu olmaması,
// ve donatanın da kaptanın bu yükümlülükleri ifasından doğan zararlardan
// taşıyanla birlikte sorumlu olması, m.1211 (b) Kaptanın yükümlülükleri);
// sözleşmede ismen kararlaştırılmış gemi dışında başka bir gemiye
// yükleme/aktarmaya önceden yetkili olan taşıyanın, bu geminin zıyaı
// hâlinde taşımayı başka uygun bir gemiyle yapabilmesi/tamamlatabilmesi ve
// seçimini gecikmeksizin taşıtana bildirme yükümlülüğü, m.1212 (3. Başka
// gemiye yükleme ve aktarma); ve denize elverişsiz hâle gelmiş geminin
// mahkemenin tespit kararıyla zayi olmuş sayılması, m.1213 (4. Geminin
// denize elverişsiz hâle gelmesi) - kapsanmıştır. BU BATCH İLE "DÖRDÜNCÜ
// AYIRIM: TAŞITANIN VE YÜKLETENİN SORUMLULUĞU" (m.1208) İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur ve "Beşinci Ayırım"ın "A)
// Sözleşmenin hükümden düşmesi → I. Geminin zayi olması sebebiyle" alt
// başlığı (m.1209-1213) de baştan sona kapanmış olur. Beşinci Ayırım bundan
// sonra "II. Eşyanın zayi olması sebebiyle" (m.1214'ten itibaren - geminin
// değil eşyanın zayi olması hâlinde sözleşmenin âkıbeti, sözleşmede ferden
// belirlenmiş/tür-cinsiyle belirlenmiş eşya ayrımı, yolculuk
// başlamadan/başladıktan sonra ayrımı) ile devam edecek olup, kitabın
// devamında henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz
// Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1213 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Yirmialtıncı ve bu dosya bakımından son batch, "Beşinci Ayırım: Yolculuğun
// Başlamasına veya Devamına Engel Olan Sebepler Yüzünden Sözleşmenin Sona
// Ermesi"nin "A) Sözleşmenin hükümden düşmesi → II. Eşyanın zayi olması
// sebebiyle" alt başlığını (m.1214-1217) baştan sona ve eksiksiz kapsar: "1.
// Yolculuk başlamadan önce" - a) Eşya sözleşmede ferden belirlenmişse:
// ferden belirlenen eşyanın tamamının umulmayan bir hâl yüzünden zayi
// olması hâlinde navlun sözleşmesinin taraflardan biri ötekine tazminat
// vermekle yükümlü olmaksızın hükümden düşmesi, ancak o ana kadar doğmuş
// alacakların ifasının gerekmesi; eşyanın bir kısmının zayi olması hâlinde
// taşıtanın kararlaştırılan navlunun yarısını ödeyerek sözleşmeyi feshetme
// veya taşıyanın durumunu güçleştirmemek şartıyla başka eşya yükleme
// seçimlik haklarına sahip olması ve bu hakları gemi limandan ayrılana
// kadar kullanmadığı takdirde tam navlun ödemekle yükümlü kalması; ikame
// eşya yüklemeyi tercih eden taşıtanın bu yüklemeyi giderlerine katlanarak
// en kısa zamanda bitirme ve sebep olduğu zararları tazmin etme
// zorunluluğu, m.1214; ve b) Eşya, tür veya cinsi ile belirlenmişse:
// ferden belirlenmemiş eşyanın yüklenmek üzere tesliminden önce tamamı
// zayi olsa bile sözleşmenin sona ermemesi; taşıtanın 1144 üncü maddeden
// doğan, kararlaştırılandan başka eşya yükleme hakkının saklı tutulması;
// tür ve cinsi ile gösterilmiş eşyanın yüklenmek üzere tesliminin onu
// ferden belirlenmiş hâle getirmesi; ve tür/cinsiyle gösterilmiş eşyanın
// henüz bekleme süresi dolmadan gemiye yüklendikten veya kaptan tarafından
// teslim alındıktan sonra tamamen zayi olması hâlinde, taşıtanın ikame
// eşya teslimine hazır olduğunu gecikmeksizin bildirmesi ve aynı süre
// içinde teslime başlaması şartıyla sözleşmenin hükümden düşmemesi -
// taşıtanın bu yüklemeyi en kısa zamanda bitirme, fazla giderlerini
// üstlenme ve bekleme süresinin uzamasından doğan zararı tazmin etme
// yükümlülüğü dâhil, m.1215 - kapsanmıştır. Bu batch ayrıca "2. Yolculuk
// başladıktan sonra"yı kapsar: a) Eşyanın tamamının zayi olması - taşınan
// eşyanın umulmayan bir hâl yüzünden tamamının zayi olması hâlinde iki
// taraftan birinin ötekine tazminat vermeye zorunlu olmaksızın navlun
// sözleşmesinin hükümden düşmesi, taşıyana yalnızca sözleşmenin sona
// erdiği ana kadar doğmuş diğer alacaklarının ödenmesi ve 1199 uncu
// maddenin ikinci ve üçüncü fıkralarının saklı tutulması, m.1216; ve b)
// Eşyanın bir kısmının zayi olması - yolculuk başladıktan sonra eşyanın
// umulmayan bir hâl yüzünden bir kısmının zayi olmasının sözleşmeyi
// hükümden düşürmemesi ve zayi olan kısım hiç taşınmamış veya yolculuk
// devam ederken gemiden uzaklaştırılmış olsa bile taşıyana tam navlun
// ödenmesi, 1199 uncu maddenin ikinci ve üçüncü fıkrası hükümleri saklı
// kalmak kaydıyla, m.1217 - kapsanmıştır. BU BATCH İLE "II. EŞYANIN ZAYİ
// OLMASI SEBEBİYLE" (m.1214-1217) İLK MADDESİNDEN SON MADDESİNE KADAR
// EKSİKSİZ TAMAMLANMIŞ olur ve böylece "I. Geminin zayi olması sebebiyle"
// (m.1209-1213) ile "II. Eşyanın zayi olması sebebiyle" (m.1214-1217)
// birlikte "A) Sözleşmenin hükümden düşmesi" (m.1209-1217) başlığını da
// baştan sona tamamlamış olur. Beşinci Ayırım bundan sonra "B) Sözleşmenin
// feshi" (m.1218'den itibaren - taraflara fesih hakkı veren hâller:
// ambargo/devlet el koyması, ticaret yasağı, abluka, ihracat-ithalat-
// transit yasağı gibi kamu tasarrufu sebepleri) ile devam edecek olup,
// kitabın devamında henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım
// (Deniz Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1217 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Yirmiyedinci ve bu dosya bakımından son batch, "Beşinci Ayırım: Yolculuğun
// Başlamasına veya Devamına Engel Olan Sebepler Yüzünden Sözleşmenin Sona
// Ermesi"nin "B) Sözleşmenin feshi" başlığının açılışını kapsar. "A)
// Sözleşmenin hükümden düşmesi"nin aksine, burada sözleşme kendiliğinden
// sona ermez; kanunun taraflara tanıdığı bir fesih hakkının bilfiil
// kullanılması gerekir. Bu batch, "I. Taraflara fesih hakkı veren hâl"i
// (m.1218) baştan sona kapsar: ambargo veya devlet hizmeti için el
// konulması, varma yeri ülkesiyle ticaretin yasaklanması, yükleme/varma
// limanlarının abluka altına alınması, eşyanın tamamının ihracının/
// ithalinin/transit geçişinin yasaklanması gibi bir kamu tasarrufu yüzünden
// sözleşmenin ifasının engellenmesinin her iki tarafa da tazminatsız fesih
// hakkı vermesi, m.1218/1; yolculuk henüz başlamamışsa engelin kısa zamanda
// kalkmayacağının anlaşılmış olması, başladıktan sonra ise bir ay boyunca
// engelin kalkmasının beklenmesi şartı ve bu sürelerin kaptanın limanda mı
// yoksa denizde mi bulunduğuna göre hesaplanması, m.1218/2; kısmi yolculuk
// çarteri sözleşmeleri ile kırkambar sözleşmelerinde bekleme süresi
// olmaksızın fesih hakkının kullanılabilmesi, m.1218/3; savaş çıkması
// sebebiyle geminin veya eşyanın zapt/müsadere tehlikesiyle karşı karşıya
// kalması hâlinde de bekleme süresi olmaksızın fesih hakkının kullanılması,
// m.1218/4; ve taşıtanın, engelin yolculuk başlamadan önce ortaya çıktığı
// hâllerde 1144 üncü maddeden doğan ikame eşya yükleme hakkının saklı
// tutulması, m.1218/5. Bu batch ayrıca "II. Tarafların fesih hakkına sahip
// olmadığı hâller"i (m.1219-1220) kapsar: eşyanın sadece bir kısmına
// ilişkin engellerin taraflara fesih hakkı vermemesi, taşıtanın savaş/
// ihracat/ithalat yasağı gibi sebeplerle serbest sayılmayan kısmı her
// hâlde gemiden uzaklaştırma zorunluluğu, yolculuk başlamadan önceki
// hâllerde taşıyanın durumunu ağırlaştırmamak şartıyla ikame eşya yükleme
// veya yarı navlun ödeyerek fesih seçimlik hakları, kısıtlanan kısmın hiç
// taşınmamış veya yolculuk devam ederken gemiden uzaklaştırılmış olsa bile
// taşıyana tam navlun ödenmesi ve kısmi yolculuk çarteri ile kırkambar
// sözleşmelerinde bu hâlde fesih hakkının hiç bulunmaması, m.1219; ve
// kaptanın denizde can/eşya kurtarma veya diğer haklı bir sebeple rotadan
// sapmasının tarafların hak ve yükümlülüklerini etkilememesi ve taşıyanın
// bu yüzden sorumlu olmaması ile Türk Medenî Kanunu m.2 dürüstlük kuralının
// saklı tutulması, m.1220. Beşinci Ayırım bundan sonra "B) Sözleşmenin
// feshi"nin geri kalan hükümleriyle (m.1221'den itibaren - geminin
// yolculuk sırasında tamirinin gerekmesi, diğer sebeplerin etkisi, eşya
// üzerinde tasarruf yetkisi olan kişinin fesih hakkı, fesih hakkının
// kullanılması/bildirimi, feshin hüküm ve sonuçları - sözleşme yolculuk
// başlamadan/başladıktan sonra feshedilmişse, birden çok yolculuğun
// özellikleri) devam edecek olup, kitabın devamında henüz kapsanmamış çok
// sayıda Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları,
// Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler
// dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca
// yukarıda sayılan m.931-1220 aralığını kapsar ve ileriki batch'ler yeni
// slug eşlemeleriyle devam edecektir.
//
// Yirmisekizinci ve bu dosya bakımından son batch, "Beşinci Ayırım: Yolculuğun
// Başlamasına veya Devamına Engel Olan Sebepler Yüzünden Sözleşmenin Sona
// Ermesi"nin "B) Sözleşmenin feshi" başlığının geri kalan tamamını
// (m.1221-1227) kapsayarak hem bu başlığı hem de içinde bulunduğu Beşinci
// Ayırımı (m.1209-1227) baştan sona tamamlar. Bu batch, "3. Geminin yolculuk
// sırasında tamirinin gerekmesi"ni (m.1221 - geminin yolculuk sırasında
// tamiri gerekirse, navlunun tamamı ile taşıyanın o ana kadar doğmuş bulunan
// diğer alacaklarının ödenmesi veya temin edilmesi şartıyla eşyanın gemiden
// alınabilmesi ya da tamirin bitmesinin beklenebilmesi seçimlik hakkı ve
// navlunun zaman üzerine kararlaştırıldığı hâllerde tamir süresinin hesaba
// katılmaması, m.1221/1; 1222 nci maddenin birinci fıkrasının ilk cümlesi
// hükmünün saklı tutulması, m.1221/2; ve kısmi yolculuk çarteri sözleşmeleri
// ile kırkambar sözleşmelerinde eşya tamir sırasında boşaltılmışsa taşıtanın
// tam navlun ve diğer alacakları ödeyerek eşyayı geri alabilmesi, m.1221/3),
// "III. Diğer sebeplerin etkisi"ni (m.1222 - kanunda öngörülenler dışında bir
// tabiî olay veya umulmayan diğer bir hâl yüzünden yolculuğun başlamadan veya
// başladıktan sonra gecikmesinin, sözleşmenin belli amacının kaybolması
// istisnası saklı kalmak üzere, tarafların hak ve yükümlülüklerini
// değiştirmemesi ile uzunca süreceği anlaşılan umulmayan hâl kaynaklı
// gecikmelerde taşıtanın rizikosu ve gideri kendisine ait olmak ve zamanında
// tekrar yüklemek şartıyla teminat göstererek eşyayı geçici boşaltma yetkisi
// ve yeniden yüklenmemesi hâlinde tam navlun ile zararın tazmini yükümlülüğü,
// m.1222/1; gecikmenin bir kamu tasarrufundan kaynaklandığı hâllerde zaman
// üzerine kararlaştırılan navlunun işlememesi, m.1222/2; ve kısmi yolculuk
// çarteri sözleşmeleri ile kırkambar sözleşmelerinde taşıtanın geçici
// boşaltma hakkını ancak diğer taşıtanların muvafakatiyle kullanabilmesi,
// m.1222/3), "IV. Eşya üzerinde tasarruf yetkisi olan kişinin fesih hakkı"nı
// (m.1223 - taşıtanın eşya üzerinde tasarruf yetkisine sahip olmadığı
// hâllerde, ona ait fesih hakkının eşya üzerinde tasarruf yetkisi olan kişi
// tarafından kullanılması), "V. Fesih hakkının kullanılması"nı (m.1224-1226 -
// feshin bildiriminin faks, elektronik mektup veya benzeri teknik araçlarla
// da mümkün olmak üzere yazılı olarak yapılması, m.1224; navlun sözleşmesi
// yolculuk başlamadan önce bu Ayırımda öngörülen sebeplerle feshedilirse
// tarafların birbirine tazminat ödemeksizin yalnızca o ana kadar doğmuş
// borçlarını ifa etmesi, m.1225; ve navlun sözleşmesi yolculuk başladıktan
// sonra feshedilirse taşıyana o ana kadar doğmuş alacakları dışında, eşya
// yükleme limanına geri getirilmiş olsa bile, 1210 uncu maddenin ikinci
// fıkrasına göre hesap edilecek mesafe navlununun da ödenmesi, aksi
// kararlaştırılmadıkça eşyanın fesih hakkının kullanıldığı sırada geminin
// bulunduğu veya en yakın olduğu limanda boşaltılması ile kısmi yolculuk
// çarteri ve kırkambar sözleşmelerinde boşaltmanın gecikme veya aktarmaya
// sebep olması hâlinde diğer taşıtanların muvafakati şartı, ve kaptanın
// yükümlülükleri hakkındaki 1211 inci madde hükmünün yolculuk başladıktan
// sonraki fesihte de uygulanması, m.1226) ve son olarak "C) Birden çok
// yolculuğun özellikleri"ni (m.1227 - geminin birden çok yolculuk için
// tutulduğu hâllerde 1209 ilâ 1226 ncı madde hükümlerinin ancak sözleşmenin
// niteliği ve içeriği cevaz veriyorsa uygulanması, m.1227/1; ve sözleşmeye
// göre yükleme limanına yolculuk yapmak zorunda olan gemi bu limana varmışsa,
// taşıyana bu yolculuk için ayrıca 1210 uncu maddenin ikinci fıkrasına göre
// hesap olunacak mesafe tazminatının ödenmesi, m.1227/2) kapsamıştır. BU
// BATCH İLE "B) SÖZLEŞMENİN FESHİ" (m.1218-1227) VE BÖYLECE "BEŞİNCİ AYIRIM:
// YOLCULUĞUN BAŞLAMASINA VEYA DEVAMINA ENGEL OLAN SEBEPLER YÜZÜNDEN
// SÖZLEŞMENİN SONA ERMESİ" (m.1209-1227) İLK MADDESİNDEN SON MADDESİNE KADAR
// EKSİKSİZ TAMAMLANMIŞ olur. Dördüncü Kısım "Deniz Ticareti Sözleşmeleri"nin
// Üçüncü Bölümü "Navlun Sözleşmesi" bundan sonra "Altıncı Ayırım: Denizde
// Taşıma Senetleri" (konişmento - tanımı, türleri, düzenlenmesi, içeriği,
// kıymetli evrak olma niteliği ve ispat işlevi dâhil, m.1228'den itibaren)
// ile devam edecek olup, kitabın devamında henüz kapsanmamış çok sayıda
// Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1227 aralığını kapsar ve ileriki batch'ler, Altıncı Ayırım "Denizde
// Taşıma Senetleri"nden itibaren yeni slug eşlemeleriyle devam edecektir.
//
// Yirmidokuzuncu ve bu dosya bakımından son batch, "Altıncı Ayırım: Denizde
// Taşıma Senetleri"ni açar: "A) Konişmento" başlığının "I. Tanımı, türleri ve
// düzenlenmesi" (m.1228) ve "II. İçeriği" (m.1229) alt bölümlerini kapsar. Bu
// batch, m.1228'i - konişmentonun temel tanımını: bir taşıma sözleşmesinin
// yapıldığını ispatlayan, eşyanın taşıyan tarafından teslim alındığını veya
// gemiye yüklendiğini gösteren ve taşıyanın eşyayı ancak onun ibrazı
// karşılığında teslimle yükümlü olduğu senet olması, m.1228/1; yükletenin
// izniyle taşınmak üzere teslim alınan fakat henüz gemiye yükletilmemiş eşya
// için "tesellüm konişmentosu" düzenlenebilmesi, eşya gemiye alınır alınmaz
// taşıyanın geçici makbuz veya tesellüm konişmentosunun geri verilmesi
// karşılığında yükletenin istediği kadar nüshada "yükleme konişmentosu"
// düzenlemekle yükümlü olması, tesellüm konişmentosuna eşyanın ne zaman ve
// hangi gemiye yüklendiğine dair şerh verilmesi hâlinde bu konişmentonun
// yükleme konişmentosu hükmünde sayılması ve konişmentonun kaptan, taşıyan
// veya kaptanın yetkilendirdiği bir temsilci tarafından taşıyan ad ve
// hesabına düzenlenebilmesi, m.1228/2; konişmentonun nama, emre ve hamile
// yazılı olarak düzenlenebilmesi, aksi kararlaştırılmadıkça yükletenin
// istemi üzerine konişmentonun gönderilenin emrine veya sadece emre -bu son
// hâlde "emre"nin yükletenin emrine anlamına gelmesi- olarak düzenlenmesi ve
// konişmentonun gönderilen sıfatıyla taşıyanın veya kaptanın namına da
// yazılı olabilmesi, m.1228/3; konişmentonun bütün nüshalarının aynı metni
// içermesi ve her birinde kaç nüsha hâlinde düzenlendiğinin gösterilmesi
// zorunluluğu, m.1228/4; ve yükletenin, istem üzerine, konişmentonun kendisi
// tarafından imzalanmış bir kopyasını taşıyana verme zorunluluğu, m.1228/5 -
// kapsamıştır. Bu batch ayrıca m.1229'u - konişmentoda bulunması gereken on
// beş kayıt kalemini dört tematik grupta: eşya tanımı (yükletenin beyanına
// uygun cins, işaret, tehlikeli eşya bilgisi, koli/parça sayısı ve ağırlık,
// m.1229/1-a; eşyanın haricen belli olan hâl ve durumu, m.1229/1-b), taraf
// kimlikleri (taşıyan, kaptan, gemi adı/tabiiyeti, yükleten ve -bildirilmişse-
// gönderilen, m.1229/1 c-g), yolculuk/lojistik bilgileri (yükleme limanı ve
// teslim tarihi, boşaltma limanı, düzenleme yeri ve tarihi, m.1229/1 h-j) ve
// hukuki/ticari şartlar (taşıyan imzası, navlunun gönderilen tarafından
// ödenmesi kaydı, boşaltma limanında teslim tarihi/süresi, sorumluluk
// sınırlarını genişleten şartlar ve diğer kayıtlar, m.1229/1 k-o) - ve
// birinci fıkrada sayılan unsurlardan bir veya birkaçının konişmentoda
// bulunmamasının, senet 1228 inci maddenin birinci fıkrasındaki unsurları
// taşıdığı sürece, senedin hukuken konişmento sayılmasını engellemeyeceğini,
// m.1229/2 - kapsamıştır. BU BATCH İLE "A) KONİŞMENTO"NUN "I. TANIMI, TÜRLERİ
// VE DÜZENLENMESİ" VE "II. İÇERİĞİ" ALT BAŞLIKLARI (m.1228-1229) TAMAMLANMIŞ
// olur. Altıncı Ayırım bundan sonra "III. Hükümleri" (m.1230'dan itibaren -
// konişmentonun kıymetli evrak olma niteliği, eşyanın yetkili konişmento
// hamiline teslimi, birden çok konişmento hamilinin başvurusu ve yükletenin
// talimatı dâhil) ile devam edecek olup, kitabın devamında henüz kapsanmamış
// çok sayıda Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları,
// Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil)
// m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda
// sayılan m.931-1229 aralığını kapsar ve ileriki batch'ler yeni slug
// eşlemeleriyle devam edecektir.
//
// Otuzuncu ve bu dosya bakımından son batch, "III. Hükümleri" başlığının
// "1. Kıymetli evrak olma niteliği → a) Eşyanın yetkili konişmento hamiline
// teslimi" alt başlığını (m.1230-1233) baştan sona ve eksiksiz kapsar. Bu
// batch, m.1230'u - konişmentonun meşru hamilinin eşyayı teslim almaya
// yetkili olması, m.1230/1; ve konişmento birden çok nüsha hâlinde
// düzenlenmişse eşyanın tek nüshanın meşru hamiline teslim edilmesinin
// yeterli olması, m.1230/2 - kapsamıştır. Bu batch ayrıca m.1231'i -
// konişmentonun birden çok meşru hamilinin aynı zamanda başvurması hâlinde
// kaptanın hepsinin istemini reddederek eşyayı umumi ambara veya başka
// güvenli bir yere tevdi etmek ve bu hareket tarzının sebeplerini de
// göstererek konişmento hamillerine bildirmek zorunda olması, m.1231/1; ve
// kaptanın hareket tarzına ve sebeplerine ilişkin resmî bir senet
// düzenletmeye yetkili olması ile bu sebeple yapılan giderler hakkında 1201
// inci maddenin uygulanması, m.1231/2 - kapsamıştır. Bu batch ayrıca m.1232'yi
// - emre yazılı bir konişmento düzenlenmişse kaptanın, yükletenin eşyanın
// geri verilmesi veya teslimi hususundaki talimatını ancak konişmentonun
// bütün nüshaları kendisine geri verildiği takdirde yerine getirebilmesi,
// m.1232/1; gemi varma limanına ulaşmadan bir konişmento hamilinin eşyanın
// teslimini istemesi hâlinde de aynı hükmün uygulanması, m.1232/2; kaptanın
// bu hükümlere aykırı hareket etmesi hâlinde taşıyanın konişmentonun meşru
// hamiline karşı sorumlu kalmaya devam etmesi, m.1232/3; ve konişmento emre
// yazılı değilse, yükleten ve konişmentoda adı yazılı gönderilenin muvafakat
// etmesi hâlinde konişmentonun hiçbir nüshası ibraz edilmese bile eşyanın
// geri verilebilmesi veya teslim olunabilmesi, ancak bütün nüshalar geri
// verilmiş değilse taşıyanın doğabilecek zararlar için önce teminat
// gösterilmesini isteyebilmesi, m.1232/4 - kapsamıştır. Son olarak bu batch
// m.1233'ü - navlun sözleşmesinin, geminin varma limanına ulaşmasından önce
// umulmayan bir hâl yüzünden 1209 ilâ 1227 nci maddeler gereğince
// kendiliğinden veya feshedilmesi sonucunda hükümden düşmesi hâlinde de
// 1232 nci madde hükmünün uygulanması - kapsamıştır. BU BATCH İLE "III.
// HÜKÜMLERİ" BAŞLIĞININ "1. KIYMETLİ EVRAK OLMA NİTELİĞİ → A) EŞYANIN
// YETKİLİ KONİŞMENTO HAMİLİNE TESLİMİ" ALT BAŞLIĞI (m.1230-1233) TAMAMLANMIŞ
// olur. Altıncı Ayırım bundan sonra "b) Konişmentonun eşyayı temsili"
// (m.1234'ten itibaren - konişmentonun eşya üzerindeki mülkiyet ve zilyetliği
// temsil işlevi, m.1230-1233'te kurulan teslim-yetkisi çerçevesinin üzerine
// inşa edilen doktrinsel açıdan merkezi bir konu) ile devam edecek olup,
// kitabın devamında henüz kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım
// (Deniz Kazaları, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1233 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Otuzbirinci ve bu dosya bakımından son batch, "III. Hükümleri" başlığının
// "1. Kıymetli evrak olma niteliği → b) Konişmentonun eşyayı temsili" alt
// başlığını (m.1234-1236) baştan sona ve eksiksiz kapsayarak "1. Kıymetli
// evrak olma niteliği"nin (m.1230-1236) tamamını kapatır. Bu batch, m.1234'ü
// - eşya, kaptan veya taşıyanın diğer bir temsilcisi tarafından taşınmak
// üzere teslim alınınca konişmentonun, konişmento gereğince eşyayı teslim
// almaya yetkili olan kişiye tesliminin, 1235 inci madde hükümleri saklı
// kalmak şartıyla, Türk Medenî Kanununun 957 ve 980 inci maddelerinde
// yazılı hukuki sonuçları doğurması, yani konişmentonun yetkili hamile
// tesliminin eşyanın kendisinin fiilen tesliminin hukuki sonuçlarını
// doğurması, m.1234 - kapsamıştır. Bu batch ayrıca m.1235'i - emre yazılı
// bir konişmento birden fazla nüsha hâlinde düzenlenmişse, nüshalardan
// birinin hamilinin, konişmentonun teslimine 1234 üncü madde gereğince
// bağlanan sonuçları, kendisi henüz teslim isteminde bulunmadan önce bir
// diğer nüshaya dayanarak 1230 uncu madde uyarınca kaptandan eşyayı zaten
// teslim almış olan kişi aleyhine ileri süremeyeceği, m.1235/1; ve kaptan
// eşyayı henüz teslim etmeden birden çok konişmento hamili ona başvurup
// ellerinde bulundurdukları konişmento nüshalarına dayanarak eşya üzerinde
// birbirine zıt haklar ileri sürerlerse, konişmentonun birden çok
// nüshalarını çeşitli kişilere devretmiş olan ortak ciranta tarafından
// eşyayı teslim almaya yetkili kılacak şekilde ilk önce ciro ve teslim
// edilmiş olan nüshanın hamilinin diğerlerine tercih olunması ile ciro
// edilip de başka bir yere gönderilen konişmento nüshası hakkında gönderme
// tarihinin konişmento hamiline teslim tarihi hükmünde sayılması, m.1235/2
// - kapsamıştır. Son olarak bu batch m.1236'yı - eşyanın, ancak konişmento
// nüshasının, eşyanın teslim alındığına ilişkin şerh düşülerek geri
// verilmesi karşılığında teslim edilmesi - kapsamıştır. BU BATCH İLE "III.
// HÜKÜMLERİ" BAŞLIĞININ "1. KIYMETLİ EVRAK OLMA NİTELİĞİ" ALT BAŞLIĞI
// (m.1230-1236) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ
// olur. Altıncı Ayırım bundan sonra "2. İspat işlevi" (m.1237'den itibaren
// - konişmentonun taşıyan ile konişmento hamili arasındaki hukuki ilişkiyi
// ispat işlevi, bu ilişkinin taşıyan ile taşıtan arasındaki navlun
// sözleşmesi ilişkisinden ayrımı ve yolculuk çarteri sözleşmesine gönderme
// yapan konişmentolarda çarter partinin ibrazına ilişkin özel kurallar) ile
// devam edecek olup, kitabın devamında henüz kapsanmamış çok sayıda
// Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1236 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Otuzikinci ve bu dosya bakımından son batch, "2. İspat işlevi"ni
// (m.1237-1239) baştan sona ve eksiksiz kapsar. Bu batch, m.1237'yi -
// taşıyan ile konişmento hamili arasındaki hukuki ilişkilerde konişmentonun
// esas alınması, m.1237/1; taşıyan ile taşıtan arasındaki hukuki ilişkilerin
// ise navlun sözleşmesinin hükümlerine bağlı kalması, m.1237/2; ve
// konişmentoda yolculuk çarteri sözleşmesine gönderme varsa, konişmento
// devredilirken çarter partinin bir suretinin de yeni hamile ibraz edilmesi
// şartıyla, çarter partide yer alan hükümlerin nitelikleri elverdiği ölçüde
// konişmento hamiline karşı da ileri sürülebilmesi - m.1245/1'in ikinci
// cümlesi saklı kalmak kaydıyla -, m.1237/3 - kapsamıştır. Bu batch ayrıca
// m.1238'i - konişmentoyu taşıyan sıfatıyla imzalayan veya kendi ad ve
// hesabına imzalatan kişinin taşıyan sayılması, m.1238/1; taşıyanın adı ve
// soyadı veya ticaret unvanı ile işletme merkezi gösterilmemiş veya açıkça
// anlaşılmıyorsa donatanın taşıyan sayılması, meğerki hamilin açık istemi
// üzerine donatan gerçek taşıyanı bildirip belgelendirmiş olsun, m.1238/2;
// kaptan veya taşıyanın diğer bir temsilcisi tarafından düzenlenen ve
// taşıyanın kimliğini açıkça göstermeyen konişmentoda, temsilcinin de
// donatanla birlikte taşıyan sayılması, aynı istisnayla, m.1238/3; ve
// taşıyanın kimliğinin yanlış veya geç bildirilmesi hâlinde taşıyan, donatan
// ve temsilcinin doğacak zararlardan müteselsilen sorumlu olması ile
// 1188 inci maddedeki hak düşürücü sürenin taşıyanın doğru kimliği
// bildirilene kadar işlemeye başlamaması, m.1238/4 - kapsamıştır. Son olarak
// bu batch m.1239'u - konişmentonun eşyanın genel olarak cinsi, işaretleri,
// koli veya parça adedi, ağırlık veya miktarı hakkındaki beyanlarına,
// taşıyanın bu beyanların gerçeği yansıtmadığını bilmesi, haklı sebeple
// şüphe etmesi veya kontrol için yeterli imkâna sahip olmaması hâllerinde
// çekince koyma zorunluluğu, m.1239/1; taşıyanın eşyanın haricen belli olan
// hâlini beyan etmeyi ihmal etmesi hâlinde eşyanın haricen iyi hâlde olduğu
// beyan edilmiş sayılması, m.1239/2; ve çekince konulan beyanlar saklı
// kalmak üzere konişmentonun, eşyanın beyan edildiği gibi teslim alındığına
// veya yüklendiğine karine oluşturması ile bu karinenin aksinin, konişmentoyu
// içerdiği eşya tanımına güvenerek iyiniyetle devralan gönderilen dâhil
// üçüncü kişiye karşı ispatlanamaması - 1186 ncı maddenin dördüncü fıkrası
// saklı kalmak kaydıyla -, m.1239/3 - kapsamıştır. BU BATCH İLE "2. İSPAT
// İŞLEVİ" (m.1237-1239) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ
// TAMAMLANMIŞ olur. Altıncı Ayırım bundan sonra "d) Navlunu ispat" (m.1240 -
// konişmentonun navlun ödeme yükümlülüğüne ilişkin ispat işlevi) ve "e)
// Yükleten tarafından verilen garantiler" (m.1241) ile devam edecek,
// ardından "B) Diğer denizde taşıma senetleri" (m.1242'den itibaren)
// izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda Ayırım,
// Bölüm ve Kısım (Deniz Kazaları, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1239 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Otuzüçüncü ve bu dosya bakımından son batch, "2. İspat işlevi"nin geri
// kalanını, yani "d) Navlunu ispat" (m.1240) ve "e) Yükleten tarafından
// verilen garantiler" (m.1241) alt başlıklarını kapsayarak "2. İspat işlevi"ni
// (m.1237-1241) baştan sona tamamlar. Bu batch, m.1240'ı - 1229 uncu maddenin
// birinci fıkrasının (l) bendi uyarınca navlunun gönderilen tarafından
// ödeneceğine veya yükleme limanında gerçekleşip gönderilen tarafından
// ödenecek olan sürastarya parasına ilişkin bir kaydı içermeyen konişmentonun,
// gönderilenin navlun veya sürastarya parası ödemekle yükümlü olmadığına
// karine oluşturması ve bu karinenin aksinin, gönderilen dâhil, konişmentoyu
// devralan iyiniyetli üçüncü kişiye karşı ispatlanamaması, m.1240/1; navlun
// eşyanın ölçüsüne, sayısına veya tartısına göre kararlaştırılmış ve bunlar
// konişmentoda gösterilmişse, konişmentoda aksine bir şart olmadıkça navlunun
// buna göre belirlenmesi ve 1239 uncu maddenin birinci fıkrası uyarınca
// yazılan şerhin bu anlamda aksine bir şart sayılmaması, m.1240/2; ve navlun
// için taşıma sözleşmesine yollama yapılması hâlinde bu yollamanın kapsamına
// boşaltma süresi, sürastarya süresi ve sürastarya parası hakkındaki
// hükümlerin girmemesi, m.1240/3 - kapsamıştır. Bu batch ayrıca m.1241'i -
// konişmentoya konulan eşya ile ilgili kayıtlar hakkında 1145 inci maddenin
// uygulanması, m.1241/1; taşıyan veya bir temsilcisi tarafından konişmentonun,
// yükletenin bildirdiği kayıtlara veya eşyanın haricen belli olan hâl ve
// niteliğine ilişkin bir çekince eklenmeksizin düzenlenmesi yüzünden
// taşıyanın uğrayacağı zararı yükletenin tazmin edeceğine dair her taahhüt
// veya anlaşmanın, gönderilen dâhil, konişmentoyu iyiniyetle iktisap eden
// bütün üçüncü kişilere karşı geçersiz olması - uluslararası uygulamada
// "letter of indemnity" olarak bilinen pratiğe getirilen temel sınırlama -,
// m.1241/2; böyle bir taahhüt veya anlaşmanın taraflar arasında geçerli
// olması, meğerki taşıyan veya temsilcisi bu çekinceyi koymamak suretiyle
// gönderilen dâhil üçüncü kişileri aldatma amacı gütsün - bu durumda,
// konulmayan çekince yükletenin bildirdiği kayıtlara ilişkinse taşıyanın
// 1145 inci madde uyarınca yükletenden tazminat isteyememesi -, m.1241/3;
// ve aldatma kastının varlığı hâlinde taşıyanın, konişmentodaki kayıtlara
// güvenerek hareket eden gönderilen dâhil üçüncü kişilere karşı, 1186 ncı
// maddedeki sorumluluk sınırlarından yararlanmaksızın sorumlu olması,
// m.1241/4 - kapsamıştır. BU BATCH İLE "d) NAVLUNU İSPAT" VE "e) YÜKLETEN
// TARAFINDAN VERİLEN GARANTİLER" (m.1240-1241) VE BÖYLECE "2. İSPAT İŞLEVİ"
// (m.1237-1241) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ
// olur. Altıncı Ayırım bundan sonra "B) Diğer denizde taşıma senetleri"
// (m.1242'den itibaren - konişmento dışındaki denizde taşıma senetlerine
// ilişkin residüel hükümler) ve ardından "Yedinci Ayırım: Emredici Hükümler"
// (m.1243'ten itibaren) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Ayırım, Bölüm ve Kısım (Deniz Kazaları, Gemi
// Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel
// Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya
// yalnızca yukarıda sayılan m.931-1241 aralığını kapsar ve ileriki batch'ler
// yeni slug eşlemeleriyle devam edecektir.
//
// Otuzdördüncü ve bu dosya bakımından son batch, "B) Diğer denizde taşıma
// senetleri"ni (m.1242) kapsayarak Altıncı Ayırım "Denizde Taşıma Senetleri"ni
// (m.1228-1242) baştan sona tamamlar; ardından "Yedinci Ayırım: Emredici
// Hükümler"in tamamını (m.1243-1245) kapsayarak koca "Üçüncü Bölüm: Navlun
// Sözleşmesi"ni (m.1138-1245) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ
// TAMAMLAR. Bu batch, m.1242'yi - taşıyanın taşınacak eşyayı teslim aldığını
// göstermek üzere düzenlediği konişmentodan başka her tür senedin, taşıma
// sözleşmesinin yapılmış ve eşyanın senette yazılı olduğu gibi taşıyan
// tarafından teslim alınmış olduğuna karine oluşturması, ancak bu karinenin
// aksinin ispatlanabilmesi - konişmentodaki iyiniyetli üçüncü kişiye karşı
// çürütülemez karineden (m.1239/3, m.1240/1) temel farkı - kapsamıştır. Bu
// batch ayrıca "A) Genel olarak" başlıklı m.1243'ü - bir navlun sözleşmesinde,
// konişmentoda veya diğer bir denizde taşıma senedinde yer alıp da taşıyanın
// borç ve sorumluluklarına ilişkin 1141, 1150, 1151 ve 1178-1192; taşıtan ve
// yükletenin borç ve sorumluluklarına ilişkin 1145-1149, 1165 ve 1208; ve
// denizde taşıma senetlerine ilişkin 1228-1242 nci maddeler hükümlerinden
// kaynaklanan borç ve sorumlulukları doğrudan veya dolaylı olarak önceden
// kaldıran veya daraltan bütün kayıt ve şartların geçersiz olması, m.1243/1;
// sigortadan doğan hak ve alacakların taşıyana devredilmesi veya taşıyana
// benzer menfaatler sağlanması ile kanunlarla düzenlenmiş ispat yükünün
// taşıyan lehine tersine çevrilmesi sonucunu doğuran kayıtların da birinci
// fıkraya tabi olması, m.1243/2; sorumluluğu kaldıran/daraltan kayıtların
// geçersizliğinin sözleşmenin veya senedin geri kalan hükümlerini etkilememesi,
// m.1243/3; ve taşıyanın borç ve sorumluluğunu genişleten veya ağırlaştıran
// kayıtların geçerli olması, m.1243/4 - kapsamıştır. Bu batch son olarak
// "B) İstisnalar" başlıklı m.1244'ü - canlı hayvan taşıması veya 1151/3
// uyarınca güvertede taşınacağı yazılıp fiilen böyle taşınan eşya, mutat
// olmayan özel anlaşmalar ("emre değildir" kaydı şartıyla) ve taşıyana
// yükleme öncesi/boşaltma sonrası düşen yükümlülükler bakımından m.1243/1'in
// uygulanmaması, m.1244/1; konişmentoya müşterek avaryaya ilişkin kayıt
// konulmasının m.1243 tarafından engellenmemesi, m.1244/2; ve sorumluluğu
// önceden kaldıran/daraltan kayıtlar hakkında Türk Borçlar Kanununun emredici
// hükümlerinin saklı tutulması, m.1244/3 - ve "C) Yolculuk çarteri sözleşmesi"
// başlıklı m.1245'i - m.1243'ün yolculuk çarteri sözleşmelerine hiç
// uygulanmaması, ancak böyle bir sözleşmeye dayalı konişmento düzenlenirse
// taşıtan olmayan konişmento hamili ile taşıyan arasındaki ilişkide m.1243'ün
// yeniden uygulanması, m.1245/1 - kapsamıştır. BU BATCH İLE "B) DİĞER DENİZDE
// TAŞIMA SENETLERİ" (m.1242) VE BÖYLECE ALTINCI AYIRIM "DENİZDE TAŞIMA
// SENETLERİ" (m.1228-1242) İLK MADDESİNDEN SON MADDESİNE KADAR, VE "YEDİNCİ
// AYIRIM: EMREDİCİ HÜKÜMLER" (m.1243-1245) BAŞTAN SONA TAMAMLANMIŞ, VE
// BÖYLECE ÜÇÜNCÜ BÖLÜM "NAVLUN SÖZLEŞMESİ" (m.1138-1245) İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur — dizinin onlarca batch boyunca
// sürdürdüğü, deniz ticaretinde eşya taşıma sözleşmelerinin kuruluşundan
// yükleme/boşaltma usulüne, taşıyan ve taşıtan sorumluluğundan konişmentonun
// kıymetli evrak/ispat işlevine ve emredici hükümler çerçevesine kadar
// bütün yaşam döngüsünü kapsayan devasa bir başarıdır. Beşinci Kitap "Deniz
// Ticareti" bundan sonra sırasıyla "Dördüncü Bölüm: Zamanaşımı" (m.1246 -
// gemi kira sözleşmeleri, zaman çarteri sözleşmeleri ve navlun sözleşmeleri/
// konişmento istemlerine uygulanacak genel zamanaşımı süresi, m.1188'deki
// hak düşürücü süreden ayrı bir kurum) ve ardından tamamen yeni bir konuya,
// "Beşinci Bölüm: Deniz Yoluyla Yolcu Taşıma Sözleşmesi"ne (m.1247'den
// itibaren - deniz yoluyla yolcu taşıma sözleşmeleri) geçecek olup, kitabın
// devamında henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma,
// Kurtarma, Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması
// ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1245 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Otuzbeşinci batch, "Dördüncü Bölüm: Zamanaşımı"nı (m.1246) baştan sona
// kapsar: gemi kira sözleşmeleri, zaman çarteri sözleşmeleri ve navlun
// sözleşmelerinden veya konişmentodan veya onun düzenlenmesinden doğan
// bütün alacakların, 1188 inci madde hükmü saklı kalmak kaydıyla, bir
// yılda zamanaşımına uğraması ve bu iki kurumun -zamanaşımının def'i
// niteliğinde, kesilme/durma kurallarına tabi ve re'sen gözetilemeyen
// bir kurum olmasına karşın hak düşürücü sürenin bu kurallara tabi
// olmayan ve mahkemece re'sen gözetilen bir kurum olması bakımından-
// usul farkları, m.1246/1; ve sürenin alacağın muaccel olmasıyla
// işlemeye başlaması, m.1246/2 kapsanmıştır. Bu batch ayrıca, tamamen
// yeni bir konuya açılan "Beşinci Bölüm: Deniz Yoluyla Yolcu Taşıma
// Sözleşmesi"nin açılışını kapsar: "A) Tanımı" başlıklı m.1247 -
// yolcunun veya yolcu ve bagajının deniz yolu ile taşınması için,
// taşıyan tarafından veya onun adına ve hesabına yapılan sözleşme
// olarak tanım, m.1247/1; Devlet ve diğer kamu tüzel kişileri
// tarafından yapılan ticari yolcu taşıma sözleşmelerine de bu Bölüm
// hükümlerinin uygulanması, m.1247/2; ve hava yastıklı araçlar ile
// yapılan yolcu taşımasının bu Bölüm hükümlerine tabi olmaması,
// m.1247/3 -; "B) Taşıyan ve fiilî taşıyan" başlıklı m.1248 - taşıma
// sözleşmesini yapan veya onun adına ve hesabına yapılan kişinin,
// taşıma bizzat kendisi veya bir fiilî taşıyan tarafından
// gerçekleştirilmiş olsun, taşıyan sayılması, m.1248/1, ve fiilî
// taşıyanın, taşıyandan farklı olarak, bir geminin maliki, kiracısı
// veya işleteni sıfatıyla taşımanın tamamını veya bir kısmını fiilen
// gerçekleştiren kişi olarak tanımı, m.1248/2 - eşya taşımasındaki
// m.1191-1192 çerçevesiyle paralel bir yapı kurmuştur -; "C) Yolcu"
// başlıklı m.1249 - deniz yoluyla yolcu taşıma sözleşmesine dayanarak
// veya bu Bölüm hükümlerine tabi olmayan bir navlun sözleşmesinin
// konusu olan aracı veya canlı hayvanları gözetmek üzere taşıyanın
// onayı ile gemide taşınan kişilerin de yolcu sayılması, m.1249/1, ve
// sözleşmede adı yazılı yolcunun taşınma hakkını bir başkasına
// devredememesi, m.1249/2 -; ve "D) Bagaj" başlıklı m.1250 - canlı
// hayvanlar ile bir navlun sözleşmesine dayanılarak taşınan eşya ve
// araçların bagaj kapsamı dışında tutulması ve deniz yoluyla yolcu
// taşıma sözleşmesi gereğince taşınan eşya ve araçların bagaj
// kapsamında olması, m.1250/1; yolcunun kamarasında veya kendi
// zilyetliğinde/hâkimiyetinde/gözetiminde bulundurduğu eşyanın ve
// -1258 ve 1263 üncü maddelerin uygulaması hariç olmak üzere- kendi
// aracında bulundurduğu bagajın kabin bagajı sayılması, m.1250/2; ve
// aksi kararlaştırılmadıkça yolcunun gemiye getirdiği bagaj için
// taşıma ücretinden başka bir ücret istenememesi, m.1250/3 -
// kapsanmıştır. Bu batch ile "Dördüncü Bölüm: Zamanaşımı" (m.1246)
// baştan sona tamamlanmış ve "Beşinci Bölüm: Deniz Yoluyla Yolcu
// Taşıma Sözleşmesi"nin tanımı, taşıyan/fiilî taşıyan, yolcu ve bagaj
// kavramlarını içeren açılışı (m.1247-1250) kapsanmıştır. Beşinci
// Bölüm bundan sonra "E) Yolcunun yükümlülükleri" (m.1251'den
// itibaren) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması
// ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1250
// aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam
// edecektir.
//
// Otuzaltıncı batch, "Beşinci Bölüm: Deniz Yoluyla Yolcu Taşıma
// Sözleşmesi"nin "E) Yolcunun yükümlülükleri" (m.1251-1253), "F)
// Taşıyanın hapis hakkı" (m.1254) ve "G) Ölen yolcunun bagajı" (m.1255)
// başlıklarını kapsar. "E) Yolcunun yükümlülükleri" alt başlığı -
// kaptanın gemide düzeni sağlamaya yönelik tüm talimatına uyma
// zorunluluğu, m.1251; bagaj olarak gemiye getirilen eşyanın cins,
// niteliği ve tehlikeleri hakkında doğru beyanda bulunma yükümlülüğü
// ile taşıyana karşı doğrudan, diğer zarar görenlere karşı kusura
// bağlı - tehlikeli veya gizlice getirilmiş bagaj istisnası saklı
// kalmak kaydıyla - iki kademeli sorumluluk, kaptanın eksik/yanlış
// bilgiyle veya gizlice getirilen eşyayı gemiden çıkarma ve denize
// atma yetkisi, gizli bagajın gemide alıkonulması hâlinde en yüksek
// ücretin ödenmesi yükümlülüğü ve taşıyan/yetkili temsilcisinin
// bilgisinin kaptanın bilgisi sayılması, m.1252; ve yolcunun hareket
// limanında veya ara limanlarda gemiye zamanında gelme zorunluluğu,
// buna aykırılıkta kaptan beklemeden yola çıkmış olsa dahi taşıma
// ücretinin tamamının ödenmesi yükümlülüğü ve yerine başka yolcu
// alınmışsa bu tutarın indirilmesi, m.1253 - kapsanmıştır. Bu batch
// ayrıca "F) Taşıyanın hapis hakkı" - taşıyanın, deniz yoluyla yolcu
// taşıma sözleşmesinden doğan bütün alacakları için Türk Medenî
// Kanununun 950 ilâ 953 üncü maddeleri uyarınca yolcuya ait bagaj
// üzerindeki hapis hakkı, m.1254 - ve "G) Ölen yolcunun bagajı" -
// yolcunun yolculuk sırasında ölmesi hâlinde 915 inci madde hükmünün
// uygulanması, m.1255 - başlıklarını kapsamıştır. Bu batch ile
// "Beşinci Bölüm: Deniz Yoluyla Yolcu Taşıma Sözleşmesi"nin
// tanımlayıcı/yapısal hükümleri (m.1247-1255) eksiksiz tamamlanmış
// olur. Beşinci Bölüm bundan sonra "H) Yolcunun uğradığı zararlardan
// sorumluluk" (m.1256'dan itibaren - yolcunun ölümü veya yaralanması
// ile bagaj zıyaı/hasarından doğan sorumluluğun somut, maddi hukuk
// çerçevesi) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması
// ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1255
// aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam
// edecektir.
//
// Otuzyedinci batch, "H) Yolcunun uğradığı zararlardan sorumluluk" başlığı
// altındaki "I. Taşıyanın sorumluluğu"nu (m.1256) baştan sona ve eksiksiz
// kapsar. Bu on fıkralık madde, iki ayrı yazıya bölünmüştür. İlk yazı
// m.1256/1-4'ü kapsar: gemi kazası yüzünden yolcunun ölmesi veya
// yaralanmasında taşıyanın 250.000 Özel Çekme Hakkı ile sınırlı, savaş/
// terör/iç savaş/isyan/istisnai nitelikte kaçınılamaz doğa olayı/üçüncü
// kişinin kastıyla gerçekleştirdiği fiil hâllerinde sorumluluktan kurtulma
// imkânı tanıyan ve taşıyan kusurluysa bu miktarı aşan zarardan da sınırsız
// sorumlu tutan, kusursuzluğun ispatını taşıyana yükleyen üç katmanlı
// rejim, m.1256/1; gemi kazasından kaynaklanmayan ölüm ve yaralanmada
// taşıyanın yalnızca kusuru varsa sorumlu olması ve kusuru ispat yükünün
// davacıya ait olması, m.1256/2; kabin bagajının zıya veya hasarında kusur
// şartı ile gemi kazasından kaynaklanan zararlarda taşıyanın kusurunun
// karine olarak kabul edilmesi (aksi ispatlanabilir), m.1256/3; ve kabin
// bagajı dışındaki bagajın zıya veya hasarında taşıyanın, kazanın
// gerçekleşmesinde kusurunun bulunmadığını ispat etmedikçe sorumlu
// olması, m.1256/4 - kapsanmıştır. İkinci yazı m.1256/5-10'u kapsar: "gemi
// kazası", "taşıyanın kusuru" (adamlarının kusurunu da kapsayan geniş
// tanım), "gemideki arıza" ve "zarar" (cezalandırıcı/caydırıcı tazminatı
// kapsamaması) kavramlarının tanımları, m.1256/5; bagajın zıyaı veya
// hasarı kavramının, iş hukuku uyuşmazlıklarından kaynaklanan gecikmeler
// hariç, bagajın geminin varmasından itibaren uygun süre içinde geri
// verilmemesinden doğan malvarlığı zararını da içermesi, m.1256/6;
// taşıyanın sorumluluğunun sadece taşıma sırasında meydana gelen kazaların
// sebep olduğu zararlara ilişkin olması ve kazanın taşıma sırasında
// meydana geldiğinin ile zararın kapsamının ispat yükünün davacıya ait
// olması, m.1256/7; taşıyanın üçüncü kişilere karşı rücu hakkı, ortak
// kusur def'i ve sorumluluğun sınırlandırılması haklarının saklı
// tutulması, m.1256/8; kusur karinelerinin varlığının veya ispat yükünün
// bir tarafa ait olmasının, o tarafın lehine olan delillerin dikkate
// alınmasını engellememesi, m.1256/9; ve bu maddede öngörülen
// sorumlulukların üst sınırları hakkında 1262 ve 1263 üncü madde
// hükümlerinin saklı tutulması, m.1256/10 - kapsanmıştır. BU BATCH İLE
// "H) YOLCUNUN UĞRADIĞI ZARARLARDAN SORUMLULUK" BAŞLIĞI ALTINDAKİ "I.
// TAŞIYANIN SORUMLULUĞU" (m.1256) İLK FIKRASINDAN SON FIKRASINA KADAR
// EKSİKSİZ TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra "II. Fiilî
// taşıyanın sorumluluğu" (m.1257'den itibaren - m.1191-1192'deki eşya
// taşıması bağlamındaki fiilî taşıyan sorumluluğu çerçevesiyle paralel bir
// yapı kurarak, m.1256'da tanımlanan sorumluluğu m.1248'de tanıtılan fiilî
// taşıyan kavramına genişletecektir) ile devam edecek olup, kitabın
// devamında henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma,
// Kurtarma, Müşterek Avarya -, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1256 aralığını kapsar ve ileriki batch'ler yeni slug
// eşlemeleriyle devam edecektir.
//
// Otuzsekizinci batch, "II. Fiilî taşıyanın sorumluluğu" (m.1257), "III.
// Taşıma süresi" (m.1258) ve "IV. Zorunlu sigorta" (m.1259) başlıklarını
// kapsar. "II. Fiilî taşıyanın sorumluluğu" - taşımanın tamamının veya bir
// kısmının bir fiilî taşıyana bırakılmış olmasının taşıyanın taşımanın
// tamamından sorumlu kalmaya devam etmesini etkilememesi ve fiilî taşıyanın
// da kendisi tarafından yapılan bölüm için sorumlu olması, m.1257/1;
// taşıyanın, taşımanın fiilî taşıyan tarafından yapıldığı hâllerde fiilî
// taşıyanın kusurundan ve onun adamlarının görevlerini yerine getirdikleri
// sırada işledikleri kusurdan sorumlu olması, m.1257/2; taşıyanın kanunen
// kendisine yükletilmeyen bir borç veya yükümlülüğü üstlenmesi ya da
// tanınan bir haktan vazgeçmesi sonucunu doğuran özel anlaşmaların, açık
// ve yazılı kabul olmadıkça fiilî taşıyanı bağlamaması, m.1257/3; taşıyan
// ile fiilî taşıyanın birlikte sorumlu oldukları takdirde ve ölçüde
// müteselsil sorumlu olmaları, m.1257/4; ve bu madde hükümlerinin taşıyan
// ile fiilî taşıyan arasındaki rücu ilişkisini etkilememesi, m.1257/5 -
// kargo bağlamındaki m.1191 ile büyük ölçüde paralel bir yapı kurarak -
// kapsanmıştır. Bu batch ayrıca "III. Taşıma süresi" - yolcu ve kabin
// bagajı bakımından, liman tesisinde bulunulan süre hariç olmak üzere
// gemide bulunulan/gemiye alınan/gemiden çıkartılan süre ile ücretin
// taşıma ücretine dahil olması veya aracın taşıyanca tahsis edilmiş
// olması şartıyla su üzerinde yapılan ek taşıma süresi, kabin bagajı
// bakımından ayrıca, bagaj taşıyana teslim edilmiş olup henüz geri
// verilmemişse liman tesisinde geçirilen sürenin de taşıma süresine
// dahil olması, ve diğer bagaj bakımından taşıyanca teslim alınmasından
// yolcuya teslimine kadar geçen basit sürenin taşıma süresi sayılması,
// m.1258 - ve "IV. Zorunlu sigorta" - onikiden fazla yolcu taşımak için
// ruhsat almış bir gemi ile yolcu taşındığında taşımanın tamamını veya
// bir kısmını üstlenen veya gerçekleştiren bütün taşıyanların yolcuların
// ölüm veya yaralanmasından doğabilecek sorumluluklarına karşı sigorta
// yaptırma zorunluluğu, uluslararası sefer ruhsatlı gemilerde asgari
// 250.000 Özel Çekme Hakkı ve diğer gemilerde asgari 100.000 Özel Çekme
// Hakkı teminat sınırı (4/7/2024-7519/20 md. ile değişik), ve bu şartları
// yerine getirmeyen geminin yola çıkmasına izin verilmemesi, m.1259 -
// kapsanmıştır. BU BATCH İLE "II. FİİLÎ TAŞIYANIN SORUMLULUĞU", "III.
// TAŞIMA SÜRESİ" ve "IV. ZORUNLU SİGORTA" (m.1257-1259) İLK MADDESİNDEN
// SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur. Beşinci Bölüm bundan
// sonra "V) Değerli eşya" (m.1260'tan itibaren - yolcunun beraberinde
// taşıdığı nakit, mücevher ve sanat eseri gibi değerli eşyaya ilişkin
// özel kurallar) ile ve bu Bölümü tamamlayacak sorumluluk sınırlama ve
// usul hükümleriyle (m.1261-1265) devam edecek olup, kitabın devamında
// henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1259
// aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam
// edecektir.
//
// Otuzdokuzuncu batch, "V) Değerli eşya" (m.1260) ve "VI) Birlikte kusur"
// (m.1261) başlıklarını kapsar. "V) Değerli eşya" - taşıyanın, yolcuya ait
// para, kıymetli evrak, altın, gümüş, mücevher, sanat eseri, süs eşyası ve
// diğer değerli eşyanın zıyaından veya hasarından kural olarak sorumlu
// olmaması, meğerki bu tür eşya taşıyana saklaması için verilmiş olsun; bu
// durumda taşıyanın, 1264 üncü maddenin birinci fıkrası uyarınca daha
// yüksek bir sorumluluk sınırı kararlaştırılmamışsa, 1263 üncü maddenin
// üçüncü fıkrasında öngörülen sınırlar içinde sorumlu olması, m.1260 -
// kapsanmıştır. Bu batch ayrıca "VI) Birlikte kusur" - taşıyanın, yolcunun
// ölümüne, yaralanmasına, bagajının zayi olmasına veya hasara uğramasına
// yolcunun kastının veya ihmalinin sebebiyet verdiğini ya da bunda
// etkisinin bulunduğunu ispat etmesi hâlinde, mahkemenin taşıyanın kısmen
// veya tamamen sorumlu olmadığına karar verebilmesi, ispat yükünün
// taşıyanda olması, m.1261 - başlığını da kapsamıştır. BU BATCH İLE "V)
// DEĞERLİ EŞYA" VE "VI) BİRLİKTE KUSUR" (m.1260-1261) EKSİKSİZ
// TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra "VII) Bedensel zarardan
// doğan sorumluluğun sınırı" (m.1262) ve "VIII) Bagaj ve araçların zıyaı
// veya hasarından doğan sorumluluğun sınırı" (m.1263) ile devam edecek
// olup, kitabın devamında henüz kapsanmamış çok sayıda Kısım (Deniz
// Kazaları - Çatma, Kurtarma, Müşterek Avarya -, Gemi Alacakları,
// Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler
// dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca
// yukarıda sayılan m.931-1261 aralığını kapsar ve ileriki batch'ler yeni
// slug eşlemeleriyle devam edecektir.
//
// Kırkıncı batch, "VII) Bedensel zarardan doğan sorumluluğun sınırı"
// (m.1262) ve "VIII) Bagaj ve araçların zıyaı veya hasarından doğan
// sorumluluğun sınırı" (m.1263) başlıklarını kapsar. "VII) Bedensel
// zarardan doğan sorumluluğun sınırı" - yolcunun ölümü veya
// yaralanmasından dolayı taşıyanın 1256 ncı madde gereğince
// sorumluluğunun, hiçbir hâlde, her olay için yolcu başına 400.000 Özel
// Çekme Hakkını geçememesi; 1256 ncı maddenin birinci fıkrasının ikinci
// cümlesi hükmünün -taşıyan kusurlu ise yukarıdaki miktarı aşan zarardan
// da sorumlu olması, yani kusurlu taşıyan için sınırsız sorumluluğun-
// saklı tutulması; ve tazminatın irat şeklinde belirlenmesi hâlinde,
// ödenecek tazminatın anapara değeri toplamının da bu miktarı aşamaması,
// m.1262 - kapsanmıştır. Bu batch ayrıca "VIII) Bagaj ve araçların zıyaı
// veya hasarından doğan sorumluluğun sınırı" - kabin bagajının zıya veya
// hasarından dolayı taşıyanın sorumluluğunun, hiçbir hâlde, her taşıma
// için yolcu başına 2.250 Özel Çekme Hakkını aşamaması, m.1263/1; araçlar
// ve içlerinde veya üzerlerinde taşınan her çeşit bagajın zıya veya
// hasarından dolayı taşıyanın sorumluluğunun, hiçbir hâlde, her taşıma
// için araç başına 12.700 Özel Çekme Hakkını aşamaması, m.1263/2; birinci
// ve ikinci fıkralarda belirtilenler dışındaki (diğer) bagajın zıyaı veya
// hasarından dolayı taşıyanın sorumluluğunun, hiçbir hâlde, her taşıma
// için yolcu başına 3.375 Özel Çekme Hakkını aşamaması -ve bu sınırın,
// m.1260'ın saklanmak üzere teslim edilen değerli eşya için atıfta
// bulunduğu sınırla aynı olması-, m.1263/3; ve taşıyan ile yolcunun,
// taşıyanın sorumluluğuna, zararın tamamından indirilmek üzere aracın
// uğrayacağı zıya veya hasar için 330 Özel Çekme Hakkını, diğer bagajın
// uğrayacağı zıya veya hasar için de yolcu başına 149 Özel Çekme Hakkını
// aşmayacak bir muafiyetin uygulanması hususunda anlaşabilmeleri,
// m.1263/4 - başlığını da kapsamıştır. BU BATCH İLE "VII) BEDENSEL
// ZARARDAN DOĞAN SORUMLULUĞUN SINIRI" VE "VIII) BAGAJ VE ARAÇLARIN ZIYAI
// VEYA HASARINDAN DOĞAN SORUMLULUĞUN SINIRI" (m.1262-1263) EKSİKSİZ
// TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra "IX) Sorumluluk
// sınırlarına ilişkin ortak hükümler" (m.1264'ten itibaren - m.1260'ın
// önceden atıfta bulunduğu, tarafların sorumluluk sınırlarını anlaşmayla
// yükseltebilmesi kuralı dahil) ve "X) Taşıyanın adamlarının savunmaları
// ve sorumluluk sınırları" (m.1265 - bu sınırların taşıyanın adamlarına
// da genişletilmesi) ile devam edecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1263
// aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam
// edecektir.
//
// Kırk birinci batch, "IX) Sorumluluk sınırlarına ilişkin ortak
// hükümler" (m.1264) ve "X) Taşıyanın adamlarının savunmaları ve
// sorumluluk sınırları" (m.1265) başlıklarını kapsar. m.1264, iki
// fıkra hâlinde: taşıyan ve yolcunun, 1262 ve 1263 üncü maddelerde
// öngörülenden daha yüksek sorumluluk sınırlarını aralarında açıkça ve
// yazılı olarak kararlaştırabilmelerini -m.1260'ın değerli eşya
// hükmünün önceden atıfta bulunduğu, m.1186/8'deki tarafların anlaşmayla
// sınırları yükseltme hakkıyla paralel ama ondan daha ağır bir formalite
// (açıklık ve yazılılık) şartı taşıyan tek yönlü mekanizmayı-, m.1264/1;
// ve 1262 ve 1263 üncü maddelerdeki sorumluluk sınırlarına faiz
// alacakları ile yargılama giderlerinin dâhil olmadığını, m.1264/2 -
// düzenlemiştir. m.1265 ise, taşıyanın veya fiilî taşıyanın adamları
// aleyhine bu Bölümde düzenlenen zararlar dolayısıyla dava açılması
// hâlinde, bu kişilerin, zararın görevlerini yerine getirdikleri sırada
// meydana gelmiş olduğunu ispatlamak şartıyla, taşıyana ve fiilî
// taşıyana bu Bölümde tanınan savunma imkânlarından ve sorumluluk
// sınırlarından yararlanabilmelerini -kargo bağlamındaki m.1190/2'nin
// "görevi veya yetkisi sınırları içinde hareket ettiğini ispat etmek"
// kaydıyla adamlara tanıdığı savunma taşınabilirliği mekanizmasıyla
// yapısal olarak yakından paralel bir kuralı- düzenlemiştir. BU BATCH
// İLE "IX) SORUMLULUK SINIRLARINA İLİŞKİN ORTAK HÜKÜMLER" VE "X)
// TAŞIYANIN ADAMLARININ SAVUNMALARI VE SORUMLULUK SINIRLARI" (m.1264-
// 1265) EKSİKSİZ TAMAMLANMIŞ olur; bununla birlikte "H) Yolcunun
// uğradığı zararlardan sorumluluk" (m.1256-1265) da İLK MADDESİNDEN SON
// MADDESİNE KADAR TAMAMEN TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra
// "XI) İstemlerin birleşmesi" (m.1266) ve "XII) Sorumluluğu
// sınırlandırma hakkının kaybı" (m.1267 - kasıtlı/pervasız davranış
// nedeniyle sorumluluk sınırından yararlanamama standardı) ile devam
// edecek, ardından "XIII) İstemlerin dayanağı" (m.1268), "XIV) Bagajın
// zıyaı veya hasara uğradığının bildirimi" (m.1269), "XV) Zamanaşımı"
// (m.1270) ve "XVI) Emredici hükümler" (m.1271) ile Beşinci Bölüm
// "Deniz Yoluyla Yolcu Taşıma Sözleşmesi" tamamen kapanacak, bunun
// ardından kitap Beşinci Kısım "Deniz Kazaları"na geçecektir; kitabın
// devamında henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma,
// Kurtarma, Müşterek Avarya -, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda
// sayılan m.931-1265 aralığını kapsar ve ileriki batch'ler yeni slug
// eşlemeleriyle devam edecektir.
//
// Kırk ikinci batch, "XI) İstemlerin birleşmesi" (m.1266) ve "XII)
// Sorumluluğu sınırlandırma hakkının kaybı" (m.1267) başlıklarını
// kapsar. m.1266, üç fıkra hâlinde: 1262 ve 1263 üncü maddelerdeki
// sorumluluk sınırlarının, yolcunun ölümü veya yaralanmasından yahut
// bagajının zıyaı veya hasarından kaynaklanan bütün tazminat
// istemlerinin toplamına uygulanmasını, m.1266/1; bir fiilî taşıyan
// tarafından gerçekleştirilen taşımada, taşıyandan, fiilî taşıyandan ve
// bunların görevleri dâhilinde hareket eden adamlarından alınacak
// tazminatların toplamının, bu Bölüm hükümlerine göre taşıyanın veya
// fiilî taşıyanın mahkûm edilebileceği en yüksek tutarı aşamamasını -şu
// kadar ki bu kişilerden hiçbirinin kendisine uygulanacak sorumluluk
// sınırını aşan bir tutardan sorumlu tutulamamasını-, m.1266/2; ve
// taşıyanın veya fiilî taşıyanın adamlarının, 1265 inci maddeye göre
// 1262 ve 1263 üncü maddelerdeki sorumluluk sınırlarından yararlandığı
// bütün durumlarda, taşıyandan ve yerine göre fiilî taşıyandan ve
// bunların adamlarından alınacak tazminatların toplamının bu sınırları
// aşamamasını, m.1266/3 - düzenlemiştir. m.1267 ise, iki fıkra hâlinde:
// zarara, böyle bir zarara sebep olmak kastıyla veya pervasızca bir
// davranışla ve böyle bir zararın meydana gelmesi ihtimalinin bilinci
// ile işlenmiş bir fiilin veya ihmalin sebebiyet verdiği ispat edilen
// taşıyanın, 1262 ve 1263 üncü maddelerle 1264 üncü maddenin birinci
// fıkrasında öngörülen sorumluluk sınırlarından yararlanamamasını,
// m.1267/1; ve aynı kasten/pervasızca-ile-bilinç standardını karşılayan
// taşıyanın veya fiilî taşıyanın adamlarının da birinci fıkrada
// belirtilen sorumluluk sınırlarından yararlanamamasını, m.1267/2 -
// düzenlemiştir. BU BATCH İLE "XI) İSTEMLERİN BİRLEŞMESİ" VE "XII)
// SORUMLULUĞU SINIRLANDIRMA HAKKININ KAYBI" (m.1266-1267) EKSİKSİZ
// TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra "XIII) İstemlerin
// dayanağı" (m.1268 - yolcunun ölümü, yaralanması veya bagajının zıyaı
// yahut hasarına ilişkin olarak taşıyana veya fiilî taşıyana karşı
// yalnızca bu Bölüm hükümleri uyarınca dava açılabilmesi) ve "XIV)
// Bagajın zıyaı veya hasara uğradığının bildirimi" (m.1269 - muhtemelen
// kargo bağlamındaki m.1185 bildirim yükümlülüğüne paralel bagaj bildirim
// şartları) ile devam edecek, ardından "XV) Zamanaşımı" (m.1270) ve
// "XVI) Emredici hükümler" (m.1271) ile Beşinci Bölüm "Deniz Yoluyla
// Yolcu Taşıma Sözleşmesi" tamamen kapanacaktır; kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Deniz Kazaları - Çatma, Kurtarma,
// Müşterek Avarya -, Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek
// şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1267
// aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam
// edecektir.
//
// Kırk üçüncü batch, "XIII) İstemlerin dayanağı" (m.1268) ve "XIV) Bagajın
// zıyaı veya hasara uğradığının bildirimi" (m.1269) başlıklarını kapsar.
// m.1268, tek fıkra hâlinde: yolcunun ölümünden, yaralanmasından, bagajının
// zıyaı veya hasarından dolayı, taşıyana veya fiilî taşıyana karşı, yalnızca
// bu Bölüm hükümleri uyarınca tazminat davası açılabilmesini -Beşinci
// Bölüm'ün münhasır dava dayanağı niteliğini- düzenler; bu yazı, kargo
// bağlamındaki m.1190 "Sözleşme dışı istemler" ile karşılaştırmalı olarak,
// m.1190'ın (aynı korumaları alternatif dava sebeplerine GENİŞLETME)
// tekniği ile m.1268'in (alternatif dava sebeplerini doğrudan FOREKLOZE
// ETME) tekniği arasındaki yapısal farkı ele alır. m.1269 ise üç fıkra
// hâlinde: bagajın zıyaı veya hasarının, haricen belli ise kabin bagajının
// indirilmesinden önce/indirilirken ya da diğer bagajın tesliminden önce/
// teslimi sırasında, haricen belli değilse bagajın indirilmesinden veya
// tesliminden ya da teslim edilmesi gereken tarihten itibaren onbeş gün
// içinde taşıyana veya temsilcisine yazılı olarak bildirilmesini, m.1269/1;
// yolcu bu bildirimi yapmamışsa, aksi ispat edilene kadar, bagajın iyi
// hâlde alındığının kabul edilmesini, m.1269/2; ve bagajın durumunun
// teslimi sırasında bir ortak inceleme veya tespit işlemine konu olması
// hâlinde yazılı bildirime gerek olmamasını, m.1269/3 - düzenler; bu yazı,
// kargo bağlamındaki m.1185 bildirim rejimiyle -görünür hasarın anında
// bildirilmesi paralelliği, gizli hasar bildirim süresindeki üç gün/onbeş
// gün farkı, bildirim yapılmamasının sonucundaki çift karine/tek karine
// farkı ve ortak inceleme istisnasının özdeşliği ekseninde- sistematik bir
// karşılaştırma sunar. BU BATCH İLE "XIII) İSTEMLERİN DAYANAĞI" VE "XIV)
// BAGAJIN ZIYAI VEYA HASARA UĞRADIĞININ BİLDİRİMİ" (m.1268-1269) EKSİKSİZ
// TAMAMLANMIŞ olur. Beşinci Bölüm bundan sonra "XV) Zamanaşımı" (m.1270)
// ve "XVI) Emredici hükümler" (m.1271) ile devam edecek ve bu iki maddeyle
// Beşinci Bölüm "Deniz Yoluyla Yolcu Taşıma Sözleşmesi" tamamen kapanacak,
// bunun ardından kitap Beşinci Kısım "Deniz Kazaları"na geçecektir;
// kitabın devamında henüz kapsanmamış çok sayıda Kısım (Deniz Kazaları -
// Çatma, Kurtarma, Müşterek Avarya -, Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1269 aralığını kapsar ve ileriki batch'ler yeni slug eşlemeleriyle
// devam edecektir.
//
// Kırk dördüncü ve bu dosya bakımından son batch, "XV) Zamanaşımı" (m.1270)
// ve "XVI) Emredici hükümler" (m.1271) başlıklarını kapsar. m.1270, üç fıkra
// hâlinde: yolcunun ölümünden ve bedensel zararından ilgilisi lehine doğan
// bütün tazminat istemlerinin on yılda zamanaşımına uğramasını, m.1270/1;
// yolcu taşıma sözleşmesinden doğan, bagajın zıyaa veya hasara uğramasından
// doğan alacaklar dâhil olmak üzere diğer bütün alacakların iki yılda
// zamanaşımına uğramasını ve bu sürenin, bagajın zıyaı veya hasarı hâlinde
// hangisi daha sonra vukubulmuş ise yolcunun gemiden indiği veya inmesi
// gereken tarihten, diğer bütün alacaklarda ise muaccel oldukları tarihten
// itibaren işlemeye başlamasını, m.1270/2; ve birinci ile ikinci fıkralarda
// belirlenen zamanaşımı sürelerinin, tazminat istemi doğduktan sonra,
// taşıyanın yazılı beyanı veya tarafların yazılı anlaşmasıyla
// uzatılabilmesini, m.1270/3 - düzenlemiştir. m.1271 ise iki fıkra hâlinde:
// yolcunun ölümü veya yaralanması sonucunu doğuran olaydan veya bagajın
// zıyaa veya hasara uğramasından önce yapılmış olan sözleşmelerde yer alan,
// bu Bölüm hükümlerine göre sorumlu herhangi bir kişinin sorumluluğunu
// kaldıran veya 1263 üncü maddenin dördüncü fıkrası hükmü saklı kalmak
// kaydıyla bu Bölümde öngörülen sorumluluk sınırlarını indiren veya
// taşıyana veya fiilî taşıyana düşen ispat yükünün yerini değiştiren her
// şartın hükümsüz olmasını, şartın hükümsüzlüğünün taşıma sözleşmesinin
// geçersizliği sonucunu doğurmamasını, m.1271/1; ve tazminat istemi
// doğmadan önce yapılan yetki ve tahkim sözleşmelerinin geçerli olmamasını,
// m.1271/2 - düzenlemiştir. BU BATCH İLE "XV) ZAMANAŞIMI" VE "XVI)
// EMREDİCİ HÜKÜMLER" (m.1270-1271) EKSİKSİZ TAMAMLANMIŞ olur ve bununla
// birlikte "Beşinci Bölüm: Deniz Yoluyla Yolcu Taşıma Sözleşmesi"
// (m.1247-1271) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ
// olur. Beşinci Kitap "Deniz Ticareti" bundan sonra Beşinci Kısım "Deniz
// Kazaları"na geçecek ve bu Kısmın "Birinci Bölüm: Müşterek Avarya"sı
// (m.1272'den itibaren - dizinin daha önce m.1196, m.1199 ve m.1244
// yazılarında tekrar tekrar bir istisna veya atıf noktası olarak
// karşılaştığı ama şimdiye kadar doğrudan incelemediği, doktrinsel
// bakımdan çok eski ve kendine özgü bir deniz ticareti kurumu) ile
// açılacak, ardından "İkinci Bölüm: Çatma" ve "Üçüncü Bölüm: Kurtarma"
// izleyecektir; kitabın devamında henüz kapsanmamış çok sayıda Kısım (Gemi
// Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel
// Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya
// yalnızca yukarıda sayılan m.931-1271 aralığını kapsar ve ileriki
// batch'ler, Beşinci Kısım "Deniz Kazaları"ndan itibaren yeni bir dosyada
// yeni slug eşlemeleriyle devam edecektir.
//
// Kırk beşinci batch, Beşinci Kısım "Deniz Kazaları"nın "Birinci Bölüm:
// Müşterek Avarya"sını açar ve bu Bölümün "A) Genel hükümler" alt başlığını
// (m.1272-1273) baştan sona ve eksiksiz kapsar: "I. Tanım" (m.1272) -
// müşterek avarya hareketinin dört kurucu unsurunu (ortak bir deniz
// sergüzeştine atılmış olan gemiyi, yükü, diğer eşyayı ve navlunu birlikte
// tehdit eden bir tehlike; olağanüstü bir fedakârlık veya gider; bile bile
// hareket edilmesi; makul bir hareket tarzı oluşturma) ve bu hareketin
// doğrudan sonucu olan zarar/giderlerin müşterek avarya sayılmasını,
// m.1272/1; müşterek avaryadan sayılacak bir giderin yapılmaması için göze
// alınan her fazla giderin, önlenmiş olan giderin tutarına kadar garameye
// girmesini, m.1272/2; ve müşterek avarya garamesine giren zarar ve
// giderlerin gemi, yük, navlun ve diğer eşya arasında Bölüm hükümlerine
// göre paylaşılmasını, m.1272/3 - ve "II. Uygulanacak kurallar" (m.1273) -
// taraflarca başka bir husus kararlaştırılmamış olduğu takdirde müşterek
// avarya garamesinin, Milletlerarası Denizcilik Komitesi tarafından
// hazırlanıp Türkçe'ye çevrilip yayımlanmış en son tarihli York-Anvers
// Kurallarına tabi olmasını, m.1273/1; ve York-Anvers Kurallarının
// çevirisinin Sigortacılık Genel Müdürlüğü ile Ulaştırma, Denizcilik ve
// Haberleşme Bakanlığı tarafından kurulacak bir ihtisas komitesince
// hazırlanıp orijinal metinle birlikte Resmî Gazetede yayımlanmasını ve
// York-Anvers Kurallarındaki değişikliklerin de aynı yöntemle resen veya
// başvuru üzerine yayımlanmasını, m.1273/2 - kapsamıştır. Dizi, müşterek
// avaryanın daha önce m.1196, m.1199 ve m.1244 yazılarında yalnızca bir
// istisna/atıf noktası olarak dolaylı biçimde geçtiğini, bu batch ile ilk
// kez doğrudan ve kendi başına tanımlandığını vurgular. BU BATCH İLE "A)
// GENEL HÜKÜMLER" (m.1272-1273) EKSİKSİZ TAMAMLANMIŞ olur ve bununla
// birlikte Beşinci Kısım "Deniz Kazaları" resmen AÇILMIŞ olur. Birinci
// Bölüm "Müşterek Avarya" bundan sonra "B) Borçlular ve teminat" (m.1274
// vd. - müşterek avarya garame paylarının kişisel borçluları ve bu borcun
// teminatı) ile devam edecek, ardından "İkinci Bölüm: Çatma" ve "Üçüncü
// Bölüm: Kurtarma" izleyecek olup, kitabın devamında henüz kapsanmamış
// çok sayıda Kısım (Gemi Alacakları, Sorumluluğun Sınırlandırılması ve
// Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1273 aralığını
// kapsar ve ileriki batch'ler yeni slug eşlemeleriyle devam edecektir.
//
// Kırk altıncı batch, "Birinci Bölüm: Müşterek Avarya"nın "B) Borçlular ve
// teminat" alt başlığını (m.1274-1277) baştan sona ve eksiksiz kapsar: "I.
// Garame paylarının borçluları" (m.1274) - garame paylarının üç kişisel
// borçlusunu (müşterek avarya hareketinin meydana geldiği andaki donatan,
// navlunun boşaltma tarihindeki alacaklısı ve diğer eşyanın boşaltma
// tarihindeki maliki), m.1274/1; ve garameye girecek eşyanın gönderileninin,
// teslim alırken garame payı düştüğünü bilmesi hâlinde eşyanın teslim
// zamanındaki değerine kadar şahsen sorumlu olmasını, m.1274/2 - ve "II.
// Alacaklıların rehin hakları - 1. Genel olarak" (m.1275) - alacaklıların
// gemi üzerinde gemi alacaklısı hakkına, garameye girecek eşya üzerinde TMK
// m.950-953 uyarınca hapis hakkına ve navlun üzerinde TMK m.954-961 uyarınca
// alacak rehnine sahip olmasını - kapsamıştır. Bu batch ayrıca "2. Gemiye
// düşen garame payı için teminat" (m.1276) - geminin, zararın tespit ve
// paylaştırılacağı limandan (m.1279) ayrılabilmesi için gemiye düşen garame
// paylarına karşılık yükle ilgililere teminat gösterilmesi zorunluluğunu -
// ve "3. Hapis hakkının kullanılması" (m.1277) - kaptanın, garame payları
// ödenmedikçe veya m.1201 gereğince teminat gösterilmedikçe garameye
// iştirak edecek eşyayı teslim edememesini ve ederse şahsen sorumlu
// tutulmasını, m.1277/1; donatanın talimatı hâlinde m.1089/2-3'ün
// uygulanmasını, m.1277/2; ve alacaklıların garameye giren eşya üzerindeki
// hapis hakkının, alacaklılar adına taşıyan tarafından m.1201 hükümlerine
// göre kullanılmasını, m.1277/3 - kapsamıştır. BU BATCH İLE "B) BORÇLULAR
// VE TEMİNAT" (m.1274-1277) EKSİKSİZ TAMAMLANMIŞ olur. Birinci Bölüm
// "Müşterek Avarya" bundan sonra "C) Dispeç" (m.1278'den itibaren - dispeç
// nedir, kimin yaptıracağı, dispeççi ve dispeç raporuna itiraz/onay
// süreçlerinin usulü) ile devam edecek, ardından "İkinci Bölüm: Çatma" ve
// "Üçüncü Bölüm: Kurtarma" izleyecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1277 aralığını kapsar ve ileriki batch'ler, "C) Dispeç"ten itibaren
// yeni slug eşlemeleriyle devam edecektir.
//
// Kırk yedinci batch, "C) Dispeç"in "I. Genel olarak" kısmını (m.1278-1280)
// TAMAMEN kapsar: "1. Yaptırma yükümlülüğü" (m.1278) - donatanın dispeçi
// gecikmeksizin yaptırma yükümlülüğü ve ihlalinde ilgililerin her birine
// karşı sorumluluğu, m.1278/1; dispeç süresinde yaptırılmazsa sigortacı
// dahil ilgililerden herhangi birinin bunu isteme ve yaptırma yetkisi,
// m.1278/2; dispeççinin olayın müşterek avarya sayılmayacağı gerekçesiyle
// istemi reddetmesi hâlinde m.1279'daki yer mahkemesine başvuru ve basit
// yargılama usulü, m.1278/3 - "2. Yapılacağı yer" (m.1279) - zararın
// tespit ve paylaştırılmasının varma yerinde, eğer buraya varılmazsa
// yolculuğun bittiği limanda yapılacağı - ve "3. Dispeççi" (m.1280) -
// dispeççinin ilgililerin oybirliğiyle veya oybirliği sağlanamazsa
// dispeçin yapılacağı yer mahkemesince atanması, m.1280/1; ilgililerin
// belge sağlama yükümlülüğü ile mahkemenin belge ibrazına karar verme
// yetkisi, m.1280/2-3; dispeççinin dispeç örneği verme yükümlülüğü,
// m.1280/4 - kapsamıştır. BU BATCH İLE "C) DİSPEÇ - I. GENEL OLARAK"
// (m.1278-1280) EKSİKSİZ TAMAMLANMIŞ olur. Birinci Bölüm "Müşterek
// Avarya" bundan sonra "C) Dispeç"in "II. Dispeçin onaylanmasını isteme
// hakkı ve dispeçe itiraz" alt kısmıyla (m.1281'den itibaren - dispeç
// raporuna itiraz ve onay usulü, çekişmesiz yargı işi niteliği) devam
// edecek, ardından "İkinci Bölüm: Çatma" ve "Üçüncü Bölüm: Kurtarma"
// izleyecek olup, kitabın devamında henüz kapsanmamış çok sayıda Kısım
// (Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya
// İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1280 aralığını
// kapsar ve ileriki batch'ler, m.1281'den itibaren yeni slug
// eşlemeleriyle devam edecektir.
//
// Kırk sekizinci batch, "C) Dispeç"in "II. Dispeçin onaylanmasını isteme
// hakkı ve dispeçe itiraz" alt kısmını (m.1281-1284) TAMAMEN kapsar ve bu
// alt kısmı iki ayrı yazıyla işler. İlk yazı, tek başına beş fıkra içeren
// m.1281'i ("1. Duruşma") baştan sona kapsar: sigortacılar dâhil ilgililerin
// dispeçin onaylanmasını isteme veya avarya türüne ya da hesaplarına itiraz
// etme hakkı, m.1281/1; dilekçede duruşmaya çağrılacak ilgililerin ad ve
// soyadlarının bildirilmesi, m.1281/2; mahkemenin dispeççiden belge istemesi
// ve gerekirse ibraz emri verme yetkisi, m.1281/3; ilgililerin hepsinin
// duruşmaya çağrılması, çağrının üç unsuru (belgelerin incelenebileceği,
// önceden de itiraz edilebileceği, gelinmezse onay verilmiş sayılacağı) ve
// onbeş günlük tebliğ süresi, m.1281/4; ve itirazın en geç ilk celsede,
// hiçbir tereddüde yer bırakmayacak şekilde açık ve etraflı yapılması
// zorunluluğu, haklı sebeple hâkimin bir defalık ek süre verme yetkisi ve bu
// koşullara uyulmamasının itirazın yapılmamış sayılması yaptırımı, m.1281/5.
// İkinci yazı ise m.1282, m.1283 ve m.1284'ü kapsar: itirazsız dispecin
// doğrudan onaylanması, itiraz üzerine ilgililerin dinlenmesi ve itirazın
// yerinde görülmesi veya başka surette anlaşmaya varılması hâlinde dispecin
// düzeltilerek onaylanması, m.1282/1; itirazın hemen karara bağlanamaması
// hâlinde itirazın kapsamı dışındaki kısımların ayrı kararla onaylanıp
// itiraz edilen kısım için duruşmaya devam olunması (kısmi onay), m.1282/2;
// m.1281 ve m.1282 hükümleri saklı kalmak kaydıyla basit yargılama usulünün
// uygulanması, m.1283; ve dispeç onama kararının kesinleşmesiyle -itiraza
// uğramamış bir raporda kesinleşmeden önce dahi- alacakların ödetilmesi için
// ilam niteliği kazanması ile bu ilamın usulüne göre duruşmaya çağrılmamış
// ilgililer aleyhine hiçbir sonuç doğurmaması, m.1284. Dizi, bu batch'te
// önceki dört batch'te (m.1273, m.1274-1277, m.1278, m.1279-1280) gözlemlenen
// "Yargıtay içtihadı seyrek kalır" örüntüsünden KISMEN farklı bir tabloyla
// karşılaşmış; m.1281'e pinpoint atıfla tam metnini alıntılayan güncel bir
// Sakarya Bölge Adliye Mahkemesi kararı ile m.1284'ün ilam niteliği sonucunu
// bir dava şartı (hukuki yarar) meselesine bağlayan, karşı oylu bir Yargıtay
// 11. Hukuk Dairesi karar çifti tespit etmiştir. BU BATCH İLE "C) DİSPEÇ"
// BAŞLIĞI (m.1278-1284) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ
// TAMAMLANMIŞ olur. Birinci Bölüm "Müşterek Avarya"dan geriye yalnızca "D)
// Zamanaşımı" (m.1285 - müşterek avarya garame payı alacaklarının bir yıllık
// zamanaşımı süresi ve bu sürenin geminin m.1279'daki yere vardığı tarihten
// itibaren işlemeye başlaması) kalmakta olup, bu madde bir sonraki batch'in
// konusu olacak ve bununla birlikte "Birinci Bölüm: Müşterek Avarya"
// (m.1272-1285) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ
// olacaktır. Beşinci Kitap "Deniz Ticareti" bundan sonra "İkinci Bölüm:
// Çatma" ve "Üçüncü Bölüm: Kurtarma" ile devam edecek olup, kitabın
// devamında henüz kapsanmamış çok sayıda Kısım (Gemi Alacakları,
// Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler
// dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca
// yukarıda sayılan m.931-1284 aralığını kapsar ve ileriki batch'ler,
// m.1285'ten itibaren yeni slug eşlemeleriyle devam edecektir.
//
// Kırk dokuzuncu ve bu dosya bakımından son batch, "D) Zamanaşımı" başlığının
// tamamını (m.1285) TEK bir yazıyla kapsar: müşterek avarya garame payı
// alacaklarının bir yılda zamanaşımına uğraması, m.1285/1; ve bu sürenin
// geminin 1279 uncu maddede belirtilen yere vardığı tarihten itibaren
// işlemeye başlaması, m.1285/2. Madde kısa (iki fıkra) olduğundan bu yazı,
// madde metni analizinin yanı sıra, "Birinci Bölüm: Müşterek Avarya"nın
// TAMAMINA (A) Genel hükümler m.1272-1273, B) Borçlular ve teminat
// m.1274-1277, C) Dispeç m.1278-1284, D) Zamanaşımı m.1285) dair geniş bir
// SENTEZ bölümü de içerir. BU BATCH İLE "D) ZAMANAŞIMI" (m.1285) VE
// BUNUNLA BİRLİKTE "BİRİNCİ BÖLÜM: MÜŞTEREK AVARYA" (m.1272-1285) İLK
// MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞ olur -bu, sıradan
// bir batch değil, binlerce yıllık bir deniz ticareti kurumunu (lex Rhodia
// de iactu'dan York-Anvers Kuralları'na) baştan sona işleyen BÜYÜK bir
// milestone'dur. Beşinci Kitap "Deniz Ticareti" bundan sonra "İkinci Bölüm:
// Çatma"ya (m.1286-1297 - iki geminin çarpışmasından doğan zararın kusur
// esasına göre paylaştırılması, müşterek avaryadaki dayanışma/paylaşım
// rejiminden farklı bir haksız fiil/kusur sorumluluğu rejimi) geçecek,
// ardından "Üçüncü Bölüm: Kurtarma" izleyecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1285 aralığını kapsar ve ileriki batch'ler, "İkinci Bölüm: Çatma"nın
// açılışından (m.1286'dan) itibaren yeni slug eşlemeleriyle devam edecektir.
//
// Ellinci batch, Beşinci Kısım "Deniz Kazaları"nın "İkinci Bölüm: Çatma"sını
// (m.1286-1297) açar ve bu Bölümün ilk dört maddesini iki ayrı yazıyla kapsar.
// İlk yazı "A) Uygulama alanı" (m.1286) ve "B) Kusursuz çatma"yı (m.1287)
// kapsar: çatmanın -iki veya daha çok geminin çarpışmasının- tanımı ve Bölüm
// hükümlerinin gemilere, gemilerde bulunan insanlara veya eşyaya verilen
// zararın tazminiyle sınırlı kapsamı, m.1286/1; çatma olmaksızın da -bir
// manevra veya seyir kuralı ihlaliyle- verilen zararlara çatma hükümlerinin
// uygulanacağı yönündeki genişletici hüküm, m.1286/2; çatmanın umulmayan bir
// hâl veya mücbir sebep yüzünden meydana gelmiş ya da nedeninin
// anlaşılamamış olması hâlinde herkesin kendi zararına katlanması kuralı,
// m.1287/1; ve bu kuralın gemilerin hepsi veya biri kaza anında demirdeyken
// meydana gelen hâllere de uygulanması, m.1287/2. İkinci yazı ise "C)
// Kusurlu çatma"nın "I. Bir tarafın kusuru" (m.1288) ve "II. Ortak kusur - 1.
// Eşya zararı" (m.1289) alt başlıklarını kapsar: çatmanın gemilerden birinin
// donatanının veya gemi adamlarının kusurundan ileri gelmesi hâlinde zararın
// o geminin donatanınca tazmini, m.1288; çatmanın çarpışan gemilerin
// donatanlarının veya gemi adamlarının kusurlarından ileri gelmesi hâlinde
// donatanların kusurlarının ağırlığı -belirlenemezse veya eşitse eşit- oranında
// sorumlu olması ve bu sorumluluğun üçüncü kişilere karşı müteselsil
// olmaması, m.1289/1; ve çatmanın gemi adamlarının geminin sevkine veya
// teknik yönetimine ilişkin bir hareketinin sonucu olması hâlinde donatanın
// kendi yükünün ilgililerine karşı m.1062/1 ve m.1180/1 uyarınca sorumsuzluğu
// ile bu sorumsuzluğun yabancı hukuka göre alınan tazminatlar bakımından
// doğurduğu çok kademeli rücu zinciri, m.1289/2 - kapsanmıştır. Araştırmada,
// çatmanın deniz ticaretinin en sık dava konusu olan kurumlarından biri
// olduğu doğrulanmış; m.1286'nın uygulama alanının sınırını (bir mavnanın
// kıyı yapısına çarpmasının çatma sayılmayacağını) doğrudan test eden bir
// Yargıtay 11. Hukuk Dairesi kararı ile m.1288 ve m.1289/1'in kusur oranına
// göre müteselsil olmayan sorumluluk ilkesini somut olarak uygulayan iki
// karar (biri tek taraflı kusur, diğeri -Reina 1/Ankara Feribotu davası- %60/
// %40 kusur oranlı müşterek kusurlu çatma) tespit edilmiştir; m.1287
// (kusursuz çatma) ve m.1289/2 (navigasyon hatası rücu zinciri) bakımından
// ise pinpoint bir içtihada rastlanmadığı dürüstçe belirtilmiştir. BU BATCH
// İLE "İKİNCİ BÖLÜM: ÇATMA"NIN İLK DÖRT MADDESİ (m.1286-1289) TAMAMLANMIŞ
// olur. "İkinci Bölüm: Çatma" bundan sonra "2. Can ve beden zararı" (m.1290)
// ile devam edecek, ardından Bölümün geri kalanı (m.1291-1297) ve "Üçüncü
// Bölüm: Kurtarma" izleyecek olup, kitabın devamında henüz kapsanmamış çok
// sayıda Kısım (Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1289 aralığını
// kapsar ve ileriki batch'ler, m.1290'dan itibaren yeni slug eşlemeleriyle
// devam edecektir.
//
// Ellibirinci batch, "C) Kusurlu çatma"nın kalan iki alt başlığını -"II.
// Ortak kusur - 2. Bedensel zarar" (m.1290) ve "III. Kılavuzun kusuru"
// (m.1291)- işleyerek "C) Kusurlu çatma"yı İLK MADDESİNDEN SON MADDESİNE
// KADAR TAMAMLAR; ardından Bölümün bir sonraki başlığı olan "D) Dava öncesi
// delil tespiti"ni m.1292 ile açar. İlk yazı m.1290-1291'i kapsar: ortak
// kusurlu çatmada gemilerde bulunan kişilerin ölümünden, yaralanmasından
// veya sağlığının bozulmasından doğan zararlardan donatanların -eşya
// zararındaki m.1289/1'in müteselsil olmayan modelinin tam tersine-
// müteselsilen sorumlu olması ve oranın tespiti mümkün olmazsa veya taraflar
// eşit kusurluysa eşit sorumluluk, m.1290/1; donatanların birbirine
// rücuunda her donatanın kusurunun ağırlığı oranında sorumlu olması,
// m.1290/2; kılavuzun kusurundan doğan çatmada, zorunlu danışman kılavuz
// veya isteğe bağlı kılavuzda donatanın sorumlu, buna karşılık zorunlu sevk
// kılavuzunda donatanın sorumsuz olması, m.1291/1-2 - kapsanmıştır. İkinci
// yazı ise "D) Dava öncesi delil tespiti"ni m.1292 ile açar: dava öncesi
// delil tespitlerinde çatmanın meydana geldiği yerde deniz ticareti
// işlerine bakan asliye ticaret mahkemesi, bulunmadığı takdirde asliye
// ticaret mahkemesi, o da yoksa ticaret davalarına bakan asliye hukuk
// mahkemesinin kademeli yetkisi, m.1292/1; çatmaya karışan her geminin
// kaptanına veya temsilcisine tespit yapılacağının bildirilmesi, m.1292/2;
// ve tespit raporunda çatmaya karışan gemilerin kusur oranlarının
// belirtilmemesi, m.1292/3. Araştırmada, m.1290 bakımından İstanbul Bölge
// Adliye Mahkemesi 12. Hukuk Dairesi'nin m.1289-1290 ayrımını doğrudan teyit
// eden ve çift yönlü rücu zincirini somut uygulayan kesinleşmiş bir kararı,
// m.1291 bakımından ise İstanbul Anadolu 6. Asliye Ticaret Mahkemesi'nin
// m.1291/1'i pinpoint uygulayan (henüz kesinleşmemiş) bir kararı tespit
// edilmiştir; m.1291/2 (zorunlu sevk kılavuzu sorumsuzluğu) ve m.1292 (dava
// öncesi delil tespiti usulü) bakımından ise pinpoint bir içtihada
// rastlanmadığı dürüstçe belirtilmiştir. BU BATCH İLE "C) KUSURLU ÇATMA"
// (m.1288-1291) TAMAMLANMIŞ ve "D) DAVA ÖNCESİ DELİL TESPİTİ" m.1292 İLE
// AÇILMIŞ olur. "İkinci Bölüm: Çatma" bundan sonra m.1293'ten itibaren
// (E) Şekil şartı yokluğu ve Bölümün geri kalan hükümleriyle) devam edecek,
// ardından "Üçüncü Bölüm: Kurtarma" izleyecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1292 aralığını kapsar ve ileriki batch'ler, m.1293'ten itibaren
// yeni slug eşlemeleriyle devam edecektir.
//
// Ellikinci ve bu dosya bakımından son batch, "İkinci Bölüm: Çatma"nın kalan
// beş maddesini -"E) Şekil şartı yokluğu" (m.1293), "F) Karine yokluğu"
// (m.1294), "G) Kaptanın yardım görevi ve yerine getirilmemesinden donatanın
// sorumsuzluğu" (m.1295), "H) Saklı tutulan hükümler" (m.1296) ve "İ)
// Zamanaşımı" (m.1297)- iki yazıyla işleyerek Bölümü İLK MADDESİNDEN SON
// MADDESİNE KADAR EKSİKSİZ TAMAMLAR. İlk yazı m.1293-1294'ü kapsar: çatma
// sonucu uğranılan zararın tazmini için açılacak davalar öncesinde bir ihtar
// düzenlenmesine veya başkaca bir şekil şartının yerine getirilmesine gerek
// olmaması, m.1293; ve çatmada kusurun saptanmasında herhangi bir karinenin
// dikkate alınmaması, m.1294 - bu iki maddenin, çatma davalarının HIZLI
// açılabilmesi ile kusurun TİTİZ biçimde ispatlanması gerekliliği arasındaki
// dengeyi nasıl kurduğu vurgulanmıştır. İkinci yazı ise m.1295-1297'yi kapsar
// ve BÜYÜK bir milestone'dur: çatmadan sonra her geminin kaptanının, kendi
// gemisini ciddi bir tehlikeye atmadan mümkün olması şartıyla diğer gemiye,
// gemi adamlarına ve yolculara yardımla ve kimlik bildirmekle yükümlü olması
// ile kaptanın sadece bu yükümlülüğü ihlalinden donatanın sorumsuz olması,
// m.1295; donatanın sorumluluğunun sınırlandırılmasına ilişkin hükümlerin ve
// taşıma sözleşmelerinden doğan borçların saklı tutulması, m.1296; ve
// çatmaya dayanan tazminat isteminin çatmanın meydana geldiği günden
// başlayarak iki yılda, donatanların birbirine karşı rücu haklarının ise
// ödemenin yapıldığı tarihten başlayarak bir yılda zamanaşımına uğraması,
// m.1297 - kapsanmıştır ve bu maddeyle birlikte "İkinci Bölüm: Çatma"
// (m.1286-1297) İLK MADDESİNDEN SON MADDESİNE KADAR EKSİKSİZ TAMAMLANMIŞTIR.
// Araştırmada, m.1293, m.1295 ve m.1296 gibi dar/teknik hükümler bakımından
// pinpoint bir içtihada rastlanmadığı; m.1294 bakımından İstanbul 17. Asliye
// Ticaret Mahkemesi'nin (kesinleşmiş) bir kararında karine yokluğu ilkesinin
// savunma stratejisinde doğrudan kullanıldığı; m.1297 bakımından ise -merkezi
// bir savunma olması beklentisiyle tutarlı biçimde- daha zengin bir içtihat
// kümesi, özellikle aynı çok taraflı çatma olayından doğan davalardan
// birinin esastan kabul edilirken diğerinin m.1297/1 uyarınca salt
// zamanaşımı nedeniyle reddedildiği öğretici bir İstanbul 17. Asliye Ticaret
// Mahkemesi kararı tespit edilmiştir. BU BATCH İLE "İKİNCİ BÖLÜM: ÇATMA"
// (m.1286-1297) TAMAMLANMIŞ olur -bu, Müşterek Avarya Bölümü'nün
// tamamlanmasına benzer BÜYÜK bir milestone'dur. Beşinci Kısım "Deniz
// Kazaları" bundan sonra "Üçüncü Bölüm: Kurtarma"ya (Salvage, m.1298-1319 -
// "A) Eşya kurtarma" ile açılacak) geçecek olup, kitabın devamında henüz
// kapsanmamış çok sayıda Kısım (Gemi Alacakları, Sorumluluğun
// Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil) m.1400'e
// kadar sürecek şekilde bulunmaktadır; bu dosya yalnızca yukarıda sayılan
// m.931-1297 aralığını kapsar ve ileriki batch'ler, "Üçüncü Bölüm:
// Kurtarma"nın açılışından (m.1298'den) itibaren yeni slug eşlemeleriyle
// devam edecektir.
//
// Elliüçüncü batch, "Üçüncü Bölüm: Kurtarma"yı (Salvage, m.1298-1319) açar.
// Bu batch, Bölümün ilk üç maddesini iki yazıyla işler. İlk yazı yalnızca
// m.1298'i kapsar: "A) Eşya kurtarma - I. Kurtarma faaliyeti" başlığı
// altında, seyrüsefere elverişli sularda tehlikeye uğramış su aracı veya
// diğer eşyanın kurtarılması için yapılan her fiil veya hareketin kurtarma
// faaliyeti oluşturduğu genel tanımı (f.1); "su aracı" ve "eşya"
// terimlerinin -hak kazanılmamış navlun alacağı dahil- tanımı (f.2); "eşya"
// teriminin kapsamı dışında kalan mineral kaynak platformları/açık deniz
// sondaj birimleri ile deniz yatağındaki kültür eserleri (f.3); ve
// "kurtarma faaliyeti" teriminin kapsamı dışında kalan üç hâl -malikin
// açık ve makul karşı koyması, tehlikedeki araçta çalışanların faaliyetleri
// ve tehlike doğmadan önce kurulmuş bir sözleşmenin ifası (f.4)- işlenmiştir.
// İkinci yazı ise "II- Diğer hâller" başlıklı m.1299'u -Bölüm hükümlerinin
// kurtaranın mevzuat gereğince kurtarma yükümlülüğü bulunması ve kurtarma
// faaliyetinde bulunan aracın kurtarılan araçla aynı malike ait olması
// hâllerinde de uygulanması- ve "III- Kurtarma sözleşmesi - 1. Sözleşme
// yapma yetkisi" başlıklı m.1300'ü -kaptanın aracın, malik ile kaptanın ise
// araçtaki eşyanın malikleri adına, yetkili mahkeme veya tahkimi
// kararlaştırmak dahil, kurtarma sözleşmesi yapmaya yetkili olması- kapsar.
// Araştırmada, m.1298'in tüm fıkraları bakımından zengin bir içtihat kümesi
// (özellikle m.1298/4-b ve 4-c'yi birlikte uygulayan, gemi adamlarının bir
// saldırganı etkisiz hale getirip gemiyi kurtarmasının dahi kurtarma
// faaliyeti sayılmadığına hükmeden Yargıtay 11. Hukuk Dairesi E.2023/517
// K.2024/2511 kararı) ve m.1300 bakımından da doğrudan uygulanan bir
// içtihat çifti (kaptanın yetkili mahkeme kararlaştırma yetkisinin donatanı
// bağladığına hükmeden Yargıtay 11. Hukuk Dairesi E.2016/3986 K.2016/4311
// kararı) tespit edilmiş; buna karşılık m.1299'a doğrudan ve pinpoint
// biçimde dayanan bir karara rastlanmadığı dürüstçe belirtilmiştir. Bu
// batch ile "Üçüncü Bölüm: Kurtarma"nın ilk üç maddesi (m.1298-1300)
// tamamlanmış olur; Bölümün devamı (m.1301'den itibaren kurtarma
// sözleşmesinin hakkaniyet denetimi, kurtarma ücretinin şartları ve "no
// cure, no pay" ilkesi dahil, m.1319'a kadar) ileriki bir batch'te ele
// alınacak olup, kitabın devamında henüz kapsanmamış çok sayıda Kısım
// (Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin
// Özel Hükümler dahil) m.1400'e kadar sürecek şekilde bulunmaktadır; bu
// dosya yalnızca yukarıda sayılan m.931-1300 aralığını kapsar ve ileriki
// batch'ler, m.1301'den itibaren yeni slug eşlemeleriyle devam edecektir.
//
// ElliDördüncü batch, "Üçüncü Bölüm: Kurtarma"nın devamını iki yazıyla
// işler. İlk yazı, "III- Kurtarma sözleşmesi" alt başlığının kalan iki
// maddesini tamamlar: "2. Sözleşmenin uyarlanması veya iptali" başlıklı
// m.1301 -kurtarma sözleşmesinin yanlış yönlendirme veya tehlikenin etkisi
// altında yapılmış olması VE (kabul edilen şartların hak ve nasafet
// ilkelerine aykırı bulunması YA DA kurtarma ücretinin yapılan hizmetlerle
// aşırı oransız olması) hâllerinde, istem üzerine mahkemece uyarlanabilmesi
// veya iptal edilebilmesi- ve "3. Emredici hükümler" başlıklı m.1302 -Bölüm
// hükümlerinin kural olarak sözleşmeyle değiştirilebilir olması (f.1), buna
// karşılık sözleşmenin uyarlanması/iptaline ve çevre zararını önleme özen
// yükümlülüğüne ilişkin hükümlerin emredici kalması (f.2). Bu yazı ile
// "III- Kurtarma sözleşmesi" alt başlığı (m.1300-1302) tamamlanmış olur.
// İkinci yazı ise "IV- Tarafların yükümlülükleri" başlıklı m.1303 -kurtaranın
// malike karşı özenli faaliyet, çevre zararını önleme özeni, başka
// kurtaranlardan yardım isteme ve makul istem hâlinde başka kurtaranların
// müdahalesini ücretini değiştirmeden kabul etme yükümlülükleri (f.1);
// malikin/kaptanın kurtarana karşı işbirliği, çevre zararını önleme özeni ve
// emniyete alınan aracı/eşyayı teslim alma yükümlülükleri (f.2); ve "çevre
// zararı" tanımı (f.3)- ile "V- Kurtaranın hakları - 1. Kurtarma ücreti -
// a) İlkeler" başlıklı m.1304'ü -faydalı sonuç veren her türlü kurtarma
// faaliyetinin ücret istemine hak kazandırması (f.1), faydalı sonuç
// vermeyen faaliyet için Bölümde aksi yazılı olmadıkça ücret isteme hakkı
// doğmaması yani "no cure, no pay" ilkesinin kanuni ifadesi (f.2) ve
// kurtarma ücretinin kurtarılan eşyanın kurtarılma sonrasındaki değerini
// geçememesi (f.3)- açar. Araştırmada, m.1301 bakımından maddenin tam
// metnini alıntılayarak uygulayan Yargıtay 11. Hukuk Dairesi E.2021/1390
// K.2021/2031 kararı (m.1300 ile birlikte ele alınmıştı, ancak somut olayda
// mahkeme gerçek bir tehlikenin bulunmadığı gerekçesiyle faaliyeti çekme
// hizmeti saymış olup uyarlama/iptal mekanizmasının bizzat işletildiği bir
// karara rastlanmamıştır) tespit edilmiş; m.1302'ye ve m.1303'e doğrudan ve
// pinpoint biçimde dayanan bir karara rastlanmadığı dürüstçe belirtilmiştir.
// m.1304 bakımından ise, faydalı sonuç ilkesini doğrudan uygulayan çok
// sayıda karar (Nil-K/Mercy God gemisi hakkında Yargıtay 11. Hukuk Dairesi
// E.2020/272 K.2020/4974 ve devamındaki E.2021/6153 K.2022/7431; Abane
// gemisi hakkında E.2024/4398 K.2025/2802; İnce Karadeniz gemisi hakkında
// E.2023/517 K.2024/2511; ve faydalı sonuç vermeyen -"semeresiz kalan"-
// faaliyet için eski TTK döneminde dahi ücret reddedilen E.2013/12749
// K.2014/2130) tespit edilmiştir. Bu batch ile "Üçüncü Bölüm: Kurtarma"nın
// m.1301-1304 aralığı tamamlanmış olur; Bölümün devamı (m.1305'ten
// itibaren, muhtemelen "b) Kurtarma ücretinin belirlenmesi" başlığı ve
// kurtarma ücretinin hesaplanma kriterleri dahil, m.1319'a kadar) ileriki
// bir batch'te ele alınacak olup, kitabın devamında henüz kapsanmamış çok
// sayıda Kısım (Gemi Alacakları, Sorumluluğun Sınırlandırılması ve Cebrî
// İcraya İlişkin Özel Hükümler dahil) m.1400'e kadar sürecek şekilde
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1304 aralığını
// kapsar ve ileriki batch'ler, m.1305'ten itibaren yeni slug eşlemeleriyle
// devam edecektir.
//
// Ellibeşinci batch, "Üçüncü Bölüm: Kurtarma"nın "1. Kurtarma ücreti" alt
// başlığının kalan iki bölümünü -"b) Ücretin belirlenmesi" (m.1305) ve "c)
// Borçlular" (m.1306)- iki ayrı yazıyla işler. İlk yazı, m.1305'i tek başına
// kapsar: kurtarma ücreti taraflarca belirlenmemişse veya 1301 inci maddeye
// göre mahkemece uyarlanması istenmişse, ücretin, kurtarma faaliyetini
// özendirecek bir anlayışla ve sıralama dikkate alınmaksızın on kıstasa göre
// belirlenmesi -aracın/eşyanın kurtarıldıktan sonraki değeri (a), çevre
// zararını önleme çaba ve becerisi (b), elde edilen başarının derecesi (c),
// karşılaşılan tehlikenin ve göze alınan rizikonun niteliği/büyüklüğü (d),
// aracın/eşyanın/insan hayatının kurtarılması için gösterilen çaba ve beceri
// (e), harcanan zaman/giderler/uğranılan zarar (f), yüklenilen sorumluluk
// rizikosu ve teçhizatın uğradığı diğer rizikolar (g), hizmetin çabukluğu
// (h), araç ve teçhizatın kullanıma hazır bulundurulmuş ve fiilen kullanılmış
// olması (i) ve teçhizatın kurtarmaya hazır olması, etkinliği ve değeri (j)-,
// m.1305/1; resmî kurumların giderleri ve harçları ile gümrük resimleri ve
// eşyanın saklanması/korunması/değer biçilmesi/satılması giderlerinin
// kurtarma ücretine girmemesi, m.1305/2; ve ücretin para olarak saptanması
// ile aksi kararlaştırılmadıkça kurtarılan şeylerin değerinin bir yüzdesi
// olarak belirlenememesi, m.1305/3 - kapsanmıştır. İkinci yazı ise m.1306'yı
// işler: kurtarma ücretinin borçlularının, kurtarılan aracın ve diğer
// eşyanın kurtarma faaliyetinin tamamlandığı andaki malikleri olması -bu
// tek anlı yaklaşımın, m.1274'teki müşterek avarya borçlularının üç farklı
// zaman anına (donatan için olay anı, navlun/eşya için boşaltma tarihi) göre
// belirlenmesinden farklı, kurtarma faaliyetinin kendi başına tanımlanabilir
// bir olay olmasından kaynaklanan bir tasarım olduğu vurgulanmıştır-, m.1306/1;
// ve ücretin, aracın maliki ile diğer eşyanın malikleri arasında kurtarılan
// değerler oranında paylaşılması ve borçlular arasında teselsül bulunmaması
// -bu müteselsil olmayan modelin, m.1289/1'deki çatmada eşya zararı için
// donatanların üçüncü kişilere karşı müteselsil olmayan sorumluluğuyla
// yapısal bir paralellik taşıdığı analiz edilmiştir-, m.1306/2 - kapsanmıştır.
// Araştırmada, m.1305 bakımından on kıstası tek tek uygulayan ve yüzde
// yasağını doğrudan işleten zengin bir İstanbul 17. Asliye Ticaret Mahkemesi
// içtihadı (E.2016/80 K.2021/16; E.2014/723 K.2018/195; E.2014/1419 K.2020/251
// - Abane gemisi, önceki batch'te aktarılan Yargıtay 11. Hukuk Dairesi
// E.2024/4398 K.2025/2802 kararının dayandığı ilk derece kararı) ile bir
// istinaf kararı (İstanbul BAM 43. Hukuk Dairesi E.2021/585 K.2024/716) tespit
// edilmiş; m.1306/1 bakımından "malik = borçlu" kuralını doğrudan uygulayan üç
// Yargıtay 11. Hukuk Dairesi kararı (E.2020/272 K.2020/4974 ve devamındaki
// E.2021/6153 K.2022/7431 - Nil-K/Mercy God gemisi, malik ile donatan
// ayrımının vurgulandığı; E.2017/5338 K.2019/1789) tespit edilmiş; ancak
// m.1306/2'deki paylaşım/teselsül-yokluğu kuralını bizzat ve pinpoint
// biçimde tartışan bir karara rastlanmadığı, en yakın somut örneğin Abane
// gemisi kararındaki gemi/yakıt-yük ayrı hesaplaması olduğu ancak bu kararın
// "teselsül yoktur" kuralını ayrıca gerekçe olarak zikretmediği dürüstçe
// belirtilmiştir. Bu batch ile "Üçüncü Bölüm: Kurtarma"nın "V- Kurtaranın
// hakları - 1. Kurtarma ücreti" alt başlığı (a) İlkeler m.1304, b) Ücretin
// belirlenmesi m.1305, c) Borçlular m.1306) baştan sona tamamlanmış olur;
// Bölümün devamı (muhtemelen "2. ..." biçiminde yeni bir alt başlıkla,
// m.1400'e kadar sürecek şekilde) ileriki bir batch'in konusu olacak olup,
// kitabın devamında henüz kapsanmamış çok sayıda Kısım (Gemi Alacakları,
// Sorumluluğun Sınırlandırılması ve Cebrî İcraya İlişkin Özel Hükümler dahil)
// bulunmaktadır; bu dosya yalnızca yukarıda sayılan m.931-1306 aralığını
// kapsar ve ileriki batch'ler, m.1306'dan sonraki alt başlıktan itibaren yeni
// slug eşlemeleriyle devam edecektir.

export const TTK_DENIZ_TICARETI_GROUP_ORDER: string[] = [
  "Gemi: Genel Hükümler",
  "Gemi: Geminin Kimliği",
  "Gemi: Gemi Sicili",
  "Gemi: Mülkiyet ve Diğer Ayni Haklar",
  "Gemi: Gemi Rehni ve İpoteği",
  "Gemi: İntifa Hakkı",
  "Donatan ve Donatma İştiraki",
  "Kaptan",
  "Gemi Kira Sözleşmeleri",
  "Zaman Çarteri Sözleşmesi",
  "Navlun Sözleşmesi: Genel Hükümler ve Yükleme",
  "Navlun Sözleşmesi: Yükleme Süreleri ve Sürastarya",
  "Navlun Sözleşmesi: Kırkambar ve Yüklemenin Tamamlanması",
  "Navlun Sözleşmesi: Boşaltma",
  "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "Navlun Sözleşmesi: Taşıyanın Hakları",
  "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "Denizde Taşıma Senetleri: Konişmento",
  "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "Deniz Kazaları: Müşterek Avarya",
  "Deniz Kazaları: Çatma",
  "Deniz Kazaları: Kurtarma",
];

// slug -> TTK_DENIZ_TICARETI_GROUP_ORDER içindeki başlık. Madde numarası
// sırasıyla, TTK Beşinci Kitap "Deniz Ticareti"nin resmi kısım/bölüm
// sistematiğine göre atanmıştır.
const SLUG_TO_GROUP: Record<string, string> = {
  "gemi-tanimlari-ve-genel-hukumler-ttk-931": "Gemi: Genel Hükümler",
  "geminin-adi-bayragi-ve-baglama-limani-ttk-938": "Gemi: Geminin Kimliği",
  "gemilerde-ceza-hukumleri-ve-yonetmelik-ttk-947": "Gemi: Geminin Kimliği",
  "gemi-sicili-kurulusu-ve-tescili-caiz-zorunlu-gemiler-ttk-954":
    "Gemi: Gemi Sicili",
  "geminin-tescili-usulu-ttk-959": "Gemi: Gemi Sicili",
  "gemi-sicilinden-silinme-ve-gemi-tasdiknamesi-ttk-965": "Gemi: Gemi Sicili",
  "gemi-sicilinin-hukumleri-ve-sicile-guven-ilkesi-ttk-973": "Gemi: Gemi Sicili",
  "yapi-halindeki-gemilere-ozgu-sicil-ttk-986": "Gemi: Gemi Sicili",
  "sicil-mudurlugu-kararlarina-itiraz-ve-turk-uluslararasi-gemi-sicili-ttk-993":
    "Gemi: Gemi Sicili",
  "gemi-mulkiyetinde-uygulanacak-hukumler-ve-aslen-iktisap-ttk-996":
    "Gemi: Mülkiyet ve Diğer Ayni Haklar",
  "gemi-mulkiyetinin-devren-iktisabi-ve-ziyai-ttk-1001":
    "Gemi: Mülkiyet ve Diğer Ayni Haklar",
  "gemi-payi-ve-yapi-halindeki-gemiler-uzerinde-mulkiyet-ttk-1006":
    "Gemi: Mülkiyet ve Diğer Ayni Haklar",
  "gemi-rehninin-turleri-ve-tersane-sahibinin-ipotek-hakki-ttk-1012":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-ipoteginin-niteligi-kurulmasi-ve-sicile-tescili-ttk-1014":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-ipoteginin-kapsami-ve-sigorta-tazminati-iliskisi-ttk-1020":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-ipoteginin-hukumleri-alacagin-muacceliyetinden-once-ve-sonra-ttk-1030":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-ipoteginin-devri-ve-degistirilmesi-ttk-1038":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-ipoteginin-sona-ermesi-ttk-1044": "Gemi: Gemi Rehni ve İpoteği",
  "yapi-halindeki-gemiler-uzerinde-ipotek-ttk-1054":
    "Gemi: Gemi Rehni ve İpoteği",
  "gemi-uzerinde-intifa-hakki-ttk-1059": "Gemi: İntifa Hakkı",
  "donatan-kavrami-ve-sorumlulugu-ttk-1061": "Donatan ve Donatma İştiraki",
  "donatma-istirakinin-tanimi-tescili-ve-paydaslar-arasi-iliskiler-ttk-1064":
    "Donatan ve Donatma İştiraki",
  "gemi-muduru-atanmasi-yonetim-ve-temsil-yetkisi-ttk-1068":
    "Donatan ve Donatma İştiraki",
  "donatma-istirakinde-kazanc-zarar-ve-giderlere-katilma-ttk-1076":
    "Donatan ve Donatma İştiraki",
  "donatma-istirakinde-paydas-donatanlarin-sorumlulugu-ttk-1080":
    "Donatan ve Donatma İştiraki",
  "donatma-istirakinin-sona-ermesi-ve-tasfiyesi-ttk-1082":
    "Donatan ve Donatma İştiraki",
  "kaptanin-ozen-yukumlulugu-ve-sorumlulugu-ttk-1088": "Kaptan",
  "kaptanin-geminin-elverisliligine-iliskin-gorevleri-ve-yola-cikmasi-ttk-1090":
    "Kaptan",
  "gemi-jurnali-ve-deniz-raporu-ttk-1096": "Kaptan",
  "kaptanin-donatani-temsil-yetkisi-ve-kredi-islemleri-ttk-1103": "Kaptan",
  "kaptanin-yuke-iliskin-yukumlulukleri-ve-tasarruf-yetkisi-ttk-1111":
    "Kaptan",
  "kaptanin-esya-uzerinde-tasarrufunun-donatani-baglamasi-ttk-1117":
    "Kaptan",
  "gemi-kira-sozlesmesinin-tanimi-ve-sekli-ttk-1119": "Gemi Kira Sözleşmeleri",
  "gemi-kira-sozlesmesinin-hukum-ve-sonuclari-i-ttk-1122":
    "Gemi Kira Sözleşmeleri",
  "gemi-kira-sozlesmesinin-hukum-ve-sonuclari-ii-ttk-1127":
    "Gemi Kira Sözleşmeleri",
  "zaman-carteri-sozlesmesinin-tanimi-ve-taraflarin-borclari-ttk-1131":
    "Zaman Çarteri Sözleşmesi",
  "zaman-carteri-sozlesmesinde-ucret-ve-tahsis-olunanin-sorumlulugu-ttk-1136":
    "Zaman Çarteri Sözleşmesi",
  "navlun-sozlesmesinin-turleri-ve-elverislilik-yukumlulugu-ttk-1138":
    "Navlun Sözleşmesi: Genel Hükümler ve Yükleme",
  "yuklemede-demirleme-yeri-giderler-ve-esya-bildirimi-ttk-1142":
    "Navlun Sözleşmesi: Genel Hükümler ve Yükleme",
  "hazirlik-bildirimi-yukleme-suresi-ve-surastarya-ttk-1152":
    "Navlun Sözleşmesi: Yükleme Süreleri ve Sürastarya",
  "yolculuk-baslamadan-fesih-ve-eksik-yukleme-ttk-1158":
    "Navlun Sözleşmesi: Yükleme Süreleri ve Sürastarya",
  "birden-cok-yukleten-ve-tasitan-ttk-1161":
    "Navlun Sözleşmesi: Kırkambar ve Yüklemenin Tamamlanması",
  "kirkambar-sozlesmesinde-yukleme-ve-belge-verme-yukumlulugu-ttk-1163":
    "Navlun Sözleşmesi: Kırkambar ve Yüklemenin Tamamlanması",
  "bosaltmada-demirleme-yeri-giderler-sureler-ve-surastarya-ttk-1166":
    "Navlun Sözleşmesi: Boşaltma",
  "bosaltmanin-yapilmamasi-kismi-carter-ve-kirkambar-bosaltma-ttk-1174":
    "Navlun Sözleşmesi: Boşaltma",
  "tasiyanin-sorumlulugunun-genel-esaslari-ve-kurtulma-halleri-ttk-1178":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "tasiyanin-kusursuzluk-karineleri-ve-sebeplerin-birlesmesi-ttk-1182":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "esyanin-incelenmesi-ttk-1184": "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "ziya-hasar-ve-gecikme-bildirimi-ttk-1185":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "tasiyanin-sorumlulugunu-sinirlandirma-haklari-ttk-1186":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "sorumlulugu-sinirlandirma-hakkinin-kaybi-ttk-1187":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "tazminat-isteminde-hak-dusurucu-sure-ttk-1188":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "hak-dusurucu-sureden-yararlanma-hakkinin-kaybi-ttk-1189":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "sozlesme-disi-istemler-ttk-1190":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "fiili-tasiyanin-sorumlulugu-ttk-1191":
    "Navlun Sözleşmesi: Taşıyanın Sorumluluğu",
  "navlun-miktarinin-belirlenmesi-ttk-1193":
    "Navlun Sözleşmesi: Taşıyanın Hakları",
  "navlun-disi-giderler-muacceliyet-ve-esyanin-navlun-yerine-birakilmasi-ttk-1196":
    "Navlun Sözleşmesi: Taşıyanın Hakları",
  "ziyaa-ugrayan-esyanin-navlun-durumu-ve-hapis-hakki-ttk-1199":
    "Navlun Sözleşmesi: Taşıyanın Hakları",
  "ucuncu-kisi-gonderilenin-navlun-yukumlulugu-ttk-1203":
    "Navlun Sözleşmesi: Taşıyanın Hakları",
  "tasitan-ve-yukletenin-kusur-sorumlulugu-ttk-1208":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "geminin-yolculuk-basladiktan-sonra-zayi-olmasi-ttk-1210":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "yolculuk-baslamadan-once-esyanin-zayi-olmasi-ttk-1214":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "yolculuk-basladiktan-sonra-esyanin-zayi-olmasi-ttk-1216":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "taraflara-fesih-hakki-veren-haller-ttk-1218":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "taraflarin-fesih-hakkina-sahip-olmadigi-haller-ttk-1219":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "geminin-tamiri-ve-diger-sebeplerin-etkisi-ttk-1221":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "fesih-hakkinin-kullanilmasi-ve-sonuclari-ttk-1224":
    "Taşıtanın Sorumluluğu ve Sözleşmenin Sona Ermesi",
  "konismentonun-tanimi-turleri-ve-duzenlenmesi-ttk-1228":
    "Denizde Taşıma Senetleri: Konişmento",
  "konismentonun-icerigi-ttk-1229": "Denizde Taşıma Senetleri: Konişmento",
  "konismento-hamiline-teslim-genel-esaslar-ttk-1230":
    "Denizde Taşıma Senetleri: Konişmento",
  "yukletenin-talimati-ve-sozlesmenin-hukumden-dusmesi-ttk-1232":
    "Denizde Taşıma Senetleri: Konişmento",
  "konismentonun-esyayi-temsili-genel-olarak-ttk-1234":
    "Denizde Taşıma Senetleri: Konişmento",
  "konismentonun-birden-cok-hamili-ve-geri-verilmesi-ttk-1235":
    "Denizde Taşıma Senetleri: Konişmento",
  "hukuki-iliskiyi-ve-tasiyani-ispat-ttk-1237":
    "Denizde Taşıma Senetleri: Konişmento",
  "esyanin-durumunu-ispat-ve-cekince-ttk-1239":
    "Denizde Taşıma Senetleri: Konişmento",
  "navlunu-ispat-ttk-1240": "Denizde Taşıma Senetleri: Konişmento",
  "yukletenin-verdigi-garantiler-ttk-1241":
    "Denizde Taşıma Senetleri: Konişmento",
  "diger-tasima-senetleri-ve-emredici-hukumlerin-kapsami-ttk-1242":
    "Denizde Taşıma Senetleri: Konişmento",
  "emredici-hukumlerin-istisnalari-ve-yolculuk-carteri-ttk-1244":
    "Denizde Taşıma Senetleri: Konişmento",
  "zamanasimi-ve-yolcu-tasima-sozlesmesinin-tanimi-ttk-1246":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcu-tasima-sozlesmesinde-taraflar-ve-bagaj-ttk-1248":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcunun-yukumlulukleri-ttk-1251": "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "tasiyanin-hapis-hakki-ve-olen-yolcunun-bagaji-ttk-1254":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "gemi-kazasi-nedeniyle-olum-yaralanma-ve-bagaj-sorumlulugu-ttk-1256":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "gemi-kazasi-tanimi-ve-sorumluluk-hukmunun-sinirlari-ttk-1256-tanimlar":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "fiili-tasiyanin-yolcu-tasimasindaki-sorumlulugu-ttk-1257":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcu-tasimasinda-tasima-suresi-ve-zorunlu-sigorta-ttk-1258":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcunun-degerli-esyasindan-tasiyanin-sorumlulugu-ttk-1260":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcunun-birlikte-kusuru-ve-sorumlulugun-azaltilmasi-ttk-1261":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "bedensel-zarardan-dogan-sorumlulugun-siniri-ttk-1262":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "bagaj-ve-araclarin-zayi-veya-hasarindan-dogan-sorumlulugun-siniri-ttk-1263":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "sorumluluk-sinirlarina-iliskin-ortak-hukumler-ttk-1264":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "tasiyanin-adamlarinin-savunmalari-ve-sorumluluk-sinirlari-ttk-1265":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "istemlerin-birlesmesi-ttk-1266": "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "sorumlulugu-sinirlandirma-hakkinin-kaybi-ttk-1267":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "istemlerin-dayanagi-ttk-1268": "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "bagajin-ziyai-veya-hasarinin-bildirimi-ttk-1269":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcu-tasimasinda-zamanasimi-ttk-1270": "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "yolcu-tasimasinda-emredici-hukumler-ttk-1271":
    "Deniz Yoluyla Yolcu Taşıma Sözleşmesi",
  "musterek-avaryanin-tanimi-ttk-1272": "Deniz Kazaları: Müşterek Avarya",
  "musterek-avaryada-uygulanacak-kurallar-ttk-1273":
    "Deniz Kazaları: Müşterek Avarya",
  "musterek-avarya-garame-paylarinin-borclulari-ttk-1274":
    "Deniz Kazaları: Müşterek Avarya",
  "musterek-avaryada-teminat-ve-hapis-hakkinin-kullanilmasi-ttk-1276-1277":
    "Deniz Kazaları: Müşterek Avarya",
  "dispecin-yaptirilmasi-yukumlulugu-ttk-1278": "Deniz Kazaları: Müşterek Avarya",
  "dispecin-yapilacagi-yer-ve-dispecci-ttk-1279-1280":
    "Deniz Kazaları: Müşterek Avarya",
  "dispece-itiraz-ve-durusma-usulu-ttk-1281": "Deniz Kazaları: Müşterek Avarya",
  "dispecin-onaylanmasi-ve-onay-kararinin-ilam-niteligi-ttk-1282-1284":
    "Deniz Kazaları: Müşterek Avarya",
  "musterek-avaryada-zamanasimi-ttk-1285": "Deniz Kazaları: Müşterek Avarya",
  "catmanin-uygulama-alani-ve-kusursuz-catma-ttk-1286-1287":
    "Deniz Kazaları: Çatma",
  "kusurlu-catma-tek-tarafin-kusuru-ve-ortak-kusur-ttk-1288-1289":
    "Deniz Kazaları: Çatma",
  "catmada-bedensel-zarar-ve-kilavuzun-kusuru-ttk-1290-1291":
    "Deniz Kazaları: Çatma",
  "catmada-dava-oncesi-delil-tespiti-ttk-1292": "Deniz Kazaları: Çatma",
  "catmada-sekil-sartinin-ve-karinenin-yoklugu-ttk-1293-1294":
    "Deniz Kazaları: Çatma",
  "catmada-kaptanin-yardim-gorevi-saklanan-hukumler-ve-zamanasimi-ttk-1295-1297":
    "Deniz Kazaları: Çatma",
  "kurtarma-faaliyetinin-tanimi-ve-kapsami-ttk-1298": "Deniz Kazaları: Kurtarma",
  "kurtarmada-diger-haller-ve-sozlesme-yapma-yetkisi-ttk-1299-1300":
    "Deniz Kazaları: Kurtarma",
  "kurtarma-sozlesmesinin-uyarlanmasi-iptali-ve-emredici-hukumler-ttk-1301-1302":
    "Deniz Kazaları: Kurtarma",
  "kurtarmada-taraflarin-yukumlulukleri-ve-kurtarma-ucreti-ilkeleri-ttk-1303-1304":
    "Deniz Kazaları: Kurtarma",
  "kurtarma-ucretinin-belirlenmesinde-kistaslar-ttk-1305":
    "Deniz Kazaları: Kurtarma",
  "kurtarma-ucretinin-borclulari-ttk-1306": "Deniz Kazaları: Kurtarma",
};

export function getTtkDenizTicaretiGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkDenizTicaretiArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
