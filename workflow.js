/* ============================================================================
   GROK BOT GALAXY LIVE — WORKFLOW DATA (Day 1)
   ----------------------------------------------------------------------------
   The division of labor: what the THREE HUMANS did versus what the AI
   EMPLOYEES did, on one time axis, with the deliverables that materialized.

   Loaded by the tracker AFTER data.js and products.js. Schema:

   window.GG_WORKFLOW = {
     lanes   : ["human", "ai"],
     steps   : [{ t, lane, actor, act, detail, deliverable }]  — chronological;
               t = Pacific wall time; deliverable = id in `deliverables` when
               this step produced one.
     deliverables : [{ id, t, name, status, detail }]
     stats   : small counts for the summary strip
   }

   Session-demo artifacts (the sample venue company used by the PM and
   Founders presenters) are deliberately EXCLUDED — this tracks only the
   trio's actual build.
   ============================================================================ */

window.GG_WORKFLOW = {
  lanes: ["human", "ai"],

  steps: [
    { t: "8:33 AM",  lane: "human", actor: "Lauren · Roshan · Matt", act: "Opened the stream with no idea", detail: "Set the mission — build a company in three days — and admitted on air they had not chosen what to build. Announced the viewer contest (Starship-launch trip, ends Sep 29)." },
    { t: "9:00 AM",  lane: "ai", actor: "Grok Bot platform", act: "Ran the 101 teaching block", detail: "Bot onboarding by category (data & analysis, research, workflows), the bot Marketplace with installable community bots, and an email demo: confirming a 500-unit shipment and drafting the logistics memo." },
    { t: "10:14 AM", lane: "human", actor: "Matt", act: "Rejected the first concepts", detail: "Pushed back on the agents' early directions — 'I don't really like what we are coming to' — and demanded fresher options. Humans stayed the filter." },
    { t: "10:15 AM", lane: "ai", actor: "grokbot", act: "Proposed company concepts", detail: "Returned candidate directions: food company, high-ticket sales play, event-book, ticket-craft — each with pricing-tier sketches and a business-plan checklist (marketing, sales, ops, finance, legal, engineering)." },
    { t: "10:50 AM", lane: "human", actor: "Lauren · Roshan · Matt", act: "Locked the idea: restaurant pop-up", detail: "Chose to run a real pop-up dining event in San Francisco with a partnering chef and venue — 'Pop-up OS' — and to productize the ops software afterwards. First deliverable of the day." },
    { t: "10:55 AM", lane: "ai", actor: "grokbot", act: "Produced the full business plan", detail: "Product, pricing tiers, marketing strategy, objectives — with a scoping checklist and drafting support from dr. eggbot and steve." },
    { t: "11:25 AM", lane: "human", actor: "Matt", act: "Brought in guest expertise (Cody Sanchez)", detail: "Interview absorbed live: sell to three people first; distribution is the moat; controversy marketing (2.4M and 5.7M-view examples); keep a proof vault; oversee bots intensely." },
    { t: "11:45 AM", lane: "human", actor: "Matt · Cody", act: "Created a marketing bot together, on air", detail: "Turned Cody's advice into prompts: lead magnet first, email capture, no checkout yet. A human decision shipped as a bot within minutes." },
    { t: "12:07 PM", lane: "ai", actor: "engineering bots", act: "Walked the TypeScript build segment", detail: "Code-focused segment during the late-morning block." },
    { t: "12:55 PM", lane: "human", actor: "Matt", act: "Set the engineering rules", detail: "'No pull requests — we ship to main until somebody yells at me.' Assigned tater as the engineering bot and asked for a reviewer bot. Rule-setting, not code: the human job." },
    { t: "12:57 PM", lane: "ai", actor: "steve", act: "Opened a 2,000-line pull request anyway", detail: "The PR broke the brand-new rule — visible proof that bot staff need oversight, not suggestions. Shipped to main as instructed." },
    { t: "1:27 PM",  lane: "ai", actor: "Sage · TX designer · legal-docs agent", act: "Ran the multi-agent pipeline", detail: "Finished PR on button text, deploy with config and logs, a designer agent on merch art, and a legal-docs agent moved through an In-Queue state. Deliverable: a working PR → deploy → review loop." },
    { t: "2:06 PM",  lane: "human", actor: "Roshan · Matt", act: "Debugged a stuck cloud agent with steve", detail: "'Is it actually moving or just sitting there?' Diagnosed: it was using a subagent, 'still chasing the PR, not the spinner.' Humans and bots share the debugger seat." },
    { t: "2:07 PM",  lane: "ai", actor: "grokbot", act: "Wrote the event-builder spec", detail: "'User should be able to create their own event — events have a date/time, sessions, venue, staff.' The core product sentence, authored by an agent." },
    { t: "2:26 PM",  lane: "ai", actor: "tater", act: "Posted PR #10 to for-review", detail: "Via cursor.com/agents — automation 'actually fired this time.' PlanetScale Bot flagged schema drift; Host Finder and Knowledge Base Manager appeared on the roster." },
    { t: "3:55 PM",  lane: "ai", actor: "the fleet", act: "Fleet snapshot: 26 bots, 880 requests, 10 archived", detail: "Ops chat showed QA picking up PRs and a Darcy-bot redeploy. The org was churning staff like a real company." },
    { t: "4:15 PM",  lane: "ai", actor: "steve · Ashley", act: "Assembled the price menu with web imagery", detail: "Instructor $220–250/flight-tier framing, web-sourced reference images, tier options — ending with the human-in-the-loop question: 'Which one do you like?'" },
    { t: "4:19 PM",  lane: "ai", actor: "Tee Bot · Pixel", act: "Designed pop-up supplies and merch", detail: "Night-market ticket stubs in CSS (tier A/B/C), badges and lanyards, and Grok Bot plush concepts — checked 'against the official art' and iterated." },
    { t: "4:20 PM",  lane: "ai", actor: "dr. eggbot", act: "Staged the sign-up page", detail: "A booking sign-up flow (name, email, password, ZIP + cookie consent) appeared in a preview browser — staging only, URL never public. Wireframe to sign-up page in roughly 45 minutes." },
    { t: "4:25 PM",  lane: "ai", actor: "grokbot", act: "Filed the SEO work order", detail: "Keyword plan ('Weekend Pilot'), page-weight cuts, form trimmed to three fields, FAQ — with a dated execution timeline: 'Thu 2026-09-17 08:00 CT — ships staging link for pilot sign-up.'" },
    { t: "4:28 PM",  lane: "ai", actor: "Tee Bot", act: "Opened the email channel", detail: "Drafted and sent promo emails for the merch line — best-seller banners in, generic roundup formats deliberately out." },
    { t: "4:50 PM",  lane: "human", actor: "all three", act: "Crossed 1M viewers while studying their own costs", detail: "'Optimizing Costs — browser use is powerful (and expensive!)' ran as the counter passed a million: the humans reviewing what their bot staff costs to run.", day: 1 },

    /* ── Day 2 — Wed Sep 16: the sales track ── */
    { t: "8:33 AM",  lane: "human", actor: "Lauren · Roshan · Matt", act: "Opened Day 2: the selling day", detail: "New broadcast, same mission: yesterday the fleet built a pop-up business — today the humans have to sell it. Sales track ahead: Sales Engineering, Sales, SDRs, Customer Support.", day: 2 },
    { t: "9:10 AM",  lane: "human", actor: "Sales Engineering (Amrita Venkatraman)", act: "Whiteboarded the customer demo arc", detail: "Diagram tool on screen: 'Grok Bot Template → Draft your team → Set your lineup → Compete!' — a four-step customer demo arc for selling the bot-built product, with notes on showing 'how we build a complicated product with bots.'", day: 2 },
    { t: "9:35 AM",  lane: "human", actor: "Amrita Venkatraman", act: "Built the Vision Deck pitch live", detail: "Google Slides on screen ('Amrita SpaceXAI Vision Deck'): a 'Why SpaceXAI?' narrative slide assembled and delivered in the same session — deck-building as a sales-engineering skill.", day: 2 }
  ],

  deliverables: [
    { id: "idea",    t: "10:50 AM", name: "Company concept: 'Pop-up OS' + business plan", status: "SHIPPED", detail: "Restaurant pop-up with partnering chef and venue; ops software as the product line." },
    { id: "marketing-bot", t: "11:45 AM", name: "Marketing bot (built live with Cody Sanchez)", status: "SHIPPED", detail: "Lead magnet and email capture prompts, seeded with the guest's distribution doctrine." },
    { id: "lander",  t: "4:20 PM",  name: "Domain + staging sign-up page", status: "STAGING", detail: "Domain purchased, lander and sign-up flow in a preview browser. No public launch on Day 1." },
    { id: "pipeline", t: "1:27 PM", name: "Multi-agent engineering pipeline", status: "SHIPPED", detail: "PR → deploy → review loop across tater, Sage, designer and legal-docs agents, via Cursor Cloud Agents." },
    { id: "menu",    t: "4:15 PM",  name: "Price menu with web-sourced imagery", status: "SHIPPED", detail: "Tiered offers with photos and pricing, pending the human taste call." },
    { id: "tickets", t: "4:22 PM",  name: "Ticket stubs, badges and lanyards", status: "SHIPPED", detail: "Night-market stub designs in CSS, tier A/B/C, OfficePass Plus badge. Designs only — no checkout yet." },
    { id: "email",   t: "4:28 PM",  name: "Email marketing channel", status: "SHIPPED", detail: "Tee Bot drafting and sending promo emails with best-seller banners." },
    { id: "seo",     t: "4:55 PM",  name: "SEO work order with dated execution plan", status: "SHIPPED", detail: "Keyword plan, page-weight and form fixes, FAQ — execution timeline dated through Thu Sep 17." }
  ],

  stats: {
    humanMoves: 8,
    aiMoves: 14,
    deliverables: 8,
    note: "Humans chose, ruled, debugged and approved. Bots proposed, produced, deployed and iterated. Every deliverable needed at least one of each."
  },

  footnote: "Session-demo artifacts (the sample venue company used by the PM and Founders presenters — cabins, glider flights, family bookings) are excluded: that data belonged to the teaching demos, not the trio's build."
};
