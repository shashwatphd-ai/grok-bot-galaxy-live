/* ============================================================================
   GROK BOT GALAXY LIVE — RESEARCH LAYER
   ----------------------------------------------------------------------------
   Tags Day 1 moments with entrepreneurship research from the scraped journal
   database (ETP, JBV, AMJ, JM, JF, JCR and others — all citations come from
   the curated CSV export; nothing here is invented).

   Self-initializing: load after data.js + products.js. It watches the page for
   re-renders (the NOW tab refreshes every 30s) and re-decorates.

   Two arrays:
     GG_RESEARCH_PAPERS — the citations.
     GG_RESEARCH_MOMENTS — which entry/feature on the page each paper belongs
     to, whether the evidence ALIGNS with the paper, EXTENDS it, or the live
     events PUSH BACK against it, and a one-line human explanation.
   ============================================================================ */

window.GG_RESEARCH_PAPERS = [
  {
    id: "underdog",
    title: "I'll prove you wrong! The underdog effect as an antecedent to entrepreneurial action",
    authors: "Michaelis, Spivack, Smith et al.",
    journal: "Journal of Business Venturing", year: "2026",
    doi: "10.1016/j.jbusvent.2026.106581",
    finding: "Being doubted triggers psychological reactance — the need to prove others wrong — which fuels persistence and both direct and indirect entrepreneurial action. Public skepticism can function as fuel."
  },
  {
    id: "passion-alertness",
    title: "Entrepreneurial passion, alertness and opportunity recognition: Affective-cognitive interactions in opportunity appraisal",
    authors: "Zhu, Adomako, Donbesuur, Ahsan et al.",
    journal: "International Small Business Journal", year: "2025",
    doi: "10.1177/02662426241298176",
    finding: "Opportunity recognition runs through entrepreneurial alertness, and passion shapes which opportunities founders actually recognize and appraise. Ideas are filtered by feeling as much as by analysis."
  },
  {
    id: "lean-startup-effectuation",
    title: "An exploration of the applicability of Lean Startup in small non-digital firms: an effectuation perspective",
    authors: "Solaimani, van Eck, Kievit, Koelemeijer",
    journal: "International Journal of Entrepreneurial Behavior & Research", year: "2022",
    doi: "10.1108/ijebr-04-2021-0270",
    finding: "Lean Startup's build-measure-learn loop does apply outside digital products, but works best combined with effectuation: start from available means, take affordable-loss steps, and let commitments grow with evidence."
  },
  {
    id: "b2i-marketing",
    title: "Business-to-Investor Marketing: The Interplay of Costly and Costless Signals",
    authors: "Nyilasy, Yi, Herhausen, Ludwig et al.",
    journal: "Journal of Marketing", year: "2025",
    doi: "10.1177/00222429241288464",
    finding: "Audiences and backers read two kinds of signals at once: costly signals (real traction, sunk effort) and costless ones (claims, stunts). Credibility comes from the interplay — costless signal alone wears thin."
  },
  {
    id: "persuading-investors",
    title: "Persuading Investors: A Video-Based Study",
    authors: "Hu & Ma",
    journal: "The Journal of Finance", year: "2025",
    doi: "10.1111/jofi.13471",
    finding: "Using machine learning on full startup pitch videos: persuasion lives in delivery — facial expression, tone, diction — not just content. Passionate, warm delivery measurably moves funding outcomes."
  },
  {
    id: "displayed-passion",
    title: "Exploring the benefits and risks of displayed passion in entrepreneurial pitches",
    authors: "Jin, Caza & Wu",
    journal: "Journal of Small Business Management", year: "2025",
    doi: "10.1080/00472778.2024.2306864",
    finding: "Displayed passion is a double-edged signal in venture financing: it can attract, but its effect is contradictory across studies and depends on the audience's regulatory focus. Showing fire has a cost."
  },
  {
    id: "venture-obsession",
    title: "When creation becomes fixation: venture obsession and agentic relationships",
    authors: "Peat & Perrmann-Graham",
    journal: "Journal of Small Business and Enterprise Development", year: "2024",
    doi: "10.1108/jsbed-06-2023-0266",
    finding: "Obsessive passion for a venture can distort the founder's relationships — including with the people and agents around the venture. Agentic relationships need watching, because the venture quietly becomes the only stakeholder."
  },
  {
    id: "legitimacy-judgment",
    title: "Why do good deeds go unnoticed? A perspective on the legitimacy judgment of social entrepreneurship",
    authors: "Zheng, Chen, Dai, Wu et al.",
    journal: "Entrepreneurship & Regional Development", year: "2022",
    doi: "10.1080/08985626.2022.2071995",
    finding: "Doing good work is not the same as being judged legitimate. Legitimacy is granted through how information is processed and presented by partners and audiences — proof has to be packaged to be seen."
  },
  {
    id: "b2i-transactive",
    title: "The meeting points of team entrepreneurial passion, transactive memory systems and team performance",
    authors: "Horvatinović, Mikic & Dabić",
    journal: "International Journal of Entrepreneurial Behavior & Research", year: "2024",
    doi: "10.1108/ijebr-04-2023-0383",
    finding: "Team performance improves when a team knows who knows what — transactive memory systems — especially alongside shared entrepreneurial passion. 'Who on the team holds which knowledge' is a performance lever."
  },
  {
    id: "peer-passion",
    title: "Peer effects on passion levels, passion trajectories, and outcomes for individuals and teams",
    authors: "Taggar, Domurath & Coviello",
    journal: "Journal of Business Venturing", year: "2024",
    doi: "10.1016/j.jbusvent.2024.106405",
    finding: "In newly formed teams, individuals' entrepreneurial passion shifts toward the average passion of their peers — teammates raise or drain each other's fire, and those trajectories predict outcomes."
  },
  {
    id: "paradoxical-leadership",
    title: "Leading through paradox: How and when lead founder paradoxical leadership navigates entrepreneurial tensions",
    authors: "Feng & Wang",
    journal: "Journal of Small Business Management", year: "2026",
    doi: "10.1080/00472778.2026.2643854",
    finding: "Founders who hold contradictions at once — control and autonomy, speed and care — navigate venture tensions through their effect on team dynamics. Either-or leadership is what breaks young ventures."
  }
];

window.GG_RESEARCH_MOMENTS = [
  {
    anchorEntry: "d1-1128",
    papers: [
      { id: "underdog", relation: "aligns", note: "Getting roasted online as fuel for building is the underdog effect, nearly verbatim: doubt creates reactance, reactance creates action." },
      { id: "b2i-marketing", relation: "pushes back", note: "Cody's costless-signal stunts (2.4M, 5.7M views) work for attention — this theory warns they need costly signals (real traction) underneath to become credible." }
    ]
  },
  {
    anchorEntry: "d1-1050",
    papers: [
      { id: "passion-alertness", relation: "extends", note: "The agents supplied the alertness — scanning and proposing concepts — while the humans supplied the affective filter that research says decides which ideas get recognized." },
      { id: "lean-startup-effectuation", relation: "aligns", note: "Choosing a pop-up with their own means and a public deadline is textbook effectuation: affordable loss first, contingencies later." }
    ]
  },
  {
    anchorEntry: "d1-1755",
    papers: [
      { id: "legitimacy-judgment", relation: "aligns", note: "The 'proof vault' is legitimacy-judgment theory applied by hand: audiences grant legitimacy based on packaged, verifiable proof, not good work itself." },
      { id: "venture-obsession", relation: "pushes back", note: "'Hire A-players and get out of their way' — applied to bots — is exactly the hands-off pattern this paper warns turns agentic relationships unhealthy." }
    ]
  },
  {
    anchorEntry: "d1-1619",
    papers: [
      { id: "persuading-investors", relation: "extends", note: "Designs judged by feel on a livestream mirror this paper's finding: delivery — the visual and emotional layer — moves outcomes as much as content." }
    ]
  },
  {
    anchorEntry: "d1-1615",
    papers: [
      { id: "displayed-passion", relation: "pushes back", note: "The trio's on-air enthusiasm is displayed passion — research finds it attracts and distracts depending on the audience, so the warmth is a strategy, not a side effect." }
    ]
  },
  {
    anchorEntry: "d1-1555",
    papers: [
      { id: "b2i-transactive", relation: "aligns", note: "The fleet widget is a transactive memory system made visible — who knows what, who is working — which research ties directly to team performance." },
      { id: "peer-passion", relation: "aligns", note: "Ten bots archived in one day is peer effects at machine speed: the roster's passion level ripples through every teammate, human and bot." }
    ]
  },
  {
    anchorEntry: "d1-1633",
    papers: [
      { id: "paradoxical-leadership", relation: "aligns", note: "The Maturity Curve's 'staff a function with a team of bots' demands paradoxical leadership — holding control and autonomy at once — which research links to venture-team health." }
    ]
  },
  {
    anchorFeature: "booking-signup",
    papers: [
      { id: "lean-startup-effectuation", relation: "extends", note: "Staging a sign-up page before launch, with no checkout, is affordable-loss experimentation in a non-digital business — the exact context this paper tests Lean Startup in." }
    ]
  },
  {
    anchorFeature: "ticket-badge",
    papers: [
      { id: "b2i-marketing", relation: "aligns", note: "Ticket stubs and badges on stream are costless signals until the night market makes them costly — real seats sold, real food served." }
    ]
  }
];

/* ── engine ─────────────────────────────────────────────────────────────── */
(function () {
  var CSS = ""
    + ".gg-cite-chip{display:inline-flex;align-items:center;gap:6px;margin:8px 0 2px;"
    + "font-size:12px;font-weight:700;color:#4fc3f7;background:rgba(79,195,247,.1);"
    + "border:1px solid rgba(79,195,247,.4);border-radius:16px;padding:4px 12px;"
    + "cursor:pointer;user-select:none;font-family:inherit}"
    + ".gg-cite-chip:hover{background:rgba(79,195,247,.2)}"
    + ".gg-pop{position:absolute;z-index:9999;max-width:430px;background:#1a1a26;"
    + "border:1px solid #4fc3f7;border-radius:12px;padding:14px 16px;"
    + "box-shadow:0 12px 40px rgba(0,0,0,.6);font-size:13.5px;line-height:1.6;color:#d5d5e4}"
    + ".gg-pop h4{margin:0 0 4px;font-size:14px;color:#e8e8f0;line-height:1.4}"
    + ".gg-pop .gg-meta{color:#9a9ab0;font-size:12px;margin-bottom:6px}"
    + ".gg-pop .gg-rel{display:inline-block;font-size:10px;font-weight:800;letter-spacing:1px;"
    + "text-transform:uppercase;border-radius:10px;padding:2px 8px;margin-bottom:8px}"
    + ".gg-rel.aligns{background:rgba(56,224,123,.15);color:#38e07b}"
    + ".gg-rel.extends{background:rgba(79,195,247,.15);color:#4fc3f7}"
    + ".gg-rel.pushesback{background:rgba(255,45,120,.15);color:#ff2d78}"
    + ".gg-pop .gg-doi{display:inline-block;margin-top:8px;font-size:12.5px}"
    + ".gg-pop .gg-x{position:absolute;top:8px;right:12px;cursor:pointer;color:#9a9ab0}"
    + ".gg-pop hr{border:0;border-top:1px dashed #26263a;margin:12px 0}";

  var REL_LABEL = { "aligns": "aligns with research", "extends": "extends the research", "pushesback": "pushes back on research" };
  var paperById = {};
  (window.GG_RESEARCH_PAPERS || []).forEach(function (p) { paperById[p.id] = p; });

  function chipFor(moment) {
    var papers = (moment.papers || []).filter(function (p) { return paperById[p.id]; });
    if (!papers.length) return null;
    var chip = document.createElement("button");
    chip.className = "gg-cite-chip";
    chip.type = "button";
    var rels = papers.map(function (p) { return (moment.papers.find(function (m) { return m.id === p.id; }) || {}).relation; });
    var label = papers.length === 1 ? "research link" : papers.length + " research links";
    chip.textContent = "\uD83D\uDD0D " + label;
    chip.title = "How this moment connects to published research";
    chip.addEventListener("click", function (ev) {
      ev.stopPropagation();
      var existing = document.getElementById("gg-pop");
      if (existing) { existing.remove(); if (existing.__for === chip) return; }
      var pop = document.createElement("div");
      pop.className = "gg-pop"; pop.id = "gg-pop"; pop.__for = chip;
      pop.innerHTML = papers.map(function (p, i) {
        var rel = (moment.papers.find(function (m) { return m.id === p.id; }) || {}).relation || "aligns";
        var cls = rel.replace(/\s/g, "");
        return (i ? "<hr>" : "")
          + '<span class="gg-rel ' + cls + '">' + (REL_LABEL[cls] || rel) + "</span>"
          + "<h4>" + p.title + "</h4>"
          + '<div class="gg-meta">' + p.authors + " — " + p.journal + ", " + p.year + "</div>"
          + "<div>" + p.finding + "</div>"
          + '<div class="gg-moment" style="margin-top:6px;color:#c9c9da">' + (moment.papers[i] ? moment.papers[i].note : "") + "</div>"
          + '<a class="gg-doi" href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">Open DOI: ' + p.doi + " \u2197</a>";
      }).join("");
      var x = document.createElement("span"); x.className = "gg-x"; x.textContent = "\u00D7";
      x.addEventListener("click", function (e) { e.stopPropagation(); pop.remove(); });
      pop.appendChild(x);
      document.body.appendChild(pop);
      var r = chip.getBoundingClientRect();
      var left = Math.min(Math.max(10, r.left + window.scrollX), window.scrollX + document.documentElement.clientWidth - 450);
      pop.style.left = left + "px";
      pop.style.top = (r.bottom + window.scrollY + 8) + "px";
    });
    return chip;
  }

  function decorate() {
    if (!window.GG_RESEARCH_MOMENTS) return;
    document.querySelectorAll(".gg-pop").forEach(function (p) { if (!p.__pinned) p.remove(); });
    window.GG_RESEARCH_MOMENTS.forEach(function (m) {
      var host = null;
      if (m.anchorEntry) {
        var e = document.getElementById("e-" + m.anchorEntry);
        if (e) host = e;
      }
      if (m.anchorFeature) {
        var cand = document.querySelectorAll('[data-feature-id="' + m.anchorFeature + '"], [id="feature-' + m.anchorFeature + '"], [id="' + m.anchorFeature + '"]');
        if (cand.length) host = cand[0];
        else {
          var paper0 = paperById[(m.papers[0] || {}).id];
          var cards = document.querySelectorAll("#tab-product .entry, #tab-product .feature, #product .feature, .feature-card, #product .tile");
          for (var i = 0; i < cards.length; i++) {
            if (cards[i].textContent.indexOf(featureNameFor(m)) !== -1) { host = cards[i]; break; }
          }
        }
      }
      if (!host || host.querySelector(".gg-cite-chip")) return;
      var chip = chipFor(m);
      if (chip) host.appendChild(chip);
    });
  }

  function featureNameFor(m) {
    var fid = m.anchorFeature;
    var f = (window.GG_FEATURES || []).find(function (x) { return x.id === fid; });
    return f ? f.name : fid;
  }

  function boot() {
    var st = document.createElement("style");
    st.textContent = CSS;
    document.head.appendChild(st);
    decorate();
    var t = null;
    new MutationObserver(function () {
      if (t) clearTimeout(t);
      t = setTimeout(decorate, 250);
    }).observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", function () {
      var p = document.getElementById("gg-pop");
      if (p && !p.__pinned) p.remove();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
