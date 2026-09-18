# Renewal Radar

**Renewal risk on one page. Walk in knowing, not hoping.**

Renewal Radar is a single-file, offline web app for the one Post-Sales artifact nobody had built yet: the Monday renewal sheet. Each account is a card — company, plan/tier, a free-form ARR/MRR value (ranges and units welcome), the renewal date, an owner (human or bot name), the champions, the next touch — plus nine health-signal toggles whose vocabulary comes straight from the stream: the Day 2 Customer Support session's **usage drop, ticket heat, champion left, escalation history, invoice friction, quiet account**, and the Day 3 Post-Sales session's **QBR friction, open promise, access pending.** Every signal carries a risk weight; every card shows a risk lane (green / amber / red) with a one-line why. A portfolio coach reads the whole book the way a renewal call exposes it — all-quiet books ("nothing here is trending up — quiet is not loyal"), renewals inside 14 days with no touch logged, single-threaded accounts, revenue concentration — and all-clear earns the textbook line. The export is the point: a **renewal briefing**, per account or for the whole book, as markdown for the call notes or a standalone HTML one-pager — the sheet you walk into the call with.

Built during Day 3 of xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026), the Marketing Operations / Post-Sales / Marketing track. The vocabulary is grounded in the stream: David Gan's four-bot support org (build / reply / alert / tune) with its crawl-walk-run trust ladder, the refund demo that granted inside policy and held outside it, the churn-risk routine that scans tickets every hour for customers six months in, the internal Q&A agent answering "what is the refund SOP," and the $1–2-per-medium-ticket economics — plus Nadia's Post-Sale Co. memory line from WhoDoIAsk: *flags quiet accounts before they quiet-cancel.* Day 3 afternoon added the second source: Gus, the Post-Sales session's chief-of-staff bot over Flylo's demo org, filing a status digest whose risk lines were a QBR that "gets ugly," a training-suite answer due Friday, and an account kept "soft, not a P0," whose blocker line was access pending for three named reps, and whose promises carried owners and dates — swept weekly so nothing sits unattended. The desk's morning-day moves are here too: Juno turning one line of intent into a structured spec, and the Territory Planner surfacing an account dispute as an Approve-or-Hold task — decisions prepared for humans, not made at them.

## What it is

- **Account cards for the renewal motion only** — company, tier, value, renewal date, owner, next touch, champions. This deliberately tracks the renewal motion, not the whole customer record: it's the Monday sheet, not a CRM.
- **Nine weighted health signals** — the Day 2 support vocabulary as toggles: usage drop (3), ticket heat (2), champion left (3), escalation history (2), invoice friction (2), quiet account (1); plus the Day 3 Gus-digest vocabulary: QBR friction (2), open promise (2), access pending (1) — out of an 18-point max. Lanes: green 0–1, amber 2–4, red 5+. Each card shows its lane, its score, and a one-line why built from the active signals. ("Kept soft" gets no toggle of its own on purpose — it's a quiet account by decision, and the existing quiet-account signal plus the next-touch note carries it.)
- **The coach** — ProofWall's proof-balance coach, re-pointed at retention: red-lane summary, renewals inside 14 days with no touch logged, overdue dates (renewed-and-stale or churned-ghost — the sheet should say which), single-threaded accounts (one champion, no breadth — "a champion's resignation should never be your renewal notice"), revenue concentration (one account over 40% of the annualized book), and the all-quiet portfolio. All-clear earns "Textbook."
- **Renewal briefing exports** — per account or whole book, as markdown (with a walk-in order: red first, soonest first) or a standalone HTML one-pager. Each active signal adds a "before the call" line grounded in the session: grant refunds inside policy and hold outside it, re-read the escalation thread with the fix not an apology, meet the new champion before the renewal, not at it.
- **Free-form values that still do math** — "$40k ARR", "2.4k MRR", "800/mo" all parse; monthly values annualize ×12 for the book total and the concentration check. Values that don't parse are excluded from the math, never guessed.
- **Presets** — "Post-Sale Co." (the WhoDoIAsk preset family on the radar: Quinn CS Lead, Rosa Account Manager, Otis On-Call Engineer, Milo Support Specialist, Nadia CSM as owners; Flylo, the support session's demo airline, renews in 9 days with no touch logged — the coach flags it on first paint), "Pop-up OS (day-of homage)" (the demo company's pilot book: a venue, restaurants, a catering arm — Mission Ballroom Kitchen opens red inside the 14-day window and The Panhandle Pourhouse crosses the 40% concentration line, so the coach demonstrates twice), and "Post-Sales Desk (Gus digest)" (the Day 3 Post-Sales session's digest as a book: a QBR-friction account with an open promise on it — owned by Gus, a bot; a renewal inside 14 days whose touch IS logged, so the window flag stays honest and silent; a quiet account whose three new seats are still access-pending; an account kept soft, not a P0; and an anchor account at 49% of the book).
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, runs straight from `file://`. Autosaves to localStorage as you type. Preset dates are generated relative to "today," so the first-paint flags stay honest whenever the file is first opened.

## 60-second demo script

1. **(0:00)** Double-click `index.html`. Post-Sale Co. loads and the coach is already mid-read: *"5 accounts · 0 red · 3 amber — the flags below are the meeting agenda."* First flag: *"Flylo In-Flight Wifi renews in 9 days and no touch is logged — the call you're least ready for is the one on the calendar."* Open here, not on a blank form.
2. **(0:20)** Click the **quiet account** chip on Flylo and read the why line: *"quiet — and quiet is not loyal."* Tick a second signal and watch the lane chip and card border move green → amber together.
3. **(0:35)** Switch the preset to **Pop-up OS**. Now the coach has a red: *"Mission Ballroom Kitchen"* — champion left, escalation history, quiet, renewing in 7 days — and a concentration flag: *"The Panhandle Pourhouse is 44% of the book."*
4. **(0:50)** Click **Brief page**. A standalone one-pager: walk-in order with lane chips, each account's signals, and the before-the-call lines. That file is the artifact you open in the renewal call.
5. **(0:58)** Land the thesis: *"It tracks the renewal motion — not the whole customer record. The Monday sheet, not a CRM."*

## Why now

Day 3's Post-Sales slot closed the loop live: Gus, the session's chief-of-staff bot, ran the session's own digest over Flylo's demo org — risk, people, blockers, open promises with owners and dates — and ran it as routines on a schedule (a daily brief, call prep before every meeting, weekly unattended-promises sweeps). The digest is the read; the renewal sheet is what the sweep reads. The session kept handing post-sales its vocabulary — a QBR that gets ugly, a promise due Friday nobody has attended, seats still waiting on access — and the coaching line writes itself from the same material: quiet is not loyal, unattended promises compound, and a single-threaded account is one resignation away from a cold renewal. Renewal Radar makes the health signals a checklist, the portfolio risk a coach, and the walk-in brief a file — offline, one file, in the same genre as the rest of the weekend's builds.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |
| `tests.js` | Headless smoke suite — `node tests.js` (no dependencies) |

## Data

State lives under localStorage key `renewalradar.v1`: `{ format, version, bookName, accounts: [{ id, company, tier, value, renewalDate, owner, nextTouch, champions, signals: { usageDrop, ticketHeat, championLeft, escalationHistory, invoiceFriction, quietAccount, qbrFriction, openPromise, accessPending }, touchLogged }] }`. Renewal dates are stored as `YYYY-MM-DD` and parsed into **local midnight** (split into parts, never `new Date("YYYY-MM-DD")`, which parses as UTC and shifts a day in negative-offset timezones). One book per browser; the markdown and HTML exports are the handoff. Clearing site data clears the book — export before experimenting.

## Roadmap (deliberately not built yet)

- CSV import so an existing renewal spreadsheet gets graded by the coach on arrival.
- A touch log per account (dated entries, not just the "logged this cycle" tick) so the coach can flag stale touches, not just missing ones.
- Expansion signals: usage trending up, new stakeholder — the coach currently only knows the downside.
- Per-signal due dates (e.g. "champion left 11 days ago") for finer lanes than the six toggles.
- A multi-book view across quarters.

## Honest limitations

- Nine toggles is a model, not a fortune teller: weights are the house's judgment call, and the lane is only as honest as the person ticking the boxes. The coach reads what you logged, not what happened.
- The concentration check only sees accounts whose values parse — a book of "TBD"s earns no concentration flag because there is nothing to concentrate.
- Champions are parsed from one free-text field; "Priya (leaving in March)" counts as a person, not a departure date.
- The 14-day window and the 40% threshold are fixed, not configurable — the point is a default you can act on, not a settings page.
- The briefing is generated from the card; it never fetches usage, tickets, or invoices. Offline is the feature; stale numbers are on you.
- One book per browser (localStorage holds a single save; use the exports to keep versions). Clipboard can be blocked on some `file://` setups; the export dialog always allows manual copy, plus Download. Desktop-first; verified via static checks and the 188-assertion headless suite in `tests.js` (including timezone-simulation runs of the date math) — not a full-browser click-through.
