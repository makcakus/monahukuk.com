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
];

export function getPracticeAreaContent(slug: string): PracticeAreaContent | undefined {
  return PRACTICE_AREAS_CONTENT.find((c) => c.slug === slug);
}
