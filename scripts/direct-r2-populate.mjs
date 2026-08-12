import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { globSync } from "glob";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileP = promisify(execFile);

const OUTPUT_DIR = path.resolve(".open-next");
const BUCKET = "mona-site-cache-v2";
const PREFIX = "incremental-cache";
const CONCURRENCY = 6;

function computeCacheKey(key, buildId, cacheType) {
  const hash = crypto.createHash("sha256").update(key).digest("hex");
  return `${PREFIX}/${buildId}/${hash}.${cacheType}`.replace(/\/+/g, "/");
}

function getCacheAssets() {
  const allFiles = globSync(path.join(OUTPUT_DIR, "cache/**/*"), {
    withFileTypes: true,
    windowsPathsNoEscape: true,
  }).filter((f) => f.isFile());
  const baseCacheDir = path.join(OUTPUT_DIR, "cache");
  const assets = [];
  for (const file of allFiles) {
    const fullPath = file.fullpath();
    const relativePath = path
      .relative(baseCacheDir, fullPath)
      .split(path.sep)
      .join("/");
    if (relativePath.startsWith("__fetch")) {
      const [, buildId, ...keyParts] = relativePath.split("/");
      if (!buildId || keyParts.length === 0) continue;
      assets.push({ isFetch: true, fullPath, key: `/${keyParts.join("/")}`, buildId });
    } else {
      if (!relativePath.endsWith(".cache")) continue;
      const [buildId, ...keyParts] = relativePath.slice(0, -".cache".length).split("/");
      if (!buildId || keyParts.length === 0) continue;
      assets.push({ isFetch: false, fullPath, key: `/${keyParts.join("/")}`, buildId });
    }
  }
  return assets;
}

async function putOne(asset, index, total) {
  const r2Key = computeCacheKey(asset.key, asset.buildId, asset.isFetch ? "fetch" : "cache");
  const maxAttempts = 6;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await execFileP(
        "npx",
        ["wrangler", "r2", "object", "put", `${BUCKET}/${r2Key}`, "--remote", "--file", asset.fullPath],
        { shell: true, maxBuffer: 1024 * 1024 * 20 }
      );
      if (index % 25 === 0) console.log(`[${index}/${total}] OK ${r2Key}`);
      return;
    } catch (e) {
      if (attempt === maxAttempts) {
        console.error(`[${index}/${total}] FAILED after ${maxAttempts} attempts: ${r2Key}`);
        console.error(e.stderr || e.message);
        throw e;
      }
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
}

async function main() {
  const assets = getCacheAssets();
  console.log(`Found ${assets.length} cache assets to upload.`);
  let idx = 0;
  let failed = 0;
  const queue = assets.slice();
  async function worker() {
    while (queue.length) {
      const asset = queue.shift();
      idx++;
      try {
        await putOne(asset, idx, assets.length);
      } catch {
        failed++;
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`Done. ${assets.length - failed}/${assets.length} succeeded, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main();
