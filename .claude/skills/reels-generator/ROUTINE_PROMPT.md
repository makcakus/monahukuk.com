# Günlük rutin: claude.ai'de oluşturma

claude.ai → Routines → New routine. Ayarlar:

- **Ad:** m.o.n.a.law günlük hukuk reels'i
- **Zamanlama:** her gün 16:52, saat dilimi Europe/Istanbul (video ~17:15'te hazır, 20:00 paylaşımından önce bakılır)
- **Bağlayıcılar (şart):** Yargı PRO (YargiMCP). Başka bağlayıcı gerekmez.
- **Depo:** makcakus/monahukuk.com
- **Ortam:** bu çalışmada kullandığın bulut ortamı (ağ politikası aynı)
- **İzin modu:** otomatik / izinleri atla (gözetimsiz çalışır; Bash, git ve dosya yazma sorulursa takılır)
- **Bildirim:** telefona push

**Prompt (aynen yapıştır):**

```
Bu bir günlük otomasyondur: m.o.n.a.law Instagram hesabı için BUGÜNÜN "Günün hukuku" reels'ini üret (en az 5, en çok 10 doğrulanmış gelişme; haftalık çerçeve YOK: "bu hafta"/"haftanın hukuku" deme). Bugünün tarihini Europe/Istanbul saatine göre al. Kullanıcı reels'i akşam 20:00'de paylaşacak; video ondan önce hazır olmalı. Gözetimsiz çalışıyorsun: soru sorma.

1) Kodu hazırla: `git fetch origin claude/determined-planck-rmqrec && git checkout claude/determined-planck-rmqrec && git pull origin claude/determined-planck-rmqrec`. Skill bu dalda (ana dala alınınca bu satır gereksiz olur).
2) `.claude/skills/reels-generator/SKILL.md` dosyasını baştan sona oku ve aynen uygula: bölüm 0 (günlük format, aday bulma, doğrulama kuralı, haber seçimi), 1 (senaryo), 2 (seslendirme), 3-4 (render ve kontrol), 5 (caption), 6 (teslim). İlk iş `bash .claude/skills/reels-generator/scripts/setup.sh`.
3) Slug: `YYYY-AA-GG-gunun-hukuku` (bugünün tarihiyle). `output/reels/` altındaki önceki reel.json dosyalarına bak; aynı haberleri tekrarlama.
4) Sert kurallar: (a) en az 5, en çok 10 haber (10'dan fazlaysa vatandaşa en çok dokunan 10'u); güncel olayların hukuki yönü de alınabilir ama resmî kaynakla doğrulanmalı, kişi adı/siyasi parti/sürmekte olan yargılama konu edilmez; (b) her haber birincil resmî kaynak metninden (Yargı PRO: resmi_gazete_fihrist, mevzuat_ara/mevzuat_getir, aym_ictihat_ara, ictihat_ara/ictihat_getir, kurum_karari_ara) okunup doğrulanmış olmalı; X, haber siteleri ve hukuk bürosu yazıları yalnızca "bu konu gündemde" sinyalidir, doğrulama sayılmaz; (c) metinde olmayan hiçbir şeyi yazma, tahmin ve yorum yok; (d) Yargı PRO kotası aylıktır ve *_getir çağrıları kotadan düşer: önce *_ara sonuçları ve özetleriyle ele, yalnız seçtiğin haberlerin metnini getir, gereksiz getir çağrısı yapma; (e) önce son 24–48 saate bak; 5 doğrulanmış habere ulaşamazsan aramayı son 4 güne kadar genişlet (eski haberin gününü sahnede belirt); yine ulaşamazsan, ya da Yargı PRO kotası/erişim sorunu varsa, VİDEO ÜRETME: `PushNotification` ile nedenini tek satırda bildir ve dur. Doğrulanmamış içerikle asla reels üretme.
5) Çıktıyı (reel.json, caption.md, reel.mp4, cover.jpg, contact-sheet.jpg) `output/reels/<slug>/` altında üret. Teslimden önce contact-sheet.jpg ve cover.jpg'yi aç ve SKILL.md bölüm 4'teki kontrolleri yap.
6) Commit'le ve aynı dala push'la (`git add -A output .claude && git commit -m "Günlük reels: <slug>" && git push origin claude/determined-planck-rmqrec`).
7) Teslim: `SendUserFile` ile reel.mp4, cover.jpg ve caption.md'yi gönder, ardından `PushNotification` ile tek satır: "Bugünün reels'i hazır: N haber, S sn. Yargı PRO kalan kota: %K." (K: son *_getir çıktısındaki "Kalan aylık sorgu kotası" değeri). Instagram'a paylaşım yapma (araç yok); paylaşımı kullanıcı yapar.
```

Not: Skill ana dala (`main`) alınırsa prompttaki 1. adımı "ana dalda çalış"a çevir ve push hedefini ona göre değiştir.

**Güncelleme (3 Kasım 2026):** Rutin artık sessiz kipte üretir (`"silent": true`, ses yok, 3 paragraflı açıklayıcı kartlar, caption sonunda 2–3 hashtag). Canlı rutin metni `trig_01Nnm3FtSjUqe4qAzN7AdaPV` üzerinde güncellendi; yukarıdaki metin seslendirmeli eski sürümdür. Seslendirme geri istenirse SKILL.md bölüm 2'ye dön.

**Güncelleme (4 Kasım 2026, haber seçimi):** Haberler halkın tamamını/büyük kesimini ilgilendirmeli; tek kişilik AYM bireysel başvuruları haber değildir (en çok 1, yalnızca geniş ilke içeriyorsa). Kaynaklar çeşitli olmalı: yayımlanmış kanunlar, Yargıtay Genel Kurulları/İBK ve emsal kararlar, Danıştay Kurulları, geniş etkili Resmî Gazete düzenlemeleri, AYM norm denetimi. Ayrıntı SKILL.md "Haber seçimi" bölümünde.
