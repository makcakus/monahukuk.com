import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

// Bu sayfa yalnızca Remindionary (App Store) icin gerekli olan gizlilik
// politikasi linkini barindirir. Sitenin geri kalani 8 dilli oldugu icin
// i18n mesaj sistemini kullaniyor; bu sayfa ise tek amacli oldugundan
// (App Store Connect > App Privacy > Privacy Policy URL) yalniz "tr"
// locale'inde yayinlaniyor, digerlerinde 404 donuyor.
const TITLE = "Remindionary Gizlilik Politikası";
const LEAD =
  "Remindionary uygulamasının hangi verileri işlediğini, hangilerini işlemediğini ve bunları nasıl koruduğunu açıklar.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "tr") return {};
  return pageMetadata({
    locale,
    path: "/remindionary-gizlilik",
    title: TITLE,
    description: LEAD,
    noindex: false,
  });
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-navy-900 dark:text-cream-50 mb-3">
        {title}
      </h2>
      <span className="gold-divider mb-5" />
      <div className="text-ink-soft leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default async function RemindionaryPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "tr") notFound();
  setRequestLocale(locale);

  return (
    <>
      <PageHero title={TITLE} lead={LEAD} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-700 dark:text-gold-400 mb-8">
          Son güncelleme: Eylül 2026
        </p>

        <div className="prose-legal">
          <p>
            Remindionary, İngilizce-Türkçe sözlük ve kelime öğrenme
            uygulamasıdır. Bu sayfa, uygulamanın hangi kullanıcı verilerini
            işlediğini ve bunları nasıl koruduğunu açıklar.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <Section title="1. Sözlük ve Öğrenme Verileri">
            <p>
              Aradığınız kelimeler, öğrenme listeniz, quiz sonuçlarınız ve
              ilerleme istatistikleriniz yalnızca cihazınızda (yerel
              veritabanında) tutulur. Bu veriler hiçbir sunucuya
              gönderilmez, Remindionary geliştiricisi veya üçüncü kişilerle
              paylaşılmaz.
            </p>
          </Section>

          <Section title="2. Yazı Denetimi Özelliği">
            <p>
              Uygulamadaki &quot;Metin&quot; bölümünde bir İngilizce metni
              denetime gönderdiğinizde, yalnızca o metin — başka hiçbir
              kişisel veri olmadan — denetim hizmetini sağlayan yapay zeka
              servis sağlayıcısına (Anthropic PBC) iletilir. Bu işlem
              yalnızca siz denetle düğmesine bastığınızda gerçekleşir.
            </p>
          </Section>

          <Section title="3. Hesap ve Kimlik Bilgileri">
            <p>
              Remindionary bir kullanıcı hesabı oluşturmanızı istemez; ad,
              e-posta, telefon numarası gibi kimlik bilgisi toplamaz.
            </p>
          </Section>

          <Section title="4. Reklam ve Analitik">
            <p>
              Uygulama reklam göstermez ve üçüncü taraf analitik/izleme
              araçları kullanmaz.
            </p>
          </Section>

          <Section title="5. Verilerin Saklanması ve Silinmesi">
            <p>
              Cihazınızda tutulan tüm sözlük ve ilerleme verileri,
              uygulamayı sildiğinizde birlikte silinir. Verilerinizi ayrıca
              elle silmek isterseniz, işletim sisteminizin uygulama
              ayarlarından uygulama verilerini temizleyebilirsiniz.
            </p>
          </Section>

          <Section title="6. Haklarınız">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
              kapsamında, işlenen (yazı denetimi özelliği için geçici olarak
              iletilen) verilerinizle ilgili bilgi talep etme hakkına
              sahipsiniz. Taleplerinizi aşağıdaki iletişim bilgileri
              üzerinden iletebilirsiniz.
            </p>
          </Section>

          <Section title="7. Değişiklikler">
            <p>
              Bu gizlilik politikası, uygulama özellikleri geliştikçe
              güncellenebilir. Önemli değişikliklerde uygulama içinden
              bilgilendirme yapılır.
            </p>
          </Section>

          <Section title="8. İletişim">
            <p>Sorularınız için: contact@monahukuk.com</p>
          </Section>
        </div>
      </section>
    </>
  );
}
