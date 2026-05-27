/**
 * One-off newsletter send to a single subscriber
 * Usage: node scripts/send-newsletter-once.mjs
 */
import { Resend } from "resend";

const RESEND_API_KEY = "re_Rq72R2U5_675HLf8E3MqJJYkQwbfjLSH9";
const FROM = "MONA HUKUK <newsletter@monahukuk.com>";
const TO = "av.mervekizik@gmail.com";
const UNSUBSCRIBE_TOKEN = "14c05952b374520e4223f113345ce97103bc3b673ea9f6c4fba3290612890725";
const SITE_URL = "https://monahukuk.com";

const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${UNSUBSCRIBE_TOKEN}`;

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hukuki Haberler — 18 Mayıs 2026</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:24px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#1a1a2e;padding:28px 36px;">
    <div style="color:#c8a96e;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">MONA HUKUK</div>
    <div style="color:#ffffff;font-size:22px;font-weight:bold;">Hukuki Haberler</div>
    <div style="color:#a0a0b0;font-size:13px;margin-top:4px;">18 Mayıs 2026</div>
  </td></tr>

  <!-- Intro -->
  <tr><td style="padding:28px 36px 0 36px;">
    <p style="margin:0 0 16px 0;color:#333;font-size:15px;line-height:1.7;">
      18 Mayıs 2026 haftasında Türk hukukunda dikkat çekici gelişmeler yaşandı. Adalet Bakanı Gürlek, 30 milyondan fazla yüksek mahkeme kararına yapay zekâ destekli erişim sağlayacak <strong>UYAP Al Karar Destek Sistemi</strong>'ni duyurdu. <strong>Türkiye Barolar Birliği</strong>, yabancı sermayeli şirketlere hukuk danışmanlığı yolunu açan kanun teklifine sert tepki gösterdi. <strong>Resmî Gazete</strong>'de konkordato, icra personeli ve gemi acenteleri yönetmelikleri değiştirildi.
    </p>
    <hr style="border:none;border-top:1px solid #e8e8e8;margin:20px 0;">
  </td></tr>

  <!-- Section: Hukukçunun Gündemi -->
  <tr><td style="padding:0 36px;">
    <h2 style="color:#1a1a2e;font-size:18px;margin:0 0 20px 0;padding-bottom:8px;border-bottom:2px solid #c8a96e;">Hukukçunun Gündemi</h2>

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">UYAP Al Karar Sistemi: 30 Milyon Mahkeme Kararına Yapay Zekâ Erişimi</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 10px 0;">
      <strong>Adalet Bakanı Akın Gürlek</strong>, <strong>"UYAP Al Karar Destek Sistemi"</strong>nin hayata geçirileceğini duyurdu. Yeni yapay zekâ modülü; 30 milyondan fazla yüksek mahkeme kararının saniyeler içinde taranmasını, hâkim ve savcılar için emsal araştırmalarının hızlandırılmasını, yüzlerce sayfalık dava dosyalarının otomatik özetlenmesini ve gerekçeli karar taslakları hazırlanmasını mümkün kılacak.
    </p>
    <p style="color:#555;font-size:13px;line-height:1.7;margin:0 0 20px 0;background:#f9f9f9;padding:10px 14px;border-left:3px solid #c8a96e;">
      <strong>Pratikte ne anlama geliyor:</strong> Sistemin hâkim ve savcılara sunulması, "emsal yoktur" gerekçeli reddiyaların azalması anlamına gelebilir. AI destekli karar alma süreçlerine karşı usul hukuku itirazları ve algoritmik önyargı tartışmaları önümüzdeki dönemin gündemine girebilir.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">TBB: Yabancı Sermayeli Şirkete Hukuk Danışmanlığı Yasası Avukatlığı Tehdit Ediyor</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 10px 0;">
      <strong>Türkiye Barolar Birliği (TBB)</strong>, TBMM'ye sunulan bir kanun teklifiyle <strong>4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu</strong>'na eklenmesi öngörülen düzenlemeye karşı basın açıklaması yayımladı. Teklif, yabancı sermayeli şirket bünyesindeki hukuk danışmanlarının Türkiye hukuku kapsamında danışmanlık yapabilmesini hedefliyor. TBB açıklamasında söz konusu düzenlemenin "savunmanın bağımsızlığına, avukatlık mesleğinin özerkliğine ve hukuk devleti ilkesine tamamen aykırı" olduğu belirtildi.
    </p>
    <p style="color:#555;font-size:13px;line-height:1.7;margin:0 0 20px 0;background:#f9f9f9;padding:10px 14px;border-left:3px solid #c8a96e;">
      <strong>Kimleri etkiliyor:</strong> Yabancı sermayeli şirketlerle çalışan avukatlar, uluslararası iş hukuku alanındaki bürolar ve mesleki tekel koruması açısından tüm baronun gündemine girmiş bir teklif.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">12. Yargı Paketi ve Avukata Şiddet: Baro Başkanları Niğde'de Toplandı</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      <strong>Genişletilmiş İç Anadolu Bölge Baro Başkanları Toplantısı</strong>, Niğde Barosu'nun ev sahipliğinde gerçekleştirildi. Gündemde: avukata yönelik şiddet ve savunmanın güvenliği, <strong>12. Yargı Paketi</strong>'ne ilişkin baro tutumu ve yol haritası. Geçen haftaki 61. Baro Başkanları Toplantısı'nda şiddet karşıtı 5 adımlı eylem planı TBMM'ye iletilmişti.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">SGK Yemek Bedeli Prim İstisnası Günlük 300 TL'ye Yükseldi</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 10px 0;">
      <strong>SGK</strong> yeni genelgesiyle, iş yerinde yemek verilmediği durumlarda çalışanlara yapılan nakit veya yemek kartı ödemelerinde günlük SGK prim istisna tutarını <strong>300 TL'ye</strong> yükseltti. Bu tutarın üzerindeki kısım prim matrahına dahil edilecek.
    </p>
    <p style="color:#555;font-size:13px;line-height:1.7;margin:0 0 20px 0;background:#f9f9f9;padding:10px 14px;border-left:3px solid #c8a96e;">
      <strong>Pratikte:</strong> Yemek bedelini hâlâ eski orana göre hesaplayan işveren müvekkillerin bilgilendirilmesi gerekiyor.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">HSK: Samandağ'da İki Savcı Meslekten Çıkarıldı</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      <strong>HSK İkinci Dairesi</strong>, kapsamlı bir disiplin soruşturması sonucunda Samandağ'da görev yapan iki cumhuriyet savcısını meslekten çıkarma kararıyla görevden uzaklaştırdı. İddialar: şüphelilerle yakın ilişki kurmak, soruşturmalarda usulsüzlük yapmak ve yüzlerce dosyayı uzun süre bekletmek.
    </p>
  </td></tr>

  <!-- Section: Resmi Gazete -->
  <tr><td style="padding:0 36px;">
    <h2 style="color:#1a1a2e;font-size:18px;margin:24px 0 20px 0;padding-bottom:8px;border-bottom:2px solid #c8a96e;">Resmî Gazete</h2>

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">Konkordato Talebinde Finansal Raporlama Standardı Zorunlu Hale Geldi</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 10px 0;">
      Konkordato talebinde bulunan şirketlerin mahkemelere sunacağı finansal tabloların belirli raporlama standartlarına uygun hazırlanması zorunlu hale getirildi. Büyük şirketler TMS, orta ölçekliler özel standartlar, küçük ölçekliler VUK hükümlerini uygulayacak. (<strong>RG 33252, 13 Mayıs 2026</strong>)
    </p>
    <p style="color:#555;font-size:13px;line-height:1.7;margin:0 0 20px 0;background:#f9f9f9;padding:10px 14px;border-left:3px solid #c8a96e;">
      <strong>Pratikte:</strong> Konkordato başvurusu öncesinde müvekkile "hangi muhasebe standardına tabi olduğunu" sormak artık zorunlu.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">Gemi Acentelerine Kapsamlı Yeni Yönetmelik</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      <strong>Gemi Acenteleri Yönetmeliği</strong>, 14 Mayıs 2026 tarihli Resmî Gazete'de yayımlanarak yürürlüğe girdi. Faaliyet, yetkilendirme, eğitim, denetim, belge, mali yeterlilik ve geçiş süreçleri kapsamlı biçimde düzenlendi. Mevcut acenteler yeni koşulları karşılamak zorunda.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 10px 0;">İcra Personeli Sınavında Hata Eşiği ve Aday Kotası Değişti</h3>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      Kabul edilen yazım hata oranı %40'tan <strong>%25'e</strong> düşürüldü (sıkılaştırıldı), sözlü sınava çağrılan aday oranı kadro sayısının 20 katından <strong>10 katına</strong> indirildi. (<strong>RG 33255, 16 Mayıs 2026</strong>)
    </p>
  </td></tr>

  <!-- Section: Yargı Kararları -->
  <tr><td style="padding:0 36px;">
    <h2 style="color:#1a1a2e;font-size:18px;margin:24px 0 20px 0;padding-bottom:8px;border-bottom:2px solid #c8a96e;">AYM ve Yargı Kararları</h2>

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 6px 0;">Muvazaalı İcra Takibinin İptali İçin Doğru Yol: İhtiyati Tedbir</h3>
    <p style="color:#888;font-size:12px;margin:0 0 8px 0;">Yargıtay 12. HD, E. 2025/6061, K. 2026/311 — 21.01.2026</p>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      Muvazaalı icra takibinin iptali isteminde uygulanacak hukuki tedbirin <strong>ihtiyati tedbir</strong> olduğuna ve bu icra takibine bağlı satış işlemlerinin ihtiyati tedbir kararıyla durdurulması gerektiğine hükmedildi.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 6px 0;">Tedbir Nafakasına Karar Tarihinden Önce Artış Oranı Uygulanamaz</h3>
    <p style="color:#888;font-size:12px;margin:0 0 8px 0;">Yargıtay 2. HD, E. 2022/7271, K. 2022/9297 — 15.11.2022</p>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      Nafaka yükümlüsünün dava tarihinden boşanma hükmünün kesinleşmesine kadar ödeyeceği nafaka tedbir nafakasıdır; tedbir nafakasına artış oranına karar tarihinden itibaren hükmedilemez.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 6px 0;">İçtihat Değişikliği Mağduruna Yargılama Gideri ve Vekâlet Ücreti Yüklenemez</h3>
    <p style="color:#888;font-size:12px;margin:0 0 8px 0;">Yargıtay 9. HD, E. 2024/14039, K. 2025/1420 — 12.02.2025</p>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      Yargıtay'ın önceki uygulamalarına güvenilerek açılan davada görüş değişikliği nedeniyle dava reddedilmişse, davacı aleyhine yargılama gideri ve vekâlet ücretine hükmedilemez.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 6px 0;">Avukatın Banka Hesabındaki Para Otomatik Vekâlet Ücreti Sayılamaz</h3>
    <p style="color:#888;font-size:12px;margin:0 0 8px 0;">Danıştay 3. Dairesi, E. 2017/3584, K. 2021/1450 — 22.03.2021</p>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px 0;">
      Avukatlık faaliyetinde bulunan kişinin banka hesaplarına giren paralar, aksi ispat edilmedikçe, otomatik olarak vekâlet ücreti sayılamaz.
    </p>

    <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 20px 0;">

    <h3 style="color:#1a1a2e;font-size:15px;margin:0 0 6px 0;">Taraflar Uzlaşma Tutanağı Düzenlerse Mahkeme Hüküm Öncesinde de Düşme Kararı Verir</h3>
    <p style="color:#888;font-size:12px;margin:0 0 8px 0;">Yargıtay 6. CD, E. 2023/17518, K. 2025/7743 — 18.09.2025</p>
    <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 28px 0;">
      Resmî uzlaşma girişimine rağmen uzlaşma sağlanamamış olsa bile, taraflar hüküm kurulana kadar kendi iradeleriyle uzlaşabilir. Düzenlenen tutanağa göre mahkeme düşme kararı vermelidir.
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#f7f7f7;padding:20px 36px;border-top:1px solid #e8e8e8;">
    <p style="color:#555;font-size:13px;margin:0 0 8px 0;">
      Bu bülteni <strong>Mona Hukuk</strong> gönderdi. Antalya'da yabancı uyruklu bireyler ve şirketler için hukuki danışmanlık.
    </p>
    <p style="color:#888;font-size:12px;margin:0;">
      <a href="${unsubscribeUrl}" style="color:#888;">Aboneliği iptal et</a> &nbsp;·&nbsp;
      <a href="https://monahukuk.com/tr/hukuki-haberler" style="color:#888;">Tüm bültenler</a> &nbsp;·&nbsp;
      <a href="https://monahukuk.com" style="color:#888;">monahukuk.com</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

const resend = new Resend(RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: FROM,
  to: TO,
  subject: "Hukuki Haberler — 18 Mayıs 2026: UYAP Al Karar, TBB Tepkisi",
  html,
  headers: {
    "List-Unsubscribe": `<${unsubscribeUrl}>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  },
});

if (error) {
  console.error("❌ Gönderme hatası:", error);
  process.exit(1);
}

console.log("✅ Gönderildi! Email ID:", data.id);
console.log("   Alıcı:", TO);
