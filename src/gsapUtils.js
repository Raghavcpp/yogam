import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ensureGsap() {
  if (typeof window === "undefined") return gsap;
  gsap.registerPlugin(ScrollTrigger);
  return gsap;
}
