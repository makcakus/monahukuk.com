import type { ReactNode } from "react";

/** U+002E FULL STOP — taban çizgisine oturur (orta nokta "·" değil). */
const DOT = ".";

/** "MONA" -> "M.O.N.A." — son harften sonra da nokta var. */
export function acronymize(word: string): string {
  return word.split("").join(DOT) + DOT;
}

/**
 * Marka yazısı. İlk kelime (MONA) noktalarla ayrılır çünkü bir
 * kısaltmadır: Memnuniyet Odaklı Nitelikli Avukatlık.
 *
 * Ayrım YALNIZCA görseldir. Ekran okuyucuya ve belge planına gerçek ad
 * verilir; metadata, OpenGraph ve Schema.org'a hiç dokunulmaz — oralarda
 * "M.O.N.A. HUKUK" arama sonuçlarını ve yapılandırılmış veriyi bozardı.
 */
export function Wordmark({ name }: { name: string }): ReactNode {
  const [first, ...rest] = name.split(" ");
  const tail = rest.length ? ` ${rest.join(" ")}` : "";
  return (
    <>
      <span aria-hidden="true">
        {acronymize(first)}
        {tail}
      </span>
      <span className="sr-only">{name}</span>
    </>
  );
}
