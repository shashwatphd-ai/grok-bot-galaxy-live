# ProofWall

**Build the wall of love that closes. Then balance it, because only-5-star walls read as fake.**

ProofWall is a single-file, offline web app for building a "wall of love" — the testimonial grid every buyer looks for right before they decide whether to believe you. Quote cards with author, role/company, where the quote arrived (X, LinkedIn, email, a review site), an optional star rating, a verified check you only flip when you can prove it, and — the first-class field — a **metric anchor** per card: *"+38% bookings after switching."* A proof-balance coach reads the wall like a skeptical buyer and tells you what it's missing. Export the whole thing as markdown (paste it where the sale happens) or a standalone HTML page (host it where buyers hesitate).

Built during Day 2 of xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026) — the selling day (Sales Engineering / Sales / SDRs / Customer Support), when the demo company "Pop-up OS" has to start converting its audience into ticket buyers. Day 1 guest Cody Sanchez gave the tool its thesis on air: keep a **proof vault** — save every good thing anyone ever says about your product. Most founders' proof vaults are unshipped: kind words rotting in support tickets, DMs, and renewal emails. ProofWall is the vault, shipped as a wall.

## What it is

- **Quote cards** — the quote itself, author, role/company (or how you know them), a source chip (X / LinkedIn / email / review site), an optional star rating, and a **verified** toggle — tick it only for quotes you can actually prove. Honesty is a design constraint, not a mood.
- **Metric anchors** — a dedicated field per card for the number that does the convincing: `+38% bookings`, `6 hrs to 40 min weekly`, `96 covers, 2 sold-out nights`. A quote without a number is a vibe; the coach counts them.
- **The proof-balance coach** — a live readout that checks the wall the way a skeptical buyer would: volume (three quotes minimum — *sell to three*), numbers (*"'loved it' proves nothing"*)， skeptics (*"add one skeptical-sounding quote — walls of only 5-stars read as fake"*), source spread (all-one-channel looks curated), and verification (receipts beat adjectives). All-clear earns the verdict: *balanced: numbers, skeptics, receipts. Textbook.*
- **Drag to reorder** — handle-armed HTML5 drag (text inputs stay usable) plus ↑/↓ nudge buttons; no dependencies. Lead with your strongest anchor.
- **Live preview** — the right pane renders the buyer's view while you type, initials avatars and all.
- **Exports** — **Copy markdown** (quotes, anchors, sources, ratings, the closing line) and **Export HTML** (a complete standalone dark-theme page with embedded styles). Both via a dialog with Copy and Download.
- **The closing line** — every wall ends with a CTA you write. A wall without an ask is a scrapbook.
- **Presets** — "Pop-up OS (day-one homage)" — a wall built from **real quotes in the event's public chat on Day 1** (the "creation layer just moved up" viewer, the "SQUADS of agents" post, the skeptic's avatars question, the most-repeated question of the day), honestly footnoted as coming from a demo company; "SaaS Launch" (metric anchors throughout, one 4-star holdout); "Restaurant & Local" (covers, repeat bookings, zero phone tag).
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, works straight from `file://`. Autosaves to localStorage as you type.

## 60-second demo script

1. **(0:00)** Double-click `index.html`. The Pop-up OS homage loads: five real quotes from the day-one chat, a live preview, and the coach already flagging the honest weakness — every quote came through one door.
2. **(0:15)** Delete the skeptic's card (the avatars question, 3 stars). The coach fires the line this tool exists for: *"Add one skeptical-sounding quote — walls of only 5-stars read as fake."* Put it back.
3. **(0:30)** Add a quote, type the metric anchor `+38% bookings after switching`, flip **verified**, switch the source to *email*. Watch the coach tick green.
4. **(0:45)** Click **Copy markdown** — a paste-ready sheet: quotes, bold metric anchors, sources, ratings, the closing line. Drop it in a DM or a launch post.
5. **(0:55)** Click **Export HTML** → **Download .html** — a standalone wall page you could host tonight. *"Your buyers are already asking 'can I trust you?' This answers with receipts."*

## Why now

Day 2 of Grok Bot Galaxy is the selling day: Sales Engineering at 9:00, Sales at 12:30, SDRs at 2:30, Customer Support at 4:00. The demo company "Pop-up OS" spent Day 1 building (a staging lander, ticket designs, an email channel, an SEO work order) — Day 2 is when all of it has to convert, and conversion runs on proof. The event even taught the method on Day 1: guest Cody Sanchez's distribution advice centered on a **proof vault** — save every good thing anyone says about you — and the trio created a marketing bot live on air seeded with it. Meanwhile every founder watching is sitting on the same unshipped asset: kind words in tickets, DMs, and renewal emails that never make it onto a page. ProofWall is the shipping end of the proof vault — offline, in one file, with a coach that keeps the wall honest enough to survive the skeptical buyer it's meant to close.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |

## Data

State lives under localStorage key `proofwall.v1`: `{ format, version, title, subtitle, footnote, cta, cards[{ id, quote, author, role, source, verified, stars, metric }] }`. One wall per browser; the markdown and HTML exports are the handoff. Clearing site data clears the wall — export before experimenting.

## Roadmap (deliberately not built yet)

- JSON save/load for wall backup and template sharing.
- Photo/logo slot per card (MenuForge's pattern, re-pointed).
- A "chase list": which channels are missing from the wall, with a ask-template per channel.
- Share-as-URL (compressed state in the hash — still serverless).
- Wall sections ("By outcome", "By skeptic-first converts") for walls past a dozen quotes.

## Honest limitations

- One wall per browser (localStorage holds a single save; use the exports to keep versions).
- The coach is heuristics, not judgment: "anchored" means a digit in the metric field or the quote, and "skeptical" means a sub-5-star rating or skeptic-flag words ("holdout", "at first", "didn't trust"...). It counts, you decide.
- It will happily format quotes you made up. The verified toggle is an honor system — the coach can check balance, not truth. Walls work because they're real; fake ones eventually work against you.
- No photo slots in v1 — the initials avatar does the visual work.
- Clipboard access can be blocked on some `file://` setups; the export dialog always allows manual copy, plus Download.
- Desktop-first; tested via static checks and a headless logic smoke test, not a full click-through in every browser.
