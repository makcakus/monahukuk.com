"use client";

import { useLocale } from "next-intl";
import { CalendarClock } from "lucide-react";
import { track } from "@/lib/analytics";

/**
 * Google Takvim randevu planı gömme bölümü.
 *
 * NEXT_PUBLIC_BOOKING_URL tanımlı değilse hiç render edilmez — böylece
 * randevu planı hazır olmadan deploy edilebilir. URL, Google Calendar
 * "randevu planı" paylaşım bağlantısıdır (?gv=true iframe modunu açar).
 *
 * Metin tonu TBB Reklam Yasağı Yönetmeliği'ne uygun tutulmalı:
 * tasvirî dil, "ücretsiz" veya süre/vaat içeren ifade YOK.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

type Locale = "tr" | "en" | "de" | "ru" | "ar" | "es" | "fr" | "zh";

type Copy = {
  heading: string;
  body: string;
  fallbackNote: string;
  iframeTitle: string;
};

const COPY: Record<Locale, Copy> = {
  tr: {
    heading: "Görüşme randevusu planlayın",
    body: "Büromuzla yapılacak ön görüşme için size uygun bir tarih ve saati aşağıdaki takvimden seçebilirsiniz. Görüşme ücreti ve kapsamı, işin niteliğine göre görüşmede belirlenir.",
    fallbackNote: "Takvim yüklenmezse formu kullanabilir veya bizi arayabilirsiniz.",
    iframeTitle: "Randevu takvimi",
  },
  en: {
    heading: "Schedule a meeting",
    body: "You can pick a suitable date and time for an initial meeting with our office from the calendar below. The fee and scope of the consultation are determined at the meeting, depending on the nature of the matter.",
    fallbackNote: "If the calendar does not load, you can use the form or call us.",
    iframeTitle: "Appointment calendar",
  },
  de: {
    heading: "Besprechungstermin vereinbaren",
    body: "Im untenstehenden Kalender können Sie einen passenden Termin für ein Erstgespräch mit unserer Kanzlei auswählen. Honorar und Umfang der Beratung werden im Gespräch je nach Art der Angelegenheit festgelegt.",
    fallbackNote: "Falls der Kalender nicht lädt, können Sie das Formular nutzen oder uns anrufen.",
    iframeTitle: "Terminkalender",
  },
  ru: {
    heading: "Запланируйте встречу",
    body: "В календаре ниже вы можете выбрать удобные дату и время для предварительной встречи с нашей фирмой. Стоимость и объём консультации определяются на встрече в зависимости от характера дела.",
    fallbackNote: "Если календарь не загружается, воспользуйтесь формой или позвоните нам.",
    iframeTitle: "Календарь записи",
  },
  ar: {
    heading: "حدد موعد اجتماع",
    body: "يمكنك اختيار التاريخ والوقت المناسبين لاجتماع أولي مع مكتبنا من التقويم أدناه. تُحدد أتعاب الاستشارة ونطاقها في الاجتماع حسب طبيعة المسألة.",
    fallbackNote: "إذا لم يتم تحميل التقويم، يمكنك استخدام النموذج أو الاتصال بنا.",
    iframeTitle: "تقويم المواعيد",
  },
  es: {
    heading: "Programe una reunión",
    body: "En el calendario siguiente puede elegir la fecha y la hora que le convengan para una reunión inicial con nuestro despacho. Los honorarios y el alcance de la consulta se determinan en la reunión, según la naturaleza del asunto.",
    fallbackNote: "Si el calendario no se carga, puede utilizar el formulario o llamarnos.",
    iframeTitle: "Calendario de citas",
  },
  fr: {
    heading: "Planifiez un rendez-vous",
    body: "Vous pouvez choisir dans le calendrier ci-dessous la date et l'heure qui vous conviennent pour un premier entretien avec notre cabinet. Les honoraires et l'étendue de la consultation sont déterminés lors de l'entretien, selon la nature du dossier.",
    fallbackNote: "Si le calendrier ne se charge pas, vous pouvez utiliser le formulaire ou nous appeler.",
    iframeTitle: "Calendrier de rendez-vous",
  },
  zh: {
    heading: "预约会面",
    body: "您可以在下方日历中选择方便的日期和时间，与我们的事务所进行初次会谈。咨询费用及范围将根据事务性质在会谈中确定。",
    fallbackNote: "如日历无法加载，您可以使用表格或致电我们。",
    iframeTitle: "预约日历",
  },
};

function isLocale(v: string): v is Locale {
  return ["tr", "en", "de", "ru", "ar", "es", "fr", "zh"].includes(v);
}

export function BookingSection() {
  const localeRaw = useLocale();
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "tr";
  const c = COPY[locale];

  if (!BOOKING_URL) return null;

  return (
    <section className="rounded-xl border border-cream-200 bg-cream-50 dark:border-navy-800 dark:bg-navy-900 px-6 py-7 md:px-8 md:py-8">
      <div className="flex items-start gap-3">
        <CalendarClock
          className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400"
          size={20}
        />
        <div>
          <h2 className="font-display text-xl md:text-2xl text-navy-900 dark:text-cream-50">
            {c.heading}
          </h2>
          <p className="mt-2 text-sm text-ink-soft dark:text-cream-300 leading-relaxed">
            {c.body}
          </p>
        </div>
      </div>

      {/*
        bg-white yerine inline stil: globals.css'teki `.dark .bg-white { ...navy
        !important }` global kuralı bu kutuyu da koyulaştırıyordu; inline stil o
        kuralın eşleşmesini engelleyip kartı koyu modda da beyaz tutar (iframe
        yüklenirken ve yuvarlak köşelerde navy sızmasın diye). [color-scheme:light]
        hem iframe'i hem de kutunun kendi kaydırma çubuğunu açık temada tutar.
      */}
      <div
        className="mt-5 max-h-[320px] overflow-y-auto rounded-lg border border-cream-200 dark:border-navy-700 [color-scheme:light]"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/*
          Google'ın kendi sayfası cross-origin olduğundan iframe yüksekliği
          içeriğe göre otomatik ölçülemez (CORS). Bu yüzden iframe'e içeriğin
          tamamının sığacağı sabit bir yükseklik veriyoruz (Google'ın kendi iç
          scroll çubuğu hiç devreye girmesin diye); görünür alanı ise sarmalayan
          div'in max-h + overflow-y-auto'su sınırlıyor — böylece kutu yuvarlak
          kenarında düzgün biter ve fazlası kutu içinde aşağı kaydırılarak görülür.

          colorScheme: "light" — ziyaretçi koyu modda olsa bile Google'ın gömülü
          randevu sayfasını her zaman açık temada render ettirir. Aksi halde
          Google prefers-color-scheme: dark'ı algılayıp arka planı koyulaştırıyor
          ama metin renklerini düzgün ayarlamadığından "Ön Görüşme — MONA HUKUK"
          gibi yazılar koyu-üstüne-koyu kalıp okunmaz oluyordu. Sarmalayan div de
          bg-white olduğundan kart koyu modda da beyaz ve okunur kalır.
        */}
        <iframe
          src={BOOKING_URL}
          title={c.iframeTitle}
          width="100%"
          height="1000"
          style={{ border: 0, display: "block", colorScheme: "light" }}
          loading="lazy"
          onLoad={() => track("booking_calendar_view", { locale })}
        />
      </div>

      <p className="mt-3 text-xs text-ink-mute dark:text-cream-300/70">
        {c.fallbackNote}
      </p>
    </section>
  );
}
