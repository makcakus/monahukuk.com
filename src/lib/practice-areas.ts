import { Scale, Home, Globe, Users, ShieldAlert, Cpu, Briefcase, FileText, HardHat, Building2 } from "lucide-react";

export type LangMap5 = { tr: string; en: string; de: string; ru: string; ar: string };

export type PracticeArea = {
  slug: string;
  icon: string;
  title: LangMap5;
  description: LangMap5;
};

export function pickPA(map: LangMap5, locale: string): string {
  return (map as Record<string, string>)[locale] ?? map.en;
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
    },
    description: {
      tr: "Türkiye'de ikamet etmek, çalışmak veya iş kurmak isteyen yabancı uyrukluların tüm hukuki süreçlerini yürütüyoruz. Kısa ve uzun dönem oturma izni başvuruları, çalışma izni işlemleri, vize itirazları ve sınır dışı kararlarına karşı savunma konularında Antalya'da deneyimli yabancılar avukatıyla yanınızdayız.",
      en: "We handle the full legal process for foreign nationals wishing to reside, work, or establish a business in Turkey. Our experienced immigration lawyers in Antalya assist with short and long-term residence permit applications, work permit procedures, visa appeals, and defence against deportation orders.",
      de: "Wir begleiten ausländische Staatsangehörige durch alle rechtlichen Verfahren, die für den Aufenthalt, die Arbeit oder die Unternehmensgründung in der Türkei erforderlich sind. Unsere erfahrenen Einwanderungsanwälte in Antalya helfen bei kurz- und langfristigen Aufenthaltserlaubnissen, Arbeitsgenehmigungen, Widersprüchen gegen Visa-Ablehnungen und der Verteidigung gegen Ausweisungsbeschlüsse.",
      ru: "Мы сопровождаем иностранных граждан через все правовые процедуры, необходимые для проживания, работы или открытия бизнеса в Турции. Наши опытные иммиграционные адвокаты в Анталье помогают с оформлением краткосрочных и долгосрочных видов на жительство, разрешений на работу, обжалованием отказов в визе и защитой от решений о депортации.",
      ar: "نتولى الإجراءات القانونية الكاملة للمواطنين الأجانب الراغبين في الإقامة أو العمل أو تأسيس أعمال تجارية في تركيا. يساعد محامو الهجرة المتمرسون لدينا في أنطاليا في تقديم طلبات تصاريح الإقامة قصيرة وطويلة الأمد وتصاريح العمل والطعن في رفض التأشيرات والدفاع ضد قرارات الترحيل.",
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
    },
    description: {
      tr: "Türkiye'de mülk satın almak isteyen yabancılar için tapu işlemlerinden sözleşme incelemesine, ön satış anlaşmalarından kira uyuşmazlıklarına kadar tüm Gayrimenkul Hukuku hizmetlerini sunuyoruz. Antalya'da yabancıların ev, arsa veya ticari mülk ediniminde güvenli ve şeffaf bir süreç yönetimi sağlıyoruz.",
      en: "We provide comprehensive real estate legal services for foreigners buying property in Turkey — from title deed procedures and contract review to pre-sale agreements and rental disputes. We ensure a safe and transparent process for foreign nationals acquiring residential, land, or commercial property in Antalya.",
      de: "Wir bieten umfassende immobilienrechtliche Dienstleistungen für Ausländer, die in der Türkei Immobilien erwerben möchten — von Grundbuchverfahren und Vertragsprüfungen bis hin zu Vorverträgen und Mietstreitigkeiten. Wir sorgen für einen sicheren und transparenten Ablauf, wenn ausländische Staatsangehörige in Antalya eine Wohnung, ein Grundstück oder eine Gewerbeimmobilie erwerben.",
      ru: "Мы предоставляем комплексные юридические услуги в сфере недвижимости для иностранцев, приобретающих имущество в Турции — от оформления документов на право собственности и проверки договоров до предварительных договоров купли-продажи и споров об аренде. Мы обеспечиваем безопасный и прозрачный процесс для иностранных граждан, приобретающих жилую, земельную или коммерческую недвижимость в Анталье.",
      ar: "نقدم خدمات قانونية عقارية شاملة للأجانب الراغبين في شراء العقارات في تركيا — بدءاً من إجراءات سند الملكية ومراجعة العقود وصولاً إلى اتفاقيات البيع المسبق ونزاعات الإيجار. نضمن سيراً آمناً وشفافاً لعملية اقتناء الأجانب للعقارات السكنية والأراضي والعقارات التجارية في أنطاليا.",
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
    },
    description: {
      tr: "Yatırım, evlilik veya uzun süreli ikamet yoluyla Türk vatandaşlığı edinmek isteyen yabancılara başvuru sürecinin her aşamasında hukuki destek sağlıyoruz. 400.000 USD değerinde gayrimenkul yatırımı veya diğer kanallarla vatandaşlık başvurularını doğru ve hızlı biçimde yürütüyoruz.",
      en: "We provide legal support at every stage of the Turkish citizenship application process for foreign nationals seeking citizenship through investment, marriage, or long-term residence. We manage applications via the 400,000 USD real estate investment route or other eligible channels accurately and efficiently.",
      de: "Wir bieten in jeder Phase des türkischen Einbürgerungsverfahrens rechtliche Unterstützung für ausländische Staatsangehörige, die die Staatsbürgerschaft durch Investition, Heirat oder langfristigen Aufenthalt anstreben. Wir begleiten Anträge über die Immobilieninvestition in Höhe von 400.000 USD oder andere zugelassene Wege präzise und zügig.",
      ru: "Мы оказываем правовую поддержку на каждом этапе процедуры получения гражданства Турции для иностранцев, стремящихся к гражданству через инвестиции, брак или длительное проживание. Мы ведём заявления по пути инвестиций в недвижимость на сумму 400 000 долларов США или другим приемлемым каналам точно и эффективно.",
      ar: "نقدم الدعم القانوني في كل مرحلة من مراحل إجراءات الحصول على الجنسية التركية للمواطنين الأجانب الساعين إلى الجنسية عن طريق الاستثمار أو الزواج أو الإقامة طويلة الأمد. ندير الطلبات عبر مسار الاستثمار العقاري البالغ 400,000 دولار أمريكي أو القنوات المؤهلة الأخرى بدقة وكفاءة.",
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
    },
    description: {
      tr: "Uluslararası boşanma davaları, velayet ve nafaka anlaşmazlıkları, evlilik sözleşmeleri ve yabancı mahkeme kararlarının Türkiye'de tanınması konularında deneyimli Aile Hukuku avukatlarıyla hizmet veriyoruz. Yabancı uyruklu müvekkillerin Türk Aile Hukukundaki haklarını etkin biçimde koruyor ve savunuyoruz.",
      en: "We represent clients in international divorce proceedings, custody and alimony disputes, marriage and prenuptial agreements, and the recognition of foreign court judgments in Turkey. Our experienced family law attorneys actively protect and defend the rights of foreign nationals under Turkish family law.",
      de: "Wir vertreten Mandanten in internationalen Scheidungsverfahren, Sorgerechts- und Unterhaltsstreitigkeiten, bei Ehe- und Eheverträgen sowie bei der Anerkennung ausländischer Gerichtsentscheidungen in der Türkei. Unsere erfahrenen Familienrechtsanwälte schützen und verteidigen die Rechte ausländischer Staatsangehöriger nach türkischem Familienrecht engagiert.",
      ru: "Мы представляем клиентов в международных бракоразводных процессах, спорах об опеке и алиментах, при заключении брачных договоров и признании иностранных судебных решений в Турции. Наши опытные адвокаты по семейному праву активно защищают права иностранных граждан в соответствии с турецким семейным законодательством.",
      ar: "نمثل العملاء في قضايا الطلاق الدولية ونزاعات الحضانة والنفقة واتفاقيات ما قبل الزواج وعقود الزواج والاعتراف بأحكام المحاكم الأجنبية في تركيا. يحمي محامو قانون الأسرة المتمرسون لدينا ويدافعون بنشاط عن حقوق المواطنين الأجانب بموجب قانون الأسرة التركي.",
    },
  },
  {
    slug: "ceza-hukuku",
    icon: "Scale",
    title: {
      tr: "Ceza Hukuku",
      en: "Criminal Law",
      de: "Strafrecht",
      ru: "Уголовное право",
      ar: "القانون الجنائي",
    },
    description: {
      tr: "Ceza soruşturmaları ve kovuşturmalarında müvekkilleri Antalya mahkemelerinde etkin biçimde temsil ediyoruz. Dolandırıcılık, uyuşturucu, trafik suçları, mala zarar verme ve diğer ceza davalarında güçlü bir savunma sunarak müvekkillerimizin haklarını koruyoruz.",
      en: "We effectively represent clients before Antalya courts in criminal investigations and prosecutions. We provide a strong defence in fraud, narcotics, traffic offences, property damage, and other criminal cases, safeguarding our clients' rights.",
      de: "Wir vertreten Mandanten wirksam vor den Gerichten in Antalya in strafrechtlichen Ermittlungen und Strafverfahren. Wir bieten eine starke Verteidigung in Fällen von Betrug, Drogendelikten, Verkehrsdelikten, Sachbeschädigung und anderen Strafsachen und schützen so die Rechte unserer Mandanten.",
      ru: "Мы эффективно представляем клиентов в судах Антальи на стадии следствия и судебного преследования. Мы обеспечиваем надёжную защиту по делам о мошенничестве, наркотиках, дорожных правонарушениях, повреждении имущества и другим уголовным делам, отстаивая права наших клиентов.",
      ar: "نمثل العملاء بفعالية أمام محاكم أنطاليا في مراحل التحقيق والملاحقة الجنائية. نقدم دفاعاً قوياً في قضايا الاحتيال والمخدرات والمخالفات المرورية وإتلاف الممتلكات وغيرها من القضايا الجنائية، حمايةً لحقوق موكلينا.",
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
    },
    description: {
      tr: "Türkiye'deki KVKK (Kişisel Verilerin Korunması Kanunu) uyumu, yazılım lisans anlaşmazlıkları, veri ihlali davaları ve yapay zekâ teknolojilerinin hukuki boyutlarında danışmanlık veriyoruz. Teknoloji şirketleri ve startup'lara özel Bilişim Hukuku desteğiyle dijital dönüşümünüzü güvence altına alıyoruz.",
      en: "We advise on KVKK (Turkish Personal Data Protection Law) compliance, software licensing disputes, data breach cases, and the legal aspects of artificial intelligence technologies in Turkey. With dedicated IT law support tailored to technology companies and startups, we help you secure your digital transformation.",
      de: "Wir beraten zur Einhaltung des KVKK (türkisches Datenschutzgesetz), zu Softwarelizenzstreitigkeiten, Datenschutzverletzungen und den rechtlichen Aspekten von KI-Technologien in der Türkei. Mit gezielter IT-Rechtsberatung für Technologieunternehmen und Startups begleiten wir Ihre digitale Transformation sicher.",
      ru: "Мы консультируем по вопросам соблюдения KVKK (турецкого закона о защите персональных данных), спорам по лицензированию программного обеспечения, делам об утечках данных и правовым аспектам технологий искусственного интеллекта в Турции. С профильной поддержкой в сфере IT-права для технологических компаний и стартапов мы помогаем сделать вашу цифровую трансформацию безопасной.",
      ar: "نقدم المشورة بشأن الامتثال لقانون KVKK (قانون حماية البيانات الشخصية التركي) ونزاعات ترخيص البرمجيات وقضايا اختراق البيانات والجوانب القانونية لتقنيات الذكاء الاصطناعي في تركيا. وبدعم قانوني متخصص في قانون تقنية المعلومات لشركات التكنولوجيا والشركات الناشئة، نساعدك على تأمين تحولك الرقمي.",
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
    },
    description: {
      tr: "Türkiye'de yabancı yatırımcıların şirket kurma süreçleri, ticari sözleşmelerin hazırlanması ve müzakeresi, ortaklık anlaşmazlıkları ve ticari davaların takibinde hukuki danışmanlık sunuyoruz. Uluslararası standartlarda Ticaret Hukuku hizmeti ile Türk pazarına güvenli giriş sağlıyoruz.",
      en: "We provide legal advice to foreign investors in Turkey on company formation, drafting and negotiation of commercial contracts, shareholder and partnership disputes, and commercial litigation. We support a safe entry into the Turkish market with commercial law services that meet international standards.",
      de: "Wir bieten Rechtsberatung zu Unternehmensgründungsverfahren für ausländische Investoren in der Türkei, Entwurf und Verhandlung von Handelsverträgen, Gesellschafterstreitigkeiten und Handelsprozessen. Wir ermöglichen einen sicheren Markteintritt in die Türkei mit kommerziellen Rechtsdienstleistungen nach internationalen Standards.",
      ru: "Мы предоставляем юридические консультации по процедурам регистрации компаний для иностранных инвесторов в Турции, составлению и переговорам по коммерческим контрактам, спорам между партнёрами и коммерческим судебным разбирательствам. Мы обеспечиваем безопасный выход на турецкий рынок с коммерческими юридическими услугами международного стандарта.",
      ar: "نقدم استشارات قانونية بشأن إجراءات تأسيس الشركات للمستثمرين الأجانب في تركيا وصياغة العقود التجارية والتفاوض عليها ونزاعات الشراكة والتقاضي التجاري. نيسّر الدخول الآمن إلى السوق التركية بخدمات قانونية تجارية وفق المعايير الدولية.",
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
    },
    description: {
      tr: "Türkiye'de miras kalan gayrimenkul, banka hesabı veya diğer varlıklara ilişkin intikal işlemlerinde yabancı mirasçılara hukuki destek sağlıyoruz. Vasiyetname düzenlenmesi, tereke tespiti, miras paylaşım davaları ve yabancı mahkeme vasiyetnamelerinin Türkiye'de tanınması konularında rehberlik ediyoruz.",
      en: "We provide legal support to foreign heirs with the transfer of real estate, bank accounts, and other assets inherited in Turkey. We guide clients through the preparation of wills, estate inventory, inheritance distribution proceedings, and the recognition of foreign wills in Turkey.",
      de: "Wir bieten ausländischen Erben rechtliche Unterstützung bei der Übertragung von Immobilien, Bankkonten oder anderen in der Türkei geerbten Vermögenswerten. Wir begleiten Mandanten durch Testamentsvorbereitung, Nachlassinventar, Erbverteilungsverfahren und die Anerkennung ausländischer Testamente in der Türkei.",
      ru: "Мы оказываем правовую поддержку иностранным наследникам в отношении передачи недвижимости, банковских счетов или других активов, унаследованных в Турции. Мы сопровождаем клиентов через составление завещания, инвентаризацию наследства, разбирательства по распределению наследства и признание иностранных завещаний в Турции.",
      ar: "نقدم الدعم القانوني للورثة الأجانب فيما يخص نقل العقارات والحسابات المصرفية أو غيرها من الأصول الموروثة في تركيا. نرشد العملاء خلال إعداد الوصايا وجرد التركة وإجراءات توزيع الميراث والاعتراف بالوصايا الأجنبية في تركيا.",
    },
  },
  {
    slug: "is-hukuku",
    icon: "HardHat",
    title: {
      tr: "İş Hukuku",
      en: "Labour Law",
      de: "Arbeitsrecht",
      ru: "Трудовое право",
      ar: "قانون العمل",
    },
    description: {
      tr: "Yabancı çalışanların ve uluslararası şirketlerin iş sözleşmesi uyuşmazlıkları, haksız işten çıkarma, kıdem ve ihbar tazminatı talepleri ile işyeri hukuku konularında danışmanlık veriyoruz. Türkiye'deki expat istihdamında karşılaşılan hukuki sorunlara pratik ve hızlı çözümler üretiyoruz.",
      en: "We advise foreign employees and international companies on employment contract disputes, wrongful termination, severance and notice pay claims, and workplace law. We deliver practical, swift solutions to legal issues encountered in expat employment in Turkey.",
      de: "Wir beraten ausländische Arbeitnehmer und internationale Unternehmen bei Streitigkeiten aus Arbeitsverträgen, unrechtmäßigen Kündigungen, Ansprüchen auf Abfindung (kıdem tazminatı) und Kündigungsfristentschädigung (ihbar tazminatı) sowie zu Fragen des Arbeitsplatzrechts. Wir liefern praktische und schnelle Lösungen für rechtliche Fragen rund um die Beschäftigung von Expats in der Türkei.",
      ru: "Мы консультируем иностранных работников и международные компании по спорам из трудовых договоров, неправомерному увольнению, требованиям о выплате выходного пособия (kıdem tazminatı) и компенсации за несоблюдение срока предупреждения об увольнении (ihbar tazminatı), а также по вопросам трудового права на рабочем месте. Мы предлагаем практические и быстрые решения правовых вопросов, возникающих при трудоустройстве экспатов в Турции.",
      ar: "نقدم المشورة للموظفين الأجانب والشركات الدولية بشأن نزاعات عقود العمل والفصل التعسفي ومطالبات مكافأة نهاية الخدمة وبدل الإشعار وأنظمة العمل الداخلية. نقدم حلولاً عملية وسريعة للمشكلات القانونية التي تواجه التوظيف الخارجي في تركيا.",
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
    },
    description: {
      tr: "Vize reddi, oturma izni iptali, sınır dışı kararları ve diğer idari işlemlere karşı idare mahkemelerinde itiraz davalarını yürütüyoruz. Kamu kurumları önünde yabancı uyruklu müvekkillerin haklarını savunarak hukuka aykırı idari kararların iptali için etkin mücadele veriyoruz.",
      en: "We conduct administrative court appeals against visa refusals, residence permit cancellations, deportation decisions, and other administrative acts. We actively fight for the annulment of unlawful administrative decisions, defending the rights of foreign nationals before public authorities.",
      de: "Wir führen Verwaltungsgerichtsverfahren gegen Visa-Ablehnungen, Widerrufe von Aufenthaltserlaubnissen, Ausweisungsbeschlüsse und andere Verwaltungsakte. Wir kämpfen aktiv für die Aufhebung rechtswidriger Verwaltungsentscheidungen und verteidigen die Rechte ausländischer Staatsangehöriger vor Behörden.",
      ru: "Мы ведём апелляции в административных судах против отказов в визе, аннулирования вида на жительство, решений о депортации и других административных актов. Мы активно добиваемся отмены незаконных административных решений, защищая права иностранных граждан перед государственными органами.",
      ar: "ندير طعون المحاكم الإدارية ضد رفض التأشيرات وإلغاء تصاريح الإقامة وقرارات الترحيل وغيرها من الإجراءات الإدارية. نناضل بنشاط من أجل إلغاء القرارات الإدارية غير المشروعة ونحمي حقوق المواطنين الأجانب أمام السلطات العامة.",
    },
  },
];
