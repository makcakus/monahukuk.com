export type LangMap7 = { tr: string; en: string; de: string; ru: string; ar: string; es: string; fr: string };

// Backward-compatible alias used by schema.ts and other consumers
export type LangMap5 = LangMap7;

export type PracticeIconKey =
  | "Globe"
  | "Home"
  | "ShieldAlert"
  | "Users"
  | "Cpu"
  | "Briefcase"
  | "FileText"
  | "Building2"
  | "Key";

export type PracticeArea = {
  slug: string;
  icon: PracticeIconKey;
  title: LangMap7;
  description: LangMap7;
};

export function pickPA(map: LangMap7, locale: string): string {
  if (locale in map) return map[locale as keyof LangMap7];
  return map.en;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "yabancilar-gocmenlik",
    icon: "Globe",
    title: {
      tr: "Yabancılar & Göçmenlik Hukuku",
      en: "Foreigners & Immigration Law",
      de: "Ausländer- & Einwanderungsrecht",
      ru: "Право иностранцев и иммиграционное право",
      ar: "قانون الأجانب والهجرة",
      es: "Derecho de Extranjería e Inmigración",
      fr: "Droit des Étrangers et de l'Immigration",
    },
    description: {
      tr: "Türkiye'de ikamet etmek, çalışmak veya iş kurmak isteyen yabancı uyrukluların tüm hukuki süreçlerini yürütüyoruz. Kısa ve uzun dönem oturma izni başvuruları, çalışma izni işlemleri, vize itirazları ve sınır dışı kararlarına karşı savunma konularında Antalya'da deneyimli yabancılar avukatıyla yanınızdayız.",
      en: "We handle the full legal process for foreign nationals wishing to reside, work, or establish a business in Turkey. Our experienced immigration lawyers in Antalya assist with short and long-term residence permit applications, work permit procedures, visa appeals, and defence against deportation orders.",
      de: "Wir begleiten ausländische Staatsangehörige durch alle rechtlichen Verfahren, die für den Aufenthalt, die Arbeit oder die Unternehmensgründung in der Türkei erforderlich sind. Unsere erfahrenen Einwanderungsanwälte in Antalya helfen bei kurz- und langfristigen Aufenthaltserlaubnissen, Arbeitsgenehmigungen, Widersprüchen gegen Visa-Ablehnungen und der Verteidigung gegen Ausweisungsbeschlüsse.",
      ru: "Мы сопровождаем иностранных граждан через все правовые процедуры, необходимые для проживания, работы или открытия бизнеса в Турции. Наши опытные иммиграционные адвокаты в Анталье помогают с оформлением краткосрочных и долгосрочных видов на жительство, разрешений на работу, обжалованием отказов в визе и защитой от решений о депортации.",
      ar: "نتولى الإجراءات القانونية الكاملة للمواطنين الأجانب الراغبين في الإقامة أو العمل أو تأسيس أعمال تجارية في تركيا. يساعد محامو الهجرة المتمرسون لدينا في أنطاليا في تقديم طلبات تصاريح الإقامة قصيرة وطويلة الأمد وتصاريح العمل والطعن في رفض التأشيرات والدفاع ضد قرارات الترحيل.",
      es: "Gestionamos todos los procedimientos legales para extranjeros que deseen residir, trabajar o establecer un negocio en Turquía. Nuestros experimentados abogados de inmigración en Antalya asisten en solicitudes de permisos de residencia, trámites de permisos de trabajo, apelaciones de visados y defensa contra órdenes de deportación.",
      fr: "Nous gérons l'ensemble des procédures juridiques pour les ressortissants étrangers souhaitant résider, travailler ou créer une entreprise en Turquie. Nos avocats spécialisés en immigration à Antalya accompagnent dans les demandes de permis de séjour, les procédures de permis de travail, les recours contre les refus de visa et la défense contre les décisions d'expulsion.",
    },
  },
  {
    slug: "gayrimenkul",
    icon: "Home",
    title: {
      tr: "Gayrimenkul Hukuku",
      en: "Real Estate Law",
      de: "Immobilienrecht",
      ru: "Право в сфере недвижимости",
      ar: "قانون العقارات",
      es: "Derecho Inmobiliario",
      fr: "Droit Immobilier",
    },
    description: {
      tr: "Türkiye'de mülk satın almak isteyen yabancılar için tapu işlemlerinden sözleşme incelemesine, ön satış anlaşmalarından kira uyuşmazlıklarına kadar tüm Gayrimenkul Hukuku hizmetlerini sunuyoruz. Antalya'da yabancıların ev, arsa veya ticari mülk ediniminde güvenli ve şeffaf bir süreç yönetimi sağlıyoruz.",
      en: "We provide comprehensive real estate legal services for foreigners buying property in Turkey — from title deed procedures and contract review to pre-sale agreements and rental disputes. We ensure a safe and transparent process for foreign nationals acquiring residential, land, or commercial property in Antalya.",
      de: "Wir bieten umfassende immobilienrechtliche Dienstleistungen für Ausländer, die in der Türkei Immobilien erwerben möchten — von Grundbuchverfahren und Vertragsprüfungen bis hin zu Vorverträgen und Mietstreitigkeiten. Wir sorgen für einen sicheren und transparenten Ablauf, wenn ausländische Staatsangehörige in Antalya eine Wohnung, ein Grundstück oder eine Gewerbeimmobilie erwerben.",
      ru: "Мы предоставляем комплексные юридические услуги в сфере недвижимости для иностранцев, приобретающих имущество в Турции — от оформления документов на право собственности и проверки договоров до предварительных договоров купли-продажи и споров об аренде. Мы обеспечиваем безопасный и прозрачный процесс для иностранных граждан, приобретающих жилую, земельную или коммерческую недвижимость в Анталье.",
      ar: "نقدم خدمات قانونية عقارية شاملة للأجانب الراغبين في شراء العقارات في تركيا — بدءاً من إجراءات سند الملكية ومراجعة العقود وصولاً إلى اتفاقيات البيع المسبق ونزاعات الإيجار. نضمن سيراً آمناً وشفافاً لعملية اقتناء الأجانب للعقارات السكنية والأراضي والعقارات التجارية في أنطاليا.",
      es: "Ofrecemos servicios jurídicos inmobiliarios completos para extranjeros que compran propiedades en Turquía: desde trámites del título de propiedad y revisión de contratos hasta acuerdos de preventa y disputas de arrendamiento. Garantizamos un proceso seguro y transparente para extranjeros que adquieren propiedades residenciales, terrenos o inmuebles comerciales en Antalya.",
      fr: "Nous proposons des services juridiques immobiliers complets pour les étrangers qui achètent des biens en Turquie — des procédures d'acte de propriété et de revue de contrats aux promesses de vente et litiges locatifs. Nous assurons un processus sûr et transparent pour les ressortissants étrangers acquérant des biens résidentiels, fonciers ou commerciaux à Antalya.",
    },
  },
  {
    slug: "turk-vatandasligi",
    icon: "ShieldAlert",
    title: {
      tr: "Türk Vatandaşlığı",
      en: "Turkish Citizenship",
      de: "Türkische Staatsbürgerschaft",
      ru: "Гражданство Турции",
      ar: "الجنسية التركية",
      es: "Ciudadanía Turca",
      fr: "Nationalité Turque",
    },
    description: {
      tr: "Yatırım, evlilik veya uzun süreli ikamet yoluyla Türk vatandaşlığı edinmek isteyen yabancılara başvuru sürecinin her aşamasında hukuki destek sağlıyoruz. 400.000 USD değerinde gayrimenkul yatırımı veya diğer kanallarla vatandaşlık başvurularını doğru ve hızlı biçimde yürütüyoruz.",
      en: "We provide legal support at every stage of the Turkish citizenship application process for foreign nationals seeking citizenship through investment, marriage, or long-term residence. We manage applications via the 400,000 USD real estate investment route or other eligible channels accurately and efficiently.",
      de: "Wir bieten in jeder Phase des türkischen Einbürgerungsverfahrens rechtliche Unterstützung für ausländische Staatsangehörige, die die Staatsbürgerschaft durch Investition, Heirat oder langfristigen Aufenthalt anstreben. Wir begleiten Anträge über die Immobilieninvestition in Höhe von 400.000 USD oder andere zugelassene Wege präzise und zügig.",
      ru: "Мы оказываем правовую поддержку на каждом этапе процедуры получения гражданства Турции для иностранцев, стремящихся к гражданству через инвестиции, брак или длительное проживание. Мы сопровождаем заявления по маршруту инвестиций в недвижимость на сумму 400 000 долларов США или другим доступным каналам точно и эффективно.",
      ar: "نقدم الدعم القانوني في كل مرحلة من مراحل إجراءات الحصول على الجنسية التركية للمواطنين الأجانب الساعين إلى الجنسية عن طريق الاستثمار أو الزواج أو الإقامة طويلة الأمد. ندير الطلبات عبر مسار الاستثمار العقاري البالغ 400,000 دولار أمريكي أو القنوات المؤهلة الأخرى بدقة وكفاءة.",
      es: "Brindamos apoyo legal en cada etapa del proceso de solicitud de ciudadanía turca para extranjeros que buscan la ciudadanía por inversión, matrimonio o residencia de larga duración. Tramitamos solicitudes a través de la inversión inmobiliaria de 400.000 USD u otros canales elegibles de forma precisa y eficiente.",
      fr: "Nous accompagnons les ressortissants étrangers à chaque étape de la procédure de demande de nationalité turque par investissement, mariage ou résidence de longue durée. Nous gérons les demandes via la voie d'investissement immobilier de 400 000 USD ou d'autres voies éligibles avec précision et efficacité.",
    },
  },
  {
    slug: "aile-hukuku",
    icon: "Users",
    title: {
      tr: "Aile Hukuku",
      en: "Family Law",
      de: "Familienrecht",
      ru: "Семейное право",
      ar: "قانون الأسرة",
      es: "Derecho de Familia",
      fr: "Droit de la Famille",
    },
    description: {
      tr: "Uluslararası boşanma davaları, velayet ve nafaka anlaşmazlıkları, evlilik sözleşmeleri ve yabancı mahkeme kararlarının Türkiye'de tanınması konularında deneyimli Aile Hukuku avukatlarıyla hizmet veriyoruz. Yabancı uyruklu müvekkillerin Türk Aile Hukukundaki haklarını etkin biçimde koruyor ve savunuyoruz.",
      en: "We represent clients in international divorce proceedings, custody and alimony disputes, marriage and prenuptial agreements, and the recognition of foreign court judgments in Turkey. Our experienced family law attorneys actively protect and defend the rights of foreign nationals under Turkish family law.",
      de: "Wir vertreten Mandanten in internationalen Scheidungsverfahren, Sorgerechts- und Unterhaltsstreitigkeiten, bei Ehe- und Eheverträgen sowie bei der Anerkennung ausländischer Gerichtsentscheidungen in der Türkei. Unsere erfahrenen Familienrechtsanwälte schützen und verteidigen die Rechte ausländischer Staatsangehöriger nach türkischem Familienrecht engagiert.",
      ru: "Мы представляем клиентов в международных бракоразводных процессах, спорах об опеке и алиментах, при заключении брачных договоров и признании иностранных судебных решений в Турции. Наши опытные адвокаты по семейному праву активно защищают права иностранных граждан в соответствии с турецким семейным законодательством.",
      ar: "نمثل العملاء في قضايا الطلاق الدولية ونزاعات الحضانة والنفقة واتفاقيات الأملاك قبل الزواج وأثناءه والاعتراف بأحكام المحاكم الأجنبية في تركيا. يحمي محامو قانون الأسرة المتمرسون لدينا ويدافعون بنشاط عن حقوق المواطنين الأجانب بموجب قانون الأسرة التركي.",
      es: "Representamos a clientes en procedimientos de divorcio internacionales, disputas de custodia y manutención, acuerdos matrimoniales y prematrimoniales, y el reconocimiento de sentencias judiciales extranjeras en Turquía. Nuestros abogados de familia experimentados protegen activamente los derechos de los extranjeros bajo la ley de familia turca.",
      fr: "Nous représentons nos clients dans les procédures de divorce international, les litiges de garde et de pension alimentaire, les conventions matrimoniales et les accords prénuptiaux, ainsi que la reconnaissance des décisions de justice étrangères en Turquie. Nos avocats spécialisés en droit de la famille protègent activement les droits des ressortissants étrangers en vertu du droit de la famille turc.",
    },
  },
  {
    slug: "bilisim-yapay-zeka-hukuku",
    icon: "Cpu",
    title: {
      tr: "Bilişim & Yapay Zekâ Hukuku",
      en: "IT & Artificial Intelligence Law",
      de: "IT- & KI-Recht",
      ru: "IT-право и право в сфере ИИ",
      ar: "قانون تقنية المعلومات والذكاء الاصطناعي",
      es: "Derecho TI e Inteligencia Artificial",
      fr: "Droit Informatique et Intelligence Artificielle",
    },
    description: {
      tr: "Türkiye'deki KVKK (Kişisel Verilerin Korunması Kanunu) uyumu, yazılım lisans anlaşmazlıkları, veri ihlali davaları ve yapay zekâ teknolojilerinin hukuki boyutlarında danışmanlık veriyoruz. Teknoloji şirketleri ve startup'lara özel Bilişim Hukuku desteğiyle dijital dönüşümünüzü güvence altına alıyoruz.",
      en: "We advise on KVKK (Turkish Personal Data Protection Law) compliance, software licensing disputes, data breach cases, and the legal aspects of artificial intelligence technologies in Turkey. With dedicated IT law support tailored to technology companies and startups, we help you secure your digital transformation.",
      de: "Wir beraten zur Einhaltung des KVKK (türkisches Datenschutzgesetz), zu Softwarelizenzstreitigkeiten, Datenschutzverletzungen und den rechtlichen Aspekten von KI-Technologien in der Türkei. Mit gezielter IT-Rechtsberatung für Technologieunternehmen und Startups begleiten wir Ihre digitale Transformation sicher.",
      ru: "Мы консультируем по вопросам соблюдения KVKK (турецкого закона о защите персональных данных), спорам по лицензированию программного обеспечения, делам об утечках данных и правовым аспектам технологий искусственного интеллекта в Турции. С профильной поддержкой в сфере IT-права для технологических компаний и стартапов мы помогаем сделать вашу цифровую трансформацию безопасной.",
      ar: "نقدم المشورة بشأن الامتثال لقانون KVKK (قانون حماية البيانات الشخصية التركي) ونزاعات ترخيص البرمجيات وقضايا اختراق البيانات والجوانب القانونية لتقنيات الذكاء الاصطناعي في تركيا. وبدعم قانوني متخصص في قانون تقنية المعلومات لشركات التكنولوجيا والشركات الناشئة، نساعدك على تأمين تحولك الرقمي.",
      es: "Asesoramos sobre el cumplimiento de la KVKK (Ley turca de protección de datos personales), disputas de licencias de software, casos de violación de datos y los aspectos legales de las tecnologías de inteligencia artificial en Turquía. Con soporte jurídico especializado en derecho TI para empresas tecnológicas y startups, aseguramos su transformación digital.",
      fr: "Nous conseillons sur la conformité au KVKK (loi turque sur la protection des données personnelles), les litiges de licences logicielles, les violations de données et les aspects juridiques des technologies d'intelligence artificielle en Turquie. Avec un soutien juridique dédié en droit informatique pour les entreprises technologiques et les startups, nous sécurisons votre transformation numérique.",
    },
  },
  {
    slug: "ticaret-sirketler-hukuku",
    icon: "Briefcase",
    title: {
      tr: "Ticaret & Şirketler Hukuku",
      en: "Commercial & Corporate Law",
      de: "Handels- & Gesellschaftsrecht",
      ru: "Коммерческое и корпоративное право",
      ar: "القانون التجاري وقانون الشركات",
      es: "Derecho Mercantil y Societario",
      fr: "Droit Commercial et des Sociétés",
    },
    description: {
      tr: "Türkiye'de yabancı yatırımcıların şirket kurma süreçleri, ticari sözleşmelerin hazırlanması ve müzakeresi, ortaklık anlaşmazlıkları ve ticari davaların takibinde hukuki danışmanlık sunuyoruz. Uluslararası standartlarda Ticaret Hukuku hizmeti ile Türk pazarına güvenli giriş sağlıyoruz.",
      en: "We provide legal advice to foreign investors in Turkey on company formation, drafting and negotiation of commercial contracts, shareholder and partnership disputes, and commercial litigation. We support a safe entry into the Turkish market with commercial law services that meet international standards.",
      de: "Wir bieten Rechtsberatung zu Unternehmensgründungsverfahren für ausländische Investoren in der Türkei, Entwurf und Verhandlung von Handelsverträgen, Gesellschafterstreitigkeiten und Handelsprozessen. Wir ermöglichen einen sicheren Markteintritt in die Türkei mit kommerziellen Rechtsdienstleistungen nach internationalen Standards.",
      ru: "Мы предоставляем юридические консультации по процедурам регистрации компаний для иностранных инвесторов в Турции, составлению и переговорам по коммерческим контрактам, спорам между партнёрами и коммерческим судебным разбирательствам. Мы обеспечиваем безопасный выход на турецкий рынок с коммерческими юридическими услугами международного стандарта.",
      ar: "نقدم استشارات قانونية بشأن إجراءات تأسيس الشركات للمستثمرين الأجانب في تركيا وصياغة العقود التجارية والتفاوض عليها ونزاعات الشراكة والتقاضي التجاري. نيسّر الدخول الآمن إلى السوق التركية بخدمات قانونية تجارية وفق المعايير الدولية.",
      es: "Asesoramos a inversores extranjeros en Turquía sobre la constitución de sociedades, la redacción y negociación de contratos comerciales, disputas entre socios y litigios mercantiles. Facilitamos una entrada segura al mercado turco con servicios de derecho mercantil que cumplen los estándares internacionales.",
      fr: "Nous conseillons les investisseurs étrangers en Turquie sur la création d'entreprises, la rédaction et la négociation de contrats commerciaux, les litiges entre associés et le contentieux commercial. Nous facilitons une entrée sûre sur le marché turc avec des services de droit commercial répondant aux standards internationaux.",
    },
  },
  {
    slug: "miras-hukuku",
    icon: "FileText",
    title: {
      tr: "Miras Hukuku",
      en: "Inheritance Law",
      de: "Erbrecht",
      ru: "Наследственное право",
      ar: "قانون الميراث",
      es: "Derecho de Sucesiones",
      fr: "Droit des Successions",
    },
    description: {
      tr: "Türkiye'de miras kalan gayrimenkul, banka hesabı veya diğer varlıklara ilişkin intikal işlemlerinde yabancı mirasçılara hukuki destek sağlıyoruz. Vasiyetname düzenlenmesi, tereke tespiti, miras paylaşım davaları ve yabancı mahkeme vasiyetnamelerinin Türkiye'de tanınması konularında rehberlik ediyoruz.",
      en: "We provide legal support to foreign heirs with the transfer of real estate, bank accounts, and other assets inherited in Turkey. We guide clients through the preparation of wills, estate inventory, inheritance distribution proceedings, and the recognition of foreign wills in Turkey.",
      de: "Wir bieten ausländischen Erben rechtliche Unterstützung bei der Übertragung von Immobilien, Bankkonten oder anderen in der Türkei geerbten Vermögenswerten. Wir begleiten Mandanten durch Testamentsvorbereitung, Nachlassinventar, Erbverteilungsverfahren und die Anerkennung ausländischer Testamente in der Türkei.",
      ru: "Мы оказываем правовую поддержку иностранным наследникам в отношении передачи недвижимости, банковских счетов или других активов, унаследованных в Турции. Мы консультируем клиентов при составлении завещания, инвентаризации наследства, разбирательствах по распределению наследства и признании иностранных завещаний в Турции.",
      ar: "نقدم الدعم القانوني للورثة الأجانب فيما يخص نقل العقارات والحسابات المصرفية أو غيرها من الأصول الموروثة في تركيا. نرشد العملاء خلال إعداد الوصايا وجرد التركة وإجراءات توزيع الميراث والاعتراف بالوصايا الأجنبية في تركيا.",
      es: "Brindamos apoyo legal a herederos extranjeros para la transmisión de inmuebles, cuentas bancarias y otros activos heredados en Turquía. Orientamos a los clientes en la elaboración de testamentos, inventario de herencias, procedimientos de distribución hereditaria y el reconocimiento de testamentos extranjeros en Turquía.",
      fr: "Nous accompagnons les héritiers étrangers dans le transfert de biens immobiliers, de comptes bancaires et d'autres actifs hérités en Turquie. Nous guidons nos clients dans la rédaction de testaments, l'inventaire successoral, les procédures de partage d'héritage et la reconnaissance des testaments étrangers en Turquie.",
    },
  },
  {
    slug: "kira-hukuku",
    icon: "Key",
    title: {
      tr: "Kira Hukuku",
      en: "Rental Law",
      de: "Mietrecht",
      ru: "Арендное право",
      ar: "قانون الإيجار",
      es: "Derecho Arrendaticio",
      fr: "Droit de la Location",
    },
    description: {
      tr: "Kiracı ve kiraya veren uyuşmazlıklarında, kira sözleşmelerinin hazırlanması ve incelenmesinde, tahliye davalarında ve kira tespit ile uyarlama süreçlerinde deneyimli avukatlarla hizmet veriyoruz. Antalya'da yabancı kiracı ve mülk sahiplerine özel destekle güvenli bir kiralama süreci yönetiyoruz.",
      en: "We assist landlords and tenants in rental disputes, lease agreement drafting and review, eviction proceedings, and rent determination or adjustment cases. We provide dedicated support to foreign tenants and property owners in Antalya for a legally secure rental process.",
      de: "Wir unterstützen Vermieter und Mieter bei Mietstreitigkeiten, der Erstellung und Prüfung von Mietverträgen, Räumungsverfahren sowie Mietfestsetzungs- und Anpassungsverfahren. Ausländischen Mietern und Eigentümern in Antalya bieten wir gezielte Unterstützung für einen rechtssicheren Mietprozess.",
      ru: "Мы помогаем арендодателям и арендаторам в арендных спорах, составлении и проверке договоров аренды, судебных процессах о выселении, а также делах об определении и пересмотре арендной платы. Мы оказываем специализированную поддержку иностранным арендаторам и владельцам недвижимости в Анталье.",
      ar: "نساعد الملاك والمستأجرين في نزاعات الإيجار وصياغة عقود الإيجار ومراجعتها وإجراءات الإخلاء وقضايا تحديد الإيجار أو تعديله. نقدم دعماً متخصصاً للمستأجرين الأجانب وأصحاب العقارات في أنطاليا لضمان عملية إيجار آمنة قانونياً.",
      es: "Asistimos a propietarios e inquilinos en disputas de arrendamiento, redacción y revisión de contratos de arrendamiento, procedimientos de desahucio y casos de determinación o ajuste de rentas. Proporcionamos apoyo especializado a inquilinos extranjeros y propietarios en Antalya para un proceso de arrendamiento legalmente seguro.",
      fr: "Nous accompagnons bailleurs et locataires dans les litiges locatifs, la rédaction et la révision de baux, les procédures d'expulsion et les affaires de fixation ou de révision des loyers. Nous offrons un soutien dédié aux locataires et propriétaires étrangers à Antalya pour un processus de location juridiquement sécurisé.",
    },
  },
  {
    slug: "idare-hukuku",
    icon: "Building2",
    title: {
      tr: "İdare Hukuku",
      en: "Administrative Law",
      de: "Verwaltungsrecht",
      ru: "Административное право",
      ar: "القانون الإداري",
      es: "Derecho Administrativo",
      fr: "Droit Administratif",
    },
    description: {
      tr: "Vize reddi, oturma izni iptali, sınır dışı kararları ve diğer idari işlemlere karşı idare mahkemelerinde itiraz davalarını yürütüyoruz. Kamu kurumları önünde yabancı uyruklu müvekkillerin haklarını savunarak hukuka aykırı idari kararların iptali için etkin mücadele veriyoruz.",
      en: "We conduct administrative court appeals against visa refusals, residence permit cancellations, deportation decisions, and other administrative acts. We actively fight for the annulment of unlawful administrative decisions, defending the rights of foreign nationals before public authorities.",
      de: "Wir führen Verwaltungsgerichtsverfahren gegen Visa-Ablehnungen, Widerrufe von Aufenthaltserlaubnissen, Ausweisungsbeschlüsse und andere Verwaltungsakte. Wir setzen uns aktiv für die Aufhebung rechtswidriger Verwaltungsentscheidungen ein und verteidigen die Rechte ausländischer Staatsangehöriger vor Behörden.",
      ru: "Мы ведём апелляции в административных судах против отказов в визе, аннулирования вида на жительство, решений о депортации и других административных актов. Мы активно добиваемся отмены незаконных административных решений, защищая права иностранных граждан перед государственными органами.",
      ar: "نرفع الطعون أمام المحاكم الإدارية ضد رفض التأشيرات وإلغاء تصاريح الإقامة وقرارات الترحيل وغيرها من الإجراءات الإدارية. نسعى بنشاط إلى إلغاء القرارات الإدارية غير المشروعة ونحمي حقوق المواطنين الأجانب أمام السلطات العامة.",
      es: "Tramitamos recursos ante tribunales administrativos contra denegaciones de visado, cancelaciones de permisos de residencia, decisiones de deportación y otros actos administrativos. Luchamos activamente por la anulación de decisiones administrativas ilegales, defendiendo los derechos de los extranjeros ante las autoridades públicas.",
      fr: "Nous conduisons des recours devant les tribunaux administratifs contre les refus de visa, les annulations de permis de séjour, les décisions d'expulsion et autres actes administratifs. Nous nous battons activement pour l'annulation des décisions administratives illégales, défendant les droits des ressortissants étrangers devant les autorités publiques.",
    },
  },
];
