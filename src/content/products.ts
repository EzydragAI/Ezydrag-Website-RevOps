import type { Product } from "@/types";
import { photos } from "@/content/photos";

// Products are in development and intentionally unnamed. Each entry describes
// the capability area only — no working titles, no placeholder pricing.
export const products: Product[] = [
  {
    id: "forecast-reliability",
    title: "Forecast Reliability",
    focus: "Drift & trust monitoring",
    description:
      "Watches the AI behind your revenue forecast for drift and misses — and keeps the why behind every number leadership sees.",
    status: "coming-soon",
    image: photos.attrib.src,
    imageAlt: photos.attrib.alt,
  },
  {
    id: "scoring-evals",
    title: "Lead-Scoring Evals",
    focus: "Scores the scorer",
    description:
      "Measures your scoring model against actual closed-won outcomes — before sales bets a quarter on it.",
    status: "coming-soon",
    image: photos.funnel.src,
    imageAlt: photos.funnel.alt,
  },
  {
    id: "agent-observability",
    title: "Agent Observability",
    focus: "A trail for every action",
    description:
      "A defensible record of what your revenue agents did and why — flagged the moment one goes off-script.",
    status: "coming-soon",
    image: photos.reach.src,
    imageAlt: photos.reach.alt,
  },
  {
    id: "reporting-qa",
    title: "Reporting QA",
    focus: "Fact-check before send",
    description:
      "Checks AI-drafted QBRs and pipeline commentary against source data before they reach a client or the board.",
    status: "coming-soon",
    image: photos.lifecycle.src,
    imageAlt: photos.lifecycle.alt,
  },
  {
    id: "data-quality",
    title: "Pipeline Data Quality",
    focus: "Clean inputs, honest outputs",
    description:
      "Continuous checks on the CRM data your AI learns from — bad fields caught before they become bad forecasts.",
    status: "coming-soon",
    image: photos.audience.src,
    imageAlt: photos.audience.alt,
  },
  {
    id: "regulatory-screen",
    title: "Regulatory Screen",
    focus: "Governance at design time",
    description:
      "The design-stage exposure check for any AI touching hiring, pay, performance, or financial approval.",
    status: "coming-soon",
    image: photos.launch.src,
    imageAlt: photos.launch.alt,
  },
];
