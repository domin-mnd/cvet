import type { HEX } from "@cvet/types";
import { padHEX } from "./padHEX";

/** Generate a random HEX color. */
export const randomColor = () => {
  const random = padHEX((((1 << 24) * Math.random()) | 0).toString(16), 6);
  return `#${random}` as HEX;
};
