# Graph Report - src  (2026-10-06)

## Corpus Check
- 89 files · ~119,235 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: .css 1)

## Summary
- 448 nodes · 1111 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 1,200 input · 320 output

## Community Hubs (Navigation)
- Static Page Layouts & SEO
- Article Browsing & Content Groups
- Homepage & Legal News Feed
- API Routes & Root Layout
- Newsletter & Subscription Actions
- OG Images & LLM Discovery
- Contact Form & Locale Layout
- Articles Browser Component
- Legal Dictionary & Search
- Remote Representation Page
- OpenGraph Image Generator
- App Icon Asset
- Editorial Team Labels
- Brand Identity Assets

## God Nodes (most connected - your core abstractions)
1. `Link` - 37 edges
2. `ArticlesPage()` - 33 edges
3. `pageMetadata()` - 31 edges
4. `PageHero()` - 25 edges
5. `getAllArticles()` - 16 edges
6. `routing` - 15 edges
7. `ArticlePage()` - 13 edges
8. `JsonLd()` - 13 edges
9. `pickPA()` - 12 edges
10. `subscribeToNewsletter()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `pageMetadata()`  [EXTRACTED]
  app/[locale]/page.tsx → lib/seo.ts
- `generateMetadata()` --calls--> `pageMetadata()`  [EXTRACTED]
  app/[locale]/remindionary-hukuk-sozlugu/page.tsx → lib/seo.ts
- `NewsletterBanner()` --indirect_call--> `subscribeToNewsletter()`  [INFERRED]
  components/NewsletterBanner.tsx → app/actions/newsletter.ts
- `NewsletterInlineCTA()` --indirect_call--> `subscribeToNewsletter()`  [INFERRED]
  components/NewsletterInlineCTA.tsx → app/actions/newsletter.ts
- `generateMetadata()` --calls--> `pageMetadata()`  [EXTRACTED]
  app/[locale]/about/page.tsx → lib/seo.ts

## Import Cycles
- None detected.

## Communities (14 total, 1 thin omitted)

### Community 0 - "Static Page Layouts & SEO"
Cohesion: 0.05
Nodes (65): AboutPage(), generateMetadata(), generateMetadata(), ContactPage(), generateMetadata(), generateMetadata(), dynamic, generateMetadata() (+57 more)

### Community 1 - "Article Browsing & Content Groups"
Cohesion: 0.05
Nodes (58): ArticlesPage(), revalidate, ARABULUCULUK_GROUP_ORDER, getArabuluculukGroup(), isArabuluculukMevzuatArticle(), SLUG_TO_GROUP, CMK_GROUP_ORDER, getCmkGroup() (+50 more)

### Community 2 - "Homepage & Legal News Feed"
Cohesion: 0.07
Nodes (42): NewsletterState, ArticlePage(), LegalNewsPage(), revalidate, generateMetadata(), HomeContent(), HomePage(), ArticleNavButtons() (+34 more)

### Community 3 - "API Routes & Root Layout"
Cohesion: 0.08
Nodes (26): GET(), metadata, generateMetadata(), dynamicParams, GazettePostPage(), generateMetadata(), generateStaticParams(), ANSWER_ENGINE_BOTS (+18 more)

### Community 4 - "Newsletter & Subscription Actions"
Cohesion: 0.08
Nodes (40): getClientIp(), isAlreadySubscribed(), Locale, NewsletterStatus, normalizeLocale(), subscribeToNewsletter(), subscribeWithGoogle(), SUPPORTED_LOCALES (+32 more)

### Community 5 - "OG Images & LLM Discovery"
Cohesion: 0.07
Nodes (35): GET(), dynamic, GET(), line(), alt, ArticleOGImage(), contentType, runtime (+27 more)

### Community 6 - "Contact Form & Locale Layout"
Cohesion: 0.10
Nodes (22): ContactState, ContactStatus, submitContactForm(), display, LocaleLayout(), sans, ContactForm(), Copy (+14 more)

### Community 7 - "Articles Browser Component"
Cohesion: 0.29
Nodes (11): ArticleListItem(), ArticlesBrowser(), BrowserGroup, BrowserSubgroup, BrowserUiStrings, GroupedView(), Highlight(), matchRank() (+3 more)

### Community 8 - "Legal Dictionary & Search"
Cohesion: 0.24
Nodes (8): BADGE, generateMetadata(), HukukSozluguPage(), HukukSozluguArama(), SOZ_TURU_ANAHTARI, Terim, VERI_URL, Yon

### Community 9 - "Remote Representation Page"
Cohesion: 0.28
Nodes (8): Copy, Faq, generateMetadata(), Locale, pickCopy(), RemoteRepresentationPage(), Step, STEP_ICONS

### Community 10 - "OpenGraph Image Generator"
Cohesion: 0.33
Nodes (4): alt, contentType, runtime, size

### Community 11 - "App Icon Asset"
Cohesion: 0.40
Nodes (3): contentType, runtime, size

### Community 12 - "Editorial Team Labels"
Cohesion: 0.50
Nodes (4): EDITORIAL_TEAM, EditorialLabelParts, editorialTeamLabel(), editorialTeamPlain()

## Knowledge Gaps
- **110 isolated node(s):** `runtime`, `alt`, `size`, `contentType`, `revalidate` (+105 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 134 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pageMetadata()` connect `Static Page Layouts & SEO` to `Article Browsing & Content Groups`, `Homepage & Legal News Feed`, `API Routes & Root Layout`, `Legal Dictionary & Search`, `Remote Representation Page`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **What connects `runtime`, `alt`, `size` to the rest of the system?**
  _110 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Static Page Layouts & SEO` be split into smaller, more focused modules?**
  _Cohesion score 0.053482221569203646 - nodes in this community are weakly interconnected._
- **Why does `Link` connect `Homepage & Legal News Feed` to `Static Page Layouts & SEO`, `API Routes & Root Layout`, `Contact Form & Locale Layout`, `Articles Browser Component`, `Remote Representation Page`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `Article Browsing & Content Groups` be split into smaller, more focused modules?**
  _Cohesion score 0.05403348554033485 - nodes in this community are weakly interconnected._
- **Why does `PageHero()` connect `Static Page Layouts & SEO` to `Legal Dictionary & Search`, `Article Browsing & Content Groups`, `Homepage & Legal News Feed`, `Remote Representation Page`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Should `Homepage & Legal News Feed` be split into smaller, more focused modules?**
  _Cohesion score 0.0733099209833187 - nodes in this community are weakly interconnected._