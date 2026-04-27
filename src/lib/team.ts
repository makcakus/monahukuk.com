export type Member = {
  name: string;
  role: { en: string; tr: string };
  education: string;
  bar: string;
  areas: { en: string; tr: string }[];
  bio: { en: string; tr: string };
};

export const TEAM: Member[] = [
  {
    name: "Av. Mustafa AKÇAKUŞ",
    role: { en: "Partner Attorney", tr: "Ortak Avukat" },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { en: "IT & AI Law", tr: "Bilişim & Yapay Zekâ Hukuku" },
      { en: "Data Protection (KVKK)", tr: "Kişisel Veri Koruma (KVKK)" },
      { en: "Real Estate", tr: "Gayrimenkul" },
      { en: "Turkish Citizenship", tr: "Türk Vatandaşlığı" },
      { en: "Immigration", tr: "Yabancılar Hukuku" },
    ],
    bio: {
      en: "Founding partner of Mona Hukuk, Mustafa specialises in advising technology companies and international clients on IT law, artificial intelligence regulation, and data protection compliance in Turkey.",
      tr: "Mona Hukuk'un kurucu ortağı Mustafa, bilişim şirketleri ve uluslararası müvekkillere Türkiye'de BT hukuku, yapay zekâ düzenlemeleri ve veri koruma uyumu konularında danışmanlık vermektedir.",
    },
  },
  {
    name: "Av. Aykut ACAR",
    role: { en: "Partner Attorney", tr: "Ortak Avukat" },
    education: "Akdeniz University / Akdeniz Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu",
    areas: [
      { en: "Commercial & Corporate Law", tr: "Ticaret & Şirketler Hukuku" },
      { en: "Real Estate", tr: "Gayrimenkul" },
      { en: "Family Law", tr: "Aile Hukuku" },
      { en: "Inheritance", tr: "Miras Hukuku" },
      { en: "Enforcement Law", tr: "İcra & İflas Hukuku" },
    ],
    bio: {
      en: "Founding partner with over a decade of practice, Aykut advises foreign investors and individuals on real estate transactions, corporate matters, family disputes, and enforcement proceedings.",
      tr: "On yılı aşkın deneyimiyle kurucu ortak Aykut, yabancı yatırımcılara ve bireylere gayrimenkul işlemleri, ticari davalar, aile uyuşmazlıkları ve icra takipleri konularında hizmet vermektedir.",
    },
  },
  {
    name: "Av. Murat BOSTAN",
    role: { en: "Senior Attorney", tr: "Kıdemli Avukat" },
    education: "Selçuk University / Selçuk Üniversitesi Hukuk Fakültesi, 2014",
    bar: "Antalya Barosu (2023'ten itibaren)",
    areas: [
      { en: "Criminal Law", tr: "Ceza Hukuku" },
      { en: "Labour Law", tr: "İş Hukuku" },
      { en: "Real Estate Law", tr: "Gayrimenkul Hukuku" },
    ],
    bio: {
      en: "Murat began his career at the Istanbul Bar Association and has been representing clients before Antalya courts since 2023, focusing on criminal defence, labour disputes, and property matters.",
      tr: "Kariyerine İstanbul Barosu'nda başlayan Murat, 2023'ten bu yana Antalya mahkemelerinde müvekkilleri temsil etmekte; ceza savunması, iş uyuşmazlıkları ve taşınmaz davalarına odaklanmaktadır.",
    },
  },
  {
    name: "Av. Mehmet SİMAV",
    role: { en: "Attorney", tr: "Avukat" },
    education: "Istanbul University / İstanbul Üniversitesi Hukuk Fakültesi, 2022",
    bar: "Antalya Barosu",
    areas: [
      { en: "Criminal Law", tr: "Ceza Hukuku" },
      { en: "Commercial Law", tr: "Ticaret Hukuku" },
      { en: "Family Law", tr: "Aile Hukuku" },
    ],
    bio: {
      en: "Mehmet brings a rigorous, client-focused approach to litigation and dispute resolution, representing individuals and businesses in criminal proceedings, commercial disputes, and family matters.",
      tr: "Mehmet, dava ve uyuşmazlık çözümüne titiz ve müvekkil odaklı bir yaklaşım getirerek bireyleri ve şirketleri ceza davaları, ticari uyuşmazlıklar ve aile hukuku meselelerinde temsil etmektedir.",
    },
  },
  {
    name: "Stj. Av. Tuğba Yazar",
    role: { en: "Trainee Attorney", tr: "Stajyer Avukat" },
    education: "Süleyman Demirel University / SDÜ Hukuk Fakültesi, 2023",
    bar: "Antalya Barosu (stajyer)",
    areas: [
      { en: "Health Law", tr: "Sağlık Hukuku" },
      { en: "Immigration Law", tr: "Yabancılar & Göç Hukuku" },
      { en: "Family Law", tr: "Aile Hukuku" },
      { en: "Criminal Law", tr: "Ceza Hukuku" },
    ],
    bio: {
      en: "Tuğba is actively developing her expertise across health law, immigration, family law, and criminal liability matters, providing support to foreign clients navigating Turkish legal processes.",
      tr: "Tuğba; sağlık hukuku, yabancılar hukuku, aile hukuku ve ceza sorumluluğu alanlarında uzmanlaşmakta, yabancı müvekkillerin Türk hukuki süreçlerinde yol almalarına destek olmaktadır.",
    },
  },
];
