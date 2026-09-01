export const processSteps = [
  {
    number: "01",
    title: "Hear the stall",
    body: "We sit with the people who actually ship — media, lifecycle, RevOps. We draw the stalls: the brief that never leaves Figma, the lead that sits, the report nobody believes.",
  },
  {
    number: "02",
    title: "Write the job",
    body: "The agent gets your voice, your routing rules, and your stack. It does not get a persona. It gets a job: move the campaign, flag the exception, leave a trail.",
  },
  {
    number: "03",
    title: "Pilot on one loop",
    body: "A single channel or funnel runs beside the old process. The team keeps a kill switch. We tune until they would rather keep it than go back to the spreadsheet.",
  },
  {
    number: "04",
    title: "Leave it on",
    body: "We host, watch, and iterate. When the offer or the stack shifts, the agent shifts. You get a named operator — not a kickoff that goes quiet after launch week.",
  },
] as const;

export const audiences = [
  {
    title: "B2B SaaS",
    body: "Inbound routing, trial nudges, and expansion plays that currently live in a founder’s inbox.",
  },
  {
    title: "Agencies",
    body: "Client campaigns that should not depend on one coordinator remembering every UTM.",
  },
  {
    title: "Ecommerce",
    body: "Lifecycle, restock, and abandoned-intent loops without hiring another ops shift.",
  },
  {
    title: "Marketplaces",
    body: "Seller onboarding, listing QA, and buyer follow-up that does not wait on a single analyst.",
  },
  {
    title: "Media & events",
    body: "Registration, reminder, and sponsor fulfillment with a trail you can show finance.",
  },
  {
    title: "RevOps teams",
    body: "The glue between ads, CRM, and billing — so a stage change is not a Slack archaeology project.",
  },
] as const;

export const outcomes = [
  { value: "24/7", label: "Agents on the loop", detail: "Nights, weekends, and the hour after the webinar." },
  { value: "4", label: "Core growth loops", detail: "Campaigns, routing, content, attribution — then custom." },
  { value: "1", label: "Named operator", detail: "Someone accountable after the pilot, not a silent Slack." },
  { value: "0", label: "Chatbot theatre", detail: "No widget dropped on pricing and called transformation." },
] as const;

export const faqs = [
  {
    q: "Do you replace our CRM or ad accounts?",
    a: "No. Agents sit beside HubSpot, Salesforce, Meta, Google, and the inbox you already use. We integrate; we do not ask you to migrate the system of record.",
  },
  {
    q: "Is this a chatbot?",
    a: "A chat window is a surface, not the product. The product is a job: ship the campaign, route the lead, cut the variants, defend the numbers. If a loop does not need a conversation, it will not get one.",
  },
  {
    q: "How long is a typical pilot?",
    a: "Most pilots are four to eight weeks on a single loop — one channel or one inbound path — with a named cohort. You keep the old path running until the team asks to switch it off.",
  },
  {
    q: "Will you store our customer lists from this website?",
    a: "Do not send customer exports or ad-account credentials through the public form. Brief us on the operational loop. Production agents run inside your access controls — this marketing site is not that environment.",
  },
  {
    q: "What does managed growth ops mean?",
    a: "We host, monitor, and change the agent when the offer or the stack changes. You get coverage for the loops we own, plus a written trail of what the agent did.",
  },
] as const;

export const roles = [
  "Growth leads",
  "Lifecycle",
  "Media buyers",
  "RevOps",
  "Creative ops",
  "Founders",
] as const;
