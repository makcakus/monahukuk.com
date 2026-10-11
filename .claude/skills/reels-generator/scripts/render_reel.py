#!/usr/bin/env python3
"""reel.json -> 1080x1920 MP4 Instagram Reels.

Her sahne template/scene.html'den Jinja2 ile üretilir, başsız Chromium'da
zaman elle sürülerek kare kare çekilir, ffmpeg ile seslendirmeyle birleştirilir.
Ağ yok, anahtar yok. Kullanım:

    python3 render_reel.py output/reels/<slug>/reel.json [--scene N] [--fps 30]
"""
import argparse
import base64
import json
import math
import re
import shutil
import subprocess
import sys
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape
from markupsafe import Markup, escape
from PIL import Image
from playwright.sync_api import sync_playwright

SKILL = Path(__file__).resolve().parent.parent
FONTS = SKILL / "resources/fonts"
LOGO = SKILL / "resources/logo.png"
W, H = 1080, 1920
HANDLE = "@m.o.n.a.law"
OUT_FADE = 0.3          # sahne sonu içerik kararması (sn)
AUDIO_LEAD = 0.35       # metin belirmeye başladıktan sonra ses girişi (sn)
AUDIO_TAIL = 0.55       # ses bittikten sonra nefes payı (sn)
MIN_SCENE = 3.0
AUDIO_EXT = (".mp3", ".wav", ".m4a", ".aac", ".ogg", ".flac")
IMAGE_EXT = (".jpg", ".jpeg", ".png", ".webp")

FONT_FILES = {
    "display": "CormorantGaramond-Variable.ttf",
    "display_italic": "CormorantGaramond-Italic-Variable.ttf",
    "sans_400": "AlegreyaSans-Regular.ttf",
    "sans_500": "AlegreyaSans-Medium.ttf",
    "sans_700": "AlegreyaSans-Bold.ttf",
}
FONT_SPECS = [
    '500 40px "Cormorant Garamond"',
    'italic 500 40px "Cormorant Garamond"',
    '400 20px "Alegreya Sans"',
    '500 20px "Alegreya Sans"',
]
# Reklam yasağına takılabilecek ifadeler (Av. K. m.55). Bilinçliyse --allow-ad-words.
AD_PHRASES = ["dm", "bio'daki link", "biodaki link", "link in bio", "linke tıkla", "ücretsiz danışma",
              "ücretsiz ön görüşme", "hemen arayın", "bizi arayın", "randevu alın", "indirim", "kampanya",
              "garantili", "kazanmanızı", "%100", "en iyi avukat", "en iyi hukuk"]
EMOJI = re.compile("[\U0001F000-\U0001FAFF☀-➿⬀-⯿️]")


class Stop(Exception):
    pass


# ---------------------------------------------------------------- doğrulama

def accent_count(text, where):
    n = text.count("*")
    if n not in (0, 2):
        raise Stop(f"{where}: vurgu işareti hatalı ya da birden fazla vurgu ({n} yıldız). En fazla bir *vurgu*.")
    return n // 2


def validate(reel, allow_ad):
    scenes = reel.get("scenes") or []
    if not reel.get("slug") or not re.fullmatch(r"[a-z0-9-]+", reel["slug"]):
        raise Stop("slug eksik ya da geçersiz (küçük harf, rakam, tire).")
    if not 3 <= len(scenes) <= 8:
        raise Stop(f"Sahne sayısı 3–8 olmalı, {len(scenes)} var.")
    srcs = reel.get("sources") or []
    if not srcs or not all(str(s.get("url", "")).startswith("https://") for s in srcs):
        raise Stop("sources boş ya da https bağlantısı yok. Kaynağı doğrulanmamış haber reels olmaz.")
    if scenes[0].get("role") != "cover" or scenes[-1].get("role") != "closing":
        raise Stop("İlk sahne cover, son sahne closing olmalı.")
    texts = []
    for i, s in enumerate(scenes, 1):
        role, where = s.get("role"), f"Sahne {i:02d}"
        if role not in ("cover", "body", "closing") or (role != "body" and i not in (1, len(scenes))):
            raise Stop(f"{where}: rol geçersiz ({role}).")
        if not (s.get("vo") or "").strip():
            raise Stop(f"{where}: vo (seslendirme metni) boş.")
        if role == "body":
            if not s.get("heading"):
                raise Stop(f"{where}: heading eksik.")
            body = s.get("body") or []
            if not isinstance(body, list) or not 1 <= len(body) <= 2:
                raise Stop(f"{where}: body 1 ya da 2 satırlık liste olmalı.")
            if s.get("layout") not in (None, "A", "B"):
                raise Stop(f"{where}: layout A ya da B olmalı.")
            accent_count(s["heading"], where)
            texts += [s["heading"], *body]
        else:
            if not s.get("headline"):
                raise Stop(f"{where}: headline eksik.")
            if role == "cover" and any(k in s for k in ("body", "cta", "subtitle")):
                raise Stop(f"{where}: kapakta yalnız başlık olur.")
            n = accent_count(s["headline"], where)
            if role == "closing":
                if n:
                    raise Stop(f"{where}: kapanışın vurgusu bitiş karesidir; başlıkta *vurgu* kullanma.")
                if not s.get("cta"):
                    raise Stop(f"{where}: cta eksik.")
                texts += [s["cta"], s.get("source", "")]
            texts.append(s["headline"])
        for line in s.get("body") or []:
            if "*" in line:
                raise Stop(f"{where}: gövdede vurgu olmaz.")
        texts.append(s["vo"])
    joined = " ".join(texts)
    if EMOJI.search(joined):
        raise Stop("Metinde emoji var.")
    if not allow_ad:
        low = f" {joined.lower()} "
        hits = [p for p in AD_PHRASES if re.search(rf"(?<!\w){re.escape(p)}(?!\w)", low)]
        if hits:
            raise Stop(f"Reklam yasağına takılabilecek ifade: {', '.join(hits)}. Bilinçliyse --allow-ad-words.")


def check_logo():
    if not LOGO.exists():
        raise Stop(f"Logo yok: {LOGO}. Şeffaf PNG koy ya da scripts/make_logo.py çalıştır.")
    im = Image.open(LOGO)
    alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if not alpha or im.width < 200:
        raise Stop("logo.png şeffaf zeminli ve en az 200px genişlikte olmalı. Şeffaf PNG olarak dışa aktar; "
                   "zemini otomatik silmeye çalışmıyorum.")
    print(f"logo: {im.width}x{im.height}, {im.mode}, alfa var")
    return im.width / im.height


def check_caption(out):
    cap = out / "caption.md"
    if not cap.exists():
        print("UYARI: caption.md henüz yok.")
        return
    text = cap.read_text(encoding="utf-8").strip()
    tags = re.findall(r"#[\wçğıöşüÇĞİÖŞÜ]+", text)
    words = len(re.sub(r"#[\wçğıöşüÇĞİÖŞÜ]+", "", text).split())
    notes = []
    if not 8 <= len(tags) <= 15:
        notes.append(f"hashtag sayısı {len(tags)} (8–15)")
    if not 50 <= words <= 140:
        notes.append(f"metin {words} kelime (60–120 hedef)")
    if EMOJI.search(text):
        notes.append("emoji var")
    print("caption: " + ("uygun" if not notes else "UYARI " + "; ".join(notes)))


# ---------------------------------------------------------------- yardımcılar

def words_html(text, endmark=False):
    """*vurgu* işaretli metni kelime kelime animasyonlu span'lere çevirir."""
    in_acc, out = False, []
    raws = text.split()
    for idx, raw in enumerate(raws):
        parts = []
        for k, seg in enumerate(raw.split("*")):
            if k:
                in_acc = not in_acc
            if seg:
                e = escape(seg)
                parts.append(f'<em class="accent">{e}</em>' if in_acc else str(e))
        if endmark and idx == len(raws) - 1:
            parts.append('<i class="endmark"></i>')
        style = "white-space:nowrap;" if endmark and idx == len(raws) - 1 else ""
        out.append(f'<span class="w" style="--i:{idx};{style}">{"".join(parts)}</span>')
    return Markup(" ".join(out)), len(raws)


def find_asset(folder, i, exts):
    for ext in exts:
        p = folder / f"{i:02d}{ext}"
        if p.exists():
            return p
    return None


def probe_duration(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=nw=1:nk=1", str(path)], capture_output=True, text=True)
    try:
        return float(r.stdout.strip())
    except ValueError:
        raise Stop(f"Ses süresi okunamadı: {path}")


def scene_duration(s, audio):
    if audio:
        return max(MIN_SCENE, probe_duration(audio) + AUDIO_LEAD + AUDIO_TAIL)
    # Ses yoksa: konuşma hızı ~2.6 kelime/sn, ekrandaki metni okumaya yetecek süre.
    return max(MIN_SCENE, len(s["vo"].split()) / 2.6 + 1.0)


# ---------------------------------------------------------------- render

def build_html(env, reel, i, dur, logo_uri, logo_aspect, out):
    s = reel["scenes"][i - 1]
    n = len(reel["scenes"])
    role = s["role"]
    layout = None
    body_idx = sum(1 for x in reel["scenes"][:i] if x["role"] == "body")
    if role == "body":
        layout = s.get("layout") or ("A" if body_idx % 2 == 1 else "B")
    text = s.get("heading") or s.get("headline")
    markup, nwords = words_html(text, endmark=(role == "closing"))
    has_accent_word = "*" in text
    image = find_asset(out / "images", i, IMAGE_EXT)
    if s.get("image"):
        image = (out / s["image"]).resolve()
        if not image.exists():
            raise Stop(f"Sahne {i:02d}: görsel yok: {image}")
    ctx = dict(
        slug=reel["slug"], role=role, layout=layout, last=(i == n), dur=f"{dur:.3f}",
        folio=f"{i:02d} / {n:02d}", handle=HANDLE, logo=logo_uri, logo_aspect=f"{logo_aspect:.4f}",
        fonts={k: (FONTS / v).as_uri() for k, v in FONT_FILES.items()},
        headline=markup, heading=markup, body=s.get("body") or [], cta=s.get("cta"), source=s.get("source"),
        rule_accent=(role == "body" and layout == "B" and not has_accent_word),
        body_delay=f"{0.45 + nwords * 0.085:.3f}",
        image=image.as_uri() if image else None,
    )
    html_dir = out / "html"
    html_dir.mkdir(parents=True, exist_ok=True)
    path = html_dir / f"{i:02d}.html"
    path.write_text(env.get_template("scene.html").render(**ctx), encoding="utf-8")
    return path, bool(image), layout


def open_scene(page, path, violations):
    violations.clear()
    page.goto(path.as_uri(), wait_until="load")
    if violations:
        raise Stop(f"{path.name}: ağdan yükleme denendi, durdum (font düşüyor olabilir): {violations[0]}")
    status = page.evaluate("""async specs => { await document.fonts.ready;
        const r = await Promise.all(specs.map(s => document.fonts.load(s)));
        return specs.map((s, i) => [s, r[i].length > 0 && r[i].every(f => f.status === 'loaded')]); }""",
                           FONT_SPECS)
    missing = [s for s, ok in status if not ok]
    if missing:
        raise Stop(f"{path.name}: font yüklenmedi: {', '.join(missing)}")


def shoot(page, path):
    page.screenshot(path=str(path), type="jpeg", quality=92,
                    clip={"x": 0, "y": 0, "width": W, "height": H})


def render_scene(page, env, reel, i, dur, logo_uri, aspect, out, fps, baseline, violations):
    for attempt in range(2):
        path, has_image, layout = build_html(env, reel, i, dur, logo_uri, aspect, out)
        open_scene(page, path, violations)
        settle = page.evaluate("settle()") / 1000
        last = i == len(reel["scenes"])
        need = settle + (0 if last else OUT_FADE) + 0.6
        if dur >= need:
            break
        dur = math.ceil(need * 10) / 10      # metin sesin bitmesinden uzun sürüyor; sahneyi uzat

    page.evaluate(f"seek({settle * 1000})")     # ölçüm, kelimeler yerine oturmuşken
    report = page.evaluate("fit()")
    settle = page.evaluate("settle()") / 1000
    bad = [r for r in report if not r["ok"]]
    if bad:
        detail = "; ".join(f"{r['block']} (boyut {r['size']}, {r['lines']}/{r['limit']} satır)" for r in bad)
        raise Stop(f"Sahne {i:02d} sığmıyor: {detail}. Çözüm metni kısaltmak, küçük punto değil.")
    acc = page.evaluate("accents()")
    if acc != 1:
        raise Stop(f"Sahne {i:02d}: {acc} vurgu var, tam bir tane olmalı.")
    furn = page.evaluate("furniture()")
    if baseline is not None and furn != baseline:
        raise Stop(f"Sahne {i:02d}: sabit öğeler kaydı (drift): {furn} != {baseline}")

    fdir = out / "frames" / f"{i:02d}"
    shutil.rmtree(fdir, ignore_errors=True)
    fdir.mkdir(parents=True)
    step = 1 / fps
    total = round(dur * fps)
    manifest = []
    if has_image:
        times = [k * step for k in range(total)]
        for k, t in enumerate(times):
            page.evaluate(f"seek({t * 1000})")
            shoot(page, fdir / f"{k:05d}.jpg")
            manifest.append([f"{k:05d}.jpg", step])
    else:
        k_settle = math.ceil(settle * fps)
        exit_n = 0 if i == len(reel["scenes"]) else round(OUT_FADE * fps)
        for k in range(k_settle + 1):
            page.evaluate(f"seek({k * step * 1000})")
            shoot(page, fdir / f"{k:05d}.jpg")
            manifest.append([f"{k:05d}.jpg", step])
        manifest[-1][1] = (total - exit_n - k_settle) * step       # bekleme karesi
        for j in range(exit_n):
            k = total - exit_n + j
            page.evaluate(f"seek({k * step * 1000})")
            shoot(page, fdir / f"{k:05d}.jpg")
            manifest.append([f"{k:05d}.jpg", step])

    page.evaluate(f"seek({(dur / 2 if has_image else settle) * 1000})")
    (out / "stills").mkdir(exist_ok=True)
    shoot(page, out / "stills" / f"{i:02d}.jpg")
    (fdir / "manifest.json").write_text(json.dumps({"dur": total * step, "frames": manifest}))
    sizes = ", ".join(f"{r['block']} {r['size']}px/{r['lines']} satır" for r in report if r["limit"] and r["lines"])
    print(f"  {i:02d}  {role_label(reel, i, layout):<10} {total * step:5.2f} sn  {len(manifest):3d} kare  {sizes}")
    return furn


def role_label(reel, i, layout):
    r = reel["scenes"][i - 1]["role"]
    return f"body/{layout}" if r == "body" else r


# ---------------------------------------------------------------- birleştirme

def assemble(reel, out, fps):
    n = len(reel["scenes"])
    lines, durs = ["ffconcat version 1.0"], []
    for i in range(1, n + 1):
        fdir = out / "frames" / f"{i:02d}"
        mf = fdir / "manifest.json"
        if not mf.exists():
            raise Stop(f"Sahne {i:02d} kareleri yok; önce tüm reels'i render et.")
        m = json.loads(mf.read_text())
        durs.append(m["dur"])
        for name, d in m["frames"]:
            lines += [f"file '{(fdir / name).as_posix()}'", f"duration {d:.6f}"]
    lines.append(lines[-2])                      # concat: son kare tekrar
    lst = out / "frames" / "concat.txt"
    lst.write_text("\n".join(lines) + "\n")

    cmd = ["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lst)]
    audio = [find_asset(out / "audio", i, AUDIO_EXT) for i in range(1, n + 1)]
    if any(audio):
        filters, labels, k = [], [], 0
        lead = int(AUDIO_LEAD * 1000)
        for i, (a, d) in enumerate(zip(audio, durs)):
            if a:
                k += 1
                cmd += ["-i", str(a)]
                filters.append(f"[{k}:a]aformat=sample_rates=44100:channel_layouts=stereo,adelay={lead}|{lead},"
                               f"apad=whole_dur={d:.4f},atrim=0:{d:.4f},asetpts=PTS-STARTPTS[a{i}]")
            else:
                filters.append(f"anullsrc=r=44100:cl=stereo,atrim=0:{d:.4f},asetpts=PTS-STARTPTS[a{i}]")
            labels.append(f"[a{i}]")
        filters.append(f"{''.join(labels)}concat=n={n}:v=0:a=1,loudnorm=I=-14:TP=-1.5:LRA=11,"
                       f"aresample=44100[aout]")
        cmd += ["-filter_complex", ";".join(filters), "-map", "0:v", "-map", "[aout]", "-c:a", "aac", "-b:a", "192k"]
    else:
        print("ses: audio/ klasöründe dosya yok, sessiz video üretiliyor")
    video = out / "reel.mp4"
    cmd += ["-vf", f"fps={fps},format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "17",
            "-profile:v", "high", "-r", str(fps), "-t", f"{sum(durs):.3f}", "-movflags", "+faststart", str(video)]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode:
        raise Stop(f"ffmpeg hata verdi:\n{r.stderr[-2000:]}")
    got = probe_duration(video)
    print(f"video: {video} ({got:.2f} sn, {video.stat().st_size / 1e6:.1f} MB, "
          f"{'sesli' if any(audio) else 'sessiz'})")


def contact_sheet(out, n):
    tw, th, gap = 360, 640, 12
    sheet = Image.new("RGB", (n * tw + (n + 1) * gap, th + 2 * gap), (24, 26, 32))
    for i in range(1, n + 1):
        im = Image.open(out / "stills" / f"{i:02d}.jpg").resize((tw, th), Image.LANCZOS)
        sheet.paste(im, (gap + (i - 1) * (tw + gap), gap))
    sheet.save(out / "contact-sheet.jpg", quality=90)
    shutil.copy(out / "stills" / "01.jpg", out / "cover.jpg")
    print(f"contact sheet: {out / 'contact-sheet.jpg'}")


# ---------------------------------------------------------------- ana akış

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("reel", type=Path, help="output/reels/<slug>/reel.json")
    ap.add_argument("--scene", type=int, help="yalnız bu sahneyi yeniden çek, sonra videoyu yeniden birleştir")
    ap.add_argument("--fps", type=int, default=30)
    ap.add_argument("--allow-ad-words", action="store_true")
    ap.add_argument("--clean-frames", action="store_true", help="bitince kareleri sil (yer açar; --scene artık çalışmaz)")
    a = ap.parse_args()

    out = a.reel.resolve().parent
    reel = json.loads(a.reel.read_text(encoding="utf-8"))
    validate(reel, a.allow_ad_words)
    aspect = check_logo()
    for f in FONT_FILES.values():
        if not (FONTS / f).exists():
            raise Stop(f"Font eksik: {FONTS / f}. scripts/setup.sh çalıştır.")
    if not shutil.which("ffmpeg"):
        raise Stop("ffmpeg yok.")
    logo_uri = "data:image/png;base64," + base64.b64encode(LOGO.read_bytes()).decode()

    n = len(reel["scenes"])
    targets = [a.scene] if a.scene else list(range(1, n + 1))
    if a.scene and not 1 <= a.scene <= n:
        raise Stop(f"--scene 1..{n} arası olmalı.")
    durs = {i: scene_duration(reel["scenes"][i - 1], find_asset(out / "audio", i, AUDIO_EXT))
            for i in range(1, n + 1)}

    env = Environment(loader=FileSystemLoader(SKILL / "template"), autoescape=select_autoescape(["html"]))
    print(f"{reel['slug']}: {n} sahne")
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--force-color-profile=srgb", "--font-render-hinting=none",
                                          "--disable-lcd-text", "--allow-file-access-from-files"])
        ctx = browser.new_context(viewport={"width": W, "height": H}, device_scale_factor=1)
        page = ctx.new_page()
        violations = []

        def guard(route):
            if route.request.url.startswith(("http://", "https://")):
                violations.append(route.request.url)
                return route.abort()
            return route.continue_()
        page.route("**/*", guard)

        baseline = None
        if a.scene and a.scene != 1:            # sabit öğe referansı her zaman sahne 1
            path, _, _ = build_html(env, reel, 1, durs[1], logo_uri, aspect, out)
            open_scene(page, path, violations)
            baseline = page.evaluate("furniture()")
        for i in targets:
            furn = render_scene(page, env, reel, i, durs[i], logo_uri, aspect, out, a.fps, baseline, violations)
            baseline = baseline or furn
        browser.close()

    contact_sheet(out, n)
    assemble(reel, out, a.fps)
    check_caption(out)
    if a.clean_frames:
        shutil.rmtree(out / "frames", ignore_errors=True)


if __name__ == "__main__":
    try:
        main()
    except Stop as e:
        print(f"DURDU: {e}", file=sys.stderr)
        sys.exit(1)
