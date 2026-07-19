import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

// OpenNext-Cloudflare serves every generateStaticParams page (articles,
// practice areas, legal news, newsletter — ~2200 pages) through the
// incremental cache, even with no ISR. R2's free tier (10GB storage, ~1M
// ops/month, no daily cap) comfortably covers a one-shot deploy populate;
// Workers KV's 1,000 writes/day free cap does not.
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
