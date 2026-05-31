import os, re

base = r'C:\Users\avmus\mona-site\content\articles'
locales = ['ar', 'de', 'en', 'fr', 'ru', 'tr']

for locale in locales:
    fpath = os.path.join(base, locale, 'humanitarian-residence-permit-turkey.mdx')
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'rb') as f:
        content = f.read().decode('utf-8')
    m = re.search(r'^description:(.+)$', content, re.MULTILINE)
    if m:
        val = m.group(1).strip()
        has_colon = ':' in val and not val.startswith('"')
        flag = ' COLON_TIRMAKSIZ' if has_colon else ' OK'
        print(f'{locale}{flag}: {val[:80]}')
