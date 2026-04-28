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
      ru: "Турция с каждым годом становится привлекательным направлением для десятков тысяч иностранцев — как благодаря качеству жизни, так и инвестиционным возможностям. Однако для тех, кто желает законно проживать, работать или открыть бизнес в стране, процесс без грамотного юридического сопровождения может быстро стать сложным. Наша команда, выступающая как иммиграционный адвокат в Анталье, находится рядом с клиентами с первого шага подачи заявления до окончательного решения.\n\nПодачи заявлений на ВНЖ, процедуры получения разрешения на работу, обжалование отказов в визе, освобождение иностранцев, находящихся под административным надзором, и судебные процессы против решений о депортации — наиболее частые направления нашей работы. Каждое дело мы рассматриваем индивидуально и вместе с клиентом определяем путь с наиболее прочным правовым основанием.",
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
      tr: "Antalya, yabancıların Türkiye'de en çok tercih ettiği gayrimenkul yatırım merkezlerinden biridir. Lara'dan Konyaaltı'na, Belek'ten Alanya'ya uzanan geniş bir bölgede her yıl binlerce yabancı, yaşamak veya yatırım yapmak amacıyla mülk edinmektedir. Ancak Türk gayrimenkul hukuku, ülke bazında farklılık gösteren süreçler içerir; tapu devri, vergisel yükümlülükler ve sözleşmeden doğan riskler doğru hukuki rehberlik olmaksızın ciddi maddi kayıplara yol açabilir.\n\nBüromuz, alıcı veya satıcı olarak yabancı uyruklu müvekkillerin tapu işlemlerinden satış sözleşmesi düzenlemesine, askeri yasak bölge sorgulamasından ekspertiz raporu incelemesine kadar tüm süreçleri yürütür. Antalya gayrimenkul avukatı olarak amacımız; her dosyada müvekkilin haklarını koruyan, şeffaf ve güvenli bir alım-satım veya kira süreci sağlamaktır.",
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
          a: "Türk hukuku kiracıyı görece güçlü biçimde korur. Kira artışı için belirli oranlar ve belirli durumlarda mahkemeye başvuru gerekir. Tahliye ise ancak kanunda sayılan sebeplerle ve usule uygun şekilde yapılabilir. Mahkeme kararı olmadan tahliye yasaktır.",
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
          a: "Nein. Die Immobilie unterliegt einer Nichtveräußerungspflicht für einen festgelegten Zeitraum. Ein Verstoß ist ein schwerwiegender Rechtsfolgen — bis hin zum Entzug der Staatsbürgerschaft. Nach Ablauf der Frist ist der Verkauf frei.",
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
      tr: "Yabancı uyrukluların Türkiye'de boşanma, velayet, nafaka, mal paylaşımı ve yabancı mahkeme kararlarının tanınması davalarında deneyimli aile hukuku avukatı.",
      en: "Experienced family law attorney for foreigners in Turkey: divorce, custody, alimony, division of property, and recognition of foreign court judgments.",
      de: "Erfahrener Familienrechtsanwalt für Ausländer in der Türkei: Scheidung, Sorgerecht, Unterhalt, Vermögensaufteilung und Anerkennung ausländischer Gerichtsentscheidungen.",
      ru: "Опытный адвокат по семейному праву для иностранцев в Турции: развод, опека, алименты, раздел имущества и признание иностранных судебных решений.",
      ar: "محامي قانون أسرة متمرس للأجانب في تركيا: الطلاق والحضانة والنفقة وتقسيم الأموال والاعتراف بأحكام المحاكم الأجنبية.",
    },
    intro: {
      tr: "Aile hukuku, yabancı uyrukluların Türkiye'de en hassas hukuki süreçlerle karşılaştığı alanlardan biridir. Boşanma, velayet, nafaka ve mal paylaşımı davaları yalnızca hukuki değil aynı zamanda duygusal ağırlığı yüksek süreçlerdir; üstelik uluslararası unsurlar (yabancı uyruk, başka ülkede ikamet, yurtdışında alınmış mahkeme kararları) işin karmaşıklığını artırır.\n\nAntalya'da aile hukuku avukatı olarak müvekkillerimize anlaşmalı veya çekişmeli boşanma davaları, çocukların velayeti ve kişisel ilişki düzenlemeleri, nafaka talepleri, yabancı mahkemelerden alınmış boşanma veya vesayet kararlarının Türkiye'de tanınması ve tenfizi gibi tüm alt süreçlerde destek veriyoruz. Mahkeme önünde olduğu kadar arabulucuk masasında da müvekkilin lehine bir çözüm üretmeye çalışırız.",
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
      tr: "Aile hukuku dosyalarında ilk adım, müvekkilin önceliklerini ve dosyanın hukuki çerçevesini netleştirmektir. Çocuğun bulunduğu durumlarda velayet ve kişisel ilişki, ardından mali talepler (nafaka, mal paylaşımı) sıralanır. Mümkün olduğu durumlarda anlaşmalı boşanma ve protokol yoluyla kısa sürede sonuç almayı tercih ederiz; ancak çekişmeli süreçte de delillerin doğru sunumu, tanık ve bilirkişi yönetimi ile mahkeme önünde etkili savunma sağlarız. Yabancı uyruklu müvekkillerde, eşlerin yargı yetkisi seçimi ve uluslararası mahkeme kararlarının Türkiye'de tanınması özel bir uzmanlık gerektirir.",
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
          a: "Otomatik olarak değildir. Yabancı mahkeme kararının Türkiye'de hukuki sonuç doğurması için tanınma ve tenfiz davası açılması gerekir. Bu dava sonucunda karar Türk hukuk düzeniyle bağdaşıyorsa nüfus kayıtlarına işlenir.",
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
];

export function getPracticeAreaContent(slug: string): PracticeAreaContent | undefined {
  return PRACTICE_AREAS_CONTENT.find((c) => c.slug === slug);
}
