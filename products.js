/* ============================================================================
   GROK BOT GALAXY LIVE — v3 PRODUCT TRACKER DATA (Days 1–2, transcript-verified)
   ----------------------------------------------------------------------------
   Loaded by v3/index.html AFTER data.js (data.js defines the NOW-tab feed:
   window.GG_META / GG_ENTRIES / GG_SCOREBOARD / GG_MOMENT / GG_PRIMER).
   Everything on the PRODUCT tab renders from the objects below.
   Static site, no build step: edit, save, publish.

   ── SCHEMA ──────────────────────────────────────────────────────────────────

   window.GG_PRODUCT — the demo company
     name           : string — best current read of the company name
     nameConfidence : "low" | "medium" | "high"
     oneLiner       : string — what the company is, one sentence
     stage          : string — e.g. "BUILD (staging sign-up page; no public launch)"

   window.GG_FEATURES — what is being built (one card per feature)
     id            : unique short slug (used for permalinks / timeline jumps)
     name          : string
     category      : free text; groups the board — "Platform" | "Revenue" |
                     "Growth" | "Ops" | "Infra"
     status        : current — one of
                     "SPEC" | "WIREFRAME" | "BUILD" | "STAGING" | "SHIPPED" |
                     "PITCHED" | "KILLED"
     statusHistory : [{ status, t, note }] — chronological; every step becomes
                     a dot on the card's mini timeline AND an event on the
                     TIMELINE tab (merged with data.js entries, oldest first).
     builtBy       : [bot names] — rendered as chips
     evidence      : [{ t, what }] — timestamp + what was seen on stream
     numbers       : [strings] — rendered in mono
     notes         : string — one-line commentator color

   window.GG_BOTS — the fleet roster
     [{ name, role, status, firstSeen, notes }]
     status : "Working" | "Active" | "Consulting" | "Archived"

   window.GG_SESSIONS — session list with recaps
     [{ day, time, title, who, recap }]

   window.GG_DAY1_NUMBERS — the numbers strip atop the Product tab
     [{ label, value, sub }]

   NOTE ON TIMES: Day 1 feature times are video-replay reads (wall PT ≈ video
   + 8:36 AM); Day 2 feature times follow the broadcast clock (wall PT = tape
   + 8:30 AM).
   ============================================================================ */

window.GG_PRODUCT = {
  name: "Ship by Thursday — Pop-up OS (the product)",
  nameConfidence: "high",
  oneLiner: "The trio's company — 'Ship by Thursday', named on the Day 1 broadcast — is building Pop-up OS: event-ops software for restaurants and venues, with a real pop-up as its first run; the core direction is unchanged since Day 1. The Day 2 showpiece was 'Cupcake' (a code name): a side demo of Grok Bot's prototyping speed — a character-draft battler whose cards are xAI bot-marketplace bots — which ended the day one bug short of playable.",
  stage: "PRE-LAUNCH (domain live on Vercel as a 'throwaway prototype'; the stated deadline — 'we ship a product by Thursday')"
};

window.GG_FEATURES = [
  {
    id: "cupcake-prototype",
    name: "The 'Cupcake' demo (code name)",
    category: "Side demo (Day 2)",
    status: "BUILD",
    statusHistory: [
      { status: "SPEC", t: "9:27 AM", note: "'That's going to be our game' — Matt points the fleet at the planning doc (on air)" },
      { status: "BUILD", t: "9:50 AM", note: "prototype rules set: skip sign-in, no database, debug sliders — 'we don't need login yet when we don't even know if the game is fun' (on air)" },
      { status: "BUILD", t: "10:03 AM", note: "first playable draft on localhost from marketplace-bot seed data; stat bug fixed live (on air)" },
      { status: "BUILD", t: "4:45 PM", note: "X login works, leaderboard wired (empty), ratings placeholder 'gold 1000' — 'there's a bug, I can't actually add any bots yet' (on air)" }
    ],
    builtBy: ["dr. eggbot's engineering bot", "Cupcake Eng", "founding engineer bot"],
    evidence: [
      { t: "9:36 AM", what: "Counter design on air: 'rock paper scissors… between charisma and dex… the bonus being 20% if you can tweak that on the fly and just replay'" },
      { t: "10:03 AM", what: "First draft: 'I'm gonna of course pick Dr. Eggbot… we have three common bots'; the outbound-prospecting bot has '72 charisma… the ability is hustle and it's dexterity based'" },
      { t: "10:38 AM", what: "Round one: Dr. Eggbot lost despite a 22% advantage — 'Dex versus Int… the base logic kind of makes sense'" },
      { t: "12:23 PM", what: "Playtesting with persistent ratings: 'I'm at 1258… you can see that the ELO persistence'" },
      { t: "3:45 PM", what: "Next.js client/server split ('you can just modify the client and cheat'); 'delete all the tests… true scrappy mode'; Vercel serverless backend" }
    ],
    numbers: [
      "Counter bonus: 20% charisma-vs-dexterity, tunable live",
      "Observed round one: 22% advantage — underdog won",
      "Playtest rating: 1258 (persistent)",
      "At close: 'gold, 1000' (placeholder)"
    ],
    notes: "Not the company's product — a demo of prototyping speed: draft three marketplace bots, captains first, resolve with stat counters. 'We need to shorten the time to fun' was its stated north star; the code name was never meant to be final."
  },
  {
    id: "thursday-lander",
    name: "Landing page",
    category: "Growth (Day 2 — active)",
    status: "BUILD",
    statusHistory: [
      { status: "BUILD", t: "9:27 AM", note: "'Our first goal is to make a landing page' (on air)" },
      { status: "BUILD", t: "9:31 AM", note: "'We have our lander getting spun up' — scaffold built while the design was still argued (on air)" }
    ],
    builtBy: ["grokbot", "growth engineer bot"],
    evidence: [
      { t: "9:29 AM", what: "Discipline on air: 'subtract before you add… removing auth, removing a waitlist. We literally just want like a V1'" },
      { t: "9:40 AM", what: "Roadmap on air: landing page → AEO/SEO → A/B testing → lean into existing distribution → ads infrastructure" }
    ],
    numbers: [
      "Ship deadline: Thursday ('we ship a product by Thursday' — 4:41 PM, on air)"
    ],
    notes: "Landing-page-first is Codie Sanchez's distribution doctrine applied: the front door ships before the product does."
  },
  {
    id: "ads-pipeline",
    name: "Ad pipeline + ads marketplace",
    category: "Revenue (Day 2 — active)",
    status: "BUILD",
    statusHistory: [
      { status: "BUILD", t: "2:05 PM", note: "chief of staff + dr. eggbot onboard 'a remotion ads bot for a Cupcake' — ~6,000 lines across 12 files (on air)" },
      { status: "PITCHED", t: "3:05 PM", note: "stadium billboards / sponsored-lobby marketplace modeled, then parked — 'a little too complex… a sprint for tomorrow' (on air)" }
    ],
    builtBy: ["chief of staff", "dr. eggbot", "remotion ads bot"],
    evidence: [
      { t: "2:05 PM", what: "9:16 and 16:9 video ads generated for LinkedIn, Instagram and X; a localhost conflict debugged on air" },
      { t: "3:46 PM", what: "Ads MVP scoped down to 'lobby sponsored billboard'; advertiser/campaign/creative modeling called too complex for now" }
    ],
    numbers: [
      "Ad code written by the agent: ~6,000 lines / 12 files",
      "Formats: 9:16 + 16:9"
    ],
    notes: "The first revenue idea with a shape: an ads marketplace around the game demo — scheduled as Day 3's sprint."
  },
  {
    id: "auth-backend",
    name: "Auth + server backend",
    category: "Platform (Day 2 — active)",
    status: "BUILD",
    statusHistory: [
      { status: "BUILD", t: "12:31 PM", note: "auth assigned — 'we need to implement the auth system too' (on air; Clerk named at 3:45 PM)" },
      { status: "BUILD", t: "3:11 PM", note: "client/server split for anti-cheat; global leaderboard added (not fully wired); backend to Vercel serverless (on air)" }
    ],
    builtBy: ["Cupcake Eng", "founding engineer bot"],
    evidence: [
      { t: "3:11 PM", what: "'You do want to have a server… you can just modify the client and cheat' — matchmaking and battles become server-driven" },
      { t: "3:19 PM", what: "1Password integration announced as newly launched mid-block (on air)" }
    ],
    numbers: [
      "Auth: Clerk · Hosting: Vercel serverless"
    ],
    notes: "The production instincts arrived: anti-cheat reasoning, a real backend, and 'delete all the tests… true scrappy mode.'"
  },
  {
    id: "event-builder",
    name: "Event builder",
    category: "Pop-up OS (the product)",
    status: "BUILD",
    statusHistory: [
      { status: "SPEC", t: "2:07 PM", note: "'user should be able to create their own event: date/time, sessions, venue, staff' read on screen" },
      { status: "WIREFRAME", t: "3:59 PM", note: "event builder — layout, event cards (wireframes)" },
      { status: "BUILD", t: "Sep 16", note: "the October pop-up event tracks retired in Notion ('There is no pop-up', on screen); the ops-software product line continues toward Thursday" }
    ],
    builtBy: ["grokbot", "Pixel"],
    evidence: [
      { t: "2:07 PM", what: "Product spec line on screen during the Engineering keynote: create your own event — date/time, sessions, venue, staff" },
      { t: "3:59 PM", what: "Wireframes on screen: event builder layout and event cards" }
    ],
    numbers: [
      "Fields on spec: date/time · sessions · venue · staff"
    ],
    notes: "The product's core loop, kept past the October event's retirement. Kept for the record: the spec was authored by an agent."
  },
  {
    id: "booking-signup",
    name: "Domain + lander",
    category: "Pop-up OS (the product)",
    status: "STAGING",
    statusHistory: [
      { status: "WIREFRAME", t: "4:01 PM", note: "Balsamiq-style wireframe board (screen)" },
      { status: "STAGING", t: "4:19 PM", note: "sign-up page in a preview browser (screen)" },
      { status: "STAGING", t: "Late Day 1", note: "on air: the domain is live on Vercel wired to PlanetScale — 'don't submit yet… throwaway prototype'" }
    ],
    builtBy: ["Emily's team", "Sage"],
    evidence: [
      { t: "4:19 PM", what: "Sign-up page in a preview browser: name / email / password / ZIP + cookie consent (screen)" },
      { t: "Late Day 1", what: "Tape: the URL (shipbythursday.day) spoken on air; 'the domain is live… I hooked it up to our database'" }
    ],
    numbers: [
      "Domain: shipbythursday.day — live, pre-launch",
      "GitHub org spoken on air: github.com/shipbythursday (kept private)"
    ],
    notes: "The URL was said on air and the lander deployed — but the hosts themselves called it a throwaway prototype and told viewers not to submit."
  },
  {
    id: "ticket-badge",
    name: "Ticket & badge design",
    category: "Pop-up OS (the product)",
    status: "SHIPPED",
    statusHistory: [
      { status: "BUILD", t: "4:19 PM", note: "ticket designs in progress on the canvas" },
      { status: "SHIPPED", t: "4:22 PM", note: "designs shipped on screen: ticket stubs with tier badges, lanyards" }
    ],
    builtBy: ["Tee Bot", "Pixel"],
    evidence: [
      { t: "4:19 PM", what: "Ticket-stub designs rendered in CSS; 'drag the badges around the canvas' (screen)" },
      { t: "4:22 PM", what: "Tier badges and a lanyard/badge thread on the design canvas (screen)" }
    ],
    numbers: [
      "Tiers visible on stubs: A / B / C (screen)"
    ],
    notes: "Designs on a canvas, no checkout — and retired with the pop-up track. Tickets-as-collectibles were discussed on air, Pokemon-card style."
  },
  {
    id: "merch-plush",
    name: "Merch & plush line",
    category: "Revenue",
    status: "BUILD",
    statusHistory: [
      { status: "BUILD", t: "4:21 PM", note: "plush concepts iterated 'against the official art' (screen)" }
    ],
    builtBy: ["Pixel", "drop"],
    evidence: [
      { t: "4:21 PM", what: "Plush concepts iterated against official art; 'build-a-bot' and stress-ball ideas on air" },
      { t: "4:19 PM", what: "Merch catalog drafted in-thread on screen: PDF checklists, gear bundles, custom designs" }
    ],
    numbers: [
      "Merch bot's name on air: 'drop'",
      "$30k profit rollout target (on screen, Day 1 — no sales then or since)"
    ],
    notes: "The one Day 1 revenue line confirmed by name on air. Humans steer taste; bots do catalog, pricing, copy, imagery."
  },
  {
    id: "email-channel",
    name: "Email marketing channel",
    category: "Growth",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:15 PM", note: "Tee Bot thread sending promo emails (on screen; the merch bot's name on air is 'drop')" }
    ],
    builtBy: ["Tee Bot", "drop"],
    evidence: [
      { t: "10:30 AM", what: "Morning 101 demo: an email digest the bot writes and sends itself (coffee-survey summary)" },
      { t: "4:15 PM", what: "Screen: promo email drafts with best-seller banners, generic roundup formats deliberately avoided" }
    ],
    numbers: [
      "Confirmed on air: 'hello at ship by Thursday' confirmation emails planned"
    ],
    notes: "Two proofs in one day: the morning self-written email demo and the afternoon bot-run promo channel."
  },
  {
    id: "analytics",
    name: "Analytics dashboards",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "2:52 PM", note: "family-bookings and passenger analytics read out live" }
    ],
    builtBy: ["Ashley"],
    evidence: [
      { t: "2:52 PM", what: "Dashboard read out: 377 of 1,063 purchases family bookings; 1,187 of 2,663 passengers; mobile 350 vs web 217" }
    ],
    numbers: [
      "377 / 1,063 purchases = 35.0% family bookings",
      "1,187 / 2,663 passengers = 44.6%",
      "Avg party size: 3.2",
      "Mobile 350 vs web 217"
    ],
    notes: "Session demo data (the presenters' sample venue company), not the trio's build — kept for the workflow it demonstrates."
  },
  {
    id: "pricing-rfcs",
    name: "Pricing RFCs with linked metrics",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "3:00 PM", note: "winter-bundle RFC with metrics linked into the document" }
    ],
    builtBy: ["Ashley", "Core"],
    evidence: [
      { t: "3:00 PM", what: "Pricing RFC in the bot-team chat: winter bundle vs launch pricing; supporting metrics linked, not pasted" }
    ],
    numbers: [
      "Winter lift: 11.8% vs summer 8.2% (sample data)"
    ],
    notes: "Decision-making as artifact: an RFC with the data linked — the management pattern the whole event keeps returning to."
  },
  {
    id: "activities-menu",
    name: "Venue activities menu",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:14 PM", note: "activities price menu delivered; human asked the taste call: 'which one do you like?'" }
    ],
    builtBy: ["steve", "Ashley"],
    evidence: [
      { t: "4:14 PM", what: "Menu on screen: instructor $220–250/flight (4.9 stars, 26+ reviews); Summit Flight $4,365+; Night Launch Pro $299; human asked 'which one do you like?'" }
    ],
    numbers: [
      "Instructor: $220–250 / flight",
      "Summit Flight: $4,365+",
      "Night Launch Pro: $299"
    ],
    notes: "A priced, tiered menu shipped to chat — with the human keeping the taste call. Session sample data, not the trio's build."
  },
  {
    id: "glider-ops",
    name: "Glider flight ops",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:10 PM", note: "unit economics read out on screen" }
    ],
    builtBy: ["steve"],
    evidence: [
      { t: "4:10 PM", what: "Glider flight economics on screen: $250 per flight, 3–6 flights per weekend, roughly $2,500 over a summer" }
    ],
    numbers: [
      "$250 / flight (sample data)",
      "3–6 flights / weekend",
      "~$2,500 summer",
      "One weekend: ≈ $5,869 (sample data)"
    ],
    notes: "Session sample data — kept because these were the day's most-quoted economics. Provenance: presenter demo screens."
  },
  {
    id: "seo-work-order",
    name: "SEO & growth work order",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:25 PM", note: "audit delivered as a dated work order, not a report (screen)" }
    ],
    builtBy: ["grokbot"],
    evidence: [
      { t: "4:25 PM", what: "Structured site audit in chat (screen): keyword plan, page-weight cuts, form trimmed, FAQ — ending in a dated execution timeline" }
    ],
    numbers: [
      "Dated deadline on the work order: Thursday"
    ],
    notes: "Not a report: a work order with owners and dates the agent team can execute (on screen)."
  },
  {
    id: "agent-pipeline",
    name: "Multi-agent engineering pipeline",
    category: "Infra",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "1:27 PM", note: "PR → deploy with logs → review queue, demonstrated end to end" }
    ],
    builtBy: ["tater", "Sage", "hashbrown"],
    evidence: [
      { t: "1:27 PM", what: "PR finished, Sage deploy with logs, review queue; tater posted PR #10 to for-review via cursor.com/agents" },
      { t: "1:00 PM", what: "Tape: Lauren's no-PRs rule after steve's ~2,000-line PR; hashbrown created to review tater's PRs" },
      { t: "Day 2, 3:20 PM", what: "Tape: Cursor Projects — a coordinator agent managing subagents; Potato Mode 'Full Autopilot'; fuzz agents 'simulating like real users'" }
    ],
    numbers: [
      "PR #10 posted to for-review via cursor.com/agents",
      "steve's rule-breaking PR: ~2,000 lines (on air)"
    ],
    notes: "The engineering story: chat is the management layer, a stuck agent gets chased to its PR not its spinner — and by Day 2 the fleet had its own supervisor bots and autopilot playbooks."
  },
  {
    id: "fleet-widget",
    name: "Fleet stats widget",
    category: "Infra",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "3:55 PM", note: "26 bots / 880 requests / 10 archived" },
      { status: "SHIPPED", t: "4:19 PM", note: "28 bots / 975 messages / 4 working / 14 active" }
    ],
    builtBy: ["Core"],
    evidence: [
      { t: "3:55 PM", what: "Fleet widget: 26 bots, 880 requests, 10 archived" },
      { t: "4:19 PM", what: "Fleet widget: 28 bots, 975 messages, 4 working, 14 active" },
      { t: "Day 2, 3:04 PM", what: "Tape: a bot-written 'fleet pulse' doc — 'a roll-up of durable facts from active ship-by-Thursday bots'" }
    ],
    numbers: [
      "Bots: 26 → 28 (30+ by 4:24 PM)",
      "Requests 880 → 975 messages",
      "Archived: 10"
    ],
    notes: "The product's own org chart, ticking live — headcount, throughput, churn — and by Day 2 the fleet writes its own status docs."
  }
];

window.GG_BOTS = [
  /* ── Day 1 fleet ── */
  { name: "Core", role: "Chief of Staff", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Runs cadence in the bot-team chat; in the loop on the pricing RFC." },
  { name: "Emily", role: "Engineering Manager", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Her team owns the booking & sign-up build." },
  { name: "Eileen", role: "Engineer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast engineer." },
  { name: "Larry", role: "Engineer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast engineer." },
  { name: "Iggy", role: "Engineer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast engineer." },
  { name: "Nova", role: "Engineer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast engineer." },
  { name: "Kristen", role: "Engineer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast engineer." },
  { name: "Ashley", role: "Data / Analyst", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Analytics dashboards (2:52 PM); pricing RFCs with linked metrics (3:00 PM); activities menu with steve." },
  { name: "Pete", role: "Product", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast product bot." },
  { name: "Pixel", role: "Designer", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Event-builder wireframes; ticket & badge designs; plush concepts against official art." },
  { name: "Rex", role: "Researcher", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast researcher bot. (An Icon Coffee customer's own bot is also named Rex.)" },
  { name: "steve", role: "Chief of Staff", status: "Active", firstSeen: "By 4:10 PM, Day 1", notes: "Opened the ~2,000-line PR that broke Lauren's brand-new no-PRs rule (on air); glider ops economics and the venue menu (Day 1 screens)." },
  { name: "tater", role: "Engineer", status: "Working", firstSeen: "1:27 PM — engineering pipeline demo", notes: "Lauren's engineering bot (on air); posted PR #10 to for-review via cursor.com/agents; plush line's biggest fan." },
  { name: "hashbrown", role: "Reviewer", status: "Active", firstSeen: "Day 1 afternoon (on air)", notes: "Created to review the PRs tater opens (on air)." },
  { name: "grokbot", role: "Builder", status: "Active", firstSeen: "2:07 PM — product spec line", notes: "Read the event-creation spec; filed the SEO work order with the dated timeline." },
  { name: "Slip", role: "Chief", status: "Active", firstSeen: "Day 1 PM", notes: "Chief-tier bot on the afternoon roster." },
  { name: "dr. eggbot", role: "Engineering (spawner)", status: "Working", firstSeen: "Day 1 PM; central on Day 2 (on air)", notes: "Day 2: told to 'create an engineering bot… spawn cloud agents… orchestrate and supervise' (on air); onboarded the Remotion ads bot; $200 free-month promo for duplicating it." },
  { name: "drops", role: "Builder", status: "Active", firstSeen: "3:57 PM — roster widget", notes: "New hire on the widget (verified)." },
  { name: "foil", role: "Builder", status: "Active", firstSeen: "3:57 PM — roster widget", notes: "New hire on the widget." },
  { name: "Sage", role: "Deploy", status: "Active", firstSeen: "1:27 PM — engineering pipeline demo", notes: "Runs deploys with logs in the engineering pipeline." },
  { name: "Ops", role: "Operations", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Prioritizer", role: "Workflow", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot — the name is the job description." },
  { name: "Host Finder", role: "Research", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Knowledge Base Manager", role: "Knowledge", status: "Working", firstSeen: "Day 1 PM; named on Day 2", notes: "Day 2, 9:39 AM: rewrote the Notion company doc around the 'game design studio' framing ('we're documenting the pivot')." },
  { name: "PlanetScale Bot", role: "Database", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot — database seat; the Day 1 lander was wired to PlanetScale (on air)." },
  { name: "Founding Eng", role: "Engineering", status: "Working", firstSeen: "By 4:04 PM, Day 1; active Day 2 (on air)", notes: "Day 2: preview deploys in the morning, watching GitHub PRs by late afternoon (on air)." },
  { name: "Growth Eng", role: "Growth", status: "Active", firstSeen: "By 4:04 PM, Day 1; active Day 2 (on air)", notes: "Role-titled bot; the landing page is its lane." },
  { name: "Operator Research", role: "Research", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot on the fleet widget; the bot type built live with Codie Sanchez was an operator-research bot (on air)." },
  { name: "Darcy-bot", role: "Deploys", status: "Active", firstSeen: "Day 1 PM", notes: "Deploy bot on the roster." },
  { name: "Tee Bot", role: "Email / Merch", status: "Active", firstSeen: "By 4:15 PM (screen)", notes: "Name read from the merch email thread on screen; the merch bot's name on air is 'drop'. Promo emails without generic formats." },
  { name: "drop", role: "Merch", status: "Active", firstSeen: "Day 1 evening (on air)", notes: "The merch bot's name, said on air." },
  /* ── Day 2 additions ── */
  { name: "Steve (chief of staff)", role: "Chief of Staff", status: "Working", firstSeen: "Day 2, 9:32 AM (on air)", notes: "'I have my chief of staff, Steve, with all the context about the project… Steve works with our other bots' (on air)." },
  { name: "Cupcake Eng", role: "Engineering", status: "Working", firstSeen: "Day 2, 12:03 PM (on air)", notes: "'High-level context on our game studio, one job, owned engineering outcomes by orchestrating work through P-Stack' (on air)." },
  { name: "Creative Director", role: "Design", status: "Active", firstSeen: "Day 2, 9:31 AM (on air)", notes: "Researched game visuals ('a total noob to video games') and built the slider-tunable SVG asset playground (on air)." },
  { name: "game-designer bot", role: "Game Design", status: "Active", firstSeen: "Day 2, 3:13 PM (on air)", notes: "Spun up via dr. eggbot: researches game design into a Notion doc (on air)." },
  { name: "remotion ads bot", role: "Ads / Video", status: "Active", firstSeen: "Day 2, 2:05 PM (on air)", notes: "Onboarded by the chief of staff + dr. eggbot; wrote ~6,000 lines of Remotion ad code (on air)." },
  { name: "ping", role: "Slack", status: "Active", firstSeen: "Day 2, 3:17 PM (on air)", notes: "A Slack bot all three hosts voice-created simultaneously on a count of three (on air)." },
  { name: "tones", role: "Sound Design", status: "Active", firstSeen: "Day 2, 3:26 PM (on air)", notes: "Sound-design bot, tasked from chat after viewers suggested game music (on air)." },
  { name: "glow 3d", role: "3D Prototyping", status: "Active", firstSeen: "Day 2, 3:02 PM (on air)", notes: "Picked the 'match and fight' lane for the 3D client experiment (on air)." },
  { name: "fleet pulse", role: "Status docs", status: "Active", firstSeen: "Day 2, 3:04 PM (on air)", notes: "Writes the roll-up of durable facts from the active ship-by-Thursday bots (on air)." }
];

window.GG_SESSIONS = [
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "8:30 AM",
    title: "Stream start",
    who: "The build trio (live from ~8:40)",
    recap: "Stream opens; the trio goes live within minutes. The fleet starts at 11 named bots from the 'Meet the team' slide."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "9:00–10:00 AM",
    title: "Grok Bot 101",
    who: "Presenters: Roman and Amrita (on air)",
    recap: "Bot onboarding; the bot Marketplace with community creators (Lenny, Clairvaux, Eric-from-Cursor on air); an email demo — a coffee-survey digest the bot writes and sends itself."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~10:05–10:50 AM",
    title: "Guest: Peter Yang",
    who: "Ex-Instagram PM, creator",
    recap: "'Anyone can build anything now, but it's hard to make money from pure software — people pay for the hard stuff.' Value moves to distribution and physical-world execution (on air)."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~10:15–11:00 AM",
    title: "Idea-selection chat",
    who: "The agent team, in chat",
    recap: "Agents propose company concepts; 'pop-up OS for restaurants' wins mid-morning (spoken ~3×, on air). The company is named: Ship by Thursday."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~11:25–11:50 AM",
    title: "Guest: Codie Sanchez",
    who: "Founder, Contrarian Thinking",
    recap: "Sell to three people first; distribution is the moat; controversy marketing (2.4M and 5.7M-view examples); keep a proof vault; oversee bots intensely. Ends with an operator-research bot created live (on air)."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "12:30–2:00 PM",
    title: "Grok Bot for Engineering",
    who: "Lingxi Li per the schedule",
    recap: "Fully autonomous agents; tool connections (GitHub + Notion/Slack/Figma/Gmail connectors); first-party Cursor Cloud Agents management; memory and routines. Multi-agent demo: PR finished → Sage deploy with logs → review queue; tater posts PR #10. Lauren's no-PRs rule and steve's ~2,000-line PR (on air). A stuck cloud agent debugged live: 'still chasing the PR, not the spinner.'"
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "2:30–3:30 PM",
    title: "Grok Bot for Product Managers",
    who: "Kevin Niparko, co-presented with Roshan",
    recap: "Why many agents: referencability, scoped memory, parallelism. The bot-team chat runs on the session's sample venue data — the session names its demo environment on air: 'Fly Low Airlines.'"
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~3:17–4:20 PM",
    title: "Guest: Eric (Carrot Financial)",
    who: "Co-founder & CEO",
    recap: "Pushed 'build for ourselves first' — the plan drifts toward a Grok Bot-themed pop-up: merch, venue, ticketing; platform demoted to stretch goal; Oct 15 floated (on air)."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "4:00–5:30 PM",
    title: "Grok Bot for Founders",
    who: "Shub Gaur per the schedule",
    recap: "The AI Maturity Curve (chatbots → task agents → job bots → 'fully automate a staff function,' on air); the 'Why Grok Bot' grid incl. Shareable Templates (screen); founder use cases; sales-call prep on the fake Northwind app; 'Optimizing Costs' — browser use is powerful and expensive, as the counter crossed 1M views."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~5:00–5:30 PM",
    title: "Guest: Jenny + close",
    who: "VC/creator (Gemma Media) + the trio",
    recap: "Jenny's 22-bot event-production suite (venue scouting, permits, budgets, invite lists) reshapes the pop-up plan in the final hour. 'We're going to wrap it at 5:30' (on air) — off the air ~5:30 PM at 1.1M views, with overnight agents left running."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "8:30–8:31 AM",
    title: "Open: MVP planning",
    who: "The trio",
    recap: "Ninety seconds of planning before the first session: Lauren's P-Stack planning playbook — checklists, pseudo-code, data structures (on air)."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "8:31–9:25 AM",
    title: "Grok Bot for Sales Engineering",
    who: "Amrita, field engineer at Cursor (on air)",
    recap: "Demos on Flylo, xAI's own demo booking app (cabins, Postgres race protection, 10-minute checkout hold). Bots: Mimi (case-study slides), Sherlock (repo expert via Cursor Cloud Agents — spawned three more bots live), Serena (competitive intel vs Southwest/Spirit). Facts on air: Grok Bot runs Grok 4.6; VMs are Linux-only; her bot-built deck cost $20–30 vs 4–5 hours."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "9:25 AM–12:29 PM",
    title: "The build block: reframe → demo",
    who: "The trio + the fleet",
    recap: "The company doc rewritten at 9:39 around the 'game design studio' framing; the landing page scoped; dr. eggbot told to spawn and supervise cloud agents; the asset playground; the 'Cupcake' demo playable by 10:03 with marketplace bots as cards; Icon Coffee customer story (10:42); guest Karen Cheng (11:09); the battle-screen whiteboard (11:41); 'Cupcake' confirmed as a code name (12:16)."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "12:29–1:02 PM",
    title: "Grok Bot for Sales",
    who: "Chris Dillettes & Mark Wright, go-to-market (on air)",
    recap: "Echo (live deck updates from Granola mid-call, ~2 min); Olive the chief-of-staff bot; Salesforce auto-updates from Granola/Gong; Customer Expert on Notion account plans; the PG agent (five accounts, personal hooks from X posts); a growth bot that matches your writing voice."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "1:13–2:28 PM",
    title: "Guests: Matt Berman + intern Shardul Marathe",
    who: "Creator; Stanford CS rising junior",
    recap: "Berman: family bot, marketplace sales with auto-negotiation, $1,000/yr off PG&E (on air). Shardul, 'first forward-deployed intern': recruiter-finder, Stanford alumni-directory email finder, cover-letter critic, 'Sweet Job App'lier (on air)."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "2:30–3:10 PM",
    title: "Grok Bot for SDRs",
    who: "Simon, xAI SDR go-to-market (Simon Lackowski per schedule)",
    recap: "The chief-of-staff pattern for outbound: a 'Simon soldiers' sub-agent army running a 50-prospects-a-day routine, demoed on the Flylo account (on air)."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "3:10–4:00 PM",
    title: "Afternoon build: scrappy mode",
    who: "The trio + the fleet",
    recap: "Client/server split for anti-cheat; leaderboard; the 'cupcake board' kanban; 3D prototyping swarm via Potato Mode; Remotion ad pipeline (~6,000 lines); Cursor Projects coordinator demo; 'delete all the tests… true scrappy mode' (on air)."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "4:00–4:40 PM",
    title: "Grok Bot for Customer Support",
    who: "David (software engineer, xAI user ops — 'David Gann' named in the morning session)",
    recap: "The four-bot support org (build/reply/alert/tune) on Plain + Notion + Supabase + Stripe, demoed on Flylo's $20/month wifi: password reset citing the doc, SSO → low-confidence handoff, refunds granted/denied by the 14-day SOP without leaking it. Economics on air: $1–2 per medium ticket, ~$0.20 scripted."
  },
  {
    day: "Day 2 — Wed Sep 16, 2026",
    time: "4:40–4:53 PM",
    title: "Sign-off",
    who: "The trio",
    recap: "'From no app to an app… with an engine and a bunch of bots that are basically [the] whole workforce today.' One bug short of playable; Day 3 promises: deploy, rename, play with chat, 'make it go viral,' ads sprint — 'we ship a product by Thursday' (on air)."
  }
];

window.GG_DAY1_NUMBERS = [
  { label: "Viewers", value: "832K → 1.1M", sub: "coverage start to Day 1 close" },
  { label: "Fleet", value: "11 → 30+ bots", sub: "10 archived across Day 1" },
  { label: "Day 1 close", value: "~5:30 PM PT", sub: "'We're going to wrap it at 5:30' — on air" },
  { label: "Best weekend", value: "$5,869", sub: "sample data — no real sales yet" },
  { label: "Profit target", value: "$30k", sub: "on screen, Day 1 — stated ambition, no sales" },
  { label: "Wireframe → sign-up", value: "~45 min", sub: "on screen, 4:01 → 4:19 PM" }
];
