/* ============================================================================
   GROK BOT GALAXY LIVE — SCREENS DATA
   ----------------------------------------------------------------------------
   Key frames captured from the Day 1 replay, shown in the SCREENS gallery and
   linked from PRODUCT feature evidence. Served from ./screens/<file>.

   window.GG_SCREENS = [{
     id      : unique slug
     file    : "screens/<name>.png"
     t       : replay position (hh:mm:ss) — "find it in the replay" pointer
     wall    : approximate Pacific wall time
     title   : short title
     caption : what the viewer is looking at, 1–2 sentences
     feature : optional — feature id in products.js this screen belongs to
     kind    : "product" | "session" | "build" | "stage"
   }]
   ============================================================================ */

window.GG_SCREENS = [
  { id: "opening-trio", file: "screens/opening-trio.png", t: "00:00:56", wall: "9:07 AM", title: "The trio opens the day", caption: "Lauren, Roshan and Matt at the build table as the stream begins — no idea chosen yet.", kind: "stage" },
  { id: "onboarding", file: "screens/onboarding.png", t: "00:41:32", wall: "9:48 AM", title: "Creating your first bot", caption: "Grok Bot 101's onboarding: pick a job category — data & analysis, research & figures, workflows & routines — and the bot is named and scoped for you.", kind: "session", feature: null },
  { id: "marketplace", file: "screens/marketplace.png", t: "01:01:19", wall: "10:08 AM", title: "The bot Marketplace", caption: "Community-built bots with creator bylines and install buttons ('Lenny's APIs', 'Diana's Tips') — the app-store surface for agents.", kind: "session", feature: null },
  { id: "email-demo", file: "screens/email-demo.png", t: "01:21:06", wall: "10:28 AM", title: "Email negotiation, handled", caption: "A supplier email about a 500-unit winter shipment, with the bot drafting the confirmation and a logistics memo beside it.", kind: "session" },
  { id: "business-plan", file: "screens/business-plan.png", t: "02:00:40", wall: "11:07 AM", title: "The business-plan prompt", caption: "A full plan requested in one line — product, pricing tiers, marketing strategy, objectives — with a scoping checklist across marketing, sales, ops, finance and legal.", kind: "build" },
  { id: "idea-thread", file: "screens/idea-thread.png", t: "02:21:21", wall: "11:28 AM", title: "Where 'Pop-up OS' was chosen", caption: "The idea-selection thread: humans rejected the first directions, agents came back with candidates — food company, high-ticket sales, event-book, ticket-craft — and the restaurant pop-up won.", kind: "build" },
  { id: "cody-guest", file: "screens/cody-guest.png", t: "02:55:00", wall: "11:25 AM", title: "Cody Sanchez on distribution", caption: "The guest segment that set the go-to-market doctrine: sell to three people first, distribution is the moat, controversy marketing, keep a proof vault.", kind: "session" },
  { id: "eng-keynote", file: "screens/eng-keynote.png", t: "04:00:15", wall: "1:07 PM", title: "Introducing Grok Bot: the integration stack", caption: "Fully autonomous agents; GitHub, Notion, Figma and Slack connections; first-party Cursor Cloud Agents management; memory and routines.", kind: "session", feature: "agent-pipeline" },
  { id: "eng-debug", file: "screens/eng-debug.png", t: "04:59:36", wall: "2:06 PM", title: "Debugging a stuck cloud agent, live", caption: "steve diagnoses an agent 'still chasing the PR, not the spinner'; tater posts PR #10 to for-review via cursor.com/agents. The product spec line — events with date/time, sessions, venue, staff — is visible in this thread.", kind: "build", feature: "agent-pipeline" },
  { id: "pm-chat", file: "screens/pm-chat.png", t: "05:58:00", wall: "3:00 PM", title: "PM session: the 'Bot team' chat", caption: "The management demo — an analyst agent answering with linked data and an RFC — ran on sample venue data (cabins and glider flights), not the trio's restaurant build.", kind: "session" },
  { id: "fleet-26", file: "screens/fleet-26.png", t: "04:48:00", wall: "3:55 PM", title: "Fleet widget: 26 bots, 880 requests, 10 archived", caption: "The org's pulse in one widget — and proof the fleet churns staff: ten bots already retired by mid-afternoon.", kind: "build", feature: "fleet-widget" },
  { id: "price-menu", file: "screens/price-menu.png", t: "05:07:00", wall: "4:14 PM", title: "Price menu with web-sourced imagery", caption: "An agent assembling a tiered price menu from web reference images, ending with the human-in-the-loop question: 'Which one do you like?'", kind: "build", feature: "activities-menu" },
  { id: "signup-staging", file: "screens/signup-staging.png", t: "05:13:00", wall: "4:20 PM", title: "Staging sign-up page — the closest thing to a launch", caption: "Roughly forty-five minutes after the first wireframe, a booking sign-up flow (name, email, password, ZIP) in a preview browser. Staging only: the URL never appeared, nothing is publicly indexed.", kind: "build", feature: "booking-signup" },
  { id: "tickets-plush", file: "screens/tickets-plush.png", t: "05:14:00", wall: "4:21 PM", title: "Night-market ticket stubs and Grok Bot plush concepts", caption: "The pop-up's physical kit designed live: CSS ticket stubs with tier badges, and plush characters checked 'against the official art' and iterated.", kind: "build", feature: "ticket-badge" },
  { id: "teebot-email", file: "screens/teebot-email.png", t: "05:21:00", wall: "4:28 PM", title: "Tee Bot opens the email channel", caption: "Promo emails for the merch line, best-seller banners in, generic roundup formats deliberately out.", kind: "build", feature: "email-channel" },
  { id: "maturity-curve", file: "screens/maturity-curve.png", t: "05:26:00", wall: "4:33 PM", title: "The AI Maturity Curve", caption: "The keynote's framing chart: ask (chatbots) → do a task (copilots) → automate a job (a bot) → staff a function (a team of bots). xAI's product sits on the top rung.", kind: "session" },
  { id: "why-grokbot", file: "screens/why-grokbot.png", t: "05:30:00", wall: "4:37 PM", title: "'Why Grok Bot': the five pillars", caption: "Easy as iMessage · always-on 24/7 · uses your tools like you (computer use with your logins) · finishes the work · shareable templates.", kind: "session" },
  { id: "optimizing-costs", file: "screens/optimizing-costs.png", t: "05:43:00", wall: "4:50 PM", title: "Optimizing Costs — with 1M views watching", caption: "The honesty slide: what browser-using agents actually cost to run, shown while the broadcast crossed one million views.", kind: "session" },
  { id: "seo-workorder", file: "screens/seo-workorder.png", t: "05:48:00", wall: "4:55 PM", title: "The SEO work order", caption: "A bot-written growth plan with keyword targets, page fixes, and a dated execution timeline — shipped as a work order, not a report.", kind: "build", feature: "seo-work-order" },
  { id: "closing-guest", file: "screens/closing-guest.png", t: "08:17:00", wall: "5:24 PM", title: "Closing guest interview", caption: "The day's final segment: a remote guest with the build trio, before the stream closed at 1.1M views.", kind: "stage" }
];
