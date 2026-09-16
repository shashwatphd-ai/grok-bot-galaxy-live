# Retro — Day 1 of Grok Bot Galaxy (Sept 15, 2026)

*Written the evening of Day 1, shift #5, before Day 2 opens at 8:30 AM PT. Stream clock is Pacific. Short on purpose — it's a retro, not a chronicle.*

## The day, hour by hour

- **Morning (Engineering track, ~12:30–2:00 PM).** Happened before our coverage did. That gap is lesson zero: if you arrive late, you inherit other people's summaries and their errors. We spent the evening paying down exactly that debt.
- **~2:00–3:30 PM.** The thesis lands: not one omniscient bot but a roster of named teammates on three pillars — referencability, scoped memory, parallelism. The org chart is a slide of cartoon characters; the PM session shows an analyst bot answering with receipts and decisions shipping as RFCs. **Lesson: the artifact is the management.**
- **~3:55–4:15 PM** (clock uncertain — our timestamps ran ~30 min early until 4:28; lesson there too). Three things no keynote slide mentioned: a live fleet widget (26 online · 880 web requests · 10 archived — the roster has churn); a command palette proposing *"Get stats on X from Y"* when an agent hits a gap; and a bot assembling a price menu with real unit economics, then asking its human *"which one do you like?"* **Lesson: routing, telemetry, and merchandising are product surfaces, not features.**
- **~4:01–4:30 PM.** Balsamiq wireframe → product catalog ($5 checklist PDFs to a $4,365 Summit Flight) → a sign-up flow appearing in a browser, ~45 minutes start to finish. By 4:28 a "Tee Bot" is running the merch email channel. **Lesson: when a fleet builds the store in an afternoon, the founder's scarce job is deciding what's on the menu and at what price.**
- **~4:40–4:55 PM.** The founder-use-case sells (close customers on autopilot), a feature grid where bots are *shareable* ("Peng shared Kenny with you" — a marketplace seed), the counter crossing 1M views, and a bot-written SEO audit shipping not as a report but as a **dated work order** ("Thu 2026-09-17 08:00 CT — ships staging link for pilot sign-up"). Founders close on **"Optimizing Costs — browser use is powerful (and expensive!)"**. **Lesson: the pitch showed its own cost structure. Honesty as a demo strategy.**
- **~5:35 PM.** Fact-check hour. A circulating AI recap described the demo company as an autonomous restaurant-delivery back office; our saved screenshots said family bookings (35% of 1,063 purchases, party size 3.2), cabin bundles, glider instructors. Primary evidence beat the recap. **Lesson: AI summaries of live events compound errors; screenshots outrank synopses.**
- **~5:58 PM.** Two corrections at the close: the business reads as an **event venue** (venues and food per the stage audio — catering, cabin lodging, activities), and the site was **staging, not a public launch**. We corrected our own copy the same evening. **Lesson: a correction published an hour after the claim costs almost nothing. One that waits a week costs the audience.**
- **6:00 PM.** Day 1 closes at 1.1M views. The full arc: idea → roster → analytics → RFCs → pricing → catalog → (staging) store, in one day.

## Where our own coverage misread things

1. **"Travel business" was too narrow.** Screen artifacts legitimately read as travel (flights, cabins) — but the stage was talking about venues and food. The corrected read: an event-venue business (catering + lodging + activities). **What it teaches:** label interpretations as interpretations, and build tools that don't bet the farm on the interpretation. WhoDoIAsk survived the correction untouched because a routing sheet doesn't care what industry the crew is in — the new **Venue Ops** preset lands the corrected read in the same product, same day.
2. **"The site is LIVE" — wrong.** A sign-up page in a browser is not a launch. URL never legible, page said "results coming soon," nothing indexed. It was staging. **What it teaches:** legible-URL-or-it-didn't-happen; OCR of a screen is a source, not a fact. Marketing copy written at 4:46 PM needed a fix by 6 PM — cheap, but only because we re-verified before bed.
3. **The restaurant-delivery recap (external).** A secondhand AI summary spread a claim no primary artifact supports. Our failure was adjacent, not identical: we nearly anchored on "travel" the same way others anchored on "restaurant." **What it teaches:** at live events, everyone — including us — reasons from partial information. The discipline isn't being right first; it's timestamping what you believe, saying what would change your mind, and correcting in public.

## Our three products, mapped to Day 2 (Sales / SDR / Support track, opens 8:30 AM PT)

- **WhoDoIAsk** (`ventures/whodoiask/`) — the direct wedge. Day 2's audience asks "who takes the angry billing call?" a hundred times a day. The Support Desk Co. preset is literally an SDR → Sales Engineer → Support org; Venue Ops Co. covers the venue business the stream actually ran. Play it in any escalation/routing moment.
- **CrewChart** (`ventures/crewchart/`) — the org-design moment. When the speakers sketch a sales pod (SDR feeding SE feeding AE), the delegate palette IS lead routing. Use it to answer "how would you staff what they just described?"
- **MenuForge** (`ventures/menuforge/`) — the closing question. "Which one do you like?" is what a salesperson calls a trial close. Quote sheets, discount ladders, leave-behinds after the call — MenuForge makes the sheet in a minute.

## One-line carry-forward

Day 1's demo company was really three businesses in a trench coat (venue, catalog, agency-of-bots) — route questions, price everything, correct yourself fast. That's the whole founder curriculum, and it's what we built against all day.
