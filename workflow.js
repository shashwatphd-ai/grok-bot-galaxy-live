/* ============================================================================
   GROK BOT GALAXY LIVE — WORKFLOW DATA (Days 1–2, transcript-verified)
   ----------------------------------------------------------------------------
   The division of labor: what the THREE HUMANS did versus what the AI
   EMPLOYEES did, on one time axis, with the deliverables that materialized.

   Loaded by the tracker AFTER data.js and products.js. Schema:

   window.GG_WORKFLOW = {
     lanes   : ["human", "ai"],
     steps   : [{ t, lane, actor, act, detail, deliverable, day }]  — chronological;
               t = Pacific wall time; deliverable = id in `deliverables` when
               this step produced one.
     deliverables : [{ id, t, name, status, detail, day }]
     stats   : small counts for the summary strip
   }

   Session-demo artifacts (the Flylo demo airline and its sample venue data,
   Mimi/Sherlock/Serena, Olive, the four-bot support org) are deliberately
   EXCLUDED — this tracks only the trio's actual build. Day 1 times are
   replay/visual reads; Day 2 times are audio-verified (tape + 8:30 AM PT).
   ============================================================================ */

window.GG_WORKFLOW = {
  lanes: ["human", "ai"],

  steps: [
    /* ── Day 1 — Tue Sep 15: the pop-up ── */
    { t: "8:40 AM",  lane: "human", actor: "Lauren · Roshan · Matt", act: "Opened the stream with no idea", detail: "Set the mission — build a company in three days — and admitted on tape they had not chosen what to build. Announced the viewer contest (Starship-launch trip, ends Sep 29).", day: 1 },
    { t: "9:00 AM",  lane: "ai", actor: "Grok Bot platform", act: "Ran the 101 teaching block", detail: "Bot onboarding, the bot Marketplace with installable community bots, and an email demo — the tape confirms a coffee-survey digest the bot writes and sends itself.", day: 1 },
    { t: "10:05 AM", lane: "human", actor: "Matt", act: "Took the first guest's doctrine", detail: "Peter Yang, on tape: 'anyone can build anything now… hard to make money from pure software… people pay for the hard stuff.' Distribution over software — the frame for every later choice.", day: 1 },
    { t: "10:15 AM", lane: "ai", actor: "grokbot", act: "Proposed company concepts", detail: "Returned candidate directions with pricing-tier sketches and a business-plan checklist (marketing, sales, ops, finance, legal, engineering).", day: 1 },
    { t: "10:50 AM", lane: "human", actor: "Lauren · Roshan · Matt", act: "Locked the idea (for now): restaurant pop-up", detail: "On tape: 'pop-up OS for restaurants' — a real SF pop-up with a partnering chef, ticketed as an experiential dinner, ops software as the meta product. First deliverable of the day.", day: 1, deliverable: "idea" },
    { t: "10:55 AM", lane: "ai", actor: "grokbot", act: "Produced the full business plan", detail: "Product, pricing tiers, marketing strategy, objectives — with a scoping checklist across departments.", day: 1 },
    { t: "11:25 AM", lane: "human", actor: "Matt", act: "Absorbed Codie Sanchez's distribution doctrine", detail: "On tape: sell to three people first; distribution is the moat; controversy marketing (2.4M and 5.7M-view examples); keep a proof vault; oversee bots intensely.", day: 1 },
    { t: "11:45 AM", lane: "human", actor: "Matt · Codie", act: "Created an operator-research bot together, on air", detail: "Turned her advice into prompts — 'top San Francisco restaurant tours.' A human decision shipped as a bot within minutes. (On tape; previously mis-filed as a 'marketing bot.')", day: 1, deliverable: "operator-bot" },
    { t: "12:30 PM", lane: "ai", actor: "engineering bots", act: "Ran the multi-agent pipeline demo", detail: "During the Engineering session: a finished PR, a Sage deploy with logs, a review queue, a designer agent on merch art, a legal-docs agent In Queue.", day: 1, deliverable: "pipeline" },
    { t: "1:00 PM",  lane: "human", actor: "Lauren", act: "Set the engineering rules — and watched them break", detail: "On tape, after steve opened a pull request: 'New rule: no pull requests. We ship to main… until somebody yells at me.' (Previously mis-attributed to Matt.)", day: 1 },
    { t: "1:05 PM",  lane: "ai", actor: "steve · tater · hashbrown", act: "Pushed a ~2,000-line PR; built the reviewer", detail: "steve's ~2,000-line PR broke the brand-new rule — proof bot staff need oversight. tater posted PR #10 to for-review via cursor.com/agents; hashbrown was created to review tater's PRs (all on tape).", day: 1 },
    { t: "2:06 PM",  lane: "human", actor: "Roshan · Matt", act: "Debugged a stuck cloud agent with steve", detail: "'Is it actually moving or just sitting there?' Diagnosed: a subagent, 'still chasing the PR, not the spinner.' Humans and bots share the debugger seat.", day: 1 },
    { t: "2:07 PM",  lane: "ai", actor: "grokbot", act: "Wrote the event-builder spec", detail: "'User should be able to create their own event — events have a date/time, sessions, venue, staff.' The core product sentence of the pop-up track, authored by an agent (screen read).", day: 1 },
    { t: "3:25 PM",  lane: "human", actor: "the trio + guest Eric", act: "Let the idea drift: toward a Grok Bot pop-up", detail: "On tape: 'we're going to try and start a grok pop-up' — merch, venue, ticketing; platform demoted to a stretch goal; 100–200 guests, Oct 15 floated. At close: 'we might still be shifting.'", day: 1 },
    { t: "3:55 PM",  lane: "ai", actor: "the fleet", act: "Fleet snapshot: 26 bots, 880 requests, 10 archived", detail: "Ops chat showed QA picking up PRs and a Darcy-bot redeploy. The org was churning staff like a real company.", day: 1 },
    { t: "4:19 PM",  lane: "ai", actor: "Tee Bot · Pixel", act: "Designed pop-up supplies and merch", detail: "On screen: ticket stubs with tier badges, lanyards, and plush concepts — the plush line confirmed by name on tape (16 mentions), iterated 'against the official art.'", day: 1, deliverable: "tickets" },
    { t: "4:20 PM",  lane: "ai", actor: "dr. eggbot", act: "Stood up the lander", detail: "On tape: the domain live on Vercel wired to PlanetScale — 'the domain is live… I hooked it up to our database' — with viewers told 'don't submit yet… throwaway prototype.' The URL (shipbythursday.day) was spoken on air.", day: 1, deliverable: "lander" },
    { t: "4:25 PM",  lane: "ai", actor: "grokbot", act: "Filed the SEO work order", detail: "Keyword plan, page-weight cuts, form trimmed, FAQ — with a dated execution timeline (screen read).", day: 1, deliverable: "seo" },
    { t: "4:28 PM",  lane: "ai", actor: "Tee Bot", act: "Opened the email channel", detail: "Screen: promo emails drafted and sent for the merch line — best-seller banners in, generic roundups out.", day: 1, deliverable: "email" },
    { t: "5:00 PM",  lane: "human", actor: "the trio + guest Jenny", act: "Reshaped the pop-up with a producer's lens", detail: "Jenny's 22-bot event-production suite (venue scout, permits, budgets, invite lists) reframed the plan in the final hour; overnight agents commissioned — budget bot, venue-scout outreach, invite-list sourcing.", day: 1 },
    { t: "5:30 PM",  lane: "human", actor: "all three", act: "Wrapped Day 1 at ~5:30 PM, 1.1M views", detail: "'We're going to wrap it at 5:30' — off the air close to it after ~8h 45m. The counter read 1.1M; the hosts had shown their own agent cost math ('browser use is super powerful… also expensive') as it crossed 1M.", day: 1 },

    /* ── Day 2 — Wed Sep 16: the 'Cupcake' demo becomes the showpiece ── */
    { t: "8:30 AM",  lane: "human", actor: "Lauren · Roshan · Matt", act: "Opened Day 2 with the MVP question", detail: "'Lauren, do you want to take us through some of the thoughts on how we could MVP this?' Her answer: a rough plan built with her P-Stack planning playbook — checklists, pseudo-code, data structures.", day: 2 },
    { t: "8:31 AM",  lane: "human", actor: "Sales Engineering (Amrita, Cursor)", act: "Ran the SE session on the Flylo demo app", detail: "'My name is Amrita. I am a field engineer here at Cursor.' Mimi (case-study slides), Sherlock (repo expert that spawned three more bots live), Serena (competitive intel) — on xAI's own demo airline. On tape: Grok Bot runs Grok 4.6; VMs are Linux-only; her bot-built deck cost $20–30 vs 4–5 hours.", day: 2 },
    { t: "9:25 AM",  lane: "human", actor: "Matt (Lauren offline)", act: "Took the wheel for the build block", detail: "Lauren's machine went offline; Matt drove with her as 'backseat driver' — 'if you have dr. eggbot installed, you have an engineer bot.'", day: 2 },
    { t: "9:27 AM",  lane: "human", actor: "Matt", act: "Named the goal: 'that's going to be our game'", detail: "'Hey, take a look at that document. That's going to be our game. Our first goal is to make a landing page.' (Previously mis-timed to 9:50 and mis-attributed to Roshan.)", day: 2 },
    { t: "9:31 AM",  lane: "ai", actor: "grokbot · growth engineer bot", act: "Spun up the landing page", detail: "'We have our lander getting spun up' — scaffold built in parallel with the design argument, under the rule 'subtract before you add… removing auth, removing a waitlist.'", day: 2, deliverable: "thursday-lander" },
    { t: "9:32 AM",  lane: "ai", actor: "Steve · dr. eggbot · Creative Director", act: "Staffed the org on demand", detail: "Steve holds the project context as chief of staff; dr. eggbot told to 'create an engineering bot… use P-Stack and Potato Mode to spawn cloud agents… orchestrate these cloud agents and supervise them and check their work'; the creative-director bot researched game visuals ('a total noob to video games') into a slider-tunable SVG asset playground.", day: 2, deliverable: "asset-sliders" },
    { t: "9:36 AM",  lane: "human", actor: "Lauren · Matt", act: "Set the game's tuning principles", detail: "The charisma-vs-dexterity counter ('rock paper scissors… the bonus being 20% if you can tweak that on the fly and just replay'), debug sliders in the UI, and the north star: 'we need to shorten the time to fun.'", day: 2 },
    { t: "9:39 AM",  lane: "ai", actor: "Knowledge Base bot", act: "Rewrote the company doc around the game demo", detail: "'Our knowledge base bot… started working on updating our Notion with our company doc. So now we're working on our game design studio… we're documenting the pivot and eventually what our go-to-market strategy might be.' The screen later read: 'There is no pop-up' — the October event tracks retired; the ops-software product line continued toward Thursday.", day: 2, deliverable: "pivot-doc" },
    { t: "9:50 AM",  lane: "ai", actor: "engineering bots", act: "Built the prototype with the brakes off", detail: "Skip sign-in, no database ('we don't need login yet when we don't even know if the game is fun'), vanilla HTML/CSS/JS, three UI variants, marketplace bots as seed data, debug panels with sliders.", day: 2, deliverable: "cupcake-proto" },
    { t: "10:03 AM", lane: "human", actor: "Matt", act: "Played the first draft and broke it", detail: "'I'm gonna of course pick Dr. Eggbot… we have three common bots.' Caught the stat-total bug live; approved the debug panel ('tune the advantage'); decided matches resolve instantly with animation on top.", day: 2 },
    { t: "10:42 AM", lane: "ai", actor: "customer story (Icon Coffee)", act: "Showed the platform outside the studio", detail: "Marcel, co-owner of Icon Coffee (SF): his bot Rex triages school email, reads the POS via API for metrics, and optimized the menu from a photo — 'an extra hour, two hours in my day.'", day: 2 },
    { t: "11:09 AM", lane: "human", actor: "guest Karen (X) Cheng", act: "Brought the creator cohort's bot habits", detail: "A morning-newspaper bot (newspaper.karenx.com) that finds printers on Wi-Fi; a Vestaboard package tracker. Her feature request — better VM login lifecycle — matched the fleet's own complaint: 'things are always getting logged out on the virtual machine.'", day: 2 },
    { t: "11:41 AM", lane: "human", actor: "Lauren · Roshan · Matt", act: "Whiteboarded the battle screen", detail: "Captain first, then the team, then order, then match; tiers hide raw ELO ('instead of saying my elo is 1372, I'm diamond'); 'maybe this is fine. We'll ship it'; 'no time for PRs'; 2D before 3D.", day: 2 },
    { t: "12:16 PM", lane: "ai", actor: "Cupcake Eng · image-gen bot", act: "Gave the game its code name and icons", detail: "'We may need to start thinking of a name… It's just a code name.' A cupcake logo designed; ability icons generated and cleaned with background removal. 'Cupcake' had first been spoken at 11:58 ('who's the best cupcake battler').", day: 2 },
    { t: "12:29 PM", lane: "human", actor: "Sales (Chris Dillettes & Mark Wright)", act: "Ran the Sales session", detail: "Echo updating the deck live mid-call from Granola (~2 minutes); Olive prepping meetings and drafting replies; Salesforce auto-updates from call notes; the PG agent pulling personal hooks from X posts; a growth bot matching the user's writing voice — all on the Flylo sample data.", day: 2 },
    { t: "1:13 PM",  lane: "human", actor: "guest Matt Berman + intern Shardul", act: "Showed the agent life outside xAI", detail: "Berman: family bot, marketplace sales with auto-negotiation, $1,000/yr off PG&E. Shardul Marathe ('first forward-deployed intern'): recruiter-finder, alumni-directory email finder, cover-letter critic.", day: 2 },
    { t: "2:05 PM",  lane: "ai", actor: "chief of staff · dr. eggbot · remotion ads bot", act: "Built the ad pipeline", detail: "Onboarded 'a remotion ads bot for a Cupcake': ~6,000 lines across 12 files, 9:16 and 16:9 spots for LinkedIn/Instagram/X, a localhost conflict debugged on air.", day: 2, deliverable: "ads-pipeline" },
    { t: "2:30 PM",  lane: "human", actor: "SDRs (Simon)", act: "Ran the SDR session", detail: "'Simon soldiers': a sub-agent army working a 50-prospects-a-day routine, demoed on the Flylo account — the SDR's job becomes editing bot drafts.", day: 2 },
    { t: "3:10 PM",  lane: "ai", actor: "Cupcake Eng · founding engineer bot · glow 3d", act: "Went scrappy: backend, kanban, 3D swarm", detail: "Client/server split ('you can just modify the client and cheat'); the 'cupcake board' kanban ('our own little ticketing system'); auth assigned (Clerk); a 3D prototyping swarm via Potato Mode; backend to Vercel; 'delete all the tests… true scrappy mode.' A coordinator agent in Cursor Projects even said 'mashed' for merge.", day: 2 },
    { t: "4:00 PM",  lane: "human", actor: "Customer Support (David)", act: "Ran the Support session", detail: "The four-bot support org (build/reply/alert/tune) on Plain + Notion + Supabase + Stripe over Flylo's $20/month wifi: password reset citing the doc, SSO → low-confidence handoff, refunds granted/denied by the 14-day SOP without leaking it. Economics on tape: $1–2 per medium ticket, ~$0.20 scripted.", day: 2 },
    { t: "4:41 PM",  lane: "human", actor: "all three", act: "Set the deadline and signed off", detail: "'72-hour live stream here where we ship a product by Thursday.' Final state on tape: X login works, leaderboard wired but empty, ratings placeholder, 'there's a bug. So I can't actually add any bots yet.' Day 3: deploy, rename, play with chat, 'make it go viral — we have one day to grow our business.'", day: 2 }
  ],

  deliverables: [
    /* ── Day 1 ── */
    { id: "idea",    t: "10:50 AM", name: "Company concept: 'Pop-up OS' + business plan", status: "SHIPPED", detail: "Restaurant pop-up with partnering chef and venue; ops software as the meta product. Named the company: Ship by Thursday.", day: 1 },
    { id: "operator-bot", t: "11:45 AM", name: "Operator-research bot (built live with Codie Sanchez)", status: "SHIPPED", detail: "Research prompts seeded with the guest's distribution doctrine — 'top San Francisco restaurant tours.'", day: 1 },
    { id: "pipeline", t: "12:30 PM", name: "Multi-agent engineering pipeline", status: "SHIPPED", detail: "PR → deploy → review loop across tater, Sage, designer and legal-docs agents, via Cursor Cloud Agents.", day: 1 },
    { id: "lander",  t: "4:20 PM",  name: "Domain + live lander (shipbythursday.day)", status: "STAGING", detail: "Live on Vercel wired to PlanetScale — the URL spoken on air, viewers told 'don't submit yet… throwaway prototype.'", day: 1 },
    { id: "tickets", t: "4:22 PM",  name: "Ticket stubs, badges and plush concepts", status: "SHIPPED", detail: "Stub designs with tier badges and lanyards on the canvas (screen); the plush line confirmed by name on tape. Designs only — no checkout.", day: 1 },
    { id: "email",   t: "4:28 PM",  name: "Email marketing channel", status: "SHIPPED", detail: "The merch email thread: promo drafts with best-seller banners, generic roundups out (screen).", day: 1 },
    { id: "seo",     t: "4:55 PM",  name: "SEO work order with dated execution plan", status: "SHIPPED", detail: "Keyword plan, page-weight and form fixes, FAQ — execution timeline dated through Thursday (screen read).", day: 1 },

    /* ── Day 2 ── */
    { id: "pivot-doc", t: "9:39 AM", name: "Company doc rewritten around the game demo", status: "SHIPPED", detail: "'Now we're working on our game design studio… we're documenting the pivot.' The October pop-up event tracks retired in Notion; the ops-software product line continued.", day: 2 },
    { id: "thursday-lander", t: "9:31 AM", name: "The game's landing page (V1)", status: "BUILD", detail: "'Our first goal is to make a landing page' — scaffolded the same hour, auth and waitlist deliberately removed.", day: 2 },
    { id: "asset-sliders", t: "9:32 AM", name: "SVG asset playground (visual prototyping)", status: "SHIPPED", detail: "The creative-director bot's slider-tunable flat-SVG tokens, run locally — iterate looks before code.", day: 2 },
    { id: "cupcake-proto", t: "9:50 AM", name: "The 'Cupcake' demo (code name)", status: "BUILD", detail: "The side demo of prototyping speed: marketplace-bot draft battler with no login, no DB, debug sliders; first played 10:03; by close X login + leaderboard wired and one bug blocking matches.", day: 2 },
    { id: "ads-pipeline", t: "2:05 PM", name: "Remotion ad pipeline (~6,000 lines)", status: "SHIPPED", detail: "Agent-written video ads in 9:16 and 16:9 for LinkedIn/Instagram/X; a stadium-billboard marketplace sketched for Day 3.", day: 2 }
  ],

  stats: {
    humanMoves: 23,
    aiMoves: 19,
    deliverables: 12,
    note: "Humans chose, ruled, tuned, debugged and approved. Bots proposed, produced, deployed and iterated. Every deliverable needed at least one of each."
  },

  footnote: "Session-demo artifacts (the Flylo demo airline and its sample venue data, Mimi/Sherlock/Serena, Olive, the four-bot support org) are excluded: that data belonged to the teaching demos, not the trio's build. Day 1 step times are replay/visual reads; Day 2 times are audio-verified."
};
