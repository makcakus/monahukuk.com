#!/usr/bin/env python3
"""Instagram Content Calendar (Notion) bağlantısı.

    notion_publish.py setup                 # veritabanını kök sayfada oluşturur (bir kez)
    notion_publish.py publish output/<slug> # sayfa açar, slaytları sırayla yükler, Ready for review
    notion_publish.py approved              # paylaşılabilecek sayfalar: YALNIZ Approved

Ortam değişkenleri: NOTION_TOKEN (entegrasyon anahtarı), NOTION_ROOT_PAGE_ID (yalnız setup).
Kök sayfa entegrasyonla paylaşılmış olmalı. Ağ erişimi gerekir; render bundan bağımsızdır.

Kural: paylaşım yapan her kod (poster) yalnız Status = Approved sayfalarla çalışır.
Bunun tek kapısı assert_postable(); başka bir statüde iş yapılmaz.
"""
import json
import mimetypes
import os
import re
import sys
import urllib.error
import urllib.request
import uuid
from pathlib import Path

SKILL = Path(__file__).resolve().parent.parent
CONFIG = SKILL / "resources/notion.json"
API = "https://api.notion.com/v1"
VERSION = "2022-06-28"
DB_TITLE = "Instagram Content Calendar"
STATUSES = ["Draft", "Ready for review", "Approved", "Rejected", "Posted", "Failed"]
POSTABLE = "Approved"
CHUNK = 2000                                  # Notion rich_text parça sınırı


class Stop(Exception):
    pass


def token():
    t = os.environ.get("NOTION_TOKEN")
    if not t:
        raise Stop("NOTION_TOKEN yok. Notion entegrasyon anahtarını ortam değişkeni olarak ver.")
    return t


def call(method, path, body=None, data=None, content_type="application/json"):
    headers = {"Authorization": f"Bearer {token()}", "Notion-Version": VERSION}
    if body is not None:
        data = json.dumps(body).encode()
    if data is not None:
        headers["Content-Type"] = content_type
    req = urllib.request.Request(API + path, data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read() or b"{}")
    except urllib.error.HTTPError as e:
        raise Stop(f"Notion {method} {path} -> {e.code}: {e.read().decode(errors='replace')[:600]}")
    except urllib.error.URLError as e:
        raise Stop(f"Notion'a ulaşılamadı ({e.reason}). Ağ politikası api.notion.com'a izin veriyor mu?")


def text(s):
    return [{"type": "text", "text": {"content": s[i:i + CHUNK]}} for i in range(0, len(s), CHUNK)] or []


def database_id():
    if CONFIG.exists():
        return json.loads(CONFIG.read_text())["database_id"]
    raise Stop(f"{CONFIG} yok. Önce: notion_publish.py setup")


# ---------------------------------------------------------------- setup

def setup():
    if CONFIG.exists():
        print(f"Zaten kurulu: {json.loads(CONFIG.read_text())['url']}")
        return
    root = os.environ.get("NOTION_ROOT_PAGE_ID")
    if not root:
        raise Stop("NOTION_ROOT_PAGE_ID yok (veritabanının açılacağı kök sayfanın kimliği).")
    found = call("POST", "/search", {"query": DB_TITLE, "filter": {"property": "object", "value": "database"}})
    for db in found.get("results", []):
        if "".join(t["plain_text"] for t in db.get("title", [])) == DB_TITLE:
            raise Stop(f"'{DB_TITLE}' zaten var: {db['url']}. Kullanılacaksa id'sini {CONFIG} dosyasına yaz.")
    db = call("POST", "/databases", {
        "parent": {"type": "page_id", "page_id": root},
        "title": text(DB_TITLE),
        "properties": {
            "Name": {"title": {}},
            "Topic": {"rich_text": {}},
            "Status": {"select": {"options": [{"name": s} for s in STATUSES]}},
            "Scheduled date": {"date": {}},
            "Caption": {"rich_text": {}},
            "Slides": {"files": {}},
            "Slide count": {"number": {"format": "number"}},
        },
    })
    CONFIG.write_text(json.dumps({"database_id": db["id"], "url": db["url"]}, indent=2) + "\n")
    print(f"Veritabanı oluşturuldu: {db['url']}")


# ---------------------------------------------------------------- publish

def upload(path):
    ctype = mimetypes.guess_type(path.name)[0] or "image/jpeg"
    fu = call("POST", "/file_uploads", {"filename": path.name, "content_type": ctype})
    boundary = uuid.uuid4().hex
    body = (f"--{boundary}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"{path.name}\"\r\n"
            f"Content-Type: {ctype}\r\n\r\n").encode() + path.read_bytes() + f"\r\n--{boundary}--\r\n".encode()
    sent = call("POST", f"/file_uploads/{fu['id']}/send", data=body,
                content_type=f"multipart/form-data; boundary={boundary}")
    if sent.get("status") != "uploaded":
        raise Stop(f"{path.name} yüklenemedi: {sent.get('status')}")
    return {"type": "file_upload", "file_upload": {"id": fu["id"]}, "name": path.name}


def read_caption(out):
    p = out / "caption.md"
    if not p.exists():
        raise Stop(f"{p} yok. Caption yazılmadan sayfa açılmaz.")
    return p.read_text(encoding="utf-8").strip()


def publish(out):
    out = Path(out).resolve()
    deck = json.loads((out / "slides.json").read_text(encoding="utf-8"))
    n = len(deck["slides"])
    slides = [out / f"{i:02d}.jpg" for i in range(1, n + 1)]
    missing = [s.name for s in slides if not s.exists()]
    if missing:
        raise Stop(f"Render eksik: {', '.join(missing)}. Önce render_carousel.py.")
    caption = read_caption(out)
    title = re.sub(r"\*", "", deck["slides"][0]["headline"])

    record = out / "notion.json"
    existing = json.loads(record.read_text()) if record.exists() else None
    if existing:
        page = call("GET", f"/pages/{existing['page_id']}")
        status = (page["properties"]["Status"].get("select") or {}).get("name")
        if status == "Posted":
            raise Stop(f"Bu carousel zaten paylaşıldı ({existing['url']}); paylaşılmış sayfa değiştirilmez.")

    files = [upload(s) for s in slides]               # slayt sırasıyla
    props = {
        "Name": {"title": text(title)},
        "Topic": {"rich_text": text(deck["topic"])},
        "Caption": {"rich_text": text(caption)},
        "Slide count": {"number": n},
        "Slides": {"files": files},
        "Status": {"select": {"name": "Ready for review"}},  # her yeni render yeniden onay ister
    }
    if existing:
        page = call("PATCH", f"/pages/{existing['page_id']}", {"properties": props})
    else:
        page = call("POST", "/pages", {"parent": {"database_id": database_id()}, "properties": props})
    record.write_text(json.dumps({"page_id": page["id"], "url": page["url"]}, indent=2) + "\n")
    print(f"Notion: {page['url']} ({n} slayt, Ready for review)")


# ---------------------------------------------------------------- poster kapısı

def status_of(page):
    return (page["properties"]["Status"].get("select") or {}).get("name")


def assert_postable(page):
    """Paylaşımdan hemen önce sayfayı Notion'dan TAZE okuyup çağır. Approved değilse durur."""
    fresh = call("GET", f"/pages/{page['id']}")
    if status_of(fresh) != POSTABLE:
        raise Stop(f"Sayfa {fresh['url']} durumu '{status_of(fresh)}'. Yalnız '{POSTABLE}' paylaşılabilir.")
    return fresh


def approved():
    res = call("POST", f"/databases/{database_id()}/query",
               {"filter": {"property": "Status", "select": {"equals": POSTABLE}},
                "sorts": [{"property": "Scheduled date", "direction": "ascending"}]})
    pages = [p for p in res.get("results", []) if status_of(p) == POSTABLE]
    for p in pages:
        date = (p["properties"]["Scheduled date"].get("date") or {}).get("start") or "-"
        name = "".join(t["plain_text"] for t in p["properties"]["Name"]["title"])
        print(f"{date}  {name}  {p['url']}")
    if not pages:
        print("Approved sayfa yok; paylaşılacak bir şey yok.")
    return pages


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "setup":
        setup()
    elif cmd == "publish" and len(sys.argv) == 3:
        publish(sys.argv[2])
    elif cmd == "approved":
        approved()
    else:
        raise Stop(__doc__)


if __name__ == "__main__":
    try:
        main()
    except Stop as e:
        print(f"DURDU: {e}", file=sys.stderr)
        sys.exit(1)
