import type { LangMap5 } from "./practice-areas";

export type LangList5 = {
  tr: string[];
  en: string[];
  de: string[];
  ru: string[];
  ar: string[];
  es: string[];
  fr: string[];
};

export type Faq = { q: string; a: string };

export type LangFaqs5 = {
  tr: Faq[];
  en: Faq[];
  de: Faq[];
  ru: Faq[];
  ar: Faq[];
  es: Faq[];
  fr: Faq[];
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
      es: "Abogado de Inmigración en Antalya | Permisos de Residencia y Trabajo en Turquía",
      fr: "Avocat en Droit de l'Immigration à Antalya | Permis de Séjour et de Travail en Turquie",
    },
    metaDescription: {
      tr: "Antalya'da yabancılar avukatı olarak kısa ve uzun dönem oturma izni, çalışma izni, vize itirazları ve sınır dışı kararlarına karşı dava süreçlerinde yabancı uyruklu müvekkillerin haklarını koruyoruz.",
      en: "As an immigration lawyer in Antalya, we protect the rights of foreign nationals in short and long-term residence permits, work permits, visa appeals, and deportation defence cases.",
      de: "Als Einwanderungsanwalt in Antalya schützen wir die Rechte ausländischer Staatsangehöriger bei kurz- und langfristigen Aufenthaltserlaubnissen, Arbeitsgenehmigungen, Visumeinsprüchen und Verfahren gegen Ausweisung.",
      ru: "Как иммиграционный адвокат в Анталье мы защищаем права иностранных граждан в делах о краткосрочных и долгосрочных видах на жительство, разрешениях на работу, обжалованиях виз и защите от депортации.",
      ar: "بوصفنا محامي هجرة في أنطاليا، نحمي حقوق المواطنين الأجانب في تصاريح الإقامة قصيرة وطويلة الأمد وتصاريح العمل والطعن في التأشيرات والدفاع ضد الترحيل.",
      es: "Como abogado de inmigración en Antalya, protegemos los derechos de los extranjeros en permisos de residencia a corto y largo plazo, permisos de trabajo, recursos de visado y defensa contra la deportación.",
      fr: "En tant qu'avocat en immigration à Antalya, nous défendons les droits des ressortissants étrangers en matière de permis de séjour à court et long terme, permis de travail, recours contre les refus de visa et défense contre l'expulsion.",
    },
    intro: {
      tr: "Türkiye, gerek yaşam kalitesi gerek yatırım fırsatları nedeniyle her yıl on binlerce yabancı için cazip bir ülke haline gelmektedir. Ancak bu ülkede yasal olarak ikamet etmek, çalışmak veya iş kurmak isteyen yabancılar için süreç, doğru hukuki rehberlik olmaksızın hızla karmaşık bir hâl alabilir. Antalya'da yabancılar avukatı olarak görev yapan ekibimiz, başvurunun ilk adımından nihai karara kadar her aşamada müvekkillerinin yanındadır.\n\nİkamet izni başvuruları, çalışma izni süreçleri, vize ret kararlarına karşı itiraz, idari gözetim altındaki yabancıların serbest bırakılması ve sınır dışı işlemlerine karşı yargı yoluyla mücadele en sık karşılaştığımız konuların başında gelmektedir. Her dosyayı kendi koşulları içinde değerlendirir, hukuki gerekçesi en güçlü olan yolu birlikte tayin ederiz.",
      en: "Turkey is becoming an increasingly attractive destination for tens of thousands of foreigners every year, both for its quality of life and investment opportunities. Yet for those wishing to legally reside, work, or establish a business in the country, the process can rapidly become complex without proper legal guidance. Our team, serving as an immigration lawyer in Antalya, stands beside our clients from the first application step to the final decision.\n\nResidence permit applications, work permit procedures, appeals against visa refusals, the release of foreigners under administrative detention, and judicial challenges against deportation orders are among the most frequent matters we handle. We assess each case on its own merits and, together with the client, identify the path with the strongest legal foundation.",
      de: "Die Türkei wird Jahr für Jahr für zehntausende Ausländer zu einem attraktiven Land — sowohl wegen der Lebensqualität als auch der Investitionsmöglichkeiten. Doch für diejenigen, die hier rechtmäßig wohnen, arbeiten oder ein Unternehmen gründen möchten, kann der Prozess ohne fundierte rechtliche Begleitung schnell komplex werden. Unser Team, tätig als Einwanderungsanwalt in Antalya, steht unseren Mandanten vom ersten Antragsschritt bis zur endgültigen Entscheidung zur Seite.\n\nAnträge auf Aufenthaltserlaubnis, Verfahren zur Arbeitsgenehmigung, Widersprüche gegen Visa-Ablehnungen, die Freilassung von Ausländern aus administrativer Haft sowie gerichtliche Schritte gegen Ausweisungsbescheide gehören zu den häufigsten Fragen, mit denen wir uns beschäftigen. Wir beurteilen jeden Fall individuell und bestimmen gemeinsam mit dem Mandanten den rechtlich stärksten Weg.",
      ru: "Турция с каждым годом становится привлекательным направлением для десятков тысяч иностранцев — как благодаря качеству жизни, так и инвестиционным возможностям. Однако для тех, кто желает законно проживать, работать или открыть бизнес в стране, процесс без грамотного юридического сопровождения может быстро стать сложным. Наша команда, выступающая как иммиграционный адвокат в Анталье, находится рядом с клиентами с первого шага подачи заявления до окончательного решения.\n\nПодача заявлений на ВНЖ, процедуры получения разрешения на работу, обжалование отказов в визе, освобождение иностранцев, находящихся под административным надзором, и судебные процессы против решений о депортации — наиболее частые направления нашей работы. Каждое дело мы рассматриваем индивидуально и вместе с клиентом определяем путь с наиболее прочным правовым основанием.",
      ar: "أصبحت تركيا وجهة جذابة لعشرات الآلاف من الأجانب كل عام، سواء بسبب جودة الحياة أو فرص الاستثمار. إلا أن العملية يمكن أن تصبح معقدة بسرعة بالنسبة لمن يرغبون في الإقامة أو العمل أو تأسيس عمل تجاري في البلاد دون توجيه قانوني سليم. فريقنا، بصفته محامي هجرة في أنطاليا، يقف بجانب موكليه من الخطوة الأولى لتقديم الطلب وحتى القرار النهائي.\n\nطلبات تصاريح الإقامة وإجراءات تصاريح العمل والطعون ضد رفض التأشيرات والإفراج عن الأجانب تحت الحجز الإداري والإجراءات القضائية ضد قرارات الترحيل من بين أكثر القضايا التي نتعامل معها. نقيّم كل قضية بحسب ملابساتها الخاصة، ونحدد مع الموكل المسار ذا الأساس القانوني الأقوى.",
      es: "Turquía se convierte cada año en un destino cada vez más atractivo para decenas de miles de extranjeros, tanto por su calidad de vida como por sus oportunidades de inversión. Sin embargo, para quienes desean residir, trabajar o establecer un negocio en el país de forma legal, el proceso puede volverse complejo rápidamente sin una adecuada orientación jurídica. Nuestro equipo, que actúa como abogado de inmigración en Antalya, acompaña a nuestros clientes desde el primer paso de la solicitud hasta la decisión final.\n\nLas solicitudes de permiso de residencia, los procedimientos de permiso de trabajo, los recursos contra denegaciones de visado, la puesta en libertad de extranjeros bajo custodia administrativa y los recursos judiciales contra órdenes de deportación son los asuntos que tratamos con mayor frecuencia. Evaluamos cada caso según sus propios méritos y, junto con el cliente, identificamos la vía con el fundamento jurídico más sólido.",
      fr: "La Turquie attire chaque année des dizaines de milliers d'étrangers, aussi bien pour sa qualité de vie que pour ses opportunités d'investissement. Pourtant, pour ceux qui souhaitent résider, travailler ou créer une entreprise légalement dans le pays, le processus peut rapidement devenir complexe sans un accompagnement juridique adéquat. Notre équipe, qui exerce en tant qu'avocat en immigration à Antalya, accompagne nos clients de la première étape de la demande jusqu'à la décision finale.\n\nLes demandes de permis de séjour, les procédures de permis de travail, les recours contre les refus de visa, la libération d'étrangers en rétention administrative et les voies de recours judiciaires contre les arrêtés d'expulsion figurent parmi les dossiers que nous traitons le plus fréquemment. Nous apprécions chaque affaire selon ses propres mérites et déterminons avec le client la voie offrant les fondements juridiques les plus solides.",
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
      es: [
        "Solicitudes, prórrogas y recursos contra denegaciones de permiso de residencia a corto plazo",
        "Permisos de residencia familiar: gestión del proceso para extranjeros casados con ciudadanos turcos",
        "Solicitudes de permiso de residencia de estudiantes y transiciones tras la graduación",
        "Solicitudes de permiso de trabajo, renovaciones y permisos de trabajo independiente",
        "Litigios contra denegaciones de visado y órdenes de prohibición de entrada",
        "Intervención jurídica urgente contra órdenes de deportación y custodia administrativa",
        "Asesoramiento sobre solicitudes de protección internacional y protección temporal",
        "Pérdida de pasaporte, cambio de identidad y corrección de errores administrativos",
      ],
      fr: [
        "Demandes, prolongations et recours contre les refus de permis de séjour à court terme",
        "Permis de séjour familiaux : gestion de la procédure pour les étrangers mariés à des ressortissants turcs",
        "Demandes de permis de séjour étudiant et transitions après l'obtention du diplôme",
        "Demandes de permis de travail, renouvellements et permis de travail indépendant",
        "Contentieux contre les refus de visa et les interdictions d'entrée",
        "Intervention juridique urgente contre les arrêtés d'expulsion et la rétention administrative",
        "Conseil sur les demandes de protection internationale et de protection temporaire",
        "Perte de passeport, changement d'identité et correction d'erreurs administratives",
      ],
    },
    process: {
      tr: "Her başvuruyu önce belge ve durum analizi ile başlatır, müvekkilin amacına en uygun izin türünü belirleriz. Eksik veya hatalı belge nedeniyle ortaya çıkabilecek red kararlarını engellemek için başvuru öncesinde detaylı bir kontrol yaparız. İdari sürecin yetmediği durumlarda Antalya İdare Mahkemesi nezdinde dava açar; gerektiğinde yürütmenin durdurulması talebiyle acil koruma sağlarız. Müvekkillerimiz, sürecin her aşamasında kendi dilinde bilgilendirilir ve karar vermeleri gereken her noktada yanlarında dururuz.",
      en: "We begin every application with a document and situation analysis, then determine the permit type best suited to the client's goal. Before submission, we conduct a detailed check to prevent refusals caused by missing or incorrect documents. When the administrative track is insufficient, we file proceedings before the Antalya Administrative Court and, where necessary, secure urgent protection through stay-of-execution motions. Our clients are kept informed at every stage in their own language, and we stand by them at every decision point.",
      de: "Wir beginnen jeden Antrag mit einer Dokumenten- und Sachverhaltsanalyse und bestimmen die für das Ziel des Mandanten am besten geeignete Genehmigungsart. Vor der Einreichung führen wir eine detaillierte Prüfung durch, um Ablehnungen aufgrund fehlender oder fehlerhafter Unterlagen zu vermeiden. Reicht das Verwaltungsverfahren nicht aus, klagen wir vor dem Verwaltungsgericht Antalya und sichern bei Bedarf durch Eilanträge dringenden Rechtsschutz. Unsere Mandanten werden in jeder Phase in ihrer eigenen Sprache informiert.",
      ru: "Каждое заявление мы начинаем с анализа документов и обстоятельств, затем определяем тип разрешения, наиболее подходящий цели клиента. Перед подачей мы проводим подробную проверку, чтобы предотвратить отказы из-за отсутствующих или ошибочных документов. Если административного пути недостаточно, мы подаём иск в Административный суд Антальи и при необходимости обеспечиваем срочную защиту через ходатайства о приостановлении исполнения. Наши клиенты информируются на каждом этапе на их родном языке.",
      ar: "نبدأ كل طلب بتحليل المستندات والحالة، ثم نحدد نوع التصريح الأنسب لهدف الموكل. قبل التقديم، نجري فحصاً مفصلاً لمنع حالات الرفض الناجمة عن نقص الوثائق أو أخطائها. وعندما لا يكفي المسار الإداري، نرفع دعاوى أمام محكمة أنطاليا الإدارية ونؤمّن حماية عاجلة عند الحاجة من خلال طلبات وقف التنفيذ. نُبقي موكلينا على اطلاع في كل مرحلة بلغتهم الأم.",
      es: "Comenzamos cada solicitud con un análisis documental y de la situación, para luego determinar el tipo de permiso más adecuado al objetivo del cliente. Antes de la presentación, realizamos una comprobación detallada para evitar denegaciones causadas por documentos incorrectos o faltantes. Cuando la vía administrativa es insuficiente, interponemos recurso ante el Tribunal Administrativo de Antalya y, cuando es necesario, garantizamos protección urgente mediante solicitudes de suspensión cautelar. Mantenemos informados a nuestros clientes en cada etapa, en su propio idioma, y les acompañamos en cada punto de decisión.",
      fr: "Nous débutons chaque demande par une analyse documentaire et de la situation, puis déterminons le type de permis le mieux adapté à l'objectif du client. Avant le dépôt, nous effectuons une vérification détaillée pour prévenir les refus dus à des documents manquants ou erronés. Lorsque la voie administrative est insuffisante, nous saisissons le Tribunal Administratif d'Antalya et, si nécessaire, obtenons une protection urgente par le biais de requêtes en sursis à exécution. Nos clients sont informés à chaque étape dans leur propre langue, et nous les accompagnons à chaque moment de décision.",
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
      es: [
        {
          q: "¿Qué puedo hacer si mi solicitud de permiso de residencia a corto plazo es denegada?",
          a: "Una vez notificada la denegación, puede interponer un recurso de anulación ante el tribunal administrativo dentro del plazo legal. A través de su abogado, una solicitud de suspensión cautelar puede reducir el riesgo de deportación; dependiendo del motivo de la denegación, también puede evaluarse una nueva solicitud.",
        },
        {
          q: "¿Qué ocurre si trabajo en Turquía sin permiso de trabajo?",
          a: "Trabajar sin permiso genera multas administrativas y motivos de deportación tanto para el empleador como para el extranjero, y puede imponerse una prohibición de entrada. La solicitud de permiso de trabajo la presenta el empleador y generalmente se resuelve en 30–60 días.",
        },
        {
          q: "¿Puedo permanecer en Turquía tras una orden de deportación?",
          a: "Debe interponerse recurso ante el tribunal administrativo dentro de un plazo legal muy breve desde la notificación. Un recurso oportuno puede suspender la ejecución y permitir al cliente permanecer en Turquía hasta que concluya el proceso judicial.",
        },
      ],
      fr: [
        {
          q: "Que puis-je faire si ma demande de permis de séjour à court terme est refusée ?",
          a: "Une fois la décision de refus notifiée, vous pouvez introduire un recours en annulation devant le tribunal administratif dans le délai légal. Par l'intermédiaire de votre avocat, une demande de sursis à exécution peut réduire le risque d'expulsion ; selon le motif du refus, une nouvelle demande peut également être envisagée.",
        },
        {
          q: "Que se passe-t-il si je travaille en Turquie sans permis de travail ?",
          a: "Travailler sans permis entraîne des amendes administratives et constitue un motif d'expulsion pour l'employeur comme pour l'étranger ; une interdiction d'entrée peut également être prononcée. La demande de permis de travail est déposée par l'employeur et est généralement instruite en 30 à 60 jours.",
        },
        {
          q: "Puis-je rester en Turquie après une décision d'expulsion ?",
          a: "Un recours devant le tribunal administratif doit être formé dans un délai légal très bref à compter de la notification. Un recours déposé en temps utile peut suspendre l'exécution et permettre au client de demeurer en Turquie jusqu'à la conclusion de la procédure judiciaire.",
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
      es: "Abogado Inmobiliario en Antalya | Escritura de Propiedad y Derecho de Arrendamiento para Extranjeros",
      fr: "Avocat Immobilier à Antalya | Titre de Propriété et Droit Locatif pour Étrangers",
    },
    metaDescription: {
      tr: "Antalya'da yabancıların gayrimenkul alımı, tapu işlemleri, sözleşme incelemesi, ön satış sözleşmeleri, ipotek ve kira uyuşmazlıklarında deneyimli gayrimenkul avukatı desteği.",
      en: "Experienced real estate lawyer support for foreigners in Antalya: property purchase, title deed transactions, contract review, pre-sale agreements, mortgages, and rental disputes.",
      de: "Erfahrene Immobilienanwaltsbetreuung für Ausländer in Antalya: Immobilienkauf, Grundbuchverfahren, Vertragsprüfung, Vorverkaufsverträge, Hypotheken und Mietstreitigkeiten.",
      ru: "Поддержка опытного адвоката по недвижимости для иностранцев в Анталье: покупка недвижимости, оформление прав собственности, проверка договоров, предварительные договоры, ипотека и арендные споры.",
      ar: "دعم من محامي عقارات متمرس للأجانب في أنطاليا: شراء العقارات وإجراءات سند الملكية ومراجعة العقود واتفاقيات البيع المسبق والرهن العقاري ونزاعات الإيجار.",
      es: "Apoyo de un abogado inmobiliario experimentado para extranjeros en Antalya: compra de inmuebles, transacciones de escritura, revisión de contratos, acuerdos de preventa, hipotecas y disputas de arrendamiento.",
      fr: "Accompagnement d'un avocat immobilier expérimenté pour les étrangers à Antalya : achat de biens, opérations de titre de propriété, examen de contrats, promesses de vente, hypothèques et litiges locatifs.",
    },
    intro: {
      tr: "Antalya, yabancıların Türkiye'de en çok tercih ettiği gayrimenkul yatırım merkezlerinden biridir. Lara'dan Konyaaltı'na, Belek'ten Alanya'ya uzanan geniş bir bölgede her yıl binlerce yabancı, yaşamak veya yatırım yapmak amacıyla mülk edinmektedir. Ancak Türk Gayrimenkul Hukuku, ülke bazında farklılık gösteren süreçler içerir; tapu devri, vergisel yükümlülükler ve sözleşmeden doğan riskler doğru hukuki rehberlik olmaksızın ciddi maddi kayıplara yol açabilir.\n\nBüromuz, alıcı veya satıcı olarak yabancı uyruklu müvekkillerin tapu işlemlerinden satış sözleşmesi düzenlemesine, askeri yasak bölge sorgulamasından ekspertiz raporu incelemesine kadar tüm süreçleri yürütür. Antalya gayrimenkul avukatı olarak amacımız; her dosyada müvekkilin haklarını koruyan, şeffaf ve güvenli bir alım-satım veya kira süreci sağlamaktır.",
      en: "Antalya is one of the most popular real estate investment hubs for foreigners in Turkey. From Lara to Konyaaltı, Belek to Alanya, thousands of foreign nationals acquire property each year either to live in or to invest. Yet Turkish real estate law involves country-specific processes; title transfers, tax obligations, and contractual risks can lead to substantial losses without proper legal guidance.\n\nOur firm handles every step for foreign clients — whether buyer or seller — from title deed transactions and drafting of sale contracts to military restricted zone inquiries and review of valuation reports. As a real estate lawyer in Antalya, our aim is to ensure a transparent and secure transaction or tenancy process that protects the client's rights at every stage.",
      de: "Antalya ist einer der beliebtesten Immobilieninvestitionsstandorte für Ausländer in der Türkei. Von Lara über Konyaaltı bis Belek und Alanya erwerben jedes Jahr Tausende ausländischer Staatsangehörige Immobilien, um zu wohnen oder zu investieren. Doch das türkische Immobilienrecht umfasst landesspezifische Prozesse; Eigentumsübertragungen, Steuerverpflichtungen und vertragliche Risiken können ohne fundierte rechtliche Beratung erhebliche Verluste verursachen.\n\nUnsere Kanzlei begleitet ausländische Mandanten — Käufer wie Verkäufer — durch jeden Schritt: Grundbuchgeschäfte, Kaufvertragsentwurf, Anfragen zu militärischen Sperrgebieten und Prüfung von Wertgutachten. Als Immobilienanwalt in Antalya gewährleisten wir einen transparenten und sicheren Transaktions- oder Mietprozess, der die Rechte des Mandanten in jeder Phase schützt.",
      ru: "Анталья — один из самых популярных центров инвестиций в недвижимость для иностранцев в Турции. От Лары до Коньяалты, от Белека до Аланьи тысячи иностранных граждан ежегодно приобретают недвижимость для проживания или инвестиций. Но турецкое право недвижимости содержит специфические процедуры; передача прав собственности, налоговые обязательства и договорные риски без грамотного юридического сопровождения могут привести к значительным потерям.\n\nНаша фирма ведёт все этапы для иностранных клиентов — покупателей или продавцов — от сделок с правом собственности и составления договоров купли-продажи до запросов о военных запретных зонах и анализа отчётов об оценке. Как адвокат по недвижимости в Анталье, мы обеспечиваем прозрачный и безопасный процесс сделки или аренды, защищающий права клиента на каждом этапе.",
      ar: "تُعدّ أنطاليا من أبرز مراكز الاستثمار العقاري للأجانب في تركيا. من لارا إلى كونيا آلتي ومن بيليك إلى ألانيا، يقتني الآلاف من الأجانب عقارات سنوياً للسكن أو الاستثمار. غير أن القانون العقاري التركي يتضمن إجراءات خاصة بالدولة؛ وقد تؤدي عمليات نقل الملكية والالتزامات الضريبية والمخاطر التعاقدية إلى خسائر كبيرة دون توجيه قانوني سليم.\n\nيدير مكتبنا جميع المراحل للعملاء الأجانب — مشترين أو بائعين — بدءاً من معاملات سند الملكية وصياغة عقود البيع وصولاً إلى الاستفسارات عن المناطق العسكرية المقيدة ومراجعة تقارير التقييم. وبصفتنا محامي عقارات في أنطاليا، نضمن عملية شفافة وآمنة للمعاملة أو الإيجار تحمي حقوق الموكل في كل مرحلة.",
      es: "Antalya es uno de los centros de inversión inmobiliaria más populares para extranjeros en Turquía. Desde Lara hasta Konyaaltı, desde Belek hasta Alanya, miles de extranjeros adquieren propiedades cada año para vivir o invertir. Sin embargo, el derecho inmobiliario turco implica procesos específicos del país; las transmisiones de propiedad, las obligaciones fiscales y los riesgos contractuales pueden generar pérdidas sustanciales sin una adecuada orientación jurídica.\n\nNuestro despacho gestiona cada etapa para clientes extranjeros — compradores o vendedores — desde las transacciones de escritura de propiedad y la redacción de contratos de compraventa hasta las consultas sobre zonas militares restringidas y la revisión de informes de tasación. Como abogado inmobiliario en Antalya, nuestro objetivo es garantizar un proceso de transacción o arrendamiento transparente y seguro que proteja los derechos del cliente en cada etapa.",
      fr: "Antalya est l'un des pôles d'investissement immobilier les plus prisés par les étrangers en Turquie. De Lara à Konyaaltı, de Belek à Alanya, des milliers d'étrangers acquièrent chaque année des biens immobiliers pour y vivre ou y investir. Or, le droit immobilier turc comporte des procédures spécifiques au pays ; les transferts de titre de propriété, les obligations fiscales et les risques contractuels peuvent entraîner des pertes importantes sans un accompagnement juridique adéquat.\n\nNotre cabinet gère chaque étape pour les clients étrangers — acheteurs ou vendeurs — depuis les opérations de titre de propriété et la rédaction des contrats de vente jusqu'aux requêtes relatives aux zones militaires restreintes et à l'examen des rapports d'expertise. En tant qu'avocat immobilier à Antalya, notre objectif est d'assurer un processus de transaction ou de location transparent et sécurisé, protégeant les droits du client à chaque étape.",
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
      es: [
        "Transacciones de transmisión de escritura y representación ante el registro de la propiedad",
        "Redacción de contratos de promesa de compraventa y contratos con protección de pago anticipado",
        "Consultas sobre zonas militares restringidas y permisos de venta a extranjeros",
        "Informes de tasación, registros de título y revisión de hipotecas",
        "Contratos de arrendamiento, disputas por incremento de renta y procedimientos de desahucio",
        "Construcción, constitución de condominio y disputas de propiedad horizontal",
        "Asesoría jurídica sobre zonas comunes y administración de urbanizaciones",
        "Impuestos (derechos de escritura, IVA, impuesto sobre bienes inmuebles) y procesos de transferencia de divisas",
      ],
      fr: [
        "Transactions de transfert de titre de propriété et représentation auprès du conservateur des hypothèques",
        "Rédaction de promesses de vente et de contrats de vente avec protection des acomptes",
        "Requêtes relatives aux zones militaires restreintes et permis de vente aux étrangers",
        "Rapports d'expertise, registres de titre et examen des hypothèques",
        "Contrats de location, litiges liés aux augmentations de loyer et procédures d'expulsion",
        "Construction, établissement de copropriété et litiges de propriété par étages",
        "Conseil juridique sur les parties communes et la gestion de résidence",
        "Impôts (droits d'enregistrement, TVA, taxe foncière) et processus de transfert de devises",
      ],
    },
    process: {
      tr: "Yabancı bir alıcı için her gayrimenkul süreci, mülkün hukuki durumunun ön incelemesi ile başlar: tapu kaydı, ipotek/haciz şerhleri, imar durumu ve askeri bölge sorgulaması. Ardından satıcı ile pazarlık ve sözleşme aşamasında müvekkilin lehine maddeler düzenler, gerekli depozito düzenlemelerini hazırlarız. Tapu devrinde noter ve tapu müdürlüğünde müvekkili temsil eder; ödeme akışı, döviz transferi ve vergi yükümlülüklerini koordine ederiz. Süreç sonrası abonelik açılışı, vergi numarası alımı ve bina yönetim ilişkileri konusunda da rehberlik sağlarız.",
      en: "For a foreign buyer, every real estate process begins with a legal due diligence: title records, mortgage/lien notes, zoning status, and military zone inquiry. We then negotiate with the seller, draft contract clauses favorable to the client, and arrange the necessary deposit terms. At the title transfer stage, we represent the client before the notary and land registry, and coordinate the payment flow, foreign-exchange transfer, and tax obligations. Post-closing, we also guide on utility setup, tax number registration, and building management relations.",
      de: "Für einen ausländischen Käufer beginnt jeder Immobilienvorgang mit einer rechtlichen Due-Diligence: Grundbuchprüfung, Hypothek/Pfandvermerke, Bauzustand und Militärzonenanfrage. Anschließend verhandeln wir mit dem Verkäufer, formulieren mandantengünstige Vertragsklauseln und gestalten die erforderlichen Anzahlungsvereinbarungen. Bei der Grundbuchübertragung vertreten wir den Mandanten vor Notar und Grundbuchamt und koordinieren Zahlungsfluss, Devisentransfer und Steuerpflichten. Nach Abschluss begleiten wir auch bei Versorgungsanmeldungen, Steuernummerregistrierung und der Hausverwaltung.",
      ru: "Для иностранного покупателя каждая сделка с недвижимостью начинается с юридической проверки: записи кадастра, заметки об ипотеке/залогах, градостроительный статус и запрос по военным зонам. Затем мы ведём переговоры с продавцом, составляем выгодные клиенту условия договора и оформляем необходимые соглашения о задатке. На этапе передачи прав собственности мы представляем клиента у нотариуса и в кадастровом управлении, координируем поток платежей, валютные переводы и налоговые обязательства. После сделки мы помогаем с подключением коммунальных услуг, получением налогового номера и взаимодействием с управляющей компанией.",
      ar: "بالنسبة للمشتري الأجنبي، تبدأ كل عملية عقارية بفحص قانوني: سجلات الطابو وملاحظات الرهن/الحجز ووضع التخطيط والاستفسار عن المنطقة العسكرية. ثم نتفاوض مع البائع ونصوغ بنوداً تخدم الموكل ونرتّب شروط الدفعة المقدمة الضرورية. عند نقل الملكية نمثل الموكل أمام كاتب العدل ودائرة الطابو، وننسّق تدفق المدفوعات وتحويل العملات والالتزامات الضريبية. وبعد الإغلاق نوجه أيضاً بشأن تركيب المرافق والحصول على الرقم الضريبي والعلاقة مع إدارة المبنى.",
      es: "Para un comprador extranjero, todo proceso inmobiliario comienza con una diligencia debida legal: registros de título, anotaciones de hipoteca/gravamen, estado urbanístico y consulta de zona militar. A continuación, negociamos con el vendedor, redactamos cláusulas favorables al cliente y acordamos los términos del depósito necesarios. En la fase de transmisión de la escritura, representamos al cliente ante el notario y el registro de la propiedad, y coordinamos el flujo de pagos, la transferencia de divisas y las obligaciones fiscales. Tras el cierre, también orientamos sobre la contratación de suministros, el registro del número fiscal y las relaciones con la administración del edificio.",
      fr: "Pour un acheteur étranger, tout processus immobilier commence par une due diligence juridique : registres de titre de propriété, mentions d'hypothèque ou de nantissement, état d'urbanisme et requête relative à la zone militaire. Nous négocions ensuite avec le vendeur, rédigeons des clauses favorables au client et établissons les conditions de dépôt de garantie nécessaires. Lors du transfert de titre, nous représentons le client devant le notaire et le conservateur des hypothèques, et coordonnons le flux des paiements, le transfert de devises et les obligations fiscales. Après la clôture, nous guidons également sur la souscription des contrats d'énergie, l'immatriculation fiscale et les relations avec la gestion de l'immeuble.",
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
      es: [
        {
          q: "¿Pueden los extranjeros comprar propiedades en cualquier parte de Turquía?",
          a: "No. Las ventas a extranjeros no están permitidas en zonas militares restringidas ni en determinadas áreas estratégicas. También existen límites sobre la superficie total que un extranjero puede adquirir en Turquía. Por ello, las comprobaciones del título y de zona militar deben preceder a cualquier compra.",
        },
        {
          q: "¿Es obligatorio contar con abogado en la transmisión de la escritura?",
          a: "No es legalmente obligatorio, pero es muy aconsejable. Cuando existe una barrera idiomática, los pagos son en moneda extranjera y los riesgos son elevados — especialmente con inmuebles sobre plano — contar con asesoría independiente es esencial. El funcionario del registro solo inscribe la transmisión, no asesora a las partes.",
        },
        {
          q: "Mi arrendatario rechaza la subida del alquiler — ¿puedo desahuciarlo?",
          a: "La ley turca protege fuertemente a los arrendatarios. Los incrementos de renta están sujetos a tasas específicas y, en ciertos casos, a resolución judicial. El desahucio solo es procedente por los motivos taxativamente previstos en la ley y mediante el procedimiento correcto; el desahucio sin resolución judicial está prohibido.",
        },
      ],
      fr: [
        {
          q: "Les étrangers peuvent-ils acheter des biens immobiliers partout en Turquie ?",
          a: "Non. Les ventes aux étrangers ne sont pas autorisées dans les zones militaires restreintes ni dans certaines zones stratégiques. Il existe également des limites quant à la superficie totale qu'un ressortissant étranger peut acquérir en Turquie. Des vérifications du titre de propriété et de la zone militaire doivent donc précéder tout achat.",
        },
        {
          q: "La présence d'un avocat est-elle obligatoire lors du transfert de titre ?",
          a: "Elle n'est pas légalement obligatoire, mais vivement conseillée. Lorsqu'il existe une barrière linguistique, que les paiements sont en devises étrangères et que les risques sont élevés — notamment pour les biens en cours de construction — un conseil indépendant est indispensable. Le rôle du conservateur des hypothèques est d'inscrire le transfert, non de conseiller les parties.",
        },
        {
          q: "Mon locataire refuse l'augmentation de loyer — puis-je l'expulser ?",
          a: "La loi turque protège fortement les locataires. Les augmentations de loyer sont soumises à des taux précis et, dans certains cas, à une décision judiciaire. L'expulsion n'est possible que pour les motifs limitativement prévus par la loi et selon la procédure adéquate ; l'expulsion sans décision de justice est interdite.",
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
      es: "Abogado de Ciudadanía Turca en Antalya | Ciudadanía por Inversión",
      fr: "Avocat en Nationalité Turque à Antalya | Nationalité par l'Investissement",
    },
    metaDescription: {
      tr: "Yatırım, evlilik veya uzun süreli ikamet yoluyla Türk vatandaşlığı başvurusu için Antalya'da deneyimli vatandaşlık avukatı. Tüm süreç bizimle, doğru ve hızlı.",
      en: "Experienced Turkish citizenship lawyer in Antalya for applications via investment, marriage, or long-term residence. The full process handled accurately and efficiently.",
      de: "Erfahrener Anwalt für die türkische Staatsbürgerschaft in Antalya — für Anträge über Investition, Heirat oder langfristigen Aufenthalt. Der gesamte Prozess: präzise und effizient.",
      ru: "Опытный адвокат по гражданству Турции в Анталье для заявлений через инвестиции, брак или длительное проживание. Весь процесс ведётся точно и эффективно.",
      ar: "محامي جنسية تركية متمرس في أنطاليا لطلبات عبر الاستثمار أو الزواج أو الإقامة طويلة الأمد. ندير العملية كاملةً بدقة وكفاءة.",
      es: "Abogado experimentado en ciudadanía turca en Antalya para solicitudes por inversión, matrimonio o residencia prolongada. Todo el proceso gestionado con precisión y eficiencia.",
      fr: "Avocat expérimenté en nationalité turque à Antalya pour les demandes par investissement, mariage ou résidence de longue durée. L'ensemble du processus géré avec précision et efficacité.",
    },
    intro: {
      tr: "Türk vatandaşlığı, son yıllarda hem yatırımcı hem de uzun süreli yerleşik yabancılar için cazip bir hedef haline gelmiştir. Vatandaşlığı kazanan kişi, oturma izni ihtiyacı olmaksızın Türkiye'de yaşama, çalışma ve mülk edinme hakkına sahip olur; vize muafiyeti bulunan ülkelerde Türk pasaportunun sağladığı seyahat avantajından yararlanabilir.\n\nBüromuz, başlıca üç ana yoldan vatandaşlık başvurularını yürütmektedir: 400.000 ABD doları değerinde gayrimenkul yatırımı, sermaye veya banka mevduatı yatırımı gibi alternatif yatırım yolları; Türk vatandaşıyla evlilik ve aile birliği ile sağlanan başvurular; uzun süreli ikamet izninin akabinde olağan kazanım yolu. Antalya'da Türk vatandaşlığı avukatı olarak başvurunun her aşamasını şeffaf biçimde yönetiyoruz.",
      en: "Turkish citizenship has become an attractive goal in recent years for both investors and long-term resident foreigners. The new citizen gains the right to live, work, and acquire property in Turkey without further residence permits, and benefits from the Turkish passport's travel advantages in visa-exempt countries.\n\nOur firm handles citizenship applications via three main routes: investment routes such as a 400,000 USD real estate investment, capital, or bank deposit; applications based on marriage to a Turkish citizen and family unity; and the standard naturalisation route after long-term residence. As a Turkish citizenship lawyer in Antalya, we manage every stage of the application transparently.",
      de: "Die türkische Staatsbürgerschaft ist in den letzten Jahren sowohl für Investoren als auch für langjährig ansässige Ausländer zu einem attraktiven Ziel geworden. Der neue Staatsbürger erhält das Recht, ohne weitere Aufenthaltserlaubnis in der Türkei zu leben, zu arbeiten und Immobilien zu erwerben, und kann mit dem türkischen Pass die Reisevorteile in visafreien Ländern nutzen.\n\nUnsere Kanzlei begleitet Staatsbürgerschaftsanträge über drei Hauptwege: Investitionswege wie eine Immobilieninvestition von 400.000 USD, Kapital oder Bankeinlage; Anträge aufgrund einer Eheschließung mit einem türkischen Staatsbürger und Familieneinheit; und der reguläre Einbürgerungsweg nach langjährigem Aufenthalt. Als Anwalt für türkische Staatsbürgerschaft in Antalya begleiten wir jede Phase transparent.",
      ru: "Турецкое гражданство в последние годы стало привлекательной целью как для инвесторов, так и для долго проживающих иностранцев. Новый гражданин получает право жить, работать и приобретать недвижимость в Турции без дополнительных видов на жительство, а также пользуется преимуществами турецкого паспорта в безвизовых странах.\n\nНаша фирма ведёт заявления на гражданство по трём основным путям: инвестиционные пути, такие как инвестиция в недвижимость на 400 000 долларов США, капитал или банковский депозит; заявления по браку с гражданином Турции и семейному единству; обычный натурализационный путь после долгосрочного проживания. Как адвокат по гражданству Турции в Анталье, мы прозрачно ведём каждый этап.",
      ar: "أصبحت الجنسية التركية في السنوات الأخيرة هدفاً جذاباً للمستثمرين والأجانب المقيمين لفترات طويلة. يكتسب المواطن الجديد الحق في الإقامة والعمل وامتلاك العقارات في تركيا دون حاجة لتصاريح إقامة إضافية، ويستفيد من مزايا جواز السفر التركي في الدول المعفاة من التأشيرة.\n\nيدير مكتبنا طلبات الجنسية عبر ثلاثة مسارات رئيسية: مسارات الاستثمار مثل استثمار عقاري بقيمة 400,000 دولار أمريكي أو رأس مال أو وديعة مصرفية؛ الطلبات المستندة إلى الزواج من مواطن تركي ووحدة الأسرة؛ والمسار العادي للتجنّس بعد إقامة طويلة الأمد. وبصفتنا محامي الجنسية التركية في أنطاليا، ندير كل مرحلة بشفافية تامة.",
      es: "La ciudadanía turca se ha convertido en los últimos años en un objetivo atractivo tanto para inversores como para extranjeros residentes de larga duración. El nuevo ciudadano adquiere el derecho a vivir, trabajar y adquirir propiedades en Turquía sin necesidad de permisos de residencia adicionales, y se beneficia de las ventajas de viaje del pasaporte turco en países exentos de visado.\n\nNuestro despacho gestiona solicitudes de ciudadanía por tres vías principales: vías de inversión, como una inversión inmobiliaria de 400.000 USD, capital o depósito bancario; solicitudes basadas en matrimonio con un ciudadano turco y unidad familiar; y la vía ordinaria de naturalización tras residencia prolongada. Como abogado de ciudadanía turca en Antalya, gestionamos de forma transparente cada etapa del proceso.",
      fr: "La nationalité turque est devenue ces dernières années un objectif attractif pour les investisseurs comme pour les étrangers résidant depuis longtemps dans le pays. Le nouveau citoyen acquiert le droit de vivre, travailler et acquérir des biens immobiliers en Turquie sans permis de séjour supplémentaires, et bénéficie des avantages de voyage offerts par le passeport turc dans les pays exemptés de visa.\n\nNotre cabinet traite les demandes de nationalité par trois voies principales : les voies d'investissement telles qu'un investissement immobilier de 400 000 USD, du capital ou un dépôt bancaire ; les demandes fondées sur le mariage avec un ressortissant turc et l'unité familiale ; et la voie ordinaire de naturalisation après une résidence de longue durée. En tant qu'avocat en nationalité turque à Antalya, nous gérons chaque étape du processus en toute transparence.",
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
      es: [
        "Solicitudes de ciudadanía por inversión (opciones de bienes inmuebles, capital y depósito)",
        "Identificación de propiedades elegibles, coordinación de tasación y transacciones de escritura",
        "Solicitudes de ciudadanía basadas en matrimonio con un ciudadano turco",
        "Solicitudes de naturalización ordinaria tras residencia prolongada",
        "Solicitudes vinculadas (derivadas) para cónyuge e hijos menores",
        "Litigios ante el tribunal administrativo contra denegaciones de ciudadanía",
        "Análisis de doble ciudadanía y conservación de la ciudadanía actual",
        "Procedimientos de DNI, pasaporte y registro civil tras la ciudadanía",
      ],
      fr: [
        "Demandes de nationalité par investissement (options immobilières, capital, dépôt)",
        "Identification des biens éligibles, coordination de l'expertise et opérations de titre de propriété",
        "Demandes de nationalité fondées sur le mariage avec un ressortissant turc",
        "Demandes de naturalisation ordinaire après résidence de longue durée",
        "Demandes liées (dérivées) pour le conjoint et les enfants mineurs",
        "Contentieux devant le tribunal administratif contre les refus de nationalité",
        "Analyse de la double nationalité et maintien de la nationalité actuelle",
        "Procédures de carte d'identité, passeport et état civil après l'acquisition de la nationalité",
      ],
    },
    process: {
      tr: "Yatırımla vatandaşlık başvurularında ilk adım, müvekkilin profil ve hedeflerine göre en uygun yatırım kanalının belirlenmesidir. Gayrimenkul yolunu tercih edenler için askeri bölge sorgulaması, ekspertiz koordinasyonu ve uygunluk belgesi alınması kritik basamaklardır. Belgelerin (apostil, tercüme, doğum kaydı, sabıka kaydı) eksiksiz hazırlanmasının ardından İl Nüfus Müdürlüğü ve Cumhurbaşkanlığı kararı aşamaları takip edilir. Süreç ortalama 6-12 ay arasında değişir; eş ve reşit olmayan çocukların başvuruları aynı dosya altında yürütülebilir.",
      en: "For citizenship-by-investment applications, the first step is choosing the channel best suited to the client's profile and goals. For the real-estate route, military-zone inquiry, valuation coordination, and obtaining the conformity certificate are critical milestones. After documents (apostille, translation, birth and criminal records) are fully prepared, the Provincial Civil Registry and Presidential decision phases follow. The process typically takes 6–12 months; spouse and minor-child applications can be filed under the same file.",
      de: "Bei der Staatsbürgerschaft durch Investition besteht der erste Schritt darin, den am besten zum Profil und Ziel des Mandanten passenden Investitionsweg zu wählen. Für den Immobilienweg sind die Militärzonenanfrage, die Koordination der Wertgutachten und die Erlangung des Konformitätszertifikats kritisch. Nach vollständiger Vorbereitung der Unterlagen (Apostille, Übersetzung, Geburts- und Führungszeugnis) folgen die Phasen vor dem Provinzpersonenstandsamt und der Präsidentschaftsentscheidung. Der Prozess dauert in der Regel 6–12 Monate; Ehepartner und minderjährige Kinder können in derselben Akte beantragt werden.",
      ru: "При гражданстве через инвестиции первый шаг — выбор канала, наиболее подходящего профилю и целям клиента. Для пути через недвижимость критическими этапами являются запрос по военной зоне, координация оценки и получение сертификата соответствия. После полной подготовки документов (апостиль, перевод, свидетельство о рождении и справка о несудимости) следуют этапы Провинциального управления гражданского состояния и решения Президента. Процесс обычно занимает 6–12 месяцев; заявления супруга и несовершеннолетних детей могут вестись в одном деле.",
      ar: "في طلبات الجنسية بالاستثمار، الخطوة الأولى هي اختيار المسار الأنسب لصورة الموكل وأهدافه. وفي مسار العقار تُعدّ الاستفسار عن المنطقة العسكرية وتنسيق التقييم والحصول على شهادة المطابقة من المحطات الحاسمة. وبعد تجهيز الوثائق كاملةً (التصديق والترجمة وشهادة الميلاد وصحيفة السوابق) تأتي مراحل مديرية النفوس وقرار الرئاسة. وتستغرق العملية عادةً 6–12 شهراً؛ ويمكن تقديم طلبات الزوج والأبناء القاصرين ضمن الملف ذاته.",
      es: "Para las solicitudes de ciudadanía por inversión, el primer paso es elegir el canal mejor adaptado al perfil y los objetivos del cliente. Para la vía inmobiliaria, la consulta de zona militar, la coordinación de la tasación y la obtención del certificado de conformidad son hitos críticos. Tras la preparación completa de los documentos (apostilla, traducción, partida de nacimiento e historial penal), siguen las fases ante la Dirección Provincial del Registro Civil y la decisión presidencial. El proceso suele durar entre 6 y 12 meses; las solicitudes del cónyuge y de los hijos menores pueden tramitarse bajo el mismo expediente.",
      fr: "Pour les demandes de nationalité par investissement, la première étape consiste à choisir la voie la mieux adaptée au profil et aux objectifs du client. Pour la voie immobilière, la requête relative à la zone militaire, la coordination de l'expertise et l'obtention du certificat de conformité sont des étapes cruciales. Après la préparation complète des documents (apostille, traduction, acte de naissance et casier judiciaire), viennent les phases devant la Direction Provinciale de l'État Civil et la décision présidentielle. Le processus dure généralement 6 à 12 mois ; les demandes du conjoint et des enfants mineurs peuvent être déposées dans le même dossier.",
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
      es: [
        {
          q: "¿Perderé mi ciudadanía actual tras adquirir la ciudadanía turca?",
          a: "Turquía permite la doble ciudadanía, pero la conservación de su ciudadanía actual se rige por la ley de su país de origen. Algunos estados permiten una segunda ciudadanía; otros imponen la pérdida automática. Este aspecto debe evaluarse antes de presentar la solicitud.",
        },
        {
          q: "¿Puedo vender de inmediato el inmueble adquirido para la ciudadanía?",
          a: "No. El inmueble que sirve de base para la ciudadanía está sujeto a un compromiso de no enajenación durante un periodo definido. El incumplimiento de este compromiso es una consecuencia jurídica grave que puede dar lugar a la revocación de la ciudadanía. Una vez finalizado el periodo, el inmueble puede venderse libremente.",
        },
        {
          q: "¿Qué puede hacerse si una solicitud de ciudadanía es denegada?",
          a: "Puede acudir a la vía administrativa dentro del plazo legal. Dependiendo del motivo de la denegación, puede presentarse una nueva solicitud tras corregir las deficiencias; es necesaria una estrategia clara para evitar que los mismos motivos vuelvan a plantearse.",
        },
      ],
      fr: [
        {
          q: "Perdrai-je ma nationalité actuelle après l'acquisition de la nationalité turque ?",
          a: "La Turquie autorise la double nationalité, mais la conservation de votre nationalité actuelle est régie par la loi de votre pays d'origine. Certains États admettent une deuxième nationalité, d'autres imposent la perte automatique. Ce point doit être évalué avant le dépôt de la demande.",
        },
        {
          q: "Puis-je vendre immédiatement le bien acquis pour la nationalité ?",
          a: "Non. Le bien servant de base à la nationalité est soumis à un engagement de non-cession pour une durée définie. La violation de cet engagement est une conséquence juridique grave pouvant conduire à la révocation de la nationalité. Une fois cette période écoulée, la vente est libre.",
        },
        {
          q: "Que peut-on faire si une demande de nationalité est refusée ?",
          a: "Vous pouvez engager une procédure administrative dans le délai légal. Selon le motif du refus, une nouvelle demande peut être déposée après correction des lacunes ; une stratégie claire est nécessaire pour éviter que les mêmes motifs soient à nouveau soulevés.",
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
      es: "Abogado de Derecho de Familia en Antalya | Divorcio y Custodia para Extranjeros",
      fr: "Avocat en Droit de la Famille à Antalya | Divorce et Garde d'Enfants pour Étrangers",
    },
    metaDescription: {
      tr: "Yabancı uyrukluların Türkiye'de boşanma, velayet, nafaka, mal paylaşımı ve yabancı mahkeme kararlarının tanınması davalarında deneyimli Aile Hukuku avukatı.",
      en: "Experienced family law attorney for foreigners in Turkey: divorce, custody, alimony, division of property, and recognition of foreign court judgments.",
      de: "Erfahrener Familienrechtsanwalt für Ausländer in der Türkei: Scheidung, Sorgerecht, Unterhalt, Vermögensaufteilung und Anerkennung ausländischer Gerichtsentscheidungen.",
      ru: "Опытный адвокат по семейному праву для иностранцев в Турции: развод, опека, алименты, раздел имущества и признание иностранных судебных решений.",
      ar: "محامي قانون أسرة متمرس للأجانب في تركيا: الطلاق والحضانة والنفقة وتقسيم الأموال والاعتراف بأحكام المحاكم الأجنبية.",
      es: "Abogado experimentado en derecho de familia para extranjeros en Turquía: divorcio, custodia, pensión alimenticia, división de bienes y reconocimiento de sentencias judiciales extranjeras.",
      fr: "Avocat expérimenté en droit de la famille pour les étrangers en Turquie : divorce, garde d'enfants, pension alimentaire, partage des biens et reconnaissance des jugements étrangers.",
    },
    intro: {
      tr: "Aile Hukuku, yabancı uyrukluların Türkiye'de en hassas hukuki süreçlerle karşılaştığı alanlardan biridir. Boşanma, velayet, nafaka ve mal paylaşımı davaları yalnızca hukuki değil aynı zamanda duygusal ağırlığı yüksek süreçlerdir; üstelik uluslararası unsurlar (yabancı uyruk, başka ülkede ikamet, yurtdışında alınmış mahkeme kararları) işin karmaşıklığını artırır.\n\nAntalya'da Aile Hukuku avukatı olarak müvekkillerimize anlaşmalı veya çekişmeli boşanma davaları, çocukların velayeti ve kişisel ilişki düzenlemeleri, nafaka talepleri, yabancı mahkemelerden alınmış boşanma veya vesayet kararlarının Türkiye'de tanınması ve tenfizi gibi tüm alt süreçlerde destek veriyoruz. Mahkeme önünde olduğu kadar arabulucuk masasında da müvekkilin lehine bir çözüm üretmeye çalışırız.",
      en: "Family law is one of the most sensitive areas foreigners encounter in Turkey. Divorce, custody, alimony, and division-of-property cases are not only legally but emotionally demanding; international elements — foreign nationality, residence in another country, judgments rendered abroad — add to the complexity.\n\nAs a family law attorney in Antalya, we represent clients in contested and uncontested divorces, child custody and visitation arrangements, alimony claims, and the recognition and enforcement of foreign divorce or guardianship judgments in Turkey. Whether at trial or at the mediation table, we work to secure the most favourable outcome for the client.",
      de: "Familienrecht gehört zu den sensibelsten Bereichen, mit denen Ausländer in der Türkei in Berührung kommen. Scheidung, Sorgerecht, Unterhalt und Vermögensaufteilung sind nicht nur rechtlich, sondern auch emotional anspruchsvoll; internationale Elemente — fremde Staatsangehörigkeit, Wohnsitz im Ausland, im Ausland ergangene Urteile — erhöhen die Komplexität.\n\nAls Familienrechtsanwalt in Antalya vertreten wir Mandanten in einvernehmlichen und streitigen Scheidungen, Sorgerecht und Umgangsregelungen, Unterhaltsansprüchen sowie Anerkennung und Vollstreckung ausländischer Scheidungs- oder Vormundschaftsurteile in der Türkei. Sowohl vor Gericht als auch am Mediationstisch streben wir das für den Mandanten beste Ergebnis an.",
      ru: "Семейное право — одна из самых деликатных сфер, с которой иностранцы сталкиваются в Турции. Дела о разводе, опеке, алиментах и разделе имущества требуют не только правовых, но и эмоциональных усилий; международные элементы — иностранное гражданство, проживание в другой стране, судебные решения, вынесенные за рубежом — усложняют ситуацию.\n\nКак адвокат по семейному праву в Анталье мы представляем клиентов в спорных и согласованных разводах, делах об опеке и порядке общения с ребёнком, требованиях об алиментах, а также признании и приведении в исполнение иностранных решений о разводе или опеке в Турции. Будь то в суде или на медиации — мы добиваемся наиболее благоприятного для клиента результата.",
      ar: "يعدّ قانون الأسرة من أكثر المجالات حساسيةً التي يواجهها الأجانب في تركيا. فقضايا الطلاق والحضانة والنفقة وتقسيم الأموال ليست قانونية فحسب بل ذات أبعاد عاطفية ثقيلة؛ كما تزيد العناصر الدولية — الجنسية الأجنبية والإقامة في بلد آخر والأحكام الصادرة في الخارج — من تعقيد الأمور.\n\nبصفتنا محامي قانون أسرة في أنطاليا، نمثّل الموكلين في الطلاق التوافقي والخلافي وترتيبات حضانة الأطفال والزيارة ومطالبات النفقة والاعتراف بأحكام الطلاق أو الوصاية الأجنبية وتنفيذها في تركيا. سواء أمام المحكمة أو على طاولة الوساطة، نعمل لتحقيق أفضل نتيجة للموكل.",
      es: "El derecho de familia es una de las áreas más delicadas con las que los extranjeros se encuentran en Turquía. Los procedimientos de divorcio, custodia, pensión alimenticia y división de bienes no solo son exigentes desde el punto de vista jurídico, sino también emocionalmente; los elementos internacionales — nacionalidad extranjera, residencia en otro país, sentencias dictadas en el extranjero — añaden complejidad.\n\nComo abogado de derecho de familia en Antalya, representamos a clientes en divorcios contenciosos y de mutuo acuerdo, arreglos de custodia y visitas, reclamaciones de pensión alimenticia, y el reconocimiento y ejecución de sentencias extranjeras de divorcio o tutela en Turquía. Tanto en el juicio como en la mediación, trabajamos para obtener el resultado más favorable para el cliente.",
      fr: "Le droit de la famille est l'un des domaines les plus sensibles auxquels les étrangers sont confrontés en Turquie. Les affaires de divorce, de garde, de pension alimentaire et de partage de biens sont non seulement juridiquement mais aussi émotionnellement éprouvantes ; les éléments internationaux — nationalité étrangère, résidence dans un autre pays, jugements rendus à l'étranger — ajoutent à la complexité.\n\nEn tant qu'avocat en droit de la famille à Antalya, nous représentons des clients dans les divorces contentieux et par consentement mutuel, les arrangements de garde et de droit de visite, les demandes de pension alimentaire, ainsi que la reconnaissance et l'exécution en Turquie de jugements de divorce ou de tutelle étrangers. Que ce soit devant le tribunal ou à la table de médiation, nous travaillons à obtenir le résultat le plus favorable pour le client.",
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
      es: [
        "Procedimientos de divorcio contencioso y de mutuo acuerdo",
        "Arreglos de custodia, régimen de visitas y entrega del menor",
        "Pensión alimenticia para hijos, pensión provisional y pensión conyugal",
        "Liquidación del régimen económico matrimonial y reclamaciones por participación en ganancias",
        "Reconocimiento y ejecución de sentencias extranjeras de divorcio",
        "Sustracción internacional de menores y procedimientos del Convenio de La Haya",
        "Acuerdos prematrimoniales y capitulaciones matrimoniales",
        "Procedimientos de filiación, tutela y adopción",
      ],
      fr: [
        "Procédures de divorce contentieux et par consentement mutuel",
        "Arrangements de garde, droit de visite et remise de l'enfant",
        "Pension alimentaire pour enfants, pension provisoire et prestation compensatoire",
        "Liquidation du régime matrimonial et actions en participation aux acquêts",
        "Reconnaissance et exécution de jugements de divorce étrangers",
        "Enlèvement international d'enfants et procédures de la Convention de La Haye",
        "Contrats prénuptiaux et contrats de mariage",
        "Procédures de filiation, tutelle et adoption",
      ],
    },
    process: {
      tr: "Aile Hukuku dosyalarında ilk adım, müvekkilin önceliklerini ve dosyanın hukuki çerçevesini netleştirmektir. Çocuğun bulunduğu durumlarda velayet ve kişisel ilişki, ardından mali talepler (nafaka, mal paylaşımı) sıralanır. Mümkün olduğu durumlarda anlaşmalı boşanma ve protokol yoluyla kısa sürede sonuç almayı tercih ederiz; ancak çekişmeli süreçte de delillerin doğru sunumu, tanık ve bilirkişi yönetimi ile mahkeme önünde etkili savunma sağlarız. Yabancı uyruklu müvekkillerde, eşlerin yargı yetkisi seçimi ve uluslararası mahkeme kararlarının Türkiye'de tanınması özel bir dikkat ve deneyim gerektirir.",
      en: "Family law cases begin by clarifying the client's priorities and the legal framework of the file. Where children are involved, custody and visitation come first, followed by financial claims (alimony, division of property). Where possible, we prefer uncontested divorce and protocol-based resolution to obtain swift outcomes; in contested proceedings, we ensure proper presentation of evidence, witness and expert management, and effective defence before the court. For foreign clients, choice of jurisdiction and recognition of foreign judgments in Turkey require particular care and experience.",
      de: "Familienrechtsfälle beginnen mit der Klärung der Prioritäten des Mandanten und des rechtlichen Rahmens der Akte. Sind Kinder involviert, stehen Sorgerecht und Umgang an erster Stelle, gefolgt von finanziellen Ansprüchen (Unterhalt, Vermögensaufteilung). Wo möglich, bevorzugen wir einvernehmliche Scheidung und Protokollvereinbarungen für schnelle Ergebnisse; im streitigen Verfahren sorgen wir für die korrekte Beweisführung, Zeugen- und Sachverständigenmanagement und eine wirksame Verteidigung vor Gericht. Für ausländische Mandanten erfordern Gerichtsstandwahl und Anerkennung ausländischer Urteile in der Türkei besondere Sorgfalt und Erfahrung.",
      ru: "Семейные дела начинаются с уточнения приоритетов клиента и правовой основы дела. Если есть дети, на первом плане — опека и общение, затем финансовые требования (алименты, раздел имущества). По возможности мы предпочитаем согласованный развод и протокольное урегулирование для быстрого результата; в спорных делах обеспечиваем правильное представление доказательств, работу со свидетелями и экспертами, эффективную защиту в суде. Для иностранных клиентов выбор подсудности и признание иностранных решений в Турции требуют особого внимания и опыта.",
      ar: "تبدأ قضايا الأسرة بتوضيح أولويات الموكل والإطار القانوني للملف. وعند وجود أطفال تتقدم الحضانة والزيارة، تتلوها المطالبات المالية (النفقة وتقسيم الأموال). نفضّل عند الإمكان الطلاق التوافقي والتسوية بالبروتوكول للوصول لنتائج سريعة؛ وفي الإجراءات الخلافية نضمن العرض السليم للأدلة وإدارة الشهود والخبراء والدفاع الفعّال أمام المحكمة. وفي قضايا الموكلين الأجانب يتطلب اختيار الاختصاص والاعتراف بالأحكام الأجنبية في تركيا خبرة خاصة.",
      es: "Los casos de derecho de familia comienzan por aclarar las prioridades del cliente y el marco jurídico del expediente. Cuando hay menores implicados, la custodia y el régimen de visitas son lo primero, seguidos de las reclamaciones económicas (pensión alimenticia, división de bienes). Cuando es posible, preferimos el divorcio de mutuo acuerdo y la resolución por protocolo para obtener resultados rápidos; en los procedimientos contenciosos garantizamos la correcta presentación de pruebas, la gestión de testigos y peritos, y una defensa eficaz ante el tribunal. Para clientes extranjeros, la elección de la jurisdicción y el reconocimiento de sentencias extranjeras en Turquía requieren un cuidado y una experiencia particulares.",
      fr: "Les affaires familiales débutent par la clarification des priorités du client et du cadre juridique du dossier. Lorsque des enfants sont impliqués, la garde et le droit de visite viennent en premier, suivis des demandes financières (pension alimentaire, partage des biens). Lorsque c'est possible, nous privilégions le divorce par consentement mutuel et la résolution par protocole pour obtenir des résultats rapides ; dans les procédures contentieuses, nous assurons une présentation correcte des preuves, la gestion des témoins et des experts, et une défense efficace devant le tribunal. Pour les clients étrangers, le choix de la juridiction et la reconnaissance des jugements étrangers en Turquie requièrent une attention et une expérience particulières.",
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
      es: [
        {
          q: "¿Pueden los extranjeros demandar el divorcio en Turquía?",
          a: "Sí. Los tribunales turcos conocen de los procedimientos de divorcio con elementos internacionales cuando los cónyuges tienen residencia en Turquía o existe una conexión suficiente. El derecho aplicable se determina con arreglo a las normas de derecho internacional privado.",
        },
        {
          q: "¿Es válida mi sentencia de divorcio extranjera en Turquía?",
          a: "No automáticamente. Para que una sentencia extranjera produzca efecto jurídico en Turquía, deben iniciarse procedimientos de reconocimiento y ejecución. Si la sentencia es compatible con el orden público turco, se inscribirá en el registro civil.",
        },
        {
          q: "¿Cómo se decide la custodia?",
          a: "La custodia se decide en función del interés superior del menor. Se consideran conjuntamente la edad, las condiciones de cuidado físico y psicológico, las circunstancias de los progenitores y, cuando proceda, la opinión del propio menor. También pueden obtenerse informes periciales.",
        },
      ],
      fr: [
        {
          q: "Les étrangers peuvent-ils demander le divorce en Turquie ?",
          a: "Oui. Les tribunaux turcs connaissent des affaires de divorce présentant des éléments internationaux lorsque les époux ont leur résidence en Turquie ou qu'il existe un rattachement suffisant. Le droit applicable est déterminé selon les règles du droit international privé.",
        },
        {
          q: "Mon jugement de divorce étranger est-il valide en Turquie ?",
          a: "Pas automatiquement. Pour qu'un jugement étranger produise des effets juridiques en Turquie, une procédure de reconnaissance et d'exécution doit être engagée. S'il n'est pas contraire à l'ordre public turc, il est alors inscrit à l'état civil.",
        },
        {
          q: "Comment la garde est-elle décidée ?",
          a: "La garde est décidée en référence à l'intérêt supérieur de l'enfant. L'âge, les conditions de prise en charge physique et psychologique, la situation des parents et, le cas échéant, l'avis de l'enfant lui-même sont pris en compte conjointement. Des rapports d'expertise peuvent également être obtenus.",
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
      es: "Abogado Mercantil en Antalya | Constitución de Sociedades y Contratos para Extranjeros",
      fr: "Avocat Commercial à Antalya | Création de Sociétés et Contrats pour Étrangers",
    },
    metaDescription: {
      tr: "Yabancı yatırımcılar için Antalya'da şirket kurma, ticari sözleşme, ortaklık anlaşmaları, ticari dava ve uyuşmazlık çözümünde deneyimli Ticaret Hukuku avukatı.",
      en: "Experienced commercial lawyer in Antalya for foreign investors: company formation, commercial contracts, shareholder agreements, commercial litigation, and dispute resolution.",
      de: "Erfahrener Wirtschaftsanwalt in Antalya für ausländische Investoren: Firmengründung, Handelsverträge, Gesellschafterverträge, Handelsprozesse und Streitbeilegung.",
      ru: "Опытный адвокат по коммерческому праву в Анталье для иностранных инвесторов: учреждение компаний, коммерческие контракты, акционерные соглашения, коммерческие споры.",
      ar: "محامي تجاري متمرس في أنطاليا للمستثمرين الأجانب: تأسيس الشركات والعقود التجارية واتفاقيات المساهمين والتقاضي وتسوية النزاعات.",
      es: "Abogado mercantil experimentado en Antalya para inversores extranjeros: constitución de sociedades, contratos mercantiles, acuerdos de accionistas, litigios y resolución de disputas.",
      fr: "Avocat commercial expérimenté à Antalya pour les investisseurs étrangers : création de sociétés, contrats commerciaux, conventions d'actionnaires, contentieux commercial et résolution de litiges.",
    },
    intro: {
      tr: "Türkiye, yabancı sermayeli şirket kuruluşunun nispeten kolay ve şeffaf olduğu az sayıdaki ülkeden biridir. Yatırımcılar limited şirket, anonim şirket, şube ya da irtibat ofisi gibi farklı yapılar arasından, vergi planlaması ve uzun vadeli stratejiye uygun olanı seçebilir. Ancak doğru yapı seçimi kadar imzalanan ticari sözleşmelerin Türk Hukukuna uygun düzenlenmesi de büyümenin sürdürülebilirliğini doğrudan etkiler.\n\nAntalya'da ticaret avukatı olarak şirket kuruluşundan ortak girişim sözleşmelerine, distribütörlük ve franchise düzenlemelerinden ortaklık uyuşmazlıklarına kadar tüm ticari hukuk süreçlerinde danışmanlık sağlıyoruz. Vergisel etkinlik, yönetim hakimiyeti ve çıkış stratejisi her sözleşmenin tasarımında dikkate aldığımız unsurlardır.",
      en: "Turkey is one of the few countries where setting up a company with foreign capital is relatively straightforward and transparent. Investors may choose between limited liability and joint-stock companies, branches, or liaison offices according to tax planning and long-term strategy. Yet alongside the right structure, drafting commercial contracts in line with Turkish law directly affects the sustainability of growth.\n\nAs a commercial lawyer in Antalya, we advise on the full spectrum — company formation, joint ventures, distribution and franchise arrangements, and shareholder disputes. Tax efficiency, governance control, and exit strategy are factors we take into account in every contract design.",
      de: "Die Türkei zählt zu den wenigen Ländern, in denen die Gründung einer Gesellschaft mit ausländischem Kapital vergleichsweise einfach und transparent ist. Investoren können zwischen GmbH und AG, Niederlassungen oder Verbindungsbüros wählen, je nach Steuerplanung und langfristiger Strategie. Neben der richtigen Struktur ist die rechtskonforme Gestaltung kommerzieller Verträge entscheidend für nachhaltiges Wachstum.\n\nAls Wirtschaftsanwalt in Antalya beraten wir vom Firmenaufbau über Joint-Venture-, Vertriebs- und Franchise-Verträge bis hin zu Gesellschafterstreitigkeiten. Steuereffizienz, Führungskontrolle und Ausstiegsstrategie sind Faktoren, die wir bei jedem Vertrag berücksichtigen.",
      ru: "Турция — одна из немногих стран, где регистрация компании с иностранным капиталом относительно проста и прозрачна. Инвесторы могут выбрать между ООО и АО, филиалом или представительством в зависимости от налогового планирования и долгосрочной стратегии. Помимо правильной структуры, составление коммерческих контрактов в соответствии с турецким правом напрямую влияет на устойчивость роста.\n\nКак адвокат по коммерческому праву в Анталье мы консультируем по полному спектру — регистрация компаний, совместные предприятия, дистрибуция и франчайзинг, споры акционеров. Налоговая эффективность, корпоративное управление и стратегия выхода — факторы, которые мы учитываем при разработке каждого договора.",
      ar: "تعدّ تركيا من الدول القلائل التي يكون فيها تأسيس شركة برأس مال أجنبي يسيراً وشفافاً نسبياً. ويمكن للمستثمرين الاختيار بين الشركات المحدودة وشركات المساهمة والفروع ومكاتب الاتصال وفقاً للتخطيط الضريبي والاستراتيجية بعيدة المدى. وإلى جانب الهيكل الصحيح، تؤثر صياغة العقود التجارية وفق القانون التركي مباشرةً في استدامة النمو.\n\nبصفتنا محامين تجاريين في أنطاليا، نقدم المشورة عبر السلسلة الكاملة — تأسيس الشركات والمشاريع المشتركة والتوزيع والامتياز ونزاعات المساهمين. كفاءة الضريبة وحوكمة الإدارة واستراتيجية الخروج عناصر نُراعيها في تصميم كل عقد.",
      es: "Turquía es uno de los pocos países donde constituir una sociedad con capital extranjero es relativamente sencillo y transparente. Los inversores pueden elegir entre sociedades de responsabilidad limitada y anónimas, sucursales u oficinas de representación, en función de la planificación fiscal y la estrategia a largo plazo. Además de la estructura adecuada, la redacción de contratos mercantiles conforme al derecho turco influye directamente en la sostenibilidad del crecimiento.\n\nComo abogado mercantil en Antalya, asesoramos en todo el espectro: constitución de sociedades, empresas conjuntas, contratos de distribución y franquicia, y disputas entre accionistas. La eficiencia fiscal, el control de la gobernanza y la estrategia de salida son factores que tomamos en cuenta en el diseño de cada contrato.",
      fr: "La Turquie est l'un des rares pays où la création d'une société à capital étranger est relativement simple et transparente. Les investisseurs peuvent choisir entre des sociétés à responsabilité limitée et des sociétés anonymes, des succursales ou des bureaux de représentation, en fonction de la planification fiscale et de la stratégie à long terme. En plus de la bonne structure, la rédaction de contrats commerciaux conformes au droit turc influe directement sur la pérennité de la croissance.\n\nEn tant qu'avocat commercial à Antalya, nous conseillons sur l'intégralité du spectre : création de sociétés, coentreprises, contrats de distribution et de franchise, et litiges entre actionnaires. L'efficacité fiscale, le contrôle de la gouvernance et la stratégie de sortie sont des facteurs que nous prenons en compte dans la conception de chaque contrat.",
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
      es: [
        "Constitución de sociedades de responsabilidad limitada y anónimas, redacción de estatutos",
        "Registro en MERSİS e inscripciones en el Registro Mercantil para sociedades con capital extranjero",
        "Establecimiento de sucursales, oficinas de representación y estructuras de franquicia",
        "Transmisión de participaciones, aumentos de capital y procedimientos de exclusión",
        "Contratos de distribución, concesión, empresa conjunta y acuerdos de accionistas",
        "Revisión, negociación y modificación de contratos mercantiles",
        "Litigios mercantiles, mediación y arbitraje",
        "Asesoría en insolvencia, concurso de acreedores y sobreendeudamiento",
      ],
      fr: [
        "Création de sociétés à responsabilité limitée et anonymes, rédaction des statuts",
        "Immatriculation MERSİS et inscriptions au registre du commerce pour les sociétés à capital étranger",
        "Établissement de succursales, bureaux de représentation et structures de franchise",
        "Cessions de parts, augmentations de capital et procédures d'exclusion",
        "Contrats de distribution, de concession, de coentreprise et conventions d'actionnaires",
        "Examen, négociation et révision de contrats commerciaux",
        "Contentieux commercial, médiation et arbitrage",
        "Conseil en insolvabilité, concordat et surendettement",
      ],
    },
    process: {
      tr: "Bir yabancı yatırımcı için süreç önce hedef analizi ve uygun şirket tipinin belirlenmesi ile başlar. Ardından noter, MERSİS, ticaret sicil ve vergi dairesi nezdinde gerekli işlemler yürütülür; banka hesapları, e-imza ve ticari defterler açılır. Ortaklık ilişkisinin sürdürülmesinde esas sözleşme yanında pay sahipleri sözleşmesi ile yönetim haklarının ve çıkış senaryolarının açıkça düzenlenmesi tavsiye edilir. Uyuşmazlık çıktığında öncelikle arabuluculuk ve müzakere; sonuç alınamadığında ticari mahkeme veya tahkim yolu işletilir.",
      en: "For a foreign investor, the process begins with goal analysis and selecting the appropriate company type. The required steps before the notary, MERSİS, trade registry, and tax office are then carried out; bank accounts, electronic signatures, and commercial books are opened. To preserve the partnership relationship, alongside the articles of association, a shareholders' agreement clearly regulating governance rights and exit scenarios is advised. If a dispute arises, mediation and negotiation come first; failing that, commercial litigation or arbitration is pursued.",
      de: "Für einen ausländischen Investor beginnt der Prozess mit der Zielanalyse und der Wahl der geeigneten Gesellschaftsform. Anschließend werden die erforderlichen Schritte bei Notar, MERSİS, Handelsregister und Finanzamt durchgeführt; Bankkonten, elektronische Signaturen und Handelsbücher werden eingerichtet. Zur Erhaltung der Gesellschafterbeziehung empfiehlt sich neben der Satzung ein Gesellschaftervertrag, der Mitspracherechte und Ausstiegsszenarien klar regelt. Bei einem Streit gehen Mediation und Verhandlung vor; gelingt dies nicht, folgen Handelsprozess oder Schiedsverfahren.",
      ru: "Для иностранного инвестора процесс начинается с анализа целей и выбора подходящего типа компании. Затем выполняются необходимые шаги перед нотариусом, в MERSİS, торговом реестре и налоговой инспекции; открываются банковские счета, оформляются электронные подписи и коммерческие книги. Для сохранения партнёрских отношений, помимо устава, рекомендуется акционерное соглашение, чётко регулирующее права управления и сценарии выхода. При возникновении спора сначала применяются медиация и переговоры; при их неэффективности — коммерческий суд или арбитраж.",
      ar: "بالنسبة للمستثمر الأجنبي تبدأ العملية بتحليل الأهداف واختيار نوع الشركة المناسب. ثم تُنفَّذ الخطوات اللازمة أمام كاتب العدل وMERSİS والسجل التجاري ومصلحة الضرائب؛ وتُفتح الحسابات المصرفية وتُستخرج التوقيعات الإلكترونية والدفاتر التجارية. وللحفاظ على علاقة الشراكة، يُنصح بإبرام اتفاقية مساهمين إلى جانب النظام الأساسي، تنظم بوضوح حقوق الإدارة وسيناريوهات الخروج. وعند النزاع تُقدَّم الوساطة والتفاوض؛ وعند تعذرهما يُلجأ إلى المحكمة التجارية أو التحكيم.",
      es: "Para un inversor extranjero, el proceso comienza con el análisis de los objetivos y la selección del tipo de sociedad adecuado. A continuación se realizan los trámites necesarios ante el notario, MERSİS, el Registro Mercantil y la Administración Tributaria; se abren cuentas bancarias, se tramitan las firmas electrónicas y los libros mercantiles. Para preservar la relación societaria, además de los estatutos, se aconseja un acuerdo de accionistas que regule claramente los derechos de gobernanza y los escenarios de salida. Si surge un conflicto, se da prioridad a la mediación y la negociación; de no prosperar, se acude a la jurisdicción mercantil o al arbitraje.",
      fr: "Pour un investisseur étranger, le processus commence par une analyse des objectifs et la sélection du type de société approprié. Les démarches nécessaires devant le notaire, MERSİS, le registre du commerce et l'administration fiscale sont ensuite accomplies ; des comptes bancaires, des signatures électroniques et des livres de commerce sont ouverts. Pour préserver la relation entre associés, il est conseillé, en plus des statuts, de conclure une convention d'actionnaires réglementant clairement les droits de gouvernance et les scénarios de sortie. En cas de litige, la médiation et la négociation sont privilégiées ; à défaut, la juridiction commerciale ou l'arbitrage est engagé.",
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
      es: [
        {
          q: "¿Debe el inversor extranjero tener un socio turco para constituir una sociedad?",
          a: "No. Una persona física o jurídica extranjera puede constituir una sociedad en Turquía como único socio al 100%. No existe requisito de socio turco ni de director local.",
        },
        {
          q: "¿Debo elegir una sociedad de responsabilidad limitada o una sociedad anónima?",
          a: "Las sociedades de responsabilidad limitada son adecuadas para estructuras pequeñas y medianas con gestión flexible; las sociedades anónimas son preferibles cuando importa un capital más elevado, la facilidad de transmisión de acciones y el potencial de salida a bolsa. La decisión depende del impacto fiscal y la estrategia a largo plazo.",
        },
        {
          q: "Se ha interpuesto una demanda en el extranjero contra mi sociedad en Turquía — ¿qué hacer?",
          a: "El fuero y el derecho aplicable son fundamentales. Se revisa la cláusula de jurisdicción o arbitraje del contrato. También es necesario prepararse para la eventual fase de ejecución en Turquía.",
        },
      ],
      fr: [
        {
          q: "L'investisseur étranger doit-il avoir un associé turc pour créer une société ?",
          a: "Non. Une personne physique ou morale étrangère peut constituer une société en Turquie en tant qu'unique associé à 100 %. Il n'existe pas d'obligation d'avoir un associé turc ou un directeur local.",
        },
        {
          q: "Faut-il choisir une SARL ou une société anonyme ?",
          a: "Les SARL conviennent aux structures petites et moyennes avec une gestion flexible ; les sociétés anonymes sont préférées lorsqu'un capital plus élevé, la facilité de cession d'actions et le potentiel d'introduction en bourse comptent. La décision dépend de l'impact fiscal et de la stratégie à long terme.",
        },
        {
          q: "Une action a été intentée à l'étranger contre ma société en Turquie — que faire ?",
          a: "Le for et le droit applicable sont déterminants. La clause de compétence ou d'arbitrage du contrat est examinée. Il convient également de se préparer à l'éventuelle phase d'exécution en Turquie.",
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
      es: "Abogado de Sucesiones en Antalya | Herencia y Derecho Testamentario para Extranjeros",
      fr: "Avocat en Droit des Successions à Antalya | Succession et Droit Testamentaire pour Étrangers",
    },
    metaDescription: {
      tr: "Türkiye'de yabancıların miras intikali, vasiyetname düzenleme, mirasın reddi, tereke tespiti ve yabancı vasiyetlerin tanınmasında deneyimli Miras Hukuku avukatı.",
      en: "Experienced inheritance lawyer for foreigners in Turkey: estate transfer, will preparation, renunciation of inheritance, estate inventory, and recognition of foreign wills.",
      de: "Erfahrener Erbrechtsanwalt für Ausländer in der Türkei: Erbübergang, Testamentserrichtung, Erbausschlagung, Nachlassinventar und Anerkennung ausländischer Testamente.",
      ru: "Опытный адвокат по наследственному праву для иностранцев в Турции: оформление наследства, составление завещаний, отказ от наследства, инвентаризация и признание иностранных завещаний.",
      ar: "محامي ميراث متمرس للأجانب في تركيا: نقل التركات وإعداد الوصايا والتنازل عن الإرث وجرد التركة والاعتراف بالوصايا الأجنبية.",
      es: "Abogado de sucesiones experimentado para extranjeros en Turquía: transmisión de herencia, redacción de testamentos, renuncia a la herencia, inventario del caudal hereditario y reconocimiento de testamentos extranjeros.",
      fr: "Avocat expérimenté en droit des successions pour les étrangers en Turquie : transmission de la succession, rédaction de testaments, renonciation à la succession, inventaire successoral et reconnaissance de testaments étrangers.",
    },
    intro: {
      tr: "Türkiye'de gayrimenkul, banka hesabı veya iştirak edinen pek çok yabancı, zamanla bu varlıkların miras yoluyla aile bireylerine intikali sorunuyla karşılaşır. Mirasçıların farklı ülkelerde yaşıyor olması, Türk vatandaşı olmamaları ve bazı dosyalarda yabancı bir mahkemenin verdiği kararla işlem yapılması gerekmesi süreci karmaşıklaştırır. Doğru bilgi ve doğru hukuki rehberlik olmaksızın bu dosyalar aylar hatta yıllarca sürüncemede kalabilir.\n\nAntalya'da miras avukatı olarak yabancı mirasçılara veraset belgesi alınmasından tereke tespitine, intikal işlemlerinden mirasın paylaşımına ve yabancı ülke vasiyetlerinin Türkiye'de tanınmasına kadar tüm süreçlerde destek vermekteyiz. Henüz hayattayken Türkiye'deki malvarlığını aile fertlerine doğru şekilde aktarmak isteyenlere de vasiyetname düzenlemesi ve miras sözleşmeleri konusunda rehberlik ediyoruz.",
      en: "Many foreigners who own property, bank accounts, or interests in Turkey eventually face the question of how those assets will pass to their heirs. The fact that heirs may live in different countries, may not hold Turkish citizenship, and in some files require action under foreign court orders adds significant complexity. Without proper information and legal guidance, such files can drag on for months or even years.\n\nAs an inheritance lawyer in Antalya, we support foreign heirs through every stage — issuance of certificates of inheritance, estate inventory, transfer procedures, division of the estate, and the recognition of foreign wills in Turkey. We also advise those who, while still living, wish to transfer their Turkish assets to family members properly, through wills and inheritance agreements.",
      de: "Viele Ausländer, die Immobilien, Bankkonten oder Beteiligungen in der Türkei besitzen, müssen sich irgendwann mit der Frage befassen, wie diese Vermögenswerte auf ihre Erben übergehen. Dass Erben in verschiedenen Ländern leben, möglicherweise keine türkische Staatsangehörigkeit haben und in manchen Akten ausländische Gerichtsbeschlüsse erforderlich sind, erhöht die Komplexität erheblich. Ohne fundierte Informationen und rechtliche Begleitung können solche Akten Monate oder Jahre dauern.\n\nAls Erbrechtsanwalt in Antalya begleiten wir ausländische Erben durch jede Phase — Erbschein, Nachlassinventar, Übertragungsverfahren, Aufteilung des Nachlasses und Anerkennung ausländischer Testamente in der Türkei. Auch beraten wir Personen, die zu Lebzeiten ihre türkischen Vermögenswerte rechtssicher an Familienangehörige übertragen möchten — mittels Testament und Erbverträgen.",
      ru: "Многие иностранцы, владеющие в Турции недвижимостью, счетами или долями, рано или поздно сталкиваются с вопросом передачи этих активов наследникам. Тот факт, что наследники живут в разных странах, могут не иметь турецкого гражданства, а в ряде дел требуются действия по решениям иностранных судов, существенно усложняет процесс. Без надлежащей информации и юридического сопровождения такие дела могут тянуться месяцами или годами.\n\nКак адвокат по наследству в Анталье мы сопровождаем иностранных наследников на всех этапах — выдача свидетельства о праве на наследство, инвентаризация, процедуры перехода прав, раздел наследства и признание иностранных завещаний в Турции. Также мы консультируем тех, кто при жизни хочет правильно передать своё турецкое имущество членам семьи — через завещания и наследственные соглашения.",
      ar: "كثير من الأجانب الذين يملكون عقارات أو حسابات مصرفية أو حصصاً في تركيا يواجهون عاجلاً أو آجلاً مسألة انتقال هذه الأصول إلى الورثة. وكون الورثة قد يقيمون في دول مختلفة وقد لا يحملون الجنسية التركية، وفي بعض الملفات تستوجب أوامر من محاكم أجنبية، يضيف تعقيداً كبيراً. ودون معلومات سليمة وتوجيه قانوني، يمكن أن تطول هذه الملفات أشهراً وحتى سنوات.\n\nبصفتنا محامي ميراث في أنطاليا، نواكب الورثة الأجانب في كل المراحل — استخراج حصر الإرث وجرد التركة وإجراءات النقل وتقسيم التركة والاعتراف بالوصايا الأجنبية في تركيا. كما نقدم المشورة لمن يرغبون أثناء حياتهم بنقل ممتلكاتهم في تركيا إلى أفراد العائلة بشكل صحيح عبر الوصايا واتفاقيات الميراث.",
      es: "Muchos extranjeros que poseen inmuebles, cuentas bancarias o participaciones en Turquía se enfrentan tarde o temprano a la cuestión de cómo transmitir esos activos a sus herederos. El hecho de que los herederos puedan residir en distintos países, no poseer la ciudadanía turca, y que en algunos expedientes se requiera actuar en virtud de resoluciones judiciales extranjeras, añade una complejidad considerable. Sin la información y la orientación jurídica adecuadas, estos expedientes pueden prolongarse durante meses o incluso años.\n\nComo abogado de sucesiones en Antalya, acompañamos a los herederos extranjeros en cada etapa: obtención de la declaración de herederos, inventario del caudal, procedimientos de transmisión, reparto de la herencia y reconocimiento de testamentos extranjeros en Turquía. También asesoramos a quienes, en vida, desean transmitir correctamente sus bienes en Turquía a sus familiares, mediante testamentos y contratos hereditarios.",
      fr: "Beaucoup d'étrangers possédant des biens immobiliers, des comptes bancaires ou des parts en Turquie se posent tôt ou tard la question de la transmission de ces actifs à leurs héritiers. Le fait que les héritiers puissent résider dans différents pays, ne pas détenir la nationalité turque, et que certains dossiers requièrent des démarches en vertu de décisions judiciaires étrangères, ajoute une complexité significative. Sans informations adéquates et accompagnement juridique, ces dossiers peuvent s'étendre sur des mois, voire des années.\n\nEn tant qu'avocat en droit des successions à Antalya, nous accompagnons les héritiers étrangers à chaque étape : délivrance des actes de notoriété, inventaire successoral, procédures de transfert, partage de la succession et reconnaissance des testaments étrangers en Turquie. Nous conseillons également ceux qui, de leur vivant, souhaitent transmettre correctement leurs biens turcs à des membres de leur famille, par le biais de testaments et de pactes successoraux.",
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
      es: [
        "Obtención de la declaración de herederos",
        "Inventario del caudal hereditario, sellado y llevanza de libros",
        "Procedimientos de transmisión de inmuebles, cuentas bancarias, vehículos y participaciones societarias",
        "Renuncia a la herencia y acciones de reclamación hereditaria",
        "Redacción e interpretación de testamentos (notarial, ológrafo, oral)",
        "Acciones de legítima y reducción (tenkis)",
        "Reconocimiento y ejecución de decisiones judiciales extranjeras sobre testamentos en Turquía",
        "Planificación fiscal de impuestos sucesorios y de transmisión",
      ],
      fr: [
        "Délivrance des actes de notoriété",
        "Inventaire successoral, mise sous scellés et tenue de livres",
        "Procédures de transfert de titre de propriété, comptes bancaires, véhicules et parts sociales",
        "Renonciation à la succession et actions en revendication de droits successoraux",
        "Rédaction et interprétation de testaments (notariés, olographes, oraux)",
        "Actions en réserve héréditaire et en réduction (tenkis)",
        "Reconnaissance et exécution de décisions étrangères sur testaments en Turquie",
        "Planification fiscale successorale et des droits de mutation",
      ],
    },
    process: {
      tr: "Bir yabancı mirasçı için süreç çoğunlukla murisin ölümünün resmi makamlarca tespit edilmesi ve mirasçılık belgesinin (veraset ilamı) alınması ile başlar. Bu belge alındıktan sonra her bir varlık için ayrı intikal işlemleri (tapu, banka, sigorta, şirket pay defteri) yürütülür. Yabancı bir vasiyet bulunması halinde tanıma ve tenfiz davası açılması; mirasta saklı paya tecavüz iddiası varsa tenkis davası açılması gerekebilir. Süreç boyunca veraset ve intikal vergisinin doğru hesaplanması ve mirasın reddi opsiyonunun değerlendirilmesi de mali açıdan büyük önem taşır.",
      en: "For a foreign heir, the process typically begins with the official recording of the deceased's death and the issuance of the certificate of inheritance. Once obtained, individual transfer procedures are carried out for each asset (title, bank, insurance, shareholders' register). If a foreign will exists, recognition and enforcement proceedings may be required; reduction (tenkis) actions may be needed where reserved shares have been infringed. Throughout, accurate calculation of inheritance and transfer tax — and consideration of renunciation — is significant from a financial perspective.",
      de: "Für ausländische Erben beginnt der Prozess in der Regel mit der amtlichen Erfassung des Todes und der Ausstellung des Erbscheins. Nach Erhalt erfolgen Einzelübertragungen für jedes Vermögensstück (Grundbuch, Bank, Versicherung, Aktionärsregister). Bei einem ausländischen Testament kann ein Anerkennungs- und Vollstreckungsverfahren erforderlich sein; bei Pflichtteilsverletzung sind Herabsetzungsklagen möglich. Durchgehend sind die korrekte Berechnung der Erbschafts- und Übertragungssteuer und die Prüfung der Ausschlagung wirtschaftlich bedeutsam.",
      ru: "Для иностранного наследника процесс обычно начинается с официального оформления факта смерти наследодателя и выдачи свидетельства о праве на наследство. Затем для каждого актива (недвижимость, банк, страховка, реестр акционеров) проводятся отдельные процедуры перехода. При наличии иностранного завещания может потребоваться его признание и приведение в исполнение; при нарушении обязательной доли возможны иски о снижении (tenkis). На протяжении всего процесса важно правильно рассчитать налог на наследство и переход и оценить вариант отказа от наследства.",
      ar: "بالنسبة للوارث الأجنبي تبدأ العملية عادةً بتسجيل وفاة المورِّث رسمياً واستخراج حصر الإرث. وبعد الحصول عليه تتم إجراءات النقل المنفصلة لكل أصل (الطابو والبنك والتأمين وسجل المساهمين). وعند وجود وصية أجنبية قد تستلزم إجراءات اعتراف وتنفيذ؛ وعند انتهاك الحصة المحفوظة قد تُرفع دعاوى إنقاص. وطوال العملية يكتسب الحساب الدقيق لضريبة الميراث والانتقال — ودراسة خيار التنازل عن الإرث — أهمية مالية كبيرة.",
      es: "Para un heredero extranjero, el proceso comienza habitualmente con el registro oficial del fallecimiento del causante y la obtención de la declaración de herederos. Una vez obtenida, se llevan a cabo los procedimientos de transmisión individuales para cada activo (registro de la propiedad, banco, seguro, libro de socios). Si existe un testamento extranjero, pueden ser necesarios procedimientos de reconocimiento y ejecución; si se han vulnerado las legítimas, pueden ser precisas acciones de reducción (tenkis). A lo largo de todo el proceso, el cálculo correcto del impuesto de sucesiones y transmisión — y la consideración de la renuncia — tiene gran importancia desde una perspectiva financiera.",
      fr: "Pour un héritier étranger, le processus commence généralement par l'enregistrement officiel du décès du défunt et la délivrance de l'acte de notoriété. Une fois obtenu, les procédures de transfert individuelles sont effectuées pour chaque actif (cadastre, banque, assurance, registre des actionnaires). Si un testament étranger existe, des procédures de reconnaissance et d'exécution peuvent être nécessaires ; des actions en réduction (tenkis) peuvent être requises en cas d'atteinte à la réserve héréditaire. Tout au long du processus, le calcul précis de l'impôt sur la succession et les mutations — et l'examen de la renonciation — revêt une grande importance sur le plan financier.",
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
      es: [
        {
          q: "Soy heredero extranjero de un inmueble en Turquía — ¿qué debo hacer?",
          a: "En primer lugar, obtenga la declaración de herederos y luego realice la transmisión en el Registro de la Propiedad. La declaración del impuesto de sucesiones también debe presentarse dentro del plazo legal. La apostilla y la traducción de los documentos extranjeros forman parte del proceso.",
        },
        {
          q: "¿Puede utilizarse un testamento extranjero para repartir bienes en Turquía?",
          a: "No directamente. Para que un testamento extranjero surta efecto jurídico en Turquía, deben iniciarse procedimientos de reconocimiento y ejecución. Si no es contrario al orden público turco, será reconocido.",
        },
        {
          q: "¿Puedo renunciar a la herencia?",
          a: "Sí. La renuncia debe presentarse ante el juzgado de paz civil dentro del plazo legal. Cuando las deudas superan el caudal hereditario, la renuncia puede ser financieramente protectora.",
        },
      ],
      fr: [
        {
          q: "Je suis héritier étranger d'un bien immobilier en Turquie — que dois-je faire ?",
          a: "Obtenez d'abord l'acte de notoriété, puis effectuez le transfert auprès du service du cadastre. La déclaration de l'impôt sur les successions et les mutations doit également être déposée dans le délai légal. L'apostille et la traduction des documents étrangers font partie du processus.",
        },
        {
          q: "Un testament étranger peut-il être utilisé pour partager des biens en Turquie ?",
          a: "Pas directement. Pour qu'un testament étranger produise des effets juridiques en Turquie, une procédure de reconnaissance et d'exécution doit être engagée. S'il n'est pas contraire à l'ordre public turc, il sera reconnu.",
        },
        {
          q: "Puis-je renoncer à la succession ?",
          a: "Oui. La renonciation doit être déposée devant le tribunal civil de paix dans le délai légal. Lorsque les dettes excèdent la succession, la renonciation peut être financièrement protectrice.",
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
      es: "Abogado de Derecho TI e IA en Antalya | KVKK y Protección de Datos",
      fr: "Avocat en Droit du Numérique et de l'IA à Antalya | KVKK et Protection des Données",
    },
    metaDescription: {
      tr: "KVKK uyumu, veri ihlali, yazılım lisansı, e-ticaret ve yapay zekâ projelerinde Antalya'da deneyimli Bilişim Hukuku avukatı.",
      en: "Experienced IT law attorney in Antalya for KVKK compliance, data breaches, software licensing, e-commerce, and AI projects.",
      de: "Erfahrener IT-Rechtsanwalt in Antalya für KVKK-Compliance, Datenschutzverletzungen, Softwarelizenzen, E-Commerce und KI-Projekte.",
      ru: "Опытный адвокат по IT-праву в Анталье: соответствие KVKK, утечки данных, лицензирование ПО, электронная коммерция и AI-проекты.",
      ar: "محامي تقنية معلومات متمرس في أنطاليا للامتثال لـKVKK وحوادث تسريب البيانات وترخيص البرمجيات والتجارة الإلكترونية ومشاريع الذكاء الاصطناعي.",
      es: "Abogado de derecho TI experimentado en Antalya para el cumplimiento de KVKK, violaciones de datos, licencias de software, comercio electrónico y proyectos de IA.",
      fr: "Avocat expérimenté en droit des technologies à Antalya pour la conformité KVKK, les violations de données, les licences de logiciels, le commerce électronique et les projets d'IA.",
    },
    intro: {
      tr: "Dijital dönüşüm, hukukun hızla evrim geçirdiği bir alan haline gelmiştir. Türkiye'de KVKK (Kişisel Verilerin Korunması Kanunu) ile başlayan veri koruma çerçevesi, bugün e-ticaretten yapay zekâ tabanlı uygulamalara kadar geniş bir yelpazeyi kapsamaktadır. Yabancı sermayeli teknoloji şirketleri ve startup'lar Türkiye pazarına girerken yalnızca ürün tasarımı değil veri saklama, sözleşmeler, kullanıcı haklarına ilişkin bildirimler ve veri ihlali yönetimi konularında da hukuki uyumu sağlamak zorundadır.\n\nBüromuz, yazılım lisans sözleşmelerinin müzakeresinden e-ticaret platformu mevzuat uyumluluğuna, KVKK aydınlatma metni ve veri envanteri çalışmasından yapay zekâ tabanlı ürünlerin sözleşmesel risk değerlendirmesine kadar Bilişim Hukuku alanının tüm bileşenlerinde danışmanlık vermektedir.",
      en: "Digital transformation has become an area where law evolves rapidly. Turkey's data protection framework, anchored by the KVKK (Personal Data Protection Law), now spans e-commerce, software, and AI-driven applications. Foreign-capital technology companies and startups entering the Turkish market must address not only product design but also data retention, contracts, user-rights notices, and data breach management in legal terms.\n\nOur firm advises across the full spectrum of IT law — software licensing negotiations, e-commerce platform compliance, KVKK privacy notices and data inventories, and contractual risk assessment for AI-based products.",
      de: "Die digitale Transformation ist ein Rechtsbereich, der sich rasch weiterentwickelt. Die in der Türkei mit dem KVKK (Datenschutzgesetz) verankerte Grundlage erstreckt sich heute über E-Commerce, Software bis zu KI-Anwendungen. Ausländisch finanzierte Technologieunternehmen und Startups, die in den türkischen Markt eintreten, müssen rechtlich Datenhaltung, Verträge, Nutzerrechtshinweise und Datenschutzvorfallmanagement adressieren — nicht nur Produktgestaltung.\n\nUnsere Kanzlei berät im gesamten IT-Recht — Softwarelizenzverhandlungen, E-Commerce-Compliance, KVKK-Informationspflichten und Datenbestandsanalysen sowie vertragliche Risikobewertung für KI-Produkte.",
      ru: "Цифровая трансформация — область права, развивающаяся очень быстро. Турецкая система защиты данных, основанная на KVKK (Закон о защите персональных данных), сегодня охватывает электронную коммерцию, ПО и AI-приложения. Технологические компании с иностранным капиталом и стартапы, выходящие на турецкий рынок, должны решать не только продуктовые, но и правовые вопросы: хранение данных, контракты, уведомления о правах пользователей и управление инцидентами с данными.\n\nНаша фирма консультирует по всему спектру IT-права — переговоры по лицензиям на ПО, соответствие e-commerce платформ, KVKK уведомления и инвентаризации данных, а также контрактная оценка рисков для AI-продуктов.",
      ar: "أصبح التحوّل الرقمي مجالاً قانونياً يتطور بسرعة. ويغطّي إطار حماية البيانات في تركيا، المرتكز على KVKK (قانون حماية البيانات الشخصية)، اليوم التجارة الإلكترونية والبرمجيات وتطبيقات الذكاء الاصطناعي. وعلى شركات التكنولوجيا برأس المال الأجنبي والشركات الناشئة التي تدخل السوق التركية معالجة الجوانب القانونية لتخزين البيانات والعقود وإشعارات حقوق المستخدمين وإدارة حوادث البيانات — لا تصميم المنتج فقط.\n\nيقدم مكتبنا الاستشارة في كامل قانون تقنية المعلومات — مفاوضات تراخيص البرمجيات والامتثال لمنصات التجارة الإلكترونية وإشعارات KVKK وجرد البيانات وتقييم المخاطر التعاقدية لمنتجات الذكاء الاصطناعي.",
      es: "La transformación digital se ha convertido en un ámbito jurídico que evoluciona con rapidez. El marco de protección de datos en Turquía, anclado en el KVKK (Ley de Protección de Datos Personales), abarca hoy el comercio electrónico, el software y las aplicaciones impulsadas por IA. Las empresas tecnológicas con capital extranjero y las startups que entran en el mercado turco deben abordar en términos jurídicos no solo el diseño del producto, sino también el almacenamiento de datos, los contratos, los avisos de derechos del usuario y la gestión de incidentes de datos.\n\nNuestro despacho asesora en todo el espectro del derecho TI: negociaciones de licencias de software, cumplimiento de plataformas de comercio electrónico, avisos de privacidad KVKK e inventarios de datos, y evaluación de riesgos contractuales para productos basados en IA.",
      fr: "La transformation numérique est devenue un domaine juridique en évolution rapide. Le cadre de protection des données en Turquie, ancré dans le KVKK (Loi sur la protection des données personnelles), couvre désormais le commerce électronique, les logiciels et les applications fondées sur l'IA. Les entreprises technologiques à capital étranger et les startups entrant sur le marché turc doivent traiter juridiquement non seulement la conception du produit, mais aussi le stockage des données, les contrats, les avis relatifs aux droits des utilisateurs et la gestion des incidents de données.\n\nNotre cabinet conseille sur l'ensemble du spectre du droit des technologies de l'information : négociations de licences de logiciels, conformité des plateformes de commerce électronique, avis de confidentialité KVKK et inventaires de données, et évaluation des risques contractuels pour les produits fondés sur l'IA.",
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
      es: [
        "Proyectos de cumplimiento KVKK: avisos de privacidad, inventario de datos, flujos de consentimiento explícito",
        "Notificaciones de violaciones de datos y procedimientos ante el Consejo KVKK",
        "Contratos de licencia de software (SaaS, on-premise, OEM, distribución)",
        "Regulación del comercio electrónico, contratos a distancia y cumplimiento de comunicaciones comerciales electrónicas",
        "Asignación de riesgos y responsabilidades contractuales para productos de IA",
        "Contratos de servicios en la nube y de transferencia internacional de datos",
        "Propiedad intelectual, marcas y protección de derechos de autor",
        "Defensa en delitos informáticos y planes de respuesta a incidentes",
      ],
      fr: [
        "Projets de conformité KVKK : avis de confidentialité, inventaire des données, flux de consentement explicite",
        "Notifications de violations de données et procédures devant le Conseil KVKK",
        "Contrats de licence de logiciels (SaaS, on-premise, OEM, distribution)",
        "Réglementation du commerce électronique, contrats à distance et conformité des messages commerciaux électroniques",
        "Allocation des risques et de la responsabilité contractuelle pour les produits d'IA",
        "Contrats de services en nuage et de transfert de données transfrontalier",
        "Propriété intellectuelle, marques et protection des droits d'auteur",
        "Défense dans les affaires de cybercriminalité et plans de réponse aux incidents",
      ],
    },
    process: {
      tr: "Bir teknoloji şirketi için danışmanlığa, mevcut iş süreçleri ve veri akışlarının haritalanmasıyla başlarız. Eksiklikler tespit edilir; aydınlatma metinleri, açık rıza tasarımı, çerez politikası ve veri envanteri eş zamanlı kurulur. Sözleşmesel ilişkilerde tedarikçi, müşteri ve çalışan tarafında uygun KVKK ek protokolleri imzalanır. Veri ihlali yaşanması durumunda 72 saatlik kritik bildirim süresine uygun hareket edilir; etki değerlendirmesi yapılır ve KVKK Kurul ile etkin iletişim sağlanır.",
      en: "Counsel for a technology company begins by mapping current business processes and data flows. Gaps are identified, then privacy notices, consent design, cookie policies, and data inventories are deployed in parallel. Suitable KVKK addenda are signed with vendors, customers, and employees. In a breach scenario, the critical 72-hour notification window is observed; an impact assessment is run and effective communication with the KVKK Board is maintained.",
      de: "Die Beratung eines Technologieunternehmens beginnt mit der Abbildung aktueller Geschäftsprozesse und Datenflüsse. Lücken werden identifiziert, anschließend werden Datenschutzhinweise, Einwilligungsdesigns, Cookie-Richtlinien und Datenbestände parallel implementiert. Mit Lieferanten, Kunden und Mitarbeitern werden geeignete KVKK-Zusatzvereinbarungen unterzeichnet. Im Vorfallsfall wird die kritische 72-Stunden-Meldepflicht eingehalten; eine Folgenabschätzung wird durchgeführt und die Kommunikation mit der KVKK-Behörde effektiv geführt.",
      ru: "Консультирование технологической компании начинается с картирования текущих бизнес-процессов и потоков данных. Выявляются пробелы; параллельно внедряются уведомления о конфиденциальности, дизайн согласий, cookie-политики и инвентаризация данных. С поставщиками, клиентами и сотрудниками подписываются соответствующие приложения KVKK. В случае инцидента соблюдается критическое 72-часовое окно уведомления; проводится оценка воздействия и поддерживается эффективная связь с Советом KVKK.",
      ar: "تبدأ الاستشارة لشركة تقنية برسم خرائط لعمليات الأعمال وتدفقات البيانات الحالية. تُحدَّد الثغرات؛ ثم تُنشأ إشعارات الخصوصية وتصميم الموافقات وسياسات ملفات تعريف الارتباط وجرد البيانات بالتوازي. وتُوقَّع ملاحق KVKK المناسبة مع الموردين والعملاء والموظفين. وعند وقوع حادثة، تُحترم نافذة الإخطار الحرجة 72 ساعة؛ يُجرى تقييم للأثر ويُحافَظ على تواصل فعّال مع مجلس KVKK.",
      es: "El asesoramiento a una empresa tecnológica comienza por mapear los procesos de negocio y los flujos de datos actuales. Se identifican las carencias y, a continuación, se implementan en paralelo los avisos de privacidad, el diseño del consentimiento, las políticas de cookies y los inventarios de datos. Se firman adendas KVKK adecuadas con proveedores, clientes y empleados. En caso de incidente, se respeta la ventana crítica de notificación de 72 horas; se realiza una evaluación de impacto y se mantiene una comunicación efectiva con el Consejo KVKK.",
      fr: "Le conseil à une entreprise technologique commence par la cartographie des processus métier et des flux de données actuels. Les lacunes sont identifiées, puis les avis de confidentialité, la conception du consentement, les politiques de cookies et les inventaires de données sont déployés en parallèle. Des avenants KVKK appropriés sont signés avec les fournisseurs, les clients et les employés. En cas d'incident, la fenêtre critique de notification de 72 heures est respectée ; une évaluation d'impact est réalisée et une communication efficace avec le Conseil KVKK est maintenue.",
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
      es: [
        {
          q: "Hemos sufrido una violación de datos — ¿qué debemos hacer?",
          a: "Tras la detección, la respuesta técnica y los pasos jurídicos deben ejecutarse en paralelo. Puede ser necesaria la notificación al Consejo KVKK en un plazo de 72 horas y la información a los interesados afectados. Deben prepararse una evaluación de impacto y un expediente de responsabilidad.",
        },
        {
          q: "¿Podemos transferir datos al extranjero?",
          a: "La transferencia transfronteriza bajo KVKK está sujeta a condiciones específicas. Deben evaluarse opciones como cláusulas contractuales tipo, consentimiento explícito o aprobación de normas corporativas vinculantes.",
        },
        {
          q: "Estamos desarrollando un producto de IA — ¿cómo gestionar el riesgo jurídico?",
          a: "Las fuentes y la base jurídica de los datos de entrenamiento, la exactitud de los resultados, la asignación de responsabilidades, las divulgaciones al usuario y los mecanismos de supervisión humana deben regularse de forma concreta en los contratos y los avisos de privacidad.",
        },
      ],
      fr: [
        {
          q: "Nous avons subi une violation de données — que devons-nous faire ?",
          a: "À la suite de la détection, la réponse technique et les démarches juridiques doivent être menées en parallèle. Une notification au Conseil KVKK dans les 72 heures et une information aux personnes concernées peuvent être requises. Une évaluation d'impact et un dossier de responsabilité doivent être préparés.",
        },
        {
          q: "Pouvons-nous transférer des données à l'étranger ?",
          a: "Le transfert transfrontalier en vertu du KVKK est soumis à des conditions spécifiques. Les options telles que les clauses contractuelles types, le consentement explicite ou l'approbation de règles d'entreprise contraignantes doivent être évaluées.",
        },
        {
          q: "Nous développons un produit d'IA — comment gérer le risque juridique ?",
          a: "Les sources et la base juridique des données d'entraînement, la précision des résultats, la répartition des responsabilités, les divulgations aux utilisateurs et les mécanismes de supervision humaine doivent être réglementés de manière concrète dans les contrats et les avis de confidentialité.",
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
      es: "Abogado de Derecho Arrendaticio en Antalya | Desahucio, Determinación de Renta y Derechos del Arrendatario",
      fr: "Avocat en Droit du Bail à Antalya | Expulsion, Fixation du Loyer et Droits du Locataire",
    },
    metaDescription: {
      tr: "Antalya'da kira hukuku avukatı olarak tahliye davaları, kira tespit ve uyarlama, depozito uyuşmazlıkları ve yabancı kiracıların hakları konularında deneyimli hukuki destek sunuyoruz.",
      en: "As a rental law lawyer in Antalya, we provide experienced legal support in eviction cases, rent determination and adjustment, deposit disputes, and the rights of foreign tenants.",
      de: "Als Mietrechtsanwalt in Antalya bieten wir erfahrene rechtliche Unterstützung bei Räumungsverfahren, Mietfestsetzung und -anpassung, Kautionsstreitigkeiten und den Rechten ausländischer Mieter.",
      ru: "Как адвокат по арендному праву в Анталье, мы оказываем юридическую помощь по делам о выселении, определении и пересмотре арендной платы, спорам о залоге и правам иностранных арендаторов.",
      ar: "بوصفنا محامي قانون الإيجار في أنطاليا، نقدم دعماً قانونياً في قضايا الإخلاء وتحديد الإيجار وتعديله ونزاعات التأمين وحقوق المستأجرين الأجانب.",
      es: "Como abogado de derecho arrendaticio en Antalya, ofrecemos apoyo jurídico en procedimientos de desahucio, determinación y revisión de la renta, disputas sobre depósitos y derechos de los arrendatarios extranjeros.",
      fr: "En tant qu'avocat en droit du bail à Antalya, nous offrons un accompagnement juridique dans les procédures d'expulsion, la fixation et la révision du loyer, les litiges de dépôt de garantie et les droits des locataires étrangers.",
    },
    intro: {
      tr: "Türk Borçlar Kanunu çerçevesinde kira ilişkilerini düzenleyen hukuki kurallar, hem kiracıyı hem kiraya vereni koruyucu bir denge üzerine inşa edilmiştir. Ancak bu dengeyi pratikte kullanabilmek; sözleşmenin doğru hazırlanmasından başlayarak, uyuşmazlık çıktığında doğru yasal yolu seçmeye kadar uzanan süreçte hukuki rehberlik gerektirir.\n\nAntalya'da kira uyuşmazlıklarındaki deneyimimizle; kiraya verenin zamanında ve hukuka uygun biçimde tahliye alabilmesi ya da kiracının haksız müdahalelere karşı haklarını koruyabilmesi için en etkili yolu birlikte belirliyoruz. Yabancı uyruklu kiracı ve mülk sahiplerine de aynı özende Türkçe ve İngilizce hizmet sunuyoruz.",
      en: "The legal rules governing rental relationships under the Turkish Code of Obligations are built on a balance that protects both tenant and landlord. Putting that balance to practical use — from drafting a sound lease agreement to choosing the right legal route when a dispute arises — requires proper legal guidance.\n\nDrawing on our experience in rental disputes in Antalya, we work with clients to identify the most effective path: whether that means securing a timely, lawful eviction for the landlord or protecting a tenant's rights against unlawful interference. We provide the same careful support to foreign tenants and property owners, in both Turkish and English.",
      de: "Die Vorschriften des türkischen Obligationenrechts, die Mietverhältnisse regeln, sind auf eine Balance aufgebaut, die sowohl Mieter als auch Vermieter schützt. Diese Balance praktisch nutzbar zu machen — von der Erstellung eines soliden Mietvertrags bis zur Wahl des richtigen Rechtswegs im Streitfall — erfordert eine fundierte rechtliche Begleitung.\n\nAus unserer Erfahrung mit Mietstreitigkeiten in Antalya erarbeiten wir gemeinsam mit unseren Mandanten den wirksamsten Weg: ob es darum geht, für den Vermieter eine rechtzeitige und rechtmäßige Räumung zu sichern oder die Rechte eines Mieters gegen rechtswidrige Eingriffe zu schützen. Ausländischen Mietern und Eigentümern stehen wir mit derselben Sorgfalt auf Türkisch und Englisch zur Verfügung.",
      ru: "Правовые нормы, регулирующие арендные отношения по Обязательственному кодексу Турции, построены на балансе, защищающем как арендатора, так и арендодателя. Использовать этот баланс на практике — от составления грамотного договора аренды до выбора правильного юридического пути при возникновении спора — требует квалифицированного юридического сопровождения.\n\nОпираясь на опыт в арендных спорах в Анталье, мы вместе с клиентами определяем наиболее эффективный путь: будь то обеспечение своевременного и законного выселения для арендодателя или защита прав арендатора от незаконного вмешательства. Иностранным арендаторам и владельцам недвижимости мы оказываем такую же тщательную поддержку на турецком и английском языках.",
      ar: "القواعد القانونية المنظِّمة لعلاقات الإيجار في إطار قانون الالتزامات التركي مبنية على توازن يحمي كلاً من المستأجر والمؤجر. تطبيق هذا التوازن عملياً — من صياغة عقد إيجار سليم إلى اختيار المسار القانوني الصحيح عند نشوء نزاع — يستلزم توجيهاً قانونياً سليماً.\n\nانطلاقاً من خبرتنا في نزاعات الإيجار في أنطاليا، نعمل مع موكلينا على تحديد المسار الأكثر فاعلية: سواء أكان تأمين إخلاء في الوقت المناسب وبصورة قانونية للمؤجر، أم حماية حقوق المستأجر من التدخل غير المشروع. نقدم الدعم ذاته للمستأجرين الأجانب وأصحاب العقارات باللغتين التركية والإنجليزية.",
      es: "Las normas jurídicas que regulan las relaciones de arrendamiento en virtud del Código de Obligaciones turco están construidas sobre un equilibrio que protege tanto al arrendatario como al arrendador. Trasladar ese equilibrio a la práctica — desde la redacción de un contrato de arrendamiento sólido hasta la elección de la vía jurídica correcta cuando surge una disputa — requiere una orientación jurídica adecuada.\n\nApoyándonos en nuestra experiencia en disputas de arrendamiento en Antalya, trabajamos con los clientes para identificar el camino más eficaz: ya sea conseguir un desahucio oportuno y legal para el arrendador, o proteger los derechos del arrendatario frente a interferencias ilícitas. Ofrecemos el mismo apoyo cuidadoso a los arrendatarios y propietarios extranjeros, tanto en turco como en inglés.",
      fr: "Les règles juridiques régissant les relations locatives en vertu du Code des Obligations turc sont fondées sur un équilibre protégeant à la fois le locataire et le bailleur. Mettre cet équilibre en pratique — de la rédaction d'un bail solide au choix de la bonne voie juridique lorsqu'un litige survient — requiert un accompagnement juridique adéquat.\n\nForts de notre expérience dans les litiges locatifs à Antalya, nous travaillons avec nos clients pour identifier le chemin le plus efficace : qu'il s'agisse d'obtenir une expulsion en temps utile et dans le respect de la loi pour le bailleur, ou de protéger les droits du locataire contre des ingérences illicites. Nous fournissons le même accompagnement attentif aux locataires et propriétaires étrangers, en turc comme en anglais.",
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
      es: [
        "Redacción, revisión y negociación de contratos de arrendamiento",
        "Procedimientos de determinación y revisión de la renta",
        "Procedimientos de desahucio: impago, incumplimiento contractual, necesidad propia del arrendador y reconstrucción",
        "Derechos del arrendatario: impugnación del desahucio ilícito y de incrementos de renta por encima del límite",
        "Disputas sobre devolución de fianza y reclamaciones de indemnización por daños",
        "Contratos de arrendamiento comercial y procedimientos de desahucio de locales de negocio",
        "Contratos de arrendamiento a corto plazo (diario/semanal) y asesoría jurídica",
        "Derechos y obligaciones de arrendatarios y arrendadores extranjeros",
      ],
      fr: [
        "Rédaction, révision et négociation de baux",
        "Procédures de fixation et de révision du loyer",
        "Procédures d'expulsion : non-paiement, violation du contrat, besoin personnel du bailleur et reconstruction",
        "Droits du locataire : contestation d'expulsions illicites et d'augmentations de loyer dépassant le plafond légal",
        "Litiges de restitution de dépôt de garantie et demandes d'indemnisation pour dommages",
        "Baux commerciaux et procédures d'expulsion de locaux professionnels",
        "Contrats de location à court terme (journalier/hebdomadaire) et conseils juridiques",
        "Droits et obligations des locataires et bailleurs étrangers",
      ],
    },
    process: {
      tr: "Kira uyuşmazlıklarında önce kira sözleşmesi, taraflar arasındaki yazışmalar ve ilgili belgeler ayrıntılı biçimde incelenir. Müvekkille birlikte talep ve beklentiler netleştirilir; tahliye, kira tespiti veya uyarlama seçeneklerinden hangisinin öncelikli olduğu belirlenir. Mümkün olan durumlarda arabuluculuk veya uzlaşı yolu tercih edilir; değilse dava süreci başlatılarak müvekkil her aşamada bilgilendirilir.",
      en: "In rental disputes, we begin with a thorough review of the lease agreement, correspondence between the parties, and related documents. Together with the client, we clarify objectives and determine the priority route — eviction, rent determination, or adjustment. Where possible, mediation or negotiated settlement is preferred; otherwise, litigation is initiated and the client is kept fully informed at every stage.",
      de: "Bei Mietstreitigkeiten beginnen wir mit einer eingehenden Prüfung des Mietvertrags, des Schriftverkehrs zwischen den Parteien und der zugehörigen Unterlagen. Gemeinsam mit dem Mandanten werden die Ziele geklärt und der vorrangige Weg bestimmt — Räumung, Mietfestsetzung oder Anpassung. Wo möglich, werden Mediation oder eine verhandelte Einigung bevorzugt; andernfalls wird ein Gerichtsverfahren eingeleitet und der Mandant auf jedem Schritt informiert.",
      ru: "В арендных спорах мы начинаем с тщательного изучения договора аренды, переписки между сторонами и сопутствующих документов. Совместно с клиентом уточняются цели и определяется приоритетный путь — выселение, определение или пересмотр арендной платы. По возможности предпочтение отдаётся медиации или договорному урегулированию; в противном случае инициируется судебный процесс, и клиент информируется на каждом этапе.",
      ar: "في نزاعات الإيجار، نبدأ بمراجعة شاملة لعقد الإيجار والمراسلات بين الطرفين والوثائق ذات الصلة. نوضح مع الموكل الأهداف ونحدد المسار الأولوي — الإخلاء أو تحديد الإيجار أو تعديله. حيثما أمكن يُفضَّل التوسط أو التسوية التفاوضية؛ وإلا يُبادر إلى التقاضي مع إبقاء الموكل على اطلاع تام في كل مرحلة.",
      es: "En los conflictos de arrendamiento, comenzamos con una revisión exhaustiva del contrato de arrendamiento, la correspondencia entre las partes y los documentos relacionados. Junto con el cliente, aclaramos los objetivos y determinamos la vía prioritaria: desahucio, determinación de la renta o revisión. Cuando es posible, se prefiere la mediación o una solución negociada; en caso contrario, se inicia el litigio y el cliente es informado en todo momento.",
      fr: "Dans les litiges locatifs, nous commençons par un examen approfondi du contrat de bail, de la correspondance entre les parties et des documents connexes. Avec le client, nous clarifions les objectifs et déterminons la voie prioritaire — expulsion, fixation du loyer ou révision. Lorsque c'est possible, la médiation ou un règlement négocié est préféré ; sinon, un contentieux est engagé et le client est tenu pleinement informé à chaque étape.",
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
      es: [
        {
          q: "¿Puede el arrendador desahuciar al arrendatario antes de que venza el contrato?",
          a: "Bajo la ley turca, los arrendatarios gozan de una sólida protección en los arrendamientos residenciales y comerciales cubiertos. El mero vencimiento del plazo contractual no constituye por sí solo motivo de desahucio. El desahucio solo es posible mediante acción judicial por los motivos especificados en el Código de Obligaciones: impago de la renta, uso contrario al contrato, necesidad personal del arrendador o de un familiar cercano, o reconstrucción y reforma importante.",
        },
        {
          q: "¿Cuál es el límite legal para los incrementos anuales de renta?",
          a: "En los arrendamientos de vivienda, el incremento anual está limitado a la media de 12 meses del Índice de Precios al Consumo publicado por el Instituto de Estadística de Turquía. Las demandas que superen esta tasa son legalmente nulas; el arrendatario tiene derecho a rechazarlas y reclamar lo pagado en exceso.",
        },
        {
          q: "¿Puede un extranjero arrendar un inmueble en Turquía?",
          a: "Sí. Los extranjeros que posean un permiso de residencia válido pueden celebrar contratos de arrendamiento en Turquía. Obtener asesoría jurídica en la fase contractual reduce sustancialmente el riesgo de disputas futuras.",
        },
        {
          q: "¿Qué puedo hacer si no me devuelven la fianza?",
          a: "Si el arrendatario ha devuelto el inmueble conforme al contrato pero se retiene la fianza, el primer paso es un aviso escrito formal. La mediación es obligatoria antes de cualquier acción judicial; si fracasa, pueden iniciarse procedimientos de ejecución o una demanda ante el juzgado de paz civil.",
        },
      ],
      fr: [
        {
          q: "Le bailleur peut-il expulser un locataire avant l'expiration du bail ?",
          a: "En droit turc, les locataires bénéficient d'une protection forte dans les baux d'habitation et les baux commerciaux couverts. La seule expiration du terme du contrat ne constitue pas un motif d'expulsion. L'expulsion n'est possible que par voie judiciaire pour les motifs spécifiés par le Code des Obligations : non-paiement du loyer, usage contraire au contrat, besoin personnel du bailleur ou d'un proche, reconstruction ou rénovation majeure.",
        },
        {
          q: "Quel est le plafond légal pour les augmentations annuelles de loyer ?",
          a: "Pour les baux d'habitation, l'augmentation annuelle est plafonnée à la moyenne sur 12 mois de l'indice des prix à la consommation publié par l'Institut de statistiques turc. Les demandes dépassant ce taux sont légalement nulles ; le locataire a le droit de les refuser et de réclamer les sommes trop versées.",
        },
        {
          q: "Un étranger peut-il louer un bien immobilier en Turquie ?",
          a: "Oui. Les ressortissants étrangers détenant un titre de séjour valide peuvent conclure des contrats de bail en Turquie. Obtenir un conseil juridique lors de la phase contractuelle réduit considérablement le risque de litiges futurs.",
        },
        {
          q: "Que faire si mon dépôt de garantie ne m'est pas restitué ?",
          a: "Si le locataire a restitué le bien conformément au contrat mais que le dépôt de garantie est retenu, la première étape est un avis écrit formel. La médiation est obligatoire avant toute action judiciaire ; si elle échoue, une procédure d'exécution ou une demande devant le tribunal civil de paix peut être engagée.",
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
      es: "Abogado de Derecho Administrativo en Antalya | Recursos de Anulación e Impugnaciones",
      fr: "Avocat en Droit Administratif à Antalya | Recours en Annulation et Contestations",
    },
    metaDescription: {
      tr: "Vize reddi, oturma izni iptali, sınır dışı, idari para cezası ve diğer idari işlemlere karşı Antalya idare mahkemesinde iptal ve tam yargı davaları.",
      en: "Cancellation and full-redress actions before the Antalya Administrative Court against visa refusals, residence cancellations, deportations, fines, and other administrative acts.",
      de: "Aufhebungs- und Vollentschädigungsklagen vor dem Verwaltungsgericht Antalya gegen Visa-Ablehnungen, Aufenthaltswiderrufe, Ausweisungen, Bußgelder und andere Verwaltungsakte.",
      ru: "Иски об отмене и полном возмещении в Административном суде Антальи против отказов в визах, аннулирования ВНЖ, депортаций, штрафов и прочих административных актов.",
      ar: "دعاوى الإلغاء والتعويض الكامل أمام محكمة أنطاليا الإدارية ضد رفض التأشيرات وإلغاء الإقامة والترحيل والغرامات وسائر الأعمال الإدارية.",
      es: "Acciones de anulación e indemnización íntegra ante el Tribunal Administrativo de Antalya contra denegaciones de visado, cancelaciones de residencia, deportaciones, multas y otros actos administrativos.",
      fr: "Actions en annulation et en pleine réparation devant le Tribunal Administratif d'Antalya contre les refus de visa, les annulations de titre de séjour, les expulsions, les amendes et autres actes administratifs.",
    },
    intro: {
      tr: "Yabancılar için İdare Hukuku genellikle dolaylı yoldan, hayatı doğrudan etkileyen kararlarla gündeme gelir: bir vize reddi, oturma izninin iptali, sınır dışı kararı, kayıt yaptırılan plakaya kesilen yüksek tutarlı idari para cezası ya da kamu kurumu ihalesinde alınan ihaleyi düşürme kararı. Bu kararların ortak özelliği, idare adına alınmış olmaları ve kanunun aradığı süreler içinde idari yargıya başvurulmadığında kesinleşmeleridir.\n\nAntalya'da İdare Hukuku avukatı olarak iptal davaları, tam yargı davaları, yürütmenin durdurulması talepleri, idari itirazlar ve idari uyuşmazlıklarda arabuluculuk süreçlerinde müvekkillerin yanındayız. Yabancı uyruklu müvekkiller için en kritik nokta, sürelerdir; tebliğ tarihinden itibaren işleyen yasal süreyi kaçırmamak için en kısa sürede başvuru yapılması gerekir.",
      en: "For foreigners, administrative law most often appears through decisions that directly affect day-to-day life: a visa refusal, cancellation of a residence permit, deportation order, a high administrative fine on a registered vehicle, or a procurement decision overturning a tender. What these have in common is that they are made on behalf of the administration and become final unless administrative-court action is taken within the statutory periods.\n\nAs an administrative law attorney in Antalya, we represent clients in cancellation suits, full-redress (compensatory) suits, stay-of-execution applications, administrative objections, and mediation in administrative disputes. The most critical point for foreign clients is timing: the statutory period from notification must not be missed, so an application must be made as soon as possible.",
      de: "Für Ausländer tritt das Verwaltungsrecht meist über Entscheidungen auf, die das tägliche Leben unmittelbar betreffen: Visa-Ablehnung, Widerruf der Aufenthaltserlaubnis, Ausweisung, hohes Bußgeld für ein zugelassenes Fahrzeug oder eine Vergabeentscheidung. Gemeinsam haben sie, dass sie für die Verwaltung erlassen werden und ohne fristgerechte verwaltungsgerichtliche Klage rechtskräftig werden.\n\nAls Verwaltungsrechtsanwalt in Antalya vertreten wir Mandanten in Aufhebungs- und Vollentschädigungsklagen, Eilanträgen, Widersprüchen und Mediationsverfahren. Für ausländische Mandanten ist das Timing am wichtigsten: Die Frist ab Zustellung darf nicht verpasst werden — die Klage ist schnellstmöglich einzureichen.",
      ru: "Для иностранцев административное право чаще всего появляется через решения, напрямую влияющие на повседневную жизнь: отказ в визе, аннулирование ВНЖ, депортация, крупный административный штраф на зарегистрированное ТС, решение по конкурсу. У них общее то, что они принимаются от имени администрации и становятся окончательными, если в установленный срок не обратиться в административный суд.\n\nКак адвокат по административному праву в Анталье мы представляем клиентов в исках об отмене, исках о полном возмещении, ходатайствах о приостановлении исполнения, административных возражениях и медиации. Главное для иностранных клиентов — сроки: установленный срок с момента уведомления нельзя пропустить, иск нужно подать как можно раньше.",
      ar: "للأجانب يظهر القانون الإداري عادةً عبر قرارات تؤثر مباشرةً في الحياة اليومية: رفض تأشيرة، إلغاء إقامة، قرار ترحيل، غرامة إدارية مرتفعة على مركبة مسجلة، أو قرار إلغاء مناقصة. والقاسم المشترك أنها تُتَّخذ باسم الإدارة وتصبح نهائية ما لم تُرفع دعوى إدارية ضمن المهل القانونية.\n\nبصفتنا محامي قانون إداري في أنطاليا، نمثّل الموكلين في دعاوى الإلغاء ودعاوى التعويض الكامل وطلبات وقف التنفيذ والاعتراضات الإدارية والوساطة. وأهم نقطة للموكلين الأجانب هي التوقيت: لا يجوز تفويت المهلة القانونية من تاريخ التبليغ، ويجب رفع الدعوى في أقرب وقت.",
      es: "Para los extranjeros, el derecho administrativo aparece con mayor frecuencia a través de decisiones que afectan directamente a la vida cotidiana: una denegación de visado, la cancelación de un permiso de residencia, una orden de deportación, una elevada multa administrativa sobre un vehículo registrado, o una decisión de adjudicación que revoca una licitación. Lo que tienen en común es que son adoptadas en nombre de la administración y adquieren firmeza si no se interpone un recurso contencioso-administrativo dentro de los plazos legales.\n\nComo abogado de derecho administrativo en Antalya, representamos a clientes en recursos de anulación, acciones de responsabilidad patrimonial (indemnizatoria), solicitudes de medidas cautelares, recursos administrativos y mediación en conflictos administrativos. El punto más crítico para los clientes extranjeros es el tiempo: el plazo legal desde la notificación no puede perderse, por lo que debe presentarse una solicitud lo antes posible.",
      fr: "Pour les étrangers, le droit administratif apparaît le plus souvent à travers des décisions qui affectent directement la vie quotidienne : un refus de visa, l'annulation d'un titre de séjour, une décision d'expulsion, une lourde amende administrative sur un véhicule immatriculé, ou une décision d'attribution annulant un appel d'offres. Leur point commun est d'être prises au nom de l'administration et de devenir définitives si aucun recours contentieux-administratif n'est formé dans les délais légaux.\n\nEn tant qu'avocat en droit administratif à Antalya, nous représentons des clients dans les recours en annulation, les actions en pleine réparation (indemnitaires), les requêtes en sursis à exécution, les recours gracieux et hiérarchiques, et la médiation dans les litiges administratifs. Le point le plus critique pour les clients étrangers est le temps : le délai légal à compter de la notification ne doit pas être manqué, aussi une demande doit-elle être présentée le plus rapidement possible.",
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
      es: [
        "Litigios contra denegaciones, cancelaciones de visado y órdenes de prohibición de entrada",
        "Acciones de anulación y medidas cautelares contra cancelaciones de permiso de residencia y órdenes de deportación",
        "Impugnaciones y acciones de anulación contra multas administrativas",
        "Acciones de responsabilidad patrimonial íntegra (indemnización por daño causado por un acto administrativo)",
        "Anulación de acuerdos municipales y aplicaciones de planeamiento urbanístico",
        "Sanciones tributarias y procedimientos de acuerdo de liquidación",
        "Contratación pública y anulación de resoluciones de adjudicación",
        "Recurso administrativo, alzada jerárquica y mediación administrativa",
      ],
      fr: [
        "Contentieux contre les refus de visa, les révocations et les interdictions d'entrée",
        "Actions en annulation et en sursis à exécution contre les annulations de titre de séjour et les arrêtés d'expulsion",
        "Recours et actions en annulation contre les amendes administratives",
        "Actions en pleine réparation (indemnisation pour préjudice causé par un acte administratif)",
        "Annulation de décisions municipales et applications d'urbanisme",
        "Sanctions fiscales et procédures de transaction",
        "Marchés publics et annulation de décisions d'attribution",
        "Recours gracieux, recours hiérarchique et médiation administrative",
      ],
    },
    process: {
      tr: "İdare Hukuku dosyalarında ilk adım, idari işlemin tebliğ tarihi ve içerdiği gerekçenin doğru tespitidir. Bunun ardından dosya, hukuka aykırılık unsurları yönünden incelenir ve sürelerin geçmemesi için iptal davası ile birlikte yürütmenin durdurulması talebi sunulur. İdare savunma yapar, gerektiğinde keşif ve bilirkişi incelemesi yapılır. Mahkeme kararı sonrası gerekli görülürse istinaf veya Danıştay yoluna başvurulur. Yabancı uyruklu müvekkilde, dosyayı destekleyen yabancı belgelerin Türkçeye çevirisi ve apostili özellikle erken aşamada hazırlanır.",
      en: "An administrative file begins with accurately identifying the notification date and the reasoning of the act. The file is then reviewed for unlawfulness, and to keep within deadlines, a cancellation suit is filed together with a stay-of-execution motion. The administration responds; site inspection or expert review is ordered as needed. After judgment, appellate or Council of State review may follow. For foreign clients, translation and apostille of supporting foreign documents are arranged early.",
      de: "Eine Verwaltungsakte beginnt mit der genauen Feststellung des Zustellungsdatums und der Begründung des Aktes. Anschließend wird die Akte auf Rechtswidrigkeit geprüft, und um Fristen zu wahren, wird die Aufhebungsklage zusammen mit einem Eilantrag eingereicht. Die Verwaltung antwortet; Augenschein oder Sachverständigenprüfung werden ggf. angeordnet. Nach dem Urteil folgt ggf. die Berufung oder die Anrufung des Staatsrats. Für ausländische Mandanten werden Übersetzung und Apostille relevanter Auslandsurkunden frühzeitig veranlasst.",
      ru: "Административное дело начинается с точного установления даты уведомления и обоснования акта. Затем дело анализируется на предмет незаконности, и для соблюдения сроков подаётся иск об отмене вместе с ходатайством о приостановлении исполнения. Администрация отвечает; при необходимости проводится осмотр или экспертиза. После решения может последовать апелляция или обращение в Государственный совет. Для иностранных клиентов перевод и апостиль подтверждающих иностранных документов готовятся заранее.",
      ar: "يبدأ الملف الإداري بتحديد تاريخ التبليغ ومسوّغ القرار بدقة. ثم يُفحص لتحديد عناصر مخالفته للقانون، وللحفاظ على المهل تُرفع دعوى إلغاء مع طلب وقف تنفيذ. تردّ الإدارة؛ ويُؤمَر بالمعاينة أو الخبرة عند الاقتضاء. وبعد الحكم قد يتبع الاستئناف أو الرجوع إلى مجلس الدولة. وللعملاء الأجانب نُعدّ ترجمة الوثائق الأجنبية وتصديقها مبكراً.",
      es: "Un expediente administrativo comienza con la identificación precisa de la fecha de notificación y el razonamiento del acto. A continuación, el expediente se revisa en busca de ilegalidades y, para respetar los plazos, se interpone un recurso de anulación junto con una solicitud de medida cautelar. La administración responde; si es necesario, se ordena una inspección o pericia. Tras la sentencia, puede seguir un recurso de apelación o ante el Consejo de Estado. Para los clientes extranjeros, la traducción y apostilla de los documentos de apoyo se preparan con antelación.",
      fr: "Un dossier administratif commence par l'identification précise de la date de notification et du raisonnement de l'acte. Le dossier est ensuite examiné au regard de son illégalité et, pour respecter les délais, un recours en annulation est déposé conjointement avec une requête en sursis à exécution. L'administration répond ; une inspection ou une expertise est ordonnée si nécessaire. Après le jugement, un appel ou un pourvoi devant le Conseil d'État peut suivre. Pour les clients étrangers, la traduction et l'apostille des documents justificatifs étrangers sont préparées tôt.",
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
      es: [
        {
          q: "¿Cuánto tiempo tengo para impugnar un acto administrativo?",
          a: "El derecho administrativo turco establece un plazo legal fijo. Contado desde la fecha de notificación, este plazo no puede perderse; una acción extemporánea será inadmitida por razones procedimentales.",
        },
        {
          q: "¿Cuál es la finalidad de la medida cautelar de suspensión?",
          a: "Si el acto causaría un daño de difícil reparación, puede solicitarse al tribunal que suspenda temporalmente sus efectos. Una vez concedida, las consecuencias del acto quedan en suspenso hasta que el asunto se resuelva.",
        },
        {
          q: "¿Cuánto duran los procedimientos administrativos?",
          a: "Aunque varía, los procedimientos administrativos en primera instancia generalmente concluyen en 1–2 años. La duración puede prolongarse en función de la complejidad y de las fases de apelación o ante el Consejo de Estado.",
        },
      ],
      fr: [
        {
          q: "De combien de temps est-ce que je dispose pour contester un acte administratif ?",
          a: "Le droit administratif turc prévoit un délai légal fixe. Courant à compter de la date de notification, ce délai ne doit pas être manqué ; un recours hors délai sera rejeté pour des motifs de procédure.",
        },
        {
          q: "Quel est l'objet du sursis à exécution ?",
          a: "Si l'acte risque de causer un préjudice difficile à réparer, le tribunal peut être saisi d'une requête visant à en suspendre temporairement les effets. Une fois accordé, les conséquences de l'acte sont suspendues jusqu'à la clôture de l'affaire.",
        },
        {
          q: "Combien de temps durent les procédures administratives ?",
          a: "Bien que variable, les procédures administratives en première instance se concluent généralement dans un délai d'1 à 2 ans. La durée peut s'allonger en fonction de la complexité de l'affaire et des phases d'appel ou de recours devant le Conseil d'État.",
        },
      ],
    },
  },
  {
    slug: "ceza-hukuku",
    metaTitle: {
      tr: "Antalya Ceza Avukatı | Tutuklama, HAGB ve Ceza Davası Savunması",
      en: "Antalya Criminal Lawyer | Criminal Defence for Foreigners in Turkey",
      de: "Strafverteidiger Antalya | Strafverteidigung für Ausländer in der Türkei",
      ru: "Адвокат по уголовным делам в Анталье | Уголовная защита в Турции",
      ar: "محامي جنائي في أنطاليا | الدفاع الجنائي عن الأجانب في تركيا",
      es: "Abogado Penalista en Antalya | Defensa Penal para Extranjeros en Turquía",
      fr: "Avocat Pénaliste à Antalya | Défense Pénale des Étrangers en Turquie",
    },
    metaDescription: {
      tr: "Antalya'da ceza avukatı olarak yabancı ve Türk müvekkillerin haklarını ceza soruşturmalarında, tutuklama ve adli kontrol süreçlerinde, beyaz yaka davalarında ve kanun yollarında koruyoruz.",
      en: "As criminal defence lawyers in Antalya, we protect the rights of foreign and Turkish clients in criminal investigations, detention and judicial control proceedings, white-collar cases, and appeals.",
      de: "Als Strafverteidiger in Antalya schützen wir die Rechte ausländischer und türkischer Mandanten in strafrechtlichen Ermittlungen, in Haft- und Justizkontrollverfahren, in Wirtschaftsstrafsachen und bei Rechtsmitteln.",
      ru: "Как адвокаты по уголовным делам в Анталье мы защищаем права иностранных и турецких клиентов в уголовных расследованиях, при заключении под стражу и мерах судебного контроля, в беловоротничковых делах и при обжаловании.",
      ar: "بوصفنا محامي دفاع جنائي في أنطاليا، نحمي حقوق العملاء الأجانب والأتراك في التحقيقات الجنائية وإجراءات التوقيف والرقابة القضائية وقضايا ذوي الياقات البيضاء والطعون.",
      es: "Como abogados penalistas en Antalya, protegemos los derechos de los clientes extranjeros y turcos en investigaciones penales, procedimientos de prisión provisional y control judicial, casos de cuello blanco y recursos.",
      fr: "En tant qu'avocats pénalistes à Antalya, nous protégeons les droits des clients étrangers et turcs dans les enquêtes pénales, les procédures de détention et de contrôle judiciaire, les affaires en col blanc et les voies de recours.",
    },
    intro: {
      tr: "Türkiye'de bir suç isnadıyla karşılaşmak herkes için ağır bir tecrübedir; yabancı bir kişi için bu tecrübe dil engeli, ülkeden uzaklık ve Türk hukuk sistemine yabancı olma sebebiyle çok daha çetrefilli hâle gelir. Antalya'da ceza avukatı olarak görev yapan ekibimiz, karakol ya da savcılıktaki ilk ifadeden nihai hükme ve kanun yollarına kadar her aşamada müvekkillerinin yanındadır.\n\nCeza soruşturması ve kovuşturmalarında müdafilik, tutuklama kararlarına itiraz ve adli kontrol talepleri, hükmün açıklanmasının geri bırakılması (HAGB) gibi lehe mekanizmaların değerlendirilmesi, beyaz yaka suçları ile şirket yöneticilerinin cezai sorumluluğu ve mal varlığı dondurma kararlarına itiraz en sık karşılaştığımız konuların başında gelmektedir. Her dosyayı kendi koşulları içinde değerlendirir, hukuki gerekçesi en güçlü savunmayı müvekkille birlikte kurarız.",
      en: "Facing a criminal accusation in Turkey is a heavy experience for anyone, and for a foreign national it becomes far more difficult through the language barrier, distance from home, and unfamiliarity with the Turkish legal system. Our team, serving as criminal defence lawyers in Antalya, stands beside our clients at every stage — from the first statement at the police station or prosecutor's office to the final judgment and any appeal.\n\nDefence in criminal investigations and prosecutions, challenges to detention orders and requests for judicial control, the evaluation of favourable mechanisms such as the deferral of the announcement of the verdict (HAGB), white-collar offences and the criminal liability of company directors, and objections to asset-freeze decisions are among the matters we handle most frequently. We assess each file on its own facts and, together with the client, build the defence with the strongest legal foundation.",
      de: "Sich in der Türkei einem Strafvorwurf gegenüberzusehen, ist für jeden eine schwere Erfahrung; für einen Ausländer wird sie durch die Sprachbarriere, die Entfernung von der Heimat und die Unvertrautheit mit dem türkischen Rechtssystem noch weitaus schwieriger. Unser Team, tätig als Strafverteidiger in Antalya, steht seinen Mandanten in jeder Phase zur Seite — von der ersten Aussage auf der Polizeiwache oder bei der Staatsanwaltschaft bis zum endgültigen Urteil und zu den Rechtsmitteln.\n\nVerteidigung in strafrechtlichen Ermittlungen und Anklagen, Einwände gegen Haftbeschlüsse und Anträge auf Justizkontrolle, die Bewertung günstiger Mechanismen wie der Aussetzung der Urteilsverkündung (HAGB), Wirtschaftsstraftaten und die strafrechtliche Verantwortung von Unternehmensleitern sowie Einsprüche gegen Vermögenssperren gehören zu den Fragen, mit denen wir uns am häufigsten befassen. Wir beurteilen jeden Fall individuell und bauen die Verteidigung mit der stärksten rechtlichen Grundlage gemeinsam mit dem Mandanten auf.",
      ru: "Столкнуться с уголовным обвинением в Турции — тяжёлое испытание для любого, а для иностранца оно становится намного сложнее из-за языкового барьера, удалённости от дома и незнания турецкой правовой системы. Наша команда, выступающая как адвокаты по уголовным делам в Анталье, находится рядом с клиентами на каждом этапе — от первого допроса в полиции или прокуратуре до окончательного приговора и обжалования.\n\nЗащита в уголовных расследованиях и судебных разбирательствах, обжалование постановлений о заключении под стражу и ходатайства о судебном контроле, оценка благоприятных механизмов, таких как отсрочка оглашения приговора (HAGB), беловоротничковые преступления и уголовная ответственность руководителей компаний, а также обжалование решений о заморозке активов — наиболее частые направления нашей работы. Каждое дело мы рассматриваем индивидуально и вместе с клиентом выстраиваем защиту с наиболее прочным правовым основанием.",
      ar: "مواجهة تهمة جنائية في تركيا تجربة قاسية لأي شخص، وتزداد صعوبةً بكثير على الأجنبي بسبب حاجز اللغة والبُعد عن الوطن وعدم الإلمام بالنظام القانوني التركي. فريقنا، بصفته محامي دفاع جنائي في أنطاليا، يقف بجانب موكليه في كل مرحلة — من أول إفادة في مركز الشرطة أو النيابة العامة وحتى الحكم النهائي والطعون.\n\nالدفاع في التحقيقات والملاحقات الجنائية، والطعن في قرارات التوقيف وطلبات الرقابة القضائية، وتقييم الآليات المواتية مثل إرجاء النطق بالحكم (HAGB)، وجرائم ذوي الياقات البيضاء والمسؤولية الجنائية لمديري الشركات، والاعتراض على قرارات تجميد الأموال، من أكثر المسائل التي نتعامل معها. نقيّم كل قضية بحسب ملابساتها الخاصة، ونبني الدفاع ذا الأساس القانوني الأقوى مع الموكل.",
      es: "Enfrentar una acusación penal en Turquía es una experiencia dura para cualquiera, y para un extranjero se vuelve mucho más difícil por la barrera del idioma, la distancia de su país y el desconocimiento del sistema jurídico turco. Nuestro equipo, que actúa como abogados penalistas en Antalya, acompaña a sus clientes en cada etapa: desde la primera declaración en la comisaría o la fiscalía hasta la sentencia final y los recursos.\n\nLa defensa en investigaciones y procesos penales, la impugnación de las órdenes de prisión provisional y las solicitudes de control judicial, la evaluación de mecanismos favorables como el aplazamiento del pronunciamiento de la sentencia (HAGB), los delitos de cuello blanco y la responsabilidad penal de los administradores de empresas, así como las objeciones a las decisiones de congelamiento de activos, son los asuntos que tratamos con mayor frecuencia. Evaluamos cada caso según sus propios méritos y, junto con el cliente, construimos la defensa con el fundamento jurídico más sólido.",
      fr: "Faire face à une accusation pénale en Turquie est une épreuve pour quiconque, et pour un ressortissant étranger elle devient bien plus difficile en raison de la barrière de la langue, de l'éloignement du pays et de la méconnaissance du système juridique turc. Notre équipe, qui exerce en tant qu'avocats pénalistes à Antalya, accompagne ses clients à chaque étape — de la première déclaration au commissariat ou au parquet jusqu'au jugement définitif et aux voies de recours.\n\nLa défense dans les enquêtes et poursuites pénales, la contestation des ordonnances de détention et les demandes de contrôle judiciaire, l'évaluation de mécanismes favorables tels que l'ajournement du prononcé du jugement (HAGB), les infractions en col blanc et la responsabilité pénale des dirigeants d'entreprise, ainsi que les oppositions aux décisions de gel des avoirs, figurent parmi les dossiers que nous traitons le plus fréquemment. Nous apprécions chaque affaire selon ses propres mérites et bâtissons, avec le client, la défense reposant sur les fondements juridiques les plus solides.",
    },
    services: {
      tr: [
        "Soruşturma ve kovuşturma aşamalarında şüpheli ve sanık müdafiliği: ifade, savcılık ve mahkeme temsili",
        "Yabancı uyruklu sanıklar için tercüman, konsolosluk bildirimi, susma ve avukat haklarının korunması",
        "Tutuklama kararlarına itiraz ile adli kontrol ve tahliye talepleri",
        "HAGB, cezanın ertelenmesi ve uzlaştırma gibi lehe mekanizmaların değerlendirilmesi",
        "Şirket yöneticileri ve yatırımcılar için beyaz yaka suçları (dolandırıcılık, güveni kötüye kullanma, vergi) savunması",
        "MASAK mal varlığı dondurma kararlarına karşı yargısal denetim ve itiraz süreçleri",
        "Yurt dışı çıkış yasağı ve tahdit kodu kayıtlarının kaldırılması için başvurular",
        "İstinaf ve temyiz kanun yolları ile suç mağdurlarının müşteki vekilliği",
      ],
      en: [
        "Defence of suspects and defendants at every stage: statement, prosecutor's office, and trial representation",
        "Protection of foreign nationals' rights to an interpreter, consular notification, silence, and counsel",
        "Objections to detention orders and requests for judicial control or release",
        "Assessment of favourable mechanisms such as HAGB, sentence suspension, and reconciliation",
        "White-collar defence for company directors and investors (fraud, breach of trust, tax offences)",
        "Judicial review and objection proceedings against MASAK asset-freeze decisions",
        "Applications to lift overseas exit bans and restriction (tahdit) code entries",
        "Istinaf and temyiz appeals, and representation of crime victims as complainant's counsel",
      ],
      de: [
        "Verteidigung von Beschuldigten und Angeklagten in jeder Phase: Aussage, Staatsanwaltschaft und Vertretung in der Hauptverhandlung",
        "Schutz der Rechte ausländischer Staatsangehöriger auf Dolmetscher, konsularische Benachrichtigung, Schweigen und Verteidiger",
        "Einwände gegen Haftbeschlüsse sowie Anträge auf Justizkontrolle oder Freilassung",
        "Bewertung günstiger Mechanismen wie HAGB, Strafaussetzung und Täter-Opfer-Ausgleich",
        "Wirtschaftsstrafrechtliche Verteidigung von Unternehmensleitern und Investoren (Betrug, Untreue, Steuerdelikte)",
        "Gerichtliche Überprüfung und Einspruchsverfahren gegen MASAK-Vermögenssperren",
        "Anträge auf Aufhebung von Ausreiseverboten und Einträgen im Beschränkungscode (Tahdit)",
        "Rechtsmittel der Berufung (istinaf) und Revision (temyiz) sowie Nebenklagevertretung von Straftatopfern",
      ],
      ru: [
        "Защита подозреваемых и обвиняемых на каждом этапе: допрос, прокуратура и представительство в суде",
        "Защита прав иностранных граждан на переводчика, консульское уведомление, молчание и адвоката",
        "Обжалование постановлений о заключении под стражу и ходатайства о судебном контроле или освобождении",
        "Оценка благоприятных механизмов, таких как HAGB, отсрочка наказания и примирение сторон",
        "Беловоротничковая защита руководителей компаний и инвесторов (мошенничество, злоупотребление доверием, налоговые преступления)",
        "Судебный контроль и процедуры обжалования решений MASAK о заморозке активов",
        "Заявления об отмене запретов на выезд за границу и записей ограничительного кода (tahdit)",
        "Обжалование в порядке истинаф и темйиз, а также представление потерпевших в качестве частного обвинителя",
      ],
      ar: [
        "الدفاع عن المشتبه بهم والمتهمين في كل مرحلة: الإفادة والنيابة العامة والتمثيل أمام المحكمة",
        "حماية حقوق المواطنين الأجانب في المترجم والإبلاغ القنصلي والصمت والاستعانة بمحامٍ",
        "الطعن في قرارات التوقيف وطلبات الرقابة القضائية أو الإفراج",
        "تقييم الآليات المواتية مثل إرجاء النطق بالحكم (HAGB) وتأجيل العقوبة والصلح الجزائي",
        "الدفاع في جرائم ذوي الياقات البيضاء عن مديري الشركات والمستثمرين (الاحتيال وإساءة الأمانة والجرائم الضريبية)",
        "الرقابة القضائية وإجراءات الاعتراض على قرارات تجميد الأموال الصادرة عن MASAK",
        "طلبات رفع حظر الخروج من البلاد وقيود رمز التقييد (tahdit)",
        "الطعن بالاستئناف (istinaf) والتمييز (temyiz)، وتمثيل ضحايا الجرائم بصفة المدّعي بالحق الشخصي",
      ],
      es: [
        "Defensa de investigados y acusados en cada etapa: declaración, fiscalía y representación en el juicio",
        "Protección de los derechos del extranjero a intérprete, notificación consular, silencio y asistencia letrada",
        "Impugnación de las órdenes de prisión provisional y solicitudes de control judicial o de libertad",
        "Evaluación de mecanismos favorables como el HAGB, la suspensión de la pena y la mediación penal",
        "Defensa de cuello blanco para administradores e inversores (estafa, apropiación indebida, delitos fiscales)",
        "Control judicial y procedimientos de oposición contra las decisiones de congelamiento de activos de MASAK",
        "Solicitudes para levantar prohibiciones de salida del país y registros del código de restricción (tahdit)",
        "Recursos de istinaf y temyiz, y representación de las víctimas como acusación particular",
      ],
      fr: [
        "Défense des mis en cause et des prévenus à chaque étape : déclaration, parquet et représentation à l'audience",
        "Protection des droits du ressortissant étranger à l'interprète, à la notification consulaire, au silence et à l'avocat",
        "Contestation des ordonnances de détention et demandes de contrôle judiciaire ou de remise en liberté",
        "Évaluation des mécanismes favorables tels que le HAGB, le sursis à l'exécution de la peine et la médiation pénale",
        "Défense en col blanc des dirigeants et des investisseurs (escroquerie, abus de confiance, infractions fiscales)",
        "Contrôle juridictionnel et procédures d'opposition contre les décisions de gel des avoirs du MASAK",
        "Demandes de levée des interdictions de sortie du territoire et des inscriptions au code de restriction (tahdit)",
        "Voies de recours (istinaf et temyiz) et constitution de partie civile pour les victimes d'infractions",
      ],
    },
    process: {
      tr: "Her dosyayı önce olay, delil durumu ve müvekkilin konumunu inceleyerek ele alır, duruma en uygun savunma stratejisini belirleriz. İfade, tutuklama sorgusu ya da çıkış yasağı gibi acil durumlarda derhal müdahale ederiz; çünkü ilk ifade çoğu zaman soruşturmanın tüm seyrini belirler. İdari veya ilk derece aşamasının yetmediği hâllerde itiraz ile istinaf ve temyiz yollarına başvurur, gerektiğinde Anayasa Mahkemesi'ne bireysel başvuru yaparız. Müvekkillerimiz sürecin her aşamasında kendi dilinde bilgilendirilir; tercüman ve konsolosluk koordinasyonu sağlanır ve karar vermeleri gereken her noktada yanlarında dururuz.",
      en: "We begin every matter by examining the incident, the state of the evidence, and the client's position, then determine the defence strategy best suited to the situation. In urgent situations — a statement to be given, a detention hearing, or an exit ban — we intervene immediately, because the first statement often shapes the entire course of the investigation. Where the administrative or first-instance stage is insufficient, we pursue objections and the istinaf and temyiz appeal routes, and where necessary an individual application to the Constitutional Court. Our clients are kept informed at every stage in their own language, with interpreter and consular coordination arranged, and we stand by them at every decision point.",
      de: "Wir gehen jeden Fall an, indem wir zunächst den Sachverhalt, die Beweislage und die Position des Mandanten prüfen, und bestimmen dann die für die Situation am besten geeignete Verteidigungsstrategie. In dringenden Situationen — einer bevorstehenden Aussage, einer Haftprüfung oder einem Ausreiseverbot — greifen wir sofort ein, denn die erste Aussage prägt häufig den gesamten Verlauf der Ermittlungen. Reicht die administrative oder erstinstanzliche Phase nicht aus, verfolgen wir Einwände sowie die Rechtsmittel der Berufung und Revision und stellen bei Bedarf eine Individualbeschwerde beim Verfassungsgericht. Unsere Mandanten werden in jeder Phase in ihrer eigenen Sprache informiert; Dolmetscher- und Konsularkoordination werden gewährleistet, und wir stehen ihnen an jedem Entscheidungspunkt zur Seite.",
      ru: "Каждое дело мы начинаем с изучения обстоятельств, состояния доказательств и положения клиента, а затем определяем наиболее подходящую стратегию защиты. В срочных ситуациях — предстоящий допрос, рассмотрение вопроса о заключении под стражу или запрет на выезд — мы вмешиваемся незамедлительно, поскольку первый допрос нередко определяет весь ход расследования. Если административного или первого судебного этапа недостаточно, мы подаём жалобы и обращаемся к процедурам истинаф и темйиз, а при необходимости — с индивидуальной жалобой в Конституционный суд. Наши клиенты информируются на каждом этапе на их родном языке; обеспечивается координация с переводчиком и консульством, и мы остаёмся рядом с ними в каждый момент принятия решения.",
      ar: "نتناول كل قضية أولاً بفحص الواقعة وحالة الأدلة وموقف الموكل، ثم نحدد استراتيجية الدفاع الأنسب للحالة. في الحالات العاجلة — إفادة وشيكة أو جلسة توقيف أو حظر خروج — نتدخل فوراً، لأن الإفادة الأولى كثيراً ما تحدد مجرى التحقيق بأكمله. وعندما لا تكفي المرحلة الإدارية أو مرحلة الدرجة الأولى، نلجأ إلى الاعتراض وطرق الاستئناف والتمييز، وعند الحاجة نتقدم بطلب فردي إلى المحكمة الدستورية. نُبقي موكلينا على اطلاع في كل مرحلة بلغتهم الأم، مع تأمين التنسيق مع المترجم والقنصلية، ونقف بجانبهم في كل نقطة يتعين فيها اتخاذ قرار.",
      es: "Abordamos cada asunto examinando primero el hecho, el estado de las pruebas y la situación del cliente, y luego determinamos la estrategia de defensa más adecuada. En situaciones urgentes —una declaración por prestar, una audiencia de prisión provisional o una prohibición de salida— intervenimos de inmediato, porque la primera declaración a menudo define todo el curso de la investigación. Cuando la vía administrativa o la primera instancia son insuficientes, interponemos oposiciones y recurrimos a las vías de istinaf y temyiz y, cuando es necesario, a una demanda individual ante el Tribunal Constitucional. Mantenemos informados a nuestros clientes en cada etapa, en su propio idioma, con coordinación de intérprete y consulado, y les acompañamos en cada punto de decisión.",
      fr: "Nous abordons chaque dossier en examinant d'abord les faits, l'état des preuves et la position du client, puis nous déterminons la stratégie de défense la mieux adaptée. Dans les situations urgentes — une déclaration à venir, une audience de détention ou une interdiction de sortie — nous intervenons immédiatement, car la première déclaration détermine souvent tout le cours de l'enquête. Lorsque la phase administrative ou de première instance est insuffisante, nous formons des oppositions et engageons les voies de recours de l'istinaf et du temyiz et, si nécessaire, un recours individuel devant la Cour constitutionnelle. Nos clients sont informés à chaque étape dans leur propre langue, avec une coordination de l'interprète et du consulat, et nous les accompagnons à chaque moment de décision.",
    },
    faqs: {
      tr: [
        {
          q: "Şüpheli sıfatıyla karakola ya da savcılığa çağrıldım; ne yapmalıyım?",
          a: "Derhal bir ceza avukatı tutun ve avukatınız yanınızda olmadan hiçbir ifade vermeyin. Yabancı uyruklu olarak ücretsiz tercüman ve konsolosluğunuza bildirim yapılması hakkına sahipsiniz. İlk ifade çoğu zaman soruşturmanın seyrini belirlediğinden, hazırlıksız verilmemelidir.",
        },
        {
          q: "HAGB nedir ve nasıl işler?",
          a: "HAGB (hükmün açıklanmasının geri bırakılması), CMK m. 231 kapsamında; sanığın daha önce kasıtlı bir suçtan mahkûm olmaması ve varsa zararın giderilmiş olması koşuluyla, iki yıl veya daha az hapis gerektiren suçlarda mahkemenin mahkûmiyet kararını beş yıllık denetim süresi boyunca açıklamamasına imkân tanır. Bu sürede kasıtlı bir suç işlenmezse mahkûmiyet hiçbir zaman resmî olarak ilan edilmez ve dava düşer.",
        },
        {
          q: "Tutuklanabilir miyim; adli kontrol bir alternatif midir?",
          a: "Tutuklama son çaredir ve yalnızca kuvvetli suç şüphesinin yanı sıra kaçma ya da delil karartma gibi bir sebep bulunduğunda uygulanır. Yabancılar için çoğu zaman kaçma riski gerekçe gösterilir; ancak savunma, Türkiye'deki bağlarınızı belgeleyerek tutuklama yerine adli kontrol talep edebilir: yurt dışı çıkış yasağı, pasaportun teslimi veya karakola imza gibi tedbirler bunlara örnektir.",
        },
      ],
      en: [
        {
          q: "I have been called to the police station or prosecutor's office as a suspect — what should I do?",
          a: "Retain a criminal lawyer immediately and give no statement without your lawyer present. As a foreign national, you have the right to a free interpreter and to notification of your consulate. The first statement often determines the course of the investigation, so it should never be given unprepared.",
        },
        {
          q: "What is HAGB and how does it work?",
          a: "HAGB (deferral of the announcement of the verdict), under Article 231 of the Code of Criminal Procedure, allows the court to withhold a conviction for a five-year supervision period in offences carrying two years or less of imprisonment, provided the defendant has no prior intentional conviction and any loss has been remedied. If no intentional offence is committed during that period, the conviction is never formally announced and the case is dismissed.",
        },
        {
          q: "Can I be detained, and is judicial control an alternative?",
          a: "Detention is a last resort, applied only where there is strong suspicion of the offence together with a ground such as flight risk or tampering with evidence. For foreigners, flight risk is often cited; however, the defence can request judicial control instead — measures such as an exit ban, surrender of the passport, or signing in at a police station — by documenting your ties to Turkey.",
        },
      ],
      de: [
        {
          q: "Ich wurde als Beschuldigter zur Polizei oder Staatsanwaltschaft geladen — was soll ich tun?",
          a: "Beauftragen Sie sofort einen Strafverteidiger und machen Sie ohne Ihren Anwalt keine Aussage. Als Ausländer haben Sie das Recht auf einen kostenlosen Dolmetscher und auf Benachrichtigung Ihres Konsulats. Die erste Aussage bestimmt häufig den Verlauf der Ermittlungen und sollte daher niemals unvorbereitet erfolgen.",
        },
        {
          q: "Was ist HAGB und wie funktioniert es?",
          a: "HAGB (Aussetzung der Urteilsverkündung) ermöglicht es dem Gericht nach Art. 231 der türkischen Strafprozessordnung, bei Straftaten mit einer Freiheitsstrafe von zwei Jahren oder weniger die Verurteilung für eine fünfjährige Bewährungszeit zurückzuhalten — vorausgesetzt, der Angeklagte wurde zuvor nicht wegen einer vorsätzlichen Tat verurteilt und ein etwaiger Schaden wurde ausgeglichen. Wird in diesem Zeitraum keine vorsätzliche Straftat begangen, wird die Verurteilung nie förmlich verkündet und das Verfahren eingestellt.",
        },
        {
          q: "Kann ich in Untersuchungshaft genommen werden, und ist die Justizkontrolle eine Alternative?",
          a: "Die Untersuchungshaft ist das letzte Mittel und wird nur angewandt, wenn neben einem dringenden Tatverdacht auch ein Grund wie Flucht- oder Verdunkelungsgefahr besteht. Bei Ausländern wird häufig die Fluchtgefahr angeführt; die Verteidigung kann jedoch anstelle der Haft eine Justizkontrolle beantragen — Maßnahmen wie ein Ausreiseverbot, die Abgabe des Reisepasses oder eine Meldeauflage bei der Polizei —, indem sie Ihre Bindungen an die Türkei belegt.",
        },
      ],
      ru: [
        {
          q: "Меня вызвали в полицию или прокуратуру в качестве подозреваемого — что делать?",
          a: "Немедленно наймите адвоката по уголовным делам и не давайте никаких показаний без присутствия адвоката. Как иностранный гражданин вы имеете право на бесплатного переводчика и на уведомление вашего консульства. Первый допрос нередко определяет ход расследования, поэтому к нему нельзя приступать неподготовленным.",
        },
        {
          q: "Что такое HAGB и как это работает?",
          a: "HAGB (отсрочка оглашения приговора) согласно статье 231 Уголовно-процессуального кодекса позволяет суду не оглашать обвинительный приговор в течение пятилетнего испытательного срока по преступлениям, наказуемым лишением свободы на два года или менее, при условии, что у подсудимого нет прежней судимости за умышленное преступление и причинённый ущерб возмещён. Если в этот период не совершено умышленного преступления, приговор так и не оглашается официально, а дело прекращается.",
        },
        {
          q: "Могут ли меня заключить под стражу и является ли судебный контроль альтернативой?",
          a: "Заключение под стражу — крайняя мера, применяемая только при наличии веских подозрений в совершении преступления наряду с таким основанием, как риск побега или сокрытие доказательств. Для иностранцев часто ссылаются на риск побега; однако защита может ходатайствовать о судебном контроле вместо стражи — такие меры, как запрет на выезд, сдача паспорта или явка в полицию для отметки, — документально подтвердив ваши связи с Турцией.",
        },
      ],
      ar: [
        {
          q: "استُدعيتُ إلى مركز الشرطة أو النيابة بصفة مشتبه به؛ ماذا أفعل؟",
          a: "وكّل محامياً جنائياً على الفور ولا تُدلِ بأي إفادة دون حضور محاميك. بصفتك أجنبياً، لك الحق في مترجم مجاني وفي إبلاغ قنصليتك. الإفادة الأولى كثيراً ما تحدد مجرى التحقيق، لذا يجب ألّا تُقدَّم دون استعداد.",
        },
        {
          q: "ما هو HAGB وكيف يعمل؟",
          a: "HAGB (إرجاء النطق بالحكم)، بموجب المادة 231 من قانون المحاكمات الجزائية، يتيح للمحكمة حجب الإدانة طوال مدة رقابة تبلغ خمس سنوات في الجرائم التي عقوبتها الحبس سنتان أو أقل، شريطة ألّا يكون المتهم قد أُدين سابقاً بجريمة عمدية وأن يكون الضرر — إن وُجد — قد جُبِر. وإذا لم تُرتكب جريمة عمدية خلال تلك المدة، فلا يُعلَن الحكم رسمياً أبداً وتسقط الدعوى.",
        },
        {
          q: "هل يمكن توقيفي، وهل الرقابة القضائية بديل عن ذلك؟",
          a: "التوقيف ملاذ أخير، ولا يُطبَّق إلا عند وجود اشتباه قوي بالجريمة إلى جانب سبب مثل خطر الفرار أو العبث بالأدلة. وبالنسبة للأجانب، كثيراً ما يُستند إلى خطر الفرار؛ غير أن الدفاع يمكنه طلب الرقابة القضائية بدلاً من التوقيف — تدابير مثل حظر الخروج من البلاد أو تسليم جواز السفر أو التوقيع في مركز الشرطة — من خلال توثيق روابطك بتركيا.",
        },
      ],
      es: [
        {
          q: "Me han citado a la comisaría o a la fiscalía como investigado, ¿qué debo hacer?",
          a: "Contrate de inmediato a un abogado penalista y no preste declaración sin su abogado presente. Como extranjero, tiene derecho a un intérprete gratuito y a la notificación de su consulado. La primera declaración suele determinar el curso de la investigación, por lo que nunca debe prestarse sin preparación.",
        },
        {
          q: "¿Qué es el HAGB y cómo funciona?",
          a: "El HAGB (aplazamiento del pronunciamiento de la sentencia), conforme al artículo 231 de la Ley de Enjuiciamiento Criminal, permite al tribunal retener la condena durante un periodo de prueba de cinco años en delitos con pena de dos años o menos de prisión, siempre que el acusado carezca de condena previa por delito doloso y se haya reparado el eventual perjuicio. Si no se comete un delito doloso durante ese periodo, la condena nunca se pronuncia formalmente y la causa se archiva.",
        },
        {
          q: "¿Pueden decretarme prisión provisional? ¿Es el control judicial una alternativa?",
          a: "La prisión provisional es un último recurso y solo se aplica cuando existe una fuerte sospecha del delito junto con un motivo como el riesgo de fuga o la manipulación de pruebas. En el caso de los extranjeros suele alegarse el riesgo de fuga; sin embargo, la defensa puede solicitar el control judicial en su lugar —medidas como la prohibición de salida, la entrega del pasaporte o la comparecencia periódica en comisaría— documentando sus vínculos con Turquía.",
        },
      ],
      fr: [
        {
          q: "J'ai été convoqué au commissariat ou au parquet en tant que mis en cause — que dois-je faire ?",
          a: "Mandatez immédiatement un avocat pénaliste et ne faites aucune déclaration sans votre avocat. En tant qu'étranger, vous avez droit à un interprète gratuit et à la notification de votre consulat. La première déclaration détermine souvent le cours de l'enquête et ne doit donc jamais être faite sans préparation.",
        },
        {
          q: "Qu'est-ce que le HAGB et comment fonctionne-t-il ?",
          a: "Le HAGB (ajournement du prononcé du jugement), au titre de l'article 231 du Code de procédure pénale, permet au tribunal de suspendre une condamnation pendant une période de probation de cinq ans pour les infractions passibles de deux ans d'emprisonnement ou moins, à condition que le prévenu n'ait pas de condamnation antérieure pour une infraction intentionnelle et que tout préjudice ait été réparé. Si aucune infraction intentionnelle n'est commise durant cette période, la condamnation n'est jamais formellement prononcée et l'affaire est classée.",
        },
        {
          q: "Puis-je être placé en détention, et le contrôle judiciaire est-il une alternative ?",
          a: "La détention est un dernier recours, appliquée uniquement en présence de forts soupçons de l'infraction assortis d'un motif tel que le risque de fuite ou l'altération des preuves. Pour les étrangers, le risque de fuite est souvent invoqué ; toutefois, la défense peut demander un contrôle judiciaire à la place — des mesures telles qu'une interdiction de sortie du territoire, la remise du passeport ou l'obligation de pointer au commissariat — en documentant vos liens avec la Turquie.",
        },
      ],
    },
  },
  {
    slug: "is-hukuku",
    metaTitle: {
      tr: "Antalya İş Hukuku Avukatı | Kıdem Tazminatı & İşe İade Davası",
      en: "Antalya Labour Lawyer | Severance Pay & Reinstatement Claims in Turkey",
      de: "Arbeitsrechtsanwalt Antalya | Abfindung & Wiedereinstellungsklage",
      ru: "Адвокат по трудовому праву в Анталье | Выходное пособие и восстановление на работе",
      ar: "محامي قانون العمل في أنطاليا | تعويض نهاية الخدمة ودعاوى إعادة العامل",
      es: "Abogado Laboralista en Antalya | Indemnización por Despido y Readmisión en Turquía",
      fr: "Avocat en Droit du Travail à Antalya | Indemnités de Licenciement et Réintégration en Turquie",
    },
    metaDescription: {
      tr: "Antalya'da iş hukuku avukatı olarak işe iade davaları, kıdem ve ihbar tazminatı, fazla mesai ve yıllık izin alacakları ile mobbing uyuşmazlıklarında yabancı ve yerli çalışanların ve işverenlerin haklarını koruyoruz.",
      en: "As labour lawyers in Antalya, we protect the rights of foreign and local employees and employers in reinstatement claims, severance and notice pay, overtime and annual leave entitlements, and workplace harassment disputes.",
      de: "Als Arbeitsrechtsanwälte in Antalya schützen wir die Rechte ausländischer und einheimischer Arbeitnehmer und Arbeitgeber bei Wiedereinstellungsklagen, Abfindungen und Kündigungsentschädigungen, Überstunden- und Jahresurlaubsansprüchen sowie Mobbingstreitigkeiten.",
      ru: "Как адвокаты по трудовому праву в Анталье мы защищаем права иностранных и местных работников и работодателей в делах о восстановлении на работе, выходных пособиях и компенсациях за уведомление, требованиях по сверхурочной работе и ежегодному отпуску, а также в спорах о притеснениях на рабочем месте.",
      ar: "بوصفنا محامي قانون العمل في أنطاليا، نحمي حقوق الموظفين وأصحاب العمل الأجانب والمحليين في دعاوى إعادة العامل إلى عمله وتعويض نهاية الخدمة وتعويض الإخطار ومستحقات العمل الإضافي والإجازة السنوية ونزاعات التحرش في مكان العمل.",
      es: "Como abogados laboralistas en Antalya, protegemos los derechos de trabajadores y empleadores extranjeros y locales en demandas de readmisión, indemnizaciones por despido y preaviso, derechos de horas extraordinarias y vacaciones anuales, y disputas por acoso laboral.",
      fr: "En tant qu'avocats en droit du travail à Antalya, nous défendons les droits des salariés et employeurs étrangers et locaux dans les demandes de réintégration, les indemnités de licenciement et de préavis, les droits aux heures supplémentaires et congés annuels, et les litiges de harcèlement au travail.",
    },
    intro: {
      tr: "Antalya; turizm, sağlık, gayrimenkul ve teknoloji sektörlerinde hem yabancı hem yerli çalışanı yoğun biçimde istihdam eden bir şehirdir. İş ilişkisinin kurulması, sürdürülmesi ve özellikle sona ermesi aşamalarında ise çalışan ile işveren arasında sıklıkla uyuşmazlık doğmaktadır. Antalya'da iş hukuku avukatı olarak görev yapan ekibimiz, hem hakkının korunmasını isteyen çalışanların hem de yükümlülüklerini hukuka uygun biçimde yerine getirmek isteyen işverenlerin yanındadır.\n\nİşe iade davaları, kıdem ve ihbar tazminatı alacakları, fazla mesai ve yıllık izin ücreti uyuşmazlıkları, iş sözleşmelerinin hazırlanması ve incelenmesi ile mobbing ve ayrımcılık iddiaları en sık karşılaştığımız konuların başında gelmektedir. Türk iş hukuku, çalışma izniyle istihdam edilen yabancıya Türk çalışanla aynı korumaları tanır; biz de her dosyayı kendi koşulları içinde değerlendirir, çoğu iş uyuşmazlığında zorunlu olan arabuluculuk aşamasından iş mahkemesine kadar en güçlü hukuki yolu birlikte belirleriz.",
      en: "Antalya is a city that employs both foreign and local workers heavily across the tourism, healthcare, real estate, and technology sectors. Disputes frequently arise between employee and employer at the stages of forming, maintaining, and above all ending the employment relationship. Our team, serving as labour lawyers in Antalya, stands beside both employees seeking to protect their rights and employers wishing to meet their obligations in accordance with the law.\n\nReinstatement claims, severance and notice pay entitlements, overtime and annual leave disputes, the drafting and review of employment contracts, and allegations of mobbing and discrimination are among the most frequent matters we handle. Turkish labour law grants a foreigner employed under a work permit the same protections as a Turkish worker; we assess each case on its own merits and, from the mediation stage that is mandatory in most labour disputes through to the labour court, identify together the path with the strongest legal foundation.",
      de: "Antalya ist eine Stadt, die in den Bereichen Tourismus, Gesundheitswesen, Immobilien und Technologie sowohl ausländische als auch einheimische Arbeitnehmer in großer Zahl beschäftigt. Bei der Begründung, Aufrechterhaltung und vor allem bei der Beendigung des Arbeitsverhältnisses kommt es häufig zu Streitigkeiten zwischen Arbeitnehmer und Arbeitgeber. Unser Team, tätig als Arbeitsrechtsanwälte in Antalya, steht sowohl Arbeitnehmern, die ihre Rechte schützen möchten, als auch Arbeitgebern, die ihren Pflichten rechtskonform nachkommen wollen, zur Seite.\n\nWiedereinstellungsklagen, Ansprüche auf Abfindung und Kündigungsentschädigung, Streitigkeiten über Überstunden und Jahresurlaub, die Gestaltung und Prüfung von Arbeitsverträgen sowie Vorwürfe von Mobbing und Diskriminierung gehören zu den häufigsten Fragen, mit denen wir uns befassen. Das türkische Arbeitsrecht gewährt einem mit Arbeitserlaubnis beschäftigten Ausländer denselben Schutz wie einem türkischen Arbeitnehmer; wir beurteilen jeden Fall individuell und bestimmen gemeinsam vom bei den meisten Arbeitsstreitigkeiten obligatorischen Schlichtungsverfahren bis zum Arbeitsgericht den rechtlich stärksten Weg.",
      ru: "Анталья — город, активно нанимающий как иностранных, так и местных работников в сферах туризма, здравоохранения, недвижимости и технологий. На этапах заключения, продолжения и особенно прекращения трудовых отношений между работником и работодателем часто возникают споры. Наша команда, выступающая как адвокаты по трудовому праву в Анталье, находится рядом как с работниками, стремящимися защитить свои права, так и с работодателями, желающими исполнять свои обязанности в соответствии с законом.\n\nДела о восстановлении на работе, требования о выходном пособии и компенсации за уведомление, споры о сверхурочной работе и ежегодном отпуске, составление и проверка трудовых договоров, а также заявления о моббинге и дискриминации — наиболее частые направления нашей работы. Турецкое трудовое право предоставляет иностранцу, нанятому по разрешению на работу, те же гарантии, что и турецкому работнику; мы рассматриваем каждое дело индивидуально и — от обязательной в большинстве трудовых споров процедуры медиации до трудового суда — совместно определяем путь с наиболее прочным правовым основанием.",
      ar: "أنطاليا مدينة توظّف بكثافة العاملين الأجانب والمحليين في قطاعات السياحة والصحة والعقارات والتكنولوجيا. وكثيراً ما تنشأ نزاعات بين العامل وصاحب العمل في مراحل نشوء علاقة العمل واستمرارها، وقبل كل شيء عند انتهائها. فريقنا، بصفته محامي قانون عمل في أنطاليا، يقف إلى جانب كلٍّ من العاملين الراغبين في حماية حقوقهم وأصحاب العمل الراغبين في الوفاء بالتزاماتهم وفقاً للقانون.\n\nدعاوى إعادة العامل إلى عمله ومستحقات تعويض نهاية الخدمة وتعويض الإخطار ونزاعات العمل الإضافي والإجازة السنوية وصياغة عقود العمل ومراجعتها وادعاءات التنمر والتمييز من بين أكثر القضايا التي نتعامل معها. يمنح قانون العمل التركي الأجنبي الموظَّف بتصريح عمل الحماية ذاتها الممنوحة للعامل التركي؛ ونحن نقيّم كل قضية بحسب ملابساتها الخاصة، ونحدد معاً المسار ذا الأساس القانوني الأقوى، من مرحلة الوساطة الإلزامية في معظم نزاعات العمل وصولاً إلى محكمة العمل.",
      es: "Antalya es una ciudad que emplea intensamente a trabajadores tanto extranjeros como locales en los sectores del turismo, la sanidad, el inmobiliario y la tecnología. En las etapas de constitución, mantenimiento y, sobre todo, extinción de la relación laboral surgen con frecuencia disputas entre empleado y empleador. Nuestro equipo, que actúa como abogados laboralistas en Antalya, acompaña tanto a los trabajadores que desean proteger sus derechos como a los empleadores que desean cumplir sus obligaciones conforme a la ley.\n\nLas demandas de readmisión, los derechos a indemnización por despido y por preaviso, las disputas sobre horas extraordinarias y vacaciones anuales, la redacción y revisión de contratos de trabajo y las alegaciones de acoso laboral y discriminación son los asuntos que tratamos con mayor frecuencia. El derecho laboral turco concede al extranjero empleado con permiso de trabajo las mismas protecciones que a un trabajador turco; evaluamos cada caso según sus propios méritos e identificamos juntos, desde la fase de mediación obligatoria en la mayoría de los conflictos laborales hasta el juzgado de lo social, la vía con el fundamento jurídico más sólido.",
      fr: "Antalya est une ville qui emploie massivement des travailleurs étrangers comme locaux dans les secteurs du tourisme, de la santé, de l'immobilier et de la technologie. Des litiges surviennent fréquemment entre salarié et employeur aux étapes de la formation, du maintien et surtout de la rupture de la relation de travail. Notre équipe, qui exerce en tant qu'avocats en droit du travail à Antalya, se tient aux côtés tant des salariés soucieux de protéger leurs droits que des employeurs souhaitant remplir leurs obligations conformément à la loi.\n\nLes demandes de réintégration, les droits aux indemnités de licenciement et de préavis, les litiges relatifs aux heures supplémentaires et aux congés annuels, la rédaction et la revue des contrats de travail ainsi que les allégations de harcèlement moral et de discrimination figurent parmi les dossiers que nous traitons le plus fréquemment. Le droit du travail turc accorde à l'étranger employé sous permis de travail les mêmes protections qu'à un travailleur turc ; nous apprécions chaque affaire selon ses propres mérites et déterminons ensemble, de la phase de médiation obligatoire dans la plupart des litiges du travail jusqu'au tribunal du travail, la voie offrant les fondements juridiques les plus solides.",
    },
    services: {
      tr: [
        "İşe iade davaları ve iş güvencesi kapsamındaki fesih uyuşmazlıkları",
        "Kıdem ve ihbar tazminatı hesaplaması, tahsili ve dava takibi",
        "Fazla mesai, yıllık izin ve ödenmeyen ücret alacaklarının tespiti ve talebi",
        "Yabancı ve yerli çalışanlar ile işverenler için iş sözleşmesi hazırlığı ve incelemesi",
        "Çalışma izniyle bağlantılı istihdam ve fesih süreçlerinin yönetimi",
        "İşyerinde mobbing, ayrımcılık ve tacize karşı hukuki başvurular",
        "Rekabet yasağı (non-compete) sözleşmelerinin düzenlenmesi ve uyuşmazlıkları",
        "Zorunlu arabuluculuk sürecinin yürütülmesi ve iş mahkemesinde temsil",
      ],
      en: [
        "Reinstatement claims and termination disputes under job security",
        "Calculation, collection, and litigation of severance and notice pay",
        "Determining and claiming overtime, annual leave, and unpaid wage entitlements",
        "Employment contract drafting and review for foreign and local employees and employers",
        "Management of employment and termination processes linked to work permits",
        "Legal action against workplace mobbing, discrimination, and harassment",
        "Drafting and disputes over non-compete clauses",
        "Conducting the mandatory mediation process and representation before the labour court",
      ],
      de: [
        "Wiedereinstellungsklagen und Kündigungsstreitigkeiten im Rahmen des Kündigungsschutzes",
        "Berechnung, Einziehung und gerichtliche Durchsetzung von Abfindung und Kündigungsentschädigung",
        "Feststellung und Geltendmachung von Überstunden-, Jahresurlaubs- und ausstehenden Lohnansprüchen",
        "Gestaltung und Prüfung von Arbeitsverträgen für ausländische und einheimische Arbeitnehmer und Arbeitgeber",
        "Steuerung von Einstellungs- und Kündigungsprozessen im Zusammenhang mit Arbeitserlaubnissen",
        "Rechtliche Schritte gegen Mobbing, Diskriminierung und Belästigung am Arbeitsplatz",
        "Gestaltung von und Streitigkeiten über Wettbewerbsverbote (Non-Compete)",
        "Durchführung des obligatorischen Schlichtungsverfahrens und Vertretung vor dem Arbeitsgericht",
      ],
      ru: [
        "Дела о восстановлении на работе и споры об увольнении в рамках гарантий занятости",
        "Расчёт, взыскание и судебное сопровождение выходного пособия и компенсации за уведомление",
        "Установление и взыскание требований по сверхурочной работе, ежегодному отпуску и невыплаченной зарплате",
        "Составление и проверка трудовых договоров для иностранных и местных работников и работодателей",
        "Ведение процессов найма и увольнения, связанных с разрешением на работу",
        "Правовые действия против моббинга, дискриминации и притеснений на рабочем месте",
        "Составление и споры по условиям о неконкуренции (non-compete)",
        "Проведение обязательной процедуры медиации и представительство в трудовом суде",
      ],
      ar: [
        "دعاوى إعادة العامل إلى عمله ونزاعات الفصل في إطار ضمان العمل",
        "احتساب تعويض نهاية الخدمة وتعويض الإخطار وتحصيلهما ومتابعة الدعاوى المتعلقة بهما",
        "تحديد مستحقات العمل الإضافي والإجازة السنوية والأجور غير المدفوعة والمطالبة بها",
        "صياغة عقود العمل ومراجعتها للعاملين وأصحاب العمل الأجانب والمحليين",
        "إدارة إجراءات التوظيف والفصل المرتبطة بتصاريح العمل",
        "الإجراءات القانونية ضد التنمر والتمييز والتحرش في مكان العمل",
        "صياغة شروط عدم المنافسة (non-compete) والنزاعات المتعلقة بها",
        "إجراء عملية الوساطة الإلزامية والتمثيل أمام محكمة العمل",
      ],
      es: [
        "Demandas de readmisión y disputas de despido en el marco de la garantía de empleo",
        "Cálculo, cobro y litigio de la indemnización por despido y por preaviso",
        "Determinación y reclamación de horas extraordinarias, vacaciones anuales y salarios impagados",
        "Redacción y revisión de contratos de trabajo para trabajadores y empleadores extranjeros y locales",
        "Gestión de los procesos de contratación y despido vinculados a los permisos de trabajo",
        "Acciones legales contra el acoso laboral, la discriminación y el hostigamiento en el trabajo",
        "Redacción y disputas sobre cláusulas de no competencia (non-compete)",
        "Tramitación del proceso de mediación obligatoria y representación ante el juzgado de lo social",
      ],
      fr: [
        "Demandes de réintégration et litiges de licenciement dans le cadre de la protection de l'emploi",
        "Calcul, recouvrement et contentieux des indemnités de licenciement et de préavis",
        "Détermination et réclamation des heures supplémentaires, congés annuels et salaires impayés",
        "Rédaction et revue de contrats de travail pour salariés et employeurs étrangers et locaux",
        "Gestion des processus d'embauche et de licenciement liés aux permis de travail",
        "Actions en justice contre le harcèlement moral, la discrimination et le harcèlement au travail",
        "Rédaction et litiges relatifs aux clauses de non-concurrence (non-compete)",
        "Conduite de la procédure de médiation obligatoire et représentation devant le tribunal du travail",
      ],
    },
    process: {
      tr: "Her dosyaya, iş sözleşmesi, bordro, işe giriş-çıkış kayıtları ve fesih bildirimi gibi belgelerin incelenmesiyle başlar; çalışanın gerçek kıdemini, ücretini ve doğmuş alacaklarını netleştiririz. Çoğu bireysel iş uyuşmazlığında dava öncesi zorunlu olan arabuluculuk aşamasını titizlikle yürütür, uzlaşmanın müvekkilin lehine olduğu durumlarda anlaşma koşullarını müzakere ederiz. Uzlaşma sağlanamadığında Antalya İş Mahkemesi nezdinde dava açar; ispat yükünün büyük ölçüde işverende olduğu izin ve fazla mesai gibi kalemlerde delil stratejisini buna göre kurarız. Müvekkillerimiz süreç boyunca kendi dilinde bilgilendirilir ve her karar noktasında yanlarında dururuz.",
      en: "We begin every case by reviewing documents such as the employment contract, payslips, entry and exit records, and the termination notice, and clarify the employee's actual seniority, wage, and accrued entitlements. We carefully conduct the mediation stage, which is a mandatory pre-litigation step in most individual labour disputes, and negotiate settlement terms where a resolution serves the client's interest. When no settlement is reached, we file proceedings before the Antalya Labour Court and, for items such as leave and overtime where the burden of proof rests largely with the employer, build the evidentiary strategy accordingly. Our clients are kept informed throughout in their own language, and we stand by them at every decision point.",
      de: "Wir beginnen jeden Fall mit der Prüfung von Unterlagen wie Arbeitsvertrag, Lohnabrechnungen, Ein- und Austrittsnachweisen sowie der Kündigung und klären die tatsächliche Betriebszugehörigkeit, das Entgelt und die entstandenen Ansprüche des Arbeitnehmers. Das Schlichtungsverfahren, das bei den meisten individuellen Arbeitsstreitigkeiten ein obligatorischer vorgerichtlicher Schritt ist, führen wir sorgfältig durch und verhandeln Vergleichsbedingungen, sofern eine Einigung im Interesse des Mandanten liegt. Kommt keine Einigung zustande, klagen wir vor dem Arbeitsgericht Antalya und richten die Beweisstrategie bei Positionen wie Urlaub und Überstunden, bei denen die Beweislast weitgehend beim Arbeitgeber liegt, entsprechend aus. Unsere Mandanten werden durchgehend in ihrer eigenen Sprache informiert, und wir stehen ihnen an jedem Entscheidungspunkt zur Seite.",
      ru: "Каждое дело мы начинаем с изучения документов — трудового договора, расчётных листков, записей о приёме и увольнении, уведомления о расторжении — и уточняем фактический стаж работника, его заработную плату и возникшие требования. Мы тщательно проводим стадию медиации, которая в большинстве индивидуальных трудовых споров является обязательным досудебным этапом, и согласовываем условия мирового соглашения, когда его достижение отвечает интересам клиента. Если соглашение не достигнуто, мы подаём иск в Трудовой суд Антальи и по таким позициям, как отпуск и сверхурочная работа, где бремя доказывания в значительной степени лежит на работодателе, выстраиваем доказательственную стратегию соответствующим образом. На протяжении всего процесса клиенты информируются на их родном языке, и мы находимся рядом с ними в каждой точке принятия решений.",
      ar: "نبدأ كل قضية بمراجعة المستندات مثل عقد العمل وكشوف الرواتب وسجلات الدخول والخروج وإشعار الفصل، ونوضّح الأقدمية الفعلية للعامل وأجره والمستحقات التي نشأت له. ونجري بعناية مرحلة الوساطة، التي تُعدّ خطوة إلزامية سابقة للتقاضي في معظم نزاعات العمل الفردية، ونتفاوض على شروط التسوية حين تكون في مصلحة الموكل. وعند تعذّر التسوية، نرفع الدعوى أمام محكمة العمل في أنطاليا، ونبني استراتيجية الإثبات وفقاً لذلك في بنود مثل الإجازة والعمل الإضافي حيث يقع عبء الإثبات إلى حدٍّ كبير على صاحب العمل. ويظل موكلونا على اطلاع طوال العملية بلغتهم الأم، ونقف بجانبهم عند كل نقطة قرار.",
      es: "Comenzamos cada caso revisando documentos como el contrato de trabajo, las nóminas, los registros de alta y baja y la notificación de despido, y aclaramos la antigüedad real del trabajador, su salario y los derechos devengados. Llevamos a cabo con rigor la fase de mediación, que es un paso previo obligatorio en la mayoría de los conflictos laborales individuales, y negociamos los términos de un acuerdo cuando su consecución conviene al cliente. Cuando no se alcanza un acuerdo, interponemos demanda ante el Juzgado de lo Social de Antalya y, en partidas como las vacaciones y las horas extraordinarias, donde la carga de la prueba recae en gran medida sobre el empleador, construimos la estrategia probatoria en consecuencia. Mantenemos informados a nuestros clientes durante todo el proceso en su propio idioma y los acompañamos en cada punto de decisión.",
      fr: "Nous débutons chaque dossier par l'examen de documents tels que le contrat de travail, les bulletins de paie, les registres d'entrée et de sortie et la notification de licenciement, et nous précisons l'ancienneté réelle du salarié, sa rémunération et les droits acquis. Nous menons avec soin la phase de médiation, étape préalable obligatoire dans la plupart des litiges individuels du travail, et négocions les termes d'un accord lorsqu'une résolution sert l'intérêt du client. À défaut d'accord, nous saisissons le Tribunal du travail d'Antalya et, pour des postes tels que les congés et les heures supplémentaires où la charge de la preuve incombe largement à l'employeur, nous construisons la stratégie probatoire en conséquence. Nos clients sont informés tout au long de la procédure dans leur propre langue, et nous les accompagnons à chaque moment de décision.",
    },
    faqs: {
      tr: [
        {
          q: "İş güvencesi kapsamında mıyım ve işe iade davası açabilir miyim?",
          a: "İşe iade davası, belirli sayıda işçi çalıştıran bir işyerinde, belirli bir kıdeme sahip ve belirsiz süreli sözleşmeyle çalışan çalışanın geçerli sebep gösterilmeksizin işten çıkarılması halinde açılabilir. Fesih bildiriminin tebliğinden itibaren yasal süre içinde (genellikle bir ay) önce zorunlu arabuluculuğa, uzlaşma sağlanamazsa iş mahkemesine başvurulur.",
        },
        {
          q: "Yabancı çalışan olarak kıdem ve ihbar tazminatı hakkım var mı?",
          a: "Evet. Çalışma iznine dayalı olarak Türk hukukuna tabi bir iş sözleşmesiyle çalışan yabancı, kıdem ve ihbar tazminatı bakımından Türk çalışanla aynı korumalara sahiptir. Kıdem tazminatı çalışılan her tam yıl için son giydirilmiş brüt ücret üzerinden hesaplanır; istifa gibi bazı hâllerde ise kural olarak kıdem tazminatı doğmaz.",
        },
        {
          q: "Kullanmadığım yıllık izinlerin ücretini alabilir miyim?",
          a: "İş sözleşmesi hangi sebeple sona ererse ersin, kullandırılmayan yıllık izin günlerinin ücreti son ücret üzerinden ödenmek zorundadır. Yerleşik uygulamaya göre iznin kullandırıldığını ispat yükü işverendedir ve bu yalnızca tanık beyanıyla değil, imzalı izin belgeleriyle ispatlanır; belge yoksa mahkeme çalışan lehine ödemeye hükmeder.",
        },
      ],
      en: [
        {
          q: "Am I covered by job security and can I file a reinstatement claim?",
          a: "A reinstatement claim may be filed where an employee working under an indefinite-term contract, with a certain seniority, at a workplace employing a certain number of workers, is dismissed without a valid reason being shown. Within the statutory period from service of the termination notice (generally one month), the matter first goes to mandatory mediation and, if no settlement is reached, to the labour court.",
        },
        {
          q: "As a foreign employee, am I entitled to severance and notice pay?",
          a: "Yes. A foreigner working under a work-permit-based employment contract governed by Turkish law enjoys the same protections as a Turkish worker with respect to severance and notice pay. Severance pay is calculated on the last gross 'dressed' wage for each full year worked; in certain cases such as resignation, however, no severance entitlement generally arises.",
        },
        {
          q: "Can I claim payment for annual leave I did not use?",
          a: "Regardless of the reason the employment contract ends, the pay for unused annual leave days must be settled on the final wage. Under settled practice the burden of proving that leave was granted rests with the employer, and it must be shown by signed leave records rather than witness testimony alone; where no such records exist, the court rules in the employee's favour.",
        },
      ],
      de: [
        {
          q: "Falle ich unter den Kündigungsschutz und kann ich eine Wiedereinstellungsklage erheben?",
          a: "Eine Wiedereinstellungsklage kann erhoben werden, wenn ein Arbeitnehmer mit unbefristetem Vertrag und einer bestimmten Betriebszugehörigkeit in einem Betrieb mit einer bestimmten Zahl von Beschäftigten ohne Angabe eines gültigen Grundes gekündigt wird. Innerhalb der gesetzlichen Frist ab Zustellung der Kündigung (in der Regel ein Monat) erfolgt zunächst die obligatorische Schlichtung und, falls keine Einigung zustande kommt, die Klage vor dem Arbeitsgericht.",
        },
        {
          q: "Habe ich als ausländischer Arbeitnehmer Anspruch auf Abfindung und Kündigungsentschädigung?",
          a: "Ja. Ein Ausländer, der auf Grundlage einer Arbeitserlaubnis mit einem dem türkischen Recht unterliegenden Arbeitsvertrag beschäftigt ist, genießt hinsichtlich Abfindung und Kündigungsentschädigung denselben Schutz wie ein türkischer Arbeitnehmer. Die Abfindung wird für jedes volle Beschäftigungsjahr auf Grundlage des letzten Brutto-Gesamtentgelts berechnet; in bestimmten Fällen wie einer Eigenkündigung entsteht in der Regel jedoch kein Abfindungsanspruch.",
        },
        {
          q: "Kann ich die Vergütung für nicht genommenen Jahresurlaub verlangen?",
          a: "Unabhängig davon, aus welchem Grund das Arbeitsverhältnis endet, ist die Vergütung für nicht gewährte Urlaubstage auf Grundlage des letzten Entgelts auszuzahlen. Nach gefestigter Praxis trägt der Arbeitgeber die Beweislast dafür, dass der Urlaub gewährt wurde, und dies ist durch unterzeichnete Urlaubsnachweise und nicht allein durch Zeugenaussagen zu belegen; fehlen solche Nachweise, entscheidet das Gericht zugunsten des Arbeitnehmers.",
        },
      ],
      ru: [
        {
          q: "Распространяются ли на меня гарантии занятости и могу ли я подать иск о восстановлении на работе?",
          a: "Иск о восстановлении на работе может быть подан, если работник, работающий по бессрочному договору, имеющий определённый стаж, на предприятии с определённым числом работников, уволен без указания уважительной причины. В установленный законом срок с момента вручения уведомления об увольнении (как правило, один месяц) дело сначала передаётся на обязательную медиацию, а при недостижении соглашения — в трудовой суд.",
        },
        {
          q: "Имею ли я, как иностранный работник, право на выходное пособие и компенсацию за уведомление?",
          a: "Да. Иностранец, работающий по трудовому договору на основе разрешения на работу, подчинённому турецкому праву, пользуется теми же гарантиями, что и турецкий работник, в отношении выходного пособия и компенсации за уведомление. Выходное пособие рассчитывается за каждый полный отработанный год исходя из последней полной («одетой») брутто-зарплаты; в некоторых случаях, например при увольнении по собственному желанию, право на выходное пособие, как правило, не возникает.",
        },
        {
          q: "Могу ли я потребовать оплату за неиспользованный ежегодный отпуск?",
          a: "Независимо от причины прекращения трудового договора оплата за неиспользованные дни ежегодного отпуска должна быть произведена по последней зарплате. Согласно устоявшейся практике бремя доказывания предоставления отпуска лежит на работодателе, и это должно подтверждаться подписанными документами об отпуске, а не только показаниями свидетелей; при отсутствии таких документов суд выносит решение в пользу работника.",
        },
      ],
      ar: [
        {
          q: "هل أنا مشمول بضمان العمل وهل يمكنني رفع دعوى إعادة إلى العمل؟",
          a: "يمكن رفع دعوى إعادة العامل إلى عمله عندما يُفصَل عامل يعمل بعقد غير محدد المدة، ولديه أقدمية معينة، في منشأة توظّف عدداً معيناً من العمال، دون إبداء سبب صالح. وخلال المهلة القانونية من تاريخ تبليغ إشعار الفصل (عادةً شهر واحد)، يُحال الأمر أولاً إلى الوساطة الإلزامية، وإن تعذّرت التسوية يُرفع إلى محكمة العمل.",
        },
        {
          q: "بصفتي عاملاً أجنبياً، هل لي الحق في تعويض نهاية الخدمة وتعويض الإخطار؟",
          a: "نعم. يتمتع الأجنبي العامل بعقد عمل خاضع للقانون التركي بناءً على تصريح عمل بالحماية ذاتها الممنوحة للعامل التركي فيما يخص تعويض نهاية الخدمة وتعويض الإخطار. ويُحتسب تعويض نهاية الخدمة عن كل سنة كاملة من العمل على أساس آخر أجر إجمالي شامل؛ إلا أنه في بعض الحالات مثل الاستقالة لا ينشأ عادةً حق في تعويض نهاية الخدمة.",
        },
        {
          q: "هل يمكنني المطالبة بأجر الإجازة السنوية التي لم أستخدمها؟",
          a: "أياً كان سبب انتهاء عقد العمل، يجب دفع أجر أيام الإجازة السنوية غير المستخدَمة على أساس آخر أجر. ووفقاً للتطبيق المستقر، يقع عبء إثبات منح الإجازة على صاحب العمل، ويجب إثبات ذلك بمستندات إجازة موقّعة لا بشهادة الشهود وحدها؛ وفي غياب هذه المستندات تحكم المحكمة لصالح العامل.",
        },
      ],
      es: [
        {
          q: "¿Estoy cubierto por la garantía de empleo y puedo interponer una demanda de readmisión?",
          a: "Puede interponerse una demanda de readmisión cuando un trabajador con contrato indefinido, con cierta antigüedad, en un centro de trabajo que emplea a un determinado número de trabajadores, es despedido sin que se alegue una causa válida. Dentro del plazo legal desde la notificación del despido (por lo general un mes), el asunto pasa primero a la mediación obligatoria y, si no se alcanza un acuerdo, al juzgado de lo social.",
        },
        {
          q: "Como trabajador extranjero, ¿tengo derecho a indemnización por despido y por preaviso?",
          a: "Sí. Un extranjero que trabaja con un contrato de trabajo sujeto al derecho turco sobre la base de un permiso de trabajo goza de las mismas protecciones que un trabajador turco en cuanto a la indemnización por despido y por preaviso. La indemnización por despido se calcula sobre el último salario bruto 'vestido' por cada año completo trabajado; en ciertos casos, como la dimisión, por regla general no surge derecho a indemnización.",
        },
        {
          q: "¿Puedo reclamar el pago de las vacaciones anuales que no disfruté?",
          a: "Cualquiera que sea el motivo de extinción del contrato de trabajo, debe abonarse la retribución de los días de vacaciones anuales no disfrutados sobre el último salario. Según la práctica consolidada, la carga de probar que se concedieron las vacaciones recae en el empleador, y debe acreditarse mediante registros de vacaciones firmados y no solo con testimonios; si no existen tales registros, el tribunal resuelve a favor del trabajador.",
        },
      ],
      fr: [
        {
          q: "Suis-je couvert par la protection de l'emploi et puis-je engager une demande de réintégration ?",
          a: "Une demande de réintégration peut être engagée lorsqu'un salarié travaillant sous contrat à durée indéterminée, disposant d'une certaine ancienneté, dans un établissement employant un certain nombre de salariés, est licencié sans qu'un motif valable soit avancé. Dans le délai légal à compter de la notification du licenciement (en général un mois), l'affaire passe d'abord par la médiation obligatoire puis, à défaut d'accord, devant le tribunal du travail.",
        },
        {
          q: "En tant que salarié étranger, ai-je droit à des indemnités de licenciement et de préavis ?",
          a: "Oui. Un étranger travaillant sous un contrat de travail régi par le droit turc sur la base d'un permis de travail bénéficie des mêmes protections qu'un travailleur turc en matière d'indemnités de licenciement et de préavis. L'indemnité de licenciement est calculée sur le dernier salaire brut « habillé » pour chaque année complète travaillée ; dans certains cas comme la démission, aucun droit à indemnité ne naît toutefois en règle générale.",
        },
        {
          q: "Puis-je réclamer le paiement des congés annuels que je n'ai pas pris ?",
          a: "Quelle que soit la cause de la rupture du contrat de travail, la rémunération des jours de congé annuel non pris doit être réglée sur le dernier salaire. Selon la pratique établie, la charge de prouver que les congés ont été accordés incombe à l'employeur, et cela doit être démontré par des registres de congés signés et non par le seul témoignage ; en l'absence de tels documents, le tribunal statue en faveur du salarié.",
        },
      ],
    },
  },
  {
    slug: "fikri-mulkiyet-hukuku",
    metaTitle: {
      tr: "Antalya Fikri Mülkiyet Avukatı | Marka Tescili & Telif Hakkı",
      en: "Antalya Intellectual Property Lawyer | Trademark & Copyright Protection",
      de: "Anwalt für geistiges Eigentum Antalya | Marken- & Urheberrecht",
      ru: "Адвокат по интеллектуальной собственности в Анталье | Товарные знаки и авторское право",
      ar: "محامي الملكية الفكرية في أنطاليا | تسجيل العلامات التجارية وحقوق المؤلف",
      es: "Abogado de Propiedad Intelectual en Antalya | Marcas y Derechos de Autor",
      fr: "Avocat en Propriété Intellectuelle à Antalya | Marques et Droit d'Auteur",
    },
    metaDescription: {
      tr: "Antalya'da fikri mülkiyet avukatı olarak marka tescili ve itirazı, telif hakkı (FSEK) ihlalleri, yazılım lisans sözleşmeleri, alan adı uyuşmazlıkları ve fikri mülkiyet due diligence süreçlerinde yerli ve yabancı müvekkillere destek veriyoruz.",
      en: "As an intellectual property lawyer in Antalya, we assist domestic and foreign clients with trademark registration and opposition, copyright infringement (FSEK), software licensing agreements, domain name disputes, and IP due diligence.",
      de: "Als Anwalt für geistiges Eigentum in Antalya unterstützen wir in- und ausländische Mandanten bei Markenanmeldung und Widerspruch, Urheberrechtsverletzungen (FSEK), Softwarelizenzverträgen, Domainstreitigkeiten und IP-Due-Diligence.",
      ru: "Как адвокат по интеллектуальной собственности в Анталье, мы помогаем местным и иностранным клиентам в регистрации и оспаривании товарных знаков, делах о нарушении авторских прав (FSEK), договорах на ПО, доменных спорах и due diligence интеллектуальной собственности.",
      ar: "بصفتنا محامي ملكية فكرية في أنطاليا، ندعم العملاء المحليين والأجانب في تسجيل العلامات التجارية والاعتراض عليها، وانتهاكات حقوق المؤلف (FSEK)، وعقود البرمجيات، ونزاعات أسماء النطاقات، والعناية الواجبة للملكية الفكرية.",
      es: "Como abogado de propiedad intelectual en Antalya, asistimos a clientes nacionales y extranjeros en el registro y oposición de marcas, infracciones de derechos de autor (FSEK), contratos de software, disputas de dominios y diligencia debida de propiedad intelectual.",
      fr: "En tant qu'avocat en propriété intellectuelle à Antalya, nous assistons les clients nationaux et étrangers en matière d'enregistrement et d'opposition de marques, de contrefaçon de droits d'auteur (FSEK), de contrats de logiciels, de litiges de noms de domaine et de due diligence de propriété intellectuelle.",
    },
    intro: {
      tr: "Bir marka, bir yazılım kodu ya da özgün bir tasarım, çoğu teknoloji şirketinin ve yaratıcı girişimin en değerli varlığıdır. Ancak bu varlıkların Türkiye'de hukuken korunması; doğru tescil, sağlam sözleşmeler ve gerektiğinde etkili bir ihlal takibi olmaksızın hızla belirsizleşebilir. Antalya'da fikri mülkiyet avukatı olarak, hem yerli müvekkillerin hem de Türk pazarına giren yabancı teknoloji ve yazılım şirketlerinin fikri haklarını tescilden ihtilafa kadar her aşamada koruyoruz.\n\nMarka tescili ve itiraz süreçleri, 5846 sayılı Fikir ve Sanat Eserleri Kanunu (FSEK) kapsamında telif koruması, 6769 sayılı Sınai Mülkiyet Kanunu uyarınca patent ve tasarım işlemleri, yazılım lisans ve hak devri sözleşmeleri ile .tr alan adı uyuşmazlıkları en sık çalıştığımız konuların başında gelir. Her dosyayı müvekkilin ticari hedefiyle birlikte değerlendirir; korumanın en güçlü ve maliyet açısından en verimli olduğu yolu birlikte belirleriz.",
      en: "For most technology companies and creative ventures, a trademark, a piece of software code, or an original design is the single most valuable asset. Yet the legal protection of these assets in Turkey can quickly become uncertain without proper registration, sound contracts, and, where necessary, effective enforcement against infringement. As an intellectual property lawyer in Antalya, we protect the IP rights of both domestic clients and foreign technology and software companies entering the Turkish market, at every stage from registration to dispute.\n\nTrademark registration and opposition proceedings, copyright protection under Law No. 5846 on Intellectual and Artistic Works (FSEK), patent and design matters under Law No. 6769 on Industrial Property, software licensing and IP assignment agreements, and .tr domain name disputes are among the matters we handle most frequently. We assess each case alongside the client's commercial objective and, together, identify the path offering the strongest and most cost-effective protection.",
      de: "Eine Marke, ein Software-Code oder ein originelles Design ist für die meisten Technologieunternehmen und kreativen Gründungen das wertvollste Gut. Der rechtliche Schutz dieser Vermögenswerte in der Türkei kann jedoch ohne die richtige Eintragung, belastbare Verträge und – wo nötig – eine wirksame Verfolgung von Verletzungen rasch unsicher werden. Als Anwalt für geistiges Eigentum in Antalya schützen wir die Immaterialgüterrechte sowohl inländischer Mandanten als auch ausländischer Technologie- und Softwareunternehmen, die in den türkischen Markt eintreten, von der Eintragung bis zum Rechtsstreit.\n\nMarkenanmeldung und Widerspruchsverfahren, urheberrechtlicher Schutz nach dem Gesetz Nr. 5846 über geistige und künstlerische Werke (FSEK), Patent- und Designverfahren nach dem Gesetz Nr. 6769 über gewerbliches Eigentum, Softwarelizenz- und Rechteübertragungsverträge sowie Streitigkeiten um .tr-Domains gehören zu den Themen, mit denen wir am häufigsten befasst sind. Wir beurteilen jeden Fall gemeinsam mit dem geschäftlichen Ziel des Mandanten und bestimmen den Weg, der den stärksten und zugleich kosteneffizientesten Schutz bietet.",
      ru: "Товарный знак, программный код или оригинальный дизайн — для большинства технологических компаний и креативных стартапов это самый ценный актив. Однако правовая защита этих активов в Турции без надлежащей регистрации, надёжных договоров и, при необходимости, эффективного преследования нарушений может быстро оказаться под вопросом. Как адвокат по интеллектуальной собственности в Анталье, мы защищаем права как местных клиентов, так и иностранных технологических и софтверных компаний, выходящих на турецкий рынок, на всех этапах — от регистрации до судебного спора.\n\nРегистрация товарных знаков и процедуры возражения, защита произведений по закону № 5846 об интеллектуальных и художественных произведениях (FSEK), процедуры по патентам и промышленным образцам согласно закону № 6769 о промышленной собственности, договоры лицензирования и передачи прав на ПО, а также споры по доменам .tr — наиболее частые направления нашей работы. Каждое дело мы рассматриваем вместе с коммерческой целью клиента и определяем путь, обеспечивающий наиболее надёжную и при этом экономически эффективную защиту.",
      ar: "تُعدّ العلامة التجارية أو الشيفرة البرمجية أو التصميم الأصلي من أثمن أصول معظم شركات التكنولوجيا والمشاريع الإبداعية. غير أن الحماية القانونية لهذه الأصول في تركيا قد تصبح غير مؤكدة بسرعة دون تسجيل صحيح وعقود متينة، وعند الاقتضاء، ملاحقة فعّالة للانتهاكات. وبصفتنا محامي ملكية فكرية في أنطاليا، نحمي الحقوق الفكرية للعملاء المحليين ولشركات التكنولوجيا والبرمجيات الأجنبية الداخلة إلى السوق التركية في كل مرحلة، من التسجيل حتى النزاع القضائي.\n\nتُعدّ إجراءات تسجيل العلامات التجارية والاعتراض عليها، وحماية المصنفات بموجب القانون رقم 5846 بشأن المصنفات الفكرية والفنية (FSEK)، وإجراءات البراءات والتصاميم بموجب القانون رقم 6769 بشأن الملكية الصناعية، وعقود ترخيص البرمجيات ونقل الحقوق، ونزاعات نطاقات .tr، من أكثر الموضوعات التي نتناولها. نقيّم كل ملف مع الهدف التجاري للموكل، ونحدد المسار الذي يوفر الحماية الأقوى والأكثر كفاءة من حيث التكلفة.",
      es: "Una marca, un código de software o un diseño original constituyen el activo más valioso de la mayoría de las empresas tecnológicas y de los emprendimientos creativos. Sin embargo, la protección jurídica de estos activos en Turquía puede volverse rápidamente incierta sin un registro adecuado, contratos sólidos y, cuando sea necesario, una persecución eficaz de las infracciones. Como abogado de propiedad intelectual en Antalya, protegemos los derechos de propiedad intelectual tanto de clientes nacionales como de empresas tecnológicas y de software extranjeras que entran en el mercado turco, en cada etapa, desde el registro hasta el litigio.\n\nEl registro de marcas y los procedimientos de oposición, la protección de obras conforme a la Ley n.º 5846 de obras intelectuales y artísticas (FSEK), los trámites de patentes y diseños en virtud de la Ley n.º 6769 de propiedad industrial, los contratos de licencia y cesión de software y las disputas por dominios .tr figuran entre los asuntos que tratamos con mayor frecuencia. Evaluamos cada caso junto con el objetivo comercial del cliente y determinamos la vía que ofrece la protección más sólida y a la vez más eficiente en costes.",
      fr: "Une marque, un code logiciel ou un design original constitue l'actif le plus précieux de la plupart des entreprises technologiques et des projets créatifs. Or, la protection juridique de ces actifs en Turquie peut rapidement devenir incertaine sans un enregistrement approprié, des contrats solides et, le cas échéant, une poursuite efficace des atteintes. En tant qu'avocat en propriété intellectuelle à Antalya, nous protégeons les droits de propriété intellectuelle tant des clients nationaux que des entreprises technologiques et logicielles étrangères qui entrent sur le marché turc, à chaque étape, de l'enregistrement jusqu'au contentieux.\n\nL'enregistrement de marques et les procédures d'opposition, la protection des œuvres au titre de la loi n° 5846 sur les œuvres intellectuelles et artistiques (FSEK), les démarches de brevets et de dessins et modèles au titre de la loi n° 6769 sur la propriété industrielle, les contrats de licence et de cession de logiciels ainsi que les litiges relatifs aux domaines .tr figurent parmi les sujets que nous traitons le plus fréquemment. Nous apprécions chaque dossier au regard de l'objectif commercial du client et déterminons la voie offrant la protection la plus solide et la plus efficiente en termes de coûts.",
    },
    services: {
      tr: [
        "Marka tescil başvurusu, sınıf araştırması ve TÜRKPATENT nezdinde temsil",
        "Marka başvurularına itiraz, yayına itiraz ve YİDK süreçlerinin takibi",
        "Telif hakkı (FSEK) ihlallerinde tespit, men, tazminat ve ihtar süreçleri",
        "Yazılım lisans, SaaS ve fikri mülkiyet hak devri (temlik) sözleşmelerinin hazırlanması",
        ".tr alan adı uyuşmazlıkları ve alan adı işgaline (cybersquatting) karşı mücadele",
        "Patent ve endüstriyel tasarım tescili ile hükümsüzlük davalarında danışmanlık",
        "Yabancı yatırımcı ve teknoloji şirketleri için fikri mülkiyet due diligence",
        "Ticari sır ve know-how korunması ile gizlilik (NDA) sözleşmeleri",
      ],
      en: [
        "Trademark registration applications, class searches, and representation before TÜRKPATENT",
        "Opposition to trademark applications, publication opposition, and Re-examination Board (YİDK) proceedings",
        "Determination, injunction, damages, and cease-and-desist notices in copyright infringement (FSEK)",
        "Drafting of software licensing, SaaS, and intellectual property assignment agreements",
        ".tr domain name disputes and action against cybersquatting",
        "Counsel on patent and industrial design registration and invalidation actions",
        "Intellectual property due diligence for foreign investors and technology companies",
        "Trade secret and know-how protection and confidentiality (NDA) agreements",
      ],
      de: [
        "Markenanmeldung, Klassenrecherche und Vertretung vor dem TÜRKPATENT",
        "Widerspruch gegen Markenanmeldungen, Veröffentlichungswiderspruch und Verfahren vor der Beschwerdekammer (YİDK)",
        "Feststellung, Unterlassung, Schadensersatz und Abmahnung bei Urheberrechtsverletzungen (FSEK)",
        "Erstellung von Softwarelizenz-, SaaS- und Rechteübertragungsverträgen",
        "Streitigkeiten um .tr-Domains und Vorgehen gegen Domain-Grabbing (Cybersquatting)",
        "Beratung bei Patent- und Designeintragungen sowie Nichtigkeitsklagen",
        "IP-Due-Diligence für ausländische Investoren und Technologieunternehmen",
        "Schutz von Geschäftsgeheimnissen und Know-how sowie Vertraulichkeitsvereinbarungen (NDA)",
      ],
      ru: [
        "Подача заявки на регистрацию товарного знака, поиск по классам и представительство в TÜRKPATENT",
        "Возражения против заявок на товарные знаки, возражения при публикации и сопровождение процедур в Апелляционной палате (YİDK)",
        "Установление факта, запрет, возмещение ущерба и досудебные претензии при нарушении авторских прав (FSEK)",
        "Подготовка договоров лицензирования ПО, SaaS и передачи (уступки) прав интеллектуальной собственности",
        "Споры по доменам .tr и борьба с захватом доменных имён (киберсквоттингом)",
        "Консультации по регистрации патентов и промышленных образцов и делам о признании их недействительными",
        "Due diligence интеллектуальной собственности для иностранных инвесторов и технологических компаний",
        "Защита коммерческой тайны и ноу-хау, а также соглашения о конфиденциальности (NDA)",
      ],
      ar: [
        "تقديم طلب تسجيل العلامة التجارية والبحث في الفئات والتمثيل أمام TÜRKPATENT",
        "الاعتراض على طلبات العلامات التجارية والاعتراض عند النشر ومتابعة إجراءات مجلس إعادة النظر (YİDK)",
        "إثبات الانتهاك والمنع والتعويض والإنذار في انتهاكات حقوق المؤلف (FSEK)",
        "إعداد عقود ترخيص البرمجيات وخدمات SaaS ونقل (تنازل) حقوق الملكية الفكرية",
        "نزاعات نطاقات .tr ومكافحة الاستيلاء على أسماء النطاقات (cybersquatting)",
        "الاستشارة في تسجيل البراءات والتصاميم الصناعية ودعاوى البطلان",
        "العناية الواجبة للملكية الفكرية للمستثمرين وشركات التكنولوجيا الأجانب",
        "حماية الأسرار التجارية والمعرفة الفنية واتفاقيات السرية (NDA)",
      ],
      es: [
        "Solicitud de registro de marca, búsqueda por clases y representación ante la TÜRKPATENT",
        "Oposición a solicitudes de marca, oposición en la publicación y seguimiento de los procedimientos ante la Sala de Recursos (YİDK)",
        "Constatación, cese, indemnización y requerimiento en infracciones de derechos de autor (FSEK)",
        "Redacción de contratos de licencia de software, SaaS y cesión de derechos de propiedad intelectual",
        "Disputas por dominios .tr y lucha contra la ocupación de dominios (cybersquatting)",
        "Asesoramiento en el registro de patentes y diseños industriales y en acciones de nulidad",
        "Diligencia debida de propiedad intelectual para inversores y empresas tecnológicas extranjeras",
        "Protección de secretos comerciales y know-how y acuerdos de confidencialidad (NDA)",
      ],
      fr: [
        "Dépôt de demande d'enregistrement de marque, recherche par classes et représentation devant le TÜRKPATENT",
        "Opposition aux demandes de marque, opposition à la publication et suivi des procédures devant la chambre de recours (YİDK)",
        "Constat, cessation, dommages-intérêts et mise en demeure en cas de contrefaçon de droits d'auteur (FSEK)",
        "Rédaction de contrats de licence de logiciel, de SaaS et de cession de droits de propriété intellectuelle",
        "Litiges relatifs aux domaines .tr et lutte contre le cybersquatting",
        "Conseil en enregistrement de brevets et de dessins et modèles et en actions en nullité",
        "Due diligence de propriété intellectuelle pour les investisseurs et entreprises technologiques étrangers",
        "Protection des secrets d'affaires et du savoir-faire et accords de confidentialité (NDA)",
      ],
    },
    process: {
      tr: "Her dosyaya, korunacak fikri hakkın niteliğini ve müvekkilin ticari hedefini analiz ederek başlarız. Marka ve tasarım işlemlerinde önce mevcut tesciller üzerinde araştırma yapar, çakışma ve ret riskini başvuru öncesinde değerlendiririz. Telif ve lisans uyuşmazlıklarında öncelikle ihtar ve sulh yollarını değerlendirir; sonuç alınamadığında TÜRKPATENT nezdindeki idari süreçleri ya da fikri ve sınai haklar hukuk mahkemesindeki davayı yürütürüz. Yabancı müvekkillerimiz sürecin her aşamasında kendi dilinde bilgilendirilir ve karar vermeleri gereken her noktada yanlarında dururuz.",
      en: "We begin every matter by analysing the nature of the right to be protected and the client's commercial objective. In trademark and design matters, we first conduct a search of existing registrations and assess the risk of conflict and refusal before filing. In copyright and licensing disputes, we first weigh cease-and-desist and amicable settlement routes; where these fail, we pursue administrative proceedings before TÜRKPATENT or litigation before the specialised intellectual and industrial property court. Our foreign clients are kept informed at every stage in their own language, and we stand by them at every decision point.",
      de: "Wir beginnen jeden Fall mit einer Analyse des zu schützenden Rechts und des geschäftlichen Ziels des Mandanten. Bei Marken- und Designverfahren recherchieren wir zunächst bestehende Eintragungen und bewerten das Kollisions- und Ablehnungsrisiko bereits vor der Anmeldung. Bei Urheberrechts- und Lizenzstreitigkeiten prüfen wir zuerst Abmahnung und gütliche Einigung; bleibt dies erfolglos, führen wir das Verwaltungsverfahren vor dem TÜRKPATENT oder die Klage vor dem Fachgericht für gewerblichen Rechtsschutz und Urheberrecht. Unsere ausländischen Mandanten werden in jeder Phase in ihrer eigenen Sprache informiert, und wir stehen ihnen an jedem Entscheidungspunkt zur Seite.",
      ru: "Каждое дело мы начинаем с анализа характера защищаемого права и коммерческой цели клиента. По товарным знакам и промышленным образцам мы сначала проводим поиск по существующим регистрациям и оцениваем риск совпадения и отказа ещё до подачи заявки. В спорах об авторских правах и лицензиях мы прежде всего рассматриваем претензионный и мировой путь; если результата достичь не удаётся, ведём административные процедуры в TÜRKPATENT или дело в специализированном суде по правам интеллектуальной и промышленной собственности. Наши иностранные клиенты информируются на каждом этапе на их родном языке, и мы находимся рядом с ними в каждый момент принятия решения.",
      ar: "نبدأ كل ملف بتحليل طبيعة الحق الفكري المراد حمايته والهدف التجاري للموكل. في إجراءات العلامات التجارية والتصاميم، نجري أولاً بحثاً في التسجيلات القائمة ونقيّم خطر التعارض والرفض قبل تقديم الطلب. وفي نزاعات حقوق المؤلف والتراخيص، نبحث أولاً في سبل الإنذار والتسوية الودية؛ وعند تعذّر النتيجة، نتابع الإجراءات الإدارية أمام TÜRKPATENT أو الدعوى أمام محكمة الحقوق الفكرية والصناعية المتخصصة. ويُبقى موكلونا الأجانب على اطلاع في كل مرحلة بلغتهم الأم، ونقف بجانبهم عند كل نقطة قرار.",
      es: "Comenzamos cada caso analizando la naturaleza del derecho que se pretende proteger y el objetivo comercial del cliente. En los trámites de marcas y diseños, primero realizamos una búsqueda sobre los registros existentes y evaluamos el riesgo de coincidencia y denegación antes de la solicitud. En las disputas de derechos de autor y de licencias, valoramos en primer lugar la vía del requerimiento y del acuerdo amistoso; si no se obtiene resultado, tramitamos los procedimientos administrativos ante la TÜRKPATENT o la demanda ante el tribunal especializado en derechos de propiedad intelectual e industrial. Mantenemos informados a nuestros clientes extranjeros en cada etapa, en su propio idioma, y les acompañamos en cada punto de decisión.",
      fr: "Nous commençons chaque dossier par une analyse de la nature du droit à protéger et de l'objectif commercial du client. Pour les démarches de marques et de dessins et modèles, nous effectuons d'abord une recherche sur les enregistrements existants et évaluons le risque de conflit et de rejet avant le dépôt. Pour les litiges de droits d'auteur et de licences, nous privilégions d'abord la mise en demeure et le règlement amiable ; à défaut de résultat, nous conduisons les procédures administratives devant le TÜRKPATENT ou l'action devant le tribunal spécialisé en droits de propriété intellectuelle et industrielle. Nos clients étrangers sont informés à chaque étape dans leur propre langue, et nous les accompagnons à chaque moment de décision.",
    },
    faqs: {
      tr: [
        {
          q: "Markamı Türkiye'de tescil ettirmeden kullanabilir miyim?",
          a: "Tescilsiz kullanım sınırlı bir koruma sağlar; ancak markanız üzerinde en güçlü ve ülke genelinde geçerli hakkı TÜRKPATENT nezdindeki tescil verir. Tescil, başkalarının aynı ya da benzer markayı almasını engeller ve ihlal halinde hukuki takibi büyük ölçüde kolaylaştırır.",
        },
        {
          q: "Yazılımım Türkiye'de telif hakkıyla korunuyor mu?",
          a: "Evet. Bilgisayar programları 5846 sayılı FSEK kapsamında eser olarak korunur ve koruma, eserin oluşturulduğu anda kendiliğinden doğar; ayrı bir tescil zorunlu değildir. Yine de sözleşmelerde hak sahipliğinin ve devir kapsamının açıkça düzenlenmesi, ileride doğabilecek uyuşmazlıkları önlemek için kritiktir.",
        },
        {
          q: "Markamı taşıyan .tr alan adını başkası almışsa ne yapabilirim?",
          a: "Marka ya da ticaret unvanınızla aynı ya da karıştırılabilecek kadar benzer bir alan adı için, İnternet Alan Adları Yönetmeliği'ndeki koşullar sağlanıyorsa uyuşmazlık çözüm sürecine başvurabilir ya da mahkeme yoluna gidebilirsiniz. Alan adını tescil ettirenin o isim üzerinde meşru bir hakkının bulunmaması, talebinizi güçlendiren temel unsurlardan biridir.",
        },
      ],
      en: [
        {
          q: "Can I use my trademark in Turkey without registering it?",
          a: "Unregistered use offers only limited protection; the strongest right in your mark, valid nationwide, is conferred by registration with TÜRKPATENT. Registration prevents others from registering an identical or similar mark and greatly facilitates legal enforcement in the event of infringement.",
        },
        {
          q: "Is my software protected by copyright in Turkey?",
          a: "Yes. Computer programs are protected as works under Law No. 5846 (FSEK), and protection arises automatically upon creation of the work; no separate registration is required. Nonetheless, clearly regulating ownership and the scope of assignment in your contracts is critical to preventing potential future disputes.",
        },
        {
          q: "What can I do if someone has registered the .tr domain bearing my trademark?",
          a: "If the domain is identical to your trademark or trade name, or confusingly similar, and the conditions of the Internet Domain Names Regulation are met, you may initiate the dispute resolution procedure or pursue the court route. The registrant's lack of a legitimate right in that name is one of the key factors that strengthen your claim.",
        },
      ],
      de: [
        {
          q: "Kann ich meine Marke in der Türkei ohne Eintragung nutzen?",
          a: "Eine nicht eingetragene Nutzung bietet nur begrenzten Schutz; das stärkste und landesweit geltende Recht an Ihrer Marke verleiht jedoch die Eintragung beim TÜRKPATENT. Die Eintragung verhindert, dass andere eine identische oder ähnliche Marke anmelden, und erleichtert im Verletzungsfall die rechtliche Verfolgung erheblich.",
        },
        {
          q: "Ist meine Software in der Türkei urheberrechtlich geschützt?",
          a: "Ja. Computerprogramme sind nach dem Gesetz Nr. 5846 (FSEK) als Werke geschützt, und der Schutz entsteht automatisch mit der Schöpfung des Werkes; eine gesonderte Eintragung ist nicht erforderlich. Dennoch ist es entscheidend, die Rechtsinhaberschaft und den Umfang der Übertragung in den Verträgen klar zu regeln, um spätere Streitigkeiten zu vermeiden.",
        },
        {
          q: "Was kann ich tun, wenn jemand die .tr-Domain mit meiner Marke registriert hat?",
          a: "Für eine Domain, die mit Ihrer Marke oder Ihrem Handelsnamen identisch oder verwechselbar ähnlich ist, können Sie – sofern die Voraussetzungen der Verordnung über Internet-Domainnamen erfüllt sind – das Streitbeilegungsverfahren einleiten oder den Gerichtsweg beschreiten. Dass der Domaininhaber kein berechtigtes Recht an diesem Namen hat, ist einer der zentralen Faktoren, die Ihren Anspruch stärken.",
        },
      ],
      ru: [
        {
          q: "Могу ли я использовать товарный знак в Турции без регистрации?",
          a: "Использование без регистрации даёт лишь ограниченную защиту; наиболее прочное и действующее на всей территории страны право на ваш знак предоставляет регистрация в TÜRKPATENT. Регистрация не позволяет другим зарегистрировать идентичный или сходный знак и значительно облегчает правовое преследование в случае нарушения.",
        },
        {
          q: "Защищено ли моё программное обеспечение авторским правом в Турции?",
          a: "Да. Компьютерные программы охраняются как произведения по закону № 5846 (FSEK), и охрана возникает автоматически в момент создания произведения; отдельная регистрация не требуется. Тем не менее чёткое закрепление в договорах правообладания и объёма передачи прав крайне важно для предотвращения возможных будущих споров.",
        },
        {
          q: "Что делать, если кто-то зарегистрировал домен .tr с моим товарным знаком?",
          a: "Если домен идентичен вашему товарному знаку или торговому наименованию либо сходен с ним до степени смешения, при соблюдении условий Положения об интернет-доменных именах вы можете инициировать процедуру разрешения спора или обратиться в суд. Отсутствие у владельца домена законного права на это наименование — один из ключевых факторов, усиливающих ваше требование.",
        },
      ],
      ar: [
        {
          q: "هل يمكنني استخدام علامتي التجارية في تركيا دون تسجيل؟",
          a: "يوفّر الاستخدام غير المسجَّل حماية محدودة؛ أما الحق الأقوى والساري في جميع أنحاء البلاد على علامتك فيمنحه التسجيل لدى TÜRKPATENT. يمنع التسجيل الآخرين من تسجيل علامة مطابقة أو مشابهة، ويُسهّل الملاحقة القانونية إلى حد كبير في حال الانتهاك.",
        },
        {
          q: "هل برمجياتي محمية بحقوق المؤلف في تركيا؟",
          a: "نعم. تُحمى برامج الحاسوب بوصفها مصنفات بموجب القانون رقم 5846 (FSEK)، وتنشأ الحماية تلقائياً لحظة إنشاء المصنف؛ ولا يُشترط تسجيل منفصل. ومع ذلك، فإن التنظيم الواضح لملكية الحقوق ونطاق النقل في العقود أمر بالغ الأهمية لتفادي النزاعات المحتملة مستقبلاً.",
        },
        {
          q: "ماذا أفعل إذا سجّل شخص آخر نطاق .tr الذي يحمل علامتي التجارية؟",
          a: "إذا كان النطاق مطابقاً لعلامتك التجارية أو اسمك التجاري أو مشابهاً له إلى حد يثير اللبس، وتحققت شروط لائحة أسماء نطاقات الإنترنت، يمكنك اللجوء إلى إجراءات حل النزاع أو إلى القضاء. ويُعدّ عدم وجود حق مشروع لمسجِّل النطاق على ذلك الاسم من العوامل الأساسية التي تعزز مطالبتك.",
        },
      ],
      es: [
        {
          q: "¿Puedo usar mi marca en Turquía sin registrarla?",
          a: "El uso no registrado ofrece una protección limitada; en cambio, el derecho más sólido y válido en todo el país sobre su marca lo confiere el registro ante la TÜRKPATENT. El registro impide que otros registren una marca idéntica o similar y facilita considerablemente la persecución legal en caso de infracción.",
        },
        {
          q: "¿Está protegido mi software por derechos de autor en Turquía?",
          a: "Sí. Los programas de ordenador están protegidos como obras conforme a la Ley n.º 5846 (FSEK), y la protección surge automáticamente en el momento de la creación de la obra; no se exige un registro independiente. No obstante, regular con claridad en los contratos la titularidad de los derechos y el alcance de la cesión es fundamental para prevenir posibles disputas futuras.",
        },
        {
          q: "¿Qué puedo hacer si otra persona ha registrado el dominio .tr con mi marca?",
          a: "Si el dominio es idéntico a su marca o nombre comercial, o similar hasta el punto de generar confusión, y se cumplen los requisitos del Reglamento de nombres de dominio de internet, puede iniciar el procedimiento de resolución de disputas o acudir a la vía judicial. Que el titular del dominio no tenga un derecho legítimo sobre ese nombre es uno de los factores clave que refuerzan su reclamación.",
        },
      ],
      fr: [
        {
          q: "Puis-je utiliser ma marque en Turquie sans l'enregistrer ?",
          a: "L'usage non enregistré n'offre qu'une protection limitée ; c'est en revanche l'enregistrement auprès du TÜRKPATENT qui confère le droit le plus solide et valable sur l'ensemble du territoire. L'enregistrement empêche des tiers de déposer une marque identique ou similaire et facilite considérablement la poursuite juridique en cas d'atteinte.",
        },
        {
          q: "Mon logiciel est-il protégé par le droit d'auteur en Turquie ?",
          a: "Oui. Les programmes d'ordinateur sont protégés en tant qu'œuvres au titre de la loi n° 5846 (FSEK), et la protection naît automatiquement dès la création de l'œuvre ; aucun enregistrement distinct n'est exigé. Il demeure néanmoins essentiel de régler clairement dans les contrats la titularité des droits et l'étendue de la cession afin de prévenir d'éventuels litiges futurs.",
        },
        {
          q: "Que puis-je faire si quelqu'un a enregistré le domaine .tr portant ma marque ?",
          a: "Si le domaine est identique à votre marque ou à votre nom commercial, ou similaire au point de prêter à confusion, et que les conditions du règlement sur les noms de domaine internet sont réunies, vous pouvez engager la procédure de règlement des litiges ou saisir la voie judiciaire. L'absence de droit légitime du titulaire du domaine sur ce nom est l'un des facteurs déterminants qui renforcent votre demande.",
        },
      ],
    },
  },
];

export function getPracticeAreaContent(slug: string): PracticeAreaContent | undefined {
  return PRACTICE_AREAS_CONTENT.find((c) => c.slug === slug);
}
