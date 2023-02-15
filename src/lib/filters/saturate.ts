import type { Amount, HSL, RGB } from "../types";
import { hslToRgb } from "../utils";

/**
 * Saturate a color by a given amount.
 * @param {HSL} hsl The HSL color to saturate.
 * @param {Amount} amount The amount to saturate the color by. 0-100%
 * @returns {RGB} The saturated color in RGB that can be then used as map.
 */
export function saturate(hsl: HSL, amount: Amount): RGB {
  return hslToRgb({ ...hsl, s: hsl.s * (amount / 100) });
}