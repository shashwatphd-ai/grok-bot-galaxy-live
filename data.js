/* ============================================================================
   GROK BOT GALAXY LIVE — v3 FEED DATA (Day 1 final record)
   ----------------------------------------------------------------------------
   COMMENTATOR CHEAT SHEET — fill this file live. The page renders everything
   below. Static site, no build step: edit, save, publish; readers get fresh
   data within 30s (no reload needed).

   ── 1. window.GG_META (header + sticky bar) ────────────────────────────────
     status   : "LIVE" | "ENDED" | "STANDBY"
     day      : string   e.g. "Day 1 of 3 — Tue Sep 15, 2026"
     session  : string   what session is on stream right now
     viewers  : string   e.g. "1.1M"
     onAir    : string   broadcast clock, e.g. "9h 00m"
     updated  : string   time of your last update, e.g. "4:37 PM PT"
     stream   : string   URL of the X broadcast

   ── 2. window.GG_MOMENT (string) ───────────────────────────────────────────
     THE single most important thing on screen right now, ONE sentence,
     <= 20 words, understandable with zero context. "" hides the banner.

   ── 3. window.GG_PRIMER (pinned "New here? 60-second catch-up") ────────────
     event / company / sofar / watchfor — short strings, updated as things change.

   ── 4. window.GG_SCOREBOARD ────────────────────────────────────────────────
     stats  : array of { label, value, sub, wide } — persistent demo-company state.
     deltas : array of strings "label: from → to" — recent changes; keep fresh.

   ── 5. window.GG_ENTRIES (array, NEWEST FIRST) ─────────────────────────────
     id "d<day>-<hhmm>" unique; t string; day 1|2|3;
     type ONE of PBP | MOMENT | WHY | LENSES | QUOTE | DELTA;
     optional lenses{casual,builder,investor,skeptic}, quote{text,who},
     delta[{label,from,to}], tags from REVENUE/PRODUCT/FLEET/KEYNOTE/CHAT/MILESTONE/HOLD.

   NOTE ON TIMES: afternoon timestamps below are corrected to the real clock.
   Audio transcript: transcript-day1-audio.md. Visual companion: transcript-day1-visual.md.
   ============================================================================ */

window.GG_META = {
  status: "LIVE",
  day: "Day 2 of 3 — Wed Sep 16, 2026 (the sales track)",
  session: "Chief of Staff bot runs staffing pipeline + weekly routines",
  viewers: "63K",
  onAir: "1h 40m",
  updated: "10:06 AM PT",
  stream: "https://x.com/i/broadcasts/1PKqrNyvmYwGb"
};

window.GG_MOMENT = "Day 2 begins: the bot fleet's second day — today it has to sell, not just build.";

window.GG_PRIMER = {
  event: "Grok Bot Galaxy is xAI's 3-day livestream (Sept 15–17, from a studio next to Dreamforce in San Francisco): three xAI employees — Lauren, Roshan and Matt — build an entire real company live using teams of AI agents (Grok Bot), while the internet watches. Day 1 drew 1.1M viewers; a viewer contest runs through Sept 29 with a Starship-launch trip as the prize.",
  company: "The company they chose live on Day 1: a restaurant pop-up — 'Pop-up OS' (working name). The plan: run a real pop-up dining event in San Francisco with a partnering chef and venue, ticket it, and turn the operating software (morning briefs, reservations, menu and review management, ticketing) into a product for local restaurants.",
  sofar: "By end of Day 1 the trio had: chosen the idea through agent dialogue, bought a domain and deployed a staging lander, set up a multi-agent engineering pipeline (PRs, reviews, deploys via Cursor Cloud Agents), created marketing assets with guest Cody Sanchez, and designed event supplies — night-market ticket stubs, badges and lanyards, plus Grok Bot plush concepts. The sessions meanwhile demoed Grok Bot itself: onboarding, a bot marketplace, integrations (GitHub, Notion, Figma, Slack), the AI Maturity Curve, and agent cost economics.",
  watchfor: "Day 2 is Sales/SDR/Support day (9:00 AM Sales Engineering, 12:30 Sales, 2:30 SDRs, 4:00 Customer Support). Watch for: the real chef and venue partnership, the ticketed event going public, first sign-ups, and how the sales sessions shape their go-to-market."
};

window.GG_SCOREBOARD = {
  stats: [
    { label: "The idea", value: "Restaurant pop-up", sub: "'Pop-up OS' — chosen live at 10:15 AM", wide: true },
    { label: "Bots online", value: "30+", sub: "11 named characters at open" },
    { label: "Working now", value: "2–4", sub: "tater · Founding Eng · hashbrown" },
    { label: "Archived", value: "10", sub: "bots already retired" },
    { label: "Viewers", value: "1.1M", sub: "at Day 1 close" },
    { label: "On air", value: "8h 45m", sub: "of 3 days" },
    { label: "Domain", value: "BOUGHT", sub: "lander in staging" },
    { label: "Profit target", value: "$30k", sub: "stated ambition — staging data, no real sales" },
    { label: "Prize", value: "Starship trip", sub: "viewer contest, ends Sep 29" },
    { label: "Built on Day 1", value: "Idea → domain → lander (staging) → ticket stubs → badges/lanyards → plush designs → email drafts → SEO plan", wide: true }
  ],
  deltas: [
    "Viewers: 832K at coverage start → 1.1M at close",
    "Idea locked: restaurant pop-up ('Pop-up OS')"
  ]
};

/* NEWEST FIRST. One entry = one block. See cheat sheet above. */
window.GG_ENTRIES = [
  {
    id: "d2-1006",
    t: "10:06 AM PT",
    day: 2,
    type: "PBP",
    tags: ["FLEET", "PRODUCT"],
    title: "The Chief of Staff bot is running the company's hiring pipeline",
    body: "On screen: the Chief of Staff thread manages a host-finder people list ('in motion — don't rebuild it'), routes new-bot creation and onboarding through dr. eggbot, and keeps a scheduled 'Weekly priority board' routine set for Wednesdays 8:00 AM. Knowledge Base Manager threads run alongside. The fleet now runs recurring management rituals — the bot org has an operations cadence of its own. Views: 63K."
  },
  {
    id: "d2-0935",
    t: "9:35 AM PT",
    day: 2,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "Building the Vision Deck live: 'Why SpaceXAI?'",
    body: "Amrita's Google Slides window ('Amrita SpaceXAI Vision Deck') goes on screen as she presents the pitch-narrative skill: a 'Why SpaceXAI?' slide with a dark cinematic background, deck outline in the sidebar, presenter view live. The sales-engineering lesson in progress: the deck is being assembled and delivered in the same session. Views: 37.4K."
  },
  {
    id: "d2-0910",
    t: "9:10 AM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT", "KEYNOTE"],
    title: "Sales Engineering whiteboards the customer demo arc",
    body: "The Sales Engineering session (Amrita Venkatraman) is sketching the pitch flow in a diagram tool: 'Grok Bot Template → Draft your team → Set your lineup → Compete!' — with notes on showing 'how we build a complicated product with bots' and 'digital operations in the business.' A four-step customer demo arc, drawn before it's built. Views: 25.3K."
  },
  {
    id: "d2-0830",
    t: "8:30 AM PT",
    day: 2,
    type: "STAGE",
    tags: ["MILESTONE"],
    title: "Day 2 opens: the sales track — today the fleet has to sell, not just build",
    body: "Hold screen up on the new Day 2 broadcast; the stream opens with Grok Bot for Sales Engineering at 9:00 (Amrita Venkatraman), then Sales at 12:30, SDRs at 2:30 (Simon Lackowski), and Customer Support at 4:00 (David Gan). The question of the day: can the bot fleet that built a pop-up business in one day also sell it?"
  },
  {
    id: "d1-1930",
    t: "9:30 PM PT",
    day: 1,
    type: "WHY",
    tags: ["REVENUE"],
    title: "Where do the dollar figures come from? Not from customers — yet",
    body: "The company has no launched product and no paying customers, so every dollar on this page needs a source. Three kinds appear. The $250-per-flight and $5,869-weekend figures came from the agents' own answers on stream — pulled from the staging database the agents seeded themselves while building. The $30k profit figure was a stated rollout ambition, not a result. And the session presenters' screens (cabins, glider flights, family bookings) ran on clearly separate sample data for teaching the workflows. Treat all of it as a demo economy: internally consistent, externally unproven. The first real dollar will be the most important number of Days 2 and 3.",
    lenses: {
      casual: "The money numbers are from the company's own practice database — nobody real has paid anything yet.",
      builder: "The agents seeded their ops store with synthetic data; quoting it back is the demo working as designed, but it means every metric is self-referential until an external event lands.",
      investor: "Pre-launch traction numbers quoted by the system that produced them are marketing, not metrics. Track whether a real booking or payment clears on Days 2–3.",
      skeptic: "Self-referential data is the oldest trick in demo theater — and to the stream's credit, the hosts never claimed a real sale. Keep it that way and the demo stays honest."
    }
  },
  {
    id: "d1-1805",
    t: "6:05 PM PT",
    day: 1,
    type: "WHY",
    tags: ["MILESTONE"],
    title: "Day 1 is a wrap: a restaurant pop-up company, built live, in nine hours",
    body: "Nine hours on air, 1.1M views. The trio opened with no idea, chose one through agent dialogue mid-morning — run a real restaurant pop-up in San Francisco and productize the ops ('Pop-up OS') — then spent the day making it real: domain bought, lander in staging, multi-agent engineering pipeline live, ticket and badge designs drafted, email marketing started, and a dated SEO plan. The session blocks taught the product: onboarding and marketplace (101), integrations and Cursor Cloud Agents (Engineering), agent-team design (PMs), and the AI Maturity Curve plus agent cost economics (Founders). What Day 1 did not prove: a public launch, a signed chef and venue, or a single real customer.",
    lenses: {
      casual: "Three people with AI employees picked an idea in the morning and had tickets, badges and a website draft by night.",
      builder: "The stack: chat as the management layer, artifacts as the unit of work, Cursor Cloud Agents doing the engineering, GitHub/Notion/Figma/Slack as the rails, and humans making taste calls.",
      investor: "The wedge is local-service verticalization: pop-up ops software for non-technical restaurant owners. The distribution advice on stage (own your audience, controversy marketing) matters more than the software — distribution is the moat they kept hearing.",
      skeptic: "Nothing shipped to a customer. The staging lander has no public URL, the chef and venue exist only as to-dos, and every impressive demo ran on the demo company's own numbers. Day 2's sales sessions are where the claim meets reality."
    }
  },
  {
    id: "d1-1755",
    t: "5:55 PM PT",
    day: 1,
    type: "PBP",
    tags: ["CHAT"],
    title: "Closing segment: guest interview on distribution and oversight",
    body: "Final half hour went to the guest interview: distribution as the moat (with a Jack Dorsey nod), the 'proof vault' habit — saving every good thing anyone says about your product — incentive-aligned hiring, and the failure mode of 'hire A-players and get out of their way'. The trio's take: the same applies to bots — 'just let your bots run' is how companies run out of money."
  },
  {
    id: "d1-1650",
    t: "4:50 PM PT",
    day: 1,
    type: "MILESTONE",
    tags: ["MILESTONE", "KEYNOTE"],
    title: "🎉 1M views — and the stage opens its own cost structure",
    screen: "optimizing-costs",
    body: "The broadcast counter crossed 1M views during 'Optimizing Costs — browser use is powerful (and expensive!)': a walkthrough of agent unit economics, with monthly-pricing toggles and per-task costs visible behind the demo. A company pitch showing its own cost math to a million viewers is a rare move.",
    delta: [
      { label: "Viewers", from: "968.3K", to: "1M+" }
    ]
  },
  {
    id: "d1-1642",
    t: "4:42 PM PT",
    day: 1,
    type: "PBP",
    tags: ["KEYNOTE", "REVENUE"],
    title: "Sales call prep, demoed with clearly-labeled example data",
    body: "The founders session showed a bot-prepared call brief — 'Northwind Labs - call prep' with attendee bios, a numbered summary of account history, zoom/meeting stats, an unanswered pricing question, and agenda gates — explicitly badged EXAMPLE DATA. The takeaway for founders: bots can walk into a sales call with the full account story."
  },
  {
    id: "d1-1637",
    t: "4:37 PM PT",
    day: 1,
    type: "SLIDE",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "'Why Grok Bot': five pillars — and bots you can hand to someone else",
    body: "Feature grid: Easy as iMessage (bots DM you approvals and status); Always-on 24/7; Uses your tools like you (bots drive real SaaS with your logins); Finishes the work (create → direct → automate); and Shareable Templates — 'Peng shared Kenny with you', a ready-made operations bot.",
    lenses: {
      casual: "You can hand a friend a fully-trained AI coworker, like sharing a playlist.",
      builder: "Templates are serialized agent configs with scoped memory and tool access — the distribution layer for agents.",
      investor: "Shareable bots seed a marketplace: pre-trained agents become transferable supply with a take-rate on top of subscriptions.",
      skeptic: "Sharing a bot means sharing what that bot can access — SaaS logins and data. Permission and audit hygiene is the unsolved part."
    }
  },
  {
    id: "d1-1633",
    t: "4:33 PM PT",
    day: 1,
    type: "WHY",
    tags: ["KEYNOTE"],
    title: "The 'AI Maturity Curve': xAI names the land grab",
    body: "The founders keynote charted the industry: Ask (chatbots) → Do a task (copilots) → Automate a job (bot) → Staff a function (team of bots). xAI places Grok Bot on the top rung — where a bot roster IS the company's staff function. The day's demos, from 30+ titled agents to RFCs and fleet stats, are presented as rung-4 evidence."
  },
  {
    id: "d1-1624",
    t: "4:24 PM PT",
    day: 1,
    type: "DELTA",
    tags: ["FLEET"],
    title: "Fleet crosses 30 bots; titled roles work through the panel",
    body: "While the founders panel runs, the roster widget shows role-titled bots grinding: Founding Eng (green dot, working), Growth Eng, Operator Research, and more. The org chart is the product.",
    delta: [
      { label: "Bots online", from: "26", to: "30+" },
      { label: "Viewers", from: "946K", to: "952.3K" }
    ]
  },
  {
    id: "d1-1619",
    t: "4:19 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "REVENUE"],
    title: "Pop-up supplies and merch designed by bots: ticket stubs, badges, lanyards, plush",
    screen: "tickets-plush",
    body: "The designer bot worked through the pop-up's physical kit: night-market ticket stubs in CSS (tier A/B/C 'PLATFORM' designs), badges and lanyards ('OfficePass Plus'), and Grok Bot plush concepts — with the bot checking 'the plush's eyes against the official art' and iterating. Fleet widget: 28 bots, 975 messages, 4 working, 14 active."
  },
  {
    id: "d1-1615",
    t: "4:15 PM PT",
    day: 1,
    type: "PBP",
    tags: ["REVENUE"],
    title: "Tee Bot opens the email and merch line",
    body: "A 'Tee Bot' thread showed the merch channel: promo emails with best-seller banners, deliberately avoiding generic roundup formats, plus a side panel drafting promotional copy. Earlier in the thread the bot pulled web reference images and assembled a price menu, then asked the human: 'Which one do you like?'"
  },
  {
    id: "d1-1555",
    t: "3:55 PM PT",
    day: 1,
    type: "DELTA",
    tags: ["FLEET"],
    title: "Fleet widget: 26 bots, 880 requests, 10 archived",
    body: "The live fleet widget shows the org's pulse: 26 bots online, 880 web requests handled, 1 working, 10 archived — agents churn like staff. Ops chat shows QA picking up PRs and a Darcy-bot redeploy. Views: 908.7K.",
    delta: [
      { label: "Bots online", from: "11", to: "26" },
      { label: "Archived bots", from: "0", to: "10" }
    ]
  },
  {
    id: "d1-1500",
    t: "3:00 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "PM session: inside the agents' Slack-style 'Bot team' chat",
    body: "The PM session demo (sample data): a human asks the room about a winter pricing bundle; Ashley (Data/Analyst) updates the Pricing RFC with an 11.8% winter lift vs 8.2% summer, links the live metrics dashboard into the RFC, and Core (Chief of Staff) moves the thread to Pixel (Designer) for result pages. A popup offers to open the RFC in the agents' work surface — chat is the management layer."
  },
  {
    id: "d1-1452",
    t: "2:52 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "PM session opens: booking dashboard walkthrough (sample data)",
    body: "Full-screen demo of an agent-built analytics dashboard: 377 bookings (35.0% of 1,063 purchases), 1,187 of 2,663 passengers (44.6%), average party size 3.2, mobile vs web splits, bar and donut charts — with the agent roster in the sidebar as the operating departments. Views: 842.6K.",
    quote: {
      text: "Not one omniscient bot, but a full roster of teammates.",
      who: "PM session slide, 'Why many agents'"
    }
  },
  {
    id: "d1-1407",
    t: "2:07 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "Engineering session: debugging a stuck cloud agent, live",
    body: "steve's thread debugs a stuck agent ('is it actually moving or just sitting there… it's using a subagent… still chasing the PR, not the spinner'), tater posts PR #10 to for-review via a cursor.com/agents link, and the product spec is visible in the thread: 'user should be able to create their own event — events have a date/time, sessions, venue, staff.' Sidebar includes PlanetScale Bot flagging schema drift."
  },
  {
    id: "d1-1400",
    t: "2:00 PM PT",
    day: 1,
    type: "SLIDE",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "Engineering session: 'Introducing Grok Bot' — the real integration list",
    body: "Four quadrants: Fully Autonomous AI Agents (engineering tasks, computer apps, objectives); Connect to tools you use (GitHub, Notion, Figma, Slack); Manage Cursor Cloud Agents (first-party integration — grow agents by capability); Memory & Routines (recall preferences, recurring tasks).",
    delta: [
      { label: "Confirmed integrations", from: "implied", to: "GitHub · Notion · Figma · Slack · Cursor" }
    ]
  },
  {
    id: "d1-1327",
    t: "1:27 PM PT",
    day: 1,
    type: "PBP",
    tags: ["FLEET", "PRODUCT"],
    title: "Engineering session demo: agents file PRs, deploy, and queue legal docs",
    body: "The 'Oren' thread shows the multi-agent loop end to end: a finished PR changing button text, a Sage-bot deploy with config and logs, a review-queue suggestion to the team, a TX designer agent on t-shirt designs, and a legal-docs agent held 'In Queue' by a Worker. Work moves between agents as queued, owned items."
  },
  {
    id: "d1-1128",
    t: "11:28 AM PT",
    day: 1,
    type: "PBP",
    tags: ["MILESTONE", "CHAT"],
    title: "Guest Cody Sanchez: sell to three people first; distribution is the moat",
    body: "Guest Cody Sanchez (business-acquisition creator, ~15M followers) joined as the idea crystallized. Her advice: before choosing the business, sell it to three people; obsess over distribution ('the number one reason AI startups don't make it'); use controversy marketing — her AI-generated 'move to Austin' video pulled 2.4M views and a 'no paid ads until $5–10M' take pulled 5.7M views and 2,000 signups; keep a proof vault of every good thing anyone says about the product. The session ended with the trio creating a marketing bot live, seeded with her advice.",
    quote: {
      text: "The advice I followed was 'hire A-players and get out of their way'… the only time we almost ran out of money was when I followed that advice. Same with bots — you have to oversee them intensely.",
      who: "Guest Cody Sanchez, on stage"
    }
  },
  {
    id: "d1-1050",
    t: "10:50 AM PT",
    day: 1,
    type: "MILESTONE",
    tags: ["MILESTONE", "PRODUCT"],
    title: "The idea locks: a restaurant pop-up — 'Pop-up OS'",
    body: "Through agent dialogue (a 'platform for creators', small-business angles, pop-up concepts), the trio landed on: run a real restaurant pop-up in San Francisco — find the location, partner with a chef, ticket it as an experiential dinner — and build the operating software live: event pages, bookings with table times, payments and sign-ups. Engineering framing on stage: 'event management, payments, sign-up systems… we'd have to think about the layout and how many people we can accommodate.'",
    delta: [
      { label: "Company idea", from: "blank slate", to: "restaurant pop-up ('Pop-up OS')" }
    ]
  },
  {
    id: "d1-1030",
    t: "10:30 AM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "Grok Bot 101: onboarding, marketplace, email handling",
    body: "The 101 hour (Roman and Rita per the schedule) walked product surfaces: creating your first bot through onboarding categories (Data & analysis / Research & figures / Workflows & routines); a bot Marketplace with community creators' bots and Install buttons ('Lenny's APIs', 'Diana's Tips'…); and an email demo where the bot confirms a 500-unit winter shipment and drafts the logistics memo."
  },
  {
    id: "d1-0914",
    t: "9:14 AM PT",
    day: 1,
    type: "STAGE",
    tags: ["KEYNOTE"],
    title: "Opening: intros, run of show, and a Starship-trip contest",
    body: "The trio introduced themselves — Lauren, Roshan, Matt Palmer (developer experience) — from a studio next to Dreamforce at Moscone. They admitted on air they didn't know yet what company they'd build. Announcement: a viewer contest ending Sept 29 — share how you integrated Grok Bot with a template link; grand prize a trip to a Starship launch at Starbase, Texas, runners-up get a SpaceX rocket-factory tour in Hawthorne.",
    quote: {
      text: "We actually don't even know what idea we're gonna build yet. We're still working on it.",
      who: "Opening segment, on air"
    }
  }
];
