/**
 * Tek komutla tam deploy: build -> worker deploy -> R2 cache doldurma.
 *
 * Neden ayrı bir script: `opennextjs-cloudflare deploy` cache'i worker'dan
 * ÖNCE doldurmaya çalışıyor ve Cloudflare'in geçici dev-tünel altyapısı
 * kararsız olduğu için (tekrarlayan 503) deploy hiç gerçekleşmiyordu.
 * Burada worker'ı OPEN_NEXT_DEPLOY=true ile cache'ten bağımsız deploy edip,
 * cache'i doğrudan R2 API'sine yazan kendi script'imizle dolduruyoruz.
 *
 * Kullanım:  npm run deploy:full
 *
 * DİKKAT: son adım (cache doldurma) atlanırsa makale sayfaları 404 verir —
 * yeni build ID'sinin cache kayıtları R2'de bulunmadığı için.
 */
import { execSync } from "node:child_process";
import { rmSync } from "node:fs";

// Önceki denemelerden kalan .next/.open-next, bozuk/eksik tip dosyaları
// nedeniyle build'i düşürebiliyor (görüldü: .next/dev/types/routes.d.ts).
for (const dir of [".next", ".open-next"]) {
  rmSync(dir, { recursive: true, force: true });
}

const steps = [
  {
    name: "1/3 Build (OpenNext + Next.js)",
    cmd: "npx opennextjs-cloudflare build",
    env: {},
  },
  {
    name: "2/3 Worker deploy (Cloudflare)",
    cmd: "npx wrangler deploy",
    env: { OPEN_NEXT_DEPLOY: "true" },
  },
  {
    name: "3/3 R2 incremental cache doldurma",
    cmd: "node scripts/direct-r2-populate.mjs",
    env: {},
  },
];

for (const step of steps) {
  console.log(`\n===== ${step.name} =====\n`);
  try {
    execSync(step.cmd, {
      stdio: "inherit",
      env: { ...process.env, ...step.env },
    });
  } catch {
    console.error(`\n✗ Adım başarısız: ${step.name}`);
    console.error("Deploy yarıda kesildi. Hatayı giderip tekrar çalıştırın.");
    process.exit(1);
  }
}

console.log("\n✅ Deploy tamamlandı. https://monahukuk.com/tr/articles adresini kontrol edin.");
