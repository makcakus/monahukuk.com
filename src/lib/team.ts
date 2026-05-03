export type LangMap = { tr: string; en: string; de: string; ru: string; ar: string };

export type Member = {
  name: string;
  role: LangMap;
  education: string;
  bar: string;
  areas: LangMap[];
  bio: LangMap;
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
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Bilişim & Yapay Zekâ Hukuku", en: "IT & AI Law", de: "IT- & KI-Recht", ru: "IT и ИИ-право", ar: "قانون تقنية المعلومات والذكاء الاصطناعي" },
      { tr: "Kişisel Veri Koruma (KVKK)", en: "Data Protection (KVKK)", de: "Datenschutz (KVKK)", ru: "Защита данных (KVKK)", ar: "حماية البيانات (KVKK)" },
      { tr: "Gayrimenkul", en: "Real Estate", de: "Immobilienrecht", ru: "Недвижимость", ar: "العقارات" },
      { tr: "Türk Vatandaşlığı", en: "Turkish Citizenship", de: "Türkische Staatsbürgerschaft", ru: "Гражданство Турции", ar: "الجنسية التركية" },
      { tr: "Yabancılar Hukuku", en: "Immigration", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الأجانب" },
    ],
    bio: {
      tr: "MONA HUKUK'un kurucu ortağı Mustafa, bilişim şirketleri ve uluslararası müvekkillere Türkiye'de BT Hukuku, yapay zekâ düzenlemeleri ve veri koruma uyumu konularında danışmanlık vermektedir.",
      en: "Founding partner of MONA HUKUK, Mustafa specialises in advising technology companies and international clients on IT law, artificial intelligence regulation, and data protection compliance in Turkey.",
      de: "Als Gründungspartner von MONA HUKUK berät Mustafa Technologieunternehmen und internationale Mandanten in den Bereichen IT-Recht, KI-Regulierung und Datenschutz-Compliance in der Türkei.",
      ru: "Основатель и партнёр MONA HUKUK, Мустафа специализируется на консультировании технологических компаний и международных клиентов по вопросам IT-права, регулирования искусственного интеллекта и соответствия требованиям защиты данных в Турции.",
      ar: "مؤسس ومحامي شريك في MONA HUKUK، يتخصص مصطفى في تقديم المشورة لشركات التكنولوجيا والعملاء الدوليين في مجالات قانون تقنية المعلومات وتنظيم الذكاء الاصطناعي والامتثال لحماية البيانات في تركيا.",
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
    },
    education: "Akdeniz University / Akdeniz Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Ticaret & Şirketler Hukuku", en: "Commercial & Corporate Law", de: "Handels- & Gesellschaftsrecht", ru: "Коммерческое и корпоративное право", ar: "القانون التجاري والشركات" },
      { tr: "Gayrimenkul", en: "Real Estate", de: "Immobilienrecht", ru: "Недвижимость", ar: "العقارات" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة" },
      { tr: "Miras Hukuku", en: "Inheritance", de: "Erbrecht", ru: "Наследственное право", ar: "قانون الميراث" },
      { tr: "İcra & İflas Hukuku", en: "Enforcement Law", de: "Vollstreckungsrecht", ru: "Исполнительное право", ar: "قانون التنفيذ والإفلاس" },
    ],
    bio: {
      tr: "On yılı aşkın deneyimiyle kurucu ortak Aykut, yabancı yatırımcılara ve bireylere gayrimenkul işlemleri, ticari davalar, aile uyuşmazlıkları ve icra takipleri konularında hizmet vermektedir.",
      en: "Founding partner with over a decade of practice, Aykut advises foreign investors and individuals on real estate transactions, corporate matters, family disputes, and enforcement proceedings.",
      de: "Als Gründungspartner mit über einem Jahrzehnt Berufserfahrung berät Aykut ausländische Investoren und Privatpersonen in Immobilientransaktionen, Unternehmensfragen, Familienstreitigkeiten und Vollstreckungsverfahren.",
      ru: "Основатель-партнёр с более чем десятилетним опытом, Айкут консультирует иностранных инвесторов и частных лиц по вопросам сделок с недвижимостью, корпоративным делам, семейным спорам и исполнительным производствам.",
      ar: "مؤسس وشريك بخبرة تمتد لأكثر من عقد، يقدم أيقوت المشورة للمستثمرين الأجانب والأفراد في معاملات العقارات والشؤون التجارية والنزاعات الأسرية وإجراءات التنفيذ.",
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
    },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu (2023'ten itibaren)",
    areas: [
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي" },
      { tr: "İş Hukuku", en: "Labour Law", de: "Arbeitsrecht", ru: "Трудовое право", ar: "قانون العمل" },
      { tr: "Gayrimenkul Hukuku", en: "Real Estate Law", de: "Immobilienrecht", ru: "Право в сфере недвижимости", ar: "قانون العقارات" },
    ],
    bio: {
      tr: "Kariyerine İstanbul Barosu'nda başlayan Murat, 2023'ten bu yana Antalya mahkemelerinde müvekkilleri temsil etmekte; ceza savunması, iş uyuşmazlıkları ve taşınmaz davalarına odaklanmaktadır.",
      en: "Murat began his career at the Istanbul Bar Association and has been representing clients before Antalya courts since 2023, focusing on criminal defence, labour disputes, and property matters.",
      de: "Murat begann seine Karriere bei der Istanbuler Rechtsanwaltskammer und vertritt seit 2023 Mandanten vor Antalyaer Gerichten, mit Schwerpunkt auf Strafverteidigung, Arbeitsstreitigkeiten und Immobilienangelegenheiten.",
      ru: "Мурат начал карьеру в Стамбульской коллегии адвокатов и с 2023 года представляет клиентов в судах Антальи, специализируясь на уголовной защите, трудовых спорах и имущественных делах.",
      ar: "بدأ مراد مسيرته المهنية في نقابة محامي إسطنبول، ويمثل العملاء أمام محاكم أنطاليا منذ عام 2023، مع التركيز على الدفاع الجنائي ونزاعات العمل والقضايا العقارية.",
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
    },
    education: "Istanbul University / İstanbul Üniversitesi Hukuk Fakültesi, 2022",
    bar: "Antalya Barosu",
    areas: [
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي" },
      { tr: "Ticaret Hukuku", en: "Commercial Law", de: "Handelsrecht", ru: "Коммерческое право", ar: "القانون التجاري" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة" },
    ],
    bio: {
      tr: "Mehmet, dava ve uyuşmazlık çözümüne titiz ve müvekkil odaklı bir yaklaşım getirerek bireyleri ve şirketleri ceza davaları, ticari uyuşmazlıklar ve Aile Hukuku meselelerinde temsil etmektedir.",
      en: "Mehmet brings a rigorous, client-focused approach to litigation and dispute resolution, representing individuals and businesses in criminal proceedings, commercial disputes, and family matters.",
      de: "Mehmet verfolgt einen gründlichen, mandantenorientierten Ansatz in der Prozessführung und Streitbeilegung und vertritt Privatpersonen und Unternehmen in Strafverfahren, Handelsstreitigkeiten und Familienrechtssachen.",
      ru: "Мехмет применяет строгий клиентоориентированный подход к судебным разбирательствам и урегулированию споров, представляя интересы физических лиц и компаний в уголовных делах, коммерческих спорах и семейных делах.",
      ar: "يتبنى محمد نهجاً دقيقاً يركز على العميل في التقاضي وحل النزاعات، ويمثل الأفراد والشركات في الإجراءات الجنائية والنزاعات التجارية وقضايا الأسرة.",
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
    },
    education: "Süleyman Demirel University / SDÜ Hukuk Fakültesi, 2023",
    bar: "Antalya Barosu (stajyer)",
    areas: [
      { tr: "Sağlık Hukuku", en: "Health Law", de: "Gesundheitsrecht", ru: "Медицинское право", ar: "قانون الصحة" },
      { tr: "Yabancılar & Göç Hukuku", en: "Immigration Law", de: "Einwanderungsrecht", ru: "Иммиграционное право", ar: "قانون الهجرة والأجانب" },
      { tr: "Aile Hukuku", en: "Family Law", de: "Familienrecht", ru: "Семейное право", ar: "قانون الأسرة" },
      { tr: "Ceza Hukuku", en: "Criminal Law", de: "Strafrecht", ru: "Уголовное право", ar: "القانون الجنائي" },
    ],
    bio: {
      tr: "Tuğba; Sağlık Hukuku, Yabancılar Hukuku, Aile Hukuku ve ceza sorumluluğu alanlarında uzmanlaşmakta, yabancı müvekkillerin Türk Hukuki süreçlerinde yol almalarına destek olmaktadır.",
      en: "Tuğba is actively developing her expertise across Health Law, Immigration Law, Family Law, and criminal liability matters, providing support to foreign clients navigating Turkish legal processes.",
      de: "Tuğba entwickelt aktiv ihre Expertise in den Bereichen Gesundheitsrecht, Einwanderungsrecht, Familienrecht und strafrechtliche Haftung und unterstützt ausländische Mandanten bei der Orientierung im türkischen Rechtssystem.",
      ru: "Тугба активно развивает свою экспертизу в области медицинского права, иммиграционного права, семейного права и уголовной ответственности, оказывая поддержку иностранным клиентам в навигации по турецким правовым процессам.",
      ar: "تطور طغبا بنشاط خبراتها في قانون الصحة وقانون الهجرة وقانون الأسرة ومسائل المسؤولية الجنائية، وتقدم الدعم للعملاء الأجانب للتعامل مع الإجراءات القانونية التركية.",
    },
  },
];
