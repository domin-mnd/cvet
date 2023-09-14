import type { Amount, HSL, HSLA, RGB, RGBA } from "@cvet/types";
import { hslToRgb } from "../utils";

/**
 * Lighten a color by a given amount.
 * @param {HSL | HSLA} hsl The HSL color to lighten.
 * @param {Amount} amount The amount to lighten the color by. 0-100%
 * @returns {RGB | RGBA} The lightened color in RGB that can be then used as map.
 */
export function lighten(hsl: HSL | HSLA, amount: Amount): RGB | RGBA {
  const light = hsl.l + hsl.l * (amount / 100);
  return {
    ...hslToRgb({ ...hsl, l: light > 100 ? 100 : light }),
    ...("a" in hsl && { a: hsl.a }),
  };
}

/**
 * Darken a color by a given amount.
 * @param {HSL | HSLA} hsl The HSL color to darken.
 * @param {Amount} amount The amount to darken the color by. 0-100%
 * @returns {RGB | RGBA} The darkened color in RGB that can be then used as map.
 */
export function darken(hsl: HSL | HSLA, amount: Amount): RGB | RGBA {
  const light = hsl.l + hsl.l * (-amount / 100);
  return {
    ...hslToRgb({ ...hsl, l: light < 0 ? 0 : light }),
    ...("a" in hsl && { a: hsl.a }),
  };
}
