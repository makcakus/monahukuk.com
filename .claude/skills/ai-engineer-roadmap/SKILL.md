---
name: ai-engineer-roadmap
description: AI Engineer (roadmap.sh) yol haritasına göre öğrenme planı, konu açıklaması ve proje önerisi üretir. Kullanıcı "AI engineer olmak istiyorum", "RAG nasıl yapılır", "vektör veritabanı seç", "embeddings", "AI agent", "prompt injection", "multimodal AI" gibi konularda yol haritası, sıralama veya uygulama rehberi istediğinde kullan.
---

# AI Engineer Yol Haritası

roadmap.sh "AI Engineer" haritasına dayanır. Kullanıcının seviyesine göre ilgili aşamayı açıkla, plan çıkar ya da somut bir uygulama öner. Önce kullanıcının hangi aşamada olduğunu öğren; tüm haritayı dökme.

## Ön koşul
Frontend, backend veya full-stack geliştiricilikten biri.

## Aşamalar (sırayla)

1. **Giriş** — AI Engineer ile ML Engineer farkı; roller ve ürün geliştirmeye etkisi. Terimler: AI vs AGI, LLM, inference, training, embeddings, vektör DB, AI Agents, RAG, prompt engineering.
2. **Hazır modeller** — Faydalar, sınırlar, bağlam uzunluğu, bilgi kesim tarihi. Sağlayıcılar: OpenAI, Anthropic Claude, Google Gemini, Azure AI, AWS SageMaker, Hugging Face, Mistral, Cohere, Replicate.
3. **OpenAI API** — Chat Completions, prompt yazımı, token yönetimi (maksimum token, sayım, fiyatlandırma), Playground, fine-tuning.
4. **AI güvenliği ve etik** — Prompt injection, güvenlik/gizlilik, önyargı ve adalet. En iyi uygulamalar: Moderation API, istemlere son kullanıcı kimliği ekleme, adversarial test, sağlam prompt tasarımı, kullanım senaryosunu bilme, girdi/çıktı kısıtlama.
5. **Açık kaynak AI** — Açık/kapalı model farkı, popüler açık modeller. Hugging Face (Tasks, Hub, Inference SDK, Transformers.js) ve Ollama (modeller, SDK).
6. **Embeddings ve vektör DB'ler** — Semantik arama, sınıflandırma, öneri, anomali tespiti. OpenAI Embeddings API, Sentence Transformers, açık kaynak embedding modelleri. Vektör DB (biri yeterli): Chroma, Pinecone, Weaviate, FAISS, LanceDB, Qdrant, Supabase, MongoDB Atlas. Indexleme ve benzerlik araması.
7. **RAG** — Kullanım alanları; RAG vs fine-tuning. Akış: chunking → embedding → vektör DB → retrieval → generation. Yöntemler: SDK'larla doğrudan, LangChain, LlamaIndex. Alternatif: OpenAI Assistant API.
8. **AI Agents** — Kullanım alanları, ReAct prompting. Kurma yolları: elle uygulama, OpenAI Functions/Tools, Assistant API.
9. **Multimodal AI** — Görüntü/video/ses anlama, görüntü üretimi, TTS ve STT. OpenAI Vision, DALL-E, Whisper, Hugging Face modelleri, LangChain/LlamaIndex ile multimodal uygulamalar.
10. **Geliştirme araçları** — AI kod editörleri, kod tamamlama araçları.

Sonraki yollar: AI & Data Scientist, Prompt Engineering.

## Nasıl kullanılır

- **Plan isteniyorsa:** Kullanıcının mevcut seviyesine göre aşamaları atla, haftalık ya da aşama bazlı kısa bir plan yaz. Her aşamaya küçük bir uygulama görevi ekle (ör. "Chroma ile 20 PDF üzerinde soru-cevap").
- **Teknoloji seçimi isteniyorsa:** Vektör DB ve benzeri "biri yeterli" kalemlerinde tek bir öneri ver, kısa gerekçeyle; seçenek listesi dökme. Haritadaki tüm seçenekler eşdeğer kabul edilir.
- **Uygulama isteniyorsa:** Aşama sırasına bağlı kal (embeddings → vektör DB → RAG → agents). Güvenlik aşamasını (prompt injection, çıktı kısıtlama) sona bırakma; RAG ve agent işlerinde ilgili adımda an.
- **Güncellik:** Model adları, fiyatlar ve API'ler hızlı değişir. Somut model/fiyat/kota söylemeden önce güncel dokümana bak; ezberden yazma.
