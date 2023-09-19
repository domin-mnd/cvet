import type { Amount, HSL, HSLA, RGB, RGBA } from "@cvet/types";
import { hslToRgb } from "../utilities";

/**
 * Saturate a color by a given amount.
 * @param {HSL | HSLA} hsl The HSL color to saturate.
 * @param {Amount} amount The amount to saturate the color by. 0-100%
 * @returns {RGB | RGBA} The saturated color in RGB that can be then used as map.
 */
export function saturate(hsl: HSL | HSLA, amount: Amount): RGB | RGBA {
  return {
    ...hslToRgb({ ...hsl, s: hsl.s * (amount / 100) }),
    ...("a" in hsl && { a: hsl.a }),
  };
}
