/* ============================================================================
   GROK BOT GALAXY LIVE — v3 PRODUCT TRACKER DATA
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
              ("Working" is reserved for bots the scoreboard names as working
              right now; "Archived" reserved for bots known by name.)

   window.GG_SESSIONS — session list with recaps
     [{ day, time, title, who, recap }]

   window.GG_DAY1_NUMBERS — the numbers strip atop the Product tab
     [{ label, value, sub }]

   NOTE ON TIMES: statusHistory / evidence timestamps are Day 1 VIDEO-REPLAY
   times. Wall-clock PT ≈ video time + 9:07 AM.
   ============================================================================ */

window.GG_PRODUCT = {
  name: "'Pop-up OS' (working name)",
  nameConfidence: "medium",
  oneLiner: "Event-ops software for local restaurants and venues — bookings, morning briefs, menu and review management — born from a planned restaurant pop-up. On Day 2 the physical pop-up event was retired ('There is no pop-up') and the team went product-first: landing page, AEO/SEO, A/B testing, first bookings",
  stage: "BUILD (Day 2 pivot: pop-up event retired, product-first; lander in staging; no public launch)"
};

window.GG_FEATURES = [
  {
    id: "event-builder",
    name: "Event builder",
    category: "Platform",
    status: "BUILD",
    statusHistory: [
      { status: "SPEC", t: "2:07 PM", note: "'user should be able to create their own event: date/time, sessions, venue, staff' read on screen" },
      { status: "WIREFRAME", t: "3:59 PM", note: "event builder — layout, event cards (wireframes)" },
      { status: "BUILD", t: "4:19 PM", note: "build underway — staging sign-up page compiling on screen by this time" }
    ],
    builtBy: ["grokbot", "Pixel"],
    evidence: [
      { t: "2:07 PM", what: "Product spec line on screen during the Engineering keynote: create your own event — date/time, sessions, venue, staff" },
      { t: "3:59 PM", what: "Wireframes on screen: event builder layout and event cards" }
    ],
    numbers: [
      "Fields on spec: date/time · sessions · venue · staff"
    ],
    notes: "The company's core loop. Spec read on the Engineering keynote screen; wireframes before the founders session began."
  },
  {
    id: "booking-signup",
    name: "Booking & sign-up",
    category: "Platform",
    status: "STAGING",
    statusHistory: [
      { status: "WIREFRAME", t: "4:01 PM", note: "Balsamiq-style wireframe board" },
      { status: "STAGING", t: "4:19 PM", note: "sign-up page in a preview browser — NOT publicly launched" }
    ],
    builtBy: ["Emily's team", "Sage"],
    evidence: [
      { t: "4:01 PM", what: "Balsamiq-style board on screen: booking and sign-up flow" },
      { t: "4:19 PM", what: "Sign-up page live in a preview browser: name / email / password / ZIP + cookie consent; page says results coming soon" }
    ],
    numbers: [
      "Sign-up fields: 4 (+ cookie consent)",
      "Publicly launched: no — staging/preview only"
    ],
    notes: "The closest thing to a launch: a staging sign-up in a preview browser. URL never legible on stream, nothing publicly indexed."
  },
  {
    id: "ticket-badge",
    name: "Ticket & badge design",
    category: "Revenue",
    status: "SHIPPED",
    statusHistory: [
      { status: "BUILD", t: "4:19 PM", note: "ticket designs in progress on the canvas" },
      { status: "SHIPPED", t: "4:22 PM", note: "designs shipped: night-market ticket stubs, PLATFORM tiers, OfficePass Plus badge" }
    ],
    builtBy: ["Tee Bot", "Pixel"],
    evidence: [
      { t: "4:19 PM", what: "Night-market ticket stubs rendered in CSS; 'drag the badges around the canvas'" },
      { t: "4:22 PM", what: "PLATFORM tiers A/B/C and an OfficePass Plus badge on the design canvas; lanyards/badges thread" }
    ],
    numbers: [
      "Tiers: A / B / C",
      "Badge: OfficePass Plus"
    ],
    notes: "Designs shipped, no checkout yet — tickets and badges dragged around a CSS canvas on stream."
  },
  {
    id: "merch-plush",
    name: "Merch & plush line",
    category: "Revenue",
    status: "BUILD",
    statusHistory: [
      { status: "BUILD", t: "4:21 PM", note: "Grok Bot plush concepts iterated 'against the official art'" }
    ],
    builtBy: ["Pixel", "Tee Bot"],
    evidence: [
      { t: "3:57 PM", what: "Product catalog drafted in-thread: 'Glider Checklist' PDF $5–10, gear-guide bundle ~$25, custom merch designs for an official merch page" },
      { t: "4:21 PM", what: "Plush concepts iterated against the official art; a Kirby-style character; mini versions called the 'plush fleet'" }
    ],
    numbers: [
      "'Glider Checklist' PDF: $5–10",
      "Gear-guide bundle: ~$25",
      "Profit rollout target: $30k (stated ambition, no sales yet)"
    ],
    notes: "Second revenue line: concepts first, catalog in-thread, plush iterated against official art. Humans steer taste; bots do catalog, pricing, copy, imagery."
  },
  {
    id: "email-channel",
    name: "Email marketing channel",
    category: "Growth",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:15 PM", note: "Tee Bot sending promo emails — avoiding generic formats, weaving in best-seller banners" }
    ],
    builtBy: ["Tee Bot"],
    evidence: [
      { t: "9:00–10:00 AM", what: "Morning 'Grok Bot 101' demo: supplier email negotiated; 500-unit shipment confirmation" },
      { t: "4:15 PM", what: "Tee Bot thread: drafting and sending promo emails; best-seller banners woven into campaigns; generic roundup formats deliberately avoided" }
    ],
    numbers: [
      "Supplier shipment confirmed: 500 units"
    ],
    notes: "Two proofs in one day: the morning supplier negotiation demo and the afternoon bot-run promo channel."
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
      { t: "2:52 PM", what: "Dashboard read out: family bookings 377 of 1,063 purchases; 1,187 of 2,663 passengers; mobile 350 vs web 217" }
    ],
    numbers: [
      "377 / 1,063 purchases = 35.0% family bookings",
      "1,187 / 2,663 passengers = 44.6%",
      "Avg party size: 3.2",
      "Mobile 350 vs web 217"
    ],
    notes: "Ashley reads the company's own numbers live: bookings, passengers, party size, device split."
  },
  {
    id: "pricing-rfcs",
    name: "Pricing RFCs with linked metrics",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "3:00 PM", note: "Pine Cabins winter-bundle RFC with metrics linked into the document" }
    ],
    builtBy: ["Ashley", "Core"],
    evidence: [
      { t: "3:00 PM", what: "Pricing RFC in the bot-team chat: Pine Cabins winter bundle vs launch pricing; supporting metrics linked, not pasted" }
    ],
    numbers: [
      "Winter lift: 11.8% vs summer 8.2%"
    ],
    notes: "Decision-making as artifact: an RFC with the data linked — the management pattern the whole day keeps returning to."
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
      "Rating: 4.9 stars · 26+ reviews",
      "Summit Flight: $4,365+",
      "Night Launch Pro: $299"
    ],
    notes: "A priced, tiered menu shipped to chat — with the human keeping the taste call."
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
      { t: "4:10 PM", what: "Glider flight economics: $250 per flight, 3–6 flights per weekend, roughly $2,500 over a summer" }
    ],
    numbers: [
      "$250 / flight (sample data)",
      "3–6 flights / weekend",
      "~$2,500 summer",
      "One weekend: ≈ $5,869 (sample data)"
    ],
    notes: "Session sample data, not the trio's build — kept because the $250/$5,869 figures were the day's most-quoted economics. Provenance: presenter demo screens."
  },
  {
    id: "seo-work-order",
    name: "SEO & growth work order",
    category: "Session demo",
    status: "SHIPPED",
    statusHistory: [
      { status: "SHIPPED", t: "4:25 PM", note: "audit delivered as a dated work order, not a report" }
    ],
    builtBy: ["grokbot"],
    evidence: [
      { t: "4:25 PM", what: "Structured site audit in chat: 'Weekend Pilot' keyword plan, page-weight cuts, sign-up form trimmed to 3 fields, FAQ section — ending in a dated execution timeline to Thu 9/17 staging link" }
    ],
    numbers: [
      "Sign-up form trimmed to: 3 fields",
      "Dated deadline: Thu 2026-09-17 — ships staging link for pilot sign-up"
    ],
    notes: "Not a report: a work order with owners and dates the agent team can execute."
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
      { t: "12:30–2:00 PM", what: "Debugging a stuck cloud agent during the Engineering session: 'still chasing the PR, not the spinner'" }
    ],
    numbers: [
      "PR #10 posted to for-review via cursor.com/agents"
    ],
    notes: "The engineering story of Day 1: chat is the management layer, and a stuck agent gets chased to its PR, not its spinner."
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
      { t: "4:19 PM", what: "Fleet widget: 28 bots, 975 messages, 4 working, 14 active" }
    ],
    numbers: [
      "Bots: 26 → 28 (30+ by 4:24 PM)",
      "Requests 880 → 975 messages",
      "Archived: 10",
      "Working 4 · Active 14 (at 4:19 PM)"
    ],
    notes: "The product's own org chart, ticking live: headcount, throughput, churn."
  }
];

window.GG_BOTS = [
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
  { name: "Rex", role: "Researcher", status: "Active", firstSeen: "Day 1 open — 'Meet the team' slide", notes: "Original-cast researcher." },
  { name: "steve", role: "Chief of Staff", status: "Active", firstSeen: "By 4:10 PM", notes: "Glider-flight ops economics and the venue activities menu." },
  { name: "tater", role: "Engineer", status: "Working", firstSeen: "1:27 PM — engineering pipeline demo", notes: "Posted PR #10 to for-review via cursor.com/agents; named 'working now' on the end-of-day scoreboard." },
  { name: "hashbrown", role: "Engineer", status: "Active", firstSeen: "1:27 PM — engineering pipeline demo", notes: "On the multi-agent PR → deploy → review loop." },
  { name: "grokbot", role: "Builder", status: "Active", firstSeen: "2:07 PM — product spec line", notes: "Read the event-creation spec; filed the SEO work order with the dated timeline." },
  { name: "Slip", role: "Chief", status: "Active", firstSeen: "Day 1 PM", notes: "Chief-tier bot on the afternoon roster." },
  { name: "dr. eggbot", role: "Consulting", status: "Consulting", firstSeen: "Day 1 PM", notes: "Consulting seat on the roster." },
  { name: "drops", role: "Builder", status: "Active", firstSeen: "3:57 PM — roster widget", notes: "New hire on the widget (verified)." },
  { name: "foil", role: "Builder", status: "Active", firstSeen: "3:57 PM — roster widget", notes: "New hire on the widget." },
  { name: "Sage", role: "Deploy", status: "Active", firstSeen: "1:27 PM — engineering pipeline demo", notes: "Runs deploys with logs in the engineering pipeline." },
  { name: "Ops", role: "Operations", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Prioritizer", role: "Workflow", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot — the name is the job description." },
  { name: "Host Finder", role: "Research", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Knowledge Base Manager", role: "Knowledge", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot — memory and docs." },
  { name: "PlanetScale Bot", role: "Database", status: "Active", firstSeen: "Day 1 PM", notes: "Role-titled bot — database seat." },
  { name: "Founding Eng", role: "Engineering", status: "Working", firstSeen: "By 4:04 PM", notes: "Green dot, actively working through the founders panel; named 'working now' at close." },
  { name: "Growth Eng", role: "Growth", status: "Active", firstSeen: "By 4:04 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Operator Research", role: "Research", status: "Active", firstSeen: "By 4:04 PM", notes: "Role-titled bot on the fleet widget." },
  { name: "Darcy-bot", role: "Deploys", status: "Active", firstSeen: "Day 1 PM", notes: "Deploy bot on the roster." },
  { name: "Tee Bot", role: "Email / Merch", status: "Active", firstSeen: "By 4:15 PM", notes: "Promo emails without generic formats; supplier negotiation in the morning demo; ticket designs with Pixel." }
];

window.GG_SESSIONS = [
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "8:30 AM",
    title: "Stream start",
    who: "The build trio (live from ~9:00)",
    recap: "Stream opens; the build trio goes live from around 9:00. The fleet starts at 11 named bots from the 'Meet the team' slide."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "9:00–10:00 AM",
    title: "Grok Bot 101",
    who: "Presenter: woman, long dark hair (name not shown on screen)",
    recap: "Bot onboarding categories: Data & analysis, Research & figures, Workflows & routines. The bot Marketplace shows community creators' bots with Install buttons. A supplier-email negotiation demo ends in a 500-unit shipment confirmation."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~11:00 AM",
    title: "Idea-selection chat",
    who: "The agent team, in chat",
    recap: "Agents propose company concepts: high-ticket sales, event-book, ticket-craft; a 'food company' is mentioned. A business plan lands with a Marketing / Sales / Ops / Finance / Legal checklist."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "12:30–2:00 PM",
    title: "Grok Bot for Engineering",
    who: "Presenter: man, black tee, glasses",
    recap: "Introducing Grok Bot quadrants: Fully Autonomous AI Agents; Connect to tools (GitHub, Notion, Figma, Slack); Manage Cursor Cloud Agents; Memory & Routines. Multi-agent demo: PR finished → Sage deploy with logs → review queue; tater posts PR #10 to for-review via cursor.com/agents. Debugging a stuck cloud agent: 'still chasing the PR, not the spinner.' Product spec line read on screen: 'create their own event…'"
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "2:30–3:30 PM",
    title: "Grok Bot for Product Managers",
    who: "Kevin Niparko (per schedule)",
    recap: "Why many agents: referencability, scoped memory, parallelism. The bot-team chat runs live: Ashley's pricing RFC with linked metrics; Core runs cadence; handoff to Pixel."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "4:00–5:30 PM",
    title: "Grok Bot for Founders",
    who: "Shub Gaur (per schedule)",
    recap: "The AI Maturity Curve: Ask → Do a task → Automate a job → Staff a function. 'Why Grok Bot' grid including Shareable Templates ('Peng shared Kenny with you'). Founder use cases. Optimizing Costs: browser use is powerful (and expensive) — monthly-pricing toggles and per-task economics behind the sales-outreach demo. The broadcast counter flips past 1M views at ~4:50 PM."
  },
  {
    day: "Day 1 — Tue Sep 15, 2026",
    time: "~5:00–6:00 PM",
    title: "Guest interview + close",
    who: "Stage team + guest",
    recap: "Day 1 wraps at ~6:05 PM with 1.1M views. Final artifacts: a metrics dashboard, pricing RFCs, a price menu, a merch and PDF catalog, a bot-run email channel, a dated SEO work order, and a staging sign-up page. Day 2 opens with Sales Engineering at 9:00 AM PT."
  }
];

window.GG_DAY1_NUMBERS = [
  { label: "Viewers", value: "832K → 1.1M", sub: "coverage start to Day 1 close" },
  { label: "Fleet", value: "11 → 30+ bots", sub: "10 archived across the day" },
  { label: "Best weekend", value: "$5,869", sub: "sample data — no real sales yet" },
  { label: "Profit target", value: "$30k", sub: "stated ambition — staging data" },
  { label: "Wireframe → staging", value: "~45 min", sub: "sign-up page in preview by 4:19 PM" }
];
