import os, re

base = r'C:\Users\avmus\mona-site\content\articles'
author_map = {
    'ar': 'author: "فريق تحرير Mona Hukuk - أنطاليا"',
    'de': 'author: "Mona Hukuk Redaktionsteam - Antalya"',
    'en': 'author: "Mona Hukuk Editorial Team - Antalya"',
    'fr': 'author: "Équipe Éditoriale Mona Hukuk - Antalya"',
    'ru': 'author: "Редакция Mona Hukuk - Анталья"',
    'tr': 'author: "Mona Hukuk Editör Ekibi - Antalya"',
}

for locale, correct_author in author_map.items():
    fpath = os.path.join(base, locale, 'humanitarian-residence-permit-turkey.mdx')
    if not os.path.exists(fpath):
        print(f'SKIP {locale} - dosya yok')
        continue
    with open(fpath, 'rb') as f:
        content = f.read().decode('utf-8')
    new_content = re.sub(r'author: "Av\. Mustafa Akc?ak[uuü][ssş]"', correct_author, content)
    if new_content != content:
        with open(fpath, 'wb') as f:
            f.write(new_content.encode('utf-8'))
        print(f'OK {locale}')
    else:
        print(f'NO CHANGE {locale}')
