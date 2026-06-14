import { readFileSync, writeFileSync } from 'fs';

const LOCALES = ['tr', 'en', 'de', 'ru', 'ar', 'es', 'fr'];

for (const locale of LOCALES) {
  const filePath = `messages/${locale}.json`;
  let text = readFileSync(filePath, 'utf8');
  const before = text;

  // Detect line ending style
  const crlf = text.includes('\r\n');
  const nl = crlf ? '\r\n' : '\n';

  // Fix 1: s14's body ends with "," then "s15" starts inside s14 (wrong level).
  // Works with both LF and CRLF.
  const s15Pattern = new RegExp(`(",)${crlf ? '\\r\\n' : '\\n'}(\\s*"s15": \\{)`);
  text = text.replace(s15Pattern, (match, comma, s15line) => {
    return `"${nl}    },${nl}${s15line}`;
  });

  // Fix 2: Remove the extra "    }" that was closing s14 (now orphaned after fix 1).
  const extraBrace = new RegExp(`^    \\}${crlf ? '\\r\\n' : '\\n'}    \\}${crlf ? '\\r\\n' : '\\n'}  \\},`, 'm');
  text = text.replace(extraBrace, `    }${nl}  },`);

  if (text !== before) {
    writeFileSync(filePath, text, 'utf8');
    console.log(`✅ Fixed ${locale}.json (${crlf ? 'CRLF' : 'LF'})`);
  } else {
    console.log(`⚠️  No change: ${locale}.json (${crlf ? 'CRLF' : 'LF'})`);
  }
}
