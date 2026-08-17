import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import kvTagCache from "@opennextjs/cloudflare/overrides/tag-cache/kv-next-tag-cache";

// OpenNext-Cloudflare serves every generateStaticParams page (articles,
// practice areas, legal news, newsletter — ~2200 pages) through the
// incremental cache, even with no ISR. R2's free tier (10GB storage, ~1M
// ops/month, no daily cap) comfortably covers a one-shot deploy populate;
// Workers KV's 1,000 writes/day free cap does not.
//
// tagCache: revalidatePath()/revalidateTag() sessizce no-op olan varsayılan
// "dummy" tag cache yerine gerçek bir KV tabanlı tag cache kullanıyor.
// KV yazımı yalnızca revalidatePath çağrıldığında olur (her sayfa cache'e
// yazıldığında DEĞİL — nextMode'da updateTagsOnSet atlanır), bu yüzden
// KV'nin 1.000 yazım/gün limiti içinde kalır. scripts/sync-articles-to-r2.mjs
// her senkronize edilen makale için bir revalidate çağrısı yapıyor.
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
  tagCache: kvTagCache,
});
