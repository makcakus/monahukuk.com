# Bülten Abonelik Sistemi — Kurulum

KVKK uyumlu **double opt-in** akışı: Supabase + Resend.

## 1) Supabase

1. https://supabase.com → yeni proje oluştur (region: Frankfurt önerilir).
2. Settings → API:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** anahtarı → `SUPABASE_SERVICE_ROLE_KEY` (gizli, **anon değil**)
3. SQL Editor'da `supabase/migrations/0001_newsletter_subscribers.sql` içeriğini çalıştır. Tablo, indeksler, trigger ve RLS otomatik kurulur.
4. Tablo doğrulaması: `select * from public.newsletter_subscribers limit 1;` boş dönmeli.

## 2) Resend

1. https://resend.com → Domains → `monahukuk.com` ekle.
2. Resend'in verdiği DNS kayıtlarını ekle:
   - **MX**: `feedback-smtp.eu-west-1.amazonses.com` priority 10
   - **TXT (SPF)**: `v=spf1 include:amazonses.com ~all`
   - **TXT (DKIM)**: 3 adet `resend._domainkey` benzeri kayıt (Resend panelinden kopyala)
   - **TXT (DMARC)**: `v=DMARC1; p=none; rua=mailto:dmarc@monahukuk.com` (önerilir)
3. Domain "Verified" oluncaya kadar bekle (genelde 5–30 dk).
4. API Keys → yeni bir key oluştur (full access) → `RESEND_API_KEY`.
5. Audiences → mevcut audience'ı kullan (id zaten env'de). Yoksa yeni oluştur, id'yi `RESEND_AUDIENCE_ID`'ye yaz.

## 3) Env değişkenleri (Vercel)

Vercel → Project → Settings → Environment Variables. Hepsini **Production + Preview**'a ekle:

| Anahtar | Değer | Notlar |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Public, sayfaya da yansır |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ…` | **Sırrı koru**, NEXT_PUBLIC değil |
| `RESEND_API_KEY` | `re_…` | Mevcut key kullanılabilir |
| `RESEND_AUDIENCE_ID` | UUID | Mevcut audience |
| `RESEND_FROM_EMAIL` | `Mona Hukuk <bulten@monahukuk.com>` | Domain doğrulanmış olmalı |
| `NEXT_PUBLIC_SITE_URL` | `https://monahukuk.com` | Onay/iptal linkleri için |

Lokalde `.env.local`'a aynı anahtarları yazın (örnek: `cp .env.local.example .env.local`).

## 4) Akış

```
Form submit (locale + email + consent)
  └─► Server Action `subscribeToNewsletter`
       ├─ E-posta + IP + UA + consent_timestamp → Supabase (status=pending)
       ├─ confirmation_token (48h TTL) + unsubscribe_token üret
       └─ Resend ile doğrulama maili gönder

Kullanıcı maildeki bağlantıya tıklar
  └─► GET /api/newsletter/confirm?token=…
       ├─ Token + expiry doğrula
       ├─ Status → confirmed, confirmed_at = now()
       ├─ Resend Audience'a ekle
       └─ /[locale]/newsletter/confirmed → redirect

Her bültenin altında List-Unsubscribe + tıklanabilir link
  └─► GET (veya POST one-click) /api/newsletter/unsubscribe?token=…
       ├─ Status → unsubscribed, unsubscribed_at = now()
       ├─ Resend Audience'tan düşür
       └─ /[locale]/newsletter/unsubscribed → redirect
```

## 5) Kabul kriterleri kontrolü

- [ ] Form gönderilebiliyor (JS açık ve kapalı durumda)
- [ ] `pending` satır Supabase'de oluşuyor (`select email, status, ip_address, consent_timestamp from newsletter_subscribers order by created_at desc limit 1;`)
- [ ] Doğrulama maili kullanıcıya geliyor (gelen kutusu / spam)
- [ ] Linke tıklamadan önce satır `pending`, sonra `confirmed`
- [ ] Süresi dolmuş bağlantı → `/newsletter/expired`
- [ ] Geçersiz / kullanılmış token → `/newsletter/invalid`
- [ ] Mailin altındaki "Aboneliği iptal et" → `/newsletter/unsubscribed`, satır `unsubscribed`
- [ ] Aynı e-posta tekrar abone olmaya kalkarsa: `pending` ise yeni token + yeniden mail; `confirmed` ise `alreadyConfirmed` mesajı

## 6) Güvenlik notları

- `SUPABASE_SERVICE_ROLE_KEY` istemciye **asla sızdırılmamalı**; sadece `src/lib/supabase.ts` içinde, `import "server-only"` ile kullanılıyor.
- Tabloda RLS açık, politika tanımlı değil → anon key kullanan her client'a `permission denied` döner. Sadece service_role bypass eder.
- Token: `crypto.randomBytes(32)` → 256-bit; brute force pratik olarak imkânsız.
- Eski `pending` kayıtları periyodik temizlemek istersen Supabase Edge Function veya pg_cron ile:
  ```sql
  delete from public.newsletter_subscribers
  where status = 'pending' and token_expires_at < now() - interval '7 days';
  ```

## 7) Geliştirici testi

Lokalde Resend gerçek mail göndermek istemezsen `RESEND_API_KEY` boş bırak; doğrulama URL'si terminale loglanır:

```
[Newsletter] Resend not configured. Verify URL: http://localhost:3000/api/newsletter/confirm?token=…
```

URL'yi tarayıcıya yapıştırıp akışı uçtan uca test edebilirsin.
