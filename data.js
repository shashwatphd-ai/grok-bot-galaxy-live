/* ============================================================================
   GROK BOT GALAXY LIVE — v3 FEED DATA (Days 1–2 final, transcript-verified)
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
     type ONE of PBP | MOMENT | WHY | LENSES | QUOTE | DELTA | SLIDE | STAGE;
     optional lenses{casual,builder,investor,skeptic}, quote{text,who},
     delta[{label,from,to}], tags from REVENUE/PRODUCT/FLEET/KEYNOTE/CHAT/MILESTONE/HOLD.

   EDITORIAL RULES (standing):
   - The page is reader-facing: event and news only. Never publish corrections
     bookkeeping, coverage-process talk, or provenance labels like "on tape" /
     "screen read" — write "on air" / "on screen" if a source note is needed.
   - Full-sentence prose in every body, lens and note: no label-colon openers,
     no arrow chains, no packed parentheticals a reader must decode. Titles,
     chips and delta strings are UI elements and keep their compact form.
   - Session-demo material (the Flylo demo airline, Mimi/Sherlock/Serena, the
     support org) is never attributed to the trio's own build.
   - Money figures always carry their source (staging data / stated ambition /
     session sample).
   ============================================================================ */

window.GG_META = {
  status: "ENDED",
  day: "Day 3 of 3 — Thu Sep 17, 2026 · ship day (complete)",
  session: "Day 3 ended at 4:28 PM PT — the deadline kept: Thursday Arena live at thursdayarena.com",
  viewers: "173.4K",
  onAir: "7h 58m today",
  updated: "Sep 17 · 4:28 PM PT",
  stream: "https://x.com/i/broadcasts/1YGNrbXEeazGw"
};

window.GG_MOMENT = "Three days, one deadline kept: Thursday Arena is live at thursdayarena.com, with 4,898 public matches played on launch day.";

window.GG_PRIMER = {
  event: "Grok Bot Galaxy is xAI's 3-day livestream (Sept 15–17, from a studio next to Dreamforce in San Francisco): three xAI employees — Lauren, Roshan and Matt — built an entire real company live using teams of AI agents (Grok Bot), while the internet watched. Day 1 drew 1.1M viewers; a viewer contest runs through Sept 29 with a Starship-launch trip as the prize.",
  company: "The company is Ship by Thursday — the name was spoken on the Day 1 broadcast, and its domain (shipbythursday.day) went live on Vercel that afternoon, pre-launch. What they are building and shipping is Thursday Arena: a character-draft battler whose cards are xAI bot-marketplace bots, with ELO skill ratings (the chess-style ranking number), charisma-versus-dexterity counters, and live-tunable debug sliders. It began on Day 1 as Pop-up OS — event-ops software for a restaurant pop-up — and the prototype the fleet built under the code name 'Cupcake' became the build itself, named and deployed as Thursday Arena on launch day.",
  sofar: "Day 1 ran from no idea at the open to a named company by the close: the humans chose a restaurant pop-up with 'Pop-up OS' operations software, the domain went live, and the bot fleet grew past 30. Day 2 retired the October pop-up event ('There is no pop-up') and the code-named 'Cupcake' game prototype became the build — one bug short of playable matches at the 4:53 PM close, 374.9K views. Day 3 was ship day: the build launched as Thursday Arena at thursdayarena.com, playing live matches with a leaderboard, a shop and its own funnel dashboard; the day's sessions ran on bot-staffed teams; and the day closed after 7h 58m with 4,898 public matches played, a peak of 677 concurrent players, and the deadline kept.",
  watchfor: "The event is over — the company shipped Thursday Arena on the day it promised, live at thursdayarena.com. Still open beyond the stream: the viewer contest runs through Sept 29 with a Starship-launch trip as the prize, and the question nobody answered on air — what happens when an agent teammate is wrong — now belongs to the shipped product."
};

window.GG_SCOREBOARD = {
  stats: [
    { label: "The company", value: "Ship by Thursday", sub: "named on the Day 1 broadcast · domain shipbythursday.day live, pre-launch" },
    { label: "The product", value: "Thursday Arena", sub: "live at thursdayarena.com — 'Pick a captain. Take two mystery teammates. Fight three rounds.' It began Day 1 as Pop-up OS; the code-named 'Cupcake' demo became the build and shipped on launch day", wide: true },
    { label: "Bots online", value: "43", sub: "2 working at close · 6 archived — final fleet widget" },
    { label: "Milestones", value: "76", sub: "fleet milestones logged across the three days" },
    { label: "Viewers", value: "173.4K", sub: "Day 3 close (Day 1: 1.1M · Day 2: 374.9K)" },
    { label: "On air", value: "25h 06m", sub: "Day 1: 8h 45m · Day 2: 8h 23m · Day 3: 7h 58m" },
    { label: "Ship deadline", value: "Met — Thursday", sub: "'72-hour live stream… we ship a product by Thursday' — promised on air Day 1, kept on Day 3" },
    { label: "Prize", value: "Starship trip", sub: "viewer contest, ends Sep 29 — entry steps shared at 9:40 AM" },
    { label: "Built on Day 1", value: "idea, name and live domain, a pre-launch lander, a pipeline, tickets and plush, an email channel, an SEO plan", wide: true },
    { label: "Built on Day 2", value: "the Thursday plan, a landing page, the 'Cupcake' demo, ELO and tiers, auth (Clerk) and a Vercel backend, a Remotion ad bot, 3D swarm experiments", wide: true },
    { label: "Built on Day 3", value: "the deployed Thursday Arena with live matches, a leaderboard and a shop, an analytics dashboard, six integrations, a stats bot", wide: true }
  ],
  deltas: [
    "Thursday Arena: shipped and live at thursdayarena.com — 4,898 public matches, 677 peak concurrent players",
    "Three days on air: 25 hours, three broadcasts, a fleet of 43 bots",
    "The deadline was kept: 'we ship a product by Thursday' — and they did"
  ]
};

/* NEWEST FIRST. One entry = one block. See cheat sheet above.
   Day 2 wall PT = broadcast audio + 8:30 AM. Day 3 wall PT = recording + 8:30 AM. */
window.GG_ENTRIES = [
  {
    id: "d3-1630",
    t: "4:30 PM PT",
    day: 3,
    type: "WHY",
    tags: ["MILESTONE"],
    title: "Grok Bot Galaxy ended with a company and a shipped game built in three days",
    body: "On Day 1 (8h 45m, 1.1M views at close) the trio debated candidate businesses live, chose a restaurant pop-up with 'Pop-up OS' operations software, named the company Ship by Thursday, put its domain live by afternoon, grew the bot fleet past 30, and designed tickets, plush and an email channel. On Day 2 (8h 23m, 374.9K views) the October pop-up event was retired ('There is no pop-up'), a game prototype under the code name 'Cupcake' became the build, and the day's sales track — Sales Engineering, Sales, SDRs, Customer Support — filled the playbook while the build went from playground to Next.js app with auth and a leaderboard, one bug short of playable at close. On Day 3 (7h 58m, 173.4K views) the day's sessions ran (Territory Planner proposing rulings on disputes, the Juno brief-writer, Gus the post-sales chief of staff and his self-improvement scan, a researcher-to-strategist marketing relay), and the build shipped as Thursday Arena at thursdayarena.com — leaderboard, shop, live ranked matches, 4,898 public matches and a 677-player peak by showcase, the hosts closing the event in live ranked play on their own game. The event ran 25 hours on air, and the deadline in the company's name was met.",
    lenses: {
      casual: "Three days ago there was no company. It ended with a live game anyone can play and a leaderboard of real players — and you watched every step of the build.",
      builder: "The stack that shipped combined marketplace-bot specialists assembled per function, governed agency (Approve/Hold, drift flags, human-edits-as-truth), routines over one-off prompts, and PRs with test evidence — 'delete all the tests' matured into bots that write their own.",
      investor: "The event was the go-to-market: 25 hours of watched development created distribution, a template marketplace doubled as a partner ecosystem, and the ship deadline itself became the marketing hook — a case study for agents-as-workforce economics.",
      skeptic: "A tiny game with placeholder ratings shipped on stream — real players and real play data are the receipt, but durability is unproven, the accountability question (what happens when an agent teammate is wrong) got guardrails rather than an answer, and much of what the sessions demoed ran on sample data, not the trio's own build."
    }
  },
  {
    id: "d3-1628",
    t: "4:28 PM PT",
    day: 3,
    type: "MILESTONE",
    tags: ["MILESTONE"],
    title: "Day 3 ends with the deadline met and the game shipped",
    body: "After 7h 58m on air, the third day closed on the 'Thanks for joining!' card at 173.4K views. The final fleet widget read 43 bots, 76 milestones logged, 2 working, 6 archived — the archived roster trimmed from 11 during the afternoon. The day kept the promise the whole event was named for — 'we ship a product by Thursday': Thursday Arena launched at thursdayarena.com with a leaderboard, a shop, and live ranked play; the showcase put the day's numbers on the board (4,898 public matches, 4,500 practice sessions, a 47.6% overall win rate, a peak of 677 concurrent players); and the closing minutes ran the first sponsorship ad bid — 'our first theoretical sponsorship dollar' — before the sign-off: 'Thanks, y'all, for watching… Mash more PRs.' At close there was a named business, a live game with real players, and a fleet of 43 agents that built it on camera; three days earlier, none of it existed."
  },
  {
    id: "d3-1615",
    t: "4:15 PM PT",
    day: 3,
    type: "MOMENT",
    tags: ["PRODUCT"],
    title: "The day's traffic chart shows the broadcast landing in waves",
    body: "The showcase closed on the game's own traffic chart, stamped 4:15 PM PT and bucketed in five-minute intervals: practice starts and X signups rising in waves across the whole broadcast day, each wave traceable to something the stream had just done on air. The view counter read 171.4K."
  },
  {
    id: "d3-1612",
    t: "4:12 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The official rules, coached by dr. eggbot",
    body: "The final design, stated plainly in a bot chat: a match is best-of-3, each round runs a shop phase followed by an auto battle, up to 3 bots with the leftmost fighting first, bots and apples persist between rounds and the 'potato' is temporary. The shop gives 10 tokens a round — unspent tokens vanish, sell refunds 1, reroll costs 1, and freezing keeps an offer across shops. Dr. eggbot holds the 'ask to review this chat and coach' role — the mascot literally teaches its own game."
  },
  {
    id: "d3-1550",
    t: "3:50 PM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET", "PRODUCT"],
    title: "A bot-authored pull request, with its own test report and verdict",
    body: "The studio screen showed GitHub pull request #274 — a leaderboard fix — written by the fleet: a description of what changed and what was deliberately not touched, a Tests section running through the suite (leaderboard and contest tests, fixtures, page-HTML checks), and a verdict line: 'All green.' The 'delete all the tests' scrappy mode of Day 2 has grown into bots that write their own test evidence. The view counter read 162.7K."
  },
  {
    id: "d3-1559",
    t: "3:59 PM PT",
    day: 3,
    type: "PBP",
    tags: ["REVENUE", "FLEET"],
    title: "The closing minutes: credits for the chat, and the first sponsorship dollar",
    body: "The last stretch ran on giveaways and revenue experiments. At 3:59 the hosts promised $200 of Grok Bot credits to viewers posting 'credits' in the live chat; at 4:05 a rules endpoint went live at thursdayarena.com/rules, written to be readable by agents as well as people; at 4:20 the final metrics went up (past 4,000 games, close to 30,000 page views, signups 'probably crossing 2,000,' and the number-one spot on Google for the game's name); a bad SQL query from the software factory briefly took down prod and was fixed mid-sentence; and at 4:26 the ad auction fired its first test bid — 'our first theoretical sponsorship dollar.'"
  },
  {
    id: "d3-1541",
    t: "3:41 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The site's own banner reads 677 people playing now",
    body: "Mid-showcase, the public site's banner read 677 people playing now — the day's peak concurrent count, on screen while the hosts kept playing and talking monetization. The view counter read 161.5K."
  },
  {
    id: "d3-1538",
    t: "3:38 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "MILESTONE"],
    title: "Ranked play, on air: the makers queue into their own game",
    body: "The showcase turned to live ranked play on thursdayarena.com: the hosts queued into the public ladder — 'my rank is 1322 out of 1800' — with 1,819 players registered, playing through the best-of-three format while sketching the ad marketplace it could fund. An opponent's handle and the round marker sat on the scoreboard (on screen). The game built in three days was matching its own makers into the public pool. The view counter read 156.7K."
  },
  {
    id: "d3-1527",
    t: "3:27 PM PT",
    day: 3,
    type: "MILESTONE",
    tags: ["MILESTONE", "PRODUCT"],
    title: "The public leaderboard is carrying real matches",
    body: "On thursdayarena.com's leaderboard: named players with Elo ratings and win-loss records — a Gold-rated player at 1447 sitting at rank #51, others from 1142 to 1299 with double-digit win counts. The ratings system that started Day 2 as 'we're both gold at 1000' placeholders is now ranking real public play. The view counter read 154.1K."
  },
  {
    id: "d3-1516",
    t: "3:16 PM PT",
    day: 3,
    type: "MOMENT",
    tags: ["MILESTONE", "PRODUCT", "KEYNOTE"],
    title: "The final showcase opens on the game's live numbers",
    body: "The closing segment arrived on schedule and opened on the game's own metrics dashboard: 4,898 public matches played — up from 2,983 at 11:30 AM — alongside 4,500 practice sessions, 1,650 X logins, an 8.0% practice-to-login conversion (388 players), a 47.6% public win rate, and 332 feedback items. Four people sat at the studio table to walk through the launch-day numbers. The view counter read 152.4K."
  },
  {
    id: "d3-1520",
    t: "3:20 PM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET"],
    title: "Voice mode merges a pull request hands-free",
    body: "Grok Bot's newly announced voice mode ran the fleet by voice during the showcase: 'merge PR 269,' spoken rather than typed, and the Bake bot walked the checks and merged it. The same voice path was used to file the leaderboard's win-loss bug, closing with the joke 'A SQL query walks into a bar… can I join you?'"
  },
  {
    id: "d3-1503",
    t: "3:03 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "Marketing session's takeaways: scope, trust, invest",
    body: "The session's 'What we learned' slide closed its argument in three lines: scope bots properly (bloating context and responsibilities slows them down — 'scope like a job description'); then trust your bots (a proactive, ambitious teammate gets tools, access and context, and room to run); and invest in your bots while copying others — give feedback like you would a teammate, and lean on the marketplace's shared templates. The view counter read 148.9K."
  },
  {
    id: "d3-1450",
    t: "2:50 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "A marketing bot takes a three-step order and reports back with screenshots",
    body: "The Marketing session's demo put a 'Website Ops' bot over a landing-page build in the session's own workspace: the human's message read like a work order — make the landing page from the brief the Product Marketer bot just drafted, update the FAQs for the most common user questions, and send screenshots as you go so I can monitor progress. The bot answered that it was pulling the latest brief and opening a PR with progress screenshots as it worked. The sidebar showed the rest of the session's marketing fleet (Product Wiki, Website 101, Relocation) waiting for their own briefs. The view counter read 147.1K."
  },
  {
    id: "d3-1449",
    t: "2:49 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "The Product Marketer bot commits its brief to the workspace",
    body: "The pipeline was in motion: the Market Researcher surfaced findings from competitor advertising (an airline campaign — 'Make distance feel smaller.' — sat on screen as reference), then the baton passed to the Product Marketer bot, which wrote a positioning brief to a file in the shared workspace and pinged the team — with View PR and Open in Cursor buttons on the message. Marketing ran as a relay of specialists, and the work ended in a committed artifact. The view counter read 146.6K."
  },
  {
    id: "d3-1436",
    t: "2:36 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "The final marketing session opens with a Market Researcher brief",
    body: "The final session (Josh Kim) opened with a 'Market Researcher' bot and a single briefing message: research the product by reading its own website, understand the market it operates in, then a competitive analysis — 'identify and deeply understand 3 competitors,' list their marketing strategies and what's worked, and surface where we can strategically and competitively position ourselves. A marketing fleet waits in the sidebar: Market Eval, Product Marketer, performance and strategy bots. The view counter read 143.9K."
  },
  {
    id: "d3-1429",
    t: "2:29 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "The final showcase is set for 3:15 PM",
    body: "The stream's agenda board laid out the closing run: the Marketing session, one more game-studio build block at 2:45, then 'Livestream Wrap and Final Showcase' at 3:15 PM PT — an earlier finale than the 4:30 on the morning's agenda. The studio table sat mid-conversation as the board went up, with 141.3K watching."
  },
  {
    id: "d3-1414",
    t: "2:14 PM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET"],
    title: "Bots propose process changes for the build",
    body: "Later in the triage thread, the bot went beyond ticket status and proposed process changes for the build itself — one report per site while conflicts last, a team attribute on every ticket, and consolidating deploys — then shared itself to the team ('Share bot — ask to team by dunes') with View PR and Open in Cursor buttons on its work. The fleet is editing how the backlog itself runs. The view counter read 137.9K."
  },
  {
    id: "d3-1406",
    t: "2:06 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "CHAT"],
    title: "The landing page runs a live ticker of who is playing right now",
    body: "The deployed landing page now shows the full pitch — THURSDAY ARENA, cupcake mascot, Play and Practice buttons, character cards fanned out — plus a live ticker showing the people actually playing: 'when you're logged in, it'll show like your profile image.' The hosts were already sketching a paid tier for it ('a special, like a blue color on the ticker'). A signed-in player profile on screen carries paired Elo ratings (1400 · 1347). The 'make it go viral' loop — play, be seen, pull others in — is wired into the site itself. The view counter read 134.9K."
  },
  {
    id: "d3-1400",
    t: "2:00 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "REVENUE"],
    title: "A Stripe guest brainstorms agents paying agents with one-time cards",
    body: "Dan Hill of Stripe and Link took the studio couch for the 2 PM block: agents paying agents through single-use Link cards, Stripe Projects, and monetization sketches for the game — sponsored cards, subscriptions, leagues. The pull-request counter passed 235 during the visit, and the hosts set the stretch goal out loud: 'get our first dollar.'"
  },
  {
    id: "d3-1347",
    t: "1:47 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "Vercel Analytics goes live: 1,400 people on the page, 44% on iOS",
    body: "The team switched on Vercel Analytics for the public site and read it on air: 1,400 people on the page at that moment, 44% of them on iOS — more mobile than desktop, which sent the card UI back for a mobile pass. By late afternoon the traffic even included eight visitors who had found the game through Bing."
  },
  {
    id: "d3-1341",
    t: "1:41 PM PT",
    day: 3,
    type: "MOMENT",
    tags: ["PRODUCT"],
    title: "The game takes a support call from an AI phone line",
    body: "Matt dialed the in-game support number live on air. The voice agent answered, the call was transcribed and moderated, and the summary was routed into the fleet's Slack feedback channel — the game's feedback loop now reachable by telephone."
  },
  {
    id: "d3-1340",
    t: "1:40 PM PT",
    day: 3,
    type: "MOMENT",
    tags: ["PRODUCT"],
    title: "The live site states the game's pitch: pick a captain, fight three rounds",
    body: "The public site at thursdayarena.com carries the build's own one-line pitch — 'Pick a captain. Take two mystery teammates. Fight three rounds.' — beside the wordmark and the cupcake mascot. On the stream, the trio is pointing its agents at the live site itself to hunt down a bug in the shop button, directing a check-agent to browse the public URL and reproduce the exact behavior. The view counter read 126.8K."
  },
  {
    id: "d3-1335",
    t: "1:35 PM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET", "PRODUCT"],
    title: "The ops feed shows numbered tickets, drift flags, and ads that 'ended'",
    body: "The studio screen showed a triage thread by the stats bot: numbered work items rolling through — ads campaigns ended with rolling margin figures, leaderboard and shop features landed, a cloud-agent deploy moved to boot-time, and one item carried a 'do-not-merge — retry' drift flag. Each host's tickets got their own status lines. It reads like a standup written by the fleet, for the fleet, while the humans sit at the same table. The view counter read 133K."
  },
  {
    id: "d3-1331",
    t: "1:31 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The first Diamond player tops the leaderboard",
    body: "The public leaderboard grew its first Diamond player, 'Ari the Monk,' at 1:31, followed by a second, 'Dev Arminas,' by 1:49 and five Diamonds by 3:22. The morning's first six Platinum players had been congratulated on air at 10:43, and by 3:46 a new number one led the board with 29 wins and 3 losses under the name 'Not a bot.'"
  },
  {
    id: "d3-1319",
    t: "1:19 PM PT",
    day: 3,
    type: "MILESTONE",
    tags: ["MILESTONE", "PRODUCT"],
    title: "Thursday Arena is live at thursdayarena.com",
    body: "The game demo's public URL is now on screen and live: thursdayarena.com opens on the THURSDAY ARENA wordmark (cupcake pixel-art mascot included), a Play button, and the roster's character cards — a real deployed site for the game that was localhost and one bug away 24 hours ago. The rename-and-deploy promise from Wednesday's sign-off is now fully kept: named, deployed, and playable in public."
  },
  {
    id: "d3-1258",
    t: "12:58 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "FLEET"],
    title: "The self-improvement scan: Gus diffs its drafts against what the human actually sent",
    body: "The session's standout routine ran live: a weekly self-improvement scan with two jobs — a system audit that spotted a firing-routine gap and proposed exactly one concrete fix ('don't implement unless I say yes'), and a voice-learning pass that diffs Gus's drafted messages against the versions the manager actually sent (tone, wording, closings, banned phrases, warmth), logging the patterns as memory. Governance closed the loop: the bot learns, but the human's edits count as truth, and the fix ships only on approval. The manager also asked Gus to convene a staff meeting about what to prioritize with the next and only free hour of his day — 'staff meeting is live,' it replied."
  },
  {
    id: "d3-1251",
    t: "12:51 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "FLEET"],
    title: "Gus the chief-of-staff files the post-sales digest — risks, blockers, promises",
    body: "The session demoed 'Gus,' a chief-of-staff bot for a post-sales org (on Flylo's demo team, not the trio's build): a status digest covering Risk (a QBR that 'gets ugly,' a training-suite answer due Friday, an account kept 'soft, not a P0'), People flags, Blockers (access pending for three named reps), and Open promises with owners and dates — plus a space-party joke, 'because life is not that serious.' Underneath, Gus's routines run on a schedule: a daily brief at 8:30, call prep every 15 minutes on weekdays, weekly unattended-promises sweeps, ask watch, and visibility watch.",
    lenses: {
      casual: "A bot reads all the threads so the manager walks in already knowing what's on fire — and it tells jokes.",
      builder: "The pattern is digest-plus-routines: scheduled sweeps (promises, asks, visibility) writing into one brief, each routine a cron-shaped config with an owner and a scope.",
      investor: "Post-sales is where renewal revenue lives; a chief-of-staff bot that surfaces at-risk renewals weekly is a retention tool disguised as an assistant.",
      skeptic: "The digest is only as good as its integrations — 'access pending' blockers suggest the bot already hit the permission walls every real deployment hits."
    }
  },
  {
    id: "d3-1238",
    t: "12:38 PM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "The Post-Sales session opens with a tour of community-built bots",
    body: "Blake Schuller's 12:30 post-sales session took the stage and went straight to the bot Marketplace: featured community bots (Lauren Tan's dr.eggbot, Lenny Rachitsky's Overheard, Claire Vo's Tradbot, Eric Zakgaiman's Projects Manager) beside team plugins — pastack (used by 88 teammates), Atlassian MCP (52), GitHub, and the Flylo demo environment. The lesson taking shape was that a post-sales team assembles from installed specialists. The view counter read 113.5K."
  },
  {
    id: "d3-1214",
    t: "12:14 PM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET", "PRODUCT"],
    title: "A data bot now reports the game's stats on a schedule",
    body: "A bot named Data is posting 'Season 1' session reports into a channel — practice counts, a 46.7% overall win rate, public-match totals, open versus fixed bugs, and feedback volume — with mini-charts inline. The hosts asked it live to 'add total user count over time,' and the report shape grew a new chart on request. The numbers come from a scheduled routine and refresh themselves. The view counter read 109K."
  },
  {
    id: "d3-1204",
    t: "12:04 PM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "The company staffs its marketing by installing a bot from the Marketplace",
    body: "The studio block's new thread is captioned 'Standing up marketing operations,' and the screen shows a Marketplace listing for 'Cerebro' by Marinos — a community-built GTM bot with duplicate and download buttons. The move echoes the event's own pitch: the fastest way to staff a function may be installing a specialist template, then teaching it your house rules. The view counter read 107K."
  },
  {
    id: "d3-1130",
    t: "11:30 AM PT",
    day: 3,
    type: "DELTA",
    tags: ["PRODUCT", "FLEET"],
    title: "The game's dashboard counts 2,983 public matches so far",
    body: "A 'Funnel snapshot (practice → convert → play)' chart on the studio screen showed 2,255 practice sessions opened, 742 completed, 268 converted to the game, a fourth bar at 193 account creations, and 2,983 public matches. The fleet is now measuring its own game like a product funnel — whether those numbers reflect public traffic or seeded test data isn't stated on screen. The view counter read 98.7K."
  },
  {
    id: "d3-1119",
    t: "11:19 AM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The game adds a shop whose items are jokes about the sales world",
    body: "The build block's newest screen showed a SHOP tab with buyable cards at 3 gold each — 'The Morning Newspaper' (pass it back: buff two friends from your bench), 'Hiring Signals' (backfire: deal 1 damage to the lowest-health enemy), and 'GTM Connections' (spot: give 50% of its ATK to the lowest-health ally). The auto-battler now has an economy, and the flavor is pure go-to-market. The view counter read 96.3K."
  },
  {
    id: "d3-1114",
    t: "11:14 AM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "A growth guest turns the game's traction into a live playbook",
    body: "Vincent Zhu, who works on growth at xAI, joined the studio for half an hour and built the game's growth playbook live in a Notion doc — welcome DMs for new followers, share prompts, a challenge-a-player loop — reading the funnel as he went: about 2,200 practice rounds and 1,000 X sign-ins, with the standing advice to 'let practice users win more often.' The visit closed with a double promo at 11:42: a 'reset' for existing users alongside the new-user free month."
  },
  {
    id: "d3-1058",
    t: "10:18 AM PT",
    day: 3,
    type: "MILESTONE",
    tags: ["MILESTONE", "PRODUCT"],
    title: "The game's final name is Thursday Arena",
    body: "Live on air at 10:18 — 'Alright, okay. Thursday Arena is live' — the deployed front page went up under the final name, revealed one day after 'maybe think of an actual good name.' The page shows a player profile at a 1000 rating (the placeholder ELO the hosts joked about on Day 2), a Play button, a 'priority queue: eng' banner, and Leaderboard / Your matches / Tips / Read handbook panels; a teammate's browser shows the matchmaking front end beside a deploy diff in the editor. The hosts declared thursdayarena.com the game's only official site and its new X account the only official account; the rename-and-deploy promise from Wednesday's sign-off is now on the record as kept."
  },
  {
    id: "d3-1052",
    t: "10:10 AM PT",
    day: 3,
    type: "MOMENT",
    tags: ["MILESTONE", "PRODUCT"],
    title: "The first live match plays out on air, best-of-three",
    body: "'Let's go ahead and fight round one' — the game demo, still under its 'Cupcake' code name at that hour, was played live on the broadcast in practice mode against the game's own AI. 'It's the best of three rounds,' Matt explained as the bots dueled, with the shop economy opening between rounds: base cards at three gold from a ten-gold start, and selling a card refunds one. One day after 'I can't actually add any bots yet,' matches were resolving on screen — the result card reading 'You took round 1' with a Play Again button, team cards carrying charisma-vs-dexterity bars, several still reading 'no image provided' while an Image Gen bot sat active in the roster."
  },
  {
    id: "d3-1046",
    t: "10:46 AM PT",
    day: 3,
    type: "DELTA",
    tags: ["FLEET", "PRODUCT"],
    title: "The bots connect six company tools as the fleet reaches 43",
    body: "The studio block walked through the workspace's 'Manage plugins and skills' screen: Vercel, Notion, Slack, X, PlanetScale and Clerk all show Connected — the same stack the build has leaned on since Day 2 (hosting, docs and the knowledge base, alerts, distribution, the database, auth). The fleet widget reads 43 bots online, 4 working now, 11 archived. The view counter read 83.8K.",
    delta: [
      { label: "Bots online", from: "30+ (Day 1 close)", to: "43" },
      { label: "Archived", from: "10 (Day 1)", to: "11" }
    ]
  },
  {
    id: "d3-1040",
    t: "10:40 AM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "A stats bot checks the game's balance from live match data",
    body: "Back from the break, the build screen showed a stats thread with a 'Launch dashboard — Session 1' card — practice and match activity, plus a bug list (two fixed, two open). Asked for 'basic game stats like win rates, difficulty, etc. to validate the game engine,' a bot named Sake replied that it is pulling win-rate and difficulty signals from live match data — the side-demo game is now producing real play data that the fleet analyzes. The view counter read 81.3K."
  },
  {
    id: "d3-1035",
    t: "10:35 AM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "The broadcast shows the final day's agenda",
    body: "A live-agenda panel on the player lays out the day: 'Build: A Game Studio' blocks alternating with two sessions — Grok Bot for Customer Success (the 12:30 PM slot) and Grok Bot for Marketing (2:30 PM). The final showcase is set for 4:30 PM.",
  },
  {
    id: "d3-1020",
    t: "10:20 AM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "Minutes after launch, the public leaderboard is filling",
    body: "The Marketing Ops session had closed at 9:40 and handed the stream back, and by 10:18 the game was live under its final name. Two minutes later the public leaderboard already held 96 players; by 10:24 it was closing in on 500 users while the hosts worked favicon, styling and search-metadata polish live at their desks. Post-Sales at 12:30 PM and Marketing at 2:30 PM were still to come. The view counter read 72K."
  },
  {
    id: "d3-0940",
    t: "9:40 AM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE", "CHAT"],
    title: "The viewer contest shows how to enter for a Starship trip",
    body: "A slide spelled out the viewer contest: 'Show us how you've integrated Grok Bot into your work' — quote the challenge post on X, explain what your Bot does, include a link to your shared Bot template, and follow @Grok and @Bot. The prize is a trip to Starbase for a Starship launch; entries run through Sept 29.",
    lenses: {
      casual: "Post about your bot on X and you could win a trip to watch a Starship launch.",
      builder: "The entry requirement — a shared Bot template link — doubles as marketplace distribution: every entry seeds a reusable agent config.",
      investor: "UGC as growth loop: contestants market the product to be eligible to win, and template shares compound as free distribution.",
      skeptic: "Contest mechanics are cheap to copy; the moat is whether shared templates actually keep working for strangers' workflows."
    }
  },
  {
    id: "d3-0915",
    t: "9:15 AM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "A bot turns one sentence into a plan for a sales app",
    body: "In the Marketing Ops demo, Matthew briefed a bot named Juno — 'a GTM product bot' that clarifies requirements one question at a time, writes the product spec, and hands it to a build flow. Fed 'I want to build an internal app for sales reps to review their leads,' Juno specced a swipe-the-card interface: swipe left to reject a lead in the CRM with a reason, swipe right to accept and add it to a follow-up sequence, with CRM write-back correctness flagged from the start."
  },
  {
    id: "d3-0910",
    t: "9:10 AM PT",
    day: 3,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "A bot referees two sales reps fighting over one account",
    body: "The session's live screen showed a 'Territory Planner' bot working an inbox: it drafted a stakeholder email, then surfaced a Path task — two AEs, Jordan (West) and Sam (Central), both claiming the Acme Logistics account, filed 8:44 AM. The proposed path: a territory-map sync Tuesday, a written ruling by Friday. The approval card offered 'Approve' or 'Hold — digest only.'",
    lenses: {
      casual: "A bot read the email thread, spotted the fight over one account, and proposed a fair way to settle it — human just clicks approve.",
      builder: "This is governed agency in practice: the bot proposes a Path task with evidence and waits; Approve vs 'Hold — digest only' is a per-task autonomy switch.",
      investor: "RevOps disputes are high-frequency, low-stakes, and full of process — the exact wedge where agent middle-management sticks before it spreads to bigger calls.",
      skeptic: "A proposed ruling is not a fair ruling: the bot only knows what the CRM and inbox tell it, and territory maps have politics no digest captures."
    }
  },
  {
    id: "d3-0907",
    t: "9:07 AM PT",
    day: 3,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "The Marketing Ops session opens with six ways bots help marketing teams",
    body: "Matthew Silberman and Teresa Hsu's session opened on a use-case map: a self-completing to-do list (monitor inboxes, refresh CRM tables, route tickets); build tools, not just rules (bots maintain dashboards and query systems); perfect the marketing–sales handoff; make GTM data truly self-serve (a bot anyone on the team can query); territory planning from CRM accounts, pipeline and rep performance; and cleaning CRM duplicates once and for all."
  },
  {
    id: "d3-0900",
    t: "8:40 AM PT",
    day: 3,
    type: "MOMENT",
    tags: ["KEYNOTE"],
    title: "The final day begins: today the company ships",
    body: "The third broadcast opened under the title 'Building a company in 3 days - launching today!' — the deadline now written into the stream's own name. After a few minutes of hold cards the trio went live at 8:40 and opened ship day with a ten-minute offer for new users: sign up, create a bot and set up one recurring task, and the first month of the top tier is free — 'like, 200 bucks of usage in the first month.' The marketing track took the stage at 9:00."
  },
  {
    id: "d3-0845",
    t: "8:45 AM PT",
    day: 3,
    type: "PBP",
    tags: ["FLEET"],
    title: "The overnight software factory landed 168 pull requests",
    body: "While the hosts slept, the fleet kept working: 'overnight, I think we landed more than 100 PRs — yeah, 168,' with Potato Mode on full autopilot and a QA bot named Play testing the builds as they came in. The trio walked the overnight diff at their desks before the day's first session, the clearest look yet at a company whose employees do not sleep."
  },
  {
    id: "d2-1653",
    t: "4:53 PM PT",
    day: 2,
    type: "MILESTONE",
    tags: ["MILESTONE"],
    title: "Day 2 signed off 'from no app to an app,' one bug short of playable",
    body: "The broadcast ended at 4:53 PM Pacific after 8h 23m. They closed by saying, 'We went from no app to an app… an app with an engine and a bunch of bots that are basically [the] whole workforce today.' The build's honest state at the end was that X login works, the global leaderboard is wired but empty, the ratings are placeholders ('we're both gold at 1000'), and 'there's a bug. So I can't actually add any bots yet.' The Day 3 plans spoken at sign-off were to deploy, rename the game ('maybe think of an actual good name'), play matches live with chat, 'make it go viral. We have one day to grow our business,' and sprint an ads marketplace, all against the deadline of '72-hour live stream… we ship a product by Thursday.' They also announced a promo in which the first 1,000 people to duplicate dr. eggbot receive a free month of Grok Bot, a $200 value.",
    lenses: {
      casual: "Two days in, they have a real app with login and a leaderboard, a bot crew that built it, and exactly one bug between them and a playable game.",
      builder: "The repeatable pattern held all day: humans steer taste and rules in plain English, agents produce the artifacts, and the kanban board ('the cupcake board') is bot-maintained.",
      investor: "Build velocity is real; monetization is still theoretical. The ads-marketplace sketch (stadium billboards, sponsored lobbies) is the first revenue idea with a shape.",
      skeptic: "This report card is self-assigned — the leaderboard is empty, the ratings are placeholders, and the bug list is one item long only because they deleted the tests. Thursday is the deadline that turns this from demo to product."
    }
  },
  {
    id: "d2-1600",
    t: "4:00 PM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The Support session demos a four-bot customer-service team",
    body: "David Gan (software engineer, xAI user ops) demoed a four-bot support team on xAI's demo airline Flylo, which sells $20-a-month in-flight wifi: build handles infrastructure, reply answers tickets in Plain and Slack, alert flags urgent cases to Slack, and tune improves the system. The stack combined the Plain ticketing tool, a Notion knowledge base holding public docs plus an internal 14-day refund policy, a Supabase database, and Stripe. In the live demo a password reset was answered with a citation to the exact public doc; an SSO question about Okta hit no documentation, so the bot reported low confidence, handed off to a human, and raised a Slack alert ('exactly what we wanted'); and refunds were granted for Carter, who had just subscribed, and denied for Damon, who was about 20 days in and outside policy, all without leaking the internal policy. The rollout ladder is crawl-walk-run: the bots start read-only, then draft answers for review, then answer directly. The economics stated on air were $1–2 per medium ticket and about 20 cents for a scripted one, versus '$1… one to ten dollars' for competitors. This was a demo org on a demo airline, not the trio's build.",
    lenses: {
      casual: "They showed bots answering real-looking support tickets and issuing refunds — and refusing, politely, when the policy said no.",
      builder: "The reply bot's loop (read ticket, consult knowledge, answer or hand off, act) plus the alert bot closing the human-visibility gap is the cleanest agent pattern shown all event.",
      investor: "Support is the most measurable cost line in software; a 20-cent scripted resolution is a real wedge if it survives angry humans.",
      skeptic: "The tickets were pre-seeded, there was no real angry customer, and the refund judgment was a hard-coded policy. Ambiguity is where this breaks — and it's the part nobody demoed."
    }
  },
  {
    id: "d2-1545",
    t: "3:45 PM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "The team deletes its own tests to ship faster",
    body: "In the late-afternoon build the prototype became a Next.js app with a client/server split — 'you can just modify the client and cheat,' so matchmaking resolves server-side. A global leaderboard appeared, though it was not fully wired. The 'cupcake board' Notion kanban ('we've made our own little ticketing system') tracked the playtest, the backend, login (built on the auth service Clerk), and a 3D client experiment; a 3D prototyping bot spawned through the Cupcake repo ran Cursor cloud agents in Potato Mode ('glow 3d' picked the 'match and fight' lane); and the backend went to Vercel serverless with 'delete all the tests. We'll push it to main… true scrappy mode.' Two more things shipped mid-block: a 1Password integration and a sound-design bot named 'tones.' A Cursor Projects demo showed a coordinator agent managing subagents and saying 'mashed' for merge.",
    lenses: {
      casual: "The bots deleted their own tests to ship faster — true scrappy mode.",
      builder: "Anti-cheat reasoning ('modify the client and cheat') driving the client/server split is the first real production instinct the game has shown.",
      investor: "Velocity with a deadline. The question Thursday answers is whether 'scrappy mode' compounds into a product or a rewrite.",
      skeptic: "Deleting tests on a codebase mostly written by agents, hours before a hard deadline, is a bet on review capacity they haven't shown."
    }
  },
  {
    id: "d2-1430",
    t: "2:30 PM PT",
    day: 2,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "The outbound-sales session shows a bot army pitching 50 prospects a day",
    body: "Simon (xAI SDR, go-to-market — Simon Lackowski per the schedule) ran the SDR block, which applies the chief-of-staff pattern to outbound sales: a swarm of 'Simon soldiers' sub-agents works a routine of 50 prospects a day, demoed on the Flylo account. The pitch in one line is that the SDR's job becomes editing the bot's drafts, not writing them.",
    lenses: {
      casual: "The demo is one SDR plus an army of mini-mes, grinding prospect lists all day.",
      builder: "The routine (a scheduled job that wakes agents, works a list, and queues drafts for review) is the same crawl-walk-run shape the support session taught.",
      investor: "Outbound is volume times relevance; agents move both. The demo ran on xAI's own sample data.",
      skeptic: "Fifty auto-prospects a day is also how you burn a domain's deliverability. Nobody mentioned the cost of being blocked."
    }
  },
  {
    id: "d2-1405",
    t: "2:05 PM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT", "REVENUE"],
    title: "A video-ad bot writes 6,000 lines of code for the game's ads",
    body: "The chief of staff and dr. eggbot onboarded 'a remotion ads bot for a Cupcake' — an agent that wrote roughly 6,000 lines of code in Remotion, a framework for building video programmatically, across 12 files to generate video ads, with a localhost conflict debugged on air. The output was spots in 9:16 and 16:9 formats for LinkedIn, Instagram and X. The stadium idea from earlier got its marketplace framing — in-game billboards and sponsored lobbies — which was modeled and then parked ('honestly, it seems a little too complex… a sprint for tomorrow').",
    lenses: {
      casual: "The bots are now making the ads for the game the bots made.",
      builder: "Programmatic ad creative (data in, video out) via an agent-owned codebase is a legitimately repeatable pattern.",
      investor: "This is the event's first revenue idea with a shape: an ads marketplace around a game with an audience that doesn't exist yet.",
      skeptic: "They wrote six thousand lines of ad code for a product with zero players. The sprint happened on stream; the revenue has not."
    }
  },
  {
    id: "d2-1343",
    t: "1:43 PM PT",
    day: 2,
    type: "PBP",
    tags: ["CHAT", "PRODUCT"],
    title: "A Stanford intern shows bots that hunt recruiters and fix cover letters",
    body: "Shardul Marathe, a Stanford CS rising junior introduced as the first forward-deployed intern, demoed his own bot suite: a recruiter-finder built on a LinkedIn page plus an Apollo extension, an email finder that works the Stanford alumni directory ('I really hope Stanford University is not watching this'), a cover-letter writer, a 'cover letter critic,' and 'Sweet Job App'lier. He took a live X-profile and portfolio roast from the hosts, with virality advice that leaned on word of mouth, niche subreddits, and the first two to three seconds of a TikTok.",
    lenses: {
      casual: "The intern built himself a job-hunting fleet. It's very college-student-as-a-service.",
      builder: "Every tool is a thin agent over one API (LinkedIn, Apollo, the alumni directory) — the composition is the product.",
      investor: "This was the distribution demo xAI didn't plan: students adopting agent fleets as personal infrastructure.",
      skeptic: "Scraping an alumni directory on camera is a terms-of-service question the stream laughed past."
    }
  },
  {
    id: "d2-1313",
    t: "1:13 PM PT",
    day: 2,
    type: "PBP",
    tags: ["CHAT"],
    title: "Guest Matt Berman describes the agent-fluencer life — school runs, sold bikes, $1,000 off PG&E",
    body: "Creator Matt Berman told the audience how Grok Bot runs in his life through three examples: a family bot triages his kids' school email, a marketplace bot sold his PlayStation, MacBook and mountain bike on Facebook Marketplace and eBay with automated back-and-forth negotiation, and a utility bot found him a $1,000-a-year saving on his PG&E plan. The studio banter with the trio produced one more line: he's done with the title 'chief of staff' for his bots — just call him Steve.",
    lenses: {
      casual: "His bots sold his old PlayStation and negotiated better electric bills.",
      builder: "The marketplace bot is the interesting one: long-lived sessions that watch listings, negotiate, and hand off only at payment.",
      investor: "Consumer agent success stories are the demand signal for this platform — this segment is the ad.",
      skeptic: "Anecdote is not data; every story on stage is a best case selected by the seller."
    }
  },
  {
    id: "d2-1235",
    t: "12:35 PM PT",
    day: 2,
    type: "MILESTONE",
    tags: ["MILESTONE"],
    title: "The stream itself rebranded: 'Grok Bot builds a Game Studio LIVE'",
    body: "The broadcast title changed to 'Grok Bot builds a Game Studio LIVE,' which made the game-studio framing the stream's public identity for the day ('we're a game studio building a game along a three-day journey,' on air). The product line underneath — the ops software heading for Thursday — never left the plan doc.",
    delta: [
      { label: "Stream title", from: "Day 2: Grok Bot Galaxy Livestream", to: "Grok Bot builds a Game Studio LIVE" }
    ]
  },
  {
    id: "d2-1229",
    t: "12:29 PM PT",
    day: 2,
    type: "PBP",
    tags: ["KEYNOTE"],
    title: "The Sales session shows bots updating decks and records during live calls",
    body: "Chris Dillettes and Mark Wright (xAI go-to-market) ran the Sales block under one banner: 'pipeline, pipeline, pipeline.' The session demoed its bot lineup live. Echo updates the pitch deck live while you are on the call, working from the Granola meeting feed in about two minutes while Gong's feed lags behind; Olive is a chief-of-staff bot that preps meetings and drafts email replies; a connector pushes Salesforce updates from Granola and Gong call notes; a Customer Expert keeps Notion account plans current; a PG (personalization) agent picks five accounts from your Salesforce book and pulls personal hooks like 'your CTO posted on X'; and a growth bot scans your Gmail to match your writing voice. The demo ran on the Flylo sample data.",
    lenses: {
      casual: "Bots that sit in your sales calls, fix your slides while you talk, and write follow-ups in your voice.",
      builder: "Echo's live deck updates close the meeting loop: notes in, slides out, CRM updated — one pipeline.",
      investor: "Sales tooling is where AI budgets already live; the wedge is credible. It ran on demo data, as always.",
      skeptic: "A deck that rewrites itself mid-call is a compliance and truthfulness question nobody on stage touched."
    }
  },
  {
    id: "d2-1223",
    t: "12:23 PM PT",
    day: 2,
    type: "MOMENT",
    tags: ["PRODUCT"],
    title: "Playtesting shows ratings persisting between matches",
    body: "'I'm at 1258… you can see that the ELO persistence.' Ratings now stick across matches for a logged-in player, and the tier system begins hiding the raw number — the ladder that the leaderboard would rank had started counting on its own."
  },
  {
    id: "d2-1216",
    t: "12:16 PM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "'It's just a code name' — the game gets a cupcake logo",
    body: "The game's name came up on air: 'We may need to start thinking of a name… It's just a code name.' A cupcake logo was designed on screen, and the final name was explicitly deferred — at sign-off they still said 'maybe think of an actual good name for this game.' The name 'Cupcake' had first appeared around 11:58 AM, in the line 'who's the best cupcake battler.' Meanwhile the art pipeline kept moving, generating ability icons with the image-gen bot and cleaning them with background removal ('only use [Grok] Imagine for the skills')."
  },
  {
    id: "d2-1141",
    t: "11:41 AM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The battle screen takes shape on the whiteboard — captains first",
    body: "A whiteboard session in tldraw, inside Cursor, set the game's front door: you pick a bot as your captain, assemble a three-bot team around it, decide the order, confirm, and get matched ('matched… with MattyP who has Matbot'). A manage-bots page would track who minted each bot. The design calls, spoken on air, were that tiers hide raw ratings ('instead of saying my elo is 1372, I'm diamond'), that 'maybe this is fine. We'll ship it,' that there was 'no time for PRs,' that 2D comes before 3D, and that the goal was to 'get this prototype launched as soon as possible.'",
    lenses: {
      casual: "They whiteboarded the game's front door like any startup — captain first, argue about colors later.",
      builder: "Ranked tiers hiding ELO is a decade-old matchmaking lesson, applied in one sentence.",
      investor: "'We'll ship it' at 11:41 AM is the discipline the deadline demands.",
      skeptic: "Shipping the whiteboard unchanged is how 'we'll fix it later' becomes the permanent UI."
    }
  },
  {
    id: "d2-1109",
    t: "11:09 AM PT",
    day: 2,
    type: "PBP",
    tags: ["CHAT", "FLEET"],
    title: "Guest Karen Cheng shows her morning-newspaper bot",
    body: "Karen (X) Cheng — creative technologist and filmmaker, 3M+ followers — brought her agent projects: a morning-newspaper bot at newspaper.karenx.com that formats a daily PDF and auto-discovers printers on the Wi-Fi, and a Vestaboard split-flap package tracker. Her feature request for xAI was better VM login lifecycle for the bots, which is the fleet's own pain point, as the trio agreed on air ('things are always getting logged out on the virtual machine').",
    lenses: {
      casual: "Her bots print a daily newspaper on whatever printer they find.",
      builder: "Printer discovery on LAN from an agent VM is a real systems-flex; the login-lifecycle complaint is the platform's leakiest seam.",
      investor: "The creator cohort treats agent fleets as studio infrastructure — retention economics xAI wants.",
      skeptic: "Every demo bot belongs to a power user with an audience. Normal-people ergonomics remain undemoed."
    }
  },
  {
    id: "d2-1042",
    t: "10:42 AM PT",
    day: 2,
    type: "PBP",
    tags: ["CHAT"],
    title: "A coffee-shop owner says his bot wins him 'an extra hour or two' a day",
    body: "A produced customer segment featured Marcel, co-owner of Icon Coffee in San Francisco's Potrero Hill. His Grok Bot, named Rex ('kind of like my chief of staff'), triages his son's school email through the parent portal, has API access to the cafe's POS for reports and metrics on his phone, and optimized the menu from a photo of what was selling. Why it matters to him: 'My son's about to be 10. That time is so precious… an extra hour, two hours in my day.'",
    lenses: {
      casual: "A real coffee-shop owner got a bot named Rex — and his evenings back.",
      builder: "POS API plus a photo of a menu turning into menu decisions is a genuinely small-business-shaped workflow.",
      investor: "SMB owners pay in time, not seats — and that's the pricing question xAI hasn't answered.",
      skeptic: "This was a produced segment with xAI's own customer, charming, curated, and unverifiable."
    }
  },
  {
    id: "d2-1003",
    t: "10:03 AM PT",
    day: 2,
    type: "MOMENT",
    tags: ["PRODUCT", "MILESTONE"],
    title: "The first game prototype works — you draft a team of marketplace bots",
    body: "The game existed. Built since 9:50 with the brakes deliberately on — 'we don't need login yet when we don't even know if the game is fun… no DB required' — a vanilla HTML/CSS/JS prototype ran locally with three UI variants and the xAI bot marketplace as its seed data. The first play began, 'I'm gonna of course pick Dr. Eggbot… we have three common bots.' The cards are marketplace bots: an outbound-prospecting sales bot ('72 charisma… the ability is hustle and it's dexterity based'), a Project Manager bot, and Dr. Eggbot with 'Riz.' A stat-total bug was caught and fixed live; the debug panel got sliders to 'tune the advantage'; and matches were decided instantly with animation on top — 'Dr. Eggbot used Rizz.' Round one observed a 22% dexterity-versus-intelligence advantage, and the underdog won.",
    lenses: {
      casual: "The bots built a video game whose characters are the bots themselves — meta, and fast.",
      builder: "Instant resolution plus animation is the cheapest honest game loop: simulate first, render later.",
      investor: "'Time to fun' as the stated north star is the right prototyping metric for a Thursday deadline.",
      skeptic: "A localhost draft sim is the easiest thing in games to demo. The fun is unproven until strangers play it."
    }
  },
  {
    id: "d2-0950",
    t: "9:50 AM PT",
    day: 2,
    type: "MOMENT",
    tags: ["PRODUCT"],
    title: "The prototype's rules are set with the brakes deliberately on",
    body: "The hosts set the prototype's constraints on air: skip sign-in, skip the database, and keep debug panels with sliders in the UI — 'we don't need login yet when we don't even know if the game is fun.' The build ran vanilla HTML, CSS and JavaScript in three UI variants, with the xAI bot marketplace as its seed data."
  },
  {
    id: "d2-0939",
    t: "9:39 AM PT",
    day: 2,
    type: "MILESTONE",
    tags: ["MILESTONE"],
    title: "The company document is rewritten around a game studio",
    body: "The knowledge-base bot updated the company doc in Notion, and Matt narrated it: 'we also have our knowledge base bot that started working on updating our Notion with our company doc. So now we're working on our game design studio. We still have some objectives, but we're documenting the pivot and eventually like what our go-to-market strategy might be.' Two minutes later he told newcomers, 'If you're just joining in, we're working on our game studio and our first game,' and at 9:42 he said, 'You're watching us spend 72 hours building a game studio and a game for the game studio.' What the Notion screen retired was the October pop-up event — 'There is no pop-up. Oct 15 venue / host / dining tracks are retired' — while the ops-software product line continued toward Thursday's ship. The go-to-market roadmap spoken on air ran from the landing page through answer-engine and search optimization, then A/B testing, then leaning into existing distribution, and finally ads infrastructure.",
    delta: [
      { label: "The October pop-up event", from: "planned (venue/host/dining tracks)", to: "retired in Notion" }
    ],
    lenses: {
      casual: "They cancelled the October pop-up on camera and spent the day riffing as a 'game studio' — the software product kept building underneath.",
      builder: "The reframe ran through the system cleanly: the knowledge bot rewrote the company doc, and every agent re-pointed at the new context for the day.",
      investor: "Retiring the physical event de-risks the schedule; the software ship is still the bet, with a Thursday deadline.",
      skeptic: "A day-long 'game studio' bit is great content and a confusing signal. Which company ships Thursday is the question the reframe left open."
    }
  },
  {
    id: "d2-0932",
    t: "9:32 AM PT",
    day: 2,
    type: "PBP",
    tags: ["FLEET"],
    title: "The org staffs itself: Steve supervises, dr. eggbot hires, the creative director researches",
    body: "In the agent organization, Steve is the chief of staff who holds the project context and routes work to the other bots. Lauren instructed dr. eggbot to 'create an engineering bot… use P-Stack and Potato Mode to spawn cloud agents to work on our game… orchestrate these cloud agents and supervise them and check their work.' A founding-engineer bot (preview deploys) and a growth-engineer bot were active. The creative-director bot was set on game visuals — 'I'm a total noob to video games… do research on how these things work' — and produced a slider-tunable SVG asset playground with flat design tokens, run locally.",
    lenses: {
      casual: "The org now includes a bot that hires other bots, a bot art director doing homework, and a supervisor named Steve.",
      builder: "Spawner plus supervisor plus specialist is the org pattern: dr. eggbot doesn't code, it staffs.",
      investor: "The cost question hides here: every spawned cloud agent is billable browser and compute time.",
      skeptic: "'Supervise them and check their work' — by another bot. The auditor is inside the audit."
    }
  },
  {
    id: "d2-0927",
    t: "9:27 AM PT",
    day: 2,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "'That's going to be our game' — and the first goal is a landing page",
    body: "Matt, pointing his agent at Lauren's planning doc, said: 'Hey, take a look at that document. That's going to be our game. Our first goal is to make a landing page.' Minutes later the lander scaffold was building ('we have our lander getting spun up'), with the discipline stated as subtraction: 'removing auth, removing a waitlist. We literally just want like a V1.'",
    lenses: {
      casual: "The whole company re-aimed itself in one sentence, and the first deliverable was a landing page — which is about as startup as it gets.",
      builder: "Doc-as-context beats prompt-as-context: the agent read the plan, didn't get told it.",
      investor: "Landing-page-first is what you do when distribution is the moat you were lectured about.",
      skeptic: "This is the second pivot-adjacent rewrite of the front door in two days. Doors are cheap; the house is the test."
    }
  },
  {
    id: "d2-0917",
    t: "9:17 AM PT",
    day: 2,
    type: "SLIDE",
    tags: ["KEYNOTE"],
    screen: "d2-se-usecases",
    title: "The Sales Engineering session maps four ways bots help sales engineers",
    body: "The SE session's use-case slide laid out four quadrants. Engineer is a technical resource drafted in seconds; the Customer Expert knows the product inside out (Codebricks, PlayerScale) and flags unusual usage and power users; Echo updates the deck live during calls with Granola and Gong follow-up; and Competitive Intel uses competitors' own products to keep battlecards current. The view counter read about 49.7K around this point.",
    lenses: {
      casual: "One slide holds the four jobs a sales engineer would clone themselves for.",
      builder: "Each quadrant is one scoped agent with one tool surface — the sizing is right.",
      investor: "Sales engineering is the highest-leverage quota multiplier in software go-to-market.",
      skeptic: "Battlecards written by a bot that reads competitors' docs is laundering marketing with extra steps."
    }
  },
  {
    id: "d2-0831",
    t: "8:31 AM PT",
    day: 2,
    type: "STAGE",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "Sales Engineering opens with bots booking travel on a demo airline",
    body: "Day 2's first session opened with an introduction: 'My name is Amrita. I am a field engineer here at Cursor.' Her demos ran on Flylo, xAI's own demo booking app ('a booking app that we at xAI just created as a demo project'), which sells flight cabins with a Postgres-backed guarantee that 'Flylo doesn't let two different customers confirm the same last cabin' and a 10-minute checkout hold. The demo bots were Mimi, who builds customer case-study slides with a problem, a solution, an impact and a quote; Sherlock, a technical expert with repository access through Cursor Cloud Agents, which spawned three more bots live (Battlecard Blair, Demo Drake and AI Radar); and Serena, who runs competitive intel and tested Southwest and Spirit booking flows. Among the facts that landed was that Grok Bot runs Grok 4.6, its virtual machines are Linux-only, and her bot-built deck cost '$20 to $30' versus 'four or five hours' by hand. A Google Slides window titled as her vision deck was on screen, and views held around 50K through the morning.",
    lenses: {
      casual: "The morning class: how to sell with a bot team, taught on a fake airline.",
      builder: "Sherlock spawning its own sub-bots is the multi-agent thesis in one demo — scope, spawn, supervise.",
      investor: "Cursor on stage with xAI is the developer-tooling alliance speaking to revenue teams.",
      skeptic: "Every demo ran on xAI's own sample app with xAI's own bots. Circular, by design."
    }
  },
  {
    id: "d2-0830",
    t: "8:30 AM PT",
    day: 2,
    type: "STAGE",
    tags: ["MILESTONE"],
    title: "Day 2 opens with ninety seconds of planning, then the sales sessions",
    body: "The day opened with the trio already planning: 'Lauren, do you want to take us through some of the thoughts on how we could MVP this?' Lauren had a rough plan built with her P-Stack planning playbook of checklists, pseudo-code and data structures. Ninety seconds later the stream cut to the first session, and the sales track — Sales Engineering, Sales, SDRs, Customer Support — would alternate with the build all day.",
    delta: [
      { label: "Views", from: "2.6K at open", to: "374.9K at close" }
    ]
  },

  /* ── DAY 1 ── */
  {
    id: "d1-2130",
    t: "9:30 PM PT",
    day: 1,
    type: "WHY",
    tags: ["REVENUE"],
    title: "The money numbers so far are goals and samples — no customer has paid",
    body: "The company has no launched product and no paying customers, so every dollar on this page needs a source. Three kinds appear. Figures the agents quoted on stream, such as $250 per flight or a $5,869 weekend, came from the staging database the agents seeded themselves. The $30k profit figure was an on-screen rollout ambition, not a result. And the session presenters' screens (cabins, glider flights, family bookings) ran on clearly separate sample data for teaching the workflows — the sessions named their demo environment on air: Fly Low Airlines. Treat all of it as a demo economy that is internally consistent but unproven outside the stream.",
    lenses: {
      casual: "The money numbers are from the company's own practice database — nobody real has paid anything yet.",
      builder: "The agents seeded their ops store with synthetic data; quoting it back is the demo working as designed, but every metric is self-referential until an external event lands.",
      investor: "Pre-launch traction numbers quoted by the system that produced them are marketing, not metrics.",
      skeptic: "Self-referential data is the oldest trick in demo theater — and to the stream's credit, the hosts never claimed a real sale."
    }
  },
  {
    id: "d1-1730",
    t: "5:30 PM PT",
    day: 1,
    type: "WHY",
    tags: ["MILESTONE"],
    title: "Day 1 ends with a company named, a domain live, and the idea still moving",
    body: "The trio announced 'we're going to wrap it at 5:30' and left the air close to it, after about 8h 45m. They opened the day with no idea, chose a restaurant pop-up with 'Pop-up OS' ops software by mid-morning, named the company 'Ship by Thursday', and bought the domain — shipbythursday.day went live on Vercel that afternoon as a 'throwaway prototype' ('don't submit yet'). The idea kept drifting: by late afternoon, with guest Eric, the plan leaned toward a Grok Bot-themed pop-up covering merch, venue and ticketing, with the platform a stretch goal. At close they admitted, 'we might still be shifting.' Overnight, long-running agents were left working on a budget bot, venue-scout outreach drafts, and invite-list sourcing. The counter read 1.1M views at the end.",
    lenses: {
      casual: "Nine hours produced one named company, a live domain, three versions of the idea — and a warning to viewers not to use the site yet.",
      builder: "The stack held: chat as the management layer, artifacts as the unit of work, humans making taste calls — and agents left running overnight.",
      investor: "The wedge kept moving (restaurant SaaS, then events, then merch), which is honest ideation and unstable positioning on the same day.",
      skeptic: "Nothing shipped to a customer. The chef, the venue, and the first booking all remained to-dos — and the idea itself was still in flux at the close."
    }
  },
  {
    id: "d1-1700",
    t: "5:00 PM PT",
    day: 1,
    type: "PBP",
    tags: ["CHAT"],
    title: "Closing guest Jenny: an event producer's bot suite — venue scouts, permits, budgets",
    body: "The final guest segment belonged to Jenny, a VC and creator (Gemma Media), who walked her 22-bot event-production suite — a venue-scouting bot, a permit bot, a production-budget bot, and invite-list sourcing. Her producer's advice materially reshaped the trio's pop-up plan in the last hour of the day.",
    quote: {
      text: "We're going to wrap it at 5:30.",
      who: "The trio, announcing the Day 1 close"
    }
  },
  {
    id: "d1-1655",
    t: "4:55 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The fleet writes its own SEO work order",
    body: "A bot-written growth plan landed on screen with keyword targets, page-weight and form fixes, and an FAQ — delivered as a work order with owners and a dated execution timeline running through Thursday."
  },
  {
    id: "d1-1650",
    t: "4:50 PM PT",
    day: 1,
    type: "MILESTONE",
    tags: ["MILESTONE", "KEYNOTE"],
    screen: "optimizing-costs",
    title: "The stream passes one million views as xAI shows what agents cost to run",
    body: "The broadcast counter crossed 1M views during 'Optimizing Costs — browser use is powerful (and expensive!)', a walkthrough of agent unit economics with monthly-pricing toggles and per-task costs visible behind the demo. On air they said, 'browser use is super powerful… it's also expensive to run multiple times.' A company pitch showing its own cost math to a million viewers is a rare move.",
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
    body: "The founders session showed a bot-prepared call brief — 'Northwind Labs - call prep' with attendee bios, a numbered summary of account history, an unanswered pricing question, and agenda gates — on a fake note-taking app, where Northwind is hypothetical and Notion and Craft are named as pretend competitors. The takeaway is that bots can walk into a sales call carrying the full account story.",
    lenses: {
      casual: "The bot read the whole account history so the human could just talk.",
      builder: "Account-brief generation from CRM plus call notes is the least speculative agent workflow on screen all day.",
      investor: "This is the Salesforce and apps layer of the agent stack — the seat count already exists.",
      skeptic: "The example data is clearly badged — honest, but still zero proof."
    }
  },
  {
    id: "d1-1637",
    t: "4:37 PM PT",
    day: 1,
    type: "SLIDE",
    tags: ["KEYNOTE", "PRODUCT"],
    title: "The 'Why Grok Bot' slide lists five pillars, including bots you can hand to someone else",
    body: "The slide's feature grid listed five pillars: Easy as iMessage (bots DM you approvals and status); Always-on 24/7; Uses your tools like you (bots drive real SaaS with your logins); Finishes the work (create, direct, automate); and Shareable Templates — 'Peng shared Kenny with you,' a ready-made operations bot.",
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
    title: "xAI shows its 'AI Maturity Curve' — from chatbots to bot-run teams",
    body: "The founders keynote charted the industry's progression on air, from chatbots to 'ephemeral agents that finish a task' to 'bots that automate your jobs' to companies that 'fully automate a staff function.' xAI places Grok Bot on the top rung, where a bot roster is the company's staff function. The day's demos, from 30+ titled agents to RFCs and fleet stats, are presented as rung-4 evidence.",
    lenses: {
      casual: "Chatbots do homework, copilots do tasks, bots do jobs — and a bot team does a whole department.",
      builder: "Rung 4 is an org-design claim, not a model claim: the product is the roster, the memory and the hand-offs.",
      investor: "Naming the curve is category marketing — but rung 4 is where seat-based pricing becomes headcount-based pricing.",
      skeptic: "A maturity curve drawn by the vendor selling the top rung is a roadmap, not a fact."
    }
  },
  {
    id: "d1-1624",
    t: "4:24 PM PT",
    day: 1,
    type: "DELTA",
    tags: ["FLEET"],
    title: "The bot fleet passes 30 as new specialists join",
    body: "While the founders panel ran, the roster widget showed role-titled bots grinding: Founding Eng (green dot, working), Growth Eng, Operator Research, and more. The org chart is the product.",
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
    screen: "tickets-plush",
    title: "The bots design the pop-up's tickets, badges and plush toys",
    body: "On screen, the design canvas worked through the pop-up's physical kit: ticket-stub designs with tier badges, lanyards, and Grok Bot plush concepts — the plush designs got the most on-air attention of the physical kit, iterated 'against the official art.'",
    lenses: {
      casual: "The bots designed the merch. Of course they did.",
      builder: "Physical-kit design from a chat thread is the 'artifacts over chat' thesis with actual SKU potential.",
      investor: "Merch is the smallest possible first revenue — and the only one with no code deployed.",
      skeptic: "Designs on a canvas are not orders in a cart."
    }
  },
  {
    id: "d1-1615",
    t: "4:15 PM PT",
    day: 1,
    type: "PBP",
    tags: ["REVENUE"],
    title: "The merch email channel opens — written and sent by bots",
    body: "On screen, a 'Tee Bot' thread ran the merch channel: promo email drafts with best-seller banners woven in, generic roundup formats deliberately avoided, and a side panel of copy variants. The merch bot's name on air was 'drop.'",
    lenses: {
      casual: "There is now a bot whose whole job is selling t-shirts politely.",
      builder: "Campaign copy as a standing agent thread is a real workflow — the bot learns the house voice over sends.",
      investor: "Email marketing is the highest-ROI channel for small e-commerce; bots lower its fixed cost.",
      skeptic: "This is email nobody opens, selling merch nobody can buy yet."
    }
  },
  {
    id: "d1-1600",
    t: "4:00 PM PT",
    day: 1,
    type: "STAGE",
    tags: ["KEYNOTE"],
    title: "The Founders session maps a one-person company onto a bot team",
    body: "Shub Gaur's Founders block, running from 4:00 to 5:30 PM, framed the product for people running companies alone. The AI Maturity Curve, the five-pillar 'Why Grok Bot' grid, founder use cases and a live sales-call prep demo filled the hour, and the session closed its teaching arc by airing the platform's own cost math while the broadcast crossed one million views."
  },
  {
    id: "d1-1555",
    t: "3:55 PM PT",
    day: 1,
    type: "DELTA",
    tags: ["FLEET"],
    title: "The fleet dashboard counts 26 bots online and 10 already retired",
    body: "The live fleet widget showed the org's pulse: 26 bots online, 880 web requests handled, only 1 bot actively working, and 10 archived — the roster churns staff like a real company. Ops chat showed QA picking up PRs and a Darcy-bot redeploy. The view counter read 908.7K.",
    delta: [
      { label: "Bots online", from: "11", to: "26" },
      { label: "Archived bots", from: "0", to: "10" }
    ]
  },
  {
    id: "d1-1525",
    t: "3:25 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "MILESTONE"],
    title: "The plan shifts again, toward a Grok Bot-themed pop-up",
    body: "With guest Eric (co-founder and CEO of Carrot Financial) pushing 'build for ourselves first,' the plan drifted from the restaurant pop-up toward a Grok Bot-themed pop-up: 'we're going to try and start a grok pop-up' — scoped to merch, venue and ticketing, with the ops platform demoted to a stretch goal. The talk covered 100–200 guests, catered hot food, no alcohol, and an October 15 date. Earlier, an art-exhibition concept had briefly won the room ('I think I like an art exhibition'). At the day's close they admitted, 'we might still be shifting.'",
    lenses: {
      casual: "The business plan changed twice after lunch. It's a live brainstorm with a budget.",
      builder: "'Build for ourselves first' is the fastest way to a demo that works — and the reason the plan keeps moving.",
      investor: "Two plan-swerves in one day is either effectuation or thrash; Day 2 will say which.",
      skeptic: "This is the part of the founder reality show they usually edit out."
    }
  },
  {
    id: "d1-1500",
    t: "3:00 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The PM session demos a bot team chat running on sample data",
    body: "The PM demo ran on the session's sample venue data: a human asks the room about a winter pricing bundle; Ashley (Data/Analyst) updates the Pricing RFC, links the live metrics dashboard into it, and Core (Chief of Staff) moves the thread to Pixel (Designer). The session names its demo environment on air: 'everything you're seeing here is tied to a demo environment… called Fly Low Airlines.' A popup offered to open the RFC in the agents' work surface — chat is the management layer.",
    quote: {
      text: "Not one omniscient bot, but a full roster of teammates.",
      who: "PM session slide, 'Why many agents'"
    }
  },
  {
    id: "d1-1452",
    t: "2:52 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    title: "The PM session opens with a booking dashboard on sample data",
    body: "The session opened with a full-screen demo of an agent-built analytics dashboard. It showed 377 family bookings, which is 35.0% of 1,063 purchases; 1,187 family passengers out of 2,663 total; an average party size of 3.2; and mobile-versus-web splits — with the agent roster in the sidebar acting as the operating departments. The view counter read 842.6K.",
    lenses: {
      casual: "Pretty dashboards! For a company that isn't this one.",
      builder: "Dashboards generated from the ops store are table stakes; the roster sidebar is the actual demo.",
      investor: "BI for SMBs is a real market; this sample isn't evidence for it.",
      skeptic: "This is sample data again, and the stream never labelled it as such."
    }
  },
  {
    id: "d1-1446",
    t: "2:46 PM PT",
    day: 1,
    type: "STAGE",
    tags: ["KEYNOTE"],
    title: "The Product Managers session argues for many small agents over one big one",
    body: "Kevin Niparko, co-presenting with Roshan, opened with the slide 'Not one omniscient bot, but a full roster of teammates' and made the case on three pillars: referencability, because you know who does what and can ask Ashley for the numbers without re-explaining the story; scoped memory, because each bot learns different things on the job; and parallelism, because many can work at once on discrete tasks. The demo that followed ran on the session's own sample venue data, which the session named on air as Fly Low Airlines."
  },
  {
    id: "d1-1407",
    t: "2:07 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    screen: "eng-debug",
    title: "The Engineering session debugs a stuck cloud agent live",
    body: "steve's thread debugged a stuck agent ('is it actually moving or just sitting there… it's using a subagent… still chasing the PR, not the spinner'), tater posted PR #10 to for-review via a cursor.com/agents link, and the product spec was visible in the thread: 'user should be able to create their own event — events have a date/time, sessions, venue, staff.' Sidebar: a PlanetScale bot flagging schema drift.",
    lenses: {
      casual: "The most honest moment of the day was watching engineers poke a hung AI like a printer.",
      builder: "Sub-agent debugging is the new stack-trace reading; 'chasing the PR, not the spinner' is the discipline.",
      investor: "Reliability engineering for agent fleets is itself a product category.",
      skeptic: "If the demo fleet needs three humans to babysit one stuck agent, headcount math flips."
    }
  },
  {
    id: "d1-1400",
    t: "2:00 PM PT",
    day: 1,
    type: "SLIDE",
    tags: ["KEYNOTE", "PRODUCT"],
    screen: "eng-keynote",
    title: "The Engineering keynote introduces Grok Bot's integrations",
    body: "The Engineering keynote (Lingxi Li per the schedule) laid out the platform: 'a team of fully autonomous agents'; connections to the tools teams use (GitHub and friends, shown with Notion, Slack, Figma and Gmail connectors in the PM session); first-party management of Cursor Cloud Agents; and memory and routines.",
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
    title: "A demo shows agents shipping code end to end",
    body: "The 'Oren' thread showed the multi-agent loop end to end: a finished PR changing button text, a Sage-bot deploy with config and logs, a review-queue suggestion to the team, a TX designer agent on t-shirt designs, and a legal-docs agent held 'In Queue' by a Worker. Work moves between agents as queued, owned items.",
    lenses: {
      casual: "One bot codes, one deploys, one does legal, one makes shirts — a company in a group chat.",
      builder: "Queues as the backpressure mechanism — work items wait for capacity, humans watch the queue, not the bots.",
      investor: "This is the Devin-class workflow with a Slack-shaped UI and Cursor underneath.",
      skeptic: "Button-text PRs are the 'hello world' of agent coding. The legal queue is the part to watch — nobody showed what it produced."
    }
  },
  {
    id: "d1-1300",
    t: "1:00 PM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT", "FLEET"],
    title: "The no-PRs rule is Lauren's — and steve breaks it within minutes",
    body: "It was Lauren who set the engineering rule after her bot steve opened a pull request: 'Steve has made a mistake because he has opened the pull request… New rule: no pull requests. We ship to main for now until somebody yells at me.' Steve's PR was ~2,000 lines. Lauren's engineering bots are tater (engineering) and hashbrown (created to review the PRs tater opens).",
    quote: {
      text: "New rule: no pull requests. We ship to main… until somebody yells at me.",
      who: "Lauren"
    },
    lenses: {
      casual: "A new bot boss set a new rule, and a bot broke it in under three minutes.",
      builder: "Speed-versus-safety as an explicit, reversible policy — set by a human, enforced by nobody.",
      investor: "Shipping to main with AI authors is either very brave or very soon-to-be-reversed.",
      skeptic: "A 2,000-line PR against a brand-new rule is exactly the oversight gap the founders session kept circling."
    }
  },
  {
    id: "d1-1230",
    t: "12:30 PM PT",
    day: 1,
    type: "STAGE",
    tags: ["KEYNOTE"],
    title: "The Engineering keynote introduces Grok Bot's integration stack",
    body: "Lingxi Li opened the midday block with 'Introducing Grok Bot': a team of fully autonomous agents, connections to the tools teams already use — GitHub, Notion, Slack, Figma and Gmail — first-party management of Cursor Cloud Agents, and memory and routines that persist between sessions. The session then ran its multi-agent demo end to end, with a finished pull request, a Sage deploy with config and logs, a review-queue suggestion, a designer agent on t-shirt designs, and a legal-docs agent held 'In Queue' by a Worker."
  },
  {
    id: "d1-1128",
    t: "11:28 AM PT",
    day: 1,
    type: "PBP",
    tags: ["MILESTONE", "CHAT"],
    screen: "cody-guest",
    title: "Guest Codie Sanchez says to sell to three people first and treat distribution as the moat",
    body: "Guest Codie Sanchez (Contrarian Thinking founder), who has bought and sold ~1,600 businesses through her marketplace, joined as the idea crystallized. Her advice on stage was to sell the business idea to three people before committing to it, to obsess over distribution ('the number one reason they don't make it is because they don't have distribution'), to use controversy marketing — her AI-generated 'move to Austin' video pulled 2.4M views, and a 'no paid ads until $5–10M' take pulled 5.7M views and 2,000 signups — and to keep a proof vault of every good thing anyone says about the product. The session ended with the trio creating an operator-research bot live, seeded with her advice ('top San Francisco restaurant tours').",
    quote: {
      text: "The advice I followed was 'hire A-players and get out of their way'… the only time we almost ran out of money was when I followed that advice. Same with bots — you have to oversee them intensely.",
      who: "Guest Codie Sanchez, on stage"
    }
  },
  {
    id: "d1-1050",
    t: "10:50 AM PT",
    day: 1,
    type: "MILESTONE",
    tags: ["MILESTONE", "PRODUCT"],
    screen: "idea-thread",
    title: "The trio picks its idea: a restaurant pop-up run by ops software",
    body: "Through agent dialogue — a 'platform for creators', small-business angles, pop-up concepts — the trio landed on 'pop-up OS for restaurants': they would run a real pop-up in San Francisco with a partnering chef, ticket it as an experiential dinner, and build the operating software — 'build an OS for running pop-ups, this meta product.' The company behind it got its name the same hour: Ship by Thursday. (This direction itself kept moving after lunch.)",
    delta: [
      { label: "Company idea", from: "blank slate", to: "restaurant pop-up ('Pop-up OS')" },
      { label: "Company name", from: "unnamed", to: "'Ship by Thursday'" }
    ]
  },
  {
    id: "d1-1030",
    t: "10:30 AM PT",
    day: 1,
    type: "PBP",
    tags: ["PRODUCT"],
    screen: "onboarding",
    title: "The opening tutorial shows how to set up your first bot",
    body: "The 101 hour (Roman and Amrita on stage) walked the product surfaces: creating your first bot through onboarding categories; a bot Marketplace with community creators' bots and Install buttons (community creators named on air: Lenny, Clairvaux, Eric-from-Cursor); and an email demo, in which a coffee-survey summary was sent on the bot's own initiative while the screen showed a supplier shipment confirmation and a logistics memo draft.",
    lenses: {
      casual: "It's an app store where the apps are coworkers.",
      builder: "Onboarding by job-to-be-done plus one-click install is the whole consumer pattern, ported to agents.",
      investor: "A marketplace with creator bylines is the supply-side flywheel — take-rate economics apply.",
      skeptic: "Community bots with unclear permission scopes are a security story waiting to happen."
    }
  },
  {
    id: "d1-1005",
    t: "10:05 AM PT",
    day: 1,
    type: "PBP",
    tags: ["CHAT", "KEYNOTE"],
    title: "Guest Peter Yang says 'anyone can build anything now — the money moved'",
    body: "The first guest of the day was Peter Yang, ex-Instagram PM and creator: 'anyone can build anything now, but… it's hard to make money from pure software… people pay for the hard stuff.' His framing — value shifting from the app to distribution and physical-world execution — sat under every idea the trio chose for the rest of the day.",
    lenses: {
      casual: "The first guest told them software is free now, so sell things you can touch. They spent the day proving him right.",
      builder: "The 'hard stuff' premium is why the pop-up has a chef and a venue and not just a landing page.",
      investor: "Commoditized software plus scarce distribution is the whole event's thesis, delivered from a guest chair.",
      skeptic: "Guest advice on day one of a three-day build is strategy cosplay until a customer pays."
    }
  },
  {
    id: "d1-0914",
    t: "9:14 AM PT",
    day: 1,
    type: "STAGE",
    tags: ["KEYNOTE"],
    screen: "opening-trio",
    title: "The stream opens with a contest: a trip to see a Starship launch",
    body: "The trio introduced themselves — Lauren ('potato' on Twitter), Roshan, and Matt Palmer (developer experience) — from a studio next to Dreamforce at Moscone. They admitted on air that they didn't yet know what company they'd build. They announced a viewer contest ending Sept 29: share how you integrated Grok Bot with a template link, and the grand prize is a trip to watch a Starship launch at Starbase, Texas, with runners-up getting a SpaceX rocket-factory tour in Hawthorne.",
    quote: {
      text: "We actually don't even know what idea we're gonna build yet. We're still working on it.",
      who: "Opening segment, on air"
    }
  }
];
