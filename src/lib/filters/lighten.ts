import type { Amount, HSL, RGB } from "../types";
import { hslToRgb } from "../utils";

/**
 * Lighten a color by a given amount.
 * @param {HSL} hsl The HSL color to lighten.
 * @param {Amount} amount The amount to lighten the color by. 0-100% 
 * @returns {RGB} The lightened color in RGB that can be then used as map.
 */
export function lighten(hsl: HSL, amount: Amount): RGB {
  const light = hsl.l + (hsl.l * (amount / 100));
  return hslToRgb({ ...hsl, l: light > 100 ? 100 : light });
}

/**
 * Darken a color by a given amount.
 * @param {HSL} hsl The HSL color to darken.
 * @param {Amount} amount The amount to darken the color by. 0-100% 
 * @returns {RGB} The darkened color in RGB that can be then used as map.
 */
export function darken(hsl: HSL, amount: Amount): RGB {
  const light = hsl.l + (hsl.l * (-amount / 100));
  return hslToRgb({ ...hsl, l: light < 0 ? 0 : light });
}