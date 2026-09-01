import type { Service } from "@/types";
import { photos } from "@/content/photos";

export const services: Service[] = [
  {
    id: "campaigns",
    number: "01",
    title: "Campaign Operations",
    summary: "Brief to live, without the twelve-tab scramble.",
    description:
      "We map how a campaign actually ships — assets, audiences, approvals, UTM, QA — and put an agent on the stalls. Humans keep the brief and the brand call. The rest stops dying in Slack threads.",
    image: photos.campaign.src,
    imageAlt: photos.campaign.alt,
  },
  {
    id: "routing",
    number: "02",
    title: "Lead & Lifecycle Agents",
    summary: "Every inbound has a next step, not a shared inbox.",
    description:
      "Agents score, route, and nudge against your real rules — territory, product, SLA — then escalate when a human should take the call. No generic chatbot on the pricing page pretending to be a closer.",
    image: photos.routing.src,
    imageAlt: photos.routing.alt,
  },
  {
    id: "content",
    number: "03",
    title: "Content Systems",
    summary: "Variants, localization, and channel cuts from one source.",
    description:
      "We build agents that turn an approved master into the cuts each channel needs — subject lines, ad copy, landing blocks — with a trail back to the brief. Editors stay on voice. The factory stops being a weekend job.",
    image: photos.content.src,
    imageAlt: photos.content.alt,
  },
  {
    id: "deploy",
    number: "04",
    title: "Managed Growth Ops",
    summary: "From pilot to always-on, with someone on the hook.",
    description:
      "We host, watch, and retune. Change windows that respect launch days. When the funnel shifts, the agent shifts — without a six-month agency retainer that only produces decks.",
    image: photos.deploy.src,
    imageAlt: photos.deploy.alt,
  },
];
