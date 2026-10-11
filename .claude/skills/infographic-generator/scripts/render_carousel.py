#!/usr/bin/env python3
"""slides.json -> Instagram carousel (1080x1350, varsayılan 2x = 2160x2700 JPEG).

    python3 render_carousel.py output/<slug>/slides.json [--slide N] [--scale 2]
"""
import argparse
import base64
import json
import re
import sys
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape
from markupsafe import Markup, escape
from PIL import Image
from playwright.sync_api import sync_playwright

SKILL = Path(__file__).resolve().parent.parent
FONTS = SKILL / "resources/fonts"
LOGO = SKILL / "resources/logo.png"
W, H = 1080, 1350
FOOTER = "ardona.ai"
FONT_FILES = {
    "serif": "InstrumentSerif-Regular.ttf",
    "serif_italic": "InstrumentSerif-Italic.ttf",
    "sans": "Manrope-Variable.ttf",
    "mono": "JetBrainsMono-Variable.ttf",
}
FONT_SPECS = ['400 40px "Instrument Serif"', 'italic 400 40px "Instrument Serif"',
              '400 22px "Manrope"', '500 12px "JetBrains Mono"']
EMOJI = re.compile("[\U0001F000-\U0001FAFF☀-➿⬀-⯿️]")
PITCH = re.compile(r"\b(dm me|dm us|link in bio)\b", re.I)


class Stop(Exception):
    pass


def accents_in(text, where):
    n = text.count("*")
    if n not in (0, 2):
        raise Stop(f"{where}: at most one *accent* per slide ({n} asterisks found).")
    return n // 2


def validate(deck):
    slides = deck.get("slides") or []
    if not re.fullmatch(r"[a-z0-9-]+", deck.get("slug", "")):
        raise Stop("slug missing or invalid (lowercase, digits, hyphens).")
    if not 3 <= len(slides) <= 7:
        raise Stop(f"3–7 slides required, got {len(slides)}.")
    if slides[0].get("role") != "cover" or slides[-1].get("role") != "closing":
        raise Stop("First slide must be cover, last must be closing.")
    texts = []
    for i, s in enumerate(slides, 1):
        where, role = f"Slide {i:02d}", s.get("role")
        if role == "cover":
            if i != 1 or set(s) - {"role", "headline"}:
                raise Stop(f"{where}: the cover is one headline and nothing else.")
            accents_in(s["headline"], where)
            texts.append(s["headline"])
        elif role == "body":
            body = s.get("body") or []
            if not s.get("heading") or not isinstance(body, list) or not 1 <= len(body) <= 2:
                raise Stop(f"{where}: needs a heading and 1–2 body lines.")
            if s.get("layout") not in (None, "A", "B"):
                raise Stop(f"{where}: layout must be A or B.")
            if any("*" in b for b in body):
                raise Stop(f"{where}: accents belong in the heading only.")
            accents_in(s["heading"], where)
            texts += [s["heading"], *body]
        elif role == "closing" and i == len(slides):
            if not s.get("headline") or not s.get("cta"):
                raise Stop(f"{where}: closing needs headline and cta.")
            if "*" in s["headline"]:
                raise Stop(f"{where}: the closing slide's accent is the end mark; no *accent* word.")
            texts += [s["headline"], s["cta"]]
        else:
            raise Stop(f"{where}: invalid role {role!r}.")
    joined = " ".join(texts)
    if EMOJI.search(joined):
        raise Stop("Emoji found in copy.")
    if PITCH.search(joined):
        raise Stop(f"Hard pitch in copy ({PITCH.search(joined).group(0)}). The CTA is an invitation.")


def check_logo(allow_missing):
    if not LOGO.exists():
        if allow_missing:
            print("logo: MISSING — rendering preview with an empty logo slot (--preview-without-logo)")
            return None, 4.0
        raise Stop(f"No logo at {LOGO}. Drop in a transparent PNG (at least 200px wide).")
    im = Image.open(LOGO)
    alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if not alpha or im.width < 200:
        raise Stop("logo.png must have an alpha channel and be at least 200px wide. Export a transparent PNG; "
                   "I won't try to key the background out.")
    print(f"logo: {im.width}x{im.height} {im.mode}, alpha ok")
    return "data:image/png;base64," + base64.b64encode(LOGO.read_bytes()).decode(), im.width / im.height


def words(text, endmark=False):
    in_acc, out = False, []
    raws = text.split()
    for idx, raw in enumerate(raws):
        parts = []
        for k, seg in enumerate(raw.split("*")):
            if k:
                in_acc = not in_acc
            if seg:
                parts.append(f'<em class="accent">{escape(seg)}</em>' if in_acc else str(escape(seg)))
        last = endmark and idx == len(raws) - 1
        if last:
            parts.append('<i class="endmark"></i>')
        out.append(f'<span class="w"{" style=white-space:nowrap" if last else ""}>{"".join(parts)}</span>')
    return Markup(" ".join(out))


def build(env, deck, i, logo, aspect, out):
    s = deck["slides"][i - 1]
    n = len(deck["slides"])
    layout = None
    if s["role"] == "body":
        k = sum(1 for x in deck["slides"][:i] if x["role"] == "body")
        layout = s.get("layout") or ("A" if k % 2 else "B")
    text = s.get("heading") or s.get("headline")
    html = env.get_template("slide.html").render(
        slug=deck["slug"], role=s["role"], layout=layout, folio=f"{i:02d} / {n:02d}", footer=FOOTER,
        logo=logo or "", logo_aspect=f"{aspect:.4f}",
        fonts={k: (FONTS / v).as_uri() for k, v in FONT_FILES.items()},
        text=words(text, endmark=s["role"] == "closing"), body=s.get("body") or [], cta=s.get("cta"),
        rule_accent=(layout == "B" and "*" not in text))
    path = out / "html" / f"{i:02d}.html"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html, encoding="utf-8")
    return path, layout


def load(page, path, blocked):
    blocked.clear()
    page.goto(path.as_uri(), wait_until="load")
    res = page.evaluate("""async specs => { await document.fonts.ready;
        const r = await Promise.all(specs.map(s => document.fonts.load(s)));
        return specs.map((s, i) => [s, r[i].length > 0 && r[i].every(f => f.status === 'loaded')]); }""",
                        FONT_SPECS)
    if blocked:
        raise Stop(f"{path.name}: tried to load from the network ({blocked[0]}); a font is falling back.")
    missing = [s for s, ok in res if not ok]
    if missing:
        raise Stop(f"{path.name}: fonts not loaded: {', '.join(missing)}")


def contact_sheet(out, n):
    tw = 360
    th = round(tw * H / W)
    sheet = Image.new("RGB", (n * tw + (n - 1) * 8, th), (40, 40, 40))
    for i in range(1, n + 1):
        im = Image.open(out / f"{i:02d}.jpg").resize((tw, th), Image.LANCZOS)
        sheet.paste(im, ((i - 1) * (tw + 8), 0))
    sheet.save(out / "contact-sheet.jpg", quality=90)
    print(f"contact sheet: {out / 'contact-sheet.jpg'}")


def check_caption(out):
    p = out / "caption.md"
    if not p.exists():
        print("caption: caption.md not written yet")
        return
    text = p.read_text(encoding="utf-8")
    tags = re.findall(r"#\w+", text)
    n_words = len(re.sub(r"#\w+", "", text).split())
    notes = [m for m, bad in [(f"{len(tags)} hashtags (8–15)", not 8 <= len(tags) <= 15),
                              (f"{n_words} words (60–120)", not 60 <= n_words <= 120),
                              ("emoji", bool(EMOJI.search(text)))] if bad]
    print("caption: " + ("ok" if not notes else "CHECK " + "; ".join(notes)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slides", type=Path)
    ap.add_argument("--slide", type=int, help="re-render only this slide")
    ap.add_argument("--scale", type=float, default=2)
    ap.add_argument("--preview-without-logo", action="store_true",
                    help="render with an empty logo slot when resources/logo.png is missing")
    a = ap.parse_args()

    out = a.slides.resolve().parent
    deck = json.loads(a.slides.read_text(encoding="utf-8"))
    validate(deck)
    logo, aspect = check_logo(a.preview_without_logo)
    for f in FONT_FILES.values():
        if not (FONTS / f).exists():
            raise Stop(f"Missing font {FONTS / f}; run scripts/setup.sh")
    n = len(deck["slides"])
    if a.slide and not 1 <= a.slide <= n:
        raise Stop(f"--slide must be 1..{n}")

    env = Environment(loader=FileSystemLoader(SKILL / "template"), autoescape=select_autoescape(["html"]))
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--force-color-profile=srgb", "--font-render-hinting=none",
                                          "--disable-lcd-text", "--allow-file-access-from-files"])
        page = browser.new_context(viewport={"width": W, "height": H}, device_scale_factor=a.scale).new_page()
        blocked = []

        def guard(route):
            if route.request.url.startswith(("http://", "https://")):
                blocked.append(route.request.url)
                return route.abort()
            return route.continue_()
        page.route("**/*", guard)

        baseline = None
        for i in ([a.slide] if a.slide else range(1, n + 1)):
            if baseline is None and i != 1:          # sabit öğe referansı her zaman slayt 1
                load(page, build(env, deck, 1, logo, aspect, out)[0], blocked)
                baseline = page.evaluate("furniture()")
            path, layout = build(env, deck, i, logo, aspect, out)
            load(page, path, blocked)
            report = page.evaluate("fit()")
            bad = [r for r in report if not r["ok"]]
            if bad:
                raise Stop(f"Slide {i:02d} does not fit: " + "; ".join(
                    f"{r['block']} ({r['lines']}/{r['limit']} lines at {r['size']}px)" for r in bad)
                    + ". Fix the copy, not the type size.")
            if page.evaluate("accents()") != 1:
                raise Stop(f"Slide {i:02d}: needs exactly one accent, found {page.evaluate('accents()')}.")
            furn = page.evaluate("furniture()")
            if baseline is not None and furn != baseline:
                raise Stop(f"Slide {i:02d}: furniture drifted: {furn} vs {baseline}")
            baseline = baseline or furn
            page.screenshot(path=str(out / f"{i:02d}.jpg"), type="jpeg", quality=92,
                            clip={"x": 0, "y": 0, "width": W, "height": H})
            role = deck["slides"][i - 1]["role"] + (f"/{layout}" if layout else "")
            sizes = ", ".join(f"{r['block']} {r['size']}px {r['lines']}l" for r in report if r["limit"])
            print(f"  {i:02d}  {role:<8} {sizes}")
        browser.close()

    with Image.open(out / "01.jpg") as im:
        print(f"output: {im.width}x{im.height} JPEG")
    if all((out / f"{i:02d}.jpg").exists() for i in range(1, n + 1)):
        contact_sheet(out, n)
    check_caption(out)


if __name__ == "__main__":
    try:
        main()
    except Stop as e:
        print(f"STOPPED: {e}", file=sys.stderr)
        sys.exit(1)
