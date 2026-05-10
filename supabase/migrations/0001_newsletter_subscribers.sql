-- Newsletter abone listesi (KVKK + double opt-in)
-- Çalıştırma: Supabase Dashboard → SQL Editor → bu dosyanın içeriğini yapıştır → Run.

create extension if not exists "pgcrypto";

create table if not exists public.newsletter_subscribers (
  id                  uuid primary key default gen_random_uuid(),
  email               text not null,
  language            text not null check (language in ('tr','en','de','ru','ar')),
  status              text not null default 'pending'
                       check (status in ('pending','confirmed','unsubscribed','bounced')),
  consent_timestamp   timestamptz not null default now(),
  ip_address          inet,
  user_agent          text,
  confirmation_token  text not null unique,
  token_expires_at    timestamptz not null,
  unsubscribe_token   text not null unique,
  confirmed_at        timestamptz,
  unsubscribed_at     timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- Aynı e-posta birden fazla kez abone olmak isteyebilir; sadece "aktif" kayıtlar
-- (pending + confirmed) için tekillik. unsubscribed eski kayıtlar bozulmasın.
create unique index if not exists newsletter_subscribers_active_email_idx
  on public.newsletter_subscribers (lower(email))
  where status in ('pending','confirmed');

create index if not exists newsletter_subscribers_status_idx
  on public.newsletter_subscribers (status);

-- updated_at otomatik
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists newsletter_subscribers_updated_at on public.newsletter_subscribers;
create trigger newsletter_subscribers_updated_at
  before update on public.newsletter_subscribers
  for each row execute function public.touch_updated_at();

-- RLS: yalnızca service_role (server) erişebilsin. Anon ve authenticated client erişemez.
alter table public.newsletter_subscribers enable row level security;

-- Politika tanımlamıyoruz; RLS açık + politika yok = anon/authenticated için tam reddet.
-- service_role anahtar RLS'i bypass eder, server tarafı yine yazıp okuyabilir.
