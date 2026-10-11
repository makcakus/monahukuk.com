#!/usr/bin/env python3
"""resources/logo.png dosyasını yeniden üretir: şeffaf zemin, MH monogramı,
ince çizgi ve ATTORNEY AT LAW satırı (public/MH LOGO.jpeg ile aynı kurgu).

Şablon logoyu CSS mask olarak basar; yalnızca alfa kanalı kullanılır, renk
önemsizdir. Gerçek vektör/PNG logo gelirse bu dosyanın yerine onu koy."""
import base64
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

SKILL = Path(__file__).resolve().parent.parent
FONT = SKILL / "resources/fonts/CormorantGaramond-Variable.ttf"
OUT = SKILL / "resources/logo.png"

HTML = f"""<!doctype html><meta charset="utf-8"><style>
@font-face {{ font-family: "CG"; src: url("file://{FONT}"); font-weight: 300 700; }}
html, body {{ margin: 0; background: transparent; }}
.mark {{ width: 1400px; padding: 100px; color: #fff; font-family: "CG", serif;
  display: flex; flex-direction: column; align-items: stretch; }}
.mh {{ font-size: 520px; font-weight: 600; line-height: 1.1; letter-spacing: .01em;
  text-align: center; padding: 0; }}
.rule {{ height: 6px; background: #fff; margin: -50px 0 56px; }}
.sub {{ font-size: 112px; font-weight: 500; letter-spacing: .09em; text-align: center; line-height: 1; }}
</style><div class="mark"><div class="mh">MH</div><div class="rule"></div>
<div class="sub">ATTORNEY AT LAW</div></div>"""


def main():
    tmp = OUT.with_suffix(".tmp.png")
    with sync_playwright() as p:
        b = p.chromium.launch(args=["--allow-file-access-from-files"])
        pg = b.new_page(viewport={"width": 1600, "height": 1100})
        page_file = OUT.with_suffix(".tmp.html")
        page_file.write_text(HTML, encoding="utf-8")
        pg.goto(page_file.as_uri())
        pg.evaluate("Promise.all([document.fonts.load('600 100px CG'), document.fonts.load('500 100px CG')])")
        page_file.unlink()
        pg.screenshot(path=str(tmp), omit_background=True, full_page=True)
        b.close()
    im = Image.open(tmp).convert("RGBA")
    im = im.crop(im.getchannel("A").getbbox())
    im.save(OUT, optimize=True)
    tmp.unlink()
    print(f"logo.png yazıldı: {im.size[0]}x{im.size[1]}")


if __name__ == "__main__":
    main()
