# CrewChart

**Design your AI agent team. Run it like a fleet. Export the spec.**

CrewChart is a single-file, offline web app for sketching a *team* of AI agents the way modern agent platforms present them: named teammates with roles, their own scoped memory, a parallel task board, a live fleet-stats strip, agent-to-agent delegation, lifecycle (alumni) states, and a price menu for what each teammate delivers. When your roster looks right, export it as a portable JSON spec, a kickoff prompt, or a markdown price menu.

Inspired by xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026), where a company is being built live on a roster of named agents under three pillars: **referencability** (you know who does what), **scoped memory** (each agent learns its own job), and **parallelism** (many working at once) — plus the realities the stream surfaced: **bots churn** (a live widget showed 26 online / 10 archived) and **agents merchandise** (a bot assembled a price menu and asked the human "which one do you like?").

## What it is

- **Live Ops strip** — fleet stats with animated counters: bots online, tasks running, web requests (a local simulation ticker, clearly labeled), archived alumni. Mirrors the event's stats widget; updates live as you work the board.
- **Roster** — agent cards with name, role, a character avatar (nine colors, six CSS shapes), a *scoped memory* field, a *reports to* org line, and a lifecycle: **Archive** moves a teammate to alumni (grayed card, stamped, history kept) instead of deleting; **Restore** brings them back.
- **Board** — one task lane per agent. Click a chip to cycle queued → running → done; the parallelism meter counts active agents only. Every task has a **⇢ ask** button that opens a *Delegate to…* palette: teammates are ranked by role-keyword match against the task title (named-in-task counts most, then role, then scoped memory), and the pick is stamped on the chip. New tasks trigger a one-line suggestion toast.
- **Menu** — pricing cards per agent: deliverable, price point, unit (e.g. "$220–250 / per flight · 4.9★"). **Price it** suggests a card from the agent's role; **Copy menu** exports the whole sheet as markdown — paste it to a client and ask which one they like.
- **Presets** — "Travel Co." (event-inspired, ships with one archived alum so churn is visible), "Glider Co." (a direct homage to the stream's glider-flight business: flight logs, $299 Night Launch Pro, $5,869 weekend), "Solo Founder Crew", "Content Studio".
- **Export** — JSON team spec (version 2: adds `status`, `ask`, `offers`; version-1 files still import cleanly), markdown kickoff prompt (now includes delegation markers and the price menu), markdown price menu.
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, works straight from `file://`. Autosaves to localStorage (fleet ticker to its own key).

## 90-second demo script

1. **(0:00)** Double-click `index.html`. Travel Co. loads with a LIVE fleet strip counting up — 8 online, 3 running, and 1 stamped *Archived* alum.
2. **(0:20)** On a queued task, click **⇢ ask**: the palette ranks teammates ("matches 'rfc'") and tags the best match. Pick one; the chip now reads "⇢ Ledger".
3. **(0:40)** Click a task chip to cycle it to `running` — meter, ops strip, and the simulated web-request counter all tick up.
4. **(0:55)** Switch the preset to **Glider Co.**: the menu fills with $299 Night Launch Pro and $4,365 Summit Flight cards. Click **Price it** on anyone.
5. **(1:15)** **Copy menu** → markdown price sheet; **Export JSON** → the portable spec. *"Your org chart is now a file — with a price list."*

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |

## JSON spec shape (version 2)

```json
{
  "format": "crewchart",
  "version": 2,
  "team": "Travel Co.",
  "agents": [
    { "id": "a-…", "name": "Ledger", "role": "Data / Analyst",
      "color": "brown", "shape": "round",
      "memory": "Owns the metrics definitions…", "reportsTo": "a-…",
      "status": "active" }
  ],
  "tasks": [
    { "id": "t-…", "agentId": "a-…", "title": "Pull booking funnel numbers",
      "status": "running", "ask": "a-…" }
  ],
  "offers": [
    { "id": "o-…", "agentId": "a-…", "title": "Funnel deep-dive",
      "price": "$95", "unit": "per report" }
  ]
}
```

`status` is `active` or `archived`; `ask` is the delegated owner suggested by the palette; `offers` are the Menu pricing cards. Version-1 files (no `status`/`ask`/`offers`) import unchanged.

## Roadmap (deliberately not built yet)

- Dependency arrows between tasks (real hand-offs, not just lanes).
- Multiple boards per team (per-week or per-project views).
- Cost/latency simulation: estimate token burn for a parallel wave.
- Import adapters for specific platforms' team-config formats.
- Print-friendly one-page org chart export.
- A "chat as management layer" view: a Slack-style log where asking a named agent posts to its lane (the stream's Bot team chat, demodeled).

## Honest limitations

- One team per browser (localStorage holds a single save; use Export/Import to keep versions).
- The board is a status board, not a scheduler — no dependencies, dates, or automatic execution.
- The web-requests counter is a local simulation for demo feel (labeled as such in the UI); nothing networked.
- The Delegate palette is keyword heuristics, not intelligence — it proposes; you decide.
- Clipboard copy can be blocked on some `file://` setups; the export dialog always lets you select and copy manually.
- Tested on current desktop Chrome/Edge/Firefox via static checks + a headless logic smoke test; no mobile-specific polish.
