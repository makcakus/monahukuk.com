import type { LangMap5 } from "./practice-areas";

export type LangList5 = {
  tr: string[];
  en: string[];
  de: string[];
  ru: string[];
  ar: string[];
};

export type Faq = { q: string; a: string };

export type LangFaqs5 = {
  tr: Faq[];
  en: Faq[];
  de: Faq[];
  ru: Faq[];
  ar: Faq[];
};

export type PracticeAreaContent = {
  slug: string;
  metaTitle: LangMap5;
  metaDescription: LangMap5;
  intro: LangMap5;
  services: LangList5;
  process: LangMap5;
  faqs: LangFaqs5;
};

export function pickList(map: LangList5, locale: string): string[] {
  return (map as Record<string, string[]>)[locale] ?? map.en;
}

export function pickFaqs(map: LangFaqs5, locale: string): Faq[] {
  return (map as Record<string, Faq[]>)[locale] ?? map.en;
}

export const PRACTICE_AREAS_CONTENT: PracticeAreaContent[] = [
  {
    slug: "yabancilar-gocmenlik",
    metaTitle: {
      tr: "Antalya Yabancılar & Göçmenlik Avukatı | Oturma & Çalışma İzni",
      en: "Antalya Immigration Lawyer | Residence & Work Permits in Turkey",
      de: "Einwanderungsanwalt Antalya | Aufenthalts- & Arbeitserlaubnis",
      ru: "Иммиграционный адвокат в Анталье | ВНЖ и разрешение на работу",
      ar: "محامي الهجرة في أنطاليا | تصاريح الإقامة والعمل في تركيا",
    },
    metaDescription: {
      tr: "Antalya'da yabancılar avukatı olarak kısa ve uzun dönem oturma izni, çalışma izni, vize itirazları ve sınır dışı kararlarına karşı dava süreçlerinde yabancı uyruklu müvekkillerin haklarını koruyoruz.",
      en: "As an immigration lawyer in Antalya, we protect the rights of foreign nationals in short and long-term residence permits, work permits, visa appeals, and deportation defence cases.",
      de: "Als Einwanderungsanwalt in Antalya schützen wir die Rechte ausländischer Staatsangehöriger bei kurz- und langfristigen Aufenthaltserlaubnissen, Arbeitsgenehmigungen, Visumeinsprüchen und Verfahren gegen Ausweisung.",
      ru: "Как иммиграционный адвокат в Анталье мы защищаем права иностранных граждан в делах о краткосрочных и долгосрочных видах на жительство, разрешениях на работу, обжалованиях виз и защите от депортации.",
      ar: "بوصفنا محامي هجرة في أنطاليا، نحمي حقوق المواطنين الأجانب في تصاريح الإقامة قصيرة وطويلة الأمد وتصاريح العمل والطعن في التأشيرات والدفاع ضد الترحيل.",
    },
    intro: {
      tr: "Türkiye, gerek yaşam kalitesi gerek yatırım fırsatları nedeniyle her yıl on binlerce yabancı için cazip bir ülke haline gelmektedir. Ancak bu ülkede yasal olarak ikamet etmek, çalışmak veya iş kurmak isteyen yabancılar için süreç, doğru hukuki rehberlik olmaksızın hızla karmaşık bir hâl alabilir. Antalya'da yabancılar avukatı olarak görev yapan ekibimiz, başvurunun ilk adımından nihai karara kadar her aşamada müvekkillerinin yanındadır.\n\nİkamet izni başvuruları, çalışma izni süreçleri, vize ret kararlarına karşı itiraz, idari gözetim altındaki yabancıların serbest bırakılması ve sınır dışı işlemlerine karşı yargı yoluyla mücadele en sık karşılaştığımız konuların başında gelmektedir. Her dosyayı kendi koşulları içinde değerlendirir, hukuki gerekçesi en güçlü olan yolu birlikte tayin ederiz.",
      en: "Turkey is becoming an increasingly attractive destination for tens of thousands of foreigners every year, both for its quality of life and investment opportunities. Yet for those wishing to legally reside, work, or establish a business in the country, the process can rapidly become complex without proper legal guidance. Our team, serving as an immigration lawyer in Antalya, stands beside our clients from the first application step to the final decision.\n\nResidence permit applications, work permit procedures, appeals against visa refusals, the release of foreigners under administrative detention, and judicial challenges against deportation orders are among the most frequent matters we handle. We assess each case on its own merits and, together with the client, identify the path with the strongest legal foundation.",
      de: "Die Türkei wird Jahr für Jahr für zehntausende Ausländer zu einem attraktiven Land — sowohl wegen der Lebensqualität als auch der Investitionsmöglichkeiten. Doch für diejenigen, die hier rechtmäßig wohnen, arbeiten oder ein Unternehmen gründen möchten, kann der Prozess ohne fundierte rechtliche Begleitung schnell komplex werden. Unser Team, tätig als Einwanderungsanwalt in Antalya, steht unseren Mandanten vom ersten Antragsschritt bis zur endgültigen Entscheidung zur Seite.\n\nAnträge auf Aufenthaltserlaubnis, Verfahren zur Arbeitsgenehmigung, Widersprüche gegen Visa-Ablehnungen, die Freilassung von Ausländern aus administrativer Haft sowie gerichtliche Schritte gegen Ausweisungsbescheide gehören zu den häufigsten Fragen, mit denen wir uns beschäftigen. Wir beurteilen jeden Fall individuell und bestimmen gemeinsam mit dem Mandanten den rechtlich stärksten Weg.",
      ru: "Турция с каждым годом становится привлекательным направлением для десятков тысяч иностранцев — как благодаря качеству жизни, так и инвестиционным возможностям. Однако для тех, кто желает законно проживать, работать или открыть бизнес в стране, процесс без грамотного юридического сопровождения может быстро стать сложным. Наша команда, выступающая как иммиграционный адвокат в Анталье, находится рядом с клиентами с первого шага подачи заявления до окончательного решения.\n\nПодача заявлений на ВНЖ, процедуры получения разрешения на работу, обжалование отказов в визе, освобождение иностранцев, находящихся под административным надзором, и судебные процессы против решений о депортации — наиболее частые направления нашей работы. Каждое дело мы рассматриваем индивидуально и вместе с клиентом определяем путь с наиболее прочным правовым основанием.",
      ar: "أصبحت تركيا وجهة جذابة لعشرات الآلاف من الأجانب كل عام، سواء بسبب جودة الحياة أو فرص الاستثمار. إلا أن العملية يمكن أن تصبح معقدة بسرعة بالنسبة لمن يرغبون في الإقامة أو العمل أو تأسيس عمل تجاري في البلاد دون توجيه قانوني سليم. فريقنا، بصفته محامي هجرة في أنطاليا، يقف بجانب موكليه من الخطوة الأولى لتقديم الطلب وحتى القرار النهائي.\n\nطلبات تصاريح الإقامة وإجراءات تصاريح العمل والطعون ضد رفض التأشيرات والإفراج عن الأجانب تحت الحجز الإداري والإجراءات القضائية ضد قرارات الترحيل من بين أكثر القضايا التي نتعامل معها. نقيّم كل قضية بحسب ملابساتها الخاصة، ونحدد مع الموكل المسار ذا الأساس القانوني الأقوى.",
    },
    services: {
      tr: [
        "Kısa dönem ikamet izni başvurusu, uzatması ve red itirazları",
        "Aile ikamet izni: Türk vatandaşıyla evli yabancılar için süreç yönetimi",
        "Öğrenci ikamet izni başvuruları ve mezuniyet sonrası geçiş süreçleri",
        "Çalışma izni başvurusu, yenileme ve bağımsız çalışma izinleri",
        "Vize reddi ve giriş yasağı kararlarına karşı dava açma",
        "Sınır dışı (deport) ve idari gözetim kararlarına karşı acil hukuki müdahale",
        "Uluslararası koruma ve geçici koruma başvurularında danışmanlık",
        "Kayıp pasaport, kimlik değişikliği ve idari işlem hatalarının düzeltilmesi",
      ],
      en: [
        "Short-term residence permit applications, extensions, and appeals against refusals",
        "Family residence permits: process management for foreigners married to Turkish citizens",
        "Student residence permit applications and post-graduation transitions",
        "Work permit applications, renewals, and independent work permits",
        "Litigation against visa refusal and entry ban decisions",
        "Urgent legal intervention against deportation and administrative detention orders",
        "Counsel on international protection and temporary protection applications",
        "Lost passport, identity change, and correction of administrative errors",
      ],
      de: [
        "Anträge, Verlängerungen und Widersprüche bei kurzfristigen Aufenthaltserlaubnissen",
        "Familienaufenthaltserlaubnis: Verfahren für mit türkischen Staatsbürgern verheiratete Ausländer",
        "Studentenaufenthaltserlaubnis und Übergänge nach dem Abschluss",
        "Anträge, Verlängerungen und unabhängige Arbeitsgenehmigungen",
        "Klagen gegen Visa-Ablehnungen und Einreiseverbote",
        "Eilrechtsschutz gegen Ausweisungs- und Verwaltungshaftbeschlüsse",
        "Beratung zu internationalen und vorübergehenden Schutzanträgen",
        "Verlust von Reisepässen, Identitätsänderungen und Korrektur administrativer Fehler",
      ],
      ru: [
        "Подача, продление и обжалование отказов по краткосрочным ВНЖ",
        "Семейный ВНЖ: ведение процесса для иностранцев, состоящих в браке с гражданами Турции",
        "Студенческие ВНЖ и переходы после окончания обучения",
        "Получение, продление и независимые разрешения на работу",
        "Судебные иски против отказов в визе и запретов на въезд",
        "Срочная правовая защита против решений о депортации и административном задержании",
        "Консультации по заявлениям на международную и временную защиту",
        "Потеря паспорта, изменение личных данных и исправление административных ошибок",
      ],
      ar: [
        "تقديم تصاريح الإقامة قصيرة الأمد وتمديدها والطعن في الرفض",
        "تصاريح الإقامة العائلية: إدارة الإجراءات للأجانب المتزوجين من أتراك",
        "تصاريح إقامة الطلاب والانتقال إلى تصاريح أخرى بعد التخرج",
        "تقديم تصاريح العمل وتجديدها وتصاريح العمل المستقل",
        "إقامة دعاوى ضد رفض التأشيرات وقرارات حظر الدخول",
        "تدخل قانوني عاجل ضد قرارات الترحيل والحجز الإداري",
        "استشارات بشأن طلبات الحماية الدولية والحماية المؤقتة",
        "فقدان جواز السفر وتغيير الهوية وتصحيح الأخطاء الإدارية",
      ],
    },
    process: {
      tr: "Her başvuruyu önce belge ve durum analizi ile başlatır, müvekkilin amacına en uygun izin türünü belirleriz. Eksik veya hatalı belge nedeniyle ortaya çıkabilecek red kararlarını engellemek için başvuru öncesinde detaylı bir kontrol yaparız. İdari sürecin yetmediği durumlarda Antalya İdare Mahkemesi nezdinde dava açar; gerektiğinde yürütmenin durdurulması talebiyle acil koruma sağlarız. Müvekkillerimiz, sürecin her aşamasında kendi dilinde bilgilendirilir ve karar vermeleri gereken her noktada yanlarında dururuz.",
      en: "We begin every application with a document and situation analysis, then determine the permit type best suited to the client's goal. Before submission, we conduct a detailed check to prevent refusals caused by missing or incorrect documents. When the administrative track is insufficient, we file proceedings before the Antalya Administrative Court and, where necessary, secure urgent protection through stay-of-execution motions. Our clients are kept informed at every stage in their own language, and we stand by them at every decision point.",
      de: "Wir beginnen jeden Antrag mit einer Dokumenten- und Sachverhaltsanalyse und bestimmen die für das Ziel des Mandanten am besten geeignete Genehmigungsart. Vor der Einreichung führen wir eine detaillierte Prüfung durch, um Ablehnungen aufgrund fehlender oder fehlerhafter Unterlagen zu vermeiden. Reicht das Verwaltungsverfahren nicht aus, klagen wir vor dem Verwaltungsgericht Antalya und sichern bei Bedarf durch Eilanträge dringenden Rechtsschutz. Unsere Mandanten werden in jeder Phase in ihrer eigenen Sprache informiert.",
      ru: "Каждое заявление мы начинаем с анализа документов и обстоятельств, затем определяем тип разрешения, наиболее подходящий цели клиента. Перед подачей мы проводим подробную проверку, чтобы предотвратить отказы из-за отсутствующих или ошибочных документов. Если административного пути недостаточно, мы подаём иск в Административный суд Антальи и при необходимости обеспечиваем срочную защиту через ходатайства о приостановлении исполнения. Наши клиенты информируются на каждом этапе на их родном языке.",
      ar: "نبدأ كل طلب بتحليل المستندات والحالة، ثم نحدد نوع التصريح الأنسب لهدف الموكل. قبل التقديم، نجري فحصاً مفصلاً لمنع حالات الرفض الناجمة عن نقص الوثائق أو أخطائها. وعندما لا يكفي المسار الإداري، نرفع دعاوى أمام محكمة أنطاليا الإدارية ونؤمّن حماية عاجلة عند الحاجة من خلال طلبات وقف التنفيذ. نُبقي موكلينا على اطلاع في كل مرحلة بلغتهم الأم.",
    },
    faqs: {
      tr: [
        {
          q: "Kısa dönem ikamet izni başvurum reddedilirse ne yapabilirim?",
          a: "Red kararı tebliğ edildikten sonra yasal süresi içinde idare mahkemesine iptal davası açabilirsiniz. Avukat aracılığıyla yürütmenin durdurulması talep edilerek sınır dışı riski azaltılabilir; reddin gerekçesine göre yeniden başvuru da değerlendirilebilir.",
        },
        {
          q: "Türkiye'de çalışma izni almadan çalışırsam ne olur?",
          a: "Çalışma izni olmaksızın çalışmak hem işveren hem yabancı için idari para cezası ve sınır dışı sebebi oluşturur. Ayrıca giriş yasağı uygulanabilir. Çalışma izni başvurusu işveren tarafından yapılır ve genellikle 30-60 gün içinde sonuçlanır.",
        },
        {
          q: "Sınır dışı kararı geldikten sonra Türkiye'de kalabilir miyim?",
          a: "Sınır dışı kararına karşı kararın tebliğinden itibaren çok kısa bir süre içinde idare mahkemesine başvurmak gerekir. Bu süre içinde yapılacak başvuru, yürütmeyi durdurabilir ve müvekkilin mahkeme süreci sona erene kadar Türkiye'de kalabilmesine imkân tanıyabilir.",
        },
      ],
      en: [
        {
          q: "What can I do if my short-term residence permit is refused?",
          a: "Once the refusal is served, you may file a cancellation lawsuit before the administrative court within the legal deadline. Through your lawyer, a stay-of-execution motion can reduce deportation risk; depending on the reason for refusal, a fresh application may also be evaluated.",
        },
        {
          q: "What happens if I work in Turkey without a work permit?",
          a: "Working without a permit creates administrative fines and grounds for deportation for both employer and foreigner, and an entry ban may be imposed. The work permit application is filed by the employer and is generally concluded within 30–60 days.",
        },
        {
          q: "Can I remain in Turkey after a deportation decision?",
          a: "An appeal to the administrative court must be lodged within a very short statutory period from notification. A timely appeal can suspend execution and allow the client to remain in Turkey until the court proceedings conclude.",
        },
      ],
      de: [
        {
          q: "Was kann ich tun, wenn meine kurzfristige Aufenthaltserlaubnis abgelehnt wird?",
          a: "Nach der Zustellung des Bescheides können Sie innerhalb der gesetzlichen Frist beim Verwaltungsgericht eine Aufhebungsklage einreichen. Über einen Anwalt kann durch einen Eilantrag die Vollziehung ausgesetzt werden; je nach Ablehnungsgrund kommt auch eine neue Antragstellung in Betracht.",
        },
        {
          q: "Was passiert, wenn ich ohne Arbeitserlaubnis in der Türkei arbeite?",
          a: "Arbeit ohne Genehmigung führt für Arbeitgeber wie Ausländer zu Geldbußen und einem Ausweisungsgrund; auch ein Einreiseverbot kann verhängt werden. Der Arbeitgeber stellt den Antrag, der in der Regel innerhalb von 30–60 Tagen bearbeitet wird.",
        },
        {
          q: "Kann ich nach einem Ausweisungsbeschluss in der Türkei bleiben?",
          a: "Gegen den Ausweisungsbeschluss muss innerhalb einer sehr kurzen gesetzlichen Frist ab Zustellung Klage beim Verwaltungsgericht erhoben werden. Eine fristgerechte Klage kann die Vollziehung aussetzen und einen Verbleib in der Türkei bis zum Verfahrensende ermöglichen.",
        },
      ],
      ru: [
        {
          q: "Что делать, если в краткосрочном ВНЖ отказано?",
          a: "После вручения решения вы можете в установленный срок подать иск об отмене в административный суд. Через адвоката можно подать ходатайство о приостановлении исполнения, что снизит риск депортации; в зависимости от основания отказа возможна и повторная подача.",
        },
        {
          q: "Что будет, если я работаю в Турции без разрешения на работу?",
          a: "Работа без разрешения влечёт административные штрафы и основание для депортации как для работодателя, так и для иностранца; возможен и запрет на въезд. Заявление подаёт работодатель, и оно обычно рассматривается в течение 30–60 дней.",
        },
        {
          q: "Могу ли я оставаться в Турции после решения о депортации?",
          a: "Иск в административный суд должен быть подан в очень короткий установленный срок с момента уведомления. Своевременная жалоба может приостановить исполнение и позволить клиенту оставаться в Турции до окончания судебного процесса.",
        },
      ],
      ar: [
        {
          q: "ماذا أفعل إذا رُفض طلب إقامتي قصيرة الأمد؟",
          a: "بعد تبليغ قرار الرفض، يمكنك خلال المهلة القانونية رفع دعوى إلغاء أمام المحكمة الإدارية. عبر المحامي يمكن تقديم طلب وقف تنفيذ يخفف خطر الترحيل؛ وبحسب سبب الرفض قد يُدرس تقديم طلب جديد أيضاً.",
        },
        {
          q: "ماذا يحدث إذا عملتُ في تركيا دون تصريح عمل؟",
          a: "العمل دون تصريح يفرض غرامات إدارية ويعدّ سبباً للترحيل لكلٍّ من صاحب العمل والأجنبي، وقد يُفرض حظر دخول. يقدّم صاحب العمل الطلب وتُحسم العملية عادةً خلال 30–60 يوماً.",
        },
        {
          q: "هل يمكنني البقاء في تركيا بعد قرار الترحيل؟",
          a: "يجب رفع طعن أمام المحكمة الإدارية خلال مهلة قانونية قصيرة جداً من تاريخ التبليغ. الطعن في الوقت المناسب قد يوقف التنفيذ ويسمح للموكل بالبقاء في تركيا حتى انتهاء القضية.",
        },
      ],
    },
  },
  {
    slug: "gayrimenkul",
    metaTitle: {
      tr: "Antalya Gayrimenkul Avukatı | Yabancılar İçin Tapu & Kira Hukuku",
      en: "Antalya Real Estate Lawyer | Title Deed & Rental Law for Foreigners",
      de: "Antalya Immobilienanwalt | Grundbuch- & Mietrecht für Ausländer",
      ru: "Адвокат по недвижимости в Анталье | Право собственности и аренды для иностранцев",
      ar: "محامي عقارات أنطاليا | قانون سند الملكية والإيجار للأجانب",
    },
    metaDescription: {
      tr: "Antalya'da yabancıların gayrimenkul alımı, tapu işlemleri, sözleşme incelemesi, ön satış sözleşmeleri, ipotek ve kira uyuşmazlıklarında deneyimli gayrimenkul avukatı desteği.",
      en: "Experienced real estate lawyer support for foreigners in Antalya: property purchase, title deed transactions, contract review, pre-sale agreements, mortgages, and rental disputes.",
      de: "Erfahrene Immobilienanwaltsbetreuung für Ausländer in Antalya: Immobilienkauf, Grundbuchverfahren, Vertragsprüfung, Vorverkaufsverträge, Hypotheken und Mietstreitigkeiten.",
      ru: "Поддержка опытного адвоката по недвижимости для иностранцев в Анталье: покупка недвижимости, оформление прав собственности, проверка договоров, предварительные договоры, ипотека и арендные споры.",
      ar: "دعم من محامي عقارات متمرس للأجانب في أنطاليا: شراء العقارات وإجراءات سند الملكية ومراجعة العقود واتفاقيات البيع المسبق والرهن العقاري ونزاعات الإيجار.",
    },
    intro: {
      tr: "Antalya, yabancıların Türkiye'de en çok tercih ettiği gayrimenkul yatırım merkezlerinden biridir. Lara'dan Konyaaltı'na, Belek'ten Alanya'ya uzanan geniş bir bölgede her yıl binlerce yabancı, yaşamak veya yatırım yapmak amacıyla mülk edinmektedir. Ancak Türk Gayrimenkul Hukuku, ülke bazında farklılık gösteren süreçler içerir; tapu devri, vergisel yükümlülükler ve sözleşmeden doğan riskler doğru hukuki rehberlik olmaksızın ciddi maddi kayıplara yol açabilir.\n\nBüromuz, alıcı veya satıcı olarak yabancı uyruklu müvekkillerin tapu işlemlerinden satış sözleşmesi düzenlemesine, askeri yasak bölge sorgulamasından ekspertiz raporu incelemesine kadar tüm süreçleri yürütür. Antalya gayrimenkul avukatı olarak amacımız; her dosyada müvekkilin haklarını koruyan, şeffaf ve güvenli bir alım-satım veya kira süreci sağlamaktır.",
      en: "Antalya is one of the most popular real estate investment hubs for foreigners in Turkey. From Lara to Konyaaltı, Belek to Alanya, thousands of foreign nationals acquire property each year either to live in or to invest. Yet Turkish real estate law involves country-specific processes; title transfers, tax obligations, and contractual risks can lead to substantial losses without proper legal guidance.\n\nOur firm handles every step for foreign clients — whether buyer or seller — from title deed transactions and drafting of sale contracts to military restricted zone inquiries and review of valuation reports. As a real estate lawyer in Antalya, our aim is to ensure a transparent and secure transaction or tenancy process that protects the client's rights at every stage.",
      de: "Antalya ist einer der beliebtesten Immobilieninvestitionsstandorte für Ausländer in der Türkei. Von Lara über Konyaaltı bis Belek und Alanya erwerben jedes Jahr Tausende ausländischer Staatsangehörige Immobilien, um zu wohnen oder zu investieren. Doch das türkische Immobilienrecht umfasst landesspezifische Prozesse; Eigentumsübertragungen, Steuerverpflichtungen und vertragliche Risiken können ohne fundierte rechtliche Beratung erhebliche Verluste verursachen.\n\nUnsere Kanzlei begleitet ausländische Mandanten — Käufer wie Verkäufer — durch jeden Schritt: Grundbuchgeschäfte, Kaufvertragsentwurf, Anfragen zu militärischen Sperrgebieten und Prüfung von Wertgutachten. Als Immobilienanwalt in Antalya gewährleisten wir einen transparenten und sicheren Transaktions- oder Mietprozess, der die Rechte des Mandanten in jeder Phase schützt.",
      ru: "Анталья — один из самых популярных центров инвестиций в недвижимость для иностранцев в Турции. От Лары до Коньяалты, от Белека до Аланьи тысячи иностранных граждан ежегодно приобретают недвижимость для проживания или инвестиций. Но турецкое право недвижимости содержит специфические процедуры; передача прав собственности, налоговые обязательства и договорные риски без грамотного юридического сопровождения могут привести к значительным потерям.\n\nНаша фирма ведёт все этапы для иностранных клиентов — покупателей или продавцов — от сделок с правом собственности и составления договоров купли-продажи до запросов о военных запретных зонах и анализа отчётов об оценке. Как адвокат по недвижимости в Анталье, мы обеспечиваем прозрачный и безопасный процесс сделки или аренды, защищающий права клиента на каждом этапе.",
      ar: "تُعدّ أنطاليا من أبرز مراكز الاستثمار العقاري للأجانب في تركيا. من لارا إلى كونيا آلتي ومن بيليك إلى ألانيا، يقتني الآلاف من الأجانب عقارات سنوياً للسكن أو الاستثمار. غير أن القانون العقاري التركي يتضمن إجراءات خاصة بالدولة؛ وقد تؤدي عمليات نقل الملكية والالتزامات الضريبية والمخاطر التعاقدية إلى خسائر كبيرة دون توجيه قانوني سليم.\n\nيدير مكتبنا جميع المراحل للعملاء الأجانب — مشترين أو بائعين — بدءاً من معاملات سند الملكية وصياغة عقود البيع وصولاً إلى الاستفسارات عن المناطق العسكرية المقيدة ومراجعة تقارير التقييم. وبصفتنا محامي عقارات في أنطاليا، نضمن عملية شفافة وآمنة للمعاملة أو الإيجار تحمي حقوق الموكل في كل مرحلة.",
    },
    services: {
      tr: [
        "Tapu devir işlemleri ve tapu müdürlüğü nezdinde temsil",
        "Satış vaadi sözleşmesi ve ön ödeme korumalı satış sözleşmelerinin hazırlanması",
        "Askeri yasak bölge sorgulaması ve yabancılara satış izni süreçleri",
        "Ekspertiz raporu, tapu kaydı ve ipotek incelemesi",
        "Kira sözleşmeleri, kira artışı uyuşmazlıkları ve tahliye davaları",
        "İnşaat ve kat irtifakı/kat mülkiyeti uyuşmazlıkları",
        "Ortak alan ve site yönetimine ilişkin hukuki danışmanlık",
        "Vergi (tapu harcı, KDV, emlak vergisi) ve döviz kuru transfer süreçleri",
      ],
      en: [
        "Title deed transfer transactions and representation before the land registry",
        "Drafting of promise-to-sell agreements and pre-payment-protected sale contracts",
        "Military restricted zone inquiries and sale permits to foreigners",
        "Valuation reports, title records, and mortgage review",
        "Rental contracts, rent-increase disputes, and eviction proceedings",
        "Construction, condominium establishment, and floor ownership disputes",
        "Legal counsel on common areas and site management",
        "Tax (deed charge, VAT, property tax) and foreign-exchange transfer processes",
      ],
      de: [
        "Grundbuchübertragung und Vertretung vor dem Grundbuchamt",
        "Entwurf von Verkaufsversprechensverträgen und anzahlungsgeschützten Kaufverträgen",
        "Anfragen zu militärischen Sperrgebieten und Verkaufsgenehmigungen an Ausländer",
        "Wertgutachten, Grundbuchaufzeichnungen und Hypothekenprüfung",
        "Mietverträge, Mieterhöhungsstreitigkeiten und Räumungsklagen",
        "Bau-, Wohnungseigentums- und Stockwerkseigentumsstreitigkeiten",
        "Rechtsberatung zu Gemeinschaftsflächen und Hausverwaltung",
        "Steuer- (Grundbuchgebühr, MwSt, Grundsteuer) und Devisentransferprozesse",
      ],
      ru: [
        "Передача прав собственности и представительство в кадастровом управлении",
        "Составление договоров обещания продажи и договоров с защитой предоплаты",
        "Запросы по военным запретным зонам и разрешениям на продажу иностранцам",
        "Отчёты об оценке, кадастровые записи и проверка ипотеки",
        "Договоры аренды, споры о повышении арендной платы и иски о выселении",
        "Споры по строительству, праву долевой собственности и поэтажной собственности",
        "Правовое консультирование по общим зонам и управлению комплексом",
        "Налоги (пошлина на сделку, НДС, налог на имущество) и процессы валютного перевода",
      ],
      ar: [
        "معاملات نقل سند الملكية والتمثيل أمام دائرة الطابو",
        "صياغة عقود وعد البيع وعقود البيع مع حماية الدفعات المقدمة",
        "الاستفسار عن المناطق العسكرية المقيدة وتراخيص البيع للأجانب",
        "تقارير التقييم وسجلات الطابو ومراجعة الرهن العقاري",
        "عقود الإيجار ونزاعات زيادة الإيجار ودعاوى الإخلاء",
        "نزاعات البناء وارتفاق الطابق وملكية الطوابق",
        "استشارات قانونية بشأن المناطق المشتركة وإدارة المجمع",
        "الضرائب (رسوم الطابو والقيمة المضافة وضريبة الأملاك) وعمليات تحويل العملات",
      ],
    },
    process: {
      tr: "Yabancı bir alıcı için her gayrimenkul süreci, mülkün hukuki durumunun ön incelemesi ile başlar: tapu kaydı, ipotek/haciz şerhleri, imar durumu ve askeri bölge sorgulaması. Ardından satıcı ile pazarlık ve sözleşme aşamasında müvekkilin lehine maddeler düzenler, gerekli depozito düzenlemelerini hazırlarız. Tapu devrinde noter ve tapu müdürlüğünde müvekkili temsil eder; ödeme akışı, döviz transferi ve vergi yükümlülüklerini koordine ederiz. Süreç sonrası abonelik açılışı, vergi numarası alımı ve bina yönetim ilişkileri konusunda da rehberlik sağlarız.",
      en: "For a foreign buyer, every real estate process begins with a legal due diligence: title records, mortgage/lien notes, zoning status, and military zone inquiry. We then negotiate with the seller, draft contract clauses favorable to the client, and arrange the necessary deposit terms. At the title transfer stage, we represent the client before the notary and land registry, and coordinate the payment flow, foreign-exchange transfer, and tax obligations. Post-closing, we also guide on utility setup, tax number registration, and building management relations.",
      de: "Für einen ausländischen Käufer beginnt jeder Immobilienvorgang mit einer rechtlichen Due-Diligence: Grundbuchprüfung, Hypothek/Pfandvermerke, Bauzustand und Militärzonenanfrage. Anschließend verhandeln wir mit dem Verkäufer, formulieren mandantengünstige Vertragsklauseln und gestalten die erforderlichen Anzahlungsvereinbarungen. Bei der Grundbuchübertragung vertreten wir den Mandanten vor Notar und Grundbuchamt und koordinieren Zahlungsfluss, Devisentransfer und Steuerpflichten. Nach Abschluss begleiten wir auch bei Versorgungsanmeldungen, Steuernummerregistrierung und der Hausverwaltung.",
      ru: "Для иностранного покупателя каждая сделка с недвижимостью начинается с юридической проверки: записи кадастра, заметки об ипотеке/залогах, градостроительный статус и запрос по военным зонам. Затем мы ведём переговоры с продавцом, составляем выгодные клиенту условия договора и оформляем необходимые соглашения о задатке. На этапе передачи прав собственности мы представляем клиента у нотариуса и в кадастровом управлении, координируем поток платежей, валютные переводы и налоговые обязательства. После сделки мы помогаем с подключением коммунальных услуг, получением налогового номера и взаимодействием с управляющей компанией.",
      ar: "بالنسبة للمشتري الأجنبي، تبدأ كل عملية عقارية بفحص قانوني: سجلات الطابو وملاحظات الرهن/الحجز ووضع التخطيط والاستفسار عن المنطقة العسكرية. ثم نتفاوض مع البائع ونصوغ بنوداً تخدم الموكل ونرتّب شروط الدفعة المقدمة الضرورية. عند نقل الملكية نمثل الموكل أمام كاتب العدل ودائرة الطابو، وننسّق تدفق المدفوعات وتحويل العملات والالتزامات الضريبية. وبعد الإغلاق نوجه أيضاً بشأن تركيب المرافق والحصول على الرقم الضريبي والعلاقة مع إدارة المبنى.",
    },
    faqs: {
      tr: [
        {
          q: "Yabancı uyruklular Türkiye'de istedikleri her bölgeden mülk satın alabilir mi?",
          a: "Hayır. Askeri yasak bölgeler ve bazı stratejik alanlarda yabancılara satış yapılamamaktadır. Ayrıca yabancı uyruklunun Türkiye genelinde edinebileceği toplam yüzölçümüne ilişkin sınırlamalar vardır. Bu nedenle her satın alma öncesi tapu kaydı ve askeri bölge sorgulaması mutlaka yapılmalıdır.",
        },
        {
          q: "Tapu devrinde avukat bulundurmak zorunlu mu?",
          a: "Yasal olarak zorunlu değildir; ancak yabancı dil engelinin bulunduğu, ödeme döviz cinsinden gerçekleştiği ve özellikle proje aşamasındaki taşınmazlarda risklerin yüksek olduğu bir süreçte bağımsız bir avukat eşliği önemlidir. Tapu memurunun rolü taraflara yorum yapmak değil, devri tescil etmektir.",
        },
        {
          q: "Kiracım kira artışını kabul etmiyor; tahliye edebilir miyim?",
          a: "Türk Hukuku kiracıyı görece güçlü biçimde korur. Kira artışı için belirli oranlar ve belirli durumlarda mahkemeye başvuru gerekir. Tahliye ise ancak kanunda sayılan sebeplerle ve usule uygun şekilde yapılabilir. Mahkeme kararı olmadan tahliye yasaktır.",
        },
      ],
      en: [
        {
          q: "Can foreigners buy property anywhere in Turkey?",
          a: "No. Sales to foreigners are not permitted in military restricted zones and certain strategic areas. There are also limits on the total surface area a foreign national may acquire across Turkey. Title and military-zone checks must therefore precede any purchase.",
        },
        {
          q: "Is having a lawyer mandatory at the title transfer?",
          a: "Not legally required, but strongly advised. Where a language barrier exists, payments are in foreign currency, and risks are high — especially with off-plan properties — independent counsel is essential. The land registry officer's role is to register the transfer, not to advise the parties.",
        },
        {
          q: "My tenant refuses the rent increase — can I evict?",
          a: "Turkish law strongly protects tenants. Rent increases are subject to specific rates and, in certain cases, court applications. Eviction is permissible only on the limited grounds set out in law and through proper procedure; eviction without a court decision is prohibited.",
        },
      ],
      de: [
        {
          q: "Können Ausländer in der Türkei überall Immobilien kaufen?",
          a: "Nein. In militärischen Sperrzonen und bestimmten strategischen Gebieten sind Verkäufe an Ausländer untersagt. Es bestehen außerdem Obergrenzen für die in der Türkei insgesamt erwerbbare Fläche. Vor jedem Kauf sind daher Grundbuch- und Militärzonenprüfungen unerlässlich.",
        },
        {
          q: "Ist ein Anwalt bei der Grundbuchübertragung Pflicht?",
          a: "Gesetzlich nicht vorgeschrieben, aber dringend empfohlen. Bei Sprachbarrieren, Fremdwährungszahlungen und besonders bei Bauträgerimmobilien ist eine unabhängige Beratung unerlässlich. Die Aufgabe des Grundbuchbeamten besteht darin, die Übertragung einzutragen, nicht die Parteien zu beraten.",
        },
        {
          q: "Mein Mieter lehnt die Mieterhöhung ab — kann ich räumen?",
          a: "Das türkische Recht schützt Mieter umfassend. Mieterhöhungen unterliegen bestimmten Sätzen und teils gerichtlichen Verfahren. Eine Räumung ist nur aus den im Gesetz genannten Gründen und im richtigen Verfahren zulässig; ohne Gerichtsentscheidung ist sie unzulässig.",
        },
      ],
      ru: [
        {
          q: "Могут ли иностранцы покупать недвижимость в любом районе Турции?",
          a: "Нет. В военных запретных зонах и некоторых стратегических районах продажи иностранцам не разрешены. Также действуют ограничения на общую площадь, которую иностранец может приобрести по всей Турции. Перед каждой покупкой необходимы проверки кадастра и военной зоны.",
        },
        {
          q: "Обязательно ли участие адвоката при оформлении сделки?",
          a: "Юридически не обязательно, но настоятельно рекомендуется. При языковом барьере, оплате в иностранной валюте и особенно при приобретении строящегося жилья независимое сопровождение крайне важно. Сотрудник кадастра только регистрирует передачу, а не консультирует стороны.",
        },
        {
          q: "Арендатор не принимает повышение аренды — могу ли я выселить?",
          a: "Турецкое законодательство сильно защищает арендаторов. Повышение арендной платы подчиняется определённым ставкам и в ряде случаев требует обращения в суд. Выселение возможно лишь по основаниям, предусмотренным законом, и в установленном порядке; без решения суда оно запрещено.",
        },
      ],
      ar: [
        {
          q: "هل يمكن للأجانب شراء العقارات في أي منطقة بتركيا؟",
          a: "لا. لا يُسمح بالبيع للأجانب في المناطق العسكرية المقيدة وبعض المناطق الاستراتيجية. كما توجد حدود على إجمالي المساحة التي يمكن للأجنبي اقتناؤها في عموم تركيا. لذا يجب إجراء فحوصات الطابو والمنطقة العسكرية قبل أي شراء.",
        },
        {
          q: "هل وجود محامٍ إلزامي عند نقل الملكية؟",
          a: "ليس إلزامياً قانونياً، لكنه موصى به بشدة. في حالات الحاجز اللغوي والدفع بالعملات الأجنبية والمخاطر العالية — لا سيما في العقارات قيد الإنشاء — تكون الاستشارة المستقلة ضرورية. ودور موظف الطابو هو تسجيل النقل لا تقديم المشورة للأطراف.",
        },
        {
          q: "مستأجري يرفض زيادة الإيجار — هل يمكنني إخلاؤه؟",
          a: "يحمي القانون التركي المستأجرين بقوة. تخضع زيادات الإيجار لنسب محددة وأحياناً للطعن أمام المحكمة. ولا يجوز الإخلاء إلا للأسباب الواردة في القانون وبالإجراءات الصحيحة؛ والإخلاء دون حكم قضائي محظور.",
        },
      ],
    },
  },
  {
    slug: "turk-vatandasligi",
    metaTitle: {
      tr: "Türk Vatandaşlığı Avukatı Antalya | Yatırımla Vatandaşlık Başvurusu",
      en: "Turkish Citizenship Lawyer Antalya | Citizenship by Investment",
      de: "Anwalt für türkische Staatsbürgerschaft Antalya | Staatsbürgerschaft durch Investition",
      ru: "Адвокат по гражданству Турции в Анталье | Гражданство через инвестиции",
      ar: "محامي الجنسية التركية في أنطاليا | الجنسية بالاستثمار",
    },
    metaDescription: {
      tr: "Yatırım, evlilik veya uzun süreli ikamet yoluyla Türk vatandaşlığı başvurusu için Antalya'da deneyimli vatandaşlık avukatı. Tüm süreç bizimle, doğru ve hızlı.",
      en: "Experienced Turkish citizenship lawyer in Antalya for applications via investment, marriage, or long-term residence. The full process handled accurately and efficiently.",
      de: "Erfahrener Anwalt für die türkische Staatsbürgerschaft in Antalya — für Anträge über Investition, Heirat oder langfristigen Aufenthalt. Der gesamte Prozess: präzise und effizient.",
      ru: "Опытный адвокат по гражданству Турции в Анталье для заявлений через инвестиции, брак или длительное проживание. Весь процесс ведётся точно и эффективно.",
      ar: "محامي جنسية تركية متمرس في أنطاليا لطلبات عبر الاستثمار أو الزواج أو الإقامة طويلة الأمد. ندير العملية كاملةً بدقة وكفاءة.",
    },
    intro: {
      tr: "Türk vatandaşlığı, son yıllarda hem yatırımcı hem de uzun süreli yerleşik yabancılar için cazip bir hedef haline gelmiştir. Vatandaşlığı kazanan kişi, oturma izni ihtiyacı olmaksızın Türkiye'de yaşama, çalışma ve mülk edinme hakkına sahip olur; vize muafiyeti bulunan ülkelerde Türk pasaportunun sağladığı seyahat avantajından yararlanabilir.\n\nBüromuz, başlıca üç ana yoldan vatandaşlık başvurularını yürütmektedir: 400.000 ABD doları değerinde gayrimenkul yatırımı, sermaye veya banka mevduatı yatırımı gibi alternatif yatırım yolları; Türk vatandaşıyla evlilik ve aile birliği ile sağlanan başvurular; uzun süreli ikamet izninin akabinde olağan kazanım yolu. Antalya'da Türk vatandaşlığı avukatı olarak başvurunun her aşamasını şeffaf biçimde yönetiyoruz.",
      en: "Turkish citizenship has become an attractive goal in recent years for both investors and long-term resident foreigners. The new citizen gains the right to live, work, and acquire property in Turkey without further residence permits, and benefits from the Turkish passport's travel advantages in visa-exempt countries.\n\nOur firm handles citizenship applications via three main routes: investment routes such as a 400,000 USD real estate investment, capital, or bank deposit; applications based on marriage to a Turkish citizen and family unity; and the standard naturalisation route after long-term residence. As a Turkish citizenship lawyer in Antalya, we manage every stage of the application transparently.",
      de: "Die türkische Staatsbürgerschaft ist in den letzten Jahren sowohl für Investoren als auch für langjährig ansässige Ausländer zu einem attraktiven Ziel geworden. Der neue Staatsbürger erhält das Recht, ohne weitere Aufenthaltserlaubnis in der Türkei zu leben, zu arbeiten und Immobilien zu erwerben, und kann mit dem türkischen Pass die Reisevorteile in visafreien Ländern nutzen.\n\nUnsere Kanzlei begleitet Staatsbürgerschaftsanträge über drei Hauptwege: Investitionswege wie eine Immobilieninvestition von 400.000 USD, Kapital oder Bankeinlage; Anträge aufgrund einer Eheschließung mit einem türkischen Staatsbürger und Familieneinheit; und der reguläre Einbürgerungsweg nach langjährigem Aufenthalt. Als Anwalt für türkische Staatsbürgerschaft in Antalya begleiten wir jede Phase transparent.",
      ru: "Турецкое гражданство в последние годы стало привлекательной целью как для инвесторов, так и для долго проживающих иностранцев. Новый гражданин получает право жить, работать и приобретать недвижимость в Турции без дополнительных видов на жительство, а также пользуется преимуществами турецкого паспорта в безвизовых странах.\n\nНаша фирма ведёт заявления на гражданство по трём основным путям: инвестиционные пути, такие как инвестиция в недвижимость на 400 000 долларов США, капитал или банковский депозит; заявления по браку с гражданином Турции и семейному единству; обычный натурализационный путь после долгосрочного проживания. Как адвокат по гражданству Турции в Анталье, мы прозрачно ведём каждый этап.",
      ar: "أصبحت الجنسية التركية في السنوات الأخيرة هدفاً جذاباً للمستثمرين والأجانب المقيمين لفترات طويلة. يكتسب المواطن الجديد الحق في الإقامة والعمل وامتلاك العقارات في تركيا دون حاجة لتصاريح إقامة إضافية، ويستفيد من مزايا جواز السفر التركي في الدول المعفاة من التأشيرة.\n\nيدير مكتبنا طلبات الجنسية عبر ثلاثة مسارات رئيسية: مسارات الاستثمار مثل استثمار عقاري بقيمة 400,000 دولار أمريكي أو رأس مال أو وديعة مصرفية؛ الطلبات المستندة إلى الزواج من مواطن تركي ووحدة الأسرة؛ والمسار العادي للتجنّس بعد إقامة طويلة الأمد. وبصفتنا محامي الجنسية التركية في أنطاليا، ندير كل مرحلة بشفافية تامة.",
    },
    services: {
      tr: [
        "Yatırımla vatandaşlık başvurusu (gayrimenkul, sermaye, mevduat seçenekleri)",
        "Uygun gayrimenkul tespiti, ekspertiz koordinasyonu ve tapu süreci",
        "Türk vatandaşıyla evlilik yoluyla vatandaşlık başvurusu",
        "Olağan kazanım (uzun süreli ikamet sonrası) başvurusu",
        "Eş ve reşit olmayan çocuklar için bağlantılı (müktesep) başvurular",
        "Vatandaşlık başvurusunun reddine karşı idare mahkemesinde dava",
        "Çift vatandaşlık ve mevcut vatandaşlığın korunması analizi",
        "Vatandaşlık alındıktan sonra kimlik, pasaport ve nüfus kaydı işlemleri",
      ],
      en: [
        "Citizenship by investment applications (real estate, capital, deposit options)",
        "Identifying eligible properties, valuation coordination, and title transactions",
        "Citizenship applications based on marriage to a Turkish citizen",
        "Standard naturalisation applications after long-term residence",
        "Linked (derivative) applications for spouse and minor children",
        "Litigation before the administrative court against citizenship refusals",
        "Dual citizenship and existing-citizenship retention analysis",
        "Post-citizenship ID, passport, and civil registry procedures",
      ],
      de: [
        "Staatsbürgerschaft durch Investition (Immobilien-, Kapital-, Einlageoptionen)",
        "Identifizierung geeigneter Immobilien, Wertgutachtenkoordination und Grundbuchgeschäfte",
        "Staatsbürgerschaftsanträge auf Basis einer Ehe mit einem türkischen Staatsbürger",
        "Reguläre Einbürgerung nach langjährigem Aufenthalt",
        "Verbundene (abgeleitete) Anträge für Ehepartner und minderjährige Kinder",
        "Klagen vor dem Verwaltungsgericht gegen Ablehnungen der Staatsbürgerschaft",
        "Analyse von Doppelstaatsbürgerschaft und Erhalt bestehender Staatsbürgerschaft",
        "Nach der Einbürgerung: Personalausweis-, Reisepass- und Personenstandsverfahren",
      ],
      ru: [
        "Гражданство через инвестиции (недвижимость, капитал, депозиты)",
        "Подбор подходящих объектов, координация оценки и сделки с правом собственности",
        "Заявления на гражданство по браку с гражданином Турции",
        "Стандартная натурализация после длительного проживания",
        "Связанные (производные) заявления для супруга и несовершеннолетних детей",
        "Иски в административный суд против отказов в гражданстве",
        "Анализ двойного гражданства и сохранения имеющегося гражданства",
        "Процедуры удостоверения личности, паспорта и записей в гражданском реестре после получения гражданства",
      ],
      ar: [
        "طلبات الجنسية بالاستثمار (عقاري، رأس مال، وديعة)",
        "تحديد العقارات المؤهلة وتنسيق التقييم ومعاملات سند الملكية",
        "طلبات الجنسية المستندة إلى الزواج من مواطن تركي",
        "طلبات التجنّس العادية بعد إقامة طويلة الأمد",
        "طلبات مرتبطة (تبعية) للزوج/الزوجة والأبناء القاصرين",
        "إقامة دعاوى أمام المحكمة الإدارية ضد رفض طلبات الجنسية",
        "تحليل الجنسية المزدوجة والاحتفاظ بالجنسية الحالية",
        "إجراءات الهوية وجواز السفر والسجل المدني بعد الحصول على الجنسية",
      ],
    },
    process: {
      tr: "Yatırımla vatandaşlık başvurularında ilk adım, müvekkilin profil ve hedeflerine göre en uygun yatırım kanalının belirlenmesidir. Gayrimenkul yolunu tercih edenler için askeri bölge sorgulaması, ekspertiz koordinasyonu ve uygunluk belgesi alınması kritik basamaklardır. Belgelerin (apostil, tercüme, doğum kaydı, sabıka kaydı) eksiksiz hazırlanmasının ardından İl Nüfus Müdürlüğü ve Cumhurbaşkanlığı kararı aşamaları takip edilir. Süreç ortalama 6-12 ay arasında değişir; eş ve reşit olmayan çocukların başvuruları aynı dosya altında yürütülebilir.",
      en: "For citizenship-by-investment applications, the first step is choosing the channel best suited to the client's profile and goals. For the real-estate route, military-zone inquiry, valuation coordination, and obtaining the conformity certificate are critical milestones. After documents (apostille, translation, birth and criminal records) are fully prepared, the Provincial Civil Registry and Presidential decision phases follow. The process typically takes 6–12 months; spouse and minor-child applications can be filed under the same file.",
      de: "Bei der Staatsbürgerschaft durch Investition besteht der erste Schritt darin, den am besten zum Profil und Ziel des Mandanten passenden Investitionsweg zu wählen. Für den Immobilienweg sind die Militärzonenanfrage, die Koordination der Wertgutachten und die Erlangung des Konformitätszertifikats kritisch. Nach vollständiger Vorbereitung der Unterlagen (Apostille, Übersetzung, Geburts- und Führungszeugnis) folgen die Phasen vor dem Provinzpersonenstandsamt und der Präsidentschaftsentscheidung. Der Prozess dauert in der Regel 6–12 Monate; Ehepartner und minderjährige Kinder können in derselben Akte beantragt werden.",
      ru: "При гражданстве через инвестиции первый шаг — выбор канала, наиболее подходящего профилю и целям клиента. Для пути через недвижимость критическими этапами являются запрос по военной зоне, координация оценки и получение сертификата соответствия. После полной подготовки документов (апостиль, перевод, свидетельство о рождении и справка о несудимости) следуют этапы Провинциального управления гражданского состояния и решения Президента. Процесс обычно занимает 6–12 месяцев; заявления супруга и несовершеннолетних детей могут вестись в одном деле.",
      ar: "في طلبات الجنسية بالاستثمار، الخطوة الأولى هي اختيار المسار الأنسب لصورة الموكل وأهدافه. وفي مسار العقار تُعدّ الاستفسار عن المنطقة العسكرية وتنسيق التقييم والحصول على شهادة المطابقة من المحطات الحاسمة. وبعد تجهيز الوثائق كاملةً (التصديق والترجمة وشهادة الميلاد وصحيفة السوابق) تأتي مراحل مديرية النفوس وقرار الرئاسة. وتستغرق العملية عادةً 6–12 شهراً؛ ويمكن تقديم طلبات الزوج والأبناء القاصرين ضمن الملف ذاته.",
    },
    faqs: {
      tr: [
        {
          q: "Vatandaşlık aldıktan sonra mevcut vatandaşlığımı kaybeder miyim?",
          a: "Türkiye çift vatandaşlığa izin vermektedir; ancak mevcut vatandaşlığınızın korunup korunmayacağı kendi ülkenizin hukukuna göre belirlenir. Bazı ülkeler ikinci bir vatandaşlığa müsaade ederken bazıları otomatik kayıp uygular. Başvuru öncesinde bu konunun ayrıca değerlendirilmesi önemlidir.",
        },
        {
          q: "Yatırım yoluyla aldığım gayrimenkulü hemen satabilir miyim?",
          a: "Hayır. Vatandaşlığa esas alınan gayrimenkulün belirli bir süre boyunca elden çıkarılmaması taahhüdü vardır. Bu taahhüde aykırı davranış, vatandaşlığın iptaline yol açabilecek ciddi bir hukuki sonuçtur. Sürenin sonunda satış serbesttir.",
        },
        {
          q: "Reddedilen vatandaşlık başvurusu için ne yapılabilir?",
          a: "Red kararına karşı yasal süresi içinde idari yargı yoluna başvurabilirsiniz. Reddin gerekçesine göre eksiklikler giderilerek yeni başvuru da mümkündür; ancak ret kararındaki gerekçenin aynı sebeplerle tekrar etmemesi için strateji belirlemek gerekir.",
        },
      ],
      en: [
        {
          q: "Will I lose my current citizenship after acquiring Turkish citizenship?",
          a: "Turkey permits dual citizenship, but whether your current citizenship is retained is governed by the law of your home country. Some states allow a second citizenship; others impose automatic loss. This matter must be assessed before the application.",
        },
        {
          q: "Can I sell the property used for citizenship straight away?",
          a: "No. The property forming the basis of citizenship is subject to a non-disposal undertaking for a defined period. Breach of this undertaking is a serious legal consequence that can lead to revocation of citizenship. After the period, the property may be freely sold.",
        },
        {
          q: "What can be done if a citizenship application is refused?",
          a: "You may bring administrative proceedings within the statutory deadline. Depending on the reason for refusal, a fresh application may be filed after correcting deficiencies; a clear strategy is needed to avoid the same grounds being raised again.",
        },
      ],
      de: [
        {
          q: "Verliere ich nach Erlangung der türkischen Staatsbürgerschaft meine bisherige?",
          a: "Die Türkei erlaubt die doppelte Staatsbürgerschaft; ob Ihre bisherige erhalten bleibt, richtet sich aber nach dem Recht Ihres Heimatlandes. Manche Staaten lassen eine zweite Staatsbürgerschaft zu, andere führen den automatischen Verlust herbei. Dieser Punkt muss vor der Antragstellung geprüft werden.",
        },
        {
          q: "Kann ich die für die Staatsbürgerschaft erworbene Immobilie sofort verkaufen?",
          a: "Nein. Die Immobilie unterliegt einer Nichtveräußerungspflicht für einen festgelegten Zeitraum. Ein Verstoß hat schwerwiegende Rechtsfolgen — bis hin zum Entzug der Staatsbürgerschaft. Nach Ablauf der Frist ist der Verkauf frei.",
        },
        {
          q: "Was kann bei einer Ablehnung des Antrags getan werden?",
          a: "Sie können fristgerecht den Verwaltungsrechtsweg einschlagen. Je nach Ablehnungsgrund kann nach Behebung der Mängel ein neuer Antrag gestellt werden; eine klare Strategie ist nötig, damit die gleichen Gründe nicht erneut zum Tragen kommen.",
        },
      ],
      ru: [
        {
          q: "Потеряю ли я своё текущее гражданство после получения турецкого?",
          a: "Турция разрешает двойное гражданство, но сохранение текущего регулируется законами вашей страны. Одни государства допускают второе гражданство, другие — автоматическую потерю. Этот вопрос должен быть оценён до подачи заявления.",
        },
        {
          q: "Могу ли я сразу продать недвижимость, использованную для гражданства?",
          a: "Нет. Недвижимость, послужившая основанием для гражданства, подпадает под обязательство неотчуждения на определённый срок. Нарушение является серьёзным правовым последствием и может привести к лишению гражданства. По истечении срока продажа свободна.",
        },
        {
          q: "Что делать при отказе в гражданстве?",
          a: "Вы можете в установленный срок обратиться в административный суд. В зависимости от основания отказа возможно новое заявление после устранения недостатков; необходима чёткая стратегия, чтобы те же основания не повторились.",
        },
      ],
      ar: [
        {
          q: "هل أفقد جنسيتي الحالية بعد الحصول على الجنسية التركية؟",
          a: "تركيا تسمح بالجنسية المزدوجة، لكن الاحتفاظ بجنسيتك الحالية يعتمد على قانون بلدك. تسمح بعض الدول بجنسية ثانية، بينما تفرض دول أخرى الفقدان التلقائي. لذا يجب تقييم هذا الأمر قبل تقديم الطلب.",
        },
        {
          q: "هل يمكنني بيع العقار المستخدم للجنسية فوراً؟",
          a: "لا. يخضع العقار الذي يُستند إليه للجنسية إلى التزام بعدم التصرف لفترة محددة. ومخالفة هذا الالتزام لها آثار قانونية خطيرة قد تصل إلى سحب الجنسية. وبعد انتهاء المدة يكون البيع متاحاً.",
        },
        {
          q: "ما الذي يمكن فعله عند رفض طلب الجنسية؟",
          a: "يمكنك اللجوء إلى القضاء الإداري ضمن المهلة القانونية. وبحسب سبب الرفض يمكن تقديم طلب جديد بعد تصحيح أوجه القصور؛ ولا بد من استراتيجية واضحة لتجنّب تكرار الأسباب ذاتها.",
        },
      ],
    },
  },
  {
    slug: "aile-hukuku",
    metaTitle: {
      tr: "Antalya Aile Hukuku Avukatı | Yabancılar İçin Boşanma & Velayet",
      en: "Antalya Family Law Attorney | Divorce & Custody for Foreigners",
      de: "Antalya Familienrechtsanwalt | Scheidung & Sorgerecht für Ausländer",
      ru: "Адвокат по семейному праву в Анталье | Развод и опека для иностранцев",
      ar: "محامي قانون الأسرة في أنطاليا | الطلاق والحضانة للأجانب",
    },
    metaDescription: {
      tr: "Yabancı uyrukluların Türkiye'de boşanma, velayet, nafaka, mal paylaşımı ve yabancı mahkeme kararlarının tanınması davalarında deneyimli Aile Hukuku avukatı.",
      en: "Experienced family law attorney for foreigners in Turkey: divorce, custody, alimony, division of property, and recognition of foreign court judgments.",
      de: "Erfahrener Familienrechtsanwalt für Ausländer in der Türkei: Scheidung, Sorgerecht, Unterhalt, Vermögensaufteilung und Anerkennung ausländischer Gerichtsentscheidungen.",
      ru: "Опытный адвокат по семейному праву для иностранцев в Турции: развод, опека, алименты, раздел имущества и признание иностранных судебных решений.",
      ar: "محامي قانون أسرة متمرس للأجانب في تركيا: الطلاق والحضانة والنفقة وتقسيم الأموال والاعتراف بأحكام المحاكم الأجنبية.",
    },
    intro: {
      tr: "Aile Hukuku, yabancı uyrukluların Türkiye'de en hassas hukuki süreçlerle karşılaştığı alanlardan biridir. Boşanma, velayet, nafaka ve mal paylaşımı davaları yalnızca hukuki değil aynı zamanda duygusal ağırlığı yüksek süreçlerdir; üstelik uluslararası unsurlar (yabancı uyruk, başka ülkede ikamet, yurtdışında alınmış mahkeme kararları) işin karmaşıklığını artırır.\n\nAntalya'da Aile Hukuku avukatı olarak müvekkillerimize anlaşmalı veya çekişmeli boşanma davaları, çocukların velayeti ve kişisel ilişki düzenlemeleri, nafaka talepleri, yabancı mahkemelerden alınmış boşanma veya vesayet kararlarının Türkiye'de tanınması ve tenfizi gibi tüm alt süreçlerde destek veriyoruz. Mahkeme önünde olduğu kadar arabulucuk masasında da müvekkilin lehine bir çözüm üretmeye çalışırız.",
      en: "Family law is one of the most sensitive areas foreigners encounter in Turkey. Divorce, custody, alimony, and division-of-property cases are not only legally but emotionally demanding; international elements — foreign nationality, residence in another country, judgments rendered abroad — add to the complexity.\n\nAs a family law attorney in Antalya, we represent clients in contested and uncontested divorces, child custody and visitation arrangements, alimony claims, and the recognition and enforcement of foreign divorce or guardianship judgments in Turkey. Whether at trial or at the mediation table, we work to secure the most favourable outcome for the client.",
      de: "Familienrecht gehört zu den sensibelsten Bereichen, mit denen Ausländer in der Türkei in Berührung kommen. Scheidung, Sorgerecht, Unterhalt und Vermögensaufteilung sind nicht nur rechtlich, sondern auch emotional anspruchsvoll; internationale Elemente — fremde Staatsangehörigkeit, Wohnsitz im Ausland, im Ausland ergangene Urteile — erhöhen die Komplexität.\n\nAls Familienrechtsanwalt in Antalya vertreten wir Mandanten in einvernehmlichen und streitigen Scheidungen, Sorgerecht und Umgangsregelungen, Unterhaltsansprüchen sowie Anerkennung und Vollstreckung ausländischer Scheidungs- oder Vormundschaftsurteile in der Türkei. Sowohl vor Gericht als auch am Mediationstisch streben wir das für den Mandanten beste Ergebnis an.",
      ru: "Семейное право — одна из самых деликатных сфер, с которой иностранцы сталкиваются в Турции. Дела о разводе, опеке, алиментах и разделе имущества требуют не только правовых, но и эмоциональных усилий; международные элементы — иностранное гражданство, проживание в другой стране, судебные решения, вынесенные за рубежом — усложняют ситуацию.\n\nКак адвокат по семейному праву в Анталье мы представляем клиентов в спорных и согласованных разводах, делах об опеке и порядке общения с ребёнком, требованиях об алиментах, а также признании и приведении в исполнение иностранных решений о разводе или опеке в Турции. Будь то в суде или на медиации — мы добиваемся наиболее благоприятного для клиента результата.",
      ar: "يعدّ قانون الأسرة من أكثر المجالات حساسيةً التي يواجهها الأجانب في تركيا. فقضايا الطلاق والحضانة والنفقة وتقسيم الأموال ليست قانونية فحسب بل ذات أبعاد عاطفية ثقيلة؛ كما تزيد العناصر الدولية — الجنسية الأجنبية والإقامة في بلد آخر والأحكام الصادرة في الخارج — من تعقيد الأمور.\n\nبصفتنا محامي قانون أسرة في أنطاليا، نمثّل الموكلين في الطلاق التوافقي والخلافي وترتيبات حضانة الأطفال والزيارة ومطالبات النفقة والاعتراف بأحكام الطلاق أو الوصاية الأجنبية وتنفيذها في تركيا. سواء أمام المحكمة أو على طاولة الوساطة، نعمل لتحقيق أفضل نتيجة للموكل.",
    },
    services: {
      tr: [
        "Anlaşmalı ve çekişmeli boşanma davaları",
        "Velayet, kişisel ilişki ve çocuk teslimi düzenlemeleri",
        "İştirak nafakası, tedbir nafakası ve yoksulluk nafakası talepleri",
        "Mal rejimi tasfiyesi ve katılma alacağı davaları",
        "Yabancı mahkeme boşanma kararlarının tanınması ve tenfizi",
        "Uluslararası çocuk kaçırma ve La Haye Sözleşmesi süreçleri",
        "Evlilik öncesi ve evlilik içi mal sözleşmeleri",
        "Soybağı, vesayet ve evlat edinme süreçleri",
      ],
      en: [
        "Contested and uncontested divorce cases",
        "Custody, visitation, and child handover arrangements",
        "Child support, interim support, and spousal maintenance claims",
        "Liquidation of marital property regime and participation-in-acquisitions claims",
        "Recognition and enforcement of foreign divorce judgments",
        "International child abduction and Hague Convention proceedings",
        "Pre-nuptial and post-nuptial property agreements",
        "Filiation, guardianship, and adoption proceedings",
      ],
      de: [
        "Einvernehmliche und streitige Scheidungsverfahren",
        "Sorgerecht, Umgangs- und Übergaberegelungen",
        "Kindesunterhalt, einstweiliger Unterhalt und Ehegattenunterhalt",
        "Auseinandersetzung des ehelichen Güterstandes und Zugewinnausgleich",
        "Anerkennung und Vollstreckung ausländischer Scheidungsurteile",
        "Internationale Kindesentführung und Verfahren nach dem Haager Übereinkommen",
        "Eheverträge vor und während der Ehe",
        "Abstammungs-, Vormundschafts- und Adoptionsverfahren",
      ],
      ru: [
        "Спорные и согласованные бракоразводные процессы",
        "Опека, порядок общения и передача ребёнка",
        "Алименты на ребёнка, обеспечительные алименты и содержание супруга",
        "Раздел имущественного режима супругов и претензии на участие в приобретениях",
        "Признание и приведение в исполнение иностранных решений о разводе",
        "Международные похищения детей и процедуры по Гаагской конвенции",
        "Брачные договоры до и в период брака",
        "Установление происхождения, опеки и усыновления",
      ],
      ar: [
        "قضايا الطلاق التوافقي والخلافي",
        "ترتيبات الحضانة والزيارة وتسليم الأطفال",
        "نفقة الأبناء والنفقة المؤقتة ونفقة الزوج",
        "تصفية النظام المالي للزوجين ودعاوى المشاركة في المكتسبات",
        "الاعتراف بأحكام الطلاق الأجنبية وتنفيذها",
        "اختطاف الأطفال الدولي وإجراءات اتفاقية لاهاي",
        "اتفاقيات الأموال قبل الزواج وأثناءه",
        "إجراءات النسب والوصاية والتبني",
      ],
    },
    process: {
      tr: "Aile Hukuku dosyalarında ilk adım, müvekkilin önceliklerini ve dosyanın hukuki çerçevesini netleştirmektir. Çocuğun bulunduğu durumlarda velayet ve kişisel ilişki, ardından mali talepler (nafaka, mal paylaşımı) sıralanır. Mümkün olduğu durumlarda anlaşmalı boşanma ve protokol yoluyla kısa sürede sonuç almayı tercih ederiz; ancak çekişmeli süreçte de delillerin doğru sunumu, tanık ve bilirkişi yönetimi ile mahkeme önünde etkili savunma sağlarız. Yabancı uyruklu müvekkillerde, eşlerin yargı yetkisi seçimi ve uluslararası mahkeme kararlarının Türkiye'de tanınması özel bir uzmanlık gerektirir.",
      en: "Family law cases begin by clarifying the client's priorities and the legal framework of the file. Where children are involved, custody and visitation come first, followed by financial claims (alimony, division of property). Where possible, we prefer uncontested divorce and protocol-based resolution to obtain swift outcomes; in contested proceedings, we ensure proper presentation of evidence, witness and expert management, and effective defence before the court. For foreign clients, choice of jurisdiction and recognition of foreign judgments in Turkey require specific expertise.",
      de: "Familienrechtsfälle beginnen mit der Klärung der Prioritäten des Mandanten und des rechtlichen Rahmens der Akte. Sind Kinder involviert, stehen Sorgerecht und Umgang an erster Stelle, gefolgt von finanziellen Ansprüchen (Unterhalt, Vermögensaufteilung). Wo möglich, bevorzugen wir einvernehmliche Scheidung und Protokollvereinbarungen für schnelle Ergebnisse; im streitigen Verfahren sorgen wir für die korrekte Beweisführung, Zeugen- und Sachverständigenmanagement und eine wirksame Verteidigung vor Gericht. Für ausländische Mandanten erfordern Gerichtsstandwahl und Anerkennung ausländischer Urteile in der Türkei spezifische Expertise.",
      ru: "Семейные дела начинаются с уточнения приоритетов клиента и правовой основы дела. Если есть дети, на первом плане — опека и общение, затем финансовые требования (алименты, раздел имущества). По возможности мы предпочитаем согласованный развод и протокольное урегулирование для быстрого результата; в спорных делах обеспечиваем правильное представление доказательств, работу со свидетелями и экспертами, эффективную защиту в суде. Для иностранных клиентов выбор подсудности и признание иностранных решений в Турции требуют особой компетенции.",
      ar: "تبدأ قضايا الأسرة بتوضيح أولويات الموكل والإطار القانوني للملف. وعند وجود أطفال تتقدم الحضانة والزيارة، تتلوها المطالبات المالية (النفقة وتقسيم الأموال). نفضّل عند الإمكان الطلاق التوافقي والتسوية بالبروتوكول للوصول لنتائج سريعة؛ وفي الإجراءات الخلافية نضمن العرض السليم للأدلة وإدارة الشهود والخبراء والدفاع الفعّال أمام المحكمة. وفي قضايا الموكلين الأجانب يتطلب اختيار الاختصاص والاعتراف بالأحكام الأجنبية في تركيا خبرة خاصة.",
    },
    faqs: {
      tr: [
        {
          q: "Türkiye'de farklı uyruktaki eşlerle boşanma davası açılabilir mi?",
          a: "Evet. Türk mahkemeleri, eşlerin Türkiye'de yerleşim yeri bulunması veya somut bağlantı olması halinde uluslararası unsur taşıyan boşanma davalarına bakar. Hangi ülkenin hukukunun uygulanacağı ise milletlerarası özel hukuk kuralları çerçevesinde belirlenir.",
        },
        {
          q: "Yurtdışında alınmış boşanma kararım Türkiye'de geçerli mi?",
          a: "Otomatik olarak değildir. Yabancı mahkeme kararının Türkiye'de hukuki sonuç doğurması için tanınma ve tenfiz davası açılması gerekir. Bu dava sonucunda karar Türk Hukuk düzeniyle bağdaşıyorsa nüfus kayıtlarına işlenir.",
        },
        {
          q: "Çocuğun velayeti hangi kritere göre belirlenir?",
          a: "Velayette esas alınan ölçüt çocuğun üstün yararıdır. Yaş, çocuğun fiziksel ve psikolojik bakım koşulları, ebeveynlerin durumu ve çocuğun görüşü birlikte değerlendirilir. Mahkeme gerektiğinde uzman raporu da talep eder.",
        },
      ],
      en: [
        {
          q: "Can foreigners file for divorce in Turkey?",
          a: "Yes. Turkish courts hear divorce cases with international elements where the spouses have a residence in Turkey or a sufficient connection exists. Which country's law applies is determined under the rules of private international law.",
        },
        {
          q: "Is my foreign divorce decree valid in Turkey?",
          a: "Not automatically. For a foreign judgment to take legal effect in Turkey, recognition and enforcement proceedings must be filed. If the judgment is consistent with Turkish public order, it is then registered with the civil registry.",
        },
        {
          q: "How is custody decided?",
          a: "Custody is decided by reference to the child's best interest. Age, physical and psychological care conditions, parents' circumstances, and — where appropriate — the child's own views are considered together. Expert reports may also be obtained.",
        },
      ],
      de: [
        {
          q: "Können Ausländer in der Türkei eine Scheidung einreichen?",
          a: "Ja. Türkische Gerichte sind für Scheidungen mit internationalem Bezug zuständig, wenn die Ehegatten in der Türkei einen Wohnsitz oder hinreichenden Bezug haben. Welches Recht anwendbar ist, richtet sich nach dem internationalen Privatrecht.",
        },
        {
          q: "Ist mein ausländisches Scheidungsurteil in der Türkei wirksam?",
          a: "Nicht automatisch. Damit ein ausländisches Urteil in der Türkei rechtliche Wirkung entfaltet, ist ein Anerkennungs- und Vollstreckungsverfahren erforderlich. Steht das Urteil im Einklang mit dem türkischen ordre public, wird es im Personenstandsregister eingetragen.",
        },
        {
          q: "Nach welchem Kriterium wird das Sorgerecht festgelegt?",
          a: "Maßgeblich ist das Wohl des Kindes. Alter, physische und psychische Betreuungsbedingungen, Elternsituation und — wo angemessen — der Wille des Kindes werden gemeinsam berücksichtigt. Bei Bedarf werden Sachverständigenberichte eingeholt.",
        },
      ],
      ru: [
        {
          q: "Могут ли иностранцы подать на развод в Турции?",
          a: "Да. Турецкие суды рассматривают бракоразводные дела с международным элементом при наличии у супругов места жительства в Турции или достаточной связи. Применимое право определяется по нормам международного частного права.",
        },
        {
          q: "Действует ли моё иностранное решение о разводе в Турции?",
          a: "Не автоматически. Чтобы иностранное решение получило юридическую силу в Турции, необходимо подать иск о признании и приведении в исполнение. Если решение соответствует турецкому публичному порядку, оно вносится в гражданский реестр.",
        },
        {
          q: "По какому критерию определяется опека?",
          a: "Главный критерий — высший интерес ребёнка. Возраст, физические и психологические условия ухода, положение родителей и — при необходимости — мнение ребёнка рассматриваются совместно. Суд может запросить и заключение эксперта.",
        },
      ],
      ar: [
        {
          q: "هل يمكن للأجانب رفع دعوى طلاق في تركيا؟",
          a: "نعم. تنظر المحاكم التركية في قضايا الطلاق ذات العنصر الدولي إذا كان للزوجين إقامة في تركيا أو ارتباط كافٍ. ويُحدَّد القانون المنطبق وفق قواعد القانون الدولي الخاص.",
        },
        {
          q: "هل حكم الطلاق الأجنبي ساري المفعول في تركيا؟",
          a: "ليس تلقائياً. لكي يحدث الحكم الأجنبي أثراً قانونياً في تركيا يجب رفع دعوى اعتراف وتنفيذ. وإن وافق الحكم النظام العام التركي يُسجَّل في السجل المدني.",
        },
        {
          q: "على أي أساس تُحدَّد الحضانة؟",
          a: "المعيار الأساسي هو المصلحة الفضلى للطفل. وتُؤخذ بعين الاعتبار السن وظروف الرعاية الجسدية والنفسية ووضع الوالدين — وعند الاقتضاء — رأي الطفل. وقد تطلب المحكمة تقريراً خبيراً.",
        },
      ],
    },
  },
  {
    slug: "ceza-hukuku",
    metaTitle: {
      tr: "Antalya Ceza Avukatı | Yabancılar İçin Ceza Hukuku Savunması",
      en: "Antalya Criminal Defence Lawyer | Criminal Law Defence for Foreigners",
      de: "Antalya Strafverteidiger | Strafrechtsverteidigung für Ausländer",
      ru: "Адвокат по уголовным делам в Анталье | Уголовная защита для иностранцев",
      ar: "محامي جنائي في أنطاليا | الدفاع الجنائي للأجانب",
    },
    metaDescription: {
      tr: "Antalya'da yabancılar için Ceza Hukuku avukatı. Soruşturma, gözaltı, tutukluluk, ifade alımı, dava savunması ve kararların itiraz süreçlerinde 7/24 hızlı müdahale.",
      en: "Criminal defence lawyer for foreigners in Antalya. Rapid 24/7 intervention in investigations, custody, pre-trial detention, statements, trial defence, and appeals.",
      de: "Strafverteidiger für Ausländer in Antalya. Schnelle 24/7-Intervention bei Ermittlungen, Festnahme, Untersuchungshaft, Aussagen, Hauptverhandlung und Rechtsmitteln.",
      ru: "Адвокат по уголовным делам для иностранцев в Анталье. Быстрое реагирование 24/7 в расследованиях, задержании, предварительном заключении, показаниях, защите в суде и обжалованиях.",
      ar: "محامي جنائي للأجانب في أنطاليا. تدخل سريع على مدار الساعة في التحقيقات والاحتجاز والحبس الاحتياطي وأخذ الأقوال والدفاع أمام المحكمة والطعون.",
    },
    intro: {
      tr: "Türkiye'de bir suç isnadıyla karşılaşan yabancı uyruklular için savunma hakkı, dil engeli, hukuki sistem farklılığı ve süre baskısı nedeniyle çok daha kritik bir hâl alır. Karakolda alınan ifadenin, sulh ceza hâkimliğindeki ilk savunmanın ve mahkeme önündeki delil sunumunun her satırı, dosyanın seyrini doğrudan etkiler. Bu nedenle ceza süreçlerinde mümkün olan en erken aşamada bağımsız bir ceza avukatı desteği almak hayati önem taşır.\n\nAntalya'da ceza avukatı olarak ekibimiz; gözaltı süreçleri, tutukluluğa itiraz, soruşturma aşamasında müşteki/şüpheli olarak temsil, kovuşturma aşamasında dava savunması ve istinaf-temyiz aşamalarında müvekkillerinin yanındadır. Yabancı uyruklu müvekkillere kendi dilinde tercüman eşliğinde danışmanlık veririz; kovuşturmanın sonucu kadar süreç içerisindeki temel haklarının korunmasını da önceleriz.",
      en: "For foreign nationals facing a criminal allegation in Turkey, the right to a defence becomes far more critical due to language barriers, differences in legal systems, and time pressure. Every line of the police statement, of the first defence before the criminal magistrate, and of the evidence presented at trial directly shapes the course of the file. It is therefore vital to engage independent criminal counsel at the earliest possible stage.\n\nAs a criminal defence lawyer in Antalya, our team stands beside clients during custody, in opposing pre-trial detention, in representing the complainant/suspect during investigation, in trial defence, and at the appellate stages. Foreign clients are advised in their own language alongside an interpreter; we prioritise both the outcome of the prosecution and the protection of fundamental rights throughout the process.",
      de: "Für ausländische Staatsangehörige, die in der Türkei mit einem strafrechtlichen Vorwurf konfrontiert sind, wird das Recht auf Verteidigung wegen Sprachbarrieren, Unterschieden in den Rechtssystemen und Zeitdruck deutlich kritischer. Jede Zeile der polizeilichen Aussage, der ersten Verteidigung vor dem Haftrichter und der Beweismittel im Hauptverfahren prägt den Verlauf der Akte unmittelbar. Daher ist es entscheidend, möglichst früh einen unabhängigen Strafverteidiger einzuschalten.\n\nAls Strafverteidiger in Antalya begleitet unser Team Mandanten in Festnahme, in der Anfechtung der Untersuchungshaft, in der Vertretung als Anzeigeerstatter/Beschuldigter während der Ermittlung, in der Hauptverhandlung und in den Rechtsmittelinstanzen. Ausländische Mandanten beraten wir in ihrer Sprache mit Dolmetscher; wir priorisieren sowohl den Ausgang als auch den Schutz der Grundrechte.",
      ru: "Для иностранцев, столкнувшихся с уголовным обвинением в Турции, право на защиту становится особенно критичным из-за языкового барьера, различий правовых систем и временного давления. Каждая строка показаний в полиции, первой защиты перед мировым судьёй и доказательств в суде напрямую влияет на ход дела. Поэтому жизненно важно как можно раньше привлечь независимого адвоката по уголовным делам.\n\nКак адвокат по уголовным делам в Анталье наша команда сопровождает клиентов на задержании, при обжаловании предварительного заключения, в представительстве потерпевшего/подозреваемого на стадии расследования, в защите в суде и на стадиях апелляции/кассации. Иностранных клиентов мы консультируем на их родном языке с участием переводчика; приоритет — и результат дела, и защита основных прав на всём пути.",
      ar: "بالنسبة للأجانب الذين يواجهون اتهاماً جنائياً في تركيا، يصبح حق الدفاع أكثر حساسيةً بسبب الحاجز اللغوي واختلاف الأنظمة القانونية وضغط الوقت. كل سطر في إفادة الشرطة وفي الدفاع الأول أمام قاضي الصلح وفي الأدلة المعروضة أمام المحكمة يؤثر مباشرةً في مسار الملف. لذا من الضروري الاستعانة بمحامٍ جنائي مستقل في أبكر مرحلة ممكنة.\n\nبصفتنا محامين جنائيين في أنطاليا، يواكب فريقنا الموكلين خلال الاحتجاز والطعن في الحبس الاحتياطي، وفي تمثيل المشتكي/المشتبه به أثناء التحقيق، وفي الدفاع أمام المحكمة وفي مراحل الاستئناف. ونقدم الاستشارة للعملاء الأجانب بلغتهم مع مترجم؛ ونُولي الأهمية لنتيجة الدعوى ولحماية الحقوق الأساسية على حدٍّ سواء.",
    },
    services: {
      tr: [
        "Gözaltı ve karakolda ifade aşamasında müdafilik",
        "Tutukluluğa itiraz ve adli kontrol kararlarına yönelik talepler",
        "Soruşturma aşamasında müşteki ve şüpheli temsili",
        "Mahkeme önünde sanık savunması ve müşteki vekilliği",
        "Dolandırıcılık, bilişim suçları, uyuşturucu, trafik suçları savunması",
        "Cinsel suçlar, hakaret, tehdit ve aile içi şiddet dosyaları",
        "Mağdur hakları ve şikâyet süreçlerinde müvekkil temsili",
        "İstinaf ve temyiz aşamasında ileri savunma",
      ],
      en: [
        "Counsel during custody and police statement",
        "Challenges to pre-trial detention and judicial control measures",
        "Representation of complainant and suspect during investigation",
        "Defendant defence and complainant representation at trial",
        "Defence in fraud, cyber, narcotics, and traffic offences",
        "Sexual offences, insult, threat, and domestic violence files",
        "Victim rights and representation in complaint procedures",
        "Advanced defence at the appellate and supreme appeal stages",
      ],
      de: [
        "Verteidigung während der Festnahme und der polizeilichen Vernehmung",
        "Beschwerden gegen Untersuchungshaft und Auflagen",
        "Vertretung von Anzeigeerstatter und Beschuldigtem in der Ermittlung",
        "Beschuldigtenverteidigung und Nebenklägervertretung in der Hauptverhandlung",
        "Verteidigung in Betrugs-, Cyber-, Drogen- und Verkehrsdelikten",
        "Sexualdelikte, Beleidigung, Bedrohung, häusliche Gewalt",
        "Opferrechte und Vertretung in Beschwerdeverfahren",
        "Erweiterte Verteidigung in Berufung und Revision",
      ],
      ru: [
        "Защита на этапе задержания и дачи показаний в полиции",
        "Обжалование предварительного заключения и мер судебного контроля",
        "Представительство потерпевшего и подозреваемого в ходе расследования",
        "Защита подсудимого и представительство потерпевшего в суде",
        "Защита по делам о мошенничестве, киберпреступлениях, наркотиках и ДТП",
        "Половые преступления, оскорбление, угроза, бытовое насилие",
        "Права потерпевших и представительство в жалобных процедурах",
        "Расширенная защита на стадии апелляции и кассации",
      ],
      ar: [
        "الدفاع خلال الاحتجاز وأخذ الإفادة في الشرطة",
        "الطعن في الحبس الاحتياطي وتدابير الرقابة القضائية",
        "تمثيل المشتكي والمشتبه به في مرحلة التحقيق",
        "الدفاع عن المتهم وتمثيل المشتكي أمام المحكمة",
        "الدفاع في قضايا الاحتيال والجرائم الإلكترونية والمخدرات والمرور",
        "الجرائم الجنسية والإهانة والتهديد والعنف الأسري",
        "حقوق الضحايا والتمثيل في إجراءات الشكاوى",
        "الدفاع المتقدم في مرحلتي الاستئناف والتمييز",
      ],
    },
    process: {
      tr: "Ceza dosyalarında zaman en kritik unsurdur. Müvekkilden gelen ilk bilgi sonrası adli birimlerle hızla iletişime geçer, ifade öncesi dosyaya hâkim olarak müvekkili bilgilendiririz. Tutukluluk durumunda itirazları en kısa sürede sunarız; kovuşturma aşamasına geçildiğinde delil tartışması, tanık ve bilirkişi yönetimi ve hukuka aykırı delillerin dışlanması için somut talepleri dosyaya işleriz. Yabancı müvekkilde gerektiğinde mahkeme nezdinde tercüman tayini, konsolosluk bildirimi ve adli yardım haklarının kullanılmasını da sağlarız.",
      en: "Time is the most critical factor in criminal files. Upon first contact, we engage the authorities promptly and brief the client on the file before any statement is taken. Where there is detention, objections are filed at the earliest opportunity; in the trial phase, we secure proper evidence challenge, witness and expert management, and exclusion motions for unlawfully obtained evidence. For foreign clients, we ensure court interpreters, consular notification, and access to legal aid where applicable.",
      de: "In Strafsachen ist die Zeit der kritischste Faktor. Nach dem ersten Kontakt nehmen wir umgehend Verbindung zu den Behörden auf und informieren den Mandanten vor jeder Aussage. Im Falle einer Festnahme legen wir frühestmöglich Beschwerden ein; in der Hauptverhandlung sichern wir die Beweisauseinandersetzung, das Zeugen- und Sachverständigenmanagement sowie Verwertungsverbote für rechtswidrig erlangte Beweise. Für ausländische Mandanten sorgen wir für Dolmetscher vor Gericht, konsularische Benachrichtigung und Zugang zu Prozesskostenhilfe, soweit möglich.",
      ru: "В уголовных делах время — ключевой фактор. После первого контакта мы оперативно связываемся с органами и информируем клиента до дачи любых показаний. При задержании мы как можно раньше подаём возражения; на стадии судебного разбирательства обеспечиваем оспаривание доказательств, работу со свидетелями и экспертами, ходатайства об исключении незаконно полученных доказательств. Для иностранных клиентов мы обеспечиваем переводчиков в суде, консульское уведомление и доступ к правовой помощи в применимых случаях.",
      ar: "الوقت أهم عنصر في الملفات الجنائية. عند الاتصال الأول نتواصل فوراً مع الجهات المختصة ونطلع الموكل على الملف قبل أي إفادة. وفي حال الاحتجاز نقدّم الطعون في أسرع وقت ممكن؛ وفي مرحلة المحاكمة نضمن مناقشة الأدلة وإدارة الشهود والخبراء وطلبات استبعاد الأدلة المتحصلة بشكل غير مشروع. وللعملاء الأجانب نضمن المترجمين في المحكمة والإخطار القنصلي والوصول إلى المساعدة القانونية حيثما أمكن.",
    },
    faqs: {
      tr: [
        {
          q: "Türkiye'de gözaltına alındım, ne yapmalıyım?",
          a: "Susma hakkınızı kullanın ve avukatınız olmadan ifade vermeyi reddedin. Konsolosluğunuzla iletişim talep edebilirsiniz. Avukatınız mümkün olduğunca hızlı bilgilendirilmeli; ifade öncesi avukatla görüşme talep etme hakkı vardır.",
        },
        {
          q: "Tutuklandım, serbest bırakılmamı sağlayabilir misiniz?",
          a: "Tutukluluk kararına karşı itiraz hakkı bulunmaktadır. Adli kontrol şartlarıyla salıverilme veya tutukluluğun kaldırılması için somut delil ve sunulabilecek güvenceler değerlendirilir. Her dosyada itiraz şansı somut koşullara göre farklılaşır.",
        },
        {
          q: "Yurtdışında işlediğim iddia edilen bir suç için Türkiye'de yargılanır mıyım?",
          a: "Türk Hukukunun belirli koşullarda yurt dışında işlenen suçlar üzerinde yargı yetkisi vardır (özellikle Türk vatandaşları aleyhine işlenen suçlar veya Türk kanunlarının uygulanmasını gerektiren özel hâller). Bu husus dosyanın detayına göre incelenir.",
        },
      ],
      en: [
        {
          q: "I have been taken into custody in Turkey — what should I do?",
          a: "Exercise your right to remain silent and decline to make a statement without your lawyer. You may request consular contact. Counsel must be informed as quickly as possible; you have the right to consult counsel before making any statement.",
        },
        {
          q: "I am in pre-trial detention — can you get me released?",
          a: "An objection to detention is available. Release with judicial control measures or removal of detention is assessed against concrete evidence and the security that can be offered. Prospects of success vary file by file.",
        },
        {
          q: "Will I be tried in Turkey for an offence allegedly committed abroad?",
          a: "Turkish law has jurisdiction over certain offences committed abroad (in particular crimes against Turkish nationals or specific cases requiring application of Turkish law). The matter is assessed against the facts of the file.",
        },
      ],
      de: [
        {
          q: "Ich wurde in der Türkei in Gewahrsam genommen — was tun?",
          a: "Machen Sie von Ihrem Schweigerecht Gebrauch und verweigern Sie eine Aussage ohne Ihren Anwalt. Sie können Kontakt zu Ihrem Konsulat verlangen. Der Anwalt sollte schnellstmöglich informiert werden; vor jeder Aussage besteht das Recht auf Anwaltsgespräch.",
        },
        {
          q: "Ich bin in Untersuchungshaft — können Sie meine Freilassung erreichen?",
          a: "Gegen die Haft gibt es einen Beschwerdeweg. Die Freilassung unter Auflagen oder die Aufhebung der Haft wird anhand konkreter Beweise und angebotener Sicherheiten beurteilt. Die Erfolgsaussichten variieren von Fall zu Fall.",
        },
        {
          q: "Werde ich in der Türkei wegen einer im Ausland begangenen Tat verfolgt?",
          a: "Das türkische Recht hat unter bestimmten Voraussetzungen Gerichtsbarkeit über im Ausland begangene Taten (insbesondere Taten gegen türkische Staatsangehörige oder spezielle Fälle, in denen türkisches Recht anzuwenden ist). Dies wird je nach Akteninhalt beurteilt.",
        },
      ],
      ru: [
        {
          q: "Меня задержали в Турции — что делать?",
          a: "Воспользуйтесь правом хранить молчание и откажитесь от показаний без адвоката. Вы можете требовать связи с консульством. Адвокату нужно сообщить как можно быстрее; перед любыми показаниями вы имеете право на встречу с защитником.",
        },
        {
          q: "Я под арестом — можете ли вы добиться освобождения?",
          a: "Существует право обжаловать арест. Освобождение под меры судебного контроля или снятие ареста оценивается на основании конкретных доказательств и предлагаемых гарантий. Шансы на успех зависят от каждого дела.",
        },
        {
          q: "Будут ли меня судить в Турции за преступление, якобы совершённое за рубежом?",
          a: "Турецкое право в определённых условиях имеет юрисдикцию над преступлениями, совершёнными за рубежом (в частности, против граждан Турции, и в специфических случаях применения турецкого права). Это оценивается по обстоятельствам дела.",
        },
      ],
      ar: [
        {
          q: "تم احتجازي في تركيا — ماذا أفعل؟",
          a: "مارس حقك في الصمت ورفض الإدلاء بإفادة دون محاميك. يمكنك طلب الاتصال بقنصليتك. ويجب إبلاغ المحامي بأسرع وقت؛ ولك الحق في التشاور معه قبل أي إفادة.",
        },
        {
          q: "أنا في حبس احتياطي — هل يمكنكم تحقيق الإفراج؟",
          a: "يحق الطعن في قرار الحبس. ويُقيَّم الإفراج مع تدابير الرقابة القضائية أو رفع الحبس بحسب الأدلة الملموسة والضمانات المقدمة. وتختلف فرص النجاح من ملف لآخر.",
        },
        {
          q: "هل سأُحاكَم في تركيا عن جريمة يُدَّعى ارتكابها في الخارج؟",
          a: "يملك القانون التركي صلاحية في حالات معينة على الجرائم المرتكبة خارج تركيا (لا سيما ضد مواطنين أتراك أو في حالات خاصة تستوجب تطبيق القانون التركي). ويُقيَّم ذلك بحسب وقائع الملف.",
        },
      ],
    },
  },
  {
    slug: "ticaret-sirketler-hukuku",
    metaTitle: {
      tr: "Antalya Ticaret Avukatı | Yabancılar İçin Şirket Kurma & Sözleşme",
      en: "Antalya Commercial Lawyer | Company Formation & Contracts for Foreigners",
      de: "Antalya Wirtschaftsanwalt | Firmengründung & Verträge für Ausländer",
      ru: "Адвокат по коммерческому праву в Анталье | Регистрация компаний для иностранцев",
      ar: "محامي تجاري أنطاليا | تأسيس الشركات والعقود للأجانب",
    },
    metaDescription: {
      tr: "Yabancı yatırımcılar için Antalya'da şirket kurma, ticari sözleşme, ortaklık anlaşmaları, ticari dava ve uyuşmazlık çözümünde deneyimli Ticaret Hukuku avukatı.",
      en: "Experienced commercial lawyer in Antalya for foreign investors: company formation, commercial contracts, shareholder agreements, commercial litigation, and dispute resolution.",
      de: "Erfahrener Wirtschaftsanwalt in Antalya für ausländische Investoren: Firmengründung, Handelsverträge, Gesellschafterverträge, Handelsprozesse und Streitbeilegung.",
      ru: "Опытный адвокат по коммерческому праву в Анталье для иностранных инвесторов: учреждение компаний, коммерческие контракты, акционерные соглашения, коммерческие споры.",
      ar: "محامي تجاري متمرس في أنطاليا للمستثمرين الأجانب: تأسيس الشركات والعقود التجارية واتفاقيات المساهمين والتقاضي وتسوية النزاعات.",
    },
    intro: {
      tr: "Türkiye, yabancı sermayeli şirket kuruluşunun nispeten kolay ve şeffaf olduğu az sayıdaki ülkeden biridir. Yatırımcılar limited şirket, anonim şirket, şube ya da irtibat ofisi gibi farklı yapılar arasından, vergi planlaması ve uzun vadeli stratejiye uygun olanı seçebilir. Ancak doğru yapı seçimi kadar imzalanan ticari sözleşmelerin Türk Hukukuna uygun düzenlenmesi de büyümenin sürdürülebilirliğini doğrudan etkiler.\n\nAntalya'da ticaret avukatı olarak şirket kuruluşundan ortak girişim sözleşmelerine, distribütörlük ve franchise düzenlemelerinden ortaklık uyuşmazlıklarına kadar tüm ticari hukuk süreçlerinde danışmanlık sağlıyoruz. Vergisel etkinlik, yönetim hakimiyeti ve çıkış stratejisi her sözleşmenin tasarımında dikkate aldığımız unsurlardır.",
      en: "Turkey is one of the few countries where setting up a company with foreign capital is relatively straightforward and transparent. Investors may choose between limited liability and joint-stock companies, branches, or liaison offices according to tax planning and long-term strategy. Yet alongside the right structure, drafting commercial contracts in line with Turkish law directly affects the sustainability of growth.\n\nAs a commercial lawyer in Antalya, we advise on the full spectrum — company formation, joint ventures, distribution and franchise arrangements, and shareholder disputes. Tax efficiency, governance control, and exit strategy are factors we take into account in every contract design.",
      de: "Die Türkei zählt zu den wenigen Ländern, in denen die Gründung einer Gesellschaft mit ausländischem Kapital vergleichsweise einfach und transparent ist. Investoren können zwischen GmbH und AG, Niederlassungen oder Verbindungsbüros wählen, je nach Steuerplanung und langfristiger Strategie. Neben der richtigen Struktur ist die rechtskonforme Gestaltung kommerzieller Verträge entscheidend für nachhaltiges Wachstum.\n\nAls Wirtschaftsanwalt in Antalya beraten wir vom Firmenaufbau über Joint-Venture-, Vertriebs- und Franchise-Verträge bis hin zu Gesellschafterstreitigkeiten. Steuereffizienz, Führungskontrolle und Ausstiegsstrategie sind Faktoren, die wir bei jedem Vertrag berücksichtigen.",
      ru: "Турция — одна из немногих стран, где регистрация компании с иностранным капиталом относительно проста и прозрачна. Инвесторы могут выбрать между ООО и АО, филиалом или представительством в зависимости от налогового планирования и долгосрочной стратегии. Помимо правильной структуры, составление коммерческих контрактов в соответствии с турецким правом напрямую влияет на устойчивость роста.\n\nКак адвокат по коммерческому праву в Анталье мы консультируем по полному спектру — регистрация компаний, совместные предприятия, дистрибуция и франчайзинг, споры акционеров. Налоговая эффективность, корпоративное управление и стратегия выхода — факторы, которые мы учитываем при разработке каждого договора.",
      ar: "تعدّ تركيا من الدول القلائل التي يكون فيها تأسيس شركة برأس مال أجنبي يسيراً وشفافاً نسبياً. ويمكن للمستثمرين الاختيار بين الشركات المحدودة وشركات المساهمة والفروع ومكاتب الاتصال وفقاً للتخطيط الضريبي والاستراتيجية بعيدة المدى. وإلى جانب الهيكل الصحيح، تؤثر صياغة العقود التجارية وفق القانون التركي مباشرةً في استدامة النمو.\n\nبصفتنا محامين تجاريين في أنطاليا، نقدم المشورة عبر السلسلة الكاملة — تأسيس الشركات والمشاريع المشتركة والتوزيع والامتياز ونزاعات المساهمين. كفاءة الضريبة وحوكمة الإدارة واستراتيجية الخروج عناصر نُراعيها في تصميم كل عقد.",
    },
    services: {
      tr: [
        "Limited ve anonim şirket kuruluşu, esas sözleşme tasarımı",
        "Yabancı sermayeli şirket için MERSİS ve ticaret sicil işlemleri",
        "Şube, irtibat ofisi ve franchise yapılarının kurulması",
        "Pay devri, sermaye artırımı ve ortaklıktan çıkarma süreçleri",
        "Distribütörlük, bayilik, ortak girişim ve hisse sahipliği sözleşmeleri",
        "Ticari sözleşme inceleme, müzakere ve revizyonu",
        "Ticari uyuşmazlıklarda dava, arabuluculuk ve tahkim",
        "İflas, konkordato ve borca batıklık süreçlerinde danışmanlık",
      ],
      en: [
        "Setup of limited and joint-stock companies and articles drafting",
        "MERSİS registration and trade registry filings for foreign-capital companies",
        "Establishment of branches, liaison offices, and franchise structures",
        "Share transfers, capital increases, and exclusion proceedings",
        "Distribution, dealership, joint-venture, and shareholders' agreements",
        "Review, negotiation, and revision of commercial contracts",
        "Commercial litigation, mediation, and arbitration",
        "Insolvency, composition, and over-indebtedness counsel",
      ],
      de: [
        "Gründung von GmbH und AG, Entwurf der Satzung",
        "MERSİS-Registrierung und Handelsregistereintragungen für ausländisch finanzierte Gesellschaften",
        "Errichtung von Niederlassungen, Verbindungsbüros und Franchise-Strukturen",
        "Anteilsübertragungen, Kapitalerhöhungen, Ausschlussverfahren",
        "Vertriebs-, Händler-, Joint-Venture- und Gesellschafterverträge",
        "Prüfung, Verhandlung und Überarbeitung von Handelsverträgen",
        "Handelsprozesse, Mediation und Schiedsverfahren",
        "Insolvenz-, Konkordat- und Überschuldungsberatung",
      ],
      ru: [
        "Учреждение ООО и АО, разработка устава",
        "Регистрация MERSİS и подача в торговый реестр для компаний с иностранным капиталом",
        "Открытие филиалов, представительств и франчайзинговых структур",
        "Передача долей, увеличение капитала, исключение участников",
        "Договоры дистрибуции, дилерства, совместного предприятия и акционеров",
        "Проверка, переговоры и пересмотр коммерческих контрактов",
        "Коммерческие иски, медиация и арбитраж",
        "Консультации по банкротству, мировому соглашению и неплатёжеспособности",
      ],
      ar: [
        "تأسيس الشركات المحدودة وشركات المساهمة وصياغة النظام الأساسي",
        "تسجيل MERSİS وإجراءات السجل التجاري للشركات ذات رأس المال الأجنبي",
        "إنشاء الفروع ومكاتب الاتصال وهياكل الامتياز",
        "نقل الحصص وزيادة رأس المال وإجراءات الاستبعاد",
        "عقود التوزيع والوكالة والمشاريع المشتركة واتفاقيات المساهمين",
        "مراجعة العقود التجارية والتفاوض عليها وتعديلها",
        "التقاضي التجاري والوساطة والتحكيم",
        "استشارات الإفلاس والصلح الواقي والإعسار",
      ],
    },
    process: {
      tr: "Bir yabancı yatırımcı için süreç önce hedef analizi ve uygun şirket tipinin belirlenmesi ile başlar. Ardından noter, MERSİS, ticaret sicil ve vergi dairesi nezdinde gerekli işlemler yürütülür; banka hesapları, e-imza ve ticari defterler açılır. Ortaklık ilişkisinin sürdürülmesinde esas sözleşme yanında pay sahipleri sözleşmesi ile yönetim haklarının ve çıkış senaryolarının açıkça düzenlenmesi tavsiye edilir. Uyuşmazlık çıktığında öncelikle arabuluculuk ve müzakere; sonuç alınamadığında ticari mahkeme veya tahkim yolu işletilir.",
      en: "For a foreign investor, the process begins with goal analysis and selecting the appropriate company type. The required steps before the notary, MERSİS, trade registry, and tax office are then carried out; bank accounts, electronic signatures, and commercial books are opened. To preserve the partnership relationship, alongside the articles of association, a shareholders' agreement clearly regulating governance rights and exit scenarios is advised. If a dispute arises, mediation and negotiation come first; failing that, commercial litigation or arbitration is pursued.",
      de: "Für einen ausländischen Investor beginnt der Prozess mit der Zielanalyse und der Wahl der geeigneten Gesellschaftsform. Anschließend werden die erforderlichen Schritte bei Notar, MERSİS, Handelsregister und Finanzamt durchgeführt; Bankkonten, elektronische Signaturen und Handelsbücher werden eingerichtet. Zur Erhaltung der Gesellschafterbeziehung empfiehlt sich neben der Satzung ein Gesellschaftervertrag, der Mitspracherechte und Ausstiegsszenarien klar regelt. Bei einem Streit gehen Mediation und Verhandlung vor; gelingt dies nicht, folgen Handelsprozess oder Schiedsverfahren.",
      ru: "Для иностранного инвестора процесс начинается с анализа целей и выбора подходящего типа компании. Затем выполняются необходимые шаги перед нотариусом, в MERSİS, торговом реестре и налоговой инспекции; открываются банковские счета, оформляются электронные подписи и коммерческие книги. Для сохранения партнёрских отношений, помимо устава, рекомендуется акционерное соглашение, чётко регулирующее права управления и сценарии выхода. При возникновении спора сначала применяются медиация и переговоры; при их неэффективности — коммерческий суд или арбитраж.",
      ar: "بالنسبة للمستثمر الأجنبي تبدأ العملية بتحليل الأهداف واختيار نوع الشركة المناسب. ثم تُنفَّذ الخطوات اللازمة أمام كاتب العدل وMERSİS والسجل التجاري ومصلحة الضرائب؛ وتُفتح الحسابات المصرفية وتُستخرج التوقيعات الإلكترونية والدفاتر التجارية. وللحفاظ على علاقة الشراكة، يُنصح بإبرام اتفاقية مساهمين إلى جانب النظام الأساسي، تنظم بوضوح حقوق الإدارة وسيناريوهات الخروج. وعند النزاع تُقدَّم الوساطة والتفاوض؛ وعند تعذرهما يُلجأ إلى المحكمة التجارية أو التحكيم.",
    },
    faqs: {
      tr: [
        {
          q: "Yabancı yatırımcı Türkiye'de şirket kurarken ortak yerli olmak zorunda mı?",
          a: "Hayır. Yabancı bir gerçek veya tüzel kişi Türkiye'de tek başına %100 ortağı olduğu bir şirket kurabilir. Türk vatandaşı ortak veya yerel müdür şartı bulunmamaktadır.",
        },
        {
          q: "Limited mi anonim şirket mi seçmeliyim?",
          a: "Limited şirket küçük-orta ölçekli, esnek yönetim isteyen yapılar için; anonim şirket ise yüksek sermaye, hisse devri kolaylığı ve halka açılma potansiyeli olan yapılar için tercih edilir. Vergisel etki ve uzun vadeli plana göre karar vermek gerekir.",
        },
        {
          q: "Türkiye'deki şirketim aleyhine yurtdışında dava açıldı; ne yapmalıyım?",
          a: "Davanın hangi ülke mahkemesinde açıldığı ve uygulanacak hukuk kritiktir. Sözleşmedeki yetkili mahkeme veya tahkim hükmü incelenir. Türkiye'de doğacak tenfiz aşamasına da hazırlık yapılması gerekir.",
        },
      ],
      en: [
        {
          q: "Must a foreign investor have a Turkish partner to form a company?",
          a: "No. A foreign individual or legal entity may incorporate a company in Turkey as the sole 100% shareholder. There is no Turkish-partner or local-manager requirement.",
        },
        {
          q: "Should I choose a limited liability or a joint-stock company?",
          a: "Limited liability companies suit small-to-medium structures with flexible management; joint-stock companies are preferred where higher capital, ease of share transfer, and IPO potential matter. The decision depends on tax impact and long-term strategy.",
        },
        {
          q: "A lawsuit has been filed abroad against my company in Turkey — what to do?",
          a: "The forum and applicable law are critical. The contractual jurisdiction or arbitration clause is reviewed. Preparation for any subsequent enforcement stage in Turkey is also necessary.",
        },
      ],
      de: [
        {
          q: "Muss ein ausländischer Investor einen türkischen Partner haben, um zu gründen?",
          a: "Nein. Eine ausländische natürliche oder juristische Person kann in der Türkei als alleiniger 100 %-Gesellschafter gründen. Es gibt keine Pflicht zu einem türkischen Partner oder lokalen Geschäftsführer.",
        },
        {
          q: "GmbH oder AG?",
          a: "GmbHs eignen sich für kleine und mittlere Strukturen mit flexibler Führung; AGs werden bevorzugt, wenn höheres Kapital, einfache Anteilsübertragung und IPO-Potenzial wichtig sind. Die Entscheidung hängt von Steuerwirkung und langfristiger Strategie ab.",
        },
        {
          q: "Im Ausland wurde gegen meine türkische Gesellschaft Klage erhoben — was tun?",
          a: "Forum und anwendbares Recht sind entscheidend. Die vertragliche Gerichtsstand- oder Schiedsklausel wird geprüft. Auch eine eventuelle spätere Vollstreckung in der Türkei ist vorzubereiten.",
        },
      ],
      ru: [
        {
          q: "Должен ли иностранный инвестор иметь турецкого партнёра?",
          a: "Нет. Иностранное физическое или юридическое лицо может зарегистрировать компанию в Турции как единственный 100% участник. Требований о турецком партнёре или местном директоре нет.",
        },
        {
          q: "ООО или АО?",
          a: "ООО подходят для малых и средних структур с гибким управлением; АО предпочтительнее при высоком капитале, лёгкой передаче акций и потенциале IPO. Решение зависит от налоговых последствий и долгосрочной стратегии.",
        },
        {
          q: "За рубежом подан иск против моей компании в Турции — что делать?",
          a: "Подсудность и применимое право критичны. Анализируется договорная оговорка о подсудности или арбитраже. Также готовится возможная стадия исполнения решения в Турции.",
        },
      ],
      ar: [
        {
          q: "هل يلزم على المستثمر الأجنبي وجود شريك تركي لتأسيس شركة؟",
          a: "لا. يمكن لشخص أجنبي طبيعي أو اعتباري تأسيس شركة في تركيا بصفته المالك الوحيد 100%. ولا يوجد اشتراط شريك تركي أو مدير محلي.",
        },
        {
          q: "هل أختار شركة محدودة أم شركة مساهمة؟",
          a: "الشركات المحدودة مناسبة للهياكل الصغيرة والمتوسطة بإدارة مرنة؛ بينما تُفضَّل شركات المساهمة عند الحاجة إلى رأس مال أعلى ونقل أسهم ميسّر وإمكانية إدراج. ويعتمد القرار على الأثر الضريبي والاستراتيجية بعيدة المدى.",
        },
        {
          q: "رُفعت دعوى ضد شركتي التركية في الخارج — ما العمل؟",
          a: "الجهة القضائية والقانون المنطبق حاسمان. تُراجَع شروط الاختصاص أو التحكيم في العقد. كما يجب التحضير لمرحلة التنفيذ المحتملة لاحقاً في تركيا.",
        },
      ],
    },
  },
  {
    slug: "miras-hukuku",
    metaTitle: {
      tr: "Antalya Miras Avukatı | Yabancılar İçin Tereke & Vasiyet Hukuku",
      en: "Antalya Inheritance Lawyer | Estate & Will Law for Foreigners",
      de: "Antalya Erbrechtsanwalt | Nachlass- & Testamentsrecht für Ausländer",
      ru: "Адвокат по наследству в Анталье | Право наследства и завещаний для иностранцев",
      ar: "محامي ميراث أنطاليا | قانون التركة والوصية للأجانب",
    },
    metaDescription: {
      tr: "Türkiye'de yabancıların miras intikali, vasiyetname düzenleme, mirasın reddi, tereke tespiti ve yabancı vasiyetlerin tanınmasında deneyimli Miras Hukuku avukatı.",
      en: "Experienced inheritance lawyer for foreigners in Turkey: estate transfer, will preparation, renunciation of inheritance, estate inventory, and recognition of foreign wills.",
      de: "Erfahrener Erbrechtsanwalt für Ausländer in der Türkei: Erbübergang, Testamentserrichtung, Erbausschlagung, Nachlassinventar und Anerkennung ausländischer Testamente.",
      ru: "Опытный адвокат по наследственному праву для иностранцев в Турции: оформление наследства, составление завещаний, отказ от наследства, инвентаризация и признание иностранных завещаний.",
      ar: "محامي ميراث متمرس للأجانب في تركيا: نقل التركات وإعداد الوصايا والتنازل عن الإرث وجرد التركة والاعتراف بالوصايا الأجنبية.",
    },
    intro: {
      tr: "Türkiye'de gayrimenkul, banka hesabı veya iştirak edinen pek çok yabancı, zamanla bu varlıkların miras yoluyla aile bireylerine intikali sorunuyla karşılaşır. Mirasçıların farklı ülkelerde yaşıyor olması, Türk vatandaşı olmamaları ve bazı dosyalarda yabancı bir mahkemenin verdiği kararla işlem yapılması gerekmesi süreci karmaşıklaştırır. Doğru bilgi ve doğru hukuki rehberlik olmaksızın bu dosyalar aylar hatta yıllarca sürüncemede kalabilir.\n\nAntalya'da miras avukatı olarak yabancı mirasçılara veraset belgesi alınmasından tereke tespitine, intikal işlemlerinden mirasın paylaşımına ve yabancı ülke vasiyetlerinin Türkiye'de tanınmasına kadar tüm süreçlerde destek vermekteyiz. Henüz hayattayken Türkiye'deki malvarlığını aile fertlerine doğru şekilde aktarmak isteyenlere de vasiyetname düzenlemesi ve miras sözleşmeleri konusunda rehberlik ediyoruz.",
      en: "Many foreigners who own property, bank accounts, or interests in Turkey eventually face the question of how those assets will pass to their heirs. The fact that heirs may live in different countries, may not hold Turkish citizenship, and in some files require action under foreign court orders adds significant complexity. Without proper information and legal guidance, such files can drag on for months or even years.\n\nAs an inheritance lawyer in Antalya, we support foreign heirs through every stage — issuance of certificates of inheritance, estate inventory, transfer procedures, division of the estate, and the recognition of foreign wills in Turkey. We also advise those who, while still living, wish to transfer their Turkish assets to family members properly, through wills and inheritance agreements.",
      de: "Viele Ausländer, die Immobilien, Bankkonten oder Beteiligungen in der Türkei besitzen, müssen sich irgendwann mit der Frage befassen, wie diese Vermögenswerte auf ihre Erben übergehen. Dass Erben in verschiedenen Ländern leben, möglicherweise keine türkische Staatsangehörigkeit haben und in manchen Akten ausländische Gerichtsbeschlüsse erforderlich sind, erhöht die Komplexität erheblich. Ohne fundierte Informationen und rechtliche Begleitung können solche Akten Monate oder Jahre dauern.\n\nAls Erbrechtsanwalt in Antalya begleiten wir ausländische Erben durch jede Phase — Erbschein, Nachlassinventar, Übertragungsverfahren, Aufteilung des Nachlasses und Anerkennung ausländischer Testamente in der Türkei. Auch beraten wir Personen, die zu Lebzeiten ihre türkischen Vermögenswerte rechtssicher an Familienangehörige übertragen möchten — mittels Testament und Erbverträgen.",
      ru: "Многие иностранцы, владеющие в Турции недвижимостью, счетами или долями, рано или поздно сталкиваются с вопросом передачи этих активов наследникам. Тот факт, что наследники живут в разных странах, могут не иметь турецкого гражданства, а в ряде дел требуются действия по решениям иностранных судов, существенно усложняет процесс. Без надлежащей информации и юридического сопровождения такие дела могут тянуться месяцами или годами.\n\nКак адвокат по наследству в Анталье мы сопровождаем иностранных наследников на всех этапах — выдача свидетельства о праве на наследство, инвентаризация, процедуры перехода прав, раздел наследства и признание иностранных завещаний в Турции. Также мы консультируем тех, кто при жизни хочет правильно передать своё турецкое имущество членам семьи — через завещания и наследственные соглашения.",
      ar: "كثير من الأجانب الذين يملكون عقارات أو حسابات مصرفية أو حصصاً في تركيا يواجهون عاجلاً أو آجلاً مسألة انتقال هذه الأصول إلى الورثة. وكون الورثة قد يقيمون في دول مختلفة وقد لا يحملون الجنسية التركية، وفي بعض الملفات تستوجب أوامر من محاكم أجنبية، يضيف تعقيداً كبيراً. ودون معلومات سليمة وتوجيه قانوني، يمكن أن تطول هذه الملفات أشهراً وحتى سنوات.\n\nبصفتنا محامي ميراث في أنطاليا، نواكب الورثة الأجانب في كل المراحل — استخراج حصر الإرث وجرد التركة وإجراءات النقل وتقسيم التركة والاعتراف بالوصايا الأجنبية في تركيا. كما نقدم المشورة لمن يرغبون أثناء حياتهم بنقل ممتلكاتهم في تركيا إلى أفراد العائلة بشكل صحيح عبر الوصايا واتفاقيات الميراث.",
    },
    services: {
      tr: [
        "Veraset ilamı / mirasçılık belgesi alımı",
        "Tereke tespiti, mühürleme ve defter tutma süreçleri",
        "Tapu, banka, taşıt ve şirket payı intikali işlemleri",
        "Mirasın reddi ve mirasta hak iddiası davaları",
        "Vasiyetname hazırlanması ve yorumu (resmi, el yazılı, sözlü)",
        "Saklı pay ve tenkis davaları",
        "Yabancı mahkeme vasiyet kararlarının Türkiye'de tanınması ve tenfizi",
        "Veraset ve intikal vergisi planlaması",
      ],
      en: [
        "Issuance of certificates of inheritance",
        "Estate inventory, sealing, and bookkeeping",
        "Title, bank, vehicle, and shareholding transfer procedures",
        "Renunciation of inheritance and claim-to-inheritance actions",
        "Drafting and interpretation of wills (official, holographic, oral)",
        "Reserved-share and reduction (tenkis) actions",
        "Recognition and enforcement of foreign court decisions on wills in Turkey",
        "Inheritance and transfer tax planning",
      ],
      de: [
        "Erteilung des Erbscheins",
        "Nachlassinventar, Versiegelung und Nachlassbuchführung",
        "Übertragungen von Grundbesitz, Bankkonten, Fahrzeugen und Geschäftsanteilen",
        "Erbausschlagung und Erbansprüche",
        "Errichtung und Auslegung von Testamenten (öffentlich, eigenhändig, mündlich)",
        "Pflichtteils- und Herabsetzungsklagen",
        "Anerkennung und Vollstreckung ausländischer Testamente in der Türkei",
        "Erbschaft- und Übertragungssteuerplanung",
      ],
      ru: [
        "Выдача свидетельства о праве на наследство",
        "Инвентаризация, опечатывание и ведение наследственной книги",
        "Перевод недвижимости, банковских счетов, транспорта и долей в компаниях",
        "Отказ от наследства и иски о признании прав наследования",
        "Составление и толкование завещаний (нотариальные, собственноручные, устные)",
        "Иски об обязательной доле и снижении (tenkis)",
        "Признание и приведение в исполнение иностранных завещаний в Турции",
        "Планирование налога на наследство и переход прав",
      ],
      ar: [
        "استخراج حصر الإرث",
        "جرد التركة والإغلاق ومسك الدفاتر",
        "إجراءات نقل العقار والحسابات المصرفية والمركبات وحصص الشركات",
        "التنازل عن الإرث ودعاوى ادعاء الإرث",
        "صياغة الوصايا وتفسيرها (رسمية وبخط اليد وشفهية)",
        "دعاوى الحصة المحفوظة وإنقاص الوصية",
        "الاعتراف بأحكام الوصايا الأجنبية وتنفيذها في تركيا",
        "تخطيط ضرائب الميراث والانتقال",
      ],
    },
    process: {
      tr: "Bir yabancı mirasçı için süreç çoğunlukla murisin ölümünün resmi makamlarca tespit edilmesi ve mirasçılık belgesinin (veraset ilamı) alınması ile başlar. Bu belge alındıktan sonra her bir varlık için ayrı intikal işlemleri (tapu, banka, sigorta, şirket pay defteri) yürütülür. Yabancı bir vasiyet bulunması halinde tanıma ve tenfiz davası açılması; mirasta saklı paya tecavüz iddiası varsa tenkis davası açılması gerekebilir. Süreç boyunca veraset ve intikal vergisinin doğru hesaplanması ve mirasın reddi opsiyonunun değerlendirilmesi de mali açıdan büyük önem taşır.",
      en: "For a foreign heir, the process typically begins with the official recording of the deceased's death and the issuance of the certificate of inheritance. Once obtained, individual transfer procedures are carried out for each asset (title, bank, insurance, shareholders' register). If a foreign will exists, recognition and enforcement proceedings may be required; reduction (tenkis) actions may be needed where reserved shares have been infringed. Throughout, accurate calculation of inheritance and transfer tax — and consideration of renunciation — is significant from a financial perspective.",
      de: "Für ausländische Erben beginnt der Prozess in der Regel mit der amtlichen Erfassung des Todes und der Ausstellung des Erbscheins. Nach Erhalt erfolgen Einzelübertragungen für jedes Vermögensstück (Grundbuch, Bank, Versicherung, Aktionärsregister). Bei einem ausländischen Testament kann ein Anerkennungs- und Vollstreckungsverfahren erforderlich sein; bei Pflichtteilsverletzung sind Herabsetzungsklagen möglich. Durchgehend sind die korrekte Berechnung der Erbschafts- und Übertragungssteuer und die Prüfung der Ausschlagung wirtschaftlich bedeutsam.",
      ru: "Для иностранного наследника процесс обычно начинается с официального оформления факта смерти наследодателя и выдачи свидетельства о праве на наследство. Затем для каждого актива (недвижимость, банк, страховка, реестр акционеров) проводятся отдельные процедуры перехода. При наличии иностранного завещания может потребоваться его признание и приведение в исполнение; при нарушении обязательной доли возможны иски о снижении (tenkis). На протяжении всего процесса важно правильно рассчитать налог на наследство и переход и оценить вариант отказа от наследства.",
      ar: "بالنسبة للوارث الأجنبي تبدأ العملية عادةً بتسجيل وفاة المورِّث رسمياً واستخراج حصر الإرث. وبعد الحصول عليه تتم إجراءات النقل المنفصلة لكل أصل (الطابو والبنك والتأمين وسجل المساهمين). وعند وجود وصية أجنبية قد تستلزم إجراءات اعتراف وتنفيذ؛ وعند انتهاك الحصة المحفوظة قد تُرفع دعاوى إنقاص. وطوال العملية يكتسب الحساب الدقيق لضريبة الميراث والانتقال — ودراسة خيار التنازل عن الإرث — أهمية مالية كبيرة.",
    },
    faqs: {
      tr: [
        {
          q: "Türkiye'de gayrimenkul sahibi yabancı bir mirasçı olarak ne yapmalıyım?",
          a: "Öncelikle veraset ilamı (mirasçılık belgesi) alınmalı; ardından tapu müdürlüğü nezdinde intikal işlemi yapılmalıdır. Ayrıca veraset ve intikal vergisi beyannamesi yasal süresi içinde verilmelidir. Belgelerin apostil ve tercüme süreci de ayrıca yürütülür.",
        },
        {
          q: "Yabancı bir vasiyetnameyle Türkiye'deki mülk paylaşımı yapılabilir mi?",
          a: "Doğrudan değil. Yabancı vasiyetnamenin Türkiye'de hukuki sonuç doğurması için tanıma ve tenfiz davası gerekmektedir. Karar Türk Hukuk düzenine aykırı olmadığı sürece tanınır.",
        },
        {
          q: "Mirası reddedebilir miyim?",
          a: "Evet. Mirasın reddi için yasal süre içinde sulh hukuk mahkemesine başvurulması gerekmektedir. Borç miktarının terekeyi aştığı durumlarda red ekonomik açıdan koruyucu olabilir.",
        },
      ],
      en: [
        {
          q: "I am a foreign heir to property in Turkey — what should I do?",
          a: "First obtain the certificate of inheritance, then carry out the transfer at the land registry. The inheritance and transfer tax declaration must also be filed within the statutory period. Apostille and translation of foreign documents are part of the process.",
        },
        {
          q: "Can a foreign will be used to distribute Turkish property?",
          a: "Not directly. To take legal effect in Turkey, a foreign will must be recognised and enforced through court proceedings. It will be recognised provided it is not contrary to Turkish public order.",
        },
        {
          q: "Can I renounce the inheritance?",
          a: "Yes. Renunciation must be filed before the civil court of peace within the statutory period. Where debts exceed the estate, renunciation can be financially protective.",
        },
      ],
      de: [
        {
          q: "Ich bin ausländischer Erbe einer Immobilie in der Türkei — was tun?",
          a: "Zunächst den Erbschein einholen, dann die Übertragung beim Grundbuchamt durchführen. Auch die Erbschafts- und Übertragungssteuererklärung ist innerhalb der gesetzlichen Frist abzugeben. Apostille und Übersetzung ausländischer Urkunden gehören zum Prozess.",
        },
        {
          q: "Kann ein ausländisches Testament den türkischen Nachlass regeln?",
          a: "Nicht unmittelbar. Damit ein ausländisches Testament in der Türkei rechtliche Wirkung entfaltet, ist eine Anerkennungs- und Vollstreckungsklage erforderlich. Steht es nicht im Widerspruch zum türkischen ordre public, wird es anerkannt.",
        },
        {
          q: "Kann ich die Erbschaft ausschlagen?",
          a: "Ja. Die Ausschlagung ist innerhalb der gesetzlichen Frist beim Friedensgericht einzulegen. Übersteigen die Schulden den Nachlass, kann die Ausschlagung wirtschaftlich schützend wirken.",
        },
      ],
      ru: [
        {
          q: "Я иностранный наследник недвижимости в Турции — что делать?",
          a: "Сначала получите свидетельство о праве на наследство, затем проведите оформление перехода права в кадастровом управлении. Декларация по налогу на наследство и переход подаётся в установленный срок. Апостиль и перевод иностранных документов — часть процесса.",
        },
        {
          q: "Можно ли распределить турецкое имущество по иностранному завещанию?",
          a: "Не напрямую. Чтобы иностранное завещание имело юридическую силу в Турции, необходима судебная процедура признания и приведения в исполнение. Если оно не противоречит публичному порядку Турции, оно будет признано.",
        },
        {
          q: "Могу ли я отказаться от наследства?",
          a: "Да. Отказ подаётся в мировой гражданский суд в установленный срок. Когда долги превышают наследство, отказ может быть финансово защитным.",
        },
      ],
      ar: [
        {
          q: "أنا وارث أجنبي لعقار في تركيا — ما العمل؟",
          a: "احصل أولاً على حصر الإرث، ثم نفّذ نقل الملكية لدى دائرة الطابو. كما يجب تقديم إقرار ضريبة الميراث والانتقال خلال المهلة القانونية. ويُعدّ التصديق والترجمة للوثائق الأجنبية جزءاً من العملية.",
        },
        {
          q: "هل يمكن استخدام وصية أجنبية لتوزيع ممتلكات تركية؟",
          a: "ليس مباشرة. لكي يكون للوصية الأجنبية أثر قانوني في تركيا، يلزم رفع دعوى اعتراف وتنفيذ. وإن لم تتعارض مع النظام العام التركي يُعترَف بها.",
        },
        {
          q: "هل يمكنني التنازل عن الإرث؟",
          a: "نعم. يُقدَّم التنازل أمام محكمة الصلح المدنية خلال المهلة القانونية. وعندما تتجاوز الديون التركة قد يكون التنازل حمايةً مالية.",
        },
      ],
    },
  },
  {
    slug: "bilisim-yapay-zeka-hukuku",
    metaTitle: {
      tr: "Antalya Bilişim & Yapay Zekâ Hukuku Avukatı | KVKK & Veri Koruması",
      en: "Antalya IT & AI Law Attorney | KVKK & Data Protection",
      de: "Antalya IT- & KI-Rechtsanwalt | KVKK & Datenschutz",
      ru: "Адвокат по IT- и AI-праву в Анталье | KVKK и защита данных",
      ar: "محامي تقنية المعلومات والذكاء الاصطناعي أنطاليا | KVKK وحماية البيانات",
    },
    metaDescription: {
      tr: "KVKK uyumu, veri ihlali, yazılım lisansı, e-ticaret ve yapay zekâ projelerinde Antalya'da deneyimli Bilişim Hukuku avukatı.",
      en: "Experienced IT law attorney in Antalya for KVKK compliance, data breaches, software licensing, e-commerce, and AI projects.",
      de: "Erfahrener IT-Rechtsanwalt in Antalya für KVKK-Compliance, Datenschutzverletzungen, Softwarelizenzen, E-Commerce und KI-Projekte.",
      ru: "Опытный адвокат по IT-праву в Анталье: соответствие KVKK, утечки данных, лицензирование ПО, электронная коммерция и AI-проекты.",
      ar: "محامي تقنية معلومات متمرس في أنطاليا للامتثال لـKVKK وحوادث تسريب البيانات وترخيص البرمجيات والتجارة الإلكترونية ومشاريع الذكاء الاصطناعي.",
    },
    intro: {
      tr: "Dijital dönüşüm, hukukun hızla evrim geçirdiği bir alan haline gelmiştir. Türkiye'de KVKK (Kişisel Verilerin Korunması Kanunu) ile başlayan veri koruma çerçevesi, bugün e-ticaretten yapay zekâ tabanlı uygulamalara kadar geniş bir yelpazeyi kapsamaktadır. Yabancı sermayeli teknoloji şirketleri ve startup'lar Türkiye pazarına girerken yalnızca ürün tasarımı değil veri saklama, sözleşmeler, kullanıcı haklarına ilişkin bildirimler ve veri ihlali yönetimi konularında da hukuki uyumu sağlamak zorundadır.\n\nBüromuz, yazılım lisans sözleşmelerinin müzakeresinden e-ticaret platformu mevzuat uyumluluğuna, KVKK aydınlatma metni ve veri envanteri çalışmasından yapay zekâ tabanlı ürünlerin sözleşmesel risk değerlendirmesine kadar Bilişim Hukuku alanının tüm bileşenlerinde danışmanlık vermektedir.",
      en: "Digital transformation has become an area where law evolves rapidly. Turkey's data protection framework, anchored by the KVKK (Personal Data Protection Law), now spans e-commerce, software, and AI-driven applications. Foreign-capital technology companies and startups entering the Turkish market must address not only product design but also data retention, contracts, user-rights notices, and data breach management in legal terms.\n\nOur firm advises across the full spectrum of IT law — software licensing negotiations, e-commerce platform compliance, KVKK privacy notices and data inventories, and contractual risk assessment for AI-based products.",
      de: "Die digitale Transformation ist ein Rechtsbereich, der sich rasch weiterentwickelt. Die in der Türkei mit dem KVKK (Datenschutzgesetz) verankerte Grundlage erstreckt sich heute über E-Commerce, Software bis zu KI-Anwendungen. Ausländisch finanzierte Technologieunternehmen und Startups, die in den türkischen Markt eintreten, müssen rechtlich Datenhaltung, Verträge, Nutzerrechtshinweise und Datenschutzvorfallmanagement adressieren — nicht nur Produktgestaltung.\n\nUnsere Kanzlei berät im gesamten IT-Recht — Softwarelizenzverhandlungen, E-Commerce-Compliance, KVKK-Informationspflichten und Datenbestandsanalysen sowie vertragliche Risikobewertung für KI-Produkte.",
      ru: "Цифровая трансформация — область права, развивающаяся очень быстро. Турецкая система защиты данных, основанная на KVKK (Закон о защите персональных данных), сегодня охватывает электронную коммерцию, ПО и AI-приложения. Технологические компании с иностранным капиталом и стартапы, выходящие на турецкий рынок, должны решать не только продуктовые, но и правовые вопросы: хранение данных, контракты, уведомления о правах пользователей и управление инцидентами с данными.\n\nНаша фирма консультирует по всему спектру IT-права — переговоры по лицензиям на ПО, соответствие e-commerce платформ, KVKK уведомления и инвентаризации данных, а также контрактная оценка рисков для AI-продуктов.",
      ar: "أصبح التحوّل الرقمي مجالاً قانونياً يتطور بسرعة. ويغطّي إطار حماية البيانات في تركيا، المرتكز على KVKK (قانون حماية البيانات الشخصية)، اليوم التجارة الإلكترونية والبرمجيات وتطبيقات الذكاء الاصطناعي. وعلى شركات التكنولوجيا برأس المال الأجنبي والشركات الناشئة التي تدخل السوق التركية معالجة الجوانب القانونية لتخزين البيانات والعقود وإشعارات حقوق المستخدمين وإدارة حوادث البيانات — لا تصميم المنتج فقط.\n\nيقدم مكتبنا الاستشارة في كامل قانون تقنية المعلومات — مفاوضات تراخيص البرمجيات والامتثال لمنصات التجارة الإلكترونية وإشعارات KVKK وجرد البيانات وتقييم المخاطر التعاقدية لمنتجات الذكاء الاصطناعي.",
    },
    services: {
      tr: [
        "KVKK uyum projeleri: aydınlatma metinleri, veri envanteri, açık rıza yapıları",
        "Veri ihlali bildirim ve KVKK Kurulu süreçlerinde temsil",
        "Yazılım lisans sözleşmeleri (SaaS, on-premise, OEM, dağıtım)",
        "E-ticaret mevzuatı, mesafeli sözleşme ve elektronik ticaret iletisi uyumu",
        "Yapay zekâ ürünleri için sözleşmesel risk ve sorumluluk düzenlemesi",
        "Bulut hizmetleri ve veri yurt dışına aktarımı sözleşmeleri",
        "Fikri mülkiyet, marka ve telif hakkı koruması",
        "Bilişim suçlarında savunma ve siber olay müdahale planı",
      ],
      en: [
        "KVKK compliance projects: privacy notices, data inventory, explicit consent flows",
        "Data breach notifications and proceedings before the KVKK Board",
        "Software licensing contracts (SaaS, on-premise, OEM, distribution)",
        "E-commerce regulation, distance contract, and electronic commercial message compliance",
        "Contractual risk and liability allocation for AI products",
        "Cloud services and cross-border data transfer contracts",
        "Intellectual property, trademark, and copyright protection",
        "Defence in cyber-crime cases and incident response planning",
      ],
      de: [
        "KVKK-Compliance-Projekte: Datenschutzerklärungen, Datenbestand, ausdrückliche Einwilligungsflüsse",
        "Meldung von Datenschutzvorfällen und Verfahren vor der KVKK-Behörde",
        "Softwarelizenzverträge (SaaS, On-Premise, OEM, Vertrieb)",
        "E-Commerce-Recht, Fernabsatzverträge und elektronische Werbe-Compliance",
        "Vertragliche Risiko- und Haftungsverteilung für KI-Produkte",
        "Cloud-Dienste und grenzüberschreitende Datenübertragungsverträge",
        "Gewerbliche Schutzrechte, Marken- und Urheberrechtsschutz",
        "Verteidigung in Cyber-Delikten und Incident-Response-Planung",
      ],
      ru: [
        "Проекты соответствия KVKK: уведомления о конфиденциальности, инвентаризация данных, согласия",
        "Уведомления об инцидентах и разбирательства в Совете KVKK",
        "Договоры лицензирования ПО (SaaS, on-premise, OEM, дистрибуция)",
        "Право e-commerce, дистанционные договоры, соответствие электронных коммерческих сообщений",
        "Распределение договорных рисков и ответственности по AI-продуктам",
        "Облачные сервисы и трансграничные договоры передачи данных",
        "Защита интеллектуальной собственности, товарных знаков и авторского права",
        "Защита по делам о киберпреступлениях и планы реагирования на инциденты",
      ],
      ar: [
        "مشاريع الامتثال لـKVKK: إشعارات الخصوصية وجرد البيانات وآليات الموافقة الصريحة",
        "إخطارات اختراق البيانات والإجراءات أمام مجلس KVKK",
        "عقود ترخيص البرمجيات (SaaS، on-premise، OEM، التوزيع)",
        "أنظمة التجارة الإلكترونية وعقود البيع عن بُعد والامتثال للرسائل التجارية الإلكترونية",
        "تخصيص المخاطر والمسؤوليات التعاقدية لمنتجات الذكاء الاصطناعي",
        "عقود الخدمات السحابية ونقل البيانات عبر الحدود",
        "حماية الملكية الفكرية والعلامات التجارية وحقوق المؤلف",
        "الدفاع في جرائم المعلوماتية وخطط الاستجابة للحوادث",
      ],
    },
    process: {
      tr: "Bir teknoloji şirketi için danışmanlığa, mevcut iş süreçleri ve veri akışlarının haritalanmasıyla başlarız. Eksiklikler tespit edilir; aydınlatma metinleri, açık rıza tasarımı, çerez politikası ve veri envanteri eş zamanlı kurulur. Sözleşmesel ilişkilerde tedarikçi, müşteri ve çalışan tarafında uygun KVKK ek protokolleri imzalanır. Veri ihlali yaşanması durumunda 72 saatlik kritik bildirim süresine uygun hareket edilir; etki değerlendirmesi yapılır ve KVKK Kurul ile etkin iletişim sağlanır.",
      en: "Counsel for a technology company begins by mapping current business processes and data flows. Gaps are identified, then privacy notices, consent design, cookie policies, and data inventories are deployed in parallel. Suitable KVKK addenda are signed with vendors, customers, and employees. In a breach scenario, the critical 72-hour notification window is observed; an impact assessment is run and effective communication with the KVKK Board is maintained.",
      de: "Die Beratung eines Technologieunternehmens beginnt mit der Abbildung aktueller Geschäftsprozesse und Datenflüsse. Lücken werden identifiziert, anschließend werden Datenschutzhinweise, Einwilligungsdesigns, Cookie-Richtlinien und Datenbestände parallel implementiert. Mit Lieferanten, Kunden und Mitarbeitern werden geeignete KVKK-Zusatzvereinbarungen unterzeichnet. Im Vorfallsfall wird die kritische 72-Stunden-Meldepflicht eingehalten; eine Folgenabschätzung wird durchgeführt und die Kommunikation mit der KVKK-Behörde effektiv geführt.",
      ru: "Консультирование технологической компании начинается с картирования текущих бизнес-процессов и потоков данных. Выявляются пробелы; параллельно внедряются уведомления о конфиденциальности, дизайн согласий, cookie-политики и инвентаризация данных. С поставщиками, клиентами и сотрудниками подписываются соответствующие приложения KVKK. В случае инцидента соблюдается критическое 72-часовое окно уведомления; проводится оценка воздействия и поддерживается эффективная связь с Советом KVKK.",
      ar: "تبدأ الاستشارة لشركة تقنية برسم خرائط لعمليات الأعمال وتدفقات البيانات الحالية. تُحدَّد الثغرات؛ ثم تُنشأ إشعارات الخصوصية وتصميم الموافقات وسياسات ملفات تعريف الارتباط وجرد البيانات بالتوازي. وتُوقَّع ملاحق KVKK المناسبة مع الموردين والعملاء والموظفين. وعند وقوع حادثة، تُحترم نافذة الإخطار الحرجة 72 ساعة؛ يُجرى تقييم للأثر ويُحافَظ على تواصل فعّال مع مجلس KVKK.",
    },
    faqs: {
      tr: [
        {
          q: "Veri ihlali yaşadık, ne yapmalıyız?",
          a: "İhlal tespit edildikten sonra teknik müdahale ile birlikte hukuki süreç de paralel yürütülmelidir. KVKK Kurulu'na 72 saat içinde bildirim ve etkilenen ilgili kişilere bilgilendirme yapılması gerekebilir. Etki değerlendirmesi ve hesap verebilirlik dosyası hazırlanmalıdır.",
        },
        {
          q: "Verileri yurtdışına aktarabilir miyiz?",
          a: "KVKK kapsamında yurtdışına veri aktarımı belirli koşullara tabidir. Standart sözleşme maddelerinin imzası, açık rıza alınması veya bağlayıcı kurumsal kuralların onayı gibi seçenekler değerlendirilmelidir.",
        },
        {
          q: "Yapay zekâ tabanlı ürün geliştiriyoruz, hukuki risk nasıl yönetilir?",
          a: "Eğitim verilerinin kaynağı ve hukuki dayanağı, çıktıların doğruluğu ve sorumluluk dağılımı, kullanıcıya yapılan açıklama ve insan denetimi mekanizmaları sözleşme ve aydınlatma metinleri ile somut biçimde düzenlenmelidir.",
        },
      ],
      en: [
        {
          q: "We have suffered a data breach — what should we do?",
          a: "Upon detection, technical response and legal steps must run in parallel. Notification to the KVKK Board within 72 hours and information to affected data subjects may be required. An impact assessment and accountability file should be prepared.",
        },
        {
          q: "Can we transfer data abroad?",
          a: "Cross-border transfer under KVKK is subject to specific conditions. Options such as standard contractual clauses, explicit consent, or approval of binding corporate rules should be evaluated.",
        },
        {
          q: "We're building an AI product — how to manage legal risk?",
          a: "Sources and legal basis of training data, accuracy of outputs, allocation of liability, user-facing disclosures, and human oversight must be regulated concretely in contracts and privacy notices.",
        },
      ],
      de: [
        {
          q: "Wir haben einen Datenschutzvorfall erlitten — was tun?",
          a: "Nach Feststellung müssen technische Reaktion und rechtliche Schritte parallel laufen. Innerhalb von 72 Stunden ist eine Meldung an die KVKK-Behörde sowie ggf. eine Information der Betroffenen zu prüfen. Eine Folgenabschätzung und Rechenschaftsdokumentation sind anzufertigen.",
        },
        {
          q: "Können wir Daten ins Ausland übermitteln?",
          a: "Eine Übermittlung unter KVKK ist an bestimmte Voraussetzungen geknüpft. Optionen wie Standardvertragsklauseln, ausdrückliche Einwilligung oder Genehmigung verbindlicher unternehmensinterner Vorschriften sind zu prüfen.",
        },
        {
          q: "Wir entwickeln ein KI-Produkt — wie managen wir rechtliche Risiken?",
          a: "Herkunft und Rechtsgrundlage der Trainingsdaten, Genauigkeit der Ausgaben, Haftungsverteilung, Hinweise an Nutzer und Mechanismen menschlicher Aufsicht sind in Verträgen und Datenschutzhinweisen konkret zu regeln.",
        },
      ],
      ru: [
        {
          q: "У нас произошла утечка данных — что делать?",
          a: "После обнаружения техническое реагирование и юридические шаги должны идти параллельно. Возможно требуется уведомление Совета KVKK в течение 72 часов и информирование затронутых субъектов данных. Должны быть подготовлены оценка воздействия и документация подотчётности.",
        },
        {
          q: "Можем ли мы передавать данные за рубеж?",
          a: "Трансграничная передача по KVKK подчинена определённым условиям. Следует оценить варианты — стандартные договорные оговорки, явное согласие или утверждённые обязательные корпоративные правила.",
        },
        {
          q: "Мы разрабатываем AI-продукт — как управлять правовым риском?",
          a: "Источники и правовая основа обучающих данных, точность выходов, распределение ответственности, раскрытия пользователю и механизмы человеческого контроля должны быть конкретно урегулированы в контрактах и уведомлениях о конфиденциальности.",
        },
      ],
      ar: [
        {
          q: "تعرضنا لاختراق بيانات — ماذا نفعل؟",
          a: "بعد الاكتشاف يجب أن تسير الاستجابة التقنية والخطوات القانونية بالتوازي. وقد يلزم الإخطار إلى مجلس KVKK خلال 72 ساعة وإبلاغ الأشخاص المعنيين. ويجب إعداد تقييم الأثر وملف المساءلة.",
        },
        {
          q: "هل يمكننا نقل البيانات إلى الخارج؟",
          a: "النقل عبر الحدود وفق KVKK يخضع لشروط محددة. ينبغي تقييم خيارات مثل البنود التعاقدية النموذجية أو الموافقة الصريحة أو اعتماد قواعد ملزِمة للشركات.",
        },
        {
          q: "نطور منتجاً بالذكاء الاصطناعي — كيف نديره قانونياً؟",
          a: "يجب تنظيم مصادر بيانات التدريب وأساسها القانوني، ودقة المخرجات، وتوزيع المسؤولية، وإشعارات المستخدم وآليات الإشراف البشري بشكل ملموس في العقود وإشعارات الخصوصية.",
        },
      ],
    },
  },
  {
    slug: "is-hukuku",
    metaTitle: {
      tr: "Antalya İş Hukuku Avukatı | Yabancı Çalışanlar & Şirketler İçin",
      en: "Antalya Labour Law Attorney | For Foreign Employees & Employers",
      de: "Antalya Arbeitsrechtsanwalt | Für ausländische Arbeitnehmer & Arbeitgeber",
      ru: "Адвокат по трудовому праву в Анталье | Для иностранных работников и работодателей",
      ar: "محامي قانون العمل في أنطاليا | للموظفين الأجانب وأصحاب العمل",
    },
    metaDescription: {
      tr: "Yabancı çalışanların ve uluslararası şirketlerin Türkiye'deki iş sözleşmesi, haksız fesih, kıdem tazminatı, fazla mesai ve mobbing davalarında deneyimli İş Hukuku avukatı.",
      en: "Experienced labour law attorney for foreign employees and international companies in Turkey: contracts, wrongful termination, severance, overtime, and workplace harassment claims.",
      de: "Erfahrener Arbeitsrechtsanwalt für ausländische Arbeitnehmer und internationale Unternehmen in der Türkei: Verträge, ungerechtfertigte Kündigung, Abfindung, Überstunden und Mobbing.",
      ru: "Опытный адвокат по трудовому праву для иностранных работников и международных компаний в Турции: договоры, незаконное увольнение, выходное пособие, сверхурочные и моббинг.",
      ar: "محامي قانون عمل متمرس للموظفين الأجانب والشركات الدولية في تركيا: العقود والفصل التعسفي ومكافأة نهاية الخدمة والعمل الإضافي والتنمر الوظيفي.",
    },
    intro: {
      tr: "Türkiye'de İş Hukuku, çalışanı görece güçlü biçimde koruyan bir denge üzerine kurulmuştur. Yabancı çalışanlar için bu denge çoğu zaman karmaşık görünür: dil engeli, çalışma izni statüsü ve şirket içi prosedürlerin farklılığı, kişinin hakkını arayışında belirsizlikler yaratabilir. Aynı zamanda işveren tarafında olan uluslararası şirketler de Türk İş Hukukunu doğru anlamadan yapacakları feshin ciddi tazminat sonuçları doğurabileceğini görür.\n\nAntalya'da İş Hukuku avukatı olarak hem yabancı çalışanların alacak ve haksız fesih davalarını yürütüyoruz, hem de işveren konumundaki şirketlerin önleyici hukuk danışmanlığı, sözleşme tasarımı, fesih protokolleri ve disiplin süreçlerinde yanında oluyoruz. Müzakere ve arabuluculuk yoluyla mümkün olduğunca hızlı ve iyi sonuçlar elde etmeyi tercih ederiz; gerektiğinde iş mahkemesinde dava da yürütürüz.",
      en: "Turkish labour law is structured around a balance that significantly protects employees. For foreign workers, this balance often appears complex: language, work-permit status, and differing internal procedures can create uncertainty when asserting one's rights. International employers, too, find that termination decisions made without a proper grasp of Turkish labour law can lead to serious compensation exposure.\n\nAs a labour law attorney in Antalya, we represent both foreign employees in claims for entitlements and wrongful termination, and international companies in preventive counsel, contract design, termination protocols, and disciplinary processes. We prefer fast, good outcomes through negotiation and mediation; where required, we litigate before the labour court.",
      de: "Das türkische Arbeitsrecht beruht auf einem Gleichgewicht, das Arbeitnehmer deutlich schützt. Für ausländische Beschäftigte erscheint dieses Gleichgewicht oft komplex: Sprache, Arbeitserlaubnisstatus und unterschiedliche interne Verfahren können Unsicherheiten bei der Durchsetzung schaffen. Auch internationale Arbeitgeber stellen fest, dass Kündigungen ohne fundiertes Verständnis des türkischen Arbeitsrechts zu erheblichen Abfindungsrisiken führen können.\n\nAls Arbeitsrechtsanwalt in Antalya vertreten wir ausländische Arbeitnehmer in Ansprüchen und ungerechtfertigten Kündigungen sowie internationale Unternehmen in präventiver Beratung, Vertragsgestaltung, Kündigungsprotokollen und Disziplinarprozessen. Wir bevorzugen schnelle, gute Ergebnisse durch Verhandlung und Mediation; bei Bedarf führen wir Verfahren vor dem Arbeitsgericht.",
      ru: "Трудовое право Турции построено на балансе, существенно защищающем работников. Для иностранных сотрудников этот баланс часто кажется сложным: язык, статус разрешения на работу и различающиеся внутренние процедуры могут создавать неопределённость при защите прав. Международные работодатели также сталкиваются с тем, что увольнения без верного понимания турецкого трудового права могут привести к значительной компенсационной нагрузке.\n\nКак адвокат по трудовому праву в Анталье мы представляем как иностранных работников по требованиям и незаконным увольнениям, так и международные компании по превентивному консультированию, разработке договоров, протоколам увольнения и дисциплинарным процессам. Мы предпочитаем быстрые и хорошие результаты через переговоры и медиацию; при необходимости — иск в трудовом суде.",
      ar: "يقوم قانون العمل التركي على توازن يحمي الموظف بقوة. ويبدو هذا التوازن للعاملين الأجانب معقداً في أحيان كثيرة: اللغة ووضع تصريح العمل والإجراءات الداخلية المختلفة قد تخلق غموضاً عند المطالبة بالحقوق. كما يكتشف أصحاب العمل الدوليون أن قرارات الفصل من دون فهم سليم لقانون العمل التركي قد تؤدي إلى تعويضات كبيرة.\n\nبصفتنا محامي قانون عمل في أنطاليا، نمثّل الموظفين الأجانب في مطالبات الاستحقاقات والفصل التعسفي، والشركات الدولية في الاستشارات الوقائية وتصميم العقود وبروتوكولات الفصل والإجراءات التأديبية. نفضّل النتائج السريعة والجيدة عبر التفاوض والوساطة؛ ونرفع الدعاوى أمام محكمة العمل عند الضرورة.",
    },
    services: {
      tr: [
        "İş sözleşmesi tasarımı (belirsiz/belirli süreli, çağrı, evden çalışma)",
        "Haksız fesih, kıdem ve ihbar tazminatı davaları",
        "Fazla mesai, hafta tatili ve ulusal bayram alacakları",
        "Mobbing ve eşitsiz davranış nedeniyle tazminat",
        "İş kazası ve meslek hastalığı süreçlerinde işveren ve işçi tarafı",
        "Yabancı çalışan istihdamı ve çalışma izni süreçlerinde uyum",
        "Toplu işten çıkarma ve performansa dayalı fesih protokolleri",
        "Arabuluculuk, ibraname ve fesih anlaşmaları",
      ],
      en: [
        "Drafting employment contracts (indefinite/fixed term, on-call, remote)",
        "Wrongful termination, severance, and notice claims",
        "Overtime, weekly rest, and public holiday entitlements",
        "Compensation for workplace harassment and unequal treatment",
        "Work accident and occupational disease cases (employer and employee side)",
        "Foreign worker employment and work-permit compliance",
        "Mass redundancy and performance-based termination protocols",
        "Mediation, releases, and termination agreements",
      ],
      de: [
        "Entwurf von Arbeitsverträgen (unbefristet/befristet, Abruf, Homeoffice)",
        "Ungerechtfertigte Kündigung, Abfindung und Kündigungsentschädigung",
        "Überstunden, Wochenruhe und Feiertagsansprüche",
        "Entschädigung für Mobbing und Ungleichbehandlung",
        "Arbeitsunfälle und Berufskrankheiten (Arbeitgeber- und Arbeitnehmerseite)",
        "Beschäftigung ausländischer Arbeitnehmer und Arbeitserlaubnis-Compliance",
        "Massenentlassung und leistungsbedingte Kündigungsprotokolle",
        "Mediation, Quittungen und Aufhebungsverträge",
      ],
      ru: [
        "Разработка трудовых договоров (бессрочных/срочных, по вызову, удалённых)",
        "Незаконное увольнение, выходное пособие и компенсация за уведомление",
        "Сверхурочные, еженедельный отдых и государственные праздники",
        "Компенсации за моббинг и неравное обращение",
        "Несчастные случаи и профзаболевания (сторона работодателя и работника)",
        "Найм иностранных работников и соответствие разрешений на работу",
        "Массовые сокращения и протоколы увольнения по результатам работы",
        "Медиация, расписки и соглашения о расторжении",
      ],
      ar: [
        "صياغة عقود العمل (محدّدة/غير محدّدة، عند الطلب، عن بُعد)",
        "الفصل التعسفي ومكافأة نهاية الخدمة وبدل الإشعار",
        "العمل الإضافي والاستراحة الأسبوعية والعطلات الرسمية",
        "التعويض عن التنمر الوظيفي والمعاملة غير المتساوية",
        "حوادث العمل والأمراض المهنية (جانب صاحب العمل والموظف)",
        "توظيف العاملين الأجانب والامتثال لتصاريح العمل",
        "الفصل الجماعي وبروتوكولات الفصل القائمة على الأداء",
        "الوساطة وبراءة الذمة واتفاقيات إنهاء العقد",
      ],
    },
    process: {
      tr: "İş Hukuku uyuşmazlıklarında başvurulan ilk yol arabuluculuktur. Arabuluculuk öncesi alacak hesabı, fesih sebeplerinin değerlendirmesi ve ibranameye yansıyacak kalemlerin tartışılması büromuz tarafından özenle yapılır. Anlaşma sağlanamadığında iş mahkemesinde dava süreci başlatılır; tanık beyanları, bilirkişi raporu ve özlük dosyası incelemeleri delil sunumu açısından kritiktir. Yabancı çalışan müvekkillerde sözleşmenin uygulanacak hukukunu, ücretin para birimini ve çalışma izni statüsünün davaya etkisini birlikte değerlendiririz.",
      en: "Mediation is the first stop in labour disputes. Before mediation, our firm meticulously calculates entitlements, assesses termination grounds, and discusses items to be reflected in the release. If no settlement is reached, proceedings before the labour court begin; witness testimony, expert reports, and personnel-file review are critical to evidence presentation. For foreign-employee clients, we jointly evaluate the law applicable to the contract, the currency of pay, and the impact of work-permit status on the case.",
      de: "Im Arbeitsrecht ist die Mediation die erste Anlaufstelle. Vor der Mediation berechnet unsere Kanzlei sorgfältig die Ansprüche, bewertet Kündigungsgründe und bespricht die Inhalte der Quittung. Kommt keine Einigung zustande, beginnen Verfahren vor dem Arbeitsgericht; Zeugenaussagen, Sachverständigengutachten und die Personalakte sind für die Beweisvorlage entscheidend. Für ausländische Mandanten bewerten wir das auf den Vertrag anwendbare Recht, die Lohnwährung und die Auswirkung des Arbeitserlaubnisstatus.",
      ru: "Первый этап в трудовых спорах — медиация. До медиации наша фирма тщательно рассчитывает выплаты, оценивает основания увольнения и обсуждает позиции, отражаемые в расписке. Если соглашение не достигнуто, начинается процесс в трудовом суде; свидетельские показания, экспертные отчёты и анализ личного дела критичны для доказывания. Для иностранных клиентов мы совместно оцениваем применимое к договору право, валюту оплаты и влияние статуса разрешения на работу.",
      ar: "الوساطة هي المحطة الأولى في نزاعات العمل. قبل الوساطة يحسب مكتبنا الاستحقاقات بدقة، ويقيّم أسباب الفصل، ويناقش البنود التي ستنعكس في إقرار براءة الذمة. وعند عدم التوصل لتسوية، تُرفع الدعوى أمام محكمة العمل؛ وتُعدّ شهادات الشهود وتقارير الخبراء وملف الموظف حاسمةً في تقديم الأدلة. وللعملاء الأجانب نقيّم القانون المنطبق على العقد وعملة الأجر وأثر وضع تصريح العمل.",
    },
    faqs: {
      tr: [
        {
          q: "İşten çıkarıldım, kıdem tazminatı alabilir miyim?",
          a: "En az bir yıl kıdemi olan ve haklı sebep olmaksızın iş sözleşmesi feshedilen veya kanunda öngörülen sebeplerle istifa eden çalışan kıdeme hak kazanır. Yabancı çalışanlar da bu haklardan yararlanır.",
        },
        {
          q: "İşveren maaşımı geç ödüyor, ne yapabilirim?",
          a: "Maaşın yasal sürede ödenmemesi çalışan açısından haklı fesih sebebidir. Bu sebeple yapılan fesih, kıdem ve diğer alacak haklarını korur. Önce yazılı uyarı, ardından gerekirse fesih ve dava yolu işletilir.",
        },
        {
          q: "Çalışma izni iptal edilirse iş sözleşmesi otomatik son bulur mu?",
          a: "Çalışma iznini sürdüremeyen yabancı çalışan iş sözleşmesini sürdüremez; ancak işveren feshinin haklı sayılıp sayılmayacağı her dosyaya göre değerlendirilir. Tazminat haklarınız iptalin sebebi ve süreç yönetimine göre değişir.",
        },
      ],
      en: [
        {
          q: "I was dismissed — can I claim severance?",
          a: "An employee with at least one year of service whose contract is terminated without just cause, or who resigns on grounds set out in the law, is entitled to severance. Foreign employees benefit from this right as well.",
        },
        {
          q: "My employer is paying my salary late — what can I do?",
          a: "Failure to pay wages within the statutory period is just cause for the employee to terminate. Such a termination preserves severance and other entitlements. Written notice is issued first, then termination and litigation if needed.",
        },
        {
          q: "If my work permit is cancelled, does my employment contract automatically end?",
          a: "A foreign worker who cannot maintain a work permit cannot continue the contract; however, whether the employer's termination is justified depends on the file. Compensation rights vary with the cancellation reason and how the process is handled.",
        },
      ],
      de: [
        {
          q: "Ich wurde gekündigt — habe ich Anspruch auf Abfindung?",
          a: "Ein Arbeitnehmer mit mindestens einjähriger Betriebszugehörigkeit, dessen Vertrag ohne wichtigen Grund gekündigt wird oder der aus gesetzlich vorgesehenen Gründen kündigt, hat Anspruch auf Abfindung. Auch ausländische Arbeitnehmer profitieren davon.",
        },
        {
          q: "Mein Arbeitgeber zahlt das Gehalt verspätet — was tun?",
          a: "Eine verspätete Zahlung ist ein wichtiger Grund zur Kündigung durch den Arbeitnehmer. Eine entsprechende Kündigung wahrt Abfindung und sonstige Ansprüche. Zunächst wird schriftlich gemahnt, dann ggf. gekündigt und Klage erhoben.",
        },
        {
          q: "Wenn meine Arbeitserlaubnis entzogen wird, endet der Vertrag automatisch?",
          a: "Ein Ausländer ohne fortbestehende Arbeitserlaubnis kann den Vertrag nicht fortsetzen; ob die Arbeitgeberkündigung gerechtfertigt ist, hängt vom Einzelfall ab. Entschädigungsansprüche variieren nach Grund und Verfahrensführung.",
        },
      ],
      ru: [
        {
          q: "Меня уволили — могу ли я претендовать на выходное пособие?",
          a: "Работник со стажем не менее одного года, чей договор расторгнут без уважительной причины или который уходит по основаниям закона, имеет право на выходное пособие. Это право распространяется и на иностранных работников.",
        },
        {
          q: "Работодатель платит зарплату с задержкой — что делать?",
          a: "Невыплата зарплаты в установленный срок — уважительная причина для увольнения по инициативе работника. Такое увольнение сохраняет право на выходное пособие и другие выплаты. Сначала направляется письменное уведомление, затем — увольнение и иск.",
        },
        {
          q: "Если разрешение на работу аннулировано, прекращается ли договор автоматически?",
          a: "Иностранный работник, не имеющий действующего разрешения на работу, не может продолжать договор; обоснованность увольнения работодателем оценивается индивидуально. Размер компенсации зависит от причины аннулирования и порядка ведения процесса.",
        },
      ],
      ar: [
        {
          q: "تم فصلي — هل يحق لي الحصول على مكافأة نهاية الخدمة؟",
          a: "يستحق المكافأة الموظف الذي أمضى سنة على الأقل وأُنهي عقده دون سبب مشروع أو استقال للأسباب المنصوص عليها في القانون. ويستفيد الموظف الأجنبي من هذا الحق أيضاً.",
        },
        {
          q: "صاحب العمل يتأخر في دفع راتبي — ماذا أفعل؟",
          a: "عدم دفع الأجر في المهلة القانونية سبب مشروع لإنهاء العقد من قبل الموظف. يحفظ هذا الإنهاء حق المكافأة وسائر الاستحقاقات. يُرسَل أولاً إخطار كتابي، ثم الإنهاء والتقاضي عند الحاجة.",
        },
        {
          q: "إذا أُلغي تصريح عملي، هل ينتهي العقد تلقائياً؟",
          a: "العامل الأجنبي الذي لا يستطيع المحافظة على تصريح العمل لا يستطيع متابعة العقد؛ ويتوقف اعتبار فصل صاحب العمل مشروعاً على ملف القضية. وتختلف حقوق التعويض حسب سبب الإلغاء وإدارة العملية.",
        },
      ],
    },
  },
  {
    slug: "kira-hukuku",
    metaTitle: {
      tr: "Antalya Kira Hukuku Avukatı | Tahliye, Kira Tespiti & Kiracı Hakları",
      en: "Rental Law Lawyer Antalya | Eviction, Rent Determination & Tenant Rights",
      de: "Mietrechtsanwalt Antalya | Räumung, Mietfestsetzung & Mieterrechte",
      ru: "Адвокат по арендному праву в Анталье | Выселение, определение арендной платы и права арендатора",
      ar: "محامي قانون الإيجار في أنطاليا | الإخلاء وتحديد الإيجار وحقوق المستأجر",
    },
    metaDescription: {
      tr: "Antalya'da kira hukuku avukatı olarak tahliye davaları, kira tespit ve uyarlama, depozito uyuşmazlıkları ve yabancı kiracıların hakları konularında deneyimli hukuki destek sunuyoruz.",
      en: "As a rental law lawyer in Antalya, we provide experienced legal support in eviction cases, rent determination and adjustment, deposit disputes, and the rights of foreign tenants.",
      de: "Als Mietrechtsanwalt in Antalya bieten wir erfahrene rechtliche Unterstützung bei Räumungsverfahren, Mietfestsetzung und -anpassung, Kautionsstreitigkeiten und den Rechten ausländischer Mieter.",
      ru: "Как адвокат по арендному праву в Анталье, мы оказываем юридическую помощь по делам о выселении, определении и пересмотре арендной платы, спорам о залоге и правам иностранных арендаторов.",
      ar: "بوصفنا محامي قانون الإيجار في أنطاليا، نقدم دعماً قانونياً في قضايا الإخلاء وتحديد الإيجار وتعديله ونزاعات التأمين وحقوق المستأجرين الأجانب.",
    },
    intro: {
      tr: "Türk Borçlar Kanunu çerçevesinde kira ilişkilerini düzenleyen hukuki kurallar, hem kiracıyı hem kiraya vereni koruyucu bir denge üzerine inşa edilmiştir. Ancak bu dengeyi pratikte kullanabilmek; sözleşmenin doğru hazırlanmasından başlayarak, uyuşmazlık çıktığında doğru yasal yolu seçmeye kadar uzanan süreçte hukuki rehberlik gerektirir.\n\nAntalya'da kira uyuşmazlıklarındaki deneyimimizle; kiraya verenin zamanında ve hukuka uygun biçimde tahliye alabilmesi ya da kiracının haksız müdahalelere karşı haklarını koruyabilmesi için en etkili yolu birlikte belirliyoruz. Yabancı uyruklu kiracı ve mülk sahiplerine de aynı özende Türkçe ve İngilizce hizmet sunuyoruz.",
      en: "The legal rules governing rental relationships under the Turkish Code of Obligations are built on a balance that protects both tenant and landlord. Putting that balance to practical use — from drafting a sound lease agreement to choosing the right legal route when a dispute arises — requires proper legal guidance.\n\nDrawing on our experience in rental disputes in Antalya, we work with clients to identify the most effective path: whether that means securing a timely, lawful eviction for the landlord or protecting a tenant's rights against unlawful interference. We provide the same careful support to foreign tenants and property owners, in both Turkish and English.",
      de: "Die Vorschriften des türkischen Obligationenrechts, die Mietverhältnisse regeln, sind auf eine Balance aufgebaut, die sowohl Mieter als auch Vermieter schützt. Diese Balance praktisch nutzbar zu machen — von der Erstellung eines soliden Mietvertrags bis zur Wahl des richtigen Rechtswegs im Streitfall — erfordert eine fundierte rechtliche Begleitung.\n\nAus unserer Erfahrung mit Mietstreitigkeiten in Antalya erarbeiten wir gemeinsam mit unseren Mandanten den wirksamsten Weg: ob es darum geht, für den Vermieter eine rechtzeitige und rechtmäßige Räumung zu sichern oder die Rechte eines Mieters gegen rechtswidrige Eingriffe zu schützen. Ausländischen Mietern und Eigentümern stehen wir mit derselben Sorgfalt auf Türkisch und Englisch zur Verfügung.",
      ru: "Правовые нормы, регулирующие арендные отношения по Обязательственному кодексу Турции, построены на балансе, защищающем как арендатора, так и арендодателя. Использовать этот баланс на практике — от составления грамотного договора аренды до выбора правильного юридического пути при возникновении спора — требует квалифицированного юридического сопровождения.\n\nОпираясь на опыт в арендных спорах в Анталье, мы вместе с клиентами определяем наиболее эффективный путь: будь то обеспечение своевременного и законного выселения для арендодателя или защита прав арендатора от незаконного вмешательства. Иностранным арендаторам и владельцам недвижимости мы оказываем такую же тщательную поддержку на турецком и английском языках.",
      ar: "القواعد القانونية المنظِّمة لعلاقات الإيجار في إطار قانون الالتزامات التركي مبنية على توازن يحمي كلاً من المستأجر والمؤجر. تطبيق هذا التوازن عملياً — من صياغة عقد إيجار سليم إلى اختيار المسار القانوني الصحيح عند نشوء نزاع — يستلزم توجيهاً قانونياً سليماً.\n\nانطلاقاً من خبرتنا في نزاعات الإيجار في أنطاليا، نعمل مع موكلينا على تحديد المسار الأكثر فاعلية: سواء أكان تأمين إخلاء في الوقت المناسب وبصورة قانونية للمؤجر، أم حماية حقوق المستأجر من التدخل غير المشروع. نقدم الدعم ذاته للمستأجرين الأجانب وأصحاب العقارات باللغتين التركية والإنجليزية.",
    },
    services: {
      tr: [
        "Kira sözleşmelerinin hazırlanması, incelenmesi ve müzakeresi",
        "Kira tespit ve uyarlama davaları",
        "Tahliye davaları: kira bedelinin ödenmemesi, sözleşmeye aykırılık, ihtiyaç ve yeniden inşaat",
        "Kiracı hakları: haksız tahliye ve yasal sınırı aşan kira artışlarına itiraz",
        "Depozito iadesi uyuşmazlıkları ve hasar tazminatı talepleri",
        "Ticari kira sözleşmeleri ve işyeri tahliye davaları",
        "Kısa dönem kiralama (günlük/haftalık) sözleşmeleri ve hukuki danışmanlık",
        "Yabancı kiracı ve kiraya verenlerin hak ve yükümlülükleri",
      ],
      en: [
        "Drafting, reviewing, and negotiating lease agreements",
        "Rent determination and rent adjustment proceedings",
        "Eviction cases: non-payment, breach of contract, landlord's own need, and reconstruction",
        "Tenant rights: challenging unlawful eviction and above-limit rent increases",
        "Deposit refund disputes and damage compensation claims",
        "Commercial lease agreements and business premises eviction proceedings",
        "Short-term rental (daily/weekly) contracts and legal advice",
        "Rights and obligations of foreign tenants and landlords",
      ],
      de: [
        "Erstellung, Prüfung und Verhandlung von Mietverträgen",
        "Mietfestsetzungs- und Mietanpassungsverfahren",
        "Räumungsverfahren: Nichtzahlung, Vertragsverletzung, Eigenbedarf und Neubau",
        "Mieterrechte: Anfechtung rechtswidriger Räumungen und überhöhter Mieterhöhungen",
        "Kautionsrückgabe-Streitigkeiten und Schadensersatzansprüche",
        "Gewerbemietverträge und Räumungsverfahren für Geschäftsräume",
        "Kurzzeitmietverträge (täglich/wöchentlich) und Rechtsberatung",
        "Rechte und Pflichten ausländischer Mieter und Vermieter",
      ],
      ru: [
        "Составление, проверка и согласование договоров аренды",
        "Процедуры определения и пересмотра арендной платы",
        "Дела о выселении: неоплата, нарушение договора, личная нужда арендодателя, реконструкция",
        "Права арендатора: оспаривание незаконного выселения и сверхнормативного повышения аренды",
        "Споры о возврате залога и требования о возмещении ущерба",
        "Коммерческие договоры аренды и выселение из нежилых помещений",
        "Краткосрочные договоры аренды (посуточно/понедельно) и консультации",
        "Права и обязанности иностранных арендаторов и арендодателей",
      ],
      ar: [
        "صياغة عقود الإيجار ومراجعتها والتفاوض عليها",
        "إجراءات تحديد الإيجار وتعديله",
        "قضايا الإخلاء: عدم السداد والإخلال بالعقد وحاجة المؤجر الشخصية وإعادة البناء",
        "حقوق المستأجر: الطعن في الإخلاء غير المشروع والزيادات الإيجارية الزائدة عن الحد",
        "نزاعات استرداد مبلغ التأمين ومطالبات التعويض عن الأضرار",
        "عقود الإيجار التجاري وإجراءات إخلاء المحلات التجارية",
        "عقود الإيجار قصيرة الأمد (يومي/أسبوعي) والمشورة القانونية",
        "حقوق المستأجرين والمؤجرين الأجانب وواجباتهم",
      ],
    },
    process: {
      tr: "Kira uyuşmazlıklarında önce kira sözleşmesi, taraflar arasındaki yazışmalar ve ilgili belgeler ayrıntılı biçimde incelenir. Müvekkille birlikte talep ve beklentiler netleştirilir; tahliye, kira tespiti veya uyarlama seçeneklerinden hangisinin öncelikli olduğu belirlenir. Mümkün olan durumlarda arabuluculuk veya uzlaşı yolu tercih edilir; değilse dava süreci başlatılarak müvekkil her aşamada bilgilendirilir.",
      en: "In rental disputes, we begin with a thorough review of the lease agreement, correspondence between the parties, and related documents. Together with the client, we clarify objectives and determine the priority route — eviction, rent determination, or adjustment. Where possible, mediation or negotiated settlement is preferred; otherwise, litigation is initiated and the client is kept fully informed at every stage.",
      de: "Bei Mietstreitigkeiten beginnen wir mit einer eingehenden Prüfung des Mietvertrags, des Schriftverkehrs zwischen den Parteien und der zugehörigen Unterlagen. Gemeinsam mit dem Mandanten werden die Ziele geklärt und der vorrangige Weg bestimmt — Räumung, Mietfestsetzung oder Anpassung. Wo möglich, werden Mediation oder eine verhandelte Einigung bevorzugt; andernfalls wird ein Gerichtsverfahren eingeleitet und der Mandant auf jedem Schritt informiert.",
      ru: "В арендных спорах мы начинаем с тщательного изучения договора аренды, переписки между сторонами и сопутствующих документов. Совместно с клиентом уточняются цели и определяется приоритетный путь — выселение, определение или пересмотр арендной платы. По возможности предпочтение отдаётся медиации или договорному урегулированию; в противном случае инициируется судебный процесс, и клиент информируется на каждом этапе.",
      ar: "في نزاعات الإيجار، نبدأ بمراجعة شاملة لعقد الإيجار والمراسلات بين الطرفين والوثائق ذات الصلة. نوضح مع الموكل الأهداف ونحدد المسار الأولوي — الإخلاء أو تحديد الإيجار أو تعديله. حيثما أمكن يُفضَّل التوسط أو التسوية التفاوضية؛ وإلا يُبادر إلى التقاضي مع إبقاء الموكل على اطلاع تام في كل مرحلة.",
    },
    faqs: {
      tr: [
        {
          q: "Kiraya veren, sözleşme süresi dolmadan kiracıyı çıkarabilir mi?",
          a: "Türk hukukunda kiracı, konut ve çatılı işyeri kiralarında güçlü bir koruma altındadır. Sözleşme süresinin dolması tek başına tahliye gerekçesi oluşturmaz. Tahliye ancak; kira bedelinin ödenmemesi, sözleşmeye aykırı kullanım, kiraya verenin veya yakınlarının ihtiyacı ya da yeniden inşaat ve esaslı onarım gibi Borçlar Kanunu'nda sayılan nedenlerle dava yoluyla mümkündür.",
        },
        {
          q: "Yıllık kira artışında yasal sınır nedir?",
          a: "Konut kiralarında yıllık artış oranı, Türkiye İstatistik Kurumu'nun açıkladığı TÜFE 12 aylık ortalamasıyla sınırlıdır. Bu oranı aşan artış talepleri hukuken geçersizdir; kiracı bu talebi reddedebilir ve fazla ödediği tutarları geri talep edebilir.",
        },
        {
          q: "Yabancı uyruklu biri Türkiye'de kiracı olabilir mi?",
          a: "Evet. Geçerli ikamet iznine sahip yabancı uyruklu kişiler Türkiye'de kira sözleşmesi yapabilir. Sözleşmenin hazırlanması aşamasında hukuki danışmanlık almak, ileride çıkabilecek uyuşmazlıkları büyük ölçüde önler.",
        },
        {
          q: "Depozito iade edilmezse ne yapabilirim?",
          a: "Kiracı, kiralananı sözleşmeye uygun teslim etmesine karşın depozito iade edilmiyorsa önce yazılı ihtarname gönderilmeli, ardından arabuluculuk yoluna başvurulmalı; anlaşma sağlanamazsa icra takibi veya sulh hukuk mahkemesinde dava açılabilir.",
        },
      ],
      en: [
        {
          q: "Can a landlord evict a tenant before the lease expires?",
          a: "Under Turkish law, tenants enjoy strong protection in residential and roofed commercial leases. The expiry of the contract term alone does not constitute grounds for eviction. Eviction is only possible through court action on the grounds specified in the Code of Obligations — non-payment of rent, use contrary to the agreement, the landlord's or a close family member's personal need, or reconstruction and major renovation.",
        },
        {
          q: "What is the legal cap on annual rent increases?",
          a: "For residential leases, the annual increase is capped at the 12-month average of the Consumer Price Index published by the Turkish Statistical Institute. Demands exceeding this rate are legally void; the tenant has the right to refuse them and reclaim any excess already paid.",
        },
        {
          q: "Can a foreign national rent property in Turkey?",
          a: "Yes. Foreign nationals holding a valid residence permit may enter into lease agreements in Turkey. Obtaining legal advice at the contract stage substantially reduces the risk of future disputes.",
        },
        {
          q: "What can I do if my deposit is not refunded?",
          a: "If the tenant has returned the property in accordance with the contract but the deposit is withheld, the first step is a formal written notice. Mediation is then mandatory before any court action; if it fails, enforcement proceedings or a claim before the civil court of peace can follow.",
        },
      ],
      de: [
        {
          q: "Kann ein Vermieter einen Mieter vor Ablauf des Mietvertrags kündigen?",
          a: "Nach türkischem Recht genießen Mieter in Wohn- und überdachten Gewerberaummietverhältnissen einen starken Schutz. Der bloße Ablauf der Vertragslaufzeit begründet noch keinen Räumungsanspruch. Eine Räumung ist nur im Klageweg auf der Grundlage der im Obligationenrecht aufgeführten Gründe möglich: Nichtzahlung der Miete, vertragswidrige Nutzung, Eigenbedarf des Vermieters oder eines nahen Angehörigen sowie Neubau oder umfassende Sanierung.",
        },
        {
          q: "Welche gesetzliche Obergrenze gilt für die jährliche Mieterhöhung?",
          a: "Bei Wohnraummietverhältnissen ist die jährliche Mieterhöhung auf den 12-Monats-Durchschnitt des Verbraucherpreisindex begrenzt, den das Türkische Statistische Institut veröffentlicht. Forderungen, die diesen Satz überschreiten, sind rechtlich unwirksam; der Mieter hat das Recht, sie abzulehnen und bereits zu viel gezahlte Beträge zurückzuverlangen.",
        },
        {
          q: "Kann ein Ausländer in der Türkei Mieter sein?",
          a: "Ja. Ausländische Staatsangehörige mit gültigem Aufenthaltstitel können in der Türkei Mietverträge abschließen. Eine rechtliche Beratung in der Vertragsphase reduziert das Risiko künftiger Streitigkeiten erheblich.",
        },
        {
          q: "Was kann ich tun, wenn meine Kaution nicht zurückgezahlt wird?",
          a: "Hat der Mieter die Mietsache vertragsgemäß zurückgegeben, die Kaution wird aber einbehalten, sollte zunächst eine schriftliche Mahnung versandt werden. Vor einem Gerichtsverfahren ist eine Mediation zwingend; schlägt sie fehl, kann ein Vollstreckungsverfahren eingeleitet oder Klage beim Friedensgericht erhoben werden.",
        },
      ],
      ru: [
        {
          q: "Может ли арендодатель выселить арендатора до истечения срока аренды?",
          a: "По турецкому праву арендаторы пользуются сильной защитой в жилищных и коммерческих договорах аренды. Истечение срока договора само по себе не является основанием для выселения. Выселение возможно только через суд по основаниям Обязательственного кодекса: неоплата аренды, использование вразрез с договором, личная нужда арендодателя или близкого родственника, реконструкция или капитальный ремонт.",
        },
        {
          q: "Каков законный предел ежегодного повышения арендной платы?",
          a: "Для жилой недвижимости повышение ограничено 12-месячным средним значением индекса потребительских цен, публикуемого Турецким статистическим институтом. Требования, превышающие этот показатель, юридически недействительны; арендатор вправе отказаться и потребовать возврата излишне уплаченного.",
        },
        {
          q: "Может ли иностранный гражданин арендовать жильё в Турции?",
          a: "Да. Иностранные граждане с действительным видом на жительство могут заключать договоры аренды в Турции. Юридическая консультация на этапе составления договора существенно снижает риск споров в будущем.",
        },
        {
          q: "Что делать, если залог не возвращают?",
          a: "Если арендатор сдал имущество согласно договору, но залог удерживается, сначала направляется письменное уведомление. Перед обращением в суд обязательна медиация; при её неудаче можно инициировать исполнительное производство или подать иск в мировой суд.",
        },
      ],
      ar: [
        {
          q: "هل يستطيع المؤجر إخلاء المستأجر قبل انتهاء مدة العقد؟",
          a: "يتمتع المستأجرون بموجب القانون التركي بحماية قوية في عقود الإيجار السكنية والتجارية المسقوفة. لا يُشكّل انتهاء مدة العقد وحده أساساً للإخلاء. لا يُمكّن الإخلاء إلا عبر القضاء استناداً إلى الأسباب المحددة في قانون الالتزامات: عدم سداد الإيجار أو الاستخدام المخالف للعقد أو الحاجة الشخصية للمؤجر أو أحد أفراد أسرته المقربين أو إعادة البناء أو التجديد الجوهري.",
        },
        {
          q: "ما الحد القانوني للزيادة السنوية في الإيجار؟",
          a: "بالنسبة للإيجار السكني، تُحدَّد الزيادة بمتوسط مؤشر أسعار المستهلكين لمدة 12 شهراً الذي ينشره معهد الإحصاء التركي. المطالبات التي تتجاوز هذا المعدل باطلة قانونياً؛ للمستأجر الحق في رفضها واسترداد ما دُفع زيادةً.",
        },
        {
          q: "هل يستطيع المواطن الأجنبي استئجار عقار في تركيا؟",
          a: "نعم. يحق للمواطنين الأجانب الحاملين لتصريح إقامة ساري المفعول إبرام عقود إيجار في تركيا. الحصول على استشارة قانونية عند إعداد العقد يُقلل إلى حد كبير من مخاطر النزاعات المستقبلية.",
        },
        {
          q: "ماذا أفعل إذا لم يُردّ إليّ مبلغ التأمين؟",
          a: "إذا أعاد المستأجر العقار وفق العقد ولم يُردّ مبلغ التأمين، فيُرسَل أولاً إشعار كتابي رسمي. الوساطة إلزامية قبل اللجوء إلى القضاء؛ وإن فشلت، يمكن المضيّ في إجراءات التنفيذ أو رفع دعوى أمام محكمة الصلح.",
        },
      ],
    },
  },
  {
    slug: "idare-hukuku",
    metaTitle: {
      tr: "Antalya İdare Hukuku Avukatı | İptal Davası & İdari İşlem İtirazları",
      en: "Antalya Administrative Law Attorney | Cancellation Suits & Appeals",
      de: "Antalya Verwaltungsrechtsanwalt | Aufhebungsklagen & Rechtsbehelfe",
      ru: "Адвокат по административному праву в Анталье | Иски об отмене и обжалования",
      ar: "محامي القانون الإداري في أنطاليا | دعاوى الإلغاء والطعون",
    },
    metaDescription: {
      tr: "Vize reddi, oturma izni iptali, sınır dışı, idari para cezası ve diğer idari işlemlere karşı Antalya idare mahkemesinde iptal ve tam yargı davaları.",
      en: "Cancellation and full-redress actions before the Antalya Administrative Court against visa refusals, residence cancellations, deportations, fines, and other administrative acts.",
      de: "Aufhebungs- und Vollentschädigungsklagen vor dem Verwaltungsgericht Antalya gegen Visa-Ablehnungen, Aufenthaltswiderrufe, Ausweisungen, Bußgelder und andere Verwaltungsakte.",
      ru: "Иски об отмене и полном возмещении в Административном суде Антальи против отказов в визах, аннулирования ВНЖ, депортаций, штрафов и прочих административных актов.",
      ar: "دعاوى الإلغاء والتعويض الكامل أمام محكمة أنطاليا الإدارية ضد رفض التأشيرات وإلغاء الإقامة والترحيل والغرامات وسائر الأعمال الإدارية.",
    },
    intro: {
      tr: "Yabancılar için İdare Hukuku genellikle dolaylı yoldan, hayatı doğrudan etkileyen kararlarla gündeme gelir: bir vize reddi, oturma izninin iptali, sınır dışı kararı, kayıt yaptırılan plakaya kesilen yüksek tutarlı idari para cezası ya da kamu kurumu ihalesinde alınan ihaleyi düşürme kararı. Bu kararların ortak özelliği, idare adına alınmış olmaları ve kanunun aradığı süreler içinde idari yargıya başvurulmadığında kesinleşmeleridir.\n\nAntalya'da İdare Hukuku avukatı olarak iptal davaları, tam yargı davaları, yürütmenin durdurulması talepleri, idari itirazlar ve idari uyuşmazlıklarda arabuluculuk süreçlerinde müvekkillerin yanındayız. Yabancı uyruklu müvekkiller için en kritik nokta, sürelerdir; tebliğ tarihinden itibaren işleyen yasal süreyi kaçırmamak için en kısa sürede başvuru yapılması gerekir.",
      en: "For foreigners, administrative law most often appears through decisions that directly affect day-to-day life: a visa refusal, cancellation of a residence permit, deportation order, a high administrative fine on a registered vehicle, or a procurement decision overturning a tender. What these have in common is that they are made on behalf of the administration and become final unless administrative-court action is taken within the statutory periods.\n\nAs an administrative law attorney in Antalya, we represent clients in cancellation suits, full-redress (compensatory) suits, stay-of-execution applications, administrative objections, and mediation in administrative disputes. The most critical point for foreign clients is timing: the statutory period from notification must not be missed, so an application must be made as soon as possible.",
      de: "Für Ausländer tritt das Verwaltungsrecht meist über Entscheidungen auf, die das tägliche Leben unmittelbar betreffen: Visa-Ablehnung, Widerruf der Aufenthaltserlaubnis, Ausweisung, hohes Bußgeld für ein zugelassenes Fahrzeug oder eine Vergabeentscheidung. Gemeinsam haben sie, dass sie für die Verwaltung erlassen werden und ohne fristgerechte verwaltungsgerichtliche Klage rechtskräftig werden.\n\nAls Verwaltungsrechtsanwalt in Antalya vertreten wir Mandanten in Aufhebungs- und Vollentschädigungsklagen, Eilanträgen, Widersprüchen und Mediationsverfahren. Für ausländische Mandanten ist das Timing am wichtigsten: Die Frist ab Zustellung darf nicht verpasst werden — die Klage ist schnellstmöglich einzureichen.",
      ru: "Для иностранцев административное право чаще всего появляется через решения, напрямую влияющие на повседневную жизнь: отказ в визе, аннулирование ВНЖ, депортация, крупный административный штраф на зарегистрированное ТС, решение по конкурсу. У них общее то, что они принимаются от имени администрации и становятся окончательными, если в установленный срок не обратиться в административный суд.\n\nКак адвокат по административному праву в Анталье мы представляем клиентов в исках об отмене, исках о полном возмещении, ходатайствах о приостановлении исполнения, административных возражениях и медиации. Главное для иностранных клиентов — сроки: установленный срок с момента уведомления нельзя пропустить, иск нужно подать как можно раньше.",
      ar: "للأجانب يظهر القانون الإداري عادةً عبر قرارات تؤثر مباشرةً في الحياة اليومية: رفض تأشيرة، إلغاء إقامة، قرار ترحيل، غرامة إدارية مرتفعة على مركبة مسجلة، أو قرار إلغاء مناقصة. والقاسم المشترك أنها تُتَّخذ باسم الإدارة وتصبح نهائية ما لم تُرفع دعوى إدارية ضمن المهل القانونية.\n\nبصفتنا محامي قانون إداري في أنطاليا، نمثّل الموكلين في دعاوى الإلغاء ودعاوى التعويض الكامل وطلبات وقف التنفيذ والاعتراضات الإدارية والوساطة. وأهم نقطة للموكلين الأجانب هي التوقيت: لا يجوز تفويت المهلة القانونية من تاريخ التبليغ، ويجب رفع الدعوى في أقرب وقت.",
    },
    services: {
      tr: [
        "Vize reddi, vize iptali ve giriş yasağı kararlarına karşı dava",
        "Oturma izni iptali ve sınır dışı kararlarına karşı yürütmenin durdurulması talepli dava",
        "İdari para cezalarına itiraz ve iptal davaları",
        "Tam yargı davaları (idari işlem nedeniyle uğranan zararın tazmini)",
        "Belediye kararlarına ve imar uygulamalarına karşı iptal davaları",
        "Vergi cezası ve uzlaşma süreçleri",
        "Kamu ihaleleri ve ihale kararlarının iptali",
        "İdari itiraz, üst makama başvuru ve idari arabuluculuk süreçleri",
      ],
      en: [
        "Litigation against visa refusals, cancellations, and entry-ban decisions",
        "Cancellation and stay-of-execution actions against residence-permit cancellations and deportation orders",
        "Objections and cancellation actions against administrative fines",
        "Full-redress actions (compensation for damage caused by an administrative act)",
        "Cancellation of municipal decisions and zoning implementations",
        "Tax-penalty and settlement procedures",
        "Public procurement and tender-decision cancellation",
        "Administrative objection, hierarchical appeal, and administrative mediation",
      ],
      de: [
        "Klagen gegen Visa-Ablehnung, -Widerruf und Einreiseverbot",
        "Aufhebungs- und Eilanträge gegen Widerruf der Aufenthaltserlaubnis und Ausweisung",
        "Widerspruch und Aufhebungsklage gegen Bußgelder",
        "Vollentschädigungsklagen (Schadensersatz wegen Verwaltungshandeln)",
        "Aufhebung kommunaler Beschlüsse und Bauleitplanungen",
        "Steuerstrafen und Verständigungsverfahren",
        "Öffentliche Vergaben und Aufhebung von Vergabeentscheidungen",
        "Verwaltungswiderspruch, hierarchische Beschwerde und Mediation im Verwaltungsrecht",
      ],
      ru: [
        "Иски против отказов в визе, их аннулирования и запретов на въезд",
        "Иски об отмене и приостановлении исполнения против аннулирования ВНЖ и депортации",
        "Возражения и иски об отмене административных штрафов",
        "Иски о полном возмещении вреда от административного акта",
        "Отмена муниципальных решений и решений по градостроительным планам",
        "Налоговые штрафы и процедуры урегулирования",
        "Государственные закупки и отмена решений по конкурсам",
        "Административные возражения, иерархические жалобы и медиация",
      ],
      ar: [
        "إقامة دعاوى ضد رفض التأشيرات وإلغائها وحظر الدخول",
        "دعاوى إلغاء ووقف تنفيذ ضد إلغاء الإقامة وقرارات الترحيل",
        "اعتراضات ودعاوى إلغاء على الغرامات الإدارية",
        "دعاوى تعويض كامل (تعويض الأضرار الناجمة عن عمل إداري)",
        "إلغاء قرارات البلدية وتطبيقات التخطيط العمراني",
        "العقوبات الضريبية وإجراءات التسوية",
        "المشتريات العامة وإلغاء قرارات المناقصات",
        "الاعتراض الإداري والتظلم والوساطة الإدارية",
      ],
    },
    process: {
      tr: "İdare Hukuku dosyalarında ilk adım, idari işlemin tebliğ tarihi ve içerdiği gerekçenin doğru tespitidir. Bunun ardından dosya, hukuka aykırılık unsurları yönünden incelenir ve sürelerin geçmemesi için iptal davası ile birlikte yürütmenin durdurulması talebi sunulur. İdare savunma yapar, gerektiğinde keşif ve bilirkişi incelemesi yapılır. Mahkeme kararı sonrası gerekli görülürse istinaf veya Danıştay yoluna başvurulur. Yabancı uyruklu müvekkilde, dosyayı destekleyen yabancı belgelerin Türkçeye çevirisi ve apostili özellikle erken aşamada hazırlanır.",
      en: "An administrative file begins with accurately identifying the notification date and the reasoning of the act. The file is then reviewed for unlawfulness, and to keep within deadlines, a cancellation suit is filed together with a stay-of-execution motion. The administration responds; site inspection or expert review is ordered as needed. After judgment, appellate or Council of State review may follow. For foreign clients, translation and apostille of supporting foreign documents are arranged early.",
      de: "Eine Verwaltungsakte beginnt mit der genauen Feststellung des Zustellungsdatums und der Begründung des Aktes. Anschließend wird die Akte auf Rechtswidrigkeit geprüft, und um Fristen zu wahren, wird die Aufhebungsklage zusammen mit einem Eilantrag eingereicht. Die Verwaltung antwortet; Augenschein oder Sachverständigenprüfung werden ggf. angeordnet. Nach dem Urteil folgt ggf. die Berufung oder die Anrufung des Staatsrats. Für ausländische Mandanten werden Übersetzung und Apostille relevanter Auslandsurkunden frühzeitig veranlasst.",
      ru: "Административное дело начинается с точного установления даты уведомления и обоснования акта. Затем дело анализируется на предмет незаконности, и для соблюдения сроков подаётся иск об отмене вместе с ходатайством о приостановлении исполнения. Администрация отвечает; при необходимости проводится осмотр или экспертиза. После решения может последовать апелляция или обращение в Государственный совет. Для иностранных клиентов перевод и апостиль подтверждающих иностранных документов готовятся заранее.",
      ar: "يبدأ الملف الإداري بتحديد تاريخ التبليغ ومسوّغ القرار بدقة. ثم يُفحص لتحديد عناصر مخالفته للقانون، وللحفاظ على المهل تُرفع دعوى إلغاء مع طلب وقف تنفيذ. تردّ الإدارة؛ ويُؤمَر بالمعاينة أو الخبرة عند الاقتضاء. وبعد الحكم قد يتبع الاستئناف أو الرجوع إلى مجلس الدولة. وللعملاء الأجانب نُعدّ ترجمة الوثائق الأجنبية وتصديقها مبكراً.",
    },
    faqs: {
      tr: [
        {
          q: "İdari işlemin iptali için ne kadar sürem var?",
          a: "İptal davası için Türk idari yargısında belirli bir yasal süre öngörülmüştür. Tebliğ tarihinden itibaren işleyen bu süreyi kaçırmamak kritiktir; süresinde açılmayan dava esastan reddedilir.",
        },
        {
          q: "Yürütmenin durdurulması ne işe yarar?",
          a: "İdari işlemin uygulanması nedeniyle telafisi güç bir zarar doğacaksa, mahkemeden işlemin geçici olarak durdurulması talep edilebilir. Bu kararla işlemin sonuçları, dava sona erene kadar askıya alınır.",
        },
        {
          q: "İdare aleyhine açılan davalar ne kadar sürer?",
          a: "Dosyaya göre değişmekle birlikte, ilk derece idari yargılama genellikle 1-2 yıl arasında sonuçlanmaktadır. Dosyanın karmaşıklığına ve istinaf-Danıştay aşamalarına bağlı olarak süre uzayabilir.",
        },
      ],
      en: [
        {
          q: "How long do I have to challenge an administrative act?",
          a: "Turkish administrative procedure provides a fixed statutory period. Counted from the date of notification, this deadline must not be missed; an out-of-time action will be rejected on procedural grounds.",
        },
        {
          q: "What is the purpose of a stay of execution?",
          a: "If the act would cause damage that is hard to remedy, the court may be asked to suspend its effect temporarily. Once granted, the consequences of the act are paused until the case is concluded.",
        },
        {
          q: "How long do administrative cases take?",
          a: "Although it varies, first-instance administrative proceedings generally conclude within 1–2 years. The duration may extend depending on complexity and appellate or Council-of-State stages.",
        },
      ],
      de: [
        {
          q: "Wie lange habe ich, um einen Verwaltungsakt anzufechten?",
          a: "Das türkische Verwaltungsverfahren sieht eine feste gesetzliche Frist vor. Sie läuft ab Zustellung; eine verspätete Klage wird verfahrensrechtlich abgewiesen.",
        },
        {
          q: "Wozu dient die Aussetzung der Vollziehung?",
          a: "Würden durch die Vollziehung schwer wiedergutzumachende Nachteile entstehen, kann das Gericht um vorübergehende Aussetzung gebeten werden. Die Wirkungen des Aktes werden bis Verfahrensende ausgesetzt.",
        },
        {
          q: "Wie lange dauern Verwaltungsverfahren?",
          a: "Je nach Akte werden erstinstanzliche Verwaltungsverfahren in der Regel in 1–2 Jahren abgeschlossen. Komplexität und Berufungs-/Staatsratsstufen können die Dauer verlängern.",
        },
      ],
      ru: [
        {
          q: "Сколько времени у меня есть на обжалование?",
          a: "Турецкое административное право предусматривает фиксированный срок. Он отсчитывается с даты уведомления; иск, поданный с просрочкой, отклоняется по процедурным основаниям.",
        },
        {
          q: "Зачем нужно приостановление исполнения?",
          a: "Если исполнение акта повлечёт труднопоправимый ущерб, суду может быть подано ходатайство о временном приостановлении. После удовлетворения последствия акта приостанавливаются до завершения дела.",
        },
        {
          q: "Сколько длятся административные дела?",
          a: "Зависит от дела, но первая инстанция обычно завершается за 1–2 года. Срок увеличивается в зависимости от сложности и этапов апелляции/Государственного совета.",
        },
      ],
      ar: [
        {
          q: "كم لديّ من الوقت للطعن في عمل إداري؟",
          a: "ينصّ القانون الإداري التركي على مهلة محددة تبدأ من تاريخ التبليغ؛ ولا يجوز تفويتها، إذ تُرفض الدعوى المتأخرة لأسباب إجرائية.",
        },
        {
          q: "ما هدف وقف التنفيذ؟",
          a: "إذا كان تنفيذ القرار سيسبب ضرراً يصعب تداركه، يمكن طلب وقفه مؤقتاً من المحكمة. وعند الموافقة تُجمَّد آثار القرار حتى انتهاء القضية.",
        },
        {
          q: "كم تستغرق الدعاوى الإدارية؟",
          a: "تختلف حسب الملف، لكن الدرجة الأولى تنتهي عادةً خلال 1–2 سنة. وقد تطول المدة بحسب التعقيد ومراحل الاستئناف أو مجلس الدولة.",
        },
      ],
    },
  },
];

export function getPracticeAreaContent(slug: string): PracticeAreaContent | undefined {
  return PRACTICE_AREAS_CONTENT.find((c) => c.slug === slug);
}
