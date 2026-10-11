---
name: infographic-generator
description: >-
  Builds a finished Instagram carousel for Ardona (ardona.ai): 3–7 slides at 1080x1350,
  rendered from HTML/CSS in headless Chromium at 2x (2160x2700 JPEG), plus a caption.
  No image model, no API, no keys. Use when the user says "make a carousel about X",
  "infographic for X", "turn this into an Instagram carousel", "carousel slides on X",
  "generate a post for X", or pastes a topic and says "carousel it".
---

# infographic-generator — Ardona carousels

Paths are relative to this skill folder unless they start with `output/` (repo root).
First run: `bash scripts/setup.sh`.

## 1. Write the copy first → `output/<topic-slug>/slides.json`

`slides.json` is the single source of truth; the renderer reads nothing else. Rendering
is free: don't stop for approval. Render straight away, then show the contact sheet next
to the copy and expect edits to either.

```json
{ "topic": "...", "slug": "...", "slides": [
  { "role": "cover",   "headline": "Your team is not slow. Your *handoffs* are." },
  { "role": "body",    "heading": "...", "body": ["line one", "line two"] },
  { "role": "body",    "heading": "...", "body": ["one line is fine"], "layout": "B" },
  { "role": "closing", "headline": "...", "cta": "..." } ] }
```

- **Cover**: one bold headline that is the hook. No body, no subtitle, nothing else.
- **Middle slides**: one idea each. A short heading, then at most two body lines, and
  each line must fit on one line at body size (the renderer measures). If an idea needs
  three lines, it is two slides or it is cut.
- **Closing**: a closing line and a soft invitation. No "DM me", no "link in bio" unless
  the user asks.
- **Count**: 3–7 slides, chosen by the content. Never pad. If the topic promises more
  items than fit ("10 hacks"), pick the strongest and say so.
- **Accent**: `*word*` in a headline or heading is that slide's accent (italic, accent
  colour). At most one per slide.
- **One accent per slide, exactly**: the italic word, or the closing slide's end mark,
  or (on a layout B slide with no accent word) the short hairline in accent. Layout A
  slides therefore need an accent word. The renderer counts and refuses anything else.
- **Layouts**: odd body slides take A (heading top, body resting on the footer
  hairline), even ones take B (centred block under a 96px hairline). `layout` overrides.
- **Accuracy**: any factual claim about a product or tool must be true today. Verify
  anything you are not certain of before writing it.

## 2. Render

```bash
python3 scripts/render_carousel.py output/<slug>/slides.json            # all slides
python3 scripts/render_carousel.py output/<slug>/slides.json --slide 3  # one slide after an edit
```

`--scale` (default 2) sets the device scale. The renderer stops and says which slide and
which block when something fails:

- **Logo**: `resources/logo.png` must have an alpha channel and be at least 200px wide.
  Never generate or key a logo; ask for a transparent PNG. Until it exists, only
  `--preview-without-logo` renders, with the logo slot empty, and that is a preview,
  not a deliverable.
- **Network**: every http(s) request is blocked; any attempt stops the run because a
  font is falling back. Fonts load from `resources/fonts` and all four faces must
  report as loaded.
- **Fit**: headlines may shrink in 2px steps within cover 136→116 (4 lines), headings
  88→76 (3 lines), closing 96→84 (3 lines). Body text never shrinks. Overflow at the
  floor stops the run: fix the copy, not the type.
- **Drift**: logo, folio, hairline and footer boxes must match slide 1 to the pixel.

Outputs: `01.jpg … NN.jpg` (JPEG q92, 2160x2700), `html/NN.html` (opens in a browser
for tweaking), `contact-sheet.jpg` (all slides in a row at 360px).

Before showing anything, open `contact-sheet.jpg` yourself and check: nothing clipped,
one accent per slide, hierarchy obvious at thumbnail size, furniture in the same place
on every slide. Fix and re-render if anything is off.

## 3. Caption → `output/<slug>/caption.md`

Ardona's voice: plain, confident, practical; no hype. The first line works on its own
as the truncated preview before "more". Then roughly 60–120 words, a blank line, and
8–15 hashtags of mixed reach. No hashtag walls, no emoji. The renderer checks the
counts.

## 4. Deliver

Send the JPEGs, contact sheet and caption with `SendUserFile`, with the copy alongside.

## Design — do not drift

A feature spread in an independent magazine printed on dark stock; never a deck or a
Canva template. Tokens live in `:root` of `template/slide.html` (`--paper #0B0B0B`,
`--ink #F2F0EC`, `--ink-muted` 58%, `--ink-faint` 16%, `--accent #E8622C`), with a
luminance-only gradient (#121212 → paper by 60%) and a 6% feTurbulence grain as the only
texture.

- **Type**: Instrument Serif for headlines (136/88/96px, line height 0.92, −0.02em,
  balanced), Manrope 22px/1.45 for body in ink-muted with a 620px measure, JetBrains
  Mono 12px/500 caps at 0.22em for folio and footer. Never close the gap and never swap
  families per topic.
- **Grid**: margins 84 left/right, 96 top, 120 bottom; 6 columns with 24px gutters. The
  cover spans 6 columns, headings 5. Keep compositions underfilled.
- **Furniture**: logo 28px tall as a CSS mask filled with ink, folio `03 / 07`, a 1px
  hairline 56px above the bottom edge, and `ardona.ai` under it.
- **Forbidden**: emoji, shadows, glows, gradients behind text, boxes, cards, panels,
  rounded corners, icons, watermarks, animation, and any text other than the copy plus
  folio and footer.
