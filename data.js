/* ============================================================================
   GROK BOT GALAXY LIVE — v2 FEED DATA (root; adopted from v2/ on Sep 15)
   ----------------------------------------------------------------------------
   COMMENTATOR CHEAT SHEET — fill this file live. The page renders everything
   below. Static site, no build step: edit, save, publish; readers get it on
   the next 60s meta-refresh.

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
     deltas : array of strings "label: from → to" — what changed since your
              last update. Clear this out after a few entries or it goes stale.

   (Full field reference preserved from the v2 design spec; see v2/REDESIGN.md
   in the repo for the original operating manual.)

   ── 5. window.GG_ENTRIES (array, NEWEST FIRST) ─────────────────────────────
     One entry = one broadcast block. REQUIRED on every entry:
       id   : unique permalink string "d<day>-<hhmm>", e.g. "d1-1628".
       t    : time string, e.g. "4:37 PM PT"
       day  : 1 | 2 | 3
       type : ONE of "PBP" | "MOMENT" | "WHY" | "LENSES" | "QUOTE" | "DELTA"
              PBP: title, body (1-3 short sentences, concrete)
              MOMENT: title (the sentence; no body needed)
              WHY: title, body (2-3 sentences)
              LENSES: title, lenses{casual,builder,investor,skeptic}
              QUOTE: quote{text, who}
              DELTA: title, body (opt), delta[{label,from,to}]
     OPTIONAL attachments (render inside the same card, on ANY type):
       lenses : { casual, builder, investor, skeptic }  — one short para each
       quote  : { text, who }
       delta  : [ { label, from, to } ]  — max ~4 rows
       tags   : ALLOWED: "REVENUE" "PRODUCT" "FLEET" "KEYNOTE" "CHAT"
                "MILESTONE" "HOLD" (unknown tags render neutral gray)

   NOTE ON TIMES: entries before ~4:20 PM PT carry clock-drift-corrected times
   (the commentary log keeps the audit trail). Order and relative gaps are real.
   ============================================================================ */

window.GG_META = {
  status: "LIVE",
  day: "Day 1 of 3 — Tue Sep 15, 2026",
  session: "Day 1 close — guest interview full screen",
  viewers: "1M",
  onAir: "8h 45m",
  updated: "5:35 PM PT",
  stream: "https://x.com/i/broadcasts/1AxRnZbVpjaxl"
};

window.GG_MOMENT =
  "One million people are now watching a company get built by bots — and the stage is openly discussing what the bots cost.";

window.GG_PRIMER = {
  event: "Grok Bot Galaxy is xAI's 3-day livestream (Sept 15–17, San Francisco): three xAI employees build an entire real company live on stream using a team of AI agents — Grok Bot — while the internet watches. If the agents can't carry a real business in public, everyone watches it fail.",
  company: "The demo company sells glider flights (~$250 per flight; one recent weekend took in ≈ $5,869) and is adding digital products (PDF guides, merch) against a $30k profit rollout target. Its staff is a fleet of 30+ named AI bots with job titles, status dots, and a Slack-style chat where they do the work.",
  sofar: "Day 1 afternoon: the bots ran a revenue review, drafted a glider-flight price menu, opened a second revenue line (merch + digital products), and grew past 30 agents. The company's booking site went from wireframe to deployed with account sign-up in about 45 minutes. A growth bot filed an SEO work order with a dated execution timeline, and a 'Tee Bot' just started running email marketing for the merch line. Founders session on stage throughout.",
  watchfor: "Day 2 is Sales/Support, Day 3 Marketing. The unanswered question nobody on stage has touched: what happens when an agent teammate is wrong — audit trails, rollback, accountability?"
};

window.GG_SCOREBOARD = {
  stats: [
    { label: "Bots online", value: "30+", sub: "was 26 in the afternoon" },
    { label: "Working now", value: "2", sub: "tater · Founding Eng" },
    { label: "Archived", value: "10", sub: "bots already retired" },
    { label: "Viewers", value: "991.7K", sub: "~1M in reach" },
    { label: "On air", value: "7h 45m", sub: "of 3 days" },
    { label: "Best weekend", value: "$5,869", sub: "glider flight revenue" },
    { label: "Profit target", value: "$30k", sub: "merch + digital rollout" },
    { label: "Revenue lines", value: "2", sub: "flights · digital/merch" },
    { label: "Live site", value: "DEPLOYED", sub: "sign-up flow live ~45 min after wireframe" },
    { label: "Products on the board", value: "Booking site (live) · Glider price menu · Merch + PDF catalog · Email channel (Tee Bot) · SEO work order (dated)", wide: true }
  ],
  deltas: [
    "Viewers: 991.7K → 1M — the million mark is crossed",
    "New on stage: 'Optimizing Costs' — browser-use economics"
  ]
};

/* NEWEST FIRST. One entry = one block. See cheat sheet above. */
window.GG_ENTRIES = [
  {
    id: "d1-1735",
    t: "5:35 PM PT",
    day: 1,
    type: "WHY",
    tags: ["MILESTONE"],
    title: "Fact check: the company is a travel business. Recaps calling it a 'restaurant ops agent' do not match the stream",
    body: "AI-generated recaps circulating today describe the demo company as a restaurant back-office agent that syncs menus across delivery apps and recovers chargebacks. The stream's own artifacts say otherwise. Everything the bots built this afternoon points the same way: a family-bookings dashboard, a 'Pine Cabins' winter pricing RFC, a deployed cabins site, glider-flight revenue numbers, and an SEO plan targeting 'Weekend Pilot' searches. A restaurant scenario may well have appeared in the morning Engineering session (12:30 to 2:00), which this page did not cover. Until someone produces that footage, weight the stream over the summaries."
  },
  {
    id: "d1-1650",
    t: "4:50 PM PT",
    day: 1,
    type: "PBP",
    tags: ["MILESTONE", "KEYNOTE", "REVENUE"],
    title: "🎉 1M views — and the stage opens its own cost structure",
    body: "The broadcast counter flipped to 1M views as the founders session put up 'Optimizing Costs — browser use is powerful (and expensive!)': a walkthrough of what it costs when bots drive browsers all day, with monthly-pricing toggles and per-task economics visible behind the sales-outreach demo. An AI-company pitch showing its own unit economics to a million viewers is doing something rare.",
    delta: [
      { label: "Viewers", from: "991.7K", to: "1M" },
      { label: "On air", from: "7h 45m", to: "8h 00m" }
    ]
  },
  {
    id: "d1-1628",
    t: "4:28 PM PT",
    day: 1,
    type: "PBP",
    tags: ["REVENUE", "PRODUCT"],
    title: "Tee Bot opens the email channel for the merch line",
    body: "A 'Tee Bot' thread shows merch email marketing running: drafting and sending Acme t-shirt promos, deliberately avoiding generic roundup formats, weaving best-seller banners into campaigns. The merch line now has a bot-run email channel. Views: 991.7K — the million mark is minutes away.",
    delta: [
      { label: "Revenue lines", from: "flights · digital/merch", to: "+ email channel live" }
    ]
  },
  {
    id: "d1-1625",
    t: "4:25 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "Growth bot files an SEO audit — as a dated work order, not a report",
    body: "On screen: a structured site audit in the agent chat — 'Weekend Pilot' SEO meta rewrites, page-weight cuts, accessibility fixes (trim the signup form to 3 fields), an FAQ section — ending in a dated execution timeline: 'Thu 2026-09-17 08:00 CT — ships staging link for pilot sign-up.' The audit is a work order the agent team can execute.",
    lenses: {
      casual: "A robot employee audited the website and left a to-do list with deadlines.",
      builder: "The audit lands as chat artifacts with owners and dates — task graphs emerge from conversation, not a PM tool.",
      investor: "Growth retainers are $5–20k/month in the human world; bundling 'growth work' into the agent subscription is a quiet but massive wedge.",
      skeptic: "An SEO plan is easy to write and hard to verify — watch whether the dated items actually ship."
    }
  },
  {
    id: "d1-1620",
    t: "4:20 PM PT",
    day: 1,
    type: "MOMENT",
    tags: ["MILESTONE", "PRODUCT"],
    title: "The demo company's website is LIVE — sign-up flow and all — about 45 minutes after its first wireframe.",
    delta: [
      { label: "Live site", from: "wireframe (4:01 PM)", to: "deployed with account creation" },
      { label: "Viewers", from: "968.3K", to: "973.5K" }
    ]
  },
  {
    id: "d1-1611",
    t: "4:11 PM PT",
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
    id: "d1-1607",
    t: "4:07 PM PT",
    day: 1,
    type: "WHY",
    tags: ["KEYNOTE"],
    title: "The 'AI Maturity Curve': xAI just named the land grab",
    body: "The founders keynote put a chart on the industry: Ask (chatbots) → Do a task (copilots) → Automate a job (bot) → Staff a function (team of bots). xAI places Grok Bot on the top rung — the endgame where a bot roster IS the company's staff function. Everything demoed today, from 30+ titled agents to RFCs and fleet stats, is presented as rung-4 evidence. Views: 957.7K."
  },
  {
    id: "d1-1604",
    t: "4:04 PM PT",
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
    id: "d1-1557",
    t: "3:57 PM PT",
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
