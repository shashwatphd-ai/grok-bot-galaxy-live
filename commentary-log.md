# Grok Bot Galaxy — Live Commentary Log

**Event:** xAI's "Grok Bot Galaxy" — 3-day live event (Sept 15–17, 2026), The Howard, San Francisco.
A three-person xAI team livestreams building an entire company from scratch using Grok Bot.
**Sources:** the live broadcasts and their complete transcripts. All times Pacific.
**Day 1 broadcast:** https://x.com/i/broadcasts/1AxRnZbVpjaxl · **Day 2 broadcast:** https://x.com/i/broadcasts/1PKqrNyvmYwGb · **Day 3 broadcast:** https://x.com/i/broadcasts/1YGNrbXEeazGw · **Schedule:** https://x.ai/galaxy

**Day 1 program (as announced):**
- 8:30 AM — Livestream starts
- 9:00–10:00 AM — Grok Bot 101 (Roman Ugarte)
- 12:30–2:00 PM — Grok Bot for Engineering (Lingxi Li)
- 2:30–3:30 PM — Grok Bot for Product Managers (Kevin Niparko)
- 4:00–5:30 PM — Grok Bot for Founders (Shub Gaur)

---

## Day 1 — Tuesday, September 15, 2026

**[9:14 AM PT] — The trio opens with no idea.**
Lauren ("potato" on Twitter), Roshan and Matt Palmer (developer experience), from a studio next to Dreamforce at Moscone. "We actually don't even know what idea we're gonna build yet. We're still working on it." They announce a viewer contest ending Sept 29: share how you integrated Grok Bot with a template link; the grand prize is a trip to watch a Starship launch at Starbase, Texas, with runners-up getting a SpaceX rocket-factory tour in Hawthorne.

**[10:05 AM PT] — First guest: Peter Yang.**
Ex-Instagram PM and creator: "anyone can build anything now, but… it's hard to make money from pure software… people pay for the hard stuff." Value is moving from the app to distribution and physical-world execution — the frame under every idea the trio chooses for the rest of the day.

**[10:30 AM PT] — Grok Bot 101 (Roman and Amrita).**
Creating your first bot through onboarding categories; a bot Marketplace with community creators' bots and Install buttons (Lenny, Clairvaux and Eric-from-Cursor among the creators); and an email demo — a coffee-survey summary the bot writes and sends itself, while the screen shows a supplier shipment confirmation and a logistics memo draft.

**[10:50 AM PT] — The idea locks (for now): a restaurant pop-up — "Pop-up OS."**
Through agent dialogue — a "platform for creators," small-business angles, pop-up concepts — the trio lands on "pop-up OS for restaurants": run a real pop-up in San Francisco with a partnering chef, ticket it as an experiential dinner, and build the operating software — "build an OS for running pop-ups, this meta product." The company gets its name the same hour: **Ship by Thursday**.

**[11:28 AM PT] — Guest Codie Sanchez: sell to three people first.**
Codie Sanchez (Contrarian Thinking founder) has bought and sold ~1,600 businesses through her marketplace. Her advice was to sell the business idea to three people before committing to it, to obsess over distribution ("the number one reason they don't make it is because they don't have distribution"), to use controversy marketing — her AI-generated "move to Austin" video pulled 2.4M views, and a "no paid ads until $5–10M" take pulled 5.7M views and 2,000 signups — and to keep a proof vault of every good thing anyone says about the product. "The advice I followed was 'hire A-players and get out of their way'… the only time we almost ran out of money was when I followed that advice. Same with bots — you have to oversee them intensely." The segment ends with the trio creating an operator-research bot live, seeded with her advice ("top San Francisco restaurant tours").

**[12:30–2:00 PM PT] — Grok Bot for Engineering (Lingxi Li).**
"Introducing Grok Bot": a team of fully autonomous agents; connections to the tools teams use (GitHub, Notion, Slack, Figma, Gmail); first-party management of Cursor Cloud Agents; memory and routines. The multi-agent demo runs end to end: a finished PR changing button text, a Sage-bot deploy with config and logs, a review-queue suggestion, a TX designer agent on t-shirt designs, a legal-docs agent held "In Queue" by a Worker.

**[1:00 PM PT] — The no-PRs rule — broken within minutes.**
After her bot steve opens a pull request, Lauren sets the engineering rule: "Steve has made a mistake because he has opened the pull request… New rule: no pull requests. We ship to main for now until somebody yells at me." Steve's PR is ~2,000 lines. Lauren's engineering bots: tater (engineering) and hashbrown (created to review the PRs tater opens).

**[2:07 PM PT] — Debugging a stuck cloud agent, live.**
steve's thread diagnoses a hung agent — "is it actually moving or just sitting there… it's using a subagent… still chasing the PR, not the spinner" — while tater posts PR #10 to for-review via a cursor.com/agents link. The product spec is visible in the thread: "user should be able to create their own event — events have a date/time, sessions, venue, staff."

**[2:46 PM PT] — PM session opens: "Why many agents."**
Kevin Niparko's slide, tagline: *"Not one omniscient bot, but a full roster of teammates."* Three pillars: **referencability** ("You know who does what. Ask Ashley for the numbers, hand designs to Pixel — without re-explaining the whole story"); **scoped memory** ("they learn different things on the job"); **parallelism** ("many working at once on discrete tasks"). The product thesis in one slide: Grok Bot is a team of named, specialized agents.

**[2:52 PM PT] — The PM session's demo dashboard (sample data).**
Full-screen walkthrough of an agent-built analytics dashboard — 377 family bookings (35.0% of 1,063 purchases), average party size 3.2, mobile/web splits — with the agent roster as the sidebar's operating departments. The session names its demo environment on air: "everything you're seeing here is tied to a demo environment… called Fly Low Airlines." None of it was the trio's company data.

**[3:00 PM PT] — Inside the agents' Slack-style "Bot team" chat.**
The demo continues on the sample venue data: a human asks the room about a winter pricing bundle; Ashley (Data/Analyst) updates the Pricing RFC and links the live metrics dashboard into it; Core (Chief of Staff) moves the thread to Pixel (Designer). A popup offers to open the RFC in the agents' work surface — chat is the management layer; every message bridges into artifacts. The view counter read 842.6K.

**[3:25 PM PT] — The plan shifts toward a Grok Bot-themed pop-up.**
Talking it through with guest Eric of Carrot Financial, who pushed "build for ourselves first," the trio leaned the plan toward a Grok Bot-themed pop-up — merch, venue, ticketing — with the ops-software platform as the stretch goal.

**[3:55 PM PT] — Fleet status: 26 bots, 880 requests, 10 archived.**
The live fleet widget shows the org's pulse: 26 bots online, 880 web requests handled, 10 archived — the roster churns staff like a real company. Ops chat shows QA picking up PRs and a Darcy-bot redeploy. The view counter read 908.7K.

**[4:00–4:42 PM PT] — Founders hour (Shub Gaur).**
- The **AI Maturity Curve** charted the industry's progression, from chatbots to "ephemeral agents that finish a task" to "bots that automate your jobs" to companies that "fully automate a staff function." xAI places Grok Bot on the top rung.
- The **"Why Grok Bot" grid** ran five pillars: bots as easy as iMessage because they DM you approvals and status, always on around the clock, using your tools the way you do, finishing the work rather than suggesting it, and shareable templates — "Peng shared Kenny with you," a ready-made operations bot you can hand to someone else.
- The **founder use cases** ranged from closing customers on autopilot to QA-ing product changes, countering competitors fast and shipping feedback quickly — a one-person company running at 20-person tempo.
- **Sales-call prep ran as a live demo**: a bot-prepared brief on a fake note-taking app ("Northwind Labs" — hypothetical, with Notion and Craft named as pretend competitors), with the bot walking into the call carrying the full account story.
- A build-team member posts in the public X chat: *"They're not just TEAMS of agents. SQUADS of agents."*

**[4:15 PM PT] — The merch email channel opens.**
On screen, a "Tee Bot" thread runs the merch channel: promo email drafts with best-seller banners woven in, generic roundup formats deliberately avoided. The merch bot's name on air: "drop." A $30k profit rollout target appears on screen — a stated ambition, with no sales then or since.

**[4:19 PM PT] — Pop-up supplies designed on screen.**
The design canvas works through the pop-up's physical kit: ticket-stub designs with tier badges, lanyards, and Grok Bot plush concepts — iterated "against the official art."

**[4:20 PM PT] — The company's domain goes live.**
dr. eggbot stands up the lander: shipbythursday.day, live on Vercel and wired to PlanetScale — "the domain is live… I hooked it up to our database" — with viewers told "don't submit yet… throwaway prototype." Eighteen minutes from the wireframe board to a live sign-up page (name, email, password, ZIP).

**[4:24 PM PT] — Fleet crosses 30 bots.**
While the founders panel runs, the roster widget shows role-titled bots grinding: Founding Eng (green dot, working), Growth Eng, Operator Research. The live org chart of bots doubled as the product's own demo.

**[4:50 PM PT] — 🎉 1M views — and the honest-math slide.**
The broadcast counter crosses 1M during "Optimizing Costs — browser use is powerful (and expensive!)": a walkthrough of agent unit economics, with monthly-pricing toggles and per-task costs visible behind the demo. "Browser use is super powerful… it's also expensive to run multiple times." Few companies walk a million viewers through their own cost math.

**[4:55 PM PT] — The SEO work order.**
A structured audit lands in chat: keyword meta/description rewrites, page-weight cuts, accessibility fixes (signup form trimmed to 3 fields), FAQ section, starter content — ending in a dated execution timeline. It reads as a work order the agent team can execute.

**[5:00 PM PT] — Closing guest Jenny: an event producer's bot suite.**
Jenny, a VC and creator (Gemma Media), walks her 22-bot event-production suite — venue-scouting, permits, production budgets, invite-list sourcing. Her producer's advice materially reshapes the pop-up plan in the final hour; overnight agents are commissioned (budget bot, venue-scout outreach drafts, invite-list sourcing).

**[5:30 PM PT] — 🏁 DAY 1 ENDED.**
"We're going to wrap it at 5:30" — and they leave the air close to it, after ~8h 45m. The day's artifact record was a company named and a domain live (pre-launch), an engineering pipeline with a no-PRs rule, ticket and plush designs, a bot-run email channel, and a dated SEO work order. The counter read 1.1M views at the end. At close, the hosts admitted the idea itself was still moving: "we might still be shifting."

**Day 1, in one paragraph.** Day 1 ran from no idea at the open to a named company by the close. The agents proposed and the humans chose a restaurant pop-up with "Pop-up OS" ops software; the company was named Ship by Thursday and its domain went live by late afternoon. The plan then drifted toward a Grok Bot-themed pop-up (merch, venue, ticketing) with the platform as a stretch goal, and the day went off the air near 5:30 PM at 1.1M views with agents left running overnight. The day demonstrated agents operating as parallel staff, artifacts as the unit of work, and humans making taste calls. By the close there was still no public launch and no paying customer, and the event had not yet answered what happens when an agent teammate is wrong.

---

## Day 2 — Wednesday, September 16, 2026

**[8:26 AM PT] — Day 2 opens on a new broadcast.**
Hold screen up; stream starts 8:30 AM PT. The day's track is sales — Sales Engineering at 9:00 (Amrita Venkatraman), Sales at 12:30, SDRs at 2:30 (Simon Lackowski), Customer Support at 4:00 (David Gan) — alternating with the build.

**[8:30 AM PT] — "How could we MVP this?"**
The trio opens already planning: "Lauren, do you want to take us through some of the thoughts on how we could MVP this?" Lauren has a rough plan built with her P-Stack planning playbook — checklists, pseudo-code, data structures. Ninety seconds later the stream cuts to the first session.

**[8:31 AM PT] — Sales Engineering opens: Amrita (Cursor) on the Flylo demo app.**
"My name is Amrita. I am a field engineer here at Cursor." Her demos run on Flylo — xAI's own demo booking app ("a booking app that we at xAI just created as a demo project") — selling flight cabins with a Postgres-backed guarantee that "Flylo doesn't let two different customers confirm the same last cabin" and a 10-minute checkout hold. The demo bots were Mimi, who builds customer case-study slides; Sherlock, a repo expert with access via Cursor Cloud Agents, which spawned three more bots live (Battlecard Blair, Demo Drake and AI Radar); and Serena, who runs competitive intel and tested Southwest and Spirit booking flows. Among the facts that landed: Grok Bot runs Grok 4.6, its virtual machines are Linux-only, and her bot-built deck cost "$20 to $30" versus "four or five hours" by hand.

**[8:36 AM PT] — Day 2 LIVE.** The counter opened the day at 2,649 views.

**[9:17 AM PT] — The SE use-case 2×2.**
The session's slide laid out four quadrants. Engineer is a technical resource drafted in seconds; the Customer Expert knows the product inside out (Codebricks, PlayerScale) and flags unusual usage and power users; Echo updates the deck live during calls with Granola and Gong follow-up; and Competitive Intel uses competitors' own products to keep battlecards current. The view counter read about 49.7K around this point.

**[9:27 AM PT] — "That's going to be our game."**
Matt, pointing his agent at Lauren's planning doc: "Hey, take a look at that document. That's going to be our game. Our first goal is to make a landing page." Minutes later the lander scaffold is building — "we have our lander getting spun up" — with the discipline stated as subtraction: "removing auth, removing a waitlist. We literally just want like a V1." The ops-software product line stays in the plan doc, heading for Thursday.

**[9:32 AM PT] — The org staffs itself.**
Steve is the chief of staff holding project context and routing work; Lauren instructs dr. eggbot to "create an engineering bot… use P-Stack and Potato Mode to spawn cloud agents to work on our game… orchestrate these cloud agents and supervise them and check their work." A founding-engineer bot (preview deploys) and a growth-engineer bot come alive. The creative-director bot is set on game visuals — "I'm a total noob to video games… do research on how these things work" — and produces a slider-tunable SVG asset playground.

**[9:39 AM PT] — The "game design studio" reframing.**
The knowledge-base bot updates the company doc in Notion, and Matt narrates: "we also have our knowledge base bot that started working on updating our Notion with our company doc. So now we're working on our game design studio. We still have some objectives, but we're documenting the pivot and eventually like what our go-to-market strategy might be." Two minutes later he told newcomers, "If you're just joining in, we're working on our game studio and our first game." The Notion screen shows what gets retired: "There is no pop-up. Oct 15 venue / host / dining tracks are retired" — the October pop-up event, not the ops software, which continues toward Thursday. The go-to-market roadmap spoken on air ran from the landing page through answer-engine and search optimization, then A/B testing, then leaning into existing distribution, and finally ads infrastructure.

**[9:50 AM PT] — Prototype rules set.**
The brakes go on deliberately: "we don't need login yet when we don't even know if the game is fun… no DB required." Vanilla HTML/CSS/JS, three UI variants, the xAI bot marketplace as seed data, debug panels with sliders.

**[10:03 AM PT] — First playable draft.**
The game exists. The first play began, "I'm gonna of course pick Dr. Eggbot… we have three common bots." The cards are marketplace bots: an outbound-prospecting sales bot ("72 charisma… the ability is hustle and it's dexterity based"), a Project Manager bot, and Dr. Eggbot with "Riz." A stat-total bug is caught and fixed live; the debug panel gets sliders to "tune the advantage"; matches resolve instantly with animation on top — "Dr. Eggbot used Rizz." Round one observes a 22% dexterity-versus-intelligence advantage, and the underdog wins.

**[10:42 AM PT] — Customer story: Icon Coffee's Rex.**
A produced segment: Marcel, co-owner of Icon Coffee in San Francisco's Potrero Hill. His Grok Bot (named Rex — "kind of like my chief of staff") triages his son's school email through the parent portal, has API access to the cafe's POS for reports and metrics on his phone, and optimized the menu from a photo of what was selling. "My son's about to be 10. That time is so precious… an extra hour, two hours in my day."

**[11:09 AM PT] — Guest Karen Cheng.**
Creative technologist and filmmaker (3M+ followers): a morning-newspaper bot at newspaper.karenx.com that formats a daily PDF and auto-discovers printers on the Wi-Fi, and a Vestaboard split-flap package tracker. Her feature request for xAI — better VM login lifecycle for bots — matches the fleet's own complaint: "things are always getting logged out on the virtual machine."

**[11:41 AM PT] — The battle screen takes shape on the whiteboard.**
A tldraw session inside Cursor sets the game's front door: pick a captain bot, assemble a three-bot team, decide the order, confirm, get matched ("matched… with MattyP who has Matbot"). The design calls, spoken on air, were that tiers hide raw ratings ("instead of saying my elo is 1372, I'm diamond"), that "maybe this is fine. We'll ship it," that there was "no time for PRs," that 2D comes before 3D, and that the goal was to "get this prototype launched as soon as possible."

**[11:58 AM–12:16 PM PT] — The game gets a code name.**
"Who's the best cupcake battler" — and by 12:16 the name is official-ish: "We may need to start thinking of a name… It's just a code name." A cupcake logo is designed on screen; the final name is explicitly deferred ("maybe think of an actual good name" — still open at day's end). The art pipeline keeps moving in parallel: ability icons are generated with the image-gen bot and cleaned with background removal ("only use [Grok] Imagine for the skills").

**[12:23 PM PT] — Playtesting with persistent ratings.**
"I'm at 1258… you can see that the ELO persistence." Ratings stick across matches; the tier system starts hiding them.

**[12:29 PM PT] — Grok Bot for Sales: Chris Dillettes & Mark Wright (go-to-market).**
"Pipeline, pipeline, pipeline." The session demoed its bot lineup live on the Flylo sample data. Echo updates the pitch deck live while you're on the call, working from the Granola meeting feed in about two minutes while Gong's feed lags; Olive is a chief-of-staff bot that preps meetings and drafts email replies; a connector pushes Salesforce updates from Granola and Gong call notes; a Customer Expert keeps Notion account plans current; a PG (personalization) agent picks five accounts and pulls personal hooks like "your CTO posted on X"; and a growth bot scans your Gmail to match your writing voice.

**[12:35 PM PT] — The stream retitles: "Grok Bot builds a Game Studio LIVE."**
The game-studio framing becomes the broadcast's public identity for the day ("we're a game studio building a game along a three-day journey," on air). The product line underneath — the ops software heading for Thursday — never leaves the plan doc.

**[1:13 PM PT] — Guest Matt Berman: the agent-fluencer life.**
A family bot triaging his kids' school email; a marketplace bot that sold his PlayStation, MacBook and mountain bike (Facebook Marketplace and eBay) with automated back-and-forth negotiation; a utility bot that found him a $1,000-a-year saving on his PG&E plan. Studio banter: he's done with the title "chief of staff" for his bots — just call him Steve.

**[1:43 PM PT] — The first "forward-deployed intern."**
Shardul Marathe, a Stanford CS rising junior, demos his own bot suite: a recruiter-finder (LinkedIn page plus an Apollo extension), an email finder working the Stanford alumni directory ("I really hope Stanford University is not watching this"), a cover-letter writer and critic, and "Sweet Job App"lier. The hosts roast his X profile and portfolio live, with virality advice that leans on word of mouth, niche subreddits, and the first two to three seconds of a TikTok.

**[2:05 PM PT] — The ad pipeline: a Remotion bot writes 6,000 lines of Cupcake ads.**
The chief of staff and dr. eggbot onboard "a remotion ads bot for a Cupcake" — an agent that wrote roughly 6,000 lines of code in Remotion, a framework for building video programmatically, across 12 files to generate video ads, with a localhost conflict debugged on air. The output was spots in 9:16 and 16:9 formats for LinkedIn, Instagram and X. The stadium idea gets its marketplace framing — in-game billboards, sponsored lobbies — modeled, then parked ("a little too complex… a sprint for tomorrow").

**[2:30 PM PT] — SDR session: Simon's "soldiers."**
Simon (xAI SDR — Simon Lackowski per the schedule) applies the chief-of-staff pattern to outbound: a swarm of "Simon soldiers" sub-agents working a 50-prospects-a-day routine, demoed on the Flylo account. The pitch in one line: the SDR's job becomes editing the bot's drafts, not writing them.

**[3:10–3:45 PM PT] — Scrappy mode.**
The prototype becomes a Next.js app with a client/server split — "you can just modify the client and cheat," so matchmaking resolves server-side. A global leaderboard appears, though it is not fully wired. The "cupcake board" Notion kanban ("we've made our own little ticketing system") tracks the playtest, the backend, login (built on the auth service Clerk), and a 3D client experiment; a 3D prototyping bot spawns through the Cupcake repo and runs Cursor cloud agents in Potato Mode ("glow 3d" picks the "match and fight" lane). The backend goes to Vercel serverless — "delete all the tests. We'll push it to main… true scrappy mode." Three more things land mid-block: a 1Password integration, a Slack bot named "ping" that all three hosts voice-create on a count of three, and a sound-design bot named "tones." A Cursor Projects demo shows a coordinator agent managing subagents and saying "mashed" for merge.

**[4:00 PM PT] — Customer Support session: David Gan's four-bot support org.**
The session demoed a four-bot support team end to end on xAI's demo airline Flylo, which sells $20-a-month in-flight wifi: build handles infrastructure, reply answers tickets in Plain and Slack, alert flags urgent cases to Slack, and tune improves the system. The stack combined the Plain ticketing tool, a Notion knowledge base holding public docs plus an internal 14-day refund policy, a Supabase database, and Stripe. In the live demo a password reset is answered with a citation to the exact public doc; an SSO question about Okta hits no documentation, so the bot reports low confidence, hands off to a human, and raises a Slack alert ("exactly what we wanted"); and refunds are granted for Carter, who has just subscribed, and denied for Damon, who is about 20 days in and outside policy, all without leaking the internal policy. The rollout ladder is crawl-walk-run: the bots start read-only, then draft answers for review, then answer directly. The economics stated on air were $1–2 per medium ticket and about 20 cents for a scripted one, versus "$1… one to ten dollars" for competitors. It was a demo org on a demo airline, not the trio's build.

**[4:41–4:53 PM PT] — 🏁 DAY 2 ENDED: "from no app to an app."**
They closed by saying, "We went from no app to an app… an app with an engine and a bunch of bots that are basically [the] whole workforce today." The honest state at the end was that X login works, the global leaderboard is wired but empty, the ratings are placeholders ("we're both gold at 1000"), and "there's a bug. So I can't actually add any bots yet." The Day 3 plans spoken at sign-off were to deploy, rename the game, play matches live with chat, "make it go viral. We have one day to grow our business," and sprint an ads marketplace — all against the deadline of "72-hour live stream… we ship a product by Thursday." The final count was 374.9K views. They also announced a promo in which the first 1,000 people to duplicate dr. eggbot receive a free month of Grok Bot, a $200 value.

**Day 2, in one paragraph.** The October pop-up event tracks were retired in Notion while the ops-software product kept building toward Thursday, and the day's showpiece was "Cupcake" (a code name) — a side demo of Grok Bot's prototyping speed, a character-draft battler whose cards are xAI marketplace bots, framed all day in "game design studio" language until the stream itself was retitled around it. Around the build, the day carried four sales-track sessions (Sales Engineering with Cursor's Amrita on the Flylo demo app; Sales; SDRs; a four-bot Customer Support org), guests Karen Cheng and Matt Berman, the Icon Coffee customer story, the first forward-deployed intern, and a 6,000-line Remotion ad pipeline, before a sign-off at 4:53 PM with the demo one bug short of playable matches.

**What came next: Day 3 (Thu Sept 17) — the marketing track, then the ship.** Marketing Ops 9:00 AM, Post-Sales 12:30 PM, Marketing 2:30 PM (PT), and the deadline the company was named for.

## Day 3 — Thursday, September 17, 2026

**[8:30–9:00 AM PT] — Ship day opens with a promo and the overnight recap.**
A new broadcast, "Building a company in 3 days - launching today!" — the title itself carries the deadline. After a few minutes of hold cards the trio went live at 8:40 and opened with a ten-minute offer for new users: sign up, create a bot and set up one recurring task, and the first month of the top tier is free — "like, 200 bucks of usage in the first month." The wait doubled as the overnight recap: "overnight, I think we landed more than 100 PRs — yeah, 168," with Potato Mode on full autopilot and a QA bot named Play testing the builds, before a preview of the game handed the stream to the marketing track at 9:00.

**[9:07 AM PT] — Marketing Operations: Matthew Silberman & Teresa Hsu.**
The morning session opened on a six-card use-case map for RevOps and MarOps work: a self-completing to-do list (bots monitoring inboxes, refreshing CRM tables, routing tickets), tools not just rules (bots maintaining dashboards and querying systems), perfecting the marketing–sales handoff, making GTM data truly self-serve (a bot anyone on the team can query in plain English), territory planning fed by CRM accounts, pipeline and rep performance, and a one-time CRM cleanup for duplicates and messy accounts.

**[9:10 AM PT] — The Territory Planner referees a dispute.**
The live screen showed a "Territory Planner" bot working an inbox: it drafted the stakeholder email, then filed a Path task on a real conflict — two account executives, Jordan (West) and Sam (Central), both claiming the Acme Logistics account (filed 8:44 AM). The proposed path: a territory-map sync Tuesday, a written ruling by Friday, with the approval card offering a human exactly two buttons — Approve, or Hold (digest only). Governed agency in one screenshot: the bot proposes with evidence, the human decides.

**[9:15 AM PT] — Juno turns one line into a spec.**
Next demo: "Juno," a self-described GTM product bot that clarifies requirements one question at a time, writes the spec, and hands off to a build flow. Fed "I want to build an internal app for sales reps to review their leads," it specced a swipe-the-card interface — left rejects a lead with a reason recorded in the CRM, right accepts and drops it into a follow-up sequence — and flagged CRM write-back correctness from the start.

**[9:25–9:40 AM PT] — What the session taught, and the Starbase ask.**
The session's "What we learned" slide made the morning's argument in three lines: staff your dream team like an exec (anyone can hire an unlimited set of specialists with the right context and access); give your bots agency, and guardrails (governed agency beats "ask each time" or "YOLO mode"); and "you are a product manager — your product is revenue" (run the end-to-end GTM machine, not just the marketing-SQL handoff). Then the viewer contest got its mechanics on screen: quote the challenge post on X, explain what your Bot does, link your shared Bot template, follow @Grok and @Bot — Starbase trip, entries through Sept 29.

**[9:51–10:24 AM PT] — The studio takes over, and the launch lands.**
The marketing session closed at 9:40 and the trio were back at the build table by 9:51 — Lauren and Matt at their laptops with Roshan alongside. By 10:18 the game was live under its final name (the 10:18 entry below); two minutes later the public leaderboard already held 96 players, and by 10:24 it was closing in on 500 users while the hosts worked favicon, styling and search-metadata polish live. Views hovered near 78K.

**[10:40 AM PT] — The fleet reads the game's telemetry.**
Back in the studio, the build screen showed a stats thread with a "Launch dashboard — Session 1" card stamped 10:54 AM PT: practice and match activity, and a bug list with two fixed and two still open. Asked for "basic game stats like win rates, difficulty, etc. to validate the game engine," a bot named Sake replied it was "pulling win rates and difficulty signals from live match data" — the game the fleet built is now producing real play data that other bots analyze. The workspace's "Manage plugins and skills" screen got a walkthrough too: Vercel, Notion, Slack, X, PlanetScale and Clerk all Connected. The fleet widget read 43 bots online, 4 working, 11 archived — up from 30+ at the Day 1 close.

**[10:05–10:13 AM PT] — "Let's go ahead and fight round one": the first live match.**
One of Wednesday's sign-off promises was to play matches live with chat. It happened, in practice mode against the game's own AI: "it's the best of three rounds," Matt explained as the bots dueled, with the shop economy opening between rounds — base cards at three gold from a ten-gold start, selling refunds one. The match-result screen — "You took round 1" with a Play Again button — sat on the main display; team cards carry the charisma-vs-dexterity bars; several still read "no image provided," with an Image Gen bot active in the roster. A day earlier the same demo was one bug short of adding any bots at all.

**[10:18 AM PT] — The game has a name: Thursday Arena.**
Live on air: "Alright, okay. Thursday Arena is live" — the demo game's final name, landing a day after "maybe think of an actual good name." The deployed front page shows a player profile at a 1000 rating (the placeholder ELO the hosts joked about on Day 2), a Play button, a "priority queue: eng" banner, and Leaderboard / Your matches / Tips / Read handbook panels. A teammate's screen showed the matchmaking front end beside a deploy diff in the editor, and the hosts declared thursdayarena.com the game's only official site and its new X account the only official account. The day's agenda, shown on the player: "Build: A Game Studio" blocks around Grok Bot for Customer Success (12:30) and Grok Bot for Marketing (2:30), with a final showcase at 4:30.

**[11:10 AM PT] — Break.** The counter read 93.9K.

**[11:14–11:46 AM PT] — A growth guest builds the playbook live.**
Vincent Zhu, who works on growth at xAI, joined the studio and drafted the game's growth playbook into a live Notion doc — welcome DMs for new followers, share prompts, a challenge-a-player loop — reading the funnel aloud as he went: about 2,200 practice rounds and 1,000 X sign-ins, with the standing advice to "let practice users win more often." The visit closed with a double promo at 11:42: a "reset" for existing users alongside the new-user free month.

**[11:19 AM PT] — The game adds a shop whose items are jokes about the sales world.**
A SHOP tab joined the build with buyable cards at 3 gold each — "The Morning Newspaper" passes it back to buff two friends on the bench, "Hiring Signals" backfires for one damage to the lowest-health enemy, and "GTM Connections" lends half its attack to the weakest ally. The auto-battler now had an economy, and the flavor was pure go-to-market.

**[11:30 AM PT] — The dashboard starts counting the game like a product funnel.**
A funnel chart on the studio screen showed 2,255 practice sessions opened, 742 completed and 268 converted into the game, alongside 2,983 public matches. The fleet was measuring its own game the way a growth team measures a product, though whether the counts reflected public play or seeded test data was not stated on screen.

**[12:30–1:13 PM PT] — Post-Sales session: assemble the team from the Marketplace.**
The 12:30 session opened on the bot Marketplace — featured community bots (Lauren Tan's dr.eggbot, Lenny Rachitsky's Overheard, Claire Vo's Tradbot, Eric Zakgaiman's Projects Manager) beside team plugins (pastack, Atlassian MCP, GitHub, the Flylo demo environment) — and built its thesis from there: a post-sales team assembles from installed specialists, not job posts. The demo put a chief-of-staff bot named Gus over Flylo's demo post-sales org: a status digest covering Risk (a QBR that "gets ugly," a training-suite answer due Friday, an account kept "soft, not a P0"), People flags, Blockers (access pending for three named reps), and Open promises with owners and dates — plus a space-party joke, "because life is not that serious." Gus's routines ran on a schedule: a daily brief at 8:30, call prep every 15 minutes on weekdays, weekly unattended-promises sweeps, ask watch, visibility watch. The standout was the self-improvement scan: a weekly audit that proposes exactly one fix to its own routines ("don't implement unless I say yes") and a voice-learning pass that diffs Gus's drafted messages against what the manager actually sent — tone, closings, banned phrases — logging the deltas as memory. The manager also had Gus convene a staff meeting on how to spend the next and only free hour of the day ("staff meeting is live"). The whole demo ran on session data on Flylo, not the trio's build, and the session took audience questions from 12:57 to 1:16 at 119.6K views.

**[1:19–2:36 PM PT] — The ship is public, and the finale is set.**
The game demo's public URL resolved on screen: thursdayarena.com, live — the THURSDAY ARENA wordmark with its cupcake pixel-art mascot, a Play button, and the roster's character cards (the URL had been named on air at 12:25). Twenty-four hours after the build sat on localhost one bug short of playable, the rename-and-deploy promise from Wednesday's sign-off was fully kept: named, deployed, and playable in public (1:19). The public site states the build's own pitch — "Pick a captain. Take two mystery teammates. Fight three rounds." — and the trio pointed its agents back at the live site to hunt a shop-button bug, sending a check-agent to browse the public URL and reproduce the exact behavior (1:35–1:40, 126.8K views). The leaderboard grew its first Diamond player, "Ari the Monk," at 1:31, with a second by 1:49 and five by 3:22. Matt dialed the in-game support number live on air: the voice agent answered, the call was transcribed and moderated, and the summary landed in the fleet's Slack feedback channel (1:41). Vercel Analytics went on at 1:47 — 1,400 people on the page, 44% on iOS — which sent the card UI back for a mobile pass. The deployed landing page also runs a live ticker of its current players — "when you're logged in, it'll show like your profile image" — with a paid "special color" tier already being sketched for it; a signed-in player profile on screen carried paired Elo ratings of 1400 and 1347 (2:06, 134.9K). A triage thread showed the fleet editing how the backlog runs: one report per site while conflicts last, a team attribute on every ticket, consolidated deploys — and a bot shared itself to the team with View PR and Open in Cursor buttons on its own work (2:14, 137.9K). At 2:00 Dan Hill of Stripe and Link took the couch: agents paying agents through single-use Link cards, Stripe Projects, and monetization sketches for the game — sponsored cards, subscriptions, leagues — with the PR counter past 235 and "get our first dollar" set as the stretch goal; Grok Bot's voice mode, announced that hour, was demoed on the spot. At 2:29 the agenda board set the closing run: the Marketing session, one more game-studio build block at 2:45, then "Livestream Wrap and Final Showcase" at 3:15 PM PT — an earlier finale than the 4:30 on the morning's agenda — with the studio table mid-conversation at 141.3K views.

**[2:36–3:50 PM PT] — The marketing relay, then the finale on the numbers.**
The Marketing session then took the stream (2:36): Josh Kim opened with a "Market Researcher" bot and a single briefing message — research the product by reading its own website, understand the market, then a competitive analysis of three deep-mapped competitors and where to position against them — with a sidebar fleet of Market Eval, Product Marketer, performance and strategy bots waiting (143.9K views). The session showed marketing as a relay of specialists rather than one clever chat: the Market Researcher surfaced competitor findings (an airline campaign — "Make distance feel smaller." — as reference), the Product Marketer wrote a positioning brief to a file in the shared workspace and pinged the team with View PR and Open in Cursor buttons (2:49, 146.6K), and then a 'Website Ops' bot took a three-step work order — build the landing page from that brief, update the FAQs for the most common user questions, send screenshots as you go — answering that it was pulling the brief and opening a PR with progress shots (2:50, 147.1K). The session closed at 3:03 on a three-line doctrine of its own — scope bots like a job description, then trust them with tools, access and room to run, and invest in them the way you would a teammate while leaning on the marketplace's shared templates. At 3:16 the finale arrived on schedule: "Livestream Wrap and Final Showcase" opened on the game's own metrics dashboard — 4,898 public matches (up from 2,983 at 11:30 AM), 4,500 practice sessions, 1,650 X logins at an 8.0% practice-to-login conversion, a 47.6% public win rate, 332 feedback items — with four at the studio table to walk the day-one numbers (152.4K views). The showcase then turned to the product itself: thursdayarena.com's leaderboard now carries real matches — named players with Elo ratings and win-loss records, a Gold-rated player at 1447 sitting at rank #51, others from 1142 to 1299 with double-digit win counts; the ratings that began Day 2 as 'we're both gold at 1000' placeholders were ranking public play (3:27, 154.1K). The studio laptops then logged into the public site for live ranked play — "my rank is 1322 out of 1800," with 1,819 players registered — an opponent's handle and the round marker on the scoreboard, while the site's own banner read 677 people playing now (3:38–3:41, 156.7K–161.5K). A traffic chart of practice starts and X signups spiked in waves all day, each wave traceable to an on-air moment, and a bot-authored pull request (#274, a leaderboard fix, tests included, verdict "all green") sat merged-in-waiting on the screen (3:50). Voice mode, announced during the 2 PM hour, ran the fleet hands-free in the showcase: "merge PR 269," spoken rather than typed, walked its checks and merged (3:18–3:19), and the same voice path filed the leaderboard's win-loss bug, closing with the joke "A SQL query walks into a bar… can I join you?"

**[3:59–4:28 PM PT] — The rules, the last beats, then the sign-off.**
$200 of Grok Bot credits went to viewers posting "credits" in the live chat (3:59). A rules endpoint went live at thursdayarena.com/rules, written to be readable by agents as well as people (4:05). The final design got stated plainly in a bot chat: a match is best-of-3, each round runs shop then auto-battle, up to three bots with the leftmost fighting first; bots and apples persist between rounds while the 'potato' is temporary, and the shop pays 10 tokens a round — unspent tokens vanish, a sell refunds one, a reroll costs one, freezing keeps an offer — with dr. eggbot holding the 'ask to review this chat and coach' role: the mascot literally teaches its own game (4:12). The final metrics read went up at 4:20 — past 4,000 games, close to 30,000 page views, signups "probably crossing 2,000," and the number-one spot on Google for the game's name — a bad SQL query from the software factory briefly took down prod and was fixed mid-sentence, and at 4:26 the ad auction fired its first test bid: "our first theoretical sponsorship dollar." Then the stream ran straight to its close (4:28).

**[4:28 PM PT] — 🏁 DAY 3 AND THE WHOLE EVENT ENDED.**
The closing card — "Grok Bot Galaxy: Thanks for joining!" — came up at 4:28 PM Pacific, seven hours and fifty-eight minutes into the day's broadcast, with 173.4K watching the final stretch. The final fleet widget read 43 bots, 76 milestones logged, 2 working, 6 archived. Across three days: 25 hours and 6 minutes on air, from "no idea at the open" to a shipped, public, playable game with a leaderboard full of real players — built by a fleet of agents under human direction, in front of the internet the whole time.

**Day 3, in one paragraph.** Ship day opened with a free-month promo and the overnight software-factory recap (168 pull requests), then Marketing Operations — a Territory Planner bot refereeing an account dispute with an Approve/Hold card, and "Juno," a GTM product bot that turned one line into a lead-review app spec. Then the build day: the game demo got its final name (Thursday Arena, live at 10:18), its public deployment (thursdayarena.com), its first live matches ("You took round 1"), a shop whose items are go-to-market jokes, an analytics dashboard, and a live ticker of its players. The Post-Sales session assembled a team from the Marketplace and put "Gus," a chief-of-staff bot, over Flylo's demo post-sales org — digest, routines, and a self-improvement scan that learns from the human's edits. Guests Vincent Zhu and Dan Hill sketched growth plays and agent payments between sessions, and the Marketing session ran the relay, with the researcher handing its findings to the strategist and the positioning brief ending up committed to the workspace. The showcase played ranked matches on the public site, and at 4:28 the event closed on the first sponsorship ad bid with the promise kept: a product shipped by Thursday.
