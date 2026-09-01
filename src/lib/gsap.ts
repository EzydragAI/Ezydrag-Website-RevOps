"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
  CustomEase.create("ember", "0.165, 0.84, 0.44, 1");
  registered = true;
}

registerGsap();

export { gsap, ScrollTrigger, CustomEase };
