/* ============================================================================
   GROK BOT GALAXY LIVE — v2 FEED DATA
   ----------------------------------------------------------------------------
   COMMENTATOR CHEAT SHEET — fill this file live. The page renders everything
   below. Static site, no build step: edit, save, push; readers get it on the
   next 60s meta-refresh.

   ── 1. window.GG_META (header + sticky bar) ────────────────────────────────
     status   : "LIVE" | "ENDED" | "STANDBY"
     day      : string   e.g. "Day 1 of 3 — Tue Sep 15, 2026"
     session  : string   what session is on stream right now
     viewers  : string   e.g. "963.1K"
     onAir    : string   broadcast clock, e.g. "7h 30m"
     updated  : string   time of your last update, e.g. "4:37 PM PT"
     stream   : string   URL of the X broadcast

   ── 2. window.GG_MOMENT (string) ───────────────────────────────────────────
     THE single most important thing on screen right now, ONE sentence,
     <= 20 words, understandable with zero context. Shown huge at the top.
     Empty string "" hides the banner.

   ── 3. window.GG_PRIMER (pinned "New here? 60-second catch-up") ────────────
     event    : what this event is (1-2 sentences, evergreen — rarely changes)
     company  : what the demo company is + revenue so far (1-2 sentences)
     sofar    : where things stand as of right now (1-3 sentences)
     watchfor : what's coming next / open question (1 sentence)

   ── 4. window.GG_SCOREBOARD (persistent state of the demo company) ─────────
     stats  : array of { label, value, sub, wide }  — render top-to-bottom.
              value/sub are strings, keep them short. wide:true = full-width row.
              Recommended set: Bots online / Working now / Archived / Viewers /
              On air / Revenue tiles (best weekend, target, revenue lines) /
              Products on the board (wide).
     deltas : array of strings "label: from → to" — what changed since your
              last update. Clear this out after a few entries or it goes stale.

   ── 5. window.GG_ENTRIES (array, NEWEST FIRST) ─────────────────────────────
     One entry = one broadcast block. REQUIRED on every entry:
       id   : unique string, used for permalinks. Use "d<day>-<hhmm>" e.g.
              "d1-1637". Never reuse an id; if you typo, fix the data, don't
              add a duplicate.
       t    : time string, e.g. "4:37 PM PT"
       day  : 1 | 2 | 3
       type : ONE of
         "PBP"     play-by-play — what just happened.
                   fields: title, body (1-3 short sentences, concrete)
         "MOMENT"  huge one-line banner entry for a big beat.
                   fields: title (the sentence; no body needed)
         "WHY"     why-it-matters analysis. fields: title, body (2-3 sentences)
         "LENSES"  the four audience takes. fields: title, lenses{...}
         "QUOTE"   pull-quote card. fields: quote{text, who}
         "DELTA"   numeric change. fields: title, body (opt), delta[{...}]
     OPTIONAL attachments (render inside the same card, on ANY type):
       lenses : { casual, builder, investor, skeptic }  — one short para each
       quote  : { text, who }
       delta  : [ { label, from, to } ]  — max ~4 rows
       tags   : [ ... ] — ALLOWED TAGS ONLY (unknown tags render neutral gray):
                  "REVENUE"   money numbers, pricing, sales
                  "PRODUCT"   product/demo surface, features
                  "FLEET"     bot roster, agents, fleet stats
                  "KEYNOTE"   slides, talks, panels
                  "CHAT"      X chat / audience reaction
                  "MILESTONE" firsts and records worth a bookmark
                  "HOLD"      breaks, hold screens, admin notes

   ── ONE COMMENTED EXAMPLE ──────────────────────────────────────────────────
   {
     id: "d1-1637", t: "4:37 PM PT", day: 1, type: "PBP",
     tags: ["KEYNOTE", "PRODUCT"],
     title: "'Why Grok Bot': five pillars — and bots you can hand to someone else",
     body: "Feature grid: Easy as iMessage; Always-on 24/7; Uses your tools like
            you; Finishes the work; Shareable Templates ('Peng shared Kenny').
            Views: 963.1K.",
     lenses: {
       casual:   "You can gift a trained AI coworker like sharing a playlist.",
       builder:  "Templates = portable agent configs with scoped memory...",
       investor: "This seeds an agent marketplace with a take-rate layer...",
       skeptic:  "Sharing a bot means sharing its tool credentials..."
     },
     quote: { text: "...", who: "X chat" },
     delta: [ { label: "Viewers", from: "957.7K", to: "963.1K" } ]
   }
   (In practice: lead with ONE type; bolt on lenses OR quote OR delta when
   the moment deserves it, not all three every time.)
   ============================================================================ */

window.GG_META = {
  status: "LIVE",
  day: "Day 1 of 3 — Tue Sep 15, 2026",
  session: "Founders session — 'Why Grok Bot' feature grid",
  viewers: "963.1K",
  onAir: "7h 30m",
  updated: "4:37 PM PT",
  stream: "https://x.com/i/broadcasts/1AxRnZbVpjaxl"
};

window.GG_MOMENT =
  "xAI just demoed shareable bots — 'Peng shared Kenny with you' — a pre-trained AI coworker you can hand to someone else.";

window.GG_PRIMER = {
  event: "Grok Bot Galaxy is xAI's 3-day livestream (Sept 15–17, San Francisco): three xAI employees build an entire real company live on stream using a team of AI agents — Grok Bot — while the internet watches. If the agents can't carry a real business in public, everyone watches it fail.",
  company: "The demo company sells glider flights (~$250 per flight; one recent weekend took in ≈ $5,869) and is adding digital products (PDF guides, merch) against a $30k profit rollout target. Its staff is a fleet of 30+ named AI bots with job titles, status dots, and a Slack-style chat where they do the work.",
  sofar: "Day 1 afternoon, Founders session live: today the bots ran a revenue review, drafted a glider-flight price menu, spun up a second revenue line (merch + digital products), and grew past 30 agents. On stage now: the 'Why Grok Bot' pitch and its AI maturity curve — chatbots → copilots → bots → a team of bots as your staff function.",
  watchfor: "Day 2 is Sales/Support, Day 3 Marketing. The unanswered question nobody on stage has touched: what happens when an agent teammate is wrong — audit trails, rollback, accountability?"
};

window.GG_SCOREBOARD = {
  stats: [
    { label: "Bots online", value: "30+", sub: "was 26 at 3:55 PM" },
    { label: "Working now", value: "2", sub: "tater · Founding Eng" },
    { label: "Archived", value: "10", sub: "bots already retired" },
    { label: "Viewers", value: "963.1K", sub: "X broadcast" },
    { label: "On air", value: "7h 30m", sub: "of 3 days" },
    { label: "Best weekend", value: "$5,869", sub: "glider flight revenue" },
    { label: "Profit target", value: "$30k", sub: "merch + digital rollout" },
    { label: "Revenue lines", value: "2", sub: "flights · digital/merch" },
    { label: "Products on the board", value: "Booking dashboards (live) · Glider price menu · Merch + PDF catalog (drafting) · Landing page (wireframe)", wide: true }
  ],
  deltas: [
    "Fleet: 26 → 30+ bots online",
    "Viewers: 946K → 963.1K in ~20 min",
    "Revenue lines: 1 → 2 (flights + digital products)"
  ]
};

/* NEWEST FIRST. One entry = one block. See cheat sheet above. */
window.GG_ENTRIES = [
  {
    id: "d1-1637",
    t: "4:37 PM PT",
    day: 1,
    type: "PBP",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "'Why Grok Bot': five pillars — and bots you can hand to someone else",
    body: "Feature grid on the main screen: Easy as iMessage (bots DM you approvals and status); Always-on 24/7; Uses your tools like you (bots drive real SaaS with your logins); Finishes the work (create → direct → automate); and Shareable Templates — 'Peng shared Kenny with you', a ready-made operations bot. Views: 963.1K.",
    lenses: {
      casual: "You can now hand a friend a fully-trained AI coworker, like sharing a playlist.",
      builder: "Templates are serialized agent configs with scoped memory and tool access. This is the distribution layer — whoever owns bot sharing owns the app-store moment for agents.",
      investor: "Shareable bots seed a marketplace: pre-trained agents become transferable supply, and xAI sits in the middle with a take-rate on top of subscriptions. Watch for rev-share language later in the event.",
      skeptic: "Sharing a bot means sharing what that bot can access — your SaaS logins, your data. Marketplace mechanics are the easy part; permission and audit hygiene is the unsolved part."
    }
  },
  {
    id: "d1-1633",
    t: "4:33 PM PT",
    day: 1,
    type: "WHY",
    tags: ["KEYNOTE"],
    title: "The 'AI Maturity Curve': xAI just named the land grab",
    body: "The founders keynote put a chart on the industry: Ask (chatbots) → Do a task (copilots) → Automate a job (bot) → Staff a function (team of bots). xAI places Grok Bot on the top rung — the endgame where a bot roster IS the company's staff function. Everything demoed today, from 30+ titled agents to RFCs and fleet stats, is presented as rung-4 evidence. Views: 957.7K."
  },
  {
    id: "d1-1629",
    t: "4:29 PM PT",
    day: 1,
    type: "DELTA",
    tags: ["FLEET"],
    title: "Fleet crosses 30 bots; a 'Founding Engineer' works through the panel",
    body: "While the founders panel runs full-screen, the roster widget shows role-titled bots grinding in the background: Founding Eng (green dot, actively working), Growth Eng, Operator Research, +8 more. The org chart isn't a slide — it's the product, with status dots and job titles.",
    delta: [
      { label: "Bots online", from: "26", to: "30+" },
      { label: "Viewers", from: "946K", to: "952.3K" },
      { label: "Titled bot roles", from: "11 characters", to: "Founding Eng · Growth Eng · Operator Research +8" }
    ]
  },
  {
    id: "d1-1619",
    t: "4:19 PM PT",
    day: 1,
    type: "PBP",
    tags: ["REVENUE", "MILESTONE"],
    title: "Second revenue line: bots design a merch + digital-products catalog",
    body: "Agents drafted a product catalog in-thread: 'Glider Checklist' PDF at $5–10, a gear-guide bundle at ~$25, and custom merch designs (mug/helmet photos) for an official merch page — with a $30k profit rollout target on screen. Humans steer taste; bots do catalog, pricing, copy, and imagery. New hires on the widget: drops (verified), foil. Views: 939.2K.",
    quote: {
      text: "You're not watching me do the code — watch me manage agents that build it. The creation layer just moved up.",
      who: "Viewer quote of the day, X chat"
    }
  }
];
