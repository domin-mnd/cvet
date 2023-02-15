import type { HSL, RGB } from "../types";
import { hslToRgb } from "../utils";

/**
 * Invert a color.
 * @param {RGB} rgb The RGB color to invert. 
 * @returns {RGB} The inverted color in RGB that can be then used as map.
 */
export function invert(rgb: RGB): RGB {
  return {
    r: 255 - rgb.r,
    g: 255 - rgb.g,
    b: 255 - rgb.b,
  }
}