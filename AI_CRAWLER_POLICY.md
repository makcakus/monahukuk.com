# AI Tarayıcı Politikası

Sitenin yapay zekâ tarayıcılarına karşı duruşu iki katmanda tanımlanır:

| Katman | Nerede | Ne yapar | Bağlayıcı mı? |
|---|---|---|---|
| Beyan | [`src/app/robots.ts`](src/app/robots.ts) → `/robots.txt` | Hangi botun neye eriştiğini bildirir | Hayır — bot uymayı seçer |
| Yaptırım | Cloudflare WAF (dashboard) | İstek hızını fiilen sınırlar | Evet |

Kod tarafı bu repoda; **yaptırım katmanı Cloudflare panelinden elle kurulmalıdır** (bu repoda Cloudflare API token'ı tutulmuyor).

## Temel ayrım: alıntılayan bot ≠ eğitim botu

GEO (Generative Engine Optimization) hedefimiz, bir kullanıcı ChatGPT/Perplexity/Gemini'ye hukuki bir soru sorduğunda monahukuk.com'un **kaynak olarak gösterilmesidir**. Bunu yapan tarayıcılar ile model eğitimi için toplu içerik çeken tarayıcılar farklıdır ve aynı kefeye konulmamalıdır.

**Alıntılayan / arama tarafı — tam erişim (`Allow: /`)**

`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `Google-Extended`, `Applebot-Extended`, `Amazonbot`, `meta-externalagent`, `cohere-ai`, `YouBot`

`Google-Extended` ve `Applebot-Extended` gerçek birer tarayıcı değil, birer **opt-in anahtarıdır**: `robots.txt`'te açıkça `Allow` yazılmazsa Google AI Overviews ve Apple Intelligence alıntılarından çıkarılırız. Bu yüzden listede yer alıyorlar.

**Yalnızca eğitim tarafı — erişim var, hız sınırlı (`Crawl-delay: 10`)**

`GPTBot`, `CCBot`, `Bytespider`, `Diffbot`, `Omgilibot`, `ImagesiftBot`, `Timpibot`, `Webzio-Extended`, `PanguBot`, `AI2Bot`

Bu grup bilinçli olarak **engellenmiyor**: eğitim verisinde yer almak uzun vadede marka bilinirliği sağlar ve GPTBot'u kapatmak ChatGPT Search'teki görünürlüğü artırmaz. Amaç yalnızca 711 makalelik arşivi dakikalar içinde tarayıp Workers isteklerini şişirmelerini önlemek.

## Cloudflare'de yapılacaklar

### 1. "Block AI Scrapers and Crawlers" toggle'ını AÇMAYIN

Security → Settings altındaki bu tek düğme, alıntılayan botları da (OAI-SearchBot, PerplexityBot dâhil) engeller. Açılırsa yukarıdaki GEO çalışmasının tamamı boşa gider. Kapalı kalmalı.

### 2. Rate limiting kuralı

Dashboard → `monahukuk.com` → **Security → WAF → Rate limiting rules → Create rule**

- **Rule name:** `Egitim AI tarayicilari - hiz siniri`
- **If incoming requests match** → *Edit expression* → aşağıdaki ifadeyi yapıştırın:

```
(http.user_agent contains "GPTBot") or
(http.user_agent contains "CCBot") or
(http.user_agent contains "Bytespider") or
(http.user_agent contains "Diffbot") or
(http.user_agent contains "Omgilibot") or
(http.user_agent contains "ImagesiftBot") or
(http.user_agent contains "Timpibot") or
(http.user_agent contains "Webzio") or
(http.user_agent contains "PanguBot") or
(http.user_agent contains "AI2Bot")
```

- **Characteristics:** IP
- **Rate:** `30` istek / `1 minute`
- **Then take action:** `Block`, süre `1 minute`

Dakikada 30 istek, bir tarayıcının arşivi makul sürede taramasına izin verir (711 TR + çeviriler ≈ 1 saat) ama saldırgan hızda çekmesini engeller.

> Free planda tek bir rate limiting kuralı hakkı vardır ve periyot seçenekleri 10 sn / 1 dk ile sınırlıdır. Başka bir kural gerekiyorsa Pro'ya çıkmak gerekir.

### 3. Doğrulama

Kural devreye girdikten sonra Security → Events ekranında `Rate limiting` action'ıyla filtreleyin. Bir hafta içinde:

- OAI-SearchBot / PerplexityBot olayları görünüyorsa **kural fazla geniş** — ifadeyi daraltın.
- Hiç olay yoksa zaten sorun yoktu; kural sigorta olarak kalabilir.

`robots.txt` çıktısını her deploy sonrası kontrol edin:

```bash
curl -s https://monahukuk.com/robots.txt
```

## İlgili

- [`src/app/llms.txt`](src/app/llms.txt) — yanıt motorlarına site haritası/özet sunan uç
- [`src/app/robots.ts`](src/app/robots.ts) — yukarıdaki listelerin tek kaynağı
