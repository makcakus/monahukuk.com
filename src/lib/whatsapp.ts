// Mona Hukuk WhatsApp irtibat numarası (kurucunun cep hattı).
// Ofis sabit hattı (SITE.phoneE164) WhatsApp'ta kayıtlı olmadığı için
// kullanılmıyor; çağrı ve mail için lib/site.ts'deki numara geçerli.
export const WHATSAPP_PHONE = "905323900510";

export const WHATSAPP_MESSAGES: Record<string, string> = {
  tr: "Merhaba, hukuki danışmanlık almak istiyorum.",
  en: "Hello, I would like to get legal consultation.",
  de: "Hallo, ich möchte eine rechtliche Beratung in Anspruch nehmen.",
  ru: "Здравствуйте, мне нужна юридическая консультация.",
  ar: "مرحباً، أرغب في الحصول على استشارة قانونية.",
  es: "Hola, me gustaría obtener una consulta legal.",
  fr: "Bonjour, je souhaite obtenir une consultation juridique.",
};

export function whatsappUrl(locale: string): string {
  const msg = WHATSAPP_MESSAGES[locale] ?? WHATSAPP_MESSAGES.en;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}
