"use client";

import { useActionState, useEffect } from "react";
import { useLocale } from "next-intl";
import { CheckCircle, Send } from "lucide-react";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { track } from "@/lib/analytics";

type Locale = "tr" | "en" | "de" | "ru" | "ar" | "es" | "fr" | "zh";

type Copy = {
  heading: string;
  body: string;
  name: string;
  email: string;
  phone: string;
  phoneOptional: string;
  subject: string;
  subjectPlaceholder: string;
  subjectOther: string;
  message: string;
  messagePlaceholder: string;
  consent: string;
  button: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  invalidName: string;
  invalidEmail: string;
  invalidMessage: string;
  consentRequired: string;
  serverError: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    heading: "Bize yazın",
    body: "Talebinizi aşağıdaki formla iletebilirsiniz. Size e-posta veya telefonla dönüş yaparız.",
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    phoneOptional: "isteğe bağlı",
    subject: "Konu",
    subjectPlaceholder: "Bir konu seçin",
    subjectOther: "Diğer",
    message: "Mesajınız",
    messagePlaceholder: "Talebinizi kısaca özetleyin.",
    consent:
      "İletişim talebimin yanıtlanması amacıyla bu formda paylaştığım kişisel verilerin işlenmesine KVKK kapsamında açık rızamla onay veriyorum.",
    button: "Gönder",
    submitting: "Gönderiliyor…",
    successTitle: "Mesajınız iletildi",
    successBody:
      "Talebiniz büromuza ulaştı. Size e-posta veya telefonla dönüş yapacağız.",
    invalidName: "Lütfen adınızı ve soyadınızı girin.",
    invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
    invalidMessage: "Lütfen mesajınızı yazın (en az 10 karakter).",
    consentRequired: "Devam etmek için KVKK rıza onayını işaretleyin.",
    serverError: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya bizi arayın.",
  },
  en: {
    heading: "Write to us",
    body: "You can send your inquiry using the form below. We will get back to you by email or phone.",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    phoneOptional: "optional",
    subject: "Subject",
    subjectPlaceholder: "Select a subject",
    subjectOther: "Other",
    message: "Your message",
    messagePlaceholder: "Briefly describe your inquiry.",
    consent:
      "I consent to the processing of the personal data I share in this form for the purpose of responding to my inquiry, in accordance with Turkish data protection law (KVKK).",
    button: "Send",
    submitting: "Sending…",
    successTitle: "Your message has been sent",
    successBody:
      "Your inquiry has reached our office. We will get back to you by email or phone.",
    invalidName: "Please enter your full name.",
    invalidEmail: "Please enter a valid email address.",
    invalidMessage: "Please write your message (at least 10 characters).",
    consentRequired: "Please tick the consent checkbox to continue.",
    serverError: "Something went wrong. Please try again later or call us.",
  },
  de: {
    heading: "Schreiben Sie uns",
    body: "Sie können Ihr Anliegen über das folgende Formular übermitteln. Wir melden uns per E-Mail oder Telefon bei Ihnen.",
    name: "Vor- und Nachname",
    email: "E-Mail",
    phone: "Telefon",
    phoneOptional: "optional",
    subject: "Betreff",
    subjectPlaceholder: "Bitte Thema wählen",
    subjectOther: "Sonstiges",
    message: "Ihre Nachricht",
    messagePlaceholder: "Beschreiben Sie Ihr Anliegen kurz.",
    consent:
      "Ich willige ein, dass die in diesem Formular angegebenen personenbezogenen Daten zum Zweck der Beantwortung meiner Anfrage gemäß dem türkischen Datenschutzgesetz (KVKK) verarbeitet werden.",
    button: "Senden",
    submitting: "Wird gesendet…",
    successTitle: "Ihre Nachricht wurde übermittelt",
    successBody:
      "Ihre Anfrage ist bei unserer Kanzlei eingegangen. Wir melden uns per E-Mail oder Telefon bei Ihnen.",
    invalidName: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    invalidMessage: "Bitte verfassen Sie Ihre Nachricht (mind. 10 Zeichen).",
    consentRequired: "Bitte aktivieren Sie das Einwilligungs-Kästchen.",
    serverError:
      "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
  },
  ru: {
    heading: "Напишите нам",
    body: "Вы можете отправить запрос через форму ниже. Мы свяжемся с вами по электронной почте или телефону.",
    name: "Имя и фамилия",
    email: "E-mail",
    phone: "Телефон",
    phoneOptional: "необязательно",
    subject: "Тема",
    subjectPlaceholder: "Выберите тему",
    subjectOther: "Другое",
    message: "Ваше сообщение",
    messagePlaceholder: "Кратко опишите ваш вопрос.",
    consent:
      "Я даю согласие на обработку персональных данных, указанных в этой форме, с целью ответа на мой запрос в соответствии с турецким законом о защите данных (KVKK).",
    button: "Отправить",
    submitting: "Отправляем…",
    successTitle: "Ваше сообщение отправлено",
    successBody:
      "Ваш запрос поступил в нашу фирму. Мы свяжемся с вами по электронной почте или телефону.",
    invalidName: "Пожалуйста, укажите имя и фамилию.",
    invalidEmail: "Введите действительный адрес электронной почты.",
    invalidMessage: "Пожалуйста, напишите сообщение (не менее 10 символов).",
    consentRequired: "Пожалуйста, отметьте согласие, чтобы продолжить.",
    serverError: "Произошла ошибка. Попробуйте позже или позвоните нам.",
  },
  ar: {
    heading: "راسلنا",
    body: "يمكنك إرسال طلبك عبر النموذج أدناه، وسنعاود التواصل معك عبر البريد الإلكتروني أو الهاتف.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    phoneOptional: "اختياري",
    subject: "الموضوع",
    subjectPlaceholder: "اختر موضوعاً",
    subjectOther: "أخرى",
    message: "رسالتك",
    messagePlaceholder: "اشرح طلبك باختصار.",
    consent:
      "أوافق على معالجة البيانات الشخصية الواردة في هذا النموذج لغرض الرد على طلبي وفقاً لقانون حماية البيانات التركي (KVKK).",
    button: "إرسال",
    submitting: "جارٍ الإرسال…",
    successTitle: "تم إرسال رسالتك",
    successBody: "وصل طلبك إلى مكتبنا، وسنعاود التواصل معك عبر البريد الإلكتروني أو الهاتف.",
    invalidName: "يرجى إدخال الاسم الكامل.",
    invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
    invalidMessage: "يرجى كتابة رسالتك (10 أحرف على الأقل).",
    consentRequired: "يرجى تأكيد الموافقة للمتابعة.",
    serverError: "حدث خطأ. يرجى المحاولة لاحقاً أو الاتصال بنا.",
  },
  es: {
    heading: "Escríbanos",
    body: "Puede enviarnos su consulta mediante el siguiente formulario. Le responderemos por correo electrónico o teléfono.",
    name: "Nombre y apellidos",
    email: "Correo electrónico",
    phone: "Teléfono",
    phoneOptional: "opcional",
    subject: "Asunto",
    subjectPlaceholder: "Seleccione un asunto",
    subjectOther: "Otro",
    message: "Su mensaje",
    messagePlaceholder: "Describa brevemente su consulta.",
    consent:
      "Consiento el tratamiento de los datos personales facilitados en este formulario con el fin de responder a mi consulta, conforme a la ley turca de protección de datos (KVKK).",
    button: "Enviar",
    submitting: "Enviando…",
    successTitle: "Su mensaje ha sido enviado",
    successBody:
      "Su consulta ha llegado a nuestro despacho. Le responderemos por correo electrónico o teléfono.",
    invalidName: "Por favor, introduzca su nombre y apellidos.",
    invalidEmail: "Por favor, introduzca una dirección de correo válida.",
    invalidMessage: "Por favor, escriba su mensaje (mínimo 10 caracteres).",
    consentRequired: "Marque la casilla de consentimiento para continuar.",
    serverError: "Se ha producido un error. Inténtelo más tarde o llámenos.",
  },
  fr: {
    heading: "Écrivez-nous",
    body: "Vous pouvez nous transmettre votre demande via le formulaire ci-dessous. Nous vous répondrons par e-mail ou par téléphone.",
    name: "Nom et prénom",
    email: "E-mail",
    phone: "Téléphone",
    phoneOptional: "facultatif",
    subject: "Objet",
    subjectPlaceholder: "Sélectionnez un objet",
    subjectOther: "Autre",
    message: "Votre message",
    messagePlaceholder: "Décrivez brièvement votre demande.",
    consent:
      "Je consens au traitement des données personnelles communiquées dans ce formulaire aux fins de réponse à ma demande, conformément à la loi turque sur la protection des données (KVKK).",
    button: "Envoyer",
    submitting: "Envoi en cours…",
    successTitle: "Votre message a été envoyé",
    successBody:
      "Votre demande est parvenue à notre cabinet. Nous vous répondrons par e-mail ou par téléphone.",
    invalidName: "Veuillez saisir votre nom et prénom.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    invalidMessage: "Veuillez rédiger votre message (au moins 10 caractères).",
    consentRequired: "Veuillez cocher la case de consentement pour continuer.",
    serverError: "Une erreur s'est produite. Réessayez plus tard ou appelez-nous.",
  },
  zh: {
    heading: "给我们留言",
    body: "您可以通过下方表格提交您的问题，我们将通过电子邮件或电话与您联系。",
    name: "姓名",
    email: "电子邮箱",
    phone: "电话",
    phoneOptional: "选填",
    subject: "主题",
    subjectPlaceholder: "请选择主题",
    subjectOther: "其他",
    message: "您的留言",
    messagePlaceholder: "请简要说明您的问题。",
    consent:
      "我同意根据土耳其个人数据保护法（KVKK），为答复我的咨询而处理我在本表格中提供的个人数据。",
    button: "发送",
    submitting: "发送中…",
    successTitle: "您的留言已发送",
    successBody: "您的咨询已送达我们的事务所，我们将通过电子邮件或电话与您联系。",
    invalidName: "请输入您的姓名。",
    invalidEmail: "请输入有效的电子邮箱地址。",
    invalidMessage: "请填写留言内容（至少 10 个字符）。",
    consentRequired: "请勾选同意选项以继续。",
    serverError: "发生错误，请稍后重试或致电我们。",
  },
};

function isLocale(v: string): v is Locale {
  return ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"].includes(v);
}

const inputCls =
  "w-full rounded-md border border-cream-300 bg-white dark:border-navy-700 dark:bg-navy-950 px-4 py-2.5 text-sm text-navy-900 dark:text-cream-50 placeholder:text-ink-mute focus:outline-none focus:ring-2 focus:ring-gold-400 transition";

export function ContactForm({ subjects }: { subjects: string[] }) {
  const localeRaw = useLocale();
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "tr";
  const c = COPY[locale];
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContactForm,
    null
  );

  useEffect(() => {
    if (state?.status === "sent") {
      track("contact_form_submit", { locale });
    }
  }, [state?.status, locale]);

  if (state?.status === "sent") {
    return (
      <div className="rounded-xl border border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-900 px-6 py-7">
        <div className="flex items-start gap-3">
          <CheckCircle
            className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
            size={20}
          />
          <div>
            <p className="font-medium text-navy-900 dark:text-cream-50">
              {c.successTitle}
            </p>
            <p className="mt-1 text-sm text-ink-soft dark:text-cream-300">
              {c.successBody}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-900 px-6 py-7 md:px-8 md:py-8">
      <h2 className="font-display text-xl md:text-2xl text-navy-900 dark:text-cream-50">
        {c.heading}
      </h2>
      <p className="mt-2 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
        {c.body}
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        <input type="hidden" name="locale" value={locale} />
        {/* Honeypot — insanlar görmez, botlar doldurur */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400"
            >
              {c.name}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={200}
              autoComplete="name"
              className={inputCls}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400"
            >
              {c.email}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputCls}
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1 block text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400"
            >
              {c.phone}{" "}
              <span className="normal-case tracking-normal text-ink-mute">
                ({c.phoneOptional})
              </span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              maxLength={40}
              autoComplete="tel"
              className={inputCls}
            />
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-1 block text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400"
            >
              {c.subject}
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              defaultValue=""
              className={inputCls}
            >
              <option value="" disabled>
                {c.subjectPlaceholder}
              </option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value={c.subjectOther}>{c.subjectOther}</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1 block text-xs uppercase tracking-[0.14em] text-gold-700 dark:text-gold-400"
          >
            {c.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder={c.messagePlaceholder}
            className={inputCls}
          />
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

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-md bg-gold-300 px-6 py-2.5 text-sm font-medium text-navy-950 hover:bg-gold-400 disabled:opacity-60 transition-colors"
        >
          <Send size={15} aria-hidden="true" />
          {isPending ? c.submitting : c.button}
        </button>
      </form>
    </div>
  );
}
