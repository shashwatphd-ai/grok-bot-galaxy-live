# MenuForge

**Build the menu buyers pick from. Then ask: "which one do you like?"**

MenuForge is a single-file, offline web app for building product/price menus the way the Grok Bot Galaxy demo company does them — offers with a price, a unit, a *before* anchor ("was $38"), a tier badge (★ 4.9, Most popular, Best value), and one honest sentence of pitch. Arrange the offers like a staircase, watch the live preview, and export the whole thing as a clean markdown sheet (for DMs, emails, docs) or a standalone HTML page (for hosting). One click of copy, and the menu ends with the question the stream's agent asked its human: *"Which one do you like?"*

Built during Day 1 of xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026), where the demo company's bots went from Balsamiq wireframe to a staging site with a working account-signup flow in ~45 minutes (that Day 1 sign-up page was staging, never a public launch — the demo company's real public launch came on Day 3, as Thursday Arena at thursdayarena.com) — and along the way assembled merchandising menus ($220–250/flight instructor sessions 4.9★, Summit Flight $4,365+, Night Launch Pro $299), a digital-product catalog (checklist PDF $5–10, gear-guide bundle ~$25), and a merch line with a bot-run email channel promoting best-sellers.

## What it is

- **Offers** — cards with name, free-form price (ranges and anchors welcome: `$220–250`, `$4,365+`, `was $38`), unit (`per flight`, `one-time`), a tier badge (Most popular / ★ rating / Best value / New, with your own text), a one-line description, and an optional photo slot. Photos come from your disk, get downscaled in-browser, and never leave your machine.
- **Drag to reorder** — grab the ⋮⋮ handle to arrange the menu like a staircase, or use the ↑/↓ nudges. The "Most popular" badge highlights its card in the preview and exports.
- **The ladder readout** — a coach line that checks your price spread in real time: *3 offers · ladder climbs from $99 to $5,869 — entry, hero, stretch. Textbook.* Flat pricing gets a nudge: give buyers a staircase, an easy yes, a proud yes, and a stretch.
- **The cover** — menu title, one-line subtitle, footnote, and the ask toggle: end every menu with *"Which one do you like?"* — the stream's human-in-the-loop merchandising moment, made a feature.
- **Live preview** — the right pane renders exactly what a buyer sees while you type.
- **Exports** — **Copy markdown** (a paste-ready sheet: headings, badges, anchors, the ask) and **Export HTML** (a complete standalone dark-theme page with embedded styles — save it, host it, send it). Both open in a dialog with Copy and Download buttons.
- **Presets** — "Glider Flight Co." (the stream's glider-flights side, homaged: $99 Discovery Flight → $5,869 weekend buyout), "PDF Info Products" ($9 checklist → $249 whole shelf, with was-price anchors), "Merch Line" (the drop Tee Bot would email), and "Campaign Offer Sheet" (the email-drop shape for Day 3's marketing crowd: a was-price anchor on every rung, a badge on four of five cards, a Sunday-midnight urgency line — a $29-to-$499 ladder the readout calls textbook).
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, works straight from `file://`. Autosaves to localStorage as you type.

## 60-second demo script

1. **(0:00)** Double-click `index.html`. The Glider Flight Co. menu loads: five offers, a live preview on the right, and the ladder readout already says *"textbook."*
2. **(0:15)** Drag the ⋮⋮ handle to move Night Launch Pro up. Watch the preview re-flow.
3. **(0:30)** Add an offer, type `$299`, a badge, one sentence. The ladder recomputes as you type.
4. **(0:45)** Click **Copy markdown** — a clean price sheet ending in *"Which one do you like?"* Paste it anywhere.
5. **(0:55)** Click **Export HTML** → **Download .html** — a standalone menu page you could host tonight. *"Your bot can draft the catalog; this makes it a page."*

## Why now

Grok Bot Galaxy's Day 1 didn't just build a company live — it *merchandised* one. Agents assembled price menus with real unit economics and asked the human to pick; they drafted a $5–$299 digital catalog and a merch line; by end of day a "Tee Bot" was running the email channel for it. The weekend's most viral moment wasn't code, it was a price list and a question. Every solo founder watching now needs to put offers in front of buyers — in a DM, an email, a landing page — and the tools for that are either heavyweight e-commerce or a blank text box. MenuForge is the tiny offline middle: structure, ladder coaching, and both exports a founder actually pastes somewhere.

And the day's closing arc doubled down: the demo company's staging build showed a working account-creation flow ~45 minutes after the first wireframe (corrected late in the day — that was staging, not a public launch), a bot-written SEO audit shipped as a *dated work order* to drive pilot sign-ups, and the founders closed on a slide titled "Optimizing Costs — browser use is powerful (and expensive!)" — by the 1M-views mark, pricing was the day's running theme. When a fleet can build the store in an afternoon, the founder's job is deciding what's on the menu and at what price. That's the job MenuForge shrinks to one file.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |

## Data

State lives under localStorage key `menuforge.v1`: `{ format, version, title, subtitle, footnote, ask, items[{ id, name, price, anchor, unit, badgeKind, badgeText, desc, photo }] }`. There is no JSON import/export in v1 — the markdown and HTML exports are the handoff. Clearing site data clears the menu; export before experimenting.

## Roadmap (deliberately not built yet)

- JSON save/load for menu backup and templates.
- Share-as-URL (compressed state in the hash — still serverless).
- A/B pairing mode: generate two ladder orderings to test in emails.
- Currency + locale switcher beyond free-text prices.
- Print stylesheet for a physical table-tent menu.

## Honest limitations

- One menu per browser (localStorage holds a single save; use the exports to keep versions).
- Prices are free text by design — the ladder readout parses the largest number it finds, so "$1,200/hour" counts as 1200.
- Photos ride inside localStorage as downscaled JPEG data URLs; many large photos can fill browser storage (you'll get a toast — export and trim).
- The exported HTML page is a static menu, not a store — no cart, no checkout, no analytics.
- Clipboard access can be blocked on some `file://` setups; the export dialog always allows manual copy, plus Download.
- Desktop-first; tested via static checks and a headless logic smoke test, not a full click-through in every browser.
