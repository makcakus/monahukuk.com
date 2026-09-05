export type LangMap = { tr: string; en: string; de: string; ru: string; ar: string; es: string; fr: string; zh: string };

export type Member = {
  name: string;
  role: LangMap;
  education: string;
  bar: string;
  areas: LangMap[];
  bio: LangMap;
  /** Schema.org Person.sameAs — barosu profili, LinkedIn, vs. */
  sameAs?: string[];
};

export function pick(map: LangMap, locale: string): string {
  return (map as Record<string, string>)[locale] ?? map.en;
}

export const TEAM: Member[] = [
  {
    name: "Av. Mustafa AKÇAKUŞ",
    role: {
      tr: "Kurucu Avukat",
      en: "Founding Attorney",
      de: "Gründungsanwalt",
      ru: "Адвокат-основатель",
      ar: "محامٍ مؤسس",
      es: "Abogado Fundador",
      fr: "Avocat Fondateur",
      zh: "创始律师",
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu · Sicil No. 5151",
    areas: [
      { tr: "Bilişim & Yapay Zekâ Hukuku", en: "IT & AI Law", de: "IT- & KI-Recht", ru: "IT и ИИ-право", ar: "قانون تقنية المعلومات والذكاء الاصطناعي", es: "Derecho TI e IA", fr: "Droit Informatique et IA", zh: "信息技术与人工智能法" },
      { tr: "Kişisel Veri Koruma (KVKK)", en: "Data Protection (KVKK)", de: "Datenschutz (KVKK)", ru: "Защита данных (KVKK)", ar: "حماية البيانات (KVKK)", es: "Protección de Datos (KVKK)", fr: "Protection des Données (KVKK)", zh: "个人数据保护（KVKK）" },
      { tr: "Gayrimenkul", en: "Real Estate", de: "Immobilienrecht", ru: "Недвижимость", ar: "العقارات", es: "Derecho Inmobiliario", fr: "Droit Immobilier", zh: "房地产法" },
      { tr: "Türk Vatandaşlığı", en: "Turkish Citizenship", de: "Türkische Staatsbürgerschaft", ru: "Гражданство Турции", ar: "الجنسية التركية", es: "Ciudadanía Turca", fr: "Nationalité Turque", zh: "土耳其国籍" },
      { tr: "Yabancılar Hukuku", en: "Immigration", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الأجانب", es: "Derecho de Inmigración", fr: "Droit de l'Immigration", zh: "移民法" },
      { tr: "Fikri Mülkiyet Hukuku", en: "Intellectual Property Law", de: "Recht des geistigen Eigentums", ru: "Право интеллектуальной собственности", ar: "قانون الملكية الفكرية", es: "Derecho de Propiedad Intelectual", fr: "Droit de la Propriété Intellectuelle", zh: "知识产权法" },
    ],
    bio: {
      tr: "MONA HUKUK'un kurucu ortağı Mustafa, bilişim şirketlerine ve uluslararası müvekkillere Türkiye'de BT Hukuku, yapay zekâ düzenlemeleri ve veri koruma (KVKK) uyumu konularında danışmanlık vermektedir. Yazılım geliştirme ve lisans sözleşmeleri, veri ihlali süreçleri ile marka, telif ve alan adı uyuşmazlıkları yürüttüğü işler arasındadır. Ayrıca yabancı müvekkillerin Antalya'da taşınmaz edinimi, oturma izni ve Türk vatandaşlığı başvurularını takip etmektedir. Bu sitedeki hukuki makalelerin başlıca yazarıdır; çalışmalarını Türkçe ve İngilizce yürütmektedir.",
      en: "Founding partner of MONA HUKUK, Mustafa advises technology companies and international clients on IT law, artificial intelligence regulation, and data protection (KVKK) compliance in Turkey. His work covers software development and licensing agreements, data breach procedures, and trademark, copyright, and domain name disputes. He also assists foreign clients with property acquisition, residence permits, and Turkish citizenship applications in Antalya. Mustafa is the lead author of the legal articles on this site and works in Turkish and English.",
      de: "Als Gründungspartner von MONA HUKUK berät Mustafa Technologieunternehmen und internationale Mandanten in den Bereichen IT-Recht, KI-Regulierung und Datenschutz-Compliance (KVKK) in der Türkei. Zu seiner Tätigkeit gehören Softwareentwicklungs- und Lizenzverträge, Verfahren nach Datenschutzverletzungen sowie Streitigkeiten über Marken, Urheberrechte und Domainnamen. Daneben begleitet er ausländische Mandanten beim Immobilienerwerb, bei Aufenthaltserlaubnissen und bei Anträgen auf die türkische Staatsbürgerschaft in Antalya. Er ist Hauptautor der juristischen Beiträge auf dieser Website und arbeitet auf Türkisch und Englisch.",
      ru: "Мустафа — основатель и партнёр MONA HUKUK; он консультирует технологические компании и международных клиентов по вопросам IT-права, регулирования искусственного интеллекта и соответствия требованиям защиты данных (KVKK) в Турции. В его практику входят договоры на разработку и лицензирование программного обеспечения, процедуры при утечках данных, а также споры о товарных знаках, авторских правах и доменных именах. Кроме того, он сопровождает иностранных клиентов при покупке недвижимости, оформлении вида на жительство и подаче заявлений на турецкое гражданство в Анталье. Мустафа — основной автор юридических статей на этом сайте; работает на турецком и английском языках.",
      ar: "مصطفى هو المؤسس والمحامي الشريك في MONA HUKUK، ويقدم المشورة لشركات التكنولوجيا والعملاء الدوليين في مجالات قانون تقنية المعلومات وتنظيم الذكاء الاصطناعي والامتثال لحماية البيانات (KVKK) في تركيا. تشمل أعماله عقود تطوير البرمجيات وترخيصها، وإجراءات انتهاكات البيانات، ونزاعات العلامات التجارية وحقوق المؤلف وأسماء النطاقات. كما يتابع ملفات العملاء الأجانب في تملّك العقارات وتصاريح الإقامة وطلبات الجنسية التركية في أنطاليا. وهو الكاتب الرئيسي للمقالات القانونية في هذا الموقع، ويعمل باللغتين التركية والإنجليزية.",
      es: "Mustafa, socio fundador de MONA HUKUK, asesora a empresas tecnológicas y clientes internacionales en derecho TI, regulación de la inteligencia artificial y cumplimiento en protección de datos (KVKK) en Turquía. Su labor abarca contratos de desarrollo y licencia de software, procedimientos por violaciones de datos, y disputas sobre marcas, derechos de autor y nombres de dominio. Asimismo, acompaña a clientes extranjeros en la adquisición de inmuebles, los permisos de residencia y las solicitudes de ciudadanía turca en Antalya. Es el autor principal de los artículos jurídicos de este sitio y trabaja en turco e inglés.",
      fr: "Associé fondateur de MONA HUKUK, Mustafa conseille les entreprises technologiques et les clients internationaux sur le droit informatique, la réglementation de l'intelligence artificielle et la conformité en matière de protection des données (KVKK) en Turquie. Sa pratique couvre les contrats de développement et de licence de logiciels, les procédures liées aux violations de données, ainsi que les litiges de marques, de droits d'auteur et de noms de domaine. Il accompagne également les clients étrangers dans l'acquisition immobilière, les permis de séjour et les demandes de nationalité turque à Antalya. Il est l'auteur principal des articles juridiques de ce site et travaille en turc et en anglais.",
      zh: "穆斯塔法是MONA HUKUK的创始合伙人，为科技公司及国际客户提供土耳其信息技术法律、人工智能监管及数据保护（KVKK）合规方面的法律咨询。其业务范围包括软件开发与许可合同、数据泄露应对程序，以及商标、著作权和域名争议。他还协助外国客户办理在安塔利亚的房产购置、居留许可和土耳其国籍申请。他是本网站法律文章的主要作者，工作语言为土耳其语和英语。",
    },
  },
  {
    name: "Av. Murat BOSTAN",
    role: {
      tr: "Kıdemli Avukat",
      en: "Senior Attorney",
      de: "Leitender Rechtsanwalt",
      ru: "Старший адвокат",
      ar: "محامٍ أول",
      es: "Abogado Principal",
      fr: "Avocat Senior",
      zh: "高级律师",
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu · Sicil No. 8994",
    areas: [
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي", es: "Derecho Penal", fr: "Droit Pénal", zh: "刑法" },
      { tr: "İş Hukuku", en: "Labour Law", de: "Arbeitsrecht", ru: "Трудовое право", ar: "قانون العمل", es: "Derecho Laboral", fr: "Droit du Travail", zh: "劳动法" },
      { tr: "Gayrimenkul Hukuku", en: "Real Estate Law", de: "Immobilienrecht", ru: "Право в сфере недвижимости", ar: "قانون العقارات", es: "Derecho Inmobiliario", fr: "Droit Immobilier", zh: "房地产法" },
      { tr: "Kira Hukuku", en: "Rental Law", de: "Mietrecht", ru: "Арендное право", ar: "قانون الإيجار", es: "Derecho Arrendaticio", fr: "Droit de la Location", zh: "租赁法" },
    ],
    bio: {
      tr: "Kariyerine İstanbul Barosu'nda başlayan Murat, 2023'ten bu yana Antalya mahkemelerinde müvekkilleri temsil etmekte; ceza savunması, iş uyuşmazlıkları ve taşınmaz davalarına odaklanmaktadır. Ceza dosyalarında soruşturma aşamasındaki ilk ifadeden istinaf ve temyiz süreçlerine kadar savunmanın her aşamasını üstlenmektedir. İş Hukuku alanında işe iade, kıdem ve ihbar tazminatı ile fazla mesai alacaklarına ilişkin davaları; Kira Hukuku alanında tahliye, kira tespiti ve uyarlama uyuşmazlıklarını yürütmektedir. İstanbul'da edindiği dava tecrübesini Antalya'daki uygulamayla birleştirmektedir.",
      en: "Murat began his career at the Istanbul Bar and has been representing clients before the Antalya courts since 2023, focusing on criminal defence, employment disputes, and property litigation. In criminal matters he handles every stage of the defence, from the first statement during the investigation through appeal and cassation proceedings. His employment practice covers reinstatement claims, severance and notice pay, and overtime receivables, while in rental law he conducts eviction, rent determination, and rent adjustment cases. He combines the litigation experience gained in Istanbul with day-to-day practice in Antalya.",
      de: "Murat begann seine Laufbahn bei der Istanbuler Rechtsanwaltskammer und vertritt seit 2023 Mandanten vor den Gerichten in Antalya, mit Schwerpunkt auf Strafverteidigung, Arbeitsstreitigkeiten und Immobilienprozessen. In Strafsachen übernimmt er die Verteidigung in jedem Verfahrensstadium — von der ersten Vernehmung im Ermittlungsverfahren bis zu Berufung und Revision. Im Arbeitsrecht führt er Kündigungsschutz-, Abfindungs- und Überstundenklagen; im Mietrecht bearbeitet er Räumungs-, Mietfestsetzungs- und Mietanpassungsverfahren. Die in Istanbul gewonnene Prozesserfahrung verbindet er mit der täglichen Praxis in Antalya.",
      ru: "Мурат начал карьеру в Стамбульской коллегии адвокатов и с 2023 года представляет клиентов в судах Антальи, уделяя основное внимание уголовной защите, трудовым спорам и делам о недвижимости. По уголовным делам он ведёт защиту на всех стадиях — от первого допроса в ходе следствия до апелляции и кассации. В трудовом праве он занимается исками о восстановлении на работе, выходных пособиях и сверхурочных, а в арендном праве — делами о выселении, определении и пересмотре арендной платы. Судебный опыт, накопленный в Стамбуле, он сочетает с повседневной практикой в Анталье.",
      ar: "بدأ مراد مسيرته في نقابة محامي إسطنبول، ويمثل الموكلين أمام محاكم أنطاليا منذ عام 2023، مركّزاً على الدفاع الجنائي ونزاعات العمل وقضايا العقارات. في الملفات الجنائية يتولى الدفاع في جميع المراحل، من الإفادة الأولى في مرحلة التحقيق إلى الاستئناف والنقض. وفي قانون العمل يتابع دعاوى الإعادة إلى العمل وتعويضات نهاية الخدمة والإشعار ومستحقات العمل الإضافي، بينما يتولى في قانون الإيجار دعاوى الإخلاء وتحديد بدل الإيجار وتعديله. ويجمع بين خبرة التقاضي التي اكتسبها في إسطنبول والممارسة اليومية في أنطاليا.",
      es: "Murat inició su carrera en el Colegio de Abogados de Estambul y desde 2023 representa a clientes ante los tribunales de Antalya, centrándose en defensa penal, litigios laborales y pleitos inmobiliarios. En materia penal asume la defensa en todas las fases del proceso, desde la primera declaración en la instrucción hasta la apelación y la casación. Su práctica laboral comprende demandas de readmisión, indemnizaciones por despido y preaviso, y reclamaciones de horas extraordinarias; en derecho arrendaticio tramita desahucios y procedimientos de determinación y ajuste de la renta. Combina la experiencia procesal adquirida en Estambul con la práctica diaria en Antalya.",
      fr: "Murat a débuté sa carrière au barreau d'Istanbul et représente depuis 2023 des clients devant les tribunaux d'Antalya, en se concentrant sur la défense pénale, les litiges du travail et le contentieux immobilier. Au pénal, il assure la défense à chaque étape de la procédure, de la première audition durant l'enquête jusqu'à l'appel et au pourvoi en cassation. En droit du travail, il traite les actions en réintégration, les indemnités de licenciement et de préavis ainsi que les créances d'heures supplémentaires ; en droit des baux, il conduit les procédures d'expulsion, de fixation et de révision des loyers. Il allie l'expérience contentieuse acquise à Istanbul à la pratique quotidienne d'Antalya.",
      zh: "穆拉特的职业生涯始于伊斯坦布尔律师协会，自2023年起在安塔利亚法院代理客户，工作重点为刑事辩护、劳动争议和不动产诉讼。在刑事案件中，他承担从侦查阶段首次讯问到各级上诉程序的全部辩护环节。在劳动法领域，他办理复职、遣散费与代通知金及加班费追索案件；在租赁法领域，他处理腾退、租金核定及租金调整纠纷。他将在伊斯坦布尔积累的诉讼经验与安塔利亚的日常执业相结合。",
    },
  },
  {
    name: "Stj. Av. Tuğba Yazar",
    role: {
      tr: "Stajyer Avukat",
      en: "Trainee Attorney",
      de: "Rechtsreferendarin",
      ru: "Стажёр-адвокат",
      ar: "محامية متدربة",
      es: "Abogada en Prácticas",
      fr: "Élève Avocate",
      zh: "实习律师",
    },
    education: "Süleyman Demirel University / SDÜ Hukuk Fakültesi, 2023",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Sağlık Hukuku", en: "Health Law", de: "Gesundheitsrecht", ru: "Медицинское право", ar: "قانون الصحة", es: "Derecho Sanitario", fr: "Droit de la Santé", zh: "卫生法" },
      { tr: "Yabancılar & Göç Hukuku", en: "Immigration Law", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الهجرة والأجانب", es: "Derecho de Extranjería e Inmigración", fr: "Droit de l'Immigration et des Étrangers", zh: "移民法" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة", es: "Derecho de Familia", fr: "Droit de la Famille", zh: "家事法" },
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي", es: "Derecho Penal", fr: "Droit Pénal", zh: "刑法" },
    ],
    bio: {
      tr: "Tuğba; Sağlık Hukuku, Yabancılar Hukuku, Aile Hukuku ve ceza sorumluluğu alanlarında ağırlıklı olarak çalışmakta, yabancı müvekkillerin Türk Hukuki süreçlerinde yol almalarına destek olmaktadır. Oturma izni ve Türk vatandaşlığı başvurularının dosya hazırlığı ile kurum ve duruşma takiplerinde büro ekibine destek vermektedir. Sağlık Hukuku alanında hasta hakları ve hekim sorumluluğuna ilişkin araştırma ve dosya çalışmaları yürütmektedir. Yabancı müvekkillerle iletişimini İngilizce sürdürmektedir.",
      en: "Tuğba works primarily in health law, immigration law, family law, and criminal liability matters, supporting foreign clients as they navigate Turkish legal processes. She assists the team with file preparation for residence permit and Turkish citizenship applications and with follow-up before public authorities and at hearings. In health law she carries out research and casework on patient rights and medical liability. She communicates with foreign clients in English.",
      de: "Tuğba ist schwerpunktmäßig in den Bereichen Gesundheitsrecht, Einwanderungsrecht, Familienrecht und strafrechtliche Haftung tätig und unterstützt ausländische Mandanten bei der Orientierung im türkischen Rechtssystem. Sie wirkt an der Aktenvorbereitung für Aufenthaltserlaubnis- und Einbürgerungsanträge mit und begleitet Behördengänge sowie Gerichtstermine. Im Gesundheitsrecht führt sie Recherchen und Fallarbeit zu Patientenrechten und Arzthaftung durch. Mit ausländischen Mandanten kommuniziert sie auf Englisch.",
      ru: "Тугба работает преимущественно в области медицинского права, иммиграционного права, семейного права и уголовной ответственности, помогая иностранным клиентам ориентироваться в турецких правовых процедурах. Она участвует в подготовке досье для заявлений на вид на жительство и турецкое гражданство, а также в сопровождении дел в государственных органах и на судебных заседаниях. В сфере медицинского права она ведёт исследовательскую и практическую работу по правам пациентов и ответственности врачей. С иностранными клиентами она общается на английском языке.",
      ar: "تعمل طغبا بشكل أساسي في قانون الصحة وقانون الهجرة وقانون الأسرة ومسائل المسؤولية الجنائية، وتساعد العملاء الأجانب على التعامل مع الإجراءات القانونية التركية. تشارك في إعداد ملفات طلبات الإقامة والجنسية التركية وفي متابعتها أمام الجهات الرسمية وفي الجلسات. وفي قانون الصحة تجري أبحاثاً وأعمالاً ملفّية تتعلق بحقوق المرضى ومسؤولية الأطباء. وتتواصل مع العملاء الأجانب باللغة الإنجليزية.",
      es: "Tuğba trabaja principalmente en derecho sanitario, derecho de extranjería, derecho de familia y responsabilidad penal, ayudando a los clientes extranjeros a orientarse en los procedimientos legales turcos. Colabora en la preparación de expedientes de permisos de residencia y de solicitudes de ciudadanía turca, así como en su seguimiento ante organismos públicos y en las vistas. En derecho sanitario desarrolla labores de investigación y trabajo de expedientes sobre derechos del paciente y responsabilidad médica. Se comunica en inglés con los clientes extranjeros.",
      fr: "Tuğba intervient principalement en droit de la santé, droit de l'immigration, droit de la famille et responsabilité pénale, en aidant les clients étrangers à s'orienter dans les procédures juridiques turques. Elle participe à la préparation des dossiers de permis de séjour et de demandes de nationalité turque, ainsi qu'à leur suivi auprès des administrations et lors des audiences. En droit de la santé, elle mène des travaux de recherche et de dossier sur les droits des patients et la responsabilité médicale. Elle communique en anglais avec les clients étrangers.",
      zh: "图巴主要在卫生法、移民法、家事法和刑事责任领域工作，协助外国客户应对土耳其的法律程序。她参与居留许可和土耳其国籍申请的卷宗准备，并协助在政府机构及庭审中的跟进工作。在卫生法领域，她开展有关患者权利和医疗责任的研究与卷宗工作。她使用英语与外国客户沟通。",
    },
  },
];
