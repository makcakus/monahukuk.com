"use client";

import { useActionState } from "react";
import { useLocale } from "next-intl";
import { CheckCircle, MailCheck, Mail } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";

type Locale = "tr" | "en" | "de" | "ru" | "ar";

type Copy = {
  heading: string;
  body: string;
  placeholder: string;
  button: string;
  submitting: string;
  consent: string;
  consentRequired: string;
  invalidEmail: string;
  serverError: string;
  pendingTitle: string;
  pendingBody: string;
  resentTitle: string;
  alreadyTitle: string;
  alreadyBody: string;
  noscriptNotice: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    heading: "Türk Hukuku'ndaki gelişmeleri haftalık özet olarak almak ister misiniz?",
    body: "Resmî Gazete duyuruları, yargı kararları ve mevzuat değişikliklerini haftalık olarak e-postanıza gönderiyoruz. Ücretsiz; istediğiniz an iptal edebilirsiniz.",
    placeholder: "E-posta adresiniz",
    button: "Abone ol",
    submitting: "Gönderiliyor…",
    consent:
      "E-bülten almak amacıyla e-posta adresimin işlenmesine KVKK kapsamında açık rızamla onay veriyorum.",
    consentRequired: "Devam etmek için KVKK rıza onayını işaretleyin.",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    serverError: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    pendingTitle: "Doğrulama maili gönderildi",
    pendingBody:
      "E-posta kutunuzu kontrol edin ve aboneliğinizi tamamlamak için iletideki bağlantıya tıklayın. Bağlantı 48 saat geçerlidir.",
    resentTitle: "Doğrulama maili tekrar gönderildi",
    alreadyTitle: "Zaten abonesiniz",
    alreadyBody:
      "Bu e-posta adresi bültenimize halihazırda kayıtlı. Aboneliği her iletinin altındaki bağlantıyla iptal edebilirsiniz.",
    noscriptNotice:
      "Form çalışıyor; gönderdikten sonra e-posta kutunuza onay bağlantısı geleceğini unutmayın.",
  },
  en: {
    heading: "Want a weekly digest of developments in Turkish law?",
    body: "Official Gazette notices, court decisions and legislative changes — delivered weekly. Free, unsubscribe at any time.",
    placeholder: "Your email address",
    button: "Subscribe",
    submitting: "Sending…",
    consent:
      "I consent to my email address being processed for the purpose of receiving the newsletter.",
    consentRequired: "Please tick the consent checkbox to continue.",
    invalidEmail: "Please enter a valid email address.",
    serverError: "Something went wrong. Please try again later.",
    pendingTitle: "Verification email sent",
    pendingBody:
      "Check your inbox and click the link in the email to complete your subscription. The link is valid for 48 hours.",
    resentTitle: "Verification email resent",
    alreadyTitle: "You're already subscribed",
    alreadyBody:
      "This email address is already on our list. You can unsubscribe via the link at the bottom of each issue.",
    noscriptNotice:
      "The form works without JavaScript; after submitting, watch your inbox for the confirmation link.",
  },
  de: {
    heading: "Möchten Sie eine wöchentliche Zusammenfassung der Entwicklungen im türkischen Recht?",
    body: "Mitteilungen aus dem Amtsblatt, Gerichtsentscheidungen und Gesetzesänderungen — wöchentlich per E-Mail. Kostenlos und jederzeit kündbar.",
    placeholder: "Ihre E-Mail-Adresse",
    button: "Abonnieren",
    submitting: "Wird gesendet…",
    consent:
      "Ich willige ein, dass meine E-Mail-Adresse zum Zweck des Newsletter-Versands verarbeitet wird.",
    consentRequired: "Bitte aktivieren Sie das Einwilligungs-Kästchen.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    serverError: "Es ist ein Fehler aufgetreten. Bitte später erneut versuchen.",
    pendingTitle: "Bestätigungs-E-Mail gesendet",
    pendingBody:
      "Prüfen Sie Ihren Posteingang und klicken Sie auf den Bestätigungslink. Der Link ist 48 Stunden gültig.",
    resentTitle: "Bestätigungs-E-Mail erneut gesendet",
    alreadyTitle: "Sie sind bereits angemeldet",
    alreadyBody:
      "Diese E-Mail-Adresse steht bereits auf unserer Liste. Sie können sich jederzeit über den Link in jeder Ausgabe abmelden.",
    noscriptNotice:
      "Das Formular funktioniert auch ohne JavaScript; nach dem Absenden erhalten Sie eine Bestätigungs-E-Mail.",
  },
  ru: {
    heading: "Хотите еженедельный обзор изменений в турецком праве?",
    body: "Уведомления Официальной газеты, судебные решения и изменения в законодательстве — еженедельно. Бесплатно, отписка в любое время.",
    placeholder: "Ваш e-mail",
    button: "Подписаться",
    submitting: "Отправляем…",
    consent:
      "Я соглашаюсь на обработку моего адреса электронной почты с целью получения рассылки.",
    consentRequired: "Пожалуйста, отметьте согласие, чтобы продолжить.",
    invalidEmail: "Введите действительный адрес электронной почты.",
    serverError: "Произошла ошибка. Попробуйте позже.",
    pendingTitle: "Письмо для подтверждения отправлено",
    pendingBody:
      "Проверьте почту и перейдите по ссылке, чтобы завершить подписку. Ссылка действительна 48 часов.",
    resentTitle: "Письмо для подтверждения отправлено повторно",
    alreadyTitle: "Вы уже подписаны",
    alreadyBody:
      "Этот адрес уже в нашем списке. Отписаться можно по ссылке в конце каждого письма.",
    noscriptNotice:
      "Форма работает без JavaScript; после отправки на ваш e-mail придёт письмо с подтверждением.",
  },
  ar: {
    heading: "هل تودّ موجزاً أسبوعياً لتطورات القانون التركي؟",
    body: "إشعارات الجريدة الرسمية، قرارات المحاكم وتعديلات التشريعات — أسبوعياً عبر البريد. مجاني ويمكنك إلغاء الاشتراك متى شئت.",
    placeholder: "بريدك الإلكتروني",
    button: "اشترك",
    submitting: "جارٍ الإرسال…",
    consent:
      "أوافق على معالجة بريدي الإلكتروني لغرض تلقي النشرة البريدية.",
    consentRequired: "يرجى تأكيد الموافقة للمتابعة.",
    invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
    serverError: "حدث خطأ. يرجى المحاولة لاحقاً.",
    pendingTitle: "تم إرسال رسالة التأكيد",
    pendingBody:
      "افحص بريدك وانقر على الرابط لإتمام الاشتراك. الرابط صالح لمدة 48 ساعة.",
    resentTitle: "تم إعادة إرسال رسالة التأكيد",
    alreadyTitle: "أنت مشترك بالفعل",
    alreadyBody:
      "هذا البريد مسجل لدينا. يمكنك إلغاء الاشتراك من الرابط الموجود في أسفل كل رسالة.",
    noscriptNotice:
      "النموذج يعمل بدون JavaScript؛ بعد الإرسال ستصلك رسالة تأكيد.",
  },
};

function isLocale(v: string): v is Locale {
  return ["tr", "en", "de", "ru", "ar"].includes(v);
}

export function NewsletterInlineCTA({
  variant = "default",
  id,
}: {
  variant?: "default" | "compact";
  id?: string;
}) {
  const localeRaw = useLocale();
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "tr";
  const c = COPY[locale];
  const [state, formAction, isPending] = useActionState<NewsletterState, FormData>(
    subscribeToNewsletter,
    null
  );

  const wrapperBase =
    "rounded-xl border border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-900";
  const wrapperPad =
    variant === "compact" ? "px-5 py-5" : "px-6 py-7 md:px-8 md:py-8";

  if (state?.status === "alreadyConfirmed") {
    return (
      <div id={id} className={`${wrapperBase} ${wrapperPad}`}>
        <div className="flex items-start gap-3">
          <CheckCircle
            className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
            size={20}
          />
          <div>
            <p className="font-medium text-navy-900 dark:text-cream-50">
              {c.alreadyTitle}
            </p>
            <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">
              {c.alreadyBody}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (state?.status === "pending" || state?.status === "resent") {
    return (
      <div id={id} className={`${wrapperBase} ${wrapperPad}`}>
        <div className="flex items-start gap-3">
          <MailCheck
            className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
            size={20}
          />
          <div>
            <p className="font-medium text-navy-900 dark:text-cream-50">
              {state.status === "resent" ? c.resentTitle : c.pendingTitle}
            </p>
            <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">
              {c.pendingBody}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`${wrapperBase} ${wrapperPad}`}>
      <div className="flex items-start gap-3 mb-4">
        <Mail
          className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
          size={20}
        />
        <div>
          <p
            className={`font-display text-navy-900 dark:text-cream-50 leading-snug ${
              variant === "compact" ? "text-base" : "text-lg md:text-xl"
            }`}
          >
            {c.heading}
          </p>
          {variant !== "compact" && (
            <p className="mt-2 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
              {c.body}
            </p>
          )}
        </div>
      </div>

      <form action={formAction} className="space-y-3">
        <input type="hidden" name="locale" value={locale} />
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={c.placeholder}
            className="flex-1 rounded-md border border-cream-300 bg-white dark:border-navy-700 dark:bg-navy-950 px-4 py-2.5 text-sm text-navy-900 dark:text-cream-50 placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
          />
          <button
            type="submit"
            disabled={isPending}
            className="shrink-0 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-medium text-cream-50 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-600 disabled:opacity-60 transition-colors"
          >
            {isPending ? c.submitting : c.button}
          </button>
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 shrink-0 accent-gold-500"
          />
          <span className="text-xs text-ink-soft dark:text-cream-300/80 leading-relaxed">
            {c.consent}
          </span>
        </label>

        {state?.status === "error" && (
          <p className="text-xs text-rose-600 dark:text-rose-400">
            {c[state.errorKey as keyof Copy] ?? c.serverError}
          </p>
        )}

        <noscript>
          <p className="text-xs text-ink-mute dark:text-cream-300/70 leading-relaxed">
            {c.noscriptNotice}
          </p>
        </noscript>
      </form>
    </div>
  );
}
