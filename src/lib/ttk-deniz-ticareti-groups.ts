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
};

export function getTtkDenizTicaretiGroup(slug: string): string | null {
  return SLUG_TO_GROUP[slug] ?? null;
}

export function isTtkDenizTicaretiArticle(slug: string): boolean {
  return slug in SLUG_TO_GROUP;
}
