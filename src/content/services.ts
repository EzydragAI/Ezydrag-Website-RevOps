import type { Service } from "@/types";
import { photos } from "@/content/photos";

export const services: Service[] = [
  {
    id: "audit",
    number: "01",
    title: "Production Readiness Audit",
    summary: "Find out, in writing, why the AI isn't trusted yet.",
    description:
      "A 2–3 week fixed-scope review of your existing RevOps AI — architecture, data pipeline, evaluation coverage, governance, and cost at scale. Every initiative gets screened for regulatory exposure. You leave with a prioritized, risk-sequenced roadmap that's yours to keep, whether or not you engage us further.",
    image: photos.campaign.src,
    imageAlt: photos.campaign.alt,
  },
  {
    id: "pilot-to-production",
    number: "02",
    title: "Pilot-to-Production",
    summary: "We harden the initiative you already have until it earns trust.",
    description:
      "Built in-house, by a freelancer, or by another agency — we take the pilot and rebuild what's needed: data readiness for messy production inputs, automated evaluation that catches failures before your customers do, human-in-the-loop design for high-stakes calls, and monitoring that flags drift in minutes. Priced against a defined ROI case, not billed by the hour.",
    image: photos.routing.src,
    imageAlt: photos.routing.alt,
  },
  {
    id: "retainer",
    number: "03",
    title: "Reliability & Governance Retainer",
    summary: "The team that keeps watching after everyone else moves on.",
    description:
      "AI systems don't stay reliable on their own — models update, data shifts, usage grows. We run continuous monitoring and evaluation of your production AI, respond when something breaks, and deliver a quarterly reliability and regulatory-exposure report your leadership and compliance teams can actually use.",
    image: photos.deploy.src,
    imageAlt: photos.deploy.alt,
  },
  {
    id: "governance",
    number: "04",
    title: "Governance by Design",
    summary: "The regulatory screen almost nobody runs at design time.",
    description:
      "Every initiative that touches hiring, pay, performance, or financial approval gets a design-stage exposure check — including EU AI Act high-risk categories and the transparency rules already in force. If a regulator or auditor will one day ask who approved this, we make sure the answer exists before you build, not after.",
    image: photos.content.src,
    imageAlt: photos.content.alt,
  },
];
