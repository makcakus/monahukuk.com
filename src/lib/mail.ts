import "server-only";
import { Resend } from "resend";

type Locale = "tr" | "en" | "de" | "ru" | "ar";

const FROM_DEFAULT = "Mona Hukuk <bulten@monahukuk.com>";
const REPLY_TO = "contact@monahukuk.com";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function fromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || FROM_DEFAULT;
}

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://monahukuk.com";
}

const VERIFY_COPY: Record<Locale, {
  subject: string;
  preheader: string;
  heading: string;
  body: string;
  button: string;
  expiry: string;
  ignore: string;
  footer: string;
  dir: "ltr" | "rtl";
}> = {
  tr: {
    subject: "Mona Hukuk Bültenine Aboneliğinizi Onaylayın",
    preheader: "Hukuki bülten aboneliğinizi tamamlamak için tıklayın.",
    heading: "Aboneliğinizi onaylayın",
    body: "Mona Hukuk haftalık hukuk bültenine abone olmak istediğinizi belirttiniz. Aboneliği aktifleştirmek için aşağıdaki düğmeye tıklayın.",
    button: "Aboneliği onayla",
    expiry: "Bu bağlantı 48 saat içinde geçerliliğini yitirir.",
    ignore: "Bu işlemi siz başlatmadıysanız bu mesajı yok sayabilirsiniz; herhangi bir kayıt oluşturulmaz.",
    footer: "Mona Hukuk · Antalya, Türkiye",
    dir: "ltr",
  },
  en: {
    subject: "Confirm your Mona Hukuk newsletter subscription",
    preheader: "One click to complete your legal newsletter subscription.",
    heading: "Confirm your subscription",
    body: "You requested to subscribe to the Mona Hukuk weekly legal newsletter. Click the button below to activate your subscription.",
    button: "Confirm subscription",
    expiry: "This link expires in 48 hours.",
    ignore: "If you did not request this, you can safely ignore this email — no record will be kept.",
    footer: "Mona Hukuk · Antalya, Türkiye",
    dir: "ltr",
  },
  de: {
    subject: "Bestätigen Sie Ihr Mona-Hukuk-Newsletter-Abonnement",
    preheader: "Mit einem Klick Ihr Rechts-Newsletter-Abonnement abschließen.",
    heading: "Abonnement bestätigen",
    body: "Sie haben sich für den wöchentlichen Rechts-Newsletter von Mona Hukuk angemeldet. Klicken Sie auf die Schaltfläche, um Ihr Abonnement zu aktivieren.",
    button: "Abonnement bestätigen",
    expiry: "Dieser Link ist 48 Stunden gültig.",
    ignore: "Falls Sie dies nicht angefordert haben, können Sie diese E-Mail ignorieren — es wird kein Eintrag gespeichert.",
    footer: "Mona Hukuk · Antalya, Türkei",
    dir: "ltr",
  },
  ru: {
    subject: "Подтвердите подписку на рассылку Mona Hukuk",
    preheader: "Один клик — и подписка на юридическую рассылку активна.",
    heading: "Подтвердите подписку",
    body: "Вы запросили подписку на еженедельную юридическую рассылку Mona Hukuk. Чтобы активировать подписку, нажмите кнопку ниже.",
    button: "Подтвердить подписку",
    expiry: "Срок действия ссылки — 48 часов.",
    ignore: "Если вы не запрашивали подписку, просто проигнорируйте это письмо — запись не сохранится.",
    footer: "Mona Hukuk · Анталия, Турция",
    dir: "ltr",
  },
  ar: {
    subject: "تأكيد اشتراكك في النشرة القانونية Mona Hukuk",
    preheader: "نقرة واحدة لإتمام اشتراكك في النشرة القانونية.",
    heading: "تأكيد الاشتراك",
    body: "لقد طلبت الاشتراك في النشرة القانونية الأسبوعية لـ Mona Hukuk. انقر الزر أدناه لتفعيل اشتراكك.",
    button: "تأكيد الاشتراك",
    expiry: "تنتهي صلاحية هذا الرابط خلال 48 ساعة.",
    ignore: "إذا لم تطلب ذلك فيمكنك تجاهل هذه الرسالة — لن يتم حفظ أي بيانات.",
    footer: "Mona Hukuk · أنطاليا، تركيا",
    dir: "rtl",
  },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderVerifyEmail(opts: {
  locale: Locale;
  confirmUrl: string;
  unsubscribeUrl: string;
}): { html: string; text: string; subject: string } {
  const c = VERIFY_COPY[opts.locale];
  const html = `<!doctype html>
<html lang="${opts.locale}" dir="${c.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(c.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f6f1e7;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#1a2238;">
<span style="display:none;max-height:0;overflow:hidden;color:transparent;">${escapeHtml(c.preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f1e7;padding:32px 16px;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e7dec9;border-radius:8px;overflow:hidden;">
    <tr><td style="padding:32px 32px 8px 32px;">
      <div style="font-family:Georgia,serif;font-size:22px;color:#1a2238;letter-spacing:0.02em;">MONA HUKUK</div>
      <div style="font-size:11px;color:#a07d2a;letter-spacing:0.18em;text-transform:uppercase;margin-top:4px;">Antalya · Türkiye</div>
    </td></tr>
    <tr><td style="padding:16px 32px 8px 32px;">
      <h1 style="font-family:Georgia,serif;font-size:24px;line-height:1.25;margin:16px 0 8px 0;color:#1a2238;">${escapeHtml(c.heading)}</h1>
      <p style="font-size:15px;line-height:1.6;color:#384055;margin:8px 0 24px 0;">${escapeHtml(c.body)}</p>
    </td></tr>
    <tr><td align="${opts.locale === "ar" ? "right" : "left"}" style="padding:0 32px 24px 32px;">
      <a href="${opts.confirmUrl}" style="display:inline-block;background:#c4972b;color:#1a2238;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:4px;">${escapeHtml(c.button)}</a>
    </td></tr>
    <tr><td style="padding:0 32px 8px 32px;">
      <p style="font-size:12px;color:#6a7186;margin:8px 0;">${escapeHtml(c.expiry)}</p>
      <p style="font-size:12px;color:#6a7186;margin:8px 0 24px 0;">${escapeHtml(c.ignore)}</p>
      <p style="font-size:11px;color:#9a9eb0;word-break:break-all;margin:8px 0;">${escapeHtml(opts.confirmUrl)}</p>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #efe7d6;">
      <p style="font-size:11px;color:#9a9eb0;margin:0;">${escapeHtml(c.footer)} · <a href="${opts.unsubscribeUrl}" style="color:#9a9eb0;text-decoration:underline;">${opts.locale === "tr" ? "Aboneliği iptal et" : opts.locale === "de" ? "Abbestellen" : opts.locale === "ru" ? "Отписаться" : opts.locale === "ar" ? "إلغاء الاشتراك" : "Unsubscribe"}</a></p>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    c.heading,
    "",
    c.body,
    "",
    `${c.button}: ${opts.confirmUrl}`,
    "",
    c.expiry,
    c.ignore,
    "",
    `${c.footer}`,
  ].join("\n");

  return { html, text, subject: c.subject };
}

export async function sendVerifyEmail(opts: {
  to: string;
  locale: Locale;
  confirmationToken: string;
  unsubscribeToken: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) {
    console.log(
      `[Newsletter] Resend not configured. Verify URL: ${siteUrl()}/api/newsletter/confirm?token=${opts.confirmationToken}`
    );
    return { ok: false, error: "RESEND_API_KEY not set" };
  }

  const confirmUrl = `${siteUrl()}/api/newsletter/confirm?token=${opts.confirmationToken}&lang=${opts.locale}`;
  const unsubscribeUrl = `${siteUrl()}/api/newsletter/unsubscribe?token=${opts.unsubscribeToken}&lang=${opts.locale}`;

  const { html, text, subject } = renderVerifyEmail({
    locale: opts.locale,
    confirmUrl,
    unsubscribeUrl,
  });

  try {
    const { error } = await resend.emails.send({
      from: fromAddress(),
      to: opts.to,
      replyTo: REPLY_TO,
      subject,
      html,
      text,
      headers: {
        "List-Unsubscribe": `<${unsubscribeUrl}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });
    if (error) {
      console.error("[Newsletter] Resend send error:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    console.error("[Newsletter] Resend network error:", err);
    return { ok: false, error: "network" };
  }
}

export async function addToResendAudience(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return;

  try {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  } catch (err) {
    console.error("[Newsletter] Audience add error:", err);
  }
}

export async function removeFromResendAudience(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return;

  try {
    await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unsubscribed: true }),
      }
    );
  } catch (err) {
    console.error("[Newsletter] Audience remove error:", err);
  }
}
