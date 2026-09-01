import type { Product } from "@/types";
import { photos } from "@/content/photos";

export const products: Product[] = [
  {
    id: "ezyreachz",
    name: "ezyreachz",
    tagline: "AI Campaign Desk",
    description:
      "Turns a brief into scheduled, tagged, QA’d campaigns across mail, ads, and social — then flags the asset that never got legal.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.reach.src,
    imageAlt: photos.reach.alt,
    href: "/#products",
  },
  {
    id: "ezyfunnelz",
    name: "ezyfunnelz",
    tagline: "AI Lead Router",
    description:
      "Captures inbound, applies your routing rules, and keeps the SLA honest — so a hot lead does not wait on whoever opened Slack first.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.funnel.src,
    imageAlt: photos.funnel.alt,
    href: "/#products",
  },
  {
    id: "ezyattribz",
    name: "ezyattribz",
    tagline: "AI Attribution Clerk",
    description:
      "Stitches UTMs, CRM stages, and spend into a trail a human can defend — not a black-box score nobody trusts in the Monday meeting.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.attrib.src,
    imageAlt: photos.attrib.alt,
    href: "/#products",
  },
  {
    id: "ezylifecyclez",
    name: "ezylifecyclez",
    tagline: "AI Nurture Desk",
    description:
      "Keeps the sequence honest after the first click — waits, branches, and the quiet follow-up that usually dies in a shared sheet.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.lifecycle.src,
    imageAlt: photos.lifecycle.alt,
    href: "/#products",
  },
  {
    id: "ezycreativez",
    name: "ezycreativez",
    tagline: "AI Variant Bench",
    description:
      "Cuts an approved master into the sizes and lines each channel needs, with a trail back to the brief for the editor who still owns voice.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.creative.src,
    imageAlt: photos.creative.alt,
    href: "/#products",
  },
  {
    id: "ezyinboxz",
    name: "ezyinboxz",
    tagline: "AI Reply Clerk",
    description:
      "Reads the inbound pile, drafts the next step in your voice, and escalates when a human should take the thread.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.inbox.src,
    imageAlt: photos.inbox.alt,
    href: "/#products",
  },
  {
    id: "ezyaudiencz",
    name: "ezyaudiencz",
    tagline: "AI Segment Desk",
    description:
      "Builds and refreshes audiences from the events you already have — no weekend export, no mystery list that sales cannot explain.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.audience.src,
    imageAlt: photos.audience.alt,
    href: "/#products",
  },
  {
    id: "ezylaunchz",
    name: "ezylaunchz",
    tagline: "AI Launch QA",
    description:
      "Walks the go-live checklist — UTM, pixels, legal, the missing crop — and holds the send until the stall is named.",
    price: "₹2499/mo",
    status: "coming-soon",
    image: photos.launch.src,
    imageAlt: photos.launch.alt,
    href: "/#products",
  },
];
