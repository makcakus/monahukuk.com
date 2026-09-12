import { getAllArticles } from "@/lib/articles";
import { PRACTICE_AREAS, pickPA } from "@/lib/practice-areas";
import { SITE } from "@/lib/site";

/**
 * /llms.txt — yapay zekâ arama motorları (ChatGPT Search, Perplexity, Gemini,
 * Claude) için sitenin makinece okunabilir içindekiler dosyası.
 *
 * robots.txt tarayıcıya NEREYE giremeyeceğini söyler; llms.txt ise sitenin NE
 * olduğunu ve hangi içeriğin nerede bulunduğunu tek dosyada özetler. Henüz
 * resmî bir standart değil (llmstxt.org önerisi), destekleyen motor sayısı
 * sınırlı; bu yüzden kısa ve yoğun tutulmuştur.
 *
 * DİKKAT: Dosya kısa kalmalıdır. Makalelerin TAMAMI buraya yazılmaz — 8 dilde
 * 5.600'ü aşkın URL sitemap.xml'de zaten var. Burada kategori başına yalnızca
 * en yeni CATEGORY_LIMIT makale listelenir; gerisi için kategori indeksine ve
 * sitemap'e yönlendirilir.
 */

// Kategori başına listelenecek en yeni makale sayısı.
const CATEGORY_LIMIT = 10;

export const dynamic = "force-static";

function line(title: string, url: string, note?: string): string {
  return note ? `- [${title}](${url}): ${note}` : `- [${title}](${url})`;
}

export async function GET() {
  const tr = `${SITE.url}/tr`;
  const en = `${SITE.url}/en`;

  const out: string[] = [];

  out.push(`# ${SITE.name} — Antalya, Türkiye`);
  out.push("");
  out.push(
    `> ${SITE.legalName}, ${SITE.founded} yılında Antalya'da kurulmuş bir hukuk bürosudur. ` +
      `Yabancılar ve göçmenlik, gayrimenkul, aile, ceza, iş, ticaret, bilişim ve veri koruma ` +
      `hukuku alanlarında, Türkiye'de yaşayan veya Türkiye ile hukuki ilişkisi bulunan ` +
      `yerli ve yabancı müvekkillere hizmet verir. Site ${SITE.languages.length} dilde yayımlanır ` +
      `(${SITE.languages.join(", ")}); birincil dil Türkçe'dir.`
  );
  out.push("");
  out.push(
    `> ${SITE.legalName} is a law firm founded in ${SITE.founded} in Antalya, Türkiye, advising ` +
      `Turkish and foreign clients on immigration, real estate, family, criminal, labour, ` +
      `commercial, IT and data protection law under Turkish law.`
  );
  out.push("");

  // ── Künye ────────────────────────────────────────────────────────────────
  out.push("## Künye / Firm details");
  out.push("");
  out.push(`- Şehir / City: ${SITE.city}, ${SITE.countryName}`);
  out.push(`- Kuruluş / Founded: ${SITE.founded}`);
  out.push(`- Telefon / Phone: ${SITE.phone}`);
  out.push(`- E-posta / Email: ${SITE.email}`);
  out.push(`- Diller / Languages: ${SITE.languages.join(", ")}`);
  out.push(
    `- Çalışma saatleri / Hours: ${SITE.hours.days[0]}–${SITE.hours.days[SITE.hours.days.length - 1]}, ` +
      `${SITE.hours.opens}–${SITE.hours.closes} (Europe/Istanbul)`
  );
  out.push("");
  out.push(
    "İçerikteki tüm hukuki bilgiler Türk hukukuna ilişkindir; kanun kısaltmaları " +
      "Türkçedir (TCK: Türk Ceza Kanunu, CMK: Ceza Muhakemesi Kanunu, TTK: Türk Ticaret " +
      "Kanunu, TMK: Türk Medenî Kanunu, İİK: İcra ve İflâs Kanunu, KVKK: Kişisel Verilerin " +
      "Korunması Kanunu). All legal content concerns the law of Türkiye."
  );
  out.push("");

  // ── Ana sayfalar ─────────────────────────────────────────────────────────
  out.push("## Ana sayfalar / Main pages");
  out.push("");
  out.push(line("Ana sayfa / Home", `${tr}`, "Büro tanıtımı ve hizmet özeti"));
  out.push(line("Hakkımızda / About", `${tr}/about`, "Büronun geçmişi ve yaklaşımı"));
  out.push(line("Ekip / Team", `${tr}/team`, "Avukat kadrosu, unvan ve baro bilgileri"));
  out.push(line("Çalışma alanları / Practice areas", `${tr}/practice-areas`));
  out.push(line("Hukuki makaleler / Legal articles", `${tr}/articles`, "Türk hukuku üzerine makale arşivi"));
  out.push(line("Hukuki haberler / Legal news", `${tr}/legal-news`, "Resmî Gazete kaynaklı mevzuat haberleri"));
  out.push(
    line(
      "Hukuk sözlüğü / Legal dictionary",
      `${tr}/remindionary-hukuk-sozlugu`,
      "İngilizce–Türkçe / Türkçe–İngilizce hukuk terimleri sözlüğü"
    )
  );
  out.push(line("Uzaktan temsil / Remote representation", `${tr}/remote-representation`));
  out.push(line("İletişim / Contact", `${tr}/contact`));
  out.push(line("English homepage", `${en}`, "Aynı içeriğin İngilizce sürümü"));
  out.push("");

  // ── Çalışma alanları ─────────────────────────────────────────────────────
  out.push("## Çalışma alanları / Practice areas");
  out.push("");
  for (const area of PRACTICE_AREAS) {
    const desc = pickPA(area.description, "tr").split(". ")[0] + ".";
    out.push(line(pickPA(area.title, "tr"), `${tr}/practice-areas/${area.slug}`, desc));
  }
  out.push("");

  // ── Makaleler (kategori başına en yeniler) ───────────────────────────────
  const articles = await getAllArticles("tr");
  const byCategory = new Map<string, typeof articles>();
  for (const a of articles) {
    const cat = a.category ?? "Diğer";
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push(a);
  }

  out.push("## Hukuki makaleler / Legal articles");
  out.push("");
  out.push(
    `Arşivde ${articles.length} Türkçe makale bulunur; çoğu ${SITE.languages.length} dilde ` +
      `yayımlanmıştır. Aşağıda kategori başına en yeni ${CATEGORY_LIMIT} makale listelenmiştir. ` +
      `Tam liste: ${tr}/articles — tüm diller ve URL'ler için ${SITE.url}/sitemap.xml`
  );
  out.push("");

  const categories = [...byCategory.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [cat, list] of categories) {
    out.push(`### ${cat} (${list.length})`);
    out.push("");
    for (const a of list.slice(0, CATEGORY_LIMIT)) {
      out.push(line(a.title, `${tr}/articles/${a.slug}`, a.description));
    }
    out.push("");
  }

  // ── Kullanım ─────────────────────────────────────────────────────────────
  out.push("## Kullanım / Usage");
  out.push("");
  out.push(
    "Makaleler alıntılanabilir; alıntı yapılırken kaynak olarak makale URL'sinin " +
      "belirtilmesi beklenir. İçerik genel bilgilendirme amaçlıdır, somut bir olaya " +
      "ilişkin hukuki tavsiye yerine geçmez. / Articles may be cited with a link to the " +
      "source URL. The content is general information and is not legal advice."
  );
  out.push("");

  return new Response(out.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
