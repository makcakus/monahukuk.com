---
name: ai-agents-roadmap
description: AI Agents (roadmap.sh) yol haritasına göre agent tasarımı, agent loop, tool tanımı, hafıza, mimari, framework seçimi, test/izleme ve güvenlik rehberi verir. Kullanıcı "AI agent nasıl yapılır", "function calling", "MCP server", "agent memory", "ReAct / planner-executor", "LangChain mı CrewAI mı", "agent değerlendirme" gibi isteklerde veya agent öğrenme planı istediğinde kullan.
---

# AI Agents Yol Haritası

roadmap.sh "AI Agents" haritasına dayanır. Kullanıcının seviyesine göre ilgili aşamayı anlat veya uygulama planı çıkar; tüm haritayı dökme.

## 1. Ön koşullar
Temel backend geliştirme, Git ve terminal, REST API bilgisi.

## 2. LLM temelleri
- Transformer modeller, tokenization, context window, token bazlı fiyatlandırma.
- Üretim kontrolleri: temperature, top-p, frequency/presence penalty, stopping criteria, max length.
- Açık ve kapalı ağırlıklı modeller, model aileleri ve lisanslar.
- Streamed vs unstreamed yanıtlar; reasoning vs standart modeller.
- Fine-tuning vs prompt engineering; embeddings ve vektör arama; RAG temelleri; yaygın modellerin fiyatları.

## 3. AI Agents 101
- Agent nedir, tool nedir.
- **Agent loop:** (1) algı/kullanıcı girdisi → (2) akıl yürütme ve planlama → (3) eylem/tool çağrısı → (4) gözlem ve yansıtma.
- Kullanım alanları: kişisel asistan, kod üretimi, veri analizi, web scraping/crawling, NPC/oyun AI.

## 4. Prompt engineering
İyi prompt: net ol, bağlam ver, ilgili teknik terimleri kullan, örnek ver, tekrar deneyip test et, uzunluk/biçim belirt. Ayrıntı için `prompt-engineering-roadmap` skill'i.

## 5. Tools / Actions
- **Tool tanımı:** ad ve açıklama, girdi/çıktı şeması, hata yönetimi, kullanım örnekleri.
- Örnek tool'lar: web arama, kod çalıştırma/REPL, veritabanı sorguları, API istekleri, e-posta/Slack/SMS, dosya sistemi.
- **MCP (Model Context Protocol):** MCP host, client, server; MCP server oluşturma ve çekirdek bileşenler; dağıtım: yerel masaüstü veya uzak/bulut.

## 6. Agent hafızası
- Kısa süreli (prompt içi) ve uzun süreli (vektör DB / SQL / özel) hafıza.
- Episodik vs semantik hafıza.
- Hafızayı sürdürme: RAG ve vektör DB'ler, kullanıcı profili depolama, özetleme/sıkıştırma, unutma/yaşlandırma stratejileri.

## 7. Agent mimarileri
- Yaygın: RAG agent, ReAct (reason + act), Chain of Thought.
- Diğer: planner-executor, DAG agent'lar, Tree-of-Thought.

## 8. Agent kurma
- **Elle (sıfırdan):** doğrudan LLM API çağrıları, agent loop'u uygulama, model çıktısını ayrıştırma, hata ve rate-limit yönetimi.
- **LLM'in yerel function calling'i:** OpenAI Functions, Gemini Function Calling, OpenAI Assistant API, Anthropic Tool Use.
- **Framework'ler:** LangChain, LlamaIndex, Haystack, AutoGen, CrewAI, Smol Depot.

## 9. Değerlendirme ve test
- Takip edilecek metrikler; tek tek tool'lar için birim test; akışlar için entegrasyon testi; human-in-the-loop değerlendirme.
- Çerçeveler: LangSmith, Ragas, DeepEval.

## 10. Hata ayıklama ve izleme
Yapılandırılmış loglama ve tracing. Gözlemlenebilirlik araçları: LangSmith, Helicone, LangFuse, openllmetry.

## 11. Güvenlik ve etik
Prompt injection/jailbreak, tool sandboxing ve izin yönetimi, veri gizliliği ve PII maskeleme, önyargı ve toksisite korumaları, güvenlik ve red team testi.

## Sonraki yollar
AI Engineer ve AI & Data Scientist yol haritaları.

## Nasıl kullanılır
- **Plan isteniyorsa:** Kullanıcının seviyesine göre aşamaları atla, her aşamaya küçük bir görev ekle (ör. "tek tool'lu agent loop'u framework'süz yaz").
- **Başlangıç tavsiyesi:** Önce sıfırdan agent loop (4 adım) ve tek tool'lu function calling; sonra hafıza, sonra mimari, en son framework. Framework seçerken tek öneri ver, gerekçesini kısa yaz.
- **Güvenlik:** Tool izinlerini, sandbox'ı ve prompt injection savunmasını sona bırakma; tool ekleyen her adımda an.
- **Test:** Agent'a tool eklendiğinde o tool için birim test ve en az bir uçtan uca akış testi öner.
- **Güncellik:** API, framework ve model bilgileri hızlı değişir; somut sürüm/fiyat vermeden önce güncel dokümana bak.
