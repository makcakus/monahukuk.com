import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { routing } from "@/i18n/routing";

// scripts/sync-articles-to-r2.mjs, bir makaleyi R2'ye yükledikten SONRA bu
// route'u çağırır. Amaç: içerik senkronize edilmeden önce o URL'e gelmiş
// olabilecek bir isteğin ürettiği notFound() sonucunun, R2 incremental
// cache'te (mona-site-cache-v2) kalıcı olarak sıkışıp kalmasını önlemek —
// aksi hâlde gerçek içerik senkronize edildikten sonra bile aynı URL bir
// sonraki tam deploy'a kadar eski 404'ü sunmaya devam eder.
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { locale, slug } = (await req.json().catch(() => ({}))) as {
    locale?: string;
    slug?: string;
  };

  if (
    !locale ||
    !slug ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    return NextResponse.json({ error: "invalid locale or slug" }, { status: 400 });
  }

  revalidatePath(`/${locale}/articles/${slug}`);
  return NextResponse.json({ revalidated: true, path: `/${locale}/articles/${slug}` });
}
