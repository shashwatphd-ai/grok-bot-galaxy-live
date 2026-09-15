# CrewChart

**Design your AI agent team. Export the spec.**

CrewChart is a single-file, offline web app for sketching a *team* of AI agents the way modern agent platforms present them: named teammates with roles, their own scoped memory, and a parallel task board. When your roster looks right, export it as a portable JSON spec or a ready-to-paste kickoff prompt.

Inspired by xAI's "Grok Bot Galaxy" event (Sept 15–17, 2026), where a company is being built live on a roster of named agents under three pillars: **referencability** (you know who does what), **scoped memory** (each agent learns its own job), and **parallelism** (many working at once).

## What it is

- **Roster** — agent cards with name, role, a character avatar (nine colors, six CSS shapes — a nod to event roster slides), a *scoped memory* field ("what this agent learns on the job"), and a *reports to* org line.
- **Board** — one task lane per agent. Click a task chip to cycle it: queued → running → done. A parallelism meter shows how many agents are running at once.
- **Presets** — one click loads a "Travel Co." team (event-inspired), a "Solo Founder Crew", or a "Content Studio".
- **Export** — a JSON team spec (re-importable here, portable anywhere) and a markdown kickoff prompt that briefs the whole crew in one paste.
- **Zero setup** — one HTML file, no dependencies, no backend, no network calls, works straight from `file://`. Your team autosaves to browser localStorage.

## 60-second demo script

1. **(0:00)** Double-click `index.html`. The event-inspired "Travel Co." team loads by default — eight named agents with roles, memory scopes, and a live board.
2. **(0:15)** Point at the meter: *"3 of 8 agents running in parallel"* — then click a task chip twice to cycle it to `running` and watch the meter update.
3. **(0:30)** Click **+ Add teammate**, type a name and role, pick a color and shape, and jot its memory scope. Add a task in its lane, press Enter.
4. **(0:45)** Click **Copy kickoff prompt** — a briefing document for the whole crew, ready to paste into any agent platform. Then **Export JSON** to save the machine-readable spec.
5. **(1:00)** *"Your org chart is now a file."*

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic in one dependency-free file |

## JSON spec shape

```json
{
  "format": "crewchart",
  "version": 1,
  "team": "Travel Co.",
  "agents": [
    { "id": "a-…", "name": "Ledger", "role": "Data / Analyst",
      "color": "brown", "shape": "round",
      "memory": "Owns the metrics definitions…", "reportsTo": "a-…" }
  ],
  "tasks": [
    { "id": "t-…", "agentId": "a-…", "title": "Pull booking funnel numbers", "status": "running" }
  ]
}
```

## Roadmap (deliberately not built yet)

- Dependency arrows between tasks (real hand-offs, not just lanes).
- Multiple boards per team (per-week or per-project views).
- Cost/latency simulation: estimate token burn for a parallel wave.
- Import adapters for specific platforms' team-config formats.
- Print-friendly one-page org chart export.

## Honest limitations

- One team per browser (localStorage holds a single save; use Export/Import to keep versions).
- The board is a status board, not a scheduler — no dependencies, dates, or automatic execution.
- Clipboard copy can be blocked on some `file://` setups; the export dialog always lets you select and copy manually.
- Tested on current desktop Chrome/Edge/Firefox; no mobile-specific polish.
