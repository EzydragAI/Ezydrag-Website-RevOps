export const processSteps = [
  {
    number: "01",
    title: "Audit",
    body: "We assess what you have and tell you the truth about it, in writing. Data quality, evaluation coverage, ownership, cost at scale — plus a regulatory-exposure screen, before anything gets built.",
  },
  {
    number: "02",
    title: "Roadmap",
    body: "Scope, success metrics, and how those metrics are measured — agreed before build work starts. Risk-sequenced: quick wins and foundations first, high-stakes governance-first builds last.",
  },
  {
    number: "03",
    title: "Build",
    body: "Senior practitioners harden the system against the roadmap — evaluation layers, monitoring, human-in-the-loop for decisions that matter. No black box, no partner-sells-junior-delivers pyramid.",
  },
  {
    number: "04",
    title: "Verify",
    body: "We test against production-like conditions, not curated demo data, before calling anything done. Reliability metrics are written into the contract — if we miss them, that's ours to fix.",
  },
  {
    number: "05",
    title: "Sustain",
    body: "Live systems move into the reliability retainer — monitoring, evals, incident response, drift checks as models and regulations change. Or we hand over full documentation and you run it in-house.",
  },
] as const;

export const audiences = [
  {
    title: "VP RevOps",
    body: "You now own the AI governance layer, whether or not your stack was built with one. We build it with you — evaluation, monitoring, and a paper trail.",
  },
  {
    title: "CRO & sales leadership",
    body: "A forecast you can defend to the board, not a black-box score nobody in the Monday meeting fully believes.",
  },
  {
    title: "Marketing ops",
    body: "Campaign QA, attribution, and AI-drafted reporting with an accuracy benchmark — something that checks whether the checker is right.",
  },
  {
    title: "Customer success ops",
    body: "QBR generation and health scores with a fact-check step before AI-drafted commentary reaches a client-facing deck.",
  },
  {
    title: "Finance & compliance",
    body: "An audit trail for every AI-touched number, and a design-stage screen for anything nearing regulated territory.",
  },
  {
    title: "Mid-market revenue teams",
    body: "Too complex for a two-person automation shop, too specific for a framework built for 10,000-person enterprises. Built for exactly that gap.",
  },
] as const;

export const outcomes = [
  {
    value: "61%",
    label: "Revenue teams using AI",
    detail: "2026 industry surveys. Most of it stuck in tactical pilots nobody fully trusts.",
  },
  {
    value: "8%",
    label: "Run any AI workflow autonomously",
    detail: "The pilot-to-production cliff, measured inside a single function. It's the gap we close.",
  },
  {
    value: "80%",
    label: "AI projects that miss their ROI",
    detail: "RAND, MIT, and IDC converge on the same range. The model is rarely the problem — the system around it is.",
  },
  {
    value: "3–5×",
    label: "Typical infra cost overrun",
    detail: "The most-cited reason pilots die. Cost-at-scale projection is part of every audit we run.",
  },
] as const;

export const faqs = [
  {
    q: "We already tried an AI pilot and it didn't work. Fix it, or start over?",
    a: "In most cases, fix it. A failed pilot usually means the model was never the problem — the surrounding system was. The audit tells you exactly which parts are salvageable, in writing, before you spend anything on rebuilding.",
  },
  {
    q: "Why not just hire an in-house AI/ML engineer?",
    a: "You can, and eventually should for ongoing operations. But most mid-market companies can't justify a full in-house team for the initial hardening phase. We do that phase, then hand off cleanly or stay on as a retained partner — whichever you prefer.",
  },
  {
    q: "You're based in India — how does that work for us?",
    a: "The same way it works for hundreds of Western companies already working with senior, specialized teams based in India: overlapping working hours, transparent senior-led delivery, and pricing in your currency. Location is where we sit; the methodology is what you buy.",
  },
  {
    q: "What if the system still isn't reliable after your engagement?",
    a: "Reliability metrics are agreed upfront and written into the contract. If we don't hit them, that's on us to fix — not on you to accept. We get paid when it's reliable in production, not when we ship a demo.",
  },
  {
    q: "Do you handle AI regulatory compliance, like the EU AI Act?",
    a: "A regulatory-exposure screen is built into every engagement from day one. If an initiative touches hiring, pay, performance, or financial approval — or reaches anyone based in the EU — we tell you exactly what's required and by when. Before you build, not after an auditor asks.",
  },
  {
    q: "Do you only work with Salesforce, or HubSpot, or one CRM?",
    a: "We're platform-agnostic on purpose. Our job is making the AI layered on top of your stack reliable — not migrating your CRM. If a platform migration turns out to be the real blocker, we'll say so plainly and point you to a specialist for that piece.",
  },
] as const;

export const roles = [
  "Forecasting",
  "Scoring",
  "AI agents",
  "Reporting",
  "Evals",
  "Governance",
] as const;
