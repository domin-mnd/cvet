import type { Degrees, HSL, HSLA, RGB, RGBA } from "@cvet/types";
import { hslToRgb } from "../utils";

/**
 * Rotate the hue of a color by a given amount.
 * @param {HSL | HSLA} hsl The HSL color to rotate the hue of.
 * @param {Degrees} degrees The amount to rotate the hue by.
 * @returns {RGB | RGBA} The rotated hue color in RGB that can be then used as map.
 */
export function rotateHue(hsl: HSL | HSLA, degrees: Degrees): RGB | RGBA {
  return {
    ...hslToRgb({ ...hsl, h: hsl.h + degrees }),
    ...("a" in hsl && { a: hsl.a }),
  };
}
