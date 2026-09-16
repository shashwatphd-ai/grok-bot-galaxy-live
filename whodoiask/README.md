# WhoDoIAsk

**You hired the bots. This is the page that remembers who does what.**

WhoDoIAsk is a single-file, offline routing cheat-sheet for agent teams you already have. Paste a CrewChart team spec (or pick a preset crew), write routing rules — situation triggers → who gets it → one honest "because" — and you get a live lookup desk (type "customer angry about billing", get a route with a reason), the rendered cheat-sheet, and a markdown export that pastes straight into your team wiki or the agent platform's instructions field.

Built during Day 1 of xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026), ahead of Day 2's Sales Engineering / Sales / SDRs / Customer Support sessions — where routing stops being an engineering curiosity and becomes the support org's oldest question.

## What it is

- **The desk** — type a situation as it actually arrives and get a route: *→ Ask Penny · Billing Ops — owns the money; anger routes to the one person who can reverse a charge.* Shows what matched, plus a next-best alternative.
- **The cheat-sheet** — every rule rendered as a card (situation → agent → why → triggers). Click a card to run it through the desk. This is what the export copies.
- **Routing rules** — editable: a situation label, comma-separated trigger words, an owner picked from the crew, and the because-sentence. Rules whose owner vanished (crew changed, agent archived) are flagged and can't silently misroute.
- **Fallback with honesty** — when no rule matches, a deterministic role-and-memory lexicon proposes a best guess and says, plainly, that it's a guess: holes are cheaper to fix at 2 PM than at the next escalation.
- **The crew** — imported roster chips (CrewChart's exact agent shape: name, role, color/shape avatar, scoped memory, archived alumni stay visible but take no routing).
- **"When in doubt, ask"** — a default agent for everything the sheet doesn't cover, in the UI and in every export.
- **Exports** — markdown cheat-sheet (rules table + crew list) with Copy and Download.
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, works straight from `file://`. Autosaves to localStorage as you type.

## 60-second demo

1. **(0:00)** Double-click `index.html`. Support Desk Co. loads: six crew chips, a cheat-sheet of six rules, a desk waiting at the top.
2. **(0:10)** Type *"customer angry about billing"* — the desk answers: **→ Ask Penny · Billing Ops**, matched on "billing", with the because-sentence, and Mira named as next best.
3. **(0:25)** Type *"demo environment is down"* — routes to Hank the Sales Engineer. Type *"prospect wants a POC"* — Hank again. Type something with no rule — the desk says so honestly and guesses by role/memory.
4. **(0:40)** Add a rule: label it, type triggers ("logo, brand, misuse"), pick the owner, write the why. The cheat-sheet card and the desk both update instantly.
5. **(0:50)** Click **Export cheat-sheet** → Copy. A markdown table of every situation, owner, why, and trigger — paste it into the platform's instructions field and the crew routes without you. *"You already hired the bots. This is who to ask."*

## Why now

Day 1 of Grok Bot Galaxy built the roster — 26+ named, role-titled bots, a "Meet the team" org chart, and (the quiet product moment) a command palette that suggested *"Get stats on X from Y"* whenever an agent hit a gap. The stream's own UI admits the problem: once you have a crew, **knowing who to ask is a lookup problem**, and nobody ships the lookup. Day 2 (Sept 16) is the Sales Engineering / Sales / SDRs / Customer Support track — the audience for whom "who do I ask" is the oldest question in the org, asked hundreds of times a day by humans and, now, by their agents too. Every viewer leaving Day 1 owns a crew and no routing doc; Day 2 hands them a hundred fresh situations to route. WhoDoIAsk is the cheat-sheet that closes the gap — offline, in one file, in the exact JSON shape CrewChart already exports.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |

## Data

State lives under localStorage key `whodoiask.v1`: `{ format: "whodoiask", version: 1, team, agents[{ id, name, role, color, shape, memory, reportsTo, status }], rules[{ id, label, words, agentId, why }], defaultAgentId }`. The agent objects are the same shape as CrewChart's spec v2 — a CrewChart export imports as-is (tasks and offers are noted and politely ignored; they stay in CrewChart). Clearing site data clears the sheet; the markdown export is the handoff.

## Roadmap (deliberately not built yet)

- CSV import of rules for teams who keep routing in spreadsheets today.
- A "holes report": queries the desk couldn't route, collected locally, as a to-write list.
- Share-as-URL (compressed state in the hash — still serverless).
- Platform exporters: paste-ready instruction blocks formatted per agent platform.
- Priority/confidence per trigger, and time-based routing ("after hours → human on-call").

## Honest limitations

- Routing is keyword matching, not intelligence — it proposes, you decide. Triggers are prefix word-matches, so "invoice" fires on "invoicing" but not "unbilling" (that's a feature).
- One sheet per browser (localStorage holds a single save; use the export to keep versions).
- The fallback guess reads role and memory text only — a crew with empty memory fields gets weaker guesses.
- Rules with no owner (crew changed underneath them) stay in the sheet flagged, and the desk refuses to route to ghosts.
- Clipboard access can be blocked on some `file://` setups; the export dialog always allows manual copy, plus Download.
- Desktop-first; tested via static checks and a headless logic smoke test, not a full click-through in every browser.
