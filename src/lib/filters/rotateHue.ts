import type { Degrees, HSL, RGB } from "../types";
import { hslToRgb } from "../utils";

/**
 * Rotate the hue of a color by a given amount.
 * @param {HSL} hsl The HSL color to rotate the hue of.
 * @param {Degrees} degrees The amount to rotate the hue by.
 * @returns {RGB} The rotated hue color in RGB that can be then used as map.
 */
export function rotateHue(hsl: HSL, degrees: Degrees): RGB {
  return hslToRgb({ ...hsl, h: hsl.h + degrees });
}
