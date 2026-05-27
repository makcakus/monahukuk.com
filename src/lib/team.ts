export type LangMap = { tr: string; en: string; de: string; ru: string; ar: string; es: string; fr: string };

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
      tr: "Ortak Avukat",
      en: "Partner Attorney",
      de: "Kanzleipartner",
      ru: "Партнёр-адвокат",
      ar: "محامٍ شريك",
      es: "Abogado Socio",
      fr: "Avocat Associé",
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Bilişim & Yapay Zekâ Hukuku", en: "IT & AI Law", de: "IT- & KI-Recht", ru: "IT и ИИ-право", ar: "قانون تقنية المعلومات والذكاء الاصطناعي", es: "Derecho TI e IA", fr: "Droit Informatique et IA" },
      { tr: "Kişisel Veri Koruma (KVKK)", en: "Data Protection (KVKK)", de: "Datenschutz (KVKK)", ru: "Защита данных (KVKK)", ar: "حماية البيانات (KVKK)", es: "Protección de Datos (KVKK)", fr: "Protection des Données (KVKK)" },
      { tr: "Gayrimenkul", en: "Real Estate", de: "Immobilienrecht", ru: "Недвижимость", ar: "العقارات", es: "Derecho Inmobiliario", fr: "Droit Immobilier" },
      { tr: "Türk Vatandaşlığı", en: "Turkish Citizenship", de: "Türkische Staatsbürgerschaft", ru: "Гражданство Турции", ar: "الجنسية التركية", es: "Ciudadanía Turca", fr: "Nationalité Turque" },
      { tr: "Yabancılar Hukuku", en: "Immigration", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الأجانب", es: "Derecho de Inmigración", fr: "Droit de l'Immigration" },
    ],
    bio: {
      tr: "MONA HUKUK'un kurucu ortağı Mustafa, bilişim şirketleri ve uluslararası müvekkillere Türkiye'de BT Hukuku, yapay zekâ düzenlemeleri ve veri koruma uyumu konularında danışmanlık vermektedir.",
      en: "Founding partner of MONA HUKUK, Mustafa specialises in advising technology companies and international clients on IT law, artificial intelligence regulation, and data protection compliance in Turkey.",
      de: "Als Gründungspartner von MONA HUKUK berät Mustafa Technologieunternehmen und internationale Mandanten in den Bereichen IT-Recht, KI-Regulierung und Datenschutz-Compliance in der Türkei.",
      ru: "Основатель и партнёр MONA HUKUK, Мустафа специализируется на консультировании технологических компаний и международных клиентов по вопросам IT-права, регулирования искусственного интеллекта и соответствия требованиям защиты данных в Турции.",
      ar: "مؤسس ومحامي شريك في MONA HUKUK، يتخصص مصطفى في تقديم المشورة لشركات التكنولوجيا والعملاء الدوليين في مجالات قانون تقنية المعلومات وتنظيم الذكاء الاصطناعي والامتثال لحماية البيانات في تركيا.",
      es: "Socio fundador de MONA HUKUK, Mustafa se especializa en asesorar a empresas tecnológicas y clientes internacionales en derecho TI, regulación de inteligencia artificial y cumplimiento de protección de datos en Turquía.",
      fr: "Associé fondateur de MONA HUKUK, Mustafa est spécialisé dans le conseil aux entreprises technologiques et aux clients internationaux sur le droit informatique, la réglementation de l'intelligence artificielle et la conformité en matière de protection des données en Turquie.",
    },
  },
  {
    name: "Av. Aykut ACAR",
    role: {
      tr: "Ortak Avukat",
      en: "Partner Attorney",
      de: "Kanzleipartner",
      ru: "Партнёр-адвокат",
      ar: "محامٍ شريك",
      es: "Abogado Socio",
      fr: "Avocat Associé",
    },
    education: "Akdeniz University / Akdeniz Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Ticaret & Şirketler Hukuku", en: "Commercial & Corporate Law", de: "Handels- & Gesellschaftsrecht", ru: "Коммерческое и корпоративное право", ar: "القانون التجاري والشركات", es: "Derecho Mercantil y Societario", fr: "Droit Commercial et des Sociétés" },
      { tr: "Gayrimenkul", en: "Real Estate", de: "Immobilienrecht", ru: "Недвижимость", ar: "العقارات", es: "Derecho Inmobiliario", fr: "Droit Immobilier" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة", es: "Derecho de Familia", fr: "Droit de la Famille" },
      { tr: "Miras Hukuku", en: "Inheritance", de: "Erbrecht", ru: "Наследственное право", ar: "قانون الميراث", es: "Derecho de Sucesiones", fr: "Droit des Successions" },
      { tr: "İcra & İflas Hukuku", en: "Enforcement Law", de: "Vollstreckungsrecht", ru: "Исполнительное право", ar: "قانون التنفيذ والإفلاس", es: "Derecho de Ejecución", fr: "Droit de l'Exécution" },
    ],
    bio: {
      tr: "On yılı aşkın deneyimiyle kurucu ortak Aykut, yabancı yatırımcılara ve bireylere gayrimenkul işlemleri, ticari davalar, aile uyuşmazlıkları ve icra takipleri konularında hizmet vermektedir.",
      en: "Founding partner with over a decade of practice, Aykut advises foreign investors and individuals on real estate transactions, corporate matters, family disputes, and enforcement proceedings.",
      de: "Als Gründungspartner mit über einem Jahrzehnt Berufserfahrung berät Aykut ausländische Investoren und Privatpersonen in Immobilientransaktionen, Unternehmensfragen, Familienstreitigkeiten und Vollstreckungsverfahren.",
      ru: "Основатель-партнёр с более чем десятилетним опытом, Айкут консультирует иностранных инвесторов и частных лиц по вопросам сделок с недвижимостью, корпоративным делам, семейным спорам и исполнительным производствам.",
      ar: "مؤسس وشريك بخبرة تمتد لأكثر من عقد، يقدم أيكوت المشورة للمستثمرين الأجانب والأفراد في معاملات العقارات والشؤون التجارية والنزاعات الأسرية وإجراءات التنفيذ.",
      es: "Socio fundador con más de una década de ejercicio, Aykut asesora a inversores extranjeros e individuos en transacciones inmobiliarias, asuntos corporativos, disputas familiares y procedimientos de ejecución.",
      fr: "Associé fondateur avec plus d'une décennie de pratique, Aykut conseille des investisseurs étrangers et des particuliers sur les transactions immobilières, les affaires d'entreprise, les litiges familiaux et les procédures d'exécution.",
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
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu (since 2023)",
    areas: [
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي", es: "Derecho Penal", fr: "Droit Pénal" },
      { tr: "İş Hukuku", en: "Labour Law", de: "Arbeitsrecht", ru: "Трудовое право", ar: "قانون العمل", es: "Derecho Laboral", fr: "Droit du Travail" },
      { tr: "Gayrimenkul Hukuku", en: "Real Estate Law", de: "Immobilienrecht", ru: "Право в сфере недвижимости", ar: "قانون العقارات", es: "Derecho Inmobiliario", fr: "Droit Immobilier" },
    ],
    bio: {
      tr: "Kariyerine İstanbul Barosu'nda başlayan Murat, 2023'ten bu yana Antalya mahkemelerinde müvekkilleri temsil etmekte; ceza savunması, iş uyuşmazlıkları ve taşınmaz davalarına odaklanmaktadır.",
      en: "Murat began his career at the Istanbul Bar Association and has been representing clients before Antalya courts since 2023, focusing on criminal defence, labour disputes, and property matters.",
      de: "Murat begann seine Karriere bei der Istanbuler Rechtsanwaltskammer und vertritt seit 2023 Mandanten vor Antalyaer Gerichten, mit Schwerpunkt auf Strafverteidigung, Arbeitsstreitigkeiten und Immobilienangelegenheiten.",
      ru: "Мурат начал карьеру в Стамбульской коллегии адвокатов и с 2023 года представляет клиентов в судах Антальи, специализируясь на уголовной защите, трудовых спорах и имущественных делах.",
      ar: "بدأ مراد مسيرته المهنية في نقابة محامي إسطنبول، ويمثل العملاء أمام محاكم أنطاليا منذ عام 2023، مع التركيز على الدفاع الجنائي ونزاعات العمل والقضايا العقارية.",
      es: "Murat inició su carrera en el Colegio de Abogados de Estambul y desde 2023 representa a clientes ante los tribunales de Antalya, especializándose en defensa penal, disputas laborales y asuntos inmobiliarios.",
      fr: "Murat a débuté sa carrière au barreau d'Istanbul et représente des clients devant les tribunaux d'Antalya depuis 2023, en se spécialisant dans la défense pénale, les litiges du travail et les affaires immobilières.",
    },
  },
  {
    name: "Av. Mehmet SİMAV",
    role: {
      tr: "Avukat",
      en: "Attorney",
      de: "Rechtsanwalt",
      ru: "Адвокат",
      ar: "محامٍ",
      es: "Abogado",
      fr: "Avocat",
    },
    education: "Istanbul University / İstanbul Üniversitesi Hukuk Fakültesi, 2022",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي", es: "Derecho Penal", fr: "Droit Pénal" },
      { tr: "Ticaret Hukuku", en: "Commercial Law", de: "Handelsrecht", ru: "Коммерческое право", ar: "القانون التجاري", es: "Derecho Mercantil", fr: "Droit Commercial" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة", es: "Derecho de Familia", fr: "Droit de la Famille" },
    ],
    bio: {
      tr: "Mehmet, dava ve uyuşmazlık çözümüne titiz ve müvekkil odaklı bir yaklaşım getirerek bireyleri ve şirketleri ceza davaları, ticari uyuşmazlıklar ve Aile Hukuku meselelerinde temsil etmektedir.",
      en: "Mehmet brings a rigorous, client-focused approach to litigation and dispute resolution, representing individuals and businesses in criminal proceedings, commercial disputes, and family matters.",
      de: "Mehmet verfolgt einen gründlichen, mandantenorientierten Ansatz in der Prozessführung und Streitbeilegung und vertritt Privatpersonen und Unternehmen in Strafverfahren, Handelsstreitigkeiten und Familienrechtssachen.",
      ru: "Мехмет применяет строгий клиентоориентированный подход к судебным разбирательствам и урегулированию споров, представляя интересы физических лиц и компаний в уголовных делах, коммерческих спорах и семейных делах.",
      ar: "يتبنى محمد نهجاً دقيقاً يركز على العميل في التقاضي وحل النزاعات، ويمثل الأفراد والشركات في الإجراءات الجنائية والنزاعات التجارية وقضايا الأسرة.",
      es: "Mehmet aporta un enfoque riguroso y centrado en el cliente a los litigios y la resolución de conflictos, representando a particulares y empresas en procedimientos penales, disputas comerciales y asuntos de familia.",
      fr: "Mehmet adopte une approche rigoureuse et centrée sur le client dans le contentieux et la résolution des litiges, représentant des particuliers et des entreprises dans des procédures pénales, des différends commerciaux et des affaires familiales.",
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
    },
    education: "Süleyman Demirel University / SDÜ Hukuk Fakültesi, 2023",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Sağlık Hukuku", en: "Health Law", de: "Gesundheitsrecht", ru: "Медицинское право", ar: "قانون الصحة", es: "Derecho Sanitario", fr: "Droit de la Santé" },
      { tr: "Yabancılar & Göç Hukuku", en: "Immigration Law", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الهجرة والأجانب", es: "Derecho de Extranjería e Inmigración", fr: "Droit de l'Immigration et des Étrangers" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة", es: "Derecho de Familia", fr: "Droit de la Famille" },
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي", es: "Derecho Penal", fr: "Droit Pénal" },
    ],
    bio: {
      tr: "Tuğba; Sağlık Hukuku, Yabancılar Hukuku, Aile Hukuku ve ceza sorumluluğu alanlarında uzmanlaşmakta, yabancı müvekkillerin Türk Hukuki süreçlerinde yol almalarına destek olmaktadır.",
      en: "Tuğba is actively developing her expertise across Health Law, Immigration Law, Family Law, and criminal liability matters, providing support to foreign clients navigating Turkish legal processes.",
      de: "Tuğba entwickelt aktiv ihre Expertise in den Bereichen Gesundheitsrecht, Einwanderungsrecht, Familienrecht und strafrechtliche Haftung und unterstützt ausländische Mandanten bei der Orientierung im türkischen Rechtssystem.",
      ru: "Тугба активно развивает свою экспертизу в области медицинского права, иммиграционного права, семейного права и уголовной ответственности, помогая иностранным клиентам разобраться в турецкой правовой системе.",
      ar: "تطوِّر طغبا بنشاط خبراتها في قانون الصحة وقانون الهجرة وقانون الأسرة ومسائل المسؤولية الجنائية، وتقدم الدعم للعملاء الأجانب للتعامل مع الإجراءات القانونية التركية.",
      es: "Tuğba desarrolla activamente su especialización en Derecho Sanitario, Derecho de Inmigración, Derecho de Familia y responsabilidad penal, brindando apoyo a clientes extranjeros en los procedimientos legales turcos.",
      fr: "Tuğba développe activement son expertise en droit de la santé, droit de l'immigration, droit de la famille et responsabilité pénale, en accompagnant les clients étrangers dans les procédures juridiques turques.",
    },
  },
];
