#!/usr/bin/env python3
"""resources/logo.png dosyasını yeniden üretir: şeffaf zemin, iki renkli "M.O.N.A. HUKUK" yazısı ve
"ANTALYA · TÜRKİYE" altyazısı (sitenin başlığıyla aynı). Şablon logoyu olduğu gibi (renkleriyle) basar.
Gerçek logo dosyası gelirse bu dosyanın yerine onu koy (şeffaf PNG, en az 200 px genişlik)."""
import base64
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

SKILL = Path(__file__).resolve().parent.parent
FONT = SKILL / "resources/fonts/CormorantGaramond-Variable.ttf"
SANS = SKILL / "resources/fonts/AlegreyaSans-Medium.ttf"
OUT = SKILL / "resources/logo.png"

# Sitenin başlığıyla aynı: "M.O.N.A. HUKUK" (Cormorant, krem) + altında "ANTALYA · TÜRKİYE" (Alegreya Sans, altın).
HTML = f"""<!doctype html><meta charset="utf-8"><style>
@font-face {{ font-family: "CG"; src: url("file://{FONT}"); font-weight: 300 700; }}
@font-face {{ font-family: "AS"; src: url("file://{SANS}"); font-weight: 500; }}
html, body {{ margin: 0; background: transparent; }}
.mark {{ display: inline-block; padding: 60px; }}
.name {{ font-family: "CG", serif; font-weight: 600; font-size: 230px; line-height: 1; letter-spacing: .01em;
  color: #F5F1E6; white-space: nowrap; }}
.sub {{ font-family: "AS", sans-serif; font-weight: 500; font-size: 62px; line-height: 1; letter-spacing: .24em;
  color: #D3A14A; margin-top: 38px; white-space: nowrap; text-transform: uppercase; }}
</style><div class="mark"><div class="name">M.O.N.A. HUKUK</div><div class="sub">Antalya · Türkiye</div></div>"""


def main():
    tmp = OUT.with_suffix(".tmp.png")
    with sync_playwright() as p:
        import glob
        exe = sorted(glob.glob("/opt/pw-browsers/chromium-*/chrome-linux/chrome"))
        b = p.chromium.launch(executable_path=exe[-1] if exe else None, args=["--allow-file-access-from-files"])
        pg = b.new_page(viewport={"width": 1600, "height": 1100})
        page_file = OUT.with_suffix(".tmp.html")
        page_file.write_text(HTML, encoding="utf-8")
        pg.goto(page_file.as_uri())
        pg.evaluate("Promise.all([document.fonts.load('600 100px CG'), document.fonts.load('500 40px AS')])")
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
