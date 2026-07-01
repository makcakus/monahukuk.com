"use client";

import { useActionState } from "react";
import { useLocale } from "next-intl";
import { CheckCircle, MailCheck, Mail } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";

type Locale = "tr" | "en" | "de" | "ru" | "ar" | "es" | "fr";

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
  /** Backend henüz aktif değilken form altında her zaman görünen bilgilendirme. */
  comingSoonNotice: string;
  /** Backend yokken submit sonrası gösterilen başlık. */
  interestRegisteredTitle: string;
  /** Backend yokken submit sonrası gösterilen açıklama. */
  interestRegisteredBody: string;
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
    comingSoonNotice:
      "Bültenimiz yakında aktif olacak. Şu an ilgilendiğinizi belirtmek için kaydolabilirsiniz; aktif olduğunda size haber vereceğiz.",
    interestRegisteredTitle: "Kaydınız alındı",
    interestRegisteredBody:
      "Bülten aktif olduğunda size bilgi vereceğiz. Bu sırada sorularınız için contact@monahukuk.com adresinden bize ulaşabilirsiniz.",
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
    comingSoonNotice:
      "Our newsletter will be live soon. You can register your interest now and we'll notify you once it's active.",
    interestRegisteredTitle: "Your interest has been registered",
    interestRegisteredBody:
      "We'll notify you once the newsletter is active. In the meantime, feel free to reach us at contact@monahukuk.com.",
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
    comingSoonNotice:
      "Unser Newsletter startet bald. Sie können sich jetzt vormerken; wir informieren Sie, sobald er aktiv ist.",
    interestRegisteredTitle: "Ihre Anmeldung ist eingegangen",
    interestRegisteredBody:
      "Wir benachrichtigen Sie, sobald der Newsletter aktiv ist. Bei Fragen erreichen Sie uns unter contact@monahukuk.com.",
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
    comingSoonNotice:
      "Наша рассылка скоро будет запущена. Вы можете оставить заявку, и мы уведомим вас, когда она станет активной.",
    interestRegisteredTitle: "Ваша заявка получена",
    interestRegisteredBody:
      "Мы уведомим вас, когда рассылка станет активной. По вопросам пишите на contact@monahukuk.com.",
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
    comingSoonNotice:
      "ستنطلق نشرتنا الإخبارية قريبًا. يمكنك تسجيل اهتمامك الآن وسنخبرك عند تفعيلها.",
    interestRegisteredTitle: "تم تسجيل اهتمامك",
    interestRegisteredBody:
      "سنخبرك عند تفعيل النشرة الإخبارية. للاستفسار يمكنك مراسلتنا على contact@monahukuk.com.",
  },
  es: {
    heading: "¿Quiere recibir un resumen semanal de las novedades del derecho turco?",
    body: "Publicaciones del Diario Oficial, resoluciones judiciales y cambios legislativos — cada semana en su correo. Gratuito y con baja en cualquier momento.",
    placeholder: "Su dirección de correo electrónico",
    button: "Suscribirse",
    submitting: "Enviando…",
    consent:
      "Consiento el tratamiento de mi correo electrónico con el fin de recibir el boletín informativo.",
    consentRequired: "Marque la casilla de consentimiento para continuar.",
    invalidEmail: "Por favor, introduzca una dirección de correo válida.",
    serverError: "Se ha producido un error. Inténtelo de nuevo más tarde.",
    pendingTitle: "Correo de verificación enviado",
    pendingBody:
      "Revise su bandeja de entrada y haga clic en el enlace para completar su suscripción. El enlace es válido durante 48 horas.",
    resentTitle: "Correo de verificación reenviado",
    alreadyTitle: "Ya está suscrito",
    alreadyBody:
      "Esta dirección ya figura en nuestra lista. Puede darse de baja mediante el enlace que aparece al final de cada número.",
    comingSoonNotice:
      "Nuestro boletín estará activo próximamente. Puede registrar su interés ahora y le avisaremos cuando esté disponible.",
    interestRegisteredTitle: "Su interés ha sido registrado",
    interestRegisteredBody:
      "Le notificaremos cuando el boletín esté activo. Mientras tanto, puede contactarnos en contact@monahukuk.com.",
  },
  fr: {
    heading: "Souhaitez-vous recevoir un résumé hebdomadaire des actualités du droit turc ?",
    body: "Annonces du Journal officiel, décisions judiciaires et changements législatifs — chaque semaine dans votre boîte mail. Gratuit, désinscription à tout moment.",
    placeholder: "Votre adresse e-mail",
    button: "S'abonner",
    submitting: "Envoi en cours…",
    consent:
      "Je consens au traitement de mon adresse e-mail aux fins de réception du bulletin d'information.",
    consentRequired: "Veuillez cocher la case de consentement pour continuer.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    serverError: "Une erreur s'est produite. Veuillez réessayer ultérieurement.",
    pendingTitle: "E-mail de vérification envoyé",
    pendingBody:
      "Vérifiez votre boîte de réception et cliquez sur le lien pour finaliser votre abonnement. Le lien est valable 48 heures.",
    resentTitle: "E-mail de vérification renvoyé",
    alreadyTitle: "Vous êtes déjà abonné",
    alreadyBody:
      "Cette adresse est déjà enregistrée dans notre liste. Vous pouvez vous désabonner via le lien au bas de chaque numéro.",
    comingSoonNotice:
      "Notre bulletin sera actif prochainement. Vous pouvez enregistrer votre intérêt maintenant et nous vous préviendrons.",
    interestRegisteredTitle: "Votre intérêt a été enregistré",
    interestRegisteredBody:
      "Nous vous informerons dès que le bulletin sera actif. En attendant, contactez-nous à contact@monahukuk.com.",
  },
};

function isLocale(v: string): v is Locale {
  return ["tr", "en", "de", "ru", "ar", "es", "fr"].includes(v);
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
            className="shrink-0 rounded-md bg-[#FFBE98] px-5 py-2.5 text-sm font-medium text-navy-950 hover:bg-[#f5a87a] disabled:opacity-60 transition-colors"
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

      </form>
    </div>
  );
}
