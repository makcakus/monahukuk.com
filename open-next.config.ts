// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No ISR anywhere on this site (content only changes via git deploy), so no
// incremental cache backend is configured — avoids Workers KV's 1,000
// writes/day free-tier limit entirely.
export default defineCloudflareConfig({});
