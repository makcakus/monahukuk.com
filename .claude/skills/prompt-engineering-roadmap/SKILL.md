---
name: prompt-engineering-roadmap
description: Prompt Engineering (roadmap.sh) yol haritasına göre prompt yazımı, teknik seçimi, LLM ayarları ve güvenilirlik rehberi verir. Kullanıcı "prompt nasıl yazılır", "few-shot / chain of thought / ReAct", "temperature top-p ayarı", "structured output", "prompt injection", "prompt'u iyileştir" gibi isteklerde veya prompt engineering öğrenme planı istediğinde kullan.
---

# Prompt Engineering Yol Haritası

roadmap.sh "Prompt Engineering" haritasına dayanır. Kullanıcının seviyesine ve derdine göre ilgili bölümü anlat; tüm haritayı dökme. Prompt iyileştirme isteniyorsa önce mevcut prompt'u gör, sonra aşağıdaki ilkelerle düzelt.

## 1. Giriş
- LLM'ler nasıl çalışır, prompt nedir, prompt engineering nedir.
- Model sağlayıcılar: OpenAI, Google, Anthropic, Meta, xAI.
- Temel terimler: LLM, token, context window, hallucination, model weights/parameters, fine-tuning vs prompt engineering, RAG, agents, prompt injection, AI vs AGI.

## 2. LLM yapılandırması
- **Örnekleme:** temperature, top-K, top-P. Determinizm için düşük, yaratıcılık için yüksek.
- **Çıktı kontrolü:** max tokens, stop sequences.
- **Tekrar cezaları:** frequency penalty, presence penalty.
- **Structured outputs:** JSON, XML, Markdown, CSV gibi biçim istemek.

## 3. Prompt teknikleri
- Zero-shot, one-shot / few-shot.
- System / role / contextual prompting.
- Step-back prompting.
- Chain of Thought (CoT).
- Self-consistency.
- Tree of Thoughts (ToT).
- ReAct (reason + act).
- Automatic prompt engineering: prompt'u LLM'e ürettirmek.
- AI red teaming (ayrı yol haritası).

## 4. En iyi uygulamalar
- İstenen yapı veya üslup için few-shot örnek ver.
- Prompt'u kısa ve öz tut.
- Kısıt eklemek yerine daha net talimat ver.
- Maksimum çıktı uzunluğunu kontrol et.
- Kolay yapılandırma için değişken/placeholder kullan.
- Girdi biçimlerini ve yazım üslubunu dene.
- Determinizm ve yaratıcılık dengesi için sampling'i ayarla.
- Prompt injection'a karşı kullanıcı metnini temizle.
- Değerlendirmeyi otomatikleştir, çıktılar için birim test yaz.
- Prompt sürümlerini belgele ve takip et.
- Üretimde gecikme ve maliyeti optimize et.
- Karar, hata ve öğrenilenleri belgele.
- Bölümleri üçlü backtick veya XML etiketleriyle ayır.
- Yararlıysa yapılandırılmış çıktı iste.

## 5. Güvenilirliği artırma
Prompt debiasing, prompt ensembling, LLM self evaluation, calibrating LLMs.

## Sonraki yollar
AI Engineer ve AI Agents yol haritaları (`ai-engineer-roadmap`, `ai-agents-roadmap` skill'leri).

## Nasıl kullanılır
- **Prompt yazma/iyileştirme:** Önce amacı ve hedef modeli netleştir. Rol + bağlam + net talimat + çıktı biçimi + (gerekirse) 2-3 örnek yapısı kur. Bölümleri XML etiketiyle ayır.
- **Teknik seçimi:** Basit iş → zero-shot. Biçim/üslup gerekiyorsa → few-shot. Çok adımlı akıl yürütme → CoT; kritik doğruluk → self-consistency. Araç kullanımı → ReAct. Tek öneri ver, gerekçesini bir cümleyle söyle.
- **Üretim:** Sürümleme, otomatik test ve injection savunmasını atlama.
- **Güncellik:** Model adı, parametre aralığı ve fiyat değişir; somut değer vermeden önce güncel dokümana bak.
