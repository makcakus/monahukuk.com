import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, FileSignature, Video, Send, Scale } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

/**
 * Uzaktan temsil / vekâletname bilgilendirme sayfası.
 * Metinler TBB Reklam Yasağı Yönetmeliği'ne uygun tasvirî dilde tutulmalıdır:
 * süreç anlatımı serbest; başarı vaadi, "ücretsiz", övücü sıfat YOK.
 */

type Locale = "tr" | "en" | "de" | "ru" | "es" | "fr";

type Step = { title: string; body: string };
type Faq = { q: string; a: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  intro1: string;
  intro2: string;
  stepsTitle: string;
  steps: Step[];
  remoteTitle: string;
  remoteItems: string[];
  caveat: string;
  faqTitle: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    metaTitle: "Türkiye'ye Gelmeden Hukuki Temsil",
    metaDescription:
      "Türkiye'deki hukuki işlemlerinizin vekâletname ile uzaktan nasıl yürütülebileceği: konsolosluk ve apostil yolları, süreç adımları ve sık sorulan sorular.",
    kicker: "Vekâletname ile Temsil",
    title: "Türkiye'ye Gelmeden Hukuki Temsil",
    lead: "Türk hukukunda birçok işlem, usulüne uygun düzenlenmiş bir vekâletname ile avukat aracılığıyla yürütülebilir. Bu sayfada sürecin nasıl işlediğini adım adım bulabilirsiniz.",
    intro1:
      "Yurt dışında yaşayan müvekkillerimiz, Türkiye'deki hukuki işlemlerinin önemli bir bölümünü Türkiye'ye gelmeden tamamlayabilmektedir. Bunun hukuki dayanağı vekâletnamedir: noter veya konsolosluk önünde düzenlenen bu belgeyle avukata, belirlenen işlemleri sizin adınıza yürütme yetkisi verilir.",
    intro2:
      "Vekâletname iki yolla düzenlenebilir: bulunduğunuz ülkedeki Türk konsolosluğunda doğrudan Türkçe olarak; veya yerel bir noter önünde düzenlenip 1961 tarihli Lahey Sözleşmesi uyarınca apostil şerhi eklenerek. Yabancı dilde düzenlenen belgelerin Türkiye'de kullanılabilmesi için yeminli tercümesi yaptırılır.",
    stepsTitle: "Süreç nasıl işler?",
    steps: [
      {
        title: "Ön görüşme",
        body: "Talebiniz çevrim içi bir görüşmede değerlendirilir; işleminiz için gereken vekâletname içeriği ve belgeler belirlenir. Gayrimenkul işlemleri, aile davaları ve tanıma-tenfiz süreçlerinde vekâletnamenin fotoğraflı ve özel yetkili olması gerekir.",
      },
      {
        title: "Vekâletnamenin düzenlenmesi",
        body: "Vekâletname, bulunduğunuz ülkedeki Türk konsolosluğunda veya yerel noter önünde (apostil şerhiyle) düzenlenir. Gerekli metin tarafımızca hazırlanıp size iletilir; pasaportunuzun yeminli tercümesi ve yabancı kimlik numarası temini de bu aşamada tamamlanır.",
      },
      {
        title: "Belgelerin iletilmesi",
        body: "İşlemlerin çoğunda vekâletnamenin ıslak imzalı aslı arandığından, belge kargo ile büromuza gönderilir. Alındığında içerik birlikte teyit edilir.",
      },
      {
        title: "İşlemlerin yürütülmesi ve bilgilendirme",
        body: "İşlemler büromuz tarafından ilgili kurumlar ve gerektiğinde mahkemeler nezdinde yürütülür. Her önemli aşamada e-posta veya telefonla bilgilendirilirsiniz; belgelerin örnekleri talebiniz hâlinde paylaşılır.",
      },
    ],
    remoteTitle: "Vekâletname ile uzaktan yürütülebilen işlemlerden bazıları",
    remoteItems: [
      "Taşınmaz alım-satımı ve tapu işlemleri",
      "Şirket kuruluşu ve ticari sözleşme süreçleri",
      "Dava açılması ve takibi; yabancı mahkeme kararlarının tanınması ve tenfizi",
      "Miras intikali ve tereke işlemleri",
      "Kira sözleşmeleri ve tahliye süreçleri",
      "Vergi numarası alınması ve resmî kurum başvuruları",
    ],
    caveat:
      "Bazı işlemler nitelikleri gereği şahsen katılım gerektirebilir; örneğin ikamet izni ve vatandaşlık başvurularında biyometrik veri alınması veya bazı bankaların hesap açılışında şahsen başvuru uygulamaları. İşleminizin uzaktan yürütülüp yürütülemeyeceği ön görüşmede açıkça değerlendirilir.",
    faqTitle: "Sık sorulan sorular",
    faqs: [
      {
        q: "Vekâletname hangi dilde düzenlenmeli?",
        a: "Türk konsolosluğunda düzenlenen vekâletnameler Türkçedir ve doğrudan kullanılabilir. Yerel noter önünde yabancı dilde düzenlenen vekâletnameler için apostil şerhi ve Türkiye'de yeminli tercüme gerekir.",
      },
      {
        q: "Apostil nedir, nereden alınır?",
        a: "Apostil, 1961 Lahey Sözleşmesi'ne taraf ülkelerde düzenlenen resmî belgelerin diğer taraf ülkelerde geçerliliğini sağlayan şerhtir. Hangi makamın apostil verdiği ülkeye göre değişir; genellikle adalet bakanlıkları, mahkemeler veya valilik benzeri makamlardır.",
      },
      {
        q: "Vekâletnameyi sonlandırabilir miyim?",
        a: "Evet. Vekâlet veren, vekâletnameyi her zaman azil yoluyla sonlandırabilir; azil konsolosluk veya noter kanalıyla yapılır ve ilgili kurumlara bildirilir.",
      },
    ],
    ctaTitle: "Sürecinizi birlikte değerlendirelim",
    ctaBody: "İşleminizin uzaktan yürütülüp yürütülemeyeceğini ve gereken belgeleri netleştirmek için bize ulaşın.",
    ctaButton: "İletişime geçin",
  },
  en: {
    metaTitle: "Legal Representation in Turkey Without Traveling",
    metaDescription:
      "How your legal matters in Turkey can be handled remotely under a power of attorney: consulate and apostille routes, step-by-step process, and frequently asked questions.",
    kicker: "Representation by Power of Attorney",
    title: "Legal Representation in Turkey Without Traveling",
    lead: "Under Turkish law, many transactions can be carried out through a lawyer acting under a duly executed power of attorney (PoA). This page explains how the process works, step by step.",
    intro1:
      "Clients living abroad can complete a substantial part of their legal transactions in Turkey without travelling here. The legal basis is the power of attorney: a document executed before a notary or consulate that authorises a lawyer to carry out defined transactions on your behalf.",
    intro2:
      "A PoA can be executed in two ways: directly in Turkish at a Turkish consulate in your country of residence, or before a local notary with an apostille added under the 1961 Hague Convention. Documents executed in a foreign language are used in Turkey with a sworn translation.",
    stepsTitle: "How the process works",
    steps: [
      {
        title: "Initial meeting",
        body: "Your matter is assessed in an online meeting; the required PoA content and supporting documents are identified. For real estate transactions, family law cases, and proceedings to recognise and enforce a foreign judgment, the PoA must bear your photograph and contain specific authorisations.",
      },
      {
        title: "Executing the power of attorney",
        body: "The PoA is executed at the Turkish consulate in your country or before a local notary (with apostille). We prepare the required wording and send it to you; the sworn translation of your passport and your Turkish foreigner ID number are also obtained at this stage.",
      },
      {
        title: "Sending the documents",
        body: "As most transactions require the original signed PoA, the document is couriered to our office. Its content is confirmed together upon receipt.",
      },
      {
        title: "Carrying out the work and reporting",
        body: "The transactions are carried out by our office before the relevant authorities and, where necessary, the courts. You are informed by email or phone at every significant stage, and copies of documents are shared on request.",
      },
    ],
    remoteTitle: "Examples of matters that can be handled remotely under a PoA",
    remoteItems: [
      "Real estate purchases, sales, and land registry transactions",
      "Company formation and commercial contract processes",
      "Filing and conducting litigation; recognition and enforcement of foreign judgments",
      "Transfer of inherited assets and estate proceedings",
      "Lease agreements and eviction proceedings",
      "Obtaining a tax number and applications before public authorities",
    ],
    caveat:
      "Some procedures may require personal attendance by their nature — for example, the collection of biometric data in residence permit and citizenship applications, or in-person requirements applied by some banks when opening accounts. Whether your matter can be handled remotely is assessed clearly at the initial meeting.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "In which language should the PoA be executed?",
        a: "PoAs executed at a Turkish consulate are in Turkish and can be used directly. PoAs executed before a local notary in a foreign language require an apostille and a sworn translation in Turkey.",
      },
      {
        q: "What is an apostille and where do I obtain it?",
        a: "An apostille is a certificate under the 1961 Hague Convention that makes official documents issued in one member state valid in the others. The issuing authority varies by country — typically ministries of justice, courts, or prefecture-type authorities.",
      },
      {
        q: "Can I revoke the power of attorney?",
        a: "Yes. The principal may revoke the PoA at any time; revocation is made through a consulate or a notary and notified to the relevant authorities.",
      },
    ],
    ctaTitle: "Let's assess your matter together",
    ctaBody: "Contact us to clarify whether your transaction can be handled remotely and which documents are required.",
    ctaButton: "Contact us",
  },
  de: {
    metaTitle: "Rechtliche Vertretung in der Türkei ohne Anreise",
    metaDescription:
      "Wie Ihre Rechtsangelegenheiten in der Türkei per Vollmacht aus der Ferne abgewickelt werden können: Konsulats- und Apostille-Weg, Verfahrensschritte und häufige Fragen.",
    kicker: "Vertretung per Vollmacht",
    title: "Rechtliche Vertretung in der Türkei ohne Anreise",
    lead: "Nach türkischem Recht können viele Rechtsgeschäfte durch einen Rechtsanwalt mit ordnungsgemäß errichteter Vollmacht durchgeführt werden. Diese Seite erklärt den Ablauf Schritt für Schritt.",
    intro1:
      "Im Ausland lebende Mandanten können einen erheblichen Teil ihrer Rechtsgeschäfte in der Türkei abwickeln, ohne anzureisen. Rechtsgrundlage ist die Vollmacht: eine vor einem Notar oder Konsulat errichtete Urkunde, die den Rechtsanwalt ermächtigt, bestimmte Geschäfte in Ihrem Namen vorzunehmen.",
    intro2:
      "Die Vollmacht kann auf zwei Wegen errichtet werden: unmittelbar auf Türkisch beim türkischen Konsulat in Ihrem Aufenthaltsland oder vor einem örtlichen Notar mit Apostille nach dem Haager Übereinkommen von 1961. Fremdsprachige Urkunden werden in der Türkei mit beglaubigter Übersetzung verwendet.",
    stepsTitle: "So läuft das Verfahren ab",
    steps: [
      {
        title: "Erstgespräch",
        body: "Ihr Anliegen wird in einem Online-Gespräch bewertet; Inhalt der erforderlichen Vollmacht und Unterlagen werden festgelegt. Für Immobiliengeschäfte, familienrechtliche Verfahren und Verfahren zur Anerkennung und Vollstreckung ausländischer Urteile muss die Vollmacht ein Lichtbild und besondere Befugnisse enthalten.",
      },
      {
        title: "Errichtung der Vollmacht",
        body: "Die Vollmacht wird beim türkischen Konsulat oder vor einem örtlichen Notar (mit Apostille) errichtet. Den erforderlichen Text bereiten wir vor und übermitteln ihn Ihnen; die beglaubigte Übersetzung Ihres Passes und die türkische Ausländer-Identifikationsnummer werden ebenfalls in dieser Phase besorgt.",
      },
      {
        title: "Übermittlung der Unterlagen",
        body: "Da die meisten Geschäfte das unterschriebene Original der Vollmacht erfordern, wird die Urkunde per Kurier an unsere Kanzlei gesandt. Nach Eingang wird der Inhalt gemeinsam bestätigt.",
      },
      {
        title: "Durchführung und Information",
        body: "Die Geschäfte werden von unserer Kanzlei bei den zuständigen Behörden und erforderlichenfalls Gerichten durchgeführt. Über jeden wesentlichen Schritt werden Sie per E-Mail oder Telefon informiert; Kopien der Unterlagen erhalten Sie auf Wunsch.",
      },
    ],
    remoteTitle: "Beispiele für per Vollmacht aus der Ferne abwickelbare Angelegenheiten",
    remoteItems: [
      "Immobilienkauf und -verkauf sowie Grundbuchgeschäfte",
      "Gesellschaftsgründung und Handelsvertragsprozesse",
      "Klageerhebung und Prozessführung; Anerkennung und Vollstreckung ausländischer Urteile",
      "Erbschaftsübergang und Nachlassverfahren",
      "Mietverträge und Räumungsverfahren",
      "Beantragung einer Steuernummer und Behördenanträge",
    ],
    caveat:
      "Manche Verfahren erfordern ihrer Natur nach persönliche Anwesenheit — etwa die Erfassung biometrischer Daten bei Aufenthalts- und Einbürgerungsanträgen oder die Praxis mancher Banken bei der Kontoeröffnung. Ob Ihre Angelegenheit aus der Ferne abgewickelt werden kann, wird im Erstgespräch klar bewertet.",
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        q: "In welcher Sprache sollte die Vollmacht errichtet werden?",
        a: "Beim türkischen Konsulat errichtete Vollmachten sind auf Türkisch und direkt verwendbar. Vor einem örtlichen Notar fremdsprachig errichtete Vollmachten benötigen eine Apostille und in der Türkei eine beglaubigte Übersetzung.",
      },
      {
        q: "Was ist eine Apostille und wo erhalte ich sie?",
        a: "Die Apostille ist ein Vermerk nach dem Haager Übereinkommen von 1961, der öffentlichen Urkunden eines Vertragsstaats Gültigkeit in den anderen verschafft. Die zuständige Stelle variiert je nach Land — üblicherweise Justizministerien, Gerichte oder präfekturähnliche Behörden.",
      },
      {
        q: "Kann ich die Vollmacht widerrufen?",
        a: "Ja. Der Vollmachtgeber kann die Vollmacht jederzeit widerrufen; der Widerruf erfolgt über das Konsulat oder einen Notar und wird den zuständigen Stellen mitgeteilt.",
      },
    ],
    ctaTitle: "Lassen Sie uns Ihr Anliegen gemeinsam bewerten",
    ctaBody: "Kontaktieren Sie uns, um zu klären, ob Ihr Geschäft aus der Ferne abgewickelt werden kann und welche Unterlagen erforderlich sind.",
    ctaButton: "Kontakt aufnehmen",
  },
  ru: {
    metaTitle: "Юридическое представительство в Турции без приезда",
    metaDescription:
      "Как ваши юридические дела в Турции могут вестись дистанционно по доверенности: консульский путь и апостиль, этапы процесса и частые вопросы.",
    kicker: "Представительство по доверенности",
    title: "Юридическое представительство в Турции без приезда",
    lead: "По турецкому праву многие действия могут совершаться адвокатом на основании надлежащим образом оформленной доверенности. На этой странице процесс описан шаг за шагом.",
    intro1:
      "Наши клиенты, живущие за рубежом, могут завершить значительную часть своих юридических дел в Турции, не приезжая сюда. Правовое основание — доверенность: документ, оформленный у нотариуса или в консульстве, которым адвокату предоставляется полномочие совершать определённые действия от вашего имени.",
    intro2:
      "Доверенность может быть оформлена двумя способами: непосредственно на турецком языке в турецком консульстве в стране вашего проживания либо у местного нотариуса с проставлением апостиля согласно Гаагской конвенции 1961 года. Документы на иностранном языке используются в Турции с присяжным переводом.",
    stepsTitle: "Как проходит процесс",
    steps: [
      {
        title: "Предварительная встреча",
        body: "Ваш вопрос оценивается на онлайн-встрече; определяются содержание доверенности и необходимые документы. Для сделок с недвижимостью, семейных дел и производств о признании и приведении в исполнение иностранных судебных решений доверенность должна содержать фотографию и специальные полномочия.",
      },
      {
        title: "Оформление доверенности",
        body: "Доверенность оформляется в турецком консульстве или у местного нотариуса (с апостилем). Необходимый текст мы готовим и направляем вам; на этом же этапе выполняется присяжный перевод паспорта и получается турецкий идентификационный номер иностранца.",
      },
      {
        title: "Передача документов",
        body: "Поскольку для большинства действий требуется оригинал доверенности с собственноручной подписью, документ направляется в нашу фирму курьерской службой. По получении содержание подтверждается совместно.",
      },
      {
        title: "Ведение дел и информирование",
        body: "Действия выполняются нашей фирмой в соответствующих органах и, при необходимости, в судах. О каждом существенном этапе вы информируетесь по электронной почте или телефону; копии документов предоставляются по запросу.",
      },
    ],
    remoteTitle: "Примеры дел, которые можно вести дистанционно по доверенности",
    remoteItems: [
      "Купля-продажа недвижимости и операции в кадастровом управлении (ТАПУ)",
      "Регистрация компаний и договорные процессы",
      "Подача исков и ведение судебных дел; признание и исполнение иностранных решений",
      "Оформление наследства и наследственные процедуры",
      "Договоры аренды и процессы выселения",
      "Получение налогового номера и обращения в государственные органы",
    ],
    caveat:
      "Некоторые процедуры по своей природе могут требовать личного участия — например, сдача биометрических данных при заявлениях на вид на жительство и гражданство или практика некоторых банков при открытии счетов. Возможность дистанционного ведения вашего дела ясно оценивается на предварительной встрече.",
    faqTitle: "Частые вопросы",
    faqs: [
      {
        q: "На каком языке оформлять доверенность?",
        a: "Доверенности, оформленные в турецком консульстве, составляются на турецком языке и используются напрямую. Для доверенностей, оформленных у местного нотариуса на иностранном языке, требуются апостиль и присяжный перевод в Турции.",
      },
      {
        q: "Что такое апостиль и где его получить?",
        a: "Апостиль — это отметка по Гаагской конвенции 1961 года, придающая официальным документам одного государства-участника силу в других. Компетентный орган зависит от страны — обычно это министерства юстиции, суды или органы типа префектур.",
      },
      {
        q: "Могу ли я отозвать доверенность?",
        a: "Да. Доверитель может отозвать доверенность в любое время; отзыв оформляется через консульство или нотариуса и доводится до сведения соответствующих органов.",
      },
    ],
    ctaTitle: "Оценим ваш вопрос вместе",
    ctaBody: "Свяжитесь с нами, чтобы уточнить, можно ли вести ваше дело дистанционно и какие документы потребуются.",
    ctaButton: "Связаться с нами",
  },
  es: {
    metaTitle: "Representación legal en Turquía sin viajar",
    metaDescription:
      "Cómo pueden gestionarse a distancia sus asuntos legales en Turquía mediante poder notarial: vía consular y apostilla, pasos del proceso y preguntas frecuentes.",
    kicker: "Representación mediante poder",
    title: "Representación legal en Turquía sin viajar",
    lead: "Conforme al derecho turco, muchas gestiones pueden realizarse a través de un abogado con un poder debidamente otorgado. Esta página explica el proceso paso a paso.",
    intro1:
      "Nuestros clientes residentes en el extranjero pueden completar una parte importante de sus gestiones legales en Turquía sin desplazarse. La base jurídica es el poder: un documento otorgado ante notario o consulado que faculta al abogado para realizar en su nombre las gestiones determinadas.",
    intro2:
      "El poder puede otorgarse de dos maneras: directamente en turco en el consulado turco de su país de residencia, o ante un notario local añadiendo la apostilla conforme al Convenio de La Haya de 1961. Los documentos otorgados en lengua extranjera se utilizan en Turquía con traducción jurada.",
    stepsTitle: "¿Cómo funciona el proceso?",
    steps: [
      {
        title: "Reunión inicial",
        body: "Su asunto se evalúa en una reunión en línea; se determinan el contenido del poder y los documentos necesarios. Para operaciones inmobiliarias, asuntos de derecho de familia y procedimientos de reconocimiento y ejecución de sentencias extranjeras, el poder debe llevar fotografía y facultades especiales.",
      },
      {
        title: "Otorgamiento del poder",
        body: "El poder se otorga en el consulado turco de su país o ante un notario local (con apostilla). Preparamos el texto necesario y se lo remitimos; en esta fase se completan también la traducción jurada del pasaporte y la obtención del número de identidad de extranjero.",
      },
      {
        title: "Envío de los documentos",
        body: "Como la mayoría de las gestiones exigen el original firmado del poder, el documento se envía por mensajería a nuestro despacho. A su recepción, el contenido se confirma conjuntamente.",
      },
      {
        title: "Tramitación e información",
        body: "Las gestiones las realiza nuestro despacho ante los organismos competentes y, cuando procede, ante los tribunales. Se le informa por correo electrónico o teléfono en cada fase relevante; las copias de los documentos se comparten a petición.",
      },
    ],
    remoteTitle: "Ejemplos de asuntos gestionables a distancia mediante poder",
    remoteItems: [
      "Compraventa de inmuebles y trámites registrales (TAPU)",
      "Constitución de sociedades y procesos contractuales mercantiles",
      "Interposición y seguimiento de demandas; reconocimiento y ejecución de sentencias extranjeras",
      "Transmisiones hereditarias y procedimientos sucesorios",
      "Contratos de arrendamiento y procedimientos de desahucio",
      "Obtención del número fiscal y solicitudes ante organismos públicos",
    ],
    caveat:
      "Algunos trámites pueden exigir por su naturaleza la comparecencia personal — por ejemplo, la toma de datos biométricos en solicitudes de residencia y ciudadanía, o la práctica de algunos bancos al abrir cuentas. En la reunión inicial se evalúa con claridad si su asunto puede gestionarse a distancia.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿En qué idioma debe otorgarse el poder?",
        a: "Los poderes otorgados en el consulado turco se redactan en turco y pueden usarse directamente. Los otorgados ante notario local en lengua extranjera requieren apostilla y traducción jurada en Turquía.",
      },
      {
        q: "¿Qué es la apostilla y dónde se obtiene?",
        a: "La apostilla es la certificación del Convenio de La Haya de 1961 que da validez a los documentos oficiales de un Estado parte en los demás. La autoridad competente varía según el país — normalmente ministerios de justicia, tribunales u órganos de tipo prefectura.",
      },
      {
        q: "¿Puedo revocar el poder?",
        a: "Sí. El poderdante puede revocar el poder en cualquier momento; la revocación se realiza ante el consulado o notario y se comunica a los organismos pertinentes.",
      },
    ],
    ctaTitle: "Evaluemos juntos su asunto",
    ctaBody: "Contáctenos para aclarar si su gestión puede realizarse a distancia y qué documentos se requieren.",
    ctaButton: "Contáctenos",
  },
  fr: {
    metaTitle: "Représentation juridique en Turquie sans vous déplacer",
    metaDescription:
      "Comment vos démarches juridiques en Turquie peuvent être menées à distance par procuration : voie consulaire et apostille, étapes du processus et questions fréquentes.",
    kicker: "Représentation par procuration",
    title: "Représentation juridique en Turquie sans vous déplacer",
    lead: "En droit turc, de nombreuses démarches peuvent être accomplies par un avocat muni d'une procuration régulièrement établie. Cette page explique le déroulement du processus, étape par étape.",
    intro1:
      "Nos clients résidant à l'étranger peuvent accomplir une part importante de leurs démarches juridiques en Turquie sans s'y rendre. Le fondement juridique en est la procuration : un acte établi devant notaire ou consulat, qui habilite l'avocat à accomplir en votre nom les opérations déterminées.",
    intro2:
      "La procuration peut être établie de deux manières : directement en turc auprès du consulat de Turquie de votre pays de résidence, ou devant un notaire local avec apostille conformément à la Convention de La Haye de 1961. Les actes établis en langue étrangère sont utilisés en Turquie avec une traduction assermentée.",
    stepsTitle: "Comment se déroule le processus ?",
    steps: [
      {
        title: "Entretien initial",
        body: "Votre demande est évaluée lors d'un entretien en ligne ; le contenu de la procuration et les pièces nécessaires sont déterminés. Pour les opérations immobilières, les affaires de droit de la famille et les procédures de reconnaissance et d'exécution de jugements étrangers, la procuration doit comporter une photographie et des pouvoirs spéciaux.",
      },
      {
        title: "Établissement de la procuration",
        body: "La procuration est établie au consulat de Turquie de votre pays ou devant un notaire local (avec apostille). Nous préparons le texte requis et vous le transmettons ; la traduction assermentée de votre passeport et l'obtention du numéro d'identification d'étranger sont également réalisées à ce stade.",
      },
      {
        title: "Transmission des documents",
        body: "La plupart des opérations exigeant l'original signé de la procuration, l'acte est envoyé par courrier express à notre cabinet. À réception, son contenu est confirmé ensemble.",
      },
      {
        title: "Accomplissement des démarches et information",
        body: "Les démarches sont menées par notre cabinet auprès des autorités compétentes et, le cas échéant, des tribunaux. Vous êtes informé par e-mail ou téléphone à chaque étape importante ; les copies des documents sont communiquées sur demande.",
      },
    ],
    remoteTitle: "Exemples de démarches réalisables à distance par procuration",
    remoteItems: [
      "Achat et vente immobiliers et opérations au registre foncier (TAPU)",
      "Constitution de sociétés et processus contractuels commerciaux",
      "Introduction et suivi d'actions en justice ; reconnaissance et exécution des jugements étrangers",
      "Transmission successorale et procédures de succession",
      "Baux et procédures d'expulsion",
      "Obtention du numéro fiscal et démarches auprès des administrations",
    ],
    caveat:
      "Certaines procédures peuvent, par nature, exiger une présence personnelle — par exemple le relevé des données biométriques pour les demandes de permis de séjour et de nationalité, ou la pratique de certaines banques lors de l'ouverture de comptes. La possibilité de mener votre démarche à distance est évaluée clairement lors de l'entretien initial.",
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        q: "Dans quelle langue la procuration doit-elle être établie ?",
        a: "Les procurations établies au consulat de Turquie sont rédigées en turc et directement utilisables. Celles établies devant un notaire local en langue étrangère nécessitent une apostille et une traduction assermentée en Turquie.",
      },
      {
        q: "Qu'est-ce que l'apostille et où l'obtenir ?",
        a: "L'apostille est la certification prévue par la Convention de La Haye de 1961, qui confère aux actes publics d'un État partie leur validité dans les autres. L'autorité compétente varie selon les pays — généralement les ministères de la justice, les tribunaux ou des autorités de type préfectoral.",
      },
      {
        q: "Puis-je révoquer la procuration ?",
        a: "Oui. Le mandant peut révoquer la procuration à tout moment ; la révocation s'effectue auprès du consulat ou par voie notariale et est notifiée aux autorités concernées.",
      },
    ],
    ctaTitle: "Évaluons ensemble votre démarche",
    ctaBody: "Contactez-nous pour déterminer si votre opération peut être menée à distance et quelles pièces sont nécessaires.",
    ctaButton: "Nous contacter",
  },
};

function pickCopy(locale: string): Copy {
  return COPY[(locale as Locale) in COPY ? (locale as Locale) : "en"];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = pickCopy(locale);
  return pageMetadata({
    locale,
    path: "/remote-representation",
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

const STEP_ICONS = [Video, FileSignature, Send, Scale];

export default async function RemoteRepresentationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pickCopy(locale);

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} lead={c.lead} />

      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-ink-soft dark:text-cream-200 leading-relaxed">{c.intro1}</p>
        <p className="mt-4 text-ink-soft dark:text-cream-200 leading-relaxed">{c.intro2}</p>

        {/* Süreç adımları */}
        <h2 className="mt-14 font-display text-2xl md:text-3xl text-navy-900 dark:text-cream-50">
          {c.stepsTitle}
        </h2>
        <ol className="mt-8 space-y-8">
          {c.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Scale;
            return (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50 dark:bg-gold-500 dark:text-navy-950">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium text-navy-900 dark:text-cream-50">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Uzaktan yürütülebilen işlemler */}
        <h2 className="mt-14 font-display text-2xl md:text-3xl text-navy-900 dark:text-cream-50">
          {c.remoteTitle}
        </h2>
        <ul className="mt-6 space-y-3">
          {c.remoteItems.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span className="text-ink-soft dark:text-cream-200 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg border border-cream-200 bg-cream-100/60 dark:border-navy-700 dark:bg-navy-900 px-5 py-4 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
          {c.caveat}
        </p>

        {/* SSS */}
        <h2 className="mt-14 font-display text-2xl md:text-3xl text-navy-900 dark:text-cream-50">
          {c.faqTitle}
        </h2>
        <div className="mt-6 divide-y divide-cream-200 dark:divide-navy-800 border-y border-cream-200 dark:border-navy-800">
          {c.faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-navy-900 dark:text-cream-50 flex items-center justify-between gap-4">
                {f.q}
                <span className="text-gold-600 transition-transform group-open:rotate-90">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-xl border border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-900 px-6 py-8 md:px-8 text-center">
          <h2 className="font-display text-2xl text-navy-900 dark:text-cream-50">
            {c.ctaTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-soft dark:text-cream-300">{c.ctaBody}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gold-400 px-6 py-3 text-sm font-medium text-navy-950 hover:bg-gold-500 transition-colors"
          >
            {c.ctaButton}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
