# UTMForge

**Campaign links on convention. Tag it once, report it forever.**

UTMForge is a single-file, offline web app for the least glamorous artifact in marketing: the tagged campaign link. You write your naming convention once — which values are allowed in `utm_source` and `utm_medium`, whether `utm_campaign` follows a pattern, whether everything is lowercase, dashes or underscores — then build the whole launch batch as rows and let the URLs assemble themselves. The centerpiece is the **convention doctor**: it reads every row against your own rules and flags the drift — uppercase leakage, mixed separators, missing required fields, the same campaign booked under three spellings — each flag with a one-line fix. One click applies every unambiguous fix to the whole batch (**Fix all mechanical**: casing, separators, stray spaces, missing `https://`); the judgment calls — off-list values, pattern rewrites, required fields, duplicates — stay flagged for a human. Export the batch as CSV (for the spreadsheet your team actually opens) or a markdown table (for the launch doc).

Built during Day 2 of xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026) — the selling day — and shipped for Day 3, the marketing track (Marketing Operations / Post-Sales / Marketing). Day 1's demo company already ran the exact workflow this tool serves: a "Tee Bot" drafting campaign emails with best-seller banners, a marketing bot created live on air seeded with Cody Sanchez's distribution advice, and a bot-written SEO work order whose dated first task is, literally, a link going out ("Thu 2026-09-17 08:00 CT — ships staging link for pilot sign-up"). Every click those generate arrives as a tagged URL, and every tagged URL is a fresh chance for `LinkedIn`, `linkedin`, and `LI` to become three different channels in the report. UTMForge is the convention as a file, with a doctor on duty.

## What it is

- **Saved naming rules per utm field** — `utm_source` / `utm_medium` / `utm_campaign` / `utm_content` / `utm_term`, each with a rule type: free-form, an allowed list (`x, linkedin, newsletter, podcast`), or a regex pattern (`^[a-z0-9]+(-[a-z0-9]+)*$`). A required toggle per field, global lowercase enforcement, and a house separator convention (dashes, underscores, or "don't care — just be consistent").
- **Batch row builder** — one row = destination URL + the five field values; the tagged URL assembles live, params in canonical order, empties skipped, values URL-encoded, existing query strings handled. Duplicate a row when only the placement (`utm_content`) changes.
- **The convention doctor** — the reason this demo opens on a flag, not a form. Live checks against your own rules, each with a one-line fix: uppercase leakage (`LinkedIn` becomes a second channel in reports), separator drift and mixed separators, spaces that break the URL, missing required fields, values not in your own allowed list, values breaking your own pattern, destinations without `https://`, the same campaign booked under different casings *or separators* (`grok-bot-galaxy` vs `Grok_Bot_Galaxy` — your report splits it in two), and exact-duplicate links (copy-paste ghosts). Broken rules get flagged too: an empty allowed-list nothing can pass, a pattern that doesn't compile.
- **Copy per row, export the batch** — a copy button on every row and every rendered link; the whole sheet exports as CSV (destination, all five fields, the full URL, and the doctor's status per row) or a markdown table that opens with the convention summarized in the header. Both via a dialog with Copy and Download.
- **Fix all mechanical** — one button above the doctor that applies every unambiguous fix to every flagged row in one pass: casing per the lowercase rule, separator normalization per the house convention, internal whitespace collapsed to the house separator, `https://` prefixed to scheme-less destinations, and a trim on every field. It changes nothing it can't prove: off-list values, pattern breaks, missing required fields, duplicate links, and mixed separators under the "don't care" convention are judgment calls and stay flagged. Idempotent by construction — a second pass changes zero rows.
- **Presets** — "Grok Bot Galaxy Launch": five launch links for the event's demo company, built the way three well-meaning people actually build them — the doctor opens flagging 7 pieces of drift across 4 kinds, which is the demo. "Evergreen Newsletter": a clean, boring, beautiful sheet that coaches green on load — what the same links look like after the doctor's been through.
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, runs straight from `file://`. Autosaves to localStorage as you type.

## 60-second demo script

1. **(0:00)** Double-click `index.html`. The Grok Bot Galaxy Launch preset loads — five launch links — and the doctor is already mid-flag: *"5 links · 7 flags across 4 kinds — this is spreadsheet rot, caught before the report. One-line fixes below."* Open here, not on the form. The flags are the product.
2. **(0:15)** Read row 2 aloud: `utm_source` reads "LinkedIn" — *capitals leak into reports as a different value than "linkedin."* Fix: lowercase it. Type the fix. The flag clears live and the row's chip flips from "1 flag" to "clean."
3. **(0:30)** Row 3 is the money flag: `Grok_Bot_Galaxy` — capitals, underscores against house dashes, *and* row 1 already booked `grok-bot-galaxy`. Three flags, three one-line fixes. Left alone, your analytics reports that as three campaigns.
4. **(0:45)** Clear row 5's missing `utm_medium` — the fix line lists the allowed values. The doctor flips green: *"5 links · 0 drift. Every one on convention — ship the batch."* Click **Copy CSV**: destination, tags, full URL, status — straight into the tracking spreadsheet.
5. **(0:55)** Land on the convention panel: five field rules, lowercase, house separator. *"The sheet is the convention now — every future row gets read against it before it ships. That's the whole job of marketing ops, in one file."*

## Why now

Day 3 of Grok Bot Galaxy is the marketing track — Marketing Operations / Post-Sales / Marketing — and campaign hygiene is where marketing ops actually lives. The event already ran the workflow twice on tape: Day 1's demo company stood up a bot-run email channel (Tee Bot, promo drafts with best-seller banners) and created a marketing bot live on air seeded with Cody Sanchez's distribution advice; its bot-written SEO plan shipped as a dated work order whose first line is a link going out. Day 2's SDR and support sessions were follow-up and follow-through — the clicks those sequences generate are only attributable if the tags hold. Meanwhile every marketing-ops person on earth keeps the same graveyard: a spreadsheet where `LinkedIn`, `linkedin` and `LI` coexist, and a report that splits one campaign into three. The convention was never the problem — it lives in someone's head, and nobody enforces it at link-creation time. UTMForge makes the convention a file and the enforcement automatic: offline, one file, in the same genre as the rest of the weekend's builds.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |
| `tests.js` | Headless fix-all test suite — `node tests.js` (no dependencies) |

## Data

State lives under localStorage key `utmforge.v1`: `{ format, version, convention: { name, lowercase, separator, fields: { utm_source: { required, mode, list, regex }, … } }, rows: [{ id, dest, source, medium, campaign, content, term }] }`. One sheet per browser; the CSV and markdown exports are the handoff. Clearing site data clears the sheet — export before experimenting.

## Roadmap (deliberately not built yet)

- JSON save/load so a convention can be shared across a team — the file *is* the convention.
- Import a CSV of raw tagged links and let the doctor grade existing chaos — the audit direction.
- Paste-a-URL parser: drop a tagged link in, get the five fields back out.
- Per-field separator conventions (campaign dashes, content underscores — some houses do both).

## Honest limitations

- The doctor reads your rules, not your mind: a "wrong" value that's in your allowed list passes. Conventions are only as good as the day you wrote them — revisit quarterly.
- The list check is exact-match on the normalized value, so `newsletter` and `newsletters` are different values to it. That's the point, but it can feel pedantic.
- Duplicate-campaign detection keys on the campaign field alone — two legitimately identical campaigns pointing at different destinations pass; it's the casing and separator variants it catches.
- The generated URL is never fetched — UTMForge can't validate that a destination exists. Offline is the feature; typos in the path are on you.
- One sheet per browser (localStorage holds a single save; use the exports to keep versions).
- Clipboard can be blocked on some `file://` setups; the export dialog always allows manual copy, plus Download. Desktop-first; verified via static checks, a 106-assertion logic smoke test, a 13-assertion DOM-stubbed boot test (both run ephemerally on Day 2), and the persistent 55-assertion fix-all suite in `tests.js` — not a full-browser click-through.
